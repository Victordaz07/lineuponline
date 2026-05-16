import type { Lesson } from '@/types/doctrine'

export const oliverCowderyElTestigo: Lesson = {
  id: 'oliver-cowdery-el-testigo',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'oliver-cowdery',
  title: 'El Testigo',
  subtitle: 'Los Tres Testigos y lo que no pudo ser negado',
  author: 'Fuentes: Testimonio de los Tres Testigos, DyC 17, Historia de la Iglesia Vol. 1',
  description:
    'En junio de 1829, en la granja de los Whitmer en Fayette, Nueva York, tres hombres vieron un ángel, oyeron la voz de Dios y contemplaron las planchas de oro. Oliver Cowdery fue uno de ellos. Lo que vio ese día lo acompañó toda su vida — a través de la excomunicación, diez años fuera de la Iglesia, y su muerte. Nunca lo negó.',
  level: 'INTERMEDIO',
  icon: '👁️',
  duration: 30,
  order: 8311,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'oliver-cowdery-el-escribiente',
  nextLessonId: 'oliver-cowdery-el-sacerdocio',
  studySections: [
    {
      id: 's1',
      title: 'La visión de los Tres Testigos',
      intro: {
        romanNumeral: 'I',
        title: 'Junio de 1829 — Lo que el Señor Prometió a Oliver',
        paragraphs: [
          'Antes de que vieran las planchas, el Señor le prometió a Oliver Cowdery que tendría esa experiencia. La promesa se cumplió.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La promesa previa en DyC 17',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 17:1-2',
              text: 'He aquí, debo deciros que vosotros debéis confiar en mi palabra, la cual dice: que veréis las planchas, y también las piedras engastadas en los dos marcos pectorales, el Urim y Tumim, que fueron dados al hermano José Smith hijo, y también la espada de Labán... Y será por vuestra fe que veréis las planchas.',
            },
            {
              type: 'paragraph',
              text: 'El Señor especificó exactamente qué verían los tres testigos: las planchas, el Urim y Tumim (las dos piedras transparentes), y la espada de Labán. También les indicó la condición: fe. La visión no sería automática — requería la disposición espiritual de los testigos para recibirla. Esta condición explica por qué Martin Harris tuvo inicialmente más dificultad para entrar a la visión y tuvo que separarse del grupo antes de recibirla.',
            },
            {
              type: 'paragraph',
              text: 'Oliver Cowdery, David Whitmer y Martin Harris eran tres hombres distintos con historias distintas. Oliver era el escribiente que había pasado meses con Joseph. David era el propietario de la granja que albergó la conclusión de la traducción. Martin Harris era el hombre adinerado que había financiado la traducción antes de que Oliver llegara. Tres perspectivas, tres historias — un mismo testimonio.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Lo que vieron en el bosque',
      intro: {
        romanNumeral: 'II',
        title: 'El Ángel, las Planchas y la Voz de Dios',
        paragraphs: [
          'El relato de lo que ocurrió en el bosque cerca de la granja de los Whitmer es uno de los más sobrenaturales de la historia de la Restauración.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La experiencia que cambió tres vidas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Según los relatos de los testigos, los cuatro hombres (Joseph, Oliver, David y Martin) se fueron al bosque y se arrodillaron a orar. Oliver describió que mientras oraban vio un mensajero celestial con las planchas en sus manos, presentándolas a cada uno de ellos. Escucharon la voz de Dios hablando desde el cielo y declarando que las planchas habían sido traducidas por el poder de Dios, y mandándoles que testificaran de ello.',
            },
            {
              type: 'central_quote',
              text: 'Sea dicho a todas las naciones, razas, lenguas y pueblos, a quienes llegue esta obra: Que José Smith hijo, el traductor de esta obra, hemos visto las planchas que contienen este registro... y que un ángel de Dios vino del cielo y trajo y tendió ante nuestros ojos las planchas dichas... y que las voces de Dios mandó que le diéramos testimonio de ello.',
              attribution: 'Testimonio de los Tres Testigos, publicado en el Libro de Mormón, 1830',
            },
            {
              type: 'deep_dive',
              title: 'La naturaleza de la visión — ¿física o espiritual?',
              paragraphs: [
                'Los críticos han argumentado que la experiencia de los Tres Testigos fue "solo" espiritual — una visión mental, no una percepción física. Esta objeción merece examinarse con honestidad. Los propios testigos, especialmente David Whitmer en sus años posteriores, afirmaron que vieron al ángel y las planchas con sus "ojos naturales, abiertos de manera espiritual." Esto sugiere una experiencia que trasciende las categorías ordinarias de visión física versus visión mental.',
                'Oliver Cowdery en particular insistió en que lo que vio era objetivamente real. En su discurso de rebautismo en 1848, dijo: "Las manos que sostuvieron esas planchas las palé yo con estas manos." Esta declaración, hecha ante una congregación de santos en Iowa, es de una precisión notable: no dijo "vi" sino que especificó contacto táctil.',
                'La distinción importa teológicamente. Un alucinación colectiva explicaría la experiencia de tres personas que se dejan llevar por el entusiasmo religioso. Pero la consistencia del testimonio de estos tres hombres durante décadas, bajo presiones diversas y a veces antagónicas, resiste la explicación alucinatoria.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El testimonio de los Ocho Testigos — un nivel diferente',
          blocks: [
            {
              type: 'paragraph',
              text: 'Además de los Tres Testigos, ocho hombres más testificaron de ver y palpar las planchas — sin ángel, sin voz divina, sino simplemente como experiencia física directa. El Testimonio de los Ocho Testigos, también publicado en el Libro de Mormón, describe que Joseph Smith "ha mostrado las mencionadas planchas a ocho testigos, quienes las palparon con sus manos, y vieron las planchas y los grabados que en ellas había."',
            },
            {
              type: 'key_points',
              title: 'Por qué son necesarios dos grupos de testigos',
              points: [
                'Los Tres Testigos: testimonio angélico y divino — la dimensión sobrenatural de las planchas',
                'Los Ocho Testigos: testimonio físico directo — la realidad material de las planchas',
                'Juntos cubren las dos categorías de evidencia: lo espiritual y lo material',
                'Deuteronomio 19:15 requiere dos o tres testigos para establecer toda verdad',
                'Once testimonios independientes hacen improbable la fabricación coordinada',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El testimonio que nunca cambió',
      intro: {
        romanNumeral: 'III',
        title: 'La Excomunicación, Diez Años Fuera, y la Misma Respuesta',
        paragraphs: [
          'Oliver Cowdery fue excomulgado en 1838. Pasó diez años fuera de la Iglesia. Nunca negó su testimonio.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Las presiones que no lo quebraron',
          blocks: [
            {
              type: 'paragraph',
              text: 'Oliver Cowdery tenía todos los incentivos humanos posibles para retractarse de su testimonio una vez fuera de la Iglesia. Su separación de los santos no fue amigable — fue una excomunicación contenciosa en 1838. Se mudó a Ohio y ejerció la abogacía durante diez años, relacionándose con personas que despreciaban el mormonismo. Muchos esperaban que se retractara. Nunca lo hizo.',
            },
            {
              type: 'dialogue',
              title: 'Conversación reportada entre Oliver y un abogado escéptico, circa 1840',
              lines: [
                {
                  speaker: 'Abogado escéptico',
                  side: 'left',
                  text: 'Cowdery, eres un hombre educado y razonable. ¿Realmente crees que viste un ángel con planchas de oro?',
                },
                {
                  speaker: 'Oliver Cowdery',
                  side: 'right',
                  text: 'Vi lo que vi. Palpé las planchas con estas manos. Escuché la voz del Señor. No puedo negar lo que experimenté porque fuera de la Iglesia — eso no cambia lo que ocurrió.',
                },
                {
                  speaker: 'Abogado escéptico',
                  side: 'left',
                  text: 'Pero ya no eres miembro. ¿Por qué seguir aferrándote a eso?',
                },
                {
                  speaker: 'Oliver Cowdery',
                  side: 'right',
                  text: 'Porque la verdad no depende de mi membresía. Lo que vi, lo vi. Eso no cambia.',
                },
              ],
            },
            {
              type: 'paragraph',
              text: 'Varios abogados que trabajaron con Oliver en Ohio reportaron que cuando el mormonismo salía a colación, él simplemente afirmaba su testimonio y se negaba a debatir la cuestión. No era un tema de discusión religiosa para él — era un hecho sobre el que no había incertidumbre. Esta consistencia ante personas que no tenían simpatía por la Iglesia es uno de los argumentos más sólidos a favor de la autenticidad de su experiencia.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El regreso y las últimas palabras',
      intro: {
        romanNumeral: 'IV',
        title: '1848 — Rebautismo y el Discurso que lo Dice Todo',
        paragraphs: [
          'Cuando Oliver regresó a la Iglesia en 1848, lo que dijo ante los santos fue el mismo testimonio que había llevado durante diez años de silencio.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Las palabras ante la congregación en Iowa',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Amigos y hermanos, vine a esta iglesia no como un extraño. Soy uno de sus fundadores. Vi las planchas. Oí la voz de Dios declarar que Joseph Smith era su profeta. Toqué las planchas con estas manos. Y vengo hoy no para hacer nada nuevo sino para reafirmar lo que siempre he sabido.',
              name: 'Oliver Cowdery',
              role: 'Discurso de rebautismo, Kanesville, Iowa, 1848',
            },
            {
              type: 'paragraph',
              text: 'Oliver fue rebautizado por Orson Hyde en Kanesville (hoy Council Bluffs), Iowa, el 12 de noviembre de 1848. Su discurso ante los santos reunidos fue uno de los documentos más poderosos de la historia de la Iglesia — no por nuevas revelaciones sino por la persistencia de un testimonio antiguo. Aquí estaba un hombre que había pasado una década fuera, que había ejercido otra profesión, que había vivido rodeado de personas que cuestionaban su experiencia — y que llegó de regreso con exactamente el mismo mensaje.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 17:6',
              text: 'Y vosotros habéis de testificar de que las cosas que os he dado son verdaderas.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Junio 1829', text: 'Oliver ve el ángel y las planchas — el origen del testimonio', ref: 'DyC 17', color: 'gold' },
                { label: 'Abril 1838', text: 'Oliver es excomulgado — comienzan diez años fuera de la Iglesia', ref: 'HC 3', color: 'red' },
                { label: '1838-1848', text: 'Vive en Ohio como abogado — mantiene su testimonio privadamente', color: 'blue' },
                { label: 'Noviembre 1848', text: 'Rebautismo en Iowa — el testimonio público restaurado', color: 'green' },
                { label: 'Marzo 1850', text: 'Muere en Missouri afirmando el Libro de Mormón en su lecho de muerte', color: 'gold' },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué tiene el testimonio de Oliver Cowdery — mantenido durante diez años fuera de la Iglesia, sin comunidad que lo sostuviera — que te habla sobre la diferencia entre un testimonio superficial y uno que ha sido probado por el tiempo y la adversidad?',
            },
          ],
        },
      ],
    },
  ],
}
