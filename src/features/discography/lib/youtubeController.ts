// Controla una única instancia del YouTube IFrame Player en toda la app,
// para que MiniPlayer y FullPlayer siempre apunten al mismo video/audio
// (el iframe nunca se desmonta al navegar o expandir/minimizar).

export type YTPlayerState = -1 | 0 | 1 | 2 | 3 | 5 // unstarted, ended, playing, paused, buffering, cued

interface YTPlayerInstance {
  playVideo?: () => void
  pauseVideo?: () => void
  seekTo?: (seconds: number, allowSeekAhead: boolean) => void
  setVolume?: (volume: number) => void
  getCurrentTime?: () => number
  getDuration?: () => number
  loadVideoById?: (videoId: string) => void
  cueVideoById?: (videoId: string) => void
  destroy?: () => void
}

interface YTPlayerEvent {
  data: YTPlayerState
}

interface YTNamespace {
  Player: new (
    elementId: string,
    options: {
      videoId: string
      playerVars: Record<string, number>
      events: {
        onReady: () => void
        onStateChange: (event: YTPlayerEvent) => void
      }
    },
  ) => YTPlayerInstance
}

declare global {
  interface Window {
    YT?: YTNamespace
    onYouTubeIframeAPIReady?: () => void
  }
}

interface YouTubeControllerCallbacks {
  onStateChange?: (state: YTPlayerState) => void
  onReady?: () => void
  onProgress?: (currentTime: number, duration: number) => void
}

class YouTubeController {
  private player: YTPlayerInstance | null = null
  private apiReady = false
  private pendingVideoId: string | null = null
  private pendingResumeTime: number | undefined
  private pendingAutoplay = true
  private callbacks: YouTubeControllerCallbacks = {}
  private progressInterval: ReturnType<typeof setInterval> | null = null
  private containerId = 'sg-youtube-player-mount'

  private loadApiScript() {
    if (document.getElementById('youtube-iframe-api')) return
    const tag = document.createElement('script')
    tag.id = 'youtube-iframe-api'
    tag.src = 'https://www.youtube.com/iframe_api'
    document.head.appendChild(tag)

    window.onYouTubeIframeAPIReady = () => {
      this.apiReady = true
      if (this.pendingVideoId) {
        this.createPlayer(this.pendingVideoId, this.pendingAutoplay, this.pendingResumeTime)
        this.pendingVideoId = null
      }
    }
  }

  /** Debe llamarse una vez, cuando el nodo <div id="sg-youtube-player-mount" /> ya está en el DOM */
  init(callbacks: YouTubeControllerCallbacks = {}) {
    this.callbacks = callbacks
    this.loadApiScript()
  }

  private createPlayer(videoId: string, autoplay: boolean, seekToOnReady?: number) {
    const YT = window.YT
    if (!YT?.Player) return

    this.player = new YT.Player(this.containerId, {
      videoId,
      playerVars: {
        autoplay: autoplay ? 1 : 0,
        controls: 0, // controles propios (FullPlayer/MiniPlayer)
        modestbranding: 1,
        rel: 0,
        playsinline: 1,
      },
      events: {
        onReady: () => {
          if (seekToOnReady) this.player?.seekTo?.(seekToOnReady, true)
          this.callbacks.onReady?.()
          this.startProgressLoop()
        },
        onStateChange: (e) => {
          this.callbacks.onStateChange?.(e.data)
        },
      },
    })
  }

  playVideo(videoId: string) {
    if (!this.apiReady || !window.YT?.Player) {
      this.pendingVideoId = videoId
      this.pendingAutoplay = true
      this.pendingResumeTime = undefined
      this.loadApiScript()
      return
    }
    if (this.player?.loadVideoById) {
      this.player.loadVideoById(videoId)
    } else {
      this.createPlayer(videoId, true)
    }
  }

  /** Carga el video SIN reproducirlo — usado para restaurar sesión al recargar la página */
  cueVideo(videoId: string, resumeAtSeconds?: number) {
    if (!this.apiReady || !window.YT?.Player) {
      this.pendingVideoId = videoId
      this.pendingAutoplay = false
      this.pendingResumeTime = resumeAtSeconds
      this.loadApiScript()
      return
    }
    if (this.player?.cueVideoById) {
      this.player.cueVideoById(videoId)
      if (resumeAtSeconds) {
        setTimeout(() => this.player?.seekTo?.(resumeAtSeconds, true), 400)
      }
    } else {
      this.createPlayer(videoId, false, resumeAtSeconds)
    }
  }

  play() {
    this.player?.playVideo?.()
  }

  pause() {
    this.player?.pauseVideo?.()
  }

  seekTo(seconds: number) {
    this.player?.seekTo?.(seconds, true)
  }

  setVolume(volume0to100: number) {
    this.player?.setVolume?.(volume0to100)
  }

  getCurrentTime(): number {
    return this.player?.getCurrentTime?.() ?? 0
  }

  getDuration(): number {
    return this.player?.getDuration?.() ?? 0
  }

  /** Muestra u oculta el iframe visualmente sin detener la reproducción (para MiniPlayer vs FullPlayer) */
  setVisible(visible: boolean) {
    const el = document.getElementById(this.containerId)
    if (el) el.style.opacity = visible ? '1' : '0'
  }

  private startProgressLoop() {
    if (this.progressInterval) clearInterval(this.progressInterval)
    this.progressInterval = setInterval(() => {
      if (this.player?.getCurrentTime) {
        this.callbacks.onProgress?.(this.getCurrentTime(), this.getDuration())
      }
    }, 500)
  }

  destroy() {
    if (this.progressInterval) clearInterval(this.progressInterval)
    this.player?.destroy?.()
    this.player = null
  }
}

// Singleton — una sola instancia para toda la app
export const youtubeController = new YouTubeController()
