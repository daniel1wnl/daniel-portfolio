# Running the Portfolio Locally

This guide explains how to install, start, view, and stop the Daniel portfolio website on Windows using PowerShell.

## 1. Open PowerShell

Open Windows Terminal or PowerShell.

Change into the portfolio project directory:

```powershell
Set-Location -LiteralPath "G:\My Drive\Projects\websites\daniel-portfolio"
```

Confirm that you are in the correct directory:

```powershell
Get-Location
Get-ChildItem
```

The directory should contain files such as:

- `package.json`
- `astro.config.mjs`
- `src`
- `public`

All npm commands in this guide should be run from this directory.

## 2. Check Node.js

This project requires Node.js 22.12.0 or newer.

```powershell
node --version
npm --version
```

If `node` or `npm` is not recognized, install a current Node.js LTS release and reopen PowerShell.

## 3. Install Dependencies

The first time you run the project, install the exact dependency versions recorded in `package-lock.json`:

```powershell
npm ci
```

You normally only need to repeat this after dependencies change or after deleting `node_modules`.

### Google Drive note

This project currently lives in a Google Drive synchronized directory. Google Drive can sometimes lock files while npm creates the many small files under `node_modules`, producing errors such as `EBADF`, `EPERM`, or `TAR_ENTRY_ERROR`.

If that happens:

1. Pause Google Drive synchronization temporarily.
2. Delete the incomplete `node_modules` directory.
3. Run `npm ci` again.

For the most reliable development setup, clone or copy the repository to a nonsynchronized folder such as:

```text
C:\Dev\daniel-portfolio
```

Then run all commands from that copy. Git should be used to move source changes between computers; `node_modules` should never be committed or synchronized.

## 4. Start the Development Server

From the `daniel-portfolio` directory, run:

```powershell
npm run dev
```

Astro will print an address similar to:

```text
Local: http://localhost:4321/
```

Open this address in a browser:

[http://localhost:4321/](http://localhost:4321/)

The website is hosted only on your computer while this command is running. It is not publicly accessible on the internet.

Astro watches the source files while the development server runs. Saved changes should appear automatically in the browser, although an occasional manual refresh may be necessary.

## 5. Stop the Development Server

Return to the PowerShell window running Astro and press:

```text
Ctrl+C
```

If PowerShell asks whether to terminate the batch job, confirm it.

Closing the terminal also stops the local website.

## 6. Create a Production Build

To verify that the deployable website builds successfully:

```powershell
npm run build
```

Astro writes the generated static website to:

```text
daniel-portfolio\dist
```

The `dist` directory is generated output and should not be edited manually.

## 7. Preview the Production Build

After running `npm run build`, preview the generated production site:

```powershell
npm run preview
```

Astro will print the preview URL, usually:

```text
http://localhost:4321/
```

Press `Ctrl+C` to stop the preview server.

## Quick Start

For later sessions, the normal workflow is:

```powershell
Set-Location -LiteralPath "G:\My Drive\Projects\websites\daniel-portfolio"
npm run dev
```

Then visit [http://localhost:4321/](http://localhost:4321/).

If dependencies have not been installed yet, run `npm ci` before `npm run dev`.

## Local Changes Versus the Public Website

- Saving a file updates the local development website while `npm run dev` is running.
- Saving a file does not update GitHub.
- Saving a file does not update the public website.
- To update GitHub, commit and push the changes.
- If Cloudflare Pages is connected to the GitHub repository, a push to its configured production branch should trigger a deployment.

