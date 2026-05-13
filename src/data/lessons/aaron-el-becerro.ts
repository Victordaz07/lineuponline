import type { Lesson } from '@/types/doctrine'

export const aaronElBecerro: Lesson = {
  id: 'aaron-el-becerro',
  moduleId: 'personajes-escrituras',
  title: 'Aarón y el Becerro de Oro',
  subtitle: 'Cuando el liderazgo cede a la presión popular',
  description: 'Éxodo 32 es uno de los pasajes más incómodos de la Biblia: el mismo hombre que construyó el becerro de oro presidirá el sacerdocio de Israel por cuarenta años. ¿Por qué sobrevivió Aarón cuando tres mil perecieron? ¿Y qué nos enseña sobre los líderes que fallan una vez pero no se definen por esa falla?',
  level: 'INTERMEDIO',
  icon: '🐄',
  duration: 30,
  order: 3612,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'aaron',
  studySections: [
    {
      id: 's1',
      title: 'El pueblo que no podía esperar',
      intro: {
        romanNumeral: 'I',
        title: 'Éxodo 32 — Cuarenta Días de Silencio',
        paragraphs: [
          'Moisés llevaba cuarenta días en el monte con Dios. El pueblo abajo comenzó a desintegrarse.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La crisis de la ausencia del profeta',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 32:1',
              text: 'Viendo el pueblo que Moisés tardaba en descender del monte, se acercaron entonces a Aarón, y le dijeron: Levántate, haznos dioses que vayan delante de nosotros; porque a este Moisés, el varón que nos sacó de la tierra de Egipto, no sabemos qué le haya acontecido.',
            },
            {
              type: 'paragraph',
              text: 'El pueblo había presenciado las plagas, cruzado el Mar Rojo, recibido maná del cielo, bebido agua de la roca. Y sin embargo, cuarenta días de silencio fueron suficientes para que clamaran por ídolos. La fe sin práctica constante es más frágil de lo que parece. El verbo hebreo en "viendo el pueblo que Moisés tardaba" implica una observación prolongada y angustiada — no fue una decisión impulsiva de un momento sino el colapso gradual de una fe que dependía demasiado de la presencia física del mediador.',
            },
            {
              type: 'paragraph',
              text: 'La petición es reveladora: "haznos dioses que vayan delante de nosotros." No estaban pidiendo simplemente un ídolo para adorar — pedían liderazgo visible. El problema no era solo idolatría; era incapacidad de caminar por fe sin una señal tangible y visible al frente del campamento. El becerro de oro fue el producto de una fe que dependía de señales externas, no de la convicción interna.',
            },
            {
              type: 'deep_dive',
              title: 'Los Paralelos con el Toro en la Religión del Antiguo Cercano Oriente',
              paragraphs: [
                'El toro/becerro era símbolo de fertilidad, poder y divinidad en todo el mundo del Creciente Fértil. El dios Ba\'al canaanita era representado como toro. El dios egipcio Apis era un toro sagrado. Incluso Yahweh era comparado con fuerza bovina en textos poéticos hebreos (Deuteronomio 33:17). El pueblo no inventó el becerro de la nada — usó el lenguaje visual religioso de los pueblos que los rodeaban.',
                'Esto hace la idolatría más comprensible, aunque no menos grave. El pueblo no abandonó necesariamente el nombre de Jehová — Éxodo 32:5 muestra que Aarón declaró una "fiesta a Jehová" al día siguiente. El pecado no fue solo idolatría sino sincretismo: intentar adorar al Dios de Israel con las formas culturales de Egipto. Es el pecado de mezclar la verdad con las formas del mundo.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La decisión de Aarón',
      intro: {
        romanNumeral: 'II',
        title: 'La Presión que Venció al Hombre del Altar',
        paragraphs: [
          '"Lo eché en el fuego, y salió este becerro." — La excusa más famosa y absurda de la Biblia.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El colapso del liderazgo bajo presión',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 32:22-24',
              text: 'Y Aarón les respondió: No se enoje mi señor; tú conoces al pueblo, que es inclinado a mal. Porque me dijeron: Haznos dioses que vayan delante de nosotros... Y les dije: ¿Quién tiene oro? Apartadlo. Y me lo dieron, y lo eché en el fuego, y salió este becerro.',
            },
            {
              type: 'paragraph',
              text: 'La justificación de Aarón es un estudio en evasión de responsabilidad. Primero, traslada la culpa al pueblo: "tú conoces al pueblo, que es inclinado a mal." Segundo, minimiza su propio rol: no "hice" un becerro — simplemente eché el oro al fuego "y salió este becerro." La voz pasiva y el resultado presentado como accidental esconden la realidad: Aarón pidió el oro, diseñó la forma, construyó el altar, anunció la fiesta. Fue una decisión activa, sostenida, deliberada.',
            },
            {
              type: 'paragraph',
              text: 'Pero la pregunta más penetrante es: ¿por qué cedió Aarón? El texto no nos dice de miedo — el pueblo "se desenfrenó" (Éxodo 32:25), lo cual sugiere que había tensión y potencial de violencia. Aarón posiblemente calculó que una pequeña concesión salvaría vidas. El problema del líder que cede a la presión popular no es siempre cobardía — a veces es gestión de crisis mal calculada: dar lo que la multitud pide para evitar un desastre mayor, sin ver que el acto mismo es el desastre.',
            },
            {
              type: 'doctrine_box',
              title: 'La Diferencia entre Moisés y Aarón en el Momento de Crisis',
              body: 'Moisés, al descender del monte y ver la escena, no negoció. Rompió las tablas, destruyó el ídolo (quemándolo, moliéndolo, mezclándolo con agua, y haciéndolo beber al pueblo — Éxodo 32:20), confrontó a Aarón directamente, y convocó a quienes estaban con Jehová. La diferencia no era de inteligencia ni de experiencia con Dios — era de disposición a pagar el costo personal de la fidelidad. El coraje de no ceder es lo que distingue al profeta del portavoz en su momento más duro.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La consecuencia y el perdón',
      intro: {
        romanNumeral: 'III',
        title: 'Éxodo 32:26-35 — Tres Mil Muertos y un Sumo Sacerdote que Vivió',
        paragraphs: [
          'La pregunta más difícil de Éxodo 32: ¿por qué murieron tres mil y Aarón sobrevivió?',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La justicia y la misericordia en Éxodo 32',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Éxodo 32:26-28',
              text: 'Entonces Moisés se puso a la puerta del campamento, y dijo: ¿Quién está por Jehová? Júntese conmigo. Y se juntaron con él todos los hijos de Leví. Y él les dijo: Así ha dicho Jehová, el Dios de Israel: Poned cada uno su espada sobre su muslo; pasad y repassad por el campamento de puerta en puerta, y matad cada uno a su hermano, y a su amigo, y a su pariente.',
            },
            {
              type: 'paragraph',
              text: 'Tres mil personas murieron ese día. Aarón no fue uno de ellos. La pregunta no puede evitarse: ¿fue injusto? El texto no ofrece una justificación explícita. Sin embargo, varios elementos informan la respuesta. Primero, Aarón era Levita — los hijos de Leví se unieron a Moisés (v. 26). Segundo, Dios le dijo a Moisés en Deuteronomio 9:20: "también contra Aarón se enojó Jehová en gran manera, y oré también por Aarón en aquel tiempo." Moisés intercedió específicamente por Aarón. La oración del profeta cubrió al portavoz que había fallado.',
            },
            {
              type: 'paragraph',
              text: 'Los tres mil que murieron son descritos como los que "se desenfrenaron" (v. 25) — no simplemente los que participaron, sino los que en ese momento, al enfrentar la convocatoria de Moisés, eligieron no volver. La distinción sugiere que hubo una oportunidad de arrepentimiento que algunos tomaron y otros rechazaron. La muerte de los tres mil no fue represalia ciega — fue consecuencia de una elección activa de continuar en la rebelión cuando se les ofreció una salida.',
            },
            {
              type: 'deep_dive',
              title: 'Aarón y la Teología del Fallo Perdonado',
              paragraphs: [
                'La supervivencia de Aarón establece uno de los principios más importantes de la teología bíblica: el arrepentimiento y la intercesión pueden redirigir las consecuencias del pecado. Aarón no escapó por sus méritos — sobrevivió porque Moisés oró por él y porque Aarón, a diferencia de los tres mil, no continuó en su error cuando confrontado.',
                'Deuteronomio 9:20 es uno de los textos más reveladores sobre la intercesión profética: "también contra Aarón se enojó Jehová en gran manera, y oré también por Aarón en aquel tiempo." Dios estaba enojado con Aarón — el enojo era real y justificado. La oración de Moisés no eliminó la realidad del pecado sino que medió entre la justicia y la misericordia.',
                'Este patrón — el líder que falla gravemente pero sobrevive por intercesión y arrepentimiento — se repite en el rey David (2 Samuel 12), en Jonás, en Pedro después de la negación. La gracia divina no elimina la responsabilidad, pero puede redirigir su consecuencia cuando hay arrepentimiento genuino.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El líder que falla y sigue sirviendo',
      intro: {
        romanNumeral: 'IV',
        title: 'Cuarenta Años de Fidelidad Después del Fracaso',
        paragraphs: [
          'La historia de Aarón no termina en Éxodo 32. Termina en el monte Hor, con sus vestiduras sacerdotales pasadas a su hijo.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El servicio que redimió al portavoz',
          blocks: [
            {
              type: 'paragraph',
              text: 'A pesar del becerro de oro, Aarón presidió el sacerdocio de Israel durante cuarenta años. Entró al Lugar Santísimo en cada Yom Kippur. Ofreció sacrificios diarios. Presidió el Tabernáculo. Intercedió por el pueblo cuando la plaga los destruía (Números 16:46-50). La tradición judía lo recuerda no como el hombre del becerro sino como el "hacer de paz" — el que siempre buscaba reconciliar a maridos y esposas, a amigos enemistados, a comunidades divididas.',
            },
            {
              type: 'highlight_verse',
              reference: 'Números 20:25-28',
              text: 'Toma a Aarón y a Eleazar su hijo, y hazlos subir al monte Hor. Y desnuda a Aarón de sus vestiduras, y vístelas a Eleazar su hijo; porque Aarón será reunido a su pueblo, y allí morirá. Y Moisés hizo como Jehová le mandó; y subieron al monte Hor a la vista de toda la congregación... Y Moisés desnudó a Aarón de sus vestiduras, y se las vistió a Eleazar su hijo.',
            },
            {
              type: 'paragraph',
              text: 'La muerte de Aarón en el monte Hor es uno de los momentos más solemnes del Pentateuco. Moisés mismo le quitó las vestiduras sacerdotales — pieza por pieza — y se las puso a su hijo Eleazar. Aarón murió en el monte, vestido solo de ropa de lino, sin sus títulos ni su posición — exactamente como entraba al Lugar Santísimo en el Yom Kippur. Fue un acto de gracia divina: Aarón murió como murió: transferiendo el sacerdocio, no perdiéndolo.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay una falla pasada en tu vida que te impide sentirte digno de servir? La historia de Aarón plantea que Dios puede usar a alguien durante cuarenta años de fiel servicio incluso después de un fracaso grave. ¿Qué te dice eso sobre tu propia capacidad de seguir?',
            },
          ],
        },
      ],
    },
  ],
}
