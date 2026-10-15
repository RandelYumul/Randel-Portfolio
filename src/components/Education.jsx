import { education } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container narrow">
        <Reveal as="h2" className="section-title">
          Education
        </Reveal>
        <ol className="timeline">
          {education.map((item, i) => (
            <Reveal as="li" key={item.title} className="timeline-item" delay={i * 120}>
              <p className="timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              {item.details && <p>{item.details}</p>}
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
