import { experience } from '../data/portfolio.js'

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container narrow">
        <h2 className="section-title">Experience</h2>
        <ol className="timeline">
          {experience.map((job) => (
            <li key={job.title + job.place} className="timeline-item">
              <p className="timeline-date">{job.date}</p>
              <h3>{job.title}</h3>
              <p className="timeline-place">{job.place}</p>
              <ul className="timeline-points">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
