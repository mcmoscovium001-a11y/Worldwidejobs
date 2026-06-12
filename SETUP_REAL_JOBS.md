# 🚀 Setup Guide - Real Job Search Feature

This guide will help you set up the real job search feature that finds jobs on the internet.

## Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- RapidAPI Account (free)

## Step 1: Get a Free JSearch API Key

1. Go to https://rapidapi.com/liteapi-dev/api/jsearch
2. Click "Sign Up Free" (or log in if you have an account)
3. Click "Subscribe to Test"
4. Copy your API key from the dashboard

## Step 2: Set Up Environment Variables

1. Open the `.env` file in the WORLDWIDEJOBS folder
2. Replace `your_api_key_here_replace_me` with your actual API key
3. Save the file

```
JSEARCH_API_KEY=your_actual_api_key_here
PORT=3001
```

## Step 3: Install Dependencies

```bash
cd c:\Users\P\Desktop\WORLDWIDEJOBS
npm install
```

This installs:
- `express` - Web server
- `cors` - Allow frontend requests
- `axios` - Make HTTP requests
- `dotenv` - Load environment variables

## Step 4: Start the Backend Server

```bash
npm start
```

You should see:
```
🚀 Job Search Server running on http://localhost:3001
```

## Step 5: Use the Real Job Search

1. Open http://127.0.0.1:5500 in your browser
2. Log in or sign up
3. Go to Dashboard → Search Jobs tab
4. Use these buttons:
   - **🌐 Search Internet** - Search for jobs by keyword and location
   - **🎯 Find Jobs For My Career** - Get jobs matched to your CV skills

## Features

### 🌐 Search Internet Jobs
- Search any job title
- Filter by location
- Gets real jobs from job boards worldwide
- Shows salary, company, and job type

### 🎯 Career Matching
- Matches your CV skills to job requirements
- Shows match score (%)
- Prioritizes best fits first
- Pulls from your CV Builder data

### 📊 What You Get
- Job title, company, location
- Salary range
- Job description
- Direct link to apply
- Match score for career matches

## Troubleshooting

### ⚠️ "Backend server not running"
- Make sure you ran `npm start` in a terminal
- Check that the server is running on `http://localhost:3001`

### ⚠️ "JSEARCH_API_KEY not found"
- Check your `.env` file has the API key
- Make sure you didn't miss any characters when copying the key
- The `.env` file must be in the same folder as `server.js`

### ⚠️ No jobs found
- Try a different job title (e.g., "Python Developer")
- Try a different location
- Check your internet connection
- Verify your API key is valid

### ⚠️ "npm: command not found"
- Install Node.js from https://nodejs.org
- Restart your terminal after installing

## API Limits

JSearch free tier allows:
- 100 requests per month
- Each search returns up to 10 jobs

For more requests, upgrade on RapidAPI.

## How It Works

1. **Frontend** (index.html)
   - User enters search query and location
   - Clicks "Search Internet" or "Find Jobs For My Career"
   - Sends request to backend server

2. **Backend** (server.js)
   - Receives search parameters
   - Calls JSearch API with your API key
   - Processes and transforms results
   - Sends back job listings

3. **Frontend Again**
   - Displays real jobs in a grid
   - Shows match scores for career matches
   - User can click to apply or view details

## Next Steps

- Add more job sources (Indeed, LinkedIn, etc.)
- Save favorite jobs to database
- Set up job notifications
- Deploy backend to cloud (Heroku, AWS, etc.)

## Support

If you encounter issues:
1. Check the browser console for errors (F12)
2. Check the terminal where server.js is running
3. Verify your API key is correct
4. Make sure `.env` file exists in the right location

---

**Happy job hunting! 🎉**
