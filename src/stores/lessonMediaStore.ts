import { create } from 'zustand'
import type { LessonMediaDoc } from '@/services/lessonMedia.service'

type LessonMediaState = {
  media: Record<string, LessonMediaDoc>
  setAll: (media: Record<string, LessonMediaDoc>) => void
}

/**
 * Overlay dinámico de imágenes por lección, subidas desde /admin/imagenes.
 * Un solo listener en tiempo real (ver MediaSyncManager en Layout.tsx)
 * alimenta este store; los componentes de lectura (LessonContentView,
 * LessonList, etc.) solo seleccionan de aquí.
 */
export const useLessonMediaStore = create<LessonMediaState>((set) => ({
  media: {},
  setAll: (media) => set({ media }),
}))
