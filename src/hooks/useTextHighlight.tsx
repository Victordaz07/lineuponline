import { useRef, useState, useCallback } from 'react'
import type React from 'react'
import type { HighlightColor, TextHighlight } from '@/stores/highlightsStore'
import { useHighlightsStore } from '@/stores/highlightsStore'

type SelectionState = { text: string; top: number; left: number }
type Segment = { text: string; color: HighlightColor | null }

function buildSegments(fullText: string, highlights: TextHighlight[]): Segment[] {
  if (!highlights.length) return [{ text: fullText, color: null }]

  const colors: (HighlightColor | null)[] = new Array(fullText.length).fill(null)

  for (const hl of highlights) {
    const idx = fullText.indexOf(hl.selectedText)
    if (idx === -1) continue
    for (let i = idx; i < idx + hl.selectedText.length; i++) {
      colors[i] = hl.color
    }
  }

  const segments: Segment[] = []
  let i = 0
  while (i < fullText.length) {
    const color = colors[i]
    let j = i + 1
    while (j < fullText.length && colors[j] === color) j++
    segments.push({ text: fullText.slice(i, j), color })
    i = j
  }
  return segments
}

export function useTextHighlight(
  blockKey: string | undefined,
  lessonId: string | undefined,
  topicId: string | undefined,
  text: string,
) {
  const [sel, setSel] = useState<SelectionState | null>(null)
  const toolbarRef = useRef<HTMLDivElement | null>(null)

  const addHighlight = useHighlightsStore((s) => s.addHighlight)
  const allHighlights = useHighlightsStore((s) => s.highlights)
  const blockHighlights = blockKey
    ? allHighlights.filter((h) => h.blockKey === blockKey)
    : []

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) {
      setSel(null)
      return
    }
    const selectedText = selection.toString().trim()
    if (!selectedText) {
      setSel(null)
      return
    }
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    setSel({
      text: selectedText,
      top: rect.top - 48,
      left: rect.left + rect.width / 2 - 60,
    })
  }, [])

  const saveHighlight = useCallback(
    (color: HighlightColor) => {
      if (!sel || !blockKey || !lessonId || !topicId) {
        window.getSelection()?.removeAllRanges()
        setSel(null)
        return
      }
      addHighlight({ lessonId, topicId, blockKey, selectedText: sel.text, color, tags: [] })
      window.getSelection()?.removeAllRanges()
      setSel(null)
    },
    [sel, blockKey, lessonId, topicId, addHighlight],
  )

  const renderSegments = useCallback(
    (colorClasses: Record<HighlightColor, string>): React.ReactNode => {
      const segments = buildSegments(text, blockHighlights)
      return segments.map((seg, i) =>
        seg.color
          ? <mark key={i} className={colorClasses[seg.color]}>{seg.text}</mark>
          : <span key={i}>{seg.text}</span>,
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text, allHighlights, blockKey],
  )

  return { sel, setSel, toolbarRef, handleMouseUp, saveHighlight, renderSegments }
}
