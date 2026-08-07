# Resume Source

The maintained general-purpose resume sources are:

- `Daniel-Gregorio-Torres-Resume.tex` - English
- `Daniel-Gregorio-Torres-Resume-ES.tex` - Spanish

Use the appropriate language file as the starting point for job-specific versions:

1. Copy the master `.tex` file.
2. Keep all facts and dates accurate.
3. Reorder skills and bullets around the job's priorities.
4. Add relevant terminology only when it truthfully describes existing experience.
5. Compile and visually inspect the tailored PDF before applying.

The portfolio serves both language versions from:

```text
public/resume/Daniel-Gregorio-Torres-Resume.pdf
public/resume/Daniel-Gregorio-Torres-Resume-ES.pdf
```

Keep matching repository copies in `resume/`. When either source changes:

1. Regenerate the corresponding PDF.
2. Confirm that it remains one page and visually inspect the complete layout.
3. Verify its title, author, subject, and keyword metadata.
4. Confirm that its text can be extracted cleanly for applicant-tracking systems.
5. Replace both PDF copies and verify that their SHA-256 hashes match.

Do not place private notes, job descriptions, or draft tailoring material in the public website directory.
