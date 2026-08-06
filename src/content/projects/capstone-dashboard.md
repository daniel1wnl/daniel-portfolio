---
title: "iGrafx Release Dashboard"
category: "School / University"
type: "Team Capstone"
dates: "January–June 2023"
status: "Completed"
tech: [React, Node.js, Express, MongoDB, Azure MSAL, Jira API, GitLab API, SonarQube API]
github: "https://github.com/daniel1wnl/capstone-dashboard"
featured: true
description: "A six-person capstone project that unified Jira tasks, SonarQube quality metrics, and GitLab branch and pipeline data. I built the company-wide and user-specific project list pages and contributed unit testing and documentation."
---

# iGrafx Release Dashboard

A robust, full-stack Release Management Dashboard designed to streamline project oversight by unifying data from multiple DevOps platforms. This enterprise-grade application integrates **Jira**, **SonarQube**, and **GitLab** into a single, intuitive interface, enabling teams to track tasks, monitor code quality, and oversee CI/CD pipelines in real-time.

Developed as a **Senior Capstone Project** at Portland State University.

## 🚀 Key Features

- **Unified DevOps Integration**:
    - **Jira**: Real-time tracking of ticket status, summaries, and updates.
    - **SonarQube**: Immediate visibility into code smells, quality gate status, and reliability metrics.
    - **GitLab**: Monitoring of branch activity and CI/CD pipeline results.
- **Enterprise-Grade Authentication**: Secured with **Microsoft MSAL (Single Sign-On)** for seamless organizational access.
- **Interactive Project Management**:
    - Project-specific **Todo Lists** categorized by team (PM, Dev, QA).
    - **Automated Email Notifications**: Real-time alerts via Nodemailer when project tasks are updated.
    - **Dynamic Project Configuration**: Easily add and configure new projects with custom API queries.
- **Comprehensive Activity Logs**: Persistent tracking of project modifications for auditing and history.
- **Responsive Design**: Modern, high-performance UI built with **Material UI (MUI)**.

## 🛠️ Tech Stack

### Frontend
- **Framework**: React 18 (Vite)
- **UI Library**: Material UI (MUI)
- **State/Routing**: React Router 6, React Hook Form
- **Auth**: Azure MSAL Browser/React
- **Testing**: Vitest, React Testing Library

### Backend
- **Runtime**: Node.js, Express
- **Database**: MongoDB (Mongoose ODM)
- **Communication**: Axios (API Orchestration), Nodemailer (Notifications)
- **Logging**: Moment.js, Custom error/activity logging
- **Testing**: Jest

## 🏗️ System Architecture

The application follows a client-server architecture:
1.  **React Client**: Orchestrates the user experience, handling authentication redirects and rendering dynamic tool widgets.
2.  **Express Server**: Acts as an API gateway, aggregating data from Jira, GitLab, and SonarQube while managing project metadata in MongoDB.
3.  **DevOps APIs**: The backend communicates with external services using secured REST APIs to provide live project health data.

## 📋 Prerequisites

- Node.js (v16+)
- npm or yarn
- MongoDB instance (local or Atlas)
- Registered Azure AD application (for SSO functionality)
- Access tokens for Jira, GitLab, and SonarQube APIs

## ⚙️ Installation & Setup

### 1. Clone the Repository
```bash
git clone https://github.com/daniel1wnl/capstone-dashboard.git
cd capstone-dashboard
```

### 2. Backend Setup
```bash
cd server
npm install
```
*Create a `.env` file in the `server` directory with the following:*
```text
MONGO_PASSWORD=your_mongodb_password
GITLAB_PRIVATE_TOKEN=your_gitlab_token
JIRA_DOMAIN=your_jira_domain
JIRA_USERNAME=your_jira_email
JIRA_API_TOKEN=your_jira_token
SONAR_USERNAME=your_sonar_username
SONAR_PASSWORD=your_sonar_password
EMAIL_USER=your_gmail_for_notifications
AUTH_EMAIL_PASS=your_app_password
```
```bash
npm run dev
```

### 3. Frontend Setup
```bash
cd ../client
npm install
npm run dev
```

## 🧪 Testing & Documentation

### Running Tests
- **Backend**: `cd server && npm test`
- **Frontend**: `cd client && npm run test`

### Generating JSDoc
The project uses JSDoc for comprehensive code documentation.
- **Backend**: `cd server && npm run docs`
- **Frontend**: `cd client && npm run docs`
*Generated documentation can be found in the `/docs` folder of each directory.*

## 👤 Author

**Daniel Gregorio-Torres**
- [GitHub](https://github.com/daniel1wnl)
- [LinkedIn](https://www.linkedin.com/in/danielgregoriotorres/)

*Developed in collaboration with the PSU Capstone Team.*
