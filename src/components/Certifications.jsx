import { useEffect, useRef, useState } from 'react'
import { certifications } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

const isUrl = (s) => /^https?:\/\//.test(s)
const toSrc = (s) => (isUrl(s) ? s : import.meta.env.BASE_URL + s)

// Certificate picture. If it's missing or fails to load (e.g. an outside link
// is down), it shows the issuer name instead of a broken-image icon.
function CertImage({ cert, className = '', alt = '' }) {
  const [failed, setFailed] = useState(false)

  if (!cert.image || failed) {
    return (
      <span className={`cert-thumb-empty ${className}`.trim()}>
        {cert.issuer}
        {cert.pdf && <small>PDF · tap to open</small>}
      </span>
    )
  }

  return (
    <img
      src={toSrc(cert.image)}
      alt={alt}
      className={className || undefined}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}

// Grid of certificate images (3 per row on desktop).
// Click one to see it full size in a pop-up viewer.
export default function Certifications() {
  const [selected, setSelected] = useState(null) // the certificate being viewed
  const dialogRef = useRef(null)

  // Open the pop-up whenever a certificate is selected
  useEffect(() => {
    if (selected && !dialogRef.current.open) dialogRef.current.showModal()
  }, [selected])

  function close() {
    dialogRef.current.close() // fires onClose below
  }

  return (
    <section id="certifications" className="section alt">
      <div className="container">
        <Reveal as="h2" className="section-title">
          Certifications
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            // Reveal wraps the card so its slide-in doesn't fight the card's hover lift
            <Reveal key={cert.name + cert.date} delay={(i % 3) * 100}>
              <article className="cert-card">
                <div className="cert-thumb">
                  <CertImage cert={cert} />
                </div>

                <div className="cert-body">
                  <h3>{cert.name}</h3>
                  <p className="cert-meta">{cert.issuer}</p>
                  <p className="cert-date">{cert.date}</p>
                </div>

                {/* Invisible button covering the whole card = the whole card is clickable */}
                <button
                  type="button"
                  className="cert-open"
                  onClick={() => setSelected(cert)}
                  aria-label={`View ${cert.name} certificate from ${cert.issuer}`}
                />
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Pop-up viewer. <dialog> handles focus and the Esc key for us. */}
      <dialog
        ref={dialogRef}
        className="cert-dialog"
        onClose={() => setSelected(null)}
        // click on the dark area outside the box = close
        onClick={(e) => e.target === dialogRef.current && close()}
        aria-label={selected ? `${selected.name} certificate` : 'Certificate'}
      >
        {selected && (
          <div className="cert-dialog-box">
            <button type="button" className="cert-close" onClick={close} aria-label="Close">
              ✕
            </button>

            <CertImage
              key={selected.name} /* fresh start for each certificate */
              cert={selected}
              className="cert-full"
              alt={`${selected.name} certificate from ${selected.issuer}`}
            />

            <div className="cert-dialog-info">
              <div>
                <h3>{selected.name}</h3>
                <p className="cert-meta">
                  {selected.issuer} · {selected.date}
                </p>
              </div>
              <div className="cert-dialog-actions">
                {selected.pdf && (
                  <a href={toSrc(selected.pdf)} target="_blank" rel="noreferrer" className="btn btn-outline">
                    Open PDF
                  </a>
                )}
                {selected.link && (
                  <a href={selected.link} target="_blank" rel="noreferrer" className="btn btn-primary">
                    Verify credential
                  </a>
                )}
              </div>
            </div>
          </div>
        )}
      </dialog>
    </section>
  )
}
