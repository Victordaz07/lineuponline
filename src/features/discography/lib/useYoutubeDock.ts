// Reposiciona el wrapper fijo del YouTube iframe para que coincida
// visualmente con el slot del MiniPlayer o del FullPlayer, sin desmontar
// nunca el iframe (así el video/audio no se corta al navegar).

import { useEffect, type RefObject } from 'react'

export function useYoutubeDock(slotRef: RefObject<HTMLElement | null>, active: boolean) {
  useEffect(() => {
    if (!active) return

    const wrapper = document.getElementById('sg-youtube-mount-wrapper')
    if (!wrapper || !slotRef.current) return

    const updatePosition = () => {
      if (!slotRef.current) return
      const rect = slotRef.current.getBoundingClientRect()
      wrapper.style.top = `${rect.top}px`
      wrapper.style.left = `${rect.left}px`
      wrapper.style.width = `${rect.width}px`
      wrapper.style.height = `${rect.height}px`
    }

    updatePosition()
    window.addEventListener('resize', updatePosition)
    window.addEventListener('scroll', updatePosition, true)

    return () => {
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition, true)
    }
  }, [slotRef, active])
}
