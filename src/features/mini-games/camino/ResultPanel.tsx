export type ResultPanelProps = {
  stars: number
  seconds: number
  hintsUsed: number
  isNewBest: boolean
  onRestart: () => void
  onNext?: { label: string; onClick: () => void }
  onBackToPath: () => void
}

function formatTime(total: number) {
  const m = Math.floor(total / 60)
  const s = total % 60
  return `${m}:${s.toString().padStart(2, '0')}`
}

/** Panel de resultado compartido por los 3 tipos de reto del Camino. */
export function ResultPanel({ stars, seconds, hintsUsed, isNewBest, onRestart, onNext, onBackToPath }: ResultPanelProps) {
  return (
    <div className="flex flex-col items-center gap-3 rounded-2xl border border-sg-gold/40 bg-navy-mid p-6 text-center shadow-lg">
      <p className="text-4xl" aria-hidden="true">
        🎉
      </p>
      <p className="font-display text-xl font-bold text-parchment">¡Estación completada!</p>
      <div className="flex gap-1 text-3xl" aria-label={`${stars} de 3 estrellas`}>
        {[1, 2, 3].map((n) => (
          <span key={n} aria-hidden="true">
            {n <= stars ? '⭐' : '☆'}
          </span>
        ))}
      </div>
      <p className="font-ui text-sm text-parchment/70">
        Tiempo: {formatTime(seconds)}
        {hintsUsed > 0 ? ` · ${hintsUsed} pista${hintsUsed > 1 ? 's' : ''} usada${hintsUsed > 1 ? 's' : ''}` : ''}
        {isNewBest ? ' · ¡Nuevo mejor resultado!' : ''}
      </p>
      <div className="flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={onRestart}
          className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
        >
          Jugar de nuevo
        </button>
        {onNext && (
          <button
            type="button"
            onClick={onNext.onClick}
            className="rounded-lg border border-jade/50 bg-jade/20 px-4 py-2 font-ui text-sm font-semibold text-jade transition hover:bg-jade/30"
          >
            {onNext.label}
          </button>
        )}
        <button
          type="button"
          onClick={onBackToPath}
          className="rounded-lg border border-sg-gold/40 bg-transparent px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
        >
          Volver al camino
        </button>
      </div>
    </div>
  )
}
