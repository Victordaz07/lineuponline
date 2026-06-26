import { useEffect, useState } from 'react'
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
        <button onClick={remove} className="shrink-0 font-ui text-xs text-red-400/70 hover:text-red-400">
          Eliminar
        </button>
      </div>

      {expanded && (
        <div className="space-y-4 border-t border-sg-gold/10 bg-navy-deep/30 px-5 py-4">
          <LyricsEditor key={track.lyrics} track={track} />
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
