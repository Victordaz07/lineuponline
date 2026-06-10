import { useEffect, useMemo, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useAuth } from '@/hooks/useAuth'
import { EndGamePodium } from '../components/EndGamePodium'
import { FixedStage } from '../components/FixedStage'
import { PlayerEndCard } from '../components/PlayerEndCard'
import { QuestAuthGate, QuestShell } from '../components/QuestShell'
import { usePlayers } from '../hooks/usePlayers'
import { useRoom } from '../hooks/useRoom'
import { finalizeGameForPlayer } from '../services/historyService'
import { useGameStore } from '../store/gameStore'
import type { BadgeId, Question } from '../types'
import { roundToStudyQuestion } from '../utils/scoreCalculator'

/** Fin de partida: podio en la pantalla del anfitrión, tarjeta en el móvil. */
export default function ResultsPage() {
  const { roomId } = useParams<{ roomId: string }>()
  const { user } = useAuth()
  const { room, loading } = useRoom(roomId)
  const { players, teams } = usePlayers(roomId)
  const clearActiveRoom = useGameStore((s) => s.clearActiveRoom)

  const [newBadges, setNewBadges] = useState<BadgeId[]>([])
  const [saving, setSaving] = useState(false)
  const finalizedRef = useRef(false)

  const me = players.find((p) => p.uid === user?.uid)
  const isHost = Boolean(room && user && room.hostId === user.uid)

  const myResult = useMemo(() => {
    if (!room || !me) return null
    const missed: Question[] = []
    let correct = 0
    room.rounds.forEach((round, i) => {
      const result = me.results?.[String(i)]
      if (result?.correct) {
        correct += 1
      } else {
        missed.push(roundToStudyQuestion(round))
      }
    })
    const myTeam = me.teamId ? teams.find((t) => t.id === me.teamId) : undefined
    const topScore = me.teamId
      ? Math.max(...teams.map((t) => t.score), 0)
      : Math.max(...players.map((p) => p.score), 0)
    const ownScore = me.teamId ? (myTeam?.score ?? 0) : me.score
    return {
      correct,
      missed,
      wonGame: topScore > 0 && ownScore === topScore,
    }
  }, [room, me, players, teams])

  const myRank = useMemo(() => {
    if (!me) return 0
    const sorted = [...players].sort((a, b) => b.score - a.score)
    return sorted.findIndex((p) => p.uid === me.uid) + 1
  }, [players, me])

  // Guarda historial e insignias exactamente una vez por jugador y sala
  useEffect(() => {
    if (!room || room.status !== 'ended' || !roomId || !user || !me || !myResult) return
    if (finalizedRef.current) return
    const guardKey = `sq-finalized-${roomId}-${user.uid}`
    if (localStorage.getItem(guardKey)) return
    finalizedRef.current = true
    localStorage.setItem(guardKey, '1')
    const params = {
      uid: user.uid,
      roomId,
      topicId: room.topic,
      level: room.level,
      score: me.score,
      totalQuestions: room.rounds.length,
      correctAnswers: myResult.correct,
      missedQuestions: myResult.missed,
      maxStreak: me.maxStreak ?? 0,
      wonGame: myResult.wonGame,
    }
    // Deferred so state updates happen outside the effect body; no cleanup on
    // purpose — once the guard is set, the save must run exactly once.
    setTimeout(() => {
      setSaving(true)
      finalizeGameForPlayer(params)
        .then((badges) => setNewBadges(badges))
        .catch(() => localStorage.removeItem(guardKey))
        .finally(() => {
          setSaving(false)
          clearActiveRoom()
        })
    }, 0)
  }, [room, roomId, user, me, myResult, clearActiveRoom])

  return (
    <QuestShell>
      <QuestAuthGate>
        {loading && <p className="py-16 text-center font-ui text-warm-white/60">Cargando…</p>}
        {!loading && !room && (
          <p className="py-16 text-center font-ui text-warm-white/70">Sala no encontrada.</p>
        )}

        {!loading && room && me && myResult && (
          <PlayerEndCard
            me={me}
            rank={myRank}
            totalPlayers={players.length}
            newBadges={newBadges}
            missedCount={myResult.missed.length}
            saving={saving}
          />
        )}

        {!loading && room && !me && (
          <>
            <FixedStage>
              <EndGamePodium players={players} teams={teams} teamMode={room.teamMode} />
            </FixedStage>
            {isHost && (
              <div className="mt-4 flex justify-center">
                <Link
                  to="/games/scripture-quest"
                  className="rounded-xl border border-sg-gold px-6 py-3 font-ui text-sm font-bold uppercase tracking-wide text-sg-gold-bright transition hover:bg-sg-gold hover:text-navy-deep"
                >
                  Nueva partida
                </Link>
              </div>
            )}
          </>
        )}
      </QuestAuthGate>
    </QuestShell>
  )
}
