import type { Lesson } from '@/types/doctrine'

export const debora: Lesson = {
  id: 'debora',
  moduleId: 'personajes-escrituras',
  title: 'Débora — La Jueza que Libró a Israel',
  subtitle: 'Profetisa, jueza, guerrera — la única que gobernó Israel antes de la monarquía',
  description: 'Débora era jueza, profetisa y lideresa militar en Israel. Bajo su liderazgo Israel derrotó al ejército de Sísara. Su cántico (Jueces 5) es una de las piezas de poesía más antiguas de la Biblia. Su historia es la evidencia más poderosa de liderazgo femenino en el AT.',
  level: 'INTERMEDIO',
  icon: '🐝',
  duration: 50,
  order: 63,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Única Jueza de Israel',
      intro: { romanNumeral: 'I', title: 'Jueces 4 — La Palma de Débora', paragraphs: ['La mujer que gobernó toda la nación'] },
      topics: [
        {
          id: 't1',
          title: 'Jueza, profetisa y madre en Israel',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Jueces 4:4-5 describe a Débora con tres títulos distintos: profetisa (neviá), mujer de Lapidot, y jueza de Israel. "Y ella juzgaba a Israel en aquel tiempo... y los hijos de Israel subían a ella a juicio." No hay narrativa de cómo llegó al cargo, sin justificación, sin debate. Simplemente era la jueza — y todo Israel la reconocía como tal. Ningún otro juez en el libro es descrito ejerciendo la justicia de manera tan directa y cotidiana.' },
            { type: 'doctrine_box', id: 'db1', title: '"Madre en Israel"', body: 'En su cántico (Jueces 5:7), Débora se describe a sí misma como "madre en Israel." Este título no es diminutivo — es uno de los más altos de liderazgo en la cultura hebrea. Una "madre en Israel" era fundadora de familia, protectora de la comunidad, fuente de sabiduría y refugio para los vulnerables. Débora combinó autoridad judicial, don profético y maternidad espiritual de toda una nación.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El General que Necesitaba a una Mujer',
      intro: { romanNumeral: 'II', title: 'Barac y Débora — La Colaboración', paragraphs: ['El comandante que no iría sin la profetisa'] },
      topics: [
        {
          id: 't2',
          title: 'La condición de Barac',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Jueces 4:8-9', text: 'Y Barac le respondió: Si tú fueres conmigo, yo iré; pero si no fueres conmigo, no iré. Ella le dijo: Iré contigo; mas no será tuya la gloria de la jornada que emprendes, porque en mano de mujer venderá Jehová a Sísara.' },
            { type: 'paragraph', id: 'p2', text: 'La condición de Barac — "si tú fueres conmigo, yo iré" — ha sido interpretada de maneras opuestas. Algunos lo ven como falta de fe; otros como reconocimiento sabio de que la presencia del profeta era la fuente real del poder. Hebreos 11:32 incluye a Barac en el salón de la fe. Débora aceptó ir, pero advirtió que la gloria sería de otra mujer — profecía que se cumplió cuando Jael, y no Barac, mató a Sísara.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Victoria y el Cántico',
      intro: { romanNumeral: 'III', title: 'Jueces 5 — Uno de los Textos más Antiguos de la Biblia', paragraphs: ['La celebración de la liberación en verso'] },
      topics: [
        {
          id: 't3',
          title: 'El cántico de Débora',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Jueces 5:2', text: 'Por haberse puesto al frente los caudillos en Israel, por haberse ofrecido voluntariamente el pueblo, Load a Jehová.' },
            { type: 'paragraph', id: 'p3', text: 'El cántico de Jueces 5 es considerado por los eruditos uno de los textos más antiguos del Antiguo Testamento — posiblemente compuesto cerca del tiempo de los eventos que narra. Es historia celebrada como poesía. El cántico menciona a las tribus que participaron y las que no; celebra a Jael; llora la espera de la madre de Sísara. Es textura literaria e histórica densa, y Débora es su voz.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Débora y el Liderazgo Femenino',
      intro: { romanNumeral: 'IV', title: 'La Teología de un Texto Incómodo', paragraphs: ['Lo que no puede ignorarse en el texto'] },
      topics: [
        {
          id: 't4',
          title: 'Autoridad sin asterisco',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'El texto de Jueces 4-5 no se disculpa por el liderazgo de Débora ni lo presenta como señal de fracaso de los hombres (una interpretación posterior sin base textual). Es simplemente: Débora juzgaba a Israel, el Señor habló a través de ella, y bajo su liderazgo Israel fue liberado. La Restauración valora el ministerio profético de las mujeres (Joel 2:28, citado en Hechos 2:17 por Pedro: "vuestras hijas profetizarán"). El precedente de Débora es relevante para entender el alcance del don profético sin fronteras de género.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué modifica en tu comprensión del liderazgo espiritual el hecho de que Dios eligiera a Débora — jueza, profetisa, lideresa militar — para librar a toda Israel en un período sin monarquía? ¿Qué dice eso sobre a quién Dios llama?' },
          ],
        },
      ],
    },
  ],
}
