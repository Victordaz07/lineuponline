import { ModuleGrid } from '../components/catalog/ModuleGrid'
import { getCatalogStats } from '../data/catalog'

export function DashboardPage() {
  const { totalLessons, published, percentRounded } = getCatalogStats()

  return (
    <>
      <section className="relative overflow-hidden rounded-2xl border border-gold-main/25 bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#F5F2EB_100%)] p-6 shadow-sm sm:p-8">
        <span
          className="absolute right-0 top-0 h-8 w-8 rounded-bl-lg bg-gold-main/80"
          aria-hidden="true"
        />
        <p className="eyebrow mb-2 text-sm uppercase tracking-[0.14em] text-gold-main">
          Pipeline de estudio personal
        </p>
        <h1 className="mb-3 text-blue-accent [text-shadow:0_1px_1px_rgba(27,58,107,0.12)]">
          La carne del evangelio, línea por línea
        </h1>
        <p className="text-reading text-base text-text-main sm:text-lg">
          Cada lección es un HTML de estudio profundo que integras cuando estés listo. El catálogo muestra
          todo el camino; lo disponible crece sin prisa.
        </p>
      </section>

      <section className="rounded-2xl border border-gold-main/20 bg-white p-5 shadow-sm sm:p-6">
        <h2 className="font-title text-lg text-blue-accent sm:text-xl">Tu progreso de catálogo</h2>
        <p className="mt-2 font-ui text-sm text-text-muted">
          Has publicado <strong className="text-blue-accent">{published}</strong> de{' '}
          <strong>{totalLessons}</strong> lecciones planificadas ({percentRounded}%).
        </p>
        <div className="mt-4 h-3 w-full overflow-hidden rounded-full bg-bg-elevated">
          <div
            className="h-full rounded-full bg-gradient-to-r from-blue-accent to-gold-main transition-all duration-500"
            style={{ width: `${percentRounded}%` }}
            role="progressbar"
            aria-valuenow={percentRounded}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </section>

      <section>
        <h2 className="mb-4 font-title text-xl text-blue-accent">Módulos</h2>
        <ModuleGrid />
      </section>
    </>
  )
}
