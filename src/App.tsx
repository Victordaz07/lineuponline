import { useState } from 'react'
import type { FormEvent, ReactNode } from 'react'
import { HeroCard } from './components/molecules/HeroCard'
import { ImageSlot } from './components/molecules/ImageSlot'
import { ScriptureBlock } from './components/molecules/ScriptureBlock'
import { useSyncNotes } from './features/notes/hooks/useSyncNotes'
import type { UserNoteInput } from './types/firestore/userNotes'
import './App.css'

type NavItem = {
  id: string
  label: string
  icon: ReactNode
}

const NAV_ITEMS: NavItem[] = [
  {
    id: 'inicio',
    label: 'Inicio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3.75 10.5L12 4.5L20.25 10.5V19.5H3.75V10.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9.75 19.5V13.5H14.25V19.5" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'estudio',
    label: 'Estudio',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M5.25 5.25H11.25V18.75H5.25V5.25Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12.75 5.25H18.75V18.75H12.75V5.25Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 'notas',
    label: 'Notas',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M6 4.5H18V19.5H6V4.5Z" stroke="currentColor" strokeWidth="1.5" />
        <path d="M9 9H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 12.75H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

function App() {
  const [activeNav, setActiveNav] = useState('inicio')
  const [topicId, setTopicId] = useState('la-expiacion')
  const [moduleId, setModuleId] = useState('modulo-1')
  const [question, setQuestion] = useState('Que aprendiste de este modulo?')
  const [answerText, setAnswerText] = useState('')
  const [statusMessage, setStatusMessage] = useState<string | null>(null)

  // TODO: reemplazar por uid real cuando se conecte Auth.
  const userId = 'demo-user'
  const { isOnline, isSyncing, pendingCount, lastError, saveNote, flushPending } = useSyncNotes({
    userId,
  })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const trimmedAnswer = answerText.trim()
    if (!trimmedAnswer) {
      setStatusMessage('Escribe una respuesta antes de guardar.')
      return
    }

    const note: UserNoteInput = {
      noteId: crypto.randomUUID(),
      topicId: topicId.trim(),
      moduleId: moduleId.trim(),
      question: question.trim(),
      answerText: trimmedAnswer,
      clientUpdatedAt: new Date().toISOString(),
    }

    await saveNote(note)
    setAnswerText('')
    setStatusMessage(
      isOnline
        ? 'Nota guardada y enviada para sincronizacion.'
        : 'Nota guardada localmente. Se sincronizara al volver la conexion.',
    )
  }

  return (
    <div className="app-shell">
      <aside className="app-sidebar" aria-label="Navegacion principal">
        <div className="brand-block">
          <p className="brand-kicker">LineUponLine</p>
          <p className="brand-title">Estudio Profundo</p>
        </div>
        <nav className="sidebar-nav">
          {NAV_ITEMS.map((item) => {
            const isActive = activeNav === item.id
            return (
              <button
                key={item.id}
                className={`nav-item ${isActive ? 'is-active' : ''}`}
                type="button"
                onClick={() => setActiveNav(item.id)}
              >
                <span className="nav-icon">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            )
          })}
        </nav>
      </aside>

      <main className="content-shell">
        <header className="app-header">
          <p className="header-kicker">Edicion Celestial</p>
          <h1 className="header-title">LineUponLine</h1>
        </header>

        <div className="content-surface fade-in">
          <HeroCard
            eyebrow="Sistema de Diseño"
            title="La carne del evangelio, línea por línea"
            description="Interfaz reverente y clara para estudiar en profundidad, incluso sin conexión, con una experiencia visual sobria y premium."
          />

          <ImageSlot
            label="Placeholder A · Hero 16:9"
            ratio="16/9"
            src="/images/hero-celestial-a.png"
            alt="Placeholder para portada principal del estudio"
            description="Ilustración principal para portada del estudio (templo moderno, luz suave, composición horizontal)."
            caption="Reemplaza `src` con el asset final de Gemini para el banner principal."
          />

          <ScriptureBlock
            citation="2 Nefi 31:20"
            text="...debéis seguir adelante con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor por Dios y por todos los hombres."
          />

          <ImageSlot
            label="Placeholder B · Bloque doctrinal 4:3"
            ratio="4/3"
            src="/images/doctrinal-b.png"
            alt="Placeholder para imagen doctrinal secundaria"
            description="Imagen de apoyo para secciones de enseñanza (símbolos sagrados discretos y paleta azul/dorado)."
            caption="Ideal para assets temáticos por sección o módulo."
          />

          <section className="notes-card">
            <h2 className="mb-4 text-xl text-blue-accent">Notas de reflexion</h2>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <input
                className="celestial-input"
                value={topicId}
                onChange={(event) => setTopicId(event.target.value)}
                placeholder="topicId"
              />
              <input
                className="celestial-input"
                value={moduleId}
                onChange={(event) => setModuleId(event.target.value)}
                placeholder="moduleId"
              />
              <input
                className="celestial-input"
                value={question}
                onChange={(event) => setQuestion(event.target.value)}
                placeholder="Pregunta"
              />
              <textarea
                className="celestial-input min-h-28"
                value={answerText}
                onChange={(event) => setAnswerText(event.target.value)}
                placeholder="Escribe tu respuesta"
              />

              <div className="flex flex-wrap items-center gap-3">
                <button className="btn-primary" type="submit">
                  Guardar nota
                </button>
                <button className="btn-secondary" type="button" onClick={() => void flushPending()}>
                  Sincronizar ahora
                </button>
              </div>
            </form>

            <div className="mt-4 space-y-1 text-sm text-text-muted">
              <p>Estado de red: {isOnline ? 'En linea' : 'Sin conexion'}</p>
              <p>Sincronizando: {isSyncing ? 'Si' : 'No'}</p>
              <p>Pendientes: {pendingCount}</p>
              {statusMessage ? <p>{statusMessage}</p> : null}
              {lastError ? <p className="text-red-600">Error: {lastError}</p> : null}
            </div>
          </section>
        </div>
      </main>

      <nav className="bottom-nav" aria-label="Navegacion inferior">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNav === item.id
          return (
            <button
              key={item.id}
              className={`bottom-nav-item ${isActive ? 'is-active' : ''}`}
              type="button"
              onClick={() => setActiveNav(item.id)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          )
        })}
      </nav>
    </div>
  )
}

export default App
