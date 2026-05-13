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
  savedAt: string
}

type HighlightsState = {
  highlights: TextHighlight[]
  addHighlight: (h: Omit<TextHighlight, 'id' | 'savedAt'>) => void
  removeHighlight: (id: string) => void
  getForBlock: (blockKey: string) => TextHighlight[]
  updateTags: (id: string, tags: string[]) => void
}

export const useHighlightsStore = create<HighlightsState>()(
  persist(
    (set, get) => ({
      highlights: [],
      addHighlight: (h) => {
        const id = `hl-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
        set((s) => ({
          highlights: [{ ...h, id, savedAt: new Date().toISOString() }, ...s.highlights],
        }))
      },
      removeHighlight: (id) =>
        set((s) => ({ highlights: s.highlights.filter((h) => h.id !== id) })),
      getForBlock: (blockKey) => get().highlights.filter((h) => h.blockKey === blockKey),
      updateTags: (id, tags) =>
        set((s) => ({
          highlights: s.highlights.map((h) => (h.id === id ? { ...h, tags } : h)),
        })),
    }),
    { name: 'lineup-highlights' },
  ),
)
