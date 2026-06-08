import type { Lesson } from '@/types/doctrine'

export const joseSmithElMartir: Lesson = {
  id: 'jose-smith-el-martir',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'jose-smith',
  title: 'José Smith en Carthage',
  subtitle: 'El sellamiento final del testimonio',
  author: 'Fuentes: DyC 135; Historia de la Iglesia 6:605-631; Diario de John Taylor',
  description:
    'El 27 de junio de 1844, en la Cárcel de Carthage, Illinois, José y Hyrum Smith fueron asesinados por una turba con las caras pintadas. José tenía 38 años. John Taylor sobrevivió milagrosamente. Willard Richards salió ileso. DyC 135 registra el veredicto eterno: sellaron su testimonio con su sangre.',
  level: 'INTERMEDIO',
  icon: '🕊️',
  duration: 35,
  order: 8013,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'jose-smith-el-profeta',
  nextLessonId: 'jose-smith-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: 'Las fuerzas que convergieron',
      intro: {
        romanNumeral: 'I',
        title: 'Nauvoo, 1844 — La Tormenta Política y Religiosa',
        paragraphs: [
          'El asesinato de José Smith no fue un evento espontáneo. Fue el desenlace de años de tensión política, religiosa y económica que se acumularon en Nauvoo, Illinois, en la primavera de 1844.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La oposición: crónica de conflictos',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para 1844, Nauvoo era la ciudad más poblada de Illinois — más grande que Chicago en ese momento. José Smith era simultáneamente presidente de la Iglesia, alcalde de Nauvoo, teniente general de la Legión de Nauvoo (la milicia local), candidato presidencial de los Estados Unidos, y el hombre que más miedo inspiraba en sus enemigos religiosos y políticos de toda la región.',
            },
            {
              type: 'paragraph',
              text: 'La acumulación de poder en manos de un solo hombre — poder espiritual, político y militar — era la fuente principal de la oposición. Los periódicos anti-mormones de Illinois publicaban regularmente artículos que mezclaban hechos, distorsiones y mentiras. Un grupo de exmiembros desafectos que incluía a hombres poderosos como William Law (segundo consejero en la Primera Presidencia que había sido excomulgado) organizaron en 1844 una oposición formal con un periódico propio.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Enero 1844', text: 'William Law es excomulgado por adulterio; organiza la oposición formal contra José Smith', color: 'red' },
                { label: 'Mayo 1844', text: 'William Law y aliados publican el primer (y único) número del Nauvoo Expositor', color: 'red' },
                { label: '10-11 junio 1844', text: 'El concejo municipal de Nauvoo declara el Expositor una "molestia pública" y destruye la imprenta', color: 'red' },
                { label: '18 junio 1844', text: 'José Smith declara ley marcial en Nauvoo; gobernador Thomas Ford exige su rendición', color: 'gold' },
                { label: '24 junio 1844', text: 'José y Hyrum se entregan voluntariamente en Carthage con garantía del gobernador', color: 'blue' },
                { label: '27 junio 1844', text: 'La turba ataca la Cárcel de Carthage. Hyrum y José son asesinados.', color: 'red' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El Nauvoo Expositor y sus consecuencias',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Nauvoo Expositor, publicado el 7 de junio de 1844, atacó a José Smith en términos que mezclaban acusaciones verdaderas (la práctica del matrimonio plural), exageradas (conspiraciones políticas), y falsas (doctrinas que no enseñaba). Su destrucción por orden del concejo municipal fue un error estratégico que sus enemigos usaron con habilidad: un acto de censura en una nación que valoraba la libertad de prensa creó una indignación que justificó en la mente de muchos lo que siguió.',
            },
            {
              type: 'paragraph',
              text: 'Históricamente, la destrucción del Expositor fue defendible bajo la ley municipal de la época — otros alcaldes habían ordenado acciones similares. Pero políticamente fue devastador. El gobernador Ford de Illinois emitió un ultimátum: José Smith debía entregarse para ser juzgado por un comité no-mormón. La alternativa era que las milicias estatales marcharan sobre Nauvoo.',
            },
            {
              type: 'doctrine_box',
              title: 'La rendición de José Smith: ¿acto de cobardía o de sacrificio?',
              body: 'Cuando el gobernador Ford demandó la entrega de José Smith, los consejeros del profeta estaban divididos. Algunos le instaron a huir a las Montañas Rocosas. José Smith cruzó el Mississippi hacia Iowa — y regresó. Su razonamiento: si huía, los santos sufrirían las consecuencias. Si se entregaba, al menos tendría la promesa de protección del gobernador. DyC 135:4 interpreta su retorno como el acto de un pastor que voluntariamente se entregó en lugar de sus ovejas. Ford prometió protección; la historia registra que esa promesa no fue honrada.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La profecía sobre su propia muerte',
      intro: {
        romanNumeral: 'II',
        title: '"Voy como un cordero al matadero"',
        paragraphs: [
          'Lo que hace del martirio de José Smith un evento único en la historia religiosa no es solo su violencia — es que él lo predijo con claridad, lo aceptó conscientemente, y las pruebas históricas indican que lo sabía con certeza.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Las palabras proféticas sobre su muerte',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 135:4',
              text: 'Como un cordero al matadero fue; y como una oveja ante sus trasquiladores, enmudece, así no abrió su boca. Entregó su vida inocente para el testimonio de que vivía Dios y que Jesucristo era el Hijo de Dios.',
            },
            {
              type: 'paragraph',
              text: 'En las semanas previas a su muerte, José Smith hizo afirmaciones que sus contemporáneos interpretaron como presagio. En un discurso del 12 de mayo de 1844, dijo: "Quisiera que la Iglesia supiera la magnitud del trabajo que recae sobre mis hombros; tengo testigos de la verdad de esta obra en el cielo y en la tierra... Si se me concediera vivir hasta los 85 años, vería la cara de los hijos de Israel reunidos." No vivió para verlo.',
            },
            {
              type: 'paragraph',
              text: 'El 22 de junio de 1844, cuando cruzó el Mississippi hacia Iowa, supuestamente para escapar, José Smith regresó al día siguiente con estas palabras registradas por Willard Richards: "Si mi vida no vale nada para mis amigos, no vale nada para mí." Y al aproximarse a Carthage el 24 de junio: "Voy como un cordero al matadero; tengo conciencia tranquila. No me avergüenzo, y sé que mi inocencia será reivindicada por fin."',
            },
            {
              type: 'central_quote',
              text: 'Voy como un cordero al matadero; pero estoy tan tranquilo como la mañana de verano; tengo conciencia limpia ante Dios y ante todos los hombres. Si muero inocente, moriré como testigo de la verdad.',
              attribution: 'José Smith, 24 de junio de 1844, camino a Carthage',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Los últimos días en Carthage',
          blocks: [
            {
              type: 'paragraph',
              text: 'José y Hyrum Smith, junto con John Taylor y Willard Richards, llegaron a la Cárcel de Carthage el 25 de junio de 1844. Técnicamente estaban detenidos por cargos de traición — no de asesinato ni de ningún crimen grave. La cárcel era más un edificio de detención que una prisión de alta seguridad. El gobernador Ford había prometido protección y se ausentó de Carthage el día 27 para visitar Nauvoo personalmente, llevando consigo a las tropas más confiables.',
            },
            {
              type: 'paragraph',
              text: 'La tarde del 27 de junio, los cuatro hombres en la habitación del piso superior de la cárcel eran conscientes del peligro. La Greys — la milicia que supuestamente los custodiaba — estaba entre las más hostiles. Cuando comenzó el ataque, los custodios apenas opusieron resistencia.',
            },
            {
              type: 'key_points',
              title: 'Las personas en la habitación: Carthage Jail, 27 de junio de 1844',
              points: [
                'José Smith, 38 años — Presidente de la Iglesia',
                'Hyrum Smith, 44 años — Patriarca de la Iglesia y hermano de José',
                'John Taylor, 35 años — Apóstol; sobrevivió con graves heridas',
                'Willard Richards, 39 años — Secretario personal de José Smith; escapó sin una herida',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El 27 de junio de 1844',
      intro: {
        romanNumeral: 'III',
        title: 'La Cárcel de Carthage — Entre las 5 y las 6 de la tarde',
        paragraphs: [
          'Los detalles del asesinato fueron registrados por John Taylor —herido pero sobreviviente— y por Willard Richards, quien estuvo presente y salió ileso. Lo que describen es uno de los relatos más perturbadores y sublimes de la historia de la Iglesia.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El himno, el vino, y el comienzo del ataque',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tarde del 27 de junio, la tensión en la habitación del piso superior de la cárcel era palpable. John Taylor cantó el himno "A Poor Wayfaring Man of Grief" a petición de José Smith — primero una vez, luego de nuevo. El himno, cuyo estribillo es "Entonces en honor a mis hermanos, / A su honor me consagré," tomó un significado profético en ese contexto que ninguno de los presentes pasaría por alto en los años que siguieron.',
            },
            {
              type: 'central_quote',
              text: 'Un pobre peregrino de dolor / Que a menudo cruzaba mi camino, / Hambriento y sediento, enfermo y solitario, / Sus dolores me movieron a llorar. / Le di el pan que aún me quedaba, / Crucé con él el turbio río; / Entonces en honor a mis hermanos, / A su honor me consagré.',
              attribution: 'A Poor Wayfaring Man of Grief — Himno SUD (estrofa 7 cantada por John Taylor en Carthage Jail)',
            },
            {
              type: 'paragraph',
              text: 'Antes del ataque, los cuatro hombres recibieron vino de alguien de fuera. Este detalle —mencionado en el diario de John Taylor— ha sido fuente de discusión teológica: ¿José Smith violó la Palabra de Sabiduría al beber vino en sus últimas horas? El contexto histórico sugiere que el vino era una práctica de sacramento habitual y que la Palabra de Sabiduría no se había establecido como mandato estricto hasta más tarde. José mismo había bebido vino en otros contextos sin censurar.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El ataque: Hyrum cae primero',
          blocks: [
            {
              type: 'paragraph',
              text: 'Aproximadamente a las 5 de la tarde, unos 200 hombres con las caras pintadas de negro (para disfrazar su identidad) rodearon la cárcel y comenzaron a subir las escaleras. Dispararon a través de la puerta y de la ventana. Hyrum Smith fue alcanzado por una bala en la cara — disparada a través de la puerta — y cayó hacia atrás diciendo: "¡Estoy muerto!" José se arrodilló sobre su cuerpo con las palabras: "¡Oh Hyrum querido!" Era la primera vez que perdía a un hermano.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 135:1',
              text: 'Para sellarse el testimonio de este libro y del Libro de Mormón, caemos en la sangre de las manos de asesinos a nuestro hermano Joseph Smith Jr., el profeta y vidente del Señor, y su hermano Hyrum Smith, el patriarca.',
            },
            {
              type: 'dialogue',
              title: 'Los últimos momentos en Carthage Jail — según el diario de John Taylor',
              lines: [
                { speaker: 'Hyrum Smith', side: 'left', text: '¡Estoy muerto! (tras ser alcanzado por una bala a través de la puerta)' },
                { speaker: 'José Smith', side: 'right', text: '¡Oh Hyrum querido! (arrodillándose sobre su hermano)' },
                { speaker: 'José Smith', side: 'right', text: '(Se dirige a la ventana — se le dispara desde abajo y desde dentro de la habitación)' },
                { speaker: 'José Smith', side: 'right', text: '¡Oh Señor, mi Dios! (sus últimas palabras registradas, al caer por la ventana)' },
                { speaker: 'Willard Richards', side: 'left', text: '(A John Taylor, herido) ¿Puedes moverse? Tenemos que salir de aquí.' },
              ],
            },
          ],
        },
        {
          id: 't3-3',
          title: 'José en la ventana y las últimas palabras',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando la turba subió las escaleras y comenzó a disparar a través de la puerta, José Smith — con una pistola de bolsillo que le había dado Cyrus Wheelock — intentó mantenerlos a distancia. Dos de sus disparos fallaron (la pólvora estaba húmeda); uno herir leve a un atacante. Finalmente, alcanzado por dos balas, se dirigió a la ventana y cayó hacia el exterior desde el segundo piso.',
            },
            {
              type: 'paragraph',
              text: 'Las últimas palabras de José Smith registradas fueron "¡Oh Señor, mi Dios!" — grito que algunos han interpretado como el signo de socorro de la masonería que esperaba que alguno de los atacantes (muchos de los cuales eran masones) reconociera y lo salvara. Sea cual fuere la intención, ninguno de los atacantes respondió. Su cuerpo cayó al suelo del patio exterior de la cárcel. Tenía 38 años y 7 meses.',
            },
            {
              type: 'deep_dive',
              badge: 'Dato histórico',
              title: 'El reloj de John Taylor y la bala que no penetró',
              paragraphs: [
                'John Taylor fue alcanzado por cuatro balas durante el ataque. La más notable fue la que impactó directamente en su reloj de bolsillo — un reloj Waltham que estaba en el bolsillo del chaleco sobre su corazón. La bala detuvo el mecanismo del reloj exactamente a las 5:16 p.m.',
                'El reloj se conserva en los Archivos de la Iglesia en Salt Lake City. El impacto había abollado la cubierta exterior y detenido las agujas — sin penetrar el mecanismo hasta el pecho de Taylor. Si el reloj no hubiera estado allí, la bala habría entrado en su corazón.',
                'Taylor sobrevivió sus cuatro heridas, fue elegido apóstol y eventualmente se convirtió en el tercer Presidente de la Iglesia. Willard Richards, el otro superviviente, salió literalmente sin un rasguño — en cumplimiento de la promesa que José Smith había hecho días antes de que Richards estaría protegido "aunque las balas cayeran como granizo."',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El veredicto de la historia',
      intro: {
        romanNumeral: 'IV',
        title: 'DyC 135 — "Ningún mal puede tocar al inocente"',
        paragraphs: [
          'Willard Richards escribió DyC 135 como relato inmediato del martirio. Sus palabras finales son la declaración oficial de la Iglesia sobre el significado del 27 de junio de 1844.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'DyC 135:3-4 — el veredicto eterno',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 135:3',
              text: 'José Smith, el Profeta y Vidente del Señor, ha hecho más, salvo Jesús solamente, para la salvación de los hombres en este mundo, que cualquier otro hombre que jamás haya vivido en él. Solo unas pocas semanas después de haber completado su trigésimo octavo año, ha sellado su misión y sus obras con su propia sangre.',
            },
            {
              type: 'paragraph',
              text: 'La afirmación de DyC 135:3 es la más audaz del canon de la Restauración. No dice que José Smith fue un buen hombre, ni siquiera un gran profeta — dice que hizo más para la salvación de los hombres que cualquier otro ser humano de la historia, con la única excepción de Jesucristo. Esta afirmación requiere o ser tomada completamente en serio o ser rechazada completamente. No hay posición intermedia cómoda.',
            },
            {
              type: 'paragraph',
              text: 'El fundamento de la afirmación está en el alcance de la obra restauradora: el sacerdocio y las llaves del reino, las ordenanzas del templo que extienden la salvación a los muertos, el Libro de Mormón como segundo testigo de Jesucristo, y las 138 secciones de revelación que definen la doctrina de la Restauración. Si estas cosas son reales y permanentes — y la Iglesia afirma que lo son — entonces la declaración de DyC 135:3 es matemáticamente verificable por sus consecuencias eternas.',
            },
            {
              type: 'doctrine_box',
              title: 'El significado del martirio: el testimonio sellado',
              body: 'En la tradición bíblica y en la ley romana, un testamento sellado con la muerte del testador adquirió fuerza legal (Hebreos 9:16-17). Los mártires del Nuevo Testamento —Esteban, Pablo, los apóstoles— sellaron sus testimonios con su sangre. José y Hyrum Smith hicieron lo mismo. DyC 135:5 afirma: "Y de nuevo, ¿acaso no derramaron su sangre como testigos de la verdad?" El argumento implícito: quien inventa una mentira no muere por ella cuando tiene la oportunidad de vivir renunciando a ella.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'La reacción del mundo y de la Iglesia',
          blocks: [
            {
              type: 'paragraph',
              text: 'La noticia del asesinato llegó a Nauvoo la noche del 27 de junio. Los cuerpos de José y Hyrum fueron llevados a la Mansión House el 28 de junio. Se estima que 10,000 personas —prácticamente toda la población de Nauvoo— desfilaron frente a los ataúdes. Emma Smith, embarazada de su último hijo, sobrevivió al esposo que ella misma había descrito como el único hombre que la había "comprendido."',
            },
            {
              type: 'paragraph',
              text: 'El impacto sobre la Iglesia fue profundo pero no destructor. Brigham Young, de regreso de una misión, fue reconocido como el sucesor en la reunión de agosto de 1844. La Iglesia no se desintegró — avanzó. Tres años después, los Santos estaban en camino a Utah. Un año después de eso, el Templo de Nauvoo fue completado y dedicado. El testimonio sellado con sangre resultó ser más duradero que el profeta.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué te produce mayor impacto al considerar los últimos días de José Smith — el himno en la cárcel, la profecía de su propia muerte, la caída por la ventana, las palabras finales? ¿Cómo afecta tu testimonio el saber que él murió sin recantar nunca?',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'John Taylor sobrevivió el ataque en Carthage Jail sin ninguna herida.',
              answer: false,
              explanation: 'John Taylor fue alcanzado por cuatro balas durante el ataque. Una de ellas impactó en su reloj de bolsillo, lo que le salvó la vida al evitar que la bala penetrara hasta su corazón. Taylor sobrevivió sus heridas y más tarde se convirtió en el tercer Presidente de la Iglesia.',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Según DyC 135:3, José Smith "ha hecho más, salvo _____ solamente, para la salvación de los hombres en este mundo, que cualquier otro hombre que jamás haya vivido en él."',
              answer: 'Jesús',
              explanation: 'DyC 135:3 hace la afirmación más audaz del canon restaurado: que José Smith, en sus 14 años de ministerio activo, hizo más por la salvación eterna de los seres humanos que cualquier otro ser humano de la historia, con la única excepción de Jesucristo mismo.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Por qué el martirio importa',
      intro: {
        romanNumeral: 'V',
        title: 'El Sellamiento Final',
        paragraphs: [
          'El martirio de José Smith no es solo el fin de su historia personal — es el sello que da fuerza permanente a todo su testimonio.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Los que mueren por lo que afirman',
          blocks: [
            {
              type: 'paragraph',
              text: 'El principio del martirio como evidencia de convicción es antiguo: quien muere por lo que afirma revela algo sobre la calidad de su creencia. No prueba que lo que creyó era verdad — pero prueba que él mismo lo creyó verdadero. Los impostores, cuando tienen la oportunidad de salvar su vida recantando, generalmente la aprovechan. José Smith, en múltiples momentos de su vida — incluyendo los días finales en Carthage — tuvo opciones de escapar o de recular. No lo hizo.',
            },
            {
              type: 'leader_quote',
              quote: 'Yo sé que los profetas caen, que los apóstoles vacilan, que los hombres cometen errores. Pero sé también que el hombre que muere diciendo que vio al Padre y al Hijo en un bosque de Nueva York, y que nunca fue capaz de negar esa afirmación a pesar de décadas de persecución, es un hombre que creyó completamente lo que dijo. Y eso es suficiente para hacerme escuchar.',
              name: 'Jeffrey R. Holland',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'key_points',
              title: 'Lo que el martirio de José y Hyrum Smith significa para el testimonio',
              points: [
                'Hyrum murió primero — y había sido testigo ocular del proceso de traducción desde el principio',
                'José tuvo múltiples oportunidades de escapar en los días anteriores y no lo hizo',
                'Ninguno recantó su testimonio en los últimos días, ni en privado ni en público',
                'Los testigos del martirio — Taylor y Richards — nunca cambiaron su relato',
                'El martirio es el sello jurídico que da fuerza permanente al testamento (Hebreos 9:16-17)',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Por qué es teológicamente significativo que Hyrum muriera junto con José? ¿Qué añade su martirio al de su hermano?' },
                { id: 'p2', question: '¿Cómo responderías a alguien que dice que la muerte de José Smith prueba que era un falso profeta que recibió lo que merecía?' },
                { id: 'p3', question: '¿Ha habido algún momento en tu vida en que sostener tu fe o tu testimonio tuvo un costo real? ¿Qué te dio fuerza para mantenerlo?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
