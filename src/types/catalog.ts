export type LessonStatus = 'PUBLISHED' | 'IN_CONSTRUCTION'

export type DifficultyLevel = 'BÁSICO' | 'INTERMEDIO' | 'AVANZADO'

export type CatalogModule = {
  id: string
  title: string
  description: string
  icon: string
  order: number
  /** Nivel predominante del módulo (badge / tono). */
  level: DifficultyLevel
  /** Módulos “La Carne del Evangelio” y “Discursos” usan acento púrpura. */
  usePurpleAccent: boolean
}

export type CatalogLesson = {
  id: string
  moduleId: string
  title: string
  subtitle?: string
  description: string
  level: DifficultyLevel
  icon: string
  duration: number
  order: number
  status: LessonStatus
  /** Ruta bajo `public/`, ej. `/lessons/la-expiacion.html` */
  htmlPath?: string
}
