import { collection, onSnapshot, orderBy, query, Timestamp, type Unsubscribe } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { DonationFrequency, DonorWallEntry } from '@/types/donations'

const CHECKOUT_URL = import.meta.env.VITE_DONATION_CHECKOUT_FUNCTION_URL as string | undefined
const DONOR_WALL_COLLECTION = 'donorWall'

export type CreateDonationCheckoutInput = {
  amountCents: number
  frequency: DonationFrequency
  isAnonymous: boolean
  donorName?: string
  donorCity?: string
  donorState?: string
  donorCountry?: string
}

export async function createDonationCheckoutSession(input: CreateDonationCheckoutInput): Promise<{ url: string }> {
  if (!CHECKOUT_URL) {
    throw new Error('Las donaciones no están configuradas todavía (falta VITE_DONATION_CHECKOUT_FUNCTION_URL).')
  }
  const res = await fetch(CHECKOUT_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(input),
  })
  if (!res.ok) {
    const body = (await res.json().catch(() => null)) as { error?: string } | null
    throw new Error(body?.error ?? `Error al crear la sesión de pago (HTTP ${res.status})`)
  }
  return res.json() as Promise<{ url: string }>
}

function tsToIso(v: unknown): string {
  return v instanceof Timestamp ? v.toDate().toISOString() : new Date().toISOString()
}

function toDonorWallEntry(id: string, data: Record<string, unknown>): DonorWallEntry {
  return {
    id,
    frequency: (data.frequency as DonationFrequency) ?? 'one_time',
    isAnonymous: Boolean(data.isAnonymous),
    displayName: String(data.displayName ?? 'Anónimo'),
    location: (data.location as string | null) ?? null,
    status: (data.status as DonorWallEntry['status']) ?? 'completed',
    createdAt: tsToIso(data.createdAt),
  }
}

export function subscribeDonorWall(cb: (entries: DonorWallEntry[]) => void): Unsubscribe {
  const q = query(collection(getDb(), DONOR_WALL_COLLECTION), orderBy('createdAt', 'desc'))
  return onSnapshot(
    q,
    (snap) => cb(snap.docs.map((d) => toDonorWallEntry(d.id, d.data()))),
    (err) => {
      console.error('[donations] snapshot error (subscribeDonorWall):', err)
      cb([])
    },
  )
}

export function splitDonorWall(entries: DonorWallEntry[]): {
  monthlyTeam: DonorWallEntry[]
  oneTimeCollaborators: DonorWallEntry[]
} {
  const active = entries.filter((e) => e.status === 'completed')
  return {
    monthlyTeam: active.filter((e) => e.frequency === 'monthly'),
    oneTimeCollaborators: active.filter((e) => e.frequency === 'one_time'),
  }
}
