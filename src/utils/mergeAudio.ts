/** Concatenates MP3 blobs into a single audio/mpeg Blob. */
export async function mergeAudioBlobs(blobs: Blob[]): Promise<Blob> {
  const buffers = await Promise.all(blobs.map((b) => b.arrayBuffer()))
  const totalBytes = buffers.reduce((n, ab) => n + ab.byteLength, 0)
  const merged = new Uint8Array(totalBytes)
  let offset = 0
  for (const ab of buffers) {
    merged.set(new Uint8Array(ab), offset)
    offset += ab.byteLength
  }
  return new Blob([merged], { type: 'audio/mpeg' })
}

/** Fetches a URL and returns its Blob (for previously-uploaded Storage URLs). */
export async function fetchBlob(url: string): Promise<Blob> {
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Failed to fetch audio: HTTP ${res.status}`)
  return res.blob()
}
