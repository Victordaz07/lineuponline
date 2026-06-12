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
import type { GameRound, MusicMode, Player, QuestLevel, Room, Team } from '../types'
import { generateRoomCode } from '../utils/roomCodeGenerator'
import { TIMER_BY_TYPE, evaluateAnswer } from '../utils/scoreCalculator'

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

/** Creates a room with a fresh unique session code and the drawn rounds. */
export async function createRoom(params: {
  hostId: string
  topicId: string
  level: QuestLevel
  teamMode: boolean
  rounds: GameRound[]
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
      currentRoundType: params.rounds[0]?.roundType ?? 'classic',
      topic: params.topicId,
      level: params.level,
      rounds: params.rounds,
      selectedQuestionIds: params.rounds.map((r) => r.id),
      teamMode: params.teamMode,
      musicMode: 'festivo',
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

/** Anfitrión: cambia el ambiente musical (festivo/reverente/silencio). */
export async function setRoomMusic(roomId: string, musicMode: MusicMode): Promise<void> {
  await updateDoc(roomRef(roomId), { musicMode })
}

export async function fetchRoom(roomId: string): Promise<Room | null> {
  const snap = await getDoc(roomRef(roomId))
  return snap.exists() ? (snap.data() as Room) : null
}

/** Replaces the drawn rounds while the room is still in the lobby. */
export async function setRoomRounds(roomId: string, rounds: GameRound[]): Promise<void> {
  await updateDoc(roomRef(roomId), {
    rounds,
    selectedQuestionIds: rounds.map((r) => r.id),
    currentRoundType: rounds[0]?.roundType ?? 'classic',
  })
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
    answerElapsed: null,
    streak: 0,
    maxStreak: 0,
    results: {},
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

/** Host: starts the game and launches the first round. */
export async function startGame(roomId: string, players: Player[], teams: Team[]): Promise<void> {
  await updateDoc(roomRef(roomId), { status: 'playing' })
  await startQuestion(roomId, 0, null, players, teams)
}

/**
 * Host: opens round `index`. Resets per-round player/team state in one batch
 * and anchors the server-side timer via questionStartedAt.
 */
export async function startQuestion(
  roomId: string,
  index: number,
  round: GameRound | null,
  players: Player[],
  teams: Team[],
): Promise<void> {
  const batch = writeBatch(getDb())
  for (const p of players) {
    batch.update(playerRef(roomId, p.uid), {
      answeredCurrentQuestion: false,
      currentAnswer: null,
      answerElapsed: null,
    })
  }
  for (const t of teams) {
    batch.update(teamRef(roomId, t.id), { votes: {}, confirmedAnswer: null })
  }
  batch.update(roomRef(roomId), {
    status: 'question',
    currentQuestion: index,
    ...(round ? { currentRoundType: round.roundType } : {}),
    questionStartedAt: serverTimestamp(),
  })
  await batch.commit()
}

/** Player: locks in an answer (option letter, text, true/false or ordering). */
export async function submitAnswer(
  roomId: string,
  uid: string,
  answer: string,
  elapsedSeconds: number,
): Promise<void> {
  await updateDoc(playerRef(roomId, uid), {
    answeredCurrentQuestion: true,
    currentAnswer: answer,
    answerElapsed: Math.max(0, Math.round(elapsedSeconds)),
  })
}

/** Team member: casts a realtime vote visible to the leader (classic/TF). */
export async function voteTeamAnswer(
  roomId: string,
  teamId: string,
  uid: string,
  answer: string,
): Promise<void> {
  await updateDoc(teamRef(roomId, teamId), { [`votes.${uid}`]: answer })
}

/** Team leader: confirms the team answer before the timer ends. */
export async function confirmTeamAnswer(
  roomId: string,
  teamId: string,
  leaderId: string,
  answer: string,
  elapsedSeconds: number,
): Promise<void> {
  const batch = writeBatch(getDb())
  batch.update(teamRef(roomId, teamId), { confirmedAnswer: answer })
  batch.update(playerRef(roomId, leaderId), {
    answeredCurrentQuestion: true,
    currentAnswer: answer,
    answerElapsed: Math.max(0, Math.round(elapsedSeconds)),
  })
  await batch.commit()
}

/** Most voted option (ties resolved by option order) — auto-confirm on timeout. */
export function mostVotedAnswer(team: Team): string | null {
  const counts = new Map<string, number>()
  for (const vote of Object.values(team.votes ?? {})) {
    counts.set(vote, (counts.get(vote) ?? 0) + 1)
  }
  let best: string | null = null
  let bestCount = 0
  for (const [answer, count] of [...counts.entries()].sort()) {
    if (count > bestCount) {
      best = answer
      bestCount = count
    }
  }
  return best
}

/** Round types where teams answer via vote + leader confirmation. */
const TEAM_VOTE_TYPES = ['classic', 'true_false']

/**
 * Host: closes the round, evaluates every answer (speed/streak/partial
 * matches according to the round type) and moves the room to 'results'.
 * All score updates go out in a single batch.
 */
export async function revealResults(
  roomId: string,
  questionIndex: number,
  round: GameRound,
  players: Player[],
  teams: Team[],
): Promise<void> {
  const batch = writeBatch(getDb())
  const teamById = new Map(teams.map((t) => [t.id, t]))
  const duration = TIMER_BY_TYPE[round.roundType]
  const isVoteRound = TEAM_VOTE_TYPES.includes(round.roundType)

  // Mime: the whole team scores if any member guessed correctly
  const mimeTeamCorrect = new Set<string>()
  if (round.roundType === 'mime') {
    for (const p of players) {
      if (!p.teamId) continue
      const res = evaluateAnswer(round, p.currentAnswer, p.answerElapsed ?? duration, 0)
      if (res.correct) mimeTeamCorrect.add(p.teamId)
    }
  }

  const playerPoints = new Map<string, { correct: boolean; points: number }>()
  for (const p of players) {
    let evaluation: { correct: boolean; points: number }
    if (round.roundType === 'mime') {
      const teamCorrect = p.teamId ? mimeTeamCorrect.has(p.teamId) : false
      evaluation = evaluateAnswer(round, teamCorrect ? round.content.answer : null, duration, 0)
    } else if (isVoteRound && p.teamId) {
      // Team answer (confirmed by leader or auto-confirmed) applies to members
      const team = teamById.get(p.teamId)
      const answer = team?.confirmedAnswer ?? mostVotedAnswer(team ?? ({ votes: {} } as Team))
      evaluation = evaluateAnswer(round, answer, p.answerElapsed ?? duration, p.streak)
    } else {
      evaluation = evaluateAnswer(round, p.currentAnswer, p.answerElapsed ?? duration, p.streak)
    }
    playerPoints.set(p.uid, evaluation)
    const newStreak = evaluation.correct ? p.streak + 1 : 0
    batch.update(playerRef(roomId, p.uid), {
      score: p.score + evaluation.points,
      streak: newStreak,
      maxStreak: Math.max(p.maxStreak ?? 0, newStreak),
      [`results.${questionIndex}`]: evaluation,
    })
  }

  for (const t of teams) {
    const memberPoints = t.memberIds.map((uid) => playerPoints.get(uid)?.points ?? 0)
    const best = memberPoints.length > 0 ? Math.max(...memberPoints) : 0
    if (best > 0) {
      batch.update(teamRef(roomId, t.id), { score: t.score + best })
    }
  }

  batch.update(roomRef(roomId), { status: 'results' })
  await batch.commit()
}

/** Host: advances to the next round or ends the game after the last one. */
export async function advanceGame(
  roomId: string,
  room: Room,
  players: Player[],
  teams: Team[],
): Promise<void> {
  const next = room.currentQuestion + 1
  if (next >= room.rounds.length) {
    await updateDoc(roomRef(roomId), { status: 'ended' })
  } else {
    await startQuestion(roomId, next, room.rounds[next] ?? null, players, teams)
  }
}
