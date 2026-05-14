import type { Lesson } from '@/types/doctrine'

export const obispadoComunicarPadres: Lesson = {
  id: 'obispado-comunicar-padres',
  moduleId: 'capacitacion-liderazgo',
  title: 'Comunicar a los Padres',
  subtitle: 'Cómo anunciar el cambio desde la reunión sacramental',
  description:
    'Los padres son los aliados más importantes del nuevo programa juvenil. Pero para ser aliados necesitan entender qué está cambiando, por qué, y qué se espera de ellos. Esta lección prepara al obispado para comunicar el cambio de horario dominical desde el púlpito, responder preguntas, y distribuir la guía PFJ con propósito.',
  level: 'BÁSICO',
  icon: '🗣️',
  duration: 15,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Por Qué la Comunicación a los Padres Es Responsabilidad del Obispado',
      intro: {
        romanNumeral: 'I',
        title: 'El Obispo Habla a los Padres desde el Púlpito',
        paragraphs: [
          'Hay cosas que un correo electrónico no puede comunicar. La Reunión Sacramental es el único momento en la semana donde el obispado tiene la atención de las familias del barrio reunidas en un mismo espacio. Ese momento es sagrado — y es el canal apropiado para comunicar cambios de esta importancia.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Reunión Sacramental como plataforma de liderazgo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El obispo preside la Reunión Sacramental. Eso no es solo un protocolo — es una posición de confianza. Cuando el obispo habla desde el púlpito, los miembros lo escuchan de manera diferente a como escuchan un anuncio en la aplicación de la Iglesia. El peso de su voz viene de su llamamiento y de la relación que ha construido con el barrio. Ese peso debe usarse deliberadamente para comunicar el cambio del programa juvenil.',
            },
            {
              type: 'doctrine_box',
              title: 'Cuándo comunicar desde el púlpito',
              body: 'El obispado debe planificar al menos tres momentos de comunicación desde la Reunión Sacramental: (1) Anuncio inicial en mayo, cuando inicia el maratón de lectura de la PFJ, (2) Recordatorio en agosto, invitando a las familias al evento del 30 de agosto, y (3) El domingo 6 de septiembre, al iniciar el nuevo horario. Cada comunicación tiene un énfasis diferente — el primero informa, el segundo invita, el tercero inspira.',
            },
            {
              type: 'key_points',
              title: 'Los tres momentos de comunicación desde el púlpito',
              points: [
                'Mayo (antes del 3): Anuncio del maratón de lectura — ¿qué es la PFJ? ¿por qué leerla antes del inicio?',
                'Agosto (antes del 30): Invitación al evento del Quinto Domingo — ¿qué ocurrirá? ¿por qué venir con sus hijos?',
                'Septiembre 6: Celebración del inicio — ¿qué empieza hoy? ¿cómo puede el hogar apoyar este programa?',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'Lo que los padres necesitan escuchar — no solo saber',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hay una diferencia entre informar a los padres y comunicarles con propósito. Informar es suficiente para que sepan qué cambia. Comunicar con propósito es lo que logra que quieran ser parte del cambio. El obispo que comparte desde el púlpito lo que leyó en la guía PFJ que le tocó el corazón, lo que espera para los jóvenes del barrio — ese obispo no está dando un anuncio. Está pastoreando.',
            },
            {
              type: 'leader_quote',
              quote: 'Los padres de esta Iglesia necesitan escuchar de sus líderes no solo qué hacer, sino por qué hacerlo. Cuando el por qué es espiritual y genuino, los padres van a casa motivados. Cuando es solo administrativo, van a casa informados — que no es lo mismo.',
              name: 'Élder M. Russell Ballard',
              role: 'Conferencia General, octubre 2019 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Qué Decir desde el Púlpito — Guía para el Obispo',
      intro: {
        romanNumeral: 'II',
        title: 'Palabras que Funcionan — Palabras que No',
        paragraphs: [
          'El obispo no necesita un discurso escrito y memorizado. Necesita tres cosas: claridad sobre los hechos, un testimonio personal de por qué cree en este cambio, y la habilidad de anticipar las dudas de los miembros antes de que las expresen. Esta sección ofrece una guía práctica.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La estructura del anuncio desde el púlpito',
          blocks: [
            {
              type: 'steps',
              title: 'Estructura para el anuncio principal (primera comunicación, mayo)',
              steps: [
                'Contexto (30 segundos): "A partir del 6 de septiembre, nuestro horario dominical cambia. Quiero explicarles qué cambia y por qué creo que será una bendición para nuestros jóvenes."',
                'Los hechos (90 segundos): Describir brevemente el nuevo esquema — 25 min Escuela Dominical, 25 min jóvenes con PFJ, 25 min adultos con Conferencia General. Énfasis en que la Reunión Sacramental no cambia.',
                'La guía PFJ (60 segundos): "La guía Para la Fortaleza de la Juventud es el material que sus hijos estudiarán. No es una lista de reglas — es una guía de principios para que sus hijos aprendan a tomar decisiones con base en el evangelio."',
                'El maratón de lectura (30 segundos): "Los invitamos a que sus hijos lean la guía completa antes del 30 de agosto. Tendremos ejemplares disponibles hoy."',
                'Testimonio personal (60-90 segundos): El obispo comparte qué le pareció más valioso de la guía. Esto no puede ser delegado — es la voz del pastor.',
                'Invitación final (15 segundos): "Si tienen preguntas, estoy disponible después de la reunión y durante la semana."',
              ],
            },
            {
              type: 'paragraph',
              text: 'El anuncio completo no debe durar más de 5-6 minutos. La brevedad es una forma de respeto. Lo que hace poderoso el mensaje no es su extensión sino su autenticidad. Un obispo que habla 3 minutos desde el corazón produce más impacto que 10 minutos de información técnica.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Frases que conectan vs. frases que desconectan',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Cómo decirlo — lenguaje que conecta vs. lenguaje burocrático',
              left: {
                label: 'Evitar — lenguaje que desconecta',
                points: [
                  '"Según las instrucciones de la Sede..."',
                  '"A partir del 6 de septiembre habrá cambios en el programa."',
                  '"Los jóvenes tendrán que estudiar un nuevo material."',
                  '"Necesitamos que los padres apoyen esta iniciativa."',
                  '"El cambio es obligatorio para todos los barrios."',
                ],
              },
              right: {
                label: 'Preferir — lenguaje que conecta',
                points: [
                  '"Creo genuinamente que este cambio va a fortalecer a nuestros jóvenes."',
                  '"Empezamos algo nuevo en septiembre — y estoy emocionado por ello."',
                  '"Sus hijos tendrán su propio espacio semanal para estudiar principios que importan."',
                  '"Ustedes, como padres, son los aliados más importantes de este programa."',
                  '"Este no es un cambio que nos ocurre — es un cambio que estamos eligiendo abrazar juntos."',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'El lenguaje que conecta tiene tres características: habla desde el nosotros (no desde la autoridad distante), enfoca en los beneficios (no en los procesos), y reconoce a los padres como agentes activos (no como receptores pasivos de instrucciones). El obispo que habla así construye confianza, no solo obediencia.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Manejar las Preguntas de los Padres',
      intro: {
        romanNumeral: 'III',
        title: 'Las Preguntas Son Oportunidades, No Interrupciones',
        paragraphs: [
          'Algunos padres van a tener preguntas después de los anuncios. Algunos tendrán dudas genuinas; otros tendrán resistencia al cambio. Ambos merecen respuestas honestas y pacientes. El obispado que ha anticipado las preguntas más comunes puede responder sin ponerse a la defensiva — lo que convierte una conversación difícil en una oportunidad de liderazgo.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Preguntas frecuentes de los padres — y cómo responderlas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las siguientes preguntas son las más comunes que surgen cuando se anuncia este cambio. Para cada una, se ofrece el principio detrás de la respuesta — no un guión, porque la respuesta genuina del obispo siempre será más poderosa que cualquier fórmula.',
            },
            {
              type: 'key_points',
              title: 'FAQ: las preguntas que los padres harán',
              points: [
                '¿Por qué cambian el horario? — Porque los jóvenes merecen un tiempo de estudio diseñado para su edad, no adaptado de un currículo general. La PFJ fue escrita pensando en ellos.',
                '¿Qué estudiarán exactamente mis hijos? — La guía "Para la Fortaleza de la Juventud": principios como revelación personal, arrepentimiento, castidad, servicio. 1 capítulo por mes.',
                '¿Tengo que leer la guía yo también? — No es obligatorio, pero sería enormemente beneficioso. Así pueden conversar en familia sobre lo que su hijo está estudiando.',
                '¿Qué pasa con los niños menores de 12? — Nada cambia para ellos. La Primaria continúa exactamente igual.',
                '¿Puedo asistir a la clase de mi hijo? — En principio los 25 minutos son para los jóvenes, aunque los maestros y el obispado pueden adaptar si hay circunstancias especiales.',
                '¿Es permanente este cambio? — Sí, a partir del 6 de septiembre este es el nuevo horario estándar. No es un piloto ni un experimento.',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'Cuando un padre tiene resistencia al cambio',
          blocks: [
            {
              type: 'paragraph',
              text: 'Habrá padres que no estén entusiasmados con el cambio. Algunos lo dirán con respeto; otros con más intensidad. El obispado que maneja esa resistencia con empatía genuina — sin ponerse a la defensiva y sin minimizar la preocupación — convierte a esos padres en potenciales aliados. El que se pone a la defensiva los convierte en detractores.',
            },
            {
              type: 'doctrine_box',
              title: 'El principio para manejar la resistencia',
              body: 'DyC 121:41 dice que la influencia legítima opera por "persuasión y paciencia." Cuando un padre tiene resistencia, el obispo no tiene que convencerlo en ese instante. Puede escuchar, validar la preocupación ("entiendo por qué eso le preocupa"), compartir su perspectiva con calma, e invitar al padre a reservar juicio hasta que vean los resultados en sus hijos. La resistencia al cambio es humana — no es deslealtad. Un obispo paciente que no presiona produce más cambio real que uno que exige conformidad.',
            },
            {
              type: 'central_quote',
              text: '"Mi hijo ya sabe lo que la Iglesia dice sobre esos temas — no necesita otra clase al respecto."',
              attribution: 'Una preocupación frecuente de padres sobre el nuevo programa',
            },
            {
              type: 'paragraph',
              text: 'Esta objeción merece una respuesta honesta: la guía PFJ no repite lo que el joven ya sabe en el formato de "esto está prohibido, esto está permitido." La guía pregunta al joven qué quiere ser, qué principios quiere que guíen su vida, y cómo puede acceder a la revelación personal para tomar decisiones propias. Es diferente de la instrucción que la mayoría de los jóvenes recibió en su niñez. El obispo que ha leído la guía puede decir esto con convicción personal, no como argumento de venta.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Distribución de la Guía PFJ',
      intro: {
        romanNumeral: 'IV',
        title: 'El Ejemplar Físico Como Símbolo de Compromiso',
        paragraphs: [
          'La guía PFJ está disponible digitalmente en la app de la Iglesia. Pero un ejemplar físico en manos de un joven comunica algo que una notificación digital no puede: alguien tomó la decisión de obtenerlo y dármelo. El obispado que distribuye ejemplares físicos está haciendo una declaración de prioridad.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Cómo organizar la distribución de guías PFJ',
          blocks: [
            {
              type: 'steps',
              title: 'Pasos para la distribución de ejemplares físicos',
              steps: [
                'Solicitar los ejemplares a través del Sistema de Distribución de la Iglesia con suficiente anticipación — idealmente 4-6 semanas antes del 3 de mayo para tenerlos disponibles para el inicio del maratón de lectura',
                'Hacer un recuento de los jóvenes 12-17 del barrio que necesitan un ejemplar (incluyendo los menos activos — el exemplar puede ser una invitación)',
                'Determinar quién entregará los ejemplares: ¿el obispo personalmente? ¿los presidentes de quórum? ¿los líderes de Mujeres Jóvenes? La entrega personal tiene más impacto que dejarlos en una mesa',
                'Planificar una segunda tanda de ejemplares para el evento del 30 de agosto — habrá familias que lleguen ese día sin ejemplar',
                'Llevar algunos ejemplares adicionales los primeros domingos de septiembre para los jóvenes que se incorporen tarde al programa',
                'Mencionar desde el púlpito que los ejemplares están disponibles y dónde recogerlos — y que también están en la app para quienes prefieren digital',
              ],
            },
            {
              type: 'paragraph',
              text: 'La distribución no es un trámite administrativo — es un momento pastoral. El obispo que entrega personalmente un ejemplar a un joven con el que ha construido relación, y le dice "quiero que leas esto antes del 30 de agosto — me gustaría escuchar qué capítulo te pareció más útil", está haciendo más que distribuir material. Está invirtiendo en ese joven.',
            },
          ],
        },
        {
          id: 't8',
          title: 'Acceso digital vs. físico — cómo comunicarlo',
          blocks: [
            {
              type: 'key_points',
              title: 'Cómo presentar las opciones de acceso a la guía',
              points: [
                'Formato físico: disponible en el barrio sin costo — hablar con el obispado o los líderes de jóvenes',
                'Aplicación de la Iglesia (Gospel Library): buscar "Para la Fortaleza de la Juventud" — disponible en español, descargable para uso sin internet',
                'Sitio web de la Iglesia: churchofjesuschrist.org también tiene la guía completa en versión digital',
                'Para familias con múltiples jóvenes: se puede compartir un ejemplar físico o usar la versión digital en un dispositivo compartido',
                'Para jóvenes menos activos o sin acceso a la app: el barrio tiene ejemplares disponibles — no hay excusa de acceso',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Tiene el obispado ya los ejemplares físicos de la guía PFJ? Si no, ¿quién en el obispado tiene la responsabilidad de solicitarlos esta semana? ¿Cómo planea el obispado hacer la distribución de manera que sea personal y no solo logística?',
            },
          ],
        },
      ],
    },
  ],
}
