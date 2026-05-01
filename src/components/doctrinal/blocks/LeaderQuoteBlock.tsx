import type { LeaderQuoteBlock as LeaderQuoteBlockType } from '@/types/doctrine'

export type LeaderQuoteBlockProps = {
  block: LeaderQuoteBlockType
}

/**
 * Cita de líder con nombre y cargo opcional.
 */
export function LeaderQuoteBlock({ block }: LeaderQuoteBlockProps) {
  return (
    <blockquote className="rounded-2xl border border-blue-accent/20 bg-gradient-to-br from-blue-accent/5 to-bg-elevated p-5 shadow-sm">
      <p className="font-title text-lg italic text-blue-accent">&ldquo;{block.quote}&rdquo;</p>
      <footer className="mt-4 border-t border-gold-main/25 pt-3 font-ui text-sm">
        <cite className="not-italic font-semibold text-text-main">{block.name}</cite>
        {block.role ? <span className="text-text-muted"> · {block.role}</span> : null}
      </footer>
    </blockquote>
  )
}
