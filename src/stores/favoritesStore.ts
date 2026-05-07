import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type FavoriteVerse = {
  id: string
  reference: string
  text: string
  lessonId: string
  moduleId: string
  topicTitle: string
  savedAt: string
}

type FavoritesState = {
  verses: FavoriteVerse[]
  addFavorite: (verse: Omit<FavoriteVerse, 'id' | 'savedAt'>) => void
  removeFavorite: (id: string) => void
  isFavorite: (reference: string, lessonId: string) => boolean
  getFavoriteId: (reference: string, lessonId: string) => string | undefined
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set, get) => ({
      verses: [],
      addFavorite: (verse) => {
        const id = `fav-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`
        set((s) => ({
          verses: [{ ...verse, id, savedAt: new Date().toISOString() }, ...s.verses],
        }))
      },
      removeFavorite: (id) => {
        set((s) => ({ verses: s.verses.filter((v) => v.id !== id) }))
      },
      isFavorite: (reference, lessonId) =>
        get().verses.some((v) => v.reference === reference && v.lessonId === lessonId),
      getFavoriteId: (reference, lessonId) =>
        get().verses.find((v) => v.reference === reference && v.lessonId === lessonId)?.id,
    }),
    { name: 'lineup-favorites' },
  ),
)
