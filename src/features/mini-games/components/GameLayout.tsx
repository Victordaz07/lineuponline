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
  /** Permite que juegos con escenario usen un lienzo más amplio. */
  wide?: boolean
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
  wide = false,
}: GameLayoutProps) {
  return (
    <div className={`mx-auto flex flex-col gap-5 px-4 py-6 ${wide ? 'max-w-5xl' : 'max-w-2xl'}`}>
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
        <h1 className="font-display text-2xl font-bold text-parchment sm:text-3xl">
          <span aria-hidden="true">{emoji}</span> {title}
        </h1>
        {status && <p className="mt-1 font-ui text-sm text-parchment/65">{status}</p>}
      </div>

      {children}
    </div>
  )
}
