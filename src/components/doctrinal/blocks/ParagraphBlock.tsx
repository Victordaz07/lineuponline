import type { ParagraphBlock as ParagraphBlockType } from '@/types/doctrine'

export type ParagraphBlockProps = {
  block: ParagraphBlockType
  /** Si coincide con `block.blockId`, se resalta para TTS. */
  highlightId?: string | null
}

/**
 * Párrafo de estudio con opción de resaltado sincronizado con TTS.
 */
export function ParagraphBlock({ block, highlightId }: ParagraphBlockProps) {
  const id = block.blockId ?? undefined
  const isOn = id != null && highlightId != null && id === highlightId

  return (
    <p
      id={id ? `p-${id}` : undefined}
      className={`text-reading text-base leading-relaxed text-text-main transition-all duration-300 ${
        isOn ? 'rounded-lg bg-gold-dim/90 px-3 py-2 ring-2 ring-gold-main' : ''
      }`}
    >
      {block.text}
    </p>
  )
}
