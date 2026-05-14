import type { Lesson } from '@/types/doctrine'

export const saraLaEsposa: Lesson = {
  id: 'sara-la-esposa',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'sara',
  title: 'La Esposa',
  subtitle: 'Sarai de Ur: antes de la promesa',
  author: 'Fuentes: Génesis 11–23; Romanos 4; Hebreos 11',
  description: 'Sara fue la esposa de Abraham antes de que hubiera promesa, antes del nuevo nombre, antes del milagro. Esta lección explora a la mujer humana: su origen en Ur, su matrimonio, los peligros de su belleza y lo que significaba ser esposa nómada en el Oriente Próximo antiguo.',
  level: 'BÁSICO',
  icon: '👩',
  duration: 30,
  order: 6010,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'sara-la-risa',
  studySections: [
    {
      id: 's1',
      title: 'De Ur a Canaán',
      intro: {
        romanNumeral: 'I',
        title: 'Génesis 11 — Los Orígenes de Sarai',
        paragraphs: [
          'Antes de que Dios le diera un nuevo nombre, había una mujer llamada Sarai nacida en Ur de los Caldeos, la ciudad más avanzada del mundo en su tiempo.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Ur de los Caldeos: el mundo que dejó Sara',
          blocks: [
            {
              type: 'paragraph',
              text: 'Génesis 11:31 nos dice que Sarai era parte de la familia de Téraj, y que Ur de los Caldeos era su ciudad de origen. En el siglo XIX a.C., Ur no era un pueblo de agricultores: era una metrópoli. Las excavaciones arqueológicas de Leonard Woolley en los años 1920 revelaron palacios, templos escalonados (zigurats), sistemas de alcantarillado, escritura cuneiforme, comercio internacional y cementerios reales con ajuares de oro que dejaron sin palabras al mundo moderno. Sarai abandonó civilización, no pobreza.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              alt: 'El zigurat de Ur reconstruido',
              caption: 'El Gran Zigurat de Ur, dedicado al dios lunar Nanna, dominaba el horizonte de la ciudad natal de Sarai.',
              contextCard: {
                year: 'c. 2100 a.C.',
                place: 'Ur, Mesopotamia (actual Irak)',
                label: 'Ciudad natal de Sarai',
              },
            },
            {
              type: 'deep_dive',
              badge: 'Contexto Histórico',
              title: 'La religión en Ur: lo que Sara dejó atrás',
              paragraphs: [
                'Josué 24:2 declara explícitamente que los antepasados de Abraham — incluyendo Téraj, padre de Abraham — "sirvieron a dioses ajenos" al otro lado del Río Éufrates. Ur era una ciudad profundamente religiosa: su deidad principal era Nanna (Sin en acadio), el dios de la luna. El Gran Zigurat era literalmente la "casa de la montaña" del dios, con sacerdotisas y sacerdotes que servían en el complejo del templo.',
                'La fe de Sara no comenzó en la estabilidad sino en el abandono. Antes de que Dios prometiera nada, ya le había costado algo concreto: dejar la única cultura, familia extendida, sistema religioso e infraestructura que conocía. La fe que aparece en Hebreos 11:11 tiene raíces profundas en una vida de abandono que comenzó mucho antes de que naciera Isaac.',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Sarai, hija de Téraj',
              body: 'Génesis 20:12 revela un dato que ningún lector moderno puede pasar por alto: Abraham dice al rey Abimelec que Sara "en verdad es mi hermana, hija de mi padre, mas no hija de mi madre." En el mundo del antiguo Oriente Próximo, los matrimonios entre medios hermanos eran legales y comunes, especialmente entre la clase alta. La relación entre Abraham y Sara no era simplemente conyugal — era también familiar, de clan, de origen compartido. Esto añade una dimensión de profundidad histórica al vínculo entre ellos.',
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El llamado que también fue el suyo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 12:1',
              text: 'Pero Jehová había dicho a Abram: Vete de tu tierra y de tu parentela, y de la casa de tu padre, a la tierra que te mostraré.',
            },
            {
              type: 'paragraph',
              text: 'El llamado en Génesis 12:1 está dirigido gramaticalmente a Abram en singular. Pero Sara fue. No hay registro de que Dios le hablara a ella directamente en este momento — solo más tarde (Génesis 18:10, 15). Y sin embargo empacó, dejó Harán, cruzó desiertos y vivió en tiendas por décadas. La obediencia de Sara al llamado de su esposo fue en sí misma un acto de fe notable: fe sin la visión directa, fe como apoyo a la visión de otro.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa seguir un llamado divino que fue hecho a otra persona? ¿Cómo experimentas tú la fe cuando el mandato fue recibido por alguien a tu lado, no directamente por ti?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Belleza que Causó Problemas',
      intro: {
        romanNumeral: 'II',
        title: 'Génesis 12 y 20 — Dos Veces en Peligro',
        paragraphs: [
          'En dos ocasiones distintas, la belleza de Sara la puso en una situación de peligro extremo — y ambas veces Abraham tomó una decisión difícil de justificar.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Egipto: "Di que eres mi hermana"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 12:11-13',
              text: 'Y aconteció que cuando estaba para entrar en Egipto, dijo a Sarai su mujer: He aquí, ahora conozco que eres mujer de hermoso aspecto; y cuando te vean los egipcios, dirán: Su mujer es; y me matarán a mí, y a ti te reservarán. Ahora, pues, di que eres mi hermana, para que me vaya bien por causa tuya, y viva mi alma por causa de ti.',
            },
            {
              type: 'paragraph',
              text: 'Sara tenía alrededor de 65 años cuando Abraham hizo este pedido en la frontera de Egipto. Que todavía fuera lo suficientemente hermosa para llamar la atención del Faraón subraya algo: el texto no exagera su belleza como un tropo literario vacío — era una realidad documentada que tuvo consecuencias concretas dos veces. El faraón tomó a Sara a su palacio (Gén 12:15), y Abraham recibió ovejas, bueyes, asnos y criados a cambio.',
            },
            {
              type: 'paragraph',
              text: 'Este pasaje es uno de los más incómodos del Génesis. La decisión de Abraham fue técnicamente verdadera (ella sí era su media hermana) pero prácticamente una mentira por omisión que expuso a Sara a riesgo de ser tomada como esposa por el faraón. El texto no emite juicio moral explícito sobre Abraham — pero tampoco lo absuelve. Dios intervino con plagas sobre la casa del faraón (v. 17). La protección de Sara vino de Dios, no del plan de su esposo.',
            },
            {
              type: 'compare_grid',
              title: 'Dos incidentes paralelos: Egipto (Gén 12) y Gerar (Gén 20)',
              left: {
                label: 'Egipto — Génesis 12',
                points: [
                  'Sara tiene aprox. 65 años',
                  'Faraón la toma al palacio',
                  'Dios envía plagas como señal',
                  'Abraham recibe regalos',
                  'El faraón expulsa a Abraham con honores',
                ],
              },
              right: {
                label: 'Gerar — Génesis 20',
                points: [
                  'Sara tiene aprox. 89 años',
                  'Abimelec la toma',
                  'Dios aparece a Abimelec en sueños',
                  'Abraham recibe ovejas, bueyes y plata',
                  'Abimelec reprende a Abraham moralmente',
                ],
              },
            },
          ],
        },
        {
          id: 't2-2',
          title: 'Gerar: el mismo plan, veinte años después',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 20:1-2',
              text: 'De allí partió Abraham hacia la tierra del Neguev, y asentó entre Cades y Shur, y habitó como forastero en Gerar. Y dijo Abraham de Sara su mujer: Es mi hermana. Y Abimelec rey de Gerar envió y tomó a Sara.',
            },
            {
              type: 'paragraph',
              text: 'En Génesis 20, el mismo episodio ocurre nuevamente en Gerar, con el rey Abimelec. Para este momento Sara tiene aproximadamente 89 años y está al borde de concebir a Isaac. La repetición del mismo patrón por parte de Abraham revela no un momento de debilidad sino una estrategia habitual. Abraham mismo lo explica en el versículo 13: "cuando Dios me hizo salir errante de la casa de mi padre, yo le dije: Esta es la merced que harás conmigo: en todos los lugares adonde lleguemos, di de mí: Mi hermano es."',
            },
            {
              type: 'doctrine_box',
              title: 'La voz que Sara no tuvo en estas decisiones',
              body: 'El texto bíblico no registra la voz de Sara en ninguno de estos dos episodios. No sabemos si fue consultada, si protestó, si lloró o si simplemente obedeció. Este silencio textual no es insignificante: refleja la realidad del mundo antiguo donde la esposa era legalmente parte de la propiedad del esposo, sin voz legal propia en estas negociaciones. La Restauración, con su doctrina del matrimonio eterno y la igual valía de la mujer ante Dios, ofrece un contraste teológico poderoso con la situación histórica en que vivió Sara.',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo reconcilias el hecho de que Abraham — padre de los fieles, modelo de fe en Romanos 4 — tomara decisiones que pusieron a Sara en situación de vulnerabilidad? ¿Qué te dice esto sobre la complejidad de la fe humana?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Vida en la Tienda',
      intro: {
        romanNumeral: 'III',
        title: 'Ser Esposa Nómada en el Oriente Próximo Antiguo',
        paragraphs: [
          'Sara no vivió en un palacio ni en una ciudad amurallada. Vivió décadas en tiendas, moviendo el campamento de un lugar a otro.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La tienda como hogar y santuario',
          blocks: [
            {
              type: 'paragraph',
              text: 'En la cultura patriarcal del segundo milenio a.C., la tienda de la esposa principal era el centro social y doméstico del clan. Génesis 24:67 dice que Isaac llevó a Rebeca "a la tienda de su madre Sara" — lo que indica que la tienda de Sara era un lugar distinguido dentro del campamento, un espacio con su propia identidad y significado incluso años después de la muerte de Sara. Era su reino dentro del reino nómada.',
            },
            {
              type: 'key_points',
              title: 'La realidad cotidiana de la esposa nómada patriarcal',
              points: [
                'Responsable de la preparación de alimentos para todo el clan (Gén 18:6: "toma pronto tres medidas de flor de harina, amasa y haz panes")',
                'Administradora de las esclavas y siervas bajo su autoridad directa (Gén 16:1)',
                'Sin tierra propia ni herencia legal separada del esposo',
                'Dependiente de la fertilidad para asegurar su posición y la herencia del clan',
                'Expuesta a los peligros del camino: hambruna, conflictos tribales, enfermedades',
                'Testigo de las promesas que se hacían a su esposo sin recibir necesariamente la palabra directa',
              ],
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'Origen en Ur',
                  text: 'Sarai nace como hija de Téraj en Ur de los Caldeos, posiblemente c. 2050 a.C.',
                  color: 'gold',
                },
                {
                  label: 'El viaje a Harán',
                  text: 'La familia de Téraj parte de Ur hacia Harán (Gén 11:31). Sarai viaja con Abraham.',
                  color: 'blue',
                },
                {
                  label: 'El llamado en Harán',
                  text: 'Dios llama a Abram (Gén 12:1). Sarai tiene aprox. 65 años. Dejan Harán.',
                  color: 'green',
                },
                {
                  label: 'Egipto',
                  text: 'La hambruna lleva al clan a Egipto. Primer episodio del "es mi hermana" (Gén 12:10-20).',
                  color: 'red',
                },
                {
                  label: 'Regreso a Canaán',
                  text: 'Abraham y Sara regresan enriquecidos pero sin el hijo prometido. La espera continúa.',
                  color: 'blue',
                },
                {
                  label: 'Gerar',
                  text: 'Segundo episodio: Abimelec toma a Sara. Dios interviene (Gén 20). Sara tiene aprox. 89 años.',
                  color: 'red',
                },
              ],
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Sarai antes de la promesa directa',
          blocks: [
            {
              type: 'paragraph',
              text: 'Es crucial entender que por décadas, Sara vivió con las promesas de Dios hechas a su esposo, no a ella directamente. En Génesis 12:2-3, Dios prometió a Abram ser padre de una gran nación, sin mencionar a Sarai. En Génesis 15, el pacto se ratifica con Abram solo — Sara no aparece en escena. Es solo hasta Génesis 17:15-16 que Dios menciona a Sara por nombre y le cambia su nombre, prometiendo que sería "madre de naciones."',
            },
            {
              type: 'paragraph',
              text: 'Esto significa que durante al menos los primeros años del peregrinaje — posiblemente más de una década — Sara fue una fiel compañera de un llamado que no le había sido hecho directamente a ella. No tenía la visión personal, no había escuchado la voz, no había recibido el pacto de primera mano. Caminar así, en fe transferida, es una de las formas más difíciles de la fe.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué dejó Sara concretamente al salir de Ur? ¿Qué tipo de vida hubiera tenido si se hubiera quedado?' },
                { id: 'p2', question: '¿Cómo describirías la fe de Sara en esta etapa: activa, pasiva, de confianza, de resignación? ¿O alguna combinación de estas?' },
                { id: 'p3', question: '¿Puedes identificar en tu vida un período en que estuviste caminando en obediencia sin haber recibido la promesa directamente?' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Nuevo Nombre',
      intro: {
        romanNumeral: 'IV',
        title: 'Génesis 17 — De Sarai a Sara',
        paragraphs: [
          'El cambio de nombre no fue cosmético. Fue el momento en que Dios incluyó a Sara directamente en el pacto que llevaba décadas siendo solo de Abraham.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: '"No la llamarás más Sarai, sino Sara"',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Génesis 17:15-16',
              text: 'Dijo también Dios a Abraham: A Sarai tu mujer no la llamarás Sarai, mas Sara será su nombre. Y la bendeciré, y también te daré de ella hijo; sí, la bendeciré, y vendrá a ser madre de naciones; reyes de pueblos vendrán de ella.',
            },
            {
              type: 'paragraph',
              text: 'Ambos nombres — Sarai y Sara — significan esencialmente "princesa" o "señora" en hebreo, pero con matices distintos. "Sarai" puede leerse como "mi princesa" (posesivo), mientras que "Sara" es simplemente "princesa" o "señora" en sentido más amplio. Algunos comentaristas ven en el cambio un movimiento de lo privado a lo universal: de ser "mi señora" (de Abraham) a ser "señora" en sentido más pleno y público. Dios la tomó de la identidad relacional y le dio una identidad de pacto propia.',
            },
            {
              type: 'key_points',
              title: 'Lo que el nuevo nombre significaba',
              points: [
                'Dios le habló directamente — ya no solo a través de Abraham',
                'Fue incluida nominalmente en el pacto abrahámico',
                'Recibió su propia bendición ("la bendeciré")',
                'Se le prometió ser "madre de naciones" — un título de alcance universal',
                '"Reyes de pueblos vendrán de ella" — su linaje tendría peso histórico directo',
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El nombre "Sara" y el nombre "Sarai" tienen significados completamente distintos en hebreo.',
              answer: false,
              explanation: 'Ambos significan algo cercano a "princesa" o "señora". La diferencia es de forma y alcance: "Sarai" puede ser un posesivo más personal, mientras que "Sara" es más amplio y universal.',
            },
            {
              type: 'reflection',
              prompt: '¿Hay momentos en tu vida espiritual en que Dios te ha llamado directamente — no solo como extensión de otra persona — y te ha dado una identidad propia dentro del pacto? ¿Cómo fue ese momento?',
            },
          ],
        },
      ],
    },
  ],
}
