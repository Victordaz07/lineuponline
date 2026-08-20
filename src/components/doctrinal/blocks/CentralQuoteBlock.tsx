import type { CentralQuoteBlock as CentralQuoteBlockType } from '@/types/doctrine'
import { isParaphraseAttribution } from '@/components/doctrinal/blocks/quoteAttribution'

export type CentralQuoteBlockProps = {
  block: CentralQuoteBlockType
}

export function CentralQuoteBlock({ block }: CentralQuoteBlockProps) {
  // Hallazgo #1 (AUDITORIA_CUMPLIMIENTO.md): si el contenido está marcado como
  // paráfrasis, no debe presentarse con formato de cita textual (comillas +
  // tipografía de cita destacada) — se marca explícitamente como paráfrasis.
  if (isParaphraseAttribution(block.attribution)) {
    return (
      <div className="rounded-2xl border border-sg-gold/25 bg-navy-deep px-6 py-10 text-center shadow-inner">
        <p className="font-ui text-xs font-semibold uppercase tracking-wide text-parchment/45">
          Paráfrasis — no es una cita textual
        </p>
        <p className="mt-3 font-display text-xl leading-snug text-sg-gold-light sm:text-2xl">{block.text}</p>
        {block.attribution ? (
          <p className="mt-6 font-ui text-sm font-semibold text-parchment/55">{block.attribution}</p>
        ) : null}
      </div>
    )
  }

  return (
    <div className="rounded-2xl border border-sg-gold/25 bg-navy-deep px-6 py-10 text-center shadow-inner">
      <p className="font-display text-2xl italic leading-snug text-sg-gold-light sm:text-3xl">&ldquo;{block.text}&rdquo;</p>
      {block.attribution ? (
        <p className="mt-6 font-ui text-sm font-semibold text-parchment/55">{block.attribution}</p>
      ) : null}
    </div>
  )
}
