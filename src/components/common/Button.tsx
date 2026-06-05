import type { ButtonHTMLAttributes, ReactNode } from 'react'

export type ButtonVariant = 'primary' | 'secondary' | 'danger'

export type ButtonProps = {
  /** Variante visual */
  variant?: ButtonVariant
  /** Muestra estado de carga */
  loading?: boolean
  children: ReactNode
} & ButtonHTMLAttributes<HTMLButtonElement>

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sg-gold disabled:opacity-50',
  secondary:
    'rounded-lg border border-sg-gold/40 bg-transparent px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/10 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sg-gold disabled:opacity-50',
  danger:
    'rounded-lg border border-red-600 bg-red-600 px-4 py-2 font-ui text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-700 disabled:opacity-50',
}

/**
 * Botón reutilizable con variantes y estado de carga.
 *
 * @param props - Props de botón estándar más variant y loading
 * @returns Elemento button accesible
 */
export function Button({
  variant = 'primary',
  loading = false,
  children,
  className = '',
  disabled,
  type = 'button',
  ...rest
}: ButtonProps) {
  const base = variantClasses[variant]
  return (
    <button
      className={`${base} ${className}`.trim()}
      type={type}
      disabled={disabled ?? loading}
      aria-busy={loading}
      {...rest}
    >
      {loading ? (
        <span className="inline-flex items-center justify-center gap-2">
          <span
            className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden="true"
          />
          Cargando
        </span>
      ) : (
        children
      )}
    </button>
  )
}
