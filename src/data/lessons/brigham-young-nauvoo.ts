import type { Lesson } from '@/types/doctrine'

export const brighamYoungNauvoo: Lesson = {
  id: 'brigham-young-nauvoo',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'brigham-young',
  title: 'Nauvoo',
  subtitle: 'El hombre en quien José Smith más confiaba',
  author: 'Fuentes: Historia de la Iglesia Vol. 5-7, Diario de Brigham Young, Testimonios de testigos de 1844',
  description:
    'Brigham Young fue llamado apóstol en 1835. Su misión a las Islas Británicas en 1839-1841 convirtió a miles. Joseph Smith lo llamó "el León de Israel." Cuando el martirio llegó el 27 de junio de 1844, Brigham estaba en el este predicando. La crisis de sucesión que siguió fue el momento más dramático de su vida — y el momento en que muchos testigos presenciales dijeron que su voz y aspecto se transformaron para parecerse a Joseph Smith. La Iglesia lo siguió.',
  level: 'INTERMEDIO',
  icon: '🏛️',
  duration: 30,
  order: 8411,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'brigham-young-la-conversion',
  nextLessonId: 'brigham-young-el-exodo',
  studySections: [
    {
      id: 's1',
      title: 'Apóstol desde 1835',
      intro: {
        romanNumeral: 'I',
        title: 'El León de Israel — El Apodo que Joseph le Dio',
        paragraphs: [
          'Brigham Young fue llamado como apóstol en 1835. En los nueve años que siguieron, se convirtió en el apóstol más activo, más confiable, y más capaz de la Iglesia.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El apostolado y las misiones',
          blocks: [
            {
              type: 'paragraph',
              text: 'Brigham Young fue llamado como miembro del Quórum de los Doce Apóstoles el 14 de febrero de 1835, junto con once otros hombres en la primera llamada del quórum restaurado. Tenía 33 años. Sus responsabilidades inmediatas incluían misiones itinerantes para predicar el evangelio, algo que Brigham abrazó con la misma energía total que había aplicado a la carpintería y al estudio del Libro de Mormón.',
            },
            {
              type: 'paragraph',
              text: 'Su misión a Inglaterra de 1839 a 1841 fue el trabajo más significativo de su vida antes de la sucesión. Brigham partió en julio de 1839, tan enfermo de fiebres que apenas podía montar su carruaje. Llegó a Liverpool en enero de 1840 y comenzó inmediatamente a predicar. En 18 meses, él y los otros apóstoles que lo acompañaron bautizaron a más de 8,000 personas en las Islas Británicas. La misión inglesa se convirtió en el mayor éxito evangelístico de la historia de la Iglesia hasta ese momento.',
            },
            {
              type: 'leader_quote',
              quote: 'Brigham Young es el León de Israel. Es uno de los hombres más capaces que tenemos. Cuando sale a predicar el evangelio, lo hace con toda su fuerza. Cuando trabaja para construir el reino, es el mismo hombre — total, sin reservas.',
              name: 'Joseph Smith',
              role: 'Historia de la Iglesia, circa 1843',
            },
            {
              type: 'key_points',
              title: 'El apostolado de Brigham antes del martirio',
              points: [
                'Llamado como apóstol en 1835 en la primera llamada del quórum',
                'Participó en la redención del campamento de Sión (1834)',
                'Misión a Nueva Inglaterra y Canadá (1835-1836)',
                'Supervisó la publicación de los primeros himnos de la Iglesia',
                'Misión a Inglaterra 1839-1841: más de 8,000 convertidos',
                'Presidente del Quórum de los Doce desde 1840',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El martirio — 27 de junio de 1844',
      intro: {
        romanNumeral: 'II',
        title: 'Brigham Estaba en el Este cuando Ocurrió',
        paragraphs: [
          'La muerte de Joseph y Hyrum Smith en la cárcel de Carthage cambió todo. Brigham Young estaba predicando en Boston cuando recibió la noticia.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La noticia que cambió la historia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Brigham Young recibió la noticia del martirio de Joseph y Hyrum Smith en Boston, Massachusetts, el 16 de julio de 1844, casi tres semanas después del evento. Su reacción, según sus propios escritos, fue de profundo dolor seguido de una pregunta práctica: ¿quién lidera ahora? La respuesta para Brigham era clara desde el principio — el Quórum de los Doce. Pero tenía que regresar a Nauvoo primero para hacer el caso.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 107:23-24',
              text: 'Los doce apóstoles viajantes constituyen un cuerpo igual en autoridad y poder al quórum de la Primera Presidencia. El consejo de los doce apóstoles, ordenados con el sumo apostolado, bajo la dirección de la Primera Presidencia, constituye el cuerpo viajante gobernante de la iglesia.',
            },
            {
              type: 'paragraph',
              text: 'El argumento de Brigham para la sucesión no era personal — era doctrinal. DyC 107 enseñaba que el Quórum de los Doce era "igual en autoridad y poder" a la Primera Presidencia. Cuando la Primera Presidencia se disolvió con la muerte de Joseph, la autoridad revirtió al Quórum de los Doce. Sidney Rigdon, el consejero sobreviviente de la Primera Presidencia, argumentó que él debería ser el "guardián" de la Iglesia. Brigham arguyó que la autoridad apostólica era más antigua y más fundamental.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La transfiguración de Brigham — agosto 1844',
      intro: {
        romanNumeral: 'III',
        title: 'Lo que Muchos Dijeron Haber Visto',
        paragraphs: [
          'El 8 de agosto de 1844, Brigham Young habló ante los santos en Nauvoo sobre la cuestión de la sucesión. Docenas de testigos registraron algo extraordinario.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El manto del profeta',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 8 de agosto de 1844, en una gran asamblea de saints en Nauvoo, Brigham Young habló en nombre del Quórum de los Doce. Lo que ocurrió durante ese discurso es uno de los eventos más debatidos de la historia mormona primitiva. Docenas de testigos, en testimonios escritos recogidos a lo largo de décadas, afirmaron que mientras Brigham hablaba, su voz se transformó para sonar como la de Joseph Smith, y su aspecto físico cambió momentáneamente para parecerse al del profeta fallecido.',
            },
            {
              type: 'deep_dive',
              title: 'La evidencia histórica de la "transfiguración"',
              paragraphs: [
                'El evento conocido como "la transfiguración de Brigham" o "el manto del profeta" no aparece en documentos contemporáneos de agosto de 1844. Los testimonios más tempranos que lo describen como un evento sobrenatural fueron escritos años o décadas después. Esto ha llevado a algunos historiadores a concluir que el recuerdo fue romantizado con el tiempo.',
                'Sin embargo, hay también testimonios contemporáneos que describen una experiencia poderosa — no necesariamente sobrenatural en términos físicos, sino emocionalmente abrumadora — durante el discurso de Brigham. Wilford Woodruff, escribiendo en agosto de 1844, describe la reunión como un momento donde el Espíritu confirmó que Brigham tenía autoridad legítima.',
                'La distinción importa: si el evento fue principalmente una experiencia espiritual colectiva donde los santos sintieron el Espíritu confirmar el liderazgo de Brigham, eso es históricamente documentable. Si fue una transformación física literal, la evidencia es más tardía y menos directa. La Iglesia afirma el significado espiritual del evento sin requerir una interpretación literalmente sobrenatural del aspecto físico.',
              ],
            },
            {
              type: 'central_quote',
              text: 'No tengo ninguna duda de que si Brigham Young hubiera vivido en la época de Jesús, habría sido uno de los apóstoles. Y no el último entre ellos.',
              attribution: 'Joseph Smith, circa 1843, citado en múltiples fuentes',
            },
            {
              type: 'paragraph',
              text: 'La Iglesia votó abrumadoramente para seguir al Quórum de los Doce bajo el liderazgo de Brigham Young en agosto de 1844. Sidney Rigdon eventualmente fue excomulgado y formó su propia organización. La decisión de la membresía de Nauvoo de seguir al Quórum de los Doce estableció el principio de sucesión apostólica que ha gobernado la Iglesia desde entonces — cada presidente ha sido el presidente más antiguo del Quórum de los Doce en el momento de su llamado.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los últimos años de Nauvoo',
      intro: {
        romanNumeral: 'IV',
        title: 'Construir lo que Joseph Había Imaginado',
        paragraphs: [
          'Brigham Young dedicó los años de 1844 a 1846 a completar el Templo de Nauvoo y administrar el ministerio de las ordenanzas del templo que Joseph había introducido.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El genio organizacional silencioso',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mientras Sidney Rigdon hacía sus afirmaciones dramáticas y otros pretendientes al liderazgo agitaban a sectores de la membresía, Brigham Young hacía lo que siempre había hecho: trabajaba. Organizó la finalización del Templo de Nauvoo — que Joseph no había podido completar. Administró las ordenanzas del templo que Joseph había introducido en los últimos meses de su vida. Coordinó el cuidado de la viuda de Joseph y sus hijos. Supervisó los asuntos financieros de la Iglesia en condiciones de presión extrema.',
            },
            {
              type: 'paragraph',
              text: 'El Templo de Nauvoo fue dedicado parcialmente en diciembre de 1845, con las ordenanzas del templo administradas febrilmente a miles de santos que sabían que pronto tendrían que abandonar la ciudad. Brigham organizó sesiones que continuaron durante toda la noche durante días seguidos. Su lema implícito era el mismo que definiría su presidencia: la obra de Dios no espera.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Feb 1835', text: 'Llamado como uno de los primeros Doce Apóstoles restaurados', ref: 'HC 2:186', color: 'gold' },
                { label: '1839-1841', text: 'Misión a Inglaterra — más de 8,000 convertidos en 18 meses', color: 'green' },
                { label: '27 Jun 1844', text: 'Martirio de Joseph y Hyrum Smith en Carthage, Illinois', color: 'red' },
                { label: '8 Ago 1844', text: 'La membresía vota seguir al Quórum de los Doce — Brigham reconocido como líder', color: 'blue' },
                { label: 'Dic 1845', text: 'Templo de Nauvoo parcialmente dedicado — ordenanzas administradas masivamente', color: 'gold' },
                { label: 'Feb 1846', text: 'Comienzo del éxodo desde Nauvoo a través del río Mississippi congelado', color: 'red' },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo respondes cuando el liderazgo que te ha guiado desaparece inesperadamente — ya sea en la familia, en el trabajo, o en la fe? Brigham Young respondió organizando, trabajando, y construyendo. ¿Qué dice eso sobre la diferencia entre el liderazgo que espera circunstancias perfectas y el que construye en medio del dolor?',
            },
          ],
        },
      ],
    },
  ],
}
