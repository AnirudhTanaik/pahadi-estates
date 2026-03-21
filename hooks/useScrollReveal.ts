'use client'

import { useEffect } from 'react'

export function useScrollReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.reveal')

    // Mark elements as pending — this is done client-side only so SSR
    // renders them fully visible (no hydration mismatch).
    elements.forEach((el) => el.setAttribute('data-reveal', 'pending'))

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement
            el.removeAttribute('data-reveal')
            el.classList.add('show')
            observer.unobserve(el)
          }
        })
      },
      { threshold: 0.15 }
    )

    // Use rAF so the DOM has settled before we start observing
    const raf = requestAnimationFrame(() => {
      elements.forEach((el) => observer.observe(el))
    })

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])
}
