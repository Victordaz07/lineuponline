import type { ElevenLabsSubscription } from '@/types/episode'

const API_KEY = import.meta.env.VITE_ELEVENLABS_API_KEY as string | undefined
const BASE_URL = 'https://api.elevenlabs.io/v1'
const MODEL_ID = 'eleven_multilingual_v2'

const DEFAULT_VOICE_SETTINGS = {
  stability: 0.5,
  similarity_boost: 0.75,
  style: 0.3,
  use_speaker_boost: true,
}

export function isElevenLabsConfigured(): boolean {
  return Boolean(API_KEY?.trim())
}

export async function generateSpeech(text: string, voiceId: string): Promise<Blob> {
  if (!API_KEY?.trim()) throw new Error('VITE_ELEVENLABS_API_KEY no configurado')
  const res = await fetch(`${BASE_URL}/text-to-speech/${voiceId}`, {
    method: 'POST',
    headers: {
      'xi-api-key': API_KEY.trim(),
      'Content-Type': 'application/json',
      'Accept': 'audio/mpeg',
    },
    body: JSON.stringify({
      text: text.slice(0, 5000),
      model_id: MODEL_ID,
      voice_settings: DEFAULT_VOICE_SETTINGS,
    }),
  })
  if (!res.ok) {
    const msg = await res.text().catch(() => '')
    throw new Error(`ElevenLabs error ${res.status}: ${msg.slice(0, 200)}`)
  }
  return res.blob()
}

export async function fetchSubscription(): Promise<ElevenLabsSubscription> {
  if (!API_KEY?.trim()) throw new Error('VITE_ELEVENLABS_API_KEY no configurado')
  const res = await fetch(`${BASE_URL}/user/subscription`, {
    headers: { 'xi-api-key': API_KEY.trim() },
  })
  if (!res.ok) throw new Error(`ElevenLabs subscription error ${res.status}`)
  const data = await res.json() as {
    character_count: number
    character_limit: number
    next_character_count_reset_unix: number
  }
  return {
    characterCount: data.character_count,
    characterLimit: data.character_limit,
    nextResetUnix: data.next_character_count_reset_unix,
  }
}
