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
    <div className="mx-auto max-w-2xl">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-parchment">Música</h1>
          <p className="mt-1 font-ui text-sm text-parchment/60">
            Álbumes de Seeker Gospel y los episodios de podcast de cada lección.
          </p>
        </div>
        {channelId && tab === 'albumes' && <YouTubeSubscribeButton channelId={channelId} />}
      </header>

      <div role="tablist" className="mb-6 flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-3 py-2 font-ui text-sm font-semibold transition ${
              tab === id ? 'bg-navy-light text-parchment shadow-sm' : 'text-parchment/40 hover:text-parchment/70'
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
                  className="group flex flex-col overflow-hidden rounded-xl border border-sg-gold/15 bg-navy-mid/40 transition-colors hover:border-sg-gold/40"
                >
                  <div className="flex aspect-square items-center justify-center overflow-hidden bg-navy-mid">
                    {album.coverUrl ? (
                      <img src={album.coverUrl} alt={album.title} className="h-full w-full object-cover" />
                    ) : (
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sg-gold/50" aria-hidden="true">
                        <circle cx="9" cy="18" r="3" />
                        <path d="M12 18V4l8-2v14" />
                        <circle cx="20" cy="16" r="3" />
                      </svg>
                    )}
                  </div>
                  <div className="px-3 py-2.5">
                    <p className="truncate font-ui text-sm font-medium text-parchment">{album.title}</p>
                  </div>
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
            <ul className="flex flex-col gap-1">
              {podcasts.map((track) => {
                const isActive = currentTrack?.id === track.id
                return (
                  <li key={track.id}>
                    <button
                      onClick={() => handlePlayPodcast(track)}
                      className={`flex w-full items-center gap-3 rounded-lg px-2 py-2.5 text-left transition-colors ${
                        isActive ? 'bg-sg-gold/10' : 'hover:bg-navy-mid/50'
                      }`}
                    >
                      <img src={track.coverUrl} alt="" className="h-10 w-10 shrink-0 rounded-md object-cover" />
                      <div className="min-w-0 flex-1">
                        <p className={`truncate font-ui text-sm ${isActive ? 'text-sg-gold-light' : 'text-parchment'}`}>
                          {track.title}
                        </p>
                        <p className="truncate font-ui text-xs text-parchment/50">{track.subtitle}</p>
                      </div>
                      <span className="shrink-0 font-ui text-xs text-parchment/40">
                        {isActive && isPlaying ? '♪' : '▶'}
                      </span>
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
