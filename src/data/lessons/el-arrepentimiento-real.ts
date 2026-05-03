import type { Lesson } from '@/types/doctrine'

export const elArrepentimientoReal: Lesson = {
  id: 'arrepentimiento',
  moduleId: 'doctrina-fundamental',
  title: 'El Arrepentimiento Real',
  subtitle: 'No penitencia — transformación',
  author: 'Fuentes principales: D&C 19 y Alma 42',
  description:
    'El arrepentimiento no es sufrimiento para pagar el pecado — Cristo ya lo pagó. Es el proceso de cambio que hace posible que la misericordia actúe sin destruir la justicia. Basado en D&C 19 y Alma 42.',
  level: 'BÁSICO',
  icon: '🔄',
  duration: 65,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'fe-principio-poder',
  nextLessonId: null,
  studySections: [
    // ─── SECCIÓN I ────────────────────────────────────────────────────────────
    {
      id: 's1',
      title: 'Lo que el arrepentimiento no es',
      intro: {
        romanNumeral: 'I',
        title: 'Lo que el arrepentimiento no es',
        paragraphs: [
          'El mayor obstáculo para el arrepentimiento genuino no es el orgullo — es la confusión doctrinal. Millones creen que arrepentirse significa sufrir para pagar su deuda con Dios. D&C 19 destruye esa idea desde sus cimientos.',
        ],
      },
      topics: [
        {
          id: 'no-es-penitencia',
          title: 'Cristo ya pagó — tú no tienes que hacerlo',
          subtitle:
            'La penitencia es la idea de que nuestro sufrimiento contribuye al pago del pecado. D&C 19 deja en claro que el precio ya fue pagado completamente — y que añadir nuestro sufrimiento al suyo sería decir que el suyo no fue suficiente.',
          blocks: [
            {
              type: 'paragraph',
              text: 'La revelación conocida como D&C 19 fue dada al Profeta José Smith alrededor de 1830, dirigida a Martín Harris. En ella, el Señor hace algo inusual: describe con sus propias palabras lo que sufrió en Getsemaní, y da la razón exacta por la que lo hizo. Lo que revela cambia completamente cómo entendemos el arrepentimiento.',
              blockId: 'arr-s1-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Por tanto, te mando que te arrepientas — arrepiéntete, no sea que te hiera con la vara de mi boca, y por mi ira, y tus sufrimientos sean penosos — ¡cuán penosos tú no sabes, cuán difícil de soportar tú no conoces! Pues he aquí, yo, Dios, sufrí estas cosas por todos, para que ellos no tuviesen que sufrir si se arrepintiesen; Pero si no se arrepintiesen, necesariamente habrán de sufrir aun como yo."',
              reference: 'Doctrina y Convenios 19:15–17 · El Señor a Martín Harris, circa 1830',
            },
            {
              type: 'paragraph',
              text: 'La lógica es absoluta: Cristo sufrió "para que ellos NO tuviesen que sufrir SI se arrepintiesen." El arrepentimiento es precisamente la condición que activa ese pago ya realizado — no el mecanismo para hacer un pago propio. La persona que cree que sufrir basta para limpiar su pecado está ignorando la Expiación, no honrándola.',
              blockId: 'arr-s1-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"Porque la tristeza que es según Dios produce arrepentimiento para salvación, de que no hay que arrepentirse; pero la tristeza del mundo produce muerte."',
              reference: '2 Corintios 7:10 · Biblia (RVR) · El Apóstol Pablo',
            },
            {
              type: 'doctrine_box',
              title: 'Tristeza según Dios vs. tristeza del mundo — la diferencia que salva',
              body: 'La TRISTEZA DEL MUNDO es culpa sin dirección: se centra en uno mismo, en la vergüenza, en el "¿qué pensarán de mí?", o en el miedo al castigo. Puede durar años y no producir ningún cambio real. Produce muerte espiritual — parálisis, desesperación, o en casos extremos, abandono de toda fe. La TRISTEZA SEGÚN DIOS (o tristeza piadosa) se centra en el daño causado: a Dios, al prójimo, a uno mismo como hijo del Padre. Produce arrepentimiento — un cambio real de corazón y dirección. No busca simplemente sentirse mejor; busca ser diferente. Esta distinción es la diferencia entre penitencia (secular o religiosa) y arrepentimiento verdadero.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Penitencia — la distorsión',
                items: [
                  'El sufrimiento del pecador contribuye al pago del pecado',
                  'Se centra en castigar al hombre viejo',
                  'Produce culpa como fin en sí misma',
                  'El perdón se gana por sufrir suficiente',
                  'Niega implícitamente que la Expiación fue suficiente',
                  'Puede durar indefinidamente sin cambio real de vida',
                ],
              },
              right: {
                title: 'Arrepentimiento real — la doctrina',
                items: [
                  'Cristo ya pagó el precio — el arrepentimiento lo activa',
                  'Se centra en transformar al hombre nuevo',
                  'Produce tristeza piadosa como motor de cambio, no como meta',
                  'El perdón viene de Cristo, no del nivel de sufrimiento propio',
                  'Honra la Expiación al confiar en que fue completamente suficiente',
                  'Tiene un fin: el cambio de vida que certifica que fue real',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote:
                'El arrepentimiento no es un castigo — es un privilegio. Es el proceso maravilloso y misericordioso que el Señor ha dado a sus hijos para que puedan cambiar. Cuando elegimos arrepentirnos, elegimos cambiar. Permitimos que el Salvador nos transforme en la mejor versión de nosotros mismos. El arrepentimiento siempre implica acción. No es suficiente lamentarse. Debemos cambiar.',
              name: 'Presidente Russell M. Nelson · "Podemos hacerlo mejor y ser mejores" · Conferencia General, abril 2019',
            },
            {
              type: 'deep_dive',
              badge: 'D&C 19',
              title: '"Castigo eterno" no significa "castigo para siempre" — la revelación que cambia todo',
              paragraphs: [
                'D&C 19:4-12 contiene una revelación lingüística de enorme importancia: el Señor explica que "castigo eterno" y "castigo interminable" no describen la duración del sufrimiento — son nombres. "Eterno" y "Sin Fin" son nombres de Dios. Por tanto, "castigo eterno" = el castigo que pertenece a Dios, administrado por Dios.',
                'D&C 19:10-12: "Porque he aquí que yo soy sin fin, y el castigo que se impone de mi mano es castigo eterno; porque Sin Fin es mi nombre. Por tanto — El castigo eterno es el castigo de Dios. El castigo interminable es el castigo de Dios."',
                'Esta revelación tiene consecuencias profundas: el infierno y sus castigos no son necesariamente eternos en duración para todo pecador. El arrepentimiento genuino puede liberar a la persona del dominio de ese castigo — porque el castigo "de Dios" puede ser aplicado, pero también puede ser suspendido por el mismo Dios a través de la Expiación. Esta es la buena nueva del arrepentimiento: no hay pecado tan grande que la misericordia de Dios, activada por el arrepentimiento, no pueda cubrir.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                '¿Hay pecados en tu pasado por los que todavía te castigas — no como arrepentimiento real, sino como penitencia — como si Cristo no hubiera sido suficiente? ¿Qué cambiaría en tu relación con Dios si creyeras completamente que D&C 19:17 aplica a TI?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN II ───────────────────────────────────────────────────────────
    {
      id: 's2',
      title: 'El problema — justicia, misericordia y la caída',
      intro: {
        romanNumeral: 'II',
        title: 'El problema — justicia, misericordia y la caída',
        paragraphs: [
          'Alma 42 es la explicación más lúcida del problema que el arrepentimiento debe resolver. Sin entender por qué la justicia existe y por qué no puede simplemente ignorarse, el arrepentimiento parece innecesario.',
        ],
      },
      topics: [
        {
          id: 'justicia-misericordia',
          title: 'Por qué Dios no puede simplemente perdonar a todos sin más',
          subtitle:
            'Alma le explicó a su hijo Corianton algo que muchos nunca comprenden: no es que Dios no quiera perdonar — es que perdonar sin justicia destruiría el orden moral del universo y haría que Dios dejara de ser Dios.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Corianton, el hijo de Alma, había cometido inmoralidad sexual en su misión y había llegado a una conclusión que muchos comparten: si Dios es tan misericordioso, ¿por qué no simplemente perdonar todos los pecados sin condición? ¿Por qué no ser indulgente con la debilidad humana? La respuesta de Alma en el capítulo 42 es la exposición más brillante de la teología de la Expiación en todo el Libro de Mormón.',
              blockId: 'arr-s2-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Y si no hubiera habido ley alguna dada, si los hombres no hubieran sido cortados, es decir, si no hubiera habido ningún castigo que sobreviniera por la transgresión, la misericordia no podría actuar sino que destruiría la obra de la justicia. Ahora bien, la obra de la justicia no podría ser destruida; si fuera así, Dios dejaría de ser Dios."',
              reference: 'Alma 42:13 · Libro de Mormón · Alma a su hijo Corianton',
            },
            {
              type: 'paragraph',
              text: 'La frase "Dios dejaría de ser Dios" no es hiperbólica — es la descripción exacta de lo que ocurriría si la justicia fuera violada. Un Dios que ignora el pecado no es un Dios perfecto — es un Dios corrupto. Y un universo gobernado por un Dios corrupto se derrumba moralmente. La justicia no es una restricción impuesta a Dios desde afuera — ES parte de su naturaleza perfecta, y por eso no puede negarse a sí mismo.',
              blockId: 'arr-s2-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"Porque he aquí que la justicia ejerce todos sus requerimientos, y también la misericordia reclama todo lo que le es propio; y así ningún hombre puede ser salvo, excepto quienes sean los que han tenido verdadero arrepentimiento. ¿Puede ser salvado el hombre en sus pecados? Os digo que no; pues no puedo negar la justicia cuando reine."',
              reference: 'Alma 42:24–25 · Libro de Mormón',
            },
            {
              type: 'doctrine_box',
              title: 'El dilema divino que la Expiación resuelve — Alma 42',
              body: 'La justicia EXIGE: que todo pecado tenga consecuencias, que el orden moral del universo se sostenga, que Dios no sea parcial ni corrupto. La misericordia DESEA: salvar a los hijos que se arrepienten, limpiar al pecador genuinamente transformado, dar una segunda oportunidad. El problema: si la misericordia simplemente cancela la justicia, la justicia deja de existir — y Dios pierde su integridad perfecta. Si la justicia nunca cede, ningún ser humano (todos hemos pecado) puede ser salvo. La Expiación es la solución perfecta: Cristo paga a la justicia lo que ella exige, liberando a la misericordia para actuar en favor de quien se arrepiente. Ni la justicia es violada ni la misericordia es negada.',
            },
            {
              type: 'highlight_verse',
              text: '"Y así vemos que toda la humanidad estaba caída, y habría quedado en el polvo para siempre, y para siempre, sin ningún fin, si no hubiera sido por el gran y eterno plan de redención. Por tanto, Dios mismo expiará los pecados del mundo, para dar a luz el plan de la misericordia, para satisfacer las demandas de la justicia, a fin de que Dios sea un Dios perfecto, justo y misericordioso también."',
              reference: 'Alma 42:14–15 · Libro de Mormón',
            },
            {
              type: 'leader_quote',
              quote:
                'La ley de la justicia no fue establecida por Dios como una barrera arbitraria — es una ley eterna co-igual con Su existencia. Dios no puede simplemente decretar que el pecado no importa, así como no puede decretar que dos más dos son cinco. Lo que sí puede hacer — y lo que hace la Expiación — es satisfacer Él mismo las demandas de esa ley en favor de los que se arrepienten, de modo que la misericordia fluya sin violar la justicia.',
              name: 'Élder D. Todd Christofferson · "El don del fruto del arrepentimiento" · Conferencia General, octubre 2011',
            },
            {
              type: 'deep_dive',
              badge: 'Alma 42',
              title: 'El estado de prueba: por qué la mortalidad existe exactamente como es',
              paragraphs: [
                'Alma 42 comienza con una explicación del Estado de Prueba que muchos pasan por alto. El estado de prueba (mortalidad) fue diseñado específicamente para un propósito: dar a los hijos de Dios tiempo para arrepentirse antes del juicio final. Alma 42:4-5: "Y así vemos que había un tiempo concedido al hombre para arrepentirse, sí, un tiempo probatorio; y que había un tiempo establecido para que los hombres se arrepintieran, de no ser lo cual habrían sido cortados."',
                'Esto significa que toda la arquitectura de la mortalidad — el velo de olvido, las pruebas, la libertad de elección, el acceso a la Expiación — fue diseñada para maximizar la probabilidad de que los hijos de Dios se arrepientan y regresen a Él.',
                'El arrepentimiento no es entonces solo una respuesta al pecado — es el PROPÓSITO PRINCIPAL de la mortalidad. La vida en este mundo es, en su mayor parte, un proceso de aprender a arrepentirse: de confiar en Dios más que en uno mismo, de cambiar de dirección una y otra vez hasta que la dirección de la vida apunte establemente hacia el Padre.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Alma explica que "Dios dejaría de ser Dios" si la justicia fuera ignorada. ¿Cómo cambia tu visión del arrepentimiento saber que Dios no puede simplemente perdonarte sin la Expiación — no por falta de amor, sino por integridad perfecta? ¿Hace el arrepentimiento más o menos urgente para ti?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN III ──────────────────────────────────────────────────────────
    {
      id: 's3',
      title: 'El precio ya pagado — D&C 19',
      intro: {
        romanNumeral: 'III',
        title: 'El precio ya pagado — D&C 19',
        paragraphs: [
          'D&C 19:16-19 es uno de los textos más sagrados de toda la Restauración: el Salvador describiendo con sus propias palabras lo que sufrió, por qué lo sufrió, y lo que espera de nosotros en respuesta.',
        ],
      },
      topics: [
        {
          id: 'el-precio-pagado',
          title: 'El Salvador describe Getsemaní — y qué significa para ti',
          subtitle:
            'Ninguna otra escritura describe el sufrimiento expiatorio en primera persona con esta intensidad. Y ninguna deja más clara la alternativa: arrepentirse, o sufrir como Él sufrió.',
          blocks: [
            {
              type: 'paragraph',
              text: 'En D&C 19, el Señor no habla en abstracciones teológicas. Habla en primera persona sobre la experiencia más intensa de su existencia — la noche en Getsemaní. Lo hace no para impresionar sino para que comprendamos exactamente lo que está en juego en cada decisión de arrepentirse o no:',
              blockId: 'arr-s3-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Pues he aquí, yo, Dios, sufrí estas cosas por todos, para que ellos no tuviesen que sufrir si se arrepintiesen; Pero si no se arrepintiesen, necesariamente habrán de sufrir aun como yo; Lo cual sufrimiento me causó, a mí, incluso Dios, el más grande de todos, temblar de dolor, y sangrar de todos los poros, y sufrir tanto en el cuerpo como en el espíritu, y quisiera no beber la amarga copa, y me retraje — Sin embargo, gloria sea al Padre, y bebí, y terminé mis preparaciones para con los hijos de los hombres."',
              reference: 'Doctrina y Convenios 19:16–19',
            },
            {
              type: 'paragraph',
              text: 'Tres detalles en este texto merecen profunda contemplación. Primero: "yo, Dios... temblar de dolor." El ser más poderoso del universo tembló. No metafóricamente — tembló. Segundo: "quisiera no beber la amarga copa, y me retraje." El Salvador mismo, en ese momento, quiso que hubiera otro camino. No había otro. Tercero: "Sin embargo, gloria sea al Padre, y bebí." La obediencia perfecta al Padre en el momento de mayor costo personal — esta es la fe hecha acción en su forma más sublime.',
              blockId: 'arr-s3-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"Por tanto, te mando que te arrepientas — arrepiéntete, no sea que yo te hiera con la vara de mi boca, y por mi ira, y tus sufrimientos sean penosos — ¡cuán penosos tú no sabes, cuán difícil de soportar tú no conoces!"',
              reference: 'Doctrina y Convenios 19:15',
            },
            {
              type: 'doctrine_box',
              title: 'Las dos únicas opciones — D&C 19:16-17',
              body: 'El versículo 16 establece la ecuación: Cristo sufrió en Getsemaní "para que ellos NO tuviesen que sufrir SI se arrepintiesen." El versículo 17 establece la alternativa: "si no se arrepintiesen, necesariamente habrán de sufrir AUN COMO ÉL." No hay tercera opción. No existe una vía media de "vivir con el pecado sin consecuencias." La pregunta es solo quién paga la deuda: Cristo (a través del arrepentimiento) o el pecador mismo (sin él). El arrepentimiento no es un requisito burocrático — es el mecanismo de activación de un pago ya realizado.',
            },
            {
              type: 'highlight_verse',
              text: '"Aprende de mí y escucha mis palabras; camina en la mansedumbre de mi Espíritu, y hallarás reposo para tu alma."',
              reference: 'Doctrina y Convenios 19:23',
            },
            {
              type: 'paragraph',
              text: 'D&C 19:23 es la conclusión que el Señor da a su revelación sobre el arrepentimiento: no termina con advertencia — termina con invitación. Después de describir el peso del pecado sin arrepentimiento y la magnitud de lo que pagó, la última palabra es descanso. El arrepentimiento no es la parte pesada del evangelio — es la puerta al descanso.',
              blockId: 'arr-s3-p-2',
            },
            {
              type: 'leader_quote',
              quote:
                'Cuando entendemos lo que Jesucristo realmente sufrió en Getsemaní — en cuerpo y espíritu, más de lo que cualquier ser humano podría soportar — el arrepentimiento deja de ser una carga y se convierte en un regalo. Él pagó un precio que nosotros no podríamos pagar. Pedirnos que añadamos nuestro propio sufrimiento al suyo como forma de compensación sería una herejía. Lo que nos pide es que cambiemos — que la transformación que hizo posible mediante su sufrimiento ocurra realmente en nosotros.',
              name: 'Élder Jeffrey R. Holland · "El Cristo de los Evangelios" · Conferencia General, octubre 2017',
            },
            {
              type: 'deep_dive',
              badge: 'D&C 19',
              title: 'Por qué el Salvador sangró de todos los poros',
              paragraphs: [
                'D&C 19:18 describe que el Salvador "sangró de todos los poros." Lucas 22:44 confirma: "Y estando en agonía, oraba más intensamente; y era su sudor como grandes gotas de sangre que caían hasta la tierra." Esto no es solo un detalle médico — es la evidencia de un sufrimiento que trasciende lo físico.',
                'La condición médica llamada hematidrosis (sudoración de sangre) ocurre en casos de estrés extremo. Pero la escritura no la menciona para un diagnóstico médico — la menciona para establecer la magnitud real de lo que ocurrió. La Expiación no fue un sufrimiento simbólico. Fue real, intenso, y completo. "Cuán penosos tú no sabes, cuán difícil de soportar tú no conoces" (D&C 19:15).',
                'El Hermano McConkie enseñó que en Getsemaní, el Salvador cargó el peso de CADA pecado de CADA ser humano que viviría en la tierra — la vergüenza, el dolor, la desesperación, la separación de Dios que cada uno de esos pecados causaría — todo simultáneamente. No es teológicamente posible para la mente humana comprender esa magnitud. Solo podemos inclinar la cabeza ante ella y arrepentirnos.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'El Salvador dijo que "quisiera no beber la amarga copa" — pero la bebió. ¿Hay algún acto de arrepentimiento en tu vida que has estado evitando porque "no quisieras beber esa copa"? ¿Qué te daría la fortaleza de hacerlo sabiendo lo que Él hizo por ti?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN IV ───────────────────────────────────────────────────────────
    {
      id: 's4',
      title: 'Los elementos del arrepentimiento verdadero',
      intro: {
        romanNumeral: 'IV',
        title: 'Los elementos del arrepentimiento verdadero',
        paragraphs: [
          'El arrepentimiento tiene componentes identificables — no como lista de trámites para satisfacer a Dios, sino como descripción de lo que ocurre naturalmente en un corazón que genuinamente quiere cambiar.',
        ],
      },
      topics: [
        {
          id: 'elementos-del-arrepentimiento',
          title: 'Lo que ocurre en un corazón que realmente cambia',
          subtitle:
            'Alma 42:29-31 da la perspectiva definitiva: que el pecado te turbe solo hasta el punto que te lleve al arrepentimiento — no más. El arrepentimiento real tiene un destino, y ese destino es la libertad.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Alma terminó de explicar la doctrina de la justicia y la misericordia a Corianton, hizo algo sorprendente: le dijo que dejara de atormentarse. No porque el pecado no importara — sino porque la culpa prolongada más allá del punto de cambio no es arrepentimiento sino parálisis:',
              blockId: 'arr-s4-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Y ahora, hijo mío, quisiera que no dejaras que estas cosas te turben más, y que solo tus pecados te turben con la turbación que te lleve al arrepentimiento."',
              reference: 'Alma 42:29 · Libro de Mormón · Alma a Corianton',
            },
            {
              type: 'paragraph',
              text: 'Esta es una de las instrucciones más compasivas de toda la escritura: la culpa tiene un propósito específico — llevarte al arrepentimiento — y cuando ya ha cumplido ese propósito, se convierte en obstáculo. El adversario usa la culpa sin fin para hacer que las personas crean que nunca podrán ser perdonadas. El Señor dice: que te turbe solo lo suficiente para cambiar, y después suelta esa carga.',
              blockId: 'arr-s4-p-1',
            },
            {
              type: 'steps',
              steps: [
                'Reconocimiento — Ver el pecado tal como es: una violación de la ley de Dios y un daño real a uno mismo y al prójimo. No minimizarlo ("no es para tanto") ni exagerarlo hasta la desesperación. La honestidad exacta que produce tristeza piadosa.',
                'Tristeza piadosa — No culpa paralizante, no vergüenza que destruye la identidad. Es el dolor genuino de saber que actuaste en contra de quien amas — Dios, el prójimo, tu mejor versión. Este dolor tiene una dirección: hacia el cambio.',
                'Abandono del pecado — D&C 58:43: "el que confiesa y los abandona." El arrepentimiento que no termina en abandono real no es arrepentimiento — es gestión de culpa. El abandono puede ser gradual y requerir apoyo, pero la dirección debe ser clara y la intención firme.',
                'Confesión apropiada — Al Señor siempre, en oración sincera. Al obispo cuando el pecado es serio (inmoralidad, violación de leyes del evangelio que afectan el convenio). La confesión no es para informar a Dios — es parte del proceso de traer el pecado a la luz.',
                'Restitución en lo posible — Si el pecado causó daño a otra persona, hacer todo lo que esté al alcance de uno para repararlo. No todo puede repararse completamente — ahí entra la Expiación para cubrir lo irreparable.',
                'Cambio de vida — La señal definitiva del arrepentimiento real: el fruto de una vida que ya no repite el mismo pecado. "Por sus frutos los conoceréis" (Mateo 7:16) aplica al arrepentimiento tanto como a los falsos profetas.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"He aquí, el que se ha arrepentido de sus pecados es perdonado, y yo, el Señor, no los recuerdo más. Por este signo reconocerás a un hombre arrepentido de sus pecados: si los confiesa y los abandona."',
              reference: 'Doctrina y Convenios 58:42–43',
            },
            {
              type: 'highlight_verse',
              text: '"Venid luego, dice Jehová, y estemos a cuenta: si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos; si fueren rojos como el carmesí, vendrán a ser como blanca lana."',
              reference: 'Isaías 1:18 · Biblia (RVR)',
            },
            {
              type: 'leader_quote',
              quote:
                'El verdadero arrepentimiento implica un cambio de mente y corazón. Implica girar alejándose del pecado y girando hacia Dios. Y debemos recordar que el Señor dijo "si confiesa y los abandona" — ambos son necesarios. La confesión sin abandono no produce el fruto del arrepentimiento. El abandono sin confesión apropiada puede dejar sin resolver heridas que necesitan la intervención del obispo para sanar. El proceso completo — aunque difícil — produce libertad real.',
              name: 'Élder Richard G. Scott · "La alegría del perdón durable" · Conferencia General, mayo 1992',
            },
            {
              type: 'deep_dive',
              badge: 'Práctica',
              title: 'El papel del obispo en el arrepentimiento — y por qué no todos los pecados requieren confesión formal',
              paragraphs: [
                'Muchos miembros tienen confusión sobre cuándo involucrar al obispo en el arrepentimiento. El principio general: los pecados contra uno mismo (pensamientos impuros, debilidades personales repetidas) se resuelven entre el individuo y el Señor en oración sincera. Los pecados que violan convenios del sacerdocio o del templo, o que afectan seriamente a otras personas, requieren confesión al obispo.',
                'El obispo no es el árbitro del perdón — el perdón viene del Señor. El obispo es un juez en Israel: puede determinar restricciones temporales de privilegios del sacerdocio o del templo cuando es necesario, y actúa como instrumento de sanación al escuchar, guiar y acompañar el proceso. El Elder Richard G. Scott enseñó que confesar pecados serios al obispo no produce más vergüenza — produce alivio, porque ya no se carga el peso solo.',
                'Para los pecados serios que sí requieren confesión formal, la tentación de evitarla por miedo a las consecuencias es grande. Pero el costo de no hacerlo es mayor: años cargando un peso que el Señor quiere quitar, participando de las ordenanzas sin la paz que deberían producir, y viviendo en una disminución del Espíritu que hace imposible el crecimiento espiritual pleno.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'Alma dijo que la turbación por el pecado debe llevarte al arrepentimiento, no más allá. ¿En qué etapa del proceso de arrepentimiento te encuentras con el pecado o debilidad más presente en tu vida ahora? ¿Estás aún en reconocimiento? ¿En abandono? ¿O llevas tiempo en culpa que ya no produce cambio?',
            },
          ],
        },
      ],
    },
    // ─── SECCIÓN V ────────────────────────────────────────────────────────────
    {
      id: 's5',
      title: 'La promesa — Dios no los recuerda más',
      intro: {
        romanNumeral: 'V',
        title: 'La promesa — Dios no los recuerda más',
        paragraphs: [
          'El destino del arrepentimiento real no es la tolerancia divina ni la libertad condicional — es el olvido completo de Dios. D&C 58:42 hace una promesa que ningún teólogo humano se atrevería a hacer por su cuenta.',
        ],
      },
      topics: [
        {
          id: 'la-promesa-del-perdon',
          title: 'De la agonía al gozo — Alma 36 y la promesa de la remisión',
          subtitle:
            'Alma el Joven es el testimonio más poderoso en el Libro de Mormón de lo que el arrepentimiento puede hacer. Pasó de la agonía más intensa a la alegría más grande — en el mismo acto de recordar a Cristo.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Alma el Joven había sido uno de los enemigos más activos de la Iglesia. Cuando fue detenido por un ángel y pasó días en inconsciencia, experimentó el peso exacto de lo que había hecho — no como castigo externo, sino como la realidad plena de sus acciones sin el filtro de la justificación personal. Y luego algo cambió:',
              blockId: 'arr-s5-p-0',
            },
            {
              type: 'highlight_verse',
              text: '"Y aconteció que mientras era así atormentado por la memoria de mis muchos pecados, he aquí, me acordé también de haber oído a mi padre profetizar al pueblo acerca de la venida de uno Jesucristo, un Hijo de Dios, para expiar los pecados del mundo. Ahora bien, cuando mi mente se aferró a este pensamiento, clamé dentro de mi corazón: ¡Oh Jesús, tú Hijo de Dios, ten misericordia de mí, que estoy en la hiél de la amargura y estoy rodeado de los lazos eternos de la muerte! Y ahora bien, he aquí que cuando pensé esto, no pude recordar más mis dolores; sí, no me era atormentado más por la memoria de mis pecados."',
              reference: 'Alma 36:17–19 · Libro de Mormón · Alma describiendo su conversión',
            },
            {
              type: 'paragraph',
              text: 'El movimiento es preciso: de la memoria de pecados → a la memoria de Cristo → a la desaparición del tormento. El arrepentimiento no terminó en Alma como "no tengo deudas pendientes" — terminó como gozo. "Mis dolores se convirtieron en gozo tan grande como había sido mi dolor" (Alma 36:20). Este es el destino del arrepentimiento real: no neutralidad emocional sino transformación de la experiencia misma.',
              blockId: 'arr-s5-p-1',
            },
            {
              type: 'highlight_verse',
              text: '"He aquí, el que se ha arrepentido de sus pecados es perdonado, y yo, el Señor, no los recuerdo más."',
              reference: 'Doctrina y Convenios 58:42',
            },
            {
              type: 'highlight_verse',
              text: '"Y también os digo que así habrá más gozo en el cielo por un pecador que se arrepiente, que por noventa y nueve justos que no necesitan de arrepentimiento."',
              reference: 'Lucas 15:7 · Biblia (RVR) · El Salvador',
            },
            {
              type: 'key_points',
              points: [
                '✦ "Yo, el Señor, no los recuerdo más" (D&C 58:42) — No dice "los perdono pero los recuerdo." Dice que no los recuerda. Esta es la misericordia divina en su forma más radical: el Dios omnisciente que decide no recordar.',
                '🔄 El arrepentimiento es recurrente — no un evento de vida único. Moroni 6:8: "y tan a menudo como se arrepentiesen y buscasen perdón, con real intento, le sería perdonado." El convenio del bautismo se renueva en la Santa Cena precisamente para este propósito.',
                '⚡ La remisión se puede SENTIR — Mosiah 4:3 describe que el pueblo del Rey Benjamín supo por el Espíritu que sus pecados les eran perdonados. El arrepentimiento genuino produce una paz y ligereza específicas que son reconocibles.',
                '🕊️ El perdón no es condicional a recordar perfectamente todos los pecados — es condicional al esfuerzo honesto. Dios no requiere perfección de memoria; requiere honestidad de corazón.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '"Y aconteció que después que el rey Benjamín hubo terminado de hablar... el Espíritu del Señor Omnipotente había obrado un poderoso cambio en ellos, o en sus corazones, que ya no tenían disposición para hacer el mal sino para hacer el bien continuamente."',
              reference: 'Mosiah 5:2 · Libro de Mormón',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'El peso del pecado',
                  text: 'La conciencia reconoce el alejamiento de Dios. Comienza la tristeza piadosa — motor de cambio, no destino.',
                  color: 'red',
                },
                {
                  label: 'El clamor a Cristo',
                  text: '"Oh Jesús, ten misericordia de mí." El arrepentimiento comienza siempre como un acto de fe — creer que Él puede y quiere perdonar.',
                  color: 'gold',
                },
                {
                  label: 'El proceso de cambio',
                  text: 'Reconocimiento, tristeza, abandono, confesión, restitución. No simultáneo — un paso a la vez, con paciencia.',
                  color: 'blue',
                },
                {
                  label: 'La remisión',
                  text: '"No pude recordar más mis dolores." El Espíritu confirma el perdón. La paz que "sobrepasa todo entendimiento" (Filipenses 4:7).',
                  color: 'green',
                },
                {
                  label: 'El gozo',
                  text: '"Mis dolores se convirtieron en gozo tan grande como había sido mi dolor" (Alma 36:20). El arrepentimiento termina en alegría — no solo en alivio.',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'leader_quote',
              quote:
                'Nunca he conocido a una persona que se haya arrepentido de haberse arrepentido. He conocido a muchas que esperaron demasiado. He conocido a muchas que sufrieron innecesariamente cargando solas el peso de pecados que el Señor estaba listo y dispuesto a quitar desde el momento en que se los pidieran. El arrepentimiento no es el precio del perdón — es la puerta hacia él. Y el Salvador lleva esperando ante esa puerta desde antes que comenzaras a pecar.',
              name: 'Élder Jeffrey R. Holland · "El don de la memoria y el don del olvido" · Devocional BYU, enero 2015',
            },
            {
              type: 'deep_dive',
              badge: 'La Promesa Final',
              title: 'El olvido divino — "yo, el Señor, no los recuerdo más"',
              paragraphs: [
                'D&C 58:42 hace una de las promesas más audaces de todo el canon: el Señor no solo perdona — olvida. Para un ser omnisciente, esto no significa que literalmente pierde la información del registro. Significa algo más profundo: que esos pecados ya no tienen peso en su relación contigo, que no influirán en su trato hacia ti, que no aparecerán como carga en el juicio final del alma arrepentida.',
                'Isaías 43:25 lo confirma: "Yo, yo soy el que borro tus rebeliones por amor de mí mismo, y no me acordaré de tus pecados." Y Hebreos 8:12: "Porque seré propicio a sus injusticias, y nunca más me acordaré de sus pecados." El olvido divino no es ignorancia — es misericordia activa.',
                'La implicación práctica es transformadora: la persona que se ha arrepentido genuinamente no necesita seguir identificándose con sus pecados pasados. El adversario quiere que llevemos esa identidad — "soy el que hizo X" — como cadena permanente. El Señor dice: ese ya no eres tú. Eres el que se arrepintió. Eres el que Él lavó. Esa es tu identidad ante Dios.',
              ],
            },
            {
              type: 'reflection',
              prompt:
                'El Señor dijo "yo, el Señor, no los recuerdo más." ¿Hay pecados de los cuales te has arrepentido genuinamente pero que todavía defines tu identidad ante Dios? ¿Qué cambiaría en tu fe si tomaras literalmente la promesa de D&C 58:42 — que Dios ya no los recuerda?',
            },
          ],
        },
      ],
    },
  ],
}
