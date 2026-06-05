import { useEffect, useRef } from 'react'

const PREFIX = 'scroll:'

export function useScrollMemory(key: string) {
  const restored = useRef(false)

  // Restore on mount with validated scroll value
  useEffect(() => {
    if (restored.current) return
    restored.current = true
    const saved = sessionStorage.getItem(PREFIX + key)
    if (saved) {
      const y = Number(saved)
      if (Number.isFinite(y) && y >= 0) {
        const id = setTimeout(() => { window.scrollTo({ top: y, behavior: 'instant' }) }, 80)
        return () => clearTimeout(id)
      }
    }
  }, [key])

  // Save on scroll via rAF throttle — no separate unmount write to avoid double-write
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
    return () => window.removeEventListener('scroll', onScroll)
  }, [key])
}
