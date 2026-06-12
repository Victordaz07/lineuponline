/**
 * Carga las playlists de audio subidas por el admin (scripturequest_audio)
 * y las registra en el motor de sonido. Se invoca en las pantallas grandes
 * (anfitrión en modo escenario, TV y modo estudio).
 */
import { AUDIO_STAGE_ORDER, type AudioStage } from '../types'
import { getStagePlaylist } from './sqAudio.service'
import { sound } from '../utils/sound'

let loaded = false

export async function loadAudioLibrary(force = false): Promise<void> {
  if (loaded && !force) return
  try {
    const entries = await Promise.all(
      AUDIO_STAGE_ORDER.map(async (stage) => {
        const playlist = await getStagePlaylist(stage)
        return [stage, (playlist?.tracks ?? []).map((t) => t.url)] as const
      }),
    )
    const map: Partial<Record<AudioStage, string[]>> = {}
    for (const [stage, urls] of entries) {
      if (urls.length > 0) map[stage] = urls
    }
    sound.setStagePlaylists(map)
    loaded = true
  } catch {
    // Sin permisos o sin conexión: el juego sigue con el respaldo sintetizado
  }
}
