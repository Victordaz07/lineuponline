import { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const PATHS = {
  Inicio:
    'M222.14,105.85l-80-80a20,20,0,0,0-28.28,0l-80,80A19.86,19.86,0,0,0,28,120v96a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V164h24v52a12,12,0,0,0,12,12h64a12,12,0,0,0,12-12V120A19.86,19.86,0,0,0,222.14,105.85ZM204,204H164V152a12,12,0,0,0-12-12H104a12,12,0,0,0-12,12v52H52V121.65l76-76,76,76Z',
  Estudio:
    'M232,44H160a43.86,43.86,0,0,0-32,13.85A43.86,43.86,0,0,0,96,44H24A12,12,0,0,0,12,56V200a12,12,0,0,0,12,12H96a20,20,0,0,1,20,20,12,12,0,0,0,24,0,20,20,0,0,1,20-20h72a12,12,0,0,0,12-12V56A12,12,0,0,0,232,44ZM96,188H36V68H96a20,20,0,0,1,20,20V192.81A43.79,43.79,0,0,0,96,188Zm124,0H160a43.71,43.71,0,0,0-20,4.83V88a20,20,0,0,1,20-20h60Z',
  Jugar:
    'M176,116H152a12,12,0,0,1,0-24h24a12,12,0,0,1,0,24ZM104,92h-4V88a12,12,0,0,0-24,0v4H72a12,12,0,0,0,0,24h4v4a12,12,0,0,0,24,0v-4h4a12,12,0,0,0,0-24ZM244.76,202.94a40,40,0,0,1-61,5.35,7,7,0,0,1-.53-.56L144.67,164H111.33L72.81,207.73c-.17.19-.35.38-.53.56A40,40,0,0,1,4.62,173.05a1.18,1.18,0,0,1,0-.2L21,88.79A63.88,63.88,0,0,1,83.88,36H172a64.08,64.08,0,0,1,62.93,52.48,1.8,1.8,0,0,1,0,.19l16.36,84.17a1.77,1.77,0,0,1,0,.2A39.74,39.74,0,0,1,244.76,202.94ZM172,140a40,40,0,0,0,0-80H83.89A39.9,39.9,0,0,0,44.62,93.06a1.55,1.55,0,0,0,0,.21l-16.34,84a16,16,0,0,0,13,18.44,16.07,16.07,0,0,0,13.86-4.21L96.9,144.07a12,12,0,0,1,9-4.07Zm55.76,37.31-7-35.95a63.84,63.84,0,0,1-44.27,22.46l24.41,27.72a16,16,0,0,0,26.85-14.23Z',
  Comunidad:
    'M164.38,181.1a52,52,0,1,0-72.76,0,75.89,75.89,0,0,0-30,28.89,12,12,0,0,0,20.78,12,53,53,0,0,1,91.22,0,12,12,0,1,0,20.78-12A75.89,75.89,0,0,0,164.38,181.1ZM100,144a28,28,0,1,1,28,28A28,28,0,0,1,100,144Zm147.21,9.59a12,12,0,0,1-16.81-2.39c-8.33-11.09-19.85-19.59-29.33-21.64a12,12,0,0,1-1.82-22.91,20,20,0,1,0-24.78-28.3,12,12,0,1,1-21-11.6,44,44,0,1,1,73.28,48.35,92.18,92.18,0,0,1,22.85,21.69A12,12,0,0,1,247.21,153.59Zm-192.28-24c-9.48,2.05-21,10.55-29.33,21.65A12,12,0,0,1,6.41,136.79,92.37,92.37,0,0,1,29.26,115.1a44,44,0,1,1,73.28-48.35,12,12,0,1,1-21,11.6,20,20,0,1,0-24.78,28.3,12,12,0,0,1-1.82,22.91Z',
  Música:
    'M215.38,14.54a12,12,0,0,0-10.29-2.18l-128,32A12,12,0,0,0,68,56V159.35A40,40,0,1,0,92,196V113.37l104-26v40A40,40,0,1,0,220,164V24A12,12,0,0,0,215.38,14.54ZM52,212a16,16,0,1,1,16-16A16,16,0,0,1,52,212ZM92,88.63V65.37l104-26V62.63ZM180,180a16,16,0,1,1,16-16A16,16,0,0,1,180,180Z',
} as const

type IconKey = keyof typeof PATHS

const items: { to: string; end: boolean; label: string; icon: IconKey }[] = [
  { to: '/', end: true, label: 'Inicio', icon: 'Inicio' },
  { to: '/module/doctrina-fundamental', end: false, label: 'Estudio', icon: 'Estudio' },
  { to: '/games/scripture-quest', end: false, label: 'Jugar', icon: 'Jugar' },
  { to: '/community', end: false, label: 'Comunidad', icon: 'Comunidad' },
  { to: '/musica', end: false, label: 'Música', icon: 'Música' },
]

export function BottomNav() {
  const [bumped, setBumped] = useState<string | null>(null)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  function handleTap(to: string) {
    if (timerRef.current) clearTimeout(timerRef.current)
    setBumped(to)
    timerRef.current = setTimeout(() => setBumped(null), 340)
  }

  return (
    <nav
      className="bg-navy-deep/95 shadow-[0_-4px_20px_rgba(0,0,0,0.35)] backdrop-blur-md"
      style={{ borderRadius: '24px 24px 0 0' }}
      aria-label="Navegación principal"
    >
      <div className="mx-auto flex max-w-lg px-2.5 pb-3 pt-4">
        {items.map(({ to, end, label, icon }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            onClick={() => handleTap(to)}
            className={({ isActive }) =>
              `flex min-w-0 flex-1 flex-col items-center gap-0 ${
                isActive ? 'text-sg-gold-light' : 'text-parchment/[0.42]'
              }`
            }
            aria-label={label}
          >
            {({ isActive }) => (
              <>
                {/* Icon with tap bounce */}
                <span
                  className="block"
                  style={bumped === to ? { animation: 'navPop 0.32s ease-out' } : undefined}
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 256 256"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d={PATHS[icon]} />
                  </svg>
                </span>

                {/* Pill slot — fixed height so active/inactive items are the same size */}
                <span className="relative flex h-[7px] w-full items-center justify-center">
                  {isActive && (
                    <span
                      className="rounded-full bg-sg-gold-light"
                      style={{
                        width: '16px',
                        height: '3px',
                        animation: 'navPill 0.28s ease-out',
                      }}
                    />
                  )}
                </span>

                {/* Label */}
                <span
                  className="font-ui text-[0.6rem] leading-none"
                  style={{ fontWeight: isActive ? 700 : 600 }}
                >
                  {label}
                </span>
              </>
            )}
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
