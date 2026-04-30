type HeroCardProps = {
  eyebrow: string
  title: string
  description: string
}

export function HeroCard({ eyebrow, title, description }: HeroCardProps) {
  return (
    <section className="rounded-2xl border border-gold-main/20 border-b-2 border-b-gold-main bg-bg-base p-6 shadow-sm sm:p-8">
      <p className="eyebrow mb-2 text-sm uppercase tracking-[0.14em] text-gold-main">
        {eyebrow}
      </p>
      <h1 className="mb-3 text-blue-accent">{title}</h1>
      <p className="text-reading text-base text-text-main sm:text-lg">{description}</p>
    </section>
  )
}
