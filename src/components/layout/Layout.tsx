import { useEffect, type ReactNode } from 'react'
import { BottomNav } from '@/components/layout/BottomNav'
import { Header } from '@/components/layout/Header'
import { Toaster } from '@/components/common/Toaster'
import { useCloudSync } from '@/hooks/useCloudSync'
import { usePreferencesStore, applyFontSize, applyTheme } from '@/stores/preferencesStore'
import { AudioMount } from '@/features/discography/components/AudioMount'
import { FullPlayer } from '@/features/discography/components/FullPlayer'
import { MediaSessionSync } from '@/features/discography/components/MediaSessionSync'
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

function ThemeManager() {
  const theme = usePreferencesStore((s) => s.theme)
  useEffect(() => {
    applyTheme(theme)
    if (theme !== 'system' || typeof window === 'undefined') return
    // En modo 'sistema', seguir los cambios del dispositivo en tiempo real.
    const mq = window.matchMedia('(prefers-color-scheme: light)')
    const onChange = () => applyTheme('system')
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [theme])
  return null
}

export function Layout({ children }: LayoutProps) {
  const hasActiveTrack = usePlayerStore((s) => !!s.currentTrack)

  return (
    <div className="flex min-h-screen flex-col bg-navy-deep text-parchment">
      <CloudSyncManager />
      <FontSizeManager />
      <ThemeManager />
      <Header />
      <main className={`min-w-0 flex-1 px-4 pt-4 sm:px-6 ${hasActiveTrack ? 'pb-40' : 'pb-28'}`}>{children}</main>
      <YouTubePlayerMount />
      <AudioMount />
      <MediaSessionSync />
      <FullPlayer />
      <div className="fixed inset-x-0 bottom-0 z-40 flex flex-col pb-[env(safe-area-inset-bottom)]">
        <MiniPlayer />
        <BottomNav />
      </div>
      <Toaster />
    </div>
  )
}
