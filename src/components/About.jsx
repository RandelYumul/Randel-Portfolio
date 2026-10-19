import { about, profile } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

const asset = (path) => import.meta.env.BASE_URL + path

// Text on the left, optional photo on the right.
// No aboutPhoto in portfolio.js → just the text, centered like before.
export default function About() {
  const hasPhoto = Boolean(profile.aboutPhoto)

  return (
    <section id="about" className="section">
      <div className={hasPhoto ? 'container about-grid' : 'container narrow'}>
        <div className="about-text">
          <Reveal as="h2" className="section-title">
            About me
          </Reveal>

          {about.map((paragraph, i) => (
            <Reveal as="p" key={i} delay={i * 100}>
              {paragraph}
            </Reveal>
          ))}

          {/* Only shows once you set "resume" in portfolio.js */}
          {profile.resume && (
            <Reveal className="about-actions" delay={about.length * 100}>
              <a
                href={asset(profile.resume)}
                className="btn btn-primary"
                download // tells the browser to save the file instead of opening it
              >
                Download CV ↓
              </a>
              <a href="#contact" className="btn btn-outline">
                Get in touch
              </a>
            </Reveal>
          )}
        </div>

        {hasPhoto && (
          <Reveal className="about-photo" delay={150}>
            <img src={asset(profile.aboutPhoto)} alt={`${profile.name}`} loading="lazy" />
          </Reveal>
        )}
      </div>
    </section>
  )
}
