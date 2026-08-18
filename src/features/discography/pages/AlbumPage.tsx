import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { subscribeAlbum, subscribeTracksByAlbum } from '../services/discography.service'
import { usePlayerStore } from '../store/usePlayerStore'
import { buildYoutubeWatchVideosUrl } from '../lib/youtubePlaylist'
import type { Album, DiscographyTrack } from '../types'

export default function AlbumPage() {
  const { albumId } = useParams<{ albumId: string }>()
  const [album, setAlbum] = useState<Album | null | undefined>(undefined)
  const [tracks, setTracks] = useState<DiscographyTrack[] | null>(null)

  const currentTrack = usePlayerStore((s) => s.currentTrack)
  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const playTrack = usePlayerStore((s) => s.playTrack)
  const togglePlay = usePlayerStore((s) => s.togglePlay)
  const openFullPlayer = usePlayerStore((s) => s.openFullPlayer)

  useEffect(() => {
    if (!albumId) return
    const unsubAlbum = subscribeAlbum(albumId, setAlbum)
    const unsubTracks = subscribeTracksByAlbum(albumId, setTracks)
    return () => {
      unsubAlbum()
      unsubTracks()
    }
  }, [albumId])

  if (album === undefined || tracks === null) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (album === null) {
    return (
      <div className="mx-auto max-w-2xl">
        <p className="rounded-xl border border-sg-gold/15 bg-navy-mid/50 p-6 text-center font-ui text-sm text-parchment/60">
          No se encontró este álbum.
        </p>
        <Link to="/musica" className="mt-4 inline-block font-ui text-sm text-sg-gold">
          ← Volver a Música
        </Link>
      </div>
    )
  }

  const watchAlbumUrl = buildYoutubeWatchVideosUrl(
    tracks.filter((t) => t.type === 'youtube' && t.youtubeVideoId).map((t) => t.youtubeVideoId as string),
  )

  function handlePlay(track: DiscographyTrack) {
    if (currentTrack?.id === track.id) {
      togglePlay()
    } else {
      playTrack(track, tracks ?? [])
    }
    openFullPlayer()
  }

  return (
    <div className="mx-auto max-w-2xl">
      <Link to="/musica" className="mb-4 inline-flex items-center gap-1.5 font-ui text-xs uppercase tracking-widest text-parchment/50">
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          <path d="M10 4L4 8l6 4" />
        </svg>
        Música
      </Link>

      <header className="mb-6 flex items-center gap-4">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-navy-mid">
          {album.coverUrl ? (
            <img src={album.coverUrl} alt={album.title} className="h-full w-full object-cover" />
          ) : (
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sg-gold/50" aria-hidden="true">
              <circle cx="9" cy="18" r="3" />
              <path d="M12 18V4l8-2v14" />
              <circle cx="20" cy="16" r="3" />
            </svg>
          )}
        </div>
        <div className="min-w-0">
          <h1 className="font-display text-2xl text-parchment">{album.title}</h1>
          <p className="font-ui text-xs text-parchment/50">{tracks.length} canciones</p>
        </div>
      </header>

      {album.description && (
        <p className="mb-6 font-ui text-sm text-parchment/70">{album.description}</p>
      )}

      {watchAlbumUrl && (
        <a
          href={watchAlbumUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mb-6 inline-flex items-center gap-1.5 font-ui text-xs uppercase tracking-widest text-parchment/50"
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31 31 0 000 12a31 31 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31 31 0 0024 12a31 31 0 00-.5-5.8zM9.6 15.6V8.4L15.8 12z" />
          </svg>
          Escuchar álbum completo en YouTube
        </a>
      )}

      {tracks.length === 0 && (
        <p className="rounded-xl border border-sg-gold/15 bg-navy-mid/50 p-6 text-center font-ui text-sm text-parchment/60">
          Este álbum todavía no tiene canciones.
        </p>
      )}

      <ul className="flex flex-col gap-1">
        {tracks.map((track, i) => {
          const isActive = currentTrack?.id === track.id
          return (
            <li key={track.id}>
              <button
                onClick={() => handlePlay(track)}
                className={`flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors ${
                  isActive ? 'bg-sg-gold/10' : 'hover:bg-navy-mid/50'
                }`}
              >
                <span className="w-5 shrink-0 text-center font-ui text-xs text-parchment/40">
                  {isActive && isPlaying ? '♪' : i + 1}
                </span>
                <img src={track.coverUrl} alt="" className="h-10 w-10 shrink-0 rounded-md object-cover" />
                <div className="min-w-0 flex-1">
                  <p className={`truncate font-ui text-sm ${isActive ? 'text-sg-gold-light' : 'text-parchment'}`}>
                    {track.title}
                  </p>
                  {track.songMeta?.character && (
                    <p className="truncate font-ui text-xs text-parchment/50">{track.songMeta.character}</p>
                  )}
                </div>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
