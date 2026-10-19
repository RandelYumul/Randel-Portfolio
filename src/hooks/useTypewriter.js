import { useEffect, useState } from 'react'

// Types a word letter by letter, waits, deletes it, then types the next word.
// Returns the text to show right now, e.g. "Hack" → "Hackathon" → "Hack" → "" → "UI/UX..."
//
//   const text = useTypewriter(['Hackathon Builder', 'Problem Solver'])
export default function useTypewriter(words, { typeSpeed = 85, deleteSpeed = 45, pause = 1600 } = {}) {
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0) // which word we're on
  const [deleting, setDeleting] = useState(false)

  // Visitors who turn off animations just see the first word, no typing
  const reduceMotion =
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

  useEffect(() => {
    if (reduceMotion || words.length === 0) return

    const word = words[index % words.length]
    const doneTyping = !deleting && text === word
    const doneDeleting = deleting && text === ''

    // how long to wait before the next step
    let delay = deleting ? deleteSpeed : typeSpeed
    if (doneTyping) delay = pause
    if (doneDeleting) delay = 350

    const timer = setTimeout(() => {
      if (doneTyping) {
        setDeleting(true)
      } else if (doneDeleting) {
        setDeleting(false)
        setIndex((i) => i + 1)
      } else {
        // add or remove one letter
        setText(word.slice(0, text.length + (deleting ? -1 : 1)))
      }
    }, delay)

    return () => clearTimeout(timer) // stop the old timer before the next step
  }, [text, deleting, index, words, reduceMotion, typeSpeed, deleteSpeed, pause])

  return reduceMotion ? words[0] ?? '' : text
}
