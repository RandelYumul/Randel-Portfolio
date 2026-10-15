import { leadership } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Leadership() {
  return (
    <section id="leadership" className="section">
      <div className="container narrow">
        <Reveal as="h2" className="section-title">
          Leadership &amp; Activities
        </Reveal>

        <ol className="timeline">
          {leadership.map((role, i) => (
            <Reveal
              as="li"
              key={role.title + role.place}
              className="timeline-item"
              delay={i * 120}
            >
              <p className="timeline-date">{role.date}</p>
              <h3>{role.title}</h3>
              <p className="timeline-place">{role.place}</p>
              <ul className="timeline-points">
                {role.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
