import { onRequest } from 'firebase-functions/v2/https'
import { defineSecret } from 'firebase-functions/params'
import { initializeApp, getApps } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import OpenAI from 'openai'
import Anthropic from '@anthropic-ai/sdk'

if (getApps().length === 0) initializeApp()

const openaiKey = defineSecret('OPENAI_API_KEY')
const anthropicKey = defineSecret('ANTHROPIC_API_KEY')

/** Orígenes del front SPA (Hosting + desarrollo local). */
const ALLOWED_ORIGINS = [
  'https://lineuponline-a7eda.web.app',
  'https://lineuponline-a7eda.firebaseapp.com',
  'https://lineuponline-17a81.web.app',
  'http://localhost:5173',
  'http://127.0.0.1:5173',
]

export const tts = onRequest(
  {
    secrets: [openaiKey],
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }

    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    // Verify Firebase ID token — only authenticated users can use paid TTS
    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    try {
      await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }

    const { text, voice = 'nova' } = req.body as { text?: string; voice?: string }

    if (!text?.trim()) {
      res.status(400).json({ error: 'text is required' })
      return
    }

    if (text.length > 4096) {
      res.status(400).json({ error: 'text too long (max 4096 chars)' })
      return
    }

    const validVoices = ['alloy', 'echo', 'fable', 'nova', 'onyx', 'shimmer']
    const safeVoice = validVoices.includes(voice) ? voice : 'nova'

    try {
      const openai = new OpenAI({ apiKey: openaiKey.value() })
      const mp3 = await openai.audio.speech.create({
        model: 'tts-1-hd',
        voice: safeVoice as 'nova',
        input: text.slice(0, 4096),
        speed: 0.95,
      })

      const buffer = Buffer.from(await mp3.arrayBuffer())
      res.set('Content-Type', 'audio/mpeg')
      res.set('Cache-Control', 'public, max-age=86400')
      res.send(buffer)
    } catch (err) {
      console.error('TTS error:', err)
      res.status(500).json({ error: 'TTS generation failed' })
    }
  },
)

/** Scripture Quest — genera preguntas de trivia con la API de Claude. */
const SQ_MODEL = 'claude-sonnet-4-6'

const SQ_SYSTEM_PROMPT =
  'You are a scripture trivia question generator for The Church of Jesus ' +
  'Christ of Latter-day Saints. Generate questions in Spanish. Return ONLY ' +
  'a valid JSON array, no markdown, no preamble, no explanation.'

function sqUserPrompt(topicLabel: string, topicId: string, level: number): string {
  return `Generate 10 trivia questions about the topic: ${topicLabel}.
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

export const scriptureQuestQuestions = onRequest(
  {
    secrets: [anthropicKey],
    cors: ALLOWED_ORIGINS,
    invoker: 'public',
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 120,
  },
  async (req, res) => {
    if (req.method === 'OPTIONS') {
      res.status(204).send('')
      return
    }
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const authHeader = req.headers.authorization ?? ''
    if (!authHeader.startsWith('Bearer ')) {
      res.status(401).json({ error: 'Unauthorized' })
      return
    }
    try {
      await getAuth().verifyIdToken(authHeader.slice(7))
    } catch {
      res.status(401).json({ error: 'Invalid or expired token' })
      return
    }

    const { topicLabel, topicId, level } = req.body as {
      topicLabel?: string
      topicId?: string
      level?: number
    }
    if (!topicLabel?.trim() || !topicId?.trim()) {
      res.status(400).json({ error: 'topicLabel and topicId are required' })
      return
    }
    const safeLevel = [1, 2, 3, 4].includes(Number(level)) ? Number(level) : 1

    try {
      const anthropic = new Anthropic({ apiKey: anthropicKey.value() })
      const stream = anthropic.messages.stream({
        model: SQ_MODEL,
        max_tokens: 8192,
        system: SQ_SYSTEM_PROMPT,
        messages: [
          {
            role: 'user',
            content: sqUserPrompt(topicLabel.slice(0, 120), topicId.slice(0, 60), safeLevel),
          },
        ],
      })
      const message = await stream.finalMessage()
      const raw = message.content
        .filter((block): block is Anthropic.TextBlock => block.type === 'text')
        .map((block) => block.text)
        .join('')
      res.json({ raw })
    } catch (err) {
      console.error('Scripture Quest generation error:', err)
      res.status(500).json({ error: 'Question generation failed' })
    }
  },
)
