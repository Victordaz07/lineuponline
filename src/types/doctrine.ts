/**
 * Tipos globales del dominio doctrinal (lecciones, módulos, escrituras).
 * No eliminar campos sin revisar consumidores en hooks y componentes.
 */

/** Nivel de dificultad de una lección (catálogo en español). */
export type DifficultyLevel = 'BÁSICO' | 'INTERMEDIO' | 'AVANZADO'

/** Estado editorial de la lección en el catálogo. */
export type LessonStatus = 'PUBLISHED' | 'IN_CONSTRUCTION'

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
  subtitle?: string
  author?: string
  description: string
  level: DifficultyLevel
  icon?: string
  duration?: number
  order: number
  status: LessonStatus
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
  order: number
  level: DifficultyLevel
  usePurpleAccent?: boolean
  heroImageUrl?: string
  lessonIds: string[]
}
