import type { ReactNode } from 'react'
import { BottomNav } from '@/components/layout/BottomNav'
import { Header } from '@/components/layout/Header'
import { useCloudSync } from '@/hooks/useCloudSync'

export type LayoutProps = {
  children: ReactNode
}

function CloudSyncManager() {
  useCloudSync()
  return null
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-bg-surface text-text-main">
      <CloudSyncManager />
      <Header />
      <main className="flex-1 min-w-0 px-4 pb-28 pt-4 sm:px-6">{children}</main>
      <BottomNav />
    </div>
  )
}
