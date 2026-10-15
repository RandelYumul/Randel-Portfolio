import { useState } from 'react'
import { profile, contactFormEndpoint } from '../data/portfolio.js'
import Reveal from './Reveal.jsx'

export default function Contact() {
  // 'idle' | 'sending' | 'sent' | 'error'
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault() // stop the page from reloading
    setStatus('sending')

    try {
      const res = await fetch(contactFormEndpoint, {
        method: 'POST',
        body: new FormData(e.target),
        headers: { Accept: 'application/json' },
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      e.target.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="section">
      <Reveal className="container narrow">
        <h2 className="section-title">Contact</h2>
        <p>Open to internships and junior roles. Send me a message!</p>

        {contactFormEndpoint && (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
            <label>
              Message
              <textarea name="message" rows="5" required />
            </label>

            <button className="btn btn-primary" type="submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending…' : 'Send message'}
            </button>

            {status === 'sent' && <p className="form-note ok">Thanks! I'll get back to you soon.</p>}
            {status === 'error' && (
              <p className="form-note err">Something went wrong. Please email me directly.</p>
            )}
          </form>
        )}

        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="btn btn-outline">Email me</a>
          <a href={profile.github} target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-outline">LinkedIn</a>
        </div>
      </Reveal>
    </section>
  )
}
