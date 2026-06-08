import type { Lesson } from '@/types/doctrine'

export const mjSecretaria: Lesson = {
  id: 'mj-secretaria',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'mj-lideres',
  title: 'La Secretaria de las Mujeres Jóvenes',
  subtitle: 'Organización al servicio de cada joven',
  description:
    'La secretaria de Mujeres Jóvenes no es la que toma apuntes en las reuniones — es la guardiana de la información pastoral del grupo. Sus registros permiten que la presidenta y las consejeras ministren con precisión. Esta lección explica qué registra, cómo usa esa información para el bien de las jóvenes, y cómo reporta al obispado de manera útil y confidencial.',
  level: 'BÁSICO',
  icon: '📋',
  duration: 25,
  order: 9542,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Registros Vitales — La Información Que Habilita el Ministerio',
      intro: {
        romanNumeral: 'I',
        title: 'Sin Datos Precisos, No Hay Ministerio Preciso',
        paragraphs: [
          'Una presidencia de MJ que no sabe quién estuvo ausente el domingo pasado, quién cumple años este mes, o quién acaba de mudarse al barrio no puede ministrar con efectividad. El trabajo de la secretaria convierte esa información en herramienta pastoral.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Directorio Actualizado de las Jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El directorio de MJ no es solo una lista de nombres — es el mapa pastoral del grupo. Debe incluir, para cada joven: nombre completo, fecha de nacimiento, grupo de edad asignado (Edificadoras, Mensajeras o Guardianas), nombres de los padres o tutores, número de teléfono de contacto, y cualquier nota pastoral relevante como situación familiar especial, necesidades de transporte, o períodos de ausencia prolongada.',
            },
            {
              type: 'key_points',
              title: 'Qué debe incluir el directorio de MJ',
              points: [
                'Nombre completo y fecha de nacimiento de cada joven',
                'Grupo de edad asignado y maestra responsable',
                'Nombre y contacto de los padres o tutores',
                'Estado de actividad: activa, inactiva, en transición, recién mudada',
                'Notas pastorales confidenciales relevantes para el ministerio de la presidencia',
                'Próximas fechas importantes: cumpleaños, graduaciones, viajes, transición a Relief Society',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Confidencialidad en los registros pastorales',
              body: 'La información que aparece en el directorio de MJ — especialmente las notas sobre situaciones familiares difíciles, salud mental, o inactividad — es confidencial. Solo la presidenta y las consejeras tienen acceso a esos detalles. La secretaria no comparte esa información con personas fuera de la presidencia sin autorización de la presidenta. Esa confidencialidad no es burocracia — es el respeto que cada joven merece como persona.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Registro de Asistencia y Seguimiento de Ausencias',
          blocks: [
            {
              type: 'paragraph',
              text: 'El registro de asistencia semanal no es un dato estadístico — es una herramienta ministerial. Cuando la secretaria registra quién estuvo presente y quién estuvo ausente cada domingo, le da a la presidenta y a las consejeras la información que necesitan para actuar: saber que una joven lleva tres domingos ausente es el primer paso para ir a buscarla.',
            },
            {
              type: 'steps',
              title: 'Proceso semanal de asistencia y seguimiento',
              steps: [
                'Registro durante la clase del domingo — nombralmente, no solo contar cabezas',
                'Al terminar el bloque dominical: identificar a cada joven ausente y compartirlo con la consejera asignada a su grupo',
                'Lunes: la secretaria envía la lista de ausentes a la presidenta con cualquier contexto conocido',
                'Si una joven lleva dos domingos ausentes: la consejera asignada la contacta directamente',
                'Si lleva más de un mes ausente sin causa conocida: la presidenta informa al obispado en el consejo de barrio',
                'Registrar el resultado del seguimiento — ¿se contactó? ¿cuál fue la respuesta?',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Tienes un sistema actual para registrar asistencia y hacer seguimiento? ¿Quién sabe ahora mismo qué jóvenes han estado ausentes más de dos semanas? ¿Qué cambiarías para que esa información llegue a quien puede actuar?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Actividades, Presupuesto y Comunicación con Padres',
      intro: {
        romanNumeral: 'II',
        title: 'La Logística al Servicio del Ministerio',
        paragraphs: [
          'La secretaria no solo registra lo que ya ocurrió — también coordina lo que está por ocurrir. El calendario de actividades, el presupuesto de MJ, y la comunicación con los padres son responsabilidades que recaen en este llamamiento y que, cuando se ejercen bien, liberan a la presidenta y a las consejeras para ministrar.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Calendario de Actividades y el Presupuesto',
          blocks: [
            {
              type: 'paragraph',
              text: 'El calendario anual de actividades debe ser aprobado por el obispado. La secretaria puede ser quien coordine su construcción al inicio del año: recopilando propuestas de las consejeras y maestras, verificando que no haya conflictos con el calendario del barrio, y presentando el plan consolidado al obispo para aprobación. Ese proceso estructurado evita la improvisación de último momento que genera caos y desgaste en los líderes.',
            },
            {
              type: 'key_points',
              title: 'Planificación del calendario de actividades',
              points: [
                'Construir el calendario anual en enero o al inicio del año eclesiástico',
                'Cada actividad debe tener: fecha, responsable, objetivo espiritual, presupuesto estimado',
                'Presentar el calendario consolidado al obispado para aprobación antes de comunicarlo a los padres',
                'El presupuesto de MJ es administrado por el barrio — la secretaria gestiona las solicitudes y registra los gastos',
                'Toda actividad con costo para los padres debe comunicarse con al menos tres semanas de anticipación',
              ],
            },
            {
              type: 'paragraph',
              text: 'El presupuesto de MJ es asignado por el barrio según las necesidades del año. La secretaria puede ayudar a la presidenta a hacer un seguimiento responsable de ese presupuesto: registrando gastos, solicitando reembolsos a tiempo, y verificando que cada actividad esté dentro del presupuesto aprobado. Una organización que no administra bien su presupuesto pierde credibilidad ante el obispado para pedir más recursos.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Comunicación con los Padres',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los padres no tienen por qué descubrir la información sobre las actividades de sus hijas por accidente o a último momento. La secretaria puede establecer un sistema de comunicación regular — mensual o quincenal — que informe a los padres sobre el calendario, los materiales necesarios, y cualquier novedad de la organización. Un padre bien informado es un aliado; un padre sorprendido es una queja.',
            },
            {
              type: 'steps',
              title: 'Sistema de comunicación mensual con padres',
              steps: [
                'Al inicio de cada mes: enviar un resumen del calendario de actividades del mes a todos los padres',
                'Con al menos dos semanas de anticipación para cualquier actividad especial o campamento',
                'Comunicar claramente qué se necesita llevar, el costo si lo hay, y los horarios de salida y regreso',
                'Para campamentos: formularios de permiso en papel con al menos 10 días de anticipación',
                'Canal preferido: WhatsApp o correo electrónico — pero siempre tener un contacto de respaldo para padres sin acceso',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Reporte al Obispado y Seguimiento de "Para Venir a Cristo"',
      intro: {
        romanNumeral: 'III',
        title: 'Información Útil, No Solo Estadísticas',
        paragraphs: [
          'El informe mensual al obispado y al consejo de barrio no debería ser solo una tabla de números. Debería ser una herramienta que ayude al obispo a entender el estado real de las jóvenes del barrio y a tomar decisiones pastorales informadas.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Informe Mensual al Obispado',
          blocks: [
            {
              type: 'paragraph',
              text: 'El informe mensual de MJ debe incluir: asistencia promedio por grupo de edad, nombres de jóvenes con más de dos ausencias sin contacto establecido, actividades realizadas y próximas, y cualquier necesidad o situación que requiera atención del obispado. Lo que no debe incluir: detalles confidenciales de situaciones individuales que la joven no ha compartido con el obispo directamente.',
            },
            {
              type: 'key_points',
              title: 'Estructura del informe mensual de MJ',
              points: [
                'Asistencia: número total y promedio por clase, comparado con el mes anterior',
                'Seguimiento activo: jóvenes que recibieron visita o contacto ministerial este mes',
                'Jóvenes que necesitan atención del obispado — sin violar confidencialidad',
                'Actividades completadas y próximas actividades aprobadas',
                'Necesidades de presupuesto o recursos para el mes siguiente',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Seguimiento del Progreso Personal de las Jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El programa de desarrollo personal de las jóvenes incluye metas y avances que cada joven establece individualmente. La secretaria no administra esas metas — son personales. Pero puede ayudar a la presidenta a tener visibilidad sobre el progreso general del grupo: cuántas jóvenes están activamente trabajando en sus metas, cuántas están cerca de completar un área, cuántas no han iniciado. Esa visibilidad permite que las líderes ofrezcan apoyo de manera oportuna.',
            },
            {
              type: 'steps',
              title: 'Cómo apoyar el progreso personal sin invadir la privacidad',
              steps: [
                'En la reunión de presidencia mensual: revisar el estado general del grupo sin identificar a jóvenes específicas ante todas las consejeras',
                'La consejera asignada a cada grupo es quien tiene la conversación individual con cada joven sobre sus metas',
                'Si una joven lleva varios meses sin avance: la consejera la visita para ofrecer apoyo, no para presionar',
                'Celebrar públicamente los logros de las jóvenes — con su permiso — en la clase o en una actividad',
                'Documentar los logros completados para el registro de la organización',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El progreso personal como ministerio, no como requisito',
              body: 'El programa de desarrollo personal de las jóvenes fue diseñado para ayudar a cada joven a crecer a su propio ritmo, en las áreas que el Señor la dirija a trabajar. La secretaria y las consejeras que lo convierten en una lista de verificación o en una fuente de presión están pervirtiendo su propósito. El seguimiento debe comunicar interés genuino, no expectativa de rendimiento. "¿Cómo vas con tu meta?" es diferente a "¿ya terminaste tu meta?"',
            },
          ],
        },
      ],
    },
  ],
}
