import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import type { Lesson } from '@/types/doctrine'
import { ExplanationPanel } from '@/components/doctrinal/ExplanationPanel'
import { LevelBadge } from '@/components/doctrinal/LevelBadge'
import { MediaSlot } from '@/components/doctrinal/MediaSlot'
import { NoteEditor } from '@/components/doctrinal/NoteEditor'
import { QuickFacts } from '@/components/doctrinal/QuickFacts'
import { ScriptureBlock } from '@/components/doctrinal/ScriptureBlock'
import { TextToSpeechButton } from '@/components/doctrinal/TextToSpeechButton'
import { splitPlainParagraphs } from '@/lib/utils'
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

/**
 * Vista maestra de lección: pestañas Estudio / Texto original, TTS, notas y navegación.
 * Contenido 100 % React (sin iframe).
 *
 * @param props - Identificadores, lección y callback opcional de notas
 * @returns Sección completa de lección
 */
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

  const studyParagraphs = useMemo(() => splitPlainParagraphs(lesson.studyBodyPlain), [lesson.studyBodyPlain])
  const originalParagraphs = useMemo(() => splitPlainParagraphs(lesson.originalBodyPlain), [lesson.originalBodyPlain])

  const ttsText = tab === 'study' ? lesson.studyBodyPlain : lesson.originalBodyPlain
  const displayParagraphs = tab === 'study' ? studyParagraphs : originalParagraphs

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(ttsText)
    } catch {
      /* ignore */
    }
  }

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
          📚 Estudio
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
          📜 Texto original
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <TextToSpeechButton text={ttsText} />
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
        {tab === 'study' ? (
          <ExplanationPanel title="Ideas para reflexionar">
            <div className="space-y-4">
              {studyParagraphs.map((p, index) => (
                <p key={`study-${index}`} className="text-reading text-base leading-relaxed text-text-main">
                  {p}
                </p>
              ))}
            </div>
          </ExplanationPanel>
        ) : (
          <div className="space-y-4">
            {originalParagraphs.map((p, index) => (
              <p key={`orig-${index}`} className="text-reading text-base leading-relaxed text-text-main">
                {p}
              </p>
            ))}
          </div>
        )}

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
