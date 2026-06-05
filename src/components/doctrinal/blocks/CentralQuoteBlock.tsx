import type { CentralQuoteBlock as CentralQuoteBlockType } from '@/types/doctrine'

export type CentralQuoteBlockProps = {
  block: CentralQuoteBlockType
}

export function CentralQuoteBlock({ block }: CentralQuoteBlockProps) {
  return (
    <div className="rounded-2xl border border-sg-gold/25 bg-navy-deep px-6 py-10 text-center shadow-inner">
      <p className="font-display text-2xl italic leading-snug text-sg-gold-light sm:text-3xl">&ldquo;{block.text}&rdquo;</p>
      {block.attribution ? (
        <p className="mt-6 font-ui text-sm font-semibold text-parchment/55">{block.attribution}</p>
      ) : null}
    </div>
  )
}
