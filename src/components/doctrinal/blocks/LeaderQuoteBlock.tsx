import type { LeaderQuoteBlock as LeaderQuoteBlockType } from '@/types/doctrine'
import { isParaphraseAttribution } from '@/components/doctrinal/blocks/quoteAttribution'

export type LeaderQuoteBlockProps = {
  block: LeaderQuoteBlockType
}

export function LeaderQuoteBlock({ block }: LeaderQuoteBlockProps) {
  // Hallazgo #1 (AUDITORIA_CUMPLIMIENTO.md): si el contenido está marcado como
  // paráfrasis, no debe presentarse con formato de cita textual (comillas +
  // atribución directa por nombre) — se narra en prosa, sin comillas.
  if (isParaphraseAttribution(block.name, block.role)) {
    return (
      <div className="rounded-2xl border border-sg-gold/20 bg-sg-gold/5 p-5 shadow-sm">
        <p className="font-ui text-xs font-semibold uppercase tracking-wide text-parchment/45">
          Paráfrasis — no es una cita textual
        </p>
        <p className="mt-2 font-display text-lg text-sg-gold-light">
          Según enseñó {block.name}
          {block.role ? <span className="text-parchment/55"> ({block.role})</span> : null}: {block.quote}
        </p>
      </div>
    )
  }

  return (
    <blockquote className="rounded-2xl border border-sg-gold/20 bg-sg-gold/5 p-5 shadow-sm">
      <p className="font-display text-lg italic text-sg-gold-light">&ldquo;{block.quote}&rdquo;</p>
      <footer className="mt-4 border-t border-sg-gold/20 pt-3 font-ui text-sm">
        <cite className="not-italic font-semibold text-parchment/85">{block.name}</cite>
        {block.role ? <span className="text-parchment/55"> · {block.role}</span> : null}
      </footer>
    </blockquote>
  )
}
