import { NavLink } from 'react-router-dom'

const GOLD = '#B8923A'

const items = [
  {
    to: '/',
    end: true,
    label: 'Inicio',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M3.5 11.5 L12 4.5 L20.5 11.5" />
        <path d="M6 10.5 V20 H18 V10.5" />
        <path d="M15.5 6.9 V4.5 H17.5 V8.6" />
        <path d="M10 20 V15.8 A2 2 0 0 1 14 15.8 V20" stroke={GOLD} />
        <circle cx="12.9" cy="17.6" r="0.5" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
  {
    to: '/module/doctrina-fundamental',
    end: false,
    label: 'Estudio',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="7" y="4.5" width="10" height="13.5" rx="1.2" />
        <path d="M9.3 4.5 V18" />
        <path d="M9.5 18 v3 l1.35 -1.1 l1.35 1.1 v-3 z" fill={GOLD} stroke="none" />
      </svg>
    ),
  },
  {
    to: '/games/scripture-quest',
    end: false,
    label: 'Jugar',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M8 4.5 H16 V7 A4 4 0 0 1 8 7 Z" />
        <path d="M8 5 H5.5 A2.3 2.3 0 0 0 8.2 8.3" />
        <path d="M16 5 H18.5 A2.3 2.3 0 0 1 15.8 8.3" />
        <path d="M12 11 V14" />
        <path d="M10.5 14 H13.5 V15.5 L15 18 H9 L10.5 15.5 Z" />
        <path d="M12 5.3 L12.7 7 L14.5 7.1 L13.1 8.3 L13.6 10 L12 9 L10.4 10 L10.9 8.3 L9.5 7.1 L11.3 7 Z" stroke={GOLD} strokeWidth="1.2" />
      </svg>
    ),
  },
  {
    to: '/community',
    end: false,
    label: 'Comunidad',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9.5" cy="9" r="2.7" />
        <path d="M4.5 18.5 V17.5 A5 5 0 0 1 14.5 17.5 V18.5" />
        <circle cx="16" cy="8.5" r="2.1" stroke={GOLD} />
        <path d="M15.2 13.4 A4.3 4.3 0 0 1 19.5 18.5" stroke={GOLD} />
      </svg>
    ),
  },
  {
    to: '/musica',
    end: false,
    label: 'Música',
    icon: (
      <svg width="23" height="23" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M9.5 17 V6" />
        <path d="M18.5 15 V4" />
        <path d="M9.5 6 L18.5 4" />
        <path d="M9.5 8.5 L18.5 6.5" />
        <circle cx="7.5" cy="17" r="2" stroke={GOLD} />
        <circle cx="16.5" cy="15" r="2" stroke={GOLD} />
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
