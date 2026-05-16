import type { Lesson } from '@/types/doctrine'

export const moroniLasPlanchas: Lesson = {
  id: 'moroni-las-planchas',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'moroni-profeta',
  title: 'Moroni — El Ángel que Entregó las Planchas',
  subtitle: 'De profeta mortal a mensajero celestial: 1,400 años de custodia',
  description:
    'El 21 de septiembre de 1823, Moroni —ahora un ser resucitado y glorificado— apareció tres veces a José Smith en una sola noche. Cuatro años de preparación precedieron la entrega de las planchas el 22 de septiembre de 1827. Moroni es el ángel de Apocalipsis 14:6 —el primer mensajero de la Restauración.',
  level: 'AVANZADO',
  icon: '📿',
  duration: 30,
  order: 7713,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Noche del 21 de Septiembre de 1823',
      intro: {
        romanNumeral: 'I',
        title: 'La Noche del 21 de Septiembre de 1823',
        paragraphs: [
          'José Smith tenía 17 años. Era tarde en la noche y estaba en su cuarto. Lo que ocurrió en las siguientes horas cambiaría el curso de la historia religiosa del siglo XIX y desencadenaría la Restauración del evangelio.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Historia de la Iglesia 1:29-47 — La primera visita',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Historia de la Iglesia 1:30-32',
              text: 'Mientras continuaba en oración, advertí que la habitación comenzaba a iluminarse hasta que era más brillante que el mediodía, cuando vi aparecer al pie de mi cama un personaje vestido de blanco... Me llamó por mi nombre y me dijo que era un mensajero enviado de la presencia de Dios, y que su nombre era Moroni; que Dios tenía una obra para que yo realizara.',
            },
            {
              type: 'paragraph',
              text: 'La descripción de José Smith del ángel Moroni es una de las más detalladas de cualquier encuentro angélico en la historia religiosa: vestido de blanco, con el rostro brillante como el rayo y sus pies que no tocaban el suelo. Moroni le habló extensamente sobre el Libro de Mormón, citó escrituras de Malaquías, Isaías, Hechos, y Joel. Luego ascendió al cielo —y regresó. Tres veces en esa sola noche, repitiendo el mensaje completo cada vez. Al alba, cuando regresó a trabajar en el campo, José colapsó de agotamiento. Moroni apareció una cuarta vez y le ordenó regresar a decirle a su padre lo que había ocurrido.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué tres visitas en una noche?',
              body: 'La repetición triple del mensaje de Moroni no fue accidental. En la tradición hebrea, la repetición triple es la forma de dar énfasis máximo (Santo, Santo, Santo en Isaías 6:3). Pero también hay razón práctica: la segunda y tercera visita añadieron advertencias específicas sobre las tentaciones que José enfrentaría, especialmente sobre no usar las planchas para obtener riqueza. Moroni quería que el mensaje estuviera grabado con tanta profundidad en la memoria de José que no hubiera manera de olvidarlo o malinterpretarlo.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Cuatro Años de Preparación',
      intro: {
        romanNumeral: 'II',
        title: 'Los Cuatro Años de Preparación',
        paragraphs: [
          'Moroni mostró a José Smith el lugar donde estaban las planchas en la colina Cumorah. Pero no le permitió tomarlas durante cuatro años. Esta preparación no fue arbitraria —fue diseñada para producir el carácter que requería la traducción.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El 22 de septiembre: la cita anual',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cada 22 de septiembre durante cuatro años consecutivos (1823, 1824, 1825, 1826), José Smith regresó a la colina Cumorah. Moroni se reunía con él allí. El primer año, José intentó tomar las planchas antes de estar listo —Moroni le prohibió hacerlo y las planchas desaparecieron ante sus ojos. En esas reuniones anuales, Moroni instruyó a José sobre las profecías antiguas, el propósito del libro, y las pruebas que vendrían. Fue una preparación personalizada durante cuatro años.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Sept. 21-22, 1823', text: 'Primera aparición de Moroni. Cuatro visitas en una noche. José ve la colina Cumorah en visión pero no puede tomar las planchas.', ref: 'Historia de la Iglesia 1:29-54', color: 'gold' },
                { label: 'Sept. 22, 1824', text: 'Segunda visita anual. José intenta sacar las planchas antes de tiempo y no puede. Moroni le instruye sobre el propósito del registro.', ref: 'Historia de la Iglesia 1:53', color: 'blue' },
                { label: 'Sept. 22, 1825-1826', text: 'Tercera y cuarta visitas anuales. Instrucción continua. José trabaja para el señor Chase y el señor Stoal durante este período.', ref: 'Historia de la Iglesia 1:55-56', color: 'blue' },
                { label: 'Sept. 22, 1827', text: 'Moroni entrega las planchas a José Smith. Emma acompaña a José. Las planchas son físicamente transferidas.', ref: 'Historia de la Iglesia 1:59', color: 'gold' },
                { label: '1828-1829', text: 'Traducción del Libro de Mormón. Moroni recupera las planchas y las devuelve varias veces durante el proceso.', ref: 'Historia de la Iglesia 1:60-75', color: 'green' },
              ],
            },
            {
              type: 'paragraph',
              text: 'El período de cuatro años entre la primera aparición de Moroni y la entrega de las planchas es frecuentemente pasado por alto, pero es teológicamente significativo. Dios no simplemente entregó el libro —preparó al traductor. José Smith necesitaba madurar, desarrollar fe bajo prueba, experimentar el fracaso (intentar tomar las planchas antes de tiempo, la pérdida de las 116 páginas), y aprender a confiar en el proceso de Dios en lugar de apresurar los resultados.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Entrega de las Planchas',
      intro: {
        romanNumeral: 'III',
        title: 'La Entrega de las Planchas',
        paragraphs: [
          'El 22 de septiembre de 1827, Moroni cumplió el encargo que había cargado durante 1,400 años: entregar el registro de su padre y de su pueblo a quien habría de traducirlo. Fue el momento que definía su misión como ser resucitado.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Historia de la Iglesia 1:59 — El momento de la entrega',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Historia de la Iglesia 1:59',
              text: 'Al llegar, me entregó las planchas el mensajero celestial Moroni, según lo prometido, diciéndome que cuando le hubiera terminado de traducir, debería hacerlas de nuevo a él.',
            },
            {
              type: 'paragraph',
              text: 'La transferencia fue física —José describió las planchas como reales, pesadas (estimó entre 30-60 libras), con páginas delgadas como hojas de zinc y grabados apretados que podía tocar con sus dedos. Vino con Emma esa mañana, ella esperó a una distancia mientras José subía a la cumbre de la colina Cumorah. Moroni estaba allí. La entrega fue directa, sin ceremonia elaborada —simplemente el cumplimiento de un encargo que había esperado su momento durante siglos.',
            },
            {
              type: 'key_points',
              title: 'Lo que Moroni entregó a José Smith',
              points: [
                'Las planchas de oro —el registro abreviado de la historia nefita',
                'El Urim y Tumim —dos piedras transparentes en arcos de plata, usadas para la traducción',
                'El pectoral —el instrumento al que estaba fijado el Urim y Tumim',
                'Instrucciones sobre cómo proteger las planchas de quienes las buscarían para robarlas',
                'La responsabilidad de conservarlas hasta terminar la traducción y devolvérselas a él',
              ],
            },
            {
              type: 'reflection',
              prompt: 'Moroni cargó las planchas durante 1,400 años esperando el momento de entregarlas. ¿Qué te dice sobre la paciencia de Dios con sus planes, y sobre la importancia de que cada persona esté lista en el momento correcto, no simplemente cuando es conveniente?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Ángel del Apocalipsis',
      intro: {
        romanNumeral: 'IV',
        title: 'El Ángel del Apocalipsis',
        paragraphs: [
          'Apocalipsis 14:6 describe un ángel que vuela por el cielo con el "evangelio eterno" para predicarlo a toda nación. DyC 133:36 y la tradición de la Restauración identifican este ángel como Moroni. Este pasaje abre una ventana sobre el propósito eterno de la misión de Moroni.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Apocalipsis 14:6 — La profecía que identificó a Moroni',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Apocalipsis 14:6',
              text: 'Vi volar por en medio del cielo a otro ángel, que tenía el evangelio eterno para predicarlo a los moradores de la tierra, a toda nación, tribu, lengua y pueblo.',
            },
            {
              type: 'paragraph',
              text: 'Juan el Revelador, en Patmos, alrededor del año 95 d.C., vio en visión a un ángel llevando el evangelio eterno a toda la tierra. Unos 300 años después, Moroni —todavía mortal— enterraría las planchas que contendrían ese evangelio restaurado. Cuando Juan tuvo su visión, Moroni todavía no había nacido. Cuando Moroni enterró las planchas, Juan ya estaba muerto. Y sin embargo, Juan vio a Moroni —o a la figura que Moroni llegaría a ser— en visión profética, cumpliendo el papel exacto que cumplió en 1827.',
            },
            {
              type: 'doctrine_box',
              title: 'DyC 133:36-39 — La confirmación del papel de Moroni',
              body: 'DyC 133:36-39: "Y ahora bien, el evangelio eterno fue predicado a todos los que habitan sobre la tierra por el ángel... él trae la administración del evangelio del principio al fin." Aunque este pasaje no menciona el nombre de Moroni explícitamente, la tradición apostólica desde Joseph Smith lo identifica consistentemente con el mensajero que entregó las planchas. Parley P. Pratt, Orson Pratt, y Wilford Woodruff citaron Apocalipsis 14:6 repetidamente en sus conferencias como la profecía que describía la misión de Moroni como primer ángel de la Restauración.',
            },
            {
              type: 'leader_quote',
              quote: 'El ángel Moroni es el ángel que Juan vio volando por el cielo con el evangelio eterno para predicarlo a la tierra. Esto no es algo que yo enseño como opinión personal —es la interpretación que José Smith dio a ese versículo del Apocalipsis.',
              name: 'Orson Pratt',
              role: 'Diario de Discursos 18:224 (1877)',
            },
          ],
        },
      ],
    },
  ],
}
