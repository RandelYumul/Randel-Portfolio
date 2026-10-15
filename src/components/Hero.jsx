import { profile } from '../data/portfolio.js'

// Turns 'images/x.jpg' into the right URL on GitHub Pages ('/Randel-Portfolio/images/x.jpg')
const asset = (path) => import.meta.env.BASE_URL + path

export default function Hero() {
  return (
    <section id="top" className="hero">
      {/* Layer 1: background image (faded + tinted by CSS) */}
      {profile.heroBackground && (
        <div
          className="hero-bg"
          style={{ backgroundImage: `url(${asset(profile.heroBackground)})` }}
          aria-hidden="true"
        />
      )}

      {/* Layer 2: palette-colored fade so text stays readable */}
      <div className="hero-overlay" aria-hidden="true" />

      {/* Layer 3: the content (text left, image right) */}
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="eyebrow">Hi, I'm</p>
          <h1>{profile.name}</h1>
          <h2 className="hero-role">{profile.role}</h2>
          <p className="hero-tagline">{profile.tagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">View my work</a>
            <a href="#contact" className="btn btn-outline">Contact me</a>
            {profile.resume && (
              <a
                href={asset(profile.resume)}
                className="btn btn-outline"
                target="_blank"
                rel="noreferrer"
              >
                Resume
              </a>
            )}
          </div>
        </div>

        <div className="hero-media">
          {profile.photo ? (
            <img src={asset(profile.photo)} alt={profile.name} className="hero-photo" />
          ) : (
            // Placeholder until you add a photo
            <div className="hero-photo hero-photo-empty" aria-hidden="true">
              {profile.initials}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
