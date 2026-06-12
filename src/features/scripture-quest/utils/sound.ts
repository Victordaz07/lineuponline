/**
 * Motor de sonido de Scripture Quest — 100% sintetizado con Web Audio
 * (cero archivos de audio). Efectos + música generativa de fondo en dos
 * ambientes: festivo (concurso) y reverente (domingos).
 */

import type { MusicMode } from '../types'

export type { MusicMode }

const STORAGE_KEY = 'sq-sound-enabled'

class SoundManager {
  private ctx: AudioContext | null = null
  private master: GainNode | null = null
  private musicGain: GainNode | null = null
  private musicTimer: ReturnType<typeof setTimeout> | null = null
  private currentMusic: MusicMode = 'silencio'
  private lastTickAt = 0
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
    if (!this.enabled) return
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
    ;[523.25, 659.25, 783.99, 1046.5].forEach((f, i) =>
      this.tone(f, 0.16, { volume: 0.35, when: i * 0.09 }),
    )
  }
  wrong() {
    if (!this.enabled) return
    this.tone(220, 0.28, { type: 'sawtooth', volume: 0.22, glideTo: 150 })
  }
  reveal() {
    if (!this.enabled) return
    this.tone(320, 0.22, { type: 'triangle', volume: 0.28, glideTo: 640 })
  }
  join() {
    if (!this.enabled) return
    this.tone(660, 0.08, { type: 'sine', volume: 0.25, glideTo: 880 })
  }
  fanfare() {
    if (!this.enabled) return
    const seq: [number, number][] = [
      [523.25, 0], [659.25, 0.12], [783.99, 0.24], [1046.5, 0.38],
      [783.99, 0.6], [1046.5, 0.74], [1318.5, 0.92],
    ]
    for (const [f, t] of seq) this.tone(f, 0.3, { volume: 0.35, when: t })
    for (const [f, t] of seq) this.tone(f / 2, 0.34, { type: 'sine', volume: 0.2, when: t })
  }

  /* ── Música generativa de fondo ── */
  playMusic(mode: MusicMode) {
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
    if (this.musicTimer) {
      clearTimeout(this.musicTimer)
      this.musicTimer = null
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
