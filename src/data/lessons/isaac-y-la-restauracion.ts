import type { Lesson } from '@/types/doctrine'

export const isaacYLaRestauracion: Lesson = {
  id: 'isaac-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Isaac y la Restauración',
  subtitle: 'El Dios de Abraham, Isaac y Jacob',
  description: 'Cuando Dios se identificó a Moisés como \'el Dios de Abraham, de Isaac y de Jacob\' — y cuando José Smith recibió la misma identificación en DyC 136:21 — Isaac está en esa lista. Su nombre en la Divinidad no es decorativo.',
  level: 'INTERMEDIO',
  icon: '🌅',
  duration: 15,
  order: 3314,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaac',
  studySections: [
    {
      id: 's5',
      title: 'El Nombre que Dios Eligió',
      intro: { romanNumeral: 'V', heading: 'El Nombre que Dios Eligió', subheading: 'Por qué Isaac está en la trinidad de los patriarcas' },
      topics: [
        {
          id: 't5',
          title: 'Isaac en la identidad divina',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'La frase "el Dios de Abraham, de Isaac y de Jacob" aparece más de 20 veces en la Biblia y es la manera en que Dios mismo elige identificarse. Isaac, el más silencioso de los tres, comparte esa identidad con Dios. La Restauración preserva esta identificación: DyC 136:21, la Perla de Gran Precio, Facsímile 1 de Abraham — todos continúan conectando la divinidad a los tres patriarcas.' },
            { type: 'highlight_verse', id: 'v1', reference: 'Éxodo 3:6', text: 'Yo soy el Dios de tu padre, el Dios de Abraham, el Dios de Isaac, y el Dios de Jacob. Entonces Moisés cubrió su rostro, porque tuvo miedo de mirar a Dios.' },
            { type: 'doctrine_box', id: 'db1', title: 'El Tipo de Cristo en el Sacrificio de Isaac', content: 'Hebreos 11:17-19 llama explícitamente a la fe de Abraham al ofrecer a Isaac una fe en la resurrección — "considerando que Dios era poderoso para levantar aun de entre los muertos, de donde también, en sentido figurado, le volvió a recibir." La Akedá (atadura de Isaac) es el tipo más claro de la Expiación en el Antiguo Testamento: un padre ofreciendo a su hijo en un monte específico (Moriah = área de Jerusalén), el hijo cargando la leña, la liberación en el último momento, y el carnero atrapado por los cuernos en un matorral (corona de espinas). La Restauración afirma esta tipología.' },
            { type: 'reflection', id: 'r1', prompt: '¿Hay algo en tu vida que Dios te ha pedido que \'ofrezcas\' — algo que amas profundamente — y que todavía no has puesto sobre el altar? ¿Qué te detiene de dar ese paso?' },
          ],
        },
      ],
    },
  ],
}
