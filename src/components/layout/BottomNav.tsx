import { NavLink } from 'react-router-dom'

const items = [
  {
    to: '/',
    end: true,
    label: 'Inicio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 9.5L11 3l8 6.5V19a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" />
        <path d="M8 20v-7h6v7" />
      </svg>
    ),
  },
  {
    to: '/module/doctrina-fundamental',
    end: false,
    label: 'Estudio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 19V5a2 2 0 012-2h11a1 1 0 011 1v13" />
        <path d="M4 19a2 2 0 002 2h12a1 1 0 001-1v-1" />
        <path d="M4 19a2 2 0 012-2h13" />
        <path d="M9 7h6M9 11h4" />
      </svg>
    ),
  },
  {
    to: '/my-notes',
    end: false,
    label: 'Notas',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20H5a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v6" />
        <path d="M15 18l2 2 4-4" />
        <path d="M7 9h8M7 13h5" />
      </svg>
    ),
  },
  {
    to: '/search',
    end: false,
    label: 'Buscar',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="10" cy="10" r="7" />
        <path d="M15.5 15.5L20 20" />
      </svg>
    ),
  },
  {
    to: '/community',
    end: false,
    label: 'Comunidad',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
      </svg>
    ),
  },
]

export function BottomNav() {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-40 border-t border-sg-gold/15 bg-navy-deep/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md"
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-lg">
        {items.map(({ to, end, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) =>
              `flex min-w-0 flex-1 flex-col items-center gap-1 px-2 py-3 font-ui text-[0.65rem] font-semibold transition-colors ${
                isActive ? 'text-sg-gold-light' : 'text-parchment/40 hover:text-parchment/70'
              }`
            }
            aria-label={label}
          >
            {({ isActive }) => (
              <>
                <span className={`transition-transform ${isActive ? 'scale-110' : ''}`}>{icon}</span>
                <span>{label}</span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
