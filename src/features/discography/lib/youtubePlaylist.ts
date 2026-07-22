// Arma un link que abre varias canciones seguidas en la app/sitio real de
// YouTube (como una lista de reproducción temporal), para cuando el usuario
// quiera escuchar sin cortes con la pantalla bloqueada — algo que el iframe
// embebido no puede hacer por sí solo. Esa reproducción sí cuenta como vista
// real en YouTube para el canal.

export function buildYoutubeWatchVideosUrl(videoIds: string[]): string | null {
  const ids = videoIds.filter((id): id is string => Boolean(id))
  if (ids.length === 0) return null
  if (ids.length === 1) return `https://www.youtube.com/watch?v=${ids[0]}`
  return `https://www.youtube.com/watch_videos?video_ids=${ids.join(',')}`
}
