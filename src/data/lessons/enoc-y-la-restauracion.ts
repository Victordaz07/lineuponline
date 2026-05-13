import type { Lesson } from '@/types/doctrine'

export const enocYLaRestauracion: Lesson = {
  id: 'enoc-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  title: 'Enoc y la Restauración',
  subtitle: 'Moisés 6-7 — revelado solo a través de José Smith',
  description: 'El texto de Moisés 6-7, que contiene las revelaciones más profundas sobre Enoc, no existe en ninguna Biblia. Fue revelado exclusivamente a José Smith. Su presencia en la Perla de Gran Precio es evidencia directa de revelación genuina.',
  level: 'AVANZADO',
  icon: '🌅',
  duration: 15,
  order: 3014,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'enoc',
  studySections: [
    {
      id: 's5',
      title: 'Solo la Restauración Tiene Este Texto',
      intro: { romanNumeral: 'V', title: 'Solo la Restauración Tiene Este Texto', paragraphs: ['Por qué Moisés 6-7 importa más de lo que parece'] },
      topics: [
        {
          id: 't5',
          title: 'El texto que solo José Smith recibió',
          blocks: [
            { type: 'paragraph', text: 'Moisés 6-7 no se encuentra en la Biblia hebrea, en los Apócrifos conocidos en 1830, ni en fuentes disponibles a José Smith. El Libro de Enoc etíope existía pero no fue traducido al inglés hasta 1821, y José Smith no tenía acceso a él. El texto que José recibió sobre Enoc (incluyendo que Dios llora, la ciudad de Sión, y la promesa de regreso) es sustancialmente diferente y más profundo que cualquier fuente disponible.' },
            { type: 'highlight_verse', reference: 'Moisés 7:62', text: 'Y la justicia enviaré desde el cielo; y la verdad la enviaré de la tierra para dar testimonio de mi Unigénito; su resurrección de entre los muertos; sí, y también la resurrección de todos los hombres; y la justicia y la verdad barreré la tierra como con un diluvio, para recoger a mis elegidos de los cuatro ángulos de la tierra.' },
            { type: 'doctrine_box', title: 'El Proyecto de Enoc es el Proyecto de la Iglesia', body: 'Las tres marcas de Sión — un solo corazón, justicia, sin pobres — son los objetivos explícitos de la Iglesia restaurada. Las ofrendas de ayuno abordan la pobreza. Los convenios del templo forjan la unidad de corazón. La consagración es el principio económico de Sión. El proyecto que Enoc comenzó hace milenios es el mismo que la Iglesia de Jesucristo de los Santos de los Últimos Días busca completar en la dispensación final.' },
            { type: 'reflection', prompt: '¿Qué tan cerca está tu barrio o rama de los tres criterios de Sión de Enoc: un corazón, justicia, sin pobres? ¿Cuál es el más difícil de alcanzar y por qué?' },
          ],
        },
      ],
    },
  ],
}
