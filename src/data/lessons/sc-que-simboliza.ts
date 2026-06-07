import type { Lesson } from '@/types/doctrine'

export const scQueSimboliza: Lesson = {
  id: 'sc-que-simboliza',
  moduleId: 'la-santa-cena',
  title: '¿Qué Simboliza la Santa Cena?',
  subtitle: 'Pan, agua, manto blanco — cada elemento tiene un mensaje revelado',
  description:
    'El pan no es solo pan y el agua no es solo agua. Cada elemento de la Santa Cena carga siglos de simbolismo bíblico y doctrina restaurada. Esta lección abre el lenguaje simbólico de la ordenanza más frecuente de la Iglesia.',
  level: 'BÁSICO',
  icon: '🍞',
  duration: 30,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Pan',
      intro: {
        romanNumeral: 'I',
        title: 'El Pan',
        paragraphs: [
          'El pan representa el cuerpo de Cristo. Pero meses antes de instituir la Santa Cena, Jesús ya se había llamado a sí mismo "el Pan de Vida" — y esa declaración transforma lo que vemos en la bandeja cada domingo.',
        ],
      },
      topics: [
        {
          id: 'el-pan',
          title: 'El Pan de Vida hecho ordenanza',
          subtitle:
            'En Juan 6, Jesús hizo la declaración más escandalosa de su ministerio. Muchos discípulos lo abandonaron ese día. Esas mismas palabras son la teología detrás del pan que partimos cada semana.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Meses antes de la Última Cena, en la sinagoga de Capernaúm, Jesús pronunció palabras que escandalizaron a la multitud y llevaron a muchos discípulos a abandonarle. Pero esas palabras son la clave para entender el pan de la Santa Cena.',
              blockId: 'sc2s1p0',
            },
            {
              type: 'highlight_verse',
              text: '"Yo soy el pan vivo que descendió del cielo; si alguno comiere de este pan, vivirá para siempre; y el pan que yo daré es mi carne, la cual yo daré por la vida del mundo. De cierto, de cierto os digo: Si no coméis la carne del Hijo del Hombre, ni bebéis su sangre, no tenéis vida en vosotros."',
              reference: 'Juan 6:51, 53',
            },
            {
              type: 'paragraph',
              text: 'El maná en el desierto sostuvo a Israel cuarenta años. Pero quienes lo comieron eventualmente murieron. Jesús dice: "Yo soy el pan que descendió del cielo — no como vuestros padres que comieron el maná, y murieron; el que come de este pan vivirá eternamente" (Juan 6:58). La Santa Cena es la forma concreta en que "comemos" de ese pan cada semana.',
              blockId: 'sc2s1p1',
            },
            {
              type: 'doctrine_box',
              title: 'El pan partido — muerte y resurrección',
              body: 'El pan se parte antes de bendecirlo. No es casual: representa el cuerpo de Cristo quebrantado en la cruz. Pero el pan partido también es comido y se convierte en sustento — símbolo de la resurrección que convierte su muerte en nuestra vida. Pablo escribe: "El pan que partimos, ¿no es la comunión del cuerpo de Cristo?" (1 Corintios 10:16). "Comunión" (koinonía en griego) significa participación real, vínculo activo — no solo memoria pasiva.',
            },
            {
              type: 'compare_grid',
              title: 'El maná vs. el Pan de Vida',
              columns: ['', 'Maná del Desierto', 'Pan de la Santa Cena'],
              rows: [
                ['Origen', 'Del cielo (provisión temporal)', 'Del cielo (Cristo mismo)'],
                ['Duración', 'Una generación', 'Vida eterna'],
                ['Frecuencia', 'Diaria (Éxodo 16)', 'Semanal (cada domingo)'],
                ['Resultado', 'Sustento físico, muerte eventual', 'Sustento espiritual, vida eterna'],
              ],
            },
            {
              type: 'reflection',
              prompt:
                'La próxima vez que veas el pan siendo partido sobre la mesa sacramental, ¿qué verás diferente? ¿Qué acto de Cristo representa ese gesto que ocurre en silencio antes de la oración?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Agua',
      intro: {
        romanNumeral: 'II',
        title: 'El Agua',
        paragraphs: [
          '¿Por qué agua y no vino? En agosto de 1830, el Señor respondió directamente esta pregunta — y la respuesta revela algo profundo sobre dónde debe estar nuestra atención.',
        ],
      },
      topics: [
        {
          id: 'el-agua',
          title: 'El Agua — la sangre del Nuevo Convenio',
          subtitle:
            'Cristo usó vino en el aposento alto. La revelación de 1830 instruyó a la Iglesia a usar agua. La razón revela que lo sagrado no está en el elemento — está en el corazón y en el convenio.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En agosto de 1830, José Smith se disponía a comprar vino para administrar la Santa Cena cuando recibió esta revelación del Señor:',
              blockId: 'sc2s2p0',
            },
            {
              type: 'highlight_verse',
              text: '"Porque he aquí, te digo que no importa lo que comáis o bebáis al tomar el sacramento, si es que lo hacéis con la mira puesta únicamente en mi gloria, recordando ante el Padre mi cuerpo que fue sacrificado por vosotros, y mi sangre que se derramó para la remisión de vuestros pecados."',
              reference: 'Doctrina y Convenios 27:2',
            },
            {
              type: 'paragraph',
              text: 'El Señor también instruyó a José que no comprara a sus enemigos ni vino ni bebidas embriagantes (D&C 27:3–4). La Iglesia adoptó el agua como emblema permanente: pura, universalmente accesible, sin asociación con el alcohol — y revelada directamente por el Señor. Esta revelación llegó dos años antes de D&C 89. El Señor ya guiaba hacia emblemas más puros.',
              blockId: 'sc2s2p1',
            },
            {
              type: 'doctrine_box',
              title: 'La sangre del Nuevo Convenio',
              body: 'Cristo llamó a la copa "mi sangre del nuevo pacto" (Mateo 26:28). Jeremías profetizó este nuevo convenio siglos antes: "Pondré mi ley en su mente, y la escribiré en su corazón" (Jeremías 31:33). La sangre de Cristo no está en el agua — pero el agua nos lleva a contemplar esa sangre y el convenio que ella sella. Un convenio no escrito en tablas de piedra, sino en el corazón. Cada vez que bebemos, renovamos ese convenio interiorizado.',
            },
            {
              type: 'reflection',
              prompt:
                'El Señor dijo que "no importa lo que comáis o bebáis" si el corazón está puesto en Su gloria. ¿Dónde está tu mente durante los minutos en que el agua se distribuye? ¿Qué cambiaría si usaras ese tiempo con intención específica?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Los Símbolos del Contexto',
      intro: {
        romanNumeral: 'III',
        title: 'Los Símbolos del Contexto',
        paragraphs: [
          'No solo el pan y el agua son simbólicos. El manto blanco, el silencio, el himno, la mano derecha — todo habla. Ningún detalle de la Santa Cena es arbitrario.',
        ],
      },
      topics: [
        {
          id: 'simbolos-contexto',
          title: 'El manto blanco, el silencio y la mano derecha',
          subtitle:
            'El Manual ordena manteles blancos, silencio durante la distribución y recibir con la mano derecha. Cada instrucción tiene un significado doctrinal que transforma el ritual en mensaje.',
          blocks: [
            {
              type: 'key_points',
              title: 'El lenguaje simbólico de la ordenanza',
              points: [
                '🤍 El manto blanco — Representa pureza. El Manual especifica que debe ser blanco, limpio y planchado. Cubre los emblemas antes y después: los separa del mundo y los santifica. Al final de la ordenanza, cubrirlos de nuevo es el cierre formal de lo sagrado.',
                '🔇 El silencio durante la distribución — El Manual prohíbe expresamente música mientras se reparte la Santa Cena. No es protocolo cultural — es el espacio que el Señor reserva para que su Espíritu hable individualmente a cada persona en el salón.',
                '🎵 El himno sacramental — No puede reemplazarse por solos ni música instrumental. La congregación entera canta — es un acto colectivo de preparación del corazón, no una actuación. La música prepara, el silencio permite que el Espíritu actúe.',
                '🧼 Lavado de manos — "Quienes preparan, bendicen o reparten deben lavarse las manos primeramente con jabón." No es higiene — es el símbolo antiguo de pureza ante lo santo. El Salmo 24:3–4 pregunta: "¿Quién subirá al monte de Jehová? El limpio de manos y puro de corazón."',
                '🤲 La mano derecha — El Manual indica recibirla con la mano derecha cuando sea posible. El Presidente Nelson explicó: es la misma mano con que hacemos convenios sagrados. La mano derecha en la Biblia aparece 166 veces en contextos de fidelidad y poder. Extenderla es un gesto de convenio.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La Santa Cena como renovación del bautismo',
              body: 'Las oraciones del bautismo y de la Santa Cena contienen los mismos compromisos: tomar el nombre de Cristo, guardar sus mandamientos, recordarle siempre. La Santa Cena no es un segundo bautismo — es la renovación semanal de los mismos convenios. Como un aniversario de matrimonio: el contrato se firmó una sola vez, pero la promesa se renueva. Cada domingo es un "sí" renovado al Salvador.',
            },
            {
              type: 'highlight_verse',
              text: '"Y para que más íntegramente te conserves sin mancha del mundo, irás a la casa de oración y ofrecerás tus sacramentos en mi día santo."',
              reference: 'Doctrina y Convenios 59:9',
            },
            {
              type: 'reflection',
              prompt:
                '¿Qué símbolo de la Santa Cena — el pan, el agua, el manto blanco, el silencio, el himno, la mano derecha — te habla más directamente? ¿Por qué ese en particular? ¿Qué te dice de Cristo?',
            },
          ],
        },
      ],
    },
  ],
}
