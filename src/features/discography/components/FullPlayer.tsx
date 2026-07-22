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
    <div className="fixed inset-0 z-30 flex flex-col items-center justify-center bg-navy-deep px-6 py-10 font-ui">
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

      {/* Slot visual: si es youtube, el iframe real se acopla aquí encima */}
      <div
        ref={videoSlotRef}
        className="relative mb-8 aspect-square w-full max-w-sm overflow-hidden rounded-2xl bg-navy-mid shadow-2xl"
      >
        {!isYoutube && (
          <img src={currentTrack.coverUrl} alt={currentTrack.title} className="h-full w-full object-cover" />
        )}
      </div>

      <h1 className="mb-1 text-center font-display text-3xl text-parchment">{currentTrack.title}</h1>
      <p className="mb-8 text-sm text-sg-gold">{currentTrack.subtitle}</p>

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
        <button onClick={prev} className="text-2xl text-parchment" aria-label="Anterior">
          ⏮
        </button>
        <button
          onClick={togglePlay}
          className="flex h-16 w-16 items-center justify-center rounded-full bg-sg-gold text-2xl text-navy-deep"
          aria-label={isPlaying ? 'Pausar' : 'Reproducir'}
        >
          {isPlaying ? '❚❚' : '▶'}
        </button>
        <button onClick={next} className="text-2xl text-parchment" aria-label="Siguiente">
          ⏭
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
