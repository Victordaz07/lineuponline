import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { subscribeAlbums, subscribePodcastTracks } from '../services/discography.service'
import { getConfiguredYoutubeChannelId } from '../lib/youtubeChannel'
import { YouTubeSubscribeButton } from '../components/YouTubeSubscribeButton'
import { usePlayerStore } from '../store/usePlayerStore'
import type { Album, DiscographyTrack } from '../types'

type Tab = 'albumes' | 'podcasts'

export default function DiscographyPage() {
  const [tab, setTab] = useState<Tab>('albumes')
  const [albums, setAlbums] = useState<Album[] | null>(null)
  const [podcasts, setPodcasts] = useState<DiscographyTrack[] | null>(null)
  const channelId = getConfiguredYoutubeChannelId()

  const currentTrack = usePlayerStore((s) => s.currentTrack)
  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const playTrack = usePlayerStore((s) => s.playTrack)
  const togglePlay = usePlayerStore((s) => s.togglePlay)
  const openFullPlayer = usePlayerStore((s) => s.openFullPlayer)

  useEffect(() => {
    const unsub = subscribeAlbums(setAlbums)
    return unsub
  }, [])

  useEffect(() => {
    const unsub = subscribePodcastTracks(setPodcasts)
    return unsub
  }, [])

  function handlePlayPodcast(track: DiscographyTrack) {
    if (currentTrack?.id === track.id) {
      togglePlay()
    } else {
      playTrack(track, podcasts ?? [])
    }
    openFullPlayer()
  }

  const tabs: { id: Tab; label: string }[] = [
    { id: 'albumes', label: 'Álbumes' },
    { id: 'podcasts', label: 'Podcasts de lecciones' },
  ]

  return (
    <div className="relative mx-auto max-w-2xl">
      <div
        aria-hidden="true"
        className="bg-pattern-fade pointer-events-none absolute inset-x-0 -top-4 h-52 opacity-60"
      />
      <header className="relative mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl font-semibold text-parchment">Música</h1>
          <p className="mt-1 font-ui text-sm text-parchment/60">
            Álbumes de Seeker Gospel y los episodios de podcast de cada lección.
          </p>
        </div>
        {channelId && tab === 'albumes' && <YouTubeSubscribeButton channelId={channelId} />}
      </header>

      <div role="tablist" className="relative mb-6 flex gap-1 rounded-full border border-sg-gold/15 bg-navy-mid p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-full px-3 py-2 font-ui text-sm font-bold transition ${
              tab === id ? 'bg-sg-gold text-ink shadow-sm' : 'text-parchment/50 hover:text-parchment/80'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'albumes' ? (
        <>
          {albums === null && (
            <div className="flex min-h-[30vh] items-center justify-center">
              <LoadingSpinner />
            </div>
          )}

          {albums !== null && albums.length === 0 && (
            <p className="rounded-xl border border-sg-gold/15 bg-navy-mid/50 p-6 text-center font-ui text-sm text-parchment/60">
              Todavía no hay álbumes publicados.
            </p>
          )}

          {albums !== null && albums.length > 0 && (
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {albums.map((album) => (
                <Link
                  key={album.id}
                  to={`/musica/album/${album.id}`}
                  className="group flex flex-col gap-2"
                >
                  <div className="vinyl-sleeve relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl shadow-card ring-1 ring-sg-gold/15 transition group-hover:ring-sg-gold/40">
                    {album.coverUrl ? (
                      <img src={album.coverUrl} alt={album.title} className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]" />
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sg-gold/50" aria-hidden="true">
                        <circle cx="9" cy="18" r="3" />
                        <path d="M12 18V4l8-2v14" />
                        <circle cx="20" cy="16" r="3" />
                      </svg>
                    )}
                    <span className="absolute bottom-2 right-2 flex h-8 w-8 translate-y-1 items-center justify-center rounded-full bg-sg-gold text-ink opacity-0 shadow-lg transition group-hover:translate-y-0 group-hover:opacity-100">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
                      </svg>
                    </span>
                  </div>
                  <p className="truncate px-0.5 font-ui text-sm font-bold text-parchment">{album.title}</p>
                </Link>
              ))}
            </div>
          )}
        </>
      ) : (
        <>
          {podcasts === null && (
            <div className="flex min-h-[30vh] items-center justify-center">
              <LoadingSpinner />
            </div>
          )}

          {podcasts !== null && podcasts.length === 0 && (
            <p className="rounded-xl border border-sg-gold/15 bg-navy-mid/50 p-6 text-center font-ui text-sm text-parchment/60">
              Todavía no hay episodios de podcast subidos en ninguna lección.
            </p>
          )}

          {podcasts !== null && podcasts.length > 0 && (
            <ul className="flex flex-col gap-2.5">
              {podcasts.map((track) => {
                const isActive = currentTrack?.id === track.id
                return (
                  <li key={track.id}>
                    <button
                      onClick={() => handlePlayPodcast(track)}
                      className={`flex w-full items-center gap-3.5 rounded-2xl border px-3.5 py-3 text-left transition ${
                        isActive
                          ? 'border-sg-gold/40 bg-navy-mid'
                          : 'border-sg-gold/12 bg-navy-mid hover:border-sg-gold/25'
                      }`}
                    >
                      <div className="relative h-11 w-11 shrink-0 overflow-hidden rounded-xl bg-navy-light ring-1 ring-sg-gold/20">
                        {track.coverUrl ? (
                          <img src={track.coverUrl} alt="" className="h-full w-full object-cover" />
                        ) : (
                          <span className="flex h-full w-full items-center justify-center text-lg" aria-hidden="true">🎙️</span>
                        )}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className={`truncate font-ui text-sm font-bold ${isActive ? 'text-sg-gold-light' : 'text-parchment'}`}>
                          {track.title}
                        </p>
                        <p className="truncate font-ui text-xs text-parchment/50">{track.subtitle}</p>
                      </div>
                      {isActive && isPlaying ? (
                        <div className="flex h-4 shrink-0 items-end gap-0.5" aria-hidden="true">
                          <span className="h-2 w-0.5 origin-bottom animate-[eq_0.9s_ease-in-out_infinite] rounded-full bg-sg-gold-light" />
                          <span className="h-3.5 w-0.5 origin-bottom animate-[eq_0.9s_ease-in-out_infinite_0.2s] rounded-full bg-sg-gold-light" />
                          <span className="h-2.5 w-0.5 origin-bottom animate-[eq_0.9s_ease-in-out_infinite_0.4s] rounded-full bg-sg-gold-light" />
                        </div>
                      ) : (
                        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-sg-gold/15 text-sg-gold-light" aria-hidden="true">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.29-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14z" />
                          </svg>
                        </span>
                      )}
                    </button>
                  </li>
                )
              })}
            </ul>
          )}
        </>
      )}
    </div>
  )
}
