import { useEffect, useState } from 'react'
import { subscribeDaysByDates, subscribeTaskCountsByDates } from '@/services/bitacora.service'
import { BITACORA_PROJECTS, defaultProjectForDate, type BitacoraDay } from '@/types/bitacora'
import { addDays, formatDisplayDate, startOfWeek, toDateKey, weekDates, weekdayLabel } from '@/utils/bitacoraDate'
import { DayDetail } from './DayDetail'

export function WeekView() {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date()))
  const [selectedDate, setSelectedDate] = useState(() => toDateKey(new Date()))
  const [days, setDays] = useState<Record<string, BitacoraDay>>({})
  const [counts, setCounts] = useState<Record<string, { completed: number; total: number }>>({})

  const dates = weekDates(weekStart)
  const dateKeys = dates.map(toDateKey)

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
  }, [weekStart.getTime()])

  useEffect(() => {
    const unsub = subscribeTaskCountsByDates(dateKeys, setCounts)
    return unsub
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [weekStart.getTime()])

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button
          type="button"
          onClick={() => setWeekStart((w) => addDays(w, -7))}
          className="rounded-lg border border-sg-gold/30 px-3 py-1.5 font-ui text-xs font-semibold text-parchment/70 transition hover:bg-navy-deep/60"
        >
          ‹ Semana anterior
        </button>
        <p className="font-ui text-xs text-parchment/45">
          {formatDisplayDate(dates[0])} – {formatDisplayDate(dates[6])}
        </p>
        <button
          type="button"
          onClick={() => setWeekStart((w) => addDays(w, 7))}
          className="rounded-lg border border-sg-gold/30 px-3 py-1.5 font-ui text-xs font-semibold text-parchment/70 transition hover:bg-navy-deep/60"
        >
          Semana siguiente ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1.5">
        {dates.map((date) => {
          const key = toDateKey(date)
          const day = days[key]
          const projectKey = day?.projectOverride ?? defaultProjectForDate(date)
          const project = BITACORA_PROJECTS[projectKey]
          const count = counts[key]
          const selected = key === selectedDate
          return (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedDate(key)}
              className={`flex flex-col items-center gap-1 rounded-xl border p-2 transition ${
                selected ? 'border-sg-gold bg-navy-light' : 'border-sg-gold/10 bg-navy-mid hover:border-sg-gold/30'
              }`}
            >
              <span className="font-ui text-[10px] uppercase tracking-wide text-parchment/40">
                {weekdayLabel(date)}
              </span>
              <span className="font-ui text-xs text-parchment/70">{formatDisplayDate(date)}</span>
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: project.color }}
                aria-hidden="true"
              />
              {count ? (
                <span className="font-ui text-[10px] text-parchment/40">
                  {count.completed}/{count.total}
                </span>
              ) : null}
              {day?.done ? <span className="text-[10px]">✓</span> : null}
            </button>
          )
        })}
      </div>

      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid/40 p-4">
        <DayDetail date={selectedDate} />
      </div>
    </div>
  )
}
