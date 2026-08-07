import type { Lesson } from '@/types/doctrine'
import { jesusAssets } from '@/data/jesusAssets'

export const losYoSoyDeCristo: Lesson = {
  id: 'los-yo-soy-de-cristo',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jesucristo',
  title: 'Yo Soy',
  subtitle: 'Los siete nombres divinos de Cristo en Juan',
  author: 'Fuentes: Éxodo 3:14; Juan 6; 8; 10; 11; 14; 15; Isaiah 9:6; DyC 38',
  description:
    'En el Evangelio de Juan, Jesús hace siete declaraciones "Yo soy + atributo": pan de vida, luz del mundo, la puerta, el buen pastor, la resurrección y la vida, el camino la verdad y la vida, la vid verdadera. Cada una es un eco del nombre divino de Éxodo 3:14 — y cada una revela una dimensión diferente de quién es Cristo.',
  level: 'AVANZADO',
  icon: '🔆',
  iconImage: jesusAssets.lessonIcons['los-yo-soy-de-cristo'],
  heroImage: {
    url: jesusAssets.lessons['los-yo-soy-de-cristo'].hero,
    alt: 'Jesucristo rodeado de luz dorada, representando las siete declaraciones "Yo Soy" de Juan',
  },
  duration: 65,
  order: 13,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El nombre detrás de los nombres',
      intro: {
        romanNumeral: 'I',
        title: 'El nombre detrás de los nombres',
        paragraphs: [
          'Para entender los siete "Yo soy" de Juan, hay que entender primero el original: "YO SOY EL QUE SOY" de Éxodo 3:14. Esta es la auto-revelación más importante de Dios en el Antiguo Testamento — y Jesús la cita deliberadamente siete veces en Juan.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'YHWH — el nombre que no se pronunciaba',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y respondió Dios a Moisés: YO SOY EL QUE SOY. Y dijo: Así dirás a los hijos de Israel: YO SOY me envió a vosotros.',
              reference: 'Éxodo 3:14',
            },
            {
              type: 'doctrine_box',
              title: 'YHWH — por qué este nombre es diferente',
              body: 'El nombre hebreo YHWH (transliterado como "Jehová" o "Yahvé") deriva del verbo hayah — "ser/existir." Es el único nombre en el hebreo bíblico que significa "existencia pura" — el Ser que existe por sí mismo, sin causa externa. Los judíos lo consideraban tan sagrado que no lo pronunciaban: al leer en voz alta, lo reemplazaban con "Adonai" (Señor). En el Nuevo Testamento en griego, Jesús reproduce ese nombre con egō eimi — "yo soy" — sin atributo, en Juan 8:58. Siete otras veces lo usa con atributo, revelando aspectos de su carácter.',
            },
            {
              type: 'key_points',
              title: 'Las siete declaraciones "Yo soy + atributo" en Juan',
              points: [
                '"Yo soy el pan de vida" — Juan 6:35',
                '"Yo soy la luz del mundo" — Juan 8:12',
                '"Yo soy la puerta" — Juan 10:7, 9',
                '"Yo soy el buen pastor" — Juan 10:11, 14',
                '"Yo soy la resurrección y la vida" — Juan 11:25',
                '"Yo soy el camino, la verdad y la vida" — Juan 14:6',
                '"Yo soy la vid verdadera" — Juan 15:1, 5',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '"Yo soy el pan de vida" — Juan 6',
      intro: {
        romanNumeral: 'II',
        title: '"Yo soy el pan de vida" — Juan 6',
        paragraphs: [
          'La primera declaración "Yo soy" ocurre en Juan 6, el día después de la multiplicación de los panes. La multitud lo siguió buscando más pan físico. Cristo les revela que lo que necesitan es algo que el pan de trigo nunca puede dar.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El pan que satisface para siempre',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Jesús les dijo: Yo soy el pan de vida; el que a mí viene, nunca tendrá hambre; y el que en mí cree, no tendrá sed jamás.',
              reference: 'Juan 6:35',
            },
            {
              type: 'paragraph',
              text: 'El contexto inmediato es el maná en el desierto — el pan que Dios dio a Israel en el Éxodo (Éxodo 16). La multitud argumenta que Moisés les dio pan del cielo. Jesús corrige: "No os dio Moisés el pan del cielo; mas mi Padre os da el verdadero pan del cielo" (Juan 6:32). El maná era temporal — tenían que recogerlo cada día. El Cristo como pan de vida es permanente.',
            },
            {
              type: 'doctrine_box',
              title: 'La Santa Cena como cumplimiento',
              body: 'Juan 6:53-56 lleva la metáfora a su cumplimiento ritual: "Si no coméis la carne del Hijo del Hombre, y bebéis su sangre, no tenéis vida en vosotros." La Santa Cena no es un símbolo vacío — es la acción que recuerda y renueva el convenio de tomar a Cristo en nuestra vida. El pan de trigo que partimos cada semana apunta al Pan de vida que tomamos en nuestro corazón.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.panDeVida,
              alt: 'Jesús sosteniendo pan, ilustrando "Yo soy el pan de vida"',
              caption: '"Yo soy el pan de vida" — Juan 6:35',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: '"Yo soy la luz del mundo" — Juan 8 y 9',
      intro: {
        romanNumeral: 'III',
        title: '"Yo soy la luz del mundo" — Juan 8 y 9',
        paragraphs: [
          'La segunda declaración ocurre en Juan 8 durante la Fiesta de los Tabernáculos en Jerusalén — cuando cuatro grandes candelabros de oro en el templo iluminaban toda la ciudad durante la noche. Jesús hace su declaración en ese contexto visual.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La luz que ninguna oscuridad puede apagar',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Otra vez Jesús les habló, diciendo: Yo soy la luz del mundo; el que me sigue, no andará en tinieblas, sino que tendrá la luz de la vida.',
              reference: 'Juan 8:12',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.luzDelMundo,
              alt: 'Jesús irradiando luz en medio de la oscuridad, ilustrando "Yo soy la luz del mundo"',
              caption: '"Yo soy la luz del mundo" — Juan 8:12',
            },
            {
              type: 'highlight_verse',
              text: 'La luz en las tinieblas resplandece, y las tinieblas no prevalecieron contra ella.',
              reference: 'Juan 1:5',
            },
            {
              type: 'paragraph',
              text: 'En el capítulo siguiente (Juan 9), Jesús sana a un ciego de nacimiento — haciendo de la metáfora una demostración física. "Para que los que no ven, vean; y los que ven, sean cegados" (Juan 9:39). La oscuridad espiritual y la física comparten la misma cura: Cristo.',
            },
            {
              type: 'compare_grid',
              title: '"Luz" de Cristo — Antiguo Testamento y Restauración',
              left: {
                label: 'Antiguo Testamento',
                points: [
                  '"El Señor es mi luz y mi salvación" — Salmo 27:1',
                  '"Pueblo que andaba en tinieblas vio gran luz" — Isaías 9:2',
                  '"Sol de justicia nacerá" — Malaquías 4:2',
                  'La columna de fuego en el Éxodo — Jehová/Cristo guiando',
                ],
              },
              right: {
                label: 'Restauración',
                points: [
                  '"La Luz de Cristo" que da a cada hombre (DyC 93:2; Moroni 7:18-19)',
                  '"Él es la luz, la vida y la esperanza del mundo" — Russell M. Nelson',
                  'Primera Visión: la luz que superó al sol antes de que el Padre y el Hijo aparecieran',
                  '"Cristo es la luz que ilumina a cada hombre que viene al mundo" — DyC 84:46',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: '"La puerta", "el buen pastor" y "la resurrección" — Juan 10-11',
      intro: {
        romanNumeral: 'IV',
        title: '"La puerta", "el buen pastor" y "la resurrección" — Juan 10-11',
        paragraphs: [
          'Las declaraciones tercera (la puerta), cuarta (el buen pastor) y quinta (la resurrección) están separadas por pocos capítulos pero son tres de las más ricas en implicaciones doctrinales. La del pastor conecta con el Salmo 23. La de la resurrección ocurre ante la tumba de Lázaro.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La puerta y el pastor que da su vida',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Volvió Jesús a decirles: De cierto, de cierto os digo: Yo soy la puerta de las ovejas... Yo soy la puerta; el que por mí entrare, será salvo; y entrará, y saldrá, y hallará pastos.',
              reference: 'Juan 10:7, 9',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.laPuerta,
              alt: 'Una puerta radiante de luz, ilustrando "Yo soy la puerta"',
              caption: '"Yo soy la puerta" — Juan 10:7, 9',
            },
            {
              type: 'highlight_verse',
              text: 'Yo soy el buen pastor; el buen pastor su vida da por las ovejas. Mas el asalariado, y que no es el pastor, de quien no son propias las ovejas, ve venir al lobo y deja las ovejas y huye, y el lobo arrebata las ovejas y las dispersa.',
              reference: 'Juan 10:11-12',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.buenPastor,
              alt: 'Jesús como el buen pastor, cargando una oveja, ilustrando "Yo soy el buen pastor"',
              caption: '"Yo soy el buen pastor" — Juan 10:11-12',
            },
            {
              type: 'doctrine_box',
              title: 'El Salmo 23 y Juan 10 — el mismo pastor',
              body: '"El Señor es mi pastor" (Salmo 23:1) — el Señor en hebreo es YHWH, Jehová. La Restauración enseña que Jehová es Cristo. Por lo tanto, el Salmo 23 es un testimonio de Cristo escrito por David 1,000 años antes de Belén. Juan 10 es Cristo reclamando ese título para sí mismo. Cuando recitas el Salmo 23, estás describiendo a Jesucristo — el mismo que "en valles de sombra de muerte" no te abandonará.',
            },
            {
              type: 'highlight_verse',
              text: 'Le dijo Jesús: Yo soy la resurrección y la vida; el que cree en mí, aunque esté muerto, vivirá. Y todo aquel que vive y cree en mí, no morirá eternamente. ¿Crees esto?',
              reference: 'Juan 11:25-26',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.resurreccionYVida,
              alt: 'Jesús resucitando a Lázaro, ilustrando "Yo soy la resurrección y la vida"',
              caption: '"Yo soy la resurrección y la vida" — Juan 11:25-26',
            },
            {
              type: 'paragraph',
              text: 'Cristo hace esta declaración a Marta minutos antes de resucitar a Lázaro. No dice "yo puedo dar la resurrección" — dice "yo SOY la resurrección." La resurrección no es algo que Cristo tiene o hace — es lo que Cristo es. Esto tiene implicación doctrinal: nadie más puede dar la resurrección porque nadie más es la resurrección en sí misma.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: '"El camino, la verdad, la vida" y "la vid" — Juan 14-15',
      intro: {
        romanNumeral: 'V',
        title: '"El camino, la verdad, la vida" y "la vid" — Juan 14-15',
        paragraphs: [
          'Las dos últimas declaraciones "Yo soy" ocurren en el Aposento Alto, la noche de la Última Cena. Jesús sabe que va a Getsemaní en pocas horas. Son sus palabras de despedida — y elige usar estas dos imágenes para definir quién es y cómo sus discípulos permanecerán en él.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'El camino exclusivo y la vid que da fruto',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Jesús le dijo: Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí.',
              reference: 'Juan 14:6',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.caminoVerdadVida,
              alt: 'Un camino de luz llevando hacia Cristo, ilustrando "Yo soy el camino, la verdad y la vida"',
              caption: '"Yo soy el camino, la verdad y la vida" — Juan 14:6',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué "nadie viene al Padre sino por mí"?',
              body: 'Esta es la afirmación más exclusiva del Nuevo Testamento — y la más cuestionada. La teología de la Restauración responde la objeción de la injusticia: "nadie" sin oportunidad no significa "nadie condenado sin oportunidad." El trabajo vicario del templo, la misión al mundo de los espíritus (DyC 138), y la enseñanza del evangelio postmortal garantizan que cada persona tenga acceso a Cristo. "Nadie" se vuelve inclusivo en el tiempo eterno de Dios. La exclusividad es sobre quién salva — no sobre quién puede ser salvo.',
            },
            {
              type: 'highlight_verse',
              text: 'Yo soy la vid verdadera, y mi Padre es el labrador... Permaneced en mí, y yo en vosotros. Como el pámpano no puede llevar fruto por sí mismo, si no permanece en la vid, así tampoco vosotros, si no permanecéis en mí.',
              reference: 'Juan 15:1, 4',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.vidVerdadera,
              alt: 'Una vid frondosa con pámpanos, ilustrando "Yo soy la vid verdadera"',
              caption: '"Yo soy la vid verdadera" — Juan 15:1, 4',
            },
            {
              type: 'paragraph',
              text: 'La imagen de la vid es una de las metáforas más antiguas de Israel (Isaías 5:1-7, el "cántico de la viña"). Israel era la viña de Dios — y la viña fracasó en producir fruto. Cristo ahora dice: "Yo soy la vid verdadera." No Israel, no el templo, no la ley — sino Cristo mismo es la fuente de la vida espiritual. El fruto que se produce en nosotros no viene de nuestro propio esfuerzo — viene de permanecer conectados a él.',
            },
            {
              type: 'key_points',
              title: 'Los siete "Yo soy" — síntesis doctrinal',
              points: [
                'Pan de vida: Cristo satisface el hambre espiritual que nada material puede saciar',
                'Luz del mundo: Cristo ilumina la oscuridad espiritual y guía con certeza',
                'La puerta: el acceso al Padre pasa exclusivamente por Cristo',
                'El buen pastor: Cristo da su vida por los suyos — los conoce por nombre',
                'La resurrección y la vida: la inmortalidad no es algo que Cristo da — es lo que Cristo ES',
                'El camino, la verdad, la vida: tres dimensiones del acceso al Padre',
                'La vid verdadera: la fuente de todo fruto espiritual es la conexión con Cristo',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'El "Yo soy" sin atributo — Juan 8:58',
      intro: {
        romanNumeral: 'VI',
        title: 'El "Yo soy" sin atributo — Juan 8:58',
        paragraphs: [
          'Además de los siete "Yo soy" con atributo, Juan registra tres veces en las que Jesús dice simplemente "Yo soy" sin añadir nada — y esa frase sola tiene el poder de derribar a los guardias que vienen a arrestarlo (Juan 18:6). Es el nombre divino sin modificar.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'El nombre que derriba hombres y levanta muertos',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Jesús les dijo: De cierto, de cierto os digo: Antes que Abraham fuese, yo soy. Entonces tomaron piedras para arrojárselas; pero Jesús se escondió y salió del templo.',
              reference: 'Juan 8:58-59',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: jesusAssets.lessons['los-yo-soy-de-cristo'].images.antesDeAbraham,
              alt: 'Jesús declarando "Antes que Abraham fuese, yo soy", con una presencia eterna y luminosa',
              caption: '"Antes que Abraham fuese, Yo Soy" — Juan 8:58',
            },
            {
              type: 'highlight_verse',
              text: 'Les dijo pues: ¿A quién buscáis? Ellos respondieron: A Jesús nazareno. Jesús les dijo: Yo soy. Y estaba también con ellos Judas, el que le entregaba. Cuando les dijo: Yo soy, retrocedieron, y cayeron a tierra.',
              reference: 'Juan 18:4-6',
            },
            {
              type: 'deep_dive',
              badge: 'El nombre de poder',
              title: 'Por qué "Yo soy" tiene ese efecto',
              paragraphs: [
                'En Juan 18, una cohorte romana (entre 200 y 600 soldados) más guardias del templo viene a arrestar a Jesús. Él sale solo a su encuentro, pregunta a quién buscan, ellos dicen "a Jesús nazareno", y él dice "Yo soy" — y todos caen al suelo. No hay explicación en el texto. No hay trance, ni milagro narrado. Solo el nombre, y los hombres caen.',
                'Los comentaristas han debatido siglos este pasaje. Lo más coherente con el resto de Juan: el nombre divino YHWH tiene un efecto sobre el mundo físico cuando es pronunciado por quien tiene la autoridad de pronunciarlo. No es magia — es el poder inherente del nombre divino.',
                'La irony del texto es perfecta: la persona con suficiente poder para derribar a cientos de soldados con dos palabras eligió no usarlo para escapar. "¿Acaso piensas que no puedo ahora orar a mi Padre, y que él no me daría más de doce legiones de ángeles?" (Mateo 26:53). El Jesús de Getsemaní podía. Eligió no hacerlo.',
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El título "Buen Pastor" que Jesús usa en Juan 10 es una referencia directa al Salmo 23, donde el Señor (Jehová/Cristo) es descrito como pastor.',
              answer: true,
              explanation: 'Correcto. El Salmo 23:1 dice "El Señor (YHWH/Jehová) es mi pastor." La teología de la Restauración enseña que Jehová del Antiguo Testamento es Jesucristo. Por lo tanto, cuando Jesús dice "Yo soy el buen pastor" en Juan 10, está reclamando ser el mismo Ser del Salmo 23 — un reclamo de identidad divina que sus oyentes judíos habrían reconocido.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'En Juan 14:6, Jesús usa tres palabras para describirse a sí mismo como el acceso al Padre: "Yo soy el ___, la verdad y la vida."',
              answer: 'camino',
              explanation: 'Juan 14:6: "Yo soy el camino, la verdad y la vida; nadie viene al Padre sino por mí." Esta es la sexta de las siete declaraciones "Yo soy" con atributo en el Evangelio de Juan, pronunciada en el Aposento Alto la noche de la Última Cena.',
            },
            {
              type: 'reflection',
              prompt: '¿Cuál de los siete "Yo soy" de Cristo resuena más contigo en este momento de tu vida — el pan que satisface, la luz que guía, la puerta que abre, el pastor que conoce, la resurrección que vence, el camino que lleva, o la vid que da fruto? ¿Por qué esa y no otra?',
            },
          ],
        },
      ],
    },
  ],
}
