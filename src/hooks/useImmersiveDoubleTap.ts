import { useCallback, useRef } from 'react'
import type React from 'react'
import { useImmersiveStore } from '@/stores/immersiveStore'
import { useIsMobileViewport } from '@/hooks/useIsMobileViewport'

const MAX_DELAY_MS = 300
const MAX_DISTANCE_PX = 36

// Controles interactivos y texto seleccionable: el doble-tap ahí es para su
// propio uso (seleccionar palabra, anotar, tocar un botón), no para el modo inmersivo.
const EXCLUDED_SELECTOR =
  'button, a, input, textarea, select, summary, [role="button"], [contenteditable="true"], .select-text, mark, [data-no-immersive]'

function isExcludedTarget(target: EventTarget | null): boolean {
  return target instanceof Element ? Boolean(target.closest(EXCLUDED_SELECTOR)) : false
}

/**
 * Doble-tap en una zona sin texto → alterna el modo inmersivo. Solo activo
 * en anchos de móvil (ver useIsMobileViewport); en desktop no hace nada.
 */
export function useImmersiveDoubleTap() {
  const isMobile = useIsMobileViewport()
  const toggle = useImmersiveStore((s) => s.toggle)
  const lastTapRef = useRef<{ time: number; x: number; y: number } | null>(null)

  return useCallback(
    (e: React.MouseEvent) => {
      if (!isMobile) return
      if (isExcludedTarget(e.target)) {
        lastTapRef.current = null
        return
      }
      const now = Date.now()
      const last = lastTapRef.current
      if (
        last &&
        now - last.time < MAX_DELAY_MS &&
        Math.hypot(e.clientX - last.x, e.clientY - last.y) < MAX_DISTANCE_PX
      ) {
        lastTapRef.current = null
        toggle()
        return
      }
      lastTapRef.current = { time: now, x: e.clientX, y: e.clientY }
    },
    [isMobile, toggle],
  )
}
