/**
 * Herramienta de administración del banco de preguntas (/admin/scripture-quest).
 * Solo admins: tablero por tipo/nivel/estado, cola de borradores con
 * aprobar/rechazar, generación de borradores con IA, carga de imágenes y
 * aprobación masiva.
 */
import { useEffect, useMemo, useState } from 'react'
import { isUidInAdminList } from '@/config/admin'
import { useAuth } from '@/hooks/useAuth'
import { useToastStore } from '@/stores/toastStore'
import { QuestShell } from '../components/QuestShell'
import { ROUND_TYPE_LABELS } from '../data/badges'
import { TOPICS, getTopicById } from '../data/topics'
import {
  bulkApprove,
  createImageQuestion,
  fetchAllBankQuestions,
  saveAiDrafts,
  seedBankToFirestore,
  setQuestionStatus,
  uploadBankImage,
} from '../services/bankService'
import type { BankQuestion, QuestLevel } from '../types'
import { generateQuestions } from '../utils/generateQuestions'
import { roundAnswerText, roundPromptText } from '../utils/scoreCalculator'

const LEVELS: QuestLevel[] = [1, 2, 3, 4]

export default function AdminQuestPage() {
  const { user, authLoading } = useAuth()
  const addToast = useToastStore((s) => s.addToast)
  const isAdmin = isUidInAdminList(user?.uid)

  const [questions, setQuestions] = useState<BankQuestion[]>([])
  const [loading, setLoading] = useState(true)
  const [busy, setBusy] = useState<string | null>(null)
  const [selected, setSelected] = useState<Set<string>>(new Set())

  // Formulario de generación IA
  const [genTopic, setGenTopic] = useState(TOPICS[0].id)
  const [genLevel, setGenLevel] = useState<QuestLevel>(1)

  // Formulario de imagen
  const [imgKind, setImgKind] = useState<'image_guess' | 'mime'>('image_guess')
  const [imgFile, setImgFile] = useState<File | null>(null)
  const [imgAnswer, setImgAnswer] = useState('')
  const [imgVariants, setImgVariants] = useState('')
  const [imgHint, setImgHint] = useState('')
  const [imgCategory, setImgCategory] = useState<'personaje' | 'escena' | 'lugar' | 'simbolo'>('personaje')
  const [imgTopic, setImgTopic] = useState(TOPICS[0].id)
  const [imgLevel, setImgLevel] = useState<QuestLevel>(2)

  async function reload() {
    setLoading(true)
    try {
      setQuestions(await fetchAllBankQuestions())
    } catch {
      addToast('No se pudo cargar el banco de preguntas.', 'error')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!isAdmin) return
    // Deferred so the fetch + setState run outside the effect body
    const timeout = setTimeout(() => void reload(), 0)
    return () => clearTimeout(timeout)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdmin])

  const stats = useMemo(() => {
    const byStatus = { approved: 0, draft: 0, rejected: 0 }
    const byType: Record<string, number> = {}
    const byLevel: Record<number, number> = {}
    for (const q of questions) {
      byStatus[q.status] += 1
      byType[q.roundType] = (byType[q.roundType] ?? 0) + 1
      byLevel[q.level] = (byLevel[q.level] ?? 0) + 1
    }
    return { byStatus, byType, byLevel }
  }, [questions])

  const drafts = questions.filter((q) => q.status === 'draft')

  async function run(label: string, fn: () => Promise<void>) {
    setBusy(label)
    try {
      await fn()
      await reload()
    } catch {
      addToast(`Falló la operación: ${label}.`, 'error')
    } finally {
      setBusy(null)
    }
  }

  if (authLoading) {
    return (
      <QuestShell>
        <p className="py-16 text-center font-ui text-warm-white/60">Cargando…</p>
      </QuestShell>
    )
  }
  if (!isAdmin) {
    return (
      <QuestShell>
        <p className="py-16 text-center font-ui text-warm-white/70">
          Acceso restringido al equipo de administración.
        </p>
      </QuestShell>
    )
  }

  return (
    <QuestShell>
      <div className="space-y-8">
        <header className="flex flex-wrap items-center justify-between gap-3">
          <h2 className="font-display text-3xl font-bold text-warm-white">
            Banco de preguntas
          </h2>
          <a
            href="/admin/scripture-quest/contenido"
            className="rounded-xl border border-sg-gold px-4 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-ink"
          >
            🖼️🎵 Imágenes y música (Suno)
          </a>
          <button
            type="button"
            disabled={busy !== null}
            onClick={() =>
              void run('sembrar', async () => {
                const n = await seedBankToFirestore()
                addToast(`Banco local sembrado: ${n} preguntas aprobadas.`, 'success')
              })
            }
            className="rounded-xl border border-sg-gold px-4 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-ink disabled:opacity-40"
          >
            {busy === 'sembrar' ? 'Sembrando…' : 'Sembrar banco local en Firestore'}
          </button>
        </header>

        {/* Tablero */}
        <section className="grid gap-3 sm:grid-cols-3">
          <div className="sq-card p-4">
            <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">Por estado</p>
            <p className="mt-1 font-ui text-sm text-warm-white">
              ✅ {stats.byStatus.approved} aprobadas · 📝 {stats.byStatus.draft} borradores · 🚫{' '}
              {stats.byStatus.rejected} rechazadas
            </p>
          </div>
          <div className="sq-card p-4">
            <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">Por tipo</p>
            <p className="mt-1 font-ui text-sm text-warm-white">
              {Object.entries(stats.byType)
                .map(([t, n]) => `${ROUND_TYPE_LABELS[t] ?? t}: ${n}`)
                .join(' · ') || 'Sin preguntas aún'}
            </p>
          </div>
          <div className="sq-card p-4">
            <p className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">Por nivel</p>
            <p className="mt-1 font-ui text-sm text-warm-white">
              {LEVELS.map((l) => `N${l}: ${stats.byLevel[l] ?? 0}`).join(' · ')}
            </p>
          </div>
        </section>

        {/* Generar borradores con IA (solo admin — nunca durante el juego) */}
        <section className="sq-card space-y-3 p-5">
          <h3 className="font-display text-xl font-bold text-warm-white">
            Generar borradores con IA
          </h3>
          <p className="font-ui text-xs text-warm-white/60">
            Las preguntas generadas entran como borradores; solo aparecen en el juego
            después de aprobarlas.
          </p>
          <div className="flex flex-wrap gap-2">
            <select
              value={genTopic}
              onChange={(e) => setGenTopic(e.target.value)}
              className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white"
            >
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
            <select
              value={genLevel}
              onChange={(e) => setGenLevel(Number(e.target.value) as QuestLevel)}
              className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white"
            >
              {LEVELS.map((l) => (
                <option key={l} value={l}>Nivel {l}</option>
              ))}
            </select>
            <button
              type="button"
              disabled={busy !== null}
              onClick={() =>
                void run('generar', async () => {
                  const topic = getTopicById(genTopic)
                  const qs = await generateQuestions(topic?.label ?? genTopic, genTopic, genLevel)
                  const n = await saveAiDrafts(qs)
                  addToast(`${n} borradores generados para revisión.`, 'success')
                })
              }
              className="rounded-xl bg-sg-gold px-4 py-2 font-ui text-xs font-bold uppercase tracking-wide text-ink hover:bg-sg-gold-light disabled:opacity-40"
            >
              {busy === 'generar' ? 'Generando…' : 'Generar más'}
            </button>
          </div>
        </section>

        {/* Subir imagen para image_guess / mime */}
        <section className="sq-card space-y-3 p-5">
          <h3 className="font-display text-xl font-bold text-warm-white">
            Nueva pregunta con imagen
          </h3>
          <div className="grid gap-2 sm:grid-cols-2">
            <select value={imgKind} onChange={(e) => setImgKind(e.target.value as 'image_guess' | 'mime')} className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white">
              <option value="image_guess">Adivina la imagen</option>
              <option value="mime">Mímica (equipos)</option>
            </select>
            <select value={imgCategory} onChange={(e) => setImgCategory(e.target.value as typeof imgCategory)} className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white">
              <option value="personaje">Personaje</option>
              <option value="escena">Escena</option>
              <option value="lugar">Lugar</option>
              <option value="simbolo">Símbolo</option>
            </select>
            <select value={imgTopic} onChange={(e) => setImgTopic(e.target.value)} className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white">
              {TOPICS.map((t) => (
                <option key={t.id} value={t.id}>{t.label}</option>
              ))}
            </select>
            <select value={imgLevel} onChange={(e) => setImgLevel(Number(e.target.value) as QuestLevel)} className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white">
              {LEVELS.map((l) => (
                <option key={l} value={l}>Nivel {l}</option>
              ))}
            </select>
            <input type="file" accept="image/*" onChange={(e) => setImgFile(e.target.files?.[0] ?? null)} className="font-ui text-sm text-warm-white file:mr-3 file:rounded-lg file:border-0 file:bg-sg-gold file:px-3 file:py-1.5 file:font-bold file:text-ink" />
            <input type="text" value={imgAnswer} onChange={(e) => setImgAnswer(e.target.value)} placeholder="Respuesta correcta" className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white placeholder:text-warm-white/40" />
            <input type="text" value={imgVariants} onChange={(e) => setImgVariants(e.target.value)} placeholder="Variantes aceptadas (coma)" className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white placeholder:text-warm-white/40" />
            <input type="text" value={imgHint} onChange={(e) => setImgHint(e.target.value)} placeholder={imgKind === 'image_guess' ? 'Pista (a los 15 s)' : 'Instrucciones para el actor'} className="rounded-xl border border-navy-light bg-navy-light/50 px-3 py-2 font-ui text-sm text-warm-white placeholder:text-warm-white/40" />
          </div>
          <button
            type="button"
            disabled={busy !== null || !imgFile || imgAnswer.trim().length === 0}
            onClick={() =>
              void run('imagen', async () => {
                if (!imgFile) return
                const url = await uploadBankImage(imgFile, imgKind)
                await createImageQuestion({
                  roundType: imgKind,
                  level: imgLevel,
                  topic: imgTopic,
                  imageUrl: url,
                  answer: imgAnswer.trim(),
                  acceptedVariants: imgVariants.split(',').map((s) => s.trim()).filter(Boolean),
                  imageCategory: imgCategory,
                  hintOrInstructions: imgHint.trim(),
                })
                setImgFile(null)
                setImgAnswer('')
                setImgVariants('')
                setImgHint('')
                addToast('Pregunta con imagen creada como borrador.', 'success')
              })
            }
            className="rounded-xl bg-sg-gold px-4 py-2 font-ui text-xs font-bold uppercase tracking-wide text-ink hover:bg-sg-gold-light disabled:opacity-40"
          >
            {busy === 'imagen' ? 'Subiendo…' : 'Crear borrador con imagen'}
          </button>
        </section>

        {/* Cola de revisión */}
        <section className="space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <h3 className="font-display text-xl font-bold text-warm-white">
              Borradores por revisar ({drafts.length})
            </h3>
            {selected.size > 0 && (
              <button
                type="button"
                disabled={busy !== null}
                onClick={() =>
                  void run('aprobar', async () => {
                    await bulkApprove([...selected])
                    setSelected(new Set())
                    addToast(`${selected.size} preguntas aprobadas.`, 'success')
                  })
                }
                className="rounded-xl bg-emerald-600 px-4 py-2 font-ui text-xs font-bold uppercase tracking-wide text-white hover:bg-emerald-500 disabled:opacity-40"
              >
                Aprobar seleccionadas ({selected.size})
              </button>
            )}
          </div>

          {loading && <p className="font-ui text-sm text-warm-white/60">Cargando banco…</p>}
          {!loading && drafts.length === 0 && (
            <p className="font-ui text-sm text-warm-white/60">No hay borradores pendientes. 🎉</p>
          )}

          <ul className="space-y-2">
            {drafts.map((q) => {
              return (
                <li key={q.id} className="sq-card flex flex-wrap items-start justify-between gap-3 p-4">
                  <label className="flex flex-1 items-start gap-3">
                    <input
                      type="checkbox"
                      checked={selected.has(q.id)}
                      onChange={(e) => {
                        setSelected((prev) => {
                          const next = new Set(prev)
                          if (e.target.checked) next.add(q.id)
                          else next.delete(q.id)
                          return next
                        })
                      }}
                      className="mt-1 h-4 w-4 accent-sg-gold"
                    />
                    <span>
                      <span className="block font-ui text-xs uppercase tracking-widest text-sg-gold-light">
                        {ROUND_TYPE_LABELS[q.roundType]} · {getTopicById(q.topic)?.label ?? q.topic} ·
                        N{q.level} · {q.source === 'ai' ? '🤖 IA' : '✍️ Manual'}
                      </span>
                      <span className="mt-1 block font-display text-base font-bold text-warm-white">
                        {roundPromptText(q)}
                      </span>
                      <span className="block font-ui text-xs text-emerald-300">
                        Respuesta: {roundAnswerText(q)}
                      </span>
                    </span>
                  </label>
                  <span className="flex gap-2">
                    <button
                      type="button"
                      disabled={busy !== null}
                      onClick={() => void run('estado', () => setQuestionStatus(q.id, 'approved'))}
                      className="rounded-lg bg-emerald-600 px-3 py-1.5 font-ui text-xs font-bold uppercase text-white hover:bg-emerald-500"
                    >
                      Aprobar
                    </button>
                    <button
                      type="button"
                      disabled={busy !== null}
                      onClick={() => void run('estado', () => setQuestionStatus(q.id, 'rejected'))}
                      className="rounded-lg bg-rose-600 px-3 py-1.5 font-ui text-xs font-bold uppercase text-white hover:bg-rose-500"
                    >
                      Rechazar
                    </button>
                  </span>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </QuestShell>
  )
}
