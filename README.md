# My Portfolio (React + Vite)

A one-page portfolio with a sticky nav, Hero, About, Projects, Skills, and Contact sections.
Ready to deploy on GitHub Pages.

---

## Folder structure

```
my-portfolio/
├── index.html              ← page title + meta description
├── package.json            ← packages + scripts (dev, build, deploy)
├── vite.config.js          ← "base" setting for GitHub Pages
├── public/
│   └── favicon.svg         ← browser tab icon (put resume.pdf and images here too)
└── src/
    ├── main.jsx            ← starts React
    ├── App.jsx             ← stacks all sections in order
    ├── index.css           ← all styles (colors at the top)
    ├── data/
    │   └── portfolio.js    ← ALL YOUR CONTENT. Edit this first.
    └── components/
        ├── Navbar.jsx      ← sticky nav + mobile menu
        ├── Hero.jsx        ← name, role, buttons
        ├── About.jsx
        ├── Projects.jsx    ← loops over projects
        ├── ProjectCard.jsx ← one project card
        ├── Skills.jsx
        ├── Contact.jsx     ← optional Formspree form + links
        └── Footer.jsx
```

**Main idea:** content lives in `src/data/portfolio.js`, and components only display it.
To update your portfolio, you usually edit one file.

---

## Step 1: Run it on your computer

You need Node.js 20 or newer. Check with `node -v`.

```bash
cd my-portfolio
npm install
npm run dev
```

Open the link it shows (usually http://localhost:5173/my-portfolio/).

---

## Step 2: Put in your content

Open `src/data/portfolio.js` and change:

1. `profile`: your name, initials, role, email, GitHub, LinkedIn
2. `about`: 2–3 short paragraphs
3. `projects`: your real projects (title, description, tech, links)
4. `skills`: your skill groups

Also update `<title>` and the description in `index.html`, and the letters in `public/favicon.svg`.

---

## Step 3: Add project screenshots (optional)

1. Make a folder `public/projects/`
2. Save screenshots there, e.g. `public/projects/carepawnion.png`
3. In `portfolio.js`, set `image: 'projects/carepawnion.png'` (no slash at the start)

Same idea for a resume: put `resume.pdf` in `public/` and set `resume: 'resume.pdf'`.

---

## Step 4: Change the look (optional)

Open `src/index.css`. The colors are at the top in `:root`.
Change `--primary` to change the main color everywhere. Dark mode colors are just below it.

---

## Step 5: Contact form (optional)

1. Make a free account at https://formspree.io
2. Create a form and copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`)
3. Paste it into `contactFormEndpoint` in `portfolio.js`

If you leave it empty, only the Email / GitHub / LinkedIn buttons show.

---

## Step 6: Put it on GitHub

1. Create a new repo on GitHub. Choose ONE name:
   - `my-portfolio` → site will be `https://yourusername.github.io/my-portfolio/`
   - `yourusername.github.io` → site will be `https://yourusername.github.io/` (cleaner for a resume)
2. Open `vite.config.js` and make `base` match:
   - `my-portfolio` repo → `base: '/my-portfolio/'`
   - `yourusername.github.io` repo → `base: '/'`
3. Push your code:

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yourusername/REPO-NAME.git
git push -u origin main
```

---

## Step 7: Deploy to GitHub Pages

```bash
npm run deploy
```

This builds the site into `dist/` and pushes it to a branch called `gh-pages`.

Then on GitHub, one time only:
**Repo → Settings → Pages → Source: "Deploy from a branch" → Branch: `gh-pages` / `(root)` → Save**

Wait 1–2 minutes and open your site link.

To update later: edit → `git add . && git commit -m "update" && git push` → `npm run deploy`.

---

## Common problems

| Problem | Likely cause |
| --- | --- |
| Blank page after deploy | `base` in `vite.config.js` doesn't match the repo name |
| Images missing after deploy | Image path starts with `/`. Use `projects/x.png`, not `/projects/x.png` |
| Nav covers section titles | Change `--nav-height` in `index.css` to your nav's real height |
| Nav doesn't stick | A parent element has `overflow: hidden` |
| Site not updating | Wait a few minutes, then hard refresh (Ctrl + Shift + R) |

---

## Ideas for later

- Add a "Experience" or "Certificates" section (copy `About.jsx` as a starting point)
- Highlight the current nav link while scrolling (search: IntersectionObserver)
- Add a small backend/API project to the Projects list to show your backend growth
- Separate pages per project with React Router (use `HashRouter` on GitHub Pages)
