import { skills } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Skills
        </Reveal>
        <div className="skills-grid">
          {skills.map((group, i) => (
            <Reveal key={group.group} className="skill-group" delay={i * 100}>
              <h3>{group.group}</h3>
              <ul className="tags">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
