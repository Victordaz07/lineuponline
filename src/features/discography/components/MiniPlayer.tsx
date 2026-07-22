// Barra persistente que vive sobre el BottomNav (montada una vez en Layout.tsx).
// Al tocarla se abre el FullPlayer; el iframe de YouTube se acopla aquí vía
// useYoutubeDock cuando el FullPlayer está cerrado, sin desmontarse nunca.

import { useRef } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'
import { useYoutubeDock } from '../lib/useYoutubeDock'

export function MiniPlayer() {
  const currentTrack = usePlayerStore((s) => s.currentTrack)
  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const isFullPlayerOpen = usePlayerStore((s) => s.isFullPlayerOpen)
  const progress = usePlayerStore((s) => s.progress)
  const duration = usePlayerStore((s) => s.duration)
  const togglePlay = usePlayerStore((s) => s.togglePlay)
  const openFullPlayer = usePlayerStore((s) => s.openFullPlayer)

  const videoSlotRef = useRef<HTMLDivElement>(null)
  const isYoutube = currentTrack?.type === 'youtube'
  useYoutubeDock(videoSlotRef, !!isYoutube && !isFullPlayerOpen)

  if (!currentTrack || isFullPlayerOpen) return null

  const progressPercent = duration > 0 ? Math.min(100, (progress / duration) * 100) : 0

  return (
    <div className="border-t border-sg-gold/15 bg-navy-deep/95 backdrop-blur-md">
      <div className="h-0.5 bg-navy-mid">
        <div className="h-full bg-sg-gold-light transition-[width]" style={{ width: `${progressPercent}%` }} />
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={openFullPlayer}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            openFullPlayer()
          }
        }}
        className="flex w-full items-center gap-3 px-4 py-2 text-left"
        aria-label="Abrir reproductor"
      >
        <div ref={videoSlotRef} className="relative h-10 w-10 shrink-0 overflow-hidden rounded-md bg-navy-mid">
          {!isYoutube && (
            <img src={currentTrack.coverUrl} alt="" className="h-full w-full object-cover" />
          )}
        </div>
        <div className="min-w-0 flex-1">
          <p className="truncate font-ui text-sm font-medium text-parchment">{currentTrack.title}</p>
          <p className="truncate font-ui text-xs text-parchment/50">{currentTrack.subtitle}</p>
        </div>
        <button
          onClick={(e) => {
            e.stopPropagation()
            togglePlay()
          }}
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sg-gold text-navy-deep"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
      </div>
    </div>
  )
}
