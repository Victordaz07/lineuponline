import { Link, useLocation } from 'react-router-dom'

type LocationState = {
  lessonTitle?: string
  moduleId?: string
  lessonId?: string
}

export function UnderConstruction() {
  const location = useLocation()
  const state = location.state as LocationState | null

  return (
    <div className="mx-auto max-w-lg rounded-2xl border border-amber-200/80 bg-amber-50/90 p-8 text-center shadow-sm">
      <p className="font-ui text-xs font-bold uppercase tracking-[0.2em] text-gold-main">
        En construcción
      </p>
      <h1 className="mt-3 font-title text-2xl text-blue-accent">Próximamente</h1>
      {state?.lessonTitle ? (
        <p className="mt-4 font-ui text-text-main">
          La lección <strong>{state.lessonTitle}</strong> aún está en preparación. Victor la está
          estudiando y integrando con calma.
        </p>
      ) : (
        <p className="mt-4 font-ui text-text-main">
          Este tema aún está en preparación. Sigue el pipeline de estudio personal: cuando el HTML LUL esté
          listo, aparecerá aquí como lección publicada.
        </p>
      )}
      <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link to="/" className="btn-primary inline-block w-full sm:w-auto">
          Volver al inicio
        </Link>
        {state?.moduleId ? (
          <Link
            to={`/module/${state.moduleId}`}
            className="btn-secondary inline-block w-full sm:w-auto"
          >
            Volver al módulo
          </Link>
        ) : null}
      </div>
    </div>
  )
}
