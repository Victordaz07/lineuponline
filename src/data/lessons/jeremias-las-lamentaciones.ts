import type { Lesson } from '@/types/doctrine'

export const jeremiasLasLamentaciones: Lesson = {
  id: 'jeremias-las-lamentaciones',
  moduleId: 'personajes-escrituras',
  title: 'Las Lamentaciones',
  subtitle: 'El dolor más puro de las Escrituras',
  description: 'Lamentaciones es un libro de cinco poemas escritos entre las ruinas humeantes de Jerusalén en 586 a.C. Cada uno es un acróstico hebreo sobre el alphabet. En el centro del dolor más absoluto, Lamentaciones 3:22-23 produce uno de los mayores gritos de esperanza de toda la Biblia.',
  level: 'AVANZADO',
  icon: '😭',
  duration: 35,
  order: 4312,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'jeremias',
  studySections: [
    {
      id: 's1',
      title: 'El contexto histórico',
      intro: {
        romanNumeral: 'I',
        title: 'Jeremías Vio Arder Jerusalén',
        paragraphs: [
          '586 a.C. — la peor catástrofe de la historia de Israel. Jeremías estaba presente.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La destrucción de lo más sagrado',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el año 586 a.C., el ejército de Nabucodonosor penetró las murallas de Jerusalén después de un asedio de 18 meses. Quemó el templo de Salomón — el lugar donde la gloria de Dios había habitado durante cuatro siglos. Demolió las murallas. Ejecutó a los hijos del rey Sedequías delante de sus ojos y luego le arrancó los ojos para que esa fuera su última visión. Deportó a Babilonia a casi toda la población sobreviviente. Jeremías estaba allí para ver todo esto.',
            },
            {
              type: 'highlight_verse',
              reference: 'Lamentaciones 1:1-2',
              text: '¡Cómo ha quedado sola la ciudad populosa! La grande entre las naciones se ha vuelto como viuda, la señora de provincias ha sido hecha tributaria. Amargamente llora en la noche, y sus lágrimas están en sus mejillas. No tiene quien la consuele de todos sus amantes; todos sus amigos le faltaron, se le volvieron enemigos.',
            },
            {
              type: 'paragraph',
              text: 'Jerusalén es personificada como una mujer — una señora que fue reina y ahora está viuda, sentada entre escombros. La imagen es deliberada: el primer párrafo de Lamentaciones establece que lo que se perdió no era simplemente una ciudad sino una identidad. Israel había sido el pueblo de la alianza de Dios en el mundo. Esa identidad ahora yacía en cenizas.',
            },
            {
              type: 'doctrine_box',
              title: 'Lamentaciones en el canon y en la liturgia',
              body: 'Lamentaciones es leído cada año en la liturgia judía el 9 de Av (Tisha B\'Av), el ayuno que conmemora tanto la destrucción del primer templo (586 a.C.) como del segundo (70 d.C.). El libro nunca menciona el nombre de su autor, pero la tradición judía y cristiana lo atribuye a Jeremías. La Septuaginta (traducción griega del AT) comienza el libro con: "Y aconteció que después que Israel fue llevado cautivo y Jerusalén fue destruida, Jeremías se sentó llorando y entonó este lamento sobre Jerusalén."',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La estructura poética — cinco acrósticos hebreos',
      intro: {
        romanNumeral: 'II',
        title: 'El Dolor Ordenado en el Alfabeto',
        paragraphs: [
          'Los cinco poemas de Lamentaciones están organizados como acrósticos del alfabeto hebreo de 22 letras — el dolor más extremo puesto en la forma más disciplinada.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El genio formal de Lamentaciones',
          blocks: [
            {
              type: 'paragraph',
              text: 'El alfabeto hebreo tiene 22 letras. Los capítulos 1, 2 y 4 tienen cada uno 22 versículos, comenzando cada versículo con la letra hebrea en orden secuencial (alef, bet, guímel... hasta tav). El capítulo 3 tiene 66 versículos — tres versículos por letra. El capítulo 5 tiene 22 versículos pero no es acróstico, como si al final la forma misma se hubiera roto junto con todo lo demás.',
            },
            {
              type: 'deep_dive',
              title: '¿Por qué ordenar el dolor en un acróstico?',
              paragraphs: [
                'Varios estudiosos han propuesto explicaciones para la forma acróstica. Una interpretación: el acróstico representa el sufrimiento "de la A a la Z" — el dolor total, completo, exhaustivo. Otra: la forma poética muy disciplinada es una manera de contener el caos emocional sin negarlo. Cuando todo colapsa, la estructura del lenguaje es lo último que se sostiene.',
                'Una tercera interpretación, quizás la más profunda: en la cultura del Oriente Antiguo, poner algo en forma poética elaborada era un acto de preservación y dignificación. Jeremías no quería que el sufrimiento de Jerusalén fuera olvidado o minimizado. Lo puso en la forma más memorable y permanente disponible para que generaciones futuras lo recordaran con toda su profundidad.',
                'La paradoja formal de Lamentaciones — el dolor más extremo en la forma más disciplinada — es en sí misma un mensaje teológico: el caos de la tragedia puede ser habitado, nombrado y transmitido. El sufrimiento tiene dignidad.',
              ],
            },
            {
              type: 'key_points',
              title: 'Estructura del libro',
              points: [
                'Capítulo 1 (22 vv.): Lamento de Jerusalén — "No tiene quien la consuele"',
                'Capítulo 2 (22 vv.): La ira de Dios como agente de la destrucción',
                'Capítulo 3 (66 vv.): El lamento personal más profundo, con el giro de esperanza en los vv. 22-24',
                'Capítulo 4 (22 vv.): Contraste entre el pasado glorioso y el presente desolado',
                'Capítulo 5 (22 vv.): Oración colectiva pidiendo restauración — la forma se rompe con el dolor',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Lamentaciones 3:22-23 — La esperanza en la ceniza',
      intro: {
        romanNumeral: 'III',
        title: '"Nuevas Son Cada Mañana" — Nacido en la Destrucción Total',
        paragraphs: [
          'El versículo más citado de esperanza en toda la Biblia nació en el peor momento de la historia de Israel.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El mayor giro de esperanza de la Biblia',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lamentaciones 3:22-24',
              text: 'Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana; grande es tu fidelidad. Mi porción es Jehová, dijo mi alma; por tanto, en él esperaré.',
            },
            {
              type: 'paragraph',
              text: 'El contexto inmediato de Lamentaciones 3:22-24 es devastador. Los versículos 1-20 describen: ser conducido a las tinieblas, haber hecho consumir la carne y la piel, haber quebrado los huesos, vivir en lugares oscuros como los muertos, estar cercado sin salida, ser objeto de burla. Inmediatamente después de ese catálogo de horror — en el versículo 21 — aparece la palabra hebrea "zot" (esto): "Esto recapacito en mi corazón, por lo tanto, esperaré."',
            },
            {
              type: 'paragraph',
              text: '"Grande es tu fidelidad" (rabbah emunatekha) es uno de los gritos de fe más conocidos de la historia cristiana. El himno "Grande es tu fidelidad" (Thomas Chisholm, 1923) usa este versículo como base. Lo que pocas personas saben es que Chisholm lo tomó directamente de Lamentaciones — de un hombre sentado en las ruinas de su ciudad destruida rodeado de cadáveres. La esperanza más poderosa nace en el contexto más oscuro.',
            },
            {
              type: 'central_quote',
              text: '"Esto recapacito en mi corazón, por lo tanto, esperaré. Por la misericordia de Jehová no hemos sido consumidos, porque nunca decayeron sus misericordias. Nuevas son cada mañana."',
              attribution: 'Lamentaciones 3:21-23 — el giro más dramático de la literatura bíblica',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El poema del sufrimiento supremo — Lamentaciones 3:1-20',
      intro: {
        romanNumeral: 'IV',
        title: 'El Mayor Poema de Sufrimiento de la Biblia',
        paragraphs: [
          'Los primeros 20 versículos de Lamentaciones 3 no tienen paralelo en la literatura de fe: la descripción más extrema del abandono divino percibido — y lo que significa.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Nombrar el abandono sin negarlo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lamentaciones 3:1-3',
              text: 'Yo soy el hombre que ha visto aflicción bajo el látigo de su enojo. Me guió y me llevó en tinieblas, y no en luz. Ciertamente contra mí volvió y revolvió su mano todo el día.',
            },
            {
              type: 'paragraph',
              text: 'La acusación en Lamentaciones 3 no es contra Babilonia — es contra Dios. "Contra mí volvió y revolvió su mano" (v. 3). "Me cercó de amargura y de trabajo" (v. 5). "Me hizo habitar en oscuridades como los ya muertos" (v. 6). "Cercó mi camino con piedra labrada, torció mis sendas" (v. 9). "Me llenó de amarguras, me embriagó de ajenjos" (v. 15). Este es el hombre que Dios eligió como profeta acusando a Dios de ser su enemigo.',
            },
            {
              type: 'paragraph',
              text: 'El gran teólogo alemán Dietrich Bonhoeffer, al ser ejecutado por los nazis en 1945, tenía marcado en su Biblia el capítulo 3 de Lamentaciones. Martin Luther King Jr. predicó sobre este texto durante el movimiento de derechos civiles. Estas palabras han sostenido a personas en sus peores momentos precisamente porque no mienten sobre el dolor — lo nombran con toda su brutalidad antes de encontrar la esperanza.',
            },
            {
              type: 'doctrine_box',
              title: 'El duelo auténtico como acto de fe',
              body: 'La teología que emerge de Lamentaciones desafía una comprensión superficial del evangelio: que la fe debe verse siempre como confianza alegre. Lamentaciones afirma que el duelo auténtico — incluso el que incluye acusación y queja a Dios — coexiste con la fe. No son opuestos. El giro de esperanza en 3:21-24 no niega el dolor de 3:1-20: lo atraviesa. La fe bíblica no pasa por encima del sufrimiento; pasa a través de él.',
            },
            {
              type: 'reflection',
              prompt: '¿Ha habido en tu vida un período donde sentiste que Dios mismo era tu adversario — donde el sufrimiento se sentía como abandono divino, no solo como circunstancia difícil? ¿Cómo el modelo de Lamentaciones — nombrar ese dolor sin censurarlo, y luego encontrar el giro de esperanza — cambia tu comprensión de cómo se puede atravesar ese tipo de oscuridad con fe?',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La fe que coexiste con el dolor',
      intro: {
        romanNumeral: 'V',
        title: 'El Duelo No Excluye la Fe',
        paragraphs: [
          'Lamentaciones cierra con una pregunta — no una afirmación. El libro no termina con resolución completa.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El final sin cierre fácil',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Lamentaciones 5:19-21',
              text: 'Mas tú, Jehová, permanecerás para siempre; tu trono de generación en generación. ¿Por qué te olvidas completamente de nosotros, y nos abandonas tan largo tiempo? Vuélvenos, oh Jehová, a ti, y nos volveremos; renueva nuestros días como al principio.',
            },
            {
              type: 'paragraph',
              text: 'El libro de Lamentaciones termina con una pregunta sin respuesta: "¿Por qué nos abandonas tan largo tiempo?" En la liturgia judía, cuando se lee Lamentaciones el 9 de Av, se repite el versículo 21 después del 22 para que el libro no termine en abandono percibido sino en petición de restauración. Pero el texto hebreo original termina con la pregunta abierta. Dios no responde.',
            },
            {
              type: 'paragraph',
              text: 'Esto es teológicamente profundo: la Biblia preserva un libro que termina sin resolución completa. La fe no siempre recibe una respuesta en tiempo mortal. El duelo de Jeremías sobre Jerusalén no fue resuelto en su vida — él murió en Egipto, en el exilio. La restauración de Jerusalén que esperaba ocurrió 70 años después de su muerte. Su fidelidad y su dolor no produjeron fruto visible en su generación.',
            },
            {
              type: 'key_points',
              title: 'Lo que Lamentaciones enseña sobre la fe en el sufrimiento',
              points: [
                'El dolor auténtico debe nombrarse, no negarse ni minimizarse',
                'Acusar a Dios dentro de la oración no es infiducia — es oración honesta',
                'La esperanza bíblica no nace a pesar del dolor sino a través de él',
                'La fe puede coexistir con preguntas sin respuesta',
                'El duelo tiene dignidad — merece ser expresado con toda su profundidad',
                'La liturgia (leer estos textos regularmente) es una herramienta para procesar el sufrimiento colectivo',
              ],
            },
          ],
        },
      ],
    },
  ],
}
