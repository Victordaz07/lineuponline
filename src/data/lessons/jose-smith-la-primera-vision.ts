import type { Lesson } from '@/types/doctrine'

export const joseSmithLaPrimeraVision: Lesson = {
  id: 'jose-smith-la-primera-vision',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jose-smith',
  title: 'La Primera Visión — El Relato de José',
  subtitle: '14 años, un bosque, el cielo abierto',
  author: 'Fuentes: JS-H 1:5-26; DyC 20:1; Historia de la Iglesia 1:1-7',
  description:
    'En la primavera de 1820, un adolescente de 14 años entró solo a un bosque con una pregunta que ningún ministro había podido responder. Lo que ocurrió allí es la afirmación más importante del cristianismo restaurado: Dios y Cristo son seres separados, personales, y siguen hablando a los hombres.',
  level: 'BÁSICO',
  icon: '🌟',
  duration: 35,
  order: 8010,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'jose-smith-el-traductor',
  studySections: [
    {
      id: 's1',
      title: 'El mundo que formó a José Smith',
      intro: {
        romanNumeral: 'I',
        title: 'Western New York, 1820 — El Distrito Quemado',
        paragraphs: [
          'La familia Smith vivía en una región donde el entusiasmo religioso ardía con tal intensidad que los historiadores la llamaron "el distrito quemado." Ese fuego encendió en José Smith una pregunta que cambiaría el mundo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El contexto histórico: el "burnt-over district"',
          blocks: [
            {
              type: 'paragraph',
              text: 'El oeste del estado de Nueva York en las primeras décadas del siglo XIX fue escenario de uno de los períodos de efervescencia religiosa más intensos de la historia americana. Los historiadores seculares lo denominan el "burnt-over district" — el distrito quemado — porque los fuegos del avivamiento religioso habían barrido esa región tan repetidamente que el suelo espiritual parecía agotado. Denominaciones enteras nacieron y murieron en esa región entre 1800 y 1830.',
            },
            {
              type: 'paragraph',
              text: 'La familia de Joseph Smith Sr. y Lucy Mack Smith no era ajena a esta turbulencia. Joseph padre era un buscador espiritual que nunca se había afiliado formalmente a ninguna iglesia. Lucy se inclinaba hacia la presbiteriana. Los hijos mayores, Alvin y Hyrum, tenían sus propias inclinaciones. Esta fragmentación familiar era el microcosmos de la fragmentación religiosa de toda la región. El joven José Smith creció viendo a personas sinceras disentir apasionadamente sobre verdades que, si eran verdades, debían ser claras.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué importa el contexto: la pregunta era real',
              body: 'Los críticos han sugerido que la Primera Visión fue una respuesta oportunista al clima religioso de la época. Pero el contexto demuestra lo contrario: en un ambiente donde las conversiones masivas eran normales y los predicadores carismáticos tenían seguidores fáciles, José Smith no se unió a ninguno. La pregunta que se llevó al bosque — "¿cuál de todas estas iglesias es verdadera?" — era la más difícil de responder en un ambiente donde todas afirmaban serlo. No buscaba emociones religiosas; buscaba verdad.',
            },
            {
              type: 'timeline',
              items: [
                { label: '1805', text: 'Nacimiento de Joseph Smith Jr. en Sharon, Vermont', color: 'gold' },
                { label: '1816-1817', text: 'La familia Smith se traslada al oeste de Nueva York, cerca de Palmyra', color: 'blue' },
                { label: '1818-1819', text: 'Gran avivamiento religioso en el área — metodistas, presbiterianos y bautistas compiten', color: 'red' },
                { label: 'Invierno 1819-1820', text: 'José Smith, de 14 años, lee Santiago 1:5 y decide orar', color: 'gold' },
                { label: 'Primavera 1820', text: 'La Primera Visión en la Arboleda Sagrada', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Santiago 1:5 — el versículo que lo cambió todo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Santiago 1:5',
              text: 'Y si alguno de vosotros tiene falta de sabiduría, pídala a Dios, el cual da a todos abundantemente y sin reproche, y le será dada.',
            },
            {
              type: 'paragraph',
              text: 'JS-H 1:11-12 registra que cuando José Smith leyó Santiago 1:5 durante el invierno de 1819-1820, el versículo "penetró en mi corazón con más fuerza y poder que ningún otro pasaje de las escrituras." No fue una reacción casual a una bonita promesa. Fue la certeza de que Dios podía responder preguntas directamente — sin intermediarios, sin tradición eclesiástica, sin necesidad de que ningún ministro humano resolviera por él lo que él podía preguntar al Creador del universo.',
            },
            {
              type: 'paragraph',
              text: 'Lo que distingue la decisión de José Smith de orar en el bosque no es su misticismo — es su literalismo. Leyó la promesa del apóstol Santiago, la tomó al pie de la letra, y actuó. Esta disposición a actuar sobre la palabra de Dios sin esperar mediación humana es una de las señales más consistentes de su carácter a lo largo de toda su vida.',
            },
            {
              type: 'reflection',
              prompt: '¿Has leído alguna vez un versículo de las escrituras que "penetró en tu corazón con más fuerza" que los demás? ¿Actuaste sobre él o lo guardaste solo como idea?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Arboleda Sagrada',
      intro: {
        romanNumeral: 'II',
        title: 'JS-H 1:14-20 — "Vi dos Personajes"',
        paragraphs: [
          'En la primavera de 1820, José Smith se arrodilló en el bosque detrás de su casa. Lo que siguió fue la visión más doctrinalmente significativa desde la resurrección de Cristo.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La oración y la oscuridad que la precedió',
          blocks: [
            {
              type: 'paragraph',
              text: 'JS-H 1:14-15 describe el momento en que José se arrodilló con una claridad que revela al escritor maduro mirando hacia atrás: "Era una mañana hermosa y despejada, a principios de la primavera de mil ochocientos veinte." La belleza del día contrasta con lo que sucedió inmediatamente: una fuerza oscura que descendió sobre él, ligando su lengua y amenazando con su destrucción. José casi cedió a la desesperación total — y en ese momento extremo clamó a Dios con toda su fuerza.',
            },
            {
              type: 'paragraph',
              text: 'Este detalle — la oscuridad antes de la luz — no es literario ni decorativo. Aparece en todos los relatos principales de la visión. Para los Santos, es teológicamente significativo: la oposición al momento más sagrado de la Restauración sugiere que las fuerzas que se oponen a la obra de Dios reconocen su importancia incluso antes de que los hombres la reconozcan.',
            },
            {
              type: 'highlight_verse',
              reference: 'José Smith — Historia 1:16-17',
              text: 'Pero inmediatamente me vi suelto de ese enemigo que me había sujetado. Cuando llegué a mí mismo de nuevo, me hallé tendido sobre mi espalda, mirando hacia el cielo. Cuando la luz se posó sobre mí, vi dos Personajes, cuyo brillo y gloria desafían toda descripción, quienes estaban de pie sobre mí en el aire. Uno de ellos me habló, llamándome por mi nombre, y dijo, señalando al otro: Este es mi Hijo Amado. ¡Escúchale!',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Los dos Personajes y la respuesta',
          blocks: [
            {
              type: 'paragraph',
              text: 'La visión tiene tres elementos doctrinales inseparables: primero, que Dios el Padre y Jesucristo son seres separados y distintos, con cuerpos de gloria y no de materia espiritual difusa; segundo, que Dios todavía habla a los hombres de manera directa y personal, llamando a José "por su nombre"; tercero, que la respuesta a la pregunta — ¿a cuál iglesia unirme? — fue que a ninguna, porque todas se habían desviado de las enseñanzas originales del evangelio.',
            },
            {
              type: 'doctrine_box',
              title: 'La Respuesta Teológica más Importante del Siglo XIX',
              body: 'En un ambiente donde el creedo de Nicea (325 d.C.) definía la Trinidad como "tres personas en una sola sustancia" — una formulación filosófica griega sin paralelo en el Nuevo Testamento — la Primera Visión restauró la claridad apostólica: el Padre y el Hijo son dos seres personales, distintos, unidos en propósito y carácter pero no en sustancia. Esto no era una innovación de José Smith; era el regreso a lo que Esteban vio al morir (Hechos 7:55-56) y a lo que Juan vio en Apocalipsis.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta sobre las iglesias fue inequívoca: JS-H 1:19 — "que todas sus credos eran una abominación a su presencia." Esta frase ha causado más fricción entre los Santos y otras confesiones que casi cualquier otra en la historia de la Iglesia. Pero en su contexto teológico, la palabra "abominación" no se refería a los creyentes individuales sino a los sistemas doctrinales que proclamaban verdades inventadas por hombres como si fueran reveladas por Dios. El Cristo de la Primera Visión no condenó a las personas sinceras — condenó los sistemas que los habían alejado de la verdad.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti personalmente que Dios el Padre llamara a José Smith "por su nombre"? ¿Cambia la forma en que piensas en tu propia relación con el Padre?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La hostilidad inmediata',
      intro: {
        romanNumeral: 'III',
        title: 'JS-H 1:21-26 — La Respuesta del Mundo',
        paragraphs: [
          'La reacción del ministro local al relato de José Smith fue el primer cumplimiento de la profecía del Señor: que el nombre de José sería conocido "para bien y para mal."',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El ministro que lo rechazó',
          blocks: [
            {
              type: 'paragraph',
              text: 'Días después de la visión, José Smith cometió lo que él mismo reconocería como un error de ingenuidad: contó lo que había visto a un ministro metodista de confianza. La reacción fue inmediata y severa. JS-H 1:21 registra que el ministro "me trató con gran desprecio, diciendo que todo eso era del diablo, que en estos días no había tales cosas como visiones ni revelaciones; que todas esas cosas habían cesado con los apóstoles, y que nunca volvería a haberlas."',
            },
            {
              type: 'paragraph',
              text: 'El rechazo del ministro no era personal — era teológico. La doctrina del cese de los dones espirituales (cessationism) era la posición dominante en el protestantismo del siglo XIX. Si Dios había dejado de revelar, entonces cualquier afirmación de visión directa era necesariamente falsa o demoníaca. El ministro no consideró la posibilidad de que su premisa fuera incorrecta; aplicó su premisa al relato de José y concluyó que era mentira.',
            },
            {
              type: 'highlight_verse',
              reference: 'José Smith — Historia 1:25',
              text: 'Seguía siendo perseguido por personas que quizá no lo eran de corazón, pero que eran instigadas por el espíritu de diablo. Mas, sin embargo, era un hecho que yo había tenido una visión. Yo sabía que lo era, y yo sabía que Dios lo sabía, y no podía negarlo; hacerlo sería ofender a Dios, y no podría ser.',
            },
            {
              type: 'central_quote',
              text: 'Había visto una visión; lo sabía, y yo sabía que Dios lo sabía, y no podía negarlo.',
              attribution: 'José Smith — Historia 1:25',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Por qué el joven no cedió',
          blocks: [
            {
              type: 'paragraph',
              text: 'El argumento más poderoso que ofrece el relato de José Smith no es la visión en sí misma — es lo que sucedió después. Un adolescente de 14 años, sin educación formal, sin aliados institucionales, sin nada que ganar y mucho que perder, mantuvo durante 24 años de su vida una afirmación que le costó su reputación, su seguridad física, sus propiedades, y finalmente su vida. La consistencia es su propio tipo de evidencia.',
            },
            {
              type: 'key_points',
              title: 'Por qué la persistencia de José Smith es evidencia significativa',
              points: [
                'Nunca recantó, ni en momentos de máxima presión (juicios, cárcel, amenazas de muerte)',
                'No existía beneficio secular en mantener la afirmación — solo pérdida continua',
                'Los que más lo conocían íntimamente (Emma, Oliver Cowdery, los apóstoles) no reportaron contradicciones privadas con el relato público',
                'Quienes lo abandonaron lo acusaron de faltas morales — nunca de haber inventado la visión',
                'Su disposición al martirio en 1844 es el sello final de su convicción personal',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las múltiples cuentas de la Primera Visión',
      intro: {
        romanNumeral: 'IV',
        title: 'Cuatro Relatos, una Verdad',
        paragraphs: [
          'José Smith narró la Primera Visión al menos cuatro veces en documentos escritos entre 1832 y 1842. Las diferencias entre los relatos han sido objeto de debate — pero estudiadas con cuidado revelan no contradicción sino complementariedad.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Los cuatro relatos principales',
          blocks: [
            {
              type: 'compare_grid',
              title: 'Relato de 1832 vs. Relato de 1838 (JS-H)',
              left: {
                label: 'Relato de 1832 (más temprano)',
                points: [
                  'Escrito de puño y letra por José Smith',
                  'Énfasis principal: el perdón de pecados',
                  'No menciona explícitamente la pregunta sobre cuál iglesia unirse',
                  'Solo menciona "el Señor" — algunos interpretan que se refiere a Cristo',
                  'Contexto: relato personal en diario, no destinado a publicación',
                ],
              },
              right: {
                label: 'Relato de 1838 (JS-H canónico)',
                points: [
                  'Dictado para uso oficial de la Iglesia',
                  'Énfasis principal: restauración y pregunta sobre las iglesias',
                  'Relata explícitamente la pregunta y la respuesta del Padre y el Hijo',
                  'Menciona claramente dos Personajes: el Padre y el Hijo',
                  'Contexto: historia oficial destinada a publicación universal',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Contexto histórico',
              title: 'Por qué las diferencias confirman, no contradicen',
              paragraphs: [
                'Los estudiosos de narrativa y memoria cognitiva han establecido que los relatos auténticos de eventos reales varían según el contexto y la audiencia. Un testigo de un accidente narrará el evento de manera diferente a un amigo íntimo que a la policía que a un juez — no porque mienta, sino porque enfatiza los aspectos relevantes para cada oyente.',
                'El relato de 1832 fue escrito en el diario personal de José Smith para su propio registro. El énfasis en el perdón de pecados refleja el estado espiritual de un joven que buscaba paz interior. El relato de 1838 fue dictado para ser la historia oficial de la Iglesia — y el énfasis en la pregunta sobre las iglesias refleja el propósito eclesiológico del documento.',
                'Los historiadores secularmente entrenados que han estudiado los cuatro relatos —incluidos críticos no creyentes como Dan Vogel— reconocen que las diferencias son consistentes con los patrones de memoria y narración de eventos reales, no con los patrones de fabricación deliberada.',
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Las diferencias entre los cuatro relatos de la Primera Visión demuestran que José Smith inventó la historia.',
              answer: false,
              explanation: 'Los historiadores de la memoria cognitiva reconocen que los relatos auténticos de eventos reales varían según el contexto y la audiencia. Las diferencias entre los relatos de 1832, 1835, 1838 y 1842 son consistentes con los patrones de narración de eventos reales, y cada relato enfatiza aspectos relevantes para su audiencia y propósito específicos.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'Lo que todos los relatos afirman sin variación',
          blocks: [
            {
              type: 'key_points',
              title: 'Elementos constantes en todos los relatos de la Primera Visión',
              points: [
                'Una visión real ocurrió en el bosque en la primavera de 1820',
                'José Smith fue llamado por su nombre',
                'Apareció al menos un Ser celestial de gloria indescriptible',
                'Se le dijo que sus pecados eran perdonados',
                'Recibió instrucción de no unirse a ninguna de las denominaciones existentes',
                'El evento fue seguido de persecución y hostilidad de las autoridades religiosas locales',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Nadie puede estudiar los cuatro relatos de la Primera Visión con honestidad intelectual y concluir que son los relatos de un impostor. La consistencia en los elementos centrales y la variación en los énfasis es exactamente lo que esperamos de un testigo que reporta una experiencia real en contextos diferentes.',
              name: 'Elder Jeffrey R. Holland',
              role: 'Quórum de los Doce Apóstoles',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La importancia teológica',
      intro: {
        romanNumeral: 'V',
        title: 'Lo que la Primera Visión cambió para siempre',
        paragraphs: [
          'La Primera Visión no es solo la historia fundacional de la Iglesia SUD. Es la afirmación más específica sobre la naturaleza de Dios hecha desde el Nuevo Testamento.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Dios y Cristo: seres separados y personales',
          blocks: [
            {
              type: 'paragraph',
              text: 'La doctrina más radical de la Primera Visión no es que Dios habló a un adolescente — es lo que esa aparición implica sobre la naturaleza de Dios. Durante 1,500 años, el creacionismo trinitario niceno había definido a Dios como espíritu puro sin forma corporal, y al Padre, Hijo y Espíritu como "tres personas en una sustancia." La Primera Visión destruyó ese marco con una sola pregunta: ¿cómo pueden el Padre y el Hijo ser una misma sustancia si José los vio como dos seres distintos, de pie en el aire, uno señalando al otro?',
            },
            {
              type: 'paragraph',
              text: 'DyC 130:22 — revelado a José Smith en 1843 — expresa la conclusión doctrinal con claridad filosófica: "El Padre tiene un cuerpo de carne y huesos, tan tangible como el del hombre; el Hijo también; pero el Espíritu Santo no tiene cuerpo de carne y huesos, sino que es un personaje de Espíritu." Esto no fue la invención de una nueva teología — fue el regreso a la teología que el texto del Nuevo Testamento sugiere y que los creédos posconciliares oscurecieron.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 130:22',
              text: 'El Padre tiene un cuerpo de carne y huesos, tan tangible como el del hombre; el Hijo también; pero el Espíritu Santo no tiene cuerpo de carne y huesos, sino que es un personaje de Espíritu. De no ser así, el Espíritu Santo no podría morar en nosotros.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Cómo cambia tu oración el saber que el Padre y el Hijo son seres personales con cuerpos glorificados?' },
                { id: 'p2', question: '¿Qué significa para ti que el Padre llamara a José Smith "por su nombre"? ¿Crees que Dios te conoce por tu nombre también?' },
                { id: 'p3', question: '¿Cómo responderías a alguien que argumenta que las diferencias entre los relatos de la Primera Visión la hacen inverosímil?' },
              ],
            },
          ],
        },
        {
          id: 't5-2',
          title: 'Si es verdad, cambia todo',
          blocks: [
            {
              type: 'central_quote',
              text: 'O la visión de José Smith ocurrió y todo lo demás que afirmamos es verdad, o no ocurrió y somos los más grandes impostores que el mundo ha conocido.',
              attribution: 'Gordon B. Hinckley, Presidente de la Iglesia',
            },
            {
              type: 'paragraph',
              text: 'Gordon B. Hinckley articuló con claridad lo que los defensores intelectuales de la fe siempre han sabido: la Primera Visión es el punto de bifurcación de toda evaluación racional del mormonismo. No es posible aceptar los frutos de la Restauración mientras se rechaza su raíz. Si la visión ocurrió, entonces el sacerdocio es real, el Libro de Mormón es verdadero, las ordenanzas del templo tienen efecto eterno, y la muerte no es el fin. Si no ocurrió, entonces todo lo demás carece de fundamento.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué evidencia personal — escritural, espiritual, histórica, o experiencial — es más significativa para tu propio testimonio de la Primera Visión? ¿Qué pregunta sobre ella aún no has resuelto y merece más estudio?',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Según JS-H 1:17, el Padre presentó al Hijo diciendo: "Este es mi Hijo Amado. ¡_____!"',
              answer: 'Escúchale',
              explanation: 'JS-H 1:17 registra las palabras exactas del Padre a José Smith: "Este es mi Hijo Amado. ¡Escúchale!" Esta frase es un eco directo de la transfiguración en los Evangelios sinópticos (Mateo 17:5; Marcos 9:7; Lucas 9:35).',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'El legado de la Primera Visión',
      intro: {
        romanNumeral: 'VI',
        title: 'Lo que comenzó en aquel bosque',
        paragraphs: [
          'La Primera Visión no terminó en el bosque. Fue el primero de una cadena de eventos que en 24 años produjo el Libro de Mormón, el sacerdocio restaurado, la Iglesia organizada, el templo, y más de 130 revelaciones registradas.',
        ],
      },
      topics: [
        {
          id: 't6-1',
          title: 'De la arboleda al mundo',
          blocks: [
            {
              type: 'paragraph',
              text: 'En 1820, la Primera Visión fue conocida por pocos. El adolescente que volvió a casa ese día no tenía ni el lenguaje ni el contexto para articular completamente lo que había visto. Su hermano Alvin lo escuchó. Sus padres, con prudencia, lo creyeron. El ministro local lo rechazó. Durante tres años, José Smith vivió con el peso de una experiencia que no podía ni compartir plenamente ni olvidar.',
            },
            {
              type: 'paragraph',
              text: 'Para 1844, el año de su muerte, la Iglesia que nació de esa visión tenía más de 26,000 miembros en América y Europa. Para 2024, más de 17 millones. La arboleda sagrada se ha convertido en uno de los sitios religiosos más visitados de América del Norte. El bosque donde un adolescente oró solo en 1820 es hoy el punto focal de un movimiento global que ha tocado la vida de cientos de millones de personas a través de sus generaciones.',
            },
            {
              type: 'leader_quote',
              quote: 'La Primera Visión de José Smith es, para los Santos de los Últimos Días, lo que la resurrección fue para los apóstoles: el evento fundacional que hace que todo lo demás tenga sentido. Sin ella, no hay Restauración. Con ella, todo lo que el evangelio promete se convierte en posibilidad real.',
              name: 'Dallin H. Oaks',
              role: 'Primer Consejero en la Primera Presidencia',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Cuándo y cómo llegaste a tu propio testimonio de la Primera Visión? ¿Fue un momento o un proceso?' },
                { id: 'p2', question: '¿Qué aspecto de la Primera Visión — la naturaleza de Dios, la continuación de la revelación, la respuesta sobre las iglesias — te resulta más personalmente significativo?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
