import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ModuleGrid } from '@/components/learning/ModuleGrid'
import { RecommendedNext } from '@/components/learning/RecommendedNext'
import { LoadingSpinner } from '@/components/common/LoadingSpinner'
import { fetchDoctrineModules } from '@/services/doctrineService'
import type { DoctrinalModule } from '@/types/doctrine'
import { useUserProgress } from '@/hooks/useUserProgress'

const DEMO_USER = 'demo-user'

/**
 * Panel principal con módulos y accesos rápidos de estudio.
 *
 * @returns Página de inicio
 */
export default function Dashboard() {
  const [modules, setModules] = useState<DoctrinalModule[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const { completedCount, markLessonComplete } = useUserProgress(DEMO_USER)

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

  return (
    <div className="mx-auto max-w-6xl space-y-8">
      <section className="rounded-2xl border border-gold-main/20 bg-gradient-to-br from-white to-bg-elevated p-6 shadow-sm sm:p-8">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-gold-main">Bienvenida</p>
        <h1 className="mt-2 font-title text-3xl text-blue-accent sm:text-4xl">Continúa línea sobre línea</h1>
        <p className="mt-3 max-w-2xl text-reading text-base text-text-main">
          Estudia doctrina con claridad, notas sincronizadas y una experiencia pensada para móvil y escritorio.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-blue-accent/10 bg-white/90 p-4">
            <p className="font-ui text-xs uppercase text-text-muted">Marcadores locales</p>
            <p className="mt-1 font-title text-2xl text-blue-accent">{completedCount}</p>
            <p className="font-ui text-xs text-text-muted">Lecciones marcadas como revisadas</p>
          </div>
          <div className="rounded-xl border border-blue-accent/10 bg-white/90 p-4">
            <p className="font-ui text-xs uppercase text-text-muted">Módulos disponibles</p>
            <p className="mt-1 font-title text-2xl text-blue-accent">{modules.length}</p>
            <p className="font-ui text-xs text-text-muted">Contenido semilla (Firestore próximo)</p>
          </div>
        </div>
      </section>

      <RecommendedNext
        moduleId="doctrina-fundamental"
        lessonId="la-expiacion-del-salvador"
        title="La expiación del Salvador"
      />

      <div className="flex flex-wrap gap-3">
        <button
          type="button"
          onClick={() => markLessonComplete('doctrina-fundamental', 'la-fe-como-principio-de-poder')}
          className="rounded-lg border border-dashed border-gold-main/50 px-4 py-2 font-ui text-xs font-semibold text-blue-accent hover:bg-gold-dim"
        >
          Demo: marcar &quot;La fe…&quot; como revisada (local)
        </button>
        <Link
          to="/module/doctrina-fundamental"
          className="rounded-lg bg-gold-main px-4 py-2 font-ui text-sm font-semibold text-white shadow-sm hover:brightness-95"
        >
          Ir a Doctrina fundamental
        </Link>
      </div>

      <section>
        <h2 className="mb-4 font-title text-2xl text-blue-accent">Módulos doctrinales</h2>
        {loading ? (
          <div className="flex justify-center py-12">
            <LoadingSpinner />
          </div>
        ) : error ? (
          <p className="text-red-600">{error}</p>
        ) : (
          <ModuleGrid modules={modules} />
        )}
      </section>
    </div>
  )
}
