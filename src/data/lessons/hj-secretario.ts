import type { Lesson } from '@/types/doctrine'

export const hjSecretario: Lesson = {
  id: 'hj-secretario',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'hj-lideres',
  title: 'El Secretario de los Hombres Jóvenes',
  subtitle: 'Seguimiento, asistencia y coordinación de actividades',
  description:
    'El secretario de Hombres Jóvenes trabaja en la intersección entre el registro formal del sacerdocio y el ministerio pastoral diario. Su trabajo hace visible lo que de otro modo se pierde: quién está activo, quién está en riesgo, quién se acerca a la misión. Esta lección explica cómo ejercer ese llamamiento con precisión y propósito.',
  level: 'BÁSICO',
  icon: '📋',
  duration: 25,
  order: 9552,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Registros del Sacerdocio Aarónico — Coordinación con los Cuórums',
      intro: {
        romanNumeral: 'I',
        title: 'El Secretario de HJ No Es el Único Registrador',
        paragraphs: [
          'Uno de los errores más comunes en organizaciones de Hombres Jóvenes es asumir que el secretario de HJ lleva todos los registros. En realidad, cada cuórum del Sacerdocio Aarónico tiene su propio secretario. El secretario de HJ trabaja con ellos — no en lugar de ellos. Entender esa distinción evita duplicación y vacíos.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Estructura de Registros del Sacerdocio Aarónico',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cada cuórum — diáconos, maestros y presbíteros — tiene su propio presidente de cuórum, y esos presidentes trabajan con asesores asignados por el obispo. En muchos barrios, cada cuórum también tiene su propio secretario. El registro formal de ordenaciones al sacerdocio es responsabilidad del obispado y se registra en el sistema oficial de la Iglesia (Leader and Clerk Resources), no solo en los registros locales de HJ.',
            },
            {
              type: 'doctrine_box',
              title: 'Ordenaciones — responsabilidad del obispado, no del secretario de HJ',
              body: 'Cuando un joven es ordenado al oficio de diácono, maestro o presbítero, esa ordenación debe ser registrada en el sistema oficial de la Iglesia por el secretario del barrio. El secretario de HJ puede ayudar a identificar cuándo un joven está listo para ser ordenado y comunicarlo al obispado — pero el registro formal no es su responsabilidad directa. Confundir estos roles puede resultar en ordenaciones no registradas, lo cual crea problemas cuando el joven presente sus papeles de misión o solicite una recomendación para el templo.',
            },
            {
              type: 'key_points',
              title: 'Quién registra qué en la organización de HJ',
              points: [
                'Secretario del barrio: registra formalmente ordenaciones en el sistema oficial de la Iglesia',
                'Secretario de cada cuórum: mantiene registros del cuórum — asistencia, actas de presidencia, actividades',
                'Secretario de HJ: coordina la información de todos los cuórums, asistencia general de HJ, calendario de actividades, y comunicación con los padres',
                'El secretario de HJ es el articulador — no el propietario de todos los registros',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Asistencia Semanal y Seguimiento Ministerial',
          blocks: [
            {
              type: 'paragraph',
              text: 'El secretario de HJ registra la asistencia en las actividades y clases del domingo. Ese registro no es un dato estadístico para el informe mensual — es la herramienta que permite a los consejeros y al presidente saber a quién necesitan buscar. Un joven que lleva dos domingos ausente sin contacto establecido necesita atención pastoral, no solo una nota en el registro.',
            },
            {
              type: 'steps',
              title: 'Proceso semanal de asistencia y seguimiento en HJ',
              steps: [
                'Durante las clases del domingo: registrar asistencia por cuórum — coordinando con los secretarios de cuórum',
                'Al terminar el bloque dominical: identificar ausentes y compartir con el consejero responsable de cada cuórum',
                'El lunes: el secretario envía la lista consolidada de ausentes al presidente de HJ con cualquier contexto conocido',
                'Si un joven lleva dos domingos ausentes: el consejero asignado lo contacta directamente',
                'Si lleva más de un mes ausente: el presidente de HJ informa al obispado en el consejo de barrio',
                'Documentar el resultado del contacto: ¿se estableció comunicación? ¿cuál es la situación?',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Sabes en este momento cuántos jóvenes de tu barrio llevan más de un mes sin asistir? ¿Quién tiene esa información? ¿Cómo fluye desde el registro a la acción pastoral? ¿Qué cambiarías?',
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
        title: 'El Calendario Como Herramienta de Ministerio',
        paragraphs: [
          'Un buen calendario de actividades no es solo una lista de fechas — es un plan ministerial. Cada actividad tiene un propósito espiritual, un presupuesto estimado, un responsable, y un proceso de aprobación. El secretario ayuda a que ese plan exista y funcione.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Planificación del Calendario Anual de HJ',
          blocks: [
            {
              type: 'paragraph',
              text: 'El calendario anual de Hombres Jóvenes debe construirse al inicio del año — idealmente en enero o en coordinación con el ciclo que use el barrio. Ese proceso requiere recopilar propuestas de los consejeros y de los presidentes de cuórum, verificar disponibilidad de fechas con el calendario del barrio y de la estaca, y presentar el plan consolidado al obispado para aprobación antes de comunicarlo a los padres.',
            },
            {
              type: 'steps',
              title: 'Proceso de planificación del calendario anual',
              steps: [
                'Reunir propuestas de actividades de los consejeros y presidentes de cuórum — con objetivo espiritual y presupuesto estimado para cada una',
                'Verificar conflictos con el calendario del barrio, la estaca y el año escolar local',
                'Consolidar las actividades en un calendario borrador y presentarlo a la presidencia de HJ para revisión',
                'Presentar el calendario al obispado para aprobación formal',
                'Comunicar el calendario aprobado a los padres al inicio del año — con anticipación suficiente para que puedan planificar',
                'Revisar y ajustar el calendario trimestralmente según cambios y necesidades',
              ],
            },
            {
              type: 'key_points',
              title: 'Qué debe incluir el plan de cada actividad',
              points: [
                'Objetivo espiritual claro — no solo "entretenimiento" o "convivencia"',
                'Responsable principal — quién lidera la actividad',
                'Presupuesto estimado y cómo se cubrirá (fondos de la organización, colecta, aportación de familias)',
                'Logística de transporte y seguridad — especialmente para campamentos',
                'Proceso de permisos de los padres — formularios y plazos',
                'Aprobación documentada del obispado antes de comunicar a los jóvenes y padres',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Campamentos y Comunicación con Padres',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los campamentos son uno de los momentos de mayor impacto en la vida de un joven — y también uno de los más complejos logísticamente. El secretario de HJ puede ser el coordinador principal de esa logística: permisos de los padres, listas de equipamiento, transporte, comunicación con el sitio del campamento, y seguimiento de pagos si los hay.',
            },
            {
              type: 'paragraph',
              text: 'Los padres merecen información completa y oportuna sobre cualquier actividad fuera del edificio de la Iglesia. Sorprender a los padres con poca anticipación o información incompleta genera desconfianza y, en el peor caso, impide que jóvenes participen porque los padres no pudieron planificar. Una comunicación bien preparada — con fecha, lugar, itinerario, costo, equipamiento necesario, y contactos de emergencia — es un acto de respeto hacia las familias.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Seguimiento de Avances del Sacerdocio y Jóvenes Cerca de la Misión',
      intro: {
        romanNumeral: 'III',
        title: 'Visibilidad Que Habilita el Ministerio',
        paragraphs: [
          'El secretario de HJ no puede reemplazar el seguimiento espiritual que hacen los consejeros y el presidente — pero puede proveer la visibilidad que hace ese seguimiento posible. Saber quién cumplirá 18 años el próximo semestre, quién debería haber sido ordenado hace tres meses, o quién está cerca de completar los requisitos para el templo — esa información, en manos correctas, cambia vidas.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Seguimiento de Avances del Sacerdocio Aarónico',
          blocks: [
            {
              type: 'paragraph',
              text: 'El registro formal de los avances del Sacerdocio Aarónico — las ordenaciones a diácono, maestro y presbítero — está en el sistema oficial de la Iglesia (Leader and Clerk Resources), administrado por el obispado. El secretario de HJ puede ayudar a los presidentes de cuórum a hacer un seguimiento informal: revisar qué jóvenes han cruzado la edad para un nuevo oficio sin haber sido ordenados, identificar posibles razones, y comunicarlo al presidente de HJ para que lo eleve al obispado.',
            },
            {
              type: 'key_points',
              title: 'Seguimiento de avances en el Sacerdocio Aarónico',
              points: [
                'Diáconos: jóvenes que cumplen 12 años y deben ser considerados para ordenación — coordinar con el obispado',
                'Maestros: jóvenes de 14 años que cumplen los requisitos y no han sido ordenados — identificar y elevar al obispado',
                'Presbíteros: jóvenes de 16 años elegibles — con especial atención a los que se acercan a los 18 y la misión',
                'No presionar — el avance en el sacerdocio requiere preparación espiritual, no solo la edad',
                'Jóvenes sin ordenar por razones pastorales: mantener esa información confidencial y en coordinación con el obispado',
              ],
            },
            {
              type: 'steps',
              title: 'Revisión trimestral de avances del sacerdocio',
              steps: [
                'Al inicio de cada trimestre: revisar la lista de jóvenes y sus edades actuales en el sistema de la Iglesia',
                'Identificar jóvenes que han cruzado la edad de un nuevo oficio en los últimos tres meses',
                'Verificar con los asesores del cuórum si el joven está siendo considerado para ordenación',
                'Comunicar al presidente de HJ cualquier caso que requiera atención del obispado',
                'Documentar el resultado — si fue ordenado, cuándo; si no, la razón (sin detalles confidenciales en el registro de HJ)',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Jóvenes Cerca de la Misión — Los 18 Meses Cruciales',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los 18 meses anteriores al potencial inicio de misión de un joven son críticos. Ese es el período en que la decisión se forma, se consolida, o se abandona. El secretario de HJ puede ayudar a que ningún joven en ese rango de tiempo quede invisible para el liderazgo del barrio: una lista actualizada de jóvenes que cumplirán 18 años en los próximos 18 meses, entregada al presidente de HJ cada trimestre, es una herramienta de ministerio preventivo.',
            },
            {
              type: 'paragraph',
              text: 'Los jóvenes que cumplen 18 años también transicionan de Hombres Jóvenes al Cuórum de Élderes del barrio. Esa transición, si no se maneja bien, puede ser un momento de desconexión. El secretario puede coordinar con el presidente de HJ y el secretario del barrio para asegurar que esa transición sea activa — que el joven sea recibido en el cuórum de élderes con nombre y con seguimiento, no que simplemente deje de aparecer en los registros de HJ.',
            },
            {
              type: 'key_points',
              title: 'Lista de seguimiento para jóvenes cerca de la misión y la transición',
              points: [
                'Mantener actualizada la lista de jóvenes que cumplirán 18 años en los próximos 18 meses',
                'Coordinar con el presidente de HJ para que el obispo sea informado y pueda programar entrevistas de orientación a la misión',
                'Identificar jóvenes que se acercan a los 18 sin haber recibido su dotación del templo — elevar al obispado',
                'Al cumplir 18: asegurar un traspaso activo al Cuórum de Élderes — con nombre, contexto y continuidad de relación',
                'Celebrar públicamente cuando un joven recibe su llamamiento misionero — que sea un evento del grupo, no solo de la familia',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Sabes en este momento cuántos jóvenes de tu barrio cumplirán 18 años en los próximos 12 meses? ¿El obispo los conoce por nombre? ¿Están recibiendo la atención pastoral que necesitan para llegar bien preparados a esa decisión? ¿Qué haría falta para cambiar eso?',
            },
          ],
        },
      ],
    },
  ],
}
