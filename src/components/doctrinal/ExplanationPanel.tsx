import type { ReactNode } from 'react'

export type ExplanationPanelProps = {
  title: string
  children: ReactNode
}

export function ExplanationPanel({ title, children }: ExplanationPanelProps) {
  return (
    <section
      className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-sm sm:p-6"
      aria-labelledby="explanation-panel-title"
    >
      <h3 id="explanation-panel-title" className="mb-3 font-display text-xl text-parchment">
        {title}
      </h3>
      <div className="font-display text-base leading-relaxed text-parchment/80">{children}</div>
    </section>
  )
}
