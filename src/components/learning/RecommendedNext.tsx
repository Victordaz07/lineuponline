import { Link } from 'react-router-dom'

export type RecommendedNextProps = {
  moduleId: string
  lessonId: string
  title: string
}

/**
 * Tarjeta compacta para continuar el estudio.
 *
 * @param props - Ruta sugerida
 * @returns Enlace decorado
 */
export function RecommendedNext({ moduleId, lessonId, title }: RecommendedNextProps) {
  return (
    <div className="rounded-2xl border border-gold-main/30 bg-gradient-to-r from-white to-bg-elevated p-5 shadow-sm">
      <p className="font-ui text-xs font-semibold uppercase tracking-wide text-gold-main">Siguiente sugerido</p>
      <p className="mt-2 font-title text-lg text-blue-accent">{title}</p>
      <Link
        to={`/lesson/${moduleId}/${lessonId}`}
        className="mt-3 inline-flex rounded-lg bg-blue-accent px-4 py-2 font-ui text-sm font-semibold text-white transition hover:brightness-110"
      >
        Continuar estudio
      </Link>
    </div>
  )
}
