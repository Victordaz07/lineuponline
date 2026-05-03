import type { Lesson } from '@/types/doctrine'

export const elLibroDeMormon: Lesson = {
  id: 'libro-de-mormon-reliquia',
  moduleId: 'historia-restauracion',
  title: 'El Libro de Mormón — Piedra Angular',
  subtitle: 'Otro testamento de Jesucristo',
  author: 'Fuentes principales: Introducción del Libro de Mormón, Benson, Holland',
  description:
    'El Libro de Mormón es el mayor testamento físico de la veracidad del profeta José Smith y de la Restauración. Su origen, su contenido central, y por qué Ezra Taft Benson dijo que podemos acercarnos más a Dios a través de sus páginas que por cualquier otro libro.',
  level: 'BÁSICO',
  icon: '📜',
  duration: 65,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'gran-apostasia',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Origen del Libro',
      intro: {
        romanNumeral: 'I',
        title: 'El Origen del Libro',
        paragraphs: [
          'El Libro de Mormón surgió de uno de los eventos más extraordinarios y verificables de la historia religiosa moderna: un joven de 21 años sin educación formal dictó 531 páginas de texto coherente, históricamente complejo, y teológicamente profundo en aproximadamente 65 días de trabajo. Los testigos del proceso son múltiples, sus testimonios son consistentes, y murieron sin retirarlos.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Proceso de Traducción y los Testigos',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith no tradujo el Libro de Mormón como traduciría un lingüista — estudiando el idioma, buscando equivalentes en diccionarios. Lo tradujo "por el don y el poder de Dios", usando el Urim y Tumim y, más tarde, una piedra vidente. Oliver Cowdery, Emma Smith, Martin Harris y otros sirvieron como escribas y observaron el proceso directamente.',
            },
            {
              type: 'highlight_verse',
              text: 'Y cuando hubisteis hecho lo que os mandé, abristeis vuestras bocas y fuisteis sostenidos; y la obra se realizó por mi poder. Y de acuerdo con las cosas que estaban grabadas en las planchas, así fue la traducción, por mi Espíritu.',
              reference: 'Doctrina y Convenios 20:8',
            },
            {
              type: 'doctrine_box',
              title: 'Los tres testigos y los ocho testigos',
              body: 'Once hombres firmaron declaraciones de haber visto las planchas de oro. Los Tres Testigos (Oliver Cowdery, David Whitmer, Martin Harris) declararon haber visto el ángel Moroni y las planchas, y haber escuchado la voz de Dios confirmando la autenticidad del libro. Los Ocho Testigos (los Whitmer y los Smith) declararon haber manejado físicamente las planchas. Todos estos hombres tuvieron serias fricciones con José Smith en algún momento de sus vidas — pero ninguno retiró su testimonio de las planchas. Su testimonio no dependía de su lealtad a José.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'El problema del origen natural del Libro de Mormón',
              paragraphs: [
                'Los críticos han propuesto varias teorías sobre cómo pudo José Smith haber escrito el Libro de Mormón sin asistencia divina: que copió de "View of the Hebrews" de Ethan Smith (1823), que fue escrito por Solomon Spaulding, o que simplemente era un genio inventivo. Ninguna de estas teorías ha sobrevivido el escrutinio académico.',
                '"View of the Hebrews" tiene superficiales similitudes temáticas pero ninguna textual — y fue escrito después del Libro de Mormón en varias partes. La teoría de Spaulding no sobrevivió cuando se encontró el manuscrito de Spaulding y no tenía relación alguna con el Libro de Mormón. El "genio inventivo" de José no explica la coherencia interna del libro, su geografía interna consistente, sus más de 200 personajes nombrados, ni las estructuras hebreas como el quiasmo que fueron identificadas en el siglo XX.',
                'B. H. Roberts, en sus "Studies of the Book of Mormon" (1922), planteó las preguntas más difíciles sobre el origen del libro — y concluyó que las teorías naturalistas eran insuficientes. No refutó el libro. Identificó las preguntas para las cuales la apologética necesitaba mejores respuestas.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Contenido Central',
      intro: {
        romanNumeral: 'II',
        title: 'El Contenido Central',
        paragraphs: [
          'El subtítulo del Libro de Mormón lo dice todo: "Otro Testamento de Jesucristo." No es un libro sobre los nativos americanos. No es historia alternativa. Es un testamento de Cristo — su misión, su expiación, su evangelio — narrado por profetas que lo conocían por revelación y algunos por visión directa.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Cristo en el Libro de Mormón',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo, profetizamos de Cristo, y escribimos según nuestras profecías, para que nuestros hijos puedan saber a qué fuente recurrir para la remisión de sus pecados.',
              reference: '2 Nefi 25:26',
            },
            {
              type: 'key_points',
              title: 'Lo que el Libro de Mormón enseña sobre Cristo que complementa la Biblia',
              points: [
                'La Expiación fue infinita — cubrió no solo el pecado sino también dolor, enfermedad, pena, y todo sufrimiento humano (Alma 7:11-12)',
                'La fe no es creer sin razón — es un experimento con evidencia creciente (Alma 32)',
                'El arrepentimiento produce gozo, no solo alivio (Alma 36:17-19)',
                'Cristo visitó a otras naciones después de su resurrección (3 Nefi 15:21)',
                'El evangelio restaurado es el mismo que el original — no una versión nueva (3 Nefi 27:13-21)',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y mi alma se deleita en las cosas del Señor; y mi corazón pondera continuamente sobre las cosas que he visto y oído. No obstante que en la carne habré de morir, la tumba no podrá triunfar sobre la carne de mis huesos; porque el Santo de Israel redimirá a aquellos que creen en él.',
              reference: '2 Nefi 4:16, 21',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón lleva al hombre más cerca de Dios mediante la observancia de sus preceptos que cualquier otro libro. Esto no es una afirmación arrogante sobre otros libros sagrados. Es una afirmación sobre función: este libro fue diseñado y preparado específicamente para nuestra época, con nuestros problemas, con las verdades que más necesitamos.',
              name: 'Ezra Taft Benson',
              role: '"The Keystone of Our Religion", Conferencia General, octubre 1986 (trad.)',
            },
          ],
        },
        {
          id: 't3',
          title: 'La Promesa Final',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ello por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
              reference: 'Moroni 10:4–5',
            },
            {
              type: 'paragraph',
              text: 'Moroni escribe estas palabras al final de su registro — sabiendo que es el último en su civilización, que está solo, que no hay nadie más. Lo que le importa en ese momento final es que quienes lean el libro en el futuro tengan una manera de saber que es verdadero. No una manera académica. Una manera espiritual, directa, y personal: preguntar a Dios. La promesa es real porque el libro es real.',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón es la respuesta de Dios a la pregunta más importante que cualquier persona puede hacer: ¿Es José Smith un profeta? Si el Libro de Mormón es verdadero, la respuesta es inequívocamente sí. Si no lo es, no tenemos nada. Pero si lees este libro con sinceridad y preguntas a Dios — como Moroni promete — recibirás una respuesta que cambiará tu vida para siempre.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Has cumplido la promesa de Moroni 10:4 con sinceridad real — no como ejercicio religioso sino como pregunta genuina? Si ya tienes un testimonio, ¿cuándo fue la última vez que lo renovaste estudiando el Libro de Mormón con la misma sinceridad que la primera vez?',
            },
          ],
        },
      ],
    },
  ],
}
