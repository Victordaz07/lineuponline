import { useCallback, useEffect, useRef, useState } from 'react'
import {
  getCurrentAudio,
  isOpenAIMode,
  isSpeechSynthesisSupported,
  pauseSpeaking,
  resumeSpeaking,
  setPlaybackRate,
  speakSequentialChunks,
  stopSpeaking,
} from '@/services/ttsService'

export type TtsParagraph = { id: string; text: string }

export type LessonAudioPlayerProps = {
  text: string
  paragraphs?: readonly TtsParagraph[]
  onParagraphActive?: (id: string | null) => void
}

const SPEEDS = [0.75, 1, 1.25, 1.5] as const

const VOICES = [
  { id: 'nova', label: 'Nova', desc: 'Femenina · natural' },
  { id: 'shimmer', label: 'Shimmer', desc: 'Femenina · cálida' },
  { id: 'alloy', label: 'Alloy', desc: 'Neutral' },
  { id: 'echo', label: 'Echo', desc: 'Masculina' },
  { id: 'onyx', label: 'Onyx', desc: 'Masculina · grave' },
  { id: 'fable', label: 'Fable', desc: 'Masculina · expresiva' },
] as const

export function LessonAudioPlayer({ text, paragraphs, onParagraphActive }: LessonAudioPlayerProps) {
  const [expanded, setExpanded] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [paused, setPaused] = useState(false)
  const [speed, setSpeed] = useState(1)
  const [voice, setVoice] = useState('nova')
  const [currentChunk, setCurrentChunk] = useState(0)
  const [audioProgress, setAudioProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const rafRef = useRef<number | null>(null)
  const supported = typeof window !== 'undefined' && isSpeechSynthesisSupported()
  const openAI = isOpenAIMode()

  const pairs = (paragraphs && paragraphs.length > 0)
    ? paragraphs.map((p) => ({ id: p.id, text: p.text.trim() })).filter((p) => p.text.length > 0)
    : [{ id: '_full', text: text.trim() }].filter((p) => p.text.length > 0)
  const totalChunks = pairs.length
  const chunks = pairs.map((p) => p.text)
  const ids = pairs.map((p) => p.id)

  // Animate progress from the HTMLAudioElement currentTime
  useEffect(() => {
    if (!playing || paused) {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
      return
    }
    const tick = () => {
      const audio = getCurrentAudio()
      if (audio && audio.duration > 0 && !Number.isNaN(audio.duration)) {
        setAudioProgress(audio.currentTime / audio.duration)
      }
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current)
    }
  }, [playing, paused])

  useEffect(() => {
    return () => {
      stopSpeaking()
      onParagraphActive?.(null)
    }
  }, [onParagraphActive])

  const handlePlay = useCallback(async () => {
    if (!supported) return
    setError(null)
    setExpanded(true)
    setPlaying(true)
    setPaused(false)
    setCurrentChunk(0)
    setAudioProgress(0)
    onParagraphActive?.(null)

    try {
      await speakSequentialChunks(chunks, {
        lang: 'es-ES',
        rate: speed,
        voice,
        onChunkStart: (i) => {
          setCurrentChunk(i)
          setAudioProgress(0)
          if (paragraphs && paragraphs.length > 0) onParagraphActive?.(ids[i] ?? null)
        },
      })
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al reproducir')
    } finally {
      setPlaying(false)
      setPaused(false)
      setAudioProgress(0)
      onParagraphActive?.(null)
    }
  }, [supported, chunks, speed, voice, paragraphs, ids, onParagraphActive])

  const handlePause = () => {
    pauseSpeaking()
    setPaused(true)
  }

  const handleResume = () => {
    resumeSpeaking()
    setPaused(false)
  }

  const handleStop = () => {
    stopSpeaking()
    setPlaying(false)
    setPaused(false)
    setCurrentChunk(0)
    setAudioProgress(0)
    onParagraphActive?.(null)
  }

  const handleSpeedChange = (s: number) => {
    setSpeed(s)
    setPlaybackRate(s)
  }

  const overallProgress = totalChunks > 0 ? (currentChunk + audioProgress) / totalChunks : 0

  if (!expanded) {
    return (
      <button
        type="button"
        onClick={() => { setExpanded(true); void handlePlay() }}
        disabled={!supported}
        className="inline-flex items-center gap-2 rounded-full border border-sg-gold/30 bg-navy-mid px-4 py-2 font-ui text-sm font-semibold text-parchment/85 shadow-md transition hover:bg-sg-gold/10 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <path d="M9 3a5 5 0 0 1 0 10" strokeLinecap="round" />
          <path d="M11 1a8 8 0 0 1 0 14" strokeLinecap="round" />
          <rect x="1" y="5" width="5" height="6" rx="1" fill="currentColor" stroke="none" />
          <path d="M6 7l4-2v6l-4-2" fill="currentColor" stroke="none" />
        </svg>
        Escuchar lección
      </button>
    )
  }

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-md">
      {/* Transport row */}
      <div className="flex items-center gap-3 px-4 pb-2 pt-3">
        {/* Play / Pause / Resume */}
        {!playing && !paused ? (
          <button
            onClick={() => void handlePlay()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sg-gold text-navy-deep shadow transition hover:brightness-95"
            aria-label="Reproducir"
          >
            <PlayIcon />
          </button>
        ) : paused ? (
          <button
            onClick={handleResume}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sg-gold text-navy-deep shadow transition hover:brightness-95"
            aria-label="Reanudar"
          >
            <PlayIcon />
          </button>
        ) : (
          <button
            onClick={handlePause}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sg-gold text-navy-deep shadow transition hover:brightness-95"
            aria-label="Pausar"
          >
            <PauseIcon />
          </button>
        )}

        {/* Progress bar + label */}
        <div className="flex min-w-0 flex-1 flex-col gap-1">
          <div className="relative h-2 w-full overflow-hidden rounded-full bg-sg-gold/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sg-gold to-sg-gold-light transition-[width] duration-75"
              style={{ width: `${overallProgress * 100}%` }}
            />
          </div>
          <div className="flex items-center justify-between font-ui text-[0.6rem] text-parchment/50">
            <span>
              {playing || paused
                ? `Párrafo ${currentChunk + 1} de ${totalChunks}`
                : 'Listo para reproducir'}
            </span>
            <span>
              {paused ? '⏸ En pausa' : playing ? '▶ Reproduciendo' : ''}
            </span>
          </div>
        </div>

        {/* Stop */}
        <button
          onClick={handleStop}
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sg-gold/20 text-parchment/50 transition hover:border-sg-gold/50 hover:text-parchment"
          aria-label="Detener"
        >
          <StopIcon />
        </button>

        {/* Collapse */}
        <button
          onClick={() => { handleStop(); setExpanded(false) }}
          className="font-ui text-[0.65rem] text-parchment/50 transition hover:text-parchment"
          aria-label="Cerrar reproductor"
        >
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true"><path d="M1 1l8 8M9 1L1 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>
        </button>
      </div>

      {/* Controls row: speed + voice */}
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-sg-gold/10 px-4 pb-3 pt-2">
        {/* Speed pills */}
        <div className="flex items-center gap-1">
          <span className="mr-1 font-ui text-[0.6rem] font-semibold uppercase tracking-wider text-parchment/50">
            Vel.
          </span>
          {SPEEDS.map((s) => (
            <button
              key={s}
              onClick={() => handleSpeedChange(s)}
              className={`rounded-full px-2.5 py-0.5 font-ui text-xs font-semibold transition ${
                speed === s
                  ? 'bg-sg-gold/15 text-sg-gold-light ring-1 ring-sg-gold/40'
                  : 'text-parchment/50 hover:text-parchment'
              }`}
            >
              {s}×
            </button>
          ))}
        </div>

        {/* Voice selector — only when OpenAI is active */}
        {openAI && (
          <div className="ml-auto flex items-center gap-2">
            <span className="font-ui text-[0.6rem] font-semibold uppercase tracking-wider text-parchment/50">
              Voz
            </span>
            <select
              value={voice}
              onChange={(e) => setVoice(e.target.value)}
              disabled={playing && !paused}
              className="rounded-lg border border-sg-gold/20 bg-navy-deep px-2 py-1 font-ui text-xs text-parchment/80 focus:outline-none focus:ring-1 focus:ring-sg-gold/40 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {VOICES.map((v) => (
                <option key={v.id} value={v.id}>
                  {v.label} — {v.desc}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      {error ? (
        <p className="px-4 pb-3 font-ui text-xs text-red-600">{error}</p>
      ) : null}
    </div>
  )
}

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <path d="M3 2.5l8 4.5-8 4.5z" />
    </svg>
  )
}

function PauseIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
      <rect x="2.5" y="2" width="3.5" height="10" rx="1" />
      <rect x="8" y="2" width="3.5" height="10" rx="1" />
    </svg>
  )
}

function StopIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="currentColor" aria-hidden="true">
      <rect x="1" y="1" width="9" height="9" rx="2" />
    </svg>
  )
}
