export type DownloadableResource = {
  id: string
  title: string
  description: string
  fileUrl: string
  storagePath: string
  fileName: string
  fileSizeBytes: number
  fileType: string
  coverImageUrl?: string | null
  coverStoragePath?: string | null
  tags: string[]
  relatedModuleIds?: string[]
  downloadCount: number
  uploadedByUid: string
  createdAt: string
  updatedAt: string
}
