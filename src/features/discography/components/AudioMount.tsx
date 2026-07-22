// <audio> nativo persistente para tracks que no son de YouTube (storageUrl,
// Firebase Storage). Se monta una sola vez junto a YouTubePlayerMount.

import { usePlayerStore } from '../store/usePlayerStore'

export function AudioMount() {
  const setAudioRef = usePlayerStore((s) => s.setAudioRef)
  const _tick = usePlayerStore((s) => s._tick)

  return (
    <audio
      ref={setAudioRef}
      className="hidden"
      onTimeUpdate={(e) => _tick(e.currentTarget.currentTime, e.currentTarget.duration || 0)}
      onEnded={() => usePlayerStore.getState().next()}
    />
  )
}
