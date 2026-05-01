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
      className={`inline-flex items-center rounded-full border border-gold-main/30 bg-gold-dim px-2.5 py-0.5 font-ui text-xs font-semibold uppercase tracking-wide text-blue-accent ${className}`.trim()}
      {...rest}
    >
      {children}
    </span>
  )
}
