import type { Lesson } from '@/types/doctrine'

export const primariaSecretaria: Lesson = {
  id: 'primaria-secretaria',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'primaria-lideres',
  title: 'La Secretaria de la Primaria',
  subtitle: 'El registro que protege y acompaña a cada niño',
  description:
    'La secretaria de la Primaria mantiene los registros que hacen posible que ningún niño quede invisibilizado. Su trabajo con la asistencia, la programación de habladores en la Reunión Sacramental y las finanzas del barrio no es trabajo administrativo secundario — es el sistema de soporte que permite a la presidenta liderar con información precisa. Esta lección describe sus responsabilidades concretas y cómo ejecutarlas con excelencia.',
  level: 'BÁSICO',
  icon: '📋',
  duration: 25,
  order: 9562,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Registros de Niños',
      intro: {
        romanNumeral: 'I',
        title: 'El Registro es una Forma de Amor',
        paragraphs: [
          'Mantener registros precisos no es burocracia eclesiástica — es un acto de cuidado. Un niño que falta dos domingos sin que nadie lo note no es invisible por accidente; es invisible porque el sistema de seguimiento falló. La secretaria de la Primaria es quien hace que ese sistema funcione.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Directorio de Niños del Barrio',
          blocks: [
            {
              type: 'paragraph',
              text: 'La secretaria mantiene el directorio completo de todos los niños del barrio que están en edad de asistir a la Primaria (18 meses a 11 años). Este directorio no incluye solo a los hijos de miembros activos — incluye también a los niños no miembros que asisten con una familia, a los niños cuya membresía está registrada en el barrio aunque sus padres sean inactivos, y a los niños que han asistido en algún momento aunque ahora sean irregulares.',
            },
            {
              type: 'key_points',
              title: 'Información que debe contener el directorio de la Primaria',
              points: [
                'Nombre completo del niño y nombre preferido en clase',
                'Fecha de nacimiento — para clasificación correcta por grupo de edad y para el bautismo a los 8 años',
                'Nombres y contacto de los padres o tutores',
                'Estado de membresía del niño (miembro bautizado, no bautizado, no miembro)',
                'Grupo de edad y clase asignada en la Primaria',
                'Notas de necesidades especiales que los maestros y consejeras deben conocer',
              ],
            },
            {
              type: 'paragraph',
              text: 'El directorio debe actualizarse cuando llega una familia nueva al barrio, cuando un niño cumple años y cambia de clase, o cuando una familia se muda. La secretaria coordina con el secretario del barrio para asegurarse de que los registros de la Primaria estén sincronizados con el directorio general del barrio en LCR (Leader and Clerk Resources).',
            },
          ],
        },
        {
          id: 't2',
          title: 'Registro de Asistencia y Sistema de Seguimiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'El registro de asistencia semanal es la herramienta más poderosa de detección pastoral que tiene la Primaria. Cuando la secretaria lleva un registro preciso y lo revisa en la reunión de presidencia, las ausencias se vuelven visibles y accionables. El umbral de alerta recomendado es dos semanas consecutivas de ausencia sin causa conocida — en ese punto, la consejera correspondiente debe hacer contacto con la familia.',
            },
            {
              type: 'steps',
              title: 'Proceso semanal de registro y seguimiento de asistencia',
              steps: [
                'Domingo — Pasar lista en cada clase o recibir el reporte de asistencia de cada maestro al finalizar la reunión',
                'Domingo — Registrar la asistencia en el sistema de la Primaria (físico o digital) antes de terminar el día',
                'Durante la semana — Identificar qué niños llevan dos o más semanas ausentes; preparar el reporte para la presidencia',
                'Reunión de presidencia — Presentar el reporte de ausencias con nombres específicos; no solo números',
                'Asignación — La presidenta asigna a la consejera correspondiente el seguimiento de cada niño ausente',
                'Seguimiento — La secretaria registra el resultado del seguimiento: ¿se contactó a la familia? ¿qué se sabe?',
                'Informe al obispado — Si una familia requiere atención pastoral más allá de la Primaria, comunicar al obispo',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Responsabilidades en la Reunión Sacramental',
      intro: {
        romanNumeral: 'II',
        title: 'Cada Niño que Habla Importa',
        paragraphs: [
          'La Primaria tiene la responsabilidad de contribuir habladores a la Reunión Sacramental. Los niños de 8 a 11 años son asignados por rotación para hablar en la reunión del barrio. Esta responsabilidad — que puede parecer logística — es en realidad una de las prácticas formativas más importantes que la Primaria puede ofrecer a un niño.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Rotación de Habladores en Reunión Sacramental',
          blocks: [
            {
              type: 'paragraph',
              text: 'El obispado generalmente asigna a la Primaria entre uno y dos domingos por mes para que los niños hablen en la Reunión Sacramental. La secretaria coordina la lista de habladores, asegurándose de que la rotación sea equitativa — que no siempre sean los mismos niños los que hablen — y que cada niño de 8 a 11 años tenga la oportunidad de participar al menos una o dos veces al año.',
            },
            {
              type: 'steps',
              title: 'Rotación de asignación de habladores para Reunión Sacramental',
              steps: [
                'Mantener una lista actualizada de todos los niños de 8-11 años elegibles para hablar en Reunión Sacramental',
                'Registrar en la lista la fecha de la última vez que cada niño habló, para garantizar una rotación justa',
                'Seleccionar al próximo niño con al menos dos semanas de anticipación — no días antes',
                'Contactar a los padres del niño con la asignación: tema, duración esperada (2-3 minutos) y fecha',
                'Ofrecer orientación a los padres sobre cómo ayudar a su hijo a preparar el discurso en casa',
                'El domingo de la asignación, saludar al niño y a su familia antes de la reunión para darle confianza',
                'Si el niño habla por primera vez, coordinar con la presidenta para un apoyo especial ese domingo',
              ],
            },
            {
              type: 'paragraph',
              text: 'La asignación para hablar en la Reunión Sacramental es, para muchos niños, su primera experiencia de hablar en público sobre su fe. La secretaria que trata este proceso con cuidado — con tiempo suficiente, comunicación clara con los padres, y apoyo el día de la presentación — convierte un trámite en un momento formativo.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Apoyo a Niños que Hablan por Primera Vez',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando un niño habla en la Reunión Sacramental por primera vez, la experiencia puede ser transformadora o traumática — dependiendo de cuánto apoyo reciba antes y durante. La secretaria que identifica a estos niños de primera vez y los marca para apoyo especial hace posible que la presidenta planifique un acompañamiento adecuado.',
            },
            {
              type: 'key_points',
              title: 'Cómo apoyar a un niño que habla por primera vez',
              points: [
                'Notificar a la presidenta con anticipación que el niño nunca ha hablado en la Reunión Sacramental',
                'Asegurarse de que los padres reciban orientación clara — un niño que habla 2 minutos sin leer todo desde un papel es un triunfo',
                'El domingo, un miembro de la presidencia de Primaria se sienta cerca del niño durante la reunión',
                'Si el niño se bloquea al hablar, el líder de Primaria presente puede acercarse con calma y apoyo, no urgencia',
                'Después de la reunión, celebrar con el niño — un elogio genuino y específico fija el recuerdo positivamente',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Finanzas y Actividades',
      intro: {
        romanNumeral: 'III',
        title: 'El Presupuesto al Servicio de los Niños',
        paragraphs: [
          'La Primaria recibe un presupuesto del barrio para sus actividades, materiales de clase y eventos especiales. La secretaria es responsable de administrar ese presupuesto con transparencia y de coordinar los permisos y comunicaciones para las actividades a lo largo del año.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Administración del Presupuesto de la Primaria',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presupuesto anual de la Primaria generalmente cubre materiales de clase para los maestros, los costos del Día Primaria (actividad anual de la organización), los materiales para la Presentación de la Primaria (programas, decoración), y comunicaciones con los padres. La secretaria trabaja con la presidenta para planificar los gastos del año y con el secretario del barrio para procesar los reembolsos o pagos correspondientes.',
            },
            {
              type: 'key_points',
              title: 'Principios para la administración financiera de la Primaria',
              points: [
                'Solicitar el presupuesto anual al obispado al inicio del año; presentar un plan de gastos aproximado',
                'Mantener registros de cada gasto con comprobante — por pequeño que sea',
                'No gastar más de lo asignado sin consultar al obispado; si se necesitan fondos adicionales, presentar justificación',
                'Procesar reembolsos a maestros y líderes dentro de dos semanas de realizado el gasto',
                'Rendir cuentas al obispado al final del año sobre el uso del presupuesto',
                'Comunicar al obispado con suficiente anticipación si se prevé un gasto especial (Día Primaria, Presentación)',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Comunicación con Padres sobre Actividades',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando la Primaria organiza una actividad especial — el Día Primaria, una excursión, la Presentación Anual, o un evento del mes de octubre para Halloween o el Día de Todos los Santos en culturas latinoamericanas — la secretaria es responsable de la comunicación formal con los padres. Esa comunicación debe ser clara, oportuna y completa: fecha, lugar, horario, qué traer, si hay costo, y cómo confirmar asistencia.',
            },
            {
              type: 'steps',
              title: 'Proceso de comunicación para actividades especiales',
              steps: [
                'La presidenta aprueba la actividad y el presupuesto estimado con el obispado',
                'La secretaria prepara una comunicación escrita para los padres con al menos tres semanas de anticipación',
                'La comunicación se distribuye por los canales del barrio (WhatsApp, email, boletín) y se imprime para quien no tenga acceso digital',
                'Se recuerda a los padres en la reunión sacramental del domingo anterior a la actividad',
                'Si la actividad requiere permisos escritos (excursión fuera del edificio), la secretaria recoge y archiva los formularios',
                'Después de la actividad, reportar brevemente a la presidenta sobre asistencia y cualquier incidente',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué información sobre los niños del barrio le hace falta tener para ejercer bien su llamamiento como secretaria? ¿Cuál es el primer paso para obtenerla esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
