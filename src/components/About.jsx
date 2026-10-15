import { about } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <Reveal as="h2" className="section-title">
          About me
        </Reveal>
        {about.map((paragraph, i) => (
          <Reveal as="p" key={i} delay={i * 100}>
            {paragraph}
          </Reveal>
        ))}
      </div>
    </section>
  )
}
