import { describe, it, expect, beforeEach } from 'vitest'

const LOCAL_ID_KEY = 'lineuponline:localId'

// Test the local ID generation logic directly (no React needed)
function getOrCreateLocalId(): string {
  let id = localStorage.getItem(LOCAL_ID_KEY)
  if (!id) {
    id = `local-${crypto.randomUUID()}`
    localStorage.setItem(LOCAL_ID_KEY, id)
  }
  return id
}

beforeEach(() => {
  localStorage.clear()
})

describe('local userId generation', () => {
  it('creates a new ID when none exists', () => {
    const id = getOrCreateLocalId()
    expect(id).toMatch(/^local-[0-9a-f-]{36}$/)
  })

  it('returns the same ID on subsequent calls (stable)', () => {
    const id1 = getOrCreateLocalId()
    const id2 = getOrCreateLocalId()
    expect(id1).toBe(id2)
  })

  it('generates unique IDs across different sessions', () => {
    const id1 = getOrCreateLocalId()
    localStorage.clear()
    const id2 = getOrCreateLocalId()
    expect(id1).not.toBe(id2)
  })

  it('persists ID in localStorage', () => {
    const id = getOrCreateLocalId()
    expect(localStorage.getItem(LOCAL_ID_KEY)).toBe(id)
  })
})
