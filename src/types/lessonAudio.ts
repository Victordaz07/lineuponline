/**
 * Audios tipo podcast que un admin adjunta manualmente a una lección
 * (archivo subido a Storage o video/URL de YouTube). Reemplaza al
 * generador automático de TTS en el encabezado de la lección.
 */

export type LessonAudioLanguage = 'es' | 'en'
export type LessonAudioLength = 'larga' | 'corta'
export type LessonAudioSourceType = 'file' | 'youtube'

/** Clave estable del slot: `${idioma}-${duración}`, ej. 'es-larga'. */
export type LessonAudioSlotKey = `${LessonAudioLanguage}-${LessonAudioLength}`

export const LESSON_AUDIO_SLOT_KEYS: LessonAudioSlotKey[] = [
  'es-larga',
  'es-corta',
  'en-larga',
  'en-corta',
]

export type LessonAudioSlot = {
  sourceType: LessonAudioSourceType
  /** URL reproducible: download URL de Storage, o URL de YouTube tal cual la pegó el admin. */
  url: string
  /** Ruta en Firebase Storage (solo si sourceType === 'file'), para poder borrarla luego. */
  storagePath?: string | null
  /** Video ID de YouTube (solo si sourceType === 'youtube'). */
  youtubeVideoId?: string | null
  label?: string | null
}

export type LessonAudioDoc = {
  lessonId: string
  slots: Partial<Record<LessonAudioSlotKey, LessonAudioSlot>>
}

/** Etiqueta legible por defecto de cada slot (se usa en el admin y como subtítulo del episodio en Música). */
export const LESSON_AUDIO_SLOT_LABELS: Record<LessonAudioSlotKey, string> = {
  'es-larga': 'Español · versión larga',
  'es-corta': 'Español · versión corta',
  'en-larga': 'English · long version',
  'en-corta': 'English · short version',
}
