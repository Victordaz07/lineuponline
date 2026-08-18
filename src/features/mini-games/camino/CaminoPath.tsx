import { useEffect, useMemo, useState } from 'react'
import { Link, useNavigate, useParams, useSearchParams } from 'react-router-dom'
import { stagesForVolume } from '../data/caminoStages'
import { getPilgrim, pilgrimSpriteSrc } from '../data/pilgrims'
import { getVolume } from '../data/scriptureVolumes'
import type { CaminoStage } from '../types/camino'
import { useCaminoStore } from '../store/caminoStore'

function StageNode({
  stage,
  unlocked,
  stars,
}: {
  stage: CaminoStage
  unlocked: boolean
  stars: number | undefined
}) {
  const playable = stage.status === 'ready' && unlocked
  const isFinal = stage.order === 8

  // Colores fijos (no relativos al tema claro/oscuro de la app): el nodo va
  // sobre arte fotográfico, no sobre el fondo de la app, y debe leerse igual
  // en cualquier modo.
  let style: { background: string; border: string; color: string }
  let content: string
  if (stage.status !== 'ready') {
    style = { background: 'rgba(30,30,35,0.55)', border: '2px dashed rgba(255,255,255,0.5)', color: '#F5EFE0' }
    content = '⏳'
  } else if (!unlocked) {
    style = { background: 'rgba(40,40,45,0.75)', border: '2px solid rgba(255,255,255,0.35)', color: '#F5EFE0' }
    content = '🔒'
  } else if (stars) {
    style = { background: '#E8C87A', border: '3px solid #8A6A22', color: '#241C0C' }
    content = '⭐'.repeat(stars)
  } else {
    style = { background: '#FFFCF2', border: '3px solid #B8923A', color: '#241C0C' }
    content = String(stage.order)
  }

  const badge = (
    <div
      className={`flex items-center justify-center rounded-full font-display font-bold shadow-[0_3px_10px_rgba(0,0,0,0.55)] transition ${
        isFinal ? 'h-14 w-14 text-base' : 'h-11 w-11 text-sm'
      } ${playable ? 'hover:scale-110' : ''}`}
      style={style}
    >
      {content}
    </div>
  )

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2"
      style={{ left: `${stage.position.x}%`, top: `${stage.position.y}%` }}
    >
      {playable ? (
        <Link to={`/games/sopa-de-letras/reto/${stage.id}`} aria-label={stage.title} title={stage.title}>
          {badge}
        </Link>
      ) : (
        <div aria-label={stage.status !== 'ready' ? 'Próximamente' : 'Bloqueado'} title={stage.status !== 'ready' ? 'Próximamente' : 'Completa la estación anterior'}>
          {badge}
        </div>
      )}
    </div>
  )
}

/** Tablero vertical de un volumen: mapa ilustrado con las 8 estaciones y el peregrino avanzando. */
export default function CaminoPath() {
  const { volumeId } = useParams<{ volumeId: string }>()
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const justCompleted = searchParams.get('justCompleted')

  const stageProgress = useCaminoStore((s) => s.stageProgress)
  const isStageUnlocked = useCaminoStore((s) => s.isStageUnlocked)
  const selectedPilgrimId = useCaminoStore((s) => s.selectedPilgrimId)

  const volume = volumeId ? getVolume(volumeId) : undefined
  const stages = useMemo(() => (volumeId ? stagesForVolume(volumeId) : []), [volumeId])

  const furthestOrder = useMemo(() => {
    const completed = stages.filter((s) => (stageProgress[s.id]?.stars ?? 0) >= 1)
    return completed.length ? Math.max(...completed.map((s) => s.order)) : 0
  }, [stages, stageProgress])

  const targetStage = stages.find((s) => s.order === furthestOrder + 1) ?? stages.find((s) => s.order === furthestOrder) ?? stages[0]
  const startStage = justCompleted ? stages.find((s) => s.id === justCompleted) : undefined

  const [pos, setPos] = useState(startStage?.position ?? targetStage?.position ?? { x: 50, y: 90 })
  const [walking, setWalking] = useState(Boolean(startStage && targetStage && startStage.id !== targetStage.id))

  useEffect(() => {
    if (!startStage || !targetStage || startStage.id === targetStage.id) return
    const t = setTimeout(() => setPos(targetStage.position), 120)
    const doneT = setTimeout(() => setWalking(false), 1100)
    return () => {
      clearTimeout(t)
      clearTimeout(doneT)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if (!volume) {
    return (
      <div className="mx-auto flex max-w-2xl flex-col gap-4 px-4 py-6 text-center">
        <p className="font-ui text-sm text-parchment/70">Ese volumen no existe.</p>
        <Link to="/games/sopa-de-letras" className="font-ui text-sm font-semibold text-sg-gold-light">
          ← Volver a los volúmenes
        </Link>
      </div>
    )
  }

  const pilgrim = getPilgrim(selectedPilgrimId)
  const avatarSrc = pilgrimSpriteSrc(selectedPilgrimId, walking ? 'caminando' : 'reposo')

  return (
    <div className="mx-auto flex max-w-lg flex-col gap-4 px-4 py-6">
      <div className="flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => navigate('/games/sopa-de-letras')}
          className="flex items-center gap-1.5 font-ui text-sm font-medium text-parchment/70 transition hover:text-sg-gold-light"
        >
          <span aria-hidden="true">←</span> Volúmenes
        </button>
        <span className="rounded-full border border-sg-gold/30 bg-navy-mid px-3 py-1 font-ui text-xs font-semibold text-sg-gold-light">
          {pilgrim.name}
        </span>
      </div>

      <div className="text-center">
        <h1 className="font-display text-xl font-bold text-parchment sm:text-2xl">
          <span aria-hidden="true">{volume.emoji}</span> {volume.title}
        </h1>
        <p className="mt-1 font-ui text-sm text-parchment/65">{volume.subtitle}</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-sg-gold/20 shadow-lg">
        <img src={volume.mapSrc} alt={`Mapa de ${volume.title}`} className="block h-auto w-full" />

        {stages.map((stage) => (
          <StageNode
            key={stage.id}
            stage={stage}
            unlocked={isStageUnlocked(stage.id)}
            stars={stageProgress[stage.id]?.stars}
          />
        ))}

        <img
          src={avatarSrc}
          alt={pilgrim.name}
          className="pointer-events-none absolute w-[15%] -translate-x-1/2 -translate-y-[85%] drop-shadow-[0_6px_10px_rgba(0,0,0,0.5)] transition-all duration-1000 ease-in-out"
          style={{ left: `${pos.x}%`, top: `${pos.y}%` }}
        />
      </div>
    </div>
  )
}
