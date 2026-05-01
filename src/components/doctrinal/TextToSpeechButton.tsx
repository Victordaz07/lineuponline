import { useCallback, useEffect, useState } from 'react'
import { isSpeechSynthesisSupported, speakText, stopSpeaking } from '@/services/ttsService'
import { DEFAULT_TTS_SPEED } from '@/lib/constants'

export type TextToSpeechButtonProps = {
  text: string
  label?: string
  speed?: number
}

/**
 * Botón que lee texto con la Web Speech API del navegador.
 *
 * @param props - Texto, etiqueta y velocidad
 * @returns Control de reproducción accesible
 */
export function TextToSpeechButton({ text, label = 'Escuchar', speed = DEFAULT_TTS_SPEED }: TextToSpeechButtonProps) {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supported = typeof window !== 'undefined' && isSpeechSynthesisSupported()

  useEffect(() => {
    return () => {
      stopSpeaking()
    }
  }, [])

  const handleClick = useCallback(async () => {
    if (!supported || !text.trim()) {
      setError('No hay texto o el navegador no soporta voz.')
      return
    }
    setError(null)
    if (playing) {
      stopSpeaking()
      setPlaying(false)
      return
    }
    setPlaying(true)
    try {
      await speakText(text, { rate: speed, lang: 'es-ES' })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo reproducir')
    } finally {
      setPlaying(false)
    }
  }, [playing, speed, supported, text])

  return (
    <div className="flex flex-col gap-1">
      <button
        type="button"
        onClick={() => void handleClick()}
        disabled={!supported}
        className="inline-flex items-center justify-center gap-2 rounded-full border border-gold-main/40 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent shadow-md transition hover:bg-gold-dim disabled:cursor-not-allowed disabled:opacity-50"
        aria-pressed={playing}
        aria-label={playing ? 'Pausar lectura' : label}
      >
        <span aria-hidden="true">{playing ? '⏸' : '🔊'}</span>
        {playing ? 'Detener' : label}
      </button>
      {!supported ? <p className="font-ui text-xs text-text-muted">Voz no disponible en este navegador.</p> : null}
      {error ? <p className="font-ui text-xs text-red-600">{error}</p> : null}
    </div>
  )
}
