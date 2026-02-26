# Migration Comparison: WordPress → Hugo (Beta)

Comparison of **www.redalert1741.org** (WordPress) vs **beta.redalert1741.org** (Hugo/GitHub Pages).

Last updated: 2026-02-26

---

## Page-by-Page Comparison

| # | WordPress Page | URL (old) | Beta Equivalent | Status | Notes |
|---|---------------|-----------|----------------|--------|-------|
| 1 | **Home** | `/` | `/` | ✅ Exists | Beta has modernized hero, "What We Do" cards, about section, CTA. WordPress has scrimmage registration banner, event links, and FTC team callout at bottom. |
| 2 | **About Us** | `/about-us/` | `/about/` | ⚠️ Partial | Beta has "Who We Are", Innovation Center, What is FIRST sections. **Missing:** full team history narrative (founding story, Innovation Center move), year-by-year accomplishments list (2005–2024), mission statement. |
| 3 | **Meet Our Team** (students) | `/about-us/meet-students/` | ❌ None | ❌ Missing | Photo gallery of current students. Could be a subpage of About or a section. |
| 4 | **Meet Our Mentors** | `/about-us/meet-mentors-2/` | ❌ None | ❌ Missing | Photo gallery/slideshow of mentors (Mr. Beshears, Mr. Miller, Mr. Coulombe, Mr. Porat, Mr. Meyer, etc.). |
| 5 | **Team Leadership Structure** | `/about-us/captains/` | ❌ None | ❌ Missing | Leadership/captains page. Appears sparse on WordPress too — may not need its own page. |
| 6 | **Past Robots** | `/robots/` | `/robots/` | ⚠️ Partial | Beta has 6 robots (2025, 2020, 2018, 2017, 2016, 2015). WordPress has 14 robots (2006–2019) with detailed game descriptions and robot features. **Missing:** 2006 Revolver, 2007 Mantis, 2008 Thaddeus, 2009 μ (Mu), 2010 Scorpion, 2011 Sampson, 2012 Swish, 2013 Whizbee, 2014 Jaws, 2019 Kuiper. Also missing robot photos from WP uploads. |
| 7 | **Current Sponsors** | `/current-sponsors/` | `/sponsors/` | ⚠️ Partial | Beta has tiered text list (Platinum/Gold/Silver). WordPress has sponsor **logos with images** and links. **Missing:** Bronze tier sponsors, individual sponsor logos/images, full sponsor list (Nelson Global, ZenBusiness, Habig Injury Law, Kettering, Tried & True, Strange Brew, UIndy, Connection, CMIT, Texas Roadhouse, Indiana State Police Alliance, Indiana Realty Pros, Rise'n Roll, etc.). |
| 8 | **Support Red Alert / Sponsor Info** | `/sponsor-red-alert/` | `/sponsors/` (partial) | ⚠️ Partial | Beta has "Become a Sponsor" section with PDF link. WordPress has a full pitch page with benefits list, tax-deductible info, contact email, and downloadable letters (Sponsor Packages PDF, Friends & Family Letter, Business Support Letter). |
| 9 | **Online Payments / Donate** | `/donate/` | ❌ None | ❌ Missing | Payment form for donations and student dues (PayPal integration). Mailing address for checks. |
| 10 | **Calendar** | `/calendar/` | ❌ None | ❌ Missing | Embedded Google Calendar (via Advanced iFrame plugin). |
| 11 | **Parents (RARPO)** | `/rarpo/` | ❌ None | ❌ Missing | Parent organization info, volunteering opportunities, Kroger Community Rewards registration link. |
| 12 | **Join Red Alert** | `/join/` | ❌ None | ❌ Missing | Student applications (FRC + FTC Google Forms), FIRST Inspires registration link, parent registration guide, team handbook download, mentor sign-up info, sponsor contact. |
| 13 | **Safety** | `/safety/` | ❌ None | ❌ Missing | Safety handbook PDF, general safety test, machine test, UL Safety Portal link, FIRST Safety link, safety manual PDF. |
| 14 | **Safety First** | `/safety-2/` | ❌ None | ❌ Missing | Additional safety content page (may overlap with `/safety/`). |
| 15 | **Documents** | `/documents/` | ❌ None | ❌ Missing | Archive of Chairman's videos (2016–2020), STEM outreach docs, safety plans, branding standards, business plans (multi-language), executive summaries, study guides (2012–2020). |
| 16 | **Contact Us** | `/contact-us/` | `/contact/` | ⚠️ Partial | Beta has Formspree contact form + location + join info. **Missing:** mailing address (704 S. SR 135, Suite D Box 236), specific email contacts (Lead Mentor ncoulombe@redalert1741.org, RARPO president@, treasurer@, webmaster@, info@). |
| 17 | **Summer Camp** | `/radical-robotics-summer-camp/` | ❌ None | ❌ Missing | Radical Robotics Summer Camp info — dates, location, grades 1st–5th, registration link, contact email, camp photos. |
| 18 | **Spiritwear** | `/spiritwear/` | ❌ None | ❌ Missing | Link to external spirit wear store (1741redalert.itemorder.com). Simple page — could be a link in nav or footer. |
| 19 | **FTC Teams** | `/redalertftc/` | ❌ None | ❌ Missing | FTC program info — Cyberstorm (6190), Panic in the Buildroom (8149), Disaster Management (13295). What is FTC, who's on the teams, meeting schedule, handbook, donate link, team logos. |
| 20 | **Books** | `/rar-books` | ❌ None | ❌ Missing | Two picture books written by the team: "Ryan the Racoon and the Terrific Tree House" (2015) and "Benji the Brachiosaurus and the Perfect Playground" (2022). Links to PDFs. |
| 21 | **Blog** | (WordPress posts) | `/blog/` | ⚠️ Partial | Beta has blog infrastructure with 1 sample post. WordPress may have historical blog posts that should be migrated. |

---

## New on Beta (Not on WordPress)

| Feature | Beta URL | Notes |
|---------|----------|-------|
| **Blog system** | `/blog/` | WordPress has posts but no dedicated blog landing page in nav. Beta has a clean blog section. |
| **Decap CMS** | `/admin/` | Content management system for non-technical editors — not present on WordPress's public-facing site. |
| **"What is FIRST?" section** | `/about/` | Dedicated explanation of FIRST on the About page — nice addition. |
| **Innovation Center details** | `/about/` | Machine Shop, Programming Lab, Design Studio descriptions (placeholder images). |
| **404 page** | `/404.html` | Custom 404 page. |

---

## Navigation Comparison

### WordPress Main Menu
```
Home
├── Online Payments (/donate/)
├── Calendar (/calendar/)
├── About
│   ├── Meet Our Team (/about-us/meet-students/)
│   ├── Meet Our Mentors (/about-us/meet-mentors-2/)
│   └── Team Leadership Structure (/about-us/captains/)
├── Past Robots (/robots/)
├── Parents / RARPO (/rarpo/)
├── Sponsors
│   ├── Current Sponsors (/current-sponsors/)
│   ├── Donate (/donate/)
│   ├── Support Red Alert (/sponsor-red-alert/)
│   ├── Sponsor Packages (PDF)
│   ├── Friends and Family Letter (PDF)
│   └── Business Support (PDF)
├── Safety
│   ├── Safety First (/safety-2/)
│   ├── Safety Study Guide (PDF)
│   └── RARPO Scholarship Form (PDF)
├── 2020 Quizzes
│   ├── Operations Quiz (Google Form)
│   ├── Robot Quiz (Google Form)
│   └── Rules Quiz (Google Form)
├── Documents (/documents/)
├── GitHub (external)
├── Books (/rar-books)
├── Join
│   ├── FRC Student Application (Google Form)
│   ├── FTC Student Application (Google Form)
│   └── 2025-2026 Handbook (Google Drive)
├── Contact (/contact-us/)
└── Camp
    └── Radical Robotics Summer Camp (/radical-robotics-summer-camp/)
```

### Beta Main Menu
```
Home
├── About (/about/)
├── Robots (/robots/)
├── Blog (/blog/)
├── Sponsors (/sponsors/)
└── Contact (/contact/)
```

---

## Social Links Comparison

| Platform | WordPress | Beta |
|----------|-----------|------|
| Facebook | ✅ facebook.com/redalertrobotics | ❌ Missing |
| Twitter/X | ✅ twitter.com/RedAlert1741 | ❌ Missing |
| Instagram | ✅ instagram.com/redalert1741/ | ❌ Missing |
| YouTube | ✅ youtube.com/user/redalert1741 | ❌ Missing |
| Flickr | ✅ flickr.com/photos/rar1741/ | ❌ Missing |
| The Blue Alliance | ❌ Not in header/footer | ✅ Footer link |
| GitHub | ✅ Sidebar link | ✅ Footer link |
| FIRST Inspires | ❌ Not linked | ✅ Footer link |

---

## Content & Assets to Migrate

### Robot Pages Missing from Beta (10 robots)
| Year | Name | Game | Has Photos on WP? |
|------|------|------|--------------------|
| 2006 | The Revolver | Aim High | ❌ No photo found |
| 2007 | Mantis | Rack 'n Roll | ❌ No photo found |
| 2008 | Thaddeus | Overdrive | ❌ No photo found |
| 2009 | μ (Mu) | Lunacy | ❌ No photo found |
| 2010 | Scorpion | Breakaway | ❌ No photo found |
| 2011 | Sampson | Logomotion | ❌ No photo found |
| 2012 | Swish | Rebound Rumble | ❌ No photo found |
| 2013 | Whizbee | Ultimate Ascent | ❌ No photo found |
| 2014 | Jaws | Aerial Assist | ✅ jaws.jpg |
| 2019 | Kuiper | Destination: Deep Space | ✅ kuiperforwebsite.png |

### Downloadable Files / PDFs Referenced on WordPress
| Document | Current WP URL | Migrate? |
|----------|---------------|----------|
| Sponsor Packages Form (2023-2024) | `/wp-content/uploads/2023/08/FRC-Varsity-Sponsor-packages-form-2023-2024.pdf` | ✅ Yes — already linked from beta sponsors page |
| Friends and Family Letter | `/wp-content/uploads/2022/05/Friends-and-Family-letter-General-2022-2023.pdf` | ⚠️ Decide — update or drop |
| Business Support Letter | `/wp-content/uploads/2022/05/Local-business-letter-General-2022-2023.pdf` | ⚠️ Decide — update or drop |
| Safety Handbook (2019-2020) | `/wp-content/uploads/2020/02/2019-2020-Safety-Handbook-Final.pdf` | ⚠️ Decide — needs update |
| Safety Study Guide | `/wp-content/uploads/2016/01/General_Safety_Guide.pdf` | ⚠️ Decide |
| RARPO Scholarship Form (2022-2023) | `/wp-content/uploads/2022/09/RARPO-Scholarship-Form-2022-2023.pdf` | ⚠️ Decide |
| FTC Handbook (2017-2018) | `/wp-content/uploads/2017/08/FTC-Robotics-Handbook-2017-18.pdf` | ⚠️ Outdated |
| Branding Standards | `/wp-content/uploads/2015/01/Branding-Standards.pdf` | ⚠️ Decide |
| Business Plans (2012-2015, multi-language) | Various | ⚠️ Archive value only |
| Chairman's Presentations (2012-2013) | Various | ⚠️ Archive value only |
| Ryan the Racoon book (PDF) | `/wp-content/uploads/2022/03/Ryan-the-Racoon-and-the-Terrific-Tree-House.pdf` | ✅ Yes |
| Benji the Brachiosaurus book (PDF) | `/wp-content/uploads/2022/03/Benji-the-Brachiosaurus-and-the-Perfect-Playground-1.pdf` | ✅ Yes |
| STEM Outreach (2014-2015) | `/wp-content/uploads/2015/04/events2014-2015.docx-1.compressed.pdf` | ⚠️ Archive |

### Images to Migrate
- Sponsor logos (Crossroads Engineers, CG Education Foundation, Cummins, Nelson Global, ZenBusiness, etc.)
- Robot photos (Jaws, ANDY, Knight Fury, Black Widow, Otariinae, Kuiper, etc.)
- FTC team logos (Cyberstorm, Panic in the Buildroom, Disaster Management)
- Camp photos
- Team/mentor headshot galleries
- Red Alert logo variations (brinna-logo, big gear logo)
- Old team photos (2005 team photo)

### External Links / Integrations to Preserve
| Link/Integration | WordPress | Beta | Notes |
|-----------------|-----------|------|-------|
| FRC Student Application | Google Form | ❌ Missing | `forms.gle/qkP2wJ36oEW54QWr9` (nav link may be outdated — `/join/` has newer link) |
| FTC Student Application | Google Form | ❌ Missing | Google Form |
| 2025-2026 Handbook | Google Drive PDF | ❌ Missing | Drive link |
| FIRST Inspires Registration | Link + how-to PDF | ❌ Missing | For students/parents |
| Google Calendar embed | iFrame | ❌ Missing | Embedded via Advanced iFrame WP plugin |
| Spiritwear store | External link | ❌ Missing | `1741redalert.itemorder.com` |
| Kroger Community Rewards | Link | ❌ Missing | On RARPO page |
| PayPal Donate | Embedded form | ❌ Missing | Payment processing |
| Chairman's Videos | YouTube links | ❌ Missing | 2016–2020 |
| Safety Tests | Google Forms | ❌ Missing | General Safety + Machine Test |
| UL Safety Portal | External link | ❌ Missing | `lms4.learnshare.com` |
| 2020 Quizzes | Google Forms (3) | ❌ Missing | Operations, Robot, Rules |
| Scrimmage Registration | Google Form | ❌ Missing | On homepage banner |
| Scrimmage Info Doc | Google Doc | ❌ Missing | On homepage banner |

---

## Recommended Priority for Migration

### 🔴 High Priority (core content visitors expect)
1. **Complete robot pages** — Add the 10 missing robots (2006–2014, 2019) with descriptions from WP
2. **Add social media links** — Facebook, Instagram, YouTube, Twitter to footer/header
3. **Contact details** — Add mailing address and specific email contacts to Contact page
4. **Team history & accomplishments** — Move the year-by-year history (2005–2024) into About page
5. **Full sponsor list with logos** — Migrate all sponsor images and links, add Bronze tier
6. **Join page** — Student/mentor applications, handbook, FIRST registration links

### 🟡 Medium Priority (important but can wait)
7. **Donate/Payments page** — Online payment integration (or link to external)
8. **RARPO / Parents page** — Parent org info, Kroger rewards, volunteering
9. **Summer Camp page** — Camp info, registration, contact
10. **FTC Teams page** — Cyberstorm, Panic in the Buildroom, Disaster Management info
11. **Calendar page** — Embed Google Calendar
12. **Safety page** — Consolidate both WP safety pages, link to handbooks/tests

### 🟢 Low Priority (archive / nice-to-have)
13. **Documents/archive page** — Chairman's videos, business plans, study guides
14. **Books page** — PDF picture books
15. **Spiritwear** — Could be a simple link in nav or footer
16. **2020 Quizzes** — Dated content, may not be needed
17. **Branding Standards PDF** — Internal use

### ❓ Decide: Keep, Update, or Drop?
- **Safety Study Guide** (2016) — Very outdated
- **FTC Handbook** (2017-2018) — Very outdated
- **Friends & Family / Business Support letters** (2022-2023) — Need updated versions
- **RARPO Scholarship Form** (2022-2023) — May need update
- **Scrimmage registration** — Seasonal, add when relevant

---

## Feature Comparison

| Feature | WordPress | Beta |
|---------|-----------|------|
| Content Management | WordPress Admin | Decap CMS (/admin/) |
| Contact Form | (not visible — may use WP plugin) | Formspree (needs form ID) |
| Online Payments | PayPal embed | ❌ Not implemented |
| Calendar | Google Calendar iFrame | ❌ Not implemented |
| Photo Galleries | NextGEN Gallery plugin | ❌ Not implemented |
| Blog / Posts | WordPress posts | Hugo blog section |
| Social Media Icons | Header bar (5 platforms) | Footer only (TBA, GitHub, FIRST) |
| Mobile Navigation | Hamburger menu | Hamburger menu |
| Search | WordPress search | ❌ Not implemented |
| Analytics | Unknown | ❌ Not implemented |
| SSL/HTTPS | Mixed (http links present) | ✅ HTTPS via GitHub Pages |
| Page Speed | Slow (WordPress + plugins) | ✅ Fast (static site) |
| SEO / Open Graph | WordPress plugins | ⚠️ Basic meta tags |
| Event Banners | Homepage banner area | ❌ Not implemented |
