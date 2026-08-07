import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LessonList } from '@/components/learning/LessonList'
import { SubmoduleHeroSection } from '@/components/learning/SubmoduleHeroSection'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { MediaSlot } from '@/components/doctrinal/MediaSlot'
import { useModule } from '@/hooks/useModule'
import { useLessonProgressStore } from '@/stores/lessonProgressStore'
import { useModuleMediaStore } from '@/stores/moduleMediaStore'
import type { DifficultyLevel, Lesson } from '@/types/doctrine'
import { DIFFICULTY_LEVELS } from '@/lib/constants'

const LEVEL_LABEL: Record<DifficultyLevel, string> = {
  BÁSICO: 'Básico',
  INTERMEDIO: 'Intermedio',
  AVANZADO: 'Avanzado',
}

export default function ModuleView() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const { module, lessons, loading, error } = useModule(moduleId)
  const hasAnyVisited = useLessonProgressStore((s) => s.hasAnyVisited)
  const moduleMedia = useModuleMediaStore((s) => (moduleId ? s.media[moduleId] : undefined))
  const [levelFilter, setLevelFilter] = useState<DifficultyLevel | 'ALL'>('ALL')

  const filteredLessons = useMemo(() => {
    if (levelFilter === 'ALL') return lessons
    return lessons.filter((l) => l.level === levelFilter)
  }, [lessons, levelFilter])

  // Group by submoduleGroup preserving lesson order
  const { groupedMap, ungrouped } = useMemo(() => {
    const map = new Map<string, Lesson[]>()
    const rest: Lesson[] = []
    for (const lesson of filteredLessons) {
      if (lesson.submoduleGroup) {
        const arr = map.get(lesson.submoduleGroup) ?? []
        arr.push(lesson)
        map.set(lesson.submoduleGroup, arr)
      } else {
        rest.push(lesson)
      }
    }
    return { groupedMap: map, ungrouped: rest }
  }, [filteredLessons])

  const hasGroups = groupedMap.size > 0

  const progressValue = useMemo(() => {
    if (!module || lessons.length === 0) return 0
    const done = lessons.filter((l) => hasAnyVisited(l.id)).length
    return done / lessons.length
  }, [hasAnyVisited, lessons, module])

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error || !module) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-red-900/40 bg-red-950/40 p-6 text-center">
        <p className="font-ui text-sm text-red-400">{error ?? 'Módulo no encontrado.'}</p>
      </div>
    )
  }

  const doneCount = lessons.filter((l) => hasAnyVisited(l.id)).length

  return (
    <div className="relative mx-auto max-w-3xl space-y-8">
      <div
        aria-hidden="true"
        className="bg-pattern-fade pointer-events-none absolute inset-x-0 -top-4 h-56 opacity-60"
      />
      <header className="relative space-y-4">
        {module.categoryLabel && (
          <span className="inline-flex items-center rounded-full bg-sg-gold/15 px-3 py-1 font-ui text-[11px] font-bold uppercase tracking-[0.1em] text-sg-gold-light">
            {module.categoryLabel}
          </span>
        )}
        <div className="flex items-center gap-4">
          {moduleMedia?.iconImage ? (
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl shadow-md">
              <img src={moduleMedia.iconImage} alt="" className="h-full w-full object-cover" />
            </div>
          ) : (
            <div
              className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl text-3xl shadow-md"
              style={{ background: 'linear-gradient(160deg, rgb(var(--sg-gold-bright)), rgb(var(--sg-gold)))' }}
              aria-hidden="true"
            >
              {module.icon ?? '📖'}
            </div>
          )}
          <div className="min-w-0">
            <h1 className="font-display text-3xl font-semibold text-parchment">{module.title}</h1>
            <p className="mt-1 font-ui text-xs font-medium uppercase tracking-wide text-parchment/45">
              {lessons.length} {lessons.length === 1 ? 'lección' : 'lecciones'}
            </p>
          </div>
        </div>
        <p className="max-w-prose font-display text-base leading-relaxed text-parchment/70">{module.description}</p>
        <MediaSlot
          src={moduleMedia?.heroImage ?? module.heroImageUrl}
          alt={`Imagen representativa del módulo ${module.title}`}
          placeholderIcon={module.icon ?? '📖'}
        />
        <div className="flex items-center gap-3">
          <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-navy-light">
            <div
              className="h-full rounded-full bg-gradient-to-r from-sg-gold to-sg-gold-light transition-all"
              style={{ width: `${Math.round(progressValue * 100)}%` }}
            />
          </div>
          <span className="font-ui text-xs font-semibold text-parchment/55">{doneCount}/{lessons.length}</span>
        </div>
      </header>

      <section aria-label="Filtro por nivel">
        <p className="mb-2 font-ui text-sm font-semibold text-parchment/70">Nivel</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setLevelFilter('ALL')}
            className={`rounded-full px-3 py-1 font-ui text-xs font-semibold transition ${
              levelFilter === 'ALL' ? 'bg-sg-gold text-ink' : 'border border-sg-gold/20 bg-transparent text-parchment/60 hover:border-sg-gold/40'
            }`}
          >
            Todos
          </button>
          {DIFFICULTY_LEVELS.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevelFilter(lvl)}
              className={`rounded-full px-3 py-1 font-ui text-xs font-semibold transition ${
                levelFilter === lvl ? 'bg-sg-gold text-ink' : 'border border-sg-gold/30 bg-transparent text-parchment/60 hover:border-sg-gold/50'
              }`}
            >
              {LEVEL_LABEL[lvl]}
            </button>
          ))}
        </div>
      </section>

      <section aria-label="Lecciones del módulo">
        {hasGroups ? (
          <div className="space-y-8">
            {[...groupedMap.entries()].map(([groupKey, groupLessons]) => (
              <SubmoduleHeroSection
                key={groupKey}
                group={groupKey}
                lessons={groupLessons}
                moduleId={module.id}
                allComplete={groupLessons.every((l) => hasAnyVisited(l.id))}
              />
            ))}
            {ungrouped.length > 0 && (
              <LessonList lessons={ungrouped} moduleId={module.id} />
            )}
          </div>
        ) : (
          <>
            <h2 className="mb-4 font-display text-xl text-parchment">Lecciones</h2>
            <LessonList lessons={filteredLessons} moduleId={module.id} />
          </>
        )}
      </section>
    </div>
  )
}
