import { describe, it, expect, beforeEach } from 'vitest'
import { useFavoritesStore } from './favoritesStore'

const baseVerse = {
  reference: 'Juan 3:16',
  text: 'Porque de tal manera amó Dios al mundo...',
  lessonId: 'test-lesson',
  moduleId: 'test-module',
  topicTitle: 'El amor de Dios',
}

beforeEach(() => {
  useFavoritesStore.setState({ verses: [] })
})

describe('favoritesStore', () => {
  it('generates unique IDs for rapid additions', () => {
    useFavoritesStore.getState().addFavorite(baseVerse)
    useFavoritesStore.getState().addFavorite({ ...baseVerse, reference: 'Juan 3:17' })
    useFavoritesStore.getState().addFavorite({ ...baseVerse, reference: 'Juan 3:18' })

    const ids = useFavoritesStore.getState().verses.map((v) => v.id)
    const unique = new Set(ids)
    expect(unique.size).toBe(3)
  })

  it('ID uses crypto.randomUUID format', () => {
    useFavoritesStore.getState().addFavorite(baseVerse)
    const id = useFavoritesStore.getState().verses[0].id
    expect(id).toMatch(/^fav-[0-9a-f-]{36}$/)
  })

  it('removeFavorite removes the correct verse', () => {
    useFavoritesStore.getState().addFavorite(baseVerse)
    const id = useFavoritesStore.getState().verses[0].id
    useFavoritesStore.getState().removeFavorite(id)
    expect(useFavoritesStore.getState().verses).toHaveLength(0)
  })

  it('isFavorite returns true for existing verse', () => {
    useFavoritesStore.getState().addFavorite(baseVerse)
    expect(useFavoritesStore.getState().isFavorite('Juan 3:16', 'test-lesson')).toBe(true)
    expect(useFavoritesStore.getState().isFavorite('Juan 3:17', 'test-lesson')).toBe(false)
  })
})
