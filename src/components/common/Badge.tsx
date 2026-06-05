import type { HTMLAttributes, ReactNode } from 'react'

export type BadgeProps = {
  children: ReactNode
} & HTMLAttributes<HTMLSpanElement>

/**
 * Etiqueta compacta para metadatos o estados.
 *
 * @param props - Props del span
 * @returns Badge
 */
export function Badge({ children, className = '', ...rest }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-sg-gold/25 bg-sg-gold/10 px-2.5 py-0.5 font-ui text-xs font-semibold uppercase tracking-wide text-sg-gold ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  )
}
