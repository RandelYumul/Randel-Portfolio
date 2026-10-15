// ALL your content lives here.
// Edit this file to update your portfolio. You rarely need to touch the components.

export const profile = {
  name: 'Randel Yumul',
  initials: 'RY',
  role: 'Computer Science Student & Web Developer',
  tagline: 'I build clean, responsive web apps and I am learning backend and APIs.',
  location: 'Philippines',
  email: 'randel.angelo10@gmail.com',
  github: 'https://github.com/RandelYumul',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  resume: '', // put resume.pdf in /public and write 'resume.pdf' here

  // HERO IMAGES (put the files in /public/images/)
  // heroBackground: big background behind the hero. It gets tinted with the palette.
  // photo: the image on the right side (your photo, an avatar, or an illustration).
  // Leave '' to use the default (palette gradient / placeholder box).
  heroBackground: 'images/hero-bg.jpg', // e.g. 'images/hero-bg.jpg'
  photo: '',          // e.g. 'images/profile.jpg'
}

// The order here = the order in the nav.
// Each href must match a section's id (e.g. '#education' -> <section id="education">).
export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const about = [
  "I'm a 4th-year Computer Science student who enjoys turning ideas into working web apps.",
  "Right now I'm strengthening my backend skills: REST APIs, databases, and authentication.",
  'Outside of code, I enjoy gaming and music.',
]

// Newest first.
export const education = [
  {
    title: 'BS Computer Science',
    place: 'Your University',
    date: '2023 – Present',
    details: 'Relevant coursework: Data Structures, Web Development, Databases.',
  },
  {
    title: 'Senior High School – STEM',
    place: 'Your Senior High School',
    date: '2021 – 2023',
    details: '',
  },
]

// Internships, part-time jobs, org roles, freelance work. Newest first.
export const experience = [
  {
    title: 'Web Development Intern',
    place: 'Company Name',
    date: '2026 – Present',
    points: [
      'What you built or improved.',
      'A tool or skill you used (e.g. React, REST APIs).',
      'A result, if you have one (e.g. "cut page load time by 30%").',
    ],
  },
]

// Certificates, courses, awards.
// link: the certificate URL (Coursera, freeCodeCamp, etc.). Leave '' if none.
export const certifications = [
  {
    name: 'Certificate Name',
    issuer: 'Issuing Organization',
    date: '2026',
    link: '',
  },
  {
    name: 'Another Certificate',
    issuer: 'freeCodeCamp',
    date: '2025',
    link: '',
  },
]

// Add, remove, or reorder projects here. The first one is shown by default.
//
// title       → shown in the scrolling row AND as the big heading
// badges      → small pills above the title (team size, event, tech)
// description → 1–2 sentence summary
// highlights  → bullet points: { label: 'Bold part', text: 'the rest' }
// links       → buttons. primary: true = filled button. Empty url = button hidden.
//
// WHAT SHOWS IN THE PREVIEW SCREEN (first one that exists wins):
// video → 'projects/demo.mp4' (put it in /public/projects/) or a YouTube link
// image → 'projects/name.png' (in /public/projects/) or any https:// image link
//         Best size: 1600 × 900 (16:9).
// (none) → automatic GitHub preview from the first github.com/owner/repo link
export const projects = [
  {
    title: 'Shifted',
    badges: ['Team of 8', 'Hackathon', 'Godot'],
    description:
      "A narrative-driven psychological mystery puzzle game built in Godot 4, where the environment reacts dynamically to the player's mental state and performance.",
    highlights: [
      {
        label: 'The Kitchen Scene',
        text: 'Engineered a fast-paced collection minigame, scripting a balanced spawning system for ingredients and obstacles.',
      },
      {
        label: 'Dynamic Environments',
        text: 'Implemented a cinematic "Chaos State" utilizing CanvasModulate tweens and randomized lighting sequences to visually distort the kitchen upon failure.',
      },
      {
        label: 'Audio Architecture',
        text: 'Designed a Global BGM Autoload singleton to maintain seamless audio states across level transitions.',
      },
      {
        label: 'Core Systems',
        text: "Custom-built a logic-based dialogue system and leveraged Godot's signal-based architecture to connect gameplay triggers to atmospheric effects.",
      },
    ],
    links: [
      { label: 'Download game', url: '', primary: true }, // paste the download link
      { label: 'View repo', url: 'https://github.com/RandelYumul/Shifted' },
    ],
    video: 'projects/shifted.mp4',
    image: '',
  },
  {
    title: 'ALVIN',
    badges: ['Hackathon', '1st Runner Up', 'Next.js', 'Tailwind', 'Leaflet', 'AI'],
    description:
      'Assist, Locate, Verify, Inform, Navigate: a disaster response app built in 2 days at the Cloudstaff AI Hackathon 2025, made to help communities when typhoons, earthquakes, and floods hit.',
    highlights: [
      {
        label: 'Real-Time Monitoring',
        text: 'Tracks typhoons, earthquakes, and evacuation centers on a Leaflet map, with navigation links to each center.',
      },
      {
        label: 'Hazard Assessment',
        text: 'Click anywhere on the map to generate an instant flood and landslide risk report for that spot.',
      },
      {
        label: 'Context-Aware Safety',
        text: 'AI-generated safety tips based on the specific disaster type, powered by an n8n and Dify AI backend.',
      },
      {
        label: 'Lifelines & Offline SMS',
        text: 'A directory of reachable hotlines, a user-initiated SOS button, and a system-initiated SMS that checks on users even without internet.',
      },
    ],
    links: [{ label: 'View repo', url: 'https://github.com/jimvdz/cs-hackathon' }],
    video: '',
    image: '',
  },
  {
    title: 'Truth in Tales',
    badges: ['Collaboration', 'Team of 6', 'HTML · CSS · JS'],
    description:
      'A creative writing website where stories, reflections, and everyday thoughts come to life, with a calm, reader-focused design that keeps the attention on the writing.',
    highlights: [
      {
        label: 'My Role',
        text: 'Backend / Developer on a team of 6, handling interactivity, site structure, and deployment.',
      },
      {
        label: 'Deployment',
        text: 'Hosted on GitHub Pages with a GitHub Actions workflow that publishes the site on every push to main.',
      },
      {
        label: 'Responsive Layout',
        text: 'Minimalist pages optimized for desktop, tablet, and mobile, fully static and fast with no backend needed.',
      },
      {
        label: 'Site Structure',
        text: 'Home, blog/essays, About Us, references, and an individual profile page for each team member.',
      },
    ],
    links: [
      { label: 'Visit site', url: 'https://randelyumul.github.io/Truth_in_Tales/', primary: true },
      { label: 'View repo', url: 'https://github.com/RandelYumul/Truth_in_Tales' },
    ],
    video: '',
    image: 'https://raw.githubusercontent.com/RandelYumul/Truth_in_Tales/main/assets/preview.png',
  },
  {
    title: 'CarePawnion',
    badges: ['Solo', 'Full-Stack', 'React', 'Express', 'PostgreSQL'],
    description:
      'A shared pet care log for households, so everyone can see when each pet was last fed, walked, or let out, and who did it.',
    highlights: [
      {
        label: 'Full-Stack Build',
        text: 'React + Vite client on Cloudflare Pages, an Express REST API on Render, and a PostgreSQL database on Neon.',
      },
      {
        label: 'Activity Logging',
        text: 'Log feedings, walks, and bathroom trips tagged to the household member who did them, with a Home screen showing which pets need attention.',
      },
      {
        label: 'Health Records',
        text: 'Track vaccinations and vet checkups with next due dates, plus each pet\'s usual feeding and bathroom times based on past logs.',
      },
      {
        label: 'Demo Mode',
        text: 'One build-time environment variable switches between the real API and a localStorage mock backend, as a fallback when the free API host is asleep.',
      },
    ],
    links: [
      { label: 'Visit site', url: 'https://carepawnion.pages.dev', primary: true },
      { label: 'Demo video', url: 'https://drive.google.com/drive/folders/11VuUrMfoeCFuDK-2zoIXShQQ1_Eb0qzC?usp=sharing' },
      { label: 'View repo', url: 'https://github.com/RandelYumul/CarePawnion' },
    ],
    video: '',
    image: 'https://raw.githubusercontent.com/RandelYumul/CarePawnion/main/docs/assets/screenshot.png',
  },
  {
    title: 'Capysaur',
    badges: ['Solo', 'Python', 'Pygame'],
    description:
      'An endless runner game where a capybara jumps over bushes and dodges flying birds, built with Python and Pygame, with a separate AWS-themed edition.',
    highlights: [
      {
        label: 'Pixel-Perfect Collisions',
        text: 'Uses sprite masks so the capybara only gets hit when the actual shapes touch, not just their bounding boxes.',
      },
      {
        label: 'Difficulty Scaling',
        text: 'Game speed rises as the score grows, and obstacles spawn closer together the faster the game gets.',
      },
      {
        label: 'Persistent High Score',
        text: 'Saves the best score to a file so it is still there the next time the game is opened.',
      },
      {
        label: 'AWS Edition',
        text: 'A themed version with custom ground, cloud, and logo art, built on the same game engine code.',
      },
    ],
    links: [{ label: 'View repo', url: 'https://github.com/RandelYumul/Capysaur' }],
    video: '', // tip: a short gameplay clip looks great here
    image: '',
  },
  {
    title: 'FundBuddy',
    badges: ['Collaboration', 'Team of 4', 'Flutter', 'Supabase', 'Gemini API'],
    description:
      'A mobile finance tracker for student organizations that replaces manual spreadsheets and paper logs with a secure, shared, real-time platform.',
    highlights: [
      {
        label: 'My Role',
        text: 'Lead Frontend Developer on a team of 4, responsible for the Flutter implementation, UI components, and state management.',
      },
      {
        label: 'AI Receipt Scanning',
        text: 'Uses the Google Gemini API to read a receipt photo and fill in the seller, control number, amount, date, and description automatically.',
      },
      {
        label: 'Real-Time Dashboard',
        text: 'Live totals for receipts, disbursements, and net balance that update automatically through Supabase real-time subscriptions.',
      },
      {
        label: 'Organizations & Roles',
        text: 'Create or join an organization, with admin and member roles, email or Google sign-in, and a dark mode that remembers your choice.',
      },
    ],
    links: [{ label: 'View repo', url: 'https://github.com/JReshley/FundBuddy' }],
    video: '',
    image: '',
  },
  {
    title: 'VirtuoHero',
    badges: ['Hackathon', 'Team of 6', 'Flutter', 'Gemini API'],
    description:
      'An AI-powered mobile app prototype that helps Filipino freelancers and students grow their skills, track progress, and build career readiness through habit-building and personalized learning.',
    highlights: [
      {
        label: 'My Role',
        text: 'Full-Stack Programmer on a team of 6.',
      },
      {
        label: 'AI Mentor',
        text: 'Submit text or image work and get structured feedback from the Gemini API through a chosen expert lens, such as UI/UX Designer or Software Engineer.',
      },
      {
        label: 'Custom RoadMap',
        text: 'An onboarding quiz on interests, personality, skill level, and available time generates a personalized 5–7 step learning roadmap.',
      },
      {
        label: 'Daily Scrum & Streaks',
        text: 'A reflective journal with optional image uploads, plus a gamified streak system with badges at 7, 30, and 100 days.',
      },
    ],
    links: [
      {
        label: 'Download APK',
        url: 'https://github.com/shokomori/Virtuo-Hero/raw/main/APK%20Download/app-arm64-v8a-release.apk',
        primary: true,
      },
      { label: 'View repo', url: 'https://github.com/shokomori/Virtuo-Hero' },
    ],
    video: '',
    image: '',
  },
]

export const skills = [
  { group: 'Frontend', items: ['HTML', 'CSS', 'JavaScript', 'React'] },
  { group: 'Backend (learning)', items: ['Node.js', 'Express', 'REST APIs', 'SQL'] },
  { group: 'Tools', items: ['Git', 'GitHub', 'VS Code', 'Figma'] },
]

// Contact form: create a free form at https://formspree.io and paste its endpoint.
// Leave empty to hide the form and show only the email button.
export const contactFormEndpoint = ''