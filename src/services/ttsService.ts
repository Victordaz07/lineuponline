/**
 * TTS service: uses OpenAI via Firebase Cloud Function when VITE_TTS_FUNCTION_URL
 * is configured; falls back to the browser's Web Speech API.
 */

const TTS_URL = import.meta.env.VITE_TTS_FUNCTION_URL as string | undefined

let currentAudio: HTMLAudioElement | null = null
let abortCtrl: AbortController | null = null
let _paused = false
let _resumeResolve: (() => void) | null = null
let _currentRate = 1

export function isSpeechSynthesisSupported(): boolean {
  return Boolean(TTS_URL) || (typeof window !== 'undefined' && 'speechSynthesis' in window)
}

export function isOpenAIMode(): boolean {
  return Boolean(TTS_URL)
}

export function getCurrentAudio(): HTMLAudioElement | null {
  return currentAudio
}

export function isPaused(): boolean {
  return _paused
}

export function setPlaybackRate(rate: number): void {
  _currentRate = rate
  if (currentAudio) currentAudio.playbackRate = rate
}

export function stopSpeaking(): void {
  _paused = false
  _resumeResolve?.()
  _resumeResolve = null
  abortCtrl?.abort()
  abortCtrl = null
  if (currentAudio) {
    currentAudio.pause()
    currentAudio = null
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel()
  }
}

export function pauseSpeaking(): void {
  _paused = true
  currentAudio?.pause()
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const ss = window.speechSynthesis
    if (ss.speaking) {
      try {
        ss.pause()
      } catch {
        /* algunos navegadores no aplican bien pause sobre utterances grandes */
      }
    }
  }
}

export function resumeSpeaking(): void {
  _paused = false
  void currentAudio?.play?.().catch(() => {})
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const ss = window.speechSynthesis
    try {
      ss.resume()
      // Chrome/Safari a veces ignoran el primer resume() tras pause().
      requestAnimationFrame(() => {
        try {
          if (ss.paused) ss.resume()
        } catch {
          /* noop */
        }
      })
      window.setTimeout(() => {
        try {
          if (ss.paused) ss.resume()
        } catch {
          /* noop */
        }
      }, 60)
    } catch {
      /* noop */
    }
  }
  _resumeResolve?.()
  _resumeResolve = null
}

export function isSpeaking(): boolean {
  if (!TTS_URL) {
    return typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis.speaking
  }
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    const ss = window.speechSynthesis
    if ((ss.speaking && !ss.paused) || currentAudio !== null) {
      return true
    }
  }
  return currentAudio !== null && !currentAudio.paused
}

async function waitForResume(signal: AbortSignal): Promise<void> {
  if (!_paused) return
  return new Promise<void>((resolve) => {
    _resumeResolve = resolve
    signal.addEventListener('abort', () => resolve(), { once: true })
  })
}

async function playOpenAI(text: string, voice: string, signal: AbortSignal): Promise<void> {
  const res = await fetch(TTS_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ text: text.slice(0, 4096), voice }),
    signal,
  })
  if (!res.ok) throw new Error(`TTS HTTP ${res.status}`)
  const blob = await res.blob()
  const url = URL.createObjectURL(blob)
  return new Promise((resolve) => {
    const audio = new Audio(url)
    currentAudio = audio
    audio.playbackRate = _currentRate
    const cleanup = () => {
      URL.revokeObjectURL(url)
      currentAudio = null
    }
    audio.onended = () => { cleanup(); resolve() }
    audio.onerror = () => { cleanup(); resolve() }
    signal.addEventListener('abort', () => { audio.pause(); cleanup(); resolve() }, { once: true })
    void audio.play()
  })
}

async function playBrowser(text: string, lang: string, signal: AbortSignal): Promise<void> {
  return new Promise((resolve) => {
    const ss = window.speechSynthesis
    const u = new SpeechSynthesisUtterance(text)
    u.lang = lang
    u.rate = _currentRate
    const finish = () => {
      signal.removeEventListener('abort', onAbort)
      resolve()
    }
    const onAbort = () => {
      try {
        ss.cancel()
      } catch {
        /* noop */
      }
      finish()
    }
    signal.addEventListener('abort', onAbort, { once: true })
    u.onend = finish
    u.onerror = finish
    ss.speak(u)
  })
}

function browserTtsAvailable(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

let warnedOpenAiFallback = false

/** Intenta OpenAI vía función; si la red falla, usa síntesis del navegador. */
async function playOpenAiOrFallback(
  text: string,
  voice: string,
  lang: string,
  signal: AbortSignal,
): Promise<void> {
  try {
    await playOpenAI(text, voice, signal)
  } catch (e) {
    if (!browserTtsAvailable()) {
      throw e instanceof Error ? e : new Error(String(e))
    }
    if (!warnedOpenAiFallback) {
      warnedOpenAiFallback = true
      console.warn(
        '[TTS] La función cloud no respondió (¿desplegada en Blaze?). Se usa la voz del navegador.',
        e,
      )
    }
    await playBrowser(text, lang, signal)
  }
}

export async function speakSequentialChunks(
  chunks: string[],
  options?: {
    lang?: string
    rate?: number
    voice?: string
    onChunkStart?: (index: number) => void
  },
): Promise<void> {
  stopSpeaking()
  abortCtrl = new AbortController()
  const { signal } = abortCtrl
  _currentRate = options?.rate ?? 1
  const lang = options?.lang ?? 'es-ES'
  const voice = options?.voice ?? 'nova'

  for (let i = 0; i < chunks.length; i++) {
    if (signal.aborted) break
    await waitForResume(signal)
    if (signal.aborted) break
    options?.onChunkStart?.(i)
    const text = chunks[i]?.trim() ?? ''
    if (!text) continue
    if (TTS_URL) {
      await playOpenAiOrFallback(text, voice, lang, signal)
    } else {
      await playBrowser(text, lang, signal)
    }
  }

  abortCtrl = null
}

export function speakText(text: string, options?: { lang?: string; rate?: number }): Promise<void> {
  return speakSequentialChunks([text], options)
}
