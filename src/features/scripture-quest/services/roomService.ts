/**
 * Firestore operations for Scripture Quest rooms.
 * Collection: scripturequest_rooms/{code} (+ players/teams subcollections).
 * Writes that touch several documents are batched.
 */
import {
  collection,
  deleteField,
  doc,
  getDoc,
  serverTimestamp,
  setDoc,
  updateDoc,
  writeBatch,
} from 'firebase/firestore'
import { getDb } from '@/lib/firebase'
import type { AnswerOption, Player, QuestLevel, Question, Room, Team } from '../types'
import { generateRoomCode } from '../utils/roomCodeGenerator'
import { pointsForCorrectAnswer } from '../utils/scoreCalculator'

export const ROOMS_COLLECTION = 'scripturequest_rooms'

export function roomRef(roomId: string) {
  return doc(getDb(), ROOMS_COLLECTION, roomId)
}

export function playerRef(roomId: string, uid: string) {
  return doc(getDb(), ROOMS_COLLECTION, roomId, 'players', uid)
}

export function teamRef(roomId: string, teamId: string) {
  return doc(getDb(), ROOMS_COLLECTION, roomId, 'teams', teamId)
}

/** Creates a room with a fresh unique session code and returns the code. */
export async function createRoom(params: {
  hostId: string
  topicId: string
  level: QuestLevel
  teamMode: boolean
}): Promise<string> {
  for (let attempt = 0; attempt < 5; attempt++) {
    const code = generateRoomCode()
    const ref = roomRef(code)
    const existing = await getDoc(ref)
    if (existing.exists()) continue
    const room: Omit<Room, 'createdAt' | 'questionStartedAt'> = {
      hostId: params.hostId,
      status: 'lobby',
      currentQuestion: 0,
      currentRoundType: 'classic',
      topic: params.topicId,
      level: params.level,
      questions: [],
      teamMode: params.teamMode,
    }
    await setDoc(ref, {
      ...room,
      createdAt: serverTimestamp(),
      questionStartedAt: null,
    })
    return code
  }
  throw new Error('No se pudo generar un código de sala único. Intenta de nuevo.')
}

export async function fetchRoom(roomId: string): Promise<Room | null> {
  const snap = await getDoc(roomRef(roomId))
  return snap.exists() ? (snap.data() as Room) : null
}

export async function setRoomQuestions(roomId: string, questions: Question[]): Promise<void> {
  await updateDoc(roomRef(roomId), { questions })
}

export async function joinRoom(
  roomId: string,
  player: Pick<Player, 'uid' | 'name' | 'avatar'>,
): Promise<void> {
  const snap = await getDoc(playerRef(roomId, player.uid))
  if (snap.exists()) {
    // Rejoining: keep score/streak, refresh identity only
    await updateDoc(playerRef(roomId, player.uid), {
      name: player.name,
      avatar: player.avatar,
    })
    return
  }
  const fresh: Player = {
    ...player,
    score: 0,
    teamId: null,
    isLeader: false,
    answeredCurrentQuestion: false,
    currentAnswer: null,
    streak: 0,
    maxStreak: 0,
    answers: {},
  }
  await setDoc(playerRef(roomId, player.uid), fresh)
}

export async function createTeam(roomId: string, name: string, leaderId: string): Promise<string> {
  const ref = doc(collection(getDb(), ROOMS_COLLECTION, roomId, 'teams'))
  const team: Omit<Team, 'id'> = {
    name,
    leaderId,
    memberIds: [leaderId],
    score: 0,
    votes: {},
    confirmedAnswer: null,
  }
  const batch = writeBatch(getDb())
  batch.set(ref, team)
  batch.update(playerRef(roomId, leaderId), { teamId: ref.id, isLeader: true })
  await batch.commit()
  return ref.id
}

export async function joinTeam(roomId: string, team: Team, uid: string): Promise<void> {
  const batch = writeBatch(getDb())
  batch.update(teamRef(roomId, team.id), {
    memberIds: Array.from(new Set([...team.memberIds, uid])),
  })
  batch.update(playerRef(roomId, uid), { teamId: team.id, isLeader: false })
  await batch.commit()
}

export async function leaveTeam(roomId: string, team: Team, uid: string): Promise<void> {
  const remaining = team.memberIds.filter((id) => id !== uid)
  const batch = writeBatch(getDb())
  batch.update(teamRef(roomId, team.id), {
    memberIds: remaining,
    leaderId: team.leaderId === uid ? (remaining[0] ?? '') : team.leaderId,
    [`votes.${uid}`]: deleteField(),
  })
  batch.update(playerRef(roomId, uid), { teamId: null, isLeader: false })
  if (team.leaderId === uid && remaining[0]) {
    batch.update(playerRef(roomId, remaining[0]), { isLeader: true })
  }
  await batch.commit()
}

/** Host: starts the game and launches the first question. */
export async function startGame(roomId: string, players: Player[], teams: Team[]): Promise<void> {
  await updateDoc(roomRef(roomId), { status: 'playing' })
  await startQuestion(roomId, 0, players, teams)
}

/**
 * Host: opens question `index`. Resets per-question player/team state in one
 * batch and anchors the server-side timer via questionStartedAt.
 */
export async function startQuestion(
  roomId: string,
  index: number,
  players: Player[],
  teams: Team[],
): Promise<void> {
  const batch = writeBatch(getDb())
  for (const p of players) {
    batch.update(playerRef(roomId, p.uid), {
      answeredCurrentQuestion: false,
      currentAnswer: null,
    })
  }
  for (const t of teams) {
    batch.update(teamRef(roomId, t.id), { votes: {}, confirmedAnswer: null })
  }
  batch.update(roomRef(roomId), {
    status: 'question',
    currentQuestion: index,
    questionStartedAt: serverTimestamp(),
  })
  await batch.commit()
}

/** Player: locks in an individual answer for the current question. */
export async function submitAnswer(
  roomId: string,
  uid: string,
  answer: AnswerOption,
): Promise<void> {
  await updateDoc(playerRef(roomId, uid), {
    answeredCurrentQuestion: true,
    currentAnswer: answer,
  })
}

/** Team member: casts a realtime vote visible to the leader. */
export async function voteTeamAnswer(
  roomId: string,
  teamId: string,
  uid: string,
  answer: AnswerOption,
): Promise<void> {
  await updateDoc(teamRef(roomId, teamId), { [`votes.${uid}`]: answer })
}

/** Team leader: confirms the team answer before the timer ends. */
export async function confirmTeamAnswer(
  roomId: string,
  teamId: string,
  leaderId: string,
  answer: AnswerOption,
): Promise<void> {
  const batch = writeBatch(getDb())
  batch.update(teamRef(roomId, teamId), { confirmedAnswer: answer })
  batch.update(playerRef(roomId, leaderId), {
    answeredCurrentQuestion: true,
    currentAnswer: answer,
  })
  await batch.commit()
}

/**
 * Host: closes the question, awards points (with streak bonus) and moves the
 * room to 'results'. All score updates go out in a single batch.
 */
export async function revealResults(
  roomId: string,
  questionIndex: number,
  question: Question,
  players: Player[],
  teams: Team[],
): Promise<void> {
  const batch = writeBatch(getDb())
  const teamById = new Map(teams.map((t) => [t.id, t]))

  for (const p of players) {
    const effectiveAnswer = p.teamId
      ? (teamById.get(p.teamId)?.confirmedAnswer ?? null)
      : p.currentAnswer
    const correct = effectiveAnswer === question.correctAnswer
    const newStreak = correct ? p.streak + 1 : 0
    batch.update(playerRef(roomId, p.uid), {
      score: correct ? p.score + pointsForCorrectAnswer(question, p.streak) : p.score,
      streak: newStreak,
      maxStreak: Math.max(p.maxStreak ?? 0, newStreak),
      [`answers.${questionIndex}`]: effectiveAnswer,
    })
  }

  for (const t of teams) {
    if (t.confirmedAnswer === question.correctAnswer) {
      batch.update(teamRef(roomId, t.id), {
        score: t.score + pointsForCorrectAnswer(question, 0),
      })
    }
  }

  batch.update(roomRef(roomId), { status: 'results' })
  await batch.commit()
}

/** Host: advances to the next question or ends the game after the last one. */
export async function advanceGame(
  roomId: string,
  room: Room,
  players: Player[],
  teams: Team[],
): Promise<void> {
  const next = room.currentQuestion + 1
  if (next >= room.questions.length) {
    await updateDoc(roomRef(roomId), { status: 'ended' })
  } else {
    await startQuestion(roomId, next, players, teams)
  }
}
