import { useState } from 'react'

/**
 * Aviso legal doctrinal visible en todas las pantallas de lección.
 *
 * Tres estados (como en el diseño):
 *  - 'line'    → línea delgada con el aviso clave (por defecto).
 *  - expandido → texto completo (al tocar la línea o la burbuja).
 *  - 'bubble'  → burbuja ℹ️ compacta a la derecha (al minimizar).
 *
 * El estado colapsado (línea vs burbuja) se recuerda entre lecciones, así que
 * una vez leído, el usuario puede dejarlo como una burbuja discreta.
 */

type CollapsedMode = 'line' | 'bubble'
const STORAGE_KEY = 'lineup-disclaimer-mode'

function loadMode(): CollapsedMode {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'bubble' ? 'bubble' : 'line'
  } catch {
    return 'line'
  }
}

const FULL_TEXT = (
  <p className="text-parchment/60 [&_strong]:font-semibold [&_strong]:text-parchment/80">
    <strong>Seeker Gospel</strong> es un recurso <strong>independiente</strong>: no está afiliado,
    respaldado ni constituye publicación oficial de{' '}
    <strong>La Iglesia de Jesucristo de los Santos de los Últimos Días</strong> ni de ningún otro
    organismo religioso. El contenido se ofrece solo como ayuda para{' '}
    <strong>estudiar y analizar</strong> por tu cuenta temas doctrinales y de las escrituras. Para
    doctrina, prácticas y declaraciones conferidas oficialmente debés recurrir a{' '}
    <a
      href="https://www.churchofjesuschrist.org/"
      target="_blank"
      rel="noopener noreferrer"
      className="font-semibold text-sg-gold-light underline decoration-sg-gold/30 underline-offset-2 hover:decoration-sg-gold"
    >
      ChurchofJesusChrist.org
    </a>{' '}
    y a los materiales publicados por la Iglesia en sus canales autorizados.
  </p>
)

export function LessonDisclaimer() {
  const [mode, setMode] = useState<CollapsedMode>(loadMode)
  const [expanded, setExpanded] = useState(false)

  function persistMode(next: CollapsedMode) {
    setMode(next)
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* ignore */
    }
  }

  // Burbuja minimizada: ℹ️ discreta alineada a la derecha.
  if (mode === 'bubble' && !expanded) {
    return (
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setExpanded(true)}
          aria-label="Ver aviso: este material no es oficial de la Iglesia"
          title="Este material no es oficial de la Iglesia"
          className="flex h-8 w-8 items-center justify-center rounded-full border border-sg-gold/35 bg-navy-mid text-sm shadow-sm transition hover:border-sg-gold/60"
          style={{ animation: 'disclaimerPop 0.3s ease' }}
        >
          <span aria-hidden="true">ℹ️</span>
        </button>
      </div>
    )
  }

  return (
    <aside
      aria-label="Aviso sobre el carácter no oficial del contenido"
      className="overflow-hidden rounded-2xl border border-sg-gold/20 bg-navy-mid shadow-sm"
      style={{ animation: 'disclaimerFadeIn 0.3s ease' }}
    >
      <div className="flex items-center gap-2 px-4 py-2.5">
        <span className="shrink-0 text-base leading-none opacity-75" aria-hidden="true">
          ℹ️
        </span>
        <button
          type="button"
          onClick={() => setExpanded((e) => !e)}
          aria-expanded={expanded}
          className="flex min-w-0 flex-1 items-center gap-2 text-left"
        >
          <span className="min-w-0 flex-1 truncate font-ui text-[13px] font-semibold text-sg-gold-light">
            Este material no es oficial de la Iglesia
          </span>
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`shrink-0 text-parchment/40 transition-transform ${expanded ? 'rotate-180' : ''}`}
            aria-hidden="true"
          >
            <path d="M4 6l4 4 4-4" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => {
            setExpanded(false)
            persistMode('bubble')
          }}
          aria-label="Minimizar aviso"
          className="shrink-0 rounded-md px-1 text-parchment/40 transition hover:text-parchment"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d="M6 6l12 12M18 6L6 18" />
          </svg>
        </button>
      </div>

      {expanded && (
        <div
          className="border-t border-sg-gold/15 px-4 py-3 font-ui text-sm leading-snug"
          style={{ animation: 'disclaimerFadeIn 0.25s ease' }}
        >
          {FULL_TEXT}
        </div>
      )}
    </aside>
  )
}
