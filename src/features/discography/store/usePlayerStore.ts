import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { youtubeController } from '../lib/youtubeController'
import type { DiscographyTrack } from '../types'

interface PlayerState {
  currentTrack: DiscographyTrack | null
  queue: DiscographyTrack[]
  isPlaying: boolean
  isFullPlayerOpen: boolean
  progress: number // segundos
  duration: number // segundos
  volume: number // 0–1
  favoriteIds: string[]
  audioRef: HTMLAudioElement | null

  setAudioRef: (el: HTMLAudioElement | null) => void
  playTrack: (track: DiscographyTrack, queue?: DiscographyTrack[]) => void
  togglePlay: () => void
  next: () => void
  prev: () => void
  seek: (seconds: number) => void
  setVolume: (v: number) => void
  toggleFavorite: (trackId: string) => void
  enqueue: (track: DiscographyTrack) => void
  openFullPlayer: () => void
  closeFullPlayer: () => void
  _tick: (progress: number, duration: number) => void
}

export const usePlayerStore = create<PlayerState>()(
  persist(
    (set, get) => ({
      currentTrack: null,
      queue: [],
      isPlaying: false,
      isFullPlayerOpen: false,
      progress: 0,
      duration: 0,
      volume: 1,
      favoriteIds: [],
      audioRef: null,

      setAudioRef: (el) => {
        set({ audioRef: el })
        // Al montar el <audio>, si hay una canción guardada de una sesión anterior
        // (no-YouTube), la dejamos lista en el punto exacto donde se quedó, pausada.
        const { currentTrack, progress } = get()
        if (el && currentTrack && currentTrack.type !== 'youtube' && currentTrack.storageUrl && progress > 0) {
          el.src = currentTrack.storageUrl
          el.currentTime = progress
        }
      },

      playTrack: (track, queue) => {
        const isYoutube = track.type === 'youtube'
        set({
          currentTrack: track,
          queue: queue ?? get().queue,
          isPlaying: true,
          progress: 0,
        })

        if (isYoutube && track.youtubeVideoId) {
          youtubeController.playVideo(track.youtubeVideoId)
        } else if (!isYoutube && track.storageUrl) {
          const audio = get().audioRef
          if (audio) {
            audio.src = track.storageUrl
            void audio.play()
          }
        }
      },

      togglePlay: () => {
        const { currentTrack, isPlaying, audioRef } = get()
        if (!currentTrack) return
        const next = !isPlaying
        set({ isPlaying: next })

        if (currentTrack.type === 'youtube') {
          if (next) youtubeController.play()
          else youtubeController.pause()
        } else if (next) {
          void audioRef?.play()
        } else {
          audioRef?.pause()
        }
      },

      next: () => {
        const { queue, currentTrack } = get()
        if (!currentTrack || queue.length === 0) return
        const idx = queue.findIndex((t) => t.id === currentTrack.id)
        const nextTrack = queue[idx + 1]
        if (nextTrack) get().playTrack(nextTrack, queue)
      },

      prev: () => {
        const { queue, currentTrack } = get()
        if (!currentTrack || queue.length === 0) return
        const idx = queue.findIndex((t) => t.id === currentTrack.id)
        const prevTrack = queue[idx - 1]
        if (prevTrack) get().playTrack(prevTrack, queue)
      },

      seek: (seconds) => {
        const { currentTrack, audioRef } = get()
        if (!currentTrack) return
        set({ progress: seconds })
        if (currentTrack.type === 'youtube') {
          youtubeController.seekTo(seconds)
        } else if (audioRef) {
          audioRef.currentTime = seconds
        }
      },

      setVolume: (v) => {
        const { currentTrack, audioRef } = get()
        set({ volume: v })
        if (currentTrack?.type === 'youtube') {
          youtubeController.setVolume(Math.round(v * 100))
        } else if (audioRef) {
          audioRef.volume = v
        }
      },

      toggleFavorite: (trackId) => {
        const { favoriteIds } = get()
        set({
          favoriteIds: favoriteIds.includes(trackId)
            ? favoriteIds.filter((id) => id !== trackId)
            : [...favoriteIds, trackId],
        })
      },

      enqueue: (track) => set({ queue: [...get().queue, track] }),

      openFullPlayer: () => set({ isFullPlayerOpen: true }),
      closeFullPlayer: () => set({ isFullPlayerOpen: false }),

      _tick: (progress, duration) => set({ progress, duration }),
    }),
    {
      name: 'sg-discography-player',
      partialize: (state) => ({
        currentTrack: state.currentTrack,
        queue: state.queue,
        favoriteIds: state.favoriteIds,
        volume: state.volume,
        progress: state.progress, // se restaura al recargar, pero SIEMPRE en pausa
      }),
      onRehydrateStorage: () => (state) => {
        // isPlaying nunca se persiste ni se restaura en true — el navegador
        // bloquea el autoplay sin interacción, así que siempre arrancamos pausados.
        if (state) state.isPlaying = false
      },
    },
  ),
)
