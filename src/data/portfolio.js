// ALL your content lives here.
// Edit this file to update your portfolio. You rarely need to touch the components.

export const profile = {
  name: 'Your Name',
  initials: 'YN',
  role: 'Computer Science Student & Web Developer',
  tagline: 'I build clean, responsive web apps and I am learning backend and APIs.',
  location: 'Philippines',
  email: 'you@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://www.linkedin.com/in/yourusername',
  resume: '', // put resume.pdf in /public and write 'resume.pdf' here
}

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const about = [
  "I'm a 4th-year Computer Science student who enjoys turning ideas into working web apps.",
  "Right now I'm strengthening my backend skills: REST APIs, databases, and authentication.",
  'Outside of code, I enjoy gaming and music.',
]

// Add, remove, or reorder projects here.
// image: put a screenshot in /public/projects/ and write 'projects/name.png'
export const projects = [
  {
    title: 'Project One',
    description: 'A short sentence about what it does and the problem it solves.',
    tech: ['React', 'Vite', 'CSS'],
    github: 'https://github.com/yourusername/project-one',
    live: '',
    image: '',
  },
  {
    title: 'Project Two',
    description: 'What you built, your role, and one result or feature you are proud of.',
    tech: ['HTML', 'JavaScript', 'PHP', 'MySQL'],
    github: 'https://github.com/yourusername/project-two',
    live: '',
    image: '',
  },
  {
    title: 'Project Three',
    description: 'A backend or API project is a great way to show your growth here.',
    tech: ['Node.js', 'Express', 'REST API'],
    github: 'https://github.com/yourusername/project-three',
    live: '',
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
