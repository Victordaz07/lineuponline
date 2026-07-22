// Acepta cualquier formato común de URL de YouTube y devuelve el videoId,
// o null si no se reconoce el formato.

export function extractYoutubeId(url: string): string | null {
  if (!url) return null
  const trimmed = url.trim()

  const patterns = [
    /(?:youtube\.com\/watch\?v=)([\w-]{11})/,
    /(?:youtu\.be\/)([\w-]{11})/,
    /(?:youtube\.com\/embed\/)([\w-]{11})/,
    /(?:youtube\.com\/shorts\/)([\w-]{11})/,
  ]

  for (const pattern of patterns) {
    const match = trimmed.match(pattern)
    if (match) return match[1]
  }

  // Si ya es solo el ID de 11 caracteres, tal cual
  if (/^[\w-]{11}$/.test(trimmed)) return trimmed

  return null
}

export function youtubeThumbnailUrl(videoId: string): string {
  return `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`
}
