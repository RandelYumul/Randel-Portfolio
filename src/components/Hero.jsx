import { profile } from '../data/portfolio.js'
import useTypewriter from '../hooks/useTypewriter.js'
import '../hero.css'

// Turns 'images/x.jpg' into the right URL on GitHub Pages ('/Randel-Portfolio/images/x.jpg')
const asset = (path) => import.meta.env.BASE_URL + path

// Words the headline types out, one after another
const WORDS = profile.typingWords?.length ? profile.typingWords : [profile.role]

export default function Hero() {
  const typed = useTypewriter(WORDS)

  return (
    <section id="top" className="hero">
      {/* ---------- Background layers (decoration only) ---------- */}
      {profile.heroBackground && (
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${asset(profile.heroBackground)})` }}
          aria-hidden="true"
        />
      )}
      <div className="hero-overlay" aria-hidden="true" />
      <div className="hero-orb orb-1" aria-hidden="true" />
      <div className="hero-orb orb-2" aria-hidden="true" />
      <div className="hero-orb orb-3" aria-hidden="true" />
      <span className="hero-dot" aria-hidden="true" />

      {/* ---------- Content ---------- */}
      <div className="container hero-inner">
        <p className="hero-intro">
          <span className="hero-intro-dot" aria-hidden="true" />
          {profile.intro ?? `Hi! I'm ${profile.name}`}
        </p>

        <h1 className="hero-title">
          <span className="hero-title-line">{profile.headline ?? profile.role}</span>
          {/* The typing part is hidden from screen readers (it changes every second);
              they read the full list below instead. */}
          <span className="hero-typing" aria-hidden="true">
            <span className="hero-typing-text">{typed}</span>
            <span className="hero-caret" />
          </span>
          <span className="sr-only">{WORDS.join(', ')}</span>
        </h1>

        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-outline">Contact me</a>
          {profile.resume && (
            <a href={asset(profile.resume)} className="btn btn-outline" download>
              Download CV
            </a>
          )}
        </div>

        {/* Tilted photo card with a spinning "scroll" badge */}
        <div className="hero-card-wrap">
          <div className="hero-card-float">
            <div className="hero-card-back" aria-hidden="true" />
            <div className="hero-card">
              {profile.photo ? (
                <img src={asset(profile.photo)} alt={profile.name} />
              ) : (
                <span className="hero-card-initials" aria-hidden="true">
                  {profile.initials}
                </span>
              )}
            </div>

            <a href="#about" className="scroll-badge" aria-label="Scroll down to About me">
              <svg className="scroll-badge-ring" viewBox="0 0 100 100" aria-hidden="true">
                <defs>
                  {/* an invisible circle the text follows */}
                  <path id="badge-circle" d="M50,50 m-37,0 a37,37 0 1,1 74,0 a37,37 0 1,1 -74,0" />
                </defs>
                <text>
                  <textPath href="#badge-circle" textLength="228" lengthAdjust="spacing">
                    LET&apos;S EXPLORE • SCROLL DOWN •
                  </textPath>
                </text>
              </svg>
              <span className="scroll-badge-arrow" aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
