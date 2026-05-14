import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type HighlightColor = 'yellow' | 'green' | 'blue' | 'pink'

export type TextHighlight = {
  id: string
  lessonId: string
  topicId: string
  /** `${lessonId}:${topicId}:${blockIndex}` */
  blockKey: string
  selectedText: string
  color: HighlightColor
  tags: string[]
  note: string
  savedAt: string
}

type HighlightsState = {
  highlights: TextHighlight[]
  addHighlight: (h: Omit<TextHighlight, 'id' | 'savedAt' | 'note'>) => void
  removeHighlight: (id: string) => void
  getForBlock: (blockKey: string) => TextHighlight[]
  updateTags: (id: string, tags: string[]) => void
  updateColor: (id: string, color: HighlightColor) => void
  updateNote: (id: string, note: string) => void
}

export const useHighlightsStore = create<HighlightsState>()(
  persist(
    (set, get) => ({
      highlights: [],
      addHighlight: (h) => {
        const id = `hl-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
        set((s) => ({
          highlights: [{ ...h, id, note: '', savedAt: new Date().toISOString() }, ...s.highlights],
        }))
      },
      removeHighlight: (id) =>
        set((s) => ({ highlights: s.highlights.filter((h) => h.id !== id) })),
      getForBlock: (blockKey) => get().highlights.filter((h) => h.blockKey === blockKey),
      updateTags: (id, tags) =>
        set((s) => ({
          highlights: s.highlights.map((h) => (h.id === id ? { ...h, tags } : h)),
        })),
      updateColor: (id, color) =>
        set((s) => ({
          highlights: s.highlights.map((h) => (h.id === id ? { ...h, color } : h)),
        })),
      updateNote: (id, note) =>
        set((s) => ({
          highlights: s.highlights.map((h) => (h.id === id ? { ...h, note } : h)),
        })),
    }),
    { name: 'lineup-highlights' },
  ),
)
