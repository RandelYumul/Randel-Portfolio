import { certifications } from '../data/portfolio.js'

export default function Certifications() {
  return (
    <section id="certifications" className="section alt">
      <div className="container">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <article key={cert.name} className="cert-card">
              <h3>{cert.name}</h3>
              <p className="cert-meta">
                {cert.issuer} · {cert.date}
              </p>
              {cert.link && (
                <a href={cert.link} target="_blank" rel="noreferrer">
                  View certificate
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
