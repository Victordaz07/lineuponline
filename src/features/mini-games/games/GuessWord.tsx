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
  { type: 'Frase', answer: 'CREEMOS EN DIOS EL ETERNO PADRE', hint: 'El primero de trece declaraciones de creencia', reference: 'Artículo de Fe 1', note: 'Creemos en Dios el Eterno Padre, en Su Hijo Jesucristo y en el Espíritu Santo.', image: '/images/games/reveal/lds-temple.png', reveals: ['Padre', 'Hijo', 'Espíritu Santo', 'Divinidad'], scene: 'temple' },
  { type: 'Frase', answer: 'POR LA EXPIACION DE CRISTO PODEMOS SALVARNOS', hint: 'La salvación es posible mediante Jesucristo', reference: 'Artículo de Fe 3', note: 'La Expiación de Cristo hace posible la salvación mediante la obediencia al Evangelio.', image: '/images/games/reveal/eternal-family.png', reveals: ['Jesucristo', 'Expiación', 'Obediencia', 'Salvación'], scene: 'family' },
  { type: 'Frase', answer: 'FE ARREPENTIMIENTO BAUTISMO ESPIRITU SANTO', hint: 'Los primeros principios y ordenanzas', reference: 'Artículo de Fe 4', note: 'Fe, arrepentimiento, bautismo y el don del Espíritu Santo.', image: '/images/games/reveal/lds-temple.png', reveals: ['Fe', 'Arrepentimiento', 'Bautismo', 'Espíritu Santo'], scene: 'temple' },
  { type: 'Frase', answer: 'LA BIBLIA Y EL LIBRO DE MORMON SON LA PALABRA DE DIOS', hint: 'Dos testamentos de Jesucristo', reference: 'Artículo de Fe 8', note: 'La Biblia y el Libro de Mormón testifican de Jesucristo.', image: '/images/games/reveal/gold-plates.png', reveals: ['Biblia', 'Libro de Mormón', 'Testigos', 'Palabra de Dios'], scene: 'plates' },
  { type: 'Frase', answer: 'SI HAY ALGO VIRTUOSO A ESTO ASPIRAMOS', hint: 'Virtuoso, bello y digno de alabanza', reference: 'Artículo de Fe 13', note: 'Buscamos activamente todo aquello que sea virtuoso y bueno.', image: '/images/games/reveal/eternal-family.png', reveals: ['Honrados', 'Verídicos', 'Virtuosos', 'Hacer el bien'], scene: 'family' },
  { type: 'Versículo', answer: 'AMARAS AL SENOR TU DIOS Y A TU PROJIMO', hint: 'Los dos grandes mandamientos', reference: 'Mateo 22:36–39 · Biblia', note: 'El amor a Dios y al prójimo resume los grandes mandamientos.', image: '/images/games/reveal/eternal-family.png', reveals: ['Amor', 'Dios', 'Prójimo', 'Mandamientos'], scene: 'family' },
  { type: 'Versículo', answer: 'LAS ESCRITURAS TE PUEDEN HACER SABIO PARA LA SALVACION', hint: 'El estudio de la palabra de Dios conduce a Cristo', reference: '2 Timoteo 3:15–17 · Biblia', note: 'Las Escrituras enseñan, corrigen y preparan para toda buena obra.', image: '/images/games/reveal/gold-plates.png', reveals: ['Escrituras', 'Sabiduría', 'Enseñanza', 'Salvación'], scene: 'plates' },
  { type: 'Versículo', answer: 'ADAN CAYO PARA QUE LOS HOMBRES EXISTIESEN', hint: 'La Caída forma parte del plan de felicidad', reference: '2 Nefi 2:25 · Libro de Mormón', note: 'La existencia mortal permite gozo, progreso y albedrío.', image: '/images/games/reveal/gold-plates.png', reveals: ['Adán', 'Caída', 'Mortalidad', 'Gozo'], scene: 'plates' },
  { type: 'Versículo', answer: 'POR LA GRACIA NOS SALVAMOS DESPUES DE HACER CUANTO PODAMOS', hint: 'Dependemos completamente de la gracia de Cristo', reference: '2 Nefi 25:23 · Libro de Mormón', note: 'La salvación viene por la gracia de Jesucristo.', image: '/images/games/reveal/gold-plates.png', reveals: ['Gracia', 'Cristo', 'Esfuerzo', 'Salvación'], scene: 'plates' },
  { type: 'Versículo', answer: 'PREGUNTAD A DIOS CON UN CORAZON SINCERO', hint: 'La promesa al final del Libro de Mormón', reference: 'Moroni 10:4–5 · Libro de Mormón', note: 'El Espíritu Santo manifiesta la verdad a quienes preguntan con fe.', image: '/images/games/reveal/gold-plates.png', reveals: ['Preguntar', 'Fe', 'Espíritu Santo', 'Verdad'], scene: 'plates' },
  { type: 'Versículo', answer: 'BUSCAD CONOCIMIENTO POR EL ESTUDIO Y POR LA FE', hint: 'Aprender combina esfuerzo espiritual e intelectual', reference: 'Doctrina y Convenios 88:118', note: 'El Señor nos invita a aprender tanto por el estudio como por la fe.', image: '/images/games/reveal/sacred-grove.png', reveals: ['Buscar', 'Conocimiento', 'Estudio', 'Fe'], scene: 'grove' },
  { type: 'Versículo', answer: 'YO EL SENOR ESTOY OBLIGADO CUANDO HACEIS LO QUE OS DIGO', hint: 'Dios honra Sus promesas', reference: 'Doctrina y Convenios 82:10', note: 'La obediencia permite reclamar las bendiciones prometidas.', image: '/images/games/reveal/lds-temple.png', reveals: ['Señor', 'Obediencia', 'Promesa', 'Bendición'], scene: 'temple' },
  { type: 'Versículo', answer: 'EL VALOR DE LAS ALMAS ES GRANDE A LA VISTA DE DIOS', hint: 'Cada persona tiene valor eterno', reference: 'Doctrina y Convenios 18:10–11', note: 'Jesucristo sufrió por todos porque cada alma es preciosa.', image: '/images/games/reveal/eternal-family.png', reveals: ['Alma', 'Valor', 'Jesucristo', 'Redención'], scene: 'family' },
  { type: 'Versículo', answer: 'ESTA ES MI OBRA Y MI GLORIA', hint: 'El propósito de la obra de Dios', reference: 'Moisés 1:39 · Perla de Gran Precio', note: 'La obra de Dios es llevar a cabo la inmortalidad y la vida eterna del hombre.', image: '/images/games/reveal/lds-temple.png', reveals: ['Obra', 'Gloria', 'Inmortalidad', 'Vida eterna'], scene: 'temple' },
  { type: 'Frase', answer: 'LOS HOMBRES SERAN CASTIGADOS POR SUS PROPIOS PECADOS', hint: 'Responsabilidad individual y albedrío', reference: 'Artículo de Fe 2 · Perla de Gran Precio', note: 'No somos castigados por la transgresión de Adán.', image: '/images/games/reveal/sacred-grove.png', reveals: ['Albedrío', 'Responsabilidad', 'Pecados propios', 'Justicia'], scene: 'grove' },
]

const KEYS = [...'ABCDEFGHIJKLMNÑOPQRSTUVWXYZ0123456789']
type Difficulty = 'nuevo' | 'discipulo' | 'maestro'
const DIFFICULTIES = {
  nuevo: { label: 'Nuevo', reveal: .62, lives: 8, description: 'Muchas letras visibles' },
  discipulo: { label: 'Discípulo', reveal: .32, lives: 6, description: 'Una ayuda inicial' },
  maestro: { label: 'Maestro', reveal: 0, lives: 4, description: 'Mensaje oculto' },
} as const
const guessable = (char: string) => /[A-ZÑ0-9]/.test(char)

function initialLetters(level: Level, difficulty: Difficulty): Set<string> {
  const unique = [...new Set([...level.answer].filter(guessable))]
  const amount = Math.floor(unique.length * DIFFICULTIES[difficulty].reveal)
  return new Set(unique.filter((_, index) => index < amount))
}

export default function GuessWord() {
  const [levelIndex, setLevelIndex] = useState(0)
  const [difficulty, setDifficulty] = useState<Difficulty>('nuevo')
  const [guessed, setGuessed] = useState<Set<string>>(() => initialLetters(LEVELS[0], 'nuevo'))
  const [completed, setCompleted] = useState<Set<number>>(new Set())
  const [score, setScore] = useState(0)
  const [streak, setStreak] = useState(0)
  const [hintUsed, setHintUsed] = useState(false)
  const [impact, setImpact] = useState('')
  const level = LEVELS[levelIndex]
  const characters = useMemo(() => [...level.answer], [level.answer])
  const targets = useMemo(() => [...new Set(characters.filter(guessable))], [characters])
  const wrong = [...guessed].filter((key) => !targets.includes(key)).length
  const maxLives = DIFFICULTIES[difficulty].lives
  const lives = maxLives - wrong
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

  function chooseLevel(index: number, mode: Difficulty = difficulty) { setLevelIndex(index); setGuessed(initialLetters(LEVELS[index], mode)); setHintUsed(false); setStreak(0); setImpact('') }
  function chooseDifficulty(mode: Difficulty) { setDifficulty(mode); chooseLevel(levelIndex, mode) }
  function reveal() {
    const hidden = targets.filter((key) => !guessed.has(key))
    if (hintUsed || !hidden.length) return
    setHintUsed(true); setScore((value) => Math.max(0, value - 100))
    setGuessed((current) => new Set(current).add(hidden[Math.floor(Math.random() * hidden.length)]))
  }

  return (
    <GameLayout title="Descubre el mensaje" emoji="✦" status={<span className="gw-kicker">UN VIAJE DE ESTUDIO SUD · {level.type.toUpperCase()}</span>} onRestart={() => { setScore(0); setCompleted(new Set()); chooseLevel(0) }} wide>
      <div className="gw-difficulty" aria-label="Dificultad">
        <span>Dificultad</span>
        {(Object.entries(DIFFICULTIES) as [Difficulty, typeof DIFFICULTIES[Difficulty]][]).map(([key, option]) => <button key={key} onClick={() => chooseDifficulty(key)} className={difficulty === key ? 'active' : ''}><b>{option.label}</b><small>{option.description}</small></button>)}
      </div>
      <div className="gw-levels" aria-label="Niveles">
        {LEVELS.map((item, index) => <button key={`${item.reference}-${index}`} onClick={() => chooseLevel(index)} className={`${index === levelIndex ? 'active' : ''} ${completed.has(index) ? 'done' : ''}`}><i>{completed.has(index) ? '✓' : index + 1}</i><span>{item.type}</span></button>)}
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
          <div className="gw-stats"><div><small>NIVEL {levelIndex + 1} DE {LEVELS.length}</small><p>{level.type} · {DIFFICULTIES[difficulty].label}</p></div><div><small>VIDAS</small><p aria-label={`${lives} vidas`}>{Array.from({ length: maxLives }).map((_, i) => <i key={i} className={i < lives ? 'on' : ''}>◆</i>)}</p></div></div>
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
