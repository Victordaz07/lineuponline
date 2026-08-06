import { useRef, useState } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'
import { useYoutubeDock } from '../lib/useYoutubeDock'
import { buildYoutubeWatchVideosUrl } from '../lib/youtubePlaylist'
import { SongInfoPanel } from './SongInfoPanel'

function formatTime(seconds: number): string {
  if (!Number.isFinite(seconds) || seconds < 0) return '0:00'
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, '0')}`
}

export function FullPlayer() {
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
  const closeFullPlayer = usePlayerStore((s) => s.closeFullPlayer)

  const videoSlotRef = useRef<HTMLDivElement>(null)
  const isYoutube = currentTrack?.type === 'youtube'
  useYoutubeDock(videoSlotRef, !!isYoutube && isFullPlayerOpen)

  const [showInfo, setShowInfo] = useState(false)

  if (!currentTrack || !isFullPlayerOpen) return null

  // Desde la canción actual en adelante, para retomar donde iba en vez de reiniciar el álbum
  const currentIndex = queue.findIndex((t) => t.id === currentTrack.id)
  const remainingQueue = currentIndex >= 0 ? queue.slice(currentIndex) : [currentTrack]
  const watchInYoutubeUrl = buildYoutubeWatchVideosUrl(
    remainingQueue.filter((t) => t.type === 'youtube' && t.youtubeVideoId).map((t) => t.youtubeVideoId as string),
  )

  // La ficha solo existe para canciones del catálogo musical (no podcast, por ahora)
  const hasSongInfo = currentTrack.type !== 'podcast' && !!currentTrack.songMeta

  if (showInfo && currentTrack.songMeta) {
    return (
      <SongInfoPanel meta={currentTrack.songMeta} title={currentTrack.title} onClose={() => setShowInfo(false)} />
    )
  }

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center px-6 py-10 font-ui"
      style={{ background: 'radial-gradient(circle at 50% 0%, rgb(var(--sg-gold) / 0.16), rgb(var(--navy-deep)) 60%)' }}
    >
      <button
        onClick={closeFullPlayer}
        className="absolute left-6 top-6 flex items-center gap-1.5 text-xs uppercase tracking-widest text-parchment/60"
        aria-label="Minimizar reproductor"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M4 6l4 4 4-4" />
        </svg>
        Minimizar
      </button>

      {hasSongInfo && (
        <button
          onClick={() => setShowInfo(true)}
          className="absolute right-6 top-6 flex items-center gap-1.5 text-xs uppercase tracking-widest text-sg-gold"
          aria-label="Ver información de la canción"
        >
          <svg width="15" height="15" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
            <circle cx="8" cy="8" r="6.5" />
            <path d="M8 7.2v4M8 5.2v.1" strokeLinecap="round" />
          </svg>
          Info
        </button>
      )}

      {/* Funda + disco: si es youtube, el iframe real se acopla encima */}
      <div
        ref={videoSlotRef}
        className="vinyl-sleeve relative mb-8 flex aspect-square w-full max-w-[17rem] items-center justify-center overflow-hidden rounded-[22px] shadow-2xl ring-1 ring-sg-gold/25"
      >
        {!isYoutube && (
          <div
            className="vinyl-disc flex items-center justify-center rounded-full border-[3px] border-sg-gold/45 shadow-2xl"
            style={{
              width: '62%',
              height: '62%',
              animation: 'spinVinyl 4s linear infinite',
              animationPlayState: isPlaying ? 'running' : 'paused',
            }}
          >
            {currentTrack.coverUrl ? (
              <img
                src={currentTrack.coverUrl}
                alt={currentTrack.title}
                className="h-[38%] w-[38%] rounded-full border border-sg-gold/40 object-cover"
              />
            ) : (
              <span className="text-3xl" aria-hidden="true">🎙️</span>
            )}
          </div>
        )}
      </div>

      <h1 className="mb-1 text-center font-display text-3xl font-semibold text-parchment">{currentTrack.title}</h1>
      <p className="mb-8 text-sm font-semibold text-sg-gold">{currentTrack.subtitle}</p>

      {/* Scrubber */}
      <input
        type="range"
        min={0}
        max={duration || 100}
        value={progress}
        onChange={(e) => seek(Number(e.target.value))}
        className="mb-2 w-full max-w-sm accent-sg-gold-light"
        aria-label="Progreso de la canción"
      />
      <div className="mb-8 flex w-full max-w-sm justify-between text-[11px] text-parchment/40">
        <span>{formatTime(progress)}</span>
        <span>{formatTime(duration)}</span>
      </div>

      {/* Controles */}
      <div className="flex items-center gap-8">
        <button
          onClick={prev}
          className="flex h-12 w-12 items-center justify-center rounded-full text-parchment/80 transition hover:bg-navy-mid hover:text-parchment active:scale-95"
          aria-label="Anterior"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M7 6a1 1 0 0 1 2 0v4.7l8.5-5.1A1 1 0 0 1 19 6.5v11a1 1 0 0 1-1.5.9L9 13.3V18a1 1 0 1 1-2 0V6z" />
          </svg>
        </button>
        <button
          onClick={togglePlay}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-sg-gold text-ink shadow-xl transition hover:brightness-105 active:scale-95"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <rect x="6" y="5" width="4" height="14" rx="1" />
              <rect x="14" y="5" width="4" height="14" rx="1" />
            </svg>
          ) : (
            <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ marginLeft: 2 }}>
              <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
            </svg>
          )}
        </button>
        <button
          onClick={next}
          className="flex h-12 w-12 items-center justify-center rounded-full text-parchment/80 transition hover:bg-navy-mid hover:text-parchment active:scale-95"
          aria-label="Siguiente"
        >
          <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M17 6a1 1 0 0 0-2 0v4.7L6.5 5.6A1 1 0 0 0 5 6.5v11a1 1 0 0 0 1.5.9L15 13.3V18a1 1 0 0 0 2 0V6z" />
          </svg>
        </button>
      </div>

      {isYoutube && watchInYoutubeUrl && (
        <a
          href={watchInYoutubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 flex items-center gap-1.5 text-xs uppercase tracking-widest text-parchment/50"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12z" />
          </svg>
          Escuchar sin cortes en YouTube
        </a>
      )}
    </div>
  )
}
