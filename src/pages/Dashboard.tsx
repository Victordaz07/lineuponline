import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { ModuleGrid } from '@/components/learning/ModuleGrid'
import { RecommendedNext } from '@/components/learning/RecommendedNext'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { fetchDoctrineModules } from '@/services/doctrineService'
import type { DoctrinalModule } from '@/types/doctrine'
import { useUserProgress } from '@/hooks/useUserProgress'
import { useLessonProgressStore } from '@/stores/lessonProgressStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import { seedLessons, seedModules } from '@/data/seed-doctrine'
import { useAuth } from '@/hooks/useAuth'

export default function Dashboard() {
  const [modules, setModules] = useState<DoctrinalModule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { userId } = useAuth()
  const { completedCount, completedLessonKeys, isLessonComplete } = useUserProgress(userId)
  const visitedTopics = useLessonProgressStore((s) => s.visitedTopics)
  const completedQuizzes = useLessonProgressStore((s) => s.completedQuizzes)
  const journalEntries = useStudyJournalStore((s) => s.entries)

  const totalLessons = Object.keys(seedLessons).length
  const progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0

  useEffect(() => {
    void (async () => {
      try {
        const data = await fetchDoctrineModules()
        setModules(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error al cargar módulos')
      } finally {
        setLoading(false)
      }
    })()
  }, [])

  const nextLessonInfo = useMemo(() => {
    const allPairs = seedModules.flatMap((m) =>
      m.lessonIds.map((id) => ({ moduleId: m.id, lessonId: id, moduleTitle: m.title })),
    )
    const found =
      allPairs.find(({ moduleId, lessonId }) => !isLessonComplete(moduleId, lessonId)) ?? allPairs[0]
    if (!found) return null
    const lesson = seedLessons[found.lessonId]
    return {
      ...found,
      title: lesson?.title ?? found.lessonId,
      icon: lesson?.icon,
      duration: lesson?.duration,
      level: lesson?.level,
    }
  }, [isLessonComplete])

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Hero */}
      <section className="relative overflow-hidden rounded-2xl border border-sg-gold/15 bg-navy-mid p-6 shadow-sm sm:p-8">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(184,146,58,0.06)_0%,transparent_70%)]" />
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold">Bienvenida</p>
        <h1 className="mt-2 font-display text-3xl text-parchment sm:text-4xl">
          ¿Qué estás buscando hoy?
        </h1>
        <p className="mt-2 font-display italic text-sm text-sg-gold-light/80">
          "Seek learning, even by study and also by faith." — D&C 88:118
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { label: 'Lecciones revisadas', value: completedCount, sub: `de ${totalLessons} en total`, progress: progressPct },
            { label: 'Temas visitados', value: visitedTopics.length, sub: 'secciones abiertas', progress: null },
            { label: 'Quizzes completados', value: completedQuizzes.length, sub: 'preguntas respondidas', progress: null },
            { label: 'Notas de estudio', value: journalEntries.length, sub: 'reflexiones guardadas', progress: null },
          ].map(({ label, value, sub, progress }) => (
            <div key={label} className="rounded-xl border border-sg-gold/10 bg-navy-deep p-4">
              <p className="font-ui text-xs uppercase tracking-wide text-parchment/40">{label}</p>
              <p className="mt-1 font-display text-2xl text-sg-gold-light">{value}</p>
              {progress !== null && (
                <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-light">
                  <div className="h-full rounded-full bg-sg-gold transition-all" style={{ width: `${progress}%` }} />
                </div>
              )}
              <p className="mt-1 font-ui text-xs text-parchment/35">{sub}</p>
            </div>
          ))}
        </div>
      </section>

      {nextLessonInfo && (
        <RecommendedNext
          moduleId={nextLessonInfo.moduleId}
          lessonId={nextLessonInfo.lessonId}
          title={nextLessonInfo.title}
          moduleTitle={nextLessonInfo.moduleTitle}
          icon={nextLessonInfo.icon}
          duration={nextLessonInfo.duration}
          level={nextLessonInfo.level}
        />
      )}

      {/* Quick access */}
      <section className="rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-sm">
        <h2 className="mb-4 font-display text-xl text-parchment">Acceso rápido</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/my-notes"
            className="flex items-center gap-2 rounded-lg border border-sg-gold/25 bg-navy-deep px-4 py-2.5 font-ui text-sm font-semibold text-sg-gold-light shadow-sm transition hover:border-sg-gold/50 hover:shadow-md"
          >
            📚 Ver mis notas
          </Link>
          <a
            href="#modulos"
            className="flex items-center gap-2 rounded-lg border border-sg-gold/25 bg-navy-deep px-4 py-2.5 font-ui text-sm font-semibold text-sg-gold-light shadow-sm transition hover:border-sg-gold/50 hover:shadow-md"
          >
            🔍 Explorar módulos
          </a>
          {completedCount === 0 ? (
            <Link
              to="/lesson/doctrina-fundamental/santa-cena"
              className="flex items-center gap-2 rounded-lg bg-sg-gold px-4 py-2.5 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
            >
              🏁 Empezar desde el principio
            </Link>
          ) : (
            nextLessonInfo && (
              <Link
                to={`/module/${nextLessonInfo.moduleId}`}
                className="flex items-center gap-2 rounded-lg bg-sg-gold px-4 py-2.5 font-ui text-sm font-semibold text-ink shadow-sm transition hover:brightness-95"
              >
                📂 Módulo actual
              </Link>
            )
          )}
        </div>
      </section>

      {/* Modules */}
      <section id="modulos">
        <h2 className="mb-4 font-display text-2xl text-parchment">Módulos doctrinales</h2>
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : (
          <ModuleGrid modules={modules} completedLessonKeys={completedLessonKeys} />
        )}
      </section>
    </div>
  )
}
