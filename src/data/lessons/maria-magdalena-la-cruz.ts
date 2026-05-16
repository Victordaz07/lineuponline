import type { Lesson } from '@/types/doctrine'

export const mariaMagdalenaLaCruz: Lesson = {
  id: 'maria-magdalena-la-cruz',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-magdalena',
  title: 'La Cruz',
  subtitle: 'El testimonio que los cuatro Evangelios coinciden en preservar',
  description:
    'Los cuatro Evangelios registran listas distintas de mujeres en la crucifixión. En todas las versiones, María Magdalena está presente. Su presencia en el momento más oscuro de la historia del mundo es el dato más sólidamente atestiguado de su vida.',
  level: 'AVANZADO',
  icon: '✝️',
  duration: 30,
  order: 5312,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Las Cuatro Listas de las Mujeres',
      intro: {
        romanNumeral: 'I',
        title: 'Cuatro Evangelios, Cuatro Listas, Una Constante',
        paragraphs: [
          'Cada evangelista nombra mujeres distintas en la crucifixión. Tienen diferentes nombres, diferente orden, diferente énfasis. Pero María Magdalena aparece en todas. Su presencia en ese momento es el dato más atestiguado de múltiple fuente independiente en los relatos de la pasión.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Las cuatro versiones comparadas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los cuatro relatos de las mujeres en la crucifixión presentan variaciones significativas: Mateo 27:56 menciona a "María Magdalena, y María la madre de Jacobo y de José, y la madre de los hijos de Zebedeo." Marcos 15:40 da "María Magdalena, María la madre de Jacobo el menor y de José, y Salomé." Lucas 23:49 no da nombres en ese momento — solo "las mujeres que le habían seguido desde Galilea." Juan 19:25 tiene la lista más diferente: "su madre, y la hermana de su madre, María mujer de Cleofas, y María Magdalena."',
            },
            {
              type: 'compare_grid',
              title: 'María Magdalena en los cuatro relatos de la crucifixión',
              left: {
                title: 'Coincidencia entre los cuatro',
                items: [
                  'María Magdalena — presente en Mateo, Marcos, Lucas (implícita) y Juan',
                  'Presencia junto al sepulcro — en Mateo y Marcos',
                  'Primera al sepulcro el domingo — en los cuatro relatos',
                  'La constante de todos los relatos de pasión y resurrección',
                ],
              },
              right: {
                title: 'Variaciones entre los relatos',
                items: [
                  'Los demás nombres de mujeres varían entre evangelistas',
                  'Juan menciona a la madre de Jesús (ausente en Mateo y Marcos)',
                  'Lucas da nombres después, en el relato del sepulcro',
                  'Las variaciones confirman independencia de las fuentes',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Las variaciones como argumento de autenticidad',
              body: 'Si los cuatro Evangelios fueran copia uno del otro (o de una sola fuente), tendrían listas idénticas de mujeres. Las diferencias — que han desconcertado a algunos lectores — son en realidad la firma de fuentes independientes que reportan el mismo evento desde distintas perspectivas. En el mundo del análisis histórico, la concordia en los hechos centrales y la discordia en los detalles periféricos es la marca del testimonio múltiple auténtico.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Significado de Quedarse',
      intro: {
        romanNumeral: 'II',
        title: 'Lo que Costó Estar al Pie de la Cruz',
        paragraphs: [
          'La crucifixión de Jesús no fue un evento que los testigos pudieran observar desde la seguridad. Estar al pie de la cruz de alguien condenado por sedición era arriesgado. Las mujeres sabían eso y se quedaron de todas formas.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El riesgo de la presencia',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 19:25',
              text: 'Pero estaban junto a la cruz de Jesús su madre, y la hermana de su madre, María mujer de Cleofas, y María Magdalena.',
            },
            {
              type: 'paragraph',
              text: 'Juan 19:25 usa la preposición "junto a" (para) — estaban físicamente al pie de la cruz, no mirando de lejos. Marcos 15:40 usa "mirando de lejos" (apo makrothen) para describir a otras mujeres — quizás un grupo más numeroso a distancia. Pero el texto de Juan pone a cuatro personas, incluida María Magdalena, directamente bajo la cruz. Esto no es distancia segura. Es presencia deliberada en el lugar más peligroso.',
            },
            {
              type: 'deep_dive',
              title: 'El contexto político de la crucifixión',
              paragraphs: [
                'Jesús fue ejecutado bajo el cargo de pretender ser "Rey de los Judíos" — una acusación política de sedición contra Roma. Cualquier persona asociada con el condenado era potencialmente sospechosa. Los discípulos varones huyeron precisamente por este riesgo — Pedro fue reconocido en el patio del sumo sacerdote como galileo asociado con Jesús.',
                'Las mujeres que permanecieron al pie de la cruz asumieron un riesgo real de ser identificadas como seguidoras del que Roma había ejecutado como subversivo. Su presencia no era el acto pasivo de contemplar desde la seguridad — era un acto de fidelidad con consecuencias posibles.',
                'El hecho de que ninguna de ellas fuera arrestada puede deberse a que Roma no consideraba a las mujeres como amenaza política real — una condescendencia que paradójicamente les permitió estar donde los hombres no podían estar sin riesgo inmediato.',
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'La vigilia junto al sepulcro',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Marcos 15:47',
              text: 'Y María Magdalena y María madre de José miraban dónde le ponían.',
            },
            {
              type: 'paragraph',
              text: 'Después de la muerte, mientras los discípulos estaban escondidos, María Magdalena y otra María observaron activamente dónde fue sepultado el cuerpo. Este dato es crucial para la narrativa de la resurrección: ellas saben exactamente adónde ir el domingo por la mañana. No tuvieron que preguntar ni buscar — habían memorizado el lugar. La fidelidad hasta el final incluía el acto práctico de saber dónde quedaba la tumba.',
            },
            {
              type: 'reflection',
              prompt: '¿Has permanecido presente en situaciones donde era más cómodo o seguro alejarte? ¿Qué encontraste en esa fidelidad a la presencia cuando fue costosa?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Contraste con los Doce',
      intro: {
        romanNumeral: 'III',
        title: 'La Cobardía de los Hombres y la Valentía de las Mujeres',
        paragraphs: [
          'Los Evangelios son honestos sobre la cobardía de los apóstoles. Esa honestidad hace el testimonio de las mujeres más creíble, no menos.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El contraste que los evangelistas preservaron',
          blocks: [
            {
              type: 'paragraph',
              text: 'La fuga de los discípulos en Getsemaní (Marcos 14:50: "entonces todos los discípulos, dejándole, huyeron") y la negación de Pedro son datos que los primeros cristianos tenían todas las razones teológicas y prácticas para omitir o suavizar. El hecho de que los cuatro Evangelios los preserven — junto con la presencia contrastante de las mujeres — es una señal de compromiso con la verdad histórica por encima de la coherencia propagandística.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Getsemaní',
                  text: 'Jesús arrestado. "Todos los discípulos, dejándole, huyeron." (Marcos 14:50)',
                  ref: 'Marcos 14:50',
                  color: 'red',
                },
                {
                  label: 'Patio del sumo sacerdote',
                  text: 'Pedro niega a Jesús tres veces. Sale y llora amargamente.',
                  ref: 'Lucas 22:62',
                  color: 'red',
                },
                {
                  label: 'La crucifixión',
                  text: 'Las mujeres permanecen al pie de la cruz. Solo Juan entre los doce está presente.',
                  ref: 'Juan 19:25-26',
                  color: 'gold',
                },
                {
                  label: 'El sepulcro',
                  text: 'Las mujeres observan dónde es puesto el cuerpo. Los apóstoles están escondidos.',
                  ref: 'Marcos 15:47',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'central_quote',
              text: 'Si los autores del Evangelio hubieran querido fabricar una historia favorable, habrían puesto a los apóstoles bajo la cruz y a las mujeres huyendo. Lo que encontramos es exactamente al revés.',
              attribution: 'N. T. Wright, The Resurrection of the Son of God',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Ser Testigo del Momento más Oscuro',
      intro: {
        romanNumeral: 'IV',
        title: 'Lo que Significa Permanecer cuando No Hay Esperanza',
        paragraphs: [
          'Las mujeres en la crucifixión no tenían la promesa de la resurrección para sostenerlas. Jesús había predicho su resurrección, pero los discípulos no lo entendieron. Las mujeres estaban bajo una cruz sin esperanza evidente.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Fidelidad sin recompensa visible',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando María Magdalena y las demás mujeres permanecieron bajo la cruz, no lo hacían esperando una resurrección el domingo. Marcos 16:1-3 muestra que la mañana del primer día de la semana llevaban especias para ungir el cuerpo — el gesto final del duelo, no la preparación para un resucitado. Fueron fieles cuando no había recompensa visible. Se quedaron bajo la cruz porque amaban a Jesús, no porque esperaran algo a cambio.',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón del discipulado en el momento de crisis',
              body: 'La teología de la Restauración honra el discipulado fiel en momentos de oscuridad. DyC 121:7-8 — "la adversidad y las aflicciones de toda clase" como parte del camino del discipulado — encuentra en la experiencia de las mujeres bajo la cruz un ejemplo textual del Nuevo Testamento. La fidelidad que no depende de las circunstancias es la fidelidad que vale. María Magdalena bajo la cruz lo ejemplifica más claramente que cualquier otro personaje de los Evangelios.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Has permanecido fiel a algo importante en un momento en que no veías recompensa ni esperanza visible?' },
                { id: 'np2', question: '¿Por qué crees que los cuatro evangelistas preservaron el testimonio de las mujeres incluso cuando el testimonio femenino no era aceptado en los tribunales de la época?' },
                { id: 'np3', question: '¿Qué dice sobre el carácter de Cristo el hecho de que eligió aparecer primero a alguien que estuvo presente en su hora más oscura?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
