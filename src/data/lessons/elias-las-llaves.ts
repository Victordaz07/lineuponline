import type { Lesson } from '@/types/doctrine'

export const eliasLasLlaves: Lesson = {
  id: 'elias-las-llaves',
  moduleId: 'personajes-escrituras',
  title: 'Elías — Las Llaves del Sellamiento',
  subtitle: 'DyC 110, Kirtland 1836, y la distinción entre Elías y "Elias"',
  description: 'DyC 110 registra la aparición de Elías en el Templo de Kirtland el 3 de abril de 1836. Pero antes de entender esa aparición, hay que resolver una de las distinciones más importantes de la doctrina de la Restauración: la diferencia entre "Elías" como profeta histórico y "Elias" como título de oficio.',
  level: 'AVANZADO',
  icon: '🔑',
  duration: 35,
  order: 4113,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'elias',
  studySections: [
    {
      id: 's1',
      title: 'Elías vs. "Elias" — la distinción crucial',
      intro: {
        romanNumeral: 'I',
        title: 'Dos Nombres, Una Confusión, Una Doctrina',
        paragraphs: [
          'En inglés (y en el griego bíblico) "Elijah" y "Elias" son el mismo nombre. En la doctrina de la Restauración, son dos cosas distintas.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El "Elias" del Nuevo Testamento vs. el Elías histórico',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el Nuevo Testamento griego, el nombre hebreo "Eliyahu" (Elías) se transliteró como "Elias." Esto crea confusión porque en DyC 27:6-7, el Señor menciona a "Elias" que restauró el evangelio de Abraham y a "Elijah" (Elías) que sellará las dispensaciones. Son dos individuos distintos. El "Elias" que restauró el evangelio de Abraham podría ser Noé/Gabriel, o posiblemente Abraham mismo — José Smith no lo identificó definitivamente.',
            },
            {
              type: 'doctrine_box',
              title: '"Elias" como título de oficio',
              body: 'En DyC 27, 110, y 138, la Restauración usa "Elias" como título que se aplica a cualquiera que actúe en el rol de precursor o preparador — el que prepara el camino para algo mayor. Juan el Bautista fue un "Elias" en este sentido (Mateo 11:14 — "él mismo es Elías"). José Smith fue "Elias" en tanto preparó el camino de la segunda venida. El Elías histórico del Carmelo, en cambio, es siempre identificado en DyC como el que tiene las llaves específicas del sellamiento.',
            },
            {
              type: 'compare_grid',
              title: 'Elías el Profeta vs. "Elias" el Precursor',
              left: {
                title: 'Elías — el profeta histórico',
                points: [
                  'El Elías del Monte Carmelo (1 Reyes 17-21)',
                  'Trasladado sin morir (2 Reyes 2)',
                  'Portador de las llaves del sellamiento',
                  'Apareció en Kirtland el 3 de abril de 1836 (DyC 110)',
                  'Su misión: volver el corazón de los padres a los hijos',
                ],
              },
              right: {
                title: '"Elias" — el título de precursor',
                points: [
                  'Juan el Bautista fue un "Elias" (Mateo 11:14)',
                  'DyC 27:6 menciona a un "Elias" que restauró el evangelio de Abraham',
                  'Este "Elias" posiblemente es Noé/Gabriel según enseñanzas de José Smith',
                  'El "espíritu de Elías" es la disposición de preparar el camino para algo mayor',
                  'Cualquier precursor actúa en el espíritu de Elías',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 110 — Kirtland, 3 de abril de 1836',
      intro: {
        romanNumeral: 'II',
        title: 'El Día más Importante en la Historia del Templo Moderno',
        paragraphs: [
          'El 3 de abril de 1836 —Domingo de Resurrección— fue la mayor conferencia de autoridad desde la Transfiguración.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Las cuatro visiones de Kirtland',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 110:1-4',
              text: 'El velo fue quitado de nuestras mentes, y los ojos del entendimiento fueron abiertos. Vimos al Señor de pie sobre el parapeto del púlpito, delante de nosotros; y bajo sus pies había un pavimento de oro puro, de color como el ámbar. Sus ojos eran como llamas de fuego; el cabello de su cabeza era blanco como la nieve pura; su semblante brillaba más que el sol a pleno mediodía.',
            },
            {
              type: 'paragraph',
              text: 'Ese mismo día del 3 de abril de 1836, José Smith y Oliver Cowdery se retiraron detrás del velo del púlpito del templo mientras el resto de la congregación cantaba. Tuvieron cuatro visiones sucesivas: el Señor Jesucristo, Moisés, Elias (el precursor), y Elías (el profeta del Carmelo). Cada aparición confirió llaves específicas. La sesión completa duró menos de una hora — pero lo que se transfirió esa tarde sigue siendo el fundamento del trabajo de salvación en todos los templos del mundo.',
            },
            {
              type: 'timeline',
              items: [
                { label: '3 abr 1836', text: 'El Señor Jesucristo aparece — acepta el templo, promete protección a la Iglesia', color: 'gold' },
                { label: '3 abr 1836', text: 'Moisés aparece — confiere las llaves de la congregación de Israel desde los cuatro rincones', color: 'blue' },
                { label: '3 abr 1836', text: '"Elias" aparece — confiere las llaves del evangelio de Abraham (convenios del sacerdocio)', color: 'green' },
                { label: '3 abr 1836', text: 'Elías aparece — confiere "las llaves de la dispensación" y el poder del sellamiento (Malaquías 4)', color: 'red' },
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'La aparición de Elías — el texto completo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 110:13-16',
              text: 'Después de este, Elías apareció y dijo: He aquí, se ha cumplido el tiempo, según lo que fue dicho por boca de Malaquías, el cual testificó que él sería enviado antes que llegue el día grande y terrible del Señor... para volver el corazón de los padres a los hijos y el corazón de los hijos a los padres, no sea que toda la tierra sea herida con maldición. Por tanto, las llaves de esta dispensación son comprometidas en vuestras manos; y con esto también puede conocer que el día grande y terrible del Señor está cerca, sí, a las puertas.',
            },
            {
              type: 'paragraph',
              text: 'Cuatro elementos de esta aparición merecen análisis detenido. Primero: "se ha cumplido el tiempo" — Elías sabía cuándo venir. No fue un accidente que llegara ese día. Segundo: cita directamente a Malaquías 4 — las llaves que trae son específicamente las que Malaquías prometió. Tercero: el propósito es "volver el corazón" — salvación por los muertos. Cuarto: advierte que el día grande del Señor "está cerca" — la segunda venida se acerca.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las llaves del sellamiento',
      intro: {
        romanNumeral: 'III',
        title: 'El Poder de Atar en la Tierra y en el Cielo',
        paragraphs: [
          'El sellamiento no es solo un matrimonio eterno — es el poder que conecta la familia humana de Adán hasta el fin.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Qué son las llaves del sellamiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'En DyC 128:14-18, José Smith describe el sellamiento como "la cadena que une a los padres con los hijos e hijos con los padres" hasta Adán. Sin este sellamiento, los convenios hechos en la tierra no tienen efecto eterno — son válidos solo hasta la muerte. Las llaves del sellamiento dan al sacerdocio autorizado el poder de hacer que los convenios hechos aquí sean reconocidos en el cielo.',
            },
            {
              type: 'doctrine_box',
              title: 'La piedra angular de todo el plan',
              body: 'José Smith enseñó que sin las llaves del sellamiento restauradas por Elías, ninguna ordenanza del evangelio tendría valor eterno. El bautismo, la confirmación, la investidura y el matrimonio son sellados — o no son nada más que registros terrenales. Las llaves que Elías trajo a Kirtland son lo que convierte cada convenio del evangelio de un contrato temporal en un vínculo eterno reconocido ante Dios.',
            },
            {
              type: 'key_points',
              title: 'Las llaves del sellamiento en práctica',
              points: [
                'Sellar matrimonios para tiempo y eternidad en el templo',
                'Sellar hijos a padres en el templo — formando familias eternas',
                'Sellar ordenanzas por los muertos — extendiendo el plan hacia atrás en el tiempo',
                'Conferir autoridad que "ata en la tierra y es atado en el cielo" (Mateo 16:19)',
                'Presidir sobre la "cadena que une" a toda la familia humana en convenios',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Malaquías 4 — la promesa que Moroni citó primero',
      intro: {
        romanNumeral: 'IV',
        title: 'El Único Versículo en los Cuatro Cánones',
        paragraphs: [
          'Malaquías 4:5-6 es el único pasaje que aparece en la Biblia, el Libro de Mormón, DyC Y en JS-Historia.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La promesa de Elías en cuatro cánones',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Malaquías 4:5-6',
              text: 'He aquí, yo os envío el profeta Elías, antes que venga el día de Jehová, grande y terrible. Él hará volver el corazón de los padres hacia los hijos, y el corazón de los hijos hacia los padres, no sea que yo venga y hiera la tierra con maldición.',
            },
            {
              type: 'paragraph',
              text: 'Moroni citó este versículo a José Smith la noche del 21-22 de septiembre de 1823 — la primera visita del ángel (JS-H 1:38-39). Era el primer texto bíblico que Moroni señaló como "a punto de cumplirse." El mismo pasaje aparece en 3 Nefi 25:5-6 (citado por Cristo resucitado a los nefitas), en DyC 2:1-3 (la primera revelación registrada en DyC), y en JS-H 1:38-39. La repetición cuádruple señala su importancia doctrinal absoluta.',
            },
            {
              type: 'steps',
              title: 'Por qué Malaquías 4:5-6 es la promesa más importante del AT para la Restauración',
              steps: [
                'Es la única promesa del AT repetida verbatim en cuatro escrituras distintas de la Restauración',
                'Es el PRIMER texto que Moroni citó a José Smith — señalando la prioridad divina',
                'Identifica la obra principal de Elías: volver los corazones — salvación para los muertos',
                'Su cumplimiento (DyC 110, 1836) es verificable históricamente con fecha exacta',
                'Conecta el AT, el NT, el Libro de Mormón y las revelaciones modernas en una sola promesa',
              ],
            },
            {
              type: 'reflection',
              prompt: 'Malaquías profetizó que Elías vendría antes del "día grande y terrible del Señor." Si Elías ya vino en 1836 y entregó las llaves, ¿en qué punto de la cronología profética estamos? ¿Qué urgencia debería eso darle a tu participación en la obra del templo?',
            },
          ],
        },
      ],
    },
  ],
}
