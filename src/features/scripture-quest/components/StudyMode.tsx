import { useState } from 'react'
import { getTopicById } from '../data/topics'
import type { Question } from '../types'

type Props = {
  questions: Question[]
  studiedIds: string[]
  onStudied: (question: Question) => void
}

/**
 * Study mode for missed questions: shows each question with its correct
 * answer and explanation, and lets the user mark it as studied.
 */
export function StudyMode({ questions, studiedIds, onStudied }: Props) {
  const [open, setOpen] = useState<string | null>(null)

  if (questions.length === 0) {
    return (
      <div className="rounded-2xl border border-navy-light bg-navy-light/40 p-8 text-center">
        <p className="text-4xl" aria-hidden>
          🌟
        </p>
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
        return (
          <li
            key={q.id}
            className={`rounded-2xl border p-4 transition ${
              studied ? 'border-emerald-400/50 bg-emerald-500/10' : 'border-navy-light bg-navy-light/40'
            }`}
          >
            <button
              type="button"
              onClick={() => setOpen(expanded ? null : q.id)}
              className="flex w-full items-start justify-between gap-3 text-left"
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
              <span className="mt-1 text-sg-gold-light" aria-hidden>
                {expanded ? '▲' : '▼'}
              </span>
            </button>

            {expanded && (
              <div className="mt-4 space-y-3">
                <div className="rounded-xl bg-emerald-500/15 p-3 ring-1 ring-emerald-400/40">
                  <p className="font-ui text-xs uppercase tracking-wide text-emerald-300">
                    Respuesta correcta
                  </p>
                  <p className="font-ui font-medium text-warm-white">
                    {q.correctAnswer}. {q.options[q.correctAnswer]}
                  </p>
                </div>
                <p className="font-ui text-sm text-warm-white/85">{q.explanation}</p>
                {!studied && (
                  <button
                    type="button"
                    onClick={() => onStudied(q)}
                    className="rounded-xl bg-sg-gold px-5 py-2.5 font-ui text-xs font-bold uppercase tracking-wide text-navy-deep transition hover:bg-sg-gold-light"
                  >
                    Marcar como repasada
                  </button>
                )}
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
