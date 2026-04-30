export type UserNote = {
  noteId: string
  topicId: string
  moduleId: string
  question: string
  answerText: string
  clientUpdatedAt: string
  updatedAt: string
}

export type UserNoteInput = Omit<UserNote, 'updatedAt'>
