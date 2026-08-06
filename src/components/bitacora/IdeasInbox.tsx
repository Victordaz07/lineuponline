import { useEffect, useState } from 'react'
import { addIdea, convertIdeaToTask, deleteIdea, subscribeIdeas } from '@/services/bitacora.service'
import { BITACORA_PROJECTS, type BitacoraIdea, type BitacoraProjectKey } from '@/types/bitacora'
import { toDateKey } from '@/utils/bitacoraDate'

type IdeaProjectKey = BitacoraIdea['projectKey']
const IDEA_PROJECTS: IdeaProjectKey[] = ['sgm', 'seth', 'pathway']

type Filter = 'all' | IdeaProjectKey

function IdeaRow({ idea }: { idea: BitacoraIdea }) {
  const [convertDate, setConvertDate] = useState(() => toDateKey(new Date()))
  const [converting, setConverting] = useState(false)
  const project = BITACORA_PROJECTS[idea.projectKey]

  async function handleConvert() {
    setConverting(true)
    try {
      await convertIdeaToTask(idea, convertDate)
    } finally {
      setConverting(false)
    }
  }

  return (
    <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-3">
      <div className="flex items-start justify-between gap-2">
        <span
          className="rounded-full px-2 py-0.5 font-ui text-[10px] font-semibold uppercase tracking-widest"
          style={{ backgroundColor: `${project.color}25`, color: project.color }}
        >
          {project.label}
        </span>
        <span className="font-ui text-xs text-parchment/35">
          {new Intl.DateTimeFormat('es', { day: 'numeric', month: 'short' }).format(new Date(idea.createdAt))}
        </span>
      </div>
      <p className="font-ui text-sm text-parchment/85">{idea.text}</p>
      <div className="flex flex-wrap items-center gap-2 border-t border-sg-gold/10 pt-3">
        <input
          type="date"
          value={convertDate}
          onChange={(e) => setConvertDate(e.target.value)}
          className="rounded-lg bg-navy-deep px-2 py-1.5 font-ui text-xs text-parchment outline-none ring-1 ring-sg-gold/20"
        />
        <button
          type="button"
          onClick={() => void handleConvert()}
          disabled={converting}
          className="rounded-lg border border-sg-gold bg-sg-gold px-3 py-1.5 font-ui text-xs font-semibold text-ink transition hover:brightness-95 disabled:opacity-50"
        >
          Convertir en tarea
        </button>
        <button
          type="button"
          onClick={() => void deleteIdea(idea.id)}
          className="rounded-lg border border-sg-gold/30 px-3 py-1.5 font-ui text-xs font-semibold text-parchment/60 transition hover:bg-navy-deep/60"
        >
          Archivar
        </button>
      </div>
    </div>
  )
}

export function IdeasInbox() {
  const [ideas, setIdeas] = useState<BitacoraIdea[]>([])
  const [filter, setFilter] = useState<Filter>('all')
  const [newText, setNewText] = useState('')
  const [newProject, setNewProject] = useState<IdeaProjectKey>('sgm')

  useEffect(() => {
    const unsub = subscribeIdeas(setIdeas)
    return unsub
  }, [])

  const filtered = filter === 'all' ? ideas : ideas.filter((i) => i.projectKey === filter)

  async function handleAdd() {
    const text = newText.trim()
    if (!text) return
    setNewText('')
    await addIdea(newProject, text)
  }

  return (
    <div className="space-y-4">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          void handleAdd()
        }}
        className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-4 space-y-3"
      >
        <h3 className="font-display text-base text-parchment">Nueva idea</h3>
        <div className="flex flex-wrap gap-1.5">
          {IDEA_PROJECTS.map((key) => {
            const p = BITACORA_PROJECTS[key]
            const active = key === newProject
            return (
              <button
                key={key}
                type="button"
                onClick={() => setNewProject(key)}
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
        <div className="flex gap-2">
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            placeholder="Apunta la idea antes de perder el hilo…"
            className="w-full rounded-lg bg-navy-deep px-3 py-2 font-ui text-sm text-parchment outline-none ring-1 ring-sg-gold/20 placeholder:text-parchment/30 focus:ring-sg-gold/50"
          />
          <button
            type="submit"
            className="rounded-lg border border-sg-gold bg-sg-gold px-4 py-2 font-ui text-sm font-semibold text-ink transition hover:brightness-95"
          >
            Guardar
          </button>
        </div>
      </form>

      <div role="tablist" className="flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1">
        {(['all', ...IDEA_PROJECTS] as Filter[]).map((key) => (
          <button
            key={key}
            type="button"
            role="tab"
            aria-selected={filter === key}
            onClick={() => setFilter(key)}
            className={`flex-1 rounded-xl px-3 py-2 font-ui text-xs font-semibold transition ${
              filter === key ? 'bg-navy-light text-parchment shadow-sm' : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            {key === 'all' ? 'Todos' : BITACORA_PROJECTS[key as BitacoraProjectKey].label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-10 text-center">
          <p className="font-ui text-sm text-parchment/50">Sin ideas pendientes aquí.</p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((idea) => (
            <IdeaRow key={idea.id} idea={idea} />
          ))}
        </div>
      )}
    </div>
  )
}
