/**
 * Question generation via the Claude API.
 *
 * Preferred path: the `scriptureQuestQuestions` Firebase Function (the API key
 * stays server-side, requests are authenticated with the Firebase ID token).
 * Dev fallback: direct browser call with VITE_ANTHROPIC_API_KEY.
 */
import { z } from 'zod'
import { getFirebaseAuth } from '@/lib/firebase'
import type { Question, QuestLevel } from '../types'

export const QUESTIONS_PER_GAME = 10

/** Drop-in replacement for the originally requested claude-sonnet-4-20250514 (retires 2026-06-15). */
export const QUESTION_MODEL = 'claude-sonnet-4-6'

export const SYSTEM_PROMPT =
  'You are a scripture trivia question generator for The Church of Jesus ' +
  'Christ of Latter-day Saints. Generate questions in Spanish. Return ONLY ' +
  'a valid JSON array, no markdown, no preamble, no explanation.'

export function buildUserPrompt(topicLabel: string, topicId: string, level: QuestLevel): string {
  return `Generate ${QUESTIONS_PER_GAME} trivia questions about the topic: ${topicLabel}.
Difficulty level: ${level} out of 4.
Level 1 = basic recognition (names, simple facts).
Level 2 = comprehension (context, sequence, relationships).
Level 3 = application (scripture references, doctrinal connections).
Level 4 = deep analysis (nuanced doctrine, cross-scripture synthesis).
Sources: Bible, Book of Mormon, Doctrine and Covenants, Pearl of Great Price.
Distribute the questions naturally across these categories within the topic:
personajes, lugares, eventos, doctrina, escrituras, cronologia, simbolos, restauracion.
Each question must follow this exact JSON structure:
{
  "id": string,
  "question": string,
  "options": { "A": string, "B": string, "C": string, "D": string },
  "correctAnswer": "A" | "B" | "C" | "D",
  "explanation": string (1-2 sentences with scripture reference),
  "topic": "${topicId}",
  "level": ${level},
  "points": number (10 for level 1, 20 for level 2, 35 for level 3, 50 for level 4),
  "category": "personajes" | "lugares" | "eventos" | "doctrina" | "escrituras" | "cronologia" | "simbolos" | "restauracion"
}`
}

const questionSchema = z.object({
  // Missing/empty ids are tolerated — parseQuestionsResponse fills them in
  id: z.string().optional().default(''),
  question: z.string().min(1),
  options: z.object({
    A: z.string().min(1),
    B: z.string().min(1),
    C: z.string().min(1),
    D: z.string().min(1),
  }),
  correctAnswer: z.enum(['A', 'B', 'C', 'D']),
  explanation: z.string(),
  topic: z.string(),
  level: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  points: z.number(),
  category: z
    .enum([
      'personajes',
      'lugares',
      'eventos',
      'doctrina',
      'escrituras',
      'cronologia',
      'simbolos',
      'restauracion',
    ])
    .catch('doctrina'),
})

/** Parses the raw model output (tolerating stray markdown fences) into validated questions. */
export function parseQuestionsResponse(raw: string, topicId: string, level: QuestLevel): Question[] {
  let text = raw.trim()
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/)
  if (fenced) text = fenced[1].trim()
  const start = text.indexOf('[')
  const end = text.lastIndexOf(']')
  if (start === -1 || end === -1 || end <= start) {
    throw new Error('La respuesta del generador no contiene un arreglo JSON válido.')
  }
  const parsed: unknown = JSON.parse(text.slice(start, end + 1))
  const result = z.array(questionSchema).min(1).safeParse(parsed)
  if (!result.success) {
    throw new Error('Las preguntas generadas no tienen el formato esperado.')
  }
  return result.data.map((q, i) => ({
    ...q,
    id: q.id || `${topicId}-${level}-${i + 1}`,
    topic: topicId,
    level,
  }))
}

function functionUrl(): string | null {
  const url = import.meta.env.VITE_SQ_FUNCTION_URL
  return typeof url === 'string' && url.trim() !== '' ? url.trim() : null
}

async function generateViaFunction(
  url: string,
  topicLabel: string,
  topicId: string,
  level: QuestLevel,
): Promise<Question[]> {
  const user = getFirebaseAuth().currentUser
  if (!user) throw new Error('Debes iniciar sesión para generar preguntas.')
  const token = await user.getIdToken()
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ topicLabel, topicId, level }),
  })
  if (!res.ok) {
    throw new Error(`No se pudieron generar las preguntas (HTTP ${res.status}).`)
  }
  const data = (await res.json()) as { raw?: string }
  if (typeof data.raw !== 'string') {
    throw new Error('Respuesta inesperada del servidor de preguntas.')
  }
  return parseQuestionsResponse(data.raw, topicId, level)
}

/** Dev-only fallback: calls the Claude API directly from the browser. */
async function generateViaBrowser(
  apiKey: string,
  topicLabel: string,
  topicId: string,
  level: QuestLevel,
): Promise<Question[]> {
  const { default: Anthropic } = await import('@anthropic-ai/sdk')
  const client = new Anthropic({ apiKey, dangerouslyAllowBrowser: true })
  const response = await client.messages.create({
    model: QUESTION_MODEL,
    max_tokens: 8192,
    system: SYSTEM_PROMPT,
    messages: [{ role: 'user', content: buildUserPrompt(topicLabel, topicId, level) }],
  })
  const raw = response.content
    .filter((block): block is Extract<typeof block, { type: 'text' }> => block.type === 'text')
    .map((block) => block.text)
    .join('')
  return parseQuestionsResponse(raw, topicId, level)
}

export async function generateQuestions(
  topicLabel: string,
  topicId: string,
  level: QuestLevel,
): Promise<Question[]> {
  const url = functionUrl()
  if (url) {
    return generateViaFunction(url, topicLabel, topicId, level)
  }
  const browserKey = import.meta.env.VITE_ANTHROPIC_API_KEY
  if (typeof browserKey === 'string' && browserKey.trim() !== '') {
    return generateViaBrowser(browserKey.trim(), topicLabel, topicId, level)
  }
  throw new Error(
    'Generador no configurado: defina VITE_SQ_FUNCTION_URL (recomendado) o VITE_ANTHROPIC_API_KEY.',
  )
}
