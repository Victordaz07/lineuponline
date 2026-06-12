import { useState, useEffect, useRef } from 'react'
import { nanoid } from '../../../lib/nanoid'
import { AUDIO_STAGE_META, AUDIO_STAGE_ORDER } from '../types'
import type { AudioStage, AudioTrack, StagePlaylist } from '../types'
import { subscribeStagePlaylist, addTrackToStage, removeTrackFromStage, renameTrack } from '../services/sqAudio.service'
import { uploadSQAudio, deleteSQFile } from '../services/sqStorage.service'

// ─── Preview player: solo una pista a la vez en todo el admin ─────────────────
type PreviewHandle = { audio: HTMLAudioElement; onStop: () => void }

let activePreview: PreviewHandle | null = null

function stopActivePreview(): void {
  if (!activePreview) return
  activePreview.audio.pause()
  activePreview.onStop()
  activePreview = null
}

function registerPreview(audio: HTMLAudioElement, onStop: () => void): void {
  stopActivePreview()
  activePreview = { audio, onStop }
}

// ─── Single track row ─────────────────────────────────────────────────────────
function TrackRow({
  track,
  stage,
  onDelete,
}: {
  track: AudioTrack
  stage: AudioStage
  onDelete: () => void
}) {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [audioError, setAudioError] = useState(false)
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState(track.name)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    return () => {
      if (activePreview?.audio === audioRef.current) {
        activePreview.audio.pause()
        activePreview = null
      }
    }
  }, [])

  async function togglePlay() {
    if (!audioRef.current) {
      const a = new Audio()
      a.crossOrigin = 'anonymous'
      a.src = track.url
      a.onended = () => {
        setPlaying(false)
        if (activePreview?.audio === a) activePreview = null
      }
      a.onerror = () => {
        setPlaying(false)
        setAudioError(true)
        if (activePreview?.audio === a) activePreview = null
      }
      audioRef.current = a
    }

    const audio = audioRef.current

    if (playing) {
      audio.pause()
      setPlaying(false)
      if (activePreview?.audio === audio) activePreview = null
      return
    }

    stopActivePreview()
    setAudioError(false)
    try {
      await audio.play()
      setPlaying(true)
      registerPreview(audio, () => setPlaying(false))
    } catch {
      setPlaying(false)
      setAudioError(true)
    }
  }

  async function handleDelete() {
    if (!confirm(`¿Eliminar «${track.name}»?`)) return
    setDeleting(true)
    try {
      await deleteSQFile(track.storagePath)
      await removeTrackFromStage(stage, track.id)
      onDelete()
    } catch (e) {
      console.error(e)
      alert('Error al eliminar')
    } finally {
      setDeleting(false)
    }
  }

  async function handleRename() {
    if (name.trim() && name !== track.name) {
      await renameTrack(stage, track.id, name.trim())
    }
    setEditing(false)
  }

  return (
    <div className="flex items-center gap-3 rounded-xl border border-sg-gold/10 bg-navy-deep/40 px-3 py-2">
      <button
        onClick={togglePlay}
        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition ${
          audioError
            ? 'bg-red-500/15 text-red-400'
            : 'bg-sg-gold/15 text-sg-gold-light hover:bg-sg-gold/25'
        }`}
        title={audioError ? 'Error al reproducir — verifica CORS de Storage' : playing ? 'Pausar' : 'Reproducir'}
      >
        {audioError ? '✕' : playing ? '⏸' : '▶'}
      </button>

      <div className="min-w-0 flex-1">
        {editing ? (
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleRename}
            onKeyDown={(e) => e.key === 'Enter' && handleRename()}
            className="w-full rounded-lg bg-navy-mid px-2 py-1 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/40"
          />
        ) : (
          <button
            className="block truncate text-left font-ui text-xs text-parchment/80 hover:text-parchment"
            onClick={() => setEditing(true)}
            title="Clic para renombrar"
          >
            {track.name}
          </button>
        )}
      </div>

      <button
        onClick={handleDelete}
        disabled={deleting}
        className="ml-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-parchment/30 transition hover:bg-red-500/20 hover:text-red-400"
        title="Eliminar pista"
      >
        {deleting ? '…' : '✕'}
      </button>
    </div>
  )
}

// ─── Stage playlist card ──────────────────────────────────────────────────────
function StageCard({ stage }: { stage: AudioStage }) {
  const meta = AUDIO_STAGE_META[stage]
  const [playlist, setPlaylist] = useState<StagePlaylist | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const unsub = subscribeStagePlaylist(stage, setPlaylist)
    return unsub
  }, [stage])

  async function handleFiles(files: FileList | null) {
    if (!files || files.length === 0) return
    setUploading(true)
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      setProgress(`Subiendo ${i + 1}/${files.length}: ${file.name}`)
      try {
        const { url, storagePath } = await uploadSQAudio(file, stage)
        const track: AudioTrack = {
          id: nanoid(),
          name: file.name.replace(/\.[^.]+$/, ''),
          url,
          storagePath,
          uploadedAt: new Date().toISOString(),
        }
        await addTrackToStage(stage, track)
      } catch (e) {
        console.error(e)
        alert(`Error subiendo ${file.name}`)
      }
    }
    setUploading(false)
    setProgress('')
    if (inputRef.current) inputRef.current.value = ''
  }

  const tracks = playlist?.tracks ?? []

  return (
    <div className="overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-sg-gold/10 px-5 py-3">
        <span className="text-xl">{meta.icon}</span>
        <div className="flex-1">
          <p className="font-ui text-sm font-semibold text-parchment/90">{meta.label}</p>
          <p className="font-ui text-[11px] text-parchment/45">{meta.description}</p>
        </div>
        <span className="rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold">
          {tracks.length} pista{tracks.length !== 1 ? 's' : ''}
        </span>
      </div>

      {/* Track list */}
      <div className="space-y-2 px-4 py-3">
        {tracks.length === 0 && (
          <p className="py-2 text-center font-ui text-xs text-parchment/30">
            Sin pistas — sube un MP3 para esta etapa
          </p>
        )}
        {tracks.map((t) => (
          <TrackRow key={t.id} track={t} stage={stage} onDelete={() => {}} />
        ))}
      </div>

      {/* Upload */}
      <div className="border-t border-sg-gold/10 px-4 pb-4 pt-3">
        {uploading ? (
          <p className="text-center font-ui text-xs text-sg-gold animate-pulse">{progress}</p>
        ) : (
          <>
            <input
              ref={inputRef}
              type="file"
              accept="audio/*,.mp3,.wav,.ogg,.m4a"
              multiple
              className="hidden"
              onChange={(e) => handleFiles(e.target.files)}
            />
            <button
              onClick={() => inputRef.current?.click()}
              className="w-full rounded-xl border border-dashed border-sg-gold/30 py-2.5 font-ui text-xs font-semibold text-sg-gold/70 transition hover:border-sg-gold/60 hover:bg-sg-gold/5 hover:text-sg-gold"
            >
              + Subir MP3 / audio
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ─── AudioManager ──────────────────────────────────────────────────────────────
export function AudioManager() {
  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid px-5 py-4">
        <p className="font-ui text-sm text-parchment/70">
          Cada etapa tiene su propia <strong className="text-parchment">lista de reproducción</strong>. El juego elige
          una pista aleatoria de la lista cuando inicia esa etapa — sin repetir hasta agotar la lista. Sube
          tus MP3 de Suno en la sección correspondiente.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {AUDIO_STAGE_ORDER.map((stage) => (
          <StageCard key={stage} stage={stage} />
        ))}
      </div>
    </div>
  )
}
