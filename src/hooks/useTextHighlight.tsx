import { useEffect, useRef, useState } from 'react'
import { useShallow } from 'zustand/react/shallow'
import { useHighlightsStore, type HighlightColor } from '@/stores/highlightsStore'
import type { ReactNode } from 'react'

type SelectionState = { text: string; top: number; left: number }

export function useTextHighlight(
  blockKey: string | undefined,
  lessonId: string | undefined,
  topicId: string | undefined,
  text: string,
) {
  const addHighlight = useHighlightsStore((s) => s.addHighlight)
  const removeHighlight = useHighlightsStore((s) => s.removeHighlight)
  const blockHighlights = useHighlightsStore(
    useShallow((s) => (blockKey ? s.highlights.filter((h) => h.blockKey === blockKey) : [])),
  )

  const [sel, setSel] = useState<SelectionState | null>(null)
  const toolbarRef = useRef<HTMLDivElement>(null)

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
    if (!selection || selection.isCollapsed) { setSel(null); return }
    const selected = selection.toString().trim()
    if (selected.length < 3) { setSel(null); return }
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    setSel({
      text: selected,
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

  function renderSegments(colorClasses: Record<HighlightColor, string>): ReactNode {
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

    const nodes: ReactNode[] = []
    let last = 0
    for (const span of spans) {
      if (span.start < last) continue
      if (span.start > last) nodes.push(text.slice(last, span.start))
      nodes.push(
        <mark
          key={span.id}
          className={`cursor-pointer transition-opacity hover:opacity-70 ${colorClasses[span.color]}`}
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

  return { sel, setSel, toolbarRef, handleMouseUp, saveHighlight, renderSegments }
}
