import type { Lesson } from '@/types/doctrine'

export const laResurreccionYLosReinos: Lesson = {
  id: 'resurreccion-tres-reinos',
  moduleId: 'doctrina-fundamental',
  title: 'La Resurrección y los Tres Reinos de Gloria',
  subtitle: 'Lo que Dios reveló sobre la eternidad',
  author: 'Fuentes principales: DyC 76 y 1 Corintios 15',
  description:
    'La resurrección universal revelada en 1 Corintios 15 y los tres destinos de gloria revelados en DyC 76 — la visión más expansiva sobre la vida eterna dada a José Smith.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 80,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'arrepentimiento',
  nextLessonId: null,
  studySections: [
    // ─── SECCIÓN I ───────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'La Resurrección',
      intro: {
        romanNumeral: 'I',
        title: 'La Resurrección — El Hecho Central del Evangelio',
        paragraphs: [
          'Sin la resurrección, toda la doctrina cristiana se derrumba. Pablo lo dijo sin rodeos: si Cristo no resucitó, vuestra fe es vana. La resurrección no es metáfora ni símbolo — es un hecho literal que cambia la naturaleza de la existencia humana para siempre.',
          'Entender qué es realmente la resurrección y cómo se relaciona con la exaltación es el primer paso para comprender el plan eterno de Dios.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Promesa Universal: Todos Resucitarán',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque así como en Adán todos mueren, también en Cristo todos serán vivificados. Pero cada uno en su debido orden: Cristo, las primicias; luego los que son de Cristo, en su venida.',
              reference: '1 Corintios 15:22–23',
            },
            {
              type: 'paragraph',
              text: 'Pablo está respondiendo una pregunta que dividía a los creyentes corintios: ¿hay resurrección de los muertos? Algunos en la iglesia primitiva lo negaban. Su respuesta es tajante: Cristo resucitó — eso es un hecho. Y porque Él resucitó, todos resucitarán. No es opcional. No depende de méritos. Es el don universal de la expiación.',
            },
            {
              type: 'highlight_verse',
              text: 'Y si Cristo no resucitó, vuestra fe es vana; aún estáis en vuestros pecados. Entonces también los que durmieron en Cristo perecieron. Si en esta vida solamente esperamos en Cristo, somos los más dignos de lástima de todos los hombres.',
              reference: '1 Corintios 15:17–19',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué es exactamente la resurrección?',
              body: 'La resurrección es la reunión permanente e indisoluble del espíritu con un cuerpo de carne y huesos glorificado. No es una experiencia temporal. No se puede revertir. El Salvador describió su propio cuerpo resurrecto: "Palpad y ved, porque un espíritu no tiene carne ni huesos, como veis que yo tengo" (Lucas 24:39). José Smith añadió que el Padre también tiene "un cuerpo de carne y huesos tan tangible como el del hombre" (DyC 130:22).',
            },
            {
              type: 'paragraph',
              text: 'Distinción crucial que muchos confunden: resurrección e inmortalidad son lo mismo — la unión permanente del cuerpo y el espíritu. Exaltación es diferente — vivir en la presencia de Dios con la plenitud de sus bendiciones eternas. Todos los seres humanos recibirán la primera (resurrección). No todos recibirán la segunda (exaltación). Esta distinción es la base de la doctrina de los tres reinos.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El Cuerpo Resurrecto: Diferentes Glorias',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hay también cuerpos celestiales y cuerpos terrenales; pero una es la gloria de los celestiales, y otra la de los terrenales. Una es la gloria del sol, otra la gloria de la luna, y otra la gloria de las estrellas; porque una estrella difiere de otra en gloria. Así también es la resurrección de los muertos.',
              reference: '1 Corintios 15:40–42',
            },
            {
              type: 'paragraph',
              text: 'Pablo no está describiendo astronomía — está describiendo destinos eternos. Usando la analogía del sol, la luna y las estrellas, Pablo enseña que la gloria que cada persona recibe en la resurrección corresponde a la ley que vivió en mortalidad. Dios no trata a todos igual porque no todos eligieron igual.',
            },
            {
              type: 'highlight_verse',
              text: 'Ahora bien, este es el decreto que hice tocante a ellos: el que permaneciere en pecado y estuviere completamente arrepentido, recibirá su galardón en el mundo venidero según la ley que haya vivido; porque toda ley tiene su premio o su castigo relacionados con ella.',
              reference: 'Doctrina y Convenios 88:38–39',
            },
            {
              type: 'highlight_verse',
              text: 'El alma será restaurada al cuerpo, y el cuerpo del alma; sí, y todo miembro y todo artículo será restaurado a su cuerpo propio; sí, ni un cabello de la cabeza se perderá; sino que todas las cosas serán restauradas a su forma y junta perfecta.',
              reference: 'Alma 11:43',
            },
            {
              type: 'key_points',
              title: 'Características del cuerpo resurrecto',
              points: [
                'Incorruptible: ya no envejece, enferma, ni muere',
                'Glorioso: lleno de luz en proporción a la gloria del reino al que pertenece',
                'Perfecto: sin defecto, ni deformidad — restaurado a su forma perfecta',
                'Poderoso: capaz de actividades que el cuerpo mortal no puede realizar',
                'Reconocible: los seres amados se reconocerán entre sí',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La resurrección es el don supremo de la expiación de Cristo. Cada persona que ha nacido en esta tierra resucitará. Esto incluye a los justos y los injustos, a los grandes y los pequeños, a los que vivieron hace milenios y a los que viven hoy. Nadie queda excluido. Esta es la promesa más democrática de toda la escritura.',
              name: 'Russell M. Nelson',
              role:'"The Resurrection of Jesus Christ", General Conference, April 2021',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN II ──────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'La Gran Visión',
      intro: {
        romanNumeral: 'II',
        title: 'La Gran Visión — DyC 76: El Cielo Revelado',
        paragraphs: [
          'El 16 de febrero de 1832, Joseph Smith y Sidney Rigdon estaban traduciendo el Nuevo Testamento en Hiram, Ohio. Al llegar a Juan 5:29 —que habla de "resurrección de vida" y "resurrección de condenación"— se detuvieron a meditar. Lo que siguió fue la revelación más extensa sobre el más allá que Dios haya dado en la historia registrada.',
          'La visión dura mientras traducen juntos y oran. La reciben en presencia de unos doce hombres que observan sus rostros cambiar, aunque no ven lo que ellos ven. El Señor abre los cielos y les muestra no uno, sino tres destinos de gloria.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Lo Que Vieron: El Centro de la Visión',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y vimos la gloria del Hijo, a la diestra del Padre, y recibimos de su plenitud; y vimos los santos ángeles y ellos que son santificados delante de su trono, adorando a Dios y al Cordero para siempre jamás. Y ahora, después de los muchos testimonios que se han dado de él, este es el testimonio, el último de todos, que damos de él: que él vive. Porque le vimos, aun a la diestra de Dios; y oímos la voz que daba testimonio de que él es el Unigénito del Padre.',
              reference: 'Doctrina y Convenios 76:20–23',
            },
            {
              type: 'paragraph',
              text: 'Antes de revelar los tres reinos, la visión establece su centro: Cristo vive. Él está a la diestra del Padre. Esto no es teología abstracta — es un testimonio ocular. Dos hombres afirman haberlo visto. La doctrina de los destinos eternos solo tiene sentido cuando el que juzga es el que también pagó el precio.',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto',
              title: '¿Por qué dos testigos? La ley bíblica en acción',
              paragraphs: [
                'Deuteronomio 19:15: "Por el dicho de uno solo no se procesará a nadie... por el dicho de dos o tres testigos se decidirá todo asunto." Esta no es casualidad — Dios opera bajo sus propias leyes. Joseph y Sidney son los dos testigos requeridos para que esta revelación sea legalmente válida bajo el orden divino.',
                '2 Corintios 13:1 repite el principio en el Nuevo Testamento. El mismo principio explica por qué Pedro y Juan encontraron el sepulcro juntos, por qué los discípulos enviaban de dos en dos, por qué Elías y Moisés aparecieron juntos en la Transfiguración.',
                'También explica por qué la visión no fue publicada de inmediato. Brigham Young recordó que cuando Joseph compartió partes de DyC 76 con la membresía en Kirtland, muchos miembros tropezaron — la doctrina era demasiado expansiva para la mentalidad cristiana tradicional. El "infinito infierno" era más familiar que tres grados de gloria.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Porque he aquí que así dice el Señor Dios: A todos aquellos que guardan mis mandamientos daré las riquezas de la eternidad. El ojo no ha visto, ni el oído escuchado, ni ha entrado en el corazón del hombre, las cosas que Dios ha preparado para los que le aman.',
              reference: 'Doctrina y Convenios 76:5–7',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN III ─────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'Los Tres Reinos de Gloria',
      intro: {
        romanNumeral: 'III',
        title: 'Los Tres Reinos de Gloria — Sol, Luna y Estrellas',
        paragraphs: [
          'La visión revela tres destinos de gloria distintos. No existe solo cielo e infierno — existe una gradación de gloria que refleja la ley que cada persona eligió vivir en mortalidad. Esta doctrina es a la vez la más justa y la más misericordiosa de toda la escritura.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Reino Celestial: La Gloria del Sol',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Ellos son los que recibieron el testimonio de Jesús y creyeron en su nombre y fueron bautizados después de la manera de su entierro, a saber, siendo sepultados en el agua en su nombre, y esto según el mandamiento que él ha dado. Que guardan los mandamientos. A quienes fue dado el Espíritu Santo por la imposición de manos por aquellos que tienen la autoridad legal para hacerlo. Y que vencieron por la fe.',
              reference: 'Doctrina y Convenios 76:51–53',
            },
            {
              type: 'paragraph',
              text: 'El reino celestial no es para los perfectos — es para los que hicieron convenios, los guardaron, y vencieron a través de la expiación de Cristo. La palabra clave es "vencieron" — no "nunca fallaron". La diferencia entre el celestial y los otros reinos no es la perfección, sino el convenio y la dirección del corazón.',
            },
            {
              type: 'highlight_verse',
              text: 'Ellos son los que vienen al monte Sión y a la ciudad del Dios vivo, la ciudad celestial Jerusalén, y a una innumerable compañía de ángeles; a la congregación general e iglesia del Primogénito, cuyos nombres están escritos en el cielo; a Dios el Juez de todos; a los espíritus de los justos hechos perfectos; a Jesús el mediador del nuevo convenio.',
              reference: 'Doctrina y Convenios 76:66–69',
            },
            {
              type: 'key_points',
              title: 'Quiénes heredan el reino celestial',
              points: [
                'Recibieron el testimonio de Jesús y creyeron en su nombre',
                'Fueron bautizados por inmersión por autoridad del sacerdocio',
                'Recibieron el don del Espíritu Santo por la imposición de manos',
                'Guardaron los mandamientos y los convenios del templo',
                'Vencieron por la fe en la expiación de Cristo',
                'Fueron fieles en el testimonio de Jesús en vida, o lo aceptaron en el mundo de los espíritus',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Los tres grados dentro del reino celestial',
              body: 'Incluso dentro del celestial hay diferencia de gloria. "En la morada de mi Padre hay muchas mansiones" (Juan 14:2). "En el reino celestial hay tres cielos o grados; y para obtener el más elevado, el hombre debe entrar en el orden del sacerdocio, es decir, en el nuevo y sempiterno convenio del matrimonio; y si no lo hace, no puede obtenerlo. Puede entrar en el otro, pero eso es el fin de su reino; no puede tener aumento" (DyC 131:1–4). El grado más alto del celestial = exaltación = godhood = familia eterna. Los otros grados del celestial son gloriosos, pero sin esa plenitud.',
            },
          ],
        },
        {
          id: 't5',
          title: 'El Reino Terrestre: La Gloria de la Luna',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, estos son los que murieron sin ley; y también los que son los espíritus de los hombres que son guardados hasta la resurrección de los muertos — que son honorables, los hombres de la tierra, quienes fueron engañados por las artimañas de los hombres. Estos son los que recibieron el evangelio de Cristo, pero no lo retuvieron.',
              reference: 'Doctrina y Convenios 76:72–74',
            },
            {
              type: 'paragraph',
              text: 'El terrestre no es un destino de fracasados morales — es el destino de personas honorables que, por diferentes razones, no hicieron o no guardaron los convenios del evangelio restaurado. Incluye a personas decentes que vivieron buenas vidas pero rechazaron la plenitud del evangelio, o que lo aceptaron pero no lo retuvieron con fidelidad.',
            },
            {
              type: 'paragraph',
              text: 'DyC 76:75 introduce un detalle revelador: fueron "engañados por las artimañas de los hombres." La palabra "artimañas" sugiere que muchos en el terrestre fueron víctimas de tradiciones religiosas incorrectas, no de maldad deliberada. Dios toma en cuenta la información disponible y la intención del corazón.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Reino Celestial',
                items: [
                  'Gloria del sol',
                  'Reciben la presencia del Padre y del Hijo',
                  'Hicieron y guardaron convenios del sacerdocio',
                  'Vencieron por la fe',
                  'Ministran ángeles celestiales',
                  'Pueden tener aumento (exaltación)',
                ],
              },
              right: {
                title: 'Reino Terrestre',
                items: [
                  'Gloria de la luna',
                  'Reciben la presencia del Hijo, no del Padre',
                  'Honorables pero no totalmente fieles a los convenios',
                  'No retuvieron el evangelio con fidelidad',
                  'Reciben ministración de los celestiales',
                  'No hay aumento — es el fin de su reino',
                ],
              },
            },
          ],
        },
        {
          id: 't6',
          title: 'El Reino Telestial: La Gloria de las Estrellas',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, y vimos la gloria del reino telestial, la cual sobrepasa a todo entendimiento; y ningún hombre conoce esto salvo aquel a quien Dios lo ha revelado. Y así vimos en la visión celestial, la gloria de los moradores del reino telestial, quienes son innumerables como las estrellas en el firmamento del cielo, o como la arena de la orilla del mar.',
              reference: 'Doctrina y Convenios 76:89–90',
            },
            {
              type: 'paragraph',
              text: 'El telestial es el reino más bajo de los tres — y aun así su gloria "sobrepasa a todo entendimiento." Incluso el destino más bajo en el plan de Dios es incomparablemente mayor que lo que la mente mortal puede concebir. Esta perspectiva debe transformar nuestra comprensión de la misericordia divina.',
            },
            {
              type: 'highlight_verse',
              text: 'Estos son los que no recibieron el evangelio de Cristo, ni el testimonio de Jesús. Estos son los que niegan el Espíritu Santo. Estos son los que no son cogidos hasta que el Señor haya concluido su obra, hasta que haya pisado el lagar de la furiosa ira del Todopoderoso.',
              reference: 'Doctrina y Convenios 76:82, 84–85',
            },
            {
              type: 'paragraph',
              text: 'Los moradores del telestial al final también reciben del Espíritu Santo — pero no de la presencia del Hijo ni del Padre (DyC 76:86). Pasan por el sufrimiento de sus propias transgresiones antes de la resurrección telestial, al final del milenio, y luego son administrados por el Espíritu Santo a través de ángeles.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Celestial + Terrestre',
                items: [
                  'Resucitan en la primera resurrección',
                  'Reciben la presencia de Cristo (celestial: también del Padre)',
                  'Viven bajo una ley de gloria superior',
                  'El evangelio fue parte de su vida',
                ],
              },
              right: {
                title: 'Telestial',
                items: [
                  'Resucitan en la resurrección de los injustos (fin del milenio)',
                  'Solo reciben del Espíritu Santo; no ven al Padre ni al Hijo',
                  'Pagan por sus propias transgresiones antes de resucitar',
                  'Rechazaron o ignoraron el evangelio activamente',
                ],
              },
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN IV ──────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Las Tinieblas de Afuera',
      intro: {
        romanNumeral: 'IV',
        title: 'Las Tinieblas de Afuera — El Único Destino Sin Gloria',
        paragraphs: [
          'Los tres reinos son los destinos de la inmensa mayoría de la humanidad. Pero la visión de DyC 76 también describe un cuarto destino — uno que no tiene gloria alguna: las tinieblas de afuera. Comprenderlo correctamente evita tanto el terror injustificado como la ignorancia peligrosa.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Los Hijos de Perdición',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Así vimos los sufrimientos de aquellos con quienes el diablo luchó, pues son los hijos de la perdición, de quienes hablo, que negar al Hijo después de que el Padre lo haya revelado. Por lo cual no les es posible ser redimidos del diablo; ellos son los únicos sobre quienes la segunda muerte tiene algún poder; sí, en verdad, los únicos que no serán redimidos en el tiempo debido del Señor.',
              reference: 'Doctrina y Convenios 76:32–33, 37–38',
            },
            {
              type: 'doctrine_box',
              title: '¿Quiénes son exactamente?',
              body: 'Los hijos de perdición son los que: (1) tuvieron pleno conocimiento de la divinidad de Cristo — no fe, sino conocimiento certero, como el que se adquiere solo por revelación directa del Padre; y (2) deliberada y conscientemente negaron ese conocimiento, rebelándose contra la verdad que sabían. No son personas que fallaron moralmente, se apartaron de la Iglesia, o dudaron. Son aquellos que, habiendo visto y sabido con certeza absoluta, deliberadamente escogieron el mal y lucharon contra Dios. Esto es tan raro que casi ningún mortal califica.',
            },
            {
              type: 'paragraph',
              text: 'La condición de hijo de perdición requiere un nivel de conocimiento que prácticamente ningún mortal alcanza. Como explicó José Smith: "Un hombre debe tener el cielo abierto y conocer a Dios y entonces pecar contra él. Después de una persona haya llegado a saber los poderes de la mundanidad venidera, probado el don celestial, y sido hecho partícipe del Espíritu Santo y haber dado toda esa luz y luego haber pecado contra ella — no hay perdón." El umbral es extraordinariamente alto.',
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Por qué casi nadie llega a ser hijo de perdición',
              paragraphs: [
                'Bruce R. McConkie escribió: "La ley que rige la condena de los hijos de perdición es que deben tener un conocimiento perfecto de la divinidad de Cristo — no fe, sino conocimiento certero." La diferencia es crucial: la fe opera en el reino de la incertidumbre. El conocimiento aquí se refiere a la revelación directa, abierta, inconfundible del Padre.',
                'Spencer W. Kimball enseñó que en mortalidad son muy pocos los que alcanzan este nivel de conocimiento, y aún menos los que deliberadamente lo rechazan. La gran mayoría de las personas que se alejan del evangelio, que cometen pecados graves, o incluso que niegan públicamente la existencia de Dios, no han tenido ese tipo de conocimiento revelado.',
                'Esto significa que si alguna vez te has preguntado "¿podría yo convertirme en hijo de perdición?", la respuesta casi con certeza es: no. La preocupación misma es evidencia de que no tienes ese tipo de conocimiento que lo hace posible.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Los hijos de perdición son los únicos que al final no serán salvados en ningún reino de gloria. Pero este es un grupo tan pequeño y que requiere condiciones tan excepcionales que debería quitarnos el miedo, no añadírselo. El plan de Dios está diseñado para salvar a todos los que tengan el más mínimo deseo de ser salvados.',
              name: 'Spencer W. Kimball',
              role:'"The Miracle of Forgiveness", Bookcraft, 1969, cap. 12 (trad.)',
            },
          ],
        },
      ],
    },

    // ─── SECCIÓN V ───────────────────────────────────────────────────────────
    {
      id: 's5',
      title: '¿Y Ahora Qué?',
      intro: {
        romanNumeral: 'V',
        title: '¿Y Ahora Qué? — Implicaciones Eternas para el Presente',
        paragraphs: [
          'La visión de DyC 76 no fue dada para satisfacer la curiosidad teológica. Fue dada para transformar cómo vivimos ahora. Cada decisión de convenio, cada acto de servicio, cada momento de adoración tiene peso eterno a la luz de lo que el Señor reveló.',
        ],
      },
      topics: [
        {
          id: 't8',
          title: 'Esta Doctrina Lo Cambia Todo',
          blocks: [
            {
              type: 'paragraph',
              text: 'La doctrina de los tres reinos transformó radicalmente el panorama religioso de su época. El mundo cristiano de 1832 conocía solo dos opciones: cielo o infierno. La revelación a Joseph Smith dice: Dios es demasiado justo y demasiado misericordioso para operar en un sistema binario. Cada persona es juzgada según la luz que tuvo y la ley que eligió vivir.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque he aquí que así dice el Señor Dios: a todos aquellos que guardan mis mandamientos daré las riquezas de la eternidad... El ojo no ha visto, ni el oído escuchado, ni ha entrado en el corazón del hombre las cosas que Dios ha preparado para los que le aman.',
              reference: 'Doctrina y Convenios 76:5–6',
            },
            {
              type: 'key_points',
              title: 'Tres implicaciones para hoy',
              points: [
                'El evangelio es perfectamente justo: cada persona recibe exactamente lo que eligió y lo que su corazón buscó',
                'Las ordenanzas importan eternamente: no son rituales vacíos — son los convenios que determinan el reino al que pertenecemos',
                'Nadie está perdido sin remedio: incluso el telestial es incomprensiblemente glorioso; Dios hará todo lo posible para llevar a cada persona a su máximo potencial',
              ],
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Fe',
                  text: 'Creer en Cristo y en su evangelio restaurado',
                  ref: 'Hebreos 11:1; Alma 32:21',
                  color: 'gold',
                },
                {
                  label: 'Arrepentimiento',
                  text: 'Cambio de corazón y dirección — no penitencia sino transformación',
                  ref: 'DyC 19:16–17; Alma 42:29',
                  color: 'blue',
                },
                {
                  label: 'Ordenanzas',
                  text: 'Bautismo, confirmación, sacerdocio, endowment, sellamiento',
                  ref: 'DyC 76:51–53; DyC 131:1–4',
                  color: 'gold',
                },
                {
                  label: 'Fidelidad',
                  text: 'Guardar los convenios hasta el fin — vencer por la fe',
                  ref: 'DyC 76:53; 3 Nefi 27:16',
                  color: 'blue',
                },
                {
                  label: 'Exaltación',
                  text: 'Vivir en la presencia del Padre y del Hijo — familia sellada eternamente',
                  ref: 'DyC 76:92–95; DyC 132:19–20',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Cuando la visión fue dada, José Smith escribió en su diario que los que la escucharon la recibieron con asombro. Algunos tropezaron. Pero con el tiempo, la amplitud de la misericordia de Dios que revela — el hecho de que casi todos los seres humanos recibirán algún grado de gloria — debería hacernos caer de rodillas con gratitud. ¿Cuántos de los nuestros están en las manos de un Dios así?',
              name: 'Jeffrey R. Holland',
              role:'"The Vision of Glories" — discurso en BYU, 12 enero 2016 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia la doctrina de los tres reinos tu comprensión de la justicia y la misericordia de Dios? ¿Cómo te consuela saber que Dios tiene un lugar de gloria incluso para los que no recibieron el evangelio en vida? ¿Qué significa para ti guardar los convenios a la luz de lo que DyC 76 revela sobre el reino celestial?',
            },
          ],
        },
      ],
    },
  ],
}
