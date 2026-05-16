import type { Lesson } from '@/types/doctrine'

export const joseDeEgipto: Lesson = {
  id: 'jose-de-egipto',
  moduleId: 'personajes-escrituras',
  title: 'José de Egipto',
  subtitle: 'Traicionado, encarcelado, exaltado — tipo de Cristo',
  author: 'Fuentes: Génesis 37-50; 2 Nefi 3; Josué 24; DyC 84:33-34; José Smith — Historia',
  description:
    'La vida de José de Egipto es el relato más elaborado del Antiguo Testamento como tipo de Cristo. Vendido por sus hermanos, falsamente acusado, encarcelado, exaltado. Génesis 37-50 y 2 Nefi 3: la profecía de Lehi sobre el José del final de los días.',
  level: 'INTERMEDIO',
  icon: '👑',
  duration: 65,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El Favorito que Cayó',
      intro: {
        romanNumeral: 'I',
        title: 'El Favorito que Cayó',
        paragraphs: [
          'José de Egipto empieza la historia con todo en su contra — en el sentido de que era demasiado favorecido. Su padre lo amaba más que a los demás. Tenía sueños proféticos. Y fue tan honesto sobre ambas cosas que sus hermanos lo odiaron. El camino de José desde la túnica de colores hasta el fondo del pozo es una de las tragedias más bien narradas de la Biblia.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Génesis 37 — El Comienzo del Descenso',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'José con su túnica de colores siendo enviado por su padre Jacob',
              caption: 'La túnica de José — símbolo del favor de Jacob y del odio de sus hermanos (Génesis 37)',
              contextCard: {
                label: 'jose-egipto-tunica-colores-jacob',
              },
            },
            {
              type: 'highlight_verse',
              text: 'Y José soñó un sueño, y lo contó a sus hermanos; y ellos llegaron a aborrecerle más todavía. Y él les dijo: Oíd ahora este sueño que he soñado: He aquí que atábamos manojos en medio del campo, y he aquí que mi manojo se levantaba y estaba derecho, y que vuestros manojos estaban alrededor y se inclinaban al mío.',
              reference: 'Génesis 37:5–7',
            },
            {
              type: 'paragraph',
              text: 'Los sueños de José no eran invento suyo — eran revelaciones. El problema fue compartirlas con gente que no estaba preparada para recibirlas. Sus hermanos no vieron un profeta; vieron a un niño mimado anunciando que lo obedecerían. La lección no es que José estuvo equivocado al recibir revelación — es que el tiempo y la audiencia de un testimonio importan tanto como el testimonio mismo.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Sueños y el odio de los hermanos',
                  text: 'José tiene 17 años. Sus sueños proféticos provocan el odio de sus hermanos. Su padre lo ama más que a todos.',
                  ref: 'Génesis 37:2-11',
                  color: 'gold',
                },
                {
                  label: 'Vendido a los ismaelitas',
                  text: 'Los hermanos lo arrojan a un pozo, luego lo venden por 20 piezas de plata a mercaderes ismaelitas que van a Egipto.',
                  ref: 'Génesis 37:24-28',
                  color: 'blue',
                },
                {
                  label: 'Esclavo en casa de Potifar',
                  text: 'En Egipto, el Señor prosperó todo lo que José hacía. Potifar lo puso al cargo de toda su casa.',
                  ref: 'Génesis 39:2-6',
                  color: 'gold',
                },
                {
                  label: 'Falsa acusación y prisión',
                  text: 'La esposa de Potifar lo acusó falsamente. José fue encarcelado aunque era inocente.',
                  ref: 'Génesis 39:13-20',
                  color: 'blue',
                },
                {
                  label: 'Sueños del faraón e interpretación',
                  text: 'Dos años de prisión. El faraón sueña. El copero recuerda a José. José interpreta los sueños.',
                  ref: 'Génesis 41:14-36',
                  color: 'gold',
                },
                {
                  label: 'Exaltado — segundo del faraón',
                  text: 'El faraón lo nombra segundo al mando de todo Egipto. José tiene 30 años.',
                  ref: 'Génesis 41:39-46',
                  color: 'gold',
                },
                {
                  label: 'Reunión con los hermanos — perdón total',
                  text: 'Hambre en Canaán. Los hermanos vienen a Egipto. José los revela y los perdona. "No fuerais vosotros los que me vendisteis acá, sino Dios."',
                  ref: 'Génesis 45:4-8',
                  color: 'gold',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'José como Tipo de Cristo',
      intro: {
        romanNumeral: 'II',
        title: 'José como Tipo de Cristo',
        paragraphs: [
          'Los padres de la Iglesia primitiva reconocieron algo extraordinario: la vida de José de Egipto espeja la vida de Cristo con una precisión que va más allá de la coincidencia. Es el tipo más elaborado del Mesías en todo el Antiguo Testamento — un relato diseñado para enseñar quién sería Cristo antes de que Cristo llegara.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Las Similitudes Paralelas',
          blocks: [
            {
              type: 'compare_grid',
              title: 'José de Egipto y Jesucristo — los paralelos',
              left: {
                label: 'José de Egipto',
                points: [
                  'Amado especialmente por su padre (Génesis 37:3)',
                  'Enviado por su padre a visitar a sus hermanos (Gén. 37:13)',
                  'Rechazado y traicionado por sus propios hermanos (Gén. 37:18-28)',
                  'Vendido por piezas de plata (Gén. 37:28 — 20 piezas)',
                  'Falsamente acusado y condenado siendo inocente (Gén. 39:20)',
                  'Encarcelado entre dos criminales (Gén. 40:2-3)',
                  'Exaltado a la diestra del más poderoso (Gén. 41:40-44)',
                  'Perdonó a quienes lo traicionaron (Gén. 45:4-8)',
                  'Salvó a todos los que vinieron a él (Gén. 47:15-25)',
                ],
              },
              right: {
                label: 'Jesucristo',
                points: [
                  'Amado del Padre ("Mi Hijo Amado") (Marcos 1:11)',
                  'Enviado por el Padre al mundo (Juan 3:16)',
                  'Rechazado por "los suyos" (Juan 1:11)',
                  'Traicionado por 30 piezas de plata (Mateo 26:15)',
                  'Condenado siendo inocente (Lucas 23:4, 14)',
                  'Crucificado entre dos criminales (Lucas 23:32-33)',
                  'Exaltado a la diestra del Padre (Hechos 7:55)',
                  'Perdonó a sus verdugos (Lucas 23:34)',
                  'Salva a todos los que vienen a él (Juan 3:17)',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'Los "tipos" en las Escrituras — diseño, no coincidencia',
              body: 'Un "tipo" o "figura" bíblica es una persona, evento, o institución del Antiguo Testamento que prefigura y anuncia algo mayor en el Nuevo Testamento o en la Restauración. Los tipos no son alegorías inventadas por lectores creativos — son patrones intencionalmente diseñados por Dios para preparar a su pueblo para reconocer al Mesías cuando llegara. El Señor mismo estableció que las Escrituras "testifican de mí" (Juan 5:39). La vida de José es el tipo tipológico más completo del Mesías.',
            },
            {
              type: 'highlight_verse',
              text: 'Y José dijo a sus hermanos: Acercaos a mí. Y ellos se acercaron. Y él dijo: Yo soy José vuestro hermano, el que vendisteis para Egipto. Ahora, pues, no os entristezcáis, ni os pese de haberme vendido acá; porque para preservación de vida me envió Dios delante de vosotros.',
              reference: 'Génesis 45:4–5',
            },
            {
              type: 'deep_dive',
              badge: 'Teología',
              title: 'La providencia en la traición — Génesis 45:5-8',
              paragraphs: [
                'La respuesta de José a sus hermanos es teológicamente radical: "No fuerais vosotros los que me vendisteis acá, sino Dios." Esto no es negación de la responsabilidad humana — sus hermanos pecaron realmente. Es una afirmación de que Dios puede incorporar incluso la maldad humana en sus propósitos.',
                'La misma lógica aplica a la Crucifixión: quienes condenaron a Cristo pecaron realmente (Hechos 2:23: "entregado por el determinado consejo y anticipado conocimiento de Dios" — pero también "matasteis"). El plan de Dios no requiere el mal — lo redime retroactivamente.',
                'Cuando José dice "para preservación de vida me envió Dios," está articulando el principio central del evangelio: el sufrimiento más injusto puede convertirse en el instrumento de la mayor salvación. No porque el sufrimiento sea bueno en sí, sino porque Dios tiene la capacidad de usarlo para bien.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Integridad en la Prueba',
      intro: {
        romanNumeral: 'III',
        title: 'La Integridad en la Prueba',
        paragraphs: [
          'Tres veces José fue probado en su carácter cuando podría haber tomado el camino fácil: podría haber cedido a la esposa de Potifar, podría haber amargado su corazón en la prisión, podría haber vengado a sus hermanos. Tres veces eligió la integridad. Cada elección costó — y cada elección preparó el siguiente paso.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Tres Momentos de Elección',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y aconteció que habló ella a José cada día, y él no la escuchó para acostarse con ella, para estar con ella. Y aconteció un día, que entró él en casa para hacer su oficio, y no había nadie de los de casa allí. Y ella lo asió por su ropa, diciendo: Duerme conmigo. Entonces él dejó su ropa en las manos de ella, y huyó y salió.',
              reference: 'Génesis 39:10–12',
            },
            {
              type: 'key_points',
              title: 'Las tres grandes pruebas de José',
              points: [
                'La tentación de Potifar: podría haber cedido — era esclavo y su ama tenía poder sobre él. Eligió la integridad y perdió su libertad (Gén. 39:10-20)',
                'La prisión injusta: podría haber amargado su corazón — fue encarcelado siendo inocente. Eligió la fidelidad y se ganó la confianza del carcelero (Gén. 39:21-23)',
                'El perdón de los hermanos: podría haberse vengado — tenía todo el poder para destruirlos. Eligió el perdón y restauró a su familia (Gén. 45:1-15)',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'El patrón: Dios está con él en cada caída',
              body: 'Génesis 39:2: "Mas Jehová estaba con José." Génesis 39:21: "Pero Jehová estaba con José." El texto repite esto antes y después de cada desastre. No dice que Dios evitó el desastre — dice que Dios estuvo presente en él. Este es el patrón de la providencia divina en la vida de los santos: no ausencia del sufrimiento sino presencia divina dentro de él. La misma promesa aparece en DyC 122:8: "El Hijo del Hombre ha descendido debajo de todo."',
            },
            {
              type: 'highlight_verse',
              text: 'Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo.',
              reference: 'Génesis 50:20',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: '2 Nefi 3 — La Profecía del Otro José',
      intro: {
        romanNumeral: 'IV',
        title: '2 Nefi 3 — La Profecía del Otro José',
        paragraphs: [
          'El Libro de Mormón añade una dimensión al relato de José de Egipto que la Biblia solo insinúa. En 2 Nefi 3, Lehi en su lecho de muerte le profetiza a su hijo José sobre un descendiente de José de Egipto que sería levantado en los últimos días para restaurar el evangelio. El nombre de ese descendiente: José.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: '2 Nefi 3 — El Profeta del Final de los Días',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y él reveló a José que Dios levantaría un fruto de sus riñones; y que será reconocido para sus hermanos, así como lo reconocieron sus hermanos. Por tanto, el fruto de sus riñones escribirá; y el fruto de los riñones de Judá escribirá; y las que serán escritas por el fruto de tus riñones, y también lo que será escrito por el fruto de los riñones de Judá, crecerán juntas, para confundir las falsas doctrinas y poner fin a las contiendas, y establecer la paz.',
              reference: '2 Nefi 3:12',
            },
            {
              type: 'doctrine_box',
              title: 'Los paralelos entre los dos Josés',
              body: '2 Nefi 3:14-15 describe al profeta de los últimos días con el nombre "José" — y los paralelos con el José de Egipto son deliberados. Ambos son amados por su padre. Ambos son rechazados por sus hermanos (el pueblo que debía recibirlos). Ambos son instrumentos de salvación para muchos. Ambos son exaltados después del rechazo. José Smith fue a menudo comparado con su ancestro bíblico por los primeros santos — ambos tuvieron visiones de la noche, ambos sufrieron encarcelamiento injusto, ambos perdonaron a sus perseguidores.',
            },
            {
              type: 'highlight_verse',
              text: 'Y se llamará como yo; y será semejante a mí. Porque lo que el Señor obró por medio de mí beneficiará a mi pueblo, y así también lo que obró por medio de él beneficiará a mi pueblo en los postreros días.',
              reference: '2 Nefi 3:15',
            },
            {
              type: 'deep_dive',
              badge: '2 Nefi 3',
              title: 'Una profecía dentro de una profecía',
              paragraphs: [
                '2 Nefi 3 es Lehi citando una profecía de José de Egipto — una profecía que Joseph Smith restauró en su Traducción Inspirada de la Biblia (JST Génesis 50:24-38). La Biblia hebrea masorética no contiene esta profecía; su pérdida es parte de lo que 1 Nefi 13:26-29 llama las "partes claras y más preciosas" removidas del texto bíblico.',
                'La restauración de esta profecía a través del Libro de Mormón es, en sí misma, un cumplimiento de la profecía: el libro del fruto de los riñones de José (el Libro de Mormón, a través de los nefitas que descienden de Manaseh, hijo de José de Egipto) y el libro del fruto de los riñones de Judá (la Biblia) "crecerán juntas" (2 Nefi 3:12).',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Perdón como Acto Teológico',
      intro: {
        romanNumeral: 'V',
        title: 'El Perdón como Acto Teológico',
        paragraphs: [
          'El momento más teológicamente cargado de toda la historia de José no es su exaltación — es el momento en que revela su identidad a sus hermanos. Lo que dice y lo que hace en ese momento revela algo sobre la naturaleza del perdón que ninguna abstracción doctrinal puede enseñar.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Génesis 45 — El Gran Perdón',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Entonces José no pudo contenerse delante de todos los que estaban al lado suyo, y clamó: Haced salir a todos de delante de mí. Y no quedó nadie con él, cuando José se dio a conocer a sus hermanos. Y lloró a grandes voces; y oyeron los egipcios, y oyó también la casa de Faraón.',
              reference: 'Génesis 45:1–2',
            },
            {
              type: 'paragraph',
              text: 'José lloró. No lloró de rabia — lloró de amor. Llevaba décadas sin ver a sus hermanos. El hombre más poderoso de Egipto después del Faraón, en su momento de mayor poder, lo primero que hizo fue llorar y perdonar. No exigió explicaciones. No presentó la cuenta. Se reveló como hermano, no como juez.',
            },
            {
              type: 'key_points',
              title: 'Lo que el perdón de José revela sobre el perdón',
              points: [
                'El perdón no requiere que el ofensor lo pida primero — José perdonó antes de que sus hermanos se lo pidieran',
                'El perdón coexiste con el dolor — José lloró; el perdón no elimina el sufrimiento pasado, lo trasciende',
                'El perdón reencuadra la narrativa — "no fuerais vosotros, sino Dios" cambia la historia de traición en historia de providencia',
                'El perdón restaura la relación — José no solo perdonó, los invitó a vivir con él en Egipto',
                'El perdón es un acto de poder, no de debilidad — el hombre más poderoso de Egipto eligió no usar ese poder para vengarse',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Perdonar no es decir que lo que ocurrió estuvo bien. Es decir: lo que ocurrió no tendrá el poder de definir mi futuro ni el tuyo. Es el acto más costoso que un ser humano puede hacer — y el más parecido a Cristo. Cuando perdonas a quien te traicionó, estás haciendo exactamente lo que hizo José, exactamente lo que hizo Cristo en la cruz: tomando el veneno de la injusticia y transformándolo en libertad.',
              name: 'Jeffrey R. Holland',
              role: '"The Ministry of Reconciliation", Conferencia General, octubre 2018 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'El Legado de José — Para Nuestros Días',
      intro: {
        romanNumeral: 'VI',
        title: 'El Legado de José — Para Nuestros Días',
        paragraphs: [
          'La historia de José de Egipto no terminó hace 3,500 años. Las profecías de Lehi en 2 Nefi 3 y la historia de Joseph Smith como descendiente de José de Egipto conectan este relato antiguo con la Restauración del evangelio en el siglo XIX — y con la misión de la Iglesia hoy.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'José de Egipto, Joseph Smith y Nosotros',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'José revelándose a sus hermanos — momento del gran perdón en Génesis 45',
              caption: '"No os entristezcáis... para preservación de vida me envió Dios" — Génesis 45:5',
              contextCard: {
                label: 'jose-egipto-perdon-hermanos',
              },
            },
            {
              type: 'paragraph',
              text: 'Joseph Smith era descendiente del José bíblico a través de Manaseh (según profecía en DyC 86:8-10 y la bendición patriarcal de muchos miembros de tribus de José). La profecía de 2 Nefi 3 se cumplió: un descendiente de José de Egipto fue levantado para traer escrituras, para restaurar el evangelio, y su nombre era José — "como yo, se llamará como yo" (2 Nefi 3:15).',
            },
            {
              type: 'doctrine_box',
              title: 'El principio del "segundo nacimiento" — descenso antes de la exaltación',
              body: 'El patrón de la vida de José — favorito → traicionado → prisión → exaltado — no es solo biográfico. Es el patrón del evangelio. Cristo siguió el mismo patrón: Gloria premortal → Mortalidad → Crucifixión → Resurrección y exaltación. En la Restauración, DyC 122 le dice a Joseph Smith encarcelado: "El Hijo del Hombre ha descendido debajo de todo." La exaltación siempre sigue al descenso. La túnica de muchos colores precede el pozo. El pozo precede Egipto. Egipto precede la diestra del Faraón.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Según 2 Nefi 3:15, el profeta del final de los días descendiente de José de Egipto se llamaría con el mismo nombre que José.',
              answer: true,
              explanation: 'Correcto. 2 Nefi 3:15 dice: "Y se llamará como yo; y será semejante a mí." Lehi cita esta profecía de José de Egipto al bautizar a su hijo pequeño también llamado José. La profecía se cumplió con Joseph Smith, descendiente de la tribu de Efraín/Manaseh (hijos de José de Egipto).',
            },
            {
              type: 'quiz',
              quizType: 'fill_blank',
              question: 'Génesis 50:20 dice: "Vosotros pensasteis mal contra mí, mas Dios lo encaminó a _____."',
              answer: 'bien',
              explanation: '"Vosotros pensasteis mal contra mí, mas Dios lo encaminó a bien, para hacer lo que vemos hoy, para mantener en vida a mucho pueblo." Este versículo es el resumen teológico de toda la vida de José: la providencia divina puede redimir incluso los actos más maliciosos de los seres humanos y convertirlos en instrumentos de salvación.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay una "traición" en tu vida — algo que te hicieron que todavía no has podido decir "Dios lo encaminó a bien"? ¿Cuál de las tres grandes pruebas de José (tentación, prisión injusta, poder para vengarse) resuena más con algo que estás enfrentando ahora? ¿Y hay algo en el patrón descenso-exaltación de José que te da esperanza sobre una situación difícil actual?',
            },
          ],
        },
      ],
    },
  ],
}
