/**
 * Sonidos cortos generados por código (sin archivos de audio) para reforzar
 * los momentos de victoria y logro. Se disparan siempre desde un clic del
 * usuario, así que no chocan con las políticas de autoplay del navegador.
 */

let ctx: AudioContext | null = null

function getContext(): AudioContext | null {
  if (typeof window === 'undefined') return null
  const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
  if (!AudioCtx) return null
  if (!ctx) ctx = new AudioCtx()
  if (ctx.state === 'suspended') void ctx.resume()
  return ctx
}

function tone(freq: number, startTime: number, duration: number, gainPeak: number) {
  const audio = getContext()
  if (!audio) return
  const osc = audio.createOscillator()
  const gain = audio.createGain()
  osc.type = 'sine'
  osc.frequency.value = freq
  gain.gain.setValueAtTime(0, audio.currentTime + startTime)
  gain.gain.linearRampToValueAtTime(gainPeak, audio.currentTime + startTime + 0.02)
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + startTime + duration)
  osc.connect(gain)
  gain.connect(audio.destination)
  osc.start(audio.currentTime + startTime)
  osc.stop(audio.currentTime + startTime + duration + 0.05)
}

/** Arpegio ascendente breve — victoria de una estación. */
export function playVictoryChime() {
  const notes = [523.25, 659.25, 783.99] // C5, E5, G5
  notes.forEach((freq, i) => tone(freq, i * 0.09, 0.35, 0.08))
}

/** Campanada doble y más brillante — logro desbloqueado. */
export function playAchievementChime() {
  const notes = [659.25, 987.77] // E5, B5
  notes.forEach((freq, i) => tone(freq, i * 0.12, 0.45, 0.09))
}

/** Toque muy corto al comenzar una selección — da materialidad al tablero. */
export function playSelectionTick() {
  tone(392, 0, 0.07, 0.025)
}

/** Acorde ascendente por palabra encontrada; sube con la racha actual. */
export function playWordFoundChime(streak = 1) {
  const lift = Math.min(streak - 1, 5) * 28
  ;[523.25 + lift, 659.25 + lift].forEach((freq, i) => tone(freq, i * 0.055, 0.22, 0.055))
}

/** Pulso amable de pista, deliberadamente distinto de una recompensa. */
export function playHintChime() {
  tone(440, 0, 0.18, 0.035)
  tone(554.37, 0.12, 0.22, 0.035)
}
