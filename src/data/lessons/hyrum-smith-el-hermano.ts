import type { Lesson } from '@/types/doctrine'

export const hyrumSmithElHermano: Lesson = {
  id: 'hyrum-smith-el-hermano',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'hyrum-smith',
  title: 'El Hermano',
  subtitle: 'El primero en creer en José',
  author: 'Fuentes: Historia de la Iglesia; DyC 11; Declaración de los Ocho Testigos; Testimonios familiares',
  description:
    'Hyrum Smith tenía seis años más que su hermano profeta y fue el primero de la familia en creer plenamente en su testimonio. Uno de los Ocho Testigos que manejaron físicamente las planchas de oro, su nombre aparece en cada edición del Libro de Mormón. Su historia plantea una pregunta que muchos miembros conocen en carne propia: ¿qué significa ser el hermano creyente en una familia de fe mixta?',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 30,
  order: 8210,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'hyrum-smith',
  nextLessonId: 'hyrum-smith-el-patriarca',
  studySections: [
    {
      id: 's1',
      title: 'Hyrum — Antes de la Restauración',
      intro: {
        romanNumeral: 'I',
        title: 'El Mayor de los Hermanos Smith',
        paragraphs: [
          'Para entender a Hyrum Smith, hay que entender a la familia Smith — sus esperanzas, sus pérdidas, y la dinámica que preparó a Hyrum para ser el primero en creer lo que su hermano menor diría.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La familia Smith y el peso del primogénito',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hyrum Smith nació el 9 de febrero de 1800, en Tunbridge, Vermont — seis años antes que José. Era el segundo de once hijos de Joseph Smith Sr. y Lucy Mack Smith, y el mayor sobreviviente tras la muerte temprana de Alvin, el primogénito. Con la muerte de Alvin en 1823, a los 25 años, Hyrum absorbió de facto las responsabilidades del hijo mayor: estabilidad, ejemplo, sostén emocional para sus padres y hermanos menores.',
            },
            {
              type: 'paragraph',
              text: 'Los Smith eran una familia de fe intensa pero también de duda. Joseph Smith Sr. tuvo una trayectoria religiosa torturada — buscó durante años sin encontrar la iglesia correcta, y sus sueños proféticos (que Lucy Mack Smith documenta en su historia) lo marcaron profundamente. Lucy era firme en su fe en Dios aunque igualmente escéptica de las denominaciones establecidas. Hyrum creció en este hogar donde la búsqueda espiritual era central pero la certeza eclesiástica era esquiva.',
            },
            {
              type: 'timeline',
              items: [
                { label: '1800', text: 'Hyrum Smith nace en Tunbridge, Vermont — el segundo hijo, futuro mayor sobreviviente', color: 'gold' },
                { label: '1805', text: 'José Smith Jr. nace — Hyrum tiene cinco años cuando llega su hermano profeta', color: 'blue' },
                { label: '1823', text: 'Muerte de Alvin Smith — el hermano mayor muere; Hyrum asume responsabilidades de primogénito', color: 'red' },
                { label: '1823', text: 'José recibe la primera visita de Moroni — Hyrum está en el hogar; José le cuenta', color: 'gold' },
                { label: '1827', text: 'José recibe las planchas — Hyrum es uno de los primeros en saberlo', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'La muerte de Alvin y su efecto en los Smith',
          blocks: [
            {
              type: 'paragraph',
              text: 'La muerte de Alvin Smith en noviembre de 1823 fue un golpe del que la familia Smith tardó años en recuperarse. Alvin había sido el sostén práctico de la familia — trabajador incansable, de carácter firme, el que planeaba y construía. José Smith Sr. escribió en su diario que Alvin era "el mejor hijo que un padre podría desear." Su pérdida abrió un vacío que Hyrum tuvo que llenar sin haber sido preparado para ello.',
            },
            {
              type: 'doctrine_box',
              title: 'Alvin Smith en la Visión de José — DyC 137',
              body: 'En enero de 1836, José Smith tuvo una visión del Celestial Reino en la que vio a su difunto hermano Alvin. Esta visión, registrada en DyC 137, plantó la semilla de la doctrina del bautismo por los muertos: Dios proveerá para quienes murieron sin oportunidad de recibir el evangelio. La preocupación de José por Alvin — y por la salvación de quienes murieron antes de la Restauración — dio lugar a una de las doctrinas más características de la Iglesia. El amor fraternal en la familia Smith literalmente generó revelación.',
            },
            {
              type: 'reflection',
              prompt: '¿Has tenido un miembro de tu familia cuya muerte abrió una pregunta espiritual que te llevó a buscar respuestas en el evangelio? ¿Cómo se relaciona esa experiencia con la de los Smith?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Primero en Creer',
      intro: {
        romanNumeral: 'II',
        title: '"Hyrum Fue Mi Fortaleza" — José Smith',
        paragraphs: [
          'Cuando José comenzó a compartir sus experiencias con las visiones y las planchas, la reacción de la familia fue mixta. Hyrum fue el primero en creer plenamente y el que nunca dejó de creer.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La revelación temprana de Hyrum — DyC 11',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 11:17-19',
              text: 'Y ahora os digo, Hyrum, busca obtener mi palabra, y luego, si tú lo deseas, tendrás el Espíritu Santo y el poder para traer la palabra mía a vuestro prójimo. Mas no trates de declarar mi palabra, sino que primeramente busca obtenerla y luego tu boca se abrirá al declarar la palabra mía; sí, declara las cosas que estaban escritas por los profetas y los apóstoles de antaño. Bienaventurado eres tú, Hyrum, porque obtienes mis palabras, y no buscas sino lo que en verdad te dije.',
            },
            {
              type: 'paragraph',
              text: 'DyC 11 fue recibida en mayo de 1829 — incluso antes de que la Iglesia fuera organizada formalmente. Hyrum era creyente antes de que hubiera Iglesia que apoyar. La revelación lo llama "bienaventurado" por su fe, y la instrucción que recibe es característica de Hyrum: no te apresures a predicar — primero aprende, estudia, llénate. La revelación refleja a un hombre que ya era conocido por su seriedad y su disposición a prepararse antes de actuar.',
            },
            {
              type: 'paragraph',
              text: 'Esta instrucción — "busca obtener mi palabra" primero — también revela algo sobre el carácter de Hyrum. Era un hombre que hacía las cosas bien antes de hacerlas rápido. Su hermano José era más impulsivo, más dramático. Hyrum era el ancla. La revelación le dice, en esencia, sé quién eres: estudia, prepárate, y entonces habla.',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Uno de los Ocho Testigos',
          blocks: [
            {
              type: 'paragraph',
              text: 'En junio de 1829, Hyrum Smith fue uno de los Ocho Testigos que manejaron físicamente las planchas de oro del Libro de Mormón. A diferencia de los Tres Testigos — que las vieron en visión — los Ocho Testigos las tocaron, las pesaron, pasaron sus dedos por las láminas grabadas. La Declaración de los Ocho Testigos comienza: "...hemos visto y manejado con nuestras manos... y hemos visto los grabados que hay en ellas."',
            },
            {
              type: 'central_quote',
              text: 'Hemos visto y manejado con nuestras manos... y hemos visto los grabados que hay en ellas, todos los cuales tiene el aspecto de obra antigua y de curiosa hechura; y esto testificamos con palabras de sobriedad, que el dicho Smith tiene las planchas de que hemos hablado.',
              attribution: 'Declaración de los Ocho Testigos — Hyrum Smith firma primero en la lista',
            },
            {
              type: 'paragraph',
              text: 'El nombre de Hyrum encabeza la lista de los Ocho Testigos. Fue primero entre los que manejaron las planchas físicamente — como había sido primero en creer en su hermano. Su firma en esa declaración apareció en cada edición del Libro de Mormón desde 1830 hasta hoy. Más de dos siglos después, la firma de Hyrum sigue atestiguando su experiencia.',
            },
            {
              type: 'key_points',
              title: 'Los Ocho Testigos y lo que Hyrum representa entre ellos',
              points: [
                'Los Ocho vieron y tocaron las planchas físicamente — experiencia sensorial directa',
                'Hyrum firma primero en la Declaración de los Ocho — el hermano creyente al frente',
                'A diferencia de algunos Tres Testigos (Cowdery, Harris, Whitmer), ninguno de los Ocho se alejó de la Iglesia permanentemente',
                'Hyrum nunca retractó su testimonio hasta su muerte en Carthage',
                'Su firma aparece en cada edición del Libro de Mormón desde 1830',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Hermano Creyente en la Familia',
      intro: {
        romanNumeral: 'III',
        title: 'Lo que Significa Creer Cuando Tu Familia No Comparte Tu Fe',
        paragraphs: [
          'La pregunta que la historia de Hyrum plantea no es solo histórica — es personal para muchos miembros que son los únicos creyentes en su familia, o los primeros en creer.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La dinámica familiar de los Smith',
          blocks: [
            {
              type: 'paragraph',
              text: 'La familia Smith no fue uniformemente creyente desde el principio. Aunque los padres — Joseph Sr. y Lucy Mack — llegaron a creer, hubo períodos de duda y resistencia. Otros miembros de la comunidad de Palmyra — incluyendo vecinos y conocidos cercanos — no creyeron. Hyrum eligió creer en un ambiente donde hacerlo tenía un costo social real.',
            },
            {
              type: 'paragraph',
              text: 'No hay registro de que Hyrum haya dudado de José. En un período en que incluso personas cercanas al profeta cuestionaban, debatían, o se alejaban, Hyrum mantuvo una lealtad que José describió como su mayor fortaleza personal. "Hyrum fue mi fortaleza," dijo José. No su consejero más brillante, no su orador más persuasivo — su fortaleza. El que simplemente no se iba.',
            },
            {
              type: 'dialogue',
              title: 'Lo que significa ser el hermano creyente',
              lines: [
                { speaker: 'Un miembro de hoy', side: 'left', text: '¿Cómo puedo mantener mi testimonio cuando nadie en mi familia comparte mi fe?' },
                { speaker: 'La historia de Hyrum', side: 'right', text: 'Hyrum creyó en su hermano antes de que hubiera una Iglesia, antes de que hubiera otros creyentes cercanos. Su fe no dependía de una comunidad que lo sostuviera — dependía de lo que él mismo había visto y tocado.' },
                { speaker: 'Un miembro de hoy', side: 'left', text: '¿Pero no es solitario creer cuando otros no creen?' },
                { speaker: 'La historia de Hyrum', side: 'right', text: 'Sin duda. Pero la soledad del creyente en una familia de fe mixta no es nueva ni excepcional — es parte del costo de ser el primero. Alguien siempre es el primero. Hyrum lo fue en su familia.' },
              ],
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Lo que la fe de Hyrum enseña',
          blocks: [
            {
              type: 'paragraph',
              text: 'La fe de Hyrum no era la fe del entusiasta que necesita nuevos milagros cada semana para mantenerse. Era la fe del que vio algo real — las planchas en sus manos, la traducción emergiendo, la Iglesia formándose — y decidió que eso era suficiente para comprometer su vida. No buscó más señales después de eso. Vivió desde ese fundamento durante quince años, hasta que murió en Carthage.',
            },
            {
              type: 'doctrine_box',
              title: 'La Fe como Decisión, No Solo como Sentimiento',
              body: 'La fe de Hyrum ilustra un principio frecuentemente olvidado: la fe madura no es un estado emocional constante sino una decisión renovada de actuar sobre lo que se sabe. Hyrum no siempre tuvo certeza de todo. Pero decidió actuar como creyente incluso cuando las circunstancias — persecución, pobreza, pérdidas — habrían justificado el retiro. DyC 11:17 le dice "bienaventurado eres, Hyrum" — no porque tuviera visiones ni señales, sino porque obtuvo la palabra de Dios y actuó en consecuencia.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Eres el primero en creer en tu familia, o tienes un "Hyrum" en tu familia cuya fe te ha sostenido? ¿Cómo has experimentado esa dinámica?' },
                { id: 'p2', question: '¿Qué diferencia hace, en la práctica, tener a alguien que "simplemente no se va" — que permanece fiel sin hacer ruido — en tu vida espiritual?' },
                { id: 'p3', question: 'DyC 11 le dice a Hyrum "busca obtener mi palabra primero." ¿Cuál es la palabra que necesitas obtener — estudiar, entender, hacer propia — antes de poder compartir tu fe con otros?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
