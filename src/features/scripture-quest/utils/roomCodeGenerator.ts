/** Alphabet without ambiguous glyphs (0/O, 1/I/L) so codes are easy to type. */
const ALPHABET = 'ABCDEFGHJKMNPQRSTUVWXYZ23456789'

export const ROOM_CODE_LENGTH = 6

/** Generates a 6-char alphanumeric session code (used as the room document id). */
export function generateRoomCode(): string {
  const bytes = new Uint8Array(ROOM_CODE_LENGTH)
  crypto.getRandomValues(bytes)
  let code = ''
  for (const b of bytes) {
    code += ALPHABET[b % ALPHABET.length]
  }
  return code
}

export function normalizeRoomCode(input: string): string {
  return input.trim().toUpperCase().replace(/[^A-Z0-9]/g, '')
}

export function isValidRoomCode(input: string): boolean {
  return /^[A-Z0-9]{6}$/.test(input)
}
