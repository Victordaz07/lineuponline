import { useCallback, useMemo, useState } from 'react'
import type { QuizBlock as QuizBlockType, QuizQuestion } from '@/types/doctrine'

// eslint-disable-next-line react-refresh/only-export-components
export function quizBlockListKey(block: QuizBlockType, lessonId: string): string {
  return `${lessonId}-${
    'quizType' in block ? (block.id ?? `q-${hashPrompt(block.question)}`) : block.id
  }`
}

function hashPrompt(s: string): string {
  let h = 0
  for (let i = 0; i < s.length; i++) h = (Math.imul(31, h) + s.charCodeAt(i)) | 0
  return (h >>> 0).toString(16)
}

/** Unifica formato canónico y abreviado (`quizType` + string) para el render interactivo. */
function normalizeQuiz(block: QuizBlockType, lessonId: string): { id: string; question: QuizQuestion } {
  if ('quizType' in block) {
    if (block.quizType === 'true_false') {
      return {
        id: block.id ?? `${lessonId}-tf-${hashPrompt(block.question)}`,
        question: {
          kind: 'true_false',
          statement: block.question,
          correctAnswer: block.answer,
          explanation: block.explanation,
        },
      }
    }
    return {
      id: block.id ?? `${lessonId}-fb-${hashPrompt(block.question)}`,
      question: {
        kind: 'fill_blank',
        prompt: block.question,
        options: [block.answer],
        correctIndex: 0,
        explanation: block.explanation,
      },
    }
  }
  return { id: block.id, question: block.question }
}

export type QuizBlockComponentProps = {
  block: QuizBlockType
  lessonId: string
  onComplete?: (quizId: string) => void
}

function arraysEqualOrder(a: readonly number[], b: readonly number[]): boolean {
  if (a.length !== b.length) {
    return false
  }
  return a.every((v, i) => v === b[i])
}

/** Fisher-Yates shuffle that guarantees the result is NOT the identity order
 *  AND NOT the correct answer order — so the player actually has to work. */
function shuffleDeranged(arr: number[], correctOrder?: readonly number[]): number[] {
  if (arr.length <= 1) return arr
  let result: number[]
  let attempts = 0
  do {
    result = [...arr]
    for (let i = result.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1))
      ;[result[i], result[j]] = [result[j], result[i]]
    }
    attempts++
  } while (
    attempts < 20 &&
    (arraysEqualOrder(result, arr) || (correctOrder != null && arraysEqualOrder(result, correctOrder)))
  )
  return result
}

/**
 * Quiz interactivo con feedback inmediato y micro-celebración visual.
 */
export function QuizBlockComponent({ block, lessonId, onComplete }: QuizBlockComponentProps) {
  const { id: quizId, question: quizQuestion } = useMemo(() => normalizeQuiz(block, lessonId), [block, lessonId])
  const quizKey = useMemo(() => `${lessonId}:${quizId}`, [lessonId, quizId])
  const [done, setDone] = useState(false)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [sortOrder, setSortOrder] = useState<number[]>(() => {
    if (quizQuestion.kind !== 'sort_items') return []
    return shuffleDeranged(quizQuestion.items.map((_, i) => i), quizQuestion.correctOrder)
  })

  const q = quizQuestion

  const handleCorrect = useCallback(() => {
    setFeedback('correct')
    setDone(true)
    onComplete?.(quizKey)
  }, [onComplete, quizKey])

  const handleWrong = useCallback(() => {
    setFeedback('wrong')
  }, [])

  const moveSort = useCallback((idx: number, dir: -1 | 1) => {
    if (q.kind !== 'sort_items') {
      return
    }
    const next = idx + dir
    if (next < 0 || next >= sortOrder.length) {
      return
    }
    setSortOrder((prev) => {
      const copy = [...prev]
      const tmp = copy[idx]
      copy[idx] = copy[next]
      copy[next] = tmp
      return copy
    })
  }, [q, sortOrder.length])

  const verifySort = useCallback(() => {
    if (q.kind === 'sort_items' && arraysEqualOrder(sortOrder, q.correctOrder)) {
      handleCorrect()
    } else {
      handleWrong()
    }
  }, [handleCorrect, handleWrong, q, sortOrder])

  if (q.kind === 'true_false') {
    return (
      <div
        className={`rounded-2xl border-2 p-5 transition-all ${
          feedback === 'correct'
            ? 'border-emerald-500 bg-emerald-950/30'
            : feedback === 'wrong'
              ? 'border-amber-400 bg-amber-950/20'
              : 'border-sg-gold/20 bg-navy-mid'
        }`}
        role="region"
        aria-label="Pregunta de repaso"
      >
        <p className="font-ui text-xs font-semibold uppercase tracking-wider text-parchment/55">Comprueba</p>
        <p className="mt-2 text-reading text-base font-medium text-parchment/85">{q.statement}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={done}
            onClick={() => (q.correctAnswer ? handleCorrect() : handleWrong())}
            className="rounded-full border border-sg-gold/30 bg-navy-deep px-4 py-2 font-ui text-sm font-semibold text-parchment/80 hover:bg-sg-gold/10 disabled:opacity-50"
          >
            Verdadero
          </button>
          <button
            type="button"
            disabled={done}
            onClick={() => (!q.correctAnswer ? handleCorrect() : handleWrong())}
            className="rounded-full border border-sg-gold/30 bg-navy-deep px-4 py-2 font-ui text-sm font-semibold text-parchment/80 hover:bg-sg-gold/10 disabled:opacity-50"
          >
            Falso
          </button>
        </div>
        {feedback === 'correct' ? (
          <p className="mt-4 animate-pulse font-ui text-sm font-semibold text-emerald-400">¡Correcto! Buen trabajo.</p>
        ) : null}
        {feedback === 'wrong' && !done ? (
          <p className="mt-4 font-ui text-sm text-amber-300">No es correcto. Intenta de nuevo.</p>
        ) : null}
        {done && q.explanation ? <p className="mt-3 text-sm text-parchment/55">{q.explanation}</p> : null}
      </div>
    )
  }

  if (q.kind === 'fill_blank') {
    return (
      <div
        className={`rounded-2xl border-2 p-5 transition-all ${
          feedback === 'correct'
            ? 'border-emerald-500 bg-emerald-950/30'
            : feedback === 'wrong'
              ? 'border-amber-400 bg-amber-950/20'
              : 'border-sg-gold/20 bg-navy-mid'
        }`}
        role="region"
        aria-label="Completa la idea"
      >
        <p className="font-ui text-xs font-semibold uppercase tracking-wider text-parchment/55">Elige la opción</p>
        <p className="mt-2 text-reading text-base font-medium text-parchment/85">{q.prompt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {q.options.map((opt, index) => (
            <button
              key={index}
              type="button"
              disabled={done}
              onClick={() => (index === q.correctIndex ? handleCorrect() : handleWrong())}
              className="rounded-xl border border-sg-gold/30 bg-sg-gold/10 px-3 py-2 font-ui text-sm font-semibold text-parchment/80 hover:bg-sg-gold/20 disabled:opacity-50"
            >
              {opt}
            </button>
          ))}
        </div>
        {feedback === 'correct' ? (
          <p className="mt-4 animate-pulse font-ui text-sm font-semibold text-emerald-400">¡Excelente!</p>
        ) : null}
        {feedback === 'wrong' && !done ? (
          <p className="mt-4 font-ui text-sm text-amber-300">Prueba otra opción.</p>
        ) : null}
        {done && q.explanation ? <p className="mt-3 text-sm text-parchment/55">{q.explanation}</p> : null}
      </div>
    )
  }

  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all ${
        feedback === 'correct'
          ? 'border-emerald-500 bg-emerald-950/30'
          : feedback === 'wrong'
            ? 'border-amber-400 bg-amber-950/20'
            : 'border-sg-gold/20 bg-navy-mid'
      }`}
      role="region"
      aria-label="Ordena los conceptos"
    >
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-parchment/55">Ordena</p>
      <p className="mt-2 text-reading text-sm text-parchment/55">Usa los botones para poner cada idea en el orden correcto.</p>
      <ol className="mt-4 space-y-2">
        {sortOrder.map((idxPos, pos) => (
          <li
            key={`${idxPos}-${pos}`}
            className="flex items-center gap-2 rounded-lg border border-sg-gold/15 bg-navy-deep px-3 py-2"
          >
            <span className="flex-1 text-reading text-sm text-parchment/80">{q.items[idxPos]}</span>
            <button
              type="button"
              disabled={done || pos === 0}
              onClick={() => moveSort(pos, -1)}
              className="rounded border border-sg-gold/20 px-2 py-1 font-ui text-xs disabled:opacity-40"
              aria-label="Subir"
            >
              ↑
            </button>
            <button
              type="button"
              disabled={done || pos === sortOrder.length - 1}
              onClick={() => moveSort(pos, 1)}
              className="rounded border border-sg-gold/20 px-2 py-1 font-ui text-xs disabled:opacity-40"
              aria-label="Bajar"
            >
              ↓
            </button>
          </li>
        ))}
      </ol>
      <button
        type="button"
        disabled={done}
        onClick={() => verifySort()}
        className="mt-4 rounded-full bg-sg-gold px-5 py-2 font-ui text-sm font-semibold text-ink hover:opacity-90 disabled:opacity-50"
      >
        Comprobar orden
      </button>
      {feedback === 'correct' ? (
        <p className="mt-4 animate-pulse font-ui text-sm font-semibold text-emerald-400">¡Orden perfecto!</p>
      ) : null}
      {feedback === 'wrong' && !done ? (
        <p className="mt-4 font-ui text-sm text-amber-300">Aún no coincide. Ajusta y vuelve a intentar.</p>
      ) : null}
      {done && q.explanation ? <p className="mt-3 text-sm text-parchment/55">{q.explanation}</p> : null}
    </div>
  )
}
