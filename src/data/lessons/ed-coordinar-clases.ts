import type { Lesson } from '@/types/doctrine'

export const edCoorinarClases: Lesson = {
  id: 'ed-coordinar-clases',
  moduleId: 'capacitacion-liderazgo',
  title: 'Coordinar las Clases de Jóvenes',
  subtitle: 'El rol de la Escuela Dominical con HJ, MJ y el bloque PFJ',
  description:
    'La clase PFJ de los jóvenes no es responsabilidad de la Escuela Dominical — pero sí lo es crear las condiciones para que ocurra. Esta lección define con precisión qué corresponde a la ED y qué a cada organización, para evitar confusiones el primer domingo de septiembre.',
  level: 'INTERMEDIO',
  icon: '🤝',
  duration: 15,
  order: 9411,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Quién Es Responsable de Qué',
      intro: {
        romanNumeral: 'I',
        title: 'Líneas Claras Evitan Fricciones',
        paragraphs: [
          'Uno de los errores más comunes en los cambios de programa es que nadie sabe con exactitud dónde termina su responsabilidad y dónde empieza la del vecino. Para el 6 de septiembre, la Escuela Dominical y las organizaciones de jóvenes deben tener eso resuelto antes de que llegue el día.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Mapa de Responsabilidades',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Escuela Dominical — SÍ es su responsabilidad',
                points: [
                  'El bloque de 25 min de Ven, Sígueme para todos (adultos + jóvenes juntos)',
                  'Asignar y preparar maestros de ED para cada domingo',
                  'El horario general de los bloques dominicales',
                  'La logística del quinto domingo del 30 de agosto',
                  'Coordinar espacios físicos con HJ y MJ',
                ],
              },
              right: {
                label: 'Escuela Dominical — NO es su responsabilidad',
                points: [
                  'El contenido de la clase PFJ de los jóvenes',
                  'Quién enseña la clase de HJ o MJ',
                  'El plan mensual de la guía PFJ',
                  'La asistencia o disciplina dentro de las clases de jóvenes',
                  'La relación de los jóvenes con sus líderes de organización',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La Escuela Dominical es la arquitecta del tiempo — no de los contenidos de otras organizaciones. Su misión es garantizar que cada bloque tenga espacio, tiempo y maestro. Lo que pasa dentro de la clase de HJ o MJ es responsabilidad de esas organizaciones bajo la dirección del Obispado.',
            },
            {
              type: 'doctrine_box',
              title: 'El flujo del bloque dominical en concreto',
              body: 'Después de la reunión sacramental: (1) Todos — adultos, jóvenes y niños mayores — van a Escuela Dominical 25 min (Ven, Sígueme). (2) Los niños van a Primaria (55 min). (3) Simultáneamente: jóvenes 12–17 van a su clase PFJ de 25 min; adultos 18+ van a SRS o Cuórum de Élderes 25 min. La ED gestiona el punto (1). El punto (3) lo gestionan las organizaciones respectivas.',
            },
          ],
        },
        {
          id: 't2',
          title: 'La Reunión de Coordinación Pre-Septiembre',
          blocks: [
            {
              type: 'paragraph',
              text: 'Antes del 6 de septiembre, la Presidencia de la Escuela Dominical debe reunirse al menos una vez con los presidentes de HJ y MJ para acordar: espacios físicos, horarios de salida de sacramental, y a quién preguntarle qué. Esta reunión no la convoca el Obispado automáticamente — la ED debe pedirla.',
            },
            {
              type: 'steps',
              title: 'Agenda para la reunión de coordinación',
              steps: [
                'Verificar el horario exacto: ¿a qué minuto termina sacramental? ¿cuánto tiempo de transición hay?',
                'Asignar salones: ¿cuál usa ED, cuál HJ, cuál MJ, cuál SRS/Élderes?',
                'Acordar si los jóvenes pasan de ED directamente a su clase o tienen descanso',
                'Confirmar quién recibe a los jóvenes en la puerta del salón el primer domingo',
                'Resolver el caso especial: ¿qué pasa si una joven de 17 cumple 18 en enero? ¿ya no va al bloque PFJ?',
              ],
            },
            {
              type: 'key_points',
              points: [
                'Los jóvenes que cumplen 18 en enero pasan a adultos — ya no al bloque PFJ',
                'Si el barrio es muy pequeño, se puede combinar HJ + MJ en la clase PFJ',
                'La Primaria no cambia — sus 55 min siguen igual, solo cambia el orden relativo',
                'La ED no necesita saber el contenido de la clase PFJ — solo el espacio y el tiempo',
                'Si hay conflicto de salones, la ED escalat al Obispado — no lo resuelve unilateralmente',
              ],
            },
          ],
        },
        {
          id: 't3',
          title: 'El Primer Domingo — Cómo Que Todo Fluya',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 6 de septiembre, el mayor riesgo no es doctrinal — es logístico. Los miembros no sabrán a dónde ir, los jóvenes se quedarán parados en el pasillo, alguien llegará tarde al salón equivocado. La ED puede prevenir el 80% de eso con dos acciones simples.',
            },
            {
              type: 'steps',
              title: 'Las dos acciones que previenen el caos del primer domingo',
              steps: [
                'Coloca señalización física en la capilla el 6 de septiembre: flechas o letreros que indiquen cuál salón es de Escuela Dominical, cuál de HJ/MJ, cuál de SRS/Élderes',
                'Ten a alguien de la Presidencia de ED en el pasillo durante la transición — no para controlar, sino para orientar con una sonrisa',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Tu barrio ya sabe quién va a qué salón el 6 de septiembre? Si no, ¿qué puedes hacer tú esta semana — sin esperar al Obispado — para que esa información llegue a las personas correctas?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: 'Dibuja o escribe el flujo de personas en tu capilla el 6 de septiembre: ¿de dónde salen, hacia dónde van, cuánto tiempo tienen para transicionar?' },
                { id: 'np2', question: '¿Qué pregunta sobre el nuevo horario te ha hecho alguien del barrio que todavía no tienes respuesta? Escríbela y busca la respuesta antes del 30 de agosto.' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
