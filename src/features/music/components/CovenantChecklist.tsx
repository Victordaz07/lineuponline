import { useState } from 'react'
import { Card } from '@/components/common/Card'
import { Button } from '@/components/common/Button'
import { useAuth } from '@/hooks/useAuth'
import {
  setCovenantField,
  setHumanAuthorshipLog,
  setSyntheticContentDisclosed,
  callPublishToYouTube,
} from '@/services/tracks.service'
import { COVENANT_GATE_KEYS, type CovenantCheck, type Track } from '@/types/music'

type GateKey = (typeof COVENANT_GATE_KEYS)[number]

const SECTIONS: { title: string; keys: Exclude<GateKey, 'preguntaFinalHonraLegado'>[] }[] = [
  {
    title: 'Historia',
    keys: ['historiaRespetaEscrituras', 'historiaRepresentaPersonaje', 'historiaInvitaAConocerMas'],
  },
  {
    title: 'Música',
    keys: ['musicaIdentidadPropia', 'musicaSuenaProfesional', 'musicaResisteElTiempo'],
  },
  {
    title: 'Letras',
    keys: ['letrasDespiertanCuriosidad', 'letrasRespetanTonoSagrado', 'letrasEvitanCliches'],
  },
  {
    title: 'Arte',
    keys: ['arteCuentaHistoria', 'arteTieneSimbolos', 'arteReconocibleComoSGM'],
  },
]

const QUESTION_LABELS: Record<GateKey, string> = {
  historiaRespetaEscrituras: '¿Respeta completamente las Escrituras?',
  historiaRepresentaPersonaje: '¿Representa correctamente al personaje?',
  historiaInvitaAConocerMas: '¿Invita a conocer más?',
  musicaIdentidadPropia: '¿Tiene identidad propia?',
  musicaSuenaProfesional: '¿Suena profesional?',
  musicaResisteElTiempo: '¿Podría escucharse dentro de diez años sin sentirse vieja?',
  letrasDespiertanCuriosidad: '¿Despiertan curiosidad?',
  letrasRespetanTonoSagrado: '¿Respetan el tono sagrado?',
  letrasEvitanCliches: '¿Evitan clichés?',
  arteCuentaHistoria: '¿Cuenta una historia?',
  arteTieneSimbolos: '¿Tiene símbolos?',
  arteReconocibleComoSGM: '¿Se reconoce inmediatamente como parte de Seeker Gospel?',
  preguntaFinalHonraLegado:
    'Si esta fuera la única canción que alguien escuchara sobre este personaje... ¿Honraría correctamente su legado?',
}

function isGateComplete(covenantCheck: CovenantCheck): boolean {
  return COVENANT_GATE_KEYS.every((key) => covenantCheck[key] === true)
}

export function CovenantChecklist({ track }: { track: Track }) {
  const { user } = useAuth()
  const [pendingKey, setPendingKey] = useState<GateKey | null>(null)
  const [notesDraft, setNotesDraft] = useState(track.humanAuthorshipLog.creativeDirectionNotes)
  const [savingNotes, setSavingNotes] = useState(false)
  const [publishing, setPublishing] = useState(false)
  const [publishError, setPublishError] = useState<string | null>(null)

  const reviewer = user?.email ?? user?.displayName ?? user?.uid ?? 'admin'
  const notesFilled = track.humanAuthorshipLog.creativeDirectionNotes.trim() !== ''
  const gateComplete = isGateComplete(track.covenantCheck)
  const canPublish = gateComplete && notesFilled && track.syntheticContentDisclosed

  async function toggle(key: GateKey, value: boolean) {
    setPendingKey(key)
    try {
      await setCovenantField(track.id, key, value, reviewer)
    } finally {
      setPendingKey(null)
    }
  }

  async function saveNotes() {
    setSavingNotes(true)
    try {
      await setHumanAuthorshipLog(track.id, { creativeDirectionNotes: notesDraft, reviewedBy: reviewer })
    } finally {
      setSavingNotes(false)
    }
  }

  async function handlePublish() {
    setPublishing(true)
    setPublishError(null)
    try {
      await callPublishToYouTube(track.id)
    } catch (err) {
      setPublishError(err instanceof Error ? err.message : 'Error al publicar.')
    } finally {
      setPublishing(false)
    }
  }

  function renderCheckbox(key: GateKey) {
    return (
      <label key={key} className="flex items-start gap-3 py-2">
        <input
          type="checkbox"
          checked={track.covenantCheck[key]}
          disabled={pendingKey === key}
          onChange={(e) => toggle(key, e.target.checked)}
          className="mt-0.5 h-4 w-4 rounded border-sg-gold/40 bg-navy-deep text-sg-gold focus:ring-sg-gold"
        />
        <span className="font-ui text-sm text-parchment/80">{QUESTION_LABELS[key]}</span>
      </label>
    )
  }

  return (
    <div className="space-y-4">
      <Card>
        <h3 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          The Creator&apos;s Covenant
        </h3>
        <div className="mt-3 divide-y divide-sg-gold/10">
          {SECTIONS.map((section) => (
            <div key={section.title} className="py-3 first:pt-0">
              <p className="mb-1 font-ui text-xs font-semibold uppercase tracking-wide text-parchment/40">
                {section.title}
              </p>
              {section.keys.map(renderCheckbox)}
            </div>
          ))}
        </div>
      </Card>

      <Card className="border-sg-gold/30">
        <p className="mb-2 font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Pregunta final
        </p>
        {renderCheckbox('preguntaFinalHonraLegado')}
      </Card>

      <Card>
        <h3 className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold">
          Autoría humana documentada
        </h3>
        <p className="mt-1 font-ui text-xs text-parchment/45">
          Obligatorio antes de poder marcar el Covenant como completo: ¿qué decisiones creativas tomó
          una persona (escritura elegida, dirección de tono, ajustes de letra, selección final entre
          variantes)?
        </p>
        <textarea
          value={notesDraft}
          onChange={(e) => setNotesDraft(e.target.value)}
          rows={4}
          className="mt-3 w-full rounded-lg border border-sg-gold/15 bg-navy-deep px-3 py-2 font-ui text-sm text-parchment/85 focus:outline-none focus:ring-1 focus:ring-sg-gold"
          placeholder="Decisiones creativas tomadas por una persona…"
        />
        <div className="mt-2 flex justify-end">
          <Button variant="secondary" onClick={saveNotes} loading={savingNotes}>
            Guardar notas
          </Button>
        </div>

        <label className="mt-4 flex items-center gap-3">
          <input
            type="checkbox"
            checked={track.syntheticContentDisclosed}
            onChange={(e) => setSyntheticContentDisclosed(track.id, e.target.checked)}
            className="h-4 w-4 rounded border-sg-gold/40 bg-navy-deep text-sg-gold focus:ring-sg-gold"
          />
          <span className="font-ui text-sm text-parchment/80">
            Contenido alterado o sintético divulgado (obligatorio antes de publicar)
          </span>
        </label>
      </Card>

      <Card>
        <div className="flex items-center justify-between">
          <div className="font-ui text-xs text-parchment/45">
            {track.covenantCheck.revisadoPor ? (
              <>
                Revisado por <span className="text-parchment/70">{track.covenantCheck.revisadoPor}</span>
                {track.covenantCheck.fechaRevision
                  ? ` · ${new Date(track.covenantCheck.fechaRevision).toLocaleString()}`
                  : null}
              </>
            ) : (
              'Aún sin revisión.'
            )}
          </div>
        </div>
        {publishError ? <p className="mt-2 font-ui text-xs text-red-400">{publishError}</p> : null}
        <div className="mt-3 flex justify-end">
          <Button onClick={handlePublish} disabled={!canPublish} loading={publishing}>
            Publicar en YouTube
          </Button>
        </div>
      </Card>
    </div>
  )
}
