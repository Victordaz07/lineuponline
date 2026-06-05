/**
 * Aviso legal doctrinal visible en todas las pantallas de lección.
 * No debe interpretarse como enseñanza oficial ni como posición de ninguna institución religiosa.
 */
export function LessonDisclaimer() {
  return (
    <aside
      aria-label="Aviso sobre el carácter no oficial del contenido"
      className="rounded-2xl border border-sg-gold/20 bg-navy-mid p-4 shadow-sm sm:p-5"
    >
      <div className="flex gap-3">
        <span className="shrink-0 text-lg leading-none opacity-75" aria-hidden="true">
          ℹ️
        </span>
        <div className="min-w-0 space-y-2 font-ui text-sm leading-snug text-parchment/80">
          <p className="font-semibold text-sg-gold-light">
            Este material no es oficial de la Iglesia
          </p>
          <p className="text-parchment/60 [&_strong]:font-semibold [&_strong]:text-parchment/80">
            <strong>Seeker Gospel</strong> es un recurso{' '}
            <strong>independiente</strong>: no está afiliado, respaldado ni constituye publicación oficial de{' '}
            <strong>La Iglesia de Jesucristo de los Santos de los Últimos Días</strong> ni de ningún otro
            organismo religioso. El contenido se ofrece solo como ayuda para{' '}
            <strong>estudiar y analizar</strong> por tu cuenta temas doctrinales y de las escrituras. Para doctrina,
            prácticas y declaraciones conferidas oficialmente debés recurrir a{' '}
            <a
              href="https://www.churchofjesuschrist.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sg-gold-light underline decoration-sg-gold/30 underline-offset-2 hover:decoration-sg-gold"
            >
              ChurchofJesusChrist.org
            </a>{' '}
            y a los materiales publicados por la Iglesia en sus canales autorizados.
          </p>
        </div>
      </div>
    </aside>
  )
}
