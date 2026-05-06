import type { Lesson } from '@/types/doctrine'

export const elLibroDeMormon: Lesson = {
  id: 'libro-de-mormon-reliquia',
  moduleId: 'historia-restauracion',
  title: 'El Libro de Mormón — Piedra Angular',
  subtitle: 'Otro testamento de Jesucristo',
  author: 'Fuentes principales: Introducción del Libro de Mormón, Benson, Holland',
  description:
    'El Libro de Mormón es el mayor testamento físico de la veracidad del profeta José Smith y de la Restauración. Su origen, su contenido central, y por qué Ezra Taft Benson dijo que podemos acercarnos más a Dios a través de sus páginas que por cualquier otro libro.',
  level: 'BÁSICO',
  icon: '📜',
  duration: 65,
  order: 3,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'gran-apostasia',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Origen y la Traducción',
      intro: {
        romanNumeral: 'I',
        title: 'El Origen y la Traducción',
        paragraphs: [
          'El Libro de Mormón surgió de uno de los eventos más extraordinarios y verificables de la historia religiosa moderna: un joven de 21 años sin educación formal dictó 531 páginas de texto coherente, históricamente complejo y teológicamente profundo en aproximadamente 65 días de trabajo. Los testigos del proceso son múltiples, sus testimonios son consistentes, y murieron sin retirarlos.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Proceso de Traducción',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith no tradujo el Libro de Mormón como lo haría un lingüista — estudiando el idioma, buscando equivalentes en diccionarios. Lo tradujo "por el don y el poder de Dios", usando el Urim y Tumim y, más tarde, una piedra vidente. Oliver Cowdery, Emma Smith, Martin Harris y otros sirvieron como escribas y observaron el proceso directamente.',
            },
            {
              type: 'highlight_verse',
              text: 'Y cuando hubisteis hecho lo que os mandé, abristeis vuestras bocas y fuisteis sostenidos; y la obra se realizó por mi poder. Y de acuerdo con las cosas que estaban grabadas en las planchas, así fue la traducción, por mi Espíritu.',
              reference: 'Doctrina y Convenios 20:8',
            },
            {
              type: 'key_points',
              title: 'Lo que sabemos del proceso de traducción',
              points: [
                'Emma Smith (quien fue escriba) declaró que José dictaba sin notas, sin borrar, y continuaba exactamente donde había dejado después de interrupciones — a veces de días enteros',
                'La velocidad promedio fue de aproximadamente 8 páginas impresas por día de trabajo activo — incluyendo capítulos con estructuras hebreas complejas',
                'No hay evidencia de que José tuviera ninguna fuente escrita frente a él durante la traducción — la metodología observada era dictado directo',
                'Las 116 páginas perdidas de Lehi nunca fueron retraducidas — José comenzó desde Moisés 1 Nefi hacia adelante, lo que corresponde con la historia de las "planchas pequeñas de Nefi" preparadas siglos antes precisamente para esta contingencia',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Los Once Testigos — por qué su testimonio importa',
              body: 'Once hombres firmaron declaraciones de haber visto las planchas de oro. Los Tres Testigos (Oliver Cowdery, David Whitmer, Martin Harris) declararon haber visto el ángel Moroni y las planchas, y haber escuchado la voz de Dios confirmando la autenticidad. Los Ocho Testigos declararon haber manejado físicamente las planchas. Crítico: todos estos hombres tuvieron serias fricciones con José Smith en algún momento de sus vidas — algunos fueron excomulgados, otros se alejaron amargamente. Pero ninguno retiró jamás su testimonio de las planchas. Su testimonio era independiente de su lealtad a José.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: '¿Pudo Haberlo Escrito José?',
      intro: {
        romanNumeral: 'II',
        title: '¿Pudo Haberlo Escrito José?',
        paragraphs: [
          'La pregunta más directa sobre el Libro de Mormón es la que José Smith mismo planteó: o lo produjo por revelación divina, o lo produjo por otros medios. No hay un término medio intelectualmente honesto. Jeffrey Holland lo formuló con precisión: si el libro es falso, ninguna cantidad de virtud personal redime a José. Si es verdadero, ninguna acusación sobre su carácter lo invalida.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El Argumento de la Complejidad',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith tenía el equivalente a un tercer grado de educación formal cuando comenzó la traducción. Vivía en una comunidad agrícola rural en el norte del estado de Nueva York. Sus cartas personales muestran gramática deficiente y ortografía inconsistente hasta bien entrada su vida adulta. Y sin embargo dictó un texto de más de 500 páginas con más de 200 personajes nombrados, una geografía interna coherente, múltiples estilos narrativos distinguibles, y estructuras poéticas hebreas que los académicos del siglo XX no identificarían hasta más de 100 años después.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Lo que necesitarías para inventarlo',
                items: [
                  'Conocimiento profundo de costumbres del Antiguo Oriente Medio',
                  'Capacidad de mantener coherencia geográfica y de personajes a lo largo de 531 páginas',
                  'Conocimiento de estructuras poéticas hebreas (quiasmo, paralelismo, merismo)',
                  'Acceso a investigación arqueológica de Arabia (descubierta décadas después)',
                  'Velocidad de dictado: 8 páginas por día sin borrador ni revisión',
                ],
              },
              right: {
                title: 'Lo que José Smith tenía en 1829',
                items: [
                  'Educación equivalente a tercer grado de primaria',
                  'Sin viajes fuera de su región rural de Nueva York',
                  'Sin acceso documentado a textos académicos sobre hebreo bíblico',
                  'Sin conocimiento de la geografía de Arabia',
                  'Sin ningún borrador conocido — Emma confirmó que no usaba notas',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Apologética',
              title: 'Las teorías alternativas y por qué no sobreviven',
              paragraphs: [
                '"View of the Hebrews" (Ethan Smith, 1823): Los críticos señalaron similitudes temáticas — ambos textos mencionan israelitas llegando a América. Pero las similitudes son superficiales. "View of the Hebrews" es un libro de apologética cristiana con tesis explícita; el Libro de Mormón es narrativa histórica. No hay coincidencias textuales. Y B.H. Roberts, quien estudió más sistemáticamente esta teoría, concluyó que no explicaba el origen del libro.',
                'La "Teoría de Spaulding": Solomon Spaulding habría escrito una novela histórica que José habría copiado. Esta teoría colapsó cuando se descubrió el manuscrito de Spaulding en 1884 — y no tiene ninguna relación con el Libro de Mormón en trama, personajes, doctrina ni estilo.',
                'El "genio inventivo" de José: Esta es la teoría más honesta de las alternativas, pero también la más difícil de sostener. No explica las estructuras hebreas identificadas por Hugh Nibley y John Welch en el siglo XX, ni la inscripción "NHM" en Arabia (descubierta en 1999) que corresponde al "Nahom" del Libro de Mormón, ni la coherencia interna de una narrativa que no tiene contradicciones verificables en 200 años de escrutinio.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Declaro que el Libro de Mormón fue escrito para nuestra época. Sus páginas estaban destinadas a llegar a nosotros con el fresco aliento de los cielos. Rechazo cualquier sugerencia de que es un producto del siglo XIX, porque he leído detenidamente el texto y el siglo XIX no lo produjo. No podía haberlo producido.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Evidencias Internas — Quiasmos y Hebraísmos',
      intro: {
        romanNumeral: 'III',
        title: 'Evidencias Internas — Quiasmos y Hebraísmos',
        paragraphs: [
          'En 1967, un estudiante de BYU llamado John W. Welch descubrió quiasmos en el Libro de Mormón mientras estudiaba en Alemania. El quiasmo es una estructura poética hebrea en forma de A-B-C-B\'-A\' usada extensamente en el Antiguo Testamento. José Smith no tenía modo de conocer esta estructura en 1829 — los estudios académicos del quiasmo bíblico son del siglo XIX tardío y XX. Su presencia en el Libro de Mormón es una de las evidencias internas más difíciles de explicar sin origen antiguo.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Estructuras que José No Podía Conocer',
          blocks: [
            {
              type: 'doctrine_box',
              title: 'El quiasmo de Alma 36 — el más sofisticado del libro',
              body: 'Alma 36 es una narración de la conversión de Alma el Joven a su hijo Helaman. Welch identificó que el capítulo completo es un quiasmo de 20 elementos — el punto central (el clímax estructural y temático) es exactamente el versículo 18: "mientras me atormentaba así con el recuerdo de mis muchos pecados, he aquí, me vino al pensamiento también mi padre, que había hablado de la venida de un cierto Jesucristo." La estructura A-B-C...C\'-B\'-A\' hace que Cristo sea literalmente el centro matemático del texto, no solo el tema central.',
            },
            {
              type: 'key_points',
              title: 'Hebraísmos y características del texto antiguo',
              points: [
                'Paralelismo sinonímico: frases como "la bondad de Dios y su misericordia" repiten la misma idea con vocabulario diferente — patrón hebreo clásico (2 Nefi 9:8)',
                'Cognados étnicos: el nombre "Sariah" (madre de Nefi) no aparece en la Biblia en inglés pero sí en textos hebreos y arameos antiguos, descubiertos después de 1829',
                '"Y aconteció que": los críticos burlaron esta frase por su repetición. Es la traducción del hebreo "wayehi" — la forma narrativa estándar del hebreo bíblico. Su uso es consistente con un original hebreo, no con prosa inglesa del siglo XIX',
                'El texto NHM en Arabia: en 1999, arqueólogos descubrieron una inscripción del siglo VII a.C. con las consonantes NHM en exactamente la región donde el Libro de Mormón coloca "Nahom" — el lugar donde Ismael murió. La inscripción fue hecha siglos antes de que José pudiera haber "inventado" el nombre',
              ],
            },
            {
              type: 'paragraph',
              text: 'Ninguna de estas evidencias es en sí misma una prueba irrefutable. Cada una puede ser debatida. Pero el conjunto de evidencias internas — quiasmos, hebraísmos, geografía interna coherente, más de 200 personajes con características consistentes, y correspondencias arqueológicas — representa un patrón que es difícil de explicar como producto accidental de un granjero del siglo XIX sin educación formal.',
            },
            {
              type: 'highlight_verse',
              text: 'Y ahora bien, Jacob había dicho mucho antes de nosotros: mas muchas de las grandes cosas que Jacob dijo acerca de esto han sido quitadas de las escrituras; por lo tanto, esta historia de Jacob y de su simiente, desde aquel tiempo hasta el presente, estarán consignadas brevemente en estas planchas.',
              reference: 'Omni 1:2',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Cristo en el Libro de Mormón',
      intro: {
        romanNumeral: 'IV',
        title: 'Cristo en el Libro de Mormón',
        paragraphs: [
          'El subtítulo del Libro de Mormón lo dice todo: "Otro Testamento de Jesucristo." No es un libro sobre los nativos americanos. No es historia alternativa. Es un testamento de Cristo — su misión, su expiación, su evangelio — narrado por profetas que lo conocían por revelación y algunos por visión directa. Ningún otro texto religioso fuera de la Biblia contiene tanta cristología por página.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Lo Que el Libro de Mormón Enseña sobre Cristo',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Hablamos de Cristo, nos regocijamos en Cristo, predicamos de Cristo, profetizamos de Cristo, y escribimos según nuestras profecías, para que nuestros hijos puedan saber a qué fuente recurrir para la remisión de sus pecados.',
              reference: '2 Nefi 25:26',
            },
            {
              type: 'key_points',
              title: 'Lo que el Libro de Mormón enseña sobre Cristo que complementa la Biblia',
              points: [
                'La Expiación fue infinita — cubrió no solo el pecado sino también dolor, enfermedad, pena y todo sufrimiento humano (Alma 7:11-12)',
                'La fe no es creer sin evidencia — es un experimento espiritual con resultados verificables (Alma 32)',
                'El arrepentimiento produce gozo real, no solo alivio de culpa (Alma 36:17-21)',
                'Cristo visitó a otras naciones después de su resurrección — el pueblo en América no fue el único (3 Nefi 15:21-24)',
                'El evangelio restaurado es idéntico al original — no una versión revisada sino el mismo (3 Nefi 27:13-21)',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y él tomará sobre sí la muerte, a fin de soltar los lazos de la muerte que atan a su pueblo; y él tomará sobre sí sus enfermedades, para que su corazón sea lleno de misericordia conforme a la carne, a fin de que sepa según la carne cómo socorrer a su pueblo de acuerdo con sus enfermedades.',
              reference: 'Alma 7:12',
            },
            {
              type: 'paragraph',
              text: 'Alma 7:12 es uno de los versículos más importantes de toda la escritura sobre el alcance de la Expiación. No dice solo que Cristo sufrió por nuestros pecados — dice que tomó sobre sí nuestras enfermedades, dolores y afliciones, a fin de saber cómo ayudarnos según lo que experimentamos. Esto es algo que la Biblia enseña en principio (Hebreos 4:15) pero que el Libro de Mormón articula con una claridad doctrinal sin paralelo.',
            },
            {
              type: 'doctrine_box',
              title: 'La visita de Cristo en 3 Nefi — el relato más detallado de la resurrección',
              body: '3 Nefi 11-28 contiene el registro más extenso de cualquier visita post-resurrección de Cristo en todo el canon de escrituras. Jesús aparece al pueblo en América, les permite tocar sus heridas, les enseña el Sermón del Monte expandido, instituye la Santa Cena, ordena doce discípulos, y ora por ellos. Este registro complementa los Evangelios y ofrece perspectiva de cómo Cristo enseñaba a pueblos fuera de Jerusalén.',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón lleva al hombre más cerca de Dios mediante la observancia de sus preceptos que cualquier otro libro. Esto no es una afirmación arrogante sobre otros textos sagrados. Es una afirmación sobre función: este libro fue diseñado y preparado específicamente para nuestra época, con nuestros problemas, con las verdades que más necesitamos.',
              name: 'Ezra Taft Benson',
              role: '"The Keystone of Our Religion", Conferencia General, octubre 1986 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Escrito para Nuestros Días',
      intro: {
        romanNumeral: 'V',
        title: 'Escrito para Nuestros Días',
        paragraphs: [
          'Ezra Taft Benson enseñó que Mormón, al compilar las planchas, fue guiado por inspiración a incluir exactamente aquellos relatos y doctrinas que los lectores del siglo XX y XXI necesitarían más. No es una antología histórica aleatoria. Es un texto editado por un profeta que vio nuestros días y eligió específicamente qué preservar.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Los Mensajes que Mormón Preservó para Nosotros',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, el Señor me ha mostrado grandes cosas acerca de lo que ha de venir, y que habrá grandes guerras y tribulaciones entre este pueblo. Y yo, siendo un discípulo de Jesucristo, el Hijo de Dios, he sido llamado por él para declarar su palabra entre su pueblo, a fin de que tuviesen vida eterna.',
              reference: 'Mormon 8:35',
            },
            {
              type: 'paragraph',
              text: 'Moroni, escribiendo siglos antes de nuestro tiempo, dice directamente: "he aquí, el Señor me ha mostrado vuestro tiempo." Él conocía nuestros días. Eso significa que el libro no es solo un registro del pasado — es un mensaje dirigido específicamente a nosotros. Cada historia que Mormón eligió incluir tiene una razón.',
            },
            {
              type: 'key_points',
              title: 'Los temas que Benson identificó como mensajes para hoy',
              points: [
                'El ciclo del orgullo — el patrón de prosperidad → soberbia → caída → humildad → bendición se repite 14 veces en el libro. Es un diagnóstico de civilizaciones, incluyendo la nuestra',
                'Las combinaciones secretas (Helamán 6, Éter 8) — Moroni advirtió explícitamente que estas organizaciones existirían en nuestros días y buscarían controlar gobiernos y destruir libertades',
                'La Roca de Cristo (Helamán 5:12) — cuando todo lo demás se derrumbe, el fundamento sobre Cristo es lo único que permanece. Helaman lo dijo a sus hijos antes de que fueran capturados',
                'Los Anti-Nephi-Lehies (Alma 23-24) — el modelo más poderoso de conversión completa: enterraron sus espadas y juraron no volver a pecar. Benson los citó como ejemplo de conversión total, no superficial',
              ],
            },
            {
              type: 'highlight_verse',
              text: 'Y ahora, he aquí os digo que deberíais buscar en este libro; y cuando lo hayáis leído, pido a Dios el Eterno Padre que os bendiga con la comprensión de las cosas que son de él. Y si en algún defecto hay, es el error de hombres; por tanto, no condenéis las cosas de Dios.',
              reference: 'Título de la página del Libro de Mormón',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón no solo habla de gente que vivió hace mucho tiempo en tierras lejanas. Habla de ti. Habla del orgullo que destruye familias hoy. Habla de la fe que mueve montañas hoy. Habla del Salvador que quiere rescatarte hoy. Mormón lo vio todo. Y lo escribió para ti.',
              name: 'Ezra Taft Benson',
              role: '"The Book of Mormon — Keystone of Our Religion", Ensign, noviembre 1986 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'La Promesa de Moroni',
      intro: {
        romanNumeral: 'VI',
        title: 'La Promesa de Moroni',
        paragraphs: [
          'Moroni escribe las últimas palabras del Libro de Mormón solo, siglos después de la destrucción de su civilización, sabiendo que nadie leerá su registro en su tiempo. Lo que le importa en ese momento final es simple: que quien lea el libro en el futuro pueda saber que es verdadero. Y ofrece un método. No un argumento académico. Un experimento espiritual con una promesa específica.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'El Experimento Espiritual con Resultado Garantizado',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si pedís con un corazón sincero, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ello por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
              reference: 'Moroni 10:4–5',
            },
            {
              type: 'doctrine_box',
              title: 'Las tres condiciones de la promesa — y lo que significan realmente',
              body: '"Corazón sincero" — no curiosidad intelectual sino disposición genuina de actuar sobre la respuesta que recibas. No es sincero quien pregunta queriendo que la respuesta sea no. / "Verdadera intención" — Dallin Oaks enseñó que la intención real significa que si Dios confirma que es verdad, estás dispuesto a cambiar tu vida en consecuencia. La intención no es real si el compromiso es condicional. / "Fe en Cristo" — la promesa está anclada en Cristo, no en el libro. El Espíritu Santo confirma la verdad de Cristo primero — el libro es el vehículo, no el destino.',
            },
            {
              type: 'paragraph',
              text: 'Moroni escribe estas palabras al final de su registro — sabiendo que es el último en su civilización, que está solo, que no hay nadie más. Lo que le importa en ese momento final es que quienes lean el libro en el futuro tengan una manera de saber que es verdadero. La promesa es real porque el libro es real.',
            },
            {
              type: 'leader_quote',
              quote: 'Declaro que el Libro de Mormón es verdadero — lo declaro con toda la solemnidad que poseo. Sé que este libro sagrado fue traducido por el don y el poder de Dios. Sé que sus páginas contienen la plenitud del evangelio de Jesucristo para este tiempo. Y sé que quienes lo lean con sinceridad recibirán del Espíritu Santo una confirmación que cambiará su vida para siempre.',
              name: 'Jeffrey R. Holland',
              role: '"Safety for the Soul", Conferencia General, octubre 2009 (trad.)',
            },
            {
              type: 'quiz',
              id: 'q-ldm-testigos',
              question: {
                kind: 'true_false',
                statement: 'Todos los Once Testigos del Libro de Mormón mantuvieron su testimonio de las planchas hasta el final de sus vidas, incluso aquellos que se alejaron de la Iglesia.',
                correctAnswer: true,
                explanation: 'Ninguno de los Once Testigos —ni los que fueron excomulgados ni los que se alejaron amargamente de José Smith— retiró jamás su declaración de haber visto o tocado las planchas de oro. Su testimonio era independiente de su relación con José.',
              },
            },
            {
              type: 'quiz',
              id: 'q-ldm-quiasmo',
              question: {
                kind: 'fill_blank',
                prompt: 'El quiasmo de Alma 36 tiene como punto central — el clímax estructural y temático del capítulo — el recuerdo de...',
                options: [
                  'La muerte de su padre Alma el Mayor',
                  'El nombre de Jesucristo',
                  'Su bautismo en las aguas de Mormón',
                ],
                correctIndex: 1,
              },
            },
            {
              type: 'reflection',
              prompt: '¿Has cumplido la promesa de Moroni 10:4 con sinceridad real — no como ejercicio religioso sino como pregunta genuina? ¿Tenías "verdadera intención" — es decir, estabas dispuesto a cambiar tu vida si la respuesta era sí? Si ya tienes un testimonio, ¿cuándo fue la última vez que lo renovaste estudiando el Libro de Mormón con la misma sinceridad que la primera vez?',
            },
          ],
        },
      ],
    },
  ],
}
