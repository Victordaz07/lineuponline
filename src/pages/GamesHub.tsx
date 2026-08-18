import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

type GameCard = {
  to: string
  emoji: string
  title: string
  description: string
  tag: string
  tagClass: string
  /** Ilustración de fondo de la tarjeta (aún no generada para todas). */
  imageSrc?: string
  /** Degradado de respaldo mientras no haya ilustración — o si falla la carga. */
  fallbackGradient: string
}

const GAMES: GameCard[] = [
  {
    to: '/games/scripture-quest',
    emoji: '⚔️',
    title: 'Scripture Quest',
    description: 'Trivia estilo torneo: juega solo, en grupo o crea una sala y compite en vivo.',
    tag: 'Individual o grupo',
    tagClass: 'border-terracotta/50 bg-navy-deep/50 text-terracotta',
    imageSrc: '/assets/games/scripture-quest-card.webp',
    fallbackGradient: 'linear-gradient(135deg, rgb(var(--terracotta) / 0.55), rgb(var(--navy-deep)) 72%)',
  },
  {
    to: '/games/memoria',
    emoji: '🧠',
    title: 'Memoria',
    description: 'Voltea las tarjetas y encuentra las parejas. Tres niveles de dificultad.',
    tag: 'Para niños',
    tagClass: 'border-jade/50 bg-navy-deep/50 text-jade',
    imageSrc: '/assets/games/memoria-card.webp',
    fallbackGradient: 'linear-gradient(135deg, rgb(var(--jade) / 0.55), rgb(var(--navy-deep)) 72%)',
  },
  {
    to: '/games/sopa-de-letras',
    emoji: '🗺️',
    title: 'El Camino de las Escrituras',
    description: 'Elige tu peregrino y recorre el Libro de Mormón, la Biblia y más — sopas de letras, ahorcado y conecta los elementos.',
    tag: 'Con niveles',
    tagClass: 'border-sg-gold/50 bg-navy-deep/50 text-sg-gold-bright',
    imageSrc: '/assets/games/camino-card.webp',
    fallbackGradient: 'linear-gradient(135deg, rgb(var(--sg-gold) / 0.55), rgb(var(--navy-deep)) 72%)',
  },
  {
    to: '/games/adivina-la-palabra',
    emoji: '🔤',
    title: 'Adivina la palabra',
    description: 'Descubre la palabra letra por letra antes de quedarte sin vidas.',
    tag: 'Para niños',
    tagClass: 'border-jade/50 bg-navy-deep/50 text-jade',
    imageSrc: '/assets/games/adivina-palabra-card.webp',
    fallbackGradient: 'linear-gradient(150deg, rgb(var(--jade) / 0.4), rgb(var(--sg-gold) / 0.35) 55%, rgb(var(--navy-deep)) 85%)',
  },
]

function GameCardLink({ to, emoji, title, description, tag, tagClass, imageSrc, fallbackGradient }: GameCard): ReactNode {
  return (
    <Link
      to={to}
      className="group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl border border-sg-gold/15 shadow-sm transition hover:-translate-y-0.5 hover:border-sg-gold/40 hover:shadow-card-hover sm:aspect-[3/2]"
      style={{ background: fallbackGradient }}
    >
      {imageSrc && (
        <img
          src={imageSrc}
          alt=""
          className="absolute inset-0 -z-20 h-full w-full object-cover opacity-0 transition-opacity duration-300"
          loading="lazy"
          onLoad={(e) => e.currentTarget.classList.add('opacity-100')}
          onError={(e) => {
            e.currentTarget.remove()
          }}
        />
      )}

      {/* Zona segura de texto: degradado hacia abajo, para que el título y la
          descripción se lean sin importar qué haya detrás. */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-3/4 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />

      <div className="absolute right-3 top-3 flex items-center gap-2">
        <span className={`rounded-full border px-2.5 py-1 font-ui text-[11px] font-semibold backdrop-blur-sm ${tagClass}`}>
          {tag}
        </span>
      </div>
      <span className="absolute left-3 top-3 text-3xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)]" aria-hidden="true">
        {emoji}
      </span>

      <div className="relative z-10 p-4 sm:p-5">
        <h3 className="font-display text-lg font-bold text-parchment drop-shadow-sm">{title}</h3>
        <p className="mt-1 font-ui text-sm text-parchment/80">{description}</p>
        <span className="mt-2 inline-block font-ui text-sm font-semibold text-sg-gold-bright transition group-hover:translate-x-0.5">
          Jugar →
        </span>
      </div>
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
