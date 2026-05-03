import type { Lesson } from '@/types/doctrine'

export const losConveniosEternos: Lesson = {
  id: 'convenios-eternos',
  moduleId: 'doctrina-avanzada-carne',
  title: 'Los Convenios Eternos',
  subtitle: 'Los lazos que nos atan a Cristo',
  author: 'Fuentes principales: DyC 82, 84, 132; Oseas 2, Jeremías 31',
  description:
    'Los convenios no son contratos religiosos — son lazos de amor entre Dios y Sus hijos. Qué es un convenio, por qué los convenios rotos importan tanto, cómo se renuevan, y por qué los convenios del templo son la forma más alta de unión entre lo humano y lo divino.',
  level: 'AVANZADO',
  icon: '🔗',
  duration: 65,
  order: 6,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'justicia-y-misericordia',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: '¿Qué es un Convenio?',
      intro: {
        romanNumeral: 'I',
        title: '¿Qué es un Convenio?',
        paragraphs: [
          'La palabra "convenio" aparece cientos de veces en las Escrituras, pero rara vez se define con precisión. Muchos santos la usan como sinónimo de "promesa" o "regla." Es mucho más que eso. Un convenio es un lazo sagrado entre Dios y un ser humano — un compromiso bilateral que, cuando ambas partes lo cumplen, produce bendiciones que ningún esfuerzo individual puede obtener.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Naturaleza del Convenio Divino',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando obtenemos cualquier bendición de Dios, es en obediencia a esa ley sobre la cual está basada. Estoy obligado cuando vosotros hacéis lo que yo digo; mas cuando no hacéis lo que yo digo, no tenéis ninguna promesa.',
              reference: 'Doctrina y Convenios 130:20–21',
            },
            {
              type: 'paragraph',
              text: 'DyC 130:20-21 establece el principio universal: las bendiciones están atadas a leyes, y las leyes se activan a través de los convenios. No es que Dios sea mecánico o burocrático — es que el universo opera bajo leyes que ni siquiera Dios viola. Los convenios son el mecanismo por el cual las leyes celestiales se conectan con la vida mortal.',
            },
            {
              type: 'doctrine_box',
              title: 'La diferencia entre un convenio y un contrato',
              body: 'Un contrato es un acuerdo legal entre iguales con consecuencias legales por incumplimiento. Un convenio divino es fundamentalmente diferente: (1) Las partes no son iguales — Dios y un mortal. (2) Las condiciones las establece completamente Dios — son Sus términos, no negociados. (3) Las bendiciones prometidas exceden infinitamente lo que el mortal podría obtener por sí solo. (4) El incumplimiento no produce consecuencias legales — produce pérdida de acceso a las bendiciones prometidas. (5) El convenio puede ser renovado a través del arrepentimiento.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, yo soy el Señor vuestro Dios, y os daré a vosotros esta ley; y seréis mi pueblo, y yo seré vuestro Dios.',
              reference: 'Doctrina y Convenios 42:9',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Los Convenios del Evangelio',
      intro: {
        romanNumeral: 'II',
        title: 'Los Convenios del Evangelio',
        paragraphs: [
          'El evangelio restaurado es un sistema de convenios progresivos. Cada ordenanza introduce un convenio diferente, cada uno más profundo que el anterior. Juntos forman lo que Pablo llamó el "nuevo y sempiterno convenio" — la alianza que Dios ofrece a Sus hijos para unirlos a Él eternamente.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Escalera de los Convenios',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Bautismo',
                  text: 'Tomar el nombre de Cristo, guardar Sus mandamientos, llevar cargas de otros, dar testimonio de Dios',
                  ref: 'Mosiah 18:8-10; DyC 20:37',
                  color: 'blue',
                },
                {
                  label: 'Santa Cena',
                  text: 'Renovación semanal del convenio bautismal — recordar a Cristo, guardar Sus mandamientos',
                  ref: 'DyC 20:77-79; 3 Nefi 18:7',
                  color: 'gold',
                },
                {
                  label: 'Sacerdocio',
                  text: 'Convenio de actuar fielmente en el nombre de Dios, magnifying el llamamiento',
                  ref: 'DyC 84:33-40',
                  color: 'blue',
                },
                {
                  label: 'Endowment (Investidura)',
                  text: 'Convenios de obediencia, castidad, consagración y dedicación — dotación de poder desde arriba',
                  ref: 'DyC 84:19-22',
                  color: 'gold',
                },
                {
                  label: 'Sellamiento',
                  text: 'El nuevo y sempiterno convenio del matrimonio — familia unida por tiempo y toda la eternidad',
                  ref: 'DyC 132:18-20',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Por lo cual, si guardáis mis mandamientos y permanecéis en mi convenio, iréis adelante eternamente; porque el camino eterno está preparado ante vosotros.',
              reference: 'Moisés 6:59',
            },
            {
              type: 'leader_quote',
              quote: 'Los convenios que hacemos con Dios nos atan a Él con lazos más fuertes que los del matrimonio, más fuertes que los de la sangre, más fuertes que cualquier lealtad humana. Cuando entendemos eso, entendemos por qué romper un convenio es algo tan serio — y por qué renovarlo a través del arrepentimiento es uno de los mayores privilegios de la mortalidad.',
              name: 'David A. Bednar',
              role: '"Exceeding Great and Precious Promises", Conferencia General, octubre 2017 (trad.)',
            },
          ],
        },
        {
          id: 't3',
          title: 'Cuando los Convenios se Rompen — y Cómo se Renuevan',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque mi pueblo ha olvidado su Creador, edificando templos, y Judá ha multiplicado las ciudades fuertes; mas yo meteré fuego en sus ciudades, el cual consumirá sus palacios. [...] Y te desposaré conmigo para siempre; te desposaré conmigo en justicia, juicio, benignidad y misericordia.',
              reference: 'Oseas 8:14; 2:19',
            },
            {
              type: 'paragraph',
              text: 'Oseas es el profeta del convenio roto y restaurado. Su matrimonio con Gomer — una mujer infiel — es una metáfora del convenio entre Dios e Israel. Cuando Israel rompe el convenio, Dios no lo abandona. Lo busca, lo llama de regreso, lo invita a renovar el lazo. "Te desposaré conmigo para siempre" — no como primer matrimonio, sino como restauración. Esta es la doctrina del arrepentimiento en la imagen del matrimonio: Dios siempre está dispuesto a renovar si nosotros nos volvemos.',
            },
            {
              type: 'key_points',
              title: 'Cómo se renuevan los convenios rotos',
              points: [
                'El bautismo no se repite — pero el convenio bautismal se renueva cada semana en la Santa Cena',
                'El arrepentimiento sincero restaura el acceso a las bendiciones del convenio — el Señor "no recuerda más" (DyC 58:42)',
                'Las ordenanzas del templo se pueden restaurar para quienes las perdieron por transgresión grave — a través del proceso de consejo con el obispo',
                'El sellamiento no se pierde automáticamente por pecado — pero sus bendiciones están condicionadas a la fidelidad',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Una de las verdades más hermosas del evangelio es esta: los convenios no se pierden por debilidad. Se pueden renovar. El Señor diseñó un sistema en el que la caída no tiene que ser permanente, en el que el regreso siempre es posible, en el que el arrepentimiento activa nuevamente las promesas que el pecado había suspendido. Los convenios de Dios son promesas eternas — y Su paciencia para esperarnos también lo es.',
              name: 'Russell M. Nelson',
              role: '"Welcome Message", Conferencia General, abril 2018 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Qué convenios has hecho con el Señor? ¿Cuáles de ellos estás cumpliendo con fidelidad? ¿Hay alguno que sientes que has roto o que has guardado superficialmente? La Santa Cena de este domingo es una oportunidad de renovación. ¿Qué llevarás a esa mesa?',
            },
          ],
        },
      ],
    },
  ],
}
