import { useEffect, useRef } from 'react'

// A soft green light that follows the mouse across the WHOLE page.
// Only on computers with a mouse (not phones), and off for visitors
// who turned off animations.
export default function CursorGlow() {
  const ref = useRef(null)

  useEffect(() => {
    const hasMouse = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!hasMouse || reduceMotion) return

    const glow = ref.current
    let frame = 0
    let x = 0
    let y = 0

    function handleMove(e) {
      x = e.clientX
      y = e.clientY
      // requestAnimationFrame = update at most once per screen refresh (smooth, cheap)
      if (!frame) {
        frame = requestAnimationFrame(() => {
          glow.style.transform = `translate(${x}px, ${y}px)`
          glow.classList.add('is-on')
          frame = 0
        })
      }
    }

    function handleLeave() {
      glow.classList.remove('is-on') // fade out when the mouse leaves the window
    }

    window.addEventListener('pointermove', handleMove)
    document.documentElement.addEventListener('mouseleave', handleLeave)

    // clean up when the component goes away
    return () => {
      window.removeEventListener('pointermove', handleMove)
      document.documentElement.removeEventListener('mouseleave', handleLeave)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />
}
