/**
 * Tipos globales del dominio doctrinal (lecciones, módulos, escrituras).
 * No eliminar campos sin revisar consumidores en hooks y componentes.
 */

/** Nivel de dificultad de una lección. */
export type DifficultyLevel = 'BASIC' | 'INTERMEDIATE' | 'ADVANCED'

/** Referencia a escritura para bloques interactivos. */
export type ScriptureReference = {
  reference: string
  book?: string
  verses?: string
}

export type LessonHeroImage = {
  url: string
  alt: string
}

/**
 * Lección doctrinal: contenido de estudio y texto original en texto plano
 * (párrafos separados por líneas en blanco).
 */
export type Lesson = {
  id: string
  moduleId: string
  title: string
  author?: string
  description?: string
  level: DifficultyLevel
  heroImage?: LessonHeroImage
  /** Cuerpo principal de la pestaña Estudio. */
  studyBodyPlain: string
  /** Cuerpo de la pestaña Texto original. */
  originalBodyPlain: string
  scriptures?: ScriptureReference[]
  quickFacts?: string[]
  previousLessonId?: string | null
  nextLessonId?: string | null
}

/** Módulo doctrinal con lista ordenada de ids de lección. */
export type DoctrinalModule = {
  id: string
  title: string
  description: string
  icon?: string
  heroImageUrl?: string
  lessonIds: string[]
}
