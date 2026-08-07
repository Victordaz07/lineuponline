import { useEffect, useState } from 'react'
import { subscribeTracks } from '@/services/tracks.service'
import type { Track } from '@/types/music'

function TrackCard({ track }: { track: Track }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid transition hover:border-sg-gold/30">
      {/* Cover art */}
      <div className="aspect-square w-full overflow-hidden bg-navy-light">
        {track.coverUrl ? (
          <img
            src={track.coverUrl}
            alt={track.title}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <svg width="40" height="40" viewBox="0 0 256 256" fill="currentColor" className="text-sg-gold/30">
              <path d="M215.38,14.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,56V159.35A40,40,0,1,0,92,196V113.37l104-26v40A40,40,0,1,0,220,164V24A12,12,0,0,0,215.38,14.54ZM52,212a16,16,0,1,1,16-16A16,16,0,0,1,52,212ZM92,88.63V65.37l104-26V62.63ZM180,180a16,16,0,1,1,16-16A16,16,0,0,1,180,180Z" />
            </svg>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-3">
        <p className="font-ui text-sm font-semibold leading-tight text-parchment/90">{track.title}</p>
        <p className="mt-0.5 font-ui text-[11px] text-parchment/45">{track.scriptureRef}</p>
        <div className="mt-2 flex items-center justify-between gap-2">
          <span className="rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
            {track.genre}
          </span>
          {track.youtubeVideoId && (
            <a
              href={`https://youtu.be/${track.youtubeVideoId}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 rounded-full bg-red-600/80 px-2.5 py-0.5 font-ui text-[10px] font-semibold text-white transition hover:bg-red-600"
            >
              <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.37 6.37 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.5a8.07 8.07 0 004.83 1.56V6.61a4.85 4.85 0 01-1.06.08z"/>
              </svg>
              YouTube
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export default function MusicPage() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    return subscribeTracks((all) => {
      setTracks(all.filter((t) => t.status === 'PUBLISHED'))
      setLoading(false)
    })
  }, [])

  return (
    <div className="mx-auto max-w-2xl px-4 py-6">
      <div className="mb-6">
        <h1 className="font-display text-2xl font-semibold text-parchment">Seeker Gospel Music</h1>
        <p className="mt-1 font-ui text-sm text-parchment/50">
          Canciones publicadas — basadas en las Escrituras
        </p>
      </div>

      {loading ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="aspect-square animate-pulse rounded-2xl bg-navy-mid" />
          ))}
        </div>
      ) : tracks.length === 0 ? (
        <div className="flex flex-col items-center gap-4 py-20 text-center">
          <svg width="48" height="48" viewBox="0 0 256 256" fill="currentColor" className="text-sg-gold/25">
            <path d="M215.38,14.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,56V159.35A40,40,0,1,0,92,196V113.37l104-26v40A40,40,0,1,0,220,164V24A12,12,0,0,0,215.38,14.54ZM52,212a16,16,0,1,1,16-16A16,16,0,0,1,52,212ZM92,88.63V65.37l104-26V62.63ZM180,180a16,16,0,1,1,16-16A16,16,0,0,1,180,180Z" />
          </svg>
          <div>
            <p className="font-ui text-sm font-semibold text-parchment/50">Pronto habrá música aquí</p>
            <p className="mt-1 font-ui text-xs text-parchment/30">
              Las canciones publicadas aparecerán en esta pantalla
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
          {tracks.map((track) => (
            <TrackCard key={track.id} track={track} />
          ))}
        </div>
      )}
    </div>
  )
}
