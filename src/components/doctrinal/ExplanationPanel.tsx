import type { ReactNode } from 'react'

export type ExplanationPanelProps = {
  title: string
  children: ReactNode
}

/**
 * Panel de explicación o contexto para la pestaña de estudio.
 *
 * @param props - Título y contenido
 * @returns Sección destacada
 */
export function ExplanationPanel({ title, children }: ExplanationPanelProps) {
  return (
    <section
      className="rounded-2xl border border-blue-accent/15 bg-white/90 p-5 shadow-sm sm:p-6"
      aria-labelledby="explanation-panel-title"
    >
      <h3 id="explanation-panel-title" className="mb-3 font-title text-xl text-blue-accent">
        {title}
      </h3>
      <div className="text-reading text-base leading-relaxed text-text-main">{children}</div>
    </section>
  )
}
