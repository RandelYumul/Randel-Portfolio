// ALL your content lives here.
// Edit this file to update your portfolio. You rarely need to touch the components.

export const profile = {
  name: 'Randel Yumul',
  initials: 'RALY',
  role: 'Computer Science Student & Frontend Developer',
  tagline: 'I build web and mobile apps, from award-winning hackathon prototypes to full-stack projects, and I am growing my backend and API skills.',

  // HOME SECTION TEXT
  intro: "Hi! I'm Randel Yumul · Based in Pampanga, PH", // small pill above the big title
  headline: 'CS Student &', // first line of the big title
  // typed out one by one; all roles from the CV. Keep each under ~20 letters so it fits on one line
  typingWords: ['Frontend Developer', 'Mobile App Developer', 'Game Developer', 'Hackathon Enthusiast'],
  location: 'Pampanga, Philippines',
  email: 'randel.angelo10@gmail.com',
  github: 'https://github.com/RandelYumul',
  linkedin: 'https://www.linkedin.com/in/randel-yumul/',
  // CV: the PDF in public/files/. The "View CV" buttons open it in a new tab.
  // Set to '' to hide the buttons.
  resume: 'files/Randel-Yumul-CV.pdf',

  // HERO IMAGES (put the files in /public/images/)
  // heroBackground: big background behind the hero. It gets tinted with the palette.
  // photo: the image on the right side (your photo, an avatar, or an illustration).
  // Leave '' to use the default (palette gradient / placeholder box).
  heroBackground: 'images/hero-bg.jpg', // e.g. 'images/hero-bg.jpg'
  photo: 'images/Randel-main.jpg',          // e.g. 'images/profile.jpg'
  // ABOUT SECTION PHOTO (right side). Use a DIFFERENT photo from the home card,
  // e.g. you at a hackathon or with your org. Leave '' to show only the text.
  aboutPhoto: 'images/Randel-about.jpg',     // e.g. 'images/about.jpg'
}

// The order here = the order in the nav.
// Each href must match a section's id (e.g. '#education' -> <section id="education">).
export const navLinks = [
  { label: 'Home', href: '#top' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Leadership', href: '#leadership' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact', href: '#contact' },
]

export const about = [
  "I'm a Computer Science student at Holy Angel University.",
  'I love building things fast and building them for people. My hackathon work includes ALVIN, a disaster response app that placed 1st Runner-Up at the Cloudstaff AI Hackathon 2025, and AldawWave, a commute recommender that finished Top 10 out of 40 teams nationwide.',
  "My focus is frontend and UI work with React, Next.js, Tailwind, and Flutter, and I'm growing my backend skills with PostgreSQL and Supabase.",
  'Outside of code, I lead and support student organizations like the AWS Learning Club, Student Council, and LOOP.',
]

// Newest first.
export const education = [
  {
    title: 'BS Computer Science',
    place: 'Holy Angel University · Angeles City',
    date: 'Expected graduation: April 2027',
    details: "President's Lister for academic excellence · Academic Scholarship recipient",
  },
  {
    title: 'High School · Science, Technology, Engineering, and Mathematics (STEM)',
    place: 'Angeles City Science High School · Angeles City',
    date: '2016 – 2022',
    details: 'Graduated With Highest Honor',
  },
]

// Leadership & Activities: org roles and student leadership. Newest first.
export const leadership = [
  {
    title: 'Executive Secretary for Operations',
    place: 'AWS Learning Club – HAU',
    date: 'Jun 2025 – Mar 2026',
    points: [
      "Supported the organization's day-to-day operations, documentation, and coordination of activities and internal initiatives.",
      'Helped organize club programs and kept communication and collaboration smooth among officers and members.',
    ],
  },
  {
    title: 'External Vice President',
    place: 'League of Outstanding Programmers (LOOP)',
    date: 'Jun 2024 – Jun 2025',
    points: [
      'Supported organizational activities, external coordination, and student-led initiatives.',
      'Worked with officers and members to plan and run computing-related activities.',
    ],
  },
  {
    title: 'Events Management Staff',
    place: 'CSC – SOC Alpha Foxes',
    date: 'Jun 2024 – Jun 2025',
    points: [
      'Helped plan, organize, and run student events and activities for the School of Computing community.',
    ],
  },
  {
    title: 'External Treasurer',
    place: 'Supreme Student Council',
    date: 'Oct 2020 – Oct 2022',
    points: [
      'Managed financial records, monitored organization funds, and helped prepare budgets for student council activities.',
      'Coordinated with officers to track expenses and keep the use of funds proper and transparent.',
    ],
  },
]

// Certificates, courses, awards. Newest first. Shown 3 per row.
// image: picture of the certificate. Put it in /public/certificates/
//        and write 'certificates/name.jpg'. A screenshot or PDF export works.
//        A full https:// link also works (e.g. a Credly badge image).
//        Landscape images look best. Leave '' to show the issuer name instead.
// pdf:   optional original PDF in /public/certificates/ ('certificates/name.pdf').
//        Adds an "Open PDF" button in the viewer. Still add an image for the grid.
// link:  the verify/credential URL (Credly, freeCodeCamp, etc.). Leave '' if none.
export const certifications = [
  {
    name: 'Data Analytics Essentials',
    issuer: 'Cisco Networking Academy',
    date: 'Mar 2026',
    image: 'certificates/cisco-data-analytics-essentials.jpg',
    pdf: 'certificates/cisco-data-analytics-essentials.pdf',
    link: 'https://www.credly.com/badges/760c70d8-b4b6-4fb9-a5b0-c7447d0fc8ca',
  },
  {
    name: 'AWS Academy Graduate – Cloud Foundations',
    issuer: 'Amazon Web Services',
    date: 'Mar 2026',
    image: 'https://images.credly.com/images/e3541a0c-dd4a-4820-8052-5001006efc85/blob',
    pdf: '',
    link: 'https://www.credly.com/badges/0e84fc43-a2a6-4081-a4ce-ec79a6803497',
  },
  {
    name: 'AI Fundamentals with IBM SkillsBuild',
    issuer: 'Cisco Networking Academy',
    date: 'Mar 2026',
    image: 'certificates/cisco-ai-fundamentals-ibm-skillsbuild.jpg',
    pdf: 'certificates/cisco-ai-fundamentals-ibm-skillsbuild.pdf',
    link: 'https://www.credly.com/badges/42a3591f-14f1-499e-9428-295e9f884657',
  },
  {
    name: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM SkillsBuild',
    date: 'Mar 2026',
    image: 'https://images.credly.com/images/82b908e1-fdcd-4785-9d32-97f11ccbcf08/image.png',
    pdf: '',
    link: 'https://www.credly.com/badges/369eab21-8790-4fcb-9e3a-30425f32fab8',
  },
  {
    name: 'Cyber Threat Management',
    issuer: 'Cisco Networking Academy',
    date: 'Nov 2025',
    image: 'certificates/cisco-cyber-threat-management.jpg',
    pdf: 'certificates/cisco-cyber-threat-management.pdf',
    link: 'https://www.credly.com/badges/1d07a7ad-b036-46f3-85c3-0210d6eef59b',
  },
  {
    name: 'Endpoint Security',
    issuer: 'Cisco Networking Academy',
    date: 'Aug 2025',
    image: 'certificates/cisco-endpoint-security.jpg',
    pdf: 'certificates/cisco-endpoint-security.pdf',
    link: 'https://www.credly.com/badges/de47fa72-1452-4f03-908b-0a1f7c550405',
  },
  {
    name: 'Learning Data Analytics: 1 Foundations',
    issuer: 'LinkedIn Learning',
    date: 'Jun 2025',
    image: 'certificates/linkedin-learning-data-analytics-foundations.jpg',
    pdf: 'certificates/linkedin-learning-data-analytics-foundations.pdf',
    link: 'https://www.linkedin.com/learning/certificates/b6d6248de4abe2a94374c5304a1766ea6689b020e983a4502be09381a25d97cf',
  },
  {
    name: 'Introduction to Career Skills in Data Analytics (2022)',
    issuer: 'LinkedIn Learning',
    date: 'May 2025',
    image: 'certificates/linkedin-career-skills-data-analytics.jpg',
    pdf: 'certificates/linkedin-career-skills-data-analytics.pdf',
    link: 'https://www.linkedin.com/learning/certificates/7dc14823c0b09c9c4e799806167b369910feb5f20a0eabd2b59302c1f5fb097e',
  },
  {
    name: 'Relational Database V8',
    issuer: 'freeCodeCamp',
    date: 'Feb 2025',
    image: 'certificates/fcc-relational-database.jpg',
    pdf: '',
    link: 'https://freecodecamp.org/certification/randel_yumul/relational-database-v8',
  },
  {
    name: 'JavaScript Essentials 1',
    issuer: 'Cisco Networking Academy',
    date: 'Oct 2024',
    image: 'certificates/cisco-javascript-essentials-1.jpg',
    pdf: 'certificates/cisco-javascript-essentials-1.pdf',
    link: 'https://www.credly.com/badges/e62b1b70-c9b9-4f95-80ae-05e48fe834a2',
  },
  {
    name: 'Work with Components in Figma',
    issuer: 'Coursera',
    date: 'Sep 2024',
    image: 'certificates/coursera-figma-components.jpg',
    pdf: 'certificates/coursera-figma-components.pdf',
    link: 'https://coursera.org/verify/0MWYZ8TNFYDQ',
  },
  {
    name: 'Legacy Responsive Web Design V8',
    issuer: 'freeCodeCamp',
    date: 'Sep 2024',
    image: 'certificates/fcc-responsive-web-design.jpg',
    pdf: '',
    link: 'https://freecodecamp.org/certification/randel_yumul/responsive-web-design',
  },
  {
    name: 'CompTIA IT Fundamentals+ (ITF+)',
    issuer: 'CompTIA',
    date: 'Nov 2023',
    image: 'certificates/comptia-itf.jpg',
    pdf: 'certificates/comptia-itf.pdf',
    link: 'https://www.credly.com/badges/63063bec-3120-4c64-95aa-a6697ae41c30',
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
    badges: ['Team of 8', 'Hackathon', 'Godot', 'May 2026'],
    description:
      "A narrative-driven psychological mystery puzzle game built in Godot 4, where the environment reacts dynamically to the player's mental state and performance.",
    highlights: [
      {
        label: 'My Role',
        text: 'Game Developer, engineering core gameplay, environment, and audio systems in Godot 4.',
      },
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
    badges: ['Hackathon', '1st Runner-Up', 'Next.js', 'Tailwind', 'Leaflet', 'AI'],
    description:
      'Assist, Locate, Verify, Inform, Navigate: a disaster response app built in 2 days at the Cloudstaff AI Hackathon 2025, made to help communities when typhoons, earthquakes, and floods hit.',
    highlights: [
      {
        label: 'My Role',
        text: 'Frontend Developer. Implemented the full-stack web interface with Next.js, Tailwind CSS, and Leaflet, connecting the user experience to AI workflows powered by n8n and Dify.',
      },
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
    // repo is private, so the button is hidden. Paste the URL back if it becomes public:
    // https://github.com/jimvdz/cs-hackathon
    links: [{ label: 'View repo', url: '' }],
    video: '',
    image: 'projects/alvin.jpg',
  },
  {
    title: 'AldawWave',
    badges: ['Competition', 'Top 10 of 40', 'Python · Flask', 'Gemini API', 'Google Maps'],
    description:
      'A data-driven commute recommender web app that helps commuters avoid heat stress by suggesting the best time to leave, built over Sep – Nov 2025.',
    highlights: [
      {
        label: 'My Role',
        text: 'Frontend Developer who directed the team to a Top 10 finish among 40 teams nationwide.',
      },
      {
        label: 'Predictive Model',
        text: 'Worked with the team on a model using historical PAGASA data, combined with the OpenMeteo and Google Maps APIs to calculate optimal departure times.',
      },
      {
        label: 'AI Recommendations',
        text: 'Helped implement the Google Gemini API to give personalized travel tips based on real-time heat index forecasts and crowd density.',
      },
      {
        label: 'Top 5 Departure Times',
        text: 'Checks a 10-hour window before your target arrival and ranks the 5 safest departure times by expected heat index, with a 24-hour heat index graph.',
      },
    ],
    links: [{ label: 'View repo', url: 'https://github.com/RandelYumul/AldawWave' }],
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
      'A mobile finance tracker that streamlines liquidation and reporting for 60+ student organizations, replacing manual spreadsheets and paper logs with a secure, shared, real-time platform.',
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
        label: 'Audit-Ready Logic',
        text: 'System rules follow the Commission on Financial Audit – Holy Angel University (CFA-HAU) guidelines for financial transparency and accountability.',
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
    // repo is private, so the button is hidden. Paste the URL back if it becomes public:
    // https://github.com/JReshley/FundBuddy
    links: [{ label: 'View repo', url: '' }],
    video: 'projects/fundbuddy.mp4',
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
    video: 'projects/virtuohero.mp4',
    image: '',
  },
  {
    title: 'HAU Monster Hunter',
    badges: ['Team of 4', 'Backend', 'Flutter', 'AWS', 'Mar 2026'],
    description:
      'A location-based monster hunting game with a retro pixel look: players walk to real-world spots on a live map to catch monsters, build a collection, and climb a global leaderboard.',
    highlights: [
      {
        label: 'My Role',
        text: 'Backend Developer on a team of 4, working on the REST API and the AWS cloud setup behind the app.',
      },
      {
        label: 'REST API & Login',
        text: 'JWT-secured endpoints for players, monsters, catches, the leaderboard, password reset, and account deletion.',
      },
      {
        label: 'Server-Checked Catches',
        text: 'Every capture is validated by the backend, so players must really be inside the monster\'s spawn radius.',
      },
      {
        label: 'Multi-Region AWS',
        text: 'API server in Paris and database in North Virginia, linked by private VPC peering so database traffic never touches the public internet.',
      },
      {
        label: 'Zero-Trust & Cost Control',
        text: 'Servers are hidden behind a Tailscale VPN, admins can start and stop EC2 instances from the app, and CloudWatch monitors server health.',
      },
    ],
    links: [{ label: 'View repo', url: 'https://github.com/JReshley/HAU-Pokemon-Game' }],
    video: '',
    image: '', // no project image in the repo, so GitHub's preview card is shown
  },
  {
    title: 'sKEEP',
    badges: ['Mobile App', 'Flutter', 'Dart', 'Sep 2025'],
    description:
      'A mobile inventory app for small school-supply stores that tracks stock, prices, and suppliers right on the phone, with no internet needed.',
    highlights: [
      {
        label: 'Stock Dashboard',
        text: 'Shows total stock, how many items are running low (under 20), and the total value of the inventory at a glance.',
      },
      {
        label: 'Product Management',
        text: 'Add and edit products with name, supplier, unit, price, quantity, and a product photo.',
      },
      {
        label: 'Transaction History',
        text: 'Every stock change is recorded, with search and sorting to quickly find past changes.',
      },
      {
        label: 'Works Offline',
        text: 'Products and history are saved as files on the device, with login, sign-up, and a profile page.',
      },
    ],
    links: [{ label: 'View repo', url: 'https://github.com/RandelYumul/sKEEP' }],
    video: '',
    image: 'projects/skeep.jpg',
  },
]

export const skills = [
  { group: 'Languages', items: ['JavaScript', 'Python', 'Java', 'Dart', 'HTML', 'CSS'] },
  { group: 'Frameworks', items: ['React', 'Next.js', 'Tailwind CSS', 'Flutter', 'Godot 4'] },
  { group: 'Databases & Backend', items: ['PostgreSQL', 'SQL', 'Supabase'] },
  { group: 'Tools & Design', items: ['Git', 'GitHub', 'Figma', 'VS Code'] },
  {
    group: 'Professional',
    items: ['Critical Thinking', 'Analytical Thinking', 'Adaptability', 'Teamwork', 'Leadership'],
    soft: true, // shown as the moving strip instead of boxes
  },
]

// Contact form: create a free form at https://formspree.io and paste its endpoint.
// Leave empty to hide the form and show only the email button.
export const contactFormEndpoint = ''