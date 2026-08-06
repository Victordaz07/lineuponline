// Barra persistente que vive sobre el BottomNav (montada una vez en Layout.tsx).
// Al tocar la portada/título se abre el FullPlayer; el iframe de YouTube se acopla
// aquí vía useYoutubeDock cuando el FullPlayer está cerrado, sin desmontarse nunca.

import { useRef } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'
import { useYoutubeDock } from '../lib/useYoutubeDock'

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function MiniPlayer() {
  const currentTrack = usePlayerStore((s) => s.currentTrack)
  const queue = usePlayerStore((s) => s.queue)
  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const isFullPlayerOpen = usePlayerStore((s) => s.isFullPlayerOpen)
  const progress = usePlayerStore((s) => s.progress)
  const duration = usePlayerStore((s) => s.duration)
  const togglePlay = usePlayerStore((s) => s.togglePlay)
  const next = usePlayerStore((s) => s.next)
  const prev = usePlayerStore((s) => s.prev)
  const seek = usePlayerStore((s) => s.seek)
  const openFullPlayer = usePlayerStore((s) => s.openFullPlayer)
  const stop = usePlayerStore((s) => s.stop)

  const videoSlotRef = useRef<HTMLDivElement>(null)
  const isYoutube = currentTrack?.type === 'youtube'
  useYoutubeDock(videoSlotRef, !!isYoutube && !isFullPlayerOpen)

  if (!currentTrack || isFullPlayerOpen) return null

  const progressPercent = duration > 0 ? Math.min(100, (progress / duration) * 100) : 0
  const idx = queue.findIndex((t) => t.id === currentTrack.id)
  const hasPrev = idx > 0
  const hasNext = idx >= 0 && idx < queue.length - 1

  return (
    <div className="border-t border-sg-gold/15 bg-navy-mid/95 shadow-player backdrop-blur-xl">
      {/* Barra de progreso interactiva (arrastrar/teclado para buscar) */}
      <div className="relative">
        <div className="h-1 w-full bg-navy-light/70">
          <div
            className="h-full rounded-r-full bg-gradient-to-r from-sg-gold to-sg-gold-light transition-[width] duration-150"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
        <input
          type="range"
          min={0}
          max={duration || 100}
          value={progress}
          onChange={(e) => seek(Number(e.target.value))}
          onClick={(e) => e.stopPropagation()}
          className="mini-seek absolute inset-x-0 -top-2"
          aria-label="Buscar en la pista"
        />
      </div>

      <div className="flex items-center gap-3 px-3 py-2 sm:px-4">
        {/* Portada + info: abre el FullPlayer */}
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
          className="flex min-w-0 flex-1 items-center gap-3 rounded-lg text-left transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sg-gold/60"
          aria-label="Abrir reproductor"
        >
          <div
            ref={videoSlotRef}
            className="vinyl-sleeve relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl shadow-md ring-1 ring-sg-gold/25"
          >
            {!isYoutube && (
              <div
                className="vinyl-disc h-7 w-7 rounded-full border border-sg-gold/50 shadow-inner"
                style={{
                  animation: 'spinVinyl 3.2s linear infinite',
                  animationPlayState: isPlaying ? 'running' : 'paused',
                }}
              />
            )}
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate font-ui text-sm font-semibold text-parchment">{currentTrack.title}</p>
            <p className="truncate font-ui text-xs text-parchment/55">{currentTrack.subtitle}</p>
            <p className="mt-0.5 hidden font-ui text-[10px] tabular-nums text-parchment/40 sm:block">
              {formatTime(progress)} / {formatTime(duration)}
            </p>
          </div>
        </div>

        {/* Ecualizador (indica reproducción) */}
        {isPlaying && (
          <div className="flex h-4 shrink-0 items-end gap-0.5" aria-hidden="true">
            <span className="h-2 w-0.5 origin-bottom animate-[eq_0.9s_ease-in-out_infinite] rounded-full bg-sg-gold-light" />
            <span className="h-3.5 w-0.5 origin-bottom animate-[eq_0.9s_ease-in-out_infinite_0.2s] rounded-full bg-sg-gold-light" />
            <span className="h-2.5 w-0.5 origin-bottom animate-[eq_0.9s_ease-in-out_infinite_0.4s] rounded-full bg-sg-gold-light" />
          </div>
        )}

        {/* Controles */}
        <div className="flex shrink-0 items-center gap-1">
          <button
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            disabled={!hasPrev}
            className="hidden h-9 w-9 items-center justify-center rounded-full text-parchment/70 transition hover:bg-navy-light hover:text-parchment disabled:opacity-30 disabled:hover:bg-transparent sm:flex"
            aria-label="Pista anterior"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M7 6a1 1 0 0 1 2 0v4.7l8.5-5.1A1 1 0 0 1 19 6.5v11a1 1 0 0 1-1.5.9L9 13.3V18a1 1 0 1 1-2 0V6z" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              togglePlay()
            }}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sg-gold text-ink shadow-md transition hover:brightness-105 active:scale-95"
            aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
          >
            {isPlaying ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <rect x="6" y="5" width="4" height="14" rx="1" />
                <rect x="14" y="5" width="4" height="14" rx="1" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
              </svg>
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            disabled={!hasNext}
            className="hidden h-9 w-9 items-center justify-center rounded-full text-parchment/70 transition hover:bg-navy-light hover:text-parchment disabled:opacity-30 disabled:hover:bg-transparent sm:flex"
            aria-label="Pista siguiente"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17 6a1 1 0 0 0-2 0v4.7L6.5 5.6A1 1 0 0 0 5 6.5v11a1 1 0 0 0 1.5.9L15 13.3V18a1 1 0 1 0 2 0V6z" />
            </svg>
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              stop()
            }}
            className="flex h-9 w-8 shrink-0 items-center justify-center text-parchment/40 transition hover:text-parchment"
            aria-label="Cerrar reproductor"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
