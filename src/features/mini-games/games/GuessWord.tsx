import { useCallback, useEffect, useMemo, useState } from 'react'
import { GameLayout } from '../components/GameLayout'
import { pickRandomWord, type WordEntry } from '../data/wordBank'
import './guess-word.css'

const KEYS = [...'ABCDEFGHIJKLMNOPQRSTUVWXYZ']
const MAX_LIVES = 6
const CATEGORIES = { virtudes: 'Virtudes', personajes: 'Personajes', lugares: 'Lugares', ordenanzas: 'Ordenanzas', escrituras: 'Escrituras' }

export default function GuessWord() {
  const [entry, setEntry] = useState<WordEntry>(() => pickRandomWord())
  const [guessed, setGuessed] = useState<Set<string>>(new Set())
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [round, setRound] = useState(1)
  const [hintUsed, setHintUsed] = useState(false)
  const [impact, setImpact] = useState('')
  const letters = useMemo(() => [...entry.word], [entry])
  const wrong = [...guessed].filter((letter) => !letters.includes(letter)).length
  const lives = MAX_LIVES - wrong
  const won = letters.every((letter) => guessed.has(letter))
  const over = won || lives <= 0
  const unique = [...new Set(letters)]
  const found = unique.filter((letter) => guessed.has(letter)).length
  const progress = won ? 100 : Math.round(found / unique.length * 100)

  const guess = useCallback((letter: string) => {
    if (over || guessed.has(letter)) return
    const correct = letters.includes(letter)
    setGuessed((current) => new Set(current).add(letter))
    setScore((value) => Math.max(0, value + (correct ? 120 + streak * 20 : -35)))
    setStreak((value) => correct ? value + 1 : 0)
    setImpact(correct ? 'correct' : 'wrong')
    window.setTimeout(() => setImpact(''), 380)
  }, [guessed, letters, over, streak])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { const key = event.key.toUpperCase(); if (KEYS.includes(key)) guess(key) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [guess])

  function next(resetScore = false) {
    setEntry(pickRandomWord()); setGuessed(new Set()); setHintUsed(false); setImpact('')
    setRound((value) => resetScore ? 1 : value + 1)
    if (resetScore) { setScore(0); setStreak(0) }
  }

  function reveal() {
    const hidden = unique.filter((letter) => !guessed.has(letter))
    if (hintUsed || !hidden.length) return
    setHintUsed(true); setScore((value) => Math.max(0, value - 100))
    setGuessed((current) => new Set(current).add(hidden[Math.floor(Math.random() * hidden.length)]))
  }

  return (
    <GameLayout title="Adivina la palabra" emoji="✦" status={<span className="gw-kicker">REVELA EL CAMINO · RONDA {round}</span>} onRestart={() => next(true)} wide>
      <main className={`gw-shell ${impact}`}>
        <section className="gw-scene" aria-label={`Escena revelada al ${progress}%`}>
          <div className="gw-picture" /><div className="gw-hidden" style={{ clipPath: `inset(0 0 ${progress}% 0)` }} />
          <div className="gw-night" style={{ opacity: Math.max(.05, .7 - progress / 150) }} /><div className="gw-light" style={{ opacity: progress / 100 }} />
          {Array.from({ length: Math.ceil(progress / 17) }).map((_, i) => <i key={i} className={`gw-spark s${i + 1}`} />)}
          <header><span>{CATEGORIES[entry.category]}</span><b>{score.toLocaleString('es')} <small>pts</small></b></header>
          <footer><span>CAMINO REVELADO</span><b>{progress}%</b><div><i style={{ width: `${progress}%` }} /></div></footer>
        </section>

        <section className="gw-panel">
          <div className="gw-stats"><div><small>VIDAS</small><p aria-label={`${lives} vidas`}>{Array.from({ length: MAX_LIVES }).map((_, i) => <i key={i} className={i < lives ? 'on' : ''}>◆</i>)}</p></div><div><small>RACHA</small><strong className={streak > 1 ? 'hot' : ''}>✦ {streak}</strong></div></div>
          <div className="gw-clue"><b>✦</b><div><small>PISTA</small><p>{entry.hint}</p></div></div>
          <div className="gw-word">{letters.map((letter, i) => <span key={i} className={guessed.has(letter) || over ? 'shown' : ''}>{guessed.has(letter) || over ? letter : ''}</span>)}</div>
          {over ? <div className={`gw-result ${won ? 'win' : ''}`} role="status"><b>{won ? '✦' : '◇'}</b><div><small>{won ? 'CAMINO COMPLETADO' : 'EL CAMINO SE OCULTA'}</small><strong>{won ? '¡La luz te guió!' : `Era ${entry.word}`}</strong></div><button onClick={() => next()}>{won ? 'Siguiente viaje' : 'Intentar otra'} →</button></div> : <>
            <div className="gw-actions"><p>Elige una letra <span>o usa tu teclado</span></p><button onClick={reveal} disabled={hintUsed}>◎ {hintUsed ? 'Pista usada' : 'Revelar letra'} <small>−100</small></button></div>
            <div className="gw-keys">{KEYS.map((letter) => { const used = guessed.has(letter); return <button key={letter} disabled={used} onClick={() => guess(letter)} className={used ? (letters.includes(letter) ? 'yes' : 'no') : ''}>{letter}</button> })}</div>
          </>}
        </section>
      </main>
    </GameLayout>
  )
}
