import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { subscribeAlbums } from '../services/discography.service'
import { getConfiguredYoutubeChannelId } from '../lib/youtubeChannel'
import { YouTubeSubscribeButton } from '../components/YouTubeSubscribeButton'
import type { Album } from '../types'

export default function DiscographyPage() {
  const [albums, setAlbums] = useState<Album[] | null>(null)
  const channelId = getConfiguredYoutubeChannelId()

  useEffect(() => {
    const unsub = subscribeAlbums(setAlbums)
    return unsub
  }, [])

  return (
    <div className="mx-auto max-w-2xl">
      <header className="mb-6 flex items-start justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl text-parchment">Música</h1>
          <p className="mt-1 font-ui text-sm text-parchment/60">
            Álbumes de Seeker Gospel — cada canción se escucha directamente desde YouTube.
          </p>
        </div>
        {channelId && <YouTubeSubscribeButton channelId={channelId} />}
      </header>

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
    </div>
  )
}
