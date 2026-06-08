import type { Lesson } from '@/types/doctrine'

export const hjPresidente: Lesson = {
  id: 'hj-presidente',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'hj-lideres',
  title: 'El Presidente de los Hombres Jóvenes',
  subtitle: 'Coordinador entre el obispado y los cuórums del Sacerdocio Aarónico',
  description:
    'El presidente de Hombres Jóvenes del barrio sirve bajo la dirección del obispo — que es el presidente del Sacerdocio Aarónico. Esa distinción no es menor: es el fundamento teológico de todo su llamamiento. Esta lección define con precisión qué hace el presidente de HJ, cómo trabaja con el obispado, y cómo ayuda a cada joven a descubrir su identidad sacerdotal.',
  level: 'BÁSICO',
  icon: '🧑',
  duration: 25,
  order: 9550,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Llamamiento — Una Distinción Teológicamente Importante',
      intro: {
        romanNumeral: 'I',
        title: 'El Obispo ES el Presidente del Sacerdocio Aarónico',
        paragraphs: [
          'Antes de hablar de qué hace el presidente de Hombres Jóvenes, es indispensable entender quién no es: no es el presidente del Sacerdocio Aarónico del barrio. Ese es el obispo. El presidente de HJ sirve bajo su dirección. Esa distinción no es protocolar — es teológica, y define todo el llamamiento.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Obispo Como Presidente del Sacerdocio Aarónico',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General de la Iglesia (capítulo 10) es explícito: el obispo "preside sobre los cuórums del Sacerdocio Aarónico del barrio." No es el supervisor del programa de Hombres Jóvenes — es el presidente de los cuórums de diáconos, maestros y presbíteros. Esa autoridad es parte de su oficio episcopal, no de una asignación adicional. El presidente de HJ no preside esos cuórums — coordina, facilita y apoya al obispo en su responsabilidad.',
            },
            {
              type: 'doctrine_box',
              title: 'El obispo como presidente del Sacerdocio Aarónico — lo que los líderes de HJ necesitan entender',
              body: 'Doctrina y Convenios 107:15 establece que el "oficio de obispo es presidir sobre el sacerdocio aarónico." Eso significa que cuando el presidente de HJ toma decisiones sobre los cuórums, sobre las ordenaciones, o sobre la participación de los jóvenes en las ordenanzas del sacerdocio, lo hace bajo la dirección del obispo — no independientemente. El presidente de HJ que actúa como si tuviera autoridad autónoma sobre los jóvenes ha malentendido su llamamiento. Su poder es el de la coordinación, no el de la presidencia sacerdotal.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 107:15',
              text: 'La misión del sacerdocio aarónico es administrar en cosas externas, o sea, en la administración de las ordenanzas y en la preparación para recibir el sacerdocio de Melquisedec.',
            },
            {
              type: 'key_points',
              title: 'Lo que el presidente de HJ hace — y lo que no hace',
              points: [
                'HACE: Coordinar actividades, programas y el calendario anual de HJ bajo dirección del obispado',
                'HACE: Facilitar la participación de los jóvenes en el ministerio del sacerdocio (sacrament, colectas)',
                'HACE: Trabajar con los consejeros de HJ y los presidentes de cuórum para servir a cada joven',
                'HACE: Reportar al obispo y asistir al consejo de barrio para presentar las necesidades de los jóvenes',
                'NO HACE: Tomar decisiones sobre ordenaciones — eso es el obispo',
                'NO HACE: Presidir los cuórums — los cuórums tienen sus propios presidentes y asesores',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'La Orientación Inicial con el Obispo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presidente de HJ debe recibir orientación del obispo o de uno de sus consejeros antes de comenzar su servicio. Esa orientación debe incluir: cuál es la visión del obispo para los jóvenes del barrio, cuáles son los jóvenes que necesitan atención especial, cómo se espera que el presidente de HJ coordine con el obispado, y cuál es el proceso para aprobar actividades y solicitar recursos.',
            },
            {
              type: 'reflection',
              prompt: '¿Entiendes claramente cuál es tu rol en relación al obispo y a los cuórums? ¿Hay decisiones que hayas estado tomando de manera unilateral que deberían pasar por el obispado? ¿Cómo puedes clarificar esas líneas de autoridad esta semana?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Responsabilidades Concretas del Presidente de HJ',
      intro: {
        romanNumeral: 'II',
        title: 'Coordinador, Facilitador, Servidor',
        paragraphs: [
          'Aunque el presidente de HJ no preside los cuórums, su rol de coordinación y apoyo es indispensable. Sin él, el obispo no puede atender todas las necesidades pastorales y logísticas de los jóvenes del barrio. El presidente de HJ multiplica la capacidad ministerial del obispado.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Coordinar con el Obispado — Reuniones y Reportes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presidente de HJ debe reunirse regularmente con el obispado — idealmente cada mes o cada dos meses — para reportar el estado de los jóvenes, revisar el calendario de actividades, y recibir dirección pastoral. Esas reuniones no son una cortesía — son el mecanismo principal a través del cual el obispado ejerce su presidencia sobre el Sacerdocio Aarónico.',
            },
            {
              type: 'steps',
              title: 'Cómo prepararse para una reunión con el obispado',
              steps: [
                'Lleva información específica sobre cada joven — no solo "todo va bien"',
                'Presenta el estado del calendario de actividades y solicita aprobación para las próximas',
                'Identifica jóvenes que necesitan atención pastoral directa del obispo — entrevistas, bendiciones, orientación sobre misión',
                'Reporta el estado de participación en la Santa Cena y otras responsabilidades del sacerdocio',
                'Presenta cualquier necesidad de recursos, presupuesto o apoyo de otros líderes del barrio',
                'Escucha la visión y dirección del obispo — y llévala de regreso a los consejeros y presidentes de cuórum',
              ],
            },
            {
              type: 'paragraph',
              text: 'La participación del presidente de HJ en el consejo de barrio es también parte de su responsabilidad. En ese espacio puede presentar las necesidades de los jóvenes, coordinar con otros líderes del barrio, y asegurarse de que los jóvenes estén visibles para el liderazgo del barrio, no solo para la organización de HJ.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Facilitar el Ministerio del Sacerdocio de los Jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'Uno de los aspectos más importantes del rol del presidente de HJ es facilitar que los jóvenes ejerzan activamente su sacerdocio. Eso significa coordinar con los presidentes de cuórum para asegurar que los diáconos administren la Santa Cena con reverencia y preparación, que los maestros realicen visitas ministeriales, y que los presbíteros participen en las ordenanzas que les corresponden.',
            },
            {
              type: 'key_points',
              title: 'Ministerio del sacerdocio que los jóvenes deben ejercer',
              points: [
                'Diáconos: administrar y preparar la Santa Cena cada domingo con reverencia',
                'Diáconos: colectar el ayuno y llevar ofrendas al obispo',
                'Maestros: preparar la Santa Cena, ministrar a las familias asignadas',
                'Presbíteros: conferir el Sacerdocio Aarónico, bautizar, administrar la Santa Cena',
                'Todos: participar activamente en el servicio y el ministerio del barrio',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Foco Espiritual — Preparar Hombres de Convenio',
      intro: {
        romanNumeral: 'III',
        title: 'Identidad Sacerdotal, Misión, Convenio',
        paragraphs: [
          'Los programas pueden administrarse. Los calendarios pueden llenarse. Pero el verdadero legado de un presidente de HJ se mide en los jóvenes que descubrieron quiénes son, que sirvieron misiones transformadoras, y que entraron al templo con un convenio que entienden. Ese es el foco espiritual del llamamiento.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Ayudar a Cada Joven a Descubrir su Identidad Sacerdotal',
          blocks: [
            {
              type: 'paragraph',
              text: 'Muchos jóvenes portan el sacerdocio sin entender qué es. Administran la Santa Cena por costumbre, no por convicción. El presidente de HJ — trabajando con los asesores y los presidentes de cuórum — puede crear espacios regulares donde los jóvenes reflexionen sobre la pregunta fundamental: ¿Quién soy yo como portador del sacerdocio? ¿Qué significa ese convenio para mi vida, no solo para los domingos?',
            },
            {
              type: 'leader_quote',
              quote: 'Un joven que entiende su sacerdocio como una identidad — no como una función — vivirá de manera diferente de lunes a sábado. Eso es lo que queremos lograr. No chicos que administren la Santa Cena correctamente, sino hombres que vivan el convenio del sacerdocio en todo lo que hacen.',
              name: 'Presidente Timothy L. Farnes',
              role: 'Orientación a líderes de jóvenes, 2025',
            },
            {
              type: 'paragraph',
              text: 'La preparación para la misión es parte central del ministerio del presidente de HJ. Eso no significa presionar a los jóvenes para que anuncien su fecha de misión — significa crear un ambiente donde la misión sea vista como algo natural y deseado, y donde los jóvenes estén espiritualmente listos cuando llegue ese momento. Las conversaciones regulares sobre la misión, los testimonios compartidos de élderes del barrio, y la participación en la obra misional del barrio son herramientas concretas.',
            },
          ],
        },
        {
          id: 't6',
          title: 'Preparar Jóvenes para el Templo y la Vida de Convenio',
          blocks: [
            {
              type: 'paragraph',
              text: 'El templo no debería ser una sorpresa para un joven que llega a sus 18 o 19 años. La preparación para el templo comienza años antes: con conversaciones sobre los convenios, con visitas al templo para realizar trabajo vicario, y con el ejemplo de adultos en el barrio que hablan de sus convenios con reverencia y gratitud. El presidente de HJ puede coordinar esas experiencias de manera intencional.',
            },
            {
              type: 'steps',
              title: 'Construir una cultura de preparación para la misión y el templo',
              steps: [
                'Incluir testimonios sobre la misión en las actividades de HJ al menos una vez al trimestre',
                'Coordinar visitas al templo para trabajo vicario — al menos dos veces al año',
                'Crear conversaciones en clase sobre "¿qué significa vivir un convenio?" — no solo sobre las reglas',
                'Conectar jóvenes que se acercan a los 18 años con el obispo para entrevistas de preparación a la misión',
                'Celebrar cuando un joven recibe su llamamiento — que sea un evento del barrio, no solo familiar',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué jóvenes de tu barrio estarán listos para la misión en los próximos 12 a 18 meses? ¿Qué necesitan espiritualmente que aún no están recibiendo? ¿Cómo puedes coordinar con el obispo para proveer eso?',
            },
          ],
        },
      ],
    },
  ],
}
