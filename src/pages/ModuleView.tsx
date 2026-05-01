import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { LessonList } from '@/components/learning/LessonList'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { MediaSlot } from '@/components/doctrinal/MediaSlot'
import { ProgressBar } from '@/components/learning/ProgressBar'
import { useModule } from '@/hooks/useModule'
import { useUserProgress } from '@/hooks/useUserProgress'
import type { DifficultyLevel } from '@/types/doctrine'

const DEMO_USER = 'demo-user'

const levels: DifficultyLevel[] = ['BASIC', 'INTERMEDIATE', 'ADVANCED']

/**
 * Vista de un módulo con lista de lecciones y filtro por nivel.
 *
 * @returns Página de módulo
 */
export default function ModuleView() {
  const { moduleId } = useParams<{ moduleId: string }>()
  const { module, lessons, loading, error } = useModule(moduleId)
  const { completedLessonKeys } = useUserProgress(DEMO_USER)
  const [levelFilter, setLevelFilter] = useState<DifficultyLevel | 'ALL'>('ALL')

  const filteredLessons = useMemo(() => {
    if (levelFilter === 'ALL') {
      return lessons
    }
    return lessons.filter((l) => l.level === levelFilter)
  }, [lessons, levelFilter])

  const progressValue = useMemo(() => {
    if (!module || lessons.length === 0) {
      return 0
    }
    const done = lessons.filter((l) =>
      completedLessonKeys.includes(`${module.id}:${l.id}`),
    ).length
    return done / lessons.length
  }, [completedLessonKeys, lessons, module])

  if (loading) {
    return (
      <div className="flex min-h-[40vh] items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error || !module) {
    return (
      <div className="mx-auto max-w-lg rounded-2xl border border-red-200 bg-red-50 p-6 text-center">
        <p className="font-ui text-sm text-red-800">{error ?? 'Módulo no encontrado.'}</p>
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
            <h1 className="font-title text-3xl text-blue-accent">{module.title}</h1>
            <p className="mt-2 max-w-prose text-reading text-base text-text-muted">{module.description}</p>
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
        <p className="mb-2 font-ui text-sm font-semibold text-text-main">Nivel</p>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setLevelFilter('ALL')}
            className={`rounded-full px-3 py-1 font-ui text-xs font-semibold ${
              levelFilter === 'ALL' ? 'bg-blue-accent text-white' : 'border border-blue-accent/20 bg-white text-blue-accent'
            }`}
          >
            Todos
          </button>
          {levels.map((lvl) => (
            <button
              key={lvl}
              type="button"
              onClick={() => setLevelFilter(lvl)}
              className={`rounded-full px-3 py-1 font-ui text-xs font-semibold ${
                levelFilter === lvl ? 'bg-gold-main text-white' : 'border border-gold-main/30 bg-white text-blue-accent'
              }`}
            >
              {lvl === 'BASIC' ? 'Básico' : lvl === 'INTERMEDIATE' ? 'Intermedio' : 'Avanzado'}
            </button>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-title text-xl text-blue-accent">Lecciones</h2>
        <LessonList lessons={filteredLessons} moduleId={module.id} />
      </section>
    </div>
  )
}
