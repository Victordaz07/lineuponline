import type { Lesson } from '@/types/doctrine'

export const elSacerdocio: Lesson = {
  id: 'sacerdocio-autoridad-poder',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Sacerdocio — Autoridad y Poder',
  subtitle: 'Las dos mitades que la mayoría confunde',
  author: 'Fuentes principales: DyC 121, Russell M. Nelson (2018), Alma 13',
  description:
    'El sacerdocio restaurado tiene dos mitades: la autoridad (la llave de actuar en el nombre de Dios) y el poder (la capacidad de hacer que esa autoridad funcione). Millones tienen la primera pero pocos desarrollan la segunda. Esta lección estudia la diferencia y por qué importa eternamente.',
  level: 'AVANZADO',
  icon: '🔑',
  duration: 70,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'preexistencia',
  studySections: [
    {
      id: 's1',
      title: 'Autoridad vs. Poder — La Distinción Crucial',
      intro: {
        romanNumeral: 'I',
        title: 'Autoridad vs. Poder — La Distinción Crucial',
        paragraphs: [
          'En abril de 2018, el presidente Russell M. Nelson hizo una distinción que reorganizó la manera en que la Iglesia entera pensaba sobre el sacerdocio. La autoridad del sacerdocio, dijo, es el permiso de actuar en el nombre de Dios. El poder del sacerdocio es la capacidad real de que esa acción produzca efectos espirituales. Y estas dos cosas — aunque relacionadas — no son lo mismo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Diferencia que Cambia Todo',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Existe una diferencia importante entre la autoridad del sacerdocio y el poder del sacerdocio. La autoridad del sacerdocio se recibe mediante la ordenación. El poder del sacerdocio se obtiene mediante la rectitud personal y la fidelidad a los convenios. Un hombre puede ser ordenado al sacerdocio y tener la autoridad — pero si no vive de manera fiel, su poder en el sacerdocio puede ser muy limitado.',
              name: 'Russell M. Nelson',
              role: '"Spiritual Treasures", Conferencia General, octubre 2019 (trad.)',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Autoridad del Sacerdocio',
                items: [
                  'Se recibe mediante ordenación por imposición de manos',
                  'Conferida por quien tiene la autoridad correspondiente',
                  'Condición: ser digno en el momento de la ordenación',
                  'Puede tenerse sin usarse efectivamente',
                  'Se puede tener y desperdiciar',
                ],
              },
              right: {
                title: 'Poder del Sacerdocio',
                items: [
                  'Se desarrolla a través de la vida recta y los convenios',
                  'Crece con la fe, la obediencia y la comunión con el Espíritu',
                  'Requiere fidelidad continua — no solo en el momento de la ordenación',
                  'Es lo que hace que las ordenanzas tengan efecto real',
                  'Se puede desarrollar ilimitadamente',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Ningún poder ni influencia puede ni debe mantenerse por virtud del sacerdocio, sino solo mediante la persuasión, la paciencia, la mansedumbre y la docilidad, el amor sincero, la bondad y el puro conocimiento, que en gran manera ensanchará tu influencia sin coerción alguna.',
              reference: 'Doctrina y Convenios 121:41–42',
            },
            {
              type: 'paragraph',
              text: 'DyC 121 no está describiendo simplemente buenas maneras de liderazgo. Está describiendo la única forma en que el poder del sacerdocio puede fluir: a través del carácter, no de la posición. Un hombre que intenta usar la autoridad del sacerdocio a través del dominio, la coacción o el miedo — "en el momento que lo intenta, he aquí, su sacerdocio le abandona" (v.37). La autoridad sin el carácter pierde el poder.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Dos Sacerdocios',
      intro: {
        romanNumeral: 'II',
        title: 'Los Dos Sacerdocios',
        paragraphs: [
          'La Iglesia restaurada opera con dos sacerdocios: el Aarónico y el de Melquisedec. No son simplemente dos niveles de una organización religiosa. Son dos tipos fundamentalmente diferentes de autoridad, con propósitos distintos, y cada uno esencial para la operación completa del evangelio.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Sacerdocio Aarónico — El Ministerio Preparatorio',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'El segundo sacerdocio se llama el Sacerdocio Aarónico, porque fue conferido a Aarón y a su simiente en todo su linaje, durante toda su generación. [...] Este sacerdocio comprende las llaves del ministerio de ángeles, y el evangelio preparatorio, que es el evangelio del arrepentimiento y del bautismo, y la remisión de pecados.',
              reference: 'Doctrina y Convenios 107:13–14, 20',
            },
            {
              type: 'paragraph',
              text: 'El Sacerdocio Aarónico no es inferior — es preparatorio. Sus ordenanzas (bautismo, la Santa Cena) son las puertas de entrada al evangelio. Su "llave del ministerio de los ángeles" es única: los que lo poseen tienen el derecho de ser ministrados por ángeles cuando sea necesario para su labor. Juan el Bautista, que lo restauró, era el mayor entre los nacidos de mujer en su dispensación.',
            },
          ],
        },
        {
          id: 't3',
          title: 'El Sacerdocio de Melquisedec — El Mayor',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Antes de que Abrahán naciera, yo soy. [...] El mayor de todos, es la llave de los misterios del reino, así como también la plenitud del conocimiento de Dios. Por tanto, en las ordenanzas de aquel sacerdocio, se manifiesta el poder de la divinidad.',
              reference: 'Doctrina y Convenios 84:19–20',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué hace al Sacerdocio de Melquisedec "el mayor"?',
              body: 'DyC 84:19 dice que en las ordenanzas de este sacerdocio "se manifiesta el poder de la divinidad." Las ordenanzas del templo — el endowment, el sellamiento — solo son posibles a través del Sacerdocio de Melquisedec. El objetivo final de estas ordenanzas es lo que la escritura llama "la plenitud del conocimiento de Dios" — no información sobre Dios, sino conocimiento en el sentido bíblico: relación íntima, coexistencia, divinidad. El sacerdocio de Melquisedec es el vehículo de la exaltación.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque quien es fiel a la obtención de estos dos sacerdocios de que he hablado, y al amplificar sus llamados, está santificado por el Espíritu para la renovación de su cuerpo. Se convierte en el hijo de Moisés y de Aarón, y de la simiente de Abrahán, y de la iglesia y reino y el elegido de Dios.',
              reference: 'Doctrina y Convenios 84:33–34',
            },
            {
              type: 'leader_quote',
              quote: 'El sacerdocio de Melquisedec no fue dado primariamente para administrar la iglesia — fue dado para exaltar a los hombres. Es el mecanismo por el cual los hombres mortales pueden llegar a ser como el Padre. Cada ordenanza del templo es un paso en ese camino. El sacerdocio es la vía de acceso a la divinidad.',
              name: 'Bruce R. McConkie',
              role: '"The Mortal Messiah", vol. 1 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Llaves del Sacerdocio',
      intro: {
        romanNumeral: 'III',
        title: 'Las Llaves del Sacerdocio',
        paragraphs: [
          'Hay una tercera dimensión del sacerdocio que pocas personas entienden bien: las llaves. Un hombre puede tener autoridad del sacerdocio sin tener las llaves para usarla en ciertas funciones. Las llaves son el derecho de presidir y dirigir el uso del sacerdocio dentro de una organización o área geográfica específica.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Qué Son las Llaves y Quién las Tiene',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'Autoridad, poder y llaves — los tres elementos',
              body: 'Autoridad: el permiso de actuar. Poder: la capacidad espiritual de que la acción produzca efectos. Llaves: el derecho de presidir y dirigir cómo y cuándo se usa la autoridad dentro de un área o función específica. Un diácono tiene autoridad de sacerdocio pero no tiene las llaves del obispado. Un obispo tiene las llaves de su barrio pero no las del sistema completo de la Iglesia. Solo el Presidente de la Iglesia tiene todas las llaves del sacerdocio activas sobre toda la tierra.',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, las llaves del reino de Dios son confiadas a los hombres en la tierra, y de allí los elementos y el cuerpo del Señor, aun la iglesia y reino, es la llave mediante la cual el evangelio puede ser sellado en el corazón del hombre sin final.',
              reference: 'Doctrina y Convenios 65:2',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Mayo 1829',
                  text: 'Juan el Bautista restaura las llaves del Sacerdocio Aarónico a José Smith y Oliver Cowdery',
                  ref: 'DyC 13',
                  color: 'gold',
                },
                {
                  label: 'Junio 1829',
                  text: 'Pedro, Santiago y Juan restauran las llaves del Sacerdocio de Melquisedec',
                  ref: 'DyC 27:12',
                  color: 'blue',
                },
                {
                  label: 'Abril 1836',
                  text: 'Moisés, Elías y Elías restauran llaves de congregación de Israel, del evangelio de Abraham, y de sellamientos del templo',
                  ref: 'DyC 110:11-16',
                  color: 'gold',
                },
                {
                  label: 'Hoy',
                  text: 'El Presidente de la Iglesia tiene todas las llaves activas — los Doce tienen todas las llaves pero solo las ejercen cuando el Presidente muere',
                  ref: 'DyC 107:23-24',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu relación con tu obispo, tu presidente de estaca, y el Presidente de la Iglesia cuando entiendes el principio de las llaves? ¿De qué manera práctica puedes desarrollar más poder en el sacerdocio (o alinearte con su poder, si no eres portador) en tu vida diaria?',
            },
          ],
        },
      ],
    },
  ],
}
