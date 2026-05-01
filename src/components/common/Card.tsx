import type { HTMLAttributes, ReactNode } from 'react'

export type CardProps = {
  children: ReactNode
} & HTMLAttributes<HTMLDivElement>

/**
 * Contenedor tipo tarjeta con borde celestial.
 *
 * @param props - Props del div contenedor
 * @returns Tarjeta estilizada
 */
export function Card({ children, className = '', ...rest }: CardProps) {
  return (
    <div
      className={`rounded-2xl border border-gold-main/25 bg-white p-5 shadow-sm sm:p-6 ${className}`.trim()}
      {...rest}
    >
      {children}
    </div>
  )
}
