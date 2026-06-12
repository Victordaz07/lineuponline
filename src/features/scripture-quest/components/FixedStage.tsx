import { useEffect, useRef, useState, type ReactNode } from 'react'

const STAGE_W = 1280
const STAGE_H = 720

/**
 * Escenario fijo de 1280×720 para pantallas de anfitrión (TV/proyector).
 * Se escala uniformemente al contenedor mediante ResizeObserver.
 */
export function FixedStage({ children }: { children: ReactNode }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = wrapperRef.current
    if (!el) return
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        setScale(Math.min(width / STAGE_W, height / STAGE_H))
      }
    })
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={wrapperRef}
      className="flex w-full items-center justify-center overflow-hidden"
      style={{ minHeight: 'min(72vh, 720px)' }}
    >
      <div
        className="sq-live-bg"
        style={{
          width: STAGE_W,
          height: STAGE_H,
          transform: `scale(${scale})`,
          transformOrigin: 'center center',
          flexShrink: 0,
          borderRadius: 24,
          padding: 40,
          overflow: 'hidden',
        }}
      >
        {children}
      </div>
    </div>
  )
}
