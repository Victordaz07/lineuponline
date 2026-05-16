import type { Lesson } from '@/types/doctrine'

export const comoHacerUnaOracion: Lesson = {
  id: 'como-hacer-una-oracion',
  moduleId: 'vida-familiar-personal',
  title: 'Cómo Hacer una Oración',
  subtitle: 'La estructura, el lenguaje y los errores más comunes',
  description:
    'Guía práctica sobre cómo ofrecer una oración vocal — la estructura de cuatro partes, el lenguaje correcto en español (tú/te/ti), la diferencia entre oración personal y grupal, y los errores más frecuentes que todos cometemos sin darnos cuenta. Complementa la lección doctrinal "La Oración".',
  level: 'BÁSICO',
  icon: '🙏',
  duration: 15,
  order: 8,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Las Cuatro Partes de una Oración',
      intro: {
        romanNumeral: 'I',
        title: 'La Estructura que Cristo Enseñó',
        paragraphs: [
          'Jesucristo enseñó cómo orar cuando sus discípulos le preguntaron. La oración del Señor en Mateo 6 no es una fórmula para repetir — es un patrón para seguir. Ese patrón tiene cuatro partes que la Iglesia ha preservado y enseñado consistentemente.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Las Cuatro Partes en Detalle',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'El patrón de la oración',
              body: '(1) DIRIGIRSE — "Padre Celestial": así comenzamos. No "Señor", no "Dios", no "Padre Eterno", no "Señor Jesús". El nombre correcto es "Padre Celestial" — es a Él a quien oramos, en el nombre de Cristo.\n\n(2) AGRADECER — Antes de pedir, agradece. Esto no es protocolo — es reconocimiento genuino de las bendiciones recibidas. Las gracias se dicen específicas, no genéricas.\n\n(3) PEDIR — Las peticiones. Pueden ser por uno mismo, por otros, por situaciones específicas. Sé específico — Dios conoce nuestras necesidades, pero el proceso de articularlas claramente nos cambia a nosotros.\n\n(4) CERRAR — "En el nombre de Jesucristo, amén." Siempre. Esta es la autoridad por la que oramos — el nombre de Cristo.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Cómo NO dirigirse a Dios',
                points: [
                  '"Señor Jesús..." (oramos al Padre, en nombre de Cristo)',
                  '"Oh Dios..." o "Amado Dios..."',
                  '"Señor..." (solo)',
                  '"Padre Eterno..." (aunque es correcto, "Padre Celestial" es el término usado en la Iglesia)',
                  '"Usted..." (en español debemos usar tú/te/ti — más formal para el sagrado)',
                ],
              },
              right: {
                label: 'Cómo SÍ dirigirse',
                points: [
                  '"Padre Celestial..." — siempre así',
                  'En inglés: "Heavenly Father..."',
                  'Luego los agradecimientos: "Te doy gracias por..."',
                  'Luego las peticiones: "Te pido que..."',
                  'Cierre: "En el nombre de Jesucristo, amén."',
                ],
              },
            },
            {
              type: 'highlight_verse',
              reference: '3 Nefi 18:19–20',
              text: 'Por tanto, debéis siempre orar al Padre en mi nombre; y lo que sea que pidáis al Padre en mi nombre, que sea justo, en fe, creyendo que recibiréis, he aquí, os será dado.',
            },
            {
              type: 'key_points',
              points: [
                'En español usamos "tú/te/ti/tu" para dirigirnos al Padre — igual que "thou/thee" en inglés antiguo',
                'Nunca "usted" — el tuteo en este contexto expresa reverencia, no familiaridad excesiva',
                'La oración siempre cierra "En el nombre de Jesucristo, amén" — sin excepciones',
                '"Amén" lo dicen todos los presentes al final — no solo quien oró',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Oración Personal vs. Oración Grupal',
      intro: {
        romanNumeral: 'II',
        title: 'Una Diferencia que Muchos No Conocen',
        paragraphs: [
          'Hay un ajuste que pocos conocen y que la mayoría pasa por alto: cuando oras por ti solo, usas primera persona singular. Cuando oras por un grupo, usas primera persona plural. Parece sencillo, pero es uno de los errores más comunes.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Singular y Plural — La Regla Sencilla',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Oración personal (solo tú)',
                points: [
                  '"Te doy gracias por las bendiciones que me has dado"',
                  '"Te pido que me ayudes a estudiar hoy"',
                  '"Bendíceme para poder ser un mejor padre"',
                  '"Guíame en mis decisiones"',
                  '"Perdóname por..."',
                ],
              },
              right: {
                label: 'Oración grupal (oras por todos)',
                points: [
                  '"Te damos gracias por las bendiciones que nos has dado"',
                  '"Te pedimos que nos ayudes en nuestra reunión"',
                  '"Bendícenos a todos los que estamos aquí"',
                  '"Guíanos mientras estudiamos juntos"',
                  '"Perdónanos por..."',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'El error más frecuente es mezclar los dos: decir "te pedimos" cuando estás orando solo, o "te pido" cuando estás orando por toda una clase. Antes de empezar una oración pública, la pregunta útil es: "¿Estoy orando por mí o por todos nosotros?"',
            },
            {
              type: 'steps',
              title: 'Checklist antes de orar en público',
              steps: [
                '¿Estoy orando por un grupo? Entonces usaré "nos/nosotros/nuestro"',
                '¿Por qué cosa específica voy a dar gracias? Tenla en mente antes de empezar',
                '¿Qué voy a pedir específicamente? No improvisar todo en el momento',
                '¿Hay algún propósito especial de esta reunión que deba mencionar en la oración?',
                'Recuerda: cierra siempre con "En el nombre de Jesucristo, amén"',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Errores Frecuentes — y Cómo Corregirlos',
      intro: {
        romanNumeral: 'III',
        title: 'Lo Que Se Dice Sin Darse Cuenta',
        paragraphs: [
          'Todos cometemos errores en la oración — algunos de forma y otros de fondo. Conocerlos no convierte la oración en un ejercicio de perfeccionismo, sino en un espacio de intención genuina.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los Errores Más Comunes',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                label: 'Error frecuente',
                points: [
                  'Repetir "te pedimos que..." diez veces seguidas',
                  'Orar tan rápido que nadie puede seguirte',
                  'Terminar con "en tu nombre" o "en el nombre del Señor"',
                  'No decir "amén" al final',
                  'Agradecer cosas muy genéricas: "gracias por todo lo que tienes para nosotros"',
                ],
              },
              right: {
                label: 'La corrección',
                points: [
                  'Varía el lenguaje: "también te pedimos", "rogamos que", "pido humildemente"',
                  'Ora en el ritmo en que hablas normalmente — el silencio entre frases es reverente, no incómodo',
                  'Siempre: "En el nombre de Jesucristo, amén"',
                  'El amén lo dicen todos — quien ora y quienes escuchan',
                  'Sé específico: "gracias por la salud de mi familia esta semana", "por la inspiración que sentí hoy"',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'La "oración vana" que Mateo 6:7 menciona no se refiere a repetir frases — se refiere a orar sin intención real, como si las palabras solas produjesen el resultado. El antídoto no es perfeccionar la forma: es orar con el corazón presente.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo sería diferente tu próxima oración familiar o personal si aplicas conscientemente las cuatro partes: dirección, gratitud, petición, cierre? ¿Qué cambiarías primero?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Cuál de los errores mencionados reconoces en tus propias oraciones? Escribe qué cambio concreto harás esta semana.' },
                { id: 'np2', question: 'La próxima vez que ores en voz alta por un grupo (familia, clase, reunión), ¿qué cosa específica de gratitud y qué petición concreta llevarás preparada?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
