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
import { useStreakStore } from '@/stores/streakStore'

export default function Dashboard() {
  const [modules, setModules] = useState<DoctrinalModule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const { userId, user } = useAuth()
  const { completedCount, completedLessonKeys, isLessonComplete } = useUserProgress(userId)

  const greeting = useMemo(() => {
    const h = new Date().getHours()
    if (h < 12) return 'Buenos días'
    if (h < 19) return 'Buenas tardes'
    return 'Buenas noches'
  }, [])
  const displayName =
    user?.displayName?.split(' ')[0] ?? user?.email?.split('@')[0] ?? 'Bienvenido'
  const initial =
    user?.displayName?.[0]?.toUpperCase() ?? user?.email?.[0]?.toUpperCase() ?? '✦'
  const streak = useStreakStore((s) => s.currentStreak)
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

  const stats = [
    { label: 'Lecciones revisadas', value: completedCount, sub: `de ${totalLessons} en total`, progress: progressPct, color: 'text-sg-gold-light' as const },
    { label: 'Temas visitados', value: visitedTopics.length, sub: 'secciones abiertas', progress: null, color: 'text-info' as const },
    { label: 'Quizzes completados', value: completedQuizzes.length, sub: 'preguntas respondidas', progress: null, color: 'text-jade' as const },
    { label: 'Notas de estudio', value: journalEntries.length, sub: 'reflexiones guardadas', progress: null, color: 'text-terracotta' as const },
  ]

  return (
    <div className="relative mx-auto max-w-6xl space-y-8">
      {/* Textura de fondo detrás del hero, desvaneciéndose hacia abajo */}
      <div
        aria-hidden="true"
        className="bg-pattern-fade pointer-events-none absolute inset-x-0 -top-4 h-72 opacity-70"
      />

      {/* Saludo */}
      <header className="relative flex items-center justify-between">
        <div>
          <p className="font-ui text-[11px] font-bold uppercase tracking-[0.16em] text-sg-gold">{greeting}</p>
          <p className="mt-0.5 font-display text-2xl font-semibold text-parchment">{displayName}</p>
        </div>
        <div className="flex items-center gap-2.5">
          {streak > 0 && (
            <div
              className="flex items-center gap-1.5 rounded-full border border-terracotta/40 bg-terracotta/15 px-3 py-1.5"
              title={`Racha de estudio: ${streak} ${streak === 1 ? 'día' : 'días'}`}
            >
              <span className="text-sm" style={{ animation: 'flamePulse 1.6s ease-in-out infinite' }} aria-hidden="true">🔥</span>
              <span className="font-ui text-xs font-extrabold text-terracotta">{streak}</span>
            </div>
          )}
          <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full bg-sg-gold font-ui text-lg font-extrabold text-ink shadow-md ring-2 ring-sg-gold/30">
            {user?.photoURL ? (
              <img src={user.photoURL} alt={displayName} className="h-full w-full object-cover" referrerPolicy="no-referrer" />
            ) : (
              initial
            )}
          </div>
        </div>
      </header>

      {/* Hero */}
      <section
        className="relative overflow-hidden rounded-[20px] border border-sg-gold/20 p-6 shadow-card sm:p-8"
        style={{ background: 'linear-gradient(160deg, rgb(var(--navy-mid)), rgb(var(--navy-deep)))' }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_75%_35%,rgb(var(--sg-gold)/0.10)_0%,transparent_70%)]" />
        <div className="relative">
          <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold">Bienvenida</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-parchment sm:text-4xl">
            ¿Qué estás buscando hoy?
          </h1>
          <p className="mt-2 font-display text-sm italic text-sg-gold-light/85">
            "Busca aprendizaje, aun por el estudio y también por la fe." — D. y C. 88:118
          </p>
          <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map(({ label, value, sub, progress, color }) => (
              <div key={label} className="rounded-[14px] border border-sg-gold/12 bg-navy-deep/70 p-4">
                <p className="font-ui text-[11px] uppercase tracking-wide text-parchment/45">{label}</p>
                <p className={`mt-1 font-display text-2xl font-semibold ${color}`}>{value}</p>
                {progress !== null && (
                  <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-navy-light">
                    <div className="h-full rounded-full bg-sg-gold transition-all" style={{ width: `${progress}%` }} />
                  </div>
                )}
                <p className="mt-1 font-ui text-xs text-parchment/40">{sub}</p>
              </div>
            ))}
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

      {/* Acceso rápido — píldoras tintadas por categoría */}
      <section className="flex flex-wrap gap-2.5">
        <Link
          to="/my-notes"
          className="flex items-center gap-2 rounded-full border border-sg-gold/30 bg-sg-gold/10 px-4 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/20"
        >
          📚 Mis notas
        </Link>
        <a
          href="#modulos"
          className="flex items-center gap-2 rounded-full border border-jade/40 bg-jade/15 px-4 py-2 font-ui text-sm font-semibold text-jade transition hover:bg-jade/25"
        >
          🔍 Explorar
        </a>
        <Link
          to="/games/scripture-quest"
          className="flex items-center gap-2 rounded-full border border-terracotta/50 bg-terracotta/20 px-4 py-2 font-ui text-sm font-bold text-terracotta transition hover:bg-terracotta/30"
        >
          ⚔️ Jugar
        </Link>
        {completedCount > 0 && nextLessonInfo && (
          <Link
            to={`/module/${nextLessonInfo.moduleId}`}
            className="flex items-center gap-2 rounded-full border border-sg-gold/25 bg-navy-deep px-4 py-2 font-ui text-sm font-semibold text-parchment/80 transition hover:border-sg-gold/50"
          >
            📂 Módulo actual
          </Link>
        )}
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
