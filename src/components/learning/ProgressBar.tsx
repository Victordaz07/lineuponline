import { useId } from 'react'

export type ProgressBarProps = {
  /** Valor entre 0 y 1 */
  value: number
  label?: string
}

/**
 * Barra de progreso accesible.
 *
 * @param props - Fracción completada y etiqueta
 * @returns Barra horizontal
 */
export function ProgressBar({ value, label = 'Progreso' }: ProgressBarProps) {
  const labelId = useId()
  const clamped = Math.min(1, Math.max(0, value))
  const pct = Math.round(clamped * 100)
  return (
    <div className="w-full">
      <div className="mb-1 flex justify-between font-ui text-xs font-semibold text-text-muted">
        <span id={labelId}>{label}</span>
        <span aria-hidden="true">{pct}%</span>
      </div>
      <div
        className="h-2 w-full overflow-hidden rounded-full bg-blue-accent/10"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-labelledby={labelId}
      >
        <div
          className="h-full rounded-full bg-gradient-to-r from-gold-main to-gold-bright transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  )
}
