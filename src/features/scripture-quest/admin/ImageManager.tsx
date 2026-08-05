import { useState, useEffect, useRef } from 'react'
import type { SQQuestion, ImageGuessContent, MimeContent, ImageCategory, QuestionLevel } from '../types'
import {
  getImageQuestions,
  setQuestionImage,
  setQuestionStatus,
  seedImageQuestions,
  createImageQuestion,
} from '../services/sqQuestions.service'
import { uploadSQImage } from '../services/sqStorage.service'
import { IMAGE_QUESTION_SEEDS } from '../data/imageQuestionSeeds'

const CATEGORY_LABELS: Record<ImageCategory, string> = {
  personaje: '👤 Personaje',
  escena: '🎬 Escena',
  lugar: '📍 Lugar',
  simbolo: '🔮 Símbolo',
}

const LEVEL_COLORS: Record<QuestionLevel, string> = {
  1: 'bg-emerald-500/20 text-emerald-300',
  2: 'bg-blue-500/20 text-blue-300',
  3: 'bg-amber-500/20 text-amber-300',
  4: 'bg-red-500/20 text-red-300',
}

// ─── New question form ────────────────────────────────────────────────────────
function NewQuestionForm({ onCreated }: { onCreated: () => void }) {
  const [open, setOpen] = useState(false)
  const [saving, setSaving] = useState(false)
  const [form, setForm] = useState({
    answer: '',
    variants: '',
    hint: '',
    actorInstructions: '',
    category: 'personaje' as ImageCategory,
    level: 1 as QuestionLevel,
    roundType: 'image_guess' as 'image_guess' | 'mime',
    imagePrompt: '',
  })

  function set<K extends keyof typeof form>(k: K, v: (typeof form)[K]) {
    setForm((prev) => ({ ...prev, [k]: v }))
  }

  async function handleSave() {
    if (!form.answer.trim()) return
    setSaving(true)
    try {
      await createImageQuestion({
        answer: form.answer.trim(),
        acceptedVariants: form.variants
          .split(',')
          .map((s) => s.trim())
          .filter(Boolean),
        hint: form.hint.trim(),
        category: form.category,
        level: form.level,
        roundType: form.roundType,
        imagePrompt: form.imagePrompt.trim(),
        actorInstructions: form.actorInstructions.trim(),
      })
      setOpen(false)
      setForm({
        answer: '', variants: '', hint: '', actorInstructions: '',
        category: 'personaje', level: 1, roundType: 'image_guess', imagePrompt: '',
      })
      onCreated()
    } catch (e) {
      console.error(e)
      alert('Error al crear pregunta')
    } finally {
      setSaving(false)
    }
  }

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="w-full rounded-xl border border-dashed border-sg-gold/30 py-3 font-ui text-sm font-semibold text-sg-gold/70 transition hover:border-sg-gold/60 hover:bg-sg-gold/5 hover:text-sg-gold"
      >
        + Nueva pregunta con imagen
      </button>
    )
  }

  return (
    <div className="rounded-2xl border border-sg-gold/20 bg-navy-mid p-5 space-y-4">
      <p className="font-ui text-sm font-semibold text-parchment/80">Nueva pregunta</p>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Tipo</label>
          <select
            value={form.roundType}
            onChange={(e) => set('roundType', e.target.value as typeof form.roundType)}
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20"
          >
            <option value="image_guess">Adivina la imagen</option>
            <option value="mime">Mímica</option>
          </select>
        </div>
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Nivel</label>
          <select
            value={form.level}
            onChange={(e) => set('level', Number(e.target.value) as QuestionLevel)}
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20"
          >
            {([1, 2, 3, 4] as QuestionLevel[]).map((l) => (
              <option key={l} value={l}>Nivel {l}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Categoría</label>
          <select
            value={form.category}
            onChange={(e) => set('category', e.target.value as ImageCategory)}
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20"
          >
            {(Object.keys(CATEGORY_LABELS) as ImageCategory[]).map((c) => (
              <option key={c} value={c}>{CATEGORY_LABELS[c]}</option>
            ))}
          </select>
        </div>
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Respuesta</label>
          <input
            value={form.answer}
            onChange={(e) => set('answer', e.target.value)}
            placeholder="ej. Capitán Moroni"
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
          />
        </div>
      </div>

      <div className="space-y-1">
        <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">
          Variantes aceptadas (separadas por coma)
        </label>
        <input
          value={form.variants}
          onChange={(e) => set('variants', e.target.value)}
          placeholder="capitan moroni, moroni"
          className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
        />
      </div>

      {form.roundType === 'image_guess' && (
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Pista (aparece a los 15s)</label>
          <input
            value={form.hint}
            onChange={(e) => set('hint', e.target.value)}
            placeholder="ej. Levantó el estandarte de la libertad"
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
          />
        </div>
      )}

      {form.roundType === 'mime' && (
        <div className="space-y-1">
          <label className="font-ui text-[11px] uppercase tracking-wider text-parchment/50">Instrucciones para el actor</label>
          <input
            value={form.actorInstructions}
            onChange={(e) => set('actorInstructions', e.target.value)}
            placeholder="ej. Gira una honda imaginaria y lánzala"
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment placeholder:text-parchment/30 outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
          />
        </div>
      )}

      <div className="flex justify-end gap-2">
        <button
          onClick={() => setOpen(false)}
          className="rounded-xl px-4 py-2 font-ui text-xs text-parchment/50 hover:text-parchment"
        >
          Cancelar
        </button>
        <button
          onClick={handleSave}
          disabled={saving || !form.answer.trim()}
          className="rounded-xl bg-sg-gold px-5 py-2 font-ui text-xs font-semibold text-ink transition hover:bg-sg-gold-light disabled:opacity-40"
        >
          {saving ? 'Guardando…' : 'Crear pregunta'}
        </button>
      </div>
    </div>
  )
}

// ─── Question card ────────────────────────────────────────────────────────────
function QuestionCard({
  question,
  onUpdated,
}: {
  question: SQQuestion
  onUpdated: () => void
}) {
  const content = question.content as Partial<ImageGuessContent & MimeContent>
  const hasImage = Boolean(content.imageUrl)
  const [uploading, setUploading] = useState(false)
  const [toggling, setToggling] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  async function handleFile(file: File | null) {
    if (!file) return
    setUploading(true)
    try {
      const url = await uploadSQImage(file, question.id)
      await setQuestionImage(question.id, url)
      onUpdated()
    } catch (e) {
      console.error(e)
      alert('Error subiendo imagen')
    } finally {
      setUploading(false)
    }
  }

  async function toggleStatus() {
    setToggling(true)
    try {
      const next = question.status === 'approved' ? 'draft' : 'approved'
      await setQuestionStatus(question.id, next)
      onUpdated()
    } finally {
      setToggling(false)
    }
  }

  const isApproved = question.status === 'approved'

  return (
    <div
      className={`overflow-hidden rounded-2xl border transition ${
        isApproved ? 'border-emerald-500/30' : 'border-sg-gold/15'
      } bg-navy-mid shadow-sm`}
    >
      {/* Image area */}
      <div
        className="relative flex h-40 cursor-pointer items-center justify-center bg-navy-deep/60"
        onClick={() => !uploading && inputRef.current?.click()}
        title="Clic para subir imagen"
      >
        {hasImage ? (
          <img
            src={content.imageUrl}
            alt={content.answer}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex flex-col items-center gap-2 text-parchment/20">
            <span className="text-4xl">🖼️</span>
            <span className="font-ui text-[11px]">Sin imagen — clic para subir</span>
          </div>
        )}
        {uploading && (
          <div className="absolute inset-0 flex items-center justify-center bg-navy-deep/70">
            <span className="font-ui text-xs text-sg-gold animate-pulse">Subiendo…</span>
          </div>
        )}
        {hasImage && !uploading && (
          <div className="absolute bottom-2 right-2 rounded-lg bg-navy-deep/70 px-2 py-1 font-ui text-[10px] text-sg-gold-light backdrop-blur-sm">
            Cambiar
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*,.jpg,.jpeg,.png,.webp"
          className="hidden"
          onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
        />
      </div>

      {/* Info */}
      <div className="px-4 py-3 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div>
            <p className="font-ui text-sm font-semibold text-parchment/90">{content.answer}</p>
            {content.hint && (
              <p className="font-ui text-[11px] text-parchment/45 mt-0.5">💡 {content.hint}</p>
            )}
            {content.actorInstructions && (
              <p className="font-ui text-[11px] text-parchment/45 mt-0.5">🎭 {content.actorInstructions}</p>
            )}
          </div>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold ${LEVEL_COLORS[question.level as QuestionLevel]}`}
          >
            N{question.level}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
            {CATEGORY_LABELS[content.category as ImageCategory] ?? content.category}
          </span>
          <span className="rounded-full border border-sg-gold/20 px-2 py-0.5 font-ui text-[10px] text-sg-gold/70">
            {question.roundType === 'mime' ? '🎭 Mímica' : '🖼️ Adivina'}
          </span>
        </div>

        {content.acceptedVariants && content.acceptedVariants.length > 0 && (
          <p className="font-ui text-[10px] text-parchment/35">
            Variantes: {(content.acceptedVariants as string[]).join(' · ')}
          </p>
        )}

        {/* Approve toggle */}
        <button
          onClick={toggleStatus}
          disabled={toggling || !hasImage}
          className={`w-full rounded-xl py-1.5 font-ui text-xs font-semibold transition ${
            isApproved
              ? 'bg-emerald-500/20 text-emerald-300 hover:bg-emerald-500/30'
              : 'bg-sg-gold/10 text-sg-gold/70 hover:bg-sg-gold/20 hover:text-sg-gold disabled:opacity-30'
          }`}
          title={!hasImage ? 'Sube una imagen primero' : undefined}
        >
          {toggling ? '…' : isApproved ? '✓ Aprobada' : 'Aprobar para el juego'}
        </button>
      </div>
    </div>
  )
}

// ─── Filter bar ───────────────────────────────────────────────────────────────
type Filter = { type: 'all' | 'image_guess' | 'mime'; status: 'all' | 'draft' | 'approved' }

// ─── ImageManager ──────────────────────────────────────────────────────────────
export function ImageManager() {
  const [questions, setQuestions] = useState<SQQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [seeding, setSeeding] = useState(false)
  const [filter, setFilter] = useState<Filter>({ type: 'all', status: 'all' })

  async function load() {
    setLoading(true)
    try {
      const qs = await getImageQuestions()
      setQuestions(qs)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    // Diferido para que el setState corra fuera del cuerpo del efecto
    const t = setTimeout(() => void load(), 0)
    return () => clearTimeout(t)
     
  }, [])

  async function handleSeed() {
    if (!confirm('Esto crea las 36 preguntas predefinidas como borradores. ¿Continuar?')) return
    setSeeding(true)
    try {
      const count = await seedImageQuestions(IMAGE_QUESTION_SEEDS)
      alert(`✓ ${count} preguntas creadas`)
      await load()
    } catch (e) {
      console.error(e)
      alert('Error al inicializar')
    } finally {
      setSeeding(false)
    }
  }

  const filtered = questions.filter((q) => {
    if (filter.type !== 'all' && q.roundType !== filter.type) return false
    if (filter.status !== 'all' && q.status !== filter.status) return false
    return true
  })

  const stats = {
    total: questions.length,
    withImage: questions.filter((q) => Boolean((q.content as Record<string, unknown>).imageUrl)).length,
    approved: questions.filter((q) => q.status === 'approved').length,
  }

  return (
    <div className="space-y-4">
      {/* Stats */}
      <div className="grid grid-cols-3 gap-3">
        {[
          { value: stats.total, label: 'Total' },
          { value: stats.withImage, label: 'Con imagen' },
          { value: stats.approved, label: 'Aprobadas' },
        ].map(({ value, label }) => (
          <div key={label} className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 text-center">
            <p className="font-display text-3xl text-sg-gold-light">{value}</p>
            <p className="mt-1 font-ui text-xs text-parchment/55">{label}</p>
          </div>
        ))}
      </div>

      {/* Actions */}
      <div className="flex flex-wrap items-center gap-3">
        {questions.length === 0 && !loading && (
          <button
            onClick={handleSeed}
            disabled={seeding}
            className="rounded-xl bg-sg-gold px-5 py-2.5 font-ui text-sm font-semibold text-ink transition hover:bg-sg-gold-light disabled:opacity-40"
          >
            {seeding ? 'Inicializando…' : '📋 Inicializar banco (36 preguntas)'}
          </button>
        )}
        <NewQuestionForm onCreated={load} />
      </div>

      {/* Filters */}
      {questions.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {(['all', 'image_guess', 'mime'] as const).map((t) => (
            <button
              key={t}
              onClick={() => setFilter((f) => ({ ...f, type: t }))}
              className={`rounded-full px-3 py-1 font-ui text-xs transition ${
                filter.type === t
                  ? 'bg-sg-gold text-ink font-semibold'
                  : 'border border-sg-gold/20 text-parchment/50 hover:text-parchment'
              }`}
            >
              {t === 'all' ? 'Todos' : t === 'image_guess' ? '🖼️ Adivina' : '🎭 Mímica'}
            </button>
          ))}
          <span className="mx-1 text-parchment/20">|</span>
          {(['all', 'draft', 'approved'] as const).map((s) => (
            <button
              key={s}
              onClick={() => setFilter((f) => ({ ...f, status: s }))}
              className={`rounded-full px-3 py-1 font-ui text-xs transition ${
                filter.status === s
                  ? 'bg-sg-gold text-ink font-semibold'
                  : 'border border-sg-gold/20 text-parchment/50 hover:text-parchment'
              }`}
            >
              {s === 'all' ? 'Todos' : s === 'draft' ? 'Borrador' : '✓ Aprobada'}
            </button>
          ))}
        </div>
      )}

      {/* Grid */}
      {loading ? (
        <p className="py-10 text-center font-ui text-sm text-parchment/40">Cargando…</p>
      ) : filtered.length === 0 ? (
        <p className="py-10 text-center font-ui text-sm text-parchment/40">
          {questions.length === 0 ? 'Sin preguntas — inicializa el banco arriba' : 'Sin resultados para este filtro'}
        </p>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((q) => (
            <QuestionCard key={q.id} question={q} onUpdated={load} />
          ))}
        </div>
      )}
    </div>
  )
}
