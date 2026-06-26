export type BitacoraProjectKey = 'sgm' | 'seth' | 'pathway' | 'rest'

export type BitacoraProject = {
  key: BitacoraProjectKey
  label: string
  color: string
}

export const BITACORA_PROJECTS: Record<BitacoraProjectKey, BitacoraProject> = {
  sgm: { key: 'sgm', label: 'Seeker Gospel Music', color: '#c9a24b' },
  seth: { key: 'seth', label: 'Seth y Mia', color: '#4a7d8c' },
  pathway: { key: 'pathway', label: 'BYU Pathway', color: '#8c5a4a' },
  rest: { key: 'rest', label: 'Descanso', color: '#5a5a72' },
}

export const BITACORA_PROJECT_ORDER: BitacoraProjectKey[] = ['sgm', 'seth', 'pathway', 'rest']

/** Index = Date.getDay() (0 = domingo … 6 = sábado). */
export const BITACORA_WEEKDAY_DEFAULT: BitacoraProjectKey[] = [
  'rest', // domingo
  'sgm', // lunes
  'seth', // martes
  'sgm', // miércoles
  'seth', // jueves
  'sgm', // viernes
  'pathway', // sábado
]

export function defaultProjectForDate(date: Date): BitacoraProjectKey {
  return BITACORA_WEEKDAY_DEFAULT[date.getDay()]
}

export function projectKeyForDay(day: Pick<BitacoraDay, 'date' | 'projectOverride'> | null, date: Date): BitacoraProjectKey {
  if (day?.projectOverride) return day.projectOverride
  return defaultProjectForDate(date)
}

export type BitacoraDay = {
  date: string // "YYYY-MM-DD"
  projectOverride: BitacoraProjectKey | null
  notes: string
  done: boolean
  seconds: number
  updatedAt: string
}

export type BitacoraTask = {
  id: string
  date: string
  projectKey: BitacoraProjectKey
  text: string
  completed: boolean
  createdAt: string
}

export type BitacoraIdea = {
  id: string
  projectKey: Exclude<BitacoraProjectKey, 'rest'>
  text: string
  createdAt: string
  convertedToTaskDate: string | null
}
