export type MusicIdentity = {
  genre: string
  instruments: string[]
  colorPalette: string[]
  signatureSound: string
}

export type Character = {
  id: string
  name: string // Interno, NUNCA mostrar en UI pública
  book: string
  people: string
  season: number
  musicIdentity: MusicIdentity
}

export type AssetStatus = 'PENDING' | 'GENERATING' | 'READY' | 'FAILED'
export type YoutubeStatus = 'NOT_UPLOADED' | 'UPLOADING' | 'PUBLISHED' | 'FAILED'
export type TrackStatus = 'DRAFT' | 'IN_REVIEW' | 'PUBLISHED' | 'ARCHIVED'

export type CovenantCheck = {
  historiaRespetaEscrituras: boolean
  historiaRepresentaPersonaje: boolean
  historiaInvitaAConocerMas: boolean
  musicaIdentidadPropia: boolean
  musicaSuenaProfesional: boolean
  musicaResisteElTiempo: boolean
  letrasDespiertanCuriosidad: boolean
  letrasRespetanTonoSagrado: boolean
  letrasEvitanCliches: boolean
  arteCuentaHistoria: boolean
  arteTieneSimbolos: boolean
  arteReconocibleComoSGM: boolean
  preguntaFinalHonraLegado: boolean
  revisadoPor: string
  fechaRevision: string | null
}

export const COVENANT_GATE_KEYS = [
  'historiaRespetaEscrituras',
  'historiaRepresentaPersonaje',
  'historiaInvitaAConocerMas',
  'musicaIdentidadPropia',
  'musicaSuenaProfesional',
  'musicaResisteElTiempo',
  'letrasDespiertanCuriosidad',
  'letrasRespetanTonoSagrado',
  'letrasEvitanCliches',
  'arteCuentaHistoria',
  'arteTieneSimbolos',
  'arteReconocibleComoSGM',
  'preguntaFinalHonraLegado',
] as const satisfies readonly (keyof CovenantCheck)[]

export const EMPTY_COVENANT_CHECK: CovenantCheck = {
  historiaRespetaEscrituras: false,
  historiaRepresentaPersonaje: false,
  historiaInvitaAConocerMas: false,
  musicaIdentidadPropia: false,
  musicaSuenaProfesional: false,
  musicaResisteElTiempo: false,
  letrasDespiertanCuriosidad: false,
  letrasRespetanTonoSagrado: false,
  letrasEvitanCliches: false,
  arteCuentaHistoria: false,
  arteTieneSimbolos: false,
  arteReconocibleComoSGM: false,
  preguntaFinalHonraLegado: false,
  revisadoPor: '',
  fechaRevision: null,
}

export type HumanAuthorshipLog = {
  lyricsHumanEditPercent: number
  creativeDirectionNotes: string
  reviewedBy: string
}

export const EMPTY_HUMAN_AUTHORSHIP_LOG: HumanAuthorshipLog = {
  lyricsHumanEditPercent: 0,
  creativeDirectionNotes: '',
  reviewedBy: '',
}

export type Track = {
  id: string
  characterId: string
  season: number
  title: string // SIEMPRE referencia escritural, nunca el nombre del personaje
  scriptureRef: string
  genre: string
  bpm: number | null
  lyrics: string
  lyricsApproved: boolean

  audioStatus: AssetStatus
  audioProviderJobId: string | null
  audioUrl: string | null
  coverStatus: AssetStatus
  coverUrl: string | null

  youtubeStatus: YoutubeStatus
  youtubeVideoId: string | null
  syntheticContentDisclosed: boolean

  covenantCheck: CovenantCheck
  humanAuthorshipLog: HumanAuthorshipLog

  status: TrackStatus
  createdAt: string
  updatedAt: string
}
