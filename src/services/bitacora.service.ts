import {
  collection,
  doc,
  documentId,
  addDoc,
  updateDoc,
  deleteDoc,
  setDoc,
  getDocs,
  onSnapshot,
  serverTimestamp,
  query,
  where,
  orderBy,
  limit,
  writeBatch,
  Timestamp,
  type Unsubscribe,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { BitacoraDay, BitacoraIdea, BitacoraProjectKey, BitacoraTask } from '@/types/bitacora'

const DAYS_COL = 'bitacora_days'
const TASKS_COL = 'bitacora_tasks'
const IDEAS_COL = 'bitacora_ideas'

function tsToIso(v: unknown): string {
  return v instanceof Timestamp ? v.toDate().toISOString() : new Date().toISOString()
}

function toDay(date: string, data: Record<string, unknown>): BitacoraDay {
  return {
    date,
    projectOverride: (data.projectOverride as BitacoraDay['projectOverride']) ?? null,
    notes: String(data.notes ?? ''),
    done: Boolean(data.done),
    seconds: Number(data.seconds ?? 0),
    updatedAt: tsToIso(data.updatedAt),
  }
}

function toTask(id: string, data: Record<string, unknown>): BitacoraTask {
  return {
    id,
    date: String(data.date ?? ''),
    projectKey: data.projectKey as BitacoraTask['projectKey'],
    text: String(data.text ?? ''),
    completed: Boolean(data.completed),
    createdAt: tsToIso(data.createdAt),
  }
}

function toIdea(id: string, data: Record<string, unknown>): BitacoraIdea {
  return {
    id,
    projectKey: data.projectKey as BitacoraIdea['projectKey'],
    text: String(data.text ?? ''),
    createdAt: tsToIso(data.createdAt),
    convertedToTaskDate: (data.convertedToTaskDate as string | null) ?? null,
  }
}

// ── Days ──────────────────────────────────────────────────────────────────────

export function subscribeDay(date: string, cb: (day: BitacoraDay | null) => void): Unsubscribe {
  return onSnapshot(doc(getDb(), DAYS_COL, date), (snap) => {
    cb(snap.exists() ? toDay(date, snap.data()) : null)
  })
}

export async function setDayFields(
  date: string,
  fields: Partial<Omit<BitacoraDay, 'date' | 'updatedAt'>>,
): Promise<void> {
  await setDoc(
    doc(getDb(), DAYS_COL, date),
    { ...fields, date, updatedAt: serverTimestamp() },
    { merge: true },
  )
}

/** Días existentes (con actividad) en el rango de fechas dado, sin importar orden de creación. */
export function subscribeDaysByDates(dates: string[], cb: (days: BitacoraDay[]) => void): Unsubscribe {
  if (dates.length === 0) {
    cb([])
    return () => {}
  }
  const q = query(collection(getDb(), DAYS_COL), where(documentId(), 'in', dates))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toDay(d.id, d.data())))
  })
}

export function subscribeRecentDays(count: number, cb: (days: BitacoraDay[]) => void): Unsubscribe {
  const q = query(collection(getDb(), DAYS_COL), orderBy(documentId(), 'desc'), limit(count))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toDay(d.id, d.data())))
  })
}

// ── Tasks ─────────────────────────────────────────────────────────────────────

export function subscribeTasks(date: string, cb: (tasks: BitacoraTask[]) => void): Unsubscribe {
  const q = query(collection(getDb(), TASKS_COL), where('date', '==', date), orderBy('createdAt', 'asc'))
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toTask(d.id, d.data())))
  })
}

function countsByDate(tasks: BitacoraTask[]): Record<string, { completed: number; total: number }> {
  const counts: Record<string, { completed: number; total: number }> = {}
  tasks.forEach((task) => {
    const entry = counts[task.date] ?? { completed: 0, total: 0 }
    entry.total += 1
    if (task.completed) entry.completed += 1
    counts[task.date] = entry
  })
  return counts
}

/** Resumen completadas/total por fecha, para la lista de historial. */
export async function getTaskCountsByDates(
  dates: string[],
): Promise<Record<string, { completed: number; total: number }>> {
  if (dates.length === 0) return {}
  const q = query(collection(getDb(), TASKS_COL), where('date', 'in', dates))
  const snap = await getDocs(q)
  return countsByDate(snap.docs.map((d) => toTask(d.id, d.data())))
}

/** Igual que getTaskCountsByDates pero en tiempo real, para indicadores de calendario. */
export function subscribeTaskCountsByDates(
  dates: string[],
  cb: (counts: Record<string, { completed: number; total: number }>) => void,
): Unsubscribe {
  if (dates.length === 0) {
    cb({})
    return () => {}
  }
  const q = query(collection(getDb(), TASKS_COL), where('date', 'in', dates))
  return onSnapshot(q, (snap) => {
    cb(countsByDate(snap.docs.map((d) => toTask(d.id, d.data()))))
  })
}

export async function addTask(date: string, projectKey: BitacoraProjectKey, text: string): Promise<void> {
  await addDoc(collection(getDb(), TASKS_COL), {
    date,
    projectKey,
    text,
    completed: false,
    createdAt: serverTimestamp(),
  })
}

export async function toggleTask(taskId: string, completed: boolean): Promise<void> {
  await updateDoc(doc(getDb(), TASKS_COL, taskId), { completed })
}

export async function deleteTask(taskId: string): Promise<void> {
  await deleteDoc(doc(getDb(), TASKS_COL, taskId))
}

// ── Ideas (inbox por proyecto) ────────────────────────────────────────────────

export function subscribeIdeas(cb: (ideas: BitacoraIdea[]) => void): Unsubscribe {
  const q = query(
    collection(getDb(), IDEAS_COL),
    where('convertedToTaskDate', '==', null),
    orderBy('createdAt', 'desc'),
  )
  return onSnapshot(q, (snap) => {
    cb(snap.docs.map((d) => toIdea(d.id, d.data())))
  })
}

export async function addIdea(projectKey: BitacoraIdea['projectKey'], text: string): Promise<void> {
  await addDoc(collection(getDb(), IDEAS_COL), {
    projectKey,
    text,
    createdAt: serverTimestamp(),
    convertedToTaskDate: null,
  })
}

export async function deleteIdea(ideaId: string): Promise<void> {
  await deleteDoc(doc(getDb(), IDEAS_COL, ideaId))
}

export async function convertIdeaToTask(idea: BitacoraIdea, date: string): Promise<void> {
  const batch = writeBatch(getDb())
  batch.set(doc(collection(getDb(), TASKS_COL)), {
    date,
    projectKey: idea.projectKey,
    text: idea.text,
    completed: false,
    createdAt: serverTimestamp(),
  })
  batch.update(doc(getDb(), IDEAS_COL, idea.id), { convertedToTaskDate: date })
  await batch.commit()
}
