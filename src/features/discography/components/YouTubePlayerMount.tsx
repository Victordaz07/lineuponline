// Monta UNA sola vez en el layout raíz de la app (ver Layout.tsx), junto al
// MiniPlayer persistente. El iframe real vive siempre en el mismo lugar del
// DOM; FullPlayer y MiniPlayer solo cambian su tamaño/posición visual vía
// CSS (useYoutubeDock), no crean instancias nuevas.

import { useEffect, useRef } from 'react'
import { youtubeController } from '../lib/youtubeController'
import { usePlayerStore } from '../store/usePlayerStore'

export function YouTubePlayerMount() {
  const initialized = useRef(false)
  const currentTrack = usePlayerStore((s) => s.currentTrack)
  const _tick = usePlayerStore((s) => s._tick)

  useEffect(() => {
    if (initialized.current) return
    initialized.current = true

    youtubeController.init({
      onStateChange: (state) => {
        // 1 = playing, 2 = paused, 0 = ended
        if (state === 0) usePlayerStore.getState().next()
      },
      onProgress: (progress, duration) => _tick(progress, duration),
    })

    // Si al recargar la página ya había una canción de YouTube guardada,
    // la dejamos lista en su punto exacto — pausada, sin autoplay.
    const saved = usePlayerStore.getState()
    if (saved.currentTrack?.type === 'youtube' && saved.currentTrack.youtubeVideoId) {
      youtubeController.cueVideo(saved.currentTrack.youtubeVideoId, saved.progress)
    }
  }, [_tick])

  const isYoutubeActive = currentTrack?.type === 'youtube'

  return (
    <div
      id="sg-youtube-mount-wrapper"
      className={
        isYoutubeActive
          ? 'fixed z-40 transition-all duration-300'
          : 'pointer-events-none fixed -z-10 h-px w-px overflow-hidden opacity-0'
      }
    >
      <div id="sg-youtube-player-mount" className="h-full w-full" />
    </div>
  )
}
