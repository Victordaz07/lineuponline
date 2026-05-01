import type { HighlightVerseBlock as HighlightVerseBlockType } from '@/types/doctrine'

export type HighlightVerseBlockProps = {
  block: HighlightVerseBlockType
}

/**
 * Versículo o pasaje destacado.
 */
export function HighlightVerseBlock({ block }: HighlightVerseBlockProps) {
  return (
    <figure className="rounded-2xl bg-blue-accent px-5 py-6 text-white shadow-lg">
      <blockquote className="font-reading text-lg font-medium leading-relaxed">&ldquo;{block.text}&rdquo;</blockquote>
      <figcaption className="mt-4 font-ui text-sm font-semibold tracking-wide text-gold-dim">
        {block.reference}
      </figcaption>
    </figure>
  )
}
