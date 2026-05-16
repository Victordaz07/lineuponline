import type { Lesson } from '@/types/doctrine'

export const obispadoElCambio: Lesson = {
  id: 'obispado-el-cambio',
  moduleId: 'capacitacion-liderazgo',
  title: 'El Cambio y Por Qué Importa',
  subtitle: 'Comprender el propósito antes de comunicarlo',
  description:
    'A partir del 6 de septiembre de 2026, los barrios de la Iglesia implementarán un nuevo horario dominical para los jóvenes. Esta lección prepara al obispo y sus consejeros para entender qué cambia, por qué la Iglesia lo está haciendo, y cuál es su papel específico como obispado en comunicar y coordinar este cambio.',
  level: 'BÁSICO',
  icon: '⚖️',
  duration: 20,
  order: 1,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Qué Cambia — El Nuevo Horario',
      intro: {
        romanNumeral: 'I',
        title: 'El Nuevo Horario Dominical',
        paragraphs: [
          'El domingo 6 de septiembre de 2026 marca el inicio de un nuevo esquema para la segunda hora del bloque dominical. Los cambios son estructurales, pero su propósito es profundamente espiritual: conectar a los jóvenes con un material específico para su edad cada semana del año.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El horario anterior vs. el nuevo horario',
          blocks: [
            {
              type: 'paragraph',
              text: 'Durante años, el bloque dominical de dos horas se organizó con Escuela Dominical en semanas alternas — los jóvenes asistían a Escuela Dominical un domingo y a sus clases de quórum o sociedad de socorro el siguiente. A partir de septiembre de 2026, ese esquema de alternancia desaparece. Ahora los tres segmentos ocurren cada domingo.',
            },
            {
              type: 'compare_grid',
              title: 'Horario anterior vs. nuevo horario (segunda hora)',
              left: {
                label: 'Antes de septiembre 2026',
                points: [
                  'Semana A: Escuela Dominical (Ven, Sígueme) — todas las edades juntas',
                  'Semana B: Clases por quórum/organización',
                  'Los jóvenes 12-17 seguían el currículo general de Ven, Sígueme',
                  'Sin material específico semanal para jóvenes',
                  'Los adultos y jóvenes alternaban el mismo horario',
                ],
              },
              right: {
                label: 'Desde septiembre 2026 — cada domingo',
                points: [
                  '25 min: Escuela Dominical (Ven, Sígueme) — todos los miembros',
                  '25 min: Jóvenes 12-17 estudian "Para la Fortaleza de la Juventud" (PFJ) — 1 capítulo/mes',
                  '25 min: Adultos 18+ — Cuórum de Élderes / Sociedad de Socorro — mensajes de Conferencia General',
                  'Los jóvenes tienen su propio espacio de estudio específico cada semana',
                  'La Escuela Dominical ocurre todos los domingos, no solo en semanas alternas',
                ],
              },
            },
            {
              type: 'key_points',
              title: 'Tres cambios clave en una frase cada uno',
              points: [
                'La Escuela Dominical (Ven, Sígueme) pasa de alternarse a ocurrir TODOS los domingos',
                'Los jóvenes 12-17 tienen ahora 25 minutos semanales propios para estudiar la guía PFJ — 1 capítulo por mes',
                'Los adultos 18+ tienen también 25 minutos propios para estudiar mensajes de Conferencia General',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'La guía "Para la Fortaleza de la Juventud"',
          blocks: [
            {
              type: 'paragraph',
              text: 'La guía "Para la Fortaleza de la Juventud" (PFJ) es el documento que la Iglesia publicó en 2022 para reemplazar el antiguo folleto de las normas. A diferencia del folleto anterior, la PFJ no es una lista de reglas sino una invitación a que los jóvenes aprendan a actuar por principios propios, con raíces doctrinales. Cada capítulo trata un tema específico: el arrepentimiento, la revelación personal, el servicio, la pureza moral, entre otros.',
            },
            {
              type: 'doctrine_box',
              title: 'El ritmo de estudio: 1 capítulo por mes',
              body: 'El nuevo esquema asigna un capítulo de la PFJ por mes, distribuido en las semanas del mes. Esto significa que los maestros de los jóvenes no necesitan preparar material nuevo cada semana desde cero — trabajan el mismo capítulo con profundidad durante todo el mes. El obispado debe asegurarse de que los maestros de jóvenes reciban los ejemplares de la guía antes del 6 de septiembre.',
            },
            {
              type: 'paragraph',
              text: 'El material para los adultos 18+ también es nuevo: en lugar de seguir Ven, Sígueme, los cuórumes de élderes y la sociedad de socorro estudiarán mensajes seleccionados de Conferencia General. Este cambio reconoce que los adultos tienen ya un historial de conocimiento doctrinal y se benefician del análisis profundo de las palabras de los apóstoles y profetas vivos.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Por Qué lo Hace la Iglesia — El Propósito',
      intro: {
        romanNumeral: 'II',
        title: 'El Propósito Detrás del Cambio',
        paragraphs: [
          'Antes de comunicar cualquier cambio, el obispado necesita entender genuinamente por qué existe. Un líder que comunica "esto es lo que hay que hacer" sin transmitir el por qué produce conformidad. Un líder que comunica el propósito con convicción produce conversión.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El propósito central: jóvenes arraigados en principios',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Iglesia ha reconocido que los jóvenes necesitan un espacio propio de aprendizaje, con material diseñado específicamente para su etapa de vida. El mundo en que crecen los jóvenes de 2026 presenta desafíos que no existían en las generaciones anteriores: presión social en redes, acceso inmediato a contenido dañino, relativismo moral extendido. La guía PFJ no es un conjunto de reglas para protegerlos desde afuera — es un conjunto de principios para fortalecerlos desde adentro.',
            },
            {
              type: 'leader_quote',
              quote: 'Queremos que los jóvenes de la Iglesia no solo conozcan las normas. Queremos que entiendan los principios, que los hagan propios, y que puedan actuar con integridad incluso cuando nadie los está mirando. Ese es el objetivo de este material.',
              name: 'Presidencia General de la Iglesia',
              role: 'Comunicación sobre los cambios del programa juvenil, 2026',
            },
            {
              type: 'doctrine_box',
              title: 'El principio detrás de la PFJ',
              body: 'La guía PFJ comienza con una premisa doctrinal: como hijo o hija de Dios, tienes acceso a la revelación personal para guiar tu vida. Cada capítulo aplica ese principio a un área específica de la vida del joven. El cambio de horario dominical no es logístico — es una apuesta de la Iglesia a que los jóvenes, dado el tiempo y el espacio apropiados, pueden internalizarse en principios eternos y hacer de ellos la base de sus decisiones.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Lo que no cambia: la Reunión Sacramental',
          blocks: [
            {
              type: 'paragraph',
              text: 'Es importante que el obispado comunique con claridad lo que NO cambia: la Reunión Sacramental permanece exactamente igual. La estructura, el tiempo, y el propósito de la Reunión Sacramental no se modifican. Los cambios ocurren exclusivamente en la segunda hora del bloque dominical.',
            },
            {
              type: 'key_points',
              title: 'Lo que permanece igual',
              points: [
                'Reunión Sacramental — horario, estructura y duración no cambian',
                'La administración de la Santa Cena sigue siendo en la Reunión Sacramental',
                'Los programas de Primaria para niños menores de 12 años no cambian',
                'Las actividades de semana (Mutual, etc.) no se ven afectadas por este cambio',
                'Los testimonios, llamamiento de maestros y ordenanzas — igual que antes',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Fechas Clave — El Calendario del Obispado',
      intro: {
        romanNumeral: 'III',
        title: 'Las Fechas que el Obispado Debe Conocer',
        paragraphs: [
          'Entre mayo y septiembre de 2026 hay tres momentos que el obispado debe tener marcados. Cada uno requiere una acción específica. No son fechas de referencia — son fechas de responsabilidad.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Las tres fechas del proceso de transición',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: '3 de mayo de 2026',
                  text: 'Inicio del Maratón de Lectura de la PFJ. Los jóvenes del barrio son invitados a leer la guía completa antes del 30 de agosto. El obispado coordina con los presidentes de quórum y líderes de mujeres jóvenes para comunicar la invitación y distribuir los ejemplares.',
                  color: 'blue',
                },
                {
                  label: '30 de agosto de 2026',
                  text: 'Quinto Domingo especial. Reunión única para jóvenes, padres y líderes donde la Iglesia provee videos de instrucción. Es el último domingo antes del inicio oficial. El obispado organiza el evento, coordina el espacio, y gestiona la presentación del material de la Sede.',
                  color: 'gold',
                },
                {
                  label: '6 de septiembre de 2026',
                  text: 'Inicio oficial del nuevo horario dominical. A partir de este domingo, cada semana el barrio opera bajo el nuevo esquema: 25 min Escuela Dominical + 25 min jóvenes PFJ + 25 min adultos Conferencia General.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'paragraph',
              text: 'El obispado tiene una responsabilidad específica en cada una de estas tres fechas: comunicar en mayo, coordinar el 30 de agosto, y asegurar la implementación el 6 de septiembre. Ninguna de estas responsabilidades es delegable completamente — el obispo y sus consejeros deben estar personalmente involucrados en la coordinación de cada momento.',
            },
          ],
        },
        {
          id: 't6',
          title: 'La responsabilidad general del obispado en el cambio',
          blocks: [
            {
              type: 'steps',
              title: 'Pasos que corresponden al obispado',
              steps: [
                'Estudiar personalmente la guía PFJ para poder hablar de ella con autoridad y convicción desde el púlpito',
                'Comunicar el cambio a los padres desde la Reunión Sacramental — antes del 3 de mayo y nuevamente antes del 30 de agosto',
                'Coordinar la distribución de ejemplares físicos de la PFJ a todos los jóvenes del barrio antes del inicio del maratón de lectura',
                'Organizar el evento del Quinto Domingo del 30 de agosto: espacio, tecnología para los videos, y participación de familias',
                'Confirmar con los maestros de jóvenes que tienen el material y la preparación necesaria para iniciar el 6 de septiembre',
                'Atender preguntas y dudas de los miembros durante y después de la Reunión Sacramental',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuál de estas responsabilidades siente que su obispado está mejor preparado para cumplir? ¿Cuál requiere más preparación? ¿Qué acción concreta puede tomar esta semana para avanzar en la más urgente?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Obispado como Comunicadores del Cambio',
      intro: {
        romanNumeral: 'IV',
        title: 'Liderar con Comprensión, No Solo con Anuncios',
        paragraphs: [
          'Un anuncio en la Reunión Sacramental puede informar. Un testimonio desde el púlpito puede transformar. El obispado tiene la oportunidad no solo de anunciar este cambio sino de comunicar por qué les entusiasma, qué han visto en la guía PFJ, y por qué creen que este cambio bendecirá a los jóvenes del barrio.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'La diferencia entre informar y liderar',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los miembros del barrio reciben información de muchas fuentes — la aplicación de la Iglesia, redes sociales, conversaciones con miembros de otros barrios. Lo que no pueden recibir de esas fuentes es la perspectiva personal de su obispo: qué leyó en la guía que le movió espiritualmente, qué espera que este cambio produzca en los jóvenes específicos de su barrio, cómo ve la mano del Señor en este ajuste al programa.',
            },
            {
              type: 'doctrine_box',
              title: 'El principio del testimonio personal en la comunicación',
              body: 'El Presidente Nelson ha enseñado consistentemente que el poder de la comunicación en la Iglesia viene del testimonio, no solo de la información. Cuando el obispo anuncia el cambio del horario dominical en la Reunión Sacramental, no está transmitiendo un memo corporativo — está añadiendo su voz como pastor a la comunicación de un programa diseñado bajo inspiración. Eso requiere que el obispo haya estudiado el material, haya orado sobre él, y hable desde la experiencia espiritual, no solo desde el conocimiento administrativo.',
            },
            {
              type: 'note_prompts',
              prompts: [
                {
                  id: 'np1',
                  question: '¿Qué parte de la guía PFJ le pareció más poderosa cuando la leyó? ¿Qué capítulo desearía haber tenido a los 15 años?',
                },
                {
                  id: 'np2',
                  question: '¿Cómo describiría en 2 frases el propósito del cambio a un padre que no sabe nada sobre él?',
                },
                {
                  id: 'np3',
                  question: '¿Qué joven específico del barrio cree que se beneficiará más de tener este espacio semanal de estudio? ¿Por qué?',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
}
