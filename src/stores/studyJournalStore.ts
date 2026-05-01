import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type StudyJournalEntry = {
  entryId: string
  lessonId: string
  moduleId: string
  topicId: string
  topicTitle: string
  promptId: string
  question: string
  answerText: string
  clientUpdatedAt: string
}

type StudyJournalState = {
  entries: StudyJournalEntry[]
  addEntry: (entry: StudyJournalEntry) => void
  getForLesson: (lessonId: string) => StudyJournalEntry[]
  uniqueTopicTitles: (lessonId: string) => string[]
}

export const useStudyJournalStore = create<StudyJournalState>()(
  persist(
    (set, get) => ({
      entries: [],
      addEntry: (entry) =>
        set((s) => ({
          entries: [entry, ...s.entries.filter((e) => e.entryId !== entry.entryId)],
        })),
      getForLesson: (lessonId) =>
        get()
          .entries.filter((e) => e.lessonId === lessonId)
          .sort((a, b) => (a.clientUpdatedAt < b.clientUpdatedAt ? 1 : -1)),
      uniqueTopicTitles: (lessonId) => {
        const seen = new Set<string>()
        const titles: string[] = []
        for (const e of get().entries) {
          if (e.lessonId !== lessonId) {
            continue
          }
          if (!seen.has(e.topicId)) {
            seen.add(e.topicId)
            titles.push(e.topicTitle)
          }
        }
        return titles
      },
    }),
    { name: 'lineup-study-journal' },
  ),
)
