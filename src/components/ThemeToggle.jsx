import { useEffect, useState } from 'react'

// Finds the starting theme:
// 1. the visitor's saved choice, or
// 2. their device setting (light/dark), or
// 3. dark as the default.
function getInitialTheme() {
  try {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch {
    // localStorage can be blocked (private mode). Ignore and continue.
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  // Runs every time "theme" changes:
  // puts data-theme="light|dark" on <html> so the CSS switches colors, and saves it.
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      // Not saved, but the theme still works for this visit.
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
    >
      {isDark ? '☀' : '☾'}
    </button>
  )
}
