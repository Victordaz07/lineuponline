import { useEffect, useState } from 'react'
import { getTaskCountsByDates, subscribeDaysByDates, subscribeRecentDays } from '@/services/bitacora.service'
import { BITACORA_PROJECTS, defaultProjectForDate, type BitacoraDay } from '@/types/bitacora'
import { addDays, formatDisplayDate, fromDateKey, toDateKey, weekdayLabel } from '@/utils/bitacoraDate'

const STREAK_DAYS = 7
const HISTORY_COUNT = 10

function StreakBar() {
  const dates = Array.from({ length: STREAK_DAYS }, (_, i) => addDays(new Date(), -(STREAK_DAYS - 1 - i)))
  const dateKeys = dates.map(toDateKey)
  const [days, setDays] = useState<Record<string, BitacoraDay>>({})

  useEffect(() => {
    const unsub = subscribeDaysByDates(dateKeys, (list) => {
      const map: Record<string, BitacoraDay> = {}
      list.forEach((d) => {
        map[d.date] = d
      })
      setDays(map)
    })
    return unsub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dateKeys.join(',')])

  return (
    <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4">
      <h3 className="mb-3 font-display text-base text-parchment">Racha — últimos 7 días</h3>
      <div className="flex justify-between gap-1">
        {dates.map((date) => {
          const key = toDateKey(date)
          const done = days[key]?.done ?? false
          return (
            <div key={key} className="flex flex-col items-center gap-1">
              <span className="font-ui text-[10px] text-parchment/35">{weekdayLabel(date)}</span>
              <span
                className={`flex h-7 w-7 items-center justify-center rounded-full font-ui text-xs ${
                  done ? 'bg-sg-gold text-navy-deep' : 'border border-sg-gold/20 text-parchment/30'
                }`}
              >
                {done ? '✓' : ''}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export function HistoryView() {
  const [recentDays, setRecentDays] = useState<BitacoraDay[]>([])
  const [counts, setCounts] = useState<Record<string, { completed: number; total: number }>>({})

  useEffect(() => {
    const unsub = subscribeRecentDays(HISTORY_COUNT, setRecentDays)
    return unsub
  }, [])

  useEffect(() => {
    void getTaskCountsByDates(recentDays.map((d) => d.date)).then(setCounts)
  }, [recentDays])

  return (
    <div className="space-y-4">
      <StreakBar />

      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-3">
        <h3 className="font-display text-base text-parchment">Últimas entradas</h3>
        {recentDays.length === 0 ? (
          <p className="font-ui text-sm text-parchment/45">Todavía no hay actividad registrada.</p>
        ) : (
          <ul className="space-y-2">
            {recentDays.map((day) => {
              const date = fromDateKey(day.date)
              const project = BITACORA_PROJECTS[day.projectOverride ?? defaultProjectForDate(date)]
              const count = counts[day.date]
              return (
                <li
                  key={day.date}
                  className="flex flex-wrap items-start gap-3 border-b border-sg-gold/10 pb-2 last:border-0 last:pb-0"
                >
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full" style={{ backgroundColor: project.color }} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-ui text-sm font-semibold text-parchment/85">
                        {formatDisplayDate(date)}
                      </span>
                      <span className="font-ui text-xs text-parchment/40">{project.label}</span>
                      {day.done ? <span className="font-ui text-xs text-sg-gold-light">✓ cumplida</span> : null}
                    </div>
                    {count ? (
                      <p className="font-ui text-xs text-parchment/45">
                        {count.completed}/{count.total} tareas completadas
                      </p>
                    ) : null}
                    {day.notes ? (
                      <p className="font-ui text-xs text-parchment/55">“{day.notes}”</p>
                    ) : null}
                  </div>
                </li>
              )
            })}
          </ul>
        )}
      </div>
    </div>
  )
}
