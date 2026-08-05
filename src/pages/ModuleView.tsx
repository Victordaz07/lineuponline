import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LessonList } from '@/components/learning/LessonList'
import { SubmoduleHeroSection } from '@/components/learning/SubmoduleHeroSection'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { MediaSlot } from '@/components/doctrinal/MediaSlot'
import { ProgressBar } from '@/components/learning/ProgressBar'
import { useModule } from '@/hooks/useModule'
import { useLessonProgressStore } from '@/stores/lessonProgressStore'
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

  return (
    <div className="mx-auto max-w-3xl space-y-8">
      <header className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-4xl" aria-hidden="true">
            {module.icon ?? '📖'}
          </span>
          <div>
            {module.categoryLabel && (
              <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold">
                {module.categoryLabel}
              </p>
            )}
            <h1 className="font-display text-3xl text-parchment">{module.title}</h1>
            <p className="mt-2 max-w-prose font-display text-base text-parchment/60">{module.description}</p>
          </div>
        </div>
        {module.heroImageUrl ? (
          <MediaSlot
            src={module.heroImageUrl}
            alt={`Imagen representativa del módulo ${module.title}`}
            caption="Imagen del módulo"
          />
        ) : null}
        <ProgressBar value={progressValue} label="Tu avance en este módulo" />
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
