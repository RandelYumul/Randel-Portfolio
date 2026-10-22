import { useState } from 'react'
import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import '../skills.css'

// Logos come from Devicon (free icon set), pinned to one version so they never change.
// Skills not listed here show letters instead (e.g. "SQL" → "SQL", "Unity Hub" → "UH").
const ICON_BASE = 'https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons'
const ICONS = {
  JavaScript: 'javascript',
  Python: 'python',
  Java: 'java',
  Dart: 'dart',
  HTML: 'html5',
  CSS: 'css3',
  React: 'react',
  'Next.js': 'nextjs',
  'Tailwind CSS': 'tailwindcss',
  Flutter: 'flutter',
  Express: 'express',
  'Godot 4': 'godot',
  PostgreSQL: 'postgresql',
  Supabase: 'supabase',
  Git: 'git',
  GitHub: 'github',
  Figma: 'figma',
  'VS Code': 'vscode',
}

// "soft" groups (like Professional skills) show as a moving strip instead of boxes
const isSoft = (group) => group.soft || /professional|soft/i.test(group.group)

const techGroups = skills.filter((g) => !isSoft(g))
const softSkills = skills.filter(isSoft).flatMap((g) => g.items)

// One box. If the logo fails to load, it switches to initials.
function SkillIcon({ name }) {
  const [failed, setFailed] = useState(false)
  const slug = ICONS[name]

  if (!slug || failed) {
    const words = name.replace(/[^A-Za-z0-9 ]/g, ' ').split(/\s+/).filter(Boolean)
    // one word → first 3 letters ("SQL"), more words → first letters ("Unity Hub" → "UH")
    const initials = (words.length === 1 ? words[0].slice(0, 3) : words.map((w) => w[0]).join('').slice(0, 2)).toUpperCase()
    return <span className="skill-initials">{initials}</span>
  }

  return (
    <img
      src={`${ICON_BASE}/${slug}/${slug}-original.svg`}
      alt=""
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

export default function Skills() {
  const [filter, setFilter] = useState('All') // which category tab is selected

  const tabs = ['All', ...techGroups.map((g) => g.group)]
  const shown =
    filter === 'All'
      ? techGroups.flatMap((g) => g.items.map((item) => ({ item, group: g.group })))
      : techGroups
          .filter((g) => g.group === filter)
          .flatMap((g) => g.items.map((item) => ({ item, group: g.group })))

  return (
    <section id="skills" className="section skills">
      <div className="container skills-inner">
        <Reveal as="h2" className="section-title">
          Skills
        </Reveal>
        <Reveal as="p" className="skills-sub" delay={100}>
          Tools and technologies I use to build things
        </Reveal>

        {/* Category tabs */}
        <Reveal className="skill-tabs" delay={150} role="group" aria-label="Filter skills">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              className={tab === filter ? 'skill-tab active' : 'skill-tab'}
              aria-pressed={tab === filter}
              onClick={() => setFilter(tab)}
            >
              {tab}
            </button>
          ))}
        </Reveal>

        {/* The boxes. key={filter} re-creates the grid, so the pop-in animation replays on every tab change */}
        <Reveal delay={200}>
          <ul className="skill-grid" key={filter}>
            {shown.map(({ item, group }, i) => (
              <li
                key={group + item}
                className="skill-box"
                style={{ '--i': i }} /* used for the one-after-another delay */
              >
                <span className="skill-icon">
                  <SkillIcon name={item} />
                </span>
                <span className="skill-name">{item}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        {/* Professional skills: endless moving strip */}
        {softSkills.length > 0 && (
          <Reveal className="soft-skills" delay={250}>
            <p className="soft-label">Professional skills</p>
            <div className="marquee">
              {/* the list is shown twice so the loop has no gap */}
              <div className="marquee-track">
                {[...softSkills, ...softSkills].map((skill, i) => (
                  <span key={i} className="marquee-item" aria-hidden={i >= softSkills.length}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  )
}
