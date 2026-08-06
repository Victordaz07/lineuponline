import { useCallback, useEffect, useRef, useState } from 'react'
import type React from 'react'
import type { HighlightColor, HighlightKind, TextHighlight } from '@/stores/highlightsStore'
import { useHighlightsStore } from '@/stores/highlightsStore'

type SelectionState = { text: string; top: number; left: number; height?: number }

/** State for an existing highlight the user clicked on */
export type ActiveHighlight = {
  id: string
  top: number
  left: number
}

type Segment = { text: string; color: HighlightColor | null; kind: HighlightKind | null; hlId: string | null }

function buildSegments(fullText: string, highlights: TextHighlight[]): Segment[] {
  if (!highlights.length) return [{ text: fullText, color: null, kind: null, hlId: null }]

  const colors: (HighlightColor | null)[] = new Array(fullText.length).fill(null)
  const kinds: (HighlightKind | null)[] = new Array(fullText.length).fill(null)
  const ids: (string | null)[] = new Array(fullText.length).fill(null)

  for (const hl of highlights) {
    const idx = fullText.indexOf(hl.selectedText)
    if (idx === -1) continue
    for (let i = idx; i < idx + hl.selectedText.length; i++) {
      colors[i] = hl.color
      kinds[i] = hl.kind
      ids[i] = hl.id
    }
  }

  const segments: Segment[] = []
  let i = 0
  while (i < fullText.length) {
    const color = colors[i]
    const kind = kinds[i]
    const hlId = ids[i]
    let j = i + 1
    while (j < fullText.length && colors[j] === color && kinds[j] === kind && ids[j] === hlId) j++
    segments.push({ text: fullText.slice(i, j), color, kind, hlId })
    i = j
  }
  return segments
}

/** Icono de marcador dorado (JSX inline, no un componente, para no romper Fast Refresh en este archivo). */
const NOTE_MARKER_ICON = (
  <svg
    width="11"
    height="11"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.3"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="ml-0.5 inline-block shrink-0 align-[-1px] text-sg-gold-light"
    aria-hidden="true"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
  </svg>
)

export function useTextHighlight(
  blockKey: string | undefined,
  lessonId: string | undefined,
  topicId: string | undefined,
  text: string,
) {
  const [sel, setSel] = useState<SelectionState | null>(null)
  const [activeHL, setActiveHL] = useState<ActiveHighlight | null>(null)
  const toolbarRef = useRef<HTMLDivElement | null>(null)
  const containerRef = useRef<HTMLElement | null>(null)

  const addHighlight = useHighlightsStore((s) => s.addHighlight)
  const addNote = useHighlightsStore((s) => s.addNote)
  const allHighlights = useHighlightsStore((s) => s.highlights)
  const blockHighlights = blockKey
    ? allHighlights.filter((h) => h.blockKey === blockKey)
    : []

  const evaluateSelection = useCallback(() => {
    const selection = window.getSelection()
    if (!selection || selection.isCollapsed) return
    if (!containerRef.current || !selection.anchorNode) return
    if (!containerRef.current.contains(selection.anchorNode)) return
    const selectedText = selection.toString().trim()
    if (!selectedText) return
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

  const handleMouseUp = useCallback(() => {
    evaluateSelection()
  }, [evaluateSelection])

  // Selección táctil (mantener presionado + arrastrar los tiradores nativos):
  // `touchend` llega antes de que la selección se asiente en algunos navegadores,
  // así que además escuchamos `selectionchange` con un pequeño debounce.
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined
    const onSelectionChange = () => {
      if (timer) clearTimeout(timer)
      timer = setTimeout(evaluateSelection, 220)
    }
    document.addEventListener('selectionchange', onSelectionChange)
    return () => {
      document.removeEventListener('selectionchange', onSelectionChange)
      if (timer) clearTimeout(timer)
    }
  }, [evaluateSelection])

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

  const saveNote = useCallback(
    (noteText: string) => {
      const trimmed = noteText.trim()
      if (!sel || !blockKey || !lessonId || !topicId || !trimmed) {
        window.getSelection()?.removeAllRanges()
        setSel(null)
        return
      }
      addNote({ lessonId, topicId, blockKey, selectedText: sel.text, tags: [] }, trimmed)
      window.getSelection()?.removeAllRanges()
      setSel(null)
    },
    [sel, blockKey, lessonId, topicId, addNote],
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
      return segments.map((seg, i) => {
        if (!seg.hlId) return <span key={i}>{seg.text}</span>
        if (seg.kind === 'note') {
          return (
            <mark
              key={i}
              className="cursor-pointer rounded-sm bg-transparent text-inherit underline decoration-sg-gold decoration-2 decoration-dashed underline-offset-4"
              onClick={(e) => handleMarkClick(e, seg.hlId!)}
            >
              {seg.text}
              {NOTE_MARKER_ICON}
            </mark>
          )
        }
        return (
          <mark
            key={i}
            className={`cursor-pointer ${seg.color ? colorClasses[seg.color] : ''}`}
            onClick={(e) => handleMarkClick(e, seg.hlId!)}
          >
            {seg.text}
          </mark>
        )
      })
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [text, allHighlights, blockKey, handleMarkClick],
  )

  return {
    sel,
    setSel,
    toolbarRef,
    containerRef,
    handleMouseUp,
    saveHighlight,
    saveNote,
    activeHL,
    setActiveHL,
    renderSegments,
  }
}
