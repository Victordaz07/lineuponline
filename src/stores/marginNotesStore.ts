import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type MarginNote = {
  id: string
  lessonId: string
  topicId: string
  /** `${lessonId}:${topicId}:${blockIndex}` */
  blockKey: string
  blockType: string
  noteText: string
  tags: string[]
  savedAt: string
  updatedAt: string
}

type MarginNotesState = {
  notes: MarginNote[]
  addNote: (n: Omit<MarginNote, 'id' | 'savedAt' | 'updatedAt'>) => void
  updateNote: (id: string, noteText: string) => void
  removeNote: (id: string) => void
  getForBlock: (blockKey: string) => MarginNote[]
  updateTags: (id: string, tags: string[]) => void
}

export const useMarginNotesStore = create<MarginNotesState>()(
  persist(
    (set, get) => ({
      notes: [],
      addNote: (n) => {
        const id = `mn-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
        const now = new Date().toISOString()
        set((s) => ({
          notes: [{ ...n, id, savedAt: now, updatedAt: now }, ...s.notes],
        }))
      },
      updateNote: (id, noteText) =>
        set((s) => ({
          notes: s.notes.map((n) =>
            n.id === id ? { ...n, noteText, updatedAt: new Date().toISOString() } : n,
          ),
        })),
      removeNote: (id) => set((s) => ({ notes: s.notes.filter((n) => n.id !== id) })),
      getForBlock: (blockKey) => get().notes.filter((n) => n.blockKey === blockKey),
      updateTags: (id, tags) =>
        set((s) => ({
          notes: s.notes.map((n) => (n.id === id ? { ...n, tags } : n)),
        })),
    }),
    { name: 'lineup-margin-notes' },
  ),
)
