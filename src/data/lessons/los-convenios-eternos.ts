import type { Lesson } from '@/types/doctrine'

export const losConveniosEternos: Lesson = {
  id: 'convenios-eternos',
  moduleId: 'doctrina-avanzada-carne',
  title: 'Los Convenios Eternos',
  subtitle: 'Los lazos que nos atan a Cristo',
  author: 'Fuentes principales: DyC 82, 84, 132; Génesis 12, 17; Jeremías 31; Mosiah 18; Oseas 2',
  description:
    'Los convenios no son contratos religiosos — son lazos de amor entre Dios y Sus hijos. Qué es un convenio, la historia de los grandes convenios en las Escrituras, la escalera de convenios del evangelio restaurado, por qué los convenios rotos importan tanto, cómo se renuevan, y por qué vivir en el convenio es la identidad más profunda de un Santo.',
  level: 'AVANZADO',
  icon: '🔗',
  duration: 80,
  order: 6,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'justicia-y-misericordia',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: '¿Qué es un Convenio? — La Distinción Fundamental',
      intro: {
        romanNumeral: 'I',
        title: '¿Qué es un Convenio? — La Distinción Fundamental',
        paragraphs: [
          'La palabra "convenio" aparece cientos de veces en las Escrituras, pero rara vez se define con precisión. Muchos santos la usan como sinónimo de "promesa" o "regla." Es mucho más que eso. Un convenio es un lazo sagrado entre Dios y un ser humano — un compromiso bilateral que, cuando ambas partes lo cumplen, produce bendiciones que ningún esfuerzo individual puede obtener por sí solo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Naturaleza del Convenio Divino — Más que un Contrato',
          subtitle:
            'Entender la diferencia entre un contrato humano y un convenio divino cambia completamente la forma en que se experimenta el evangelio.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando obtenemos cualquier bendición de Dios, es en obediencia a esa ley sobre la cual está basada. Estoy obligado cuando vosotros hacéis lo que yo digo; mas cuando no hacéis lo que yo digo, no tenéis ninguna promesa.',
              reference: 'Doctrina y Convenios 82:10',
            },
            {
              type: 'paragraph',
              text: 'DyC 82:10 establece el principio universal: las bendiciones están atadas a leyes, y las leyes se activan a través de los convenios. No es que Dios sea mecánico o burocrático — es que el universo opera bajo principios que ni siquiera Dios viola, porque Él mismo los instituyó. Los convenios son el mecanismo por el cual las leyes celestiales se conectan con la vida mortal y producen bendiciones eternas.',
              blockId: 'ce-s1-p-0',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Un contrato humano',
                items: [
                  'Acuerdo entre partes aproximadamente iguales',
                  'Condiciones negociadas por ambas partes',
                  'Las consecuencias del incumplimiento son legales o financieras',
                  'Se cancela cuando una parte incumple',
                  'El objetivo es proteger los intereses de ambas partes',
                ],
              },
              right: {
                title: 'Un convenio divino',
                items: [
                  'Acuerdo entre partes radicalmente desiguales: Dios y un mortal',
                  'Las condiciones las establece completamente Dios — Son Sus términos',
                  'El incumplimiento produce pérdida de acceso a las bendiciones prometidas',
                  'Puede ser renovado a través del arrepentimiento — Dios nunca abandona',
                  'El objetivo es elevar al mortal a la condición del Padre',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Por qué Dios hace convenios en lugar de simplemente dar bendiciones',
              body: 'Un padre sabio no simplemente da regalos a sus hijos sin condiciones — los involucra activamente en el proceso de su propio desarrollo. Dios hace convenios porque las bendiciones que quiere dar requieren que Sus hijos desarrollen el carácter capaz de recibirlas y sostenerlas. La obediencia que se requiere en los convenios no es arbitraria — es la misma obediencia que produce el carácter divino. Los convenios no son el precio de las bendiciones; son el proceso de convertirse en alguien capaz de tenerlas eternamente.',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, yo soy el Señor vuestro Dios, y os daré a vosotros esta tierra, y os haré conocer mi ley, y yo seré vuestro Dios, y vosotros seréis mi pueblo.',
              reference: 'Doctrina y Convenios 42:9',
            },
            {
              type: 'leader_quote',
              quote: 'Un convenio con Dios no es un contrato de seguro. Es una relación. Es la declaración de que tú y Dios están comprometidos el uno con el otro — que Él promete darte todo lo que tiene, y tú prometes darte completamente a Él. No existe ninguna relación más íntima ni más elevada que puedas tener en esta vida o en la eternidad.',
              name: 'Élder David A. Bednar',
              role: '"Exceeding Great and Precious Promises", Conferencia General, octubre 2017 · Liahona, noviembre 2017 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Historia de los Convenios — De Noé a Cristo',
      intro: {
        romanNumeral: 'II',
        title: 'La Historia de los Convenios — De Noé a Cristo',
        paragraphs: [
          'Los convenios de Dios con la humanidad no comenzaron con la Restauración. Tienen una historia que se extiende desde Adán hasta nuestros días — una historia de promesas hechas, de convenios rotos, y de un Dios que consistentemente busca a Sus hijos para restaurar el lazo. Entender esa historia ilumina por qué los convenios del evangelio restaurado son el cumplimiento de todo lo que vino antes.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Los Grandes Convenios de la Historia Sagrada',
          subtitle:
            'Desde Noé hasta Cristo, cada convenio reveló un aspecto nuevo de la relación entre Dios y la humanidad.',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'El Convenio de Adán',
                  text: 'El primero: Dios presenta el evangelio a Adán y Eva tras la Caída — sacrificio, arrepentimiento y bautismo como el camino de regreso a Su presencia. La base de todos los convenios posteriores.',
                  ref: 'Moisés 5:5-9; 6:50-68',
                  color: 'gold',
                },
                {
                  label: 'El Convenio de Noé',
                  text: 'Después del diluvio, Dios promete no destruir la tierra con agua. La señal del arco iris. El primer convenio universal — entre Dios y toda la humanidad y toda criatura viviente.',
                  ref: 'Génesis 9:8-17',
                  color: 'blue',
                },
                {
                  label: 'El Convenio Abrahámico (~2000 a.C.)',
                  text: 'El más importante de los convenios del Antiguo Testamento. A Abraham, Dios promete: (1) posteridad innumerable, (2) tierra como heredad, (3) sacerdocio eterno, (4) que en él serán bendecidas "todas las familias de la tierra." Pablo llama a este convenio el "evangelio" (Gálatas 3:8).',
                  ref: 'Génesis 12:1-3; 17:1-7; Abraham 2:9-11',
                  color: 'gold',
                },
                {
                  label: 'El Convenio Mosaico (~1440 a.C.)',
                  text: 'La ley de Moisés — convenio entre Dios e Israel como nación. Un sistema de ordenanzas temporales diseñado para "apuntar hacia Cristo" (2 Nefi 25:25). No era la plenitud — era el preparatorio, como un tutor hasta que llegara Cristo.',
                  ref: 'Éxodo 19:5-6; Gálatas 3:24',
                  color: 'blue',
                },
                {
                  label: 'El Nuevo y Sempiterno Convenio — Cristo',
                  text: 'Jeremías profetizó un "nuevo convenio" que no sería escrito en tablas de piedra sino en el corazón. Cristo lo instituyó. No abolió los anteriores — los cumplió y los elevó. El bautismo, la Santa Cena, el sacerdocio y el sellamiento son sus ordenanzas.',
                  ref: 'Jeremías 31:31-33; DyC 22:1; Mateo 26:27-28',
                  color: 'gold',
                },
                {
                  label: 'La Restauración (1830–hoy)',
                  text: 'El ángel Moroni citó Malaquías 3-4 a José Smith en 1823. La Restauración no es un nuevo convenio — es la plenitud del convenio abrahámico, restaurado con toda su autoridad, ordenanzas y poder de sellamiento. "Los tiempos de la restauración de todas las cosas" (Hechos 3:21).',
                  ref: 'DyC 110; DyC 128:18; Abraham 2:11',
                  color: 'blue',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, vienen días, dice Jehová, en los cuales haré un nuevo pacto con la casa de Israel y con la casa de Judá. No como el pacto que hice con sus padres el día que tomé su mano para sacarlos de la tierra de Egipto. Sino que este es el pacto que haré con la casa de Israel después de aquellos días, dice Jehová: Daré mi ley en su mente, y la escribiré en su corazón; y yo seré a ellos por Dios, y ellos me serán por pueblo.',
              reference: 'Jeremías 31:31–33 · Biblia (RVR)',
            },
            {
              type: 'deep_dive',
              badge: 'Contexto',
              title: 'El Convenio Abrahámico — Por qué Pablo lo llama "el evangelio"',
              paragraphs: [
                'En Gálatas 3:8, Pablo escribe algo que parece paradójico al principio: "Y la escritura, previendo que Dios había de justificar por la fe a los gentiles, dio de antemano la buena nueva a Abraham, diciendo: En ti serán benditas todas las naciones." Pablo llama al convenio de Abraham "la buena nueva" — el evangelio.',
                'La razón es que las promesas del convenio abrahámico son precisamente las promesas del evangelio restaurado: (1) Un Redentor — que Cristo vendría a través de la línea de Abraham. (2) El sacerdocio eterno — que la autoridad para administrar las ordenanzas de salvación sería restaurada. (3) Bendición universal — que todas las familias de la tierra tendrían acceso a las bendiciones del evangelio, incluyendo las ordenanzas vicarias del templo por los muertos.',
                'Abraham 2:10-11 añade la dimensión misionera: "Y yo te bendeciré a ti... y en tu simiente... serán bendecidas todas las familias de la tierra con las bendiciones del evangelio, que son las bendiciones de la salvación, es decir, la vida eterna." Los miembros de la Iglesia que tienen el evangelio son literalmente la "simiente de Abraham" que tiene la responsabilidad de llevar esas bendiciones al mundo.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El convenio que Dios hizo con Abraham es el mismo convenio que tenemos hoy. Somos literalmente la simiente de Abraham — sus herederos espirituales y frecuentemente también sus herederos de sangre. Nuestro llamamiento misional, nuestra responsabilidad de hacer trabajo de templo por los muertos, nuestra obligación de construir familias eternas — todo está contenido en las palabras que Dios le dijo a Abraham hace cuatro mil años.',
              name: 'Élder Russell M. Nelson',
              role: '"The Covenant of Abraham", Ensign, febrero 1999 (trad.) · BYU Devotional, 1998',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Escalera de los Convenios del Evangelio',
      intro: {
        romanNumeral: 'III',
        title: 'La Escalera de los Convenios del Evangelio',
        paragraphs: [
          'El evangelio restaurado es un sistema de convenios progresivos. Cada ordenanza introduce un convenio diferente, cada uno más profundo que el anterior. Juntos forman lo que las escrituras llaman el "nuevo y sempiterno convenio" — la alianza que Dios ofrece a Sus hijos para unirlos a Él eternamente y habilitarlos para la exaltación.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Los Convenios desde el Bautismo hasta el Sellamiento',
          subtitle:
            'Cada ordenanza es una puerta — y cada puerta lleva a un nivel más profundo de compromiso y de poder divino.',
          blocks: [
            {
              type: 'steps',
              steps: [
                'BAUTISMO — El convenio de entrada. Alma describe sus términos en Mosiah 18:8-10: llevar las cargas de los demás, consolar a los que necesitan consuelo, dar testimonio de Dios "en todo tiempo, lugar y circunstancia." A cambio, Dios promete derramar Su Espíritu más abundantemente y la vida eterna. Es el primer acto de identidad: ya no eres solo tú — eres de Cristo.',
                'SANTA CENA — El convenio de renovación semanal. No se trata de renovar el bautismo en sí, sino de renovar la disposición del corazón que hizo posible el bautismo: acordarse del Salvador, guardar Sus mandamientos, estar siempre dispuesto a tomar Su nombre. La promesa de Dios es constante: "siempre tendréis su Espíritu con vosotros" (DyC 20:77-79). Es el acceso semanal a la misericordia de Cristo.',
                'SACERDOCIO — El convenio del ministerio. DyC 84:33-40 describe el "juramento y convenio del sacerdocio": quien lo recibe y lo magnifica se convierte en "hijo de Moisés y de Aarón, y de la simiente de Abraham." A cambio, el Padre promete "todo lo que él tiene." Este convenio compromete no solo la conducta privada sino el servicio activo en el reino de Dios.',
                'ENDOWMENT (INVESTIDURA) — El convenio de la consagración. Convenios de obediencia completa a Dios, castidad (fidelidad a los lazos del matrimonio eterno), y consagración de tiempo, talentos y recursos al reino de Dios. A cambio, Dios dota al receptor de instrucción divina, vestidura sagrada y el conocimiento necesario para regresar a Su presencia.',
                'SELLAMIENTO — El convenio eterno del matrimonio. "Por tiempo y por toda la eternidad" (DyC 132:19). No es solo la unión de dos personas — es el establecimiento de una unidad familiar eterna con potencial de aumento ilimitado. Es el convenio que hace posible la exaltación en el sentido más pleno: llegar a ser como el Padre y la Madre Celestiales.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y todos los que reciben este sacerdocio reciben yo, dice el Señor; porque el que recibe a mis siervos, me recibe a mí; y el que me recibe, recibe a mi Padre; y el que recibe a mi Padre, recibe el reino de mi Padre; por tanto, todas las cosas que mi Padre tiene se le darán a él.',
              reference: 'Doctrina y Convenios 84:35–38',
            },
            {
              type: 'doctrine_box',
              title: 'Los convenios y la identidad — "Pueblo del convenio"',
              body: 'El presidente Nelson enseñó que entender nuestra identidad como "pueblo del convenio" cambia fundamentalmente cómo enfrentamos las tentaciones del mundo. No es una identidad religiosa superficial — es la descripción de quiénes somos realmente: hijos e hijas del Padre Celestial que han establecido lazos formales y eternos con Él. Cuando somos tentados, la pregunta correcta no es "¿puedo salirme con la mía?" sino "¿es esto consistente con quién soy?" Los convenios definen la identidad antes de definir la conducta.',
            },
            {
              type: 'highlight_verse',
              text: 'Y por consiguiente, si guardáis mis mandamientos y permanecéis firmes en mi convenio, iréis adelante eternamente; porque el camino eterno está preparado ante vosotros.',
              reference: 'Moisés 6:59',
            },
            {
              type: 'leader_quote',
              quote: 'Los convenios que hacemos con Dios nos atan a Él con lazos más fuertes que los del matrimonio humano, más fuertes que los de la sangre, más fuertes que cualquier lealtad terrenal. Cuando entendemos eso, entendemos por qué romper un convenio es algo tan serio — y por qué renovarlo a través del arrepentimiento es uno de los mayores privilegios de la mortalidad.',
              name: 'Élder David A. Bednar',
              role: '"Exceeding Great and Precious Promises", Conferencia General, octubre 2017 · Liahona, noviembre 2017 (trad.)',
            },
            {
              type: 'quiz',
              id: 'ce-q1',
              question: {
                kind: 'fill_blank',
                prompt: 'Según Mosiah 18:8-10, ¿cuál de los siguientes NO forma parte de los convenios del bautismo que Alma describe?',
                options: [
                  'Llevar las cargas de los demás',
                  'Llorar con los que lloran y consolar a los que necesitan consuelo',
                  'Guardar la ley del diezmo completo',
                  'Ser testigo de Dios en todo tiempo, lugar y circunstancia',
                ],
                correctIndex: 2,
                explanation: 'Mosiah 18:8-10 describe los convenios del bautismo como: llevar las cargas de los demás, llorar con los que lloran, consolar a los afligidos, y ser testigos de Dios en todo tiempo, lugar y circunstancia. La ley del diezmo no es mencionada en el convenio bautismal — es parte de los convenios del endowment en el templo.',
              },
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Cuando los Convenios se Rompen — y Cómo se Renuevan',
      intro: {
        romanNumeral: 'IV',
        title: 'Cuando los Convenios se Rompen — y Cómo se Renuevan',
        paragraphs: [
          'El profeta Oseas vivió la parábola más poderosa de los convenios rotos: su propio matrimonio con una mujer infiel fue diseñado por Dios para ilustrar la relación entre el Señor e Israel. Cuando Israel rompe el convenio, Dios no lo abandona. Lo busca, lo llama, lo invita a renovar el lazo. "Te desposaré conmigo para siempre." Esta es la doctrina del arrepentimiento en el lenguaje del convenio: Dios siempre está dispuesto a renovar si nosotros nos volvemos.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El Convenio Roto y el Dios que No Abandona',
          subtitle:
            'Oseas, Jeremías y la doctrina de la Santa Cena revelan que el sistema de convenios del Señor incluye mecanismos de renovación precisamente porque el Señor conoce la fragilidad de los mortales.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y yo te desposará conmigo para siempre; te desposará conmigo en justicia, juicio, benignidad y misericordia. Y te desposará conmigo en fidelidad, y conocerás a Jehová.',
              reference: 'Oseas 2:19–20 · Biblia (RVR)',
            },
            {
              type: 'paragraph',
              text: 'Oseas es el profeta del convenio roto y restaurado. Su matrimonio con Gomer — una mujer que lo dejó para seguir a otros — fue ordenado por Dios como una metáfora viva. Cuando Israel rompió el convenio yendo tras dioses falsos, Dios no declaró nulo el convenio. Lo buscó. "No me desposé con vosotros? — y lo volvería a hacer." Ese es el carácter de Dios en el contexto del convenio: persistente, paciente, y siempre dispuesto a renovar.',
              blockId: 'ce-s4-p-0',
            },
            {
              type: 'highlight_verse',
              text: 'He aquí, el que ha arrepentido de sus pecados es perdonado, y yo, el Señor, no los recuerdo más.',
              reference: 'Doctrina y Convenios 58:42',
            },
            {
              type: 'key_points',
              points: [
                '① EL BAUTISMO NO SE REPITE — pero el convenio bautismal se renueva cada semana en la Santa Cena. La Santa Cena es el mecanismo de misericordia que el Señor instituyó precisamente para la fragilidad mortal.',
                '② EL ARREPENTIMIENTO RESTAURA EL ACCESO — DyC 58:42 es explícito: "yo, el Señor, no los recuerdo más." El convenio roto puede ser restaurado. Las bendiciones que el pecado suspendió vuelven cuando el arrepentimiento es sincero.',
                '③ LAS ORDENANZAS DEL TEMPLO PUEDEN RESTAURARSE — Para quienes las perdieron por transgresión grave, el proceso de consejo con el obispo y el presidente de estaca abre el camino a la restauración. No es fácil, pero es posible.',
                '④ EL SELLAMIENTO SOBREVIVE AL PECADO — El sellamiento no se pierde automáticamente por el pecado. Sus bendiciones están condicionadas a la fidelidad, pero el lazo puede ser restaurado a través del arrepentimiento. El Señor diseñó el sistema para que el regreso siempre sea posible.',
              ],
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: 'La Santa Cena como mecanismo de renovación del convenio',
              paragraphs: [
                'Una de las doctrinas más prácticas y hermosas de la Restauración es la función de la Santa Cena como renovación del convenio. No se trata de repetir el bautismo — el bautismo fue una sola vez. Se trata de renovar la disposición del corazón que hizo posible el bautismo.',
                'El élder Oaks enseñó: "La Santa Cena es una renovación de los convenios bautismales. Cada semana nos presentamos ante el Señor con un corazón dispuesto a acordarnos de Él, a guardar Sus mandamientos, y a llevar Su nombre. Si ese es el estado de nuestro corazón, la promesa es constante: tendréis Su Espíritu con vosotros." (Conferencia General, abril 2008)',
                'Esta doctrina tiene una implicación poderosa: ningún Santo que tome la Santa Cena semanalmente con sinceridad necesita esperar meses o años para saber que ha sido perdonado. El acceso a la misericordia de Cristo se renueva cada domingo. La Santa Cena es el mecanismo de gracia más frecuente que el Señor puso a disposición de Sus hijos en la mortalidad.',
                'El élder David A. Bednar añadió: "Guardar correctamente la ordenanza de la Santa Cena es uno de los principales medios por los cuales obtenemos y siempre retenemos una remisión de nuestros pecados." ("Siempre retener una remisión de vuestros pecados", Conferencia General, abril 2016)',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Una de las verdades más hermosas del evangelio es esta: los convenios no se pierden por debilidad mortal. Pueden renovarse. El Señor diseñó un sistema en el que la caída no tiene que ser permanente, en el que el regreso siempre es posible, en el que el arrepentimiento activa nuevamente las promesas que el pecado había suspendido. Los convenios de Dios son promesas eternas — y Su paciencia para esperarnos también lo es.',
              name: 'Presidente Russell M. Nelson',
              role: '"Welcome Message", Conferencia General, abril 2018 · Liahona, mayo 2018 (trad.)',
            },
            {
              type: 'reflection',
              prompt:
                '¿Qué convenios has hecho con el Señor? ¿Cuáles de ellos estás cumpliendo con fidelidad hoy? ¿Hay alguno que sientes que has guardado superficialmente o que has roto? La Santa Cena de este domingo es una oportunidad de renovación. ¿Qué llevarás a esa mesa esta semana?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Vivir en el Convenio — Identidad, Protección y Poder',
      intro: {
        romanNumeral: 'V',
        title: 'Vivir en el Convenio — Identidad, Protección y Poder',
        paragraphs: [
          'Hacer un convenio es un momento. Vivir en el convenio es una forma de vida. El presidente Nelson ha enseñado repetidamente que la identidad más profunda de un Santo no es su profesión, su nación, ni su familia — es ser "pueblo del convenio." Entender esa identidad transforma la manera en que se toman las decisiones, se enfrentan las tentaciones y se experimenta la vida diaria.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La Identidad del Pueblo del Convenio',
          subtitle:
            'Lo que significa en la práctica diaria haber hecho convenios con Dios — y por qué esa identidad es la mayor protección disponible.',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y aquellos que guardan sus convenios con Dios Omnipotente, a aquellos él los justificará. Mas en lo que toca a los que no guardan sus convenios, he aquí, son malditos.',
              reference: 'Doctrina y Convenios 54:6',
            },
            {
              type: 'paragraph',
              text: 'El presidente Nelson enseñó en 2019: "¿Cómo nos ayudan los convenios durante los momentos difíciles? Nuestra disposición de hacer y guardar convenios con el Señor determina si tenemos acceso al poder del sacerdocio para ayudarnos. La cadena de convenios que hemos hecho con Dios nos ata a Él con lazos de amor y de poder que el adversario no puede romper, excepto si nosotros mismos los abandonamos." ("Nuestra Bendición del Sacerdocio", Conferencia General, octubre 2019)',
              blockId: 'ce-s5-p-0',
            },
            {
              type: 'key_points',
              points: [
                '① IDENTIDAD ANTES QUE CONDUCTA — Los convenios no son principalmente reglas de conducta. Son declaraciones de identidad. "Soy de Cristo" — eso es lo que dice un bautismo. "Esta familia es eterna" — eso es lo que dice un sellamiento. La conducta fluye naturalmente de la identidad.',
                '② PROTECCIÓN ESPIRITUAL ACTIVA — Helamán 5:12 enseña que quien edifica su vida sobre Cristo como roca no puede ser arrastrado por las tormentas. Los convenios son la manera formal en que alguien decide edificar sobre esa roca — y esa decisión activa una protección que no está disponible fuera del convenio.',
                '③ ACCESO AL PODER DIVINO — DyC 82:10 enseña que Dios "está obligado" cuando Sus hijos hacen lo que Él dice. No se trata de obligar a Dios mecánicamente — se trata de que los convenios activan el flujo de poder divino hacia la vida del mortal que los honra.',
                '④ COMUNIDAD ETERNA — Los convenios no son solo entre el individuo y Dios. Son el tejido que une a la comunidad de los Santos. La Iglesia no es una organización — es una red de convenios. Los miembros no son compañeros de club — son hermanos y hermanas de convenio.',
                '⑤ PERSPECTIVA ETERNA — Quien vive en el convenio ve cada decisión con ojos eternos. La pregunta no es "¿qué quiero ahora?" sino "¿qué quiero para siempre, y qué he prometido?". Esa perspectiva es la más poderosa protección contra la mediocridad espiritual.',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, ¡oh vosotros gentiles, es necesario que os arrepintáis y vengáis a Cristo, y seáis injertados en el verdadero olivo, para que seáis partícipes de la raíz y de la grosura del olivo! Y no seáis arrogantes contra los de la raíz; mas temed.',
              reference: 'Romanos 11:17–20 · Biblia (RVR) · Pablo sobre el convenio abrahámico',
            },
            {
              type: 'deep_dive',
              badge: 'Aplicación',
              title: 'Cómo el convenio cambia la forma de tomar decisiones',
              paragraphs: [
                'El presidente Nelson compartió este principio práctico: "Cuando se enfrenta a una decisión, te animo a preguntar: ¿Esta decisión me acercará al templo o me alejará del templo? Y luego haz la decisión que te acerque." Esta pregunta es más poderosa que cualquier lista de reglas porque va al origen: ¿quién quiero ser?',
                'Un miembro que vive en el convenio no necesita una lista de cosas prohibidas pegada en la pared. Su brújula interior — formada por los convenios hechos con Dios — le indica la dirección antes de que la situación se complique. La obediencia deja de ser una carga y se convierte en la expresión natural de quién es.',
                'El élder Bednar enseñó que una de las señales de que alguien está realmente viviendo en el convenio es que ya no piensa en los mandamientos como restricciones externas, sino como "expresiones de quién soy." No es "tengo que ir al templo" — es "voy al templo porque eso es lo que hace alguien como yo." Esa transformación de la motivación es el fruto del convenio vivido de adentro hacia afuera.',
              ],
            },
            {
              type: 'quiz',
              id: 'ce-q2',
              question: {
                kind: 'fill_blank',
                prompt: 'Según DyC 82:10, ¿cuándo está el Señor "obligado" a cumplir Sus promesas?',
                options: [
                  'Cuando los miembros pagan su diezmo completo',
                  'Cuando vosotros hacéis lo que Él dice — cuando guardan los convenios',
                  'Cuando la Iglesia alcanza cierto número de miembros bautizados',
                  'Cuando los Apóstoles aprueban la conducta de un miembro específico',
                ],
                correctIndex: 1,
                explanation: 'DyC 82:10 dice exactamente: "Estoy obligado cuando vosotros hacéis lo que yo digo; mas cuando no hacéis lo que yo digo, no tenéis ninguna promesa." El principio es claro: el cumplimiento de los convenios activa las promesas de Dios. No es mecánico — es la lógica del universo que Dios mismo estableció y respeta.',
              },
            },
            {
              type: 'leader_quote',
              quote: 'El día que entiendas que eres literalmente hijo o hija de Dios, con quien Él ha establecido convenios específicos y eternos — ese día cambia todo. Tus decisiones cambian. Tu perspectiva sobre las pruebas cambia. Tu relación con las demás personas cambia. Porque ya no eres solo un ser humano navegando la mortalidad. Eres pueblo del convenio — y eso tiene consecuencias eternas.',
              name: 'Presidente Russell M. Nelson',
              role: '"Nuestra Bendición del Sacerdocio", Conferencia General, octubre 2019 · Liahona, noviembre 2019 (trad.)',
            },
            {
              type: 'reflection',
              prompt:
                'El presidente Nelson dice que entender nuestra identidad como "pueblo del convenio" cambia la forma en que tomamos decisiones. Piensa en una decisión difícil que enfrentas ahora mismo. ¿Cómo cambiaría el marco de esa decisión si la pregunta fuera "¿qué haría alguien que ha hecho estos convenios con Dios?" en lugar de "¿qué me conviene ahora?" ¿En qué área de tu vida sientes que necesitas vivir tu convenio con más conciencia?',
            },
          ],
        },
      ],
    },
  ],
}
