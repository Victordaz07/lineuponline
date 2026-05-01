import type { LessonSection, LessonTopic } from '@/types/doctrine'
import type { TtsParagraph } from '@/components/doctrinal/TextToSpeechButton'

/**
 * Cuenta temas en todas las secciones.
 */
export function countTopicsInSections(sections: LessonSection[]): number {
  return sections.reduce((n, s) => n + s.topics.length, 0)
}

/**
 * Indica si el tema incluye al menos un bloque de quiz.
 */
export function topicHasQuiz(topic: LessonTopic): boolean {
  return topic.blocks.some((b) => b.type === 'quiz')
}

/**
 * Claves de quiz esperadas en el store para un tema.
 */
export function topicQuizKeys(lessonId: string, topic: LessonTopic): string[] {
  return topic.blocks
    .filter((b) => b.type === 'quiz')
    .map((b) => `${lessonId}:${b.id}`)
}

export function allTopicQuizzesCompleted(
  lessonId: string,
  topic: LessonTopic,
  isQuizCompleted: (key: string) => boolean,
): boolean {
  const keys = topicQuizKeys(lessonId, topic)
  if (keys.length === 0) {
    return false
  }
  return keys.every((k) => isQuizCompleted(k))
}

/**
 * Párrafos de la sección activa para TTS con ids estables.
 */
export function paragraphsForSectionTts(section: LessonSection): TtsParagraph[] {
  const out: TtsParagraph[] = []
  let fallback = 0
  for (const topic of section.topics) {
    for (const block of topic.blocks) {
      if (block.type === 'paragraph') {
        const id = block.blockId ?? `${topic.id}-p-${fallback++}`
        out.push({ id, text: block.text })
      }
    }
  }
  return out
}

/**
 * Texto plano derivado de secciones (p. ej. sync con studyBodyPlain).
 */
export function sectionsToPlainStudyBody(sections: LessonSection[]): string {
  const parts: string[] = []
  for (const sec of sections) {
    if (sec.intro?.title) {
      parts.push(sec.intro.title)
    }
    if (sec.intro?.paragraphs?.length) {
      parts.push(...sec.intro.paragraphs)
    }
    for (const topic of sec.topics) {
      parts.push(topic.title)
      if (topic.subtitle) {
        parts.push(topic.subtitle)
      }
      for (const block of topic.blocks) {
        if (block.type === 'paragraph') {
          parts.push(block.text)
        }
      }
    }
  }
  return parts.join('\n\n')
}
