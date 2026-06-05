/** Writes a 4-byte ASCII string into a DataView at the given offset. */
function writeString(view: DataView, offset: number, value: string) {
  for (let i = 0; i < value.length; i++) view.setUint8(offset + i, value.charCodeAt(i))
}

/**
 * Encodes an AudioBuffer to a 16-bit PCM WAV Blob.
 * Handles mono and stereo; down-mixes additional channels to stereo.
 */
export function encodeWav(buffer: AudioBuffer): Blob {
  const numChannels = Math.min(buffer.numberOfChannels, 2)
  const sampleRate   = buffer.sampleRate
  const numSamples   = buffer.length
  const bitDepth     = 16
  const bytesPerSample = bitDepth / 8
  const blockAlign   = numChannels * bytesPerSample
  const byteRate     = sampleRate * blockAlign
  const dataSize     = numSamples * blockAlign
  const ab           = new ArrayBuffer(44 + dataSize)
  const view         = new DataView(ab)

  writeString(view,  0, 'RIFF')
  view.setUint32(    4, 36 + dataSize,  true)
  writeString(view,  8, 'WAVE')
  writeString(view, 12, 'fmt ')
  view.setUint32(   16, 16,             true)   // chunk size
  view.setUint16(   20, 1,              true)   // PCM = 1
  view.setUint16(   22, numChannels,    true)
  view.setUint32(   24, sampleRate,     true)
  view.setUint32(   28, byteRate,       true)
  view.setUint16(   32, blockAlign,     true)
  view.setUint16(   34, bitDepth,       true)
  writeString(view, 36, 'data')
  view.setUint32(   40, dataSize,       true)

  let offset = 44
  for (let i = 0; i < numSamples; i++) {
    for (let ch = 0; ch < numChannels; ch++) {
      const sample = Math.max(-1, Math.min(1, buffer.getChannelData(ch)[i]))
      view.setInt16(offset, sample < 0 ? sample * 0x8000 : sample * 0x7fff, true)
      offset += 2
    }
  }

  return new Blob([ab], { type: 'audio/wav' })
}

/**
 * Prepends `silenceMs` milliseconds of silence to an audio Blob.
 * Decodes the input (MP3/WAV/etc.) via Web Audio API, schedules it
 * after a silent gap in an OfflineAudioContext, then exports as WAV.
 */
export async function padWithSilence(blob: Blob, silenceMs: number): Promise<Blob> {
  const ctx = new AudioContext()
  let audioBuffer: AudioBuffer
  try {
    const arrayBuffer = await blob.arrayBuffer()
    audioBuffer = await ctx.decodeAudioData(arrayBuffer)
  } finally {
    await ctx.close()
  }

  const silenceSamples = Math.ceil((silenceMs / 1000) * audioBuffer.sampleRate)
  const totalSamples   = silenceSamples + audioBuffer.length
  const numChannels    = Math.min(audioBuffer.numberOfChannels, 2)

  const offline = new OfflineAudioContext(numChannels, totalSamples, audioBuffer.sampleRate)
  const source  = offline.createBufferSource()
  source.buffer = audioBuffer
  source.connect(offline.destination)
  source.start(silenceMs / 1000) // offset in seconds

  const rendered = await offline.startRendering()
  return encodeWav(rendered)
}

/**
 * Decodes an array of audio Blobs (WAV or MP3), concatenates their PCM data,
 * and returns a single WAV Blob. This is WAV-safe — no raw byte appending.
 */
export async function mergeAudioBuffers(blobs: Blob[]): Promise<Blob> {
  if (blobs.length === 0) throw new Error('No blobs to merge')

  const ctx = new AudioContext()
  let buffers: AudioBuffer[]
  try {
    buffers = await Promise.all(
      blobs.map((b) => b.arrayBuffer().then((ab) => ctx.decodeAudioData(ab))),
    )
  } finally {
    await ctx.close()
  }

  const sampleRate  = buffers[0].sampleRate
  const numChannels = Math.min(buffers[0].numberOfChannels, 2)
  const totalLength = buffers.reduce((n, b) => n + b.length, 0)

  const offline = new OfflineAudioContext(numChannels, totalLength, sampleRate)
  let offsetSec = 0
  for (const buf of buffers) {
    const src = offline.createBufferSource()
    src.buffer = buf
    src.connect(offline.destination)
    src.start(offsetSec)
    offsetSec += buf.duration
  }

  const rendered = await offline.startRendering()
  return encodeWav(rendered)
}
