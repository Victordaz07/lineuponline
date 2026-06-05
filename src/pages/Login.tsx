import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { isFirebaseConfigured } from '@/lib/firebase'

export default function Login() {
  const { signInWithGoogle, user } = useAuth()
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  if (user) {
    navigate('/', { replace: true })
    return null
  }

  async function handleGoogle() {
    setError(null)
    setLoading(true)
    try {
      await signInWithGoogle()
      navigate('/', { replace: true })
    } catch (e) {
      setError('No se pudo iniciar sesión. Inténtalo de nuevo.')
      console.error(e)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="mx-auto flex max-w-sm flex-col items-center gap-8 pt-16">
      <div className="space-y-2 text-center">
        <p className="font-ui text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-sg-gold">
          Deep Gospel Study
        </p>
        <h1 className="font-display text-3xl text-parchment">Seeker Gospel</h1>
        <p className="font-display italic text-sm text-sg-gold-light/70">
          Inicia sesión para sincronizar tu diario de estudio en todos tus dispositivos.
        </p>
      </div>

      <div className="w-full rounded-2xl border border-sg-gold/20 bg-navy-mid p-6 shadow-sm space-y-4">
        {!isFirebaseConfigured() ? (
          <p className="rounded-xl border border-red-900/40 bg-red-950/40 px-4 py-3 font-ui text-sm text-red-400">
            Firebase no está configurado en este entorno. Configura las variables VITE_FIREBASE_* para habilitar el login.
          </p>
        ) : null}

        <button
          type="button"
          onClick={handleGoogle}
          disabled={loading || !isFirebaseConfigured()}
          className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white px-4 py-3 font-ui text-sm font-semibold text-gray-700 shadow-sm transition hover:shadow-md disabled:cursor-not-allowed disabled:opacity-50"
        >
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
            <path fill="#4285F4" d="M16.51 8.17H9v3.01h4.27c-.36 1.74-1.93 3.01-4.27 3.01-2.57 0-4.66-2.09-4.66-4.66S6.43 4.87 9 4.87c1.19 0 2.26.43 3.09 1.13l2.17-2.17A7.63 7.63 0 009 1.23C4.69 1.23 1.23 4.69 1.23 9S4.69 16.77 9 16.77c4.11 0 7.66-2.97 7.66-7.66 0-.31-.03-.62-.15-.94z"/>
          </svg>
          {loading ? 'Iniciando sesión…' : 'Continuar con Google'}
        </button>

        {error ? (
          <p className="font-ui text-sm text-red-400">{error}</p>
        ) : null}

        <p className="font-ui text-xs text-parchment/35 text-center">
          Sin cuenta, puedes seguir estudiando sin iniciar sesión. Tus notas se guardan localmente.
        </p>
      </div>
    </div>
  )
}
