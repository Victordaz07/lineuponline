import { useMemo, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAdmin } from '@/hooks/useAdmin'
import { useAuth } from '@/hooks/useAuth'
import { GroupImageCard } from '@/components/admin/moduleImages/GroupImageCard'
import { LessonImageRow } from '@/components/admin/moduleImages/LessonImageRow'
import { SUBMODULE_GROUPS, seedLessons, seedModules } from '@/data/seed-doctrine'
import { useModuleMediaStore } from '@/stores/moduleMediaStore'
import { useLessonMediaStore } from '@/stores/lessonMediaStore'

type TabId = 'groups' | 'lessons'

function GroupsTab() {
  const [query, setQuery] = useState('')
  const media = useModuleMediaStore((s) => s.media)

  const groups = useMemo(() => {
    const entries = Object.entries(SUBMODULE_GROUPS)
    const q = query.trim().toLowerCase()
    const filtered = q
      ? entries.filter(([id, meta]) => meta.title.toLowerCase().includes(q) || id.toLowerCase().includes(q))
      : entries
    return filtered.sort(([, a], [, b]) => a.title.localeCompare(b.title))
  }, [query])

  const uploadedCount = groups.filter(([id]) => media[id]?.heroImage).length

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between gap-3">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar personaje o tema…"
          className="w-full max-w-xs rounded-xl border border-sg-gold/20 bg-navy-deep px-3.5 py-2 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
        />
        <p className="shrink-0 font-ui text-xs text-parchment/45">
          {uploadedCount}/{groups.length} con hero subido
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {groups.map(([groupId, meta]) => (
          <GroupImageCard key={groupId} groupId={groupId} meta={meta} media={media[groupId]} />
        ))}
      </div>
    </div>
  )
}

function LessonsTab() {
  const [moduleId, setModuleId] = useState('')
  const [query, setQuery] = useState('')
  const media = useLessonMediaStore((s) => s.media)

  const lessons = useMemo(() => {
    if (!moduleId) return []
    const all = Object.values(seedLessons).filter((l) => l.moduleId === moduleId)
    const q = query.trim().toLowerCase()
    const filtered = q ? all.filter((l) => l.title.toLowerCase().includes(q)) : all
    return filtered.sort((a, b) => a.title.localeCompare(b.title))
  }, [moduleId, query])

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap items-center gap-3">
        <select
          value={moduleId}
          onChange={(e) => setModuleId(e.target.value)}
          className="rounded-xl border border-sg-gold/20 bg-navy-deep px-3.5 py-2 font-ui text-sm text-parchment focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
        >
          <option value="">Elige un módulo…</option>
          {seedModules.map((m) => (
            <option key={m.id} value={m.id}>{m.title}</option>
          ))}
        </select>
        {moduleId ? (
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar lección…"
            className="min-w-0 flex-1 rounded-xl border border-sg-gold/20 bg-navy-deep px-3.5 py-2 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
          />
        ) : null}
      </div>
      {!moduleId ? (
        <p className="rounded-2xl border border-dashed border-sg-gold/20 p-8 text-center font-ui text-sm text-parchment/40">
          Elige un módulo arriba para ver sus lecciones.
        </p>
      ) : lessons.length === 0 ? (
        <p className="rounded-2xl border border-dashed border-sg-gold/20 p-8 text-center font-ui text-sm text-parchment/40">
          Sin lecciones para esa búsqueda.
        </p>
      ) : (
        <div className="space-y-2">
          {lessons.map((lesson) => (
            <LessonImageRow key={lesson.id} lesson={lesson} media={media[lesson.id]} />
          ))}
        </div>
      )}
    </div>
  )
}

export default function ModuleImagesAdminPage() {
  const { user, authLoading } = useAuth()
  const { isAdmin } = useAdmin()
  const [tab, setTab] = useState<TabId>('groups')

  if (authLoading) return null
  if (!user || !isAdmin) return <Navigate to="/" replace />

  const tabs: { id: TabId; label: string }[] = [
    { id: 'groups', label: 'Personajes y temas' },
    { id: 'lessons', label: 'Lecciones' },
  ]

  return (
    <div className="mx-auto max-w-4xl space-y-6 pb-12">
      <header className="space-y-1">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Panel de administración
        </p>
        <h1 className="font-display text-3xl text-parchment">Imágenes del catálogo</h1>
        <p className="font-ui text-sm text-parchment/55">
          Sube el arte real de cada personaje/tema y lección. Mientras no subas nada, la app muestra un
          placeholder con degradado — todo queda listo para recibir las imágenes en cuanto las tengas.
        </p>
      </header>

      <div role="tablist" className="flex gap-1 rounded-2xl border border-sg-gold/15 bg-navy-mid p-1">
        {tabs.map(({ id, label }) => (
          <button
            key={id}
            type="button"
            role="tab"
            aria-selected={tab === id}
            onClick={() => setTab(id)}
            className={`flex-1 rounded-xl px-3 py-2 font-ui text-xs font-semibold transition ${
              tab === id
                ? 'bg-navy-light text-parchment shadow-sm'
                : 'text-parchment/40 hover:text-parchment/70'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {tab === 'groups' ? <GroupsTab /> : <LessonsTab />}
    </div>
  )
}
