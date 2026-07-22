export function getConfiguredYoutubeChannelId(): string | null {
  const raw = import.meta.env.VITE_YOUTUBE_CHANNEL_ID
  return typeof raw === 'string' && raw.trim().length > 0 ? raw.trim() : null
}
