import type { Lesson } from '@/types/doctrine'

export const guiaEscriturasClaveMisioneros: Lesson = {
  id: 'guia-escrituras-clave-misioneros',
  moduleId: 'lideres-misioneros',
  title: 'Guía de Escrituras Clave para Misioneros',
  subtitle: 'Escrituras ancla, raíces originales y respuestas para el campo',
  author: 'Estructura basada en Predicad Mi Evangelio, con estudio de raíces hebreas y griegas',
  description:
    'Estudio profundo por tópico para misioneros nuevos: un versículo ancla para memorizar, escrituras clave, estudio de la palabra original en hebreo o griego, sugerencias prácticas de enseñanza y respuestas a las objeciones más comunes de los investigadores — organizado en los nueve temas centrales del mensaje restaurado.',
  level: 'INTERMEDIO',
  icon: '📖',
  duration: 95,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'La Restauración del Evangelio',
      intro: {
        romanNumeral: 'I',
        title: 'La Restauración del Evangelio',
        paragraphs: [
          'Empieza siempre aquí: la Primera Visión es el fundamento de todo el mensaje. Practica contarla en menos de 90 segundos, en tus propias palabras.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El fundamento: Dios sigue hablando hoy',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'En la primavera de 1820, José Smith se retira a un bosque a orar y ve al Padre y al Hijo en visión, quienes le dicen que no se una a ninguna iglesia existente porque todas se habían apartado de la verdad plena.',
              reference: 'José Smith–Historia 1:15–20 (versículo ancla)',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea: נָבִיא (nabí)',
              body: '"Profeta" en hebreo viene de nabí, relacionado con la idea de "ser llamado" o "anunciar por inspiración". El profeta no inventa el mensaje; lo recibe y lo proclama. Esto conecta con Amós 3:7: Dios actúa a través de mensajeros llamados, no de forma directa y visible a todos.',
            },
            { type: 'highlight_verse', reference: 'Santiago 1:5–6', text: 'Si a alguno le falta sabiduría, pídala a Dios, quien da a todos abundantemente y sin reproche; pero pida con fe, sin dudar.' },
            { type: 'highlight_verse', reference: 'Amós 3:7', text: 'Ciertamente el Señor Jehová no hará nada sin que revele su secreto a sus siervos los profetas.' },
            { type: 'highlight_verse', reference: 'Efesios 2:19–20 y 4:11–14', text: 'La Iglesia de Cristo está "edificada sobre el fundamento de los apóstoles y profetas" — una estructura organizativa que se perdió y necesitaba restaurarse, no solo reformarse.' },
            { type: 'highlight_verse', reference: 'Isaías 29:11–14 / 2 Nefi 27', text: 'Profecía de un libro sellado, entregado a alguien que no sabe leer, que saldrá a la luz por el poder de Dios en los últimos días.' },
            { type: 'highlight_verse', reference: 'Ezequiel 37:15–17', text: 'El palo de Judá (la Biblia, escrita por la tribu de Judá) y el palo de José (el Libro de Mormón, escrito por descendientes de José) se convertirán en una sola vara en la mano del Señor.' },
            { type: 'highlight_verse', reference: 'Hechos 3:19–21', text: 'Pedro profetiza tiempos de "refrigerio" y de "restauración de todas las cosas" que Dios habló por sus santos profetas.' },
            { type: 'highlight_verse', reference: 'Apocalipsis 14:6–7', text: 'Juan ve en visión un ángel que vuela con el evangelio eterno para predicarlo — señal de una restauración, no de una simple continuidad.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Usa Amós 3:7 junto con la raíz hebrea de "profeta" (nabí) para explicar por qué Dios sigue llamando profetas hoy: es su patrón constante en toda la historia bíblica.',
                'Muestra Ezequiel 37 con un objeto visual (dos varas o palos de madera) — una de las demostraciones más memorables para un investigador.',
                'Conecta Hechos 3:19–21 con Apocalipsis 14:6–7: la Biblia misma profetiza una restauración futura, no solo una reforma de lo que ya existía.',
                'Termina siempre invitando a leer el Libro de Mormón y orar sobre él (Moroni 10:4–5) antes de avanzar al siguiente tema.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Investigador', side: 'left', text: '¿Por qué necesitamos otro libro además de la Biblia?' },
                { speaker: 'Misionero', side: 'right', text: 'Ezequiel 37 profetiza dos varas (registros) que se unirán en una — la Biblia no dice que sería el único registro de Dios en la tierra. El Libro de Mormón no la reemplaza: la confirma y añade otro testimonio de Jesucristo (2 Corintios 13:1: "por boca de dos o tres testigos se establecerá todo asunto").' },
                { speaker: 'Investigador', side: 'left', text: '¿No es Apocalipsis 22:18 una advertencia contra añadir un nuevo libro de escritura?' },
                { speaker: 'Misionero', side: 'right', text: 'Esa advertencia se refiere específicamente al libro de Apocalipsis, igual que Deuteronomio 4:2 usa un lenguaje similar sobre la Torá, sin que eso impidiera libros posteriores como los Salmos o Isaías. La Biblia es una colección de libros escritos en siglos distintos; Dios nunca dejó de hablar.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Plan de Salvación',
      intro: {
        romanNumeral: 'II',
        title: 'El Plan de Salvación',
        paragraphs: [
          'Este tema responde la pregunta más humana de todas: ¿por qué existimos? Es también el más sanador ante la muerte de un ser querido.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Vida preterrenal, mortalidad y vida después de la muerte',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Nefi 2:25 (versículo ancla)',
              text: '"Adán cayó para que los hombres existiesen, y existen para que tengan gozo." Es el resumen más claro del propósito de la existencia humana en toda la escritura restaurada.',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea/griega: שָׂמַח (samach) / χαρά (chará)',
              body: 'El "gozo" de 2 Nefi 2:25 refleja el hebreo samach — alegría profunda y activa, no solo placer pasajero — y el griego chará del Nuevo Testamento, usado para el gozo que produce el evangelio (Lucas 2:10). El plan de Dios no busca simplemente evitar el dolor, sino producir un gozo pleno y duradero.',
            },
            { type: 'highlight_verse', reference: 'Abraham 3:24–26', text: 'En el concilio preterrenal se propuso un plan; la tierra fue creada como lugar de prueba para ver si los hijos de Dios guardarían sus mandamientos.' },
            { type: 'highlight_verse', reference: 'Job 38:4–7', text: 'Dios pregunta a Job dónde estaba cuando "alababan todas las estrellas del alba y se regocijaban todos los hijos de Dios" — evidencia bíblica de una existencia preterrenal consciente.' },
            { type: 'highlight_verse', reference: 'Alma 34:32–34', text: 'Esta vida es el tiempo señalado para que los hombres se preparen para comparecer ante Dios; después de esta vida no hay tiempo de arrepentirse.' },
            { type: 'highlight_verse', reference: 'Alma 40:11–14', text: 'Descripción del mundo espiritual: los justos entran en un estado de paz llamado paraíso, y los inicuos son separados hasta la resurrección.' },
            { type: 'highlight_verse', reference: '1 Corintios 15:20–22, 40–42', text: 'Así como en Adán todos mueren, en Cristo todos serán vivificados; hay cuerpos celestiales y terrenales, con distinta gloria.' },
            { type: 'highlight_verse', reference: 'DyC 76:50–70', text: 'Visión de José Smith y Sidney Rigdon describiendo los tres reinos de gloria: celestial, terrestre y telestial, según la vida y elección de cada persona.' },
            { type: 'highlight_verse', reference: 'Juan 14:2', text: '"En la casa de mi Padre muchas moradas hay" — Jesús mismo enseña que la vida después de la muerte tiene distintos grados o lugares.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Usa el diagrama clásico de tres columnas (vida preterrenal → vida terrenal → vida después de la muerte) dibujado a mano; es el recurso visual más efectivo para este tema.',
                'Job 38:4–7 sorprende a investigadores con fondo bíblico — muestra que la idea de una vida antes de esta no es exclusiva del Libro de Mormón.',
                '2 Nefi 2:25 responde directamente a "¿por qué existimos?" — apóyate en la raíz hebrea/griega de "gozo" para profundizar si el investigador tiene curiosidad intelectual.',
                'Conecta este tema con la esperanza ante la muerte de un ser querido; es el tópico más sanador de toda la lección.',
                'No profundices en los tres grados de gloria en la primera visita — siembra la idea con Juan 14:2 y profundiza en una lección posterior.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Investigador', side: 'left', text: 'Si Dios ya sabía que Adán caería, ¿por qué es un pecado?' },
                { speaker: 'Misionero', side: 'right', text: 'La Caída era parte necesaria del plan, no un accidente que arruinó los planes de Dios (2 Nefi 2:22–25). Sin la Caída no habría mortalidad, oposición, ni la posibilidad de progreso ni de tener hijos — por eso se le llama "transgresión" más que simplemente "pecado", y por eso el plan incluye desde el principio a un Salvador.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Fe en Jesucristo',
      intro: {
        romanNumeral: 'III',
        title: 'Fe en Jesucristo',
        paragraphs: [
          'La fe no es ausencia de duda: es sostenerse firme en Cristo aunque no se vea todo el camino.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La fe como semilla que se prueba y crece',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 32:21 (versículo ancla)',
              text: '"La fe no es tener un conocimiento perfecto de las cosas; por tanto, si tenéis fe, tenéis esperanza en cosas que no se ven, que son verdaderas."',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea: אָמַן (aman) → אֱמוּנָה (emuná)',
              body: '"Fe" en hebreo bíblico viene de la raíz aman, la misma de donde sale "amén" — literalmente significa "sostener firme" o "ser fiel/confiable", como un pilar que sostiene una estructura. No es una emoción, sino una postura de firmeza y lealtad. Compara con Hebreos 11:1, escrito originalmente en griego con pistis (confianza activa, no solo creencia intelectual).',
            },
            { type: 'highlight_verse', reference: 'Hebreos 11:1, 6', text: 'La fe es la certeza de lo que se espera, la convicción de lo que no se ve; sin fe es imposible agradar a Dios.' },
            { type: 'highlight_verse', reference: 'Alma 32:26–28', text: 'Alma compara la palabra de Dios con una semilla: si no la rechazamos, comienza a hincharse y crecer dentro de nosotros, y eso ya empieza a ser evidencia de fe.' },
            { type: 'highlight_verse', reference: 'Éter 12:6', text: '"No recibís testimonio sino después de que se pruebe vuestra fe" — el testimonio a menudo llega después de actuar, no antes.' },
            { type: 'highlight_verse', reference: 'Santiago 2:17–18, 26', text: 'La fe sin obras es muerta; se demuestra la fe por las obras, así como el cuerpo sin espíritu está muerto.' },
            { type: 'highlight_verse', reference: 'Marcos 9:23–24', text: '"Al que cree todo le es posible." Y el padre responde: "Creo; ayuda mi incredulidad" — un ejemplo honesto de fe imperfecta pero real.' },
            { type: 'highlight_verse', reference: 'Mateo 17:20', text: 'La fe como un grano de mostaza puede mover montañas — el poder no está en el tamaño de la fe sino en su objeto: Jesucristo.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Usa Alma 32 con una semilla real (llévala en tu mochila) — es la analogía más efectiva y memorable con investigadores de cualquier edad.',
                'Explica la raíz hebrea aman: fe no es "creer sin evidencia", es "sostenerse firme" en Cristo aunque no se vea todo el camino.',
                'Marcos 9:23–24 es perfecto para investigadores que dicen "quiero creer pero tengo dudas" — normaliza la duda honesta como parte del camino de fe.',
                'Invita a un "experimento de fe" concreto: leer el Libro de Mormón unos minutos cada día y orar con sinceridad, luego reportar qué sintieron.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Investigador', side: 'left', text: '¿No es la fe solo un sentimiento subjetivo, distinto para cada persona?' },
                { speaker: 'Misionero', side: 'right', text: 'Santiago 2 enseña que la fe verdadera produce obras visibles y consistentes, no solo un sentimiento privado. Alma 32 la describe como algo que se puede "probar" y "experimentar" de forma casi científica: se planta, se observa el crecimiento, y se evalúa el fruto.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Arrepentimiento',
      intro: {
        romanNumeral: 'IV',
        title: 'Arrepentimiento',
        paragraphs: [
          'Arrepentirse no es castigarse a uno mismo: es dar la vuelta y caminar hacia Dios.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Volver a Dios trae gozo, no solo alivio de culpa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Alma 36:17–21 (versículo ancla)',
              text: 'Alma el Joven, en medio de una angustia insoportable por sus pecados, recuerda la profecía sobre Jesucristo y clama: "¡Oh Jesús, Hijo de Dios, ten misericordia de mí!" — al instante deja de sentir dolor y es llenado de un gozo tan intenso como había sido su dolor.',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea/griega: שׁוּב (shuv) / μετάνοια (metánoia)',
              body: '"Arrepentirse" en hebreo es shuv — literalmente "regresar" o "dar la vuelta", usado en el Antiguo Testamento para el acto de volver a Dios. El griego del Nuevo Testamento usa metánoia: "cambio de mente/dirección". Ninguna de las dos raíces implica solo sentir culpa — ambas apuntan a un giro real: dejar de caminar en una dirección y caminar hacia Dios.',
            },
            { type: 'highlight_verse', reference: 'Isaías 1:18', text: '"Venid luego, dice Jehová, y estemos a cuenta: si vuestros pecados fueren como la grana, como la nieve serán emblanquecidos."' },
            { type: 'highlight_verse', reference: '2 Nefi 9:23', text: 'Todos los hombres deben arrepentirse, o no pueden ser salvos en el reino de Dios — no hay excepción para nadie.' },
            { type: 'highlight_verse', reference: 'DyC 58:42–43', text: '"El que se ha arrepentido de sus pecados, ese es perdonado, y yo, el Señor, no me acuerdo más de ellos." El verdadero arrepentimiento incluye confesión y abandono del pecado.' },
            { type: 'highlight_verse', reference: 'Lucas 15:11–24 (hijo pródigo)', text: 'El padre corre a recibir al hijo antes de que este termine su confesión — imagen del gozo de Dios ante el arrepentimiento sincero.' },
            { type: 'highlight_verse', reference: '2 Corintios 7:10', text: '"La tristeza que es según Dios produce arrepentimiento para salvación... pero la tristeza del mundo produce muerte" — distingue la culpa sana de la vergüenza destructiva.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Cuenta la historia completa de Alma el Joven (Alma 36) — muestra que el arrepentimiento trae gozo real, no solo alivio de culpa.',
                'Usa la raíz hebrea shuv ("regresar") para reencuadrar el arrepentimiento: no es "castigarse a uno mismo", es "dar la vuelta y caminar hacia Dios".',
                'El hijo pródigo (Lucas 15) es ideal para investigadores que temen que Dios los rechace por su pasado.',
                'Usa 2 Corintios 7:10 con quienes cargan mucha vergüenza — ayuda a diferenciar la tristeza sana (que motiva a cambiar) de la vergüenza que paraliza.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Investigador', side: 'left', text: '¿Cómo sé si ya me arrepentí de verdad?' },
                { speaker: 'Misionero', side: 'right', text: 'DyC 58:43 da una señal clara: cuando ya no se repite el pecado y se siente paz en vez de la angustia anterior. No es un sentimiento único, es un proceso con frutos visibles: cambio de conducta, confesión cuando corresponde, y una relación restaurada con Dios.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Bautismo y el Don del Espíritu Santo',
      intro: {
        romanNumeral: 'V',
        title: 'El Bautismo y el Don del Espíritu Santo',
        paragraphs: [
          'El bautismo es un convenio de amor y comunidad, no solo una regla o un requisito.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Convenio, inmersión y el don del Espíritu por imposición de manos',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mosíah 18:8–10 (versículo ancla)',
              text: 'El convenio bautismal de Alma en las aguas de Mormón: estar dispuestos a llevar las cargas los unos de los otros, llorar con los que lloran, consolar a los que necesitan consuelo, y servir a Dios guardando sus mandamientos en todo tiempo.',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz griega: βαπτίζω (baptízō)',
              body: '"Bautizar" viene del griego baptízō, que significa "sumergir por completo" o "hundir" (se usaba para teñir tela sumergiéndola en tinte). Esto explica por qué el bautismo bíblico y restaurado se realiza por inmersión total, no por aspersión — la palabra misma implica ser cubierto por completo, simbolizando una muerte y sepultura del hombre natural (Romanos 6:3–4).',
            },
            { type: 'highlight_verse', reference: 'Mateo 3:13–17', text: 'Jesús mismo es bautizado por Juan en el Jordán "para cumplir toda justicia", aunque no tenía pecado — establece el ejemplo perfecto a seguir.' },
            { type: 'highlight_verse', reference: 'Juan 3:5', text: '"El que no naciere de agua y del Espíritu, no puede entrar en el reino de Dios" — ambos elementos son necesarios, no opcionales.' },
            { type: 'highlight_verse', reference: 'Romanos 6:3–6', text: 'El bautismo representa ser sepultados con Cristo en su muerte y resucitar a una vida nueva — no es solo un rito simbólico sino un renacer real de identidad.' },
            { type: 'highlight_verse', reference: '2 Nefi 31:5–12', text: 'Nefi pregunta por qué Cristo, siendo santo, necesitaba bautizarse, y responde: para cumplir la justicia y mostrarnos el camino que debemos seguir.' },
            { type: 'highlight_verse', reference: 'Hechos 8:14–17', text: 'Los apóstoles imponen las manos sobre los recién bautizados de Samaria para que reciban el Espíritu Santo — muestra que bautismo de agua y don del Espíritu son dos ordenanzas distintas y consecutivas.' },
            { type: 'highlight_verse', reference: 'Juan 14:26', text: 'El Consolador, el Espíritu Santo, enseñará todas las cosas y hará recordar todo lo que Cristo ha dicho.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Explica la raíz griega baptízō ("sumergir por completo") para responder con autoridad la pregunta de por qué es por inmersión y no por aspersión.',
                'Enfoca la lección en el bautismo como convenio de amor y comunidad (Mosíah 18), no solo como una regla o requisito.',
                'Usa Hechos 8:14–17 para explicar con claridad la diferencia entre sentir el Espíritu ANTES del bautismo y recibir el DON del Espíritu Santo por la imposición de manos DESPUÉS.',
                'Usa Mateo 3 para quitar la excusa de "ya soy buena persona, no necesito bautizarme" — ni Jesús, sin pecado, se eximió.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Investigador', side: 'left', text: 'Ya fui bautizado de niño en otra iglesia, ¿por qué tendría que bautizarme otra vez?' },
                { speaker: 'Misionero', side: 'right', text: 'La autoridad para bautizar importa tanto como la forma (Hebreos 5:4: nadie toma este honor por sí mismo). El bautismo restaurado se hace por inmersión, por alguien que sostiene la autoridad del sacerdocio de Dios, siguiendo exactamente el patrón de Mateo 3 y Hechos 8 — no es repetir algo válido, es completar la ordenanza como fue establecida originalmente.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Perseverar hasta el Fin',
      intro: {
        romanNumeral: 'VI',
        title: 'Perseverar hasta el Fin',
        paragraphs: [
          'El bautismo es la puerta, no el destino final. Perseverar es una fuerza activa, no simplemente "aguantar" pasivamente.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Del bautismo al sacramento semanal, con firmeza en Cristo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Nefi 31:19–20 (versículo ancla)',
              text: 'Después de entrar por la puerta angosta (bautismo), debemos avanzar con firmeza en Cristo, teniendo un fulgor perfecto de esperanza y amor hacia Dios y hacia todos los hombres, para al fin tener la vida eterna.',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz griega: ὑπομονή (hypomoné)',
              body: '"Perseverar" en el Nuevo Testamento griego es hypomoné: literalmente "permanecer debajo" de una carga o presión sin colapsar — no es pasividad, es resistencia activa y con propósito, como una viga que sostiene peso. Se usa en Romanos 5:3–4: la tribulación produce paciencia (hypomoné), y esta produce experiencia y esperanza.',
            },
            { type: 'highlight_verse', reference: 'Mateo 24:13', text: '"Mas el que persevere hasta el fin, éste será salvo."' },
            { type: 'highlight_verse', reference: 'Romanos 5:3–4', text: 'La tribulación produce paciencia, la paciencia experiencia, y la experiencia esperanza.' },
            { type: 'highlight_verse', reference: '3 Nefi 18:7, 11', text: 'El sacramento como recordatorio semanal del convenio bautismal: tomar sobre sí el nombre de Cristo para tener siempre presente en su memoria su cuerpo y sangre.' },
            { type: 'highlight_verse', reference: 'Hebreos 12:1–2', text: 'Corramos con paciencia la carrera que tenemos por delante, puestos los ojos en Jesús, el autor y consumador de la fe.' },
            { type: 'highlight_verse', reference: 'Filipenses 3:13–14', text: 'Pablo dice: "olvidando lo que queda atrás... prosigo a la meta" — el discípulo no se estanca en errores pasados sino que avanza.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Este tema es clave para investigadores recién bautizados — conéctalo directamente con asistir a la Iglesia cada semana y tomar el sacramento.',
                'Usa la raíz griega hypomoné para mostrar que perseverar es una fuerza activa, no simplemente "aguantar" pasivamente.',
                '2 Nefi 31: el bautismo es la puerta, no el destino final — usa esta metáfora con una puerta física o un dibujo de un camino.',
                'Anímalos a fijar una meta pequeña y concreta cada semana (oración diaria, lectura, asistencia) en lugar de intentar cambiar todo de golpe.',
              ],
            },
            {
              type: 'dialogue',
              title: 'Preguntas y objeciones comunes',
              lines: [
                { speaker: 'Investigador', side: 'left', text: '¿Qué pasa si peco después de bautizarme?' },
                { speaker: 'Misionero', side: 'right', text: 'El convenio del sacramento (3 Nefi 18; DyC 20:77) existe precisamente para eso: renovar el convenio bautismal cada semana. El plan de salvación asume que seguiremos necesitando arrepentirnos; perseverar no significa ser perfecto, significa seguir avanzando y volviendo a Cristo cada vez que sea necesario.' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's7',
      title: 'El Carácter de Dios y de Jesucristo',
      intro: {
        romanNumeral: 'VII',
        title: 'El Carácter de Dios y de Jesucristo',
        paragraphs: [
          'Conocer a Dios no es memorizar información doctrinal: es tener una relación personal y profunda con Él.',
        ],
      },
      topics: [
        {
          id: 't7',
          title: 'Conocer a Cristo de forma íntima y relacional',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '3 Nefi 11:10–11 (versículo ancla)',
              text: 'El Cristo resucitado se presenta al pueblo nefita: "He aquí, yo soy Jesucristo, a quien los profetas testificaron que vendría al mundo... he bebido de esa copa amarga que el Padre me ha dado."',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea/griega: יָדַע (yadá) — γινώσκω (ginóskō)',
              body: '"Conocer" en Juan 17:3 traduce el griego ginóskō, que refleja el hebreo yadá — un conocimiento íntimo, relacional y experiencial (la misma raíz usada para describir la intimidad conyugal en Génesis 4:1), no meramente información teórica. La vida eterna no es "saber datos sobre Dios" sino tener una relación personal y profunda con Él.',
            },
            { type: 'highlight_verse', reference: 'Juan 17:3', text: '"Y esta es la vida eterna: que te conozcan a ti, el único Dios verdadero, y a Jesucristo, a quien has enviado."' },
            { type: 'highlight_verse', reference: 'Mosíah 3:5–8', text: 'El rey Benjamín profetiza el nacimiento de Cristo de María, sus milagros, su nombre — "y se llamará Jesucristo, el Hijo de Dios".' },
            { type: 'highlight_verse', reference: 'Isaías 53:3–5', text: 'El Siervo Sufriente, "varón de dolores, experimentado en quebranto... mas él herido fue por nuestras rebeliones" — profecía mesiánica cumplida en la expiación de Cristo.' },
            { type: 'highlight_verse', reference: 'Hebreos 1:1–3', text: 'Dios habló por los profetas en el pasado, pero en estos días finales nos ha hablado por el Hijo, quien es "la imagen misma de su sustancia".' },
            { type: 'highlight_verse', reference: 'Mateo 5–7 (Sermón del Monte)', text: 'Las enseñanzas éticas de Jesús — mansedumbre, misericordia, pureza de corazón — revelan su carácter tanto como sus milagros.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                '3 Nefi 11 es poderoso: muestra que el Libro de Mormón es "otro testamento de Jesucristo", centrado en su venida real a otro pueblo.',
                'Usa Isaías 53 con investigadores que ya tienen fondo bíblico cristiano — genera puntos de conexión inmediatos y profundos.',
                'Enfatiza, apoyándote en yadá/ginóskō, que conocer a Dios (Juan 17:3) es una relación vivida, no solo información doctrinal memorizada.',
                'Combina las enseñanzas éticas de Jesús (Mateo 5–7) con la doctrina — el carácter de Cristo se ve tanto en cómo trató a la gente como en lo que enseñó.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's8',
      title: 'Los Mandamientos',
      intro: {
        romanNumeral: 'VIII',
        title: 'Los Mandamientos',
        paragraphs: [
          'Los mandamientos no son reglas arbitrarias: son el patrón que consagra la vida cotidiana — cuerpo, tiempo y recursos — para un propósito sagrado.',
        ],
      },
      topics: [
        {
          id: 't8',
          title: 'Consagración, no restricción',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 89:18–21 (versículo ancla)',
              text: 'A quienes guardan la Palabra de Sabiduría se les promete salud en el ombligo y médula en los huesos, sabiduría y grandes tesoros de conocimiento, y que correrán y no se cansarán, caminarán y no se fatigarán.',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea: קָדוֹשׁ (qadosh)',
              body: '"Santo" en hebreo es qadosh, cuya raíz significa "apartado" o "separado para un propósito especial". Los mandamientos no son reglas arbitrarias; son el patrón que "aparta" o consagra la vida cotidiana — cuerpo, tiempo y recursos — para un propósito sagrado. Por eso la Palabra de Sabiduría, el diezmo y el día de reposo se agrupan: todos consagran algo (salud, dinero, tiempo) a Dios.',
            },
            { type: 'highlight_verse', reference: 'DyC 89 (completo, especialmente 18–21)', text: 'Ley de salud revelada a José Smith: evitar bebidas alcohólicas, tabaco, café, té, y usar la carne con moderación; comer granos, frutas y hierbas con prudencia y agradecimiento.' },
            { type: 'highlight_verse', reference: '1 Corintios 6:18–20', text: '"¿O ignoráis que vuestro cuerpo es templo del Espíritu Santo?" — huid de la fornicación porque el cuerpo pertenece a Dios.' },
            { type: 'highlight_verse', reference: 'Alma 39:5', text: 'La castidad y la virtud son lo más precioso e importante que hay sobre todas las cosas.' },
            { type: 'highlight_verse', reference: 'Malaquías 3:8–10', text: '"¿Robará el hombre a Dios?... traed todos los diezmos al alfolí... y probadme ahora en esto, dice Jehová de los ejércitos, si no os abriré las ventanas de los cielos."' },
            { type: 'highlight_verse', reference: 'Éxodo 20:8–11', text: 'Acordarte del día de reposo para santificarlo — seis días trabajarás, mas el séptimo es reposo para Jehová tu Dios.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Estos mandamientos se enseñan generalmente DESPUÉS del compromiso bautismal, no en la primera lección — dosifica con sabiduría.',
                'Usa la raíz hebrea qadosh ("apartado para un propósito sagrado") para presentar los mandamientos como consagración, no como restricción arbitraria.',
                'Enseña la Palabra de Sabiduría explicando la bendición prometida de salud y sabiduría (DyC 89:18–21), no solo la lista de prohibiciones.',
                'El diezmo se enseña mejor apelando a la fe: Malaquías 3 invita a "probar" a Dios — es una invitación con promesa, no una carga impuesta.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's9',
      title: 'Familias Eternas y Templos',
      intro: {
        romanNumeral: 'IX',
        title: 'Familias Eternas y Templos',
        paragraphs: [
          'El templo es el lugar donde las familias se sellan "por tiempo y por toda la eternidad", no solo "hasta que la muerte los separe". Este tema conecta emocionalmente muy fuerte con investigadores que han perdido seres queridos — ve con sensibilidad y calma.',
        ],
      },
      topics: [
        {
          id: 't9',
          title: 'Sellamiento, historia familiar y el corazón vuelto a los padres',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 131:1–4 (versículo ancla)',
              text: 'En el reino celestial hay tres cielos o grados; para obtener el más alto, un hombre debe entrar en el nuevo y sempiterno convenio del matrimonio — de lo contrario no puede tener aumento en el mundo venidero.',
            },
            {
              type: 'doctrine_box',
              title: 'Raíz hebrea: חֶסֶד (jésed)',
              body: 'Malaquías 4:5–6 habla de volver el corazón de padres a hijos — este "volver" está profundamente ligado al concepto hebreo de jésed: lealtad de convenio, amor leal que une generaciones. La obra de historia familiar y sellamiento en el templo es, en esencia, extender jésed más allá de la muerte, uniendo a la familia en convenio eterno.',
            },
            { type: 'highlight_verse', reference: 'Malaquías 4:5–6', text: 'Antes del día grande y terrible de Jehová, Él enviará al profeta Elías, y este hará volver el corazón de los padres hacia los hijos, y el de los hijos hacia los padres.' },
            { type: 'highlight_verse', reference: 'Mateo 16:19', text: 'Jesús da a Pedro las llaves del reino de los cielos: "lo que ates en la tierra será atado en los cielos" — la autoridad de sellar (unir) existió en la Iglesia primitiva.' },
            { type: 'highlight_verse', reference: '1 Corintios 15:29', text: '"De otro modo, ¿qué harán los que se bautizan por los muertos?" — referencia histórica clara al bautismo vicario en la iglesia del Nuevo Testamento.' },
            { type: 'highlight_verse', reference: 'DyC 138 (visión de la redención de los muertos)', text: 'Visión del presidente José F. Smith sobre la obra que se realiza en el mundo espiritual para llevar el evangelio a quienes murieron sin conocerlo.' },
            { type: 'highlight_verse', reference: 'Génesis 2:24', text: '"Por tanto, dejará el hombre a su padre y a su madre, y se unirá a su mujer, y serán una sola carne" — el matrimonio en su diseño original no tenía cláusula de caducidad.' },
            {
              type: 'key_points',
              title: 'Cómo enseñarlo en el campo',
              points: [
                'Este tema conecta emocionalmente muy fuerte con investigadores que han perdido seres queridos — ve con sensibilidad y calma.',
                'Explica el templo como el lugar donde las familias se sellan "por tiempo y por toda la eternidad", apoyándote en Génesis 2:24 y Mateo 16:19.',
                'Usa Malaquías 4 junto con la raíz hebrea jésed para introducir la obra de historia familiar y templos de forma sencilla y profunda a la vez.',
                '1 Corintios 15:29 es un excelente punto de conexión con investigadores de fondo cristiano protestante o católico: el bautismo por los muertos no es una invención moderna.',
              ],
            },
          ],
        },
      ],
    },
  ],
}
