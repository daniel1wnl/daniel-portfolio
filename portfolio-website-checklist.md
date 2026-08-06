# Portfolio Website Completion Checklist

This checklist tracks the final repository, content, security, metadata, and release work needed before the portfolio is considered fully updated.

## Public Documentation

- [x] Replace the Astro starter README with a portfolio-specific README.
- [x] Document the live website, purpose, technology stack, structure, local development, and Cloudflare deployment workflow.
- [x] Document the privacy boundaries used for internal work and homelab content.
- [x] Add hero photograph attribution and clarify code, content, branding, and third-party asset licensing.
- [ ] Mark `daniel-portfolio-gameplan.md` as a historical planning document or add a current-status notice.

## Website Content

- [x] Update the Contact section with broader personal and professional interests.
- [x] Correct the Riot Leaderboards Cloud Run stack so it consistently lists Python, Flask, Docker, Google Cloud, Bootstrap/Jinja, the Riot Games API, and Pytest.
- [x] Remove the unfinished contribution note from the iGrafx project entry.
- [x] Confirm all job titles consistently use `IT Support Specialist` where referring to the current official role.

## Resume

- [x] Replace the iGrafx homepage claim with the confirmed company-wide project list, user-specific project list, unit testing, and documentation contributions.
- [ ] Add useful PDF metadata such as title and author to the LaTeX source.
- [x] Generate a new one-page PDF after the LaTeX changes.
- [x] Replace both repository PDF copies and verify that their hashes match.
- [x] Confirm that the final PDF remains readable by text-extraction and applicant-tracking systems.

## Dependencies and Build Security

- [ ] Upgrade Astro and related dependencies to patched versions.
- [ ] Review any Astro major-version migration requirements before upgrading.
- [ ] Run `npm audit` and confirm that actionable vulnerabilities are resolved.
- [ ] Run a clean `npm ci` followed by `npm run build`.
- [ ] Confirm the production build completes without warnings or errors.

## Metadata and Sharing

- [ ] Configure the production site URL in Astro.
- [x] Update the page title to use `IT Support Specialist` consistently.
- [ ] Add a canonical URL.
- [ ] Add Open Graph title, description, URL, type, and preview image metadata.
- [ ] Add Twitter/X card metadata.
- [ ] Create a minimal 1200-by-630 social preview image for LinkedIn and other platforms.
- [ ] Test the deployed URL with social-sharing preview tools after release.

## Asset Cleanup

- [ ] Remove or replace the unused default Astro `favicon.svg`.
- [ ] Confirm `favicon.ico`, `favicon.png`, and the Apple touch icon all use the current black D branding.
- [ ] Confirm the navigation logo remains sharp and readable at desktop and mobile sizes.

## Final Quality Assurance

- [ ] Test navigation, hover, focus, and mobile-menu behavior.
- [ ] Test the website on at least one real phone, one laptop, and one large desktop viewport.
- [ ] Verify all GitHub, credential, LinkedIn, photograph-credit, email, and resume links.
- [ ] Verify keyboard navigation and visible focus states.
- [ ] Verify text contrast and reduced-motion behavior.
- [ ] Confirm the live Cloudflare deployment matches the approved local production build.
- [ ] Obtain one external review from someone seeing the portfolio for the first time.
- [ ] Update the original `checklist.md` after this finishing checklist is complete.

## Release

- [x] Review the final Git diff for private or company-specific information.
- [ ] Commit the finishing changes with descriptive history-focused messages.
- [ ] Push `main` to GitHub.
- [ ] Confirm the Cloudflare deployment succeeds.
- [ ] Perform one final check of the live website and downloadable resume.
