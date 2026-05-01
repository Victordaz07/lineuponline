import type { ReactNode } from 'react'
import { BottomNav } from '@/components/layout/BottomNav'
import { Header } from '@/components/layout/Header'
import { Sidebar } from '@/components/layout/Sidebar'

export type LayoutProps = {
  children: ReactNode
}

/**
 * Layout principal con cabecera, sidebar en desktop y bottom nav en móvil.
 *
 * @param props - children de la ruta activa
 * @returns Shell de aplicación
 */
export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-bg-surface text-text-main">
      <Header />
      <div className="flex flex-1 min-h-0">
        <Sidebar />
        <main className="flex-1 min-w-0 px-4 pb-24 pt-4 sm:px-6 lg:pb-8">{children}</main>
      </div>
      <BottomNav />
    </div>
  )
}
