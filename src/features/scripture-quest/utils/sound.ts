/**
 * Motor de sonido de Scripture Quest — 100% sintetizado con Web Audio
 * (cero archivos de audio). Efectos + música generativa de fondo en dos
 * ambientes: festivo (concurso) y reverente (domingos).
 */

import type { AudioStage, MusicMode, RoomStatus } from '../types'

export type { MusicMode }

/**
 * stage — pantalla grande / TV / host en modo escenario: música + SFX completos.
 * player — móvil del jugador en multijugador: solo SFX de acción (sin loops).
 * solo — práctica individual: música de escenario + SFX en el mismo dispositivo.
 */
export type AudioProfile = 'stage' | 'player' | 'solo'

const STORAGE_KEY = 'sq-sound-enabled'

class SoundManager {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private musicGain: GainNode | null = null
  private musicTimer: ReturnType<typeof setTimeout> | null = null
  private currentMusic: MusicMode = 'silencio'
  private lastTickAt = 0
  private profile: AudioProfile = 'stage'
  /** Pistas subidas por el anfitrión (Suno) agrupadas por etapa. */
  private stagePlaylists: Partial<Record<AudioStage, string[]>> = {}
  private audioEl: HTMLAudioElement | null = null
  private currentStage: AudioStage | null = null
  private queue: string[] = []
  private pendingOpening = false
  enabled: boolean = (() => {
    try {
      return localStorage.getItem(STORAGE_KEY) !== '0'
    } catch {
      return true
    }
  })()

  private ensure(): AudioContext | null {
    if (typeof window === 'undefined') return null
    if (!this.ctx) {
      const Ctor =
        window.AudioContext ??
        (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Ctor) return null
      this.ctx = new Ctor()
      this.master = this.ctx.createGain()
      this.master.gain.value = 0.5
      this.master.connect(this.ctx.destination)
      this.musicGain = this.ctx.createGain()
      this.musicGain.gain.value = 0.16
      this.musicGain.connect(this.master)
      // Los navegadores exigen un gesto del usuario para activar el audio
      const unlock = () => {
        void this.ctx?.resume()
        document.removeEventListener('pointerdown', unlock)
        document.removeEventListener('keydown', unlock)
      }
      document.addEventListener('pointerdown', unlock)
      document.addEventListener('keydown', unlock)
    }
    if (this.ctx.state === 'suspended') void this.ctx.resume()
    return this.ctx
  }

  setEnabled(on: boolean) {
    this.enabled = on
    try {
      localStorage.setItem(STORAGE_KEY, on ? '1' : '0')
    } catch {
      /* sin almacenamiento */
    }
    if (!on) this.stopMusic()
  }

  setProfile(profile: AudioProfile) {
    this.profile = profile
    if (profile === 'player') this.stopMusic()
  }

  getProfile(): AudioProfile {
    return this.profile
  }

  private allowsStageMusic(): boolean {
    return this.profile === 'stage' || this.profile === 'solo'
  }

  private allowsStageAmbience(): boolean {
    return this.profile === 'stage'
  }

  /** Nota corta. type/freq/dur/vol con envolvente simple. */
  private tone(
    freq: number,
    duration: number,
    options: { type?: OscillatorType; volume?: number; when?: number; glideTo?: number; out?: GainNode } = {},
  ) {
    const ctx = this.ensure()
    if (!ctx || !this.master) return
    const { type = 'triangle', volume = 0.5, when = 0, glideTo, out } = options
    const t0 = ctx.currentTime + when
    const osc = ctx.createOscillator()
    const gain = ctx.createGain()
    osc.type = type
    osc.frequency.setValueAtTime(freq, t0)
    if (glideTo) osc.frequency.exponentialRampToValueAtTime(glideTo, t0 + duration)
    gain.gain.setValueAtTime(0, t0)
    gain.gain.linearRampToValueAtTime(volume, t0 + Math.min(0.02, duration / 4))
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration)
    osc.connect(gain)
    gain.connect(out ?? this.master)
    osc.start(t0)
    osc.stop(t0 + duration + 0.05)
  }

  /* ── Efectos ── */
  tick() {
    if (!this.enabled || this.profile === 'player') return
    const now = Date.now()
    if (now - this.lastTickAt < 700) return
    this.lastTickAt = now
    this.tone(880, 0.06, { type: 'square', volume: 0.18 })
  }
  select() {
    if (!this.enabled) return
    this.tone(540, 0.07, { type: 'sine', volume: 0.3 })
    this.tone(720, 0.09, { type: 'sine', volume: 0.25, when: 0.06 })
  }
  correct() {
    if (!this.enabled) return
    if (this.playOneShot('correct')) return
    ;[523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      this.tone(f, 0.16, { volume: 0.35, when: i * 0.09 }),
    )
  }
  wrong() {
    if (!this.enabled) return
    if (this.playOneShot('wrong')) return
    this.tone(220, 0.28, { type: 'sawtooth', volume: 0.22, glideTo: 150 })
  }
  reveal() {
    if (!this.enabled || !this.allowsStageAmbience()) return
    this.tone(320, 0.22, { type: 'triangle', volume: 0.28, glideTo: 640 })
  }
  join() {
    if (!this.enabled || !this.allowsStageAmbience()) return
    if (this.playOneShot('player_join')) return
    this.tone(660, 0.08, { type: 'sine', volume: 0.25, glideTo: 880 })
  }
  fanfare() {
    if (!this.enabled || !this.allowsStageMusic()) return
    const seq: [number, number][] = [
      [523.25, 0], [659.25, 0.12], [783.99, 0.24], [1046.5, 0.38],
      [783.99, 0.6], [1046.5, 0.74], [1318.5, 0.92],
    ]
    for (const [f, t] of seq) this.tone(f, 0.3, { volume: 0.35, when: t })
    for (const [f, t] of seq) this.tone(f / 2, 0.34, { type: 'sine', volume: 0.2, when: t })
  }

  /* ── Pistas personalizadas (Suno) por etapa ── */

  /** Registra las playlists subidas por el admin; reinicia si la etapa actual cambió. */
  setStagePlaylists(playlists: Partial<Record<AudioStage, string[]>>) {
    this.stagePlaylists = playlists
    if (this.currentStage && !this.audioEl) {
      // Estábamos en respaldo sintetizado y ahora hay pistas: cambiar en vivo
      const stage = this.currentStage
      const fallback = this.currentMusic
      this.currentStage = null
      this.playStageLoop(stage, fallback)
    }
  }

  private tracksFor(stage: AudioStage): string[] {
    return this.stagePlaylists[stage] ?? []
  }

  /** Efecto de una sola vez desde la playlist de la etapa (true si sonó pista). */
  private playOneShot(stage: AudioStage): boolean {
    const tracks = this.tracksFor(stage)
    if (tracks.length === 0) return false
    const url = tracks[Math.floor(Math.random() * tracks.length)]
    const el = new Audio(url)
    el.volume = 0.8
    void el.play().catch(() => undefined)
    return true
  }

  private shuffled(urls: string[]): string[] {
    const arr = [...urls]
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr
  }

  /**
   * Loop de música por etapa: pistas aleatorias sin repetir hasta agotar la
   * lista; si la etapa no tiene pistas, respaldo sintetizado (festivo/reverente).
   */
  playStageLoop(stage: AudioStage, fallback: MusicMode) {
    if (!this.enabled || !this.allowsStageMusic()) return
    if (this.currentStage === stage && (this.audioEl || this.currentMusic === fallback)) return
    this.stopMusic()
    this.currentStage = stage
    const tracks = this.tracksFor(stage)
    if (tracks.length === 0) {
      // Respaldo: música generativa
      this.playMusic(fallback)
      this.currentStage = stage
      return
    }
    this.queue = this.shuffled(tracks)
    if (this.pendingOpening) {
      this.pendingOpening = false
      const opening = this.tracksFor('opening')
      if (opening.length > 0) {
        this.queue.unshift(opening[Math.floor(Math.random() * opening.length)])
      }
    }
    this.playNextInQueue(stage, tracks)
  }

  private playNextInQueue(stage: AudioStage, source: string[]) {
    if (this.currentStage !== stage || !this.enabled) return
    if (this.queue.length === 0) this.queue = this.shuffled(source)
    const url = this.queue.shift()
    if (!url) return
    const el = new Audio(url)
    el.volume = 0.45
    this.audioEl = el
    el.onended = () => this.playNextInQueue(stage, source)
    void el.play().catch(() => {
      // Autoplay bloqueado: reintenta con el primer gesto del usuario
      const retry = () => {
        document.removeEventListener('pointerdown', retry)
        if (this.audioEl === el && this.currentStage === stage) void el.play().catch(() => undefined)
      }
      document.addEventListener('pointerdown', retry)
    })
  }

  /**
   * Mapea el estado de la sala + ambiente elegido a la etapa musical:
   * festivo → lobby/question/podium · reverente → reverent · silencio → nada.
   */
  playForRoom(status: RoomStatus, mode: MusicMode) {
    if (!this.allowsStageMusic()) return
    if (mode === 'silencio' || !this.enabled) {
      this.stopMusic()
      return
    }
    if (mode === 'reverente') {
      this.playStageLoop('reverent', 'reverente')
      return
    }
    // Festivo
    if (status === 'lobby') {
      this.playStageLoop('lobby', 'festivo')
    } else if (status === 'ended') {
      this.playStageLoop('podium', 'festivo')
    } else {
      if (this.currentStage === 'lobby') this.pendingOpening = true
      this.playStageLoop('question', 'festivo')
    }
  }

  /* ── Música generativa de fondo ── */
  playMusic(mode: MusicMode) {
    if (!this.allowsStageMusic()) return
    if (mode === this.currentMusic) return
    this.stopMusic()
    this.currentMusic = mode
    if (mode === 'silencio' || !this.enabled) return
    const loop = () => {
      if (this.currentMusic !== mode || !this.enabled) return
      if (mode === 'festivo') this.festivoBar()
      else this.reverenteBar()
      this.musicTimer = setTimeout(loop, mode === 'festivo' ? 2180 : 6400)
    }
    loop()
  }

  stopMusic() {
    this.currentMusic = 'silencio'
    this.currentStage = null
    if (this.musicTimer) {
      clearTimeout(this.musicTimer)
      this.musicTimer = null
    }
    if (this.audioEl) {
      this.audioEl.onended = null
      this.audioEl.pause()
      this.audioEl = null
    }
  }

  /** Compás festivo: bajo + arpegio pentatónico estilo marimba (~110 bpm). */
  private festivoBar() {
    const out = this.musicGain ?? undefined
    const beat = 0.545
    const roots = [130.81, 130.81, 174.61, 196.0] // C, C, F, G
    const penta = [261.63, 293.66, 329.63, 392.0, 440.0, 523.25]
    roots.forEach((root, i) =>
      this.tone(root, 0.3, { type: 'sine', volume: 0.5, when: i * beat, out }),
    )
    for (let i = 0; i < 8; i++) {
      const note = penta[Math.floor(Math.random() * penta.length)]
      this.tone(note, 0.14, { type: 'triangle', volume: 0.3, when: i * (beat / 2) + 0.02, out })
    }
  }

  /** Compás reverente: acordes suaves sostenidos, estilo himno (~ rubato). */
  private reverenteBar() {
    const out = this.musicGain ?? undefined
    const chords = [
      [261.63, 329.63, 392.0], // C
      [220.0, 261.63, 329.63], // Am
      [174.61, 261.63, 349.23], // F
      [196.0, 246.94, 392.0], // G
    ]
    const chord = chords[Math.floor(Math.random() * chords.length)]
    for (const f of chord) {
      this.tone(f, 5.6, { type: 'sine', volume: 0.16, out })
      this.tone(f / 2, 6.0, { type: 'sine', volume: 0.1, out })
    }
    // Una nota de melodía ocasional, muy suave
    if (Math.random() < 0.7) {
      this.tone(chord[1] * 2, 2.2, { type: 'sine', volume: 0.08, when: 2.4, out })
    }
  }
}

export const sound = new SoundManager()

export const MUSIC_LABELS: Record<MusicMode, string> = {
  festivo: '🎉 Festivo',
  reverente: '🕊️ Reverente',
  silencio: '🔇 Sin música',
}
