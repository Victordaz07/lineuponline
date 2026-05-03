import type { Lesson } from '@/types/doctrine'

export const misionYTestimonio: Lesson = {
  id: 'mision-y-testimonio',
  moduleId: 'lideres-misioneros',
  title: 'Misión y Testimonio',
  subtitle: 'Proclamar con claridad y amor',
  author: 'Fuentes principales: DyC 4, 18, 100; Moroni 10:4-5; 2 Nefi 33',
  description:
    'El mandamiento de compartir el evangelio no es opcional. DyC 18:15-16 establece el valor de una sola alma. Moroni 10:4-5 da la metodología del testimonio. DyC 100 y 2 Nefi 33 explican el papel del Espíritu en la enseñanza efectiva.',
  level: 'INTERMEDIO',
  icon: '📣',
  duration: 60,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Mandamiento y el Valor de una Alma',
      intro: {
        romanNumeral: 'I',
        title: 'El Mandamiento y el Valor de una Alma',
        paragraphs: [
          'Hay una pregunta que el Señor hace implícitamente en DyC 18: ¿sabes cuánto vale una sola alma? No una congregación. No un número estadístico de conversiones. Una sola alma. La respuesta que da establece el fundamento de toda misión y todo testimonio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: '¿Cuánto Vale una Sola Alma?',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y si aconteciere que trabajareis todos vuestros días y le trajeres, si no más que una sola alma a mí, ¡cuán grande será vuestro gozo con ella en el reino de mi Padre! Y ahora bien, si vuestro gozo será grande con una sola alma que hayáis traído a mí al reino de mi Padre, ¡cuánto mayor será vuestro gozo si trajeres muchas almas a mí!',
              reference: 'Doctrina y Convenios 18:15–16',
            },
            {
              type: 'paragraph',
              text: 'El Señor compara el valor de una sola alma con el valor de todo el mundo (DyC 18:10). No es hipérbole poética — es doctrina. Cada persona que camina por la calle, que vive en tu edificio, que trabaja en tu oficina, es un ser eterno con un potencial infinito. Compartir el evangelio no es un programa de reclutamiento. Es el acto de decirle a alguien que hay una verdad que podría transformar completamente su eternidad.',
            },
            {
              type: 'highlight_verse',
              text: 'Recuerda el valor de las almas es grande a los ojos de Dios; porque he aquí, el Señor, tu Redentor, sufrió la muerte en la carne; por tanto sufrió el dolor de todos los hombres, para que todos los hombres se arrepintieran y viniesen a él.',
              reference: 'Doctrina y Convenios 18:10–11',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el evangelio es para compartir',
              body: 'DyC 4:1 dice: "He aquí, se presenta una obra maravillosa e imponente." El evangelio restaurado no fue dado para ser guardado en privado — fue restaurado para llenarse la tierra. Cada bautizado lleva una parte de esa responsabilidad. No como obligación ansiosa, sino como oportunidad: si has encontrado algo que transformó tu vida, que dio sentido a tu sufrimiento y esperanza a tu futuro, ¿cómo podrías no compartirlo?',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, oh vosotros que os embarcáis en el servicio de Dios, ved que le sirváis con todo vuestro corazón, poder, mente y fuerza, a fin de que estéis al final del día sin culpa ante Dios.',
              reference: 'Doctrina y Convenios 4:2',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Promesa del Testimonio',
      intro: {
        romanNumeral: 'II',
        title: 'La Promesa del Testimonio',
        paragraphs: [
          'El fundamento de toda misión es el testimonio. Pero el testimonio no es una experiencia mística reservada para los espiritualmente avanzados — es una promesa accesible a cualquiera que la busque bajo las condiciones correctas. Moroni lo establece con una claridad que no deja excusas.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Metodología de Moroni',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando recibiereis estas cosas, os exhorto a que preguntéis a Dios, el Padre Eterno, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con sincero corazón, con intención real, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
              reference: 'Moroni 10:4–5',
            },
            {
              type: 'key_points',
              title: 'Las tres condiciones de Moroni 10:4',
              points: [
                'Sincero corazón — genuina apertura a la respuesta, sin haber decidido ya que será no',
                'Intención real — disponibilidad de actuar si la respuesta es afirmativa',
                'Fe en Cristo — la promesa está anclada en Él, no en la capacidad del que pregunta',
              ],
            },
            {
              type: 'paragraph',
              text: 'La promesa de Moroni 10:5 es universal: "por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas." No solo del Libro de Mormón. No solo de la Iglesia. De todas las cosas. El Espíritu Santo es el mecanismo de conocimiento espiritual. El testimonio no es una convicción intelectual — es una manifestación del Espíritu a la mente y el corazón (DyC 8:2).',
            },
            {
              type: 'highlight_verse',
              text: 'Abrid vuestras bocas, y serán llenadas, y diréis: Arrepentíos, arrepentíos y preparad el camino del Señor, y haced rectas sus sendas; he aquí, el reino de los cielos está cercano.',
              reference: 'Doctrina y Convenios 33:8–9',
            },
            {
              type: 'leader_quote',
              quote: 'Un testimonio no se gana con debate, ni se protege con silencio. Se gana arrodillándose y pidiendo, y se fortalece compartiéndolo. Cada vez que alguien comparte su testimonio — sin importar cuán simple sea — el Espíritu lo confirma de nuevo. El testimonio que nunca se comparte es un testimonio que se marchita.',
              name: 'Jeffrey R. Holland',
              role: '"Missionary Work and the Atonement", Ensign, marzo 2001 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Enseñar con el Espíritu',
      intro: {
        romanNumeral: 'III',
        title: 'Cómo Enseñar con el Espíritu',
        paragraphs: [
          'El evangelio se enseña de dos maneras: con el Espíritu, y sin él. La diferencia no está en cuánto sabe el maestro ni en cuán elocuente es — está en si el corazón del maestro está sintonizado con el Espíritu y si el mensaje llega al corazón del oyente. DyC 42 y 2 Nefi 33 lo articulan con claridad.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Espíritu como Maestro Real',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y el Espíritu se os dará mediante la oración de la fe; y si no recibís el Espíritu, no enseñaréis.',
              reference: 'Doctrina y Convenios 42:14',
            },
            {
              type: 'highlight_verse',
              text: 'Y yo, Nefi, no pude escribir todas las cosas que enseñé entre mi pueblo; ni soy poderoso en la escritura como en el hablar; porque cuando un hombre habla por el poder del Espíritu Santo, el poder del Espíritu Santo lleva las palabras de Cristo al corazón de los hijos de los hombres.',
              reference: '2 Nefi 33:1',
            },
            {
              type: 'paragraph',
              text: 'La distinción de Nefi es crucial: las palabras no van solo a los oídos — el Espíritu las lleva al corazón. Ningún maestro puede hacer eso por sí solo. El papel del misionero, del maestro de Evangelio, del padre que enseña a sus hijos, es prepararse y vivir de manera que el Espíritu pueda usar sus palabras como canal. La habilidad retórica puede impresionar; solo el Espíritu puede convertir.',
            },
            {
              type: 'highlight_verse',
              text: 'Abrid vuestras bocas en todo tiempo y yo os protegeré; y en vosotros mora mi Espíritu. He aquí, esta es mi obra; por lo cual enseñad las cosas que me habéis oído hablar; y testificad de aquellas cosas que sabéis y verdaderamente creéis.',
              reference: 'Doctrina y Convenios 80:3',
            },
            {
              type: 'key_points',
              title: 'Cinco prácticas para enseñar con más poder espiritual',
              points: [
                'Orar específicamente antes de cada oportunidad de enseñar — pedir el Espíritu para ti y para quien escucha',
                'Estudiar las Escrituras personalmente, no solo para la lección — el conocimiento vivo irradia diferente que el conocimiento académico',
                'Compartir experiencias personales, no solo doctrina abstracta — el testimonio personal toca diferente que la información',
                'Hacer preguntas en lugar de solo declamar — el Espíritu trabaja mientras la persona reflexiona, no solo mientras escucha',
                'Terminar con una invitación específica — enseñar sin invitar a actuar es incompleto',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Hay una diferencia entre enseñar sobre Cristo y testificar de Cristo. Puedes enseñar sobre alguien que no conoces. Solo puedes testificar de alguien que has encontrado personalmente. El poder del testimonio no viene del volumen de las palabras sino de la realidad de la experiencia. Cuando un misionero habla de Cristo como si lo conociera — porque lo conoce — eso es lo que toca el corazón del investigador.',
              name: 'Elder David A. Bednar',
              role: '"Becoming a Missionary", Conferencia General, octubre 2005 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que compartiste tu testimonio con alguien fuera de la Iglesia? ¿Qué te detiene? ¿Hay alguien en tu vida ahora mismo que podría beneficiarse de conocer lo que tú has encontrado? La promesa de DyC 80:3 es clara: "abrid vuestras bocas... y yo os protegeré." ¿Confías en esa promesa lo suficiente para actuar sobre ella?',
            },
          ],
        },
      ],
    },
  ],
}
