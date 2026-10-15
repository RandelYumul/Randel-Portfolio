import { useEffect, useState } from 'react'
import { profile, navLinks } from '../data/portfolio.js'
import ThemeToggle from './ThemeToggle.jsx'

// Layout (3 columns):  [ logo ]   [ centered links ]   [ theme + menu ]
// On small screens the links move into a dropdown opened by the ☰ button.
export default function Navbar() {
  // true = mobile menu is open
  const [open, setOpen] = useState(false)

  // Close the mobile menu if the screen becomes wide (e.g. phone rotated)
  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth > 1024) setOpen(false)
    }
    window.addEventListener('resize', closeOnResize)
    return () => window.removeEventListener('resize', closeOnResize)
  }, [])

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="logo" onClick={() => setOpen(false)}>
          {profile.initials}
        </a>

        <nav
          id="main-nav"
          className={open ? 'nav-links open' : 'nav-links'}
          aria-label="Main"
        >
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav-actions">
          <ThemeToggle />
          <button
            className="menu-btn"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="main-nav"
            onClick={() => setOpen(!open)}
          >
            {open ? '✕' : '☰'}
          </button>
        </div>
      </div>
    </header>
  )
}
