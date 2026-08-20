import { useEffect, useState } from 'react'
import { subscribeDownloadable, subscribeDownloadables } from '@/services/downloadables.service'
import type { DownloadableResource } from '@/types/downloadable'

export function useDownloadables(): DownloadableResource[] {
  const [resources, setResources] = useState<DownloadableResource[]>([])
  useEffect(() => subscribeDownloadables(setResources), [])
  return resources
}

type UseDownloadableState = {
  resource: DownloadableResource | null
  loading: boolean
}

export function useDownloadable(id: string | undefined): UseDownloadableState {
  const [resource, setResource] = useState<DownloadableResource | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setResource(null)
      setLoading(false)
      return
    }
    setLoading(true)
    return subscribeDownloadable(id, (item) => {
      setResource(item)
      setLoading(false)
    })
  }, [id])

  return { resource, loading }
}
