import { collection, getDocs, orderBy, query, where } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { Topic } from '@/types/topics'

export async function getTopics(options?: { onlyPublished?: boolean }): Promise<Topic[]> {
  const topicsRef = collection(getDb(), 'topics')
  const topicsQuery = options?.onlyPublished
    ? query(topicsRef, where('isPublished', '==', true), orderBy('title', 'asc'))
    : query(topicsRef, orderBy('title', 'asc'))

  const snaps = await getDocs(topicsQuery)

  return snaps.docs.map((item) => {
    const data = item.data()
    return {
      topicId: item.id,
      slug: String(data.slug ?? ''),
      title: String(data.title ?? ''),
      description: String(data.description ?? ''),
      moduleCount: Number(data.moduleCount ?? 0),
      isPublished: Boolean(data.isPublished ?? false),
      updatedAt: data.updatedAt?.toDate?.()?.toISOString?.() ?? new Date(0).toISOString(),
    }
  })
}
