/**
 * Scripture Quest — shared types for the realtime trivia module.
 * Mirrors the Firestore data model (scripturequest_rooms + subcollections).
 */
import type { Timestamp } from 'firebase/firestore'

export type AnswerOption = 'A' | 'B' | 'C' | 'D'

export type QuestionCategory =
  | 'personajes'
  | 'lugares'
  | 'eventos'
  | 'doctrina'
  | 'escrituras'
  | 'cronologia'
  | 'simbolos'
  | 'restauracion'

export type QuestLevel = 1 | 2 | 3 | 4

export type Question = {
  id: string
  question: string
  options: Record<AnswerOption, string>
  correctAnswer: AnswerOption
  /** 1-2 sentences with scripture reference */
  explanation: string
  topic: string
  level: QuestLevel
  points: number
  category: QuestionCategory
}

export type RoomStatus = 'lobby' | 'playing' | 'question' | 'results' | 'ended'

export type RoundType = 'classic' | 'rally' | 'challenge'

export type Room = {
  hostId: string
  status: RoomStatus
  currentQuestion: number
  currentRoundType: RoundType
  topic: string
  level: QuestLevel
  questions: Question[]
  createdAt: Timestamp | null
  teamMode: boolean
  /** Server-side timer anchor: clients derive remaining time from this. */
  questionStartedAt: Timestamp | null
}

export type Player = {
  uid: string
  name: string
  avatar: string
  score: number
  teamId: string | null
  isLeader: boolean
  answeredCurrentQuestion: boolean
  currentAnswer: AnswerOption | null
  streak: number
  /** Highest streak reached during the game (for badge checks). */
  maxStreak: number
  /** Effective answer per question index, written by the host on reveal. */
  answers: Record<string, AnswerOption | null>
}

export type Team = {
  id: string
  name: string
  leaderId: string
  memberIds: string[]
  score: number
  /** Realtime vote tracking: playerId → selected option */
  votes: Record<string, AnswerOption>
  confirmedAnswer: AnswerOption | null
}

export type GameHistoryEntry = {
  roomId: string
  date: Timestamp | null
  topic: string
  level: QuestLevel
  score: number
  totalQuestions: number
  correctAnswers: number
  /** true when correctAnswers / totalQuestions > 0.6 */
  passed: boolean
  missedQuestions: Question[]
}

export type BadgeId =
  | 'racha_sagrada'
  | 'escriba'
  | 'velocista'
  | 'defensor'
  | 'explorador'
  | 'campeon'
  | 'estudioso'
  | 'llama_viva'

export type EarnedBadge = {
  badgeId: BadgeId
  earnedAt: Timestamp | null
}

export type TopicDef = {
  id: string
  label: string
  description: string
  /** Links to a Seeker Gospel study module when one exists. */
  studyModuleId: string | null
}
