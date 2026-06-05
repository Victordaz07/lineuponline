import { useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import type { ConfirmationResult } from 'firebase/auth'
import {
  confirmPhoneOTP,
  createAccountWithEmail,
  sendPasswordReset,
  signInWithEmail,
  signInWithGoogle,
  signInWithPhone,
} from '@/services/authService'
import { isFirebaseConfigured } from '@/lib/firebase'

type Mode = 'signin' | 'signup'
type Section = 'google' | 'email' | 'phone'

export default function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = (location.state as { from?: string } | null)?.from ?? '/'

  const [section, setSection] = useState<Section>('google')
  const [mode, setMode] = useState<Mode>('signin')

  // Email form
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [displayName, setDisplayName] = useState('')
  const [emailError, setEmailError] = useState('')
  const [resetSent, setResetSent] = useState(false)
  const [emailLoading, setEmailLoading] = useState(false)

  // Google
  const [googleLoading, setGoogleLoading] = useState(false)
  const [googleError, setGoogleError] = useState('')

  // Phone
  const [phone, setPhone] = useState('')
  const [otp, setOtp] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [phoneLoading, setPhoneLoading] = useState(false)
  const [confirmationResult, setConfirmationResult] = useState<ConfirmationResult | null>(null)
  const recaptchaRef = useRef<HTMLDivElement>(null)

  const firebaseReady = isFirebaseConfigured()

  function onSuccess() {
    navigate(from, { replace: true })
  }

  // ── Google ────────────────────────────────────────────────────────────────

  async function handleGoogle() {
    setGoogleError('')
    setGoogleLoading(true)
    try {
      await signInWithGoogle()
      onSuccess()
    } catch (err) {
      const msg = err instanceof Error ? err.message : String(err)
      if (!msg.includes('popup-closed')) {
        setGoogleError('No se pudo iniciar sesión con Google. Intenta de nuevo.')
      }
    } finally {
      setGoogleLoading(false)
    }
  }

  // ── Email ─────────────────────────────────────────────────────────────────

  async function handleEmail(e: React.FormEvent) {
    e.preventDefault()
    setEmailError('')
    setEmailLoading(true)
    try {
      if (mode === 'signin') {
        await signInWithEmail(email, password)
      } else {
        await createAccountWithEmail(email, password, displayName)
      }
      onSuccess()
    } catch (err) {
      const code = (err as { code?: string }).code ?? ''
      if (
        code === 'auth/user-not-found' ||
        code === 'auth/wrong-password' ||
        code === 'auth/invalid-credential' ||
        code === 'auth/email-already-in-use'
      ) {
        setEmailError('Correo o contraseña incorrectos. Verifica tus datos.')
      } else if (code === 'auth/weak-password') {
        setEmailError('La contraseña debe tener al menos 6 caracteres.')
      } else {
        setEmailError('Ocurrió un error. Intenta de nuevo.')
      }
    } finally {
      setEmailLoading(false)
    }
  }

  async function handlePasswordReset() {
    if (!email.trim()) {
      setEmailError('Escribe tu correo primero.')
      return
    }
    try {
      await sendPasswordReset(email)
      setResetSent(true)
    } catch {
      setEmailError('No se pudo enviar el correo de recuperación.')
    }
  }

  // ── Phone ─────────────────────────────────────────────────────────────────

  async function handleSendOTP(e: React.FormEvent) {
    e.preventDefault()
    setPhoneError('')
    if (!recaptchaRef.current) return
    setPhoneLoading(true)
    try {
      const result = await signInWithPhone(phone, 'recaptcha-container')
      setConfirmationResult(result)
    } catch {
      setPhoneError('No se pudo enviar el SMS. Verifica el número.')
    } finally {
      setPhoneLoading(false)
    }
  }

  async function handleConfirmOTP(e: React.FormEvent) {
    e.preventDefault()
    if (!confirmationResult) return
    setPhoneError('')
    setPhoneLoading(true)
    try {
      await confirmPhoneOTP(confirmationResult, otp)
      onSuccess()
    } catch {
      setPhoneError('Código incorrecto. Inténtalo de nuevo.')
    } finally {
      setPhoneLoading(false)
    }
  }

  // ── UI ────────────────────────────────────────────────────────────────────

  return (
    <div className="mx-auto max-w-md space-y-6 px-4 py-10">
      {/* Header */}
      <div className="text-center">
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.2em] text-sg-gold">
          Seeker Gospel
        </p>
        <h1 className="mt-1 font-display text-3xl text-parchment">Guardar en la nube</h1>
        <p className="mt-2 font-display italic text-sm text-sg-gold-light/70">
          Tus resaltados, notas y progreso te siguen en cualquier dispositivo.
        </p>
      </div>

      {!firebaseReady && (
        <div className="rounded-xl border border-red-900/40 bg-red-950/40 px-4 py-3 text-center font-ui text-sm text-red-400">
          Firebase no está configurado en este entorno. Contacta al administrador.
        </div>
      )}

      {/* Method tabs */}
      {firebaseReady && (
        <div className="flex gap-1 rounded-xl border border-sg-gold/15 bg-navy-mid p-1">
          {(['google', 'email', 'phone'] as Section[]).map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setSection(s)}
              className={`flex-1 rounded-lg py-2 font-ui text-xs font-semibold transition ${
                section === s
                  ? 'bg-navy-light text-parchment shadow-sm'
                  : 'text-parchment/40 hover:text-parchment/70'
              }`}
            >
              {s === 'google' ? 'Google' : s === 'email' ? 'Correo' : 'Teléfono'}
            </button>
          ))}
        </div>
      )}

      {/* ── Google section ── */}
      {firebaseReady && section === 'google' && (
        <div className="space-y-3">
          <button
            type="button"
            onClick={handleGoogle}
            disabled={googleLoading}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/20 bg-white py-3.5 font-ui text-sm font-semibold text-gray-700 shadow-sm transition hover:shadow-md disabled:opacity-60"
          >
            {/* Google SVG logo */}
            <svg width="20" height="20" viewBox="0 0 48 48" aria-hidden="true">
              <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
              <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
              <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
              <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
            </svg>
            {googleLoading ? 'Conectando…' : 'Continuar con Google'}
          </button>
          {googleError && (
            <p role="alert" className="text-center font-ui text-sm text-red-500">{googleError}</p>
          )}
          <p className="text-center font-ui text-xs text-parchment/50">
            Rápido, seguro, sin contraseñas.
          </p>
        </div>
      )}

      {/* ── Email section ── */}
      {firebaseReady && section === 'email' && (
        <div className="space-y-4">
          {/* Mode toggle */}
          <div className="flex gap-3 border-b border-sg-gold/15 pb-3">
            <button
              type="button"
              onClick={() => { setMode('signin'); setEmailError(''); setResetSent(false) }}
              className={`font-ui text-sm font-semibold transition ${mode === 'signin' ? 'text-sg-gold-light underline underline-offset-4' : 'text-parchment/50 hover:text-parchment/80'}`}
            >
              Iniciar sesión
            </button>
            <button
              type="button"
              onClick={() => { setMode('signup'); setEmailError(''); setResetSent(false) }}
              className={`font-ui text-sm font-semibold transition ${mode === 'signup' ? 'text-sg-gold-light underline underline-offset-4' : 'text-parchment/50 hover:text-parchment/80'}`}
            >
              Crear cuenta
            </button>
          </div>

          {resetSent ? (
            <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/30 px-4 py-3 font-ui text-sm text-emerald-400">
              Correo de recuperación enviado a <strong>{email}</strong>. Revisa tu bandeja.
            </div>
          ) : (
            <form onSubmit={handleEmail} className="space-y-3">
              {mode === 'signup' && (
                <div>
                  <label className="mb-1 block font-ui text-xs font-semibold text-parchment/60">
                    Nombre
                  </label>
                  <input
                    type="text"
                    value={displayName}
                    onChange={(e) => setDisplayName(e.target.value)}
                    placeholder="Tu nombre"
                    required={mode === 'signup'}
                    className="w-full rounded-xl border border-sg-gold/20 bg-navy-mid px-4 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                  />
                </div>
              )}
              <div>
                <label className="mb-1 block font-ui text-xs font-semibold text-parchment/60">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@correo.com"
                  required
                  autoComplete="email"
                  className="w-full rounded-xl border border-sg-gold/20 bg-navy-mid px-4 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                />
              </div>
              <div>
                <label className="mb-1 block font-ui text-xs font-semibold text-parchment/60">
                  Contraseña
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder={mode === 'signup' ? 'Mínimo 6 caracteres' : '••••••••'}
                  required
                  minLength={6}
                  autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
                  className="w-full rounded-xl border border-sg-gold/20 bg-navy-mid px-4 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                />
              </div>

              {emailError && (
                <p role="alert" className="font-ui text-sm text-red-500">{emailError}</p>
              )}

              <button
                type="submit"
                disabled={emailLoading}
                className="w-full rounded-xl bg-sg-gold py-3 font-ui text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95 disabled:opacity-60"
              >
                {emailLoading
                  ? 'Un momento…'
                  : mode === 'signin'
                  ? 'Iniciar sesión'
                  : 'Crear cuenta'}
              </button>

              {mode === 'signin' && (
                <button
                  type="button"
                  onClick={handlePasswordReset}
                  className="w-full text-center font-ui text-xs text-parchment/40 hover:text-sg-gold-light"
                >
                  ¿Olvidaste tu contraseña?
                </button>
              )}
            </form>
          )}
        </div>
      )}

      {/* ── Phone section ── */}
      {firebaseReady && section === 'phone' && (
        <div className="space-y-4">
          {!confirmationResult ? (
            <form onSubmit={handleSendOTP} className="space-y-3">
              <div>
                <label className="mb-1 block font-ui text-xs font-semibold text-parchment/60">
                  Número de teléfono
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+52 55 1234 5678"
                  required
                  className="w-full rounded-xl border border-sg-gold/20 bg-navy-mid px-4 py-2.5 font-ui text-sm text-parchment placeholder:text-parchment/30 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                />
                <p className="mt-1 font-ui text-xs text-parchment/50">
                  Incluye el código de país (ej. +52 para México)
                </p>
              </div>
              {phoneError && <p role="alert" className="font-ui text-sm text-red-500">{phoneError}</p>}
              <button
                type="submit"
                disabled={phoneLoading}
                className="w-full rounded-xl bg-sg-gold py-3 font-ui text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95 disabled:opacity-60"
              >
                {phoneLoading ? 'Enviando…' : 'Enviar código SMS'}
              </button>
              {/* Invisible reCAPTCHA anchor */}
              <div id="recaptcha-container" ref={recaptchaRef} />
            </form>
          ) : (
            <form onSubmit={handleConfirmOTP} className="space-y-3">
              <p className="font-ui text-sm text-parchment/80">
                Código enviado a <strong>{phone}</strong>. Revisa tus mensajes.
              </p>
              <div>
                <label className="mb-1 block font-ui text-xs font-semibold text-parchment/60">
                  Código de 6 dígitos
                </label>
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]{6}"
                  maxLength={6}
                  value={otp}
                  onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
                  placeholder="123456"
                  required
                  autoFocus
                  className="w-full rounded-xl border border-sg-gold/20 bg-navy-deep px-4 py-2.5 text-center font-ui text-xl tracking-[0.5em] text-parchment/85 focus:outline-none focus:ring-2 focus:ring-sg-gold/30"
                />
              </div>
              {phoneError && <p role="alert" className="font-ui text-sm text-red-500">{phoneError}</p>}
              <button
                type="submit"
                disabled={phoneLoading || otp.length !== 6}
                className="w-full rounded-xl bg-sg-gold py-3 font-ui text-sm font-semibold text-navy-deep shadow-sm transition hover:brightness-95 disabled:opacity-60"
              >
                {phoneLoading ? 'Verificando…' : 'Confirmar código'}
              </button>
              <button
                type="button"
                onClick={() => { setConfirmationResult(null); setOtp(''); setPhoneError('') }}
                className="w-full text-center font-ui text-xs text-parchment/40 hover:text-sg-gold-light"
              >
                Cambiar número
              </button>
            </form>
          )}
        </div>
      )}

      {/* Back link */}
      <div className="text-center">
        <Link to="/" className="font-ui text-xs text-parchment/40 hover:text-sg-gold-light">
          ← Volver sin iniciar sesión
        </Link>
      </div>
    </div>
  )
}
