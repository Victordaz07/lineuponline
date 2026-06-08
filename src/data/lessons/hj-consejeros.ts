import type { Lesson } from '@/types/doctrine'

export const hjConsejeros: Lesson = {
  id: 'hj-consejeros',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'hj-lideres',
  title: 'Los Consejeros de los Hombres Jóvenes',
  subtitle: 'Mentores, no supervisores — presencia que cambia vidas',
  description:
    'Los consejeros de Hombres Jóvenes son los adultos que los jóvenes realmente ven: en las actividades, en los campamentos, en el partido del sábado, en la conversación después de clase. Esta lección trata sobre el arte de la mentoría — qué hace que un consejero cambie la trayectoria de un joven, y qué hace que simplemente ocupe un espacio.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 25,
  order: 9551,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Consejero Como Mentor — No Como Supervisor',
      intro: {
        romanNumeral: 'I',
        title: 'La Diferencia Entre Estar Presente y Estar Ahí',
        paragraphs: [
          'Hay líderes que asisten a todas las actividades y no impactan a ningún joven. Y hay líderes que aparecen una tarde de martes sin razón especial, se sientan junto a un joven que está callado, y cambian el rumbo de su vida. La diferencia no es el puesto — es la intención.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Significa Ser Mentor de un Joven',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un mentor no es un instructor que transmite información. Es un adulto que invierte en la vida de un joven de manera intencional y continua. En el contexto de Hombres Jóvenes, eso significa conocer a los jóvenes de tu grupo asignado más allá del edificio de la Iglesia: saber en qué escuela está, qué deporte practica, si tiene un trabajo de medio tiempo, cómo es la situación en su hogar. Esa información no se obtiene preguntando un cuestionario — se obtiene pasando tiempo juntos.',
            },
            {
              type: 'doctrine_box',
              title: 'El rol de los mentores en el discipulado de los jóvenes',
              body: 'El Manual General enseña que los asesores de cuórum — que son los consejeros de HJ en su rol específico — deben trabajar con los presidentes de cuórum para ayudar a cada joven a crecer en el evangelio. Ese "ayudar a crecer" no ocurre en reuniones formales. Ocurre en conversaciones mientras se levanta equipo después de un partido, mientras se cocina en un campamento, mientras se espera el autobús después de una actividad. Los momentos no planificados son con frecuencia los más formativos.',
            },
            {
              type: 'key_points',
              title: 'Qué hace efectiva la mentoría de un joven',
              points: [
                'Conocimiento genuino: saber su nombre, su historia, sus intereses, sus luchas',
                'Presencia constante: aparecer en su mundo, no solo en el edificio de la Iglesia',
                'Escucha antes que consejo: los jóvenes se cierran ante quienes responden antes de escuchar',
                'Honestidad sobre la propia vida: compartir experiencias reales, incluyendo dificultades superadas',
                'Seguimiento sin asfixia: interesarse sin convertirse en una presencia invasiva',
                'Consistencia en el tiempo: el impacto de la mentoría se acumula con los meses, no con una sola conversación',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Estar en el Mundo de los Jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un consejero que solo conoce a los jóvenes en el contexto de las actividades de la Iglesia tiene una visión parcial y distorsionada de ellos. Ver a un joven en su campo de fútbol, o en la tienda donde trabaja, o en una presentación de su banda de rock — eso revela partes de su carácter y de su vida que el domingo nunca mostraría. Y ese conocimiento más completo permite un ministerio más real.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué adulto cambió tu vida cuando eras joven? ¿Qué hizo diferente? ¿Cómo se aseguraba de estar presente en tu mundo, y no solo en el espacio donde se suponía que debía estar? ¿Qué de eso puedes replicar con los jóvenes de tu grupo?',
            },
            {
              type: 'paragraph',
              text: 'La presencia en el mundo de los jóvenes requiere tiempo y voluntad. Nadie puede asistir a todos los eventos de todos los jóvenes de un grupo grande — pero un consejero puede deliberadamente asistir a un evento de cada joven de su grupo asignado al menos una vez al año. Ese esfuerzo no pasa desapercibido. Los jóvenes guardan esos momentos en la memoria durante décadas.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Asignaciones — División de Responsabilidades',
      intro: {
        romanNumeral: 'II',
        title: 'Primer y Segundo Consejero — Complementarios',
        paragraphs: [
          'El presidente de HJ puede asignar a cada consejero la responsabilidad de trabajar más de cerca con cuórums específicos. Esta división ayuda a que cada joven tenga un adulto identificable que lo conoce y lo cuida — y evita que algunos jóvenes caigan entre las grietas del sistema.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'División por Cuórums — Diáconos, Maestros y Presbíteros',
          blocks: [
            {
              type: 'paragraph',
              text: 'El primer consejero puede trabajar más de cerca con los cuórums de diáconos y maestros (12–15 años). El segundo consejero puede tener más contacto con el cuórum de presbíteros (16–17 años). Esa división no es absoluta — ambos consejeros participan en todas las actividades — pero establece una responsabilidad específica de seguimiento pastoral por grupo de edad.',
            },
            {
              type: 'compare_grid',
              title: 'División de enfoque por cuórum',
              rows: [
                { label: 'Cuórum enfocado', a: 'Primer Consejero: Diáconos (12–13) y Maestros (14–15)', b: 'Segundo Consejero: Presbíteros (16–17)' },
                { label: 'Enfoque pastoral', a: 'Acogida, identidad inicial como portadores del sacerdocio, permanencia en la Iglesia', b: 'Preparación para la misión, templo, liderazgo, transición a adulto joven' },
                { label: 'Tipo de conversación', a: 'Preguntas de identidad, pertenencia, y por qué el sacerdocio importa', b: 'Decisiones de futuro, misión, carrera, matrimonio, convenios' },
                { label: 'Riesgo principal a atender', a: 'Abandono silencioso — jóvenes que dejan de venir sin decirlo', b: 'Falta de preparación real para la misión y la vida de adulto' },
              ],
            },
            {
              type: 'paragraph',
              text: 'Los asesores de cada cuórum (llamados por el obispo para trabajar directamente con el presidente de cuórum) son distintos de los consejeros de HJ. Un consejero de HJ puede o no ser también asesor de un cuórum específico. Lo que sí es claro es que el consejero de HJ tiene responsabilidad de coordinación con los asesores y de reportar el estado de los jóvenes a la presidencia de HJ.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Coordinación Sin Perder el Hilo',
          blocks: [
            {
              type: 'paragraph',
              text: 'La división de responsabilidades entre los consejeros solo funciona si existe comunicación fluida entre ellos. Un joven que cruza de los Maestros a los Presbíteros no debería sentir que nadie lo conoce en el nuevo cuórum. La transición entre cuórums es un momento de riesgo — algunos jóvenes se pierden precisamente en ese cambio. Un buen traspaso entre consejeros puede evitarlo.',
            },
            {
              type: 'steps',
              title: 'Traspaso de un joven entre cuórums',
              steps: [
                'Antes del cumpleaños que marca la transición: el consejero del cuórum origen informa al consejero del cuórum destino',
                'Incluir en el traspaso: nombre, situación familiar, estado de actividad, relaciones en el grupo, y cualquier necesidad especial',
                'El consejero del cuórum destino hace un contacto personal con el joven en sus primeras dos semanas',
                'En la reunión de presidencia más cercana: presentar al joven que ha hecho la transición y confirmar que tiene cobertura pastoral',
                'Los primeros tres meses en el nuevo cuórum son cruciales — seguimiento mensual mínimo',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Ejemplo de Vida — Lo Que los Jóvenes Realmente Ven',
      intro: {
        romanNumeral: 'III',
        title: 'Más Allá de lo Que Se Dice',
        paragraphs: [
          'Los jóvenes tienen un radar muy preciso para detectar la autenticidad. Pueden distinguir al adulto que habla del evangelio de uno que vive el evangelio. Y aprenden más de lo que ven que de cualquier lección que escuchen. El consejero que vive con integridad visible forma discípulos sin saberlo.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Compartir Testimonio en la Clase — Con Vulnerabilidad Real',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un consejero que solo facilita la clase de otro pero nunca comparte su propio testimonio es un recurso desperdiciado. Los jóvenes necesitan ver a adultos reales — con trabajos, matrimonios, dudas superadas, y problemas que no se resuelven fácilmente — hablar de su fe con honestidad. Eso no requiere una presentación perfecta. Requiere honestidad.',
            },
            {
              type: 'key_points',
              title: 'Cómo compartir testimonio en clase de manera efectiva',
              points: [
                'Conecta tu experiencia personal directamente con el principio que se está enseñando',
                'Incluye la dificultad — no solo la resolución gloriosa; el proceso importa más que el resultado',
                'Sé breve — dos minutos de testimonio honesto valen más que veinte minutos de discurso',
                'Haz preguntas después de compartir — abre la conversación, no la cierres',
                'Comparte con permiso si involucras a otras personas o experiencias familiares',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Servir Con los Jóvenes — No Solo Supervisarlos',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hay una diferencia fundamental entre un consejero que supervisa cómo los jóvenes hacen el servicio y un consejero que trabaja junto a ellos. Cuando un adulto pone su espalda y sus manos en el mismo trabajo que un adolescente, está comunicando algo poderoso: "el servicio no es para ustedes — es para todos nosotros." Esa igualdad en el servicio rompe barreras que ningún discurso puede romper.',
            },
            {
              type: 'leader_quote',
              quote: 'He visto a consejeros transformar a jóvenes sin decir una sola palabra de doctrina. Solo apareciendo al partido, levantando el equipo cuando todos se habían ido, y diciéndole al joven al salir: "Buen juego. Nos vemos el domingo." Ese adulto pasó a ser parte de su vida de maneras que él nunca imaginó.',
              name: 'Obispo de barrio',
              role: 'Reflexión compartida en capacitación de líderes, 2025',
            },
            {
              type: 'reflection',
              prompt: '¿En qué actividad fuera de la Iglesia de uno de los jóvenes de tu grupo asististe en los últimos tres meses? ¿Hay alguno a quien nunca has visto fuera del contexto del programa? ¿Qué pasaría si eso cambiara esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
