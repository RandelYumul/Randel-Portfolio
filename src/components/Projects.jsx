import { useRef, useState } from 'react'
import { projects } from '../data/portfolio.js'
import ProjectMedia from './ProjectMedia.jsx'
import Reveal from './Reveal.jsx'

// Layout:
//   PROJECTS  [ Title 1 ][ Title 2 ][ Title 3 ] →  (scrolls sideways)
//   ┌──── preview screen ────┐   badges
//   │  video / image / GitHub │   Title
//   └─────────────────────────┘   description + buttons
//   ▸ highlight   ▸ highlight   (full width, 2 columns)
export default function Projects() {
  // Which project is selected (its position in the array)
  const [active, setActive] = useState(0)
  const tabRefs = useRef([]) // lets us focus/scroll a tab from code

  const project = projects[active]
  // "?? []" = use an empty list if the field is missing, so the page never crashes
  const badges = project.badges ?? []
  const highlights = project.highlights ?? []
  // Only show buttons that have a link
  const links = (project.links ?? []).filter((link) => link.url)
  const screenUrl = links[0]?.url || project.title

  function select(index) {
    setActive(index)
    // keep the chosen title visible inside the scrolling row
    tabRefs.current[index]?.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
  }

  // Left/Right arrow keys move between titles (keyboard users)
  function handleKeyDown(e) {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return
    e.preventDefault()
    const step = e.key === 'ArrowRight' ? 1 : -1
    const next = (active + step + projects.length) % projects.length
    select(next)
    tabRefs.current[next]?.focus()
  }

  return (
    <section id="projects" className="section alt">
      <div className="container">
        {/* Header: title + horizontal list of project names */}
        <Reveal className="projects-head">
          <h2 className="section-title">Projects</h2>

          <div
            className="project-tabs"
            role="tablist"
            aria-label="Projects"
            onKeyDown={handleKeyDown}
          >
            {projects.map((p, i) => (
              <button
                key={p.title}
                ref={(el) => (tabRefs.current[i] = el)}
                role="tab"
                id={`project-tab-${i}`}
                aria-selected={i === active}
                aria-controls="project-panel"
                tabIndex={i === active ? 0 : -1}
                className={i === active ? 'project-tab active' : 'project-tab'}
                onClick={() => select(i)}
              >
                <span className="project-tab-num">{String(i + 1).padStart(2, '0')}</span>
                {p.title}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Big preview of the selected project */}
        <Reveal delay={150}>
        <div
          id="project-panel"
          role="tabpanel"
          aria-labelledby={`project-tab-${active}`}
          className="project-panel"
          key={active} /* changing key replays the fade-in animation */
        >
          <div className="screen">
            {/* fake browser bar */}
            <div className="screen-bar" aria-hidden="true">
              <span className="dot" />
              <span className="dot" />
              <span className="dot" />
              <span className="screen-url">{screenUrl}</span>
            </div>

            {/* key resets the image fallback when switching projects */}
            <ProjectMedia key={active} project={project} />
          </div>

          {/* Summary sits to the RIGHT of the screen on desktop */}
          <div className="project-summary">
            <ul className="badges">
              {badges.map((badge) => (
                <li key={badge}>{badge}</li>
              ))}
            </ul>

            <h3 className="project-title">{project.title}</h3>
            <p className="project-desc">{project.description}</p>

            {links.length > 0 && (
              <div className="project-links">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className={link.primary ? 'btn btn-primary' : 'btn btn-outline'}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Highlights go under both, full width */}
          {highlights.length > 0 && (
            <ul className="highlights">
              {highlights.map((h) => (
                <li key={h.label}>
                  <strong>{h.label}:</strong> {h.text}
                </li>
              ))}
            </ul>
          )}
        </div>
        </Reveal>
      </div>
    </section>
  )
}
