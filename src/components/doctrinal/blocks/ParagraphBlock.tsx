import { useEffect, useRef, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import type { ParagraphBlock as ParagraphBlockType } from '@/types/doctrine'
import { useHighlightsStore, type HighlightColor } from '@/stores/highlightsStore'

export type ParagraphBlockProps = {
  block: ParagraphBlockType
  /** Si coincide con `block.blockId`, se resalta para TTS. */
  highlightId?: string | null
  /** Clave única del bloque para persistir resaltados. */
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

const SWATCH_CLASSES: Record<HighlightColor, string> = {
  yellow: 'bg-yellow-300 hover:bg-yellow-400',
  green:  'bg-emerald-300 hover:bg-emerald-400',
  blue:   'bg-blue-300 hover:bg-blue-400',
  pink:   'bg-pink-300 hover:bg-pink-400',
}

const COLORS: HighlightColor[] = ['yellow', 'green', 'blue', 'pink']

type SelectionState = { text: string; top: number; left: number }

export function ParagraphBlock({ block, highlightId, blockKey, lessonId, topicId }: ParagraphBlockProps) {
  const blockId = block.blockId ?? undefined
  const isTtsOn = blockId != null && highlightId != null && blockId === highlightId

  const addHighlight = useHighlightsStore((s) => s.addHighlight)
  const removeHighlight = useHighlightsStore((s) => s.removeHighlight)
  const blockHighlights = useHighlightsStore(
    useShallow((s) => (blockKey ? s.highlights.filter((h) => h.blockKey === blockKey) : [])),
  )

  const [sel, setSel] = useState<SelectionState | null>(null)
  const toolbarRef = useRef<HTMLDivElement>(null)

  /* Dismiss toolbar when clicking outside it */
  useEffect(() => {
    if (!sel) return
    function onDown(e: MouseEvent) {
      if (toolbarRef.current && toolbarRef.current.contains(e.target as Node)) return
      setSel(null)
    }
    document.addEventListener('mousedown', onDown)
    return () => document.removeEventListener('mousedown', onDown)
  }, [sel])

  function handleMouseUp() {
    if (!blockKey || !lessonId || !topicId) return
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) {
      setSel(null)
      return
    }
    const text = selection.toString().trim()
    if (text.length < 3) { setSel(null); return }

    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    setSel({
      text,
      top: rect.top - 52,
      left: Math.max(8, Math.min(window.innerWidth - 180, rect.left + rect.width / 2 - 90)),
    })
  }

  function saveHighlight(color: HighlightColor) {
    if (!sel || !blockKey || !lessonId || !topicId) return
    addHighlight({ lessonId, topicId, blockKey, selectedText: sel.text, color, tags: [] })
    window.getSelection()?.removeAllRanges()
    setSel(null)
  }

  function renderText() {
    const text = block.text
    if (blockHighlights.length === 0) return text

    const spans = blockHighlights
      .map((h) => {
        const start = text.indexOf(h.selectedText)
        if (start < 0) return null
        return { start, end: start + h.selectedText.length, color: h.color, id: h.id }
      })
      .filter(Boolean)
      .sort((a, b) => a!.start - b!.start) as { start: number; end: number; color: HighlightColor; id: string }[]

    if (spans.length === 0) return text

    const nodes: React.ReactNode[] = []
    let last = 0
    for (const span of spans) {
      if (span.start < last) continue
      if (span.start > last) nodes.push(text.slice(last, span.start))
      nodes.push(
        <mark
          key={span.id}
          className={`cursor-pointer transition-opacity hover:opacity-70 ${COLOR_CLASSES[span.color]}`}
          title="Clic para quitar resaltado"
          onClick={() => removeHighlight(span.id)}
        >
          {text.slice(span.start, span.end)}
        </mark>,
      )
      last = span.end
    }
    if (last < text.length) nodes.push(text.slice(last))
    return nodes
  }

  return (
    <div className="relative">
      {/* Floating color picker toolbar */}
      {sel && (
        <div
          ref={toolbarRef}
          className="fixed z-50 flex items-center gap-1.5 rounded-xl border border-gold-main/20 bg-white px-2 py-1.5 shadow-lg"
          style={{ top: sel.top, left: sel.left }}
        >
          {COLORS.map((color) => (
            <button
              key={color}
              type="button"
              aria-label={`Resaltar en ${color}`}
              onMouseDown={(e) => e.preventDefault()}
              onClick={() => saveHighlight(color)}
              className={`h-6 w-6 rounded-full transition-transform hover:scale-110 ${SWATCH_CLASSES[color]}`}
            />
          ))}
          <button
            type="button"
            onMouseDown={(e) => e.preventDefault()}
            onClick={() => { window.getSelection()?.removeAllRanges(); setSel(null) }}
            className="ml-1 flex h-6 w-6 items-center justify-center rounded-full text-xs text-text-muted hover:bg-gray-100"
          >
            ✕
          </button>
        </div>
      )}

      <p
        id={blockId ? `p-${blockId}` : undefined}
        className={`select-text text-reading text-base leading-relaxed text-text-main transition-all duration-300 ${
          isTtsOn ? 'rounded-lg bg-gold-dim/90 px-3 py-2 ring-2 ring-gold-main' : ''
        }`}
        onMouseUp={handleMouseUp}
      >
        {renderText()}
      </p>
    </div>
  )
}
