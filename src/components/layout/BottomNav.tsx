import { NavLink } from 'react-router-dom'

const items = [
  {
    to: '/',
    end: true,
    label: 'Inicio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3 11.5L12 4l9 7.5" />
        <path d="M5.5 10v9a1 1 0 001 1h11a1 1 0 001-1v-9" />
        <path d="M9.5 20v-6h5v6" />
      </svg>
    ),
  },
  {
    to: '/module/doctrina-fundamental',
    end: false,
    label: 'Estudio',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 6.5c-1.4-1.2-3.4-1.8-6-1.8v13c2.6 0 4.6.6 6 1.8 1.4-1.2 3.4-1.8 6-1.8v-13c-2.6 0-4.6.6-6 1.8z" />
        <path d="M12 6.5v13" />
      </svg>
    ),
  },
  {
    to: '/games/scripture-quest',
    end: false,
    label: 'Jugar',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2.5" y="8.5" width="19" height="9" rx="4.5" />
        <path d="M7 11v4M5 13h4" />
        <circle cx="15.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
        <circle cx="18" cy="14" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    to: '/community',
    end: false,
    label: 'Comunidad',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4 6a2 2 0 012-2h12a2 2 0 012 2v8a2 2 0 01-2 2H9l-4 4v-4H6a2 2 0 01-2-2V6z" />
        <path d="M8 9h8M8 12.5h5" />
      </svg>
    ),
  },
  {
    to: '/musica',
    end: false,
    label: 'Música',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9 18V5.5l10-2v12.5" />
        <circle cx="7" cy="18" r="2.5" />
        <circle cx="17" cy="16" r="2.5" />
      </svg>
    ),
  },
]

export function BottomNav() {
  return (
    <nav
      className="border-t border-sg-gold/15 bg-navy-deep/95 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] backdrop-blur-md"
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
