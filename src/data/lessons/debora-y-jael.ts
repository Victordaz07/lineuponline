import type { Lesson } from '@/types/doctrine'

export const deboraYJael: Lesson = {
  id: 'debora-y-jael',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'debora',
  title: 'Jael',
  subtitle: 'La estaca de la tienda y el fin de Sísara',
  author: 'Fuentes: Jueces 4:17-22; Jueces 5:24-27; ética bíblica del Antiguo Testamento; arqueología kenita',
  description: 'Después de la batalla, Sísara huyó hacia la tienda de Jael — esposa de Heber el quenita, un aliado de Canaán. Lo que ocurrió dentro de esa tienda cumplió la profecía de Débora y puso fin a la guerra. El texto y el cántico que lo celebra son moralmente complejos y teológicamente ricos.',
  level: 'AVANZADO',
  icon: '🏕️',
  duration: 35,
  order: 6313,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'debora-la-guerrera',
  nextLessonId: 'debora-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: 'La huida de Sísara',
      intro: {
        romanNumeral: 'I',
        title: 'Jueces 4:17 — El General que Huyó a Pie',
        paragraphs: [
          'Mientras el ejército israelita perseguía los restos del ejército cananeo, Sísara huyó solo a pie. No hacia Haroset-goim ni hacia Hazor — hacia la tienda de una mujer con la que su rey tenía paz.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Por qué Sísara eligió la tienda de Jael',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:17',
              text: 'Y Sísara huyó a pie a la tienda de Jael, mujer de Heber el quenita; porque había paz entre Jabín rey de Hazor y la casa de Heber el quenita.',
            },
            {
              type: 'paragraph',
              text: 'El texto explica la elección de Sísara con una sola frase: había paz entre Jabín y la casa de Heber el quenita. La paz (shalom) en el contexto político del Antiguo Testamento implicaba un tratado formal de no agresión, y a menudo de apoyo mutuo. Sísara eligió la tienda de Jael porque era territorio neutral, o más aún, territorio amigo. Creía que estaba buscando refugio en la casa de un aliado.',
            },
            {
              type: 'deep_dive',
              badge: 'CONTEXTO HISTÓRICO',
              title: 'Los quenitas — la tribu entre Israel y Canaán',
              paragraphs: [
                'Los quenitas eran un grupo seminómada con lazos complejos tanto con Israel como con las poblaciones cananeas. Hobab, suegro de Moisés, era quenita (Jueces 4:11; Números 10:29), lo que establecía una relación histórica de amistad entre Israel y este clan. Sin embargo, Heber el quenita específicamente había roto con el resto de los quenitas del sur y acampado cerca de Cedes, en territorio de Neftalí — y mantenía paz con Jabín, el rey cananeo.',
                'Esta situación ambigua explica por qué el texto señala explícitamente el tratado de paz entre Jabín y Heber. No todos los quenitas eran aliados de Canaán — solo Heber. Y Sísara sabía esto: por eso eligió la tienda de Heber (o de su esposa) como refugio.',
                'Lo que Sísara no sabía era que Jael tenía sus propias lealtades — que no necesariamente coincidían con las de su esposo. El texto no nos dice si Jael actuó por lealtad a Israel, por un impulso personal, o por percibir que la marea había cambiado. Solo describe lo que hizo.',
              ],
            },
            {
              type: 'paragraph',
              text: 'La huida a pie es significativa. Un carro le hubiera sido más rápido que cualquier infante perseguidor, pero el carro era ya inutilizable — atrapado en el barro del Quisón desbordado, o tal vez ya destruido en la batalla. El general de los 900 carros de hierro llegó a la tienda de Jael como cualquier soldado derrotado: a pie, solo y buscando dónde esconderse.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Los códigos de hospitalidad del Oriente Próximo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Antes de entender lo que ocurrió dentro de la tienda de Jael, es esencial comprender el peso que tenían los códigos de hospitalidad en el Oriente Próximo antiguo. En las culturas nómadas y seminómadas del Levante y Arabia, ofrecer hospitalidad a un viajero o refugiado era una obligación sagrada que comprometía al anfitrión a proteger al huésped con su propia vida. Una vez que alguien cruzaba el umbral de tu tienda y aceptabas darle refugio, matar a esa persona era la violación más grave posible del código social.',
            },
            {
              type: 'doctrine_box',
              title: 'La hospitalidad en la Biblia — un código sagrado',
              body: 'El código de hospitalidad aparece en toda la Biblia: Abraham recibe a los tres varones (Génesis 18), Lot protege a los ángeles en Sodoma a costa de su propia seguridad (Génesis 19), la mujer de Shunem alimenta y alberga a Eliseo (2 Reyes 4). En todos estos casos, la hospitalidad es presentada como virtud religiosa, no simplemente como costumbre cultural. Que Jael violara este código es lo que hace su acción moralmente compleja: no es simplemente un asesinato — es una traición a una de las normas más sagradas de su cultura.',
            },
            {
              type: 'compare_grid',
              title: 'La hospitalidad de Jael — lo que ofrecía y lo que hizo',
              left: {
                label: 'La hospitalidad aparente',
                points: [
                  '"Ven, señor mío, ven a mí, no tengas temor" (Jueces 4:18)',
                  'Lo cubrió con una manta — señal de protección y refugio',
                  'Le dio leche cuando pidió agua — hospitalidad superior a lo pedido',
                  'Le dijo que guardara la puerta — asumió la función de guardiana del huésped',
                  'Sísara se durmió creyendo estar en manos de un aliado',
                ],
              },
              right: {
                label: 'Lo que realmente ocurrió',
                points: [
                  'Buscó una estaca de tienda y un mazo mientras él dormía',
                  'Clavó la estaca en su sien, pasándola hasta la tierra (Jueces 4:21)',
                  'Sísara murió sin poder resistir',
                  'Cuando llegó Barac buscando a Sísara, Jael lo mostró muerto',
                  'La profecía de Débora ("en mano de mujer") se cumplió exactamente',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La muerte de Sísara',
      intro: {
        romanNumeral: 'II',
        title: 'Jueces 4:18-22 — Dentro de la Tienda',
        paragraphs: [
          'El texto narra lo que ocurrió dentro de la tienda con una sobriedad que hace la escena más perturbadora, no menos. Cada detalle está ahí, sin dramatismo añadido.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La narrativa — texto completo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:18-21',
              text: 'Y saliendo Jael a recibir a Sísara, le dijo: Ven, señor mío, ven a mí, no tengas temor. Y él vino a ella a la tienda, y ella le cubrió con una manta. Y él le dijo: Te ruego me des a beber un poco de agua, pues tengo sed. Y ella abrió un odre de leche y le dio de beber, y le volvió a cubrir. Y él le dijo: Ponte a la puerta de la tienda, y si alguien viniere y te preguntare, diciendo: ¿Hay aquí alguno? tú dirás que no. Entonces Jael mujer de Heber tomó una estaca de la tienda, y poniendo un mazo en su mano, se llegó a él calladamente y le metió la estaca por las sienes, y la enclavó en la tierra, pues él estaba cargado de sueño y cansado; y así murió.',
            },
            {
              type: 'paragraph',
              text: 'El texto es extraordinariamente detallado en los medios: una estaca de tienda, un mazo, el acercamiento callado, el golpe a las sienes, la estaca que pasó hasta la tierra. La mención de que Sísara "estaba cargado de sueño y cansado" es el único elemento que humaniza al general cananeo en este momento: era un hombre exhausto que había huido de una derrota catastrófica y creía estar a salvo. El texto no indica que Jael dudó.',
            },
            {
              type: 'paragraph',
              text: 'La estaca de tienda no era un arma de guerra — era la herramienta de trabajo de una mujer nómada. Clavar y desclavar estacas de tienda para montar y desmontar el campamento era trabajo de mujeres en la cultura quenita. Jael usó el instrumento de su trabajo diario. El cántico de Débora en el capítulo 5 celebrará este detalle explícitamente: "su mano extendió hacia la estaca, y su diestra al mazo de trabajadores" (Jueces 5:26).',
            },
          ],
        },
        {
          id: 't2-2',
          title: 'El cumplimiento de la profecía',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 4:22',
              text: 'Y siguiendo Barac a Sísara, Jael salió a recibirle, y le dijo: Ven, y te mostraré al varón que tú buscas. Y él entró donde ella estaba, y he aquí Sísara yacía muerto con la estaca por la sien.',
            },
            {
              type: 'paragraph',
              text: 'La llegada de Barac a la tienda de Jael cierra el círculo de la profecía de Débora: "en mano de mujer venderá Jehová a Sísara" (Jueces 4:9). Barac llegó buscando al general enemigo. Lo encontró ya muerto. La victoria que él había perseguido durante la batalla estaba consumada — pero no por su mano. El texto no expresa ni lamento ni sorpresa por parte de Barac. La profecía se había cumplido exactamente.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'Barac fue quien mató a Sísara después de haberlo perseguido desde el campo de batalla.',
              answer: false,
              explanation: 'No. Débora había profetizado que "en mano de mujer venderá Jehová a Sísara" (Jueces 4:9). Fue Jael, esposa de Heber el quenita, quien mató a Sísara con una estaca de tienda mientras dormía. Cuando Barac llegó, Sísara ya estaba muerto.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Cántico — "Bendita entre las mujeres"',
      intro: {
        romanNumeral: 'III',
        title: 'Jueces 5:24-27 — La Celebración Poética de una Acción Moralmente Compleja',
        paragraphs: [
          'El cántico de Débora no solo narra la muerte de Sísara — la celebra. Con un lenguaje poético extraordinariamente vívido, Jael recibe uno de los elogios más altos del texto bíblico. Y la escena está descrita con una lentitud visual que hace imposible apartar la vista.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: '"Bendita entre las mujeres sea Jael"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 5:24-27',
              text: 'Bendita entre las mujeres sea Jael, mujer de Heber el quenita; sobre las mujeres bendita sea en la tienda. El pidió agua, y ella dio leche; en tazón de nobles le presentó mantequilla. Su mano izquierda puso a la estaca, y su diestra al mazo de trabajadores; y golpeó a Sísara, horadó su cabeza, hirió y atravesó sus sienes. Cayó entre sus pies, quedó tendido; entre sus pies cayó, quedó tendido; donde sus pies se doblaron, allí quedó muerto.',
            },
            {
              type: 'paragraph',
              text: 'La expresión "bendita entre las mujeres" es una de las formas superlativas del hebreo bíblico — el elogio más alto que puede darse a una mujer. Aparece en solo un otro lugar del canon bíblico: en la salutación del ángel Gabriel a María (Lucas 1:28, 42). El hecho de que este elogio máximo sea compartido entre Jael y María es uno de los paralelos intertextuales más intrigantes de la Biblia.',
            },
            {
              type: 'paragraph',
              text: 'La descripción de la muerte de Sísara en los versículos 26-27 está en tiempo presente en el hebreo original — un efecto de cámara lenta que hace que la escena se desarrolle ante el lector visíbilmente. La repetición de "cayó entre sus pies... quedó tendido... entre sus pies cayó... quedó tendido... allí quedó muerto" no es torpeza literaria — es el equivalente hebreo de una cámara que hace zoom sobre el resultado, repitiéndolo para asegurarse de que el lector entiende: el general de los 900 carros terminó en el suelo a los pies de una mujer nómada.',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'La madre de Sísara — la imagen final del cántico',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Jueces 5:28-30',
              text: 'La madre de Sísara se asoma a la ventana, y por entre las celosías a voces dice: ¿Por qué tarda su carro en venir? ¿Por qué las ruedas de sus carros se detienen? Las más avisadas de sus damas le responden, y ella misma se responde a sí misma: ¿No han hallado botín, y lo están repartiendo? A cada uno una muchacha, dos mozas; los despojos de colores para Sísara, los despojos de colores bordados, bordados a ambos lados, para los cuellos del que lleva el botín.',
            },
            {
              type: 'paragraph',
              text: 'El cántico termina con una de las imágenes más literariamente complejas de toda la Biblia: la madre de Sísara esperando en su ventana, imaginando que su hijo retrasa porque está distribuyendo el botín. Sus damas de compañía la tranquilizan con las mismas racionalizaciones. El lector sabe lo que la madre no sabe: Sísara no volverá jamás.',
            },
            {
              type: 'paragraph',
              text: 'Esta imagen final del cántico es teológicamente perturbadora. El poema que celebra la victoria de Israel y la muerte del opresor termina mostrando al enemigo como una madre esperando en la oscuridad. No hay celebración en esta imagen — hay pathos. La misma Débora que celebra la muerte de Sísara cierra su cántico con la imagen humana de una madre que no lo sabe todavía. El texto no resuelve esta tensión. La deja.',
            },
            {
              type: 'central_quote',
              text: 'La victoria tiene un costo. El enemigo también tiene una madre esperando en la ventana.',
              attribution: 'Reflexión sobre el final del Cántico de Débora — Jueces 5:28-30',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La complejidad moral de Jael',
      intro: {
        romanNumeral: 'IV',
        title: 'Una Acción que el Texto Celebra pero que la Ética Complica',
        paragraphs: [
          'El asesinato de Sísara por Jael es uno de los textos más debatidos de la ética bíblica. El cántico lo celebra. Los códigos de hospitalidad lo condenan. ¿Cómo leer esto?',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La tensión — hospitalidad vs. lealtad',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los rabinos y teólogos medievales debatieron extensamente el acto de Jael. La posición más estricta señalaba que Jael violó una de las normas más sagradas de su cultura: la protección del huésped. Sísara había buscado refugio y ella lo había recibido con gestos formales de hospitalidad — lo cubrió, le dio de beber, prometió vigilar la puerta. Matar al huésped dormido violaba todo eso.',
            },
            {
              type: 'paragraph',
              text: 'La posición alternativa argumenta que el tratado de paz de Heber con Jabín no era de Jael — era de su esposo. Y que Jael, con sus propias lealtades hacia Israel (los quenitas tenían historia con Israel a través de Moisés), actuó según una lealtad más profunda que el protocolo de hospitalidad. El texto no resuelve la pregunta. Simplemente describe lo que ocurrió y lo celebra como instrumento de la providencia divina.',
            },
            {
              type: 'crisis_cards',
              cards: [
                { num: '01', title: 'La violación del código de hospitalidad', desc: 'Jael había dado refugio formal a Sísara — la hospitalidad comprometía a protegerlo. Matar al huésped dormido era la violación más grave del código social nómada.', color: 'red' },
                { num: '02', title: 'La lealtad a Israel sobre el tratado de su esposo', desc: 'El tratado de paz era de Heber, no necesariamente de Jael. Los quenitas tenían lazos históricos con Israel. Jael puede haber actuado según una lealtad más fundamental que la diplomacia de su esposo.', color: 'blue' },
                { num: '03', title: 'La perspectiva providencial del texto', desc: 'El texto bíblico y el cántico de Débora celebran a Jael sin reservas. Desde la perspectiva del narrador, su acto fue instrumento de la liberación divina de Israel. El texto no pide disculpa por ella.', color: 'purple' },
              ],
            },
          ],
        },
        {
          id: 't4-2',
          title: 'El precedente bíblico de la complejidad moral',
          blocks: [
            {
              type: 'paragraph',
              text: 'La historia de Jael no es el único lugar en la Biblia donde una acción moralmente compleja es presentada como instrumento de la providencia. Las parteras egipcias que mintieron para salvar a los bebés hebreos (Éxodo 1:15-21) fueron bendecidas por Dios. Rahab la prostituta mintió para proteger a los espías israelitas y fue incluida en el linaje de Jesús (Josué 2; Mateo 1:5; Hebreos 11:31). El texto bíblico no resuelve siempre la tensión ética — la presenta y deja al lector con ella.',
            },
            {
              type: 'deep_dive',
              badge: 'ÉTICA BÍBLICA',
              title: 'Jael en la historia de la interpretación',
              paragraphs: [
                'La tradición patrística cristiana tendía a alegorizar a Jael: la estaca representaba la cruz, Sísara era el diablo, y la muerte de Sísara prefiguraba la derrota del mal en la crucifixión. Esta lectura tipológica evitaba la pregunta moral central al convertirla en símbolo.',
                'Los reformadores Calvino y Lutero se dividieron. Calvino defendía a Jael argumentando que Dios puede usar instrumentos imperfectos para sus propósitos sin que eso justifique los medios en circunstancias ordinarias. Lutero era más incómodo con la celebración del texto.',
                'La posición más honesta puede ser simplemente reconocer que el texto nos da lo que tiene: la celebración de un resultado (la liberación de Israel) a través de un instrumento moralmente complejo (la traición de la hospitalidad). Que Débora — la profetisa, la jueza, la mujer de Dios — celebre esto en su cántico es parte de la información que el texto nos da. No nos pide resolver la tensión. Nos pide que la habitemos.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo manejas los textos bíblicos que presentan complejidad moral sin resolverla? ¿La tensión de la historia de Jael te incomoda, y qué crees que el texto quiere que hagas con esa incomodidad?',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué dice el hecho de que el texto celebre a Jael sobre cómo Dios usa instrumentos imperfectos o moralmente complejos para sus propósitos? ¿Te parece coherente o perturbador?' },
                { id: 'p2', question: 'La madre de Sísara esperando en la ventana: ¿por qué crees que Débora incluyó esta imagen al final de un cántico de victoria? ¿Qué nos dice sobre ella como persona?' },
                { id: 'p3', question: 'El cántico llama a Jael "bendita entre las mujeres" — el mismo elogio que se da a María en Lucas 1. ¿Cómo entiendes que este título máximo sea compartido entre estas dos mujeres tan diferentes?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
