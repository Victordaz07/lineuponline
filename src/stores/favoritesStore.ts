import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FavoriteVerse = {
  id: string
  reference: string
  text: string
  lessonId: string
  moduleId: string
  topicTitle: string
  tags: string[]
  savedAt: string
}

type FavoritesState = {
  verses: FavoriteVerse[]
  addFavorite: (verse: Omit<FavoriteVerse, 'id' | 'savedAt' | 'tags'>) => void
  removeFavorite: (id: string) => void
  isFavorite: (reference: string, lessonId: string) => boolean
  getFavoriteId: (reference: string, lessonId: string) => string | undefined
  updateTags: (id: string, tags: string[]) => void
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      verses: [],
      addFavorite: (verse) => {
        const id = `fav-${crypto.randomUUID()}`
        set((s) => ({
          verses: [{ ...verse, id, tags: [], savedAt: new Date().toISOString() }, ...s.verses],
        }))
      },
      removeFavorite: (id) => {
        set((s) => ({ verses: s.verses.filter((v) => v.id !== id) }))
      },
      updateTags: (id, tags) =>
        set((s) => ({
          verses: s.verses.map((v) => (v.id === id ? { ...v, tags } : v)),
        })),
      isFavorite: (reference, lessonId) =>
        get().verses.some((v) => v.reference === reference && v.lessonId === lessonId),
      getFavoriteId: (reference, lessonId) =>
        get().verses.find((v) => v.reference === reference && v.lessonId === lessonId)?.id,
    }),
    { name: 'lineup-favorites' },
  ),
)
