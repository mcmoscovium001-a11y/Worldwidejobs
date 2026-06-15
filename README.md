# 🌍 WorldWideJobs - Global Job Platform

A modern, interactive job platform built with React 18 and Babel CDN for client-side JSX transpilation. No build tools required - runs directly in the browser!

## 🚀 Features

- **Smart Job Search** - Search jobs by title, company, and location with real-time filtering
- **User Authentication** - Sign up and login system with personalized dashboard
- **Job Applications** - Track your job applications with status updates (Pending, Approved, Rejected)
- **CV Builder** - Create and generate professional CVs with form-based input
- **Interview Schedule** - View and manage upcoming interview appointments
- **AI Career Assistant** - Chat with an AI assistant for career guidance and advice
- **Responsive Design** - Beautiful UI with modern gradients and smooth animations
- **Real-time Notifications** - Get feedback on your actions with notification toasts

## 🛠️ Technology Stack

- **React 18** - UI library via CDN (https://unpkg.com/react@18/)
- **ReactDOM 18** - DOM rendering via CDN
- **Babel Standalone** - Client-side JSX transpilation
- **CSS3** - Grid, Flexbox, and gradient-based styling
- **HTTP Server** - Served via `npx http-server`

## 🏃 Getting Started

### Option 1: Run with npm start (Backend + Frontend)

```bash
cd WORLDWIDEJOBS
npm install
npm start
```

Then open http://127.0.0.1:3001 in your browser.

### Option 2: Using HTTP Server

```bash
cd WORLDWIDEJOBS
npx http-server -p 5500
```

Then open http://127.0.0.1:5500 in your browser.

### Option 3: Using Live Server in VS Code

1. Install the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension
2. Right-click on `index.html` → "Open with Live Server"

### Option 3: Direct File Access

Simply open `index.html` in your web browser (works but may have some limitations with certain features).

## 📁 Project Structure

```
WORLDWIDEJOBS/
├── index.html          # Main application file (979 lines)
├── app.html            # Test version with simplified React setup
├── test.html           # Basic HTML test file
└── README.md           # This file
```

## ✨ Key Sections

### Landing Page
- Hero section with call-to-action buttons
- Features grid (Smart Search, Job Alerts, AI Assistant, CV Builder)
- Sign in and get started options

### Authentication
- Toggle between Login and Sign Up forms
- Form validation and user creation
- Personalized welcome message

### Dashboard
- **Search Jobs Tab**: Browse 5 sample jobs with real-time search/filter
- **Applied Tab**: Track 3 sample job applications with status
- **CV Builder Tab**: Fill form to generate professional CV
- **Interviews Tab**: View 2 scheduled interviews
- **AI Assistant Tab**: Chat with AI for career advice

### Job Details Modal
- Full job information display
- Skills and requirements
- Apply button with confirmation

## 💬 Sample Jobs

The application includes 5 sample jobs:
1. Senior Software Engineer @ Tech Corp (Remote)
2. Product Manager @ StartUp Inc (San Francisco, CA)
3. UX Designer @ Design Studio (Remote)
4. Data Scientist @ AI Solutions (New York, NY)
5. DevOps Engineer @ Cloud Systems (Remote)

## 🎨 UI/UX Design

- **Color Scheme**: Purple (#7c3aed), Blue (#2563eb), Green (#059669), Orange (#d97706)
- **Typography**: Segoe UI with responsive scaling
- **Animations**: Smooth transitions and fade-in effects
- **Layout**: CSS Grid for responsive design, Flexbox for components

## ⚙️ Architecture

- **Single-Page Application (SPA)** with client-side routing using React state
- **Component-based structure** with reusable UI elements
- **React Hooks** for state management (useState, useEffect, useRef)
- **Mock data** for jobs, applications, and interviews
- **AI responses** using randomized mock responses

## 🔧 Development Notes

### No Build Process Required
This application uses Babel CDN (`@babel/standalone`) for JSX transpilation directly in the browser. This means:
- No npm install needed
- No build step required
- Works in any modern browser
- Perfect for rapid prototyping and development

### Browser Console
You may see a warning: "You are using the in-browser Babel transformer. Be sure to precompile your scripts for production". This is expected in development mode.

## 📝 State Management

The main `WorldWideJobs` component manages:
- Current page (landing, auth, dashboard)
- User information
- Active dashboard tab
- Job search queries and filters
- Selected job for modal display
- Chat messages
- Form data (auth, CV)
- Notifications

## 🎯 Future Enhancements

- Backend integration for real job data
- User authentication with database
- Email notifications
- Advanced filtering and sorting
- Integration with real job APIs
- Production build with Webpack/Vite
- Mobile-responsive improvements
- Dark mode support

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repository and submit pull requests.

---

**Live Preview**: http://127.0.0.1:5500 (when running HTTP server)

**GitHub Repository**: https://github.com/mcmoscovium001-a11y/Worldwidejobs
