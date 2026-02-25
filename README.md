# redalert1741.org

The official website for **Red Alert Robotics — FIRST Team 1741**, built with [Hugo](https://gohugo.io/) and deployed to [GitHub Pages](https://pages.github.com/).

## 🚀 Quick Start

### Prerequisites

- [Hugo Extended](https://gohugo.io/installation/) (v0.142.0+)
- [Node.js](https://nodejs.org/) (v20+)

### Local Development

```bash
# Install dependencies
npm install

# Start dev server with live reload
hugo server -D
```

The site will be available at `http://localhost:1313/`.

### Build for Production

```bash
hugo --minify
```

Output goes to the `public/` directory.

## 📁 Project Structure

```
├── .github/workflows/    # GitHub Actions CI/CD
├── assets/css/            # Tailwind CSS source
├── content/               # Markdown content (pages, blog posts, etc.)
├── data/                  # Structured data (team info, sponsors, etc.)
├── layouts/               # Hugo templates
│   ├── _default/          # Base templates (single, list)
│   ├── partials/          # Reusable components (header, footer)
│   └── index.html         # Homepage
├── static/                # Static files (images, favicon)
├── hugo.toml              # Hugo configuration
└── tailwind.config.js     # Tailwind CSS configuration
```

## ✏️ Adding Content

### New Blog Post

```bash
hugo new blog/my-new-post.md
```

Then edit the generated file in `content/blog/`. Set `draft: false` when ready to publish.

### Editing Pages

All content lives in the `content/` directory as Markdown files with YAML front matter. Edit them directly or use the CMS (coming soon).

## 🛠️ Tech Stack

| Component | Tool |
|---|---|
| Static Site Generator | [Hugo](https://gohugo.io/) |
| CSS Framework | [Tailwind CSS](https://tailwindcss.com/) |
| CI/CD | [GitHub Actions](.github/workflows/deploy.yml) |
| Hosting | [GitHub Pages](https://pages.github.com/) |
| CMS | Decap CMS *(planned)* |

## 🚢 Deployment

Pushing to `master` automatically triggers a GitHub Actions workflow that builds the site and deploys it to GitHub Pages. No manual steps required.

> **Setup:** In your repository settings, go to **Pages** → **Build and deployment** → set source to **GitHub Actions**.

## 📝 License

© Red Alert Robotics, FIRST Team 1741
