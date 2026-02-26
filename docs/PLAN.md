# redalert1741.org — Static Site Rebuild Plan

## Current State

- **Existing site:** WordPress-powered at `www.redalert1741.org`
- **Content:** Hero section, scrimmage registration links, spiritwear, basic team description
- **Theme:** "Theme of 96" WordPress theme
- **Repo:** Essentially empty (README only)
- **Team:** FIRST Robotics Team 1741 — Red Alert Robotics, Center Grove High School, Greenwood, IN

---

## Recommended Tech Stack

### Static Site Generator: **Hugo**

| Why Hugo? | |
|---|---|
| ⚡ Fastest build times of any SSG | Builds in milliseconds, even with hundreds of pages |
| 📦 Single binary, no dependencies | No Node.js runtime needed for builds (simplifies CI) |
| 📚 Excellent documentation & community | Huge ecosystem of themes and examples |
| 🎓 Student-friendly | Simple content model (Markdown files + front matter) |
| 🔧 Built-in features | Image processing, menus, taxonomies, shortcodes — no plugins needed |

### CMS: **Decap CMS** (formerly Netlify CMS)

| Why Decap CMS? | |
|---|---|
| 🏆 Most established Git-based CMS | Large community, actively maintained |
| 📂 Content stored in Git | All content lives as Markdown/YAML in the repo — no database |
| 🔐 GitHub OAuth built-in | Team members log in with their GitHub accounts |
| 🖥️ Admin UI | `/admin` panel for editing content without touching code |
| 🆓 Completely free | No hosted service fees |
| 🔌 Drop-in setup | Single `index.html` + `config.yml` in an `/admin` folder |

### Hosting & CI/CD: **GitHub Pages + GitHub Actions**

| Component | Tool |
|---|---|
| Hosting | GitHub Pages (free for public repos) |
| Build & Deploy | GitHub Actions workflow |
| DNS | Custom domain (`redalert1741.org`) via CNAME |
| SSL | Free via GitHub Pages |

### Frontend / Styling

| Component | Recommendation | Rationale |
|---|---|---|
| CSS Framework | **Tailwind CSS** (via Hugo Pipes) | Utility-first, easy to customize team colors, no bloat with purging |
| Icons | **Heroicons** or **Lucide** | Free, SVG-based |
| Fonts | **Google Fonts** (self-hosted subset) | Performance + no external requests |
| Images | Hugo's built-in image processing | Auto-resize, WebP conversion, lazy loading |

---

## Site Architecture & Content Model

```
redalert1741.org/
├── .github/
│   └── workflows/
│       └── deploy.yml              # GitHub Actions: build Hugo → deploy to Pages
├── admin/                          # Decap CMS admin panel (served as static)
│   ├── index.html
│   └── config.yml                  # CMS content model / field definitions
├── assets/
│   ├── css/
│   │   └── main.css                # Tailwind entry point
│   └── js/                         # Minimal JS (if any)
├── content/
│   ├── _index.md                   # Homepage content
│   ├── about/
│   │   └── _index.md               # About the team
│   ├── robots/
│   │   ├── _index.md               # Robots listing page
│   │   ├── 2025-monarch.md         # Individual robot pages
│   │   ├── 2018-otariinae.md
│   │   └── ...
│   ├── blog/                       # News / updates / build logs
│   │   ├── _index.md
│   │   └── 2025-scrimmage.md
│   ├── sponsors/
│   │   └── _index.md
│   ├── outreach/
│   │   └── _index.md
│   └── contact/
│       └── _index.md
├── data/                           # Structured data (YAML/JSON)
│   ├── team.yml                    # Team info (number, name, location, social links)
│   ├── sponsors.yml                # Sponsor logos + tiers
│   └── navigation.yml              # Menu structure (CMS-editable)
├── layouts/
│   ├── _default/
│   │   ├── baseof.html             # Base template
│   │   ├── single.html             # Single page/post
│   │   └── list.html               # List/archive pages
│   ├── index.html                  # Homepage template
│   ├── partials/
│   │   ├── header.html
│   │   ├── footer.html
│   │   ├── hero.html
│   │   ├── sponsor-grid.html
│   │   └── robot-card.html
│   └── shortcodes/                 # Custom shortcodes for content authors
│       ├── youtube.html
│       ├── photo-gallery.html
│       └── cta-button.html
├── static/
│   ├── images/                     # Static images (logos, favicons)
│   └── CNAME                       # Custom domain for GitHub Pages
├── hugo.toml                       # Hugo configuration
├── tailwind.config.js              # Tailwind configuration
├── package.json                    # Tailwind + PostCSS deps only
└── README.md
```

### Proposed Pages

| Page | Description |
|---|---|
| **Home** | Hero image/video, tagline, quick links (scrimmage, spiritwear), latest news |
| **About** | Team history, mission, mentors, meeting info, location |
| **Robots** | Gallery of past robots with specs, photos, and competition results |
| **Blog/News** | Updates, build logs, event recaps |
| **Sponsors** | Tiered sponsor display, sponsorship packet link |
| **Outreach** | Community events, STEM initiatives, FTC/FLL mentoring |
| **Contact** | Contact form (via Formspree/Formspark), social links, email |

---

## Phases & Timeline

### Phase 1 — Foundation (Week 1–2) ✅
> **Goal:** Working Hugo site deployed to GitHub Pages with basic structure

- [x] Initialize Hugo project in repo
- [x] Set up GitHub Actions workflow for Hugo → GitHub Pages deployment
- [ ] ~~Configure custom domain (`redalert1741.org`) with CNAME + DNS~~ *(deferred to Phase 5)*
- [x] Create base layout templates (header, footer, navigation)
- [x] Set up Tailwind CSS via Hugo Pipes / PostCSS
- [x] Design and build homepage (hero, intro section, quick links)
- [x] Define color scheme / typography (team red + complementary palette)
- [x] Add favicon, Open Graph meta tags, basic SEO

**Deliverable:** Live site at `redalert1741.org` with styled homepage

---

### Phase 2 — Core Pages & Content (Week 3–4)
> **Goal:** All primary pages built and populated with initial content

- [x] Build About page template + content
- [x] Build Robots section (list + individual robot pages)
  - Pull in historical robot data (A.N.D.Y., Knight Fury, Black Widow, Otariinae, Monarch, etc.)
- [x] Build Blog/News section with list + single post templates
- [x] Build Sponsors page with tiered grid layout
- [x] Build Contact page
- [x] Responsive design pass — ensure all pages work on mobile/tablet/desktop
- [ ] Migrate any existing content/images from WordPress

**Deliverable:** Full multi-page site with real content

---

### Phase 3 — CMS Integration (Week 5) ✅
> **Goal:** Non-technical team members can edit content via browser

- [x] Set up Decap CMS (`/admin` folder with `index.html` + `config.yml`)
- [x] Configure GitHub OAuth backend for authentication
  - Using Netlify as OAuth proxy (`api.netlify.com/auth`)
  - GitHub OAuth App registered, linked to Netlify site
  - `site_domain` configured in `config.yml` to match Netlify site
  - See `docs/CMS-SETUP.md` for full details
- [x] Define CMS collections:
  - `blog` — Create/edit blog posts
  - `robots` — Create/edit robot pages
  - `sponsors` — Manage sponsor list (via data file)
  - `pages` — Edit static pages (home, about, contact, sponsors, robots index, blog index)
  - `settings` — Edit team info (`team.yml`) and sponsor data (`sponsors.yml`)
- [x] Configure media uploads (stored in `static/images/uploads/`)
- [x] Set up editorial workflow (draft → review → publish) via Git branches
- [x] Write a brief "How to Use the CMS" guide for team members → `docs/CMS-SETUP.md`

**Deliverable:** Working CMS at `redalert1741.org/admin` with GitHub login

---

### Phase 4 — Polish & Extras (Week 6–7)
> **Goal:** Production-quality site with nice-to-have features

- [ ] Add animations / transitions (subtle scroll reveals, hover effects)
- [ ] Photo gallery component (lightbox for robot/event photos)
- [ ] Integrate TBA (The Blue Alliance) widget or data for live competition results
- [ ] Contact form integration (Formspree, Formspark, or similar — free tier)
- [ ] Performance optimization (image compression, lazy loading, preloading)
- [ ] Accessibility audit (WCAG 2.1 AA compliance)
- [ ] Analytics setup (privacy-friendly: Plausible, Umami, or simple GA4)
- [ ] 404 page design
- [ ] Social sharing cards (Open Graph + Twitter Card meta)

**Deliverable:** Polished, production-ready site

---

### Phase 5 — Cutover & Documentation (Week 8)
> **Goal:** Full migration from WordPress, documentation for future maintainers

- [ ] Final content review with team leadership
- [ ] Update DNS to point to GitHub Pages (if not already done)
- [ ] Decommission WordPress hosting
- [ ] Document the site architecture for future students/mentors
- [ ] Write contributing guide (`CONTRIBUTING.md`)
- [ ] Create content style guide for blog posts

**Deliverable:** WordPress fully retired, documentation complete

---

## Authentication for Decap CMS

**Chosen approach:** Decap CMS + Netlify OAuth proxy.

The CMS uses Netlify's free OAuth proxy service (`api.netlify.com/auth`) to handle GitHub authentication. A GitHub OAuth App is registered and its credentials are stored in a Netlify site's Access Control settings. The `site_domain` in `config.yml` tells the CMS which Netlify site to use for the OAuth handshake.

This approach was chosen because:
- ✅ Zero code to deploy or maintain
- ✅ Free (Netlify free tier)
- ✅ Standard approach used by most Decap CMS deployments
- ✅ Decap CMS's GitHub backend has built-in support for it

---

## Cost Summary

| Item | Cost |
|---|---|
| GitHub Pages hosting | **Free** |
| GitHub Actions CI/CD | **Free** (2,000 min/month for public repos) |
| Decap CMS | **Free** |
| Custom domain renewal | ~$12/year (already owned) |
| SSL certificate | **Free** (GitHub Pages) |
| Contact form (Formspree free tier) | **Free** (50 submissions/month) |
| OAuth proxy (Cloudflare Workers) | **Free** (100K requests/day) |
| **Total** | **~$0/month** |

---

## Suggested Next Steps (Immediate)

1. **Approve this plan** — Review with team leadership/mentors
2. **Initialize Hugo project** — I can scaffold the entire project structure right now
3. **Set up GitHub Actions** — Automated deploy pipeline
4. **Choose a color palette** — Red primary (team color), dark/light neutrals
5. **Gather content** — Collect photos, robot info, team history from current WordPress site
6. **Set up the custom domain** — Configure DNS CNAME record for GitHub Pages

---

## Alternatives Considered

| Option | Why Not? |
|---|---|
| **Jekyll** | Native GitHub Pages support but slower builds, Ruby dependency, aging ecosystem |
| **Astro** | Great framework but more complex for student handoff; better for app-like sites |
| **Eleventy** | Excellent and flexible, but Hugo's single-binary + speed wins for this use case |
| **TinaCMS** | Good Git-based CMS but has a hosted component; adds complexity |
| **WordPress → Static export** | Fragile, doesn't truly solve the WordPress maintenance burden |
| **Netlify/Vercel hosting** | Great platforms but GitHub Pages keeps everything in one place (GitHub) |

---

*Plan created: February 25, 2026*
*Repository: RAR1741/redalert1741.org*
