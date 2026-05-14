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
import { getDb } from '@/lib/firebase'
import type {
  AdminAnnouncement,
  AnnouncementType,
  CommunityMessage,
  MessageStatus,
  MessageType,
} from '@/types/community'

// ── Messages ─────────────────────────────────────────────────────────────────

export async function submitMessage(payload: {
  type: MessageType
  content: string
  topicName?: string
  userId: string
  userName: string
}): Promise<void> {
  await addDoc(collection(getDb(), 'community_messages'), {
    ...payload,
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
  await updateDoc(doc(getDb(), 'community_messages', messageId), {
    adminResponse: response,
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
