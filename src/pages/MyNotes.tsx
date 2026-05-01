import { Link } from 'react-router-dom'

/**
 * Placeholder de notas del usuario hasta integrar auth y listado real.
 *
 * @returns Página Mis notas
 */
export default function MyNotes() {
  return (
    <div className="mx-auto max-w-lg space-y-6 py-8 text-center">
      <h1 className="font-title text-3xl text-blue-accent">Mis notas</h1>
      <p className="text-reading text-text-muted">
        Cuando la autenticación esté conectada, aquí verás tus notas sincronizadas desde Firestore.
      </p>
      <p className="font-ui text-sm text-text-muted">Por ahora no hay listado en esta vista.</p>
      <Link
        to="/"
        className="inline-flex rounded-xl bg-blue-accent px-5 py-3 font-ui text-sm font-semibold text-white shadow-sm hover:brightness-110"
      >
        Empezar a estudiar
      </Link>
    </div>
  )
}
