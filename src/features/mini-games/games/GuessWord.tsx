import { useCallback, useEffect, useMemo, useState } from 'react'
import { GameLayout } from '../components/GameLayout'
import './guess-word.css'

type Level = {
  type: 'Palabra' | 'Frase' | 'Versículo' | 'Referencia' | 'Historia'
  answer: string
  hint: string
  reference: string
  note: string
  image: string
  reveals: string[]
  scene: string
}

const LEVELS: Level[] = [
  { type: 'Palabra', answer: 'TEMPLO', hint: 'La Casa del Señor', reference: 'Salmos 24:3', note: 'Un lugar de convenios, paz y revelación.', image: '/images/games/reveal/lds-temple.png', reveals: ['Jardines', 'Casa del Señor', 'Aguja', 'Ángel Moroni'], scene: 'temple' },
  { type: 'Frase', answer: 'LAS FAMILIAS PUEDEN SER ETERNAS', hint: 'Una promesa que nace de los convenios', reference: 'La Familia: Una Proclamación para el Mundo', note: 'El plan de Dios permite que las relaciones familiares continúen después de esta vida.', image: '/images/games/reveal/eternal-family.png', reveals: ['Familia', 'Unidad', 'Convenios', 'Eternidad'], scene: 'family' },
  { type: 'Versículo', answer: 'IRE Y HARE LO QUE EL SENOR HA MANDADO', hint: 'Nefi responde con fe y decisión', reference: '1 Nefi 3:7', note: 'El Señor prepara la vía para cumplir lo que manda.', image: '/images/games/reveal/gold-plates.png', reveals: ['Registro', 'Planchas', 'Obediencia', 'Prepararé la vía'], scene: 'plates' },
  { type: 'Referencia', answer: 'JOSE SMITH HISTORIA UNO DIECISEIS', hint: 'El joven José entra en una arboleda para orar', reference: 'José Smith—Historia 1:16', note: 'La oración sincera de José dio paso a la Primera Visión.', image: '/images/games/reveal/sacred-grove.png', reveals: ['Arboleda', 'Oración', 'Primavera de 1820', 'Primera Visión'], scene: 'grove' },
  { type: 'Historia', answer: 'LOS PIONEROS LLEGAN AL VALLE', hint: 'Fe para seguir adelante a pesar del sacrificio', reference: 'Doctrina y Convenios 136', note: 'Miles de Santos cruzaron las llanuras para congregarse y edificar Sion.', image: '/images/games/reveal/pioneer-handcart.png', reveals: ['Carromato', 'Camino', 'Sacrificio', 'Valle del Lago Salado'], scene: 'pioneers' },
]

const KEYS = [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789']
const MAX_LIVES = 6
const guessable = (char: string) => /[A-ZÑ0-9]/.test(char)

export default function GuessWord() {
  const [levelIndex, setLevelIndex] = useState(0)
  const [guessed, setGuessed] = useState<Set<string>>(new Set())
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [hintUsed, setHintUsed] = useState(false)
  const [impact, setImpact] = useState('')
  const level = LEVELS[levelIndex]
  const characters = useMemo(() => [...level.answer], [level.answer])
  const targets = useMemo(() => [...new Set(characters.filter(guessable))], [characters])
  const wrong = [...guessed].filter((key) => !targets.includes(key)).length
  const lives = MAX_LIVES - wrong
  const found = targets.filter((key) => guessed.has(key)).length
  const won = found === targets.length
  const over = won || lives <= 0
  const progress = won ? 100 : Math.round(found / targets.length * 100)

  const guess = useCallback((key: string) => {
    if (over || guessed.has(key)) return
    const correct = targets.includes(key)
    setGuessed((current) => new Set(current).add(key))
    setScore((value) => Math.max(0, value + (correct ? 100 + streak * 15 : -30)))
    setStreak((value) => correct ? value + 1 : 0)
    setImpact(correct ? 'correct' : 'wrong')
    window.setTimeout(() => setImpact(''), 380)
  }, [guessed, over, streak, targets])

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { const key = event.key.toUpperCase(); if (KEYS.includes(key)) guess(key) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [guess])

  useEffect(() => { if (won) setCompleted((current) => new Set(current).add(levelIndex)) }, [levelIndex, won])

  function chooseLevel(index: number) { setLevelIndex(index); setGuessed(new Set()); setHintUsed(false); setStreak(0); setImpact('') }
  function reveal() {
    const hidden = targets.filter((key) => !guessed.has(key))
    if (hintUsed || !hidden.length) return
    setHintUsed(true); setScore((value) => Math.max(0, value - 100))
    setGuessed((current) => new Set(current).add(hidden[Math.floor(Math.random() * hidden.length)]))
  }

  return (
    <GameLayout title="Descubre el mensaje" emoji="✦" status={<span className="gw-kicker">UN VIAJE DE ESTUDIO SUD · {level.type.toUpperCase()}</span>} onRestart={() => { setScore(0); setCompleted(new Set()); chooseLevel(0) }} wide>
      <div className="gw-levels" aria-label="Niveles">
        {LEVELS.map((item, index) => <button key={item.type} onClick={() => chooseLevel(index)} className={`${index === levelIndex ? 'active' : ''} ${completed.has(index) ? 'done' : ''}`}><i>{completed.has(index) ? '✓' : index + 1}</i><span>{item.type}</span></button>)}
      </div>
      <main className={`gw-shell gw-${level.scene} ${impact}`}>
        <section className="gw-scene" aria-label={`Ilustración revelada al ${progress}%`}>
          <div className="gw-scene-grid" />
          {[0, 1, 2, 3].map((slice) => <img key={slice} className={`gw-art-slice slice-${slice} ${progress >= (slice + 1) * 20 ? 'visible' : ''}`} src={level.image} alt={slice === 0 ? `Ilustración del nivel ${level.type}` : ''} />)}
          <div className="gw-night" style={{ opacity: Math.max(.08, .68 - progress / 145) }} />
          <header><span>{level.type}</span><b>{score.toLocaleString('es')} <small>pts</small></b></header>
          <div className="gw-reveal-list">{level.reveals.map((item, index) => <span key={item} className={progress >= (index + 1) * 20 ? 'visible' : ''}><i>✓</i>{item}</span>)}</div>
          <footer><span>ESCENA DESCUBIERTA</span><b>{progress}%</b><div><i style={{ width: `${progress}%` }} /></div></footer>
        </section>

        <section className="gw-panel">
          <div className="gw-stats"><div><small>NIVEL {levelIndex + 1} DE {LEVELS.length}</small><p>{level.type}</p></div><div><small>VIDAS</small><p aria-label={`${lives} vidas`}>{Array.from({ length: MAX_LIVES }).map((_, i) => <i key={i} className={i < lives ? 'on' : ''}>◆</i>)}</p></div></div>
          <div className="gw-clue"><b>✦</b><div><small>PISTA</small><p>{level.hint}</p></div></div>
          <div className={`gw-word ${characters.length > 20 ? 'long' : ''}`}>{characters.map((char, index) => guessable(char) ? <span key={index} className={guessed.has(char) || over ? 'shown' : ''}>{guessed.has(char) || over ? char : ''}</span> : <em key={index}>{char === ' ' ? ' ' : char}</em>)}</div>
          <div className="gw-reference"><span>{level.reference}</span>{over && <p>{level.note}</p>}</div>
          {over ? <div className={`gw-result ${won ? 'win' : ''}`} role="status"><b>{won ? '✦' : '◇'}</b><div><small>{won ? 'NIVEL COMPLETADO' : 'MENSAJE REVELADO'}</small><strong>{won ? '¡Conocimiento desbloqueado!' : level.answer}</strong></div><button onClick={() => chooseLevel((levelIndex + 1) % LEVELS.length)}>{levelIndex === LEVELS.length - 1 ? 'Volver al inicio' : 'Siguiente nivel'} →</button></div> : <>
            <div className="gw-actions"><p>Descubre el mensaje <span>letra por letra</span></p><button onClick={reveal} disabled={hintUsed}>◎ {hintUsed ? 'Ayuda usada' : 'Revelar carácter'} <small>−100</small></button></div>
            <div className="gw-keys">{KEYS.map((key) => { const used = guessed.has(key); return <button key={key} disabled={used} onClick={() => guess(key)} className={used ? (targets.includes(key) ? 'yes' : 'no') : ''}>{key}</button> })}</div>
          </>}
        </section>
      </main>
    </GameLayout>
  )
}
