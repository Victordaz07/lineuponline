/**
 * Servicio de texto a voz usando la Web Speech API del navegador.
 */

/**
 * Indica si el navegador puede sintetizar voz.
 *
 * @returns true si hay voces o síntesis disponible
 */
export function isSpeechSynthesisSupported(): boolean {
  return typeof window !== 'undefined' && 'speechSynthesis' in window
}

/**
 * Detiene cualquier locución en curso.
 */
export function stopSpeaking(): void {
  if (typeof window === 'undefined' || !isSpeechSynthesisSupported()) {
    return
  }
  window.speechSynthesis.cancel()
}

/**
 * Lee un texto en voz alta.
 *
 * @param text - Texto a vocalizar
 * @param options - Opciones de idioma y velocidad
 * @returns Promise que resuelve al terminar o rechaza si no hay soporte
 */
export function speakText(
  text: string,
  options?: { lang?: string; rate?: number },
): Promise<void> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !isSpeechSynthesisSupported()) {
      reject(new Error('Speech synthesis no disponible'))
      return
    }

    stopSpeaking()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = options?.lang ?? 'es-ES'
    utterance.rate = options?.rate ?? 1
    utterance.onend = () => {
      resolve()
    }
    utterance.onerror = (event) => {
      reject(new Error(event.error ?? 'Error de síntesis'))
    }
    window.speechSynthesis.speak(utterance)
  })
}

/**
 * Lee una lista de fragmentos en secuencia (p. ej. párrafos para resaltado).
 */
export function speakSequentialChunks(
  chunks: string[],
  options?: {
    lang?: string
    rate?: number
    onChunkStart?: (index: number) => void
  },
): Promise<void> {
  return (async () => {
    for (let i = 0; i < chunks.length; i++) {
      options?.onChunkStart?.(i)
      await speakText(chunks[i] ?? '', { lang: options?.lang, rate: options?.rate })
    }
  })()
}

/**
 * Comprueba si hay una locución activa.
 *
 * @returns true si está hablando
 */
export function isSpeaking(): boolean {
  return typeof window !== 'undefined' && isSpeechSynthesisSupported() && window.speechSynthesis.speaking
}
