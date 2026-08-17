import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type GameCard = {
  to: string
  emoji: string
  title: string
  description: string
  tag: string
  tagClass: string
}

const GAMES: GameCard[] = [
  {
    to: '/games/scripture-quest',
    emoji: '⚔️',
    title: 'Scripture Quest',
    description: 'Trivia estilo torneo: juega solo, en grupo o crea una sala y compite en vivo.',
    tag: 'Individual o grupo',
    tagClass: 'border-terracotta/40 bg-terracotta/15 text-terracotta',
  },
  {
    to: '/games/memoria',
    emoji: '🧠',
    title: 'Memoria',
    description: 'Voltea las tarjetas y encuentra las parejas. Tres niveles de dificultad.',
    tag: 'Para niños',
    tagClass: 'border-jade/40 bg-jade/15 text-jade',
  },
  {
    to: '/games/sopa-de-letras',
    emoji: '🔎',
    title: 'Sopa de letras',
    description: 'Encuentra las palabras escondidas en la grilla arrastrando el dedo o el mouse.',
    tag: 'Para niños',
    tagClass: 'border-jade/40 bg-jade/15 text-jade',
  },
  {
    to: '/games/adivina-la-palabra',
    emoji: '🔤',
    title: 'Adivina la palabra',
    description: 'Descubre la palabra letra por letra antes de quedarte sin vidas.',
    tag: 'Para niños',
    tagClass: 'border-jade/40 bg-jade/15 text-jade',
  },
]

function GameCardLink({ to, emoji, title, description, tag, tagClass }: GameCard): ReactNode {
  return (
    <Link
      to={to}
      className="group flex flex-col gap-3 rounded-2xl border border-sg-gold/15 bg-navy-mid p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-sg-gold/40 hover:shadow-card-hover sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <span className="text-4xl" aria-hidden="true">
          {emoji}
        </span>
        <span className={`rounded-full border px-2.5 py-1 font-ui text-[11px] font-semibold ${tagClass}`}>
          {tag}
        </span>
      </div>
      <div>
        <h3 className="font-display text-lg font-bold text-parchment">{title}</h3>
        <p className="mt-1 font-ui text-sm text-parchment/65">{description}</p>
      </div>
      <span className="mt-auto font-ui text-sm font-semibold text-sg-gold-light transition group-hover:translate-x-0.5">
        Jugar →
      </span>
    </Link>
  )
}

/** Vestíbulo de juegos: punto de entrada a todos los mini-juegos de la app. */
export default function GamesHub() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-4 py-6">
      <div>
        <h1 className="font-display text-2xl font-bold text-parchment sm:text-3xl">🎮 Juegos</h1>
        <p className="mt-1 font-ui text-sm text-parchment/65">
          Algo divertido para cuando estés aburrido — solo, en familia o con amigos.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {GAMES.map((game) => (
          <GameCardLink key={game.to} {...game} />
        ))}
      </div>
    </div>
  )
}
