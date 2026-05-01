import { Link } from 'react-router-dom'

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
    <div className="mx-auto max-w-lg rounded-2xl border border-amber-200/80 bg-amber-50/90 p-8 text-center shadow-sm">
      <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold-main">En construcción</p>
      <h1 className="mt-3 font-title text-2xl text-blue-accent">Próximamente</h1>
      {lessonTitle ? (
        <p className="mt-4 font-ui text-text-main">
          La lección <strong>{lessonTitle}</strong> aún está en preparación. Victor la está estudiando e
          integrando con calma.
        </p>
      ) : (
        <p className="mt-4 font-ui text-text-main">
          Este tema aún está en preparación. Cuando el contenido esté listo, aparecerá como lección publicada.
        </p>
      )}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          to="/"
          className="inline-block w-full rounded-md border border-gold-main bg-gold-main px-4 py-2.5 font-ui text-sm font-bold text-white shadow-sm transition hover:brightness-95 sm:w-auto"
        >
          Volver al inicio
        </Link>
        {moduleId ? (
          <Link
            to={`/module/${moduleId}`}
            className="inline-block w-full rounded-md border border-blue-accent/35 bg-white px-4 py-2.5 font-ui text-sm font-bold text-blue-accent shadow-sm transition hover:bg-blue-accent/5 sm:w-auto"
          >
            Volver al módulo
          </Link>
        ) : null}
      </div>
    </div>
  )
}
