import { useCallback, useEffect, useState } from 'react'
import { fetchSubscription, isElevenLabsConfigured } from '@/services/elevenLabs.service'
import type { ElevenLabsSubscription } from '@/types/episode'

type CreditsState = {
  data: ElevenLabsSubscription | null
  loading: boolean
  error: string | null
  configured: boolean
  refresh: () => void
}

export function useElevenLabsCredits(): CreditsState {
  const configured = isElevenLabsConfigured()
  const [data, setData] = useState<ElevenLabsSubscription | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const refresh = useCallback(() => {
    if (!configured) return
    setLoading(true)
    setError(null)
    fetchSubscription()
      .then(setData)
      .catch((e: unknown) => setError(e instanceof Error ? e.message : 'Error desconocido'))
      .finally(() => setLoading(false))
  }, [configured])

  useEffect(() => {
    refresh()
  }, [refresh])

  return { data, loading, error, configured, refresh }
}
