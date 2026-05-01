export type UserTopicProgress = {
  topicId: string
  readModuleIds: string[]
  quizScore: number
  quizAttempts: number
  lastQuizAt: string | null
  updatedAt: string
}
