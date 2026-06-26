import { useEffect, useState, type ChangeEvent } from 'react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { CovenantChecklist } from '../components/CovenantChecklist'
import { subscribeCharacters } from '@/services/characters.service'
import {
  subscribeTracks,
  addTrack,
  updateTrack,
  deleteTrack,
  callGenerateLyrics,
  uploadTrackAudio,
  uploadTrackCover,
} from '@/services/tracks.service'
import type { AssetStatus, Character, Track } from '@/types/music'

const STATUS_LABELS: Record<Track['status'], string> = {
  DRAFT: 'Borrador',
  IN_REVIEW: 'En revisión',
  PUBLISHED: 'Publicado',
  ARCHIVED: 'Archivado',
}

const ASSET_LABELS: Record<AssetStatus, string> = {
  PENDING: 'Pendiente',
  GENERATING: 'Generando…',
  READY: 'Listo',
  FAILED: 'Falló',
}

const YOUTUBE_LABELS: Record<Track['youtubeStatus'], string> = {
  NOT_UPLOADED: 'No subido',
  UPLOADING: 'Subiendo…',
  PUBLISHED: 'Publicado',
  FAILED: 'Falló',
}

function NewTrackForm({ characters, onCreated }: { characters: Character[]; onCreated: () => void }) {
  const [open, setOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    characterId: '',
    title: '',
    scriptureRef: '',
  })

  const selected = characters.find((c) => c.id === form.characterId)

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [k]: v }))
  }

  async function handleSave() {
    if (!form.characterId || !form.title.trim() || !form.scriptureRef.trim() || !selected) return
    setSaving(true)
    try {
      await addTrack({
        characterId: form.characterId,
        season: selected.season,
        title: form.title.trim(),
        scriptureRef: form.scriptureRef.trim(),
        genre: selected.musicIdentity.genre,
      })
      setOpen(false)
      setForm({ characterId: '', title: '', scriptureRef: '' })
      onCreated()
    } catch (e) {
      console.error(e)
      alert('Error al crear track')
    } finally {
      setSaving(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        disabled={characters.length === 0}
        className="w-full rounded-xl border border-dashed border-sg-gold/30 py-3 font-ui text-sm font-semibold text-sg-gold/70 transition hover:border-sg-gold/60 hover:bg-sg-gold/5 hover:text-sg-gold disabled:opacity-30"
        title={characters.length === 0 ? 'Crea un personaje primero' : undefined}
      >
        + Nuevo track
      </button>
    )
  }

  return (
    <Card>
      <p className="mb-3 font-ui text-sm font-semibold text-parchment/80">Nuevo track</p>
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1 sm:col-span-2">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Personaje (interno)</label>
          <select
            value={form.characterId}
            onChange={(e) => set('characterId', e.target.value)}
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20"
          >
            <option value="">Seleccionar…</option>
            {characters.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name} · {c.book} (T{c.season})
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1 sm:col-span-2">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">
            Título (referencia escritural, nunca el nombre)
          </label>
          <input
            value={form.title}
            onChange={(e) => set('title', e.target.value)}
            placeholder='ej. "I Will Go and Do"'
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
          />
        </div>
        <div className="space-y-1 sm:col-span-2">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Referencia escritural</label>
          <input
            value={form.scriptureRef}
            onChange={(e) => set('scriptureRef', e.target.value)}
            placeholder="ej. 1 Nefi 3:7"
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
          />
        </div>
      </div>
      <div className="mt-4 flex justify-end gap-2">
        <button onClick={() => setOpen(false)} className="rounded-xl px-4 py-2 font-ui text-xs text-parchment/50 hover:text-parchment">
          Cancelar
        </button>
        <Button
          onClick={handleSave}
          loading={saving}
          disabled={!form.characterId || !form.title.trim() || !form.scriptureRef.trim()}
        >
          Crear track
        </Button>
      </div>
    </Card>
  )
}

/** Editor de letra con estado local propio; se remonta (vía `key`) cuando track.lyrics cambia externamente. */
function LyricsEditor({ track }: { track: Track }) {
  const [lyricsDraft, setLyricsDraft] = useState(track.lyrics)
  const [generating, setGenerating] = useState(false)
  const [genError, setGenError] = useState<string | null>(null)
  const [savingLyrics, setSavingLyrics] = useState(false)

  async function handleGenerate() {
    setGenerating(true)
    setGenError(null)
    try {
      await callGenerateLyrics(track.id, track.characterId, track.scriptureRef)
    } catch (e) {
      setGenError(e instanceof Error ? e.message : 'Error al generar letra.')
    } finally {
      setGenerating(false)
    }
  }

  async function saveLyrics() {
    setSavingLyrics(true)
    try {
      await updateTrack(track.id, { lyrics: lyricsDraft })
    } finally {
      setSavingLyrics(false)
    }
  }

  async function toggleApproved(approved: boolean) {
    await updateTrack(track.id, { lyricsApproved: approved })
  }

  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">
          Letra (propuesta por IA — requiere aprobación humana)
        </label>
        <Button variant="secondary" onClick={handleGenerate} loading={generating}>
          Generar letra (IA)
        </Button>
      </div>
      {genError && <p className="mt-1 font-ui text-xs text-red-400">{genError}</p>}
      <textarea
        value={lyricsDraft}
        onChange={(e) => setLyricsDraft(e.target.value)}
        rows={8}
        className="mt-2 w-full rounded-lg border border-sg-gold/15 bg-navy-deep px-3 py-2 font-ui text-sm text-parchment/85 focus:outline-none focus:ring-1 focus:ring-sg-gold"
        placeholder="Sin letra todavía…"
      />
      <div className="mt-2 flex items-center justify-between">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={track.lyricsApproved}
            onChange={(e) => toggleApproved(e.target.checked)}
            className="h-4 w-4 rounded border-sg-gold/40 bg-navy-deep text-sg-gold focus:ring-sg-gold"
          />
          <span className="font-ui text-xs text-parchment/70">
            Letra aprobada por un humano (requerido antes de generar música)
          </span>
        </label>
        <Button variant="secondary" onClick={saveLyrics} loading={savingLyrics}>
          Guardar letra
        </Button>
      </div>
    </div>
  )
}

/** Subida manual de audio/portada generados fuera de la app (Suno, FLUX, etc.). */
function AssetsManual({ track }: { track: Track }) {
  const [uploadingAudio, setUploadingAudio] = useState(false)
  const [uploadingCover, setUploadingCover] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleAudio(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setUploadingAudio(true)
    setError(null)
    try {
      await uploadTrackAudio(track.id, file)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir el audio.')
    } finally {
      setUploadingAudio(false)
    }
  }

  async function handleCover(e: ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    e.target.value = ''
    if (!file) return
    setUploadingCover(true)
    setError(null)
    try {
      await uploadTrackCover(track.id, file)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Error al subir la portada.')
    } finally {
      setUploadingCover(false)
    }
  }

  return (
    <Card>
      <h3 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
        Audio y portada (subida manual)
      </h3>
      <p className="mt-1 font-ui text-xs text-parchment/45">
        Genera la música y la portada donde quieras (Suno, Apiframe, FLUX, etc.) y sube aquí los
        archivos finales.
      </p>
      {error && <p className="mt-2 font-ui text-xs text-red-400">{error}</p>}

      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        <div>
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">
            Audio ({ASSET_LABELS[track.audioStatus]})
          </label>
          {track.audioUrl && <audio controls src={track.audioUrl} className="mt-2 w-full" />}
          <label className="mt-2 flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-sg-gold/30 px-3 py-2 font-ui text-xs text-sg-gold/70 transition hover:border-sg-gold/60 hover:text-sg-gold">
            {uploadingAudio ? 'Subiendo…' : track.audioUrl ? 'Reemplazar audio' : 'Subir audio'}
            <input
              type="file"
              accept="audio/*"
              className="hidden"
              onChange={handleAudio}
              disabled={uploadingAudio}
            />
          </label>
        </div>

        <div>
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">
            Portada ({ASSET_LABELS[track.coverStatus]})
          </label>
          {track.coverUrl && (
            <img
              src={track.coverUrl}
              alt="Portada"
              className="mt-2 h-32 w-32 rounded-lg border border-sg-gold/15 object-cover"
            />
          )}
          <label className="mt-2 flex cursor-pointer items-center justify-center rounded-lg border border-dashed border-sg-gold/30 px-3 py-2 font-ui text-xs text-sg-gold/70 transition hover:border-sg-gold/60 hover:text-sg-gold">
            {uploadingCover ? 'Subiendo…' : track.coverUrl ? 'Reemplazar portada' : 'Subir portada'}
            <input
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleCover}
              disabled={uploadingCover}
            />
          </label>
        </div>
      </div>
    </Card>
  )
}

function TrackRow({ track, character }: { track: Track; character: Character | undefined }) {
  const [expanded, setExpanded] = useState(false)

  async function remove() {
    if (!confirm(`¿Eliminar el track "${track.title}"?`)) return
    await deleteTrack(track.id)
  }

  return (
    <div className="border-t border-sg-gold/10 first:border-t-0">
      <div className="flex items-center justify-between gap-3 px-5 py-4">
        <button className="min-w-0 flex-1 text-left" onClick={() => setExpanded((v) => !v)}>
          <p className="font-ui text-sm font-semibold text-parchment/85">{track.title}</p>
          <p className="font-ui text-xs text-parchment/45">
            {character?.name ?? track.characterId} · {track.scriptureRef} · {STATUS_LABELS[track.status]}
          </p>
        </button>
        <span className="shrink-0 rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
          Letra: {track.lyricsApproved ? '✓ aprobada' : 'pendiente'}
        </span>
        <span className="shrink-0 rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
          Audio: {ASSET_LABELS[track.audioStatus]}
        </span>
        <span className="shrink-0 rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
          Portada: {ASSET_LABELS[track.coverStatus]}
        </span>
        <span className="shrink-0 rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
          YouTube: {YOUTUBE_LABELS[track.youtubeStatus]}
        </span>
        <button onClick={remove} className="shrink-0 font-ui text-xs text-red-400/70 hover:text-red-400">
          Eliminar
        </button>
      </div>

      {expanded && (
        <div className="space-y-4 border-t border-sg-gold/10 bg-navy-deep/30 px-5 py-4">
          <LyricsEditor key={track.lyrics} track={track} />
          <AssetsManual track={track} />
          <CovenantChecklist track={track} />
        </div>
      )}
    </div>
  )
}

export function TrackManager() {
  const [tracks, setTracks] = useState<Track[]>([])
  const [characters, setCharacters] = useState<Character[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubTracks = subscribeTracks((ts) => {
      setTracks(ts)
      setLoading(false)
    })
    const unsubCharacters = subscribeCharacters(setCharacters)
    return () => {
      unsubTracks()
      unsubCharacters()
    }
  }, [])

  const characterById = new Map(characters.map((c) => [c.id, c]))

  return (
    <div className="space-y-4">
      <NewTrackForm characters={characters} onCreated={() => {}} />
      <Card className="p-0">
        {loading ? (
          <p className="py-10 text-center font-ui text-sm text-parchment/40">Cargando…</p>
        ) : tracks.length === 0 ? (
          <p className="py-10 text-center font-ui text-sm text-parchment/40">Sin tracks todavía.</p>
        ) : (
          tracks.map((t) => <TrackRow key={t.id} track={t} character={characterById.get(t.characterId)} />)
        )}
      </Card>
    </div>
  )
}
