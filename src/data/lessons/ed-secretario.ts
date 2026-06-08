import type { Lesson } from '@/types/doctrine'

export const edSecretario: Lesson = {
  id: 'ed-secretario',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'ed-lideres',
  title: 'El Secretario de la Escuela Dominical',
  subtitle: 'Coordinación y registros al servicio de la enseñanza',
  description:
    'El secretario de la Escuela Dominical hace posible que las clases ocurran con consistencia: actualiza los registros de clases y maestros, coordina sustitutos cuando un maestro no puede asistir, comunica el material de enseñanza con anticipación, y coordina con el secretario del obispado cuando hay cambios en el horario. Su trabajo es el sistema de soporte que libera al presidente y los consejeros para ejercer liderazgo espiritual.',
  level: 'BÁSICO',
  icon: '📋',
  duration: 25,
  order: 9572,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Registros de Clases y Maestros',
      intro: {
        romanNumeral: 'I',
        title: 'La Información Correcta en el Momento Correcto',
        paragraphs: [
          'Un secretario de Escuela Dominical efectivo mantiene registros que permiten a la presidencia tomar decisiones con información precisa: qué clases existen, quién las enseña, cuándo fue la última vez que ese maestro enseñó, y quién puede sustituirlo. Sin esa información, la presidencia opera a ciegas.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Registro de Clases y Maestros Asignados',
          blocks: [
            {
              type: 'paragraph',
              text: 'El secretario mantiene una lista actualizada de todas las clases de Escuela Dominical del barrio: su nombre, el grupo al que sirve, el maestro principal asignado, y si existe un co-maestro o maestro alternante. Esta lista no es estática — cambia cuando el obispado extiende o libera llamamiento de maestros, cuando el barrio crece y se agregan clases, o cuando las circunstancias de los miembros cambian.',
            },
            {
              type: 'key_points',
              title: 'Información que el secretario mantiene actualizada',
              points: [
                'Nombre y descripción de cada clase de ED (Ven, Sígueme adultos, clase de nuevos miembros, otras)',
                'Nombre del maestro principal y del co-maestro o alternante de cada clase',
                'Fecha desde la que cada maestro está en el llamamiento',
                'Registro de cuándo fue la última clase impartida por cada maestro — útil para la rotación',
                'Lista de personas disponibles y dispuestas a sustituir con aviso corto',
                'Historial de sustituciones — para distribuir equitativamente la carga entre los suplentes disponibles',
              ],
            },
            {
              type: 'paragraph',
              text: 'Este registro puede ser tan simple como una hoja de cálculo o una lista física. Lo que importa no es el formato sino la precisión y la actualización regular. Una lista desactualizada no solo es inútil — puede llevar a la presidencia a tomar decisiones basadas en información incorrecta.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Coordinación de Sustitutos',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los maestros de Escuela Dominical son voluntarios con vidas complejas. Habrá domingos en que no puedan asistir — por enfermedad, viaje, emergencia familiar, o simplemente porque necesitan un descanso. La presidencia de ED que tiene un sistema de sustitución claro y una lista de suplentes disponibles puede responder a esas situaciones sin estrés y sin dejar a una clase sin maestro.',
            },
            {
              type: 'steps',
              title: 'Proceso de gestión de sustitutos',
              steps: [
                'Mantener una lista de al menos 3-5 miembros del barrio que han aceptado sustituir cuando se les avise — idealmente con al menos una semana de anticipación',
                'Cuando un maestro notifica que no puede asistir, el secretario revisa la lista de suplentes disponibles ese domingo',
                'Contactar al suplente con la mayor anticipación posible; nunca el sábado por la noche si puede evitarse',
                'Informar al suplente el capítulo de Ven, Sígueme del domingo, el grupo de la clase y cualquier contexto relevante',
                'Si no hay suplente disponible, escalar al consejero asignado — quien puede facilitar la clase o fusionarla temporalmente con otra',
                'Registrar que se usó a ese suplente para distribuir las peticiones equitativamente en el futuro',
                'Agradecer formalmente al suplente después del domingo — un mensaje breve que reconoce su disposición',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Comunicación con los Maestros',
      intro: {
        romanNumeral: 'II',
        title: 'El Maestro que Llega Preparado',
        paragraphs: [
          'Un maestro de Escuela Dominical que recibe su asignación de material con suficiente anticipación puede preparar una clase significativamente mejor que uno que descubre el domingo en la mañana cuál es el capítulo de Ven, Sígueme. El secretario es quien hace posible esa anticipación.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Comunicación Semanal de Material',
          blocks: [
            {
              type: 'paragraph',
              text: 'El currículo Ven, Sígueme está organizado por meses y por capítulos. El secretario de la Escuela Dominical puede anticipar al comienzo de cada mes cuáles serán los capítulos de cada domingo y comunicar esa información a los maestros con anticipación suficiente — idealmente con dos semanas de margen antes de cada clase.',
            },
            {
              type: 'steps',
              title: 'Proceso de comunicación semanal con los maestros',
              steps: [
                'Al inicio de cada mes, descargar o consultar el plan mensual de Ven, Sígueme para adultos',
                'Preparar un mensaje o correo con el capítulo del mes, las semanas de cada domingo y los recursos adicionales disponibles en la app',
                'Enviar ese mensaje a todos los maestros de ED al comienzo del mes — no domingo a domingo',
                'El jueves o viernes anterior a cada domingo, enviar un recordatorio específico al maestro de ese domingo con el capítulo y una nota de apoyo',
                'Incluir en el recordatorio algún recurso adicional si el presidente o consejero lo ha seleccionado: una cita, un video corto de la biblioteca del evangelio, o una pregunta sugerida',
                'Si un maestro no confirma haber recibido el mensaje, llamarle antes del domingo para asegurarse',
              ],
            },
            {
              type: 'paragraph',
              text: 'Este sistema de comunicación no es control — es servicio. El maestro que recibe su material anticipadamente, que sabe que alguien pensó en él durante la semana, que llega al domingo sabiendo que la presidencia de ED está detrás de él, enseña con más confianza. Y cuando un maestro enseña con confianza, el Espíritu puede actuar con mayor libertad en la clase.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Lista de Suplentes Disponibles',
          blocks: [
            {
              type: 'paragraph',
              text: 'Construir y mantener una lista de suplentes requiere trabajo inicial — pero es una de las inversiones de tiempo más rentables que el secretario puede hacer. Una lista sólida de suplentes transforma una emergencia del sábado por la noche en un problema manejable en lugar de una crisis.',
            },
            {
              type: 'key_points',
              title: 'Cómo construir y mantener la lista de suplentes',
              points: [
                'Identificar en el barrio a miembros que estudian las escrituras regularmente y tienen disposición de servir con aviso corto',
                'Hablar con ellos directamente: "¿estarías dispuesto a sustituir en una clase de ED cuando se necesite? Con una semana de aviso siempre que sea posible"',
                'Registrar su nombre, contacto, y qué domingos del mes tienen restricciones habituales',
                'Incluir variedad: jóvenes adultos, adultos mayores, mujeres y hombres — las clases se benefician de perspectivas diversas',
                'Agradecer a los suplentes cada vez que sirven y actualizar el registro de uso para distribuir las peticiones equitativamente',
                'Revisar la lista cada 6 meses — las circunstancias de las personas cambian',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Coordinación con Otras Organizaciones',
      intro: {
        romanNumeral: 'III',
        title: 'Cuando el Horario Cambia, el Secretario Coordina',
        paragraphs: [
          'No todos los domingos siguen el patrón habitual. Las conferencias de estaca, los quintos domingos, las actividades especiales y los eventos del barrio pueden afectar el horario de la Escuela Dominical. El secretario es el coordinador que asegura que esos cambios sean comunicados y ejecutados sin confusión.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Coordinación con el Secretario del Obispado',
          blocks: [
            {
              type: 'paragraph',
              text: 'El secretario de la Escuela Dominical mantiene comunicación regular con el secretario del obispado. Esa comunicación incluye: conocer con anticipación los domingos del trimestre en que habrá conferencia de estaca (donde no hay clases), los quintos domingos donde el formato cambia, y cualquier evento especial que afecte el horario habitual de la segunda hora.',
            },
            {
              type: 'steps',
              title: 'Proceso de coordinación con el secretario del obispado',
              steps: [
                'Al inicio de cada trimestre, solicitar al secretario del obispado el calendario de domingos especiales del trimestre',
                'Identificar los domingos en que no habrá clases regulares de ED (conferencias de estaca, actividades especiales)',
                'Comunicar a los maestros con anticipación los domingos en que no enseñarán',
                'Para el quinto domingo, coordinar con el consejero asignado para conocer el plan de la presidencia de ED y asegurarse de que los maestros estén informados del cambio',
                'Si hay un evento especial que requiere el espacio habitual de una clase, coordinar alternativas con anticipación',
                'Mantener al presidente de ED informado de todos los cambios de horario — no dejar que se entere el domingo',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Coordinación Semanal de la Escuela Dominical',
          blocks: [
            {
              type: 'paragraph',
              text: 'Más allá de los eventos especiales, hay una coordinación semanal que el secretario realiza para que cada domingo funcione bien: verificar que todos los maestros asignados confirmen su asistencia, que los salones estén disponibles, y que cualquier material especial que un maestro haya solicitado esté disponible.',
            },
            {
              type: 'key_points',
              title: 'Lista de verificación semanal del secretario de ED',
              points: [
                'Jueves — Enviar recordatorio a todos los maestros del próximo domingo con el capítulo de Ven, Sígueme',
                'Viernes — Confirmar que todos los maestros del domingo estén disponibles; activar sustituto si alguno no puede',
                'Sábado — Verificar disponibilidad de salones y cualquier material especial solicitado',
                'Domingo (temprano) — Llegar con suficiente anticipación para verificar que todo esté en orden antes de que lleguen los miembros',
                'Domingo (al terminar) — Recopilar cualquier nota de los maestros sobre necesidades o incidentes',
                'Lunes — Actualizar el registro de asistencia de maestros y cualquier cambio de la semana anterior',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué parte de la coordinación semanal de la Escuela Dominical consume más tiempo o genera más estrés en su barrio actualmente? ¿Qué sistema o proceso podría reducir ese estrés de manera sostenible?',
            },
          ],
        },
      ],
    },
  ],
}
