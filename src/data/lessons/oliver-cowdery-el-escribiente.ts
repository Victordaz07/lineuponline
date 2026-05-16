import type { Lesson } from '@/types/doctrine'

export const oliverCowderyElEscribiente: Lesson = {
  id: 'oliver-cowdery-el-escribiente',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'oliver-cowdery',
  title: 'El Escribiente',
  subtitle: 'El hombre que transcribió el Libro de Mormón',
  author: 'Fuentes: Historia de la Iglesia, DyC 6; 8; 9, Testimonios de Oliver Cowdery',
  description:
    'En abril de 1829 un joven maestro de escuela llamado Oliver Cowdery llegó a Harmony, Pennsylvania, y casi de inmediato tomó la pluma. En los siguientes 65 días laborales transcribió 531 páginas — la mayor parte del Libro de Mormón. Él mismo describió la experiencia: las palabras fluían sin pausa, sin revisión, sin interrupción. DyC 6, 8 y 9 son sus revelaciones personales: el don de la traducción ofrecido, y luego retirado cuando intentó y falló.',
  level: 'BÁSICO',
  icon: '✍️',
  duration: 30,
  order: 8310,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'oliver-cowdery-el-testigo',
  studySections: [
    {
      id: 's1',
      title: 'El camino a Harmony',
      intro: {
        romanNumeral: 'I',
        title: 'Abril de 1829 — Un Maestro de Escuela en Busca de Verdad',
        paragraphs: [
          'Oliver Cowdery había escuchado rumores sobre un joven que traducía planchas antiguas. Decidió ir a verlo por sí mismo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Cómo llegó Oliver a la historia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Oliver Cowdery nació en 1806 en Vermont, el mismo estado que Brigham Young, y creció en una familia modesta del noreste de Nueva York. A los veinte años era maestro de escuela en el pueblo de Manchester, condado de Ontario — y se hospedó con la familia Smith. Joseph Smith padre le habló de la obra de su hijo. Oliver escuchó con interés, oró para saber si era verdad, y recibió una confirmación espiritual antes de llegar a Harmony.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 6:14-15',
              text: 'Bendito eres porque has creído; y más bendito eres porque eres llamado a participar en mi obra, pues no conoces la magnitud de la misma, y nunca la conocerás hasta el día en que me pongas de tu lado en el cielo. Por tanto, sé diligente; lleva a cabo la obra hasta su conclusión.',
            },
            {
              type: 'paragraph',
              text: 'Oliver llegó a Harmony, Pennsylvania, el 5 de abril de 1829. Dos días después comenzó a servir como escribiente. La rapidez con la que tomó el puesto es notable: no hubo período de aprendizaje ni de adaptación. La obra de la traducción estaba en marcha, y Oliver simplemente se integró al ritmo que ya existía.',
            },
            {
              type: 'doctrine_box',
              title: 'El rol del escribiente en la traducción del Libro de Mormón',
              body: 'El proceso de traducción requería dos personas: quien recibía y quien registraba. Joseph Smith recibía el texto mediante el Urim y Tumim o la piedra vidente; Oliver (y anteriores escribientes como Emma Smith y Martin Harris) transcribía palabra por palabra. Las cuentas contemporáneas sugieren que Joseph no releía lo transcrito para continuar — cada sesión seguía donde la anterior había terminado, lo cual impresionó profundamente a Oliver. La fidelidad del escribiente era esencial: un error no corregido podría haber alterado el texto sagrado.',
            },
            {
              type: 'key_points',
              title: 'Datos sobre Oliver como escribiente principal',
              points: [
                'Llegó a Harmony el 5 de abril de 1829 y comenzó a escribir el 7 de abril',
                'Transcribió aproximadamente 531 páginas del manuscrito original',
                'El trabajo se completó en aproximadamente 65 días laborales',
                'Produjo el manuscrito original (en posesión de la Iglesia) y una copia (ahora en la RLDS)',
                'Fue el único escribiente que estuvo presente durante toda la obra de traducción principal',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'DyC 6 — La revelación personal de Oliver',
      intro: {
        romanNumeral: 'II',
        title: 'Una Revelación Solo Para Él',
        paragraphs: [
          'Antes de que Oliver comenzara a escribir, el Señor le habló directamente — recordándole algo que nadie más sabía.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El secreto que confirmó todo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 6:22-23',
              text: '¿No te hablé paz a tu mente acerca de este asunto? ¿Qué testimonio mayor puede tener que el de Dios? Y ahora, he aquí, tienes este don; y bienaventurado eres por este don.',
            },
            {
              type: 'paragraph',
              text: 'La revelación en DyC 6 contenía una referencia a un evento privado que Oliver había experimentado antes de llegar a Harmony — una experiencia espiritual que nadie más conocía. Que Joseph pudiera saber de esa experiencia fue para Oliver una confirmación irrefutable de que la fuente del don de traducción era divina. Esta es la lógica de la revelación personal como testimonio: no lo que ves sino lo que solo tú y Dios saben.',
            },
            {
              type: 'paragraph',
              text: 'DyC 6 también menciona que Oliver tenía el don de trabajar con el Espíritu — lo que la revelación llama "el don de Aarón." Este don no era la traducción sino la capacidad de percibir la verdad a través del Espíritu Santo. Es el mismo don que todos los creyentes poseen en algún grado, pero en Oliver estaba particularmente desarrollado. Sería este mismo don el que luego lo llevaría a desear traducir él mismo — con resultados instructivos.',
            },
            {
              type: 'leader_quote',
              quote: 'Esa noche oré al Señor, y Él me dio paz sobre la obra. Supe entonces que era verdad, mucho antes de llegar a Harmony.',
              name: 'Oliver Cowdery',
              role: 'Segundo anciano de la Iglesia de Cristo, 1829',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'DyC 8-9 — El intento y el fracaso de traducir',
      intro: {
        romanNumeral: 'III',
        title: 'El Don Ofrecido, Intentado y Retirado',
        paragraphs: [
          'Oliver quiso traducir. El Señor le dijo que podía. Lo intentó — y falló. DyC 8 y 9 contienen una de las instrucciones más clarificadoras sobre cómo funciona la revelación.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'DyC 8 — El don de la traducción ofrecido',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 8:1-3',
              text: 'Oliver Cowdery, en verdad, en verdad te digo que el deseo que has tenido lo tendrás... Bienaventurado eres por el don que has recibido, el cual es el don de la revelación. Yo te digo que recibirás la revelación y el don del Espíritu Santo.',
            },
            {
              type: 'paragraph',
              text: 'El Señor describió el don de traducción en términos de la mente y el corazón — un proceso interno, no mecánico. Oliver debía "estudiar en su mente" y luego preguntar. Si había una sensación de rectitud (el pecho ardiendo), era correcto; si sentía estupor de pensamiento, no lo era. Este sistema requería trabajo mental activo por parte del receptor, no pasividad.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 9:7-9',
              text: 'He aquí, debes estudiar en tu mente; luego debes preguntarme si es correcto, y si es correcto, yo haré que tu pecho arda dentro de ti; por tanto, sentirás que es correcto. Pero si no es correcto, no tendrás tales sentimientos, sino que experimentarás un estupor de pensamiento.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'DyC 9 — Por qué Oliver no pudo traducir',
          blocks: [
            {
              type: 'paragraph',
              text: 'Oliver intentó traducir y no pudo. La respuesta del Señor en DyC 9 es notable por su gentileza: no lo reprende duramente sino que le explica por qué. No estudió en su mente lo suficiente antes de preguntar. Esperaba que la traducción llegara sin el trabajo previo de pensar, razonar y prepararse. El don de traducción no era mágico — era la convergencia del esfuerzo humano y la confirmación divina.',
            },
            {
              type: 'doctrine_box',
              title: 'La lección de DyC 9 sobre cómo funciona la revelación',
              body: 'El fracaso de Oliver no fue fracaso de fe — fue fracaso de método. La revelación moderna requiere que el receptor trabaje con su propia mente, formule la mejor respuesta posible, y luego pida confirmación. Dios no sustituye nuestro pensamiento — lo confirma o corrige. Este principio tiene implicaciones enormes: la oración no es un sustituto del estudio; es su complemento.',
            },
            {
              type: 'compare_grid',
              title: 'Joseph tradujo — Oliver registró: la división divina del trabajo',
              left: {
                label: 'Joseph Smith',
                points: [
                  'Receptor de la revelación de traducción',
                  'Veía el texto en el Urim y Tumim o piedra vidente',
                  'Dictaba el texto en voz alta para Oliver',
                  'Responsable del contenido recibido',
                  'Nunca pudo haber sido escribiente de otro',
                ],
              },
              right: {
                label: 'Oliver Cowdery',
                points: [
                  'Escribiente principal y testigo del proceso',
                  'Transcribía cada palabra con exactitud',
                  'Intentó traducir y no pudo (DyC 9)',
                  'Su rol era igualmente esencial aunque diferente',
                  'Fue el único presente en todo el proceso',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cuándo has esperado que Dios hiciera el trabajo intelectual por ti, en lugar de hacer tu parte primero y luego pedir confirmación? ¿Qué cambiaría en tu forma de orar y estudiar si aplicaras el principio de DyC 9?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El testimonio de la experiencia',
      intro: {
        romanNumeral: 'IV',
        title: 'Lo que Significó Ser el Escribiente',
        paragraphs: [
          'Oliver describió la experiencia de transcribir el Libro de Mormón con palabras que revelan cuánto lo transformó.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Las palabras que fluían sin parar',
          blocks: [
            {
              type: 'leader_quote',
              quote: 'Quisiera llamar la atención del mundo hacia el hecho de que durante el verano de 1829, el entonces señor Joseph Smith de Pensilvania dictó, comenzando en Génesis, el Libro de Mormón a Oliver Cowdery, a lo largo de días y noches, con tal velocidad que Oliver apenas podía tomar su pluma lo suficientemente rápido para anotar.',
              name: 'Oliver Cowdery',
              role: 'Carta a W.W. Phelps, 1834',
            },
            {
              type: 'paragraph',
              text: 'La velocidad de la traducción es uno de los argumentos más consistentes a favor del origen sobrenatural del Libro de Mormón. Estudiosos externos que han analizado el manuscrito original de Oliver notan que el texto fluye de manera casi ininterrumpida — pocas tachaduras, correcciones mínimas, ninguna evidencia de reorganización o revisión. Para un texto de esa complejidad narrativa y doctrinal, este nivel de fluidez es extraordinario.',
            },
            {
              type: 'key_points',
              title: 'Lo que el manuscrito original revela',
              points: [
                'El manuscrito original de Oliver muestra pocas correcciones o tachaduras',
                'El texto fluye de manera continua sin evidencia de reorganización',
                'La ortografía es consistente con la de un hombre de educación básica del siglo XIX',
                'Las divisiones de capítulo y párrafo fueron añadidas por Oliver mientras escribía',
                'El ritmo sugiere dictado oral rápido, no composición escrita deliberada',
              ],
            },
            {
              type: 'timeline',
              items: [
                { label: 'Abril 1829', text: 'Oliver llega a Harmony y comienza a escribir como escribiente', ref: 'HC 1:32', color: 'gold' },
                { label: 'Mayo 1829', text: 'DyC 8 y 9 — Oliver intenta traducir y recibe instrucción sobre el proceso', ref: 'DyC 8-9', color: 'blue' },
                { label: 'Junio 1829', text: 'La traducción se completa en casa de los Whitmer en Fayette, Nueva York', ref: 'HC 1:49', color: 'green' },
                { label: 'Junio 1829', text: 'Oliver ayuda a preparar el manuscrito para impresión con E.B. Grandin', ref: 'HC 1:71', color: 'gold' },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti saber que el Libro de Mormón fue escrito de puño y letra por Oliver Cowdery — un testigo que nunca negó haberlo hecho, incluso después de diez años fuera de la Iglesia?',
            },
          ],
        },
      ],
    },
  ],
}
