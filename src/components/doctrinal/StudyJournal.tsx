import { useMemo } from 'react'
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
        className="fixed inset-y-0 right-0 z-50 flex w-full max-w-md flex-col border-l border-gold-main/25 bg-bg-surface shadow-2xl"
        aria-label="Diario de estudio"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-2 border-b border-gold-main/20 p-4">
          <div>
            <p className="font-ui text-xs font-semibold uppercase tracking-wider text-text-muted">Diario</p>
            <h2 className="font-title text-xl text-blue-accent">{lessonTitle}</h2>
            <p className="mt-1 font-ui text-xs text-text-muted">Lección: {lessonId}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-blue-accent/20 px-3 py-1 font-ui text-sm font-semibold text-blue-accent"
          >
            Cerrar
          </button>
        </div>
        <div className="border-b border-gold-main/15 bg-gold-dim/30 p-4">
          <p className="text-reading text-sm font-medium text-text-main">{summary}</p>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          {grouped.size === 0 ? (
            <p className="text-sm text-text-muted">Cuando guardes una nota guiada, aparecerá aquí.</p>
          ) : (
            <ul className="space-y-6">
              {Array.from(grouped.entries()).map(([topicTitle, items]) => (
                <li key={topicTitle}>
                  <h3 className="font-title text-base text-blue-accent">{topicTitle}</h3>
                  <ul className="mt-2 space-y-3">
                    {items.map((item) => (
                      <li
                        key={item.entryId}
                        className="rounded-lg border border-blue-accent/10 bg-white p-3 text-sm"
                      >
                        <p className="font-ui font-semibold text-text-main">{item.question}</p>
                        <p className="mt-1 whitespace-pre-wrap text-reading text-text-muted">{item.answerText}</p>
                        <p className="mt-2 font-ui text-[0.65rem] text-text-muted">
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
