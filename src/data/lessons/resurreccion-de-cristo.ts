import type { Lesson } from '@/types/doctrine'

export const resurreccionDeCristo: Lesson = {
  id: 'resurreccion-de-cristo',
  moduleId: 'jesucristo-centro-de-todo',
  title: 'La Resurrección',
  subtitle: 'El evento que divide la historia en dos',
  author: 'Fuentes: Marcos 16; Lucas 24; Juan 20; 1 Corintios 15; 3 Nefi 11; DyC 76; DHC 1',
  description:
    'Sin la resurrección, no hay evangelio. Pablo lo dice sin rodeos: si Cristo no resucitó, vuestra fe es vana. Esta lección examina los relatos de testigos oculares, la naturaleza del cuerpo resucitado, y por qué la resurrección de Cristo garantiza la nuestra.',
  level: 'INTERMEDIO',
  icon: '🌅',
  duration: 75,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Mañana del Primer Día',
      intro: {
        romanNumeral: 'I',
        title: 'La Mañana del Primer Día',
        paragraphs: [
          'Antes del amanecer del primer día de la semana, un sepulcro sellado, una guardia romana apostada, una piedra enorme. Y entonces todo cambió. Cuatro evangelios describen esa mañana — cada uno desde un ángulo diferente, todos convergiendo en la misma realidad.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Tres Testimonios de la Misma Mañana',
          blocks: [
            {
              type: 'compare_grid',
              left: {
                title: 'Marcos 16 y Lucas 24',
                items: [
                  'Las mujeres van al sepulcro al amanecer',
                  'Encuentran la piedra ya removida',
                  'Un ángel o varón con vestiduras resplandecientes anuncia la resurrección',
                  'Las mujeres huyen con asombro y temor',
                ],
              },
              right: {
                title: 'Juan 20',
                items: [
                  'María Magdalena va sola, aún de madrugada',
                  'Ve la piedra quitada y corre a avisar a Pedro y Juan',
                  'Pedro y Juan corren al sepulcro — Juan llega primero',
                  'María ve a Jesús — lo confunde con el hortelano',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué los relatos difieren?',
              body: 'Las diferencias entre los cuatro evangelios no son contradicciones — son las marcas de testimonios independientes. Si cuatro testigos relatan exactamente lo mismo con las mismas palabras, se sospecha coordinación. Que cada uno enfatice detalles distintos (quién llegó primero, cuántos ángeles, qué dijeron exactamente) es precisamente lo que hace a los testimonios creíbles como relatos independientes de un evento real.',
            },
            {
              type: 'highlight_verse',
              reference: 'Juan 20:15-16',
              text: 'Jesús le dijo: Mujer, ¿por qué lloras? ¿A quién buscas? Ella, pensando que era el hortelano, le dijo: Señor, si tú lo has llevado, dime dónde lo has puesto, y yo lo llevaré. Jesús le dijo: ¡María! Volviéndose ella, le dijo: ¡Raboni! (que quiere decir, Maestro).',
            },
            {
              type: 'paragraph',
              text: 'El momento en que Jesús dice "María" y ella lo reconoce es uno de los más humanos y poderosos de toda la Escritura. Un instante antes pensaba que hablaba con un jardinero. Una palabra — su nombre — y lo supo. El mismo hombre. Reconocible. Real. No un espíritu ni una visión.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Cuerpo Glorificado',
      intro: {
        romanNumeral: 'II',
        title: 'El Cuerpo Glorificado',
        paragraphs: [
          'La resurrección cristiana no es la inmortalidad del alma — es la resurrección del cuerpo. Jesús resucitó con un cuerpo tangible, físico, glorificado. Esto no es metáfora: lo tocaron, comió con ellos, mostró sus heridas.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Carne, Huesos y Gloria',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lucas 24:36-39',
              text: 'Y mientras ellos aún hablaban de estas cosas, Jesús se puso en medio de ellos, y les dijo: Paz a vosotros. Entonces, espantados y atemorizados, pensaban que veían espíritu. Pero él les dijo: ¿Por qué estáis turbados, y vienen a vuestro corazón estos pensamientos? Mirad mis manos y mis pies, que yo mismo soy; palpad, y ved; porque un espíritu no tiene carne ni huesos, como veis que yo tengo.',
            },
            {
              type: 'doctrine_box',
              title: 'Carne y huesos — pero no sangre',
              body: 'Lucas 24:39 es notable por lo que dice y lo que no dice: Cristo tiene carne y huesos, pero no menciona sangre. DyC 88:27 y 1 Corintios 15:44-50 ayudan a entender: el cuerpo resucitado es "espiritual" en el sentido de que es sustentado por el espíritu glorificado, no por sangre física. Puede aparecer y desaparecer (Juan 20:19), puede ser tocado (3 Nefi 11:14-15), puede comer (Lucas 24:41-43). Es el cuerpo mortal perfeccionado, no descartado sino transformado.',
            },
            {
              type: 'highlight_verse',
              reference: '3 Nefi 11:14-15',
              text: 'Llegaos y metid vuestras manos en mi costado, y también palpad mis manos y mis pies; hacedlo, para que conozcáis que soy el Dios de Israel, y el Dios de toda la tierra, y que he sido inmolado por los pecados del mundo. Y aconteció que la multitud fue y metió sus manos en su costado, y palpó las huellas de los clavos en sus manos y sus pies.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              caption: '3 Nefi 11 — aproximadamente 2,500 personas tocaron las heridas del Cristo resucitado.',
              contextCard: { year: '34 d.C.', place: 'Bountiful, Continente Americano', label: '3 Nefi 11' },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Pablo y la Doctrina Completa',
      intro: {
        romanNumeral: 'III',
        title: 'Pablo y la Doctrina Completa',
        paragraphs: [
          '1 Corintios 15 es el tratamiento teológico más sistemático de la resurrección en las Escrituras. Pablo construye un argumento lógico implacable: o Cristo resucitó y todo es verdadero, o no resucitó y todo es vano.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Si Cristo No Resucitó',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 15:13-17',
              text: 'Porque si no hay resurrección de muertos, tampoco Cristo resucitó. Y si Cristo no resucitó, vana es entonces nuestra predicación, vana es también vuestra fe. Y somos hallados falsos testigos de Dios; porque hemos testificado de Dios que él resucitó a Cristo, al cual no resucitó, si en verdad los muertos no resucitan. Porque si los muertos no resucitan, tampoco Cristo resucitó; y si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados.',
            },
            {
              type: 'doctrine_box',
              title: 'El argumento más honesto de Pablo',
              body: 'Pablo no suaviza las consecuencias. Si Cristo no resucitó: (1) nuestra predicación es vacía, (2) vuestra fe es vacía, (3) somos falsos testigos de Dios, (4) seguís en vuestros pecados, (5) los que murieron en Cristo se perdieron. Pablo apuesta la credibilidad entera del evangelio a un hecho histórico verificable. Esto no es fe a pesar de la evidencia — es fe fundamentada en testimonio.',
            },
            {
              type: 'deep_dive',
              title: '¿Por qué importa que la resurrección sea física?',
              paragraphs: [
                'Algunas tradiciones religiosas leen la resurrección como metáfora espiritual. Pablo insiste en que fue un evento físico. La razón doctrinal es crucial: si Cristo resucitó físicamente, entonces nuestra resurrección también será física. El cuerpo no es un error ni una cárcel — es parte esencial de nuestra identidad eterna.',
                'DyC 93:33-34 declara que el espíritu y el elemento (cuerpo), inseparablemente conectados, reciben una plenitud de gozo. Sin el cuerpo, no puede haber plenitud de gozo. La resurrección no es rescate del cuerpo — es la glorificación del cuerpo.',
                'Esto significa que la vida eterna no es flotar en nubes como espíritus. Es vida plena, encarnada, glorificada. La resurrección de Cristo es la garantía y el prototipo de la nuestra.',
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'El Salvador de este mundo es un ser resucitado con un cuerpo de carne y huesos tan tangible como el del hombre. Él no abandonó ese cuerpo después de la resurrección. Lo conserva hoy, glorificado, exaltado, a la diestra del Padre.',
              name: 'Jeffrey R. Holland',
              role: 'Apóstol',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Resurrección en el Nuevo Mundo',
      intro: {
        romanNumeral: 'IV',
        title: 'La Resurrección en el Nuevo Mundo',
        paragraphs: [
          'El Cristo resucitado no solo se apareció en Jerusalén. Visitó a las naciones perdidas de Israel en el continente americano — y dejó el testimonio más detallado que existe de una aparición post-resurrección.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Testimonio de 3 Nefi y DyC 76',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '3 Nefi 11:8-11',
              text: 'Y aconteció que vieron a un Hombre que descendía del cielo; y estaba vestido de una túnica blanca; y descendió y se puso en medio de ellos... Y extendió su mano y habló al pueblo, diciendo: He aquí, yo soy Jesucristo, de quien los profetas testificaron que había de venir al mundo.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 76:22-24',
              text: 'Y ahora, después de los muchos testimonios que se han dado de él, éste es el testimonio, el último de todos, que damos de él: Que él vive. Porque le vimos, aun a la diestra de Dios; y oímos la voz que testificaba que él es el Unigénito del Padre.',
            },
            {
              type: 'deep_dive',
              badge: 'Testimonio histórico',
              title: 'El testimonio de Joseph Smith y Sidney Rigdon — DyC 76',
              paragraphs: [
                'El 16 de febrero de 1832, Joseph Smith y Sidney Rigdon recibieron la visión registrada en DyC 76 en la granja de John Johnson en Hiram, Ohio. Philo Dibble, que estaba presente en la habitación, dejó un relato impresionante: los dos profetas alternaban describiendo lo que veían, uno hablaba mientras el otro entraba en visión, luego cambiaban.',
                'Philo Dibble escribió: "Joseph tenía los ojos abiertos con una mirada brillante... Sidney parecía frío." Al final de la visión, Sidney estaba completamente exhausto. Joseph dijo: "Sidney no está acostumbrado a esto como yo lo estoy."',
                'Este no es un testimonio de segunda mano. DyC 76:22-24 es la declaración directa de dos hombres que vieron al Cristo resucitado a la diestra del Padre. Lo afirmaron con sus nombres. Lo mantuvieron hasta su muerte.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Implicaciones y Aplicación',
      intro: {
        romanNumeral: 'V',
        title: 'Implicaciones para la Vida',
        paragraphs: [
          'La resurrección no es solo un dogma teológico. Tiene implicaciones prácticas sobre cómo vivimos, cómo enfrentamos la muerte, y por qué el cuerpo importa.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Lo Que Garantiza la Resurrección',
          blocks: [
            {
              type: 'key_points',
              title: 'Lo que garantiza la resurrección de Cristo',
              points: [
                'Nuestra resurrección universal — "como en Adán todos mueren, también en Cristo todos serán vivificados" (1 Cor 15:22)',
                'El juicio final tiene sentido — solo un ser resucitado e inmortal puede juzgar con perfecta justicia',
                'El cuerpo es eterno — no lo descartamos, lo glorificamos; la mortalidad tiene dignidad eterna',
                'La muerte no es el fin — la separación del espíritu y el cuerpo es temporal, no permanente',
                'La exaltación incluye el cuerpo glorificado — DyC 132:19 habla de la herencia eterna de la plenitud de gozo',
              ],
            },
            {
              type: 'central_quote',
              text: 'Si Cristo no resucitó, somos los más miserables de todos los hombres. Pero Cristo sí resucitó — y eso cambia todo. Cambia cómo enterramos a nuestros muertos, cómo vivimos con nuestros cuerpos, y cómo esperamos la eternidad.',
              attribution: 'Pablo, 1 Corintios 15 (parafraseado)',
            },
          ],
        },
        {
          id: 't2',
          title: 'Reflexión y Evaluación',
          blocks: [
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu vida diaria saber que la resurrección es un hecho real y físico — que tu cuerpo actual, perfeccionado, será eterno? ¿Cambia cómo cuidas tu cuerpo, cómo lo valoras, cómo ves el sufrimiento físico?',
            },
            {
              type: 'quiz',
              id: 'rdc-q1',
              question: {
                kind: 'fill_blank',
                prompt: 'Pablo dice en 1 Corintios 15 que si Cristo no resucitó, vuestra fe ___.',
                options: ['es vana', 'es débil', 'es suficiente', 'necesita más obras'],
                correctIndex: 0,
                explanation:
                  '1 Corintios 15:17 — "y si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados." Pablo hace depender la validez completa del evangelio del hecho histórico de la resurrección.',
              },
            },
            {
              type: 'quiz',
              id: 'rdc-q2',
              question: {
                kind: 'fill_blank',
                prompt: 'En Lucas 24:39, el Cristo resucitado dice que su cuerpo tiene ___.',
                options: ['carne y huesos', 'solo espíritu', 'luz y gloria', 'sangre y agua'],
                correctIndex: 0,
                explanation:
                  'Jesús dijo explícitamente: "un espíritu no tiene carne ni huesos, como veis que yo tengo." La resurrección es física, no solo espiritual. Esto es fundamental para la doctrina de la exaltación y la vida eterna.',
              },
            },
            {
              type: 'quiz',
              id: 'rdc-q3',
              question: {
                kind: 'fill_blank',
                prompt: 'En DyC 76:22, Joseph Smith y Sidney Rigdon testifican que ___.',
                options: [
                  'vieron a Cristo a la diestra de Dios',
                  'oyeron una voz del cielo',
                  'leyeron en las escrituras',
                  'soñaron con la resurrección',
                ],
                correctIndex: 0,
                explanation:
                  'DyC 76:22-24 — "le vimos, aun a la diestra de Dios." Este es un testimonio directo de visión: Joseph Smith y Sidney Rigdon vieron al Cristo resucitado glorificado a la diestra del Padre el 16 de febrero de 1832.',
              },
            },
          ],
        },
      ],
    },
  ],
}
