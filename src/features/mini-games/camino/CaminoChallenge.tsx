import { useParams } from 'react-router-dom'
import { GameLayout } from '../components/GameLayout'
import { getStage } from '../data/caminoStages'
import { getVolume } from '../data/scriptureVolumes'
import { CaminoConnect } from './CaminoConnect'
import { CaminoHangman } from './CaminoHangman'
import { CaminoWordSearch } from './CaminoWordSearch'

/** Resuelve la estación de la URL y despacha al tipo de reto correspondiente. */
export default function CaminoChallenge() {
  const { stageId } = useParams<{ stageId: string }>()
  const stage = stageId ? getStage(stageId) : undefined
  const volume = stage ? getVolume(stage.volumeId) : undefined

  if (!stage || !volume || stage.status !== 'ready' || !stage.challenge) {
    return (
      <GameLayout title="Camino" emoji="🗺️" backTo="/games/sopa-de-letras" backLabel="Volúmenes">
        <p className="text-center font-ui text-sm text-parchment/70">Esta estación no está disponible todavía.</p>
      </GameLayout>
    )
  }

  const bannerSrc = stage.sceneSrc ?? (stage.characterId ? `/assets/camino/personajes/${stage.characterId}.webp` : undefined)

  return (
    <GameLayout title={stage.title} emoji={volume.emoji} backTo={`/games/sopa-de-letras/camino/${volume.id}`} backLabel={volume.title}>
      {bannerSrc && (
        <div className="mx-auto -mt-2 mb-1 overflow-hidden rounded-2xl border border-sg-gold/20 shadow-sm" style={{ maxWidth: 420 }}>
          <img src={bannerSrc} alt="" className="block h-auto w-full" loading="lazy" />
        </div>
      )}

      {stage.challenge.kind === 'word_search' && <CaminoWordSearch stage={stage} challenge={stage.challenge} />}
      {stage.challenge.kind === 'hangman' && <CaminoHangman stage={stage} challenge={stage.challenge} />}
      {stage.challenge.kind === 'connect' && <CaminoConnect stage={stage} challenge={stage.challenge} />}
    </GameLayout>
  )
}
