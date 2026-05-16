import type { Lesson } from '@/types/doctrine'

export const ester: Lesson = {
  id: 'ester',
  moduleId: 'personajes-escrituras',
  title: 'Ester — Para un Momento Como Este',
  subtitle: 'La reina que arriesgó su vida por su pueblo',
  description: 'Ester era huérfana judía viviendo en el Imperio Persa. Se convirtió en reina. Cuando el genocidio de su pueblo fue decretado, su primo Mardoqueo dijo: "¿Quién sabe si para esta hora has llegado al reino?" Ester entró sin ser llamada al rey. Y salvó a su pueblo.',
  level: 'INTERMEDIO',
  icon: '👸',
  duration: 55,
  order: 62,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Huérfana que Se Convirtió en Reina',
      intro: { romanNumeral: 'I', title: 'Ester 2 — Providencia Encubierta', paragraphs: ['El libro de Dios que no nombra a Dios'] },
      topics: [
        {
          id: 't1',
          title: 'El único libro bíblico sin el nombre de Dios',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'El libro de Ester es notable por lo que no contiene: nunca menciona el nombre de Dios. No hay oración directa, ni profecías, ni milagros obvios. Sin embargo, es uno de los libros más leídos en el canon judío — celebrado en Purim. La providencia divina opera entera y completamente a través de circunstancias naturales: un concurso de belleza, la indignación de un eunuco, una noche de insomnio del rey, el orgullo de Amán. Dios actúa sin anunciarse.' },
            { type: 'doctrine_box', id: 'db1', title: 'Providencia vs. Milagro', body: 'La mayoría de la historia sagrada — y la mayor parte de la vida de los creyentes — no ocurre a través de milagros dramáticos. Ocurre a través de circunstancias que, vistas en retrospectiva, revelan la mano de Dios trabajando silenciosamente. El libro de Ester enseña a reconocer esa providencia: el hecho de que Dios no firme su nombre no significa que no esté presente.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '"¿Y Quién Sabe?"',
      intro: { romanNumeral: 'II', title: 'Ester 4 — La Pregunta de Mardoqueo', paragraphs: ['El versículo más citado del libro'] },
      topics: [
        {
          id: 't2',
          title: 'Para esta hora',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Ester 4:13-14', text: 'Entonces Mardoqueo dijo que respondiesen a Ester: No pienses que escaparás en la casa del rey más que cualquier otro judío. Porque si callas absolutamente en este tiempo, respiro y liberación vendrá de alguna otra parte para los judíos; mas tú y la casa de tu padre pereceréis. ¿Y quién sabe si para esta hora has llegado al reino?' },
            { type: 'paragraph', id: 'p2', text: 'La pregunta de Mardoqueo no es una afirmación — es una pregunta genuina. "¿Y quién sabe?" No hay certeza revelada. Solo la posibilidad: quizás tu posición única, en este momento único, para este problema único, no es accidental. Esta es la teología de la vocación providencial: no todos los llamamientos se anuncian con ángeles. Algunos llegan como circunstancias que preguntan en voz baja: ¿para qué estás aquí?' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Iré al Rey — Aunque Muera',
      intro: { romanNumeral: 'III', title: 'Ester 4:16 — La Decisión', paragraphs: ['El costo de la obediencia providencial'] },
      topics: [
        {
          id: 't3',
          title: 'Valor sin garantías',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Ester 4:16', text: 'Ve y reúne a todos los judíos que se hallan en Susa, y ayunad por mí, y no comáis ni bebáis en tres días, noche y día; yo también con mis doncellas ayunaré igualmente, y entonces entraré a ver al rey, aunque no sea conforme a la ley; y si perezco, que perezca.' },
            { type: 'paragraph', id: 'p3', text: 'La ley persa era clara: quien se acercara al rey sin ser convocado moría, a menos que el rey extendiera su cetro de oro. Ester no tenía garantías. La respuesta de Ester es una de las más valientes del canon: "si perezco, que perezca." No hay bravuconería — hay resolución sobria. Pide ayuno colectivo (la forma más cercana a oración que el libro narra), y actúa.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Caída de Amán y la Salvación del Pueblo',
      intro: { romanNumeral: 'IV', title: 'Ester 7-9 — La Inversión', paragraphs: ['El que construyó la horca murió en ella'] },
      topics: [
        {
          id: 't4',
          title: 'La inversión providencial',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Amán construyó una horca de cincuenta codos para colgar a Mardoqueo. El rey, que había pasado una noche insomne leyendo los anales del reino, había descubierto que Mardoqueo le había salvado la vida en un complot y nunca había sido recompensado. Cuando Amán llegó al palacio a pedir permiso para ejecutar a Mardoqueo, el rey preguntó qué debería hacerse con un hombre a quien el rey quería honrar. Amán pensó que hablaba de él mismo. La providencia había trabajado silenciosamente toda la noche.' },
            { type: 'reflection', id: 'r1', prompt: '¿Hay un "¿quién sabe si para esta hora?" en tu vida ahora — una posición, relación o conjunto de habilidades que quizás no son accidentales en relación con una necesidad que conoces? ¿Qué te retiene de entrar "aunque perezca"?' },
          ],
        },
      ],
    },
  ],
}
