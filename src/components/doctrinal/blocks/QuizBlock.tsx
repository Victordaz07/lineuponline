import { useCallback, useMemo, useState } from 'react'
import type { QuizBlock as QuizBlockType } from '@/types/doctrine'

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

/**
 * Quiz interactivo con feedback inmediato y micro-celebración visual.
 */
export function QuizBlockComponent({ block, lessonId, onComplete }: QuizBlockComponentProps) {
  const quizKey = useMemo(() => `${lessonId}:${block.id}`, [lessonId, block.id])
  const [done, setDone] = useState(false)
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null)
  const [sortOrder, setSortOrder] = useState<number[]>(() =>
    block.question.kind === 'sort_items' ? block.question.items.map((_, i) => i) : [],
  )

  const q = block.question

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
            ? 'border-emerald-500 bg-emerald-50'
            : feedback === 'wrong'
              ? 'border-amber-400 bg-amber-50'
              : 'border-blue-accent/20 bg-white'
        }`}
        role="region"
        aria-label="Pregunta de repaso"
      >
        <p className="font-ui text-xs font-semibold uppercase tracking-wider text-text-muted">Comprueba</p>
        <p className="mt-2 text-reading text-base font-medium text-text-main">{q.statement}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            disabled={done}
            onClick={() => (q.correctAnswer ? handleCorrect() : handleWrong())}
            className="rounded-full border border-blue-accent/30 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent hover:bg-gold-dim disabled:opacity-50"
          >
            Verdadero
          </button>
          <button
            type="button"
            disabled={done}
            onClick={() => (!q.correctAnswer ? handleCorrect() : handleWrong())}
            className="rounded-full border border-blue-accent/30 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent hover:bg-gold-dim disabled:opacity-50"
          >
            Falso
          </button>
        </div>
        {feedback === 'correct' ? (
          <p className="mt-4 animate-pulse font-ui text-sm font-semibold text-emerald-700">¡Correcto! Buen trabajo.</p>
        ) : null}
        {feedback === 'wrong' && !done ? (
          <p className="mt-4 font-ui text-sm text-amber-900">No es correcto. Intenta de nuevo.</p>
        ) : null}
        {done && q.explanation ? <p className="mt-3 text-sm text-text-muted">{q.explanation}</p> : null}
      </div>
    )
  }

  if (q.kind === 'fill_blank') {
    return (
      <div
        className={`rounded-2xl border-2 p-5 transition-all ${
          feedback === 'correct'
            ? 'border-emerald-500 bg-emerald-50'
            : feedback === 'wrong'
              ? 'border-amber-400 bg-amber-50'
              : 'border-blue-accent/20 bg-white'
        }`}
        role="region"
        aria-label="Completa la idea"
      >
        <p className="font-ui text-xs font-semibold uppercase tracking-wider text-text-muted">Elige la opción</p>
        <p className="mt-2 text-reading text-base font-medium text-text-main">{q.prompt}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {q.options.map((opt, index) => (
            <button
              key={index}
              type="button"
              disabled={done}
              onClick={() => (index === q.correctIndex ? handleCorrect() : handleWrong())}
              className="rounded-xl border border-gold-main/40 bg-gold-dim/50 px-3 py-2 font-ui text-sm font-semibold text-blue-accent hover:bg-gold-dim disabled:opacity-50"
            >
              {opt}
            </button>
          ))}
        </div>
        {feedback === 'correct' ? (
          <p className="mt-4 animate-pulse font-ui text-sm font-semibold text-emerald-700">¡Excelente!</p>
        ) : null}
        {feedback === 'wrong' && !done ? (
          <p className="mt-4 font-ui text-sm text-amber-900">Prueba otra opción.</p>
        ) : null}
        {done && q.explanation ? <p className="mt-3 text-sm text-text-muted">{q.explanation}</p> : null}
      </div>
    )
  }

  return (
    <div
      className={`rounded-2xl border-2 p-5 transition-all ${
        feedback === 'correct'
          ? 'border-emerald-500 bg-emerald-50'
          : feedback === 'wrong'
            ? 'border-amber-400 bg-amber-50'
            : 'border-blue-accent/20 bg-white'
      }`}
      role="region"
      aria-label="Ordena los conceptos"
    >
      <p className="font-ui text-xs font-semibold uppercase tracking-wider text-text-muted">Ordena</p>
      <p className="mt-2 text-reading text-sm text-text-muted">Usa los botones para poner cada idea en el orden correcto.</p>
      <ol className="mt-4 space-y-2">
        {sortOrder.map((idxPos, pos) => (
          <li
            key={`${idxPos}-${pos}`}
            className="flex items-center gap-2 rounded-lg border border-blue-accent/15 bg-bg-elevated px-3 py-2"
          >
            <span className="flex-1 text-reading text-sm text-text-main">{q.items[idxPos]}</span>
            <button
              type="button"
              disabled={done || pos === 0}
              onClick={() => moveSort(pos, -1)}
              className="rounded border border-blue-accent/20 px-2 py-1 font-ui text-xs disabled:opacity-40"
              aria-label="Subir"
            >
              ↑
            </button>
            <button
              type="button"
              disabled={done || pos === sortOrder.length - 1}
              onClick={() => moveSort(pos, 1)}
              className="rounded border border-blue-accent/20 px-2 py-1 font-ui text-xs disabled:opacity-40"
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
        className="mt-4 rounded-full bg-blue-accent px-5 py-2 font-ui text-sm font-semibold text-white hover:opacity-90 disabled:opacity-50"
      >
        Comprobar orden
      </button>
      {feedback === 'correct' ? (
        <p className="mt-4 animate-pulse font-ui text-sm font-semibold text-emerald-700">¡Orden perfecto!</p>
      ) : null}
      {feedback === 'wrong' && !done ? (
        <p className="mt-4 font-ui text-sm text-amber-900">Aún no coincide. Ajusta y vuelve a intentar.</p>
      ) : null}
      {done && q.explanation ? <p className="mt-3 text-sm text-text-muted">{q.explanation}</p> : null}
    </div>
  )
}
