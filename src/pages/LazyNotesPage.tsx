import { lazy } from 'react'

/** Separa el chunk de Notas (Firebase) del bundle inicial del catálogo. */
export const LazyNotesPage = lazy(async () => {
  const mod = await import('./NotesPage')
  return { default: mod.NotesPage }
})
