import { NavLink } from 'react-router-dom'

const linkBase =
  'flex items-center gap-2 rounded-lg px-3 py-2 font-ui text-sm font-semibold text-gold-main transition hover:bg-gold-dim hover:text-blue-accent'

/**
 * Barra lateral de navegación (desktop).
 *
 * @returns Aside con enlaces principales
 */
export function Sidebar() {
  return (
    <aside
      className="hidden w-56 shrink-0 border-r border-blue-accent/10 bg-white/95 p-4 lg:block"
      aria-label="Navegación lateral"
    >
      <nav className="flex flex-col gap-1">
        <NavLink to="/" end className={({ isActive }) => `${linkBase} ${isActive ? 'bg-gold-dim text-blue-accent' : ''}`}>
          Inicio
        </NavLink>
        <NavLink
          to="/my-notes"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-gold-dim text-blue-accent' : ''}`}
        >
          Mis notas
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) => `${linkBase} ${isActive ? 'bg-gold-dim text-blue-accent' : ''}`}
        >
          Buscar
        </NavLink>
      </nav>
    </aside>
  )
}
