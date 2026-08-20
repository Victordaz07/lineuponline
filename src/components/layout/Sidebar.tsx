import { NavLink } from 'react-router-dom'

const linkBase =
  'flex items-center gap-2 rounded-lg px-3 py-2 font-ui text-sm font-semibold text-parchment/70 transition hover:bg-sg-gold/10 hover:text-parchment'

/**
 * Barra lateral de navegación (desktop).
 *
 * @returns Aside con enlaces principales
 */
export function Sidebar() {
  return (
    <aside
      className="hidden w-56 shrink-0 border-r border-sg-gold/15 bg-navy-deep/95 p-4 lg:block"
      aria-label="Navegación lateral"
    >
      <nav className="flex flex-col gap-1">
        <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? 'bg-sg-gold/10 text-sg-gold-light' : ''}`}>
          Inicio
        </NavLink>
        <NavLink
          to="/my-notes"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-sg-gold/10 text-sg-gold-light' : ''}`}
        >
          Mis notas
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-sg-gold/10 text-sg-gold-light' : ''}`}
        >
          Buscar
        </NavLink>
        <NavLink
          to="/descargables"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-sg-gold/10 text-sg-gold-light' : ''}`}
        >
          Descargables
        </NavLink>
      </nav>
    </aside>
  )
}
