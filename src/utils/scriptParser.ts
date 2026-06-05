import type { EpisodeSegment } from '@/types/episode'
import { EPISODE_VOICES, FALLBACK_VOICE_ID } from '@/types/episode'

export function parseScript(rawScript: string): Omit<EpisodeSegment, 'status' | 'audioStoragePath' | 'audioUrl' | 'durationMs' | 'generatedAt' | 'errorMessage'>[] {
  const results: ReturnType<typeof parseScript> = []
  let currentSpeaker = ''
  let currentVoiceId = FALLBACK_VOICE_ID
  const buffer: string[] = []
  let order = 0

  function flush() {
    const text = buffer.join(' ').trim()
    if (currentSpeaker && text) {
      results.push({
        id: crypto.randomUUID(),
        order: order++,
        speaker: currentSpeaker,
        voiceId: currentVoiceId,
        text,
        charCount: text.length,
      })
    }
    buffer.length = 0
  }

  for (const raw of rawScript.split('\n')) {
    const line = raw.trim()
    if (!line) continue
    if (line.startsWith('[')) continue // stage directions

    // Match "SPEAKER: rest of line" — speaker must start with uppercase letter
    const match = line.match(/^([A-ZÁÉÍÓÚÑ][A-ZÁÉÍÓÚÑ0-9 _-]*):\s*(.*)$/)
    if (match) {
      flush()
      const speaker = match[1].trim().toUpperCase()
      currentSpeaker = speaker
      currentVoiceId = EPISODE_VOICES[speaker]?.voiceId ?? FALLBACK_VOICE_ID
      if (match[2].trim()) buffer.push(match[2].trim())
    } else if (currentSpeaker) {
      buffer.push(line)
    }
  }
  flush()
  return results
}

export function scriptCharCount(rawScript: string): number {
  return parseScript(rawScript).reduce((n, s) => n + s.charCount, 0)
}
