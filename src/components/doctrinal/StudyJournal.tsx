import { useEffect, useRef, useMemo } from 'react'
import type { StudyJournalEntry } from '@/stores/studyJournalStore'

export type StudyJournalProps = {
  open: boolean
  onClose: () => void
  lessonId: string
  lessonTitle: string
  entries: StudyJournalEntry[]
  uniqueTopicTitles: string[]
}

/**
 * Panel lateral con notas guardadas en la lección y resumen de temas reflexionados.
 */
export function StudyJournal({ open, onClose, lessonId, lessonTitle, entries, uniqueTopicTitles }: StudyJournalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const asideRef = useRef<HTMLElement>(null)

  useEffect(() => {
    if (!open) return
    closeButtonRef.current?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab' || !asideRef.current) return

      const focusable = asideRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      )
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus() }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus() }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  const grouped = useMemo(() => {
    const map = new Map<string, StudyJournalEntry[]>()
    for (const e of entries) {
      const list = map.get(e.topicTitle) ?? []
      list.push(e)
      map.set(e.topicTitle, list)
    }
    return map
  }, [entries])

  if (!open) {
    return null
  }

  const summary =
    uniqueTopicTitles.length > 0
      ? `Hoy reflexionaste sobre: ${uniqueTopicTitles.join(', ')}.`
      : 'Aún no hay notas guardadas para esta lección.'

  return (
    <>
      <button
        type="button"
        className="fixed inset-0 z-40 bg-black/40 backdrop-blur-[1px]"
        aria-label="Cerrar diario de estudio"
        onClick={onClose}
      />
      <aside
        ref={asideRef}
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-sg-gold/20 bg-navy-mid shadow-2xl"
        aria-label="Diario de estudio"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-2 border-b border-sg-gold/15 p-4">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-wider text-parchment/55">Diario</p>
            <h2 className="font-display text-xl text-parchment">{lessonTitle}</h2>
            <p className="mt-1 font-ui text-xs text-parchment/50">Lección: {lessonId}</p>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="rounded-full border border-sg-gold/20 px-3 py-1 font-ui text-sm font-semibold text-parchment/70 hover:bg-navy-deep/50"
          >
            Cerrar
          </button>
        </div>
        <div className="border-b border-sg-gold/15 bg-sg-gold/5 p-4">
          <p className="font-display text-sm font-medium text-parchment/80">{summary}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {grouped.size === 0 ? (
            <p className="text-sm text-parchment/50">Cuando guardes una nota guiada, aparecerá aquí.</p>
          ) : (
            <ul className="space-y-6">
              {Array.from(grouped.entries()).map(([topicTitle, items]) => (
                <li key={topicTitle}>
                  <h3 className="font-display text-base text-sg-gold-light">{topicTitle}</h3>
                  <ul className="mt-2 space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.entryId}
                        className="rounded-lg border border-sg-gold/15 bg-navy-deep p-3 text-sm"
                      >
                        <p className="font-ui font-semibold text-parchment/85">{item.question}</p>
                        <p className="mt-1 whitespace-pre-wrap font-display text-parchment/65">{item.answerText}</p>
                        <p className="mt-2 font-ui text-[0.65rem] text-parchment/40">
                          {new Date(item.clientUpdatedAt).toLocaleString('es')}
                        </p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          )}
        </div>
      </aside>
    </>
  )
}
