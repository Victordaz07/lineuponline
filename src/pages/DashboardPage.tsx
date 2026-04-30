import { ModuleGrid } from '../components/catalog/ModuleGrid'
import { getCatalogStats } from '../data/catalog'
import { HeroCard } from '../components/molecules/HeroCard'

export function DashboardPage() {
  const { totalLessons, published, percentRounded } = getCatalogStats()

  return (
    <>
      <HeroCard
        eyebrow="Pipeline de estudio personal"
        title="La carne del evangelio, línea por línea"
        description="Cada lección es un HTML de estudio profundo que integras cuando estés listo. El catálogo muestra todo el camino; lo disponible crece sin prisa."
      />

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
