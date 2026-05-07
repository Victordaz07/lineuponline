import { useEffect, useRef } from 'react'

const PREFIX = 'scroll:'

export function useScrollMemory(key: string) {
  const restored = useRef(false)

  // Restore on mount
  useEffect(() => {
    if (restored.current) return
    restored.current = true
    const saved = sessionStorage.getItem(PREFIX + key)
    if (saved) {
      const y = parseInt(saved, 10)
      // Wait for layout to settle
      const id = setTimeout(() => { window.scrollTo({ top: y, behavior: 'instant' }) }, 80)
      return () => clearTimeout(id)
    }
  }, [key])

  // Save on unmount and on scroll (throttled)
  useEffect(() => {
    let ticking = false
    const onScroll = () => {
      if (!ticking) {
        ticking = true
        requestAnimationFrame(() => {
          sessionStorage.setItem(PREFIX + key, String(Math.round(window.scrollY)))
          ticking = false
        })
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      sessionStorage.setItem(PREFIX + key, String(Math.round(window.scrollY)))
      window.removeEventListener('scroll', onScroll)
    }
  }, [key])
}
