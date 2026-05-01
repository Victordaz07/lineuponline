/**
 * Indicador de carga accesible.
 *
 * @param props - className opcional
 * @returns Spinner SVG animado
 */
export function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <div
      className={`inline-flex h-10 w-10 items-center justify-center ${className}`.trim()}
      role="status"
      aria-label="Cargando"
    >
      <svg
        className="h-8 w-8 animate-spin text-gold-main"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-90"
          d="M4 12a8 8 0 018-8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  )
}
