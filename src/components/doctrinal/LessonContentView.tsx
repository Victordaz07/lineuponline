import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '@/types/doctrine'
import { ExplanationPanel } from '@/components/doctrinal/ExplanationPanel'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'
import { MediaSlot } from '@/components/doctrinal/MediaSlot'
import { NoteEditor } from '@/components/doctrinal/NoteEditor'
import { QuickFacts } from '@/components/doctrinal/QuickFacts'
import { ScriptureBlock } from '@/components/doctrinal/ScriptureBlock'
import { StudyJournal } from '@/components/doctrinal/StudyJournal'
import { TextToSpeechButton } from '@/components/doctrinal/TextToSpeechButton'
import { LessonSectionHeader } from '@/components/doctrinal/LessonSectionHeader'
import { LessonSectionNav } from '@/components/doctrinal/LessonSectionNav'
import { LessonTopicCard } from '@/components/doctrinal/LessonTopicCard'
import {
  allTopicQuizzesCompleted,
  countTopicsInSections,
  paragraphsForSectionTts,
  topicHasQuiz,
} from '@/lib/lessonRichUtils'
import { splitPlainParagraphs } from '@/lib/utils'
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
}

type TabId = 'study' | 'original'

export function LessonContentView({
  moduleId,
  lessonId,
  title,
  lesson,
  heroImageUrl,
  onSaveNote,
}: LessonContentViewProps) {
  const [tab, setTab] = useState<TabId>('study')
  const [showNotes, setShowNotes] = useState(false)
  const [journalOpen, setJournalOpen] = useState(false)
  const [activeSectionId, setActiveSectionId] = useState<string>('')
  const [activeParagraphId, setActiveParagraphId] = useState<string | null>(null)

  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const sections = useMemo(() => lesson.studySections ?? [], [lesson.studySections])
  const isRich = Boolean(sections.length > 0)

  const studyParagraphs = useMemo(() => splitPlainParagraphs(lesson.studyBodyPlain), [lesson.studyBodyPlain])
  const originalParagraphs = useMemo(() => splitPlainParagraphs(lesson.originalBodyPlain), [lesson.originalBodyPlain])

  const ttsText =
    tab === 'study' ? lesson.studyBodyPlain : lesson.originalBodyPlain
  const displayParagraphs = tab === 'study' ? studyParagraphs : originalParagraphs

  const ttsAllParagraphs = useMemo(
    () => sections.flatMap((sec) => paragraphsForSectionTts(sec)),
    [sections],
  )

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

  // Initialize activeSectionId once sections are available
  useEffect(() => {
    if (sections.length > 0 && !activeSectionId) {
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

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ttsText)
    } catch {
      /* ignore */
    }
  }

  const activeIndex = sections.findIndex((s) => s.id === activeSectionId)

  return (
    <article className="mx-auto max-w-3xl space-y-6 pb-8">
      <header className="space-y-3 rounded-2xl border border-gold-main/20 bg-gradient-to-br from-white via-bg-surface to-bg-elevated p-6 shadow-sm">
        <p className="font-ui text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-text-muted">
          {tab === 'study' ? 'Estudio guiado' : 'Texto completo · discurso original'}
        </p>
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="font-title text-3xl text-blue-accent sm:text-4xl">{title}</h1>
            {lesson.author ? (
              <p className="mt-2 font-ui text-sm text-text-muted">
                por <span className="font-semibold text-text-main">{lesson.author}</span>
              </p>
            ) : null}
            {lesson.description ? (
              <p className="mt-3 max-w-prose text-reading text-base text-text-main">{lesson.description}</p>
            ) : null}
          </div>
          <LevelBadge level={lesson.level} />
        </div>
        {isRich ? (
          <div className="flex flex-col gap-2 border-t border-gold-main/15 pt-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="font-ui text-sm text-text-main">
              Progreso de temas:{' '}
              <span className="font-semibold text-blue-accent">
                {visitedTopicsCount} de {totalTopics}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setJournalOpen(true)}
              className="rounded-full border border-blue-accent/25 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent shadow-sm"
            >
              Diario de estudio
            </button>
          </div>
        ) : null}
      </header>

      {heroImageUrl || lesson.heroImage?.url ? (
        <MediaSlot
          src={heroImageUrl ?? lesson.heroImage?.url}
          alt={lesson.heroImage?.alt ?? 'Imagen de la lección'}
          caption="Imagen ilustrativa del tema"
        />
      ) : null}

      <div
        role="tablist"
        aria-label="Tipo de contenido"
        className="flex gap-2 border-b border-blue-accent/10 pb-px"
      >
        <button
          type="button"
          role="tab"
          aria-selected={tab === 'study'}
          className={`rounded-t-lg px-4 py-2 font-ui text-sm font-semibold transition ${
            tab === 'study' ? 'border-b-2 border-gold-main text-blue-accent' : 'text-text-muted hover:text-blue-accent'
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
              ? 'border-b-2 border-gold-main text-blue-accent'
              : 'text-text-muted hover:text-blue-accent'
          }`}
          onClick={() => setTab('original')}
        >
          Texto original
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        {tab === 'study' && isRich && ttsAllParagraphs.length > 0 ? (
          <TextToSpeechButton
            text={ttsAllParagraphs.map((p) => p.text).join('\n\n')}
            paragraphs={ttsAllParagraphs}
            onParagraphActive={setActiveParagraphId}
            label="Escuchar lección"
          />
        ) : (
          <TextToSpeechButton text={ttsText} label="Escuchar" />
        )}
        <button
          type="button"
          onClick={() => void handleCopy()}
          className="rounded-full border border-blue-accent/25 bg-white px-4 py-2 font-ui text-sm font-semibold text-blue-accent shadow-sm transition hover:bg-blue-accent/5"
        >
          Copiar texto
        </button>
        <button
          type="button"
          onClick={() => setShowNotes((v) => !v)}
          className="rounded-full border border-gold-main/40 bg-gold-dim px-4 py-2 font-ui text-sm font-semibold text-blue-accent"
          aria-expanded={showNotes}
        >
          {showNotes ? 'Ocultar notas' : 'Mis notas'}
        </button>
      </div>

      {tab === 'study' && lesson.quickFacts?.length ? <QuickFacts facts={lesson.quickFacts} /> : null}

      <div
        role="tabpanel"
        aria-label={tab === 'study' ? 'Contenido de estudio' : 'Texto original'}
        className="space-y-6 rounded-2xl border border-blue-accent/10 bg-white/95 p-5 shadow-inner sm:p-8"
      >
        {tab === 'study' && isRich ? (
          <div className="space-y-10">
            <LessonSectionNav
              sections={sections}
              activeIndex={activeIndex}
              onSelect={(i) => scrollToSection(sections[i].id)}
            />
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
                      activeParagraphId={activeParagraphId}
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
                <p key={`study-${index}`} className="text-reading text-base leading-relaxed text-text-main">
                  {p}
                </p>
              ))}
            </div>
          </ExplanationPanel>
        ) : null}

        {tab === 'original' ? (
          <div className="space-y-4">
            {originalParagraphs.map((p, index) => (
              <p key={`orig-${index}`} className="text-reading text-base leading-relaxed text-text-main">
                {p}
              </p>
            ))}
          </div>
        ) : null}

        {lesson.scriptures?.length ? (
          <div className="space-y-3">
            <h2 className="font-title text-xl text-blue-accent">Escrituras relacionadas</h2>
            <div className="space-y-3">
              {lesson.scriptures.map((s) => (
                <ScriptureBlock key={s.reference} scripture={s} />
              ))}
            </div>
          </div>
        ) : null}
      </div>

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

      <nav
        className="flex flex-col gap-3 border-t border-gold-main/20 pt-6 sm:flex-row sm:justify-between"
        aria-label="Navegación entre lecciones"
      >
        {lesson.previousLessonId ? (
          <Link
            to={`/lesson/${moduleId}/${lesson.previousLessonId}`}
            className="inline-flex items-center justify-center rounded-xl border border-blue-accent/25 bg-white px-4 py-3 font-ui text-sm font-semibold text-blue-accent shadow-sm transition hover:bg-gold-dim"
          >
            ← Lección anterior
          </Link>
        ) : (
          <span className="text-sm text-text-muted">Inicio del módulo</span>
        )}
        <Link
          to={`/module/${moduleId}`}
          className="inline-flex items-center justify-center rounded-xl border border-gold-main/40 bg-gold-dim px-4 py-3 font-ui text-sm font-semibold text-blue-accent"
        >
          Volver al módulo
        </Link>
        {lesson.nextLessonId ? (
          <Link
            to={`/lesson/${moduleId}/${lesson.nextLessonId}`}
            className="inline-flex items-center justify-center rounded-xl border border-blue-accent/25 bg-white px-4 py-3 font-ui text-sm font-semibold text-blue-accent shadow-sm transition hover:bg-gold-dim"
          >
            Siguiente lección →
          </Link>
        ) : (
          <span className="text-sm text-text-muted sm:text-right">Fin del módulo</span>
        )}
      </nav>

      <p className="sr-only" aria-live="polite">
        Mostrando {displayParagraphs.length} bloques de texto en la pestaña {tab === 'study' ? 'estudio' : 'original'}.
      </p>
    </article>
  )
}
