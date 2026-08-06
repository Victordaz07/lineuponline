import { useEffect, useState } from 'react'

const QUERY = '(max-width: 767px)'

/** true en anchos de "móvil" (incluye web-mobile); false en desktop/tablet ancho. */
export function useIsMobileViewport(): boolean {
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(QUERY).matches : false,
  )

  useEffect(() => {
    const mq = window.matchMedia(QUERY)
    const onChange = () => setIsMobile(mq.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobile
}
