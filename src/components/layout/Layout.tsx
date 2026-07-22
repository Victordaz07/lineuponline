import { useEffect, type ReactNode } from 'react'
import { BottomNav } from '@/components/layout/BottomNav'
import { Header } from '@/components/layout/Header'
import { Toaster } from '@/components/common/Toaster'
import { useCloudSync } from '@/hooks/useCloudSync'
import { usePreferencesStore, applyFontSize } from '@/stores/preferencesStore'
import { AudioMount } from '@/features/discography/components/AudioMount'
import { FullPlayer } from '@/features/discography/components/FullPlayer'
import { MiniPlayer } from '@/features/discography/components/MiniPlayer'
import { YouTubePlayerMount } from '@/features/discography/components/YouTubePlayerMount'
import { usePlayerStore } from '@/features/discography/store/usePlayerStore'

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
  const hasActiveTrack = usePlayerStore((s) => !!s.currentTrack)

  return (
    <div className="flex min-h-screen flex-col bg-navy-deep text-parchment">
      <CloudSyncManager />
      <FontSizeManager />
      <Header />
      <main className={`min-w-0 flex-1 px-4 pt-4 sm:px-6 ${hasActiveTrack ? 'pb-40' : 'pb-28'}`}>{children}</main>
      <YouTubePlayerMount />
      <AudioMount />
      <FullPlayer />
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col pb-[env(safe-area-inset-bottom)]">
        <MiniPlayer />
        <BottomNav />
      </div>
      <Toaster />
    </div>
  )
}
