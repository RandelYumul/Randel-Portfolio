import { profile } from '../data/portfolio.js'

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container">
        <p className="eyebrow">Hi, I'm</p>
        <h1>{profile.name}</h1>
        <h2 className="hero-role">{profile.role}</h2>
        <p className="hero-tagline">{profile.tagline}</p>

        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View my work</a>
          <a href="#contact" className="btn btn-outline">Contact me</a>
          {profile.resume && (
            <a
              href={import.meta.env.BASE_URL + profile.resume}
              className="btn btn-outline"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
          )}
        </div>
      </div>
    </section>
  )
}
