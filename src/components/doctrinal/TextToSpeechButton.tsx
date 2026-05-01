import { useCallback, useEffect, useState } from 'react'
import { isSpeechSynthesisSupported, speakSequentialChunks, stopSpeaking } from '@/services/ttsService'
import { DEFAULT_TTS_SPEED } from '@/lib/constants'

export type TtsParagraph = { id: string; text: string }

export type TextToSpeechButtonProps = {
  /** Texto completo (pestaña plana o fallback). */
  text: string
  /** Si se define, lee por párrafo y notifica el id activo para resaltado. */
  paragraphs?: readonly TtsParagraph[]
  onParagraphActive?: (id: string | null) => void
  label?: string
  speed?: number
}

/**
 * Botón que lee texto con la Web Speech API del navegador.
 * Modo párrafos: resalta bloque por bloque al leer en secuencia.
 */
export function TextToSpeechButton({
  text,
  paragraphs,
  onParagraphActive,
  label = 'Escuchar',
  speed = DEFAULT_TTS_SPEED,
}: TextToSpeechButtonProps) {
  const [playing, setPlaying] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const supported = typeof window !== 'undefined' && isSpeechSynthesisSupported()

  useEffect(() => {
    return () => {
      stopSpeaking()
      onParagraphActive?.(null)
    }
  }, [onParagraphActive])

  const handleClick = useCallback(async () => {
    if (!supported) {
      setError('El navegador no soporta voz.')
      return
    }

    setError(null)

    if (playing) {
      stopSpeaking()
      setPlaying(false)
      onParagraphActive?.(null)
      return
    }

    const pairs =
      paragraphs && paragraphs.length > 0
        ? paragraphs.map((p) => ({ id: p.id, text: p.text.trim() })).filter((p) => p.text.length > 0)
        : [{ id: '_full', text: text.trim() }].filter((p) => p.text.length > 0)

    if (pairs.length === 0) {
      setError('No hay texto.')
      return
    }

    const chunks = pairs.map((p) => p.text)
    const ids = pairs.map((p) => p.id)

    setPlaying(true)
    onParagraphActive?.(null)

    try {
      await speakSequentialChunks(chunks, {
        lang: 'es-ES',
        rate: speed,
        onChunkStart: (i) => {
          if (paragraphs && paragraphs.length > 0) {
            onParagraphActive?.(ids[i] ?? null)
          }
        },
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo reproducir')
    } finally {
      onParagraphActive?.(null)
      setPlaying(false)
    }
  }, [onParagraphActive, paragraphs, playing, speed, supported, text])

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
