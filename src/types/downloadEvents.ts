export type DownloadEvent = {
  id: string
  resourceId: string
  resourceTitle: string
  tags: string[]
  countryCode: string | null
  localeRegion: string | null
  timeZone: string | null
  createdAt: string
}
