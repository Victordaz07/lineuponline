/** Helpers de fecha para la Bitácora-Planner. Todo en horario local del navegador. */

export function toDateKey(date: Date): string {
  const y = date.getFullYear()
  const m = String(date.getMonth() + 1).padStart(2, '0')
  const d = String(date.getDate()).padStart(2, '0')
  return `${y}-${m}-${d}`
}

export function fromDateKey(key: string): Date {
  const [y, m, d] = key.split('-').map(Number)
  return new Date(y, m - 1, d)
}

export function addDays(date: Date, days: number): Date {
  const next = new Date(date)
  next.setDate(next.getDate() + days)
  return next
}

/** Domingo de la semana que contiene `date`. */
export function startOfWeek(date: Date): Date {
  return addDays(date, -date.getDay())
}

export function weekDates(weekStart: Date): Date[] {
  return Array.from({ length: 7 }, (_, i) => addDays(weekStart, i))
}

export function isSameDay(a: Date, b: Date): boolean {
  return toDateKey(a) === toDateKey(b)
}

const WEEKDAY_LABELS = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']

export function weekdayLabel(date: Date): string {
  return WEEKDAY_LABELS[date.getDay()]
}

export function formatDisplayDate(date: Date): string {
  return new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short' }).format(date)
}

export function formatDisplayDateLong(date: Date): string {
  return new Intl.DateTimeFormat('es', { weekday: 'long', day: 'numeric', month: 'long' }).format(date)
}
