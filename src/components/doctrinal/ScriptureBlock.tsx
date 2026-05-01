import { useId, useState } from 'react'
import type { ScriptureReference } from '@/types/doctrine'
import { churchOrgScripturesUrl } from '@/lib/utils'

export type ScriptureBlockProps = {
  scripture: ScriptureReference
}

function ScriptureIcon() {
  return (
    <svg
      className="h-5 w-5 shrink-0 text-blue-accent"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        d="M6 4.75C6 4.33579 6.33579 4 6.75 4H17.25C17.6642 4 18 4.33579 18 4.75V19.25C18 19.6642 17.6642 20 17.25 20H6.75C6.33579 20 6 19.6642 6 19.25V4.75Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M9 8H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 11H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M9 14H13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

/**
 * Tarjeta expandible para una cita de escritura con enlaces de apoyo.
 *
 * @param props - Referencia de escritura
 * @returns Bloque interactivo
 */
export function ScriptureBlock({ scripture }: ScriptureBlockProps) {
  const [open, setOpen] = useState(false)
  const baseId = useId()
  const headingId = `${baseId}-heading`
  const bodyId = `${baseId}-body`
  const churchUrl = churchOrgScripturesUrl(scripture.reference)

  return (
    <article
      className="overflow-hidden rounded-r-2xl border-l-4 border-blue-accent bg-blue-50/80 shadow-sm"
      aria-labelledby={headingId}
    >
      <button
        type="button"
        className="flex w-full items-start gap-3 px-4 py-4 text-left transition hover:bg-blue-50"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={bodyId}
        id={headingId}
      >
        <ScriptureIcon />
        <div className="min-w-0 flex-1">
          <p className="font-ui text-xs font-semibold uppercase tracking-wide text-gold-main">Escritura</p>
          <p className="font-title text-lg text-blue-accent">{scripture.reference}</p>
          {scripture.book ? (
            <p className="mt-1 font-ui text-sm text-text-muted">
              {scripture.book}
              {scripture.verses ? ` · vers. ${scripture.verses}` : ''}
            </p>
          ) : null}
        </div>
        <span className="font-ui text-xs text-text-muted" aria-hidden="true">
          {open ? '▲' : '▼'}
        </span>
      </button>
      {open ? (
        <div id={bodyId} className="flex flex-wrap gap-2 border-t border-blue-accent/10 px-4 py-3" role="region">
          <a
            href={churchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-blue-accent/30 bg-white px-3 py-1.5 font-ui text-xs font-semibold text-blue-accent transition hover:bg-blue-accent/5"
          >
            Leer en churchofjesuschrist.org
          </a>
          <button
            type="button"
            className="rounded-lg border border-gold-main/40 bg-gold-dim px-3 py-1.5 font-ui text-xs font-semibold text-blue-accent"
            onClick={() => {
              void navigator.clipboard?.writeText(scripture.reference)
            }}
          >
            Copiar referencia
          </button>
        </div>
      ) : null}
    </article>
  )
}
