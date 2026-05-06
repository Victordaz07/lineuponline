import type { Lesson } from '@/types/doctrine'

export const abraham: Lesson = {
  id: 'abraham',
  moduleId: 'personajes-escrituras',
  title: 'Abraham',
  subtitle: 'El padre de la fe — y lo que esa fe costó',
  author: 'Fuentes: Génesis 12-22; Abraham 1-3; Hebreos 11; DyC 132; Romanos 4',
  description:
    'El hombre al que Dios le pidió sacrificar a su hijo único. Abraham 1-3: la preordenación y la cosmología. Génesis 12-22: las pruebas acumuladas. Hebreos 11: el elogio más grande de la Biblia. DyC 132: el convenio abrahámico como fundamento de la exaltación.',
  level: 'AVANZADO',
  icon: '⭐',
  duration: 70,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Antes de Génesis — Abraham 1-3',
      intro: {
        romanNumeral: 'I',
        title: 'Antes de Génesis — Abraham 1-3',
        paragraphs: [
          'La mayoría conoce a Abraham desde Génesis 12 — el momento en que Dios le ordena dejar Harán. Pero el libro de Abraham, restaurado a través de Joseph Smith, revela quién era Abraham antes de eso: un hombre que casi fue sacrificado en un altar pagano, y que antes de la mortalidad ya estaba destinado para su misión.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Abraham 1 — El Altar y la Liberación',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y así como habían hecho con mis padres, buscaban también mi vida para que yo les sirviera según su religión; y como que yo era un firme seguidor de la rectitud, deseando también ser uno que poseía grande conocimiento, y ser un mayor seguidor de la justicia, y poseer una mayor porción del Espíritu de Dios y del conocimiento de él.',
              reference: 'Abraham 1:5–6',
            },
            {
              type: 'paragraph',
              text: 'Abraham vivía en Ur de los Caldeos — una sociedad que practicaba sacrificios humanos a dioses falsos. Su propio padre lo traicionó entregándolo para ser sacrificado en el altar de Elkenah. El sacerdote levantó el cuchillo — y el Señor envió un ángel para detenerlo. Abraham fue liberado. Esta experiencia — estar a punto de ser sacrificado — forma la raíz psicológica y espiritual de todo lo que Abraham hará después, incluyendo el momento en Moriah.',
            },
            {
              type: 'highlight_verse',
              text: 'Mi nombre es Jehová, y he oído tu voz, y he venido a librar a ti, y a tomar a tu mano; porque he descendido en el barco de Ptah-ah, en el que tú eras, para visitar a los que son justos y los que buscan justicia en este momento.',
              reference: 'Abraham 1:16',
            },
            {
              type: 'deep_dive',
              badge: 'Abraham 3',
              title: 'La visión premortal — Abraham en el concilio',
              paragraphs: [
                'Abraham 3 contiene una de las revelaciones cosmológicas más audaces del canon restaurado: Abraham ve las inteligencias eternas, las estrellas como símbolos del orden eterno, y la creación de la Tierra. Y entonces el Señor le dice algo extraordinario: "Estas almas preexistentes vi que muchas de ellas eran nobles y grandes" (Abraham 3:22).',
                '"Y Dios vio a estas almas que eran buenas, y él se mantuvo en medio de ellas, y él dijo: Estas haré mis gobernantes; porque él se mantuvo entre aquellos que eran espíritus, y vio que eran buenos; y me dijo: Abraham, tú eres una de ellas; tú fuiste elegido antes que nacieras." (Abraham 3:23).',
                'Abraham no fue elegido para su misión en el momento en que abandonó Harán — fue elegido antes de nacer. La vida de fe que viviremos en la mortalidad está conectada con el carácter que desarrollamos en la premortalidad. Abraham era "noble y grande" antes de que naciera — y su mortalidad fue la oportunidad de demostrar y desarrollar lo que ya era.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Pruebas Acumuladas — Génesis 12-20',
      intro: {
        romanNumeral: 'II',
        title: 'Las Pruebas Acumuladas — Génesis 12-20',
        paragraphs: [
          'Antes de llegar a Moriah, Abraham ya había sido probado repetidamente durante décadas. Cada prueba construyó la fe necesaria para la siguiente. No llegó al sacrificio de Isaac como novato espiritual — llegó como veterano de una vida completa de obediencia costosa.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Patrón de las Pruebas',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Deja tu tierra — Génesis 12:1',
                  text: '"Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré." Sin destino, sin explicación, sin mapa. Abraham tenía ~75 años y salió.',
                  ref: 'Génesis 12:1-4',
                  color: 'gold',
                },
                {
                  label: 'Hambre en la tierra prometida',
                  text: 'Dios le prometió Canaán. Dios envió hambre a Canaán. Abraham tuvo que ir a Egipto. La tierra prometida produjo hambre antes de producir promesa.',
                  ref: 'Génesis 12:10',
                  color: 'blue',
                },
                {
                  label: 'Sara en el palacio del Faraón',
                  text: 'Para sobrevivir, Abraham presentó a Sara como hermana. El Faraón la tomó para su harén. Dios intervino con plagas. Sara fue devuelta.',
                  ref: 'Génesis 12:11-20',
                  color: 'blue',
                },
                {
                  label: 'La promesa del hijo — Sara es estéril',
                  text: '"Miraré como las estrellas del cielo y como la arena del mar." Pero Sara tenía ~65 años y era estéril. La promesa dependía de lo que parecía imposible.',
                  ref: 'Génesis 15:5; 11:30',
                  color: 'gold',
                },
                {
                  label: 'Agar e Ismael — el intento humano',
                  text: 'Sara propone usar a su sierva Agar. Ismael nace. Dios dice: Ismael no es el heredero. Abraham debió haber esperado. Décadas de complicación por no esperar a Dios.',
                  ref: 'Génesis 16:1-4; 17:18-21',
                  color: 'blue',
                },
                {
                  label: 'Isaac nace — la promesa cumplida',
                  text: 'Abraham tiene 100 años. Sara tiene 90. "¿Hay para Dios alguna cosa difícil?" (Gén. 18:14). Isaac nace.',
                  ref: 'Génesis 21:1-5',
                  color: 'gold',
                },
                {
                  label: 'Moriah — la prueba suprema',
                  text: '"Toma a tu hijo, tu único, Isaac, al que amas, y ve a tierra de Moriah, y ofrécelo allí en holocausto." (Gén. 22:2).',
                  ref: 'Génesis 22:1-14',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Por qué las pruebas se acumularon antes de Moriah',
              body: 'La prueba de Moriah no fue la primera prueba de Abraham — fue la décima. Los comentaristas hebreos cuentan diez pruebas en la vida de Abraham antes de Moriah. Cada prueba anterior construyó la fe necesaria para la siguiente. No se llega a Moriah sin haber pasado por el hambre en Canaán, la espera de décadas por Isaac, el dolor de Ismael. La fe se construye en capas — como un músculo que se fortalece con uso repetido.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Moriah — La Prueba Suprema',
      intro: {
        romanNumeral: 'III',
        title: 'Moriah — La Prueba Suprema',
        paragraphs: [
          'Génesis 22 es posiblemente el texto más comentado del Antiguo Testamento. Un Dios que pide un sacrificio humano. Un padre que obedece. Un hijo que va voluntariamente. Y al final, una sustitución. Lo que ocurrió en Moriah es el corazón del evangelio en forma narrativa.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Génesis 22 — Texto y Teología',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Abraham en el monte Moriah con Isaac — ángel detiene el cuchillo',
              caption: '"Ahora conozco que temes a Dios" — Génesis 22:12',
              contextCard: {
                label: 'abraham-moriah-sacrificio-isaac',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y dijo: Toma ahora tu hijo, tu único, Isaac, al que amas, y vete a tierra de Moriah, y ofrécelo allí en holocausto sobre uno de los montes que yo te diré.',
              reference: 'Génesis 22:2',
            },
            {
              type: 'deep_dive',
              badge: 'Hebreos 11',
              title: 'Por qué Abraham obedeció — la lógica de Hebreos 11:17-19',
              paragraphs: [
                'Hebreos 11:17-19 revela la lógica interna de Abraham en ese momento: "Por la fe Abraham, cuando fue probado, ofreció a Isaac; y el que había recibido las promesas ofrecía su unigénito... pensando que Dios es poderoso para levantar aun de entre los muertos, de donde, en sentido figurado, también le volvió a recibir."',
                'Abraham no pensó que Dios estaba equivocado — pensó que Dios sabía cómo cumplir la promesa incluso después de que Isaac muriera. Si Dios prometió "en Isaac te será llamada descendencia" (Gén. 21:12) y luego pidió sacrificar a Isaac, la única conclusión lógica era que Dios podía resucitar a los muertos. No tenía precedente para esa creencia — aún no había una resurrección registrada en la historia. Pero la fe en la promesa era más fuerte que la ausencia de precedente.',
                'Kierkegaard llamó esto "el movimiento de la fe" — la disposición de confiar en Dios más allá de lo que la lógica humana puede seguir. No es irracionalidad; es una racionalidad de orden superior que acepta que la capacidad de Dios excede el marco conceptual humano.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y extendió Abraham su mano y tomó el cuchillo para degollar a su hijo. Entonces el ángel de Jehová le dio voces desde el cielo, y dijo: Abraham, Abraham. Y él respondió: Heme aquí. Y dijo: No extiendas tu mano sobre el muchacho, ni le hagas nada; porque ya conozco que temes a Dios, por cuanto no me rehusaste tu hijo, tu único.',
              reference: 'Génesis 22:10–12',
            },
            {
              type: 'doctrine_box',
              title: 'Moriah como tipo de la Expiación',
              body: 'Los paralelos entre Moriah y el Calvario son exactos: (1) Un padre ofrece a su hijo. (2) El hijo va voluntariamente. (3) El hijo lleva la leña para el sacrificio (Isaac) / la cruz (Cristo). (4) El lugar es el mismo: 2 Crónicas 3:1 identifica el monte Moriah como el lugar donde se construyó el templo de Jerusalén — el mismo monte de las colinas de Golgotha. (5) El sacrificio es interrumpido por un sustituto en el caso de Isaac (el carnero) — pero no en el caso de Cristo, quien sí murió. Abraham vivió lo que el Padre Eterno experimentó sin poder ser detenido.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Convenio Abrahámico — DyC 132 y Romanos 4',
      intro: {
        romanNumeral: 'IV',
        title: 'El Convenio Abrahámico — DyC 132 y Romanos 4',
        paragraphs: [
          'El convenio que Dios hizo con Abraham en Génesis 12 y 15 no es solo una promesa de tierra y descendencia — es el fundamento de la exaltación. DyC 132 lo revela como el mismo convenio del matrimonio eterno y la vida eterna. Romanos 4 lo establece como el modelo de la fe que justifica.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Las Promesas del Convenio',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque Abraham recibió grandes promesas tanto para él mismo como para su simiente, así como para los que son de la simiente de Abraham recibirán estos, aquellos también de la fe de Abraham recibirán estas promesas. Estas promesas son las de la exaltación — que todos los que guardan mis mandamientos recibirán.',
              reference: 'Doctrina y Convenios 132:29–31 (paráfrasis)',
            },
            {
              type: 'compare_grid',
              title: 'Las tres dimensiones del convenio abrahámico',
              left: {
                label: 'Promesa temporal (Génesis)',
                points: [
                  'Tierra: Canaán para él y su descendencia',
                  'Descendencia: tan numerosa como las estrellas',
                  'Naciones: "en ti serán benditas todas las familias"',
                  'Protección divina y prosperidad material',
                ],
              },
              right: {
                label: 'Promesa eterna (DyC 132)',
                points: [
                  'Exaltación: "heredad en todos los mundos" (DyC 132:19)',
                  'Posteridad eterna: "aumento" eterno — hijos eternos',
                  'Divinidad: "dioses" — como Abraham (DyC 132:37)',
                  'El convenio del matrimonio eterno es la puerta de entrada',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Abraham recibió todas las cosas mediante lo que le fue prometido. Abraham recibió promesas acerca de su simiente, y de los frutos del vientre de Sara; y de la exaltación también; pues así como Isaac también fue ofrecido en sacrificio por mano de su padre Abraham, así Abraham ofreció su propia vida.',
              reference: 'Doctrina y Convenios 132:29',
            },
            {
              type: 'deep_dive',
              badge: 'Romanos 4',
              title: 'Pablo y la fe de Abraham — la justificación sin obras',
              paragraphs: [
                'Romanos 4 es el texto paulino más importante sobre Abraham. Pablo argumenta que Abraham fue "justificado" — declarado justo ante Dios — antes de ser circuncidado (Gén. 15 precede a Gén. 17). Esto es crucial para su argumento: si la fe de Abraham fue suficiente antes del rito, entonces la fe es el principio de justificación, no el rito.',
                '"Y no se debilitó en la fe al considerar su cuerpo, que estaba ya como muerto (siendo de casi cien años), o la esterilidad de la matriz de Sara. Tampoco dudó, por incredulidad, de la promesa de Dios, sino que se fortaleció en fe, dando gloria a Dios, plenamente convencido de que era también poderoso para hacer todo lo que había prometido." (Romanos 4:19-21).',
                'Este es el elogio más preciso de la fe de Abraham en el canon bíblico: no dudó, no se debilitó, se fortaleció. No porque la promesa fuera fácil de creer — era humanamente imposible — sino porque su confianza en la capacidad de Dios superó su evaluación de su propia capacidad humana.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Hebreos 11 — El Panteón de la Fe',
      intro: {
        romanNumeral: 'V',
        title: 'Hebreos 11 — El Panteón de la Fe',
        paragraphs: [
          'Hebreos 11 es el capítulo más poderoso sobre la fe en el Nuevo Testamento. Su definición inicial — "la fe es la certeza de lo que se espera, la convicción de lo que no se ve" — es la base de toda la teología de la fe en el evangelio restaurado. Y Abraham ocupa el lugar central.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Hebreos 11 — La Fe que No Recibió la Promesa',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Es, pues, la fe la certeza de lo que se espera, la convicción de lo que no se ve. Porque por ella alcanzaron buen testimonio los antiguos.',
              reference: 'Hebreos 11:1–2',
            },
            {
              type: 'highlight_verse',
              text: 'Por la fe Abraham, siendo llamado, obedeció para salir al lugar que había de recibir como herencia; y salió sin saber a dónde iba. Por la fe habitó como extranjero en la tierra prometida como en tierra ajena, morando en tiendas con Isaac y Jacob, coherederos de la misma promesa.',
              reference: 'Hebreos 11:8–9',
            },
            {
              type: 'highlight_verse',
              text: 'Conforme a la fe murieron todos éstos sin haber recibido lo prometido, sino mirándolo de lejos, y creyéndolo, y saludándolo, y confesando que eran extranjeros y peregrinos sobre la tierra.',
              reference: 'Hebreos 11:13',
            },
            {
              type: 'doctrine_box',
              title: 'La fe que no recibió la promesa en esta vida',
              body: 'Hebreos 11:13 es uno de los versículos más honestamente difíciles de la Biblia: "murieron todos estos sin haber recibido lo prometido." Abraham murió sin ver la promesa cumplida en su plenitud. No recibió la tierra permanentemente, no vio a su descendencia "como las estrellas del cielo" en números, no vio la exaltación prometida. Y sin embargo, vivió y murió en fe. La implicación: la fe genuina no requiere ver el cumplimiento en esta vida. El marco de la fe no es esta mortalidad — es la eternidad.',
            },
            {
              type: 'key_points',
              title: 'Lo que Abraham modelo para nosotros según Hebreos 11',
              points: [
                'Obedeció sin saber a dónde iba (v.8) — fe sin el mapa completo',
                'Habitó como extranjero en la tierra prometida (v.9) — comodidad postergada',
                'Creyó en la resurrección antes de que hubiera precedente (v.17-19)',
                'Murió sin recibir lo prometido — pero mirándolo "de lejos" (v.13)',
                '"Dios no se avergüenza de llamarse su Dios" (v.16) — el mayor elogio bíblico',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Abraham y Nosotros — Hijos del Convenio',
      intro: {
        romanNumeral: 'VI',
        title: 'Abraham y Nosotros — Hijos del Convenio',
        paragraphs: [
          'El convenio abrahámico no es historia antigua — es activo hoy. Cada miembro bautizado que recibe una bendición patriarcal es declarado de la simiente de Abraham. Las promesas que Dios le hizo a Abraham son también las nuestras — si somos fieles al convenio.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'La Simiente de Abraham Hoy',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'Abraham mirando las estrellas del cielo — promesa de descendencia innumerable',
              caption: '"Así será tu descendencia" — Génesis 15:5',
              contextCard: {
                label: 'abraham-estrellas-promesa-descendencia',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y si vosotros sois de Cristo, ciertamente linaje de Abraham sois, y herederos según la promesa.',
              reference: 'Gálatas 3:29',
            },
            {
              type: 'paragraph',
              text: 'Pablo en Gálatas 3:29 revela que la membresía en el convenio abrahámico no depende de la genealogía biológica — depende de Cristo. Todo el que se une a Cristo por los convenios del evangelio se convierte en "linaje de Abraham" y "heredero según la promesa." Las promesas de Génesis 12 y 15 y DyC 132 son tuyas — no por accidente de nacimiento, sino por elección de convenio.',
            },
            {
              type: 'doctrine_box',
              title: 'La bendición patriarcal como conexión personal al convenio de Abraham',
              body: 'La bendición patriarcal declara la tribu de Israel a través de la cual el miembro desciende o es adoptado — casi siempre Efraín o Manaseh, las tribus de los hijos de José de Egipto. Esta declaración no es meramente ceremonial: es la afirmación de que las promesas del convenio abrahámico se aplican específicamente a esta persona. Las tres promesas del convenio — posteridad, tierra (exaltación en los mundos eternos), y ser bendición para todas las naciones (la misión de la Iglesia) — son promesas personales.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según Hebreos 11:17-19, Abraham estuvo dispuesto a sacrificar a Isaac porque creyó que Dios podía resucitarlo de entre los muertos.',
              answer: true,
              explanation: 'Correcto. Hebreos 11:19 dice: "pensando que Dios es poderoso para levantar aun de entre los muertos." La lógica de Abraham era: si Dios prometió que "en Isaac te será llamada descendencia," y Dios pide que lo sacrifique, entonces Dios debe poder resucitarlo para cumplir la promesa. Esta fe en la resurrección precedió al primer registro de una resurrección real.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Abraham 3:22-23 revela que Abraham fue elegido para su misión _____ de nacer en la mortalidad.',
              answer: 'antes',
              explanation: 'Abraham 3:23: "me dijo: Abraham, tú eres una de ellas; tú fuiste elegido antes que nacieras." La preordenación de Abraham para su misión específica ocurrió en la vida premortal. Esto conecta directamente con la doctrina de la preexistencia y la preordenación de los "nobles y grandes" (Abraham 3:22).',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti ser "linaje de Abraham" — heredero del convenio abrahámico? ¿Has recibido una bendición patriarcal? ¿Cómo cambia tu perspectiva del sufrimiento saber que Abraham "murió sin haber recibido lo prometido, sino mirándolo de lejos" — y que aun así fue fiel? ¿Hay una prueba en tu vida que requiere la misma fe que Abraham tuvo en Moriah — confiar sin ver el resultado?',
            },
          ],
        },
      ],
    },
  ],
}
