import { useEffect, useRef, useState } from 'react'
import { debounce } from '@/lib/debounce'
import {
  addTask,
  deleteTask,
  setDayFields,
  subscribeDay,
  subscribeTasks,
  toggleTask,
} from '@/services/bitacora.service'
import {
  BITACORA_PROJECT_ORDER,
  BITACORA_PROJECTS,
  defaultProjectForDate,
  type BitacoraDay,
  type BitacoraProjectKey,
  type BitacoraTask,
} from '@/types/bitacora'
import { formatDisplayDateLong, fromDateKey } from '@/utils/bitacoraDate'

type DayDetailProps = {
  date: string
}

function formatTimer(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60)
  const s = totalSeconds % 60
  return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
}

export function DayDetail({ date }: DayDetailProps) {
  const [day, setDay] = useState<BitacoraDay | null>(null)
  const [tasks, setTasks] = useState<BitacoraTask[]>([])
  const [newTaskText, setNewTaskText] = useState('')
  const [notesDraft, setNotesDraft] = useState('')
  const [seconds, setSeconds] = useState(0)
  const [running, setRunning] = useState(false)

  const loadedDateRef = useRef(false)
  const debouncedSaveNotes = useRef(
    debounce((d: string, notes: string) => {
      void setDayFields(d, { notes })
    }, 400),
  )

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- detiene el timer al cambiar de fecha
    setRunning(false)
    loadedDateRef.current = false
    const unsub = subscribeDay(date, (d) => {
      setDay(d)
      // Solo la primera entrega del snapshot siembra el estado local (timer/notas);
      // las siguientes vienen de nuestras propias escrituras y no deben pelear con lo que el usuario está editando.
      if (!loadedDateRef.current) {
        loadedDateRef.current = true
        setSeconds(d?.seconds ?? 0)
        setNotesDraft(d?.notes ?? '')
      }
    })
    return unsub
  }, [date])

  useEffect(() => {
    const unsub = subscribeTasks(date, setTasks)
    return unsub
  }, [date])

  useEffect(() => {
    if (!running) return
    const interval = setInterval(() => {
      setSeconds((prev) => {
        const next = prev + 1
        if (next % 5 === 0) void setDayFields(date, { seconds: next })
        return next
      })
    }, 1000)
    return () => clearInterval(interval)
  }, [running, date])

  const projectKey: BitacoraProjectKey = day?.projectOverride ?? defaultProjectForDate(fromDateKey(date))
  const completedCount = tasks.filter((t) => t.completed).length

  function handlePauseOrStart() {
    if (running) {
      setRunning(false)
      void setDayFields(date, { seconds })
    } else {
      setRunning(true)
    }
  }

  function handleReset() {
    setRunning(false)
    setSeconds(0)
    void setDayFields(date, { seconds: 0 })
  }

  function handleNotesChange(value: string) {
    setNotesDraft(value)
    debouncedSaveNotes.current(date, value)
  }

  function handleProjectChange(key: BitacoraProjectKey) {
    void setDayFields(date, { projectOverride: key })
  }

  async function handleAddTask() {
    const text = newTaskText.trim()
    if (!text) return
    setNewTaskText('')
    await addTask(date, projectKey, text)
  }

  return (
    <div className="space-y-4">
      {/* Header: fecha + proyecto */}
      <div className="space-y-2">
        <p className="font-ui text-xs text-parchment/45">{formatDisplayDateLong(fromDateKey(date))}</p>
        <div className="flex flex-wrap gap-1.5">
          {BITACORA_PROJECT_ORDER.map((key) => {
            const p = BITACORA_PROJECTS[key]
            const active = key === projectKey
            return (
              <button
                key={key}
                type="button"
                onClick={() => handleProjectChange(key)}
                className="rounded-full px-3 py-1 font-ui text-xs font-semibold transition"
                style={
                  active
                    ? { backgroundColor: p.color, color: '#0b1530' }
                    : { border: `1px solid ${p.color}55`, color: p.color }
                }
              >
                {p.label}
              </button>
            )
          })}
        </div>
      </div>

      {/* Checklist */}
      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-display text-base text-parchment">Tareas</h3>
          <span className="font-ui text-xs text-parchment/40">
            {completedCount}/{tasks.length}
          </span>
        </div>

        <ul className="space-y-1.5">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={(e) => void toggleTask(task.id, e.target.checked)}
                className="h-4 w-4 rounded border-sg-gold/30 accent-sg-gold"
              />
              <span
                className={`flex-1 font-ui text-sm ${
                  task.completed ? 'text-parchment/35 line-through' : 'text-parchment/85'
                }`}
              >
                {task.text}
              </span>
              <button
                type="button"
                onClick={() => void deleteTask(task.id)}
                className="font-ui text-xs text-parchment/30 hover:text-rose-400"
                aria-label="Eliminar tarea"
              >
                ✕
              </button>
            </li>
          ))}
          {tasks.length === 0 && (
            <li className="font-ui text-xs text-parchment/35">Sin tareas para este día todavía.</li>
          )}
        </ul>

        <form
          onSubmit={(e) => {
            e.preventDefault()
            void handleAddTask()
          }}
          className="flex gap-2"
        >
          <input
            type="text"
            value={newTaskText}
            onChange={(e) => setNewTaskText(e.target.value)}
            placeholder="Nueva tarea…"
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20 focus:ring-sg-gold/50"
          />
          <button
            type="submit"
            className="rounded-lg border border-sg-gold bg-sg-gold px-3 py-2 font-ui text-xs font-semibold text-ink transition hover:brightness-95"
          >
            Agregar
          </button>
        </form>
      </div>

      {/* Timer */}
      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-3">
        <h3 className="font-display text-base text-parchment">Timer</h3>
        <p className="font-display text-4xl text-sg-gold-light">{formatTimer(seconds)}</p>
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handlePauseOrStart}
            className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink transition hover:brightness-95"
          >
            {running ? 'Pausar' : seconds > 0 ? 'Continuar' : 'Iniciar'}
          </button>
          <button
            type="button"
            onClick={handleReset}
            className="rounded-lg border border-sg-gold/30 bg-transparent px-4 py-2 font-ui text-sm font-semibold text-parchment/70 transition hover:bg-navy-deep/60"
          >
            Reiniciar
          </button>
        </div>
      </div>

      {/* Dónde quedé */}
      <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-2">
        <h3 className="font-display text-base text-parchment">Dónde quedé / próximo paso</h3>
        <textarea
          value={notesDraft}
          onChange={(e) => handleNotesChange(e.target.value)}
          rows={3}
          placeholder="Anota dónde quedaste para retomar sin fricción…"
          className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-sm text-parchment outline-none ring-1 ring-sg-gold/20 placeholder:text-parchment/30 focus:ring-sg-gold/50"
        />
      </div>

      {/* Cierre nocturno */}
      <label className="flex cursor-pointer items-center gap-3 rounded-2xl border border-sg-gold/15 bg-navy-mid p-4">
        <input
          type="checkbox"
          checked={day?.done ?? false}
          onChange={(e) => void setDayFields(date, { done: e.target.checked })}
          className="h-5 w-5 rounded border-sg-gold/30 accent-sg-gold"
        />
        <span className="font-ui text-sm font-semibold text-parchment/85">Marcar la noche como cumplida</span>
      </label>
    </div>
  )
}
