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

// --- Contenido rico (bloques) — definido antes de `Lesson` por orden de tipos. ---

/** Introducción visual de una sección (número romano, título breve). */
export type LessonIntro = {
  romanNumeral?: string
  title: string
  /** Párrafos breves de contexto. */
  paragraphs?: string[]
}

/** Pregunta de quiz: verdadero/falso. */
export type QuizTrueFalse = {
  kind: 'true_false'
  statement: string
  correctAnswer: boolean
  explanation?: string
}

/** Completar con una palabra o elegir la opción correcta (opciones cortas). */
export type QuizFillBlank = {
  kind: 'fill_blank'
  prompt: string
  options: string[]
  correctIndex: number
  explanation?: string
}

/** Ordenar elementos arrastrando o con botones arriba/abajo. */
export type QuizSortItems = {
  kind: 'sort_items'
  items: string[]
  /** Índices de `items` en el orden correcto (0-based). */
  correctOrder: number[]
  explanation?: string
}

export type QuizQuestion = QuizTrueFalse | QuizFillBlank | QuizSortItems

export type ParagraphBlock = {
  type: 'paragraph'
  text: string
  /** Clave estable para TTS / progreso (opcional). */
  blockId?: string
}

export type LeaderQuoteBlock = {
  type: 'leader_quote'
  quote: string
  name: string
  role?: string
}

export type DoctrineBoxBlock = {
  type: 'doctrine_box'
  title: string
  body: string
  icon?: string
}

export type KeyPointsBlock = {
  type: 'key_points'
  title?: string
  points: string[]
}

export type StepsBlock = {
  type: 'steps'
  title?: string
  steps: string[]
}

export type HighlightVerseBlock = {
  type: 'highlight_verse'
  reference: string
  text: string
}

export type CentralQuoteBlock = {
  type: 'central_quote'
  text: string
  attribution?: string
}

export type ReflectionBlock = {
  type: 'reflection'
  prompt: string
}

export type MediaKind = 'image' | 'video'

/** Tarjeta tipográfica cuando no hay recurso multimedia. */
export type MediaContextCard = {
  year?: string
  place?: string
  label?: string
}

export type MediaSlotBlock = {
  type: 'media_slot'
  kind: MediaKind
  src?: string
  alt?: string
  caption?: string
  contextCard?: MediaContextCard
}

export type QuizBlock = {
  type: 'quiz'
  id: string
  question: QuizQuestion
}

export type NotePromptItem = {
  id: string
  question: string
}

export type NotePromptsBlock = {
  type: 'note_prompts'
  prompts: NotePromptItem[]
}

export type LessonBlock =
  | ParagraphBlock
  | LeaderQuoteBlock
  | DoctrineBoxBlock
  | KeyPointsBlock
  | StepsBlock
  | HighlightVerseBlock
  | CentralQuoteBlock
  | ReflectionBlock
  | MediaSlotBlock
  | QuizBlock
  | NotePromptsBlock

/** Un tema expandible dentro de una sección. */
export type LessonTopic = {
  id: string
  title: string
  subtitle?: string
  blocks: LessonBlock[]
}

/** Sección mayor (tab en navegación sticky). */
export type LessonSection = {
  id: string
  title: string
  intro?: LessonIntro
  topics: LessonTopic[]
}

/**
 * Lección doctrinal: contenido de estudio y texto original en texto plano
 * (párrafos separados por líneas en blanco), opcionalmente con bloques ricos.
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
  /** Cuerpo principal de la pestaña Estudio (fallback si no hay studySections). */
  studyBodyPlain: string
  /** Cuerpo de la pestaña Texto original. */
  originalBodyPlain: string
  /** Contenido rico por secciones (alternativa a solo texto plano en Estudio). */
  studySections?: LessonSection[]
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
