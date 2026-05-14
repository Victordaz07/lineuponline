import type { Lesson } from '@/types/doctrine'

export const hjMaratonLectura: Lesson = {
  id: 'hj-maraton-lectura',
  moduleId: 'capacitacion-liderazgo',
  title: 'El Maratón de Lectura',
  subtitle: 'Unir a jóvenes y familias desde mayo',
  description:
    'El 3 de mayo de 2026 comienza algo diferente: un maratón de lectura mundial en el que jóvenes, familias y líderes leen juntos la guía "Para la Fortaleza de la Juventud" — un capítulo por semana durante doce semanas. Es la preparación colectiva para el inicio del nuevo programa. Los líderes de Hombres Jóvenes tienen un papel central.',
  level: 'BÁSICO',
  icon: '🏃',
  duration: 15,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Maratón y Su Propósito',
      intro: {
        romanNumeral: 'I',
        title: 'El Maratón y Su Propósito',
        paragraphs: [
          'A partir del 3 de mayo de 2026, la cuenta oficial @forstrengthofyouth en redes sociales publica un capítulo de la guía PFJ cada semana. El objetivo es que cuando llegue el 6 de septiembre, los jóvenes — y sus familias — ya conozcan el material que estudiarán durante el año.',
        ],
      },
      topics: [
        {
          id: 't1-que-es',
          title: '¿Qué es el maratón de lectura?',
          blocks: [
            {
              type: 'paragraph',
              text: 'El maratón de lectura es una iniciativa oficial de la Iglesia que comienza el 3 de mayo de 2026. Durante doce semanas, la cuenta @forstrengthofyouth publica contenido relacionado con cada capítulo de la guía "Para la Fortaleza de la Juventud" — uno por semana. La idea es simple: cuando los jóvenes empiecen las clases del domingo el 6 de septiembre, el material no será desconocido.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '3 de mayo — Inicio del maratón',
                  text: 'La cuenta @forstrengthofyouth publica el primer capítulo. Los líderes de HJ invitan a sus jóvenes a seguir la cuenta y comenzar la lectura.',
                  color: 'gold',
                },
                {
                  label: 'Mayo–agosto — Lectura semanal',
                  text: 'Un capítulo por semana durante las doce semanas del maratón. Los líderes leen junto con los jóvenes y pueden usar el capítulo de la semana en actividades y conversaciones.',
                  color: 'blue',
                },
                {
                  label: '30 de agosto — Quinto domingo especial',
                  text: 'Evento especial del quinto domingo con videos de la Iglesia para preparar a los jóvenes y a sus familias para el inicio del nuevo programa.',
                  color: 'green',
                },
                {
                  label: '6 de septiembre — Inicio oficial',
                  text: 'Primera clase dominical con el nuevo formato de 25 minutos y la guía PFJ como material central. Los jóvenes ya conocen los capítulos — ahora los estudian en profundidad.',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Por qué el maratón importa',
              body: 'La diferencia entre un joven que llega a clase el 6 de septiembre habiendo leído los doce capítulos y uno que no los conoce es enorme. El primero puede participar, conectar, profundizar. El segundo está oyendo todo por primera vez. El maratón de lectura es la forma en que la Iglesia da a los jóvenes — y a sus familias — una ventaja de preparación que transforma la calidad de las clases desde el primer día.',
            },
          ],
        },
        {
          id: 't1-redes',
          title: 'La cuenta @forstrengthofyouth',
          blocks: [
            {
              type: 'paragraph',
              text: 'La cuenta oficial @forstrengthofyouth está disponible en las principales plataformas de redes sociales. A partir del 3 de mayo publica contenido relacionado con la guía PFJ — un capítulo por semana. Este contenido está diseñado para jóvenes, pero también es valioso para padres y líderes.',
            },
            {
              type: 'key_points',
              points: [
                'La cuenta publica un capítulo por semana a partir del 3 de mayo de 2026',
                'El contenido está disponible en múltiples plataformas — los jóvenes pueden seguirlo desde donde ya están',
                'Los líderes pueden compartir las publicaciones en grupos de WhatsApp o Telegram del cuórum',
                'El contenido digital no reemplaza la lectura personal — invita a los jóvenes a abrir la guía y leer el capítulo completo',
                'Los padres también pueden seguir la cuenta para saber qué están leyendo sus hijos',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Ya sigues la cuenta @forstrengthofyouth? ¿Cómo la usarías específicamente con los jóvenes de tu cuórum — una publicación compartida por semana, un grupo de lectura, algo diferente?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Involucrar a los Jóvenes y Sus Familias',
      intro: {
        romanNumeral: 'II',
        title: 'Involucrar a los Jóvenes y Sus Familias',
        paragraphs: [
          'El maratón es más poderoso cuando no ocurre solo en el teléfono del joven. Ocurre en la mesa familiar, en el viaje al colegio, en una actividad del cuórum. Los líderes de Hombres Jóvenes pueden diseñar cómo esto sucede en su barrio.',
        ],
      },
      topics: [
        {
          id: 't2-jovenes',
          title: 'Cómo involucrar a los jóvenes',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los jóvenes no leerán la guía porque un líder les diga que deben. Leerán si sienten que es relevante para su vida, si sus amigos también la están leyendo, y si hay una conversación real alrededor de ella. El rol del líder es crear las condiciones para que eso ocurra.',
            },
            {
              type: 'steps',
              steps: [
                'En la primera actividad de mayo: presenta el maratón, muestra la cuenta @forstrengthofyouth y ayuda a cada joven a seguirla en ese momento desde su teléfono',
                'Cada semana durante el maratón: envía al grupo del cuórum una pregunta sencilla relacionada con el capítulo de esa semana — no para tarea, sino para conversación',
                'Una vez al mes: dedica 10 minutos de la actividad a compartir lo que alguien leyó que le impactó — sin presión, solo invitación',
                'Antes del 30 de agosto: organiza una actividad especial donde los jóvenes hablen del capítulo que más les marcó durante el maratón',
                'El 6 de septiembre: en la primera clase, pregunta — "¿Cuál fue el capítulo que más les habló durante el maratón?" — y deja que ellos empiecen el año',
              ],
            },
            {
              type: 'key_points',
              points: [
                'Los jóvenes que lean el maratón completo habrán leído la guía PFJ antes de que empiece el año de clases',
                'El maratón es voluntario — no lo conviertas en una obligación con listas de verificación',
                'La presión social positiva ayuda: cuando el presidente del cuórum lee, los demás lo hacen',
                'Una pregunta por semana es más eficaz que un largo mensaje de motivación',
                'Celebra cuando alguien menciona algo que leyó — cualquier forma de reconocimiento positivo funciona',
              ],
            },
          ],
        },
        {
          id: 't2-familias',
          title: 'Involucrar a las familias y a los élderes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El maratón de lectura no es solo para los jóvenes. Es una oportunidad para que familias enteras lean la guía PFJ juntas — y para que los élderes del barrio también la conozcan y puedan apoyar a los jóvenes con quienes ministran.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Familias con hijos jóvenes',
                points: [
                  'El capítulo de la semana puede ser el tema de la noche familiar',
                  'Los padres pueden leer el mismo capítulo que leen sus hijos',
                  'Las conversaciones en el auto o en la cena se vuelven más naturales',
                  'Los padres pueden hacer preguntas del capítulo sin parecer que "hacen tarea"',
                  'El maratón abre una conversación compartida entre generaciones',
                ],
              },
              right: {
                label: 'Élderes y familias sin hijos jóvenes',
                points: [
                  'La guía PFJ también es relevante para adultos — los principios son universales',
                  'Los élderes que la leen pueden ministerio más informado a las familias con jóvenes',
                  'Los cuórums de élderes pueden leer el mismo capítulo que los jóvenes ese mes',
                  'Los abuelos que leen la guía pueden hablar con sus nietos sobre el capítulo de esa semana',
                  'La guía crea un lenguaje común entre todas las edades del barrio',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué involucrar a los élderes',
              body: 'Cuando los élderes del barrio conocen la guía PFJ, el ministerio en el hogar se vuelve más específico. Un élder que sabe que el capítulo del mes es sobre el Espíritu Santo puede preguntar a un joven: "¿Qué aprendiste esta semana sobre el Espíritu?" Esa pregunta crea un puente entre el ministerio adulto y el programa juvenil que no existía antes.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿A cuántas familias de jóvenes podrías comunicar el maratón de lectura esta semana? ¿Cómo lo harías — mensaje personal, reunión, nota en el boletín?' },
                { id: 'np2', question: '¿Hay élderes en tu barrio que podrían beneficiarse de leer la guía PFJ junto con los jóvenes durante el maratón? ¿Cómo los involucrarías?' },
                { id: 'np3', question: '¿Qué actividad específica podrías organizar en agosto para celebrar el fin del maratón y preparar a los jóvenes para el inicio del nuevo programa?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Domingo Especial del 30 de Agosto',
      intro: {
        romanNumeral: 'III',
        title: 'El Domingo Especial del 30 de Agosto',
        paragraphs: [
          'El 30 de agosto de 2026 es el quinto domingo antes del inicio del nuevo programa. La Iglesia ha diseñado un evento especial para ese día — con videos preparados específicamente para presentar el programa a los jóvenes y a sus familias.',
        ],
      },
      topics: [
        {
          id: 't3-quinto-domingo',
          title: 'Preparar el quinto domingo',
          blocks: [
            {
              type: 'paragraph',
              text: 'El quinto domingo del 30 de agosto es una oportunidad que no se repite. Es el último domingo antes del inicio oficial del nuevo programa. La Iglesia ha preparado videos específicamente para ese día. Los líderes de Hombres Jóvenes pueden ayudar a que ese domingo sea memorable para sus jóvenes.',
            },
            {
              type: 'key_points',
              points: [
                'El 30 de agosto es el quinto domingo — un domingo con formato diferente donde típicamente hay clase conjunta para jóvenes y adultos',
                'La Iglesia ha preparado videos especiales para ese domingo — comunicar a los jóvenes y las familias la visión del nuevo programa',
                'Los líderes deben coordinar con el obispado cómo usar ese domingo en el contexto del barrio',
                'Es una oportunidad para invitar a los padres a participar junto con sus hijos en la sesión de ese día',
                'Después del evento del 30 de agosto, los jóvenes deben llegar al 6 de septiembre con expectativa y preparación',
              ],
            },
            {
              type: 'steps',
              steps: [
                'Con 3 semanas de anticipación: coordina con el obispado la logística del 30 de agosto y cómo usar los videos de la Iglesia',
                'Con 2 semanas: comunica a los jóvenes y sus familias que el 30 de agosto es un domingo especial — invita a los padres a asistir',
                'Con 1 semana: envía un recordatorio con anticipación del evento al grupo del cuórum',
                'El 30 de agosto: facilita una discusión breve después de los videos — "¿Qué les emocionó de lo que vieron?"',
                'El 6 de septiembre: primera clase con el nuevo formato — los jóvenes llegan preparados',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo describirías el nuevo programa a un joven de 14 años que no ha oído nada sobre él? ¿Y a sus padres? ¿Qué palabras usarías para que sintieran que es algo bueno para ellos — no solo otra obligación?',
            },
            {
              type: 'leader_quote',
              quote: 'Los jóvenes de esta generación son capaces de un discipulado profundo. No los subestime. Deles material que los rete, présentelocon amor, y luego apártese y observe cómo el Espíritu obra en ellos.',
              name: 'Élder Gary E. Stevenson',
              role: 'Adaptado de su mensaje a líderes de la juventud',
            },
          ],
        },
      ],
    },
  ],
}
