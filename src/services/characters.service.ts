import {
  collection,
  doc,
  addDoc,
  updateDoc,
  deleteDoc,
  onSnapshot,
  orderBy,
  query,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { Character } from '@/types/music'

const CHARACTERS_COL = 'characters'

function toCharacter(id: string, data: Record<string, unknown>): Character {
  const musicIdentity = (data.musicIdentity as Record<string, unknown>) ?? {}
  return {
    id,
    name: String(data.name ?? ''),
    book: String(data.book ?? ''),
    people: String(data.people ?? ''),
    season: Number(data.season ?? 1),
    musicIdentity: {
      genre: String(musicIdentity.genre ?? ''),
      instruments: Array.isArray(musicIdentity.instruments) ? musicIdentity.instruments.map(String) : [],
      colorPalette: Array.isArray(musicIdentity.colorPalette) ? musicIdentity.colorPalette.map(String) : [],
      signatureSound: String(musicIdentity.signatureSound ?? ''),
    },
  }
}

export function subscribeCharacters(cb: (characters: Character[]) => void): Unsubscribe {
  const q = query(collection(getDb(), CHARACTERS_COL), orderBy('season', 'asc'))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toCharacter(d.id, d.data())))
  })
}

export async function addCharacter(character: Omit<Character, 'id'>): Promise<void> {
  await addDoc(collection(getDb(), CHARACTERS_COL), character)
}

export async function updateCharacter(characterId: string, fields: Partial<Omit<Character, 'id'>>): Promise<void> {
  await updateDoc(doc(getDb(), CHARACTERS_COL, characterId), fields)
}

export async function deleteCharacter(characterId: string): Promise<void> {
  await deleteDoc(doc(getDb(), CHARACTERS_COL, characterId))
}
