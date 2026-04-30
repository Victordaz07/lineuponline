type HeroCardProps = {
  eyebrow: string
  title: string
  description: string
}

export function HeroCard({ eyebrow, title, description }: HeroCardProps) {
  return (
    <section className="relative overflow-hidden rounded-2xl border border-gold-main/25 bg-[radial-gradient(circle_at_center,_#FFFFFF_0%,_#F5F2EB_100%)] p-6 shadow-sm sm:p-8">
      <span
        className="absolute right-0 top-0 h-8 w-8 rounded-bl-lg bg-gold-main/80"
        aria-hidden="true"
      />
      <p className="eyebrow mb-2 text-sm uppercase tracking-[0.14em] text-gold-main">
        {eyebrow}
      </p>
      <h1 className="mb-3 text-blue-accent [text-shadow:0_1px_1px_rgba(27,58,107,0.12)]">{title}</h1>
      <p className="text-reading text-base text-text-main sm:text-lg">{description}</p>
    </section>
  )
}
