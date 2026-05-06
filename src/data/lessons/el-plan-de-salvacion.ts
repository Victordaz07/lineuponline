import type { Lesson } from '@/types/doctrine'

export const elPlanDeSalvacion: Lesson = {
  id: 'plan-de-salvacion',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Plan de Salvación',
  subtitle: 'La arquitectura de la eternidad',
  author: 'Fuentes principales: Alma 42, 2 Nefi 2, DyC 76, 93',
  description:
    'El plan de salvación no es un esquema religioso — es la arquitectura de la existencia. De dónde venimos, por qué estamos aquí, a dónde vamos. La Caída, la Expiación, la muerte, el juicio, y los tres destinos eternos — todo en un solo marco coherente.',
  level: 'AVANZADO',
  icon: '🗺️',
  duration: 70,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'preexistencia',
  nextLessonId: 'justicia-y-misericordia',
  studySections: [
    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN I — El Consejo en los Cielos
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'El Consejo en los Cielos',
      intro: {
        romanNumeral: 'I',
        title: 'El Consejo en los Cielos',
        paragraphs: [
          'Antes de que existiera la tierra, antes de que hubiera un árbol, un océano o una estrella, hubo un concilio. El Padre convocó a Sus hijos espirituales para presentarles el plan de la felicidad. En ese concilio se decidió todo: quién sería el Salvador, cuál sería Su plan, y quién lo seguiría. Nosotros estuvimos ahí. Escogimos.',
          'Abraham recibió una visión de ese momento eterno (Abraham 3:22–26). Lo que se le reveló no es un detalle menor de la teología restaurada — es la clave para entender por qué estamos aquí, qué estamos haciendo, y adónde vamos.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La Visión de Abraham',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y el Señor me dijo: Estas dos son mis gobernantes; que estaban entre los que eran espíritus nobles y grandes antes de que el mundo fuera; y que así fue escogido uno antes, y asimismo también el otro, y así había muchos de los nobles y grandes; y Dios vio que eran buenos, y él se puso en medio de ellos, y él les dijo: Descenderé, pues he escogido estas cosas.',
              reference: 'Abraham 3:22–23',
            },
            {
              type: 'paragraph',
              text: 'Abraham vio las "inteligencias" — las almas espirituales de la humanidad — antes de que el mundo fuera creado. Entre ellas, el Señor señaló a los "nobles y grandes": seres que habían demostrado carácter, fidelidad, y disposición en la vida preinmortal. El Señor mismo fue escogido para descender y llevar a cabo la misión central del plan.',
            },
            {
              type: 'highlight_verse',
              text: 'Y había muchos de los espíritus nobles y grandes; y Dios vio que eran buenos; y él se puso en medio de ellos, y dijo: Haré descender a estos, y ellos serán mi pueblo, y los seleccionaré a ellos de entre los que he escogido.',
              reference: 'Abraham 3:23',
            },
            {
              type: 'doctrine_box',
              title: 'La existencia premortal: más que una idea abstracta',
              body: 'La doctrina restaurada enseña que cada ser humano vivió como espíritu con el Padre Celestial antes de nacer en la tierra. No fue una existencia breve ni insignificante — Brigham Young y otros profetas han enseñado que desarrollamos carácter, talentos, y disposición espiritual durante ese período. El hecho de que el Señor llamara a ciertos espíritus "nobles y grandes" implica diferencias reales de carácter forjadas antes de este mundo.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Dos Planes, Una Elección',
          blocks: [
            {
              type: 'paragraph',
              text: 'El concilio celestial no fue una reunión sin conflicto. Dos planes fueron presentados para llevar a cabo la misión de traer a los hijos de Dios de vuelta a Su presencia. Uno honraba la agencia de los hijos. El otro la destruía. La diferencia entre ambos define todo lo que importa en el plan de salvación.',
            },
            {
              type: 'highlight_verse',
              text: 'Satanás… vino ante mí diciendo: He aquí, aquí estoy, envíame, yo seré tu hijo y redimiré a toda la humanidad, de modo que ni un solo alma se perderá, y ciertamente lo haré; por lo tanto, dame tu honor. Mas he aquí, mi Amado Hijo, que fue mi Amado y Escogido desde el principio, me dijo: Padre, sea hecha tu voluntad, y la gloria sea tuya para siempre.',
              reference: 'Moisés 4:1–2',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'El plan de Lucifer',
                items: [
                  'Redimir a toda alma sin excepción mediante coacción',
                  'Eliminar la agencia humana para garantizar resultados',
                  'Arrebatar la gloria y el honor del Padre',
                  'Salvar a todos sin que nadie creciera ni eligiera',
                  'Vaciar el plan de todo significado real',
                ],
              },
              right: {
                title: 'El plan de Cristo',
                items: [
                  'Ofrecer redención a todos los que la acepten libremente',
                  'Preservar la agencia como principio eterno',
                  'Dar toda la gloria al Padre',
                  'Permitir el crecimiento real a través de la elección real',
                  'Hacer posible la exaltación genuina, no solo la salvación forzada',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y por cuanto una tercera parte de las huestes del cielo se apartó por causa de Satanás, y fueron arrojadas; y he aquí, están ahí para seducir a los hijos de los hombres en el día de su prueba.',
              reference: 'DyC 29:36–37',
            },
            {
              type: 'paragraph',
              text: 'Una tercera parte de los hijos de Dios siguió a Lucifer. Eso no es un número pequeño — y hace que la elección de los que sí vinimos a la tierra sea más significativa. Todos nosotros, al nacer aquí, ya habíamos elegido el plan de Cristo en esa gran asamblea. Ya habíamos dicho sí.',
            },
            {
              type: 'leader_quote',
              quote: 'Nuestra condición preinmortal no fue un período de espera pasiva. Fue una vida activa. La valentía que demostramos allá, las elecciones que hicimos antes de que existiera el tiempo, son parte de quiénes somos. Que Dios nos haya permitido venir aquí es señal de que en algún momento demostramos que valíamos la confianza.',
              name: 'Neal A. Maxwell',
              role: '"The New Testament — A Matchless Portrait of the Savior", Ensign, diciembre 1986',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu perspectiva de las pruebas actuales saber que tú mismo elegiste este plan antes de nacer? ¿Qué te dice ese "sí" preinmortal sobre tu carácter eterno?',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN II — Las Seis Etapas de la Existencia
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'Las Seis Etapas de la Existencia',
      intro: {
        romanNumeral: 'II',
        title: 'Las Seis Etapas de la Existencia',
        paragraphs: [
          'El plan de salvación no tiene dos pasos — tiene seis etapas distintas, cada una con un propósito diferente. Entender el arco completo de la existencia humana transforma la manera en que vivimos la mortalidad: no como el único capítulo, sino como uno crucial dentro de una historia mucho más larga.',
          'La mayoría de los seres humanos piensan en su existencia como: naces, vives, mueres. La doctrina restaurada revela una arquitectura radicalmente más rica.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El Arco Completo: Seis Etapas',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Premortalidad',
                  text: 'Vivimos como inteligencias y luego como espíritus nacidos del Padre y de la Madre Celestial. Desarrollamos carácter, elegimos el plan, y nos preparamos para descender.',
                  ref: 'Abraham 3:22–26; DyC 93:29',
                  color: 'gold',
                },
                {
                  label: 'Mortalidad',
                  text: 'El espíritu se une a un cuerpo físico. El período de prueba, de adquisición de experiencia, de formación del carácter mediante elecciones reales. Única oportunidad de obtener un cuerpo mortal.',
                  ref: '2 Nefi 2:25–27; DyC 93:33–34',
                  color: 'blue',
                },
                {
                  label: 'Mundo de los Espíritus',
                  text: 'Tras la muerte física, el espíritu continúa. Los justos van al paraíso espiritual; los demás, a la prisión espiritual. Ambos esperan la resurrección y siguen aprendiendo.',
                  ref: 'Alma 40:11–14; DyC 138',
                  color: 'blue',
                },
                {
                  label: 'Resurrección',
                  text: 'El espíritu y el cuerpo se unen de manera permanente y glorificada. Universal — todos resucitarán sin excepción, justos e injustos. Este cuerpo resucitado es eterno.',
                  ref: '1 Corintios 15:20–22; Alma 11:43–44',
                  color: 'gold',
                },
                {
                  label: 'Juicio Final',
                  text: 'Cada alma comparece ante Dios. El juicio es perfecto: basado en obras, conocimiento, convenios, arrepentimiento, y el uso de la Expiación. No hay error posible.',
                  ref: 'Alma 41:3; DyC 76; 2 Nefi 9:15–16',
                  color: 'blue',
                },
                {
                  label: 'Eternidad',
                  text: 'Asignación a uno de los tres reinos de gloria, o a las tinieblas de afuera. El destino eterno es el reflejo del corazón, carácter, y elecciones de cada individuo.',
                  ref: 'DyC 76:50–112; 1 Corintios 15:40–42',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Espíritu + Cuerpo = Alma',
              body: 'Una de las doctrinas más distintas del Evangelio restaurado es la naturaleza del alma humana. La revelación enseña con precisión: "Y el espíritu y el cuerpo son el alma del hombre" (DyC 88:15). Esta no es una definición poética — es ontológica. Sin cuerpo, el espíritu no está completo. Por eso la resurrección es universal: no es un premio para los buenos, es el destino de todos. La exaltación requiere un cuerpo glorificado porque Dios mismo tiene uno. El objetivo no es escapar del cuerpo, sino santificarlo y glorificarlo para siempre.',
            },
            {
              type: 'highlight_verse',
              text: 'Y el espíritu y el cuerpo son el alma del hombre. Y la resurrección de los muertos es la redención del alma.',
              reference: 'DyC 88:15–16',
            },
            {
              type: 'highlight_verse',
              text: 'Los elementos son eternos, y el espíritu y el elemento, inseparablemente conectados, reciben una plenitud de gozo; y cuando son separados, el hombre no puede recibir una plenitud de gozo.',
              reference: 'DyC 93:33–34',
            },
            {
              type: 'paragraph',
              text: 'Esta teología tiene consecuencias prácticas profundas: el cuerpo no es una prisión del alma (platonismo), ni un obstáculo para la espiritualidad (gnosticismo), ni simplemente una máquina biológica (materialismo). El cuerpo es parte esencial del yo eterno. Cuidarlo, santificarlo, y usarlo para fines santos es acto de adoración.',
            },
            {
              type: 'key_points',
              title: 'Características únicas de la teología del cuerpo en la doctrina restaurada',
              points: [
                'Dios el Padre tiene un cuerpo de carne y huesos tan tangible como el del hombre (DyC 130:22)',
                'El cuerpo resucitado de Cristo no era ilusión — Tomás lo tocó, los discípulos lo vieron comer',
                'La inmortalidad física es condición necesaria para la plenitud del gozo eterno',
                'El matrimonio eterno requiere que ambos cónyuges tengan cuerpos glorificados',
                'La exaltación es un estado físico y espiritual simultáneo, no solo espiritual',
              ],
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN III — La Caída: Necesaria, No Accidental
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'La Caída — Necesaria, No Accidental',
      intro: {
        romanNumeral: 'III',
        title: 'La Caída — Necesaria, No Accidental',
        paragraphs: [
          'La Caída de Adán y Eva es interpretada en el mundo cristiano tradicional como el mayor error de la historia humana — el momento en que el plan de Dios fue saboteado y la humanidad quedó condenada. La doctrina restaurada presenta una perspectiva radicalmente diferente: la Caída fue necesaria, fue parte del plan, y sin ella ninguno de nosotros podría existir o ser exaltado.',
          'Lehi, enseñando a su hijo Jacob, articula esta teología con precisión filosófica que no tiene paralelo en ninguna otra tradición cristiana.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La Enseñanza de Lehi: Transgresión, No Pecado',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y he aquí, si Adán no hubiese transgredido, no habría caído; mas hubiera permanecido en el Jardín del Edén. Y todas las cosas que fueron creadas habrían permanecido en el mismo estado en que se encontraban después de ser creadas; y no habrían tenido fin. Y hubieran carecido de gozo, pues no conocían la miseria; no habrían hecho el bien, pues no conocían el pecado. Pero he aquí, todas las cosas se han dado al hombre; y él es libre de escoger la libertad y la vida eterna, por la mediación de todos los hombres, o escoger la cautividad y la muerte.',
              reference: '2 Nefi 2:22–23, 27',
            },
            {
              type: 'paragraph',
              text: 'Observa la distinción que hace Lehi: Adán "transgredió," no "pecó." Esta diferencia no es semántica. Un pecado es violar una ley conocida con intención maliciosa. Una transgresión es actuar en contra de un mandato cuando dos mandatos están en conflicto, sin plena comprensión de todas las consecuencias. Adán y Eva estaban entre dos mandatos: no comer del fruto y multiplicarse y henchir la tierra. No podían cumplir ambos simultáneamente en el Edén.',
            },
            {
              type: 'doctrine_box',
              title: 'Transgresión vs. Pecado: Una distinción teológica crítica',
              body: 'El Presidente Dallin H. Oaks ha enseñado explícitamente: "Algunos afirman que Adán y Eva cometieron un terrible error pecando en el Jardín del Edén. Discrepo. Llamo a lo que hicieron una transgresión, más que un pecado. Una transgresión puede estar mal, pero puede también ser un acto necesario dentro del plan general... Adán y Eva tomaron una decisión que hizo posible su progreso y el progreso de toda la humanidad." Esta distinción protege el carácter moral de nuestros primeros padres y preserva la integridad del plan.',
            },
            {
              type: 'highlight_verse',
              text: 'Adán cayó para que los hombres existiesen; y los hombres existen para que tengan gozo.',
              reference: '2 Nefi 2:25',
            },
            {
              type: 'paragraph',
              text: 'Esta es posiblemente la declaración más compacta y poderosa de la teología de la Caída en todo el Libro de Mormón. El propósito del hombre no es sobrevivir una prueba — es tener gozo. El propósito de la Caída no fue arruinar el plan — fue hacerlo posible. Sin mortalidad no hay elecciones reales. Sin elecciones reales no hay carácter real. Sin carácter real no hay exaltación real.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La "Feliz Caída" — Un Profundo Dive Doctrinal',
          blocks: [
            {
              type: 'deep_dive',
              badge: 'Teología Comparada',
              title: 'La doctrina de la "Fortunate Fall" (Caída Afortunada)',
              paragraphs: [
                'En la tradición cristiana medieval, algunos teólogos usaban la expresión latina "Felix Culpa" — "feliz culpa" — para referirse a la Caída. San Ambrosio y San Agustín la mencionaron, y aparece en la liturgia del Exsultet pascual: "Oh feliz culpa que mereció tan gran Redentor." Sin embargo, en el contexto católico y protestante tradicional, esto era un reconocimiento tácito de una paradoja incómoda, no una teología completamente desarrollada.',
                'La doctrina restaurada va mucho más lejos. No es que la Caída resultó en algo bueno a pesar de ser mala. Es que la Caída fue parte del plan desde el principio — un acto necesario para que el plan funcionara. La diferencia es filosóficamente enorme: en la visión tradicional, Dios tolera o redime un error; en la visión restaurada, Dios diseñó un proceso que requería este paso.',
                'Lehi enseña que sin la Caída: (1) no habría mortalidad, (2) no habría hijos, (3) no habría alegría ni miseria real, (4) no habría agencia real, y (5) no habría posibilidad de exaltación. La Caída no fue el obstáculo al plan — fue el primer paso necesario de él. La Expiación no fue el plan B cuando el plan A falló — fue el plan A desde antes de la fundación del mundo.',
                'Esta teología tiene implicaciones prácticas: no miramos a Adán y Eva con vergüenza o reproche. Los miramos con gratitud. Su valiente decisión — en la oscuridad, sin plena comprensión, ante un mandato imposible de doble vínculo — abrió la puerta a toda la experiencia humana. Sin su transgresión, ninguno de nosotros existiría.',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Visión tradicional cristiana de la Caída',
                items: [
                  'Un error catastrófico de Adán y Eva',
                  'Trajo corrupción y pecado al plan de Dios',
                  'Requirió que Dios improvisara una solución (Cristo)',
                  'Fuente de la "naturaleza pecaminosa" heredada',
                  'Adán y Eva son figuras de vergüenza y consecuencia',
                  'La salvación es escapar de lo que la Caída introdujo',
                ],
              },
              right: {
                title: 'Visión restaurada de la Caída',
                items: [
                  'Un acto necesario y previsto en el plan eterno',
                  'Sin ella no hay mortalidad, hijos, ni exaltación posible',
                  'La Expiación fue preparada antes de la fundación del mundo',
                  'No heredamos el pecado de Adán — cada uno responde por los suyos',
                  'Adán y Eva son figuras de valentía y gratitud',
                  'La salvación es construir sobre lo que la Caída hizo posible',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia tu relación con tu propio "estado caído" — tus imperfecciones, tus luchas, tu mortalidad — cuando entiendes que la Caída fue necesaria, no accidental? ¿Ves tu mortalidad como una condena o como una oportunidad?',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN IV — La Mortalidad y el Mundo de los Espíritus
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'La Mortalidad y el Mundo de los Espíritus',
      intro: {
        romanNumeral: 'IV',
        title: 'La Mortalidad y el Mundo de los Espíritus',
        paragraphs: [
          '¿Por qué necesitábamos venir a la tierra? ¿Qué pasa exactamente después de que morimos? El plan de salvación da respuestas precisas a ambas preguntas. La mortalidad no es un obstáculo — es un instrumento de crecimiento con tres propósitos específicos. Y la muerte no es el final, sino el comienzo de la siguiente etapa.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El Propósito de la Mortalidad',
          blocks: [
            {
              type: 'key_points',
              title: 'Tres propósitos esenciales de la mortalidad',
              points: [
                'Obtener un cuerpo físico — requisito para la plenitud del gozo eterno (DyC 93:33–34)',
                'Ser probados para ver si haremos "todas las cosas que el Señor nuestro Dios nos mande" (Abraham 3:25)',
                'Adquirir experiencia que no puede obtenerse de ninguna otra forma — incluyendo el sufrimiento, la alegría, y la elección libre',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y los probaremos con esto, para ver si harán todas las cosas que el Señor su Dios les mande.',
              reference: 'Abraham 3:25',
            },
            {
              type: 'paragraph',
              text: 'La mortalidad es única en el plan: es el único lugar donde el espíritu y el cuerpo coexisten en un estado de tensión, prueba, y crecimiento. Es el único lugar donde la fe opera en un velo de ignorancia. Es el único lugar donde las elecciones son verdaderamente libres porque el resultado no está garantizado. Esta combinación es lo que hace la mortalidad irreemplazable en el plan de Dios.',
            },
            {
              type: 'doctrine_box',
              title: 'La santidad del cuerpo mortal',
              body: '"El espíritu y el elemento, inseparablemente conectados, reciben una plenitud de gozo; y cuando son separados, el hombre no puede recibir una plenitud de gozo" (DyC 93:33–34). Esta revelación enseña que el estado actual de los espíritus en el mundo de los espíritus — separados de sus cuerpos — es un estado de imperfección. No por pecado, sino por incomplitud ontológica. El espíritu sin cuerpo no puede recibir la plenitud del gozo eterno. Por eso la resurrección es tan central: no es solo el regreso del cuerpo, es la completitud del alma.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'El Mundo de los Espíritus: Lo Que Alma Nos Enseñó',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'El espíritu de todos los hombres, así luego como mueren los cuerpos de hombres mortales, son recibidos en el paraíso de Dios si fueron buenos, y a las tinieblas exteriores si fueron malos. Y entonces llega el tiempo en que todos resucitarán y comparecerán ante Dios, y serán juzgados según sus obras.',
              reference: 'Alma 40:11–14 (parafraseado)',
            },
            {
              type: 'paragraph',
              text: 'Alma el Joven, respondiendo a su hijo Corianton sobre la resurrección, describe el mundo de los espíritus con claridad notable. No es un lugar de nada — es un lugar activo con dos divisiones distintas: el paraíso espiritual (para los que mueren en justicia) y la prisión espiritual (para los que no conocieron el Evangelio o vivieron en desobediencia).',
            },
            {
              type: 'key_points',
              title: 'Lo que ocurre en el mundo de los espíritus (DyC 138)',
              points: [
                'Los justos en el paraíso continúan aprendiendo, sirviendo, y esperando la resurrección',
                'Joseph F. Smith vio que Cristo, entre su muerte y resurrección, organizó una misión para predicar en la prisión espiritual (DyC 138:29–32)',
                'Los espíritus fieles son enviados como misioneros a enseñar a quienes no tuvieron la oportunidad en vida',
                'El trabajo de templo en la tierra hace posible que los espíritus en la prisión acepten ordenanzas por procuración',
                'El bautismo por los muertos y demás ordenanzas del templo tienen efecto real en el mundo de los espíritus (1 Pedro 4:6)',
                'El estado de los espíritus, aunque transitorio, es plenamente consciente — no es sueño ni inconsciencia',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y vi a los ángeles que anunciaron el Evangelio a los que habitaban en la tierra, y a todos cuantos obedecieron la voz del Evangelio; y ellos vinieron ante el Cordero, y fueron coronados con la gloria de su plenitud.',
              reference: 'DyC 138:30–31',
            },
            {
              type: 'deep_dive',
              badge: 'Visión de Joseph F. Smith',
              title: 'DyC 138 — La gran visión de la redención de los muertos',
              paragraphs: [
                'El 3 de octubre de 1918, el Presidente Joseph F. Smith, anciano y cercano a la muerte, meditaba sobre 1 Pedro 3:18–20 cuando recibió una de las revelaciones más significativas del dispensación de la plenitud de los tiempos. Vio el mundo de los espíritus con un detalle extraordinario.',
                'Vio a los justos — Adán, Eva, Abel, Set, Noé, Sem, Abraham, Isaac, Jacob, Moisés, Isaías, Ezequiel, Daniel, Elías, Malaquías, y muchos más — reunidos en asamblea, gozosos y esperando la redención. Pero notó que Cristo no fue personalmente a la prisión espiritual a predicar. En cambio, designó a los espíritus justos como sus mensajeros.',
                'Esta visión resuelve uno de los problemas teológicos más persistentes del evangelio: ¿qué pasa con los que mueren sin haber escuchado el Evangelio? La respuesta restaurada es que tienen una oportunidad real en el mundo de los espíritus. Y el trabajo de redención de los muertos que realizamos en los templos de la tierra es el mecanismo que lo hace posible.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo influye el entendimiento del mundo de los espíritus en tu motivación para hacer trabajo de historia familiar y templo? ¿Sientes una conexión real con tus ancestros que están en el mundo de los espíritus?',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN V — La Expiación: El Eje del Plan
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'La Expiación — El Eje del Plan',
      intro: {
        romanNumeral: 'V',
        title: 'La Expiación — El Eje del Plan',
        paragraphs: [
          'Sin la Expiación, el plan de salvación se derrumba. La Caída hizo necesaria la mortalidad — pero también introdujo el pecado y la muerte física y espiritual. La Expiación es lo que resuelve el problema: paga el precio que la justicia requiere, y hace posible que la misericordia actúe. Cristo no es un añadido al plan — es el eje sobre el que gira todo.',
          'La revelación nos da acceso a detalles del sufrimiento expiatorio que no están en ningún otro texto canónico del mundo. DyC 19 contiene la descripción más íntima y aterradora del dolor de Cristo en Getsemaní — en sus propias palabras.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'El Sufrimiento de Cristo: Sus Propias Palabras',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Pues he aquí, yo, Dios, he sufrido estas cosas por todos, para que ellos no tengan que sufrir si se arrepintieren; mas si no se arrepintieren, tendrán que sufrir tal como yo; lo cual sufrimiento fue causa de que yo, aun Dios, el mayor de todos, temblara de dolor y sangrara por cada poro, y sufriera tanto en cuerpo y espíritu — y quise que bebiera la copa amarga y me retractase — no obstante, me glorifiqué y tomé la copa.',
              reference: 'DyC 19:16–19',
            },
            {
              type: 'paragraph',
              text: 'Estas palabras no tienen precedente en ninguna escritura. Cristo habla en primera persona, en tiempo pasado, describiendo lo que ocurrió en Getsemaní: tembló de dolor, sangró por cada poro, quiso retractarse. El verbo "quise" es el más íntimo — revela que la voluntad humana de Cristo consideró el retiro. Y luego el más heroico: "me glorifiqué y tomé la copa." No porque no doliera, sino a pesar de que dolía más allá de toda comprensión.',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué solo Cristo podía expiar?',
              body: 'La teología de la Expiación requiere responder: ¿por qué no podía simplemente Dios perdonar sin más? La respuesta está en la naturaleza de la justicia: las leyes del universo exigen consecuencias reales por las transgresiones. Sin consecuencias reales, las leyes son ficticias y el universo carece de orden moral. Cristo, al poseer tanto una naturaleza divina (del Padre) como una naturaleza mortal (de María), pudo sufrir infinitamente — más allá de lo que cualquier ser mortal podría sufrir — y hacerlo voluntariamente. Su divinidad hizo infinito Su sufrimiento; Su humanidad hizo posible que sufriera. Solo esta combinación única podía satisfacer las demandas de la justicia por toda la humanidad.',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, el plan de redención no se podía llevar a cabo sino por medio de la expiación; por consiguiente, Dios mismo expiará por los pecados del mundo, para efectuar el plan de misericordia, para aplacar las exigencias de la justicia, para que Dios pueda ser un Dios perfecto y justo, y también un Dios misericordioso.',
              reference: 'Alma 42:15',
            },
          ],
        },
        {
          id: 't5-2',
          title: 'La Expiación en Su Amplitud Total',
          blocks: [
            {
              type: 'paragraph',
              text: 'Uno de los errores más comunes sobre la Expiación es reducirla al perdón de pecados. La Expiación de Cristo es mucho más amplia: cubre el pecado, sí, pero también cubre el dolor, la injusticia, el trauma, la enfermedad, la soledad, la incapacidad mental, y toda forma de sufrimiento que no es consecuencia de elección propia. Cristo no solo pagó por lo que hicimos mal — también vivió todo lo que sufrimos para poder saber exactamente cómo ayudarnos.',
            },
            {
              type: 'key_points',
              title: 'Las dimensiones de la Expiación de Cristo',
              points: [
                'Remisión de pecados mediante arrepentimiento y fe (el uso más conocido)',
                'Victoria sobre la muerte física — resurrección universal para todos los que nacen en la tierra',
                'Sanación de heridas emocionales, traumas, y sufrimientos no merecidos (Alma 7:11–12)',
                'Comprensión perfecta de toda experiencia humana — "conoce mis sufrimientos" (DyC 19:16)',
                'Misericordia que no anula la justicia sino que la satisface plenamente',
                'Capacidad habilitante (gracia) para hacer bien lo que de otro modo sería imposible',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'No soy nadie para explorar el misterio de Getsemaní. Pero sé esto: cualquier sufrimiento que estés experimentando, Cristo lo sufrió primero — para poder estar contigo en él. No como observador, sino como alguien que lo ha vivido desde adentro. La Expiación no es solo teología — es compañía en el dolor.',
              name: 'Jeffrey R. Holland',
              role: '"None Were With Him", Conferencia General, abril 2009',
            },
            {
              type: 'reflection',
              prompt: '¿Has experimentado la Expiación en dimensiones más allá del perdón de pecados — como sanación de dolor, fortaleza ante adversidad, o sentido de no estar solo en el sufrimiento? ¿Cómo has visto a Cristo como el eje central del plan en tu propia vida?',
            },
          ],
        },
      ],
    },

    // ─────────────────────────────────────────────────────────────────────────
    // SECCIÓN VI — Los Destinos Eternos: DyC 76
    // ─────────────────────────────────────────────────────────────────────────
    {
      id: 's6',
      title: 'Los Destinos Eternos — DyC 76',
      intro: {
        romanNumeral: 'VI',
        title: 'Los Destinos Eternos — DyC 76',
        paragraphs: [
          'El plan de salvación tiene un destino. Toda la arquitectura de la premortalidad, la mortalidad, el mundo de los espíritus, la resurrección y el juicio conduce a una asignación eterna. DyC 76 — la "gran visión" recibida por Joseph Smith y Sidney Rigdon el 16 de febrero de 1832 — es la revelación más detallada sobre los reinos de gloria que existe en ninguna tradición religiosa.',
          'Cuando Joseph y Sidney la recibieron, los que la escucharon quedaron conmocionados. Brigham Young confesó: "Me costó años aceptarla. Fui criado en la vieja escuela — cielo o infierno, y nada más." DyC 76 destroza esa simplificación.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'Los Tres Reinos de Gloria',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hay cuerpos celestiales, y cuerpos terrestres, y cuerpos telestiales; mas la gloria del celestial es una, y la del terrestre es otra, y la del telestial es otra. El sol difiere en gloria de la luna, y la luna difiere en gloria del sol; y una estrella difiere de otra en gloria. Así también es la resurrección de los muertos.',
              reference: '1 Corintios 15:40–42 (citado en DyC 76:96–98)',
            },
            {
              type: 'paragraph',
              text: 'Pablo utilizó la analogía de los cuerpos celestes — sol, luna, estrellas — para describir diferencias en la resurrección. Joseph Smith recibió la revelación de que Pablo estaba describiendo tres reinos distintos de gloria. El sol = celestial. La luna = terrestre. Las estrellas = telestial. Y cada uno tiene su propia gloria real, su propio nivel de felicidad, y sus propias condiciones.',
            },
            {
              type: 'doctrine_box',
              title: 'El Reino Celestial — La presencia de Dios',
              body: 'DyC 76:50–70 describe el reino celestial. Sus herederos: los que testificaron de Cristo, guardaron los mandamientos, fueron fieles hasta el fin, recibieron las ordenanzas del Evangelio. Dentro del reino celestial, hay tres grados: el grado más alto es la exaltación — donde los cónyuges que se casaron por tiempo y eternidad en el templo, y fueron fieles, vivirán con Dios el Padre y Jesucristo para siempre, tendrán posteridad eterna, y continuarán progresando hacia la divinidad. Este es el estado de plenitud de gozo.',
            },
            {
              type: 'doctrine_box',
              title: 'El Reino Terrestre — La presencia de Cristo sin la del Padre',
              body: 'DyC 76:71–80 describe el reino terrestre. Sus herederos: personas honorables que rechazaron el Evangelio en vida pero lo aceptaron en el mundo de los espíritus; miembros que no fueron valientes en su testimonio; personas que murieron "sin ley" en circunstancias atenuantes. Recibirán la presencia de Cristo pero no la plenitud de la gloria del Padre. Esta es todavía una gloria incomprensiblemente gloriosa comparada con cualquier paraíso mortal — pero no es la plenitud.',
            },
            {
              type: 'doctrine_box',
              title: 'El Reino Telestial — La presencia del Espíritu Santo',
              body: 'DyC 76:81–112 describe el reino telestial. Sus herederos: los que rechazaron el Evangelio, vivieron en maldad, no aceptaron la expiación. Sufrirán con el diablo en el mundo de los espíritus hasta la última resurrección (DyC 76:106), luego recibirán su gloria. Aun esta gloria, el Señor dice, "sobrepasa toda comprensión" (DyC 76:89). No es el infierno eterno de la teología tradicional — es una gloria real, solo que la menor de los tres reinos.',
            },
            {
              type: 'key_points',
              title: 'Principios que determinan el destino eterno',
              points: [
                'Las ordenanzas del Evangelio (bautismo, don del Espíritu Santo, endowment, sellamiento)',
                'La disposición del corazón hacia Dios y Cristo — no solo el comportamiento exterior',
                'El nivel de luz y conocimiento que la persona recibió y con qué fidelidad lo vivió',
                'El arrepentimiento y el uso de la Expiación a lo largo de la mortalidad',
                'La aceptación o rechazo del Evangelio, ya sea en vida o en el mundo de los espíritus',
              ],
            },
          ],
        },
        {
          id: 't6-2',
          title: 'Las Tinieblas de Afuera y el Significado del Juicio',
          blocks: [
            {
              type: 'paragraph',
              text: 'Además de los tres reinos, existe un estado llamado "tinieblas de afuera" — reservado para los hijos de perdición. DyC 76:31–38 lo describe: son los que conocieron el poder de Dios, recibieron un testimonio perfecto de Cristo por el poder del Espíritu Santo, y aun así lo negaron voluntariamente. No es para los que dudaron o pecaron — es para los que traicionaron un conocimiento perfecto. Esta categoría es extremadamente excepcional.',
            },
            {
              type: 'highlight_verse',
              text: 'Y la única gente que no redimirá el Señor en el tiempo apropiado, después de que haya sufrido la ira de Dios, son los hijos de perdición… quienes niegan al Hijo después de que el Padre los haya testificado. Por tanto, es imposible que sean renovados al arrepentimiento; pues han crucificado para sí mismos al Hijo de Dios de nuevo.',
              reference: 'DyC 76:38–35 (paráfrasis)',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Visión tradicional: Cielo e Infierno',
                items: [
                  'Dos destinos únicos — cielo o infierno',
                  'El infierno es eterno y sin misericordia posible',
                  'La distinción es: ¿creyste o no?',
                  'No hay distinción entre niveles de gloria',
                  'El destino se decide en el momento de la muerte física',
                ],
              },
              right: {
                title: 'Visión restaurada: Tres reinos + tinieblas',
                items: [
                  'Tres reinos de gloria + tinieblas de afuera',
                  'Hasta el reino telestial tiene gloria real',
                  'La distinción incluye disposición, convenios, luz recibida',
                  'El juicio es perfectamente calibrado al individuo',
                  'Oportunidades continúan en el mundo de los espíritus',
                ],
              },
            },
            {
              type: 'quiz',
              id: 'q-telestial-gloria',
              question: {
                kind: 'true_false',
                statement: 'Las personas en el reino telestial no reciben ninguna gloria.',
                correctAnswer: false,
                explanation: 'Incorrecto. DyC 76:89 enseña que la gloria del reino telestial "sobrepasa toda comprensión." Aun el menor de los reinos de gloria es una gloria real — no es el infierno eterno de la teología tradicional. Solo las tinieblas de afuera (para los hijos de perdición) es el estado sin gloria.',
              },
            },
            {
              type: 'quiz',
              id: 'q-celestial-grados',
              question: {
                kind: 'fill_blank',
                prompt: 'Dentro del reino celestial, el grado más alto — la exaltación — está reservado para los que recibieron el ___ por tiempo y eternidad.',
                options: [
                  'bautismo',
                  'don del Espíritu Santo',
                  'sellamiento matrimonial en el templo',
                  'sacerdocio de Melquisedec',
                ],
                correctIndex: 2,
                explanation: 'DyC 131:1–4 enseña que el grado celestial más alto requiere el sellamiento matrimonial eterno en el templo. Sin esa ordenanza, los que entren al reino celestial vivirán "separados y solos" como ángeles ministros, sin la plenitud de la exaltación.',
              },
            },
            {
              type: 'leader_quote',
              quote: 'El Señor no nos juzgará por nuestros puntos más bajos ni por nuestros momentos de debilidad momentánea. Nos juzgará por nuestros convenios, por el uso que hicimos de la Expiación, y por la disposición de nuestro corazón. La pregunta del juicio final no es "¿fuiste perfecto?" sino "¿quisiste al Señor con todo tu corazón, y usaste el don que Él te dio?"',
              name: 'Dallin H. Oaks',
              role: '"The Challenge to Become", Conferencia General, octubre 2000',
            },
            {
              type: 'reflection',
              prompt: '¿Qué impacto tiene para ti saber que el juicio de Dios es perfectamente calibrado a cada individuo — incluyendo lo que sabías, las oportunidades que tuviste, y la disposición de tu corazón? ¿Ves el juicio como algo que temer o como la promesa de justicia perfecta? ¿Qué parte del plan de salvación, después de este estudio, quieres entender más profundamente?',
            },
          ],
        },
      ],
    },
  ],
}
