import type { Lesson } from '@/types/doctrine'

export const pedroLaNegacion: Lesson = {
  id: 'pedro-la-negacion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pedro',
  title: 'La Negación',
  subtitle: 'Tres veces, junto a la hoguera',
  description:
    'El mismo hombre que confesó "Tú eres el Cristo" negó conocer a Jesús tres veces en una sola noche. La negación de Pedro es la historia más honesta del Nuevo Testamento sobre el fracaso espiritual — y sobre la restauración que lo sigue.',
  level: 'INTERMEDIO',
  icon: '🔥',
  duration: 30,
  order: 5012,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Predicción de Jesús',
      intro: {
        romanNumeral: 'I',
        title: '"Esta Noche, Antes que el Gallo Cante, me Negarás Tres Veces"',
        paragraphs: [
          'Jesús predijo la negación de Pedro con precisión quirúrgica. Pedro la rechazó con vehemencia. Ninguno de los dos estaba equivocado sobre quién era Pedro — solo sobre lo que haría en las próximas horas.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La predicción y la protesta de Pedro',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 26:33-35',
              text: 'Respondiendo Pedro, le dijo: Aunque todos se escandalicen de ti, yo nunca me escandalizaré. Jesús le dijo: De cierto te digo que esta noche, antes que el gallo cante, me negarás tres veces. Pedro le dijo: Aunque me sea necesario morir contigo, no te negaré. Y todos los discípulos dijeron lo mismo.',
            },
            {
              type: 'paragraph',
              text: 'La protesta de Pedro no es hipocresía — es autopercepción genuinamente equivocada. Pedro en este momento cree sinceramente lo que dice. El problema no es su intención sino su conocimiento de sí mismo. No sabe cuánto le costará. No ha evaluado el miedo que sentirá cuando la muchedumbre armada llegue a Getsemaní, cuando los soldados encadenen a Jesús, cuando el ambiente de peligro real se cierna sobre el patio del sumo sacerdote. La fe que funciona en condiciones normales puede colapsar en condiciones extremas.',
            },
            {
              type: 'doctrine_box',
              title: 'Conocerse a uno mismo: la lección de Pedro',
              body: 'El oráculo de Delfos decía "conócete a ti mismo." Pedro no se conocía. La confianza espiritual excesiva — la certeza de que yo nunca haría eso — es uno de los peligros más sutiles de la vida religiosa. DyC 3:4 advierte: "ten cuidado de no presumir de ti mismo." Alma 32:28 enseña a comenzar desde la duda, no desde la certeza. Pedro aprendió esta lección de la manera más dura posible.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Getsemaní — Pedro Dormido',
      intro: {
        romanNumeral: 'II',
        title: '"¿Así que No Pudisteis Velar Conmigo una Hora?"',
        paragraphs: [
          'Horas antes de la negación, en el huerto de Getsemaní, Pedro falló a Jesús de una manera más silenciosa: durmiendo cuando debería haber orado.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El sueño en Getsemaní',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 26:37-41',
              text: 'Y tomando a Pedro, y a los dos hijos de Zebedeo, comenzó a entristecerse y a angustiarse en gran manera. Entonces Jesús les dijo: Mi alma está muy triste, hasta la muerte; quedaos aquí, y velad conmigo... Y vino a sus discípulos, y los halló durmiendo, y dijo a Pedro: ¿Así que no pudisteis velar conmigo una hora? Velad y orad, para que no entréis en tentación; el espíritu a la verdad está dispuesto, pero la carne es débil.',
            },
            {
              type: 'paragraph',
              text: 'Pedro durmió tres veces en Getsemaní — el mismo número de veces que negaría a Cristo pocas horas después. Los evangelios registran que Jesús les encontró dormidos en tres ocasiones y regresó a orar solo. La clave interpretativa la da el propio Jesús: "el espíritu a la verdad está dispuesto, pero la carne es débil." La voluntad de Pedro era genuina. Su carne lo venció. La oración es el mecanismo que mantiene al espíritu en control sobre la carne — y Pedro no oró.',
            },
            {
              type: 'deep_dive',
              title: 'Getsemaní: el huerto del lagar',
              paragraphs: [
                'La palabra "Getsemaní" en arameo significa "prensa de aceite" — el lugar donde se prensaban las aceitunas para extraer el aceite. El simbolismo es elocuente: Jesús fue al lugar de la presión. Lucas 22:44 describe que "su sudor era como grandes gotas de sangre que caían hasta la tierra." La condición médica conocida como hematidrosis puede ocurrir bajo estrés extremo.',
                'El huerto estaba al pie del monte de los Olivos, justo al otro lado del torrente de Cedrón desde Jerusalén. Era un lugar que Jesús frecuentaba; Juan 18:2 indica que Judas "conocía aquel lugar, porque muchas veces Jesús se había reunido allí con sus discípulos." No fue una elección aleatoria — fue el lugar habitual de oración de Jesús.',
                'Pedro, Santiago y Juan fueron llevados aparte del resto, más cerca de Jesús. Eran los mismos tres que habían sido testigos de la Transfiguración. Eran los testigos del esplendor — y ahora eran los testigos del sufrimiento. Los dos momentos definen juntos quién es Jesús.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Tres Negaciones',
      intro: {
        romanNumeral: 'III',
        title: 'El Patio del Sumo Sacerdote — Tres Preguntas, Tres Negaciones',
        paragraphs: [
          'Juan 18 narra las tres negaciones con detalle clínico. La hoguera de carbones encendidos, las preguntas de los siervos, las respuestas de Pedro. Y el canto del gallo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La primera negación: "No lo conozco"',
          blocks: [
            {
              type: 'paragraph',
              text: 'Juan 18:15-17 indica que Pedro entró al patio del sumo sacerdote porque otro discípulo (probablemente Juan) era conocido del sumo sacerdote y habló a la portera. La primera pregunta vino de una sirvienta: "¿No eres tú también de los discípulos de este hombre?" La respuesta de Pedro fue: "No lo soy." No una evasión, no un silencio — una negación directa ante una sirvienta, la persona con menos poder social en ese patio.',
            },
            {
              type: 'paragraph',
              text: 'Las tres negaciones tienen escalada dramática. La primera es ante una sirvienta. La segunda es ante un grupo de personas que estaban calentándose junto al fuego. La tercera viene de un pariente del hombre al que Pedro había herido cortándole la oreja en Getsemaní (Juan 18:26) — la pregunta más cargada de todas. Cada negación fue más pública y más comprometida que la anterior.',
            },
            {
              type: 'highlight_verse',
              reference: 'Lucas 22:60-62',
              text: 'Y Pedro dijo: Hombre, no sé lo que dices. Y en seguida, mientras él todavía hablaba, el gallo cantó. Entonces, vuelto el Señor, miró a Pedro; y Pedro se acordó de la palabra del Señor... Y Pedro, saliendo fuera, lloró amargamente.',
            },
          ],
        },
        {
          id: 't4',
          title: 'El gallo canta — "vuelto el Señor, miró a Pedro"',
          blocks: [
            {
              type: 'paragraph',
              text: 'Lucas es el único evangelista que incluye este detalle escalofriante: en el momento exacto de la tercera negación, Jesús — que estaba siendo conducido por el patio — giró y miró a Pedro. No sabemos qué había en ese mirada. Lucas no lo describe. Pero el efecto fue inmediato: Pedro "se acordó" de la palabra del Señor. El recuerdo lo quebró. Salió y lloró amargamente.',
            },
            {
              type: 'central_quote',
              text: '"Vuelto el Señor, miró a Pedro."',
              attribution: 'Lucas 22:61 — el detalle más importante de la narrativa de la negación',
            },
            {
              type: 'doctrine_box',
              title: 'La mirada que restaura',
              body: 'El "miró a Pedro" de Lucas es uno de los momentos más teológicamente densos del Nuevo Testamento. No hay palabras, no hay juicio pronunciado, no hay condena. Solo una mirada. Pero esa mirada desencadenó la memoria, el remordimiento y el arrepentimiento. En la economía del amor divino, a veces la mirada correcta en el momento correcto hace más que mil palabras. Jesús no necesitó decir "te lo dije." El amor que mira lo dice todo.',
            },
            {
              type: 'reflection',
              prompt: '¿Ha habido algún momento en tu vida en que una "mirada" — de Dios, de un ser querido, del Espíritu Santo — te hizo recordar quién eras y qué prometiste? ¿Cómo respondiste?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Restauración de Pedro — Juan 21',
      intro: {
        romanNumeral: 'IV',
        title: '"¿Me Amas?" — Tres Preguntas junto al Mar de Galilea',
        paragraphs: [
          'Después de la resurrección, Jesús encontró a Pedro junto al mar — el mismo lugar donde lo había llamado. La restauración fue tan precisa como la negación: tres preguntas de amor, tres encargos, tres respuestas.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El desayuno en la orilla',
          blocks: [
            {
              type: 'paragraph',
              text: 'Juan 21 es un capítulo construido con simetría deliberada. Pedro había negado a Jesús junto a una "hoguera de carbones encendidos" (Juan 18:18, anthrakian en griego). En Juan 21:9, cuando los discípulos llegan a la orilla después de otra pesca milagrosa, encuentran a Jesús junto a una "hoguera de carbones encendidos" (anthrakian, la misma palabra, el único lugar en el Nuevo Testamento donde aparece). Juan no es descuidado con las palabras. La escena evoca deliberadamente la noche de la negación.',
            },
            {
              type: 'highlight_verse',
              reference: 'Juan 21:15-17',
              text: 'Cuando hubieron comido, Jesús dijo a Simón Pedro: Simón, hijo de Jonás, ¿me amas más que éstos? Le respondió: Sí, Señor; tú sabes que te amo. Él le dijo: Apacienta mis corderos. Volvió a decirle la segunda vez: Simón, hijo de Jonás, ¿me amas? Pedro le respondió: Sí, Señor; tú sabes que te amo. Le dijo: Pastorea mis ovejas. Le dijo la tercera vez: Simón, hijo de Jonás, ¿me amas? Pedro se entristeció de que le dijese la tercera vez: ¿Me amas? y le respondió: Señor, tú sabes todas las cosas; tú sabes que te amo. Jesús le dijo: Apacienta mis ovejas.',
            },
          ],
        },
        {
          id: 't6',
          title: 'La simetría perfecta de la restauración',
          blocks: [
            {
              type: 'paragraph',
              text: 'El griego del texto revela un matiz importante: en las dos primeras preguntas, Jesús usa "agapas" (amor incondicional, ágape). Pedro responde con "philo" (amor de amistad, afecto). En la tercera pregunta, Jesús baja al nivel de Pedro y usa "phileis" — el término que Pedro había estado usando. Pedro se entristece no solo porque es la tercera vez, sino porque siente que Jesús está cuestionando incluso el nivel más modesto de amor que él puede ofrecer. La tercera respuesta de Pedro es la más honesta: "Señor, tú sabes todas las cosas; tú sabes que te amo." Pedro ya no argumenta. Ya no promete. Solo señala que Jesús sabe más sobre el corazón de Pedro que Pedro mismo.',
            },
            {
              type: 'steps',
              title: 'El patrón de la restauración divina en Juan 21',
              steps: [
                'Jesús aparece en el lugar del fracaso original — el Mar de Galilea, junto a una hoguera',
                'Produce otro milagro de pesca extraordinaria — el llamamiento se renueva en el mismo idioma simbólico del llamamiento original (Lucas 5)',
                'Ofrece comunión primero — "venid, comed" — antes de cualquier reprensión o interrogatorio',
                'Hace tres preguntas exactamente — paralelas simétricas a las tres negaciones',
                'El encargo pastoral ("apacienta mis ovejas") reemplaza y transforma el fracaso: la restauración no borra el pasado, sino que le da un nuevo significado',
                '"Sígueme" es la última palabra de Jesús a Pedro — la misma con que comenzó todo',
              ],
            },
            {
              type: 'central_quote',
              text: '"Señor, tú sabes todas las cosas; tú sabes que te amo."',
              attribution: 'Pedro a Jesús — Juan 21:17',
            },
            {
              type: 'reflection',
              prompt: 'El Pedro de Juan 21 ya no dice "aunque todos te abandonen, yo no." Ha aprendido la humildad del fracaso. ¿Cómo ha cambiado tu propia forma de hacer promesas espirituales después de haber fallado en alguna? ¿Cómo la experiencia del fracaso y la restauración te hace más o menos capaz de servir?',
            },
          ],
        },
      ],
    },
  ],
}
