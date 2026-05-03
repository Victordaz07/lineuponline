import type { Lesson } from '@/types/doctrine'

export const elTemplo: Lesson = {
  id: 'templo-casa-del-senor',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Templo — La Casa del Señor',
  subtitle: 'Donde el tiempo y la eternidad se tocan',
  author: 'Fuentes principales: DyC 84, 110, 131-132; Russell M. Nelson',
  description:
    'El templo no es el edificio más hermoso de la Iglesia — es el lugar donde Dios hace sus promesas más grandes. Las ordenanzas del templo, el endowment, el sellamiento, y por qué Nelson dijo que nuestro futuro espiritual depende de nuestra relación con el templo.',
  level: 'AVANZADO',
  icon: '🏛️',
  duration: 75,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'sacerdocio-autoridad-poder',
  nextLessonId: 'preexistencia',
  studySections: [
    {
      id: 's1',
      title: 'Por Qué Existe el Templo',
      intro: {
        romanNumeral: 'I',
        title: 'Por Qué Existe el Templo',
        paragraphs: [
          'El templo no es una iglesia más grande con mejores decoraciones. Es el lugar donde Dios ofrece a sus hijos mortales el acceso a las ordenanzas que hacen posible la exaltación eterna. Sin las ordenanzas del templo, el plan de salvación queda incompleto — no porque Dios sea burocrático, sino porque las ordenanzas son los convenios, y los convenios son los lazos que unen a la humanidad a la divinidad.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Templo en la Escritura',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, como dije antes, os exhorto, hermanos, a que prosigáis en la oración y en la súplica, a fin de que en el día de vuestro bautismo por los muertos, vuestras oraciones y trabajo puedan ser una respuesta para vuestros antepasados.',
              reference: 'Doctrina y Convenios 128:15',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, en las ordenanzas de aquel sacerdocio, se manifiesta el poder de la divinidad. Y sin las ordenanzas del mismo, y la autoridad del sacerdocio, el poder de la divinidad no se manifiesta a los hombres en la carne.',
              reference: 'Doctrina y Convenios 84:20–21',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué las ordenanzas del templo son necesarias',
              body: 'DyC 84:20-21 establece el principio fundamental: sin las ordenanzas del sacerdocio (específicamente las del templo), el poder de la divinidad no puede manifestarse plenamente en los seres mortales. El templo no es donde "ganamos puntos" con Dios. Es donde hacemos convenios que nos conectan a Su poder transformador, y donde ese poder puede operar en nuestra vida de maneras que no son posibles fuera de esos convenios.',
            },
            {
              type: 'leader_quote',
              quote: 'Nuestro futuro espiritual — el vuestro y el mío — depende de nuestra relación personal con el templo. El diablo sabe esto. Por eso trabaja tan activamente para mantenernos alejados del templo, para hacernos sentir que la preparación es demasiado difícil, que el viaje es demasiado lejos, que el tiempo es demasiado corto. Él sabe lo que perdemos cuando no vamos.',
              name: 'Russell M. Nelson',
              role: '"The Temple and Your Spiritual Foundation", Conferencia General, octubre 2021 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Ordenanzas del Templo',
      intro: {
        romanNumeral: 'II',
        title: 'Las Ordenanzas del Templo',
        paragraphs: [
          'El templo ofrece ordinanzas que ningún otro lugar en la tierra puede ofrecer: el lavamiento y unción, el endowment, y el sellamiento. Cada uno tiene un propósito doctrinal específico y cada uno está protegido con una reverencia especial — no por secreto, sino por santidad.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Endowment — La Investidura de Poder',
          blocks: [
            {
              type: 'paragraph',
              text: 'La palabra "endowment" en inglés — que en español se traduce como "dotación" o "investidura" — significa literalmente "dotación de poder desde arriba." José Smith describió el propósito del endowment con estas palabras: "Explicaré lo que me propongo con la palabra endowment. Se trata de una dotación de poder del cielo que imparte instrucción, inteligencia, y conocimiento divinos a los que la reciben."',
            },
            {
              type: 'highlight_verse',
              text: 'Y el Señor dijo a Moisés: Di a los hijos de Israel que me construyan un santuario, y habitaré en medio de ellos.',
              reference: 'Éxodo 25:8',
            },
            {
              type: 'key_points',
              title: 'Lo que el endowment ofrece',
              points: [
                'Instrucción sobre el plan de salvación: el propósito de la creación, la caída, la expiación y la exaltación',
                'Convenios de obediencia, castidad, consagración y dedicación a Dios',
                'Una nueva vestidura sagrada como símbolo del convenio y protección divina',
                'El conocimiento simbólico necesario para regresar a la presencia de Dios',
                'Poder espiritual que fluye a través del cumplimiento de los convenios del templo',
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'El Sellamiento — La Familia Eterna',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y si os casáis en el nuevo y sempiterno convenio, y este matrimonio no fue sellado por el que tiene esta autoridad y poder plenipotenciario, entonces no tenéis ningún convenio; y cuando estéis fuera del mundo no podréis tener aumento.',
              reference: 'Doctrina y Convenios 132:18',
            },
            {
              type: 'highlight_verse',
              text: 'Y si os casáis por mí, en mi nombre, conforme a mi ley, y por mi palabra, y por convenio, y sois mutuamente fieles, vuestro matrimonio será válido para tiempo y para toda la eternidad.',
              reference: 'Doctrina y Convenios 132:19',
            },
            {
              type: 'paragraph',
              text: 'La pregunta que responde el sellamiento es la más importante de todas las preguntas familiares: ¿puede una familia existir para siempre? El mundo responde: no. La muerte es el fin de todos los lazos. El evangelio restaurado responde: depende. Depende de si esos lazos fueron establecidos por el poder correcto, con las condiciones correctas, y mantenidos con fidelidad.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Matrimonio civil / religioso ordinario',
                items: [
                  '"Hasta que la muerte los separe"',
                  'Válido solo en esta vida',
                  'Los hijos no están sellados a los padres',
                  'No hay aumento eterno',
                ],
              },
              right: {
                title: 'Matrimonio sellado en el templo',
                items: [
                  '"Por tiempo y por toda la eternidad"',
                  'Válido más allá de la muerte si son fieles',
                  'Los hijos nacidos o sellados bajo el convenio',
                  'Aumento eterno en el grado más alto del celestial',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'Cada vez que un hombre y una mujer son sellados en el templo, Satanás pierde terreno. Porque cada familia sellada es una familia que potencialmente puede continuar más allá de la muerte. Eso es exactamente lo que él no puede tolerar. Por eso trabaja tan incansablemente para destruir las familias, los matrimonios, y la santidad del templo.',
              name: 'Russell M. Nelson',
              role: '"Spiritual Treasures", Conferencia General, octubre 2019 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Trabajo por los Muertos',
      intro: {
        romanNumeral: 'III',
        title: 'El Trabajo por los Muertos',
        paragraphs: [
          'El templo no es solo para los vivos. La doctrina más única y poderosa de la Restauración puede ser esta: que las ordenanzas del templo pueden realizarse vicariamente por quienes murieron sin tener acceso a ellas. Esta es la enseñanza que hace que Elías, el trabajo de historia familiar, y el sellamiento de generaciones sean inseparables.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Por Qué Dios Ordenó el Trabajo Vicario',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque sin nosotros no pueden ser perfeccionados; y tampoco nosotros sin nuestros muertos podemos ser perfeccionados.',
              reference: 'Doctrina y Convenios 128:18',
            },
            {
              type: 'paragraph',
              text: 'Esta escritura contiene una de las doctrinas más profundas del evangelio restaurado: la perfección es colectiva, no individual. No puedes ser completamente exaltado dejando a tus ancestros atrás. Ellos necesitan de ti. Tú los necesitas a ellos. La cadena de convenios que une las generaciones no es opcional — es el tejido del plan eterno.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'La justicia del trabajo vicario — respondiendo la pregunta más difícil',
              paragraphs: [
                'La pregunta obvia es: ¿Es justo que los muertos dependan de que los vivos hagan el trabajo por ellos? ¿Qué pasa si nadie hace el trabajo por un ancestro específico?',
                'La respuesta doctrinal tiene dos partes. Primera: el trabajo vicario no salva automáticamente a nadie. Ofrece la ordenanza — pero la persona en el mundo de los espíritus tiene que aceptarla o rechazarla con plena agencia. No se fuerza a nadie. Segunda: Dios es perfectamente justo. No perderá un alma por un descuido humano. El período milenial — mil años durante los cuales el templo funcionará sin interrupción — está diseñado precisamente para asegurar que toda alma que pueda ser alcanzada, sea alcanzada.',
                'Mientras tanto, nuestro trabajo es hacer lo que podemos. El Espíritu de Elías — el espíritu que impulsa la historia familiar — fue prometido para los últimos días precisamente porque Dios quiere que este trabajo se haga.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo fue la última vez que entraste al templo — no para una boda, sino para el servicio vicario por tus muertos? ¿Tienes nombres de ancestros esperando que hagas su trabajo? ¿Qué te detiene de hacer del templo un destino regular, no una visita ocasional?',
            },
          ],
        },
      ],
    },
  ],
}
