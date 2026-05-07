import { onRequest } from 'firebase-functions/v2/https'
import { defineSecret } from 'firebase-functions/params'
import OpenAI from 'openai'

const openaiKey = defineSecret('OPENAI_API_KEY')

export const tts = onRequest(
  {
    secrets: [openaiKey],
    cors: true,
    region: 'us-central1',
    memory: '256MiB',
    timeoutSeconds: 30,
  },
  async (req, res) => {
    if (req.method !== 'POST') {
      res.status(405).json({ error: 'Method not allowed' })
      return
    }

    const { text, voice = 'nova' } = req.body as { text?: string; voice?: string }

    if (!text?.trim()) {
      res.status(400).json({ error: 'text is required' })
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
