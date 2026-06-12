import {
  doc,
  getDoc,
  setDoc,
  updateDoc,
  onSnapshot,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { AudioStage, AudioTrack, StagePlaylist } from '../types'

const COL = 'scripturequest_audio'

export async function getStagePlaylist(stage: AudioStage): Promise<StagePlaylist | null> {
  const snap = await getDoc(doc(getDb(), COL, stage))
  if (!snap.exists()) return null
  return snap.data() as StagePlaylist
}

export function subscribeStagePlaylist(
  stage: AudioStage,
  cb: (playlist: StagePlaylist | null) => void,
): Unsubscribe {
  return onSnapshot(doc(getDb(), COL, stage), (snap) => {
    cb(snap.exists() ? (snap.data() as StagePlaylist) : null)
  })
}

export async function addTrackToStage(stage: AudioStage, track: AudioTrack): Promise<void> {
  const ref = doc(getDb(), COL, stage)
  const snap = await getDoc(ref)
  const now = new Date().toISOString()
  if (!snap.exists()) {
    await setDoc(ref, { stage, tracks: [track], updatedAt: now } satisfies StagePlaylist)
  } else {
    const existing = snap.data() as StagePlaylist
    const tracks = [...existing.tracks, track]
    await updateDoc(ref, { tracks, updatedAt: now })
  }
}

export async function removeTrackFromStage(stage: AudioStage, trackId: string): Promise<void> {
  const ref = doc(getDb(), COL, stage)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const existing = snap.data() as StagePlaylist
  const tracks = existing.tracks.filter((t) => t.id !== trackId)
  await updateDoc(ref, { tracks, updatedAt: new Date().toISOString() })
}

export async function renameTrack(stage: AudioStage, trackId: string, name: string): Promise<void> {
  const ref = doc(getDb(), COL, stage)
  const snap = await getDoc(ref)
  if (!snap.exists()) return
  const existing = snap.data() as StagePlaylist
  const tracks = existing.tracks.map((t) => (t.id === trackId ? { ...t, name } : t))
  await updateDoc(ref, { tracks, updatedAt: new Date().toISOString() })
}
