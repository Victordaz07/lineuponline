// Publica metadata + controles al Media Session API (notificación / pantalla
// de bloqueo del sistema). Esto es lo único que un sitio web puede hacer para
// ayudar a que el audio sobreviva al cambiar de app o bloquear pantalla:
// le indica al navegador que hay reproducción activa que no debe suspender
// tan agresivamente. En iOS Safari no hay garantía — Apple no expone
// reproducción en segundo plano a páginas web fuera de un <audio>/<video>
// nativo con foco de audio, algo que un iframe de YouTube no puede pedir.

import { useEffect } from 'react'
import { usePlayerStore } from '../store/usePlayerStore'

export function MediaSessionSync() {
  const currentTrack = usePlayerStore((s) => s.currentTrack)
  const isPlaying = usePlayerStore((s) => s.isPlaying)

  useEffect(() => {
    if (!('mediaSession' in navigator)) return
    if (!currentTrack) {
      navigator.mediaSession.metadata = null
      navigator.mediaSession.playbackState = 'none'
      return
    }
    navigator.mediaSession.metadata = new MediaMetadata({
      title: currentTrack.title,
      artist: currentTrack.subtitle,
      album: 'Seeker Gospel',
      artwork: currentTrack.coverUrl ? [{ src: currentTrack.coverUrl, sizes: '512x512', type: 'image/jpeg' }] : [],
    })
  }, [currentTrack])

  useEffect(() => {
    if (!('mediaSession' in navigator)) return
    navigator.mediaSession.playbackState = currentTrack ? (isPlaying ? 'playing' : 'paused') : 'none'
  }, [isPlaying, currentTrack])

  useEffect(() => {
    if (!('mediaSession' in navigator)) return
    const { togglePlay, next, prev, seek } = usePlayerStore.getState()

    navigator.mediaSession.setActionHandler('play', () => togglePlay())
    navigator.mediaSession.setActionHandler('pause', () => togglePlay())
    navigator.mediaSession.setActionHandler('previoustrack', () => prev())
    navigator.mediaSession.setActionHandler('nexttrack', () => next())
    navigator.mediaSession.setActionHandler('seekto', (details) => {
      if (typeof details.seekTime === 'number') seek(details.seekTime)
    })

    return () => {
      navigator.mediaSession.setActionHandler('play', null)
      navigator.mediaSession.setActionHandler('pause', null)
      navigator.mediaSession.setActionHandler('previoustrack', null)
      navigator.mediaSession.setActionHandler('nexttrack', null)
      navigator.mediaSession.setActionHandler('seekto', null)
    }
  }, [])

  return null
}
