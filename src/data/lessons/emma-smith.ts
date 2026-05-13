import type { Lesson } from '@/types/doctrine'

export const emmaSmith: Lesson = {
  id: 'emma-smith',
  moduleId: 'personajes-escrituras',
  title: 'Emma Smith — La Elegida de Dios',
  subtitle: 'La mujer que amó al profeta y pagó el precio más alto',
  description: 'Dios llamó a Emma Smith "elegida y preciosa." Fue escriba de la traducción, primera presidenta de la Sociedad de Socorro, y custodió la primera selección de himnos. Enterró cuatro hijos. Sobrevivió al martirio de su esposo. Su vida es la historia de una fe forjada en el fuego de la pérdida.',
  level: 'INTERMEDIO',
  icon: '🌺',
  duration: 60,
  order: 81,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: '"Elegida y Preciosa"',
      intro: { romanNumeral: 'I', title: 'DyC 25 — La Revelación de Emma', paragraphs: ['La única revelación personal a una mujer en DyC'] },
      topics: [
        {
          id: 't1',
          title: 'El llamamiento específico de Emma',
          blocks: [
            { type: 'highlight_verse', reference: 'DyC 25:3', text: 'He aquí, y oyelo, tú eres un alma elegida y preciosa para mí, porque así lo he determinado; y tus días serán gastados en su servicio, en la obra de la iglesia, y no te aflijarás, porque Dios te ampara.' },
            { type: 'paragraph', text: 'DyC 25 es la única revelación en el canon dirigida personalmente a una mujer. Emma recibió instrucciones directas: ser ayudante de José, escribir y aprender, seleccionar himnos para la Iglesia, y no afligirse en las pruebas. El versículo 14 es la instrucción más exigente: "Continúa en el espíritu de mansedumbre... guárdate de soberbia." Emma enfrentaría pruebas que pondrían a prueba exactamente esas virtudes.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Escriba de la Traducción',
      intro: { romanNumeral: 'II', title: '1828-1829 — El Proceso que Emma Presenció', paragraphs: ['La testigo más cercana de la traducción'] },
      topics: [
        {
          id: 't2',
          title: 'El testimonio de la escriba',
          blocks: [
            { type: 'paragraph', text: 'Emma fue una de las escribas principales del Libro de Mormón. En una entrevista de 1879 describió el proceso: "José Smith... no tenía ante él ni manuscritos ni libros mientras dictaba, y cuando empezaba a dictar cada mañana, comenzaba donde había dejado la noche anterior, sin que yo le leyera lo que habíamos recogido el día anterior." También testificó: "Fui testigo cercana... si el libro fuera mentira, habría sabido que lo era." Su testimonio es el de alguien que no podía ser engañada por el proceso.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Himnos y la Sociedad de Socorro',
      intro: { romanNumeral: 'III', title: 'Las Dos Tareas que Definieron su Ministerio', paragraphs: ['La música sagrada y la organización de las mujeres'] },
      topics: [
        {
          id: 't3',
          title: 'Fundadora de dos instituciones',
          blocks: [
            { type: 'paragraph', text: 'DyC 25:11 asignó a Emma "hacer una selección de himnos sagrados que sea aceptable a mí para mi iglesia." La primera himnología de la Iglesia, publicada en 1835, fue compilada por Emma. El 17 de marzo de 1842, José Smith organizó la Sociedad de Socorro con Emma como primera presidenta. En el discurso fundacional, José dijo que la organizaba "de acuerdo con el orden del sacerdocio." Emma fue la primera presidenta de una organización que hoy tiene millones de miembros.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Costo de Ser Emma Smith',
      intro: { romanNumeral: 'IV', title: 'La Fe en el Fuego', paragraphs: ['Cuatro hijos enterrados, un marido martirizado'] },
      topics: [
        {
          id: 't4',
          title: 'La fe que sobrevivió lo indecible',
          blocks: [
            { type: 'paragraph', text: 'Emma enterró cuatro hijos. Fue expulsada de Missouri en el invierno con sus hijos mientras José estaba en prisión. Vio a su esposo morir en Carthage. Nunca emigró a Utah con el resto de los Santos y sus razones fueron complejas y dolorosas. DyC 122:7 — la revelación a José en Liberty Jail — podría aplicarse igualmente a Emma: "Todo esto te dará experiencia y será para tu bien." Su historia no tiene final fácil. Tiene profundidad.' },
            { type: 'reflection', prompt: '¿Qué te enseña la historia de Emma sobre lo que Dios puede pedir a las personas que ama? ¿Cómo reconcilias el llamamiento "elegida y preciosa" con la magnitud de lo que Emma sufrió?' },
          ],
        },
      ],
    },
  ],
}
