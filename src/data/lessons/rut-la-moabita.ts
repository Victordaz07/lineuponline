import type { Lesson } from '@/types/doctrine'

export const rutLaMoabita: Lesson = {
  id: 'rut-la-moabita',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'rut',
  title: 'La Moabita',
  subtitle: 'Del pueblo maldito a la genealogía del Mesías',
  author: 'Fuentes: Rut 1-4; Génesis 19:37; Mateo 1:5',
  description: 'Moab era el pueblo nacido de la vergüenza, maldecido en la ley de Moisés. Rut era moabita. Que ella terminara en la genealogía directa de Jesucristo no fue un error — fue el punto. Este primer estudio del libro de Rut examina quiénes eran los moabitas, por qué la familia de Elimelec fue a vivir entre ellos, y qué significaba para el mundo antiguo que una mujer como Rut se casara con un israelita.',
  level: 'BÁSICO',
  icon: '🌾',
  duration: 30,
  order: 6110,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'rut-la-leal',
  studySections: [
    {
      id: 's1',
      title: 'El origen vergonzoso de Moab',
      intro: {
        romanNumeral: 'I',
        title: 'El Pueblo Nacido de la Vergüenza',
        paragraphs: [
          'Para entender por qué Rut es tan sorprendente, hay que entender de dónde venía. El origen de Moab se narra en Génesis 19 — y no es una historia que se cuente en los libros de niños.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Lot y el origen de Moab',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 19:36-37',
              text: 'Y las dos hijas de Lot concibieron de su padre. Y la mayor dio a luz un hijo, y lo llamó Moab; éste es el padre de los moabitas hasta hoy.',
            },
            {
              type: 'paragraph',
              text: 'El nombre Moab significa literalmente "del padre" en hebreo — un recordatorio permanente del incesto que dio origen a ese pueblo. Después de la destrucción de Sodoma, las dos hijas de Lot, convencidas de que no quedaba ningún hombre en la tierra, embriagaron a su padre dos noches seguidas y concibieron de él. El texto bíblico no suaviza la narración. El hijo mayor fue llamado Moab; el menor, Ben-ammí (padre de los amonitas).',
            },
            {
              type: 'paragraph',
              text: 'Esta historia de origen tenía consecuencias legales directas para los israelitas. Deuteronomio 23:3 establece: "No entrará amonita ni moabita en la congregación de Jehová; ni hasta la décima generación entrarán en la congregación de Jehová para siempre." La exclusión no era meramente cultural — era teológica y jurídica. Un moabita no podía convertirse en miembro pleno del pueblo de Dios. Y Rut era moabita.',
            },
            {
              type: 'doctrine_box',
              title: 'La maldición de Deuteronomio 23:3',
              body: 'La prohibición de admitir moabitas en la congregación tenía fundamento adicional en la historia del Éxodo: fue Balac, rey de Moab, quien contrató a Balaam para maldecir a Israel (Números 22-24). Y fueron las mujeres moabitas las que sedujeron a los varones israelitas a la idolatría en Baal-peor (Números 25:1-3), causando una plaga que mató a 24.000 personas. La exclusión de Deuteronomio 23 no era arbitraria: tenía historia de traición y tentación detrás.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué dice sobre la gracia de Dios el hecho de que eligiera incluir a alguien de este linaje — cargado de vergüenza y exclusión legal — en la genealogía directa del Mesías? ¿Qué personas o grupos considers "demasiado excluidos" para que Dios los use?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La familia de Elimelec en Moab',
      intro: {
        romanNumeral: 'II',
        title: 'La Hambruna que Llevó a Todo',
        paragraphs: [
          'Rut 1 comienza con una hambruna en Israel y una familia que tomó la decisión de emigrar a Moab. Era una decisión comprensible — y escandalosa.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Elimelec: el israelita que fue a Moab',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Rut 1:1-2',
              text: 'Aconteció en los días que gobernaban los jueces, que hubo hambre en la tierra. Y un varón de Belén de Judá fue a morar en los campos de Moab, él y su mujer, y dos hijos suyos. El nombre de aquel varón era Elimelec, y el de su mujer, Noemí; y los nombres de sus dos hijos eran Mahlón y Quelión, efrateos de Belén de Judá. Llegaron, pues, a los campos de Moab, y se quedaron allí.',
            },
            {
              type: 'paragraph',
              text: 'El nombre "Elimelec" significa "mi Dios es rey." El nombre "Belén" (Bet-lehem) significa "casa del pan." La ironía es deliberada: el hombre cuyo nombre proclama que Dios es rey huye de la casa del pan porque no hay pan. La hambruna en Belén era una crisis real — las hambrunas del Levante antiguo podían matar. Pero ir a Moab era más que emigrar: era ir al territorio del pueblo maldito, alejarse del tabernáculo, del sacerdocio, de la comunidad del pacto.',
            },
            {
              type: 'paragraph',
              text: 'El texto, en su economía narrativa típica, no juzga explícitamente a Elimelec. Pero la estructura del relato lo hace: Elimelec muere (1:3). Sus dos hijos se casan con mujeres moabitas — Mahlón con Rut, Quelión con Orpá — y luego también mueren (1:5). La familia que fue a Moab buscando sobrevivir quedó deshecha en Moab.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Inicio', text: 'Hambruna en Judá — Elimelec lleva a su familia a Moab', ref: 'Rut 1:1-2', color: 'gold' },
                { label: 'Moab', text: 'Mahlón y Quelión se casan con Rut y Orpá — uniones mixtas transgresoras', ref: 'Rut 1:4', color: 'blue' },
                { label: 'Duelo', text: 'Elimelec muere; luego Mahlón y Quelión también mueren', ref: 'Rut 1:3,5', color: 'red' },
                { label: 'Regreso', text: 'Noemí decide volver a Belén; llega la hora de la decisión para las nueras', ref: 'Rut 1:6-7', color: 'green' },
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El escándalo de los matrimonios mixtos',
          blocks: [
            {
              type: 'paragraph',
              text: 'Que Mahlón y Quelión se casaran con mujeres moabitas no era un detalle menor en el mundo antiguo israelita. Deuteronomio 7:3 prohibía explícitamente los matrimonios con los pueblos de Canaán; la extensión de este principio a los moabitas era razonada (Deuteronomio 23:3-6). El libro de Esdras (9-10) y Nehemías (13:23-27) muestran que siglos después, los líderes de Israel llegaron a exigir el divorcio forzado de las esposas extranjeras.',
            },
            {
              type: 'paragraph',
              text: 'Que el libro de Rut no condene estos matrimonios — y que el resultado de uno de ellos sea la bisabuela del rey David — es uno de los silencios más elocuentes del canon bíblico. El texto no explica la transgresión ni la justifica. Simplemente la narra, y luego muestra lo que Dios hizo con ella.',
            },
            {
              type: 'key_points',
              title: 'Lo que sabemos de Rut antes del capítulo 1',
              points: [
                'Era de la tierra de Moab — pueblo excluido por la ley deuteronómica',
                'Se casó con Mahlón, hijo de Elimelec, israelita de Belén de Judá',
                'La unión duró suficiente para que el texto la mencione — pero no hubo hijos',
                'Quedó viuda junto a su cuñada Orpá y su suegra Noemí',
                'Hasta este punto del relato, no se sabe nada más sobre su carácter',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La viudez en el mundo antiguo',
      intro: {
        romanNumeral: 'III',
        title: 'Sin Red de Seguridad',
        paragraphs: [
          'Para entender el peso de la decisión de Rut en Rut 1, hay que entender qué significaba ser viuda en el Israel antiguo. No había pensiones, ni seguros, ni estado de bienestar.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La vulnerabilidad extrema de la viuda',
          blocks: [
            {
              type: 'paragraph',
              text: 'En el antiguo Cercano Oriente, la identidad social, la seguridad económica y la protección legal de una mujer dependían casi por completo del hombre de quien era dependiente: primero el padre, luego el marido, luego el hijo mayor. Una viuda sin hijos — como Noemí, Rut y Orpá — estaba en la posición más vulnerable posible. No tenía tierra propia (la tierra era de los hombres, heredada de padre a hijo). No tenía ingresos propios. Podía mendigar o depender de la caridad de parientes varones.',
            },
            {
              type: 'doctrine_box',
              title: 'Por qué la ley del levirato existía',
              body: 'Deuteronomio 25:5-10 establecía la "ley del levirato" (del latín levir, cuñado): si un hombre casado moría sin hijos, su hermano debía casarse con la viuda y el primer hijo de esa unión sería registrado como hijo del difunto, para preservar su nombre y su heredad. Esta ley no era solo una tradición cultural — era un mecanismo de seguridad social. Garantizaba que la viuda tuviera un protector y que el nombre del difunto no se borrara de Israel. Boaz aplicará esta institución en Rut 3-4.',
            },
            {
              type: 'paragraph',
              text: 'Noemí entendía perfectamente esta realidad. Por eso, al decidir regresar a Belén, le dice a sus nueras: "¿Para qué habéis de ir conmigo? ¿Acaso tengo yo más hijos en el vientre, que puedan ser vuestros maridos?" (Rut 1:11). No es retórica — es la cruda lógica de la institución del levirato. Sin un hermano de Mahlón disponible, Noemí no podía ofrecerles protección. La situación era desesperada para las tres mujeres.',
            },
            {
              type: 'highlight_verse',
              reference: 'Rut 1:11-13',
              text: 'Y Noemí respondió: Volveos, hijas mías; ¿para qué habéis de ir conmigo? ¿Acaso tengo yo más hijos en el vientre, que puedan ser vuestros maridos? Volveos, hijas mías, e idos; porque yo ya soy vieja para tener marido. Y aunque dijese: Esperanza tengo, y esta noche estuviese con marido, y aun pariese hijos, ¿habíais vosotras de esperarlos hasta que fuesen grandes? ¿Habíais de quedaros sin casar por amor a ellos? No, hijas mías; que mayor amargura tengo yo que vosotras, pues la mano de Jehová ha salido contra mí.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa que Noemí diga "la mano del Señor ha salido contra mí"? ¿Cómo procesamos la experiencia de sentir que Dios está en nuestra contra? ¿Cambia eso la fe, o la profundiza?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El viaje de Moab a Belén',
      intro: {
        romanNumeral: 'IV',
        title: 'Ochenta Kilómetros de Decisión',
        paragraphs: [
          'El camino de los campos de Moab a Belén de Judá no era un paseo. Era un viaje que cruzaba el río Jordán, subía más de 800 metros de altitud y recorría terreno árido y exigente.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La geografía de la decisión',
          blocks: [
            {
              type: 'paragraph',
              text: 'Moab se encontraba al este del mar Muerto, en las tierras altas del actual Jordán. Belén de Judá estaba a unos 80 kilómetros en línea recta — pero la ruta real era más larga: había que descender al valle del Jordán (que en esa región está a casi 400 metros bajo el nivel del mar), cruzar el río, y luego ascender la serranía de Judea hasta Belén, a unos 750 metros de altitud. El viaje tomaba varios días a pie.',
            },
            {
              type: 'paragraph',
              text: 'Para Rut, el viaje tenía un peso adicional que el texto no necesita explicar: cada paso alejaba a esta mujer moabita de todo lo que conocía. Su familia, su idioma cotidiano, sus costumbres, su tierra. Cruzar el Jordán no era solo una frontera geográfica — era cruzar al mundo de otro pueblo, con otra religión, otra historia, otro dios. Y ella lo cruzó por su suegra, una mujer que le decía que se fuera.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              alt: 'Mapa de la ruta de Moab a Belén a través del río Jordán',
              caption: 'El camino de los campos de Moab a Belén cruzaba el Jordán y ascendía las colinas de Judea — unos 80 km de terreno árido y exigente.',
              contextCard: {
                year: 'ca. 1100 a.C.',
                place: 'Moab → Belén de Judá',
                label: 'El camino de regreso',
              },
            },
            {
              type: 'paragraph',
              text: 'El texto indica que llegaron a Belén "al comienzo de la siega de la cebada" (Rut 1:22). La siega de cebada en Judea comenzaba en marzo-abril. Esto es significativo: llegaron en el mejor momento posible para los pobres, porque era cuando la ley del rebusco (Levítico 19:9-10) era más abundante. No parece accidental.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'La llegada — "¿Es esta Noemí?"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Rut 1:19-21',
              text: 'Y anduvieron ellas dos hasta que llegaron a Belén; y aconteció que cuando entraron en Belén, toda la ciudad se conmovió por causa de ellas, y decían: ¿No es esta Noemí? Y ella les respondía: No me llaméis Noemí, sino llamadme Mara; porque en grande amargura me ha puesto el Todopoderoso. Yo me fui llena, pero Jehová me ha vuelto con las manos vacías.',
            },
            {
              type: 'paragraph',
              text: 'El nombre "Noemí" significa "agradable" o "deliciosa." "Mara" significa "amarga." El cambio de nombre que Noemí solicita es un acto teológico: está nombrando lo que ha experimentado. Salió con marido, dos hijos y esperanza. Regresa con una nuera extranjera y ninguna otra cosa. Llama a Dios "Shaddai" — el Todopoderoso — dos veces en estos versículos, atribuyéndole tanto su vaciamiento como su amargura. Noemí no está en paz con Dios en este momento.',
            },
            {
              type: 'deep_dive',
              badge: 'Teología',
              title: 'La honestidad de Noemí como modelo espiritual',
              paragraphs: [
                'La Biblia no suaviza el dolor de Noemí ni lo corrige. No hay un ángel que aparezca para decirle que en realidad todo es para bien. Simplemente registra sus palabras amargas — y luego continúa la historia.',
                'Esta honestidad narrativa es un regalo para los lectores que alguna vez han estado "vacios" ante Dios. El libro de Job, los Salmos de lamento (como el Salmo 22: "Dios mío, Dios mío, ¿por qué me has abandonado?"), y ahora Noemí forman un patrón bíblico: la fe auténtica incluye la capacidad de decirle a Dios que estás roto.',
                'En la tradición restaurada, Brigham Young dijo: "El hombre que no pueda dar lugar a sus sentimientos de dolor, que nunca haya llorado, no sabe cómo sentir." La amargura honesta de Noemí no es falta de fe — es la fe que sigue hablando a Dios aunque le duela.',
              ],
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Por qué crees que el libro de Rut comienza con tanto dolor — la muerte de tres hombres, el llanto de tres viudas, la amargura de Noemí? ¿Qué nos dice esto sobre cómo Dios construye sus historias de redención?' },
                { id: 'p2', question: '¿Qué significa que Rut, siendo moabita y por tanto excluida por la ley, sea precisamente la persona que acompañó a Noemí en su hora de mayor quebranto?' },
                { id: 'p3', question: '¿Has tenido un momento "Noemí" — un regreso con las manos vacías? ¿Cómo nombrarías ese momento?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El escenario de la gracia',
      intro: {
        romanNumeral: 'V',
        title: 'La Historia Que Dios Estaba Contando',
        paragraphs: [
          'Al finalizar Rut 1, el lector israelita original tenía todos los elementos para esperar el desastre: una viuda israelita amargada, una nuera moabita excluida, ningún hombre, ningún recurso. El libro de Rut comenzó en el peor lugar posible. Eso era exactamente lo necesario.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Por qué la historia tenía que comenzar así',
          blocks: [
            {
              type: 'paragraph',
              text: 'El libro de Rut es uno de los pocos libros de la Biblia Hebrea nombrado en honor a una mujer — y esa mujer es extranjera. En el mundo del Antiguo Testamento, esto era radical. El canon bíblico incluía repetidamente narrativas que afirmaban la superioridad étnica y la separación religiosa de Israel. Y entonces viene el libro de Rut, que coloca a una moabita en el centro de la historia de la salvación.',
            },
            {
              type: 'central_quote',
              text: 'En el libro de Rut, Dios no trabaja a pesar del origen vergonzoso de Moab — trabaja a través de él. La gracia no ignora la historia rota; la transforma.',
              attribution: 'Principio del estudio',
            },
            {
              type: 'paragraph',
              text: 'Las próximas lecciones seguirán la historia: la declaración de lealtad de Rut (Rut 1:14-18), los campos de Boaz (Rut 2), la escena del era (Rut 3), y la redención en la puerta de la ciudad (Rut 4). Cada escena añade capas al retrato de lo que significa la fidelidad pactual — el hesed — en la práctica concreta de una vida real.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El nombre "Moab" en hebreo está vinculado narrativamente al origen incestuoso de ese pueblo según Génesis 19.',
              answer: true,
              explanation: 'Correcto. Génesis 19:37 narra que Moab fue el hijo nacido del incesto de Lot con su hija mayor. El nombre mismo es un recordatorio permanente de ese origen en la cultura israelita, lo que hace aún más significativa la inclusión de Rut en la genealogía davídica.',
            },
            {
              type: 'reflection',
              prompt: 'El libro de Rut está ambientado "en los días en que gobernaban los jueces" — una de las épocas más oscuras y moralmente caóticas de la historia israelita (ver Jueces 17-21). ¿Qué dice sobre la naturaleza de la providencia divina que las historias más hermosas de fidelidad ocurran en los contextos más oscuros?',
            },
          ],
        },
      ],
    },
  ],
}
