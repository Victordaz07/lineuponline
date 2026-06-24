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
  SETH:      { voiceId: 'Czw3Dn181ypdrCOnPfif', label: 'Seth',      desc: 'Masculina · español' },
  MIA:       { voiceId: 'FXGrCtY3PEyfqczBAlqm', label: 'Mia',       desc: 'Femenina · español'  },
  NARRADOR:  { voiceId: 'Czw3Dn181ypdrCOnPfif', label: 'Narrador',  desc: 'Masculina · español' },
  NARRADORA: { voiceId: 'FXGrCtY3PEyfqczBAlqm', label: 'Narradora', desc: 'Femenina · español'  },
}

export const FALLBACK_VOICE_ID = 'Czw3Dn181ypdrCOnPfif'

export type ElevenLabsSubscription = {
  characterCount: number
  characterLimit: number
  nextResetUnix: number
}
