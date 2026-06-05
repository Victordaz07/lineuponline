import { Link } from 'react-router-dom'
import { LessonDisclaimer } from '@/components/doctrinal/LessonDisclaimer'

export type UnderConstructionProps = {
  lessonTitle?: string
  moduleId?: string
}

/**
 * Aviso cuando una lección está en preparación editorial (sin iframe).
 *
 * @param props - Título opcional y módulo para volver atrás
 * @returns Panel accesible con enlaces
 */
export function UnderConstruction({ lessonTitle, moduleId }: UnderConstructionProps) {
  return (
    <div className="mx-auto max-w-lg space-y-6">
      <LessonDisclaimer />
      <div className="rounded-2xl border border-amber-500/30 bg-amber-950/30 p-8 text-center shadow-sm">
      <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-sg-gold">En construcción</p>
      <h1 className="mt-3 font-display text-2xl text-parchment">Próximamente</h1>
      {lessonTitle ? (
        <p className="mt-4 font-ui text-parchment/80">
          La lección <strong>{lessonTitle}</strong> aún está en preparación. Victor la está estudiando e
          integrando con calma.
        </p>
      ) : (
        <p className="mt-4 font-ui text-parchment/80">
          Este tema aún está en preparación. Cuando el contenido esté listo, aparecerá como lección publicada.
        </p>
      )}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-block w-full rounded-md border border-sg-gold bg-sg-gold px-4 py-2.5 font-ui text-sm font-bold text-navy-deep shadow-sm transition hover:brightness-95 sm:w-auto"
        >
          Volver al inicio
        </Link>
        {moduleId ? (
          <Link
            to={`/module/${moduleId}`}
            className="inline-block w-full rounded-md border border-sg-gold/30 bg-transparent px-4 py-2.5 font-ui text-sm font-bold text-parchment/80 shadow-sm transition hover:bg-navy-deep/60 sm:w-auto"
          >
            Volver al módulo
          </Link>
        ) : null}
      </div>
      </div>
    </div>
  )
}
