import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type GameLayoutProps = {
  title: string
  emoji: string
  /** Texto corto del estado actual (movimientos, tiempo, vidas, etc.) */
  status?: ReactNode
  onRestart?: () => void
  children: ReactNode
  /** A dónde vuelve el botón "←". Por defecto, el hub de juegos. */
  backTo?: string
  /** Texto del botón de volver. Por defecto, "Juegos". */
  backLabel?: string
}

/**
 * Envoltorio visual compartido por los mini-juegos: botón de volver,
 * título, indicador de estado y botón de reiniciar.
 */
export function GameLayout({
  title,
  emoji,
  status,
  onRestart,
  children,
  backTo = '/games',
  backLabel = 'Juegos',
}: GameLayoutProps) {
  return (
    // Sin padding horizontal propio: el `main` de Layout.tsx ya aplica
    // px-4/sm:px-6, y duplicarlo aquí le quitaba ancho de sobra al tablero.
    <div className="mx-auto flex max-w-2xl flex-col gap-2 py-2">
      <div className="flex items-center justify-between gap-3">
        <Link
          to={backTo}
          className="flex items-center gap-1.5 font-ui text-sm font-medium text-parchment/70 transition hover:text-sg-gold-light"
        >
          <span aria-hidden="true">←</span> {backLabel}
        </Link>
        {onRestart && (
          <button
            type="button"
            onClick={onRestart}
            className="rounded-full border border-sg-gold/40 bg-transparent px-3 py-1.5 font-ui text-xs font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
          >
            ↻ Reiniciar
          </button>
        )}
      </div>

      <div className="text-center">
        <h1 className="font-display text-lg font-bold text-parchment sm:text-2xl">
          <span aria-hidden="true">{emoji}</span> {title}
        </h1>
        {status && <p className="mt-1 font-ui text-sm text-parchment/65">{status}</p>}
      </div>

      {children}
    </div>
  )
}
