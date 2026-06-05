export type EpisodeSegmentStatus = 'pending' | 'generating' | 'done' | 'error'

export type EpisodeSegment = {
  id: string
  order: number
  speaker: string
  voiceId: string
  text: string
  charCount: number
  status: EpisodeSegmentStatus
  audioStoragePath?: string
  audioUrl?: string
  durationMs?: number
  generatedAt?: string
  errorMessage?: string
}

export type EpisodeStatus = 'draft' | 'generating' | 'ready'

export type Episode = {
  id: string
  title: string
  description: string
  rawScript: string
  segments: EpisodeSegment[]
  status: EpisodeStatus
  combinedAudioPath?: string
  combinedAudioUrl?: string
  totalCharacters: number
  createdAt: string
  updatedAt: string
}

export const EPISODE_VOICES: Record<string, { voiceId: string; label: string; desc: string }> = {
  SETH:      { voiceId: 'wjrQEr0z3BYSfZrA9Ocm', label: 'Seth',      desc: 'Masculina · profunda' },
  MIA:       { voiceId: 'jGNV8IcRZI3IzSWm7roR', label: 'Mia',       desc: 'Femenina · clara'    },
  NARRADOR:  { voiceId: 'wjrQEr0z3BYSfZrA9Ocm', label: 'Narrador',  desc: 'Masculina · profunda' },
  NARRADORA: { voiceId: 'jGNV8IcRZI3IzSWm7roR', label: 'Narradora', desc: 'Femenina · clara'    },
}

export const FALLBACK_VOICE_ID = 'wjrQEr0z3BYSfZrA9Ocm'

export type ElevenLabsSubscription = {
  characterCount: number
  characterLimit: number
  nextResetUnix: number
}
