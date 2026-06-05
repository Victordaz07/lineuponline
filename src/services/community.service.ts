import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  where,
  type Unsubscribe,
} from 'firebase/firestore'
import { z } from 'zod'
import { getDb } from '@/lib/firebase'
import type {
  AdminAnnouncement,
  AnnouncementType,
  CommunityMessage,
  MessageStatus,
  MessageType,
} from '@/types/community'

const submitMessageSchema = z.object({
  type: z.enum(['comment', 'suggestion', 'concern', 'topic_request']),
  content: z.string().min(20, 'Mínimo 20 caracteres').max(5000, 'Máximo 5000 caracteres'),
  topicName: z.string().max(256).optional(),
  userId: z.string().min(1),
  userName: z.string().min(1).max(256),
})

const adminReplySchema = z.object({
  response: z.string().min(1, 'La respuesta no puede estar vacía').max(5000),
})

// ── Messages ─────────────────────────────────────────────────────────────────

export async function submitMessage(payload: {
  type: MessageType
  content: string
  topicName?: string
  userId: string
  userName: string
}): Promise<void> {
  const valid = submitMessageSchema.parse(payload)
  await addDoc(collection(getDb(), 'community_messages'), {
    ...valid,
    status: 'pending' as MessageStatus,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export function subscribeUserMessages(
  userId: string,
  onData: (msgs: CommunityMessage[]) => void,
): Unsubscribe {
  const q = query(
    collection(getDb(), 'community_messages'),
    where('userId', '==', userId),
    orderBy('createdAt', 'desc'),
  )
  return onSnapshot(q, (snap) =>
    onData(
      snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<CommunityMessage, 'id'>),
        createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
        updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
        adminRespondedAt: d.data().adminRespondedAt?.toDate?.()?.toISOString(),
      })),
    ),
  )
}

export function subscribeAllMessages(
  onData: (msgs: CommunityMessage[]) => void,
): Unsubscribe {
  const q = query(
    collection(getDb(), 'community_messages'),
    orderBy('createdAt', 'desc'),
  )
  return onSnapshot(q, (snap) =>
    onData(
      snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<CommunityMessage, 'id'>),
        createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
        updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
        adminRespondedAt: d.data().adminRespondedAt?.toDate?.()?.toISOString(),
      })),
    ),
  )
}

export async function updateMessageStatus(
  messageId: string,
  status: MessageStatus,
): Promise<void> {
  await updateDoc(doc(getDb(), 'community_messages', messageId), {
    status,
    updatedAt: serverTimestamp(),
  })
}

export async function replyToMessage(
  messageId: string,
  response: string,
): Promise<void> {
  const { response: validResponse } = adminReplySchema.parse({ response })
  await updateDoc(doc(getDb(), 'community_messages', messageId), {
    adminResponse: validResponse,
    adminRespondedAt: serverTimestamp(),
    status: 'replied' as MessageStatus,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteMessage(messageId: string): Promise<void> {
  await deleteDoc(doc(getDb(), 'community_messages', messageId))
}

// ── Announcements ─────────────────────────────────────────────────────────────

export function subscribeAnnouncements(
  onData: (items: AdminAnnouncement[]) => void,
): Unsubscribe {
  const q = query(
    collection(getDb(), 'admin_announcements'),
    orderBy('isPinned', 'desc'),
    orderBy('createdAt', 'desc'),
  )
  return onSnapshot(q, (snap) =>
    onData(
      snap.docs.map((d) => ({
        id: d.id,
        ...(d.data() as Omit<AdminAnnouncement, 'id'>),
        createdAt: d.data().createdAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
        updatedAt: d.data().updatedAt?.toDate?.()?.toISOString() ?? new Date().toISOString(),
      })),
    ),
  )
}

export async function createAnnouncement(payload: {
  type: AnnouncementType
  title: string
  content: string
  isPinned: boolean
}): Promise<void> {
  await addDoc(collection(getDb(), 'admin_announcements'), {
    ...payload,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  })
}

export async function updateAnnouncement(
  id: string,
  payload: Partial<Pick<AdminAnnouncement, 'type' | 'title' | 'content' | 'isPinned'>>,
): Promise<void> {
  await updateDoc(doc(getDb(), 'admin_announcements', id), {
    ...payload,
    updatedAt: serverTimestamp(),
  })
}

export async function deleteAnnouncement(id: string): Promise<void> {
  await deleteDoc(doc(getDb(), 'admin_announcements', id))
}
