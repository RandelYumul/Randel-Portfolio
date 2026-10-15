import { useEffect, useRef, useState } from 'react'

// Wrap anything in <Reveal> to make it fade + slide up the first time
// it scrolls into view. Works on phones too (uses IntersectionObserver).
//
//   <Reveal>...</Reveal>                  → a <div>
//   <Reveal as="li" delay={100}>...</Reveal> → an <li>, starts 100ms later
//
// "delay" lets items in a list appear one after another (a stagger).
export default function Reveal({ as: Tag = 'div', delay = 0, className = '', children, ...rest }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Very old browsers: just show it
    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect() // animate only once
        }
      },
      // fire when 15% is visible, slightly before it reaches the bottom edge
      { threshold: 0.15, rootMargin: '0px 0px -8% 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect() // clean up if the component goes away
  }, [])

  return (
    <Tag
      ref={ref}
      className={`reveal${visible ? ' is-visible' : ''}${className ? ' ' + className : ''}`}
      style={{ '--reveal-delay': `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  )
}
