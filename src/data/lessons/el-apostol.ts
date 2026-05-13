import type { Lesson } from '@/types/doctrine'

export const elApostol: Lesson = {
  id: 'el-apostol',
  moduleId: 'sacerdocio',
  title: 'El Apóstol',
  subtitle: 'Testigo especial del nombre de Cristo en todo el mundo',
  description:
    'El Apóstol no es simplemente un líder senior — es el oficio más alto del Sacerdocio de Melquisedec, con autoridad para ser testigo especial del nombre de Cristo. El Quórum de los Doce sostiene las llaves del reino en reserva para cuando sean necesarias.',
  level: 'AVANZADO',
  icon: '🕊️',
  duration: 60,
  order: 13,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: '¿Qué hace único al Apóstol?',
      intro: {
        romanNumeral: 'I',
        title: 'Testigo Especial del Nombre',
        paragraphs: ['No solo del Resucitado — del Nombre de Cristo'],
      },
      topics: [
        {
          id: 't1',
          title: 'La definición que lo cambia todo',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v1',
              reference: 'DyC 107:23',
              text: 'Los deberes del presidente de la oficina del Sumo Sacerdocio, son presidir sobre todo el Sumo Sacerdocio de la iglesia y presidir sobre el concilio de la iglesia; ser como el presidente de los Doce Apóstoles — los cuales son testigos especiales del nombre de Cristo en todo el mundo, difiriendo en nada del anterior Sumo Sacerdocio excepto en sus ministerios.',
            },
            {
              type: 'paragraph',
              id: 'p1',
              text: 'La frase "testigo especial del nombre de Cristo en todo el mundo" es deliberada y precisa. No dice testigo de la resurrección — cualquier converso sincero puede testificar de eso. El Apóstol es testigo del NOMBRE de Cristo: de quién es Él en toda su plenitud, de su misión, de su expiación, de su identidad divina como Jehová encarnado.',
            },
            {
              type: 'leader_quote',
              id: 'lq1',
              author: 'Élder Dallin H. Oaks',
              source: 'Conferencia General, abril 1995',
              text: 'Algunos de nosotros tenemos experiencias especiales que nos capacitan para testificar de Él. No siempre las describimos públicamente. Pero el testimonio que llevamos no depende de que hayamos tenido una visión o experiencia sobrenatural. Es un conocimiento espiritual, dado por el Espíritu Santo, que nos permite declarar con autoridad: Jesús es el Cristo.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El Apóstol vs. el Élder',
          blocks: [
            {
              type: 'paragraph',
              id: 'p2',
              text: 'Todo Apóstol es Sumo Sacerdote, y todo Sumo Sacerdote es Élder — pero no a la inversa. El apostolado no es simplemente un grado mayor de autoridad del sacerdocio; es un llamamiento distinto que confiere autoridad especial para ser testigo de Cristo en alcance mundial y para sostener las llaves del reino.',
            },
            {
              type: 'compare_grid',
              id: 'cg1',
              title: 'Élder vs. Apóstol',
              rows: [
                {
                  label: 'Alcance',
                  a: 'Misión local o de estaca',
                  b: 'Todo el mundo (DyC 107:33)',
                },
                {
                  label: 'Llaves',
                  a: 'Ninguna propia (se delegan)',
                  b: 'Todas las llaves en reserva',
                },
                {
                  label: 'Testimonio',
                  a: 'Personal y congregacional',
                  b: 'Testigo especial del Nombre',
                },
                {
                  label: 'Permanencia',
                  a: 'Llamamiento temporal',
                  b: 'Llamamiento para toda la vida',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Restauración del Apostolado',
      intro: {
        romanNumeral: 'II',
        title: 'Pedro, Santiago y Juan',
        paragraphs: ['Mayo de 1829'],
      },
      topics: [
        {
          id: 't3',
          title: 'La restauración del Sacerdocio de Melquisedec',
          blocks: [
            {
              type: 'paragraph',
              id: 'p3',
              text: 'En mayo de 1829, Pedro, Santiago y Juan — tres de los Apóstoles del Señor — aparecieron a José Smith y Oliver Cowdery y les confirieron el Sacerdocio de Melquisedec y las llaves del apostolado. La conferencia general del 14 de febrero de 1835 organizó formalmente el Quórum de los Doce Apóstoles en esta dispensación.',
            },
            {
              type: 'paragraph',
              id: 'p4',
              text: 'Fue Oliver Cowdery, David Whitmer y Martin Harris — los Tres Testigos del Libro de Mormón — quienes, por instrucción de José Smith, escogieron a los primeros Doce de esta dispensación. La selección no fue popular: algunos de los elegidos estaban en deuda, otros tenían conflictos. Pero el Señor los eligió de todas formas, como eligió pescadores imperfectos en Palestina.',
            },
            {
              type: 'highlight_verse',
              id: 'v2',
              reference: 'DyC 18:9',
              text: 'Y ahora os hablo a vosotros, los Tres Testigos: He aquí, he revelado a vosotros que debéis escoger a mi iglesia a doce hombres para que sean llamados con el mismo nombre que mis discípulos de la antigüedad.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Pablo: un caso especial',
          blocks: [
            {
              type: 'paragraph',
              id: 'p5',
              text: 'Pablo se llamó a sí mismo Apóstol (Gálatas 1:1), pero no era uno de los Doce originales. Su apostolado vino de una aparición directa del Cristo resucitado en el camino a Damasco (Hechos 9). Esto establece el precedente de que el apostolado puede conferirse por revelación directa, no solo por la sucesión de los Doce — aunque ese es el patrón normal.',
            },
            {
              type: 'key_points',
              id: 'kp1',
              title: 'Paralelos Pablo — Apóstoles Modernos',
              points: [
                'Llamados por revelación, no por candidatura propia',
                'Ordenados por imposición de manos de autoridad apropiada',
                'Testigos especiales del nombre de Cristo',
                'Su llamamiento dura hasta la muerte — no hay jubilación',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Llaves del Reino',
      intro: {
        romanNumeral: 'III',
        title: 'Todas las Llaves, No Todas Activas',
        paragraphs: ['La distinción que pocos comprenden'],
      },
      topics: [
        {
          id: 't5',
          title: 'Los Doce sostienen todas las llaves en reserva',
          blocks: [
            {
              type: 'paragraph',
              id: 'p6',
              text: 'Cada miembro del Quórum de los Doce recibe al ser ordenado TODAS las llaves del sacerdocio. Sin embargo, solo las ejerce activamente cuando está autorizado por el Presidente de la Iglesia. Si el Presidente muriera y el resto de la Primera Presidencia se disolviera, el Quórum de los Doce como cuerpo — presidido por su presidente — ejercería de inmediato todas las llaves necesarias para gobernar la Iglesia.',
            },
            {
              type: 'highlight_verse',
              id: 'v3',
              reference: 'DyC 107:33',
              text: 'Los deberes de los Doce Apóstoles son anunciar el evangelio de arrepentimiento y del bautismo, y la remisión de los pecados, a todas las naciones.',
            },
            {
              type: 'doctrine_box',
              id: 'db1',
              title: 'La Sucesión Apostólica en la Restauración',
              body: 'Cuando José Smith murió en 1844, varios hombres reclamaron el liderazgo. El argumento teológico decisivo de Brigham Young fue simple: el Quórum de los Doce, como cuerpo, sostenía todas las llaves del reino. El presidente de ese quórum era el sucesor natural. Este principio se ha seguido desde entonces: el presidente del Quórum de los Doce se convierte en Presidente de la Iglesia.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Apóstol como Tipo de Cristo',
      intro: {
        romanNumeral: 'IV',
        title: 'Enviado como Cristo fue Enviado',
        paragraphs: ['La etimología revela la misión'],
      },
      topics: [
        {
          id: 't6',
          title: 'Apóstol = "El que es enviado"',
          blocks: [
            {
              type: 'paragraph',
              id: 'p7',
              text: 'La palabra griega ἀπόστολος (apostolos) significa literalmente "el que es enviado". En la teología del Cuarto Evangelio, el Padre envió al Hijo (Juan 3:16-17), y el Hijo envía a sus Apóstoles (Juan 20:21): "Como me envió el Padre, así también yo os envío." El Apóstol participa en la misma estructura de misión divina que el propio Cristo.',
            },
            {
              type: 'highlight_verse',
              id: 'v4',
              reference: 'Juan 20:21',
              text: 'Entonces Jesús les dijo otra vez: Paz a vosotros. Como me envió el Padre, así también yo os envío.',
            },
            {
              type: 'paragraph',
              id: 'p8',
              text: 'Cristo es, en ese sentido, el Apóstol supremo — "el Apóstol y Sumo Sacerdote de nuestra profesión" (Hebreos 3:1). El Padre lo envió; los Apóstoles lo representan ante el mundo. Esta cadena de "envíos" es la estructura del ministerio restaurado.',
            },
          ],
        },
        {
          id: 't7',
          title: 'Una vida de testigo',
          blocks: [
            {
              type: 'paragraph',
              id: 'p9',
              text: 'A diferencia de un obispo o un presidente de estaca que sirven por un tiempo definido, el apostolado es un llamamiento de por vida. Un Apóstol no se jubila. Cuando la salud lo permite, viaja, enseña, preside. Cuando la salud ya no lo permite, testifica desde la silla de ruedas. El Élder David B. Haight testificó de Cristo desde su lecho de muerte en la Conferencia General de abril de 2004, pocas semanas antes de fallecer.',
            },
            {
              type: 'reflection',
              id: 'r1',
              prompt: '¿Qué significa para ti que haya hombres vivos que han sido llamados por revelación como testigos especiales del nombre de Cristo? ¿Cómo afecta eso tu relación con el liderazgo de la Iglesia?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Quórum de los Doce',
      intro: {
        romanNumeral: 'V',
        title: 'Igual Autoridad como Quórum',
        paragraphs: ['DyC 107:23-24'],
      },
      topics: [
        {
          id: 't8',
          title: 'El Quórum de los Doce y la Primera Presidencia',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v5',
              reference: 'DyC 107:24',
              text: 'Y forman un quórum, igual en autoridad y poder a los tres presidentes anteriormente mencionados.',
            },
            {
              type: 'paragraph',
              id: 'p10',
              text: 'Esta revelación es radical: el Quórum de los Doce, como quórum unido, tiene la misma autoridad que la Primera Presidencia. En la práctica esto significa que cuando no hay Primera Presidencia (porque el Presidente ha fallecido y ella se ha disuelto), el Quórum de los Doce tiene autoridad plena para gobernar la Iglesia hasta que se organice una nueva Primera Presidencia.',
            },
            {
              type: 'paragraph',
              id: 'p11',
              text: 'El testimonio colectivo de los Doce también tiene un propósito doctrinal: doce testigos independientes, de diferentes países y culturas, todos convergiendo en el mismo testimonio de Cristo. La diversidad de sus voces refuerza la universalidad del mensaje.',
            },
          ],
        },
      ],
    },
  ],
}
