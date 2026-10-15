import { education } from '../data/portfolio.js'

export default function Education() {
  return (
    <section id="education" className="section alt">
      <div className="container narrow">
        <h2 className="section-title">Education</h2>
        <ol className="timeline">
          {education.map((item) => (
            <li key={item.title} className="timeline-item">
              <p className="timeline-date">{item.date}</p>
              <h3>{item.title}</h3>
              <p className="timeline-place">{item.place}</p>
              {item.details && <p>{item.details}</p>}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
