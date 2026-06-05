import { useCallback, useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { useElevenLabsCredits } from '@/hooks/useElevenLabsCredits'
import { generateSpeech } from '@/services/elevenLabs.service'
import {
  subscribeEpisodes,
  createEpisode,
  updateEpisodeMeta,
  deleteEpisode,
} from '@/services/episodeProjects.service'
import { parseScript, scriptCharCount } from '@/utils/scriptParser'
import { padWithSilence, mergeAudioBuffers } from '@/utils/audioProcessing'
import type { Episode, EpisodeSegment } from '@/types/episode'
import { EPISODE_VOICES } from '@/types/episode'

// ── Sub-components ──────────────────────────────────────────────────────────

function CreditsCard() {
  const { data, loading, error, configured, refresh } = useElevenLabsCredits()

  return (
    <div className="flex items-start justify-between rounded-2xl border border-sg-gold/15 bg-navy-mid px-5 py-4">
      <div>
        <p className="mb-1 font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
          ElevenLabs Credits
        </p>
        {!configured ? (
          <p className="font-ui text-sm text-parchment/40">
            Add <code className="rounded bg-navy-light px-1 font-mono text-xs text-sg-gold-light">VITE_ELEVENLABS_API_KEY</code> to see credits
          </p>
        ) : loading ? (
          <p className="font-ui text-sm text-parchment/40">Loading…</p>
        ) : error ? (
          <p className="font-ui text-sm text-parchment/40">{error}</p>
        ) : data ? (
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <span className="font-display text-xl font-semibold text-sg-gold-light">
                {data.characterCount.toLocaleString()}
              </span>
              <span className="font-ui text-sm text-parchment/40">
                / {data.characterLimit.toLocaleString()} chars
              </span>
            </div>
            <div className="h-1.5 w-48 overflow-hidden rounded-full bg-navy-light">
              <div
                className="h-full rounded-full bg-sg-gold transition-all"
                style={{ width: `${Math.min(100, (data.characterCount / data.characterLimit) * 100)}%` }}
              />
            </div>
            <p className="font-ui text-xs text-parchment/30">
              Resets {new Date(data.nextResetUnix * 1000).toLocaleDateString('es', { month: 'long', day: 'numeric' })}
            </p>
          </div>
        ) : (
          <p className="font-ui text-sm text-parchment/40">
            Pulsa <span className="text-sg-gold-light">Ver créditos</span> para consultar el uso
          </p>
        )}
      </div>
      {configured && (
        <button
          type="button"
          onClick={refresh}
          disabled={loading}
          className="font-ui text-xs text-sg-gold-light transition hover:text-sg-gold disabled:opacity-40"
        >
          {data ? 'Refresh' : 'Ver créditos'}
        </button>
      )}
    </div>
  )
}

function StatusBadge({ status }: { status: Episode['status'] }) {
  const map: Record<Episode['status'], string> = {
    draft:      'bg-parchment/10 text-parchment/50',
    generating: 'bg-amber-900/40 text-amber-300',
    ready:      'bg-emerald-900/40 text-emerald-300',
  }
  const label: Record<Episode['status'], string> = {
    draft:      'Borrador',
    generating: 'Generando',
    ready:      'Listo ✓',
  }
  return (
    <span className={`rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-widest ${map[status]}`}>
      {label[status]}
    </span>
  )
}

function SpeakerChip({ speaker }: { speaker: string }) {
  const color = speaker === 'SETH'
    ? 'bg-sky-900/60 text-sky-200'
    : speaker === 'MIA'
    ? 'bg-rose-900/60 text-rose-200'
    : 'bg-sg-gold/10 text-sg-gold-light'
  return (
    <span className={`shrink-0 rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-widest ${color}`}>
      {speaker}
    </span>
  )
}

// ── Episode List Card ────────────────────────────────────────────────────────

function EpisodeCard({
  episode,
  onOpen,
  onDelete,
}: {
  episode: Episode
  onOpen: () => void
  onDelete: () => void
}) {
  const [confirmDelete, setConfirmDelete] = useState(false)
  const ready = episode.segments.filter((s) => s.status === 'done').length
  const total = episode.segments.length

  return (
    <div className="group relative overflow-hidden rounded-2xl border border-sg-gold/10 bg-navy-mid p-5 transition hover:border-sg-gold/25">
      <div className="mb-3 flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate font-display text-lg text-parchment">{episode.title || 'Sin título'}</p>
          {episode.description && (
            <p className="mt-0.5 line-clamp-1 font-ui text-xs text-parchment/40">{episode.description}</p>
          )}
        </div>
        <StatusBadge status={episode.status} />
      </div>

      <div className="mb-4 flex items-center gap-4 font-ui text-xs text-parchment/40">
        <span>🎙️ {total} segmento{total !== 1 ? 's' : ''}</span>
        {total > 0 && <span>✓ {ready}/{total} generado{ready !== 1 ? 's' : ''}</span>}
        <span>{episode.totalCharacters.toLocaleString()} chars</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={onOpen}
          className="flex-1 rounded-xl bg-sg-gold px-4 py-2 font-ui text-xs font-semibold text-navy-deep transition hover:brightness-110"
        >
          Abrir editor →
        </button>
        {confirmDelete ? (
          <>
            <button
              type="button"
              onClick={onDelete}
              className="rounded-xl border border-rose-700/40 bg-rose-950/50 px-3 py-2 font-ui text-xs text-rose-400 transition hover:bg-rose-900/50"
            >
              Confirmar
            </button>
            <button
              type="button"
              onClick={() => setConfirmDelete(false)}
              className="rounded-xl border border-sg-gold/20 px-3 py-2 font-ui text-xs text-parchment/50 hover:bg-navy-light/50"
            >
              No
            </button>
          </>
        ) : (
          <button
            type="button"
            onClick={() => setConfirmDelete(true)}
            className="rounded-xl border border-sg-gold/10 px-3 py-2 font-ui text-xs text-parchment/30 transition hover:border-rose-700/40 hover:text-rose-400"
          >
            🗑
          </button>
        )}
      </div>
    </div>
  )
}

// ── Segment Row ──────────────────────────────────────────────────────────────

function SegmentRow({
  segment,
  index,
  onGenerate,
  onPlay,
  isPlaying,
}: {
  segment: EpisodeSegment
  index: number
  onGenerate: () => void
  onPlay: () => void
  isPlaying: boolean
}) {
  return (
    <div className="flex items-start gap-3 rounded-2xl border border-sg-gold/10 bg-navy-mid px-4 py-3">
      <span className="mt-0.5 w-5 shrink-0 text-right font-ui text-xs text-parchment/25 tabular-nums">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex flex-wrap items-center gap-2">
          <SpeakerChip speaker={segment.speaker} />
          <span className="font-ui text-[10px] text-parchment/25">
            {EPISODE_VOICES[segment.speaker]?.desc ?? 'voz estándar'}
          </span>
          <span className="ml-auto font-ui text-[10px] text-parchment/25">
            {segment.charCount} chars
          </span>
        </div>
        <p className="font-ui text-sm leading-snug text-parchment/65">{segment.text}</p>
      </div>
      <div className="flex shrink-0 flex-col items-end gap-1.5">
        {segment.status === 'done' && segment.audioUrl ? (
          <button
            type="button"
            onClick={onPlay}
            title={isPlaying ? 'Detener' : 'Reproducir'}
            className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition ${
              isPlaying ? 'bg-sg-gold text-navy-deep' : 'bg-navy-light text-parchment/60 hover:text-parchment'
            }`}
          >
            {isPlaying ? '■' : '▶'}
          </button>
        ) : segment.status === 'generating' ? (
          <span className="flex h-8 w-8 items-center justify-center">
            <span className="h-4 w-4 animate-spin rounded-full border-2 border-sg-gold/30 border-t-sg-gold" />
          </span>
        ) : (
          <button
            type="button"
            onClick={onGenerate}
            title="Generar audio"
            className="flex h-8 w-8 items-center justify-center rounded-full bg-navy-light font-ui text-xs text-parchment/50 transition hover:bg-sg-gold/20 hover:text-sg-gold disabled:opacity-40"
          >
            ⚡
          </button>
        )}
        {segment.status === 'done' && (
          <button
            type="button"
            onClick={onGenerate}
            title="Regenerar"
            className="font-ui text-[10px] text-parchment/25 underline decoration-dotted hover:text-parchment/50"
          >
            regen
          </button>
        )}
        {segment.status === 'error' && (
          <>
            <span className="text-xs text-rose-400" title={segment.errorMessage}>⚠</span>
            <button
              type="button"
              onClick={onGenerate}
              className="font-ui text-[10px] text-rose-400 underline decoration-dotted"
            >
              retry
            </button>
          </>
        )}
      </div>
    </div>
  )
}

// ── Episode Editor ───────────────────────────────────────────────────────────

function EpisodeEditor({
  episode,
  onBack,
  onUpdate,
}: {
  episode: Episode
  onBack: () => void
  onUpdate: (e: Episode) => void
}) {
  const [title, setTitle] = useState(episode.title)
  const [description, setDescription] = useState(episode.description)
  const [rawScript, setRawScript] = useState(episode.rawScript)
  const [segments, setSegments] = useState<EpisodeSegment[]>(episode.segments)
  const [saving, setSaving] = useState(false)
  const [generateAllProgress, setGenerateAllProgress] = useState<{ done: number; total: number } | null>(null)
  const [merging, setMerging] = useState(false)
  const [combinedUrl, setCombinedUrl] = useState<string | null>(null)
  const [activeSegmentId, setActiveSegmentId] = useState<string | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const prevCombinedUrl = useRef<string | null>(null)
  // Audio blobs kept in memory — no Storage upload needed
  const blobMap = useRef<Map<string, Blob>>(new Map())

  const parsedPreview = parseScript(rawScript)
  const charCount = scriptCharCount(rawScript)

  function stopAudio() {
    audioRef.current?.pause()
    if (audioRef.current) audioRef.current.src = ''
    audioRef.current = null
    setActiveSegmentId(null)
  }

  function playSegmentUrl(url: string, segId: string) {
    stopAudio()
    const a = new Audio(url)
    audioRef.current = a
    setActiveSegmentId(segId)
    a.onended = () => setActiveSegmentId(null)
    a.onerror = () => setActiveSegmentId(null)
    void a.play()
  }

  async function saveScript() {
    setSaving(true)
    const parsed = parseScript(rawScript)
    // Preserve existing segments that already have audio (match by text+speaker)
    const merged: EpisodeSegment[] = parsed.map((p) => {
      const existing = segments.find((s) => s.speaker === p.speaker && s.text === p.text)
      return existing
        ? { ...existing, order: p.order }
        : { ...p, status: 'pending' as const }
    })
    const total = scriptCharCount(rawScript)
    await updateEpisodeMeta(episode.id, {
      title,
      description,
      rawScript,
      segments: merged,
      totalCharacters: total,
    })
    setSegments(merged)
    onUpdate({ ...episode, title, description, rawScript, segments: merged, totalCharacters: total })
    setSaving(false)
  }

  async function generateSegment(segId: string) {
    const seg = segments.find((s) => s.id === segId)
    if (!seg) return
    setSegments((prev) =>
      prev.map((s) => s.id === segId ? { ...s, status: 'generating', errorMessage: undefined } : s),
    )
    try {
      const raw  = await generateSpeech(seg.text, seg.voiceId)
      const blob = await padWithSilence(raw, 300)
      blobMap.current.set(segId, blob)
      const blobUrl = URL.createObjectURL(blob)
      const updated: EpisodeSegment = {
        ...seg,
        status: 'done',
        audioUrl: blobUrl,
        generatedAt: new Date().toISOString(),
      }
      setSegments((prev) => {
        const next = prev.map((s) => s.id === segId ? updated : s)
        void updateEpisodeMeta(episode.id, { segments: next.map((s) => ({ ...s, audioUrl: undefined })) })
        return next
      })
    } catch (err) {
      const msg = err instanceof Error ? err.message : 'Error desconocido'
      setSegments((prev) =>
        prev.map((s) => s.id === segId ? { ...s, status: 'error', errorMessage: msg } : s),
      )
    }
  }

  async function generateAll() {
    const pending = segments.filter((s) => s.status !== 'done')
    setGenerateAllProgress({ done: 0, total: pending.length })
    for (let i = 0; i < pending.length; i++) {
      await generateSegment(pending[i].id)
      setGenerateAllProgress({ done: i + 1, total: pending.length })
    }
    setGenerateAllProgress(null)
  }

  async function mergeAndSave() {
    const sorted = [...segments].sort((a, b) => a.order - b.order).filter((s) => s.status === 'done')
    const blobs = sorted.map((s) => blobMap.current.get(s.id)).filter((b): b is Blob => Boolean(b))
    if (blobs.length === 0) return
    setMerging(true)
    try {
      const combined = await mergeAudioBuffers(blobs)
      if (prevCombinedUrl.current) URL.revokeObjectURL(prevCombinedUrl.current)
      const url = URL.createObjectURL(combined)
      prevCombinedUrl.current = url
      setCombinedUrl(url)
      await updateEpisodeMeta(episode.id, { status: 'ready' })
      onUpdate({ ...episode, status: 'ready' })
    } catch (err) {
      console.error('Merge error:', err)
    } finally {
      setMerging(false)
    }
  }

  const allDone = segments.length > 0 && segments.every((s) => s.status === 'done')
  const someDone = segments.some((s) => s.status === 'done')
  const isGeneratingAll = generateAllProgress !== null

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => { stopAudio(); onBack() }}
          className="flex items-center gap-1.5 rounded-xl border border-sg-gold/20 px-3 py-2 font-ui text-xs text-parchment/60 transition hover:text-parchment"
        >
          ← Volver
        </button>
        <h2 className="font-display text-xl text-parchment">{title || 'Sin título'}</h2>
        <StatusBadge status={allDone ? 'ready' : segments.length > 0 ? 'draft' : 'draft'} />
      </div>

      {/* Meta */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div>
          <label className="mb-1 block font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">Título</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full rounded-xl border border-sg-gold/15 bg-navy-mid px-3 py-2.5 font-ui text-sm text-parchment/80 focus:border-sg-gold/40 focus:outline-none"
          />
        </div>
        <div>
          <label className="mb-1 block font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">Descripción</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full rounded-xl border border-sg-gold/15 bg-navy-mid px-3 py-2.5 font-ui text-sm text-parchment/80 focus:border-sg-gold/40 focus:outline-none"
          />
        </div>
      </div>

      {/* Script */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">Guión</p>
          <span className="font-ui text-xs text-parchment/30 tabular-nums">
            {charCount.toLocaleString()} chars · {parsedPreview.length} segmentos
          </span>
        </div>
        <div className="overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid">
          <textarea
            value={rawScript}
            onChange={(e) => setRawScript(e.target.value)}
            rows={10}
            placeholder={'SETH: Bienvenidos a Seeker Gospel.\nMIA: Hoy exploramos una verdad fundamental.\n[Las líneas con [ son ignoradas]\nSETH: Comencemos.'}
            className="w-full resize-y bg-transparent px-4 py-3 font-mono text-sm text-parchment/75 placeholder:text-parchment/15 focus:outline-none"
          />
          <div className="border-t border-sg-gold/10 px-4 py-2">
            <p className="font-ui text-xs text-parchment/30">
              Formato: <code className="text-sg-gold-light">SETH:</code> / <code className="text-sg-gold-light">MIA:</code> · Las líneas con <code className="text-parchment/40">[</code> se omiten
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => void saveScript()}
          disabled={saving}
          className="rounded-xl bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-navy-deep transition hover:brightness-110 disabled:opacity-50"
        >
          {saving ? 'Guardando…' : 'Guardar guión'}
        </button>
      </div>

      {/* Segments */}
      {segments.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <p className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">
              Segmentos ({segments.length})
            </p>
            <div className="flex items-center gap-2">
              {isGeneratingAll && (
                <span className="font-ui text-xs text-parchment/40">
                  {generateAllProgress!.done}/{generateAllProgress!.total}
                </span>
              )}
              <button
                type="button"
                onClick={() => void generateAll()}
                disabled={isGeneratingAll || allDone}
                className="rounded-xl border border-sg-gold/30 px-3 py-1.5 font-ui text-xs font-semibold text-sg-gold-light transition hover:bg-navy-light disabled:opacity-40"
              >
                {isGeneratingAll ? 'Generando…' : '⚡ Generar todo'}
              </button>
            </div>
          </div>

          {isGeneratingAll && (
            <div className="h-1 w-full overflow-hidden rounded-full bg-navy-light">
              <div
                className="h-full rounded-full bg-sg-gold transition-all duration-300"
                style={{
                  width: generateAllProgress!.total > 0
                    ? `${(generateAllProgress!.done / generateAllProgress!.total) * 100}%`
                    : '0%',
                }}
              />
            </div>
          )}

          <div className="space-y-2">
            {segments
              .slice()
              .sort((a, b) => a.order - b.order)
              .map((seg, idx) => (
                <SegmentRow
                  key={seg.id}
                  segment={seg}
                  index={idx}
                  isPlaying={activeSegmentId === seg.id}
                  onGenerate={() => void generateSegment(seg.id)}
                  onPlay={() => {
                    if (activeSegmentId === seg.id) { stopAudio(); return }
                    playSegmentUrl(seg.audioUrl!, seg.id)
                  }}
                />
              ))}
          </div>
        </div>
      )}

      {/* Merge & Final Audio */}
      {someDone && (
        <div className="space-y-4 rounded-2xl border border-sg-gold/15 bg-navy-mid p-5">
          <p className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/50">
            Audio final
          </p>

          {combinedUrl ? (
            <div className="space-y-3">
              {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
              <audio controls src={combinedUrl} className="w-full" />
              <div className="flex flex-wrap gap-2">
                <a
                  href={combinedUrl}
                  download={`${title || 'episode'}.wav`}
                  className="rounded-xl border border-sg-gold/30 px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-navy-light"
                >
                  Download MP3
                </a>
                <button
                  type="button"
                  onClick={() => void mergeAndSave()}
                  disabled={merging}
                  className="rounded-xl border border-sg-gold/15 px-4 py-2 font-ui text-sm text-parchment/40 transition hover:bg-navy-light disabled:opacity-40"
                >
                  {merging ? 'Mezclando…' : 'Regenerar mezcla'}
                </button>
              </div>
            </div>
          ) : (
            <div>
              <p className="mb-3 font-ui text-sm text-parchment/50">
                {allDone
                  ? 'Todos los segmentos están listos. Mezcla el audio final.'
                  : `${segments.filter((s) => s.status === 'done').length} de ${segments.length} segmentos listos.`}
              </p>
              <button
                type="button"
                onClick={() => void mergeAndSave()}
                disabled={merging || !someDone}
                className="rounded-xl bg-sg-gold px-6 py-2.5 font-ui text-sm font-bold text-navy-deep transition hover:brightness-110 disabled:opacity-40"
              >
                {merging ? 'Mezclando…' : '🎵 Mezclar y guardar'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

// ── New Episode Modal ────────────────────────────────────────────────────────

function NewEpisodeModal({
  onClose,
  onCreate,
}: {
  onClose: () => void
  onCreate: (episodeId: string) => void
}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rawScript, setRawScript] = useState('')
  const [saving, setSaving] = useState(false)

  const parsed = parseScript(rawScript)
  const chars = scriptCharCount(rawScript)

  async function handleCreate() {
    if (!title.trim()) return
    setSaving(true)
    const segments: EpisodeSegment[] = parsed.map((p) => ({ ...p, status: 'pending' as const }))
    const id = await createEpisode(title.trim(), description.trim(), rawScript, segments, chars)
    onCreate(id)
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-navy-deep/80 p-4 backdrop-blur-sm sm:items-center"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
    >
      <div className="w-full max-w-lg space-y-5 overflow-y-auto rounded-3xl border border-sg-gold/15 bg-navy-mid p-6 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-2xl text-parchment">Nuevo episodio</h2>
          <button
            type="button"
            onClick={onClose}
            className="text-parchment/40 transition hover:text-parchment"
          >
            ✕
          </button>
        </div>

        <div className="space-y-3">
          <div>
            <label className="mb-1 block font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">Título *</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              autoFocus
              maxLength={120}
              placeholder="Ej: Episodio 01 — La fe que mueve montañas"
              className="w-full rounded-xl border border-sg-gold/15 bg-navy-deep px-3 py-2.5 font-ui text-sm text-parchment/80 placeholder:text-parchment/20 focus:border-sg-gold/40 focus:outline-none"
            />
          </div>
          <div>
            <label className="mb-1 block font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">Descripción</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              maxLength={240}
              placeholder="Breve descripción del episodio"
              className="w-full rounded-xl border border-sg-gold/15 bg-navy-deep px-3 py-2.5 font-ui text-sm text-parchment/80 placeholder:text-parchment/20 focus:border-sg-gold/40 focus:outline-none"
            />
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between">
              <label className="font-ui text-[10px] font-semibold uppercase tracking-widest text-parchment/40">Guión</label>
              {rawScript && (
                <span className="font-ui text-[10px] text-parchment/30">
                  {parsed.length} segmentos · {chars.toLocaleString()} chars
                </span>
              )}
            </div>
            <textarea
              value={rawScript}
              onChange={(e) => setRawScript(e.target.value)}
              rows={8}
              placeholder={'SETH: Bienvenidos a Seeker Gospel.\nMIA: Hoy exploramos algo especial.\n[Notas de dirección entre corchetes son ignoradas]'}
              className="w-full resize-y rounded-xl border border-sg-gold/15 bg-navy-deep px-3 py-2.5 font-mono text-sm text-parchment/75 placeholder:text-parchment/15 focus:border-sg-gold/40 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => void handleCreate()}
            disabled={!title.trim() || saving}
            className="flex-1 rounded-xl bg-sg-gold py-2.5 font-ui text-sm font-bold text-navy-deep transition hover:brightness-110 disabled:opacity-40"
          >
            {saving ? 'Creando…' : 'Crear episodio'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="rounded-xl border border-sg-gold/20 px-4 py-2.5 font-ui text-sm text-parchment/50 transition hover:bg-navy-light/50"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  )
}

// ── Main Page ────────────────────────────────────────────────────────────────

export default function EpisodeGeneratorPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()
  const [episodes, setEpisodes] = useState<Episode[]>([])
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [showNewModal, setShowNewModal] = useState(false)

  useEffect(() => {
    if (!isAdmin) return
    return subscribeEpisodes(setEpisodes)
  }, [isAdmin])

  const handleDelete = useCallback(async (episodeId: string) => {
    await deleteEpisode(episodeId)
    if (selectedId === episodeId) setSelectedId(null)
  }, [selectedId])

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  const selected = selectedId ? (episodes.find((e) => e.id === selectedId) ?? null) : null

  return (
    <div className="mx-auto max-w-3xl space-y-6 pb-16">

      {/* Header */}
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Admin Tools
        </p>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl text-parchment">Episode Generator</h1>
            <p className="mt-1 font-ui text-sm text-parchment/45">
              Organize your podcast episodes into projects with multiple audio segments.
            </p>
          </div>
          {!selected && (
            <button
              type="button"
              onClick={() => setShowNewModal(true)}
              className="shrink-0 rounded-xl bg-sg-gold px-5 py-2.5 font-ui text-sm font-bold text-navy-deep transition hover:brightness-110"
            >
              + New Episode
            </button>
          )}
        </div>
      </header>

      {selected ? (
        <EpisodeEditor
          episode={selected}
          onBack={() => setSelectedId(null)}
          onUpdate={(updated) =>
            setEpisodes((prev) => prev.map((e) => e.id === updated.id ? updated : e))
          }
        />
      ) : (
        <>
          <CreditsCard />

          {episodes.length === 0 ? (
            <div className="flex min-h-[200px] flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-sg-gold/15 bg-navy-mid/40 p-12">
              <p className="font-display text-xl text-parchment/30">No episodes yet</p>
              <p className="font-ui text-sm text-parchment/30">
                Create your <button type="button" onClick={() => setShowNewModal(true)} className="text-sg-gold-light underline decoration-dotted">first episode</button> to get started.
              </p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2">
              {episodes.map((ep) => (
                <EpisodeCard
                  key={ep.id}
                  episode={ep}
                  onOpen={() => setSelectedId(ep.id)}
                  onDelete={() => void handleDelete(ep.id)}
                />
              ))}
            </div>
          )}
        </>
      )}

      {showNewModal && (
        <NewEpisodeModal
          onClose={() => setShowNewModal(false)}
          onCreate={(id) => { setShowNewModal(false); setSelectedId(id) }}
        />
      )}
    </div>
  )
}
