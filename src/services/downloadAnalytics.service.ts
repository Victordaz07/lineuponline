import { collection, getDocs, Timestamp } from 'firebase/firestore'
import { getDb } from '@/lib/firebase'

export type DownloadAnalyticsData = {
  totalDownloads: number
  totalDownloadsLast30d: number
  topFiles: { resourceId: string; title: string; count: number }[]
  topTags: { tag: string; count: number }[]
  byCountry: { countryCode: string; count: number }[]
  timeSeries: { date: string; count: number }[]
}

function dayKey(date: Date): string {
  return date.toISOString().slice(0, 10)
}

export async function fetchDownloadAnalytics(): Promise<DownloadAnalyticsData> {
  const snap = await getDocs(collection(getDb(), 'downloadEvents'))

  const now = Date.now()
  const ms30d = 30 * 24 * 60 * 60 * 1000

  let totalDownloads = 0
  let totalDownloadsLast30d = 0
  const fileCounts = new Map<string, { title: string; count: number }>()
  const tagCounts = new Map<string, number>()
  const countryCounts = new Map<string, number>()
  const dayCounts = new Map<string, number>()

  snap.forEach((doc) => {
    const data = doc.data()
    totalDownloads++

    const createdAt = data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date()
    if (now - createdAt.getTime() < ms30d) totalDownloadsLast30d++

    const resourceId = String(data.resourceId ?? '')
    const resourceTitle = String(data.resourceTitle ?? resourceId)
    if (resourceId) {
      const entry = fileCounts.get(resourceId) ?? { title: resourceTitle, count: 0 }
      entry.count++
      fileCounts.set(resourceId, entry)
    }

    const tags = Array.isArray(data.tags) ? (data.tags as string[]) : []
    tags.forEach((tag) => tagCounts.set(tag, (tagCounts.get(tag) ?? 0) + 1))

    const countryCode = typeof data.countryCode === 'string' ? data.countryCode : null
    if (countryCode) countryCounts.set(countryCode, (countryCounts.get(countryCode) ?? 0) + 1)

    const key = dayKey(createdAt)
    dayCounts.set(key, (dayCounts.get(key) ?? 0) + 1)
  })

  const topFiles = [...fileCounts.entries()]
    .map(([resourceId, { title, count }]) => ({ resourceId, title, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  const topTags = [...tagCounts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  const byCountry = [...countryCounts.entries()]
    .map(([countryCode, count]) => ({ countryCode, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 10)

  const timeSeries = [...dayCounts.entries()]
    .map(([date, count]) => ({ date, count }))
    .sort((a, b) => a.date.localeCompare(b.date))
    .slice(-30)

  return { totalDownloads, totalDownloadsLast30d, topFiles, topTags, byCountry, timeSeries }
}
