import { useEffect, type ReactNode } from 'react'
import { useLocation } from 'react-router-dom'
import { BottomNav } from '@/components/layout/BottomNav'
import { Header } from '@/components/layout/Header'
import { Toaster } from '@/components/common/Toaster'
import { useCloudSync } from '@/hooks/useCloudSync'
import { useImmersiveDoubleTap } from '@/hooks/useImmersiveDoubleTap'
import { useIsMobileViewport } from '@/hooks/useIsMobileViewport'
import { usePreferencesStore, applyFontSize, applyTheme } from '@/stores/preferencesStore'
import { useImmersiveStore } from '@/stores/immersiveStore'
import { useStreakStore } from '@/stores/streakStore'
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

function StreakManager() {
  const recordActivity = useStreakStore((s) => s.recordActivity)
  useEffect(() => { recordActivity() }, [recordActivity])
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

/**
 * Gobierna el modo inmersivo: el botón/gesto físico de "atrás" del teléfono
 * sale del modo inmersivo (en vez de abandonar la página); un cambio de ruta
 * también lo cierra; y si la pantalla deja de ser "móvil" (p. ej. al girar
 * a una tablet ancha) se cierra por seguridad, ya que es una función solo
 * para móvil.
 */
function ImmersiveManager() {
  const exitFromPopState = useImmersiveStore((s) => s.exitFromPopState)
  const isMobile = useIsMobileViewport()
  const { pathname } = useLocation()

  useEffect(() => {
    function onPopState() {
      exitFromPopState()
    }
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [exitFromPopState])

  useEffect(() => {
    // Cerrar al navegar a otra página; no se toca el historial aquí porque
    // el propio cambio de ruta ya movió la pila (ver useImmersiveDoubleTap/store).
    exitFromPopState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  useEffect(() => {
    if (!isMobile) exitFromPopState()
  }, [isMobile, exitFromPopState])

  return null
}

export function Layout({ children }: LayoutProps) {
  const hasActiveTrack = usePlayerStore((s) => !!s.currentTrack)
  const isImmersive = useImmersiveStore((s) => s.isImmersive)
  const handleImmersiveTap = useImmersiveDoubleTap()

  return (
    <div className="flex min-h-screen flex-col bg-navy-deep text-parchment">
      <CloudSyncManager />
      <FontSizeManager />
      <ThemeManager />
      <StreakManager />
      <ImmersiveManager />
      <Header />
      <main
        onClick={handleImmersiveTap}
        className={`min-w-0 flex-1 px-4 pt-4 transition-[padding-bottom] duration-300 ease-in-out sm:px-6 ${
          isImmersive ? 'pb-4' : hasActiveTrack ? 'pb-40' : 'pb-28'
        }`}
      >
        {children}
      </main>
      <YouTubePlayerMount />
      <AudioMount />
      <MediaSessionSync />
      <FullPlayer />
      <div
        className={`fixed inset-x-0 bottom-0 z-40 flex flex-col pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-in-out ${
          isImmersive ? 'translate-y-full' : 'translate-y-0'
        }`}
      >
        <MiniPlayer />
        <BottomNav />
      </div>
      <Toaster />
    </div>
  )
}
