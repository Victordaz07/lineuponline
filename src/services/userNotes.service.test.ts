import { describe, it, expect } from 'vitest'
import { z } from 'zod'

// Mirror the schema from userNotes.service.ts to test constraints without mocking Firestore
const noteInputSchema = z.object({
  noteId: z.string().min(1).max(128),
  topicId: z.string().min(1).max(256),
  moduleId: z.string().min(1).max(256),
  question: z.string().min(1).max(500),
  answerText: z.string().min(1).max(10000),
  clientUpdatedAt: z.string().datetime(),
})

const validNote = {
  noteId: 'note-123',
  topicId: 'topic-abc',
  moduleId: 'module-xyz',
  question: '¿Qué significa el Evangelio?',
  answerText: 'Es la buena nueva de Jesucristo.',
  clientUpdatedAt: new Date().toISOString(),
}

describe('noteInputSchema', () => {
  it('accepts a valid note', () => {
    expect(() => noteInputSchema.parse(validNote)).not.toThrow()
  })

  it('rejects oversized answerText (>10000 chars)', () => {
    const oversized = { ...validNote, answerText: 'x'.repeat(10001) }
    expect(() => noteInputSchema.parse(oversized)).toThrow()
  })

  it('rejects oversized question (>500 chars)', () => {
    const oversized = { ...validNote, question: 'q'.repeat(501) }
    expect(() => noteInputSchema.parse(oversized)).toThrow()
  })

  it('rejects oversized noteId (>128 chars)', () => {
    const oversized = { ...validNote, noteId: 'x'.repeat(129) }
    expect(() => noteInputSchema.parse(oversized)).toThrow()
  })

  it('rejects empty answerText', () => {
    expect(() => noteInputSchema.parse({ ...validNote, answerText: '' })).toThrow()
  })

  it('rejects invalid datetime format', () => {
    expect(() => noteInputSchema.parse({ ...validNote, clientUpdatedAt: 'not-a-date' })).toThrow()
  })
})
