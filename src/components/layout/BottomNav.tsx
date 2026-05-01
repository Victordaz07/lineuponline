import { NavLink } from 'react-router-dom'

/**
 * Navegación inferior fija (móvil).
 *
 * @returns Nav con iconos
 */
export function BottomNav() {
  const itemClass = ({ isActive }: { isActive: boolean }) =>
    `flex min-w-0 flex-1 flex-col items-center gap-0.5 rounded-lg px-1 py-2 font-ui text-[0.7rem] font-semibold ${
      isActive ? 'text-blue-accent' : 'text-gold-main'
    }`

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 flex border-t border-blue-accent/10 bg-white/95 pb-[env(safe-area-inset-bottom)] pt-1 shadow-[0_-4px_20px_rgba(27,58,107,0.06)] lg:hidden"
      aria-label="Navegación inferior"
    >
      <NavLink to="/" end className={itemClass}>
        <span aria-hidden="true">🏠</span>
        Inicio
      </NavLink>
      <NavLink to="/module/doctrina-fundamental" className={itemClass}>
        <span aria-hidden="true">📚</span>
        Estudio
      </NavLink>
      <NavLink to="/my-notes" className={itemClass}>
        <span aria-hidden="true">📝</span>
        Notas
      </NavLink>
      <NavLink to="/search" className={itemClass}>
        <span aria-hidden="true">🔎</span>
        Buscar
      </NavLink>
    </nav>
  )
}
