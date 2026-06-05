import { useEffect, type ReactNode } from 'react'
import { BottomNav } from '@/components/layout/BottomNav'
import { Header } from '@/components/layout/Header'
import { Toaster } from '@/components/common/Toaster'
import { useCloudSync } from '@/hooks/useCloudSync'
import { usePreferencesStore, applyFontSize } from '@/stores/preferencesStore'

export type LayoutProps = {
  children: ReactNode
}

function CloudSyncManager() {
  useCloudSync()
  return null
}

function FontSizeManager() {
  const fontSize = usePreferencesStore((s) => s.fontSize)
  useEffect(() => { applyFontSize(fontSize) }, [fontSize])
  return null
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-navy-deep text-parchment">
      <CloudSyncManager />
      <FontSizeManager />
      <Header />
      <main className="flex-1 min-w-0 px-4 pb-28 pt-4 sm:px-6">{children}</main>
      <BottomNav />
      <Toaster />
    </div>
  )
}
