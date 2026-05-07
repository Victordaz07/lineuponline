import { Link, useLocation, useNavigate } from 'react-router-dom'

function BackButton() {
  const navigate = useNavigate()
  return (
    <button
      type="button"
      onClick={() => navigate(-1)}
      aria-label="Volver"
      className="flex items-center gap-1.5 rounded-lg px-2 py-1.5 font-ui text-sm font-semibold text-blue-accent transition hover:bg-gold-dim active:scale-95"
    >
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M10 3L5 8l5 5" />
      </svg>
      Volver
    </button>
  )
}

export function Header() {
  const { pathname } = useLocation()
  const isNested = pathname !== '/'

  return (
    <header className="sticky top-0 z-30 border-b border-blue-accent/10 bg-white/85 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-5xl items-center gap-3">
        {isNested ? (
          <BackButton />
        ) : null}
        <div className={`flex flex-col gap-0.5 ${isNested ? '' : ''}`}>
          <p className="font-ui text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold-main leading-none">
            Edición celestial
          </p>
          <Link to="/" className="font-title text-xl text-blue-accent sm:text-2xl leading-tight">
            LineUponLine
          </Link>
        </div>
      </div>
    </header>
  )
}
