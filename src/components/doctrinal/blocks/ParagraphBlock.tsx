import type { ParagraphBlock as ParagraphBlockType } from '@/types/doctrine'
import type { HighlightColor } from '@/stores/highlightsStore'
import { useTextHighlight } from '@/hooks/useTextHighlight'
import { HighlightToolbar } from '@/components/common/HighlightToolbar'
import { HighlightDetailPanel } from '@/components/common/HighlightDetailPanel'

export type ParagraphBlockProps = {
  block: ParagraphBlockType
  highlightId?: string | null
  blockKey?: string
  lessonId?: string
  topicId?: string
}

const COLOR_CLASSES: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-200 text-yellow-900 rounded px-0.5',
  green:  'bg-emerald-200 text-emerald-900 rounded px-0.5',
  blue:   'bg-blue-200 text-blue-900 rounded px-0.5',
  pink:   'bg-pink-200 text-pink-900 rounded px-0.5',
}

export function ParagraphBlock({ block, highlightId, blockKey, lessonId, topicId }: ParagraphBlockProps) {
  const blockId = block.blockId ?? undefined
  const isTtsOn = blockId != null && highlightId != null && blockId === highlightId

  const { sel, setSel, toolbarRef, handleMouseUp, saveHighlight, activeHL, setActiveHL, renderSegments } =
    useTextHighlight(blockKey, lessonId, topicId, block.text)

  return (
    <div className="relative">
      <HighlightToolbar
        sel={sel}
        toolbarRef={toolbarRef}
        onSave={saveHighlight}
        onDismiss={() => { window.getSelection()?.removeAllRanges(); setSel(null) }}
      />
      {activeHL && (
        <HighlightDetailPanel activeHL={activeHL} onClose={() => setActiveHL(null)} />
      )}
      <p
        id={blockId ? `p-${blockId}` : undefined}
        className={`select-text text-reading text-base leading-relaxed text-parchment/80 transition-all duration-300 ${
          isTtsOn ? 'rounded-lg bg-sg-gold/15 px-3 py-2 ring-2 ring-sg-gold' : ''
        }`}
        onMouseUp={handleMouseUp}
      >
        {renderSegments(COLOR_CLASSES)}
      </p>
    </div>
  )
}
