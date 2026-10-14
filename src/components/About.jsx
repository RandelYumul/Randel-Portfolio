import { about } from '../data/portfolio.js'

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container narrow">
        <h2 className="section-title">About me</h2>
        {about.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
