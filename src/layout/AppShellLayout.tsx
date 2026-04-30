import { useMemo } from 'react'
import type { ReactNode } from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import '../App.css'

type NavItem = {
  id: string
  label: string
  path: string
  icon: ReactNode
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    path: '/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M3.75 10.5L12 4.5L20.25 10.5V19.5H3.75V10.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
        />
        <path d="M9.75 19.5V13.5H14.25V19.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'estudio',
    label: 'Estudio',
    path: '/module/doctrina-fundamental',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5.25 5.25H11.25V18.75H5.25V5.25Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.75 5.25H18.75V18.75H12.75V5.25Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'notas',
    label: 'Notas',
    path: '/notas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4.5H18V19.5H6V4.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12.75H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export function AppShellLayout() {
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const activeNav = useMemo(() => {
    if (pathname === '/notas') return 'notas'
    if (pathname === '/') return 'inicio'
    if (pathname.startsWith('/module') || pathname.startsWith('/lesson') || pathname === '/under-construction') {
      return 'estudio'
    }
    return 'inicio'
  }, [pathname])

  const handleNav = (item: NavItem) => {
    navigate(item.path)
  }

  return (
    <div className="app-shell">
      <aside className="app-sidebar" aria-label="Navegación principal">
        <button
          type="button"
          className="brand-block w-full cursor-pointer text-left"
          onClick={() => navigate('/')}
        >
          <p className="brand-kicker">LineUponLine</p>
          <p className="brand-title">Estudio Profundo</p>
        </button>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.id
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={() => handleNav(item)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="content-shell">
        <header className="app-header">
          <p className="header-kicker">Edición Celestial</p>
          <h1 className="header-title">LineUponLine</h1>
        </header>

        <div className="content-surface fade-in">
          <Outlet />
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Navegación inferior">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id
          return (
            <button
              key={item.id}
              className={`bottom-nav-item ${isActive ? 'is-active' : ''}`}
              type="button"
              onClick={() => handleNav(item)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}
