import { create } from 'zustand'

type ImmersiveState = {
  isImmersive: boolean
  /** Doble-tap en zona sin texto: oculta cabecera y barra inferior. */
  enter: () => void
  /** Doble-tap otra vez: siempre visible al usuario, dispara el "atrás" sintético. */
  exit: () => void
  /** El navegador ya navegó "atrás" (gesto/botón físico) — solo limpiar el estado. */
  exitFromPopState: () => void
  toggle: () => void
}

/**
 * Modo inmersivo (solo móvil): oculta la cabecera y la barra de navegación
 * inferior para dejar toda la pantalla al contenido de estudio. Al entrar se
 * empuja una entrada de historial "marcador" para que el botón/gesto físico
 * de "atrás" del teléfono salga del modo inmersivo antes de abandonar la
 * página — igual que un modal.
 */
export const useImmersiveStore = create<ImmersiveState>((set, get) => ({
  isImmersive: false,
  enter: () => {
    if (get().isImmersive) return
    set({ isImmersive: true })
    if (typeof window !== 'undefined') {
      window.history.pushState({ sgImmersive: true }, '')
    }
  },
  exit: () => {
    if (!get().isImmersive) return
    set({ isImmersive: false })
    if (typeof window !== 'undefined' && (window.history.state as { sgImmersive?: boolean } | null)?.sgImmersive) {
      window.history.back()
    }
  },
  exitFromPopState: () => {
    if (!get().isImmersive) return
    set({ isImmersive: false })
  },
  toggle: () => {
    if (get().isImmersive) get().exit()
    else get().enter()
  },
}))
