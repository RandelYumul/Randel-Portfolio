# Randel Yumul · Portfolio

![Randel Yumul portfolio preview](public/images/og-image.jpg)

**Live site:** https://randelyumul.github.io/Randel-Portfolio/

My personal portfolio. I'm **Randel Angelo Yumul**, a Computer Science student at Holy Angel University (Pampanga, Philippines) who builds web, mobile, and game projects. My work includes **ALVIN** (1st Runner-Up, Cloudstaff AI Hackathon 2025) and **AldawWave** (Top 10 of 40 teams nationwide).

- **Email:** randel.angelo10@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/randel-yumul/
- **GitHub:** https://github.com/RandelYumul

---

## What's on the site

| Section | What it shows |
| --- | --- |
| **Home** | Intro, a typing animation of my roles, and my photo |
| **About** | Short bio, photo, and a "View CV" button |
| **Education** | Holy Angel University (BS Computer Science) and Angeles City Science High School |
| **Skills** | Tech skills as logo boxes with category filters, plus a moving strip of professional skills |
| **Projects** | 10 projects with videos or screenshots, highlights, and repo/demo links |
| **Leadership** | Student org roles on a two-sided timeline that fills as you scroll |
| **Certifications** | 13 certificates (Cisco, AWS, IBM, LinkedIn, freeCodeCamp, CompTIA, Coursera) with a full-size viewer and verify links |
| **Contact** | Email, GitHub, and LinkedIn |

## Features

- **Light and dark mode** that remembers your choice
- **Responsive** layout for phones, tablets, and desktops; on laptops and desktops most sections fit in one screen
- **Animations:** scroll reveals, typing effect, cursor glow, animated skill boxes, and a scroll-linked timeline
- **Accessible:** keyboard navigation, focus styles, and animations turn off when "reduce motion" is on in the device settings
- **Fast:** compressed videos (H.264, fast start) and resized images
- **Link preview card** for LinkedIn, Messenger, and other apps

## Built with

- **React 19** + **Vite 7**
- **Plain CSS** (no CSS framework), with CSS variables for theming
- **Fonts:** Montserrat, Syne, Open Sans (Google Fonts)
- **Skill logos:** [Devicon](https://devicon.dev/)
- **Hosting:** GitHub Pages, deployed with the `gh-pages` package

---

## Run it locally

You need **Node.js 20 or newer** (check with `node -v`).

```bash
git clone https://github.com/RandelYumul/Randel-Portfolio.git
cd Randel-Portfolio
npm install
npm run dev
```

Open the link it shows (usually http://localhost:5173/Randel-Portfolio/).

## Update the content

All the text, links, and lists live in **one file**: `src/data/portfolio.js`. The components only display it.

| To change... | Edit in `portfolio.js` |
| --- | --- |
| Name, role, email, links, CV, photos | `profile` |
| About paragraphs | `about` |
| Schools | `education` |
| Org roles | `leadership` |
| Certificates | `certifications` |
| Projects | `projects` |
| Skills | `skills` |

**Files** go in `public/` and are written **without** a starting slash, for example `image: 'projects/skeep.jpg'`:

| File type | Folder |
| --- | --- |
| Photos and the preview card | `public/images/` |
| Project images and videos | `public/projects/` |
| Certificate images and PDFs | `public/certificates/` |
| CV | `public/files/Randel-Yumul-CV.pdf` |

**Videos:** export as **H.264 MP4, 720p, "web optimized / fast start"** so they play right away on GitHub Pages.

## Deploy

```bash
git add -A
git commit -m "Describe your change"
git push
npm run deploy
```

`npm run deploy` builds the site into `dist/` and publishes it to the `gh-pages` branch. GitHub Pages serves the site from that branch (**Settings → Pages → Branch: `gh-pages` / root**). Changes show up in 1–2 minutes; check in an Incognito window to skip the browser cache.

---

## Project structure

```
Randel-Portfolio/
├── index.html              ← page title, description, link preview tags
├── vite.config.js          ← base: '/Randel-Portfolio/' for GitHub Pages
├── public/
│   ├── favicon.svg         ← browser tab icon ("RALY")
│   ├── images/             ← my photos, hero background, preview card
│   ├── projects/           ← project videos and images
│   ├── certificates/       ← certificate images and PDFs
│   └── files/              ← CV
└── src/
    ├── main.jsx            ← starts React
    ├── App.jsx             ← puts the sections in order
    ├── data/
    │   └── portfolio.js    ← ALL the content
    ├── index.css           ← colors, layout, most styles
    ├── hero.css            ← Home section styles
    ├── skills.css          ← Skills section styles
    ├── leadership.css      ← Leadership timeline styles
    ├── hooks/
    │   └── useTypewriter.js
    └── components/
        ├── Navbar.jsx        ← sticky nav, active-section highlight, phone menu
        ├── ThemeToggle.jsx   ← light/dark switch
        ├── Hero.jsx
        ├── About.jsx
        ├── Education.jsx
        ├── Skills.jsx
        ├── Projects.jsx      ← project tabs + preview
        ├── ProjectMedia.jsx  ← video, image, or GitHub preview
        ├── Leadership.jsx
        ├── Certifications.jsx
        ├── Contact.jsx
        ├── Footer.jsx
        ├── Reveal.jsx        ← fade-in on scroll
        └── CursorGlow.jsx
```

## Common problems

| Problem | Likely cause |
| --- | --- |
| Blank page after deploy | `base` in `vite.config.js` doesn't match the repo name |
| Image or file missing after deploy | The path starts with `/`. Use `projects/x.jpg`, not `/projects/x.jpg` |
| Video plays locally but not online | The file isn't H.264 or isn't "fast start". Re-export it (see above) |
| Old version still showing | Browser cache. Open the site in an Incognito window |
| Link preview didn't update on LinkedIn | Paste the link into LinkedIn's Post Inspector to refresh it |

---

© 2026 Randel Angelo Yumul
