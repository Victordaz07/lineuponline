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

const DEMO_USER = 'demo-user'

export default function Dashboard() {
  const [modules, setModules] = useState<DoctrinalModule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { completedCount, completedLessonKeys, isLessonComplete } = useUserProgress(DEMO_USER)
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
      <section className="rounded-2xl border border-gold-main/20 bg-gradient-to-br from-white to-bg-elevated p-6 shadow-sm sm:p-8">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-gold-main">Bienvenida</p>
        <h1 className="mt-2 font-title text-3xl text-blue-accent sm:text-4xl">Continúa línea sobre línea</h1>
        <p className="mt-3 max-w-2xl font-reading text-base text-text-main">
          Estudia doctrina con claridad. Sin distracciones.
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          <div className="rounded-xl border border-blue-accent/10 bg-white/90 p-4">
            <p className="font-ui text-xs uppercase text-text-muted">Lecciones revisadas</p>
            <p className="mt-1 font-title text-2xl text-blue-accent">{completedCount}</p>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-bg-elevated">
              <div
                className="h-full rounded-full bg-blue-accent transition-all"
                style={{ width: `${progressPct}%` }}
              />
            </div>
            <p className="mt-1 font-ui text-xs text-text-muted">de {totalLessons} en total</p>
          </div>
          <div className="rounded-xl border border-blue-accent/10 bg-white/90 p-4">
            <p className="font-ui text-xs uppercase text-text-muted">Temas visitados</p>
            <p className="mt-1 font-title text-2xl text-blue-accent">{visitedTopics.length}</p>
            <p className="mt-1 font-ui text-xs text-text-muted">secciones abiertas</p>
          </div>
          <div className="rounded-xl border border-blue-accent/10 bg-white/90 p-4">
            <p className="font-ui text-xs uppercase text-text-muted">Quizzes completados</p>
            <p className="mt-1 font-title text-2xl text-blue-accent">{completedQuizzes.length}</p>
            <p className="mt-1 font-ui text-xs text-text-muted">preguntas respondidas</p>
          </div>
          <div className="rounded-xl border border-blue-accent/10 bg-white/90 p-4">
            <p className="font-ui text-xs uppercase text-text-muted">Notas de estudio</p>
            <p className="mt-1 font-title text-2xl text-blue-accent">{journalEntries.length}</p>
            <p className="mt-1 font-ui text-xs text-text-muted">reflexiones guardadas</p>
          </div>
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

      <section className="rounded-2xl border border-gold-main/20 bg-gradient-to-br from-white to-bg-elevated p-5 shadow-sm">
        <h2 className="mb-4 font-title text-xl text-blue-accent">Acceso rápido</h2>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/my-notes"
            className="flex items-center gap-2 rounded-lg border border-blue-accent/20 bg-white px-4 py-2.5 font-ui text-sm font-semibold text-blue-accent shadow-sm transition hover:border-blue-accent/50 hover:shadow-md"
          >
            📚 Ver mis notas
          </Link>
          <a
            href="#modulos"
            className="flex items-center gap-2 rounded-lg border border-blue-accent/20 bg-white px-4 py-2.5 font-ui text-sm font-semibold text-blue-accent shadow-sm transition hover:border-blue-accent/50 hover:shadow-md"
          >
            🔍 Explorar módulos
          </a>
          {completedCount === 0 ? (
            <Link
              to="/lesson/doctrina-fundamental/santa-cena"
              className="flex items-center gap-2 rounded-lg bg-gold-main px-4 py-2.5 font-ui text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
            >
              🏁 Empezar desde el principio
            </Link>
          ) : (
            nextLessonInfo && (
              <Link
                to={`/module/${nextLessonInfo.moduleId}`}
                className="flex items-center gap-2 rounded-lg bg-gold-main px-4 py-2.5 font-ui text-sm font-semibold text-white shadow-sm transition hover:brightness-95"
              >
                📂 Módulo actual
              </Link>
            )
          )}
        </div>
      </section>

      <section id="modulos">
        <h2 className="mb-4 font-title text-2xl text-blue-accent">Módulos doctrinales</h2>
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <ModuleGrid modules={modules} completedLessonKeys={completedLessonKeys} />
        )}
      </section>
    </div>
  )
}
