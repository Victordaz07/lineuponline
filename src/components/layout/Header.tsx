import { Link } from 'react-router-dom'

/**
 * Cabecera de marca para todas las vistas.
 *
 * @returns Encabezado celestial premium
 */
export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-blue-accent/10 bg-white/85 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col gap-1">
        <p className="font-ui text-[0.65rem] font-semibold uppercase tracking-[0.2em] text-gold-main">
          Edición celestial
        </p>
        <Link to="/" className="font-title text-xl text-blue-accent sm:text-2xl">
          LineUponLine
        </Link>
      </div>
    </header>
  )
}
