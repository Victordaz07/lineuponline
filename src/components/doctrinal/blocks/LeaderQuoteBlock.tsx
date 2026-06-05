import type { LeaderQuoteBlock as LeaderQuoteBlockType } from '@/types/doctrine'

export type LeaderQuoteBlockProps = {
  block: LeaderQuoteBlockType
}

export function LeaderQuoteBlock({ block }: LeaderQuoteBlockProps) {
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
