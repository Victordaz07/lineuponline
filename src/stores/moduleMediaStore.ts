import { create } from 'zustand'
import type { ModuleMediaDoc } from '@/services/moduleMedia.service'

type ModuleMediaState = {
  media: Record<string, ModuleMediaDoc>
  setAll: (media: Record<string, ModuleMediaDoc>) => void
}

/**
 * Overlay dinámico de imágenes por personaje/tema (`SUBMODULE_GROUPS`),
 * subidas desde /admin/imagenes. Un solo listener en tiempo real (ver
 * MediaSyncManager en Layout.tsx) alimenta este store; los componentes de
 * lectura (SubmoduleHeroSection, etc.) solo seleccionan de aquí.
 */
export const useModuleMediaStore = create<ModuleMediaState>((set) => ({
  media: {},
  setAll: (media) => set({ media }),
}))
