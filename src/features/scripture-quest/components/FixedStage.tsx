import { useEffect, useRef, useState, type ReactNode } from 'react'

const STAGE_W = 1280
const STAGE_H = 720

interface Props {
  children: ReactNode
  className?: string
}

/**
 * Renders a fixed 1280×720 canvas that scales uniformly to fill the parent.
 * Perfect for TV/projector displays and consistent game screens.
 */
export function FixedStage({ children, className = '' }: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const el = containerRef.current
    if (!el) return

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setScale(Math.min(width / STAGE_W, height / STAGE_H))
    })

    observer.observe(el)

    // Initial measurement
    const rect = el.getBoundingClientRect()
    setScale(Math.min(rect.width / STAGE_W, rect.height / STAGE_H))

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={containerRef}
      className={`flex items-center justify-center overflow-hidden ${className}`}
      style={{ width: '100%', height: '100%' }}
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
