import type { CentralQuoteBlock as CentralQuoteBlockType } from '@/types/doctrine'

export type CentralQuoteBlockProps = {
  block: CentralQuoteBlockType
}

/**
 * Cita central con tipografía de énfasis.
 */
export function CentralQuoteBlock({ block }: CentralQuoteBlockProps) {
  return (
    <div className="rounded-2xl border border-gold-main/35 bg-gradient-to-b from-bg-elevated to-white px-6 py-10 text-center shadow-inner">
      <p className="font-title text-2xl italic leading-snug text-blue-accent sm:text-3xl">&ldquo;{block.text}&rdquo;</p>
      {block.attribution ? (
        <p className="mt-6 font-ui text-sm font-semibold text-text-muted">{block.attribution}</p>
      ) : null}
    </div>
  )
}
