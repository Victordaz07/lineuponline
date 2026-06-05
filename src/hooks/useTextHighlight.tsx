import { useRef, useState, useCallback } from 'react'
import type React from 'react'
import type { HighlightColor, TextHighlight } from '@/stores/highlightsStore'
import { useHighlightsStore } from '@/stores/highlightsStore'

type SelectionState = { text: string; top: number; left: number; height?: number }

/** State for an existing highlight the user clicked on */
export type ActiveHighlight = {
  id: string
  top: number
  left: number
}

type Segment = { text: string; color: HighlightColor | null; hlId: string | null }

function buildSegments(fullText: string, highlights: TextHighlight[]): Segment[] {
  if (!highlights.length) return [{ text: fullText, color: null, hlId: null }]

  const colors: (HighlightColor | null)[] = new Array(fullText.length).fill(null)
  const ids: (string | null)[] = new Array(fullText.length).fill(null)

  for (const hl of highlights) {
    const idx = fullText.indexOf(hl.selectedText)
    if (idx === -1) continue
    for (let i = idx; i < idx + hl.selectedText.length; i++) {
      colors[i] = hl.color
      ids[i] = hl.id
    }
  }

  const segments: Segment[] = []
  let i = 0
  while (i < fullText.length) {
    const color = colors[i]
    const hlId = ids[i]
    let j = i + 1
    while (j < fullText.length && colors[j] === color && ids[j] === hlId) j++
    segments.push({ text: fullText.slice(i, j), color, hlId })
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
  const [activeHL, setActiveHL] = useState<ActiveHighlight | null>(null)
  const toolbarRef = useRef<HTMLDivElement | null>(null)

  const addHighlight = useHighlightsStore((s) => s.addHighlight)
  const allHighlights = useHighlightsStore((s) => s.highlights)
  const blockHighlights = blockKey
    ? allHighlights.filter((h) => h.blockKey === blockKey)
    : []

  const handleMouseUp = useCallback(() => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) {
      // Don't clear sel here — let clicks on marks handle activeHL separately
      return
    }
    const selectedText = selection.toString().trim()
    if (!selectedText) {
      setSel(null)
      return
    }
    // Close any open highlight detail panel when selecting new text
    setActiveHL(null)
    const range = selection.getRangeAt(0)
    const rect = range.getBoundingClientRect()
    setSel({
      text: selectedText,
      top: rect.top - 52,
      left: rect.left + rect.width / 2 - 72,
      height: rect.height,
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

  const handleMarkClick = useCallback((e: React.MouseEvent, hlId: string) => {
    e.stopPropagation()
    // Close any new-selection toolbar
    window.getSelection()?.removeAllRanges()
    setSel(null)
    const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
    setActiveHL({
      id: hlId,
      top: rect.top - 8,
      left: rect.left + rect.width / 2,
    })
  }, [])

  const renderSegments = useCallback(
    (colorClasses: Record<HighlightColor, string>): React.ReactNode => {
      const segments = buildSegments(text, blockHighlights)
      return segments.map((seg, i) =>
        seg.color && seg.hlId
          ? (
            <mark
              key={i}
              className={`cursor-pointer ${colorClasses[seg.color]}`}
              onClick={(e) => handleMarkClick(e, seg.hlId!)}
            >
              {seg.text}
            </mark>
          )
          : <span key={i}>{seg.text}</span>,
      )
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text, allHighlights, blockKey, handleMarkClick],
  )

  return { sel, setSel, toolbarRef, handleMouseUp, saveHighlight, activeHL, setActiveHL, renderSegments }
}
