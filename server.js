const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname)));

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'Server is running' });
});

// Search jobs endpoint
app.get('/api/jobs/search', async (req, res) => {
    try {
        const { query, location, page = 1 } = req.query;
        
        if (!query) {
            return res.status(400).json({ error: 'Search query is required' });
        }

        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: query,
                location: location || 'Remote',
                page: page,
                num_pages: 1
            },
            headers: {
                'x-rapidapi-key': process.env.JSEARCH_API_KEY,
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        
        // Transform JSearch results to match our app format
        const jobs = response.data.data.map(job => ({
            id: job.job_id,
            title: job.job_title,
            company: job.employer_name,
            location: job.job_location,
            salary: job.job_salary_currency && job.job_salary_max 
                ? `${job.job_salary_currency} ${job.job_salary_min}-${job.job_salary_max}`
                : 'Competitive',
            description: job.job_description,
            type: job.job_employment_type || 'Full-time',
            tags: [
                job.job_job_title?.split(' ')[0] || 'Job',
                job.job_employment_type || 'Full-time',
                job.job_apply_method || 'Apply'
            ].filter(Boolean),
            url: job.job_apply_link,
            source: 'JSearch'
        }));

        res.json({
            success: true,
            data: jobs,
            total: response.data.data.length
        });
    } catch (error) {
        console.error('Error fetching jobs:', error.message);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to fetch jobs'
        });
    }
});

// Categorized job search - find jobs matching user's career
app.post('/api/jobs/career-match', async (req, res) => {
    try {
        const { skills, experience, location, jobTitle } = req.body;
        
        if (!skills && !jobTitle) {
            return res.status(400).json({ error: 'Skills or job title required' });
        }

        const searchQuery = jobTitle || skills.split(',')[0];
        
        const options = {
            method: 'GET',
            url: 'https://jsearch.p.rapidapi.com/search',
            params: {
                query: searchQuery,
                location: location || 'Remote',
                page: 1,
                num_pages: 1
            },
            headers: {
                'x-rapidapi-key': process.env.JSEARCH_API_KEY,
                'x-rapidapi-host': 'jsearch.p.rapidapi.com'
            }
        };

        const response = await axios.request(options);
        
        const matchedJobs = response.data.data.map(job => ({
            id: job.job_id,
            title: job.job_title,
            company: job.employer_name,
            location: job.job_location,
            salary: job.job_salary_currency && job.job_salary_max 
                ? `${job.job_salary_currency} ${job.job_salary_min}-${job.job_salary_max}`
                : 'Competitive',
            description: job.job_description,
            type: job.job_employment_type || 'Full-time',
            matchScore: calculateMatchScore(job, skills, experience),
            tags: [job.job_job_title?.split(' ')[0] || 'Job'],
            url: job.job_apply_link,
            source: 'JSearch'
        })).sort((a, b) => b.matchScore - a.matchScore);

        res.json({
            success: true,
            data: matchedJobs,
            total: matchedJobs.length
        });
    } catch (error) {
        console.error('Error in career match:', error.message);
        res.status(500).json({
            success: false,
            error: error.message || 'Failed to match jobs'
        });
    }
});

// Calculate how well a job matches user's profile
function calculateMatchScore(job, skills, experience) {
    let score = 0;
    const description = (job.job_description || '').toLowerCase();
    
    if (skills) {
        const userSkills = skills.toLowerCase().split(',');
        userSkills.forEach(skill => {
            if (description.includes(skill.trim())) {
                score += 20;
            }
        });
    }
    
    if (experience) {
        const expYears = parseInt(experience);
        if (expYears > 0) {
            score += 15;
        }
    }
    
    score += Math.random() * 10; // Add some variation
    return Math.min(score, 100);
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`🚀 Job Search Server running on http://localhost:${PORT}`);
    console.log(`Make sure JSEARCH_API_KEY is set in your .env file`);
});
