import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '@/types/doctrine'
import { ExplanationPanel } from '@/components/doctrinal/ExplanationPanel'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'
import { MediaSlot } from '@/components/doctrinal/MediaSlot'
import { NoteEditor } from '@/components/doctrinal/NoteEditor'
import { QuickFacts } from '@/components/doctrinal/QuickFacts'
import { ScriptureBlock } from '@/components/doctrinal/ScriptureBlock'
import { RelatedLessons } from '@/components/doctrinal/RelatedLessons'
import { StudyJournal } from '@/components/doctrinal/StudyJournal'
import { LessonPodcastPlayer } from '@/components/doctrinal/LessonPodcastPlayer'
import { LessonSectionHeader } from '@/components/doctrinal/LessonSectionHeader'
import { LessonSectionNav } from '@/components/doctrinal/LessonSectionNav'
import { LessonTopicCard } from '@/components/doctrinal/LessonTopicCard'
import {
  allTopicQuizzesCompleted,
  countTopicsInSections,
  topicHasQuiz,
} from '@/lib/lessonRichUtils'
import { splitPlainParagraphs } from '@/lib/utils'
import { LessonDisclaimer } from '@/components/doctrinal/LessonDisclaimer'
import { OriginalTextRenderer } from '@/components/doctrinal/OriginalTextRenderer'
import { useLessonProgressStore } from '@/stores/lessonProgressStore'
import { useStudyJournalStore } from '@/stores/studyJournalStore'
import type { UserNoteInput } from '@/types/userNotes'

export type LessonContentViewProps = {
  moduleId: string
  lessonId: string
  title: string
  lesson: Lesson
  heroImageUrl?: string
  onSaveNote?: (note: UserNoteInput) => Promise<void>
  isComplete?: boolean
  onMarkComplete?: () => void
}

type TabId = 'study' | 'original'

export function LessonContentView({
  moduleId,
  lessonId,
  title,
  lesson,
  heroImageUrl,
  onSaveNote,
  isComplete = false,
  onMarkComplete,
}: LessonContentViewProps) {
  const [tab, setTab] = useState<TabId>('study')
  const [showNotes, setShowNotes] = useState(false)
  const [journalOpen, setJournalOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<string>('')

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const sections = useMemo(() => lesson.studySections ?? [], [lesson.studySections])
  const isRich = Boolean(sections.length > 0)
  const hasOriginal = (lesson.originalBodyPlain ?? '').trim().length > 0

  const studyParagraphs = useMemo(() => splitPlainParagraphs(lesson.studyBodyPlain), [lesson.studyBodyPlain])
  const originalParagraphs = useMemo(() => splitPlainParagraphs(lesson.originalBodyPlain), [lesson.originalBodyPlain])

  const displayParagraphs = tab === 'study' ? studyParagraphs : originalParagraphs

  const totalTopics = useMemo(() => countTopicsInSections(sections), [sections])

  const markTopicVisited = useLessonProgressStore((s) => s.markTopicVisited)
  const markQuizCompleted = useLessonProgressStore((s) => s.markQuizCompleted)
  const isTopicVisited = useLessonProgressStore((s) => s.isTopicVisited)
  const isQuizCompleted = useLessonProgressStore((s) => s.isQuizCompleted)

  const journalEntriesRaw = useStudyJournalStore((s) => s.entries)
  const journalEntries = useMemo(
    () =>
      journalEntriesRaw
        .filter((e) => e.lessonId === lessonId)
        .sort((a, b) => (a.clientUpdatedAt < b.clientUpdatedAt ? 1 : -1)),
    [journalEntriesRaw, lessonId],
  )

  const journalTopicTitles = useMemo(() => {
    const seen = new Set<string>()
    const titles: string[] = []
    for (const e of journalEntriesRaw) {
      if (e.lessonId !== lessonId) {
        continue
      }
      if (!seen.has(e.topicId)) {
        seen.add(e.topicId)
        titles.push(e.topicTitle)
      }
    }
    return titles
  }, [journalEntriesRaw, lessonId])

  const addJournalEntry = useStudyJournalStore((s) => s.addEntry)

  const visitedTopicsCount = useMemo(() => {
    let n = 0
    for (const sec of sections) {
      for (const t of sec.topics) {
        if (isTopicVisited(`${lessonId}:${t.id}`)) {
          n += 1
        }
      }
    }
    return n
  }, [sections, isTopicVisited, lessonId])

  // Auto-mark lesson complete when every topic has been visited
  useEffect(() => {
    if (isComplete || !onMarkComplete) return
    if (isRich && totalTopics > 0 && visitedTopicsCount >= totalTopics) {
      onMarkComplete()
    }
  }, [visitedTopicsCount, totalTopics, isRich, isComplete, onMarkComplete])

  // Initialize activeSectionId once sections are available
  useEffect(() => {
    if (sections.length > 0 && !activeSectionId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setActiveSectionId(sections[0].id)
    }
  }, [sections, activeSectionId])

  // Track which section is in view as the user scrolls
  useEffect(() => {
    if (!isRich || sections.length === 0) return
    const observer = new IntersectionObserver(
      (entries) => {
        const topmost = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
        if (topmost) {
          const id = (topmost.target as HTMLElement).dataset.sectionId
          if (id) setActiveSectionId(id)
        }
      },
      { rootMargin: '-80px 0px -50% 0px', threshold: 0 },
    )
    for (const el of Object.values(sectionRefs.current)) {
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [isRich, sections])

  function scrollToSection(sectionId: string) {
    sectionRefs.current[sectionId]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleJournalSave = useCallback(
    (payload: {
      topicId: string
      topicTitle: string
      promptId: string
      question: string
      answerText: string
    }) => {
      addJournalEntry({
        entryId: `${lessonId}-${payload.topicId}-${payload.promptId}-${Date.now()}`,
        lessonId,
        moduleId,
        topicId: payload.topicId,
        topicTitle: payload.topicTitle,
        promptId: payload.promptId,
        question: payload.question,
        answerText: payload.answerText,
        clientUpdatedAt: new Date().toISOString(),
      })
    },
    [addJournalEntry, lessonId, moduleId],
  )

  const activeIndex = sections.findIndex((s) => s.id === activeSectionId)

  return (
    <article className="mx-auto max-w-3xl space-y-6 pb-8">
      <LessonDisclaimer />
      <header className="space-y-3 rounded-2xl border border-sg-gold/20 bg-navy-mid p-6 shadow-sm">
        <p className="font-ui text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-parchment/50">
          {tab === 'study' ? 'Estudio guiado' : 'Texto completo · discurso original'}
        </p>
        <h1 className="font-display text-3xl font-semibold leading-tight text-parchment sm:text-4xl">{title}</h1>
        {lesson.author ? (
          <p className="font-ui text-sm text-parchment/50">
            por <span className="font-semibold text-parchment/80">{lesson.author}</span>
          </p>
        ) : null}
        {lesson.description ? (
          <p className="max-w-prose font-display text-base leading-relaxed text-parchment/70">{lesson.description}</p>
        ) : null}
        {/* Badges a los extremos, como en el diseño: nivel a la izquierda, estado a la derecha */}
        <div className="flex flex-wrap items-center justify-between gap-2">
          <LevelBadge level={lesson.level} />
          {isComplete ? (
            <span className="inline-flex items-center gap-1.5 font-ui text-xs font-bold text-jade">
              ✓ Completada
            </span>
          ) : isRich ? (
            <span className="font-ui text-xs text-parchment/55">
              Progreso:{' '}
              <span className="font-semibold text-sg-gold-light">
                {visitedTopicsCount}/{totalTopics} temas
              </span>
            </span>
          ) : null}
        </div>
      </header>

      {/* Hero — protagonista, debajo de la tarjeta (sin leyenda) */}
      {heroImageUrl || lesson.heroImage?.url ? (
        <MediaSlot
          src={heroImageUrl ?? lesson.heroImage?.url}
          alt={lesson.heroImage?.alt ?? 'Imagen de la lección'}
        />
      ) : null}

      {/* Reproductor de la lección (fuera de la tarjeta) */}
      <LessonPodcastPlayer lessonId={lessonId} lessonTitle={title} />

      {/* Mis notas — a la derecha, como en el diseño */}
      <div className="flex justify-end">
        <button
          type="button"
          onClick={() => setJournalOpen(true)}
          className="flex items-center gap-2 rounded-full px-3.5 py-2 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 20h9" />
            <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4 12.5-12.5z" />
          </svg>
          Mis notas
        </button>
      </div>

      {hasOriginal ? (
        <div
          role="tablist"
          aria-label="Tipo de contenido"
          className="flex gap-2 border-b border-sg-gold/15 pb-px"
        >
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'study'}
            className={`rounded-t-lg px-4 py-2 font-ui text-sm font-semibold transition ${
              tab === 'study' ? 'border-b-2 border-sg-gold text-sg-gold-light' : 'text-parchment/40 hover:text-parchment'
            }`}
            onClick={() => setTab('study')}
          >
            Estudio
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'original'}
            className={`rounded-t-lg px-4 py-2 font-ui text-sm font-semibold transition ${
              tab === 'original'
                ? 'border-b-2 border-sg-gold text-sg-gold-light'
                : 'text-parchment/40 hover:text-parchment'
            }`}
            onClick={() => setTab('original')}
          >
            Texto original
          </button>
        </div>
      ) : null}

      {tab === 'study' && lesson.quickFacts?.length ? <QuickFacts facts={lesson.quickFacts} /> : null}

      {/* Riel de progreso — tarjeta propia, integrada antes del contenido */}
      {tab === 'study' && isRich && sections.length > 1 ? (
        <LessonSectionNav
          sections={sections}
          activeIndex={activeIndex}
          onSelect={(i) => scrollToSection(sections[i].id)}
        />
      ) : null}

      <div
        role="tabpanel"
        aria-label={tab === 'study' ? 'Contenido de estudio' : 'Texto original'}
        className="space-y-6 rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 sm:p-8"
      >
        {tab === 'study' && isRich ? (
          <div className="space-y-10">
            {sections.map((section) => (
              <div
                key={section.id}
                ref={(el) => { sectionRefs.current[section.id] = el }}
                data-section-id={section.id}
                className="scroll-mt-20 space-y-6"
              >
                {section.intro ? <LessonSectionHeader intro={section.intro} /> : null}
                <div className="space-y-4">
                  {section.topics.map((topic) => (
                    <LessonTopicCard
                      key={topic.id}
                      lessonId={lessonId}
                      moduleId={moduleId}
                      topic={topic}
                      isVisited={isTopicVisited(`${lessonId}:${topic.id}`)}
                      hasQuiz={topicHasQuiz(topic)}
                      quizCompleted={allTopicQuizzesCompleted(lessonId, topic, isQuizCompleted)}
                      onTopicOpened={() => markTopicVisited(`${lessonId}:${topic.id}`)}
                      onSaveNote={onSaveNote}
                      onJournalSave={handleJournalSave}
                      onQuizComplete={(key) => markQuizCompleted(key)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        ) : null}

        {tab === 'study' && !isRich ? (
          <ExplanationPanel title="Ideas para reflexionar">
            <div className="space-y-4">
              {studyParagraphs.map((p, index) => (
                <p key={`study-${index}`} className="font-display text-base leading-relaxed text-parchment/80">
                  {p}
                </p>
              ))}
            </div>
          </ExplanationPanel>
        ) : null}

        {tab === 'original' && lesson.originalBodyPlain ? (
          <OriginalTextRenderer text={lesson.originalBodyPlain} />
        ) : null}

        {lesson.scriptures?.length ? (
          <div className="space-y-3">
            <h2 className="font-display text-xl text-parchment">Escrituras relacionadas</h2>
            <div className="space-y-3">
              {lesson.scriptures.map((s) => (
                <ScriptureBlock key={s.reference} scripture={s} />
              ))}
            </div>
          </div>
        ) : null}
      </div>

      {/* Acciones de la lección — notas al margen (junto al pie) */}
      {onSaveNote ? (
        <div className="flex flex-wrap items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => setShowNotes((v) => !v)}
            className="rounded-full border border-sg-gold/30 px-3.5 py-1.5 font-ui text-xs font-semibold text-parchment/60 transition hover:border-sg-gold/50 hover:text-parchment/80"
            aria-expanded={showNotes}
          >
            {showNotes ? 'Ocultar notas al margen' : 'Notas al margen'}
          </button>
        </div>
      ) : null}

      {showNotes && onSaveNote ? (
        <NoteEditor
          moduleId={moduleId}
          lessonId={lessonId}
          onSave={onSaveNote}
          onCancel={() => setShowNotes(false)}
        />
      ) : null}

      <StudyJournal
        open={journalOpen}
        onClose={() => setJournalOpen(false)}
        lessonId={lessonId}
        lessonTitle={title}
        entries={journalEntries}
        uniqueTopicTitles={journalTopicTitles}
      />

      {/* Completion banner / manual button */}
      {isComplete ? (
        <div className="flex items-center gap-3 rounded-2xl border border-jade/40 bg-jade/12 px-5 py-4">
          <span className="text-2xl" aria-hidden="true">✓</span>
          <div>
            <p className="font-ui text-sm font-semibold text-jade">Lección completada</p>
            <p className="font-ui text-xs text-jade/70">Esta lección ya cuenta en tu progreso general.</p>
          </div>
        </div>
      ) : onMarkComplete ? (
        <button
          type="button"
          onClick={onMarkComplete}
          className="w-full rounded-2xl border border-jade/40 bg-jade/15 py-3 font-ui text-sm font-semibold text-jade transition hover:bg-jade/25"
        >
          Marcar como completada
        </button>
      ) : null}

      <RelatedLessons lesson={lesson} />

      <nav
        className="flex flex-col gap-3 border-t border-sg-gold/20 pt-6 sm:flex-row sm:justify-between"
        aria-label="Navegación entre lecciones"
      >
        {lesson.previousLessonId ? (
          <Link
            to={`/lesson/${moduleId}/${lesson.previousLessonId}`}
            className="inline-flex items-center justify-center rounded-xl border border-sg-gold/25 bg-navy-mid px-4 py-3 font-ui text-sm font-semibold text-sg-gold-light shadow-sm transition hover:bg-sg-gold/10"
          >
            ← Lección anterior
          </Link>
        ) : (
          <span className="text-sm text-parchment/40">Inicio del módulo</span>
        )}
        <Link
          to={`/module/${moduleId}`}
          className="inline-flex items-center justify-center rounded-xl border border-sg-gold/40 bg-sg-gold/10 px-4 py-3 font-ui text-sm font-semibold text-sg-gold-light transition hover:bg-sg-gold/20"
        >
          Volver al módulo
        </Link>
        {lesson.nextLessonId ? (
          <Link
            to={`/lesson/${moduleId}/${lesson.nextLessonId}`}
            className="inline-flex items-center justify-center rounded-xl border border-sg-gold/25 bg-navy-mid px-4 py-3 font-ui text-sm font-semibold text-sg-gold-light shadow-sm transition hover:bg-sg-gold/10"
          >
            Siguiente lección →
          </Link>
        ) : (
          <span className="text-sm text-parchment/40 sm:text-right">Fin del módulo</span>
        )}
      </nav>

      <p className="sr-only" aria-live="polite">
        Mostrando {displayParagraphs.length} bloques de texto en la pestaña {tab === 'study' ? 'estudio' : 'original'}.
      </p>
    </article>
  )
}
