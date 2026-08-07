# Daniel Gregorio-Torres — Personal Portfolio

The source code and public-safe content for my bilingual personal portfolio website: [daniel.gregoriotorres.com](https://daniel.gregoriotorres.com/). English is the default language, and the complete Spanish version is available at [`/es/`](https://daniel.gregoriotorres.com/es/).

The site presents my professional experience, education, technical skills, public projects, private homelab work, and sanitized overviews of internal tools I have built. It supports my resume, LinkedIn profile, and job applications while protecting employer data and private infrastructure details.

## Technology

- [Astro](https://astro.build/) for the static website and content collections
- [Tailwind CSS](https://tailwindcss.com/) for styling and responsive layouts
- Astro internationalization routing for synchronized English and Spanish pages
- Markdown for structured project and internal-work content
- Cloudflare Pages for hosting and continuous deployment

The production site is statically generated and does not require a database or application server.

## Website Sections

- Internal & Work Projects
- Experience
- Education
- Homelab Workshop
- University, client-sponsored, and personal projects
- Technical Skills
- Resume
- Contact

Internal work and homelab entries are intentionally limited to public-safe descriptions. Proprietary source code, production data, employee and customer information, internal URLs, credentials, security configurations, and identifiable screenshots are not included.

## Repository Structure

```text
daniel-portfolio/
├── public/
│   ├── brand/                 # Public logo assets
│   ├── images/                # Responsive website imagery
│   └── resume/                # Resume served by the website
├── resume/                    # LaTeX resume source and matching PDF
├── src/
│   ├── components/            # Reusable Astro components
│   ├── content/
│   │   ├── case-studies/      # Public-safe internal work summaries
│   │   └── projects/          # University and personal projects
│   ├── layouts/               # Shared document layout and metadata
│   ├── i18n/                  # English/Spanish UI copy and content translations
│   ├── pages/                 # English root and Spanish /es/ routes
│   └── styles/                # Global styles and design tokens
├── LOCAL-DEVELOPMENT.md       # Detailed Windows setup instructions
├── portfolio-website-checklist.md
├── astro.config.mjs
└── package.json
```

## Local Development

Requirements:

- Node.js 22.12 or newer
- npm

Run these commands from the repository root—the directory containing `package.json`:

```powershell
npm ci
npm run dev
```

Astro will normally host the English site at [http://localhost:4321/](http://localhost:4321/) and the Spanish site at [http://localhost:4321/es/](http://localhost:4321/es/).

Create and inspect a production build with:

```powershell
npm run build
npm run preview
```

For complete Windows instructions, Google Drive troubleshooting, and an explanation of local versus public changes, see [LOCAL-DEVELOPMENT.md](./LOCAL-DEVELOPMENT.md).

## Deployment

Cloudflare Pages hosts the public website. Pushing an approved commit to the connected `main` branch triggers a new production build and deployment. Local edits do not change the live website until they are committed and pushed to GitHub and the Cloudflare deployment succeeds.

## Resume Maintenance

The maintained LaTeX sources are [`resume/Daniel-Gregorio-Torres-Resume.tex`](./resume/Daniel-Gregorio-Torres-Resume.tex) for English and [`resume/Daniel-Gregorio-Torres-Resume-ES.tex`](./resume/Daniel-Gregorio-Torres-Resume-ES.tex) for Spanish. After generating either PDF, its repository copy and public download must remain identical:

- `resume/Daniel-Gregorio-Torres-Resume.pdf`
- `public/resume/Daniel-Gregorio-Torres-Resume.pdf`
- `resume/Daniel-Gregorio-Torres-Resume-ES.pdf`
- `public/resume/Daniel-Gregorio-Torres-Resume-ES.pdf`

Additional resume instructions are available in [`resume/README.md`](./resume/README.md).

## Media and Licensing

The Portland hero photograph is by [Justin Shen](https://unsplash.com/@shenny_visuals) and is used under the [Unsplash License](https://unsplash.com/license). The original photograph is available on [Unsplash](https://unsplash.com/photos/a-large-neon-sign-on-top-of-a-building-k0VeQ6sXHGg).

Unless otherwise noted, the MIT License applies to the original website source code. Personal writing, resume content, personal branding, and logo assets are not offered for reuse under that license. Third-party assets remain subject to their respective licenses.
