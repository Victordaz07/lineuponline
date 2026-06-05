import { BlockRenderer } from '@/components/doctrinal/blocks/BlockRenderer'
import type { LessonTopic } from '@/types/doctrine'
import type { UserNoteInput } from '@/types/userNotes'

export type LessonTopicCardProps = {
  lessonId: string
  moduleId: string
  topic: LessonTopic
  activeParagraphId?: string | null
  isVisited: boolean
  hasQuiz: boolean
  quizCompleted: boolean
  onTopicOpened: () => void
  onSaveNote?: (note: UserNoteInput) => Promise<void>
  onJournalSave?: (payload: {
    topicId: string
    topicTitle: string
    promptId: string
    question: string
    answerText: string
  }) => void
  onQuizComplete?: (quizKey: string) => void
}

function statusBadge(isVisited: boolean, hasQuiz: boolean, quizCompleted: boolean): { label: string; className: string } {
  if (hasQuiz && quizCompleted) {
    return { label: 'Quiz listo', className: 'bg-emerald-500/15 text-emerald-400' }
  }
  if (isVisited) {
    return { label: 'Visitado', className: 'bg-sg-gold/10 text-sg-gold-light' }
  }
  return { label: 'Nuevo', className: 'bg-sg-gold/10 text-sg-gold' }
}

export function LessonTopicCard({
  lessonId,
  moduleId,
  topic,
  activeParagraphId,
  isVisited,
  hasQuiz,
  quizCompleted,
  onTopicOpened,
  onSaveNote,
  onJournalSave,
  onQuizComplete,
}: LessonTopicCardProps) {
  const badge = statusBadge(isVisited, hasQuiz, quizCompleted)

  return (
    <details
      className="group rounded-2xl border border-sg-gold/20 bg-navy-mid shadow-sm open:shadow-md"
      onToggle={(e) => {
        const el = e.currentTarget
        if (el.open) onTopicOpened()
      }}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-2xl p-4 marker:hidden [&::-webkit-details-marker]:hidden">
        <div className="min-w-0 flex-1">
          <h3 className="font-display text-lg text-parchment">{topic.title}</h3>
          {topic.subtitle ? <p className="mt-1 font-ui text-sm text-parchment/55">{topic.subtitle}</p> : null}
        </div>
        <span className={`shrink-0 rounded-full px-3 py-1 font-ui text-xs font-semibold ${badge.className}`}>
          {badge.label}
        </span>
        <span
          className="shrink-0 text-sg-gold transition group-open:rotate-180"
          aria-hidden="true"
        >
          ▼
        </span>
      </summary>
      <div className="space-y-6 border-t border-sg-gold/15 px-4 pb-6 pt-4 sm:px-6">
        {topic.blocks.map((block, index) => (
          <BlockRenderer
            key={`${topic.id}-block-${index}`}
            block={block}
            lessonId={lessonId}
            moduleId={moduleId}
            topicId={topic.id}
            topicTitle={topic.title}
            blockIndex={index}
            activeParagraphId={activeParagraphId}
            onSaveNote={onSaveNote}
            onJournalSave={onJournalSave}
            onQuizComplete={onQuizComplete}
          />
        ))}
      </div>
    </details>
  )
}
