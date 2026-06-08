import type { Lesson } from '@/types/doctrine'

export const mjConsejeras: Lesson = {
  id: 'mj-consejeras',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'mj-lideres',
  title: 'Las Consejeras de las Mujeres Jóvenes',
  subtitle: 'Asignadas a clases, actividades y bienestar individual',
  description:
    'Las consejeras de Mujeres Jóvenes no son asistentes administrativas de la presidenta — son co-ministras con asignaciones específicas. Esta lección define qué significa ser consejera asignada a un grupo de edad, cómo dividir responsabilidades sin microgestionar, y por qué la presencia constante en la vida de las jóvenes es el corazón del llamamiento.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 25,
  order: 9541,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Asignaciones por Clase — Conocer a "Tus" Jóvenes',
      intro: {
        romanNumeral: 'I',
        title: 'No Supervisora General, Sino Pastora Específica',
        paragraphs: [
          'En muchos barrios las consejeras de MJ son asignadas a grupos de edad específicos. Esa asignación no es administrativa — es pastoral. Significa que una consejera tiene responsabilidad directa por las jóvenes de ese grupo: conocerlas, ministrarlas, y reportar su bienestar a la presidenta.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Significa Ser Asignada a un Grupo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Manual General de la Iglesia (capítulo 11) establece que la presidenta de MJ puede asignar a cada consejera responsabilidades específicas, incluyendo supervisar y ministrar a un grupo de edad determinado. Cuando una consejera es asignada a las Edificadoras de Fe (12–13 años), por ejemplo, esas jóvenes no son solo un nombre en el directorio — son su responsabilidad personal. Ella es quien las conoce, quien las llama cuando se ausentan, quien habla con sus padres, y quien reporta su situación en la reunión de presidencia.',
            },
            {
              type: 'doctrine_box',
              title: 'La consejera como segundo testigo del ministerio de la presidenta',
              body: 'El principio de dos testigos no es solo legal — es ministerial. Cuando la presidenta no puede estar presente en un evento, en una conversación difícil, o en el seguimiento de una joven específica, su consejera asignada lleva esa responsabilidad. Eso requiere que la consejera conozca la visión de la presidenta para cada joven, no solo las tareas administrativas pendientes. Una consejera bien orientada puede ministrar en el nombre de la presidenta porque comparte su corazón por las jóvenes.',
            },
            {
              type: 'compare_grid',
              title: 'Consejera asignada a una clase vs. supervisora general',
              rows: [
                { label: 'Conocimiento de las jóvenes', a: 'Conoce a cada joven de su grupo por nombre, familia, situación y necesidades', b: 'Conoce el grupo en general pero sin profundidad individual' },
                { label: 'Seguimiento de ausencias', a: 'Contacta directamente a la joven ausente al segundo domingo', b: 'Asume que alguien más lo hará' },
                { label: 'Relación con los padres', a: 'Tiene contacto regular con los padres del grupo asignado', b: 'Interactúa con los padres solo en eventos formales' },
                { label: 'Reporte en presidencia', a: 'Presenta el estado de cada joven de su grupo en cada reunión', b: 'Reporta cuando hay algo urgente o notable' },
                { label: 'Efecto en las jóvenes', a: 'Las jóvenes sienten que tienen una líder específica que las ve', b: 'Las jóvenes perciben el liderazgo como distante o genérico' },
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Los Tres Grupos y sus Diferencias Pastorales',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cada grupo de edad tiene necesidades y desafíos pastorales distintos. Las Edificadoras de Fe (12–13 años) están en la transición de la infancia a la adolescencia — necesitan ser acogidas en la organización, aprender a pertenecer, y encontrar su lugar. Las Mensajeras de Esperanza (14–15 años) enfrentan la presión social más intensa de su adolescencia — necesitan anclas de identidad y adultos que no las juzguen. Las Guardianas de Luz (16–17 años) están a un paso de la vida adulta — necesitan orientación práctica, preparación para el templo, y conversaciones sobre su futuro.',
            },
            {
              type: 'key_points',
              title: 'Lo que hace efectiva a una consejera por grupo',
              points: [
                'Edificadoras de Fe: paciencia con la timidez, bienvenida activa, nunca asumir que ya se sienten parte del grupo',
                'Mensajeras de Esperanza: presencia no invasiva, disponibilidad para conversaciones difíciles, resistencia al juicio',
                'Guardianas de Luz: conversaciones de adulto a adulto, respeto por su creciente autonomía, orientación hacia el templo y la misión',
                'En todos los grupos: coherencia — las jóvenes notan cuando una líder aparece solo cuando conviene',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es el grupo que te fue asignado? ¿Cuáles son las dos o tres jóvenes de ese grupo a quienes conoces mejor? ¿Cuáles son las que menos conoces? ¿Qué harías esta semana para cerrar esa brecha?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'División de Responsabilidades — Sin Microgestión',
      intro: {
        romanNumeral: 'II',
        title: 'Primera y Segunda Consejera — Complementarias, No Paralelas',
        paragraphs: [
          'La presidenta puede asignar a la primera consejera la supervisión de enseñanza y clases, y a la segunda consejera la coordinación de actividades y servicio. Esa división no es rígida — pero la claridad de roles evita que las cosas se pierdan entre las grietas de "alguien lo hará".',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Primera Consejera — Enseñanza y Formación',
          blocks: [
            {
              type: 'paragraph',
              text: 'La primera consejera puede tener como enfoque la calidad de la enseñanza en las clases del domingo. Eso incluye asegurarse de que las maestras estén preparadas, que el material del programa sea enseñado con fidelidad y relevancia, y que las jóvenes estén siendo invitadas a enseñar regularmente. También puede coordinar con la secretaria para revisar qué jóvenes han estado ausentes más tiempo y necesitan una visita ministerial.',
            },
            {
              type: 'key_points',
              title: 'Áreas de enfoque para la primera consejera',
              points: [
                'Coordinación con las maestras de clase — preparación y apoyo, no inspección',
                'Asegurar que las jóvenes tengan oportunidades regulares de enseñar y compartir',
                'Seguimiento ministerial de jóvenes con ausencias recurrentes en su grupo asignado',
                'Participar activamente en las clases — no solo observar desde el fondo',
                'Reportar la calidad del aprendizaje espiritual en las reuniones de presidencia',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Segunda Consejera — Actividades y Servicio',
          blocks: [
            {
              type: 'paragraph',
              text: 'La segunda consejera puede tener como enfoque las actividades y el servicio de la organización. Eso significa planificar el calendario de actividades con anticipación, coordinar con los padres y la secretaria los permisos y logística necesarios, y asegurarse de que las actividades tengan un propósito espiritual claro — no solo entretenimiento social. El Manual General es específico: las actividades deben ser aprobadas por el obispado, deben ser seguras, y deben incluir tanto a jóvenes activas como a las que están en proceso de reactivación.',
            },
            {
              type: 'paragraph',
              text: 'Una consejera que solo gestiona logística pero no ministra personalmente en las actividades está cumpliendo solo la mitad de su responsabilidad. La actividad es el contexto — el ministerio personal es lo que ocurre dentro de ese contexto.',
            },
            {
              type: 'steps',
              title: 'Cómo la presidenta asigna sin microgestionar',
              steps: [
                'Define el resultado esperado claramente — no el proceso, sino el objetivo',
                'Da la asignación con confianza y establece una fecha de reporte',
                'Ofrece recursos y apoyo si la consejera los pide — no antes',
                'En la reunión de presidencia, revisa el progreso sin interrogar',
                'Celebra los logros de las consejeras en público — ante las jóvenes y los padres',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Presencia Constante — El Ministerio Que No Se Ve',
      intro: {
        romanNumeral: 'III',
        title: 'La Consejera que Solo Aparece el Domingo',
        paragraphs: [
          'Una consejera que solo se relaciona con las jóvenes los domingos nunca ganará su corazón. No porque haga algo malo — sino porque las jóvenes viven el 85% de su vida de lunes a sábado. La consejera que aparece allí también es la que importa.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Presencia en el Mundo de las Jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'Asistir a un evento escolar, a un partido deportivo, a una presentación artística de una joven de tu grupo es un acto ministerial poderoso. No requiere más de una hora — pero comunica a esa joven algo que ningún discurso puede decir: "eres importante para mí más allá del programa." Ese mensaje puede sostener la fe de una adolescente durante momentos que los adultos nunca llegan a ver.',
            },
            {
              type: 'key_points',
              title: 'Formas concretas de presencia constante',
              points: [
                'Mensajes de texto personales y específicos — no mensajes grupales genéricos',
                'Asistir a eventos escolares, deportivos o artísticos de las jóvenes de tu grupo',
                'Recordar y celebrar cumpleaños, exámenes importantes, y logros personales',
                'Estar disponible para una conversación cuando una joven la busca — no solo en horario de clase',
                'Orar por cada joven de tu grupo por nombre al menos una vez por semana',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Las jóvenes no recuerdan las lecciones perfectas. Recuerdan a las personas que aparecieron cuando no estaban obligadas a aparecer.',
              name: 'Presidenta General de Mujeres Jóvenes',
              role: 'Orientación a líderes de barrio, 2025',
            },
          ],
        },
        {
          id: 't6',
          title: 'El Seguimiento — Textos, Llamadas y Visitas',
          blocks: [
            {
              type: 'paragraph',
              text: 'El seguimiento ministerial no requiere un evento — requiere intención. Un mensaje de texto el miércoles que diga "estaba pensando en ti y quería saber cómo estás" puede ser exactamente lo que una joven necesita en ese momento. No es una técnica — es una práctica de cuidado genuino que se repite hasta convertirse en parte de la identidad de la consejera.',
            },
            {
              type: 'steps',
              title: 'Protocolo de seguimiento semanal para una consejera',
              steps: [
                'El domingo en la tarde: revisa quién estuvo ausente en tu grupo asignado',
                'El lunes o martes: envía un mensaje personal a cada joven ausente — sin sermón, solo presencia',
                'El miércoles o jueves: un mensaje de aliento a alguna joven que está pasando por algo difícil',
                'Si una joven no ha respondido en dos semanas: coordina con la presidenta para hacer una visita en persona',
                'En la reunión de presidencia: reporta el estado de cada joven y lo que observaste esta semana',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuántas de las jóvenes de tu grupo asignado contactaste de manera personal (no en grupo) en las últimas dos semanas? ¿Qué te impedirá hacerlo con todas esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
