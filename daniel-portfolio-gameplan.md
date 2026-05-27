# Daniel Gregorio-Torres Personal Portfolio Website Gameplan

## Project Goal

Build a professional personal portfolio website for:

**Daniel Gregorio-Torres**  
**IT Specialist & Systems Developer**  
Portland / Beaverton, Oregon  

Primary domain plan:

```text
gregoriotorres.com
└── daniel.gregoriotorres.com
```

The website should act as a professional portfolio, resume companion, project showcase, and personal branding site.

The main goal is to show that Daniel is not only an IT support professional, but also someone who builds practical systems, web apps, scripts, internal tools, and homelab projects.

The site should communicate:

```text
I am an IT professional who builds practical systems.
```

This portfolio should support future job applications, personal branding, and hands-on learning.

---

## Recommended Tech Stack

Use:

```text
Astro + Tailwind CSS
```

### Why Astro?

Astro is a strong fit because this website is mostly content-focused:

- Portfolio pages
- Project cards
- Case studies
- Resume page
- Homelab/workshop section
- Future blog/writeups
- Fast static pages
- Easy deployment
- Great performance and SEO
- Supports Markdown content
- Can use React components later if needed

### Why Tailwind CSS?

Tailwind CSS is a good fit because:

- It makes styling fast
- It keeps design consistent
- It works well with Astro
- It is good for clean technical/professional layouts
- It helps avoid writing a huge custom CSS file

---

## Website Identity

Recommended title/branding:

```text
Daniel Gregorio-Torres
IT Specialist & Systems Developer
```

Alternative title options:

```text
IT Specialist focused on systems, automation, and internal tools
IT, automation, web apps, and homelab projects
IT Specialist | Systems Builder | Developer
```

Best overall positioning:

```text
IT-focused portfolio with development depth.
```

This avoids making the site feel like only an IT support page or only a developer portfolio. The strength is the mix of IT, development, automation, and systems thinking.

---

## Target Audience

The website should be written for:

- Future employers
- IT managers
- Sysadmin/network admin hiring teams
- Recruiters
- Technical peers
- People checking Daniel's resume links
- People looking at Daniel's GitHub or LinkedIn

The site should help them quickly understand:

- What Daniel does professionally
- What Daniel can build
- What Daniel is learning
- What tools Daniel has experience with
- How Daniel thinks about systems, documentation, security, and reliability

---

## Desired Style

The style should be a mix of:

```text
Professional corporate
+
Homelab/sysadmin workshop
```

Think of it like:

> A mechanic with a clean home shop showing both professional work and personal projects.

The site should feel:

- Clean
- Technical
- Organized
- Practical
- Trustworthy
- Slightly personal, but not too casual
- Security-aware
- Easy to scan

Avoid making it too flashy or overloaded with animations.

---

## Recommended Navigation

Use this top navigation:

```text
Home
Projects
Case Studies
Workshop
Experience
Resume
Contact
```

For a first version, this can all be on one page with anchor links:

```text
/#projects
/#case-studies
/#workshop
/#experience
/#resume
/#contact
```

Later, each section can become its own page.

---

## Version 1 Website Structure

Start with a single-page website.

Recommended layout:

```text
1. Hero
2. About / Positioning
3. Featured Work
4. Public Projects
5. Professional Case Studies
6. Workshop / Homelab
7. Experience
8. Skills
9. Resume
10. Contact
```

This is enough for a strong first version.

---

# Phase 1: Planning and Content Collection

## Step 1: Create a content inventory

Make a list of everything that could go on the site.

### Public GitHub Projects

School / University Projects:

```text
The-ChocAn-Simulator
riotLeaderboards-cloudRun
capstone-dashboard
```

Personal Projects:

```text
riotLeaderboards-dotenv
footballAPI-dotenv
YTdownloader
```

For each project, collect:

```text
Project name
Short description
Problem it solves
Tech used
What you built
What you learned
GitHub link
Screenshots, if available
Deployment link, if available
```

### Work / Internal Projects

These should be written as sanitized case studies.

Current and planned examples:

```text
Inventory Management System
Safety Inspection Web App
SOP Training Web App
Future Company Intranet
Work scripts and automation
```

For each internal project, collect:

```text
Project name
Problem
What you built
Tools used
Impact
What can be shared publicly
What must stay private
```

Do not publish source code, internal URLs, company screenshots, database schemas, credentials, employee info, or architecture details.

### Homelab / Workshop Projects

Collect safe, high-level information about your homelab.

Safe to share:

```text
General learning goals
Technologies used at a high level
Types of services tested
Skills practiced
Lessons learned
```

Do not share:

```text
Public IP addresses
Network diagrams
Hostnames
Firewall rules
VPN details
Reverse proxy configs
Exposed services
Admin portal screenshots
Service versions for public-facing systems
```

---

## Step 2: Decide on your first homepage copy

Draft a short hero section.

Example:

```text
Daniel Gregorio-Torres

IT Specialist & Systems Developer

I’m an IT professional based in the Portland, Oregon area with a background in computer science, internal tooling, automation, web applications, and hands-on infrastructure projects. I enjoy building practical systems that make work easier, more reliable, and easier to support.
```

Call-to-action buttons:

```text
View Projects
View Resume
GitHub
LinkedIn
Contact
```

---

## Step 3: Decide what contact information to show

Recommended:

```text
Professional email
LinkedIn
GitHub
Resume PDF
```

Avoid putting your phone number directly on the website.

Better option:

```text
daniel@gregoriotorres.com
```

This can forward to Gmail behind the scenes.

For the resume PDF, it is okay to include your phone number if you are actively job hunting, but the public webpage itself should avoid showing it directly.

---

# Phase 2: Set Up the Project

## Step 1: Install Node.js

Install the current LTS version of Node.js.

Check installation:

```bash
node -v
npm -v
```

---

## Step 2: Create the Astro project

Run:

```bash
npm create astro@latest
```

Suggested answers:

```text
Project name: daniel-portfolio
Template: Empty or Minimal
Install dependencies: Yes
Use TypeScript: Yes
```

Move into the folder:

```bash
cd daniel-portfolio
```

Run the development server:

```bash
npm run dev
```

Astro usually runs locally at:

```text
http://localhost:4321
```

---

## Step 3: Install Tailwind CSS

Use Astro's Tailwind integration:

```bash
npx astro add tailwind
```

Then run:

```bash
npm run dev
```

Confirm the site still works.

---

## Step 4: Initialize Git

```bash
git init
git add .
git commit -m "Initial Astro portfolio setup"
```

Create a GitHub repository, then connect it:

```bash
git remote add origin https://github.com/YOUR_USERNAME/daniel-portfolio.git
git branch -M main
git push -u origin main
```

---

# Phase 3: Recommended Project Structure

Use a clean structure like this:

```text
daniel-portfolio/
├── public/
│   ├── resume/
│   │   └── Daniel-Gregorio-Torres-Resume.pdf
│   └── images/
│       └── projects/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── SectionHeading.astro
│   │   ├── ProjectCard.astro
│   │   ├── CaseStudyCard.astro
│   │   ├── SkillGroup.astro
│   │   └── ExperienceItem.astro
│   ├── content/
│   │   ├── projects/
│   │   └── case-studies/
│   ├── layouts/
│   │   └── BaseLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── projects/
│   │   │   └── [slug].astro
│   │   └── case-studies/
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── README.md
```

For Version 1, you can skip individual project pages and just build everything on `index.astro`.

For Version 2, add the dynamic pages.

---

# Phase 4: Build the First Version

## Step 1: Create the base layout

Create:

```text
src/layouts/BaseLayout.astro
```

This layout should include:

```text
HTML head
Page title
Meta description
Global styles
Header
Main content slot
Footer
```

Important meta details:

```text
Title: Daniel Gregorio-Torres | IT Specialist & Systems Developer
Description: IT-focused portfolio for Daniel Gregorio-Torres, featuring systems work, web apps, automation, homelab projects, and professional case studies.
```

---

## Step 2: Build the header

Create:

```text
src/components/Header.astro
```

Header links:

```text
Home
Projects
Case Studies
Workshop
Experience
Resume
Contact
```

For Version 1, these can link to sections:

```text
#projects
#case-studies
#workshop
#experience
#resume
#contact
```

Keep it simple and sticky if you like.

---

## Step 3: Build the hero section

Create:

```text
src/components/Hero.astro
```

Hero should include:

```text
Name
Professional title
Short intro
Buttons
```

Recommended text:

```text
Daniel Gregorio-Torres

IT Specialist & Systems Developer

I’m an IT professional based in the Portland, Oregon area with a background in computer science, internal tooling, automation, web applications, and hands-on infrastructure projects. I enjoy building practical systems that make work easier, more reliable, and easier to support.
```

Buttons:

```text
View Projects
View Resume
GitHub
LinkedIn
Contact
```

---

## Step 4: Build the featured work section

This should be one of the strongest sections.

Possible featured items:

```text
Inventory Management System
Safety Inspection Web App
SOP Training Web App
iGrafx Deployment Dashboard
Homelab / Workshop
```

Each card should include:

```text
Project name
Type
Short description
Tech/skills
Impact
```

Example card:

```text
Inventory Management System
Internal Tool / IT + Development

Developed and deployed an internal inventory management system for Streimer’s shop team, supporting database-backed tracking, iPad/iPhone usage, automated weekly archiving, documentation, testing, and ongoing improvements.
```

---

## Step 5: Build the public projects section

Section title:

```text
Public Projects
```

Recommended grouping:

```text
School / University Projects
Personal Projects
```

School / University Projects:

```text
The-ChocAn-Simulator
riotLeaderboards-cloudRun
capstone-dashboard
```

Personal Projects:

```text
riotLeaderboards-dotenv
footballAPI-dotenv
YTdownloader
```

Each project card should include:

```text
Description
Tech used
What I learned
GitHub link
```

Do not list repo names only. Add context for each project.

---

## Step 6: Build the professional case studies section

Section title:

```text
Professional Case Studies
```

This is where internal work projects go.

Use this format:

```text
Problem
What I built
Skills used
Impact
Public note
```

Recommended case studies:

```text
Inventory Management System
Safety Inspection Web App
SOP Training Web App
Future Company Intranet
Work Automation Scripts
```

Example public note:

```text
This project is internal, so source code, screenshots, architecture, company-specific details, and private workflows are not public.
```

This shows professionalism and security awareness.

---

## Step 7: Build the workshop / homelab section

Section title options:

```text
Workshop
Homelab Workshop
Lab & Current Projects
```

Recommended section title:

```text
Workshop
```

Recommended copy:

```text
My workshop is where I test ideas, learn systems, and build projects outside of work. I use it to explore infrastructure, automation, networking, Linux, Docker, self-hosting, monitoring, and security-minded system design.

For security reasons, I do not publish detailed architecture diagrams, hostnames, IP ranges, firewall rules, VPN details, or exposed service information.
```

Safe focus areas:

```text
Self-hosting
Linux administration
Docker/containerized apps
Automation scripts
Network segmentation concepts
Monitoring and logging
Internal documentation
Local AI / agent systems
```

---

## Step 8: Build the experience section

Section title:

```text
Experience
```

Use a simplified version of the resume.

### IT Specialist - Streimer

```text
IT Specialist
Streimer — Portland, OR
June 2024 – Present

- Support internal users, systems, devices, and operational technology needs
- Develop internal tools and scripts to improve workflows
- Built and support an internal inventory management system used by shop employees on iPads and iPhones
- Create documentation, test features, and refine systems based on user feedback
- Work across IT support, software development, troubleshooting, and process improvement
```

### Software Engineer Intern - iGrafx

```text
Software Engineer Intern
iGrafx / Portland State University Capstone
January 2023 – June 2023

- Worked on a 6-person team to build an internal deployment dashboard
- Built React/Node.js features for deployment tracking and task visibility
- Integrated dashboard workflows with Jira, GitLab, and Azure authentication
- Contributed to testing, documentation, and project planning
```

---

## Step 9: Build the skills section

Organize skills by practical use.

Recommended layout:

```text
IT & Systems
Development
Infrastructure & Tools
Learning / Lab Focus
```

### IT & Systems

```text
Windows
macOS
Linux
Microsoft 365
Endpoint support
User support
Troubleshooting
Documentation
```

### Development

```text
JavaScript
TypeScript
Python
PowerShell
HTML
CSS
SQL
React
Node.js
Flask
```

### Infrastructure & Tools

```text
Docker
Git
GitHub
MongoDB
Azure
Google Cloud
AWS
Jira
```

### Learning / Lab Focus

```text
Networking
Systems administration
Automation
Cybersecurity fundamentals
Monitoring
Self-hosting
```

---

## Step 10: Build the resume section

Section title:

```text
Resume
```

Include:

```text
View Resume
Download Resume
```

Store the PDF in:

```text
public/resume/Daniel-Gregorio-Torres-Resume.pdf
```

Link to it with:

```text
/resume/Daniel-Gregorio-Torres-Resume.pdf
```

Consider creating a public version of the resume that uses a domain email and does not expose your phone number directly on the website page.

---

## Step 11: Build the contact section

Section title:

```text
Contact
```

Recommended copy:

```text
Want to connect about IT, systems work, automation, web apps, or infrastructure projects? Feel free to reach out.
```

Links:

```text
Email
LinkedIn
GitHub
```

Recommended public email:

```text
daniel@gregoriotorres.com
```

Avoid showing your phone number directly on the website.

---

# Phase 5: Add Content Files

Once the homepage works, move project content into Markdown files.

Example:

```text
src/content/projects/riot-leaderboards-cloudrun.md
```

Example Markdown structure:

```md
---
title: "riotLeaderboards-cloudRun"
category: "School / University"
type: "Web App"
tech:
  - Google Cloud Run
  - JavaScript
  - APIs
  - Node.js
github: "https://github.com/YOUR_USERNAME/riotLeaderboards-cloudRun"
featured: true
---

## Overview

Short project summary.

## Problem

What problem this project was trying to solve.

## What I Built

Main features and implementation details.

## What I Learned

What this project taught you.

## Links

- GitHub: link here
```

For internal case studies, use:

```text
src/content/case-studies/safety-inspection-webapp.md
```

Example:

```md
---
title: "Safety Inspection Web App"
type: "Internal Web App"
visibility: "Sanitized Case Study"
tech:
  - Web Development
  - Database Design
  - Internal Tools
featured: true
---

## Problem

The company needed a more consistent way to complete and manage safety inspections.

## What I Built

Developed an internal web application to support safety inspection workflows and make inspection records easier to complete, organize, and review.

## Skills Used

- Web development
- Database design
- Form workflows
- User feedback
- Testing
- Documentation
- Internal deployment/support

## Impact

Improved consistency, reduced manual tracking, and gave employees a more structured inspection process.

## Public Note

This project is internal, so source code, screenshots, architecture, company-specific details, and private workflows are not public.
```

---

# Phase 6: Design Guidelines

## Color and visual style

Recommended feel:

```text
Dark or light neutral background
Clean cards
Subtle borders
Professional accent color
Terminal/workshop-inspired details
Readable typography
```

Possible color vibe:

```text
Background: dark navy, charcoal, or off-white
Accent: blue, green, or amber
Text: high contrast
Cards: rounded corners, subtle border
```

Do not overdo neon hacker styling. Keep it professional.

## Typography

Use clear fonts.

Good options:

```text
Inter
Geist
IBM Plex Sans
Source Sans 3
```

Optional monospace accent:

```text
JetBrains Mono
IBM Plex Mono
```

Use monospace only for small technical labels, not the entire site.

## UI elements to include

Good elements:

```text
Project cards
Skill badges
Timeline for experience
Small status badges like Public, Internal, Case Study, Homelab
Section dividers
Resume button
GitHub/LinkedIn buttons
```

Avoid:

```text
Too many animations
Autoplay videos
Huge background effects
Fake terminal screens everywhere
Cluttered skill lists
```

---

# Phase 7: Deployment

Recommended hosting:

```text
Cloudflare Pages
```

Why:

- Good free tier
- Works well with static Astro sites
- Easy GitHub integration
- Good DNS support
- Great fit since you already own a custom domain
- Easy subdomain setup

Alternative options:

```text
Vercel
Netlify
GitHub Pages
```

## Cloudflare Pages deployment steps

1. Push your Astro project to GitHub.
2. Create or log in to Cloudflare.
3. Add the `gregoriotorres.com` domain to Cloudflare if it is not already there.
4. Go to Cloudflare Pages.
5. Connect your GitHub repository.
6. Set build settings:

```text
Framework preset: Astro
Build command: npm run build
Output directory: dist
```

7. Deploy the site.
8. Add custom domain:

```text
daniel.gregoriotorres.com
```

9. Confirm DNS records are created correctly.
10. Test the website.

---

# Phase 8: Domain Plan

Long-term family domain structure:

```text
gregoriotorres.com
├── daniel.gregoriotorres.com
├── bryan.gregoriotorres.com
└── cesar.gregoriotorres.com
```

Possible root domain later:

```text
gregoriotorres.com
```

Could become a simple family landing page:

```text
Gregorio-Torres

Daniel
Bryan
Cesar
```

Each name can link to a subdomain.

For now, focus only on:

```text
daniel.gregoriotorres.com
```

---

# Phase 9: Security and Privacy Rules

Do not publish:

```text
Phone number directly on website
Home address
Internal company screenshots
Internal source code
Private repo names if sensitive
Company network diagrams
Homelab architecture
Public IP addresses
Firewall rules
VPN details
Admin portals
Employee names
Client names
Ticket screenshots
Database schemas from work apps
Credentials
API keys
Environment variables
Vendor account details
Service versions for public-facing services
```

Safe to publish:

```text
High-level project summaries
Tools used
Problems solved
Impact
Lessons learned
Sanitized screenshots only if safe
Public GitHub links
Resume PDF
LinkedIn
Professional email
```

Use wording like:

```text
This project is internal, so source code, screenshots, architecture, company-specific details, and private workflows are not public.
```

This makes you look professional and security-aware.

---

# Phase 10: Suggested Build Order

Follow this order so the project does not become overwhelming.

## Milestone 1: Basic site running

Goal:

```text
Astro + Tailwind installed
Homepage working locally
GitHub repo created
```

Tasks:

```text
Create Astro project
Install Tailwind
Create BaseLayout
Create Header
Create Footer
Create simple homepage
Push to GitHub
```

Done when:

```text
npm run dev works
You can see your homepage locally
Code is pushed to GitHub
```

---

## Milestone 2: First homepage draft

Goal:

```text
A full single-page portfolio with placeholder content.
```

Tasks:

```text
Add hero section
Add about section
Add featured work section
Add projects section
Add case studies section
Add workshop section
Add experience section
Add skills section
Add resume/contact section
```

Done when:

```text
The site tells your story even if some project descriptions are still rough.
```

---

## Milestone 3: Real project content

Goal:

```text
Replace placeholders with real content.
```

Tasks:

```text
Write descriptions for public GitHub projects
Write sanitized internal case studies
Add homelab/workshop copy
Add resume PDF
Add GitHub/LinkedIn links
```

Done when:

```text
A recruiter or employer can understand your work without needing extra explanation.
```

---

## Milestone 4: Styling and polish

Goal:

```text
Make the site look professional and consistent.
```

Tasks:

```text
Refine spacing
Improve project cards
Add skill badges
Add experience timeline
Improve mobile layout
Add hover states
Add subtle visual details
Check readability
```

Done when:

```text
The website looks good on desktop and mobile.
```

---

## Milestone 5: Deploy

Goal:

```text
Website live at daniel.gregoriotorres.com.
```

Tasks:

```text
Push final code to GitHub
Deploy to Cloudflare Pages
Connect custom subdomain
Test links
Test resume download
Test mobile view
```

Done when:

```text
The live site is accessible from daniel.gregoriotorres.com.
```

---

## Milestone 6: Review and improve

Goal:

```text
Make the site stronger after seeing it live.
```

Tasks:

```text
Read every section out loud
Check spelling and grammar
Make sure nothing private is exposed
Ask someone else to review it
Test all links
Check GitHub links
Check LinkedIn link
Check resume PDF
```

Done when:

```text
The site feels ready to include on your resume.
```

---

# Recommended First Version Content Checklist

Use this checklist before launch.

```text
[ ] Name is correct
[ ] Title is clear
[ ] Location is included at a high level
[ ] GitHub link works
[ ] LinkedIn link works
[ ] Email link works
[ ] Resume PDF opens
[ ] Phone number is not exposed directly on the webpage
[ ] Public projects have descriptions
[ ] Work projects are sanitized
[ ] Homelab details are high-level and safe
[ ] No internal URLs are exposed
[ ] No IP addresses are exposed
[ ] No credentials or secrets are exposed
[ ] Site works on mobile
[ ] Site works on desktop
[ ] Site is deployed to daniel.gregoriotorres.com
```

---

# Suggested Content for Main Sections

## Hero

```text
Daniel Gregorio-Torres

IT Specialist & Systems Developer

I’m an IT professional based in the Portland, Oregon area with a background in computer science, internal tooling, automation, web applications, and hands-on infrastructure projects. I enjoy building practical systems that make work easier, more reliable, and easier to support.
```

## About

```text
I work at the intersection of IT support, systems administration, automation, and software development. My experience includes supporting users and devices, building internal tools, creating documentation, writing scripts, and developing web applications that improve real workflows.

Outside of work, I use my personal workshop and homelab to explore infrastructure, networking, self-hosting, automation, and security fundamentals.
```

## Workshop

```text
My workshop is where I test ideas, learn systems, and build projects outside of work. I use it to explore infrastructure, automation, networking, Linux, Docker, self-hosting, monitoring, and security-minded system design.

For security reasons, I do not publish detailed architecture diagrams, hostnames, IP ranges, firewall rules, VPN details, or exposed service information.
```

## Contact

```text
Want to connect about IT, systems work, automation, web apps, or infrastructure projects? Feel free to reach out.
```

---

# Future Expansion Ideas

You do not need these for Version 1. Keep them as future options.

## 1. Blog / Writeups

Not needed right now, but very valuable later.

Possible writeups:

```text
How I structure an IT documentation repo
How I troubleshoot browser redirect malware
How I organize a small IT team’s GitHub repo
How I use PowerShell for workstation inventory
What I learned building an internal inventory system
What I learned building a safety inspection web app
What I learned building an SOP training platform
How I approach homelab security without publishing private architecture
```

## 2. Individual project pages

Instead of only cards, each project can have its own page:

```text
/projects/inventory-management-system
/projects/safety-inspection-webapp
/projects/sop-training-webapp
/projects/capstone-dashboard
```

Each page can include:

```text
Overview
Problem
Solution
Tech stack
Features
Challenges
What I learned
Public/private note
Links
```

## 3. Case study pages

Create detailed but sanitized case studies for internal work projects.

This would be especially useful for future sysadmin, network admin, cybersecurity, or internal tools roles.

## 4. Project filtering

Add filters like:

```text
All
IT
Web App
Automation
Homelab
School
Professional
Cloud
```

This helps if the number of projects grows.

## 5. GitHub API integration

Later, the site could pull public GitHub repo information automatically.

Possible data:

```text
Repo name
Description
Stars
Languages
Last updated
Link
```

This is optional and not needed for Version 1.

## 6. Resume page

Instead of only linking a PDF, create a web version of the resume.

Possible page:

```text
/resume
```

It could include:

```text
Experience
Education
Skills
Certifications
Download PDF button
```

## 7. Certifications section

As you earn or pursue certifications, add a section for them.

Possible future certs:

```text
CompTIA A+
CompTIA Network+
CompTIA Security+
Microsoft certifications
Cisco CCNA
```

Only list certifications as earned if they are actually completed.

## 8. Homelab learning log

A private architecture should stay private, but you can safely share learning notes.

Examples:

```text
What I learned about VLANs
What I learned about backups
What I learned about Docker
What I learned about monitoring
What I learned about remote access security
```

Do not include sensitive diagrams or live configuration details.

## 9. Contact form

A contact form can be added later, but it should include spam protection.

Possible tools:

```text
Formspree
Cloudflare Turnstile
Netlify Forms
Custom serverless function
```

For Version 1, a simple email link is better.

## 10. Admin/CMS system

Later, if you want the portfolio itself to become a bigger web app, you could add a CMS or admin area.

Possible options:

```text
Decap CMS
TinaCMS
Sanity
Supabase-backed admin panel
Custom Next.js dashboard
```

Not needed for Version 1.

## 11. Visual project screenshots

Add screenshots only when safe.

For internal projects, screenshots must be sanitized.

Rules:

```text
No real employee names
No company-sensitive data
No internal URLs
No private records
No system architecture
No admin panels
No credentials
```

## 12. Family root landing page

Later, create:

```text
gregoriotorres.com
```

As a simple landing page linking to:

```text
daniel.gregoriotorres.com
bryan.gregoriotorres.com
cesar.gregoriotorres.com
```

This can wait until Daniel's site is complete.

---

# Final Recommendation

Build the first version as:

```text
Astro + Tailwind
Single-page portfolio
Professional corporate + homelab workshop style
Cloudflare Pages deployment
daniel.gregoriotorres.com custom subdomain
```

The site should show:

```text
IT skills
Development ability
Internal tool building
Automation mindset
Homelab learning
Security awareness
Professional experience
```

Do not overcomplicate Version 1.

The best first goal is:

```text
A clean, professional site that explains who Daniel is, what he builds, what he is learning, and how to contact him.
```
