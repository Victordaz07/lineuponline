import type { LessonBlock } from '@/types/doctrine'
import type { UserNoteInput } from '@/types/userNotes'
import { BlockWrapper } from '@/components/doctrinal/blocks/BlockWrapper'
import { CentralQuoteBlock } from '@/components/doctrinal/blocks/CentralQuoteBlock'
import { CompareGridBlockComponent } from '@/components/doctrinal/blocks/CompareGridBlock'
import { CrisisCardsBlockComponent } from '@/components/doctrinal/blocks/CrisisCardsBlock'
import { DeepDiveBlockComponent } from '@/components/doctrinal/blocks/DeepDiveBlock'
import { DialogueBlockComponent } from '@/components/doctrinal/blocks/DialogueBlock'
import { DoctrineBoxBlock } from '@/components/doctrinal/blocks/DoctrineBoxBlock'
import { HighlightVerseBlock } from '@/components/doctrinal/blocks/HighlightVerseBlock'
import { KeyPointsBlock } from '@/components/doctrinal/blocks/KeyPointsBlock'
import { LeaderQuoteBlock } from '@/components/doctrinal/blocks/LeaderQuoteBlock'
import { MediaSlotBlock } from '@/components/doctrinal/blocks/MediaSlotBlock'
import { NotePromptsBlock } from '@/components/doctrinal/blocks/NotePromptsBlock'
import { ParagraphBlock } from '@/components/doctrinal/blocks/ParagraphBlock'
import { QuizBlockComponent, quizBlockListKey } from '@/components/doctrinal/blocks/QuizBlock'
import { ReflectionBlock } from '@/components/doctrinal/blocks/ReflectionBlock'
import { StepsBlock } from '@/components/doctrinal/blocks/StepsBlock'
import { TimelineBlockComponent } from '@/components/doctrinal/blocks/TimelineBlock'

export type BlockRendererProps = {
  block: LessonBlock
  lessonId: string
  moduleId: string
  topicId: string
  topicTitle: string
  /** 0-based index of this block within its topic — used to build the stable blockKey. */
  blockIndex?: number
  activeParagraphId?: string | null
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

/**
 * Enruta un bloque de lección a su componente visual y lo envuelve en
 * BlockWrapper para habilitar notas al margen en cualquier bloque.
 */
export function BlockRenderer({
  block,
  lessonId,
  moduleId,
  topicId,
  topicTitle,
  blockIndex,
  activeParagraphId,
  onSaveNote,
  onJournalSave,
  onQuizComplete,
}: BlockRendererProps) {
  const blockKey =
    blockIndex !== undefined ? `${lessonId}:${topicId}:${blockIndex}` : undefined

  function renderInner() {
    switch (block.type) {
      case 'paragraph':
        return (
          <ParagraphBlock
            block={block}
            highlightId={activeParagraphId}
            blockKey={blockKey}
            lessonId={lessonId}
            topicId={topicId}
          />
        )
      case 'leader_quote':
        return <LeaderQuoteBlock block={block} />
      case 'doctrine_box':
        return <DoctrineBoxBlock block={block} />
      case 'key_points':
        return <KeyPointsBlock block={block} />
      case 'steps':
        return <StepsBlock block={block} />
      case 'highlight_verse':
        return (
          <HighlightVerseBlock
            block={block}
            lessonId={lessonId}
            moduleId={moduleId}
            topicTitle={topicTitle}
            blockKey={blockKey}
            topicId={topicId}
          />
        )
      case 'central_quote':
        return <CentralQuoteBlock block={block} />
      case 'reflection':
        return <ReflectionBlock block={block} />
      case 'media_slot':
        return <MediaSlotBlock block={block} />
      case 'quiz':
        return (
          <QuizBlockComponent
            key={quizBlockListKey(block, lessonId)}
            block={block}
            lessonId={lessonId}
            onComplete={onQuizComplete}
          />
        )
      case 'note_prompts':
        return (
          <NotePromptsBlock
            block={block}
            moduleId={moduleId}
            lessonId={lessonId}
            topicId={topicId}
            topicTitle={topicTitle}
            onSaveNote={onSaveNote}
            onJournalSave={onJournalSave}
          />
        )
      case 'dialogue':
        return <DialogueBlockComponent block={block} />
      case 'compare_grid':
        return <CompareGridBlockComponent block={block} />
      case 'crisis_cards':
        return <CrisisCardsBlockComponent block={block} />
      case 'deep_dive':
        return <DeepDiveBlockComponent block={block} />
      case 'timeline':
        return <TimelineBlockComponent block={block} />
      default: {
        const exhaustive: never = block
        return exhaustive
      }
    }
  }

  if (!blockKey) return renderInner()

  return (
    <BlockWrapper
      blockKey={blockKey}
      lessonId={lessonId}
      topicId={topicId}
      blockType={block.type}
    >
      {renderInner()}
    </BlockWrapper>
  )
}
