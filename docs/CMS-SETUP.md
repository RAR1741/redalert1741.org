# CMS Setup Guide

This guide explains how to set up and use the Decap CMS content editor for the Red Alert Robotics website.

## How It Works

The website uses **Decap CMS** — a Git-based content management system. When you edit content through the CMS:

1. You log in with your **GitHub account**
2. You make edits in a friendly visual editor
3. Changes are saved as commits to the Git repository
4. GitHub Actions automatically rebuilds and deploys the site

No coding knowledge needed! ✅

---

## First-Time Setup (Admin)

The CMS authentication is already configured. It uses **Netlify as an OAuth proxy** to handle GitHub login. This has been set up with:

- A **GitHub OAuth App** registered under the RAR1741 organization
- A **Netlify site** linked to the OAuth app that handles the auth handshake
- The `site_domain` in `static/admin/config.yml` pointing to the Netlify site

> **How it works:** When you click "Login with GitHub," the CMS opens a popup to `api.netlify.com/auth`, which looks up the Netlify site by domain, finds the stored GitHub OAuth credentials, and handles the OAuth code exchange. The CMS receives an access token and uses it with the `repo` from `config.yml` to make GitHub API calls.

### If You Need to Recreate the OAuth Setup

1. **Create a GitHub OAuth App** at [github.com/settings/developers](https://github.com/settings/developers):
   - **Application name:** `Red Alert CMS`
   - **Homepage URL:** `https://redalert1741.org`
   - **Authorization callback URL:** `https://api.netlify.com/auth/done`
   - Copy the **Client ID** and generate a **Client Secret**

2. **Link it in Netlify:**
   - Log into [Netlify](https://www.netlify.com/)
   - Go to your site → **Site Settings → Access Control → OAuth → Install Provider**
   - Select **GitHub**, paste your **Client ID** and **Client Secret**

3. **Update `config.yml`** (only if the Netlify site domain changes):
   ```yaml
   backend:
     name: github
     repo: RAR1741/redalert1741.org
     site_domain: your-netlify-site.netlify.app
   ```

### Local Testing (No OAuth Needed)

For development/testing, you can run the CMS locally without OAuth:

```bash
npx decap-server
```

Then in a separate terminal:

```bash
hugo server -D
```

Visit `http://localhost:1313/admin/` — the CMS will connect to the local proxy and write directly to your files.

---

## Adding CMS Users

Any member of the [RAR1741 GitHub organization](https://github.com/RAR1741) with **write access** to the `redalert1741.org` repository can use the CMS. To add a new editor:

1. Go to the repo's **Settings → Collaborators**
2. Add their GitHub username with **Write** role
3. They can now log in at `/admin/`

---

## Using the CMS

### Accessing the CMS

1. Go to `https://your-site-url/admin/` (note the trailing slash)
2. Click **Login with GitHub**
3. Authorize the OAuth app if prompted

### Creating a Blog Post

1. In the CMS sidebar, click **Blog Posts**
2. Click **New Blog Post**
3. Fill in:
   - **Title** — The post headline
   - **Publish Date** — When the post should be dated
   - **Description** — Short summary (shown in listings)
   - **Tags** — Comma-separated (e.g., `announcement, competition`)
   - **Body** — Write your post in the visual editor or switch to Markdown mode
4. Click **Save** → this creates a draft PR on GitHub
5. When ready, change status to **Ready** and click **Publish**

### Adding a Robot

1. Click **Robots** → **New Robot**
2. Fill in the year, game name, description, and details
3. Upload a photo if available
4. Publish when ready

### Editing Existing Pages

1. Click **Pages** in the sidebar
2. Select the page to edit (Homepage, About, Contact, etc.)
3. Make changes and save

### Managing Sponsors

1. Click **Settings** → **Sponsors**
2. Edit sponsor tiers, add/remove sponsors, upload logos
3. Save changes

### Managing Team Info

1. Click **Settings** → **Team Info**
2. Update social links, team details, etc.

---

## Editorial Workflow

The CMS uses an **editorial workflow** — changes go through three stages:

| Stage | What Happens |
|---|---|
| **Draft** | A new branch is created with your changes |
| **In Review** | A pull request is opened for review |
| **Ready** | Approved and ready to publish |

When you click **Publish**, the PR is merged into `master` and the site automatically rebuilds.

This means:
- ✅ Changes can be reviewed before going live
- ✅ Nothing breaks without review
- ✅ Full history of every change in Git

---

## Media / Image Uploads

- Upload images through the CMS media library
- Images are stored in `static/images/uploads/`
- Supported formats: JPG, PNG, SVG, WebP, GIF
- **Tip:** Compress images before uploading for faster page loads

---

## Troubleshooting

| Problem | Solution |
|---|---|
| "Login failed" | Make sure your GitHub account has write access to the repo |
| Changes not showing | Wait 1–2 minutes for GitHub Actions to rebuild the site |
| CMS not loading | Check that you're at `/admin/` (with trailing slash) |
| Local testing | Run `npx decap-server` alongside `hugo server -D` |
