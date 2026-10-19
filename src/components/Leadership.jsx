import { useEffect, useRef } from 'react'
import { leadership } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'
import '../leadership.css'

// Two-sided timeline:
//   card | ● | date        (1st role: card on the LEFT)
//   date | ● | card        (2nd role: card on the RIGHT) ... and so on
// The center line fills up as you scroll, and each dot lights up when the line reaches it.
// On phones everything sits on the right of one line on the left.
export default function Leadership() {
  const listRef = useRef(null)

  useEffect(() => {
    const list = listRef.current
    if (!list) return

    // No animations wanted → show the line full and every dot lit
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      list.style.setProperty('--progress', 1)
      list.querySelectorAll('.lead-row').forEach((row) => (row.dataset.active = 'true'))
      return
    }

    let frame = 0
    function update() {
      frame = 0
      const box = list.getBoundingClientRect()
      const marker = window.innerHeight * 0.6 // the line "fills" up to 60% down the screen
      const progress = Math.min(Math.max((marker - box.top) / box.height, 0), 1)
      list.style.setProperty('--progress', progress)

      // light up each dot once the fill line has passed it
      list.querySelectorAll('.lead-row').forEach((row) => {
        const dot = row.querySelector('.lead-dot').getBoundingClientRect()
        // a data- attribute (not a class) so React never wipes it when it re-renders the row
        row.dataset.active = dot.top + dot.height / 2 < marker
      })
    }

    // requestAnimationFrame = run at most once per screen refresh (smooth, not wasteful)
    function onScroll() {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(frame)
    }
  }, [])

  return (
    <section id="leadership" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title lead-title">
          Leadership &amp; Activities
        </Reveal>
        <Reveal as="p" className="lead-sub" delay={100}>
          Student organizations I&apos;ve served and helped lead
        </Reveal>

        <ol className="lead-list" ref={listRef}>
          {/* the line in the middle: a faint track + a bright fill that grows */}
          <span className="lead-line" aria-hidden="true">
            <span className="lead-line-fill" />
          </span>

          {leadership.map((role, i) => (
            <Reveal
              as="li"
              key={role.title + role.place}
              className={`lead-row ${i % 2 === 0 ? 'left' : 'right'}`}
            >
              <div className="lead-card">
                <span className="lead-num" aria-hidden="true">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="lead-date-inline">{role.date}</p>
                <h3>{role.title}</h3>
                <p className="lead-place">{role.place}</p>
                <ul className="lead-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>

              <span className="lead-dot" aria-hidden="true" />

              <p className="lead-date" aria-hidden="true">
                {role.date}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
