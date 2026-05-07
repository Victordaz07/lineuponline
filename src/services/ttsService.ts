/**
 * Servicio TTS: usa OpenAI vía Firebase Cloud Function cuando VITE_TTS_FUNCTION_URL
 * está configurado; si no, cae en la Web Speech API del navegador.
 */

const TTS_URL = import.meta.env.VITE_TTS_FUNCTION_URL as string | undefined

let currentAudio: HTMLAudioElement | null = null
let abortCtrl: AbortController | null = null

export function isSpeechSynthesisSupported(): boolean {
  return Boolean(TTS_URL) || (typeof window !== 'undefined' && 'speechSynthesis' in window)
}

export function stopSpeaking(): void {
  abortCtrl?.abort()
  abortCtrl = null
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  if (!TTS_URL && typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export function isSpeaking(): boolean {
  if (TTS_URL) return currentAudio !== null && !currentAudio.paused
  return typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking
}

async function playOpenAI(text: string, rate: number, signal: AbortSignal): Promise<void> {
  const res = await fetch(TTS_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: text.slice(0, 4096), voice: 'nova' }),
    signal,
  })
  if (!res.ok) throw new Error(`TTS HTTP ${res.status}`)
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  return new Promise((resolve) => {
    const audio = new Audio(url)
    currentAudio = audio
    audio.playbackRate = rate
    const cleanup = () => { URL.revokeObjectURL(url); currentAudio = null }
    audio.onended = () => { cleanup(); resolve() }
    audio.onerror = () => { cleanup(); resolve() }
    signal.addEventListener('abort', () => { audio.pause(); cleanup(); resolve() }, { once: true })
    void audio.play()
  })
}

async function playBrowser(text: string, lang: string, rate: number): Promise<void> {
  return new Promise((resolve) => {
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    u.rate = rate
    u.onend = () => resolve()
    u.onerror = () => resolve()
    window.speechSynthesis.speak(u)
  })
}

export async function speakSequentialChunks(
  chunks: string[],
  options?: { lang?: string; rate?: number; onChunkStart?: (index: number) => void },
): Promise<void> {
  stopSpeaking()
  abortCtrl = new AbortController()
  const { signal } = abortCtrl
  const rate = options?.rate ?? 1
  const lang = options?.lang ?? 'es-ES'

  for (let i = 0; i < chunks.length; i++) {
    if (signal.aborted) break
    options?.onChunkStart?.(i)
    const text = chunks[i]?.trim() ?? ''
    if (!text) continue
    if (TTS_URL) {
      await playOpenAI(text, rate, signal)
    } else {
      await playBrowser(text, lang, rate)
    }
  }

  abortCtrl = null
}

export function speakText(text: string, options?: { lang?: string; rate?: number }): Promise<void> {
  return speakSequentialChunks([text], options)
}
