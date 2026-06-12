import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const STORAGE_KEY = 'sq_welcome_v1'

// ─── Slide data ────────────────────────────────────────────────────────────────

interface Slide {
  icon: string
  title: string
  body: React.ReactNode
}

const SLIDES: Slide[] = [
  {
    icon: '⚔️',
    title: 'Bienvenido a Scripture Quest',
    body: 'El juego de trivia bíblica donde el conocimiento de las Escrituras y la velocidad hacen equipo.',
  },
  {
    icon: '🎮',
    title: 'Dos formas de jugar',
    body: (
      <div className="grid grid-cols-2 gap-3 w-full">
        <div className="rounded-xl border border-parchment/10 p-3 text-left space-y-1">
          <p className="font-ui text-xs font-bold text-sg-gold-light">Solo</p>
          <p className="font-ui text-xs text-parchment/55 leading-relaxed">
            Practica cuando quieras sin sala ni código
          </p>
        </div>
        <div className="rounded-xl border border-sg-gold/25 bg-sg-gold/5 p-3 text-left space-y-1">
          <p className="font-ui text-xs font-bold text-sg-gold-light">Multijugador</p>
          <p className="font-ui text-xs text-parchment/55 leading-relaxed">
            Crea sala, comparte el código y compite en vivo
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: '❓',
    title: '7 tipos de rondas',
    body: (
      <div className="flex flex-wrap gap-2 justify-center w-full">
        {['Clásica', 'V / F', 'Completar', '¿Quién soy?', 'Imagen', 'Mímica', 'Ordenar'].map(
          (r) => (
            <span
              key={r}
              className="rounded-full border border-sg-gold/20 bg-sg-gold/8 px-3 py-1 font-ui text-xs text-sg-gold-light"
            >
              {r}
            </span>
          ),
        )}
      </div>
    ),
  },
  {
    icon: '🏅',
    title: '8 insignias, 7 niveles cada una',
    body: 'Desbloquea 56 logros a lo largo del tiempo jugando. Llegar al nivel 7 es legendario.',
  },
]

// ─── Modal ─────────────────────────────────────────────────────────────────────

export function SQWelcomeModal({ onClose }: { onClose: () => void }) {
  const [slide, setSlide] = useState(0)
  const navigate = useNavigate()

  const isLast = slide === SLIDES.length - 1
  const current = SLIDES[slide]

  function dismiss() {
    localStorage.setItem(STORAGE_KEY, '1')
    onClose()
  }

  function viewGuide() {
    localStorage.setItem(STORAGE_KEY, '1')
    onClose()
    navigate('/games/scripture-quest/como-jugar')
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4 bg-navy-deep/80 backdrop-blur-sm"
      onClick={dismiss}
    >
      <div
        className="w-full max-w-sm rounded-3xl border border-sg-gold/25 bg-navy-mid shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Gold shimmer strip */}
        <div
          className="h-0.5 w-full"
          style={{
            background:
              'linear-gradient(90deg, transparent, #E8C87A, #D4AF62, #E8C87A, transparent)',
            animation: 'sqShimmer 3s ease-in-out infinite',
          }}
        />

        {/* Slide content */}
        <div
          className="px-8 pt-8 pb-4 text-center flex flex-col items-center justify-center gap-3"
          style={{ minHeight: 220 }}
        >
          <span
            key={`icon-${slide}`}
            className="text-5xl"
            style={{ animation: 'sqPop 0.3s ease-out' }}
          >
            {current.icon}
          </span>
          <h2
            key={`title-${slide}`}
            className="font-display text-2xl text-parchment"
          >
            {current.title}
          </h2>
          {typeof current.body === 'string' ? (
            <p
              key={`body-${slide}`}
              className="font-ui text-sm text-parchment/55 leading-relaxed"
            >
              {current.body}
            </p>
          ) : (
            <div key={`body-${slide}`} className="w-full">
              {current.body}
            </div>
          )}
        </div>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 py-4">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => setSlide(i)}
              className={`rounded-full transition-all duration-200 ${
                i === slide
                  ? 'w-5 h-2 bg-sg-gold'
                  : 'w-2 h-2 bg-parchment/20 hover:bg-parchment/35'
              }`}
            />
          ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 px-6 pb-7">
          {isLast ? (
            <>
              <button
                onClick={viewGuide}
                className="flex-1 rounded-xl border border-sg-gold/30 py-3 font-ui text-sm text-sg-gold hover:bg-sg-gold/10 transition-colors"
              >
                Ver guía completa
              </button>
              <button
                onClick={dismiss}
                className="flex-1 rounded-xl bg-sg-gold py-3 font-ui text-sm font-semibold text-navy-deep hover:brightness-110 transition-all"
              >
                ¡A jugar!
              </button>
            </>
          ) : (
            <>
              <button
                onClick={dismiss}
                className="rounded-xl px-4 py-3 font-ui text-sm text-parchment/35 hover:text-parchment/65 transition-colors"
              >
                Saltar
              </button>
              <button
                onClick={() => setSlide((v) => v + 1)}
                className="flex-1 rounded-xl bg-sg-gold py-3 font-ui text-sm font-semibold text-navy-deep hover:brightness-110 transition-all"
              >
                Siguiente →
              </button>
            </>
          )}
        </div>
      </div>

      <style>{`
        @keyframes sqShimmer {
          0%, 100% { opacity: 0.5 }
          50%       { opacity: 1 }
        }
        @keyframes sqPop {
          0%   { transform: scale(0.7); opacity: 0 }
          70%  { transform: scale(1.1) }
          100% { transform: scale(1);   opacity: 1 }
        }
      `}</style>
    </div>
  )
}

// ─── Hook ──────────────────────────────────────────────────────────────────────

// eslint-disable-next-line react-refresh/only-export-components
export function useSQWelcome() {
  // Estado inicial perezoso: evita setState dentro de un efecto
  const [showWelcome, setShowWelcome] = useState(() => {
    try {
      return !localStorage.getItem(STORAGE_KEY)
    } catch {
      return false
    }
  })

  return { showWelcome, closeWelcome: () => setShowWelcome(false) }
}
