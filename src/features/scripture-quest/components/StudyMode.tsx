import { useState } from 'react'
import { Link } from 'react-router-dom'
import { getTopicById } from '../data/topics'
import type { Question } from '../types'

type Props = {
  questions: Question[]
  studiedIds: string[]
  onStudied: (question: Question) => void
}

/** lessonId → moduleId mapping para construir la ruta /lesson/:moduleId/:lessonId */
const LESSON_MODULE: Record<string, string> = {
  'la-expiacion-del-salvador':    'doctrina-fundamental',
  'jose-smith-la-primera-vision': 'personajes-escrituras',
  'plan-de-salvacion':            'doctrina-avanzada-carne',
  'libro-de-mormon-reliquia':     'historia-restauracion',
  'jose-smith-el-profeta':        'personajes-escrituras',
  'convenios-eternos':            'doctrina-avanzada-carne',
  'sacerdocio-autoridad-poder':   'sacerdocio',
  'fe-principio-poder':           'doctrina-fundamental',
  'bautismo':                     'doctrina-fundamental',
}

/** Extrae referencias de escritura del texto de explicación, e.g. (2 Nefi 25:23) */
function extractScriptures(text: string): string[] {
  const pattern = /\(([^)]{4,60}:\d+[^)]*)\)/g
  const found: string[] = []
  let m: RegExpExecArray | null
  while ((m = pattern.exec(text)) !== null) {
    found.push(m[1].trim())
  }
  return [...new Set(found)]
}

/** Resalta las referencias de escritura dentro del texto en dorado */
function HighlightedExplanation({ text }: { text: string }) {
  const parts = text.split(/(\([^)]{4,60}:\d+[^)]*\))/g)
  return (
    <p className="font-ui text-sm leading-relaxed text-warm-white/85">
      {parts.map((part, i) =>
        /^\(.*:\d+.*\)$/.test(part) ? (
          <span key={i} className="font-semibold text-sg-gold-bright">
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  )
}

export function StudyMode({ questions, studiedIds, onStudied }: Props) {
  const [open, setOpen] = useState<string | null>(null)

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-navy-light bg-navy-light/40 p-8 text-center">
        <p className="text-4xl" aria-hidden>🌟</p>
        <p className="mt-2 font-display text-2xl font-bold text-warm-white">
          No tienes preguntas pendientes de repaso
        </p>
        <p className="mt-1 font-ui text-sm text-warm-white/60">
          Las preguntas que falles en tus partidas aparecerán aquí.
        </p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {questions.map((q) => {
        const expanded = open === q.id
        const studied = studiedIds.includes(q.id)
        const topic = getTopicById(q.topic)
        const scriptures = extractScriptures(q.explanation)
        const lessonSlug = topic?.studyModuleId ?? null
        const moduleId = lessonSlug ? LESSON_MODULE[lessonSlug] : null
        const lessonPath = lessonSlug && moduleId ? `/lesson/${moduleId}/${lessonSlug}` : null

        return (
          <li
            key={q.id}
            className={`rounded-2xl border transition ${
              studied
                ? 'border-emerald-400/40 bg-emerald-500/8'
                : 'border-navy-light bg-navy-light/40'
            }`}
          >
            {/* Header / toggle */}
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : q.id)}
              className="flex w-full items-start justify-between gap-3 p-4 text-left"
            >
              <span>
                <span className="font-ui text-xs uppercase tracking-widest text-sg-gold-light">
                  {topic?.label ?? q.topic} · Nivel {q.level}
                  {studied && ' · Repasada ✓'}
                </span>
                <span className="mt-1 block font-display text-lg font-bold text-warm-white">
                  {q.question}
                </span>
              </span>
              <span className="mt-1 shrink-0 text-sg-gold-light" aria-hidden>
                {expanded ? '▲' : '▼'}
              </span>
            </button>

            {expanded && (
              <div className="space-y-4 border-t border-navy-light/60 px-4 pb-5 pt-4">

                {/* Respuesta correcta */}
                <div className="rounded-xl bg-emerald-500/15 p-4 ring-1 ring-emerald-400/40">
                  <p className="font-ui text-[11px] uppercase tracking-widest text-emerald-300">
                    ✅ Respuesta correcta
                  </p>
                  <p className="mt-1 font-display text-lg font-bold text-warm-white">
                    {q.options[q.correctAnswer]
                      ? `${q.correctAnswer}. ${q.options[q.correctAnswer]}`
                      : q.options[q.correctAnswer] || q.correctAnswer}
                  </p>
                </div>

                {/* Contexto doctrinal */}
                <div className="rounded-xl border border-sg-gold/20 bg-gold-dim p-4">
                  <p className="font-ui text-[11px] uppercase tracking-widest text-sg-gold-bright">
                    📖 Contexto doctrinal
                  </p>
                  <div className="mt-2">
                    <HighlightedExplanation text={q.explanation} />
                  </div>
                </div>

                {/* Escrituras destacadas */}
                {scriptures.length > 0 && (
                  <div className="space-y-2">
                    <p className="font-ui text-[11px] uppercase tracking-widest text-sg-gold-light">
                      📜 Referencias de las Escrituras
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {scriptures.map((ref) => (
                        <span
                          key={ref}
                          className="rounded-full border border-sg-gold/30 bg-navy-deep/60 px-3 py-1 font-ui text-xs font-semibold text-sg-gold-bright"
                        >
                          {ref}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enlace a Seeker Gospel */}
                {lessonPath && (
                  <Link
                    to={lessonPath}
                    className="flex items-center gap-3 rounded-xl border border-sg-gold/30 bg-sg-gold/8 px-4 py-3 transition hover:border-sg-gold/60 hover:bg-sg-gold/15"
                  >
                    <span className="text-2xl" aria-hidden>📚</span>
                    <span>
                      <span className="block font-ui text-xs font-bold uppercase tracking-wide text-sg-gold-bright">
                        Profundiza en Seeker Gospel
                      </span>
                      <span className="block font-ui text-xs text-warm-white/60">
                        Lección completa sobre {topic?.label}
                      </span>
                    </span>
                    <span className="ml-auto font-ui text-sm text-sg-gold" aria-hidden>→</span>
                  </Link>
                )}

                {/* Acción */}
                {!studied ? (
                  <button
                    type="button"
                    onClick={() => onStudied(q)}
                    className="w-full rounded-xl bg-sg-gold py-3 font-ui text-sm font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light"
                  >
                    Marcar como repasada ✓
                  </button>
                ) : (
                  <p className="text-center font-ui text-sm text-emerald-400">
                    ✓ Ya repasaste esta pregunta
                  </p>
                )}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
