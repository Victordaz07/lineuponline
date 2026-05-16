import type { Lesson } from '@/types/doctrine'

export const esterLaHuerfana: Lesson = {
  id: 'ester-la-huerfana',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'ester',
  title: 'La Huérfana',
  subtitle: 'Hadasa en el Imperio Persa',
  author: 'Fuentes: Ester 1–2; Esdras 1–6; historia del Imperio Aqueménida',
  description: 'Hadasa — su nombre hebreo significa arrayán — era una joven judía huérfana en el corazón del Imperio Persa. Criada por su primo Mardoqueo, su vida comenzó en la vulnerabilidad más absoluta. La providencia la llevaría al trono más poderoso de la tierra.',
  level: 'BÁSICO',
  icon: '🌿',
  duration: 30,
  order: 6210,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'ester-la-reina',
  studySections: [
    {
      id: 's1',
      title: 'Una niña en el exilio',
      intro: {
        romanNumeral: 'I',
        title: 'Hadasa — El Arrayán de Dios',
        paragraphs: [
          'El libro de Ester comienza con un Imperio y una fiesta. Pero la historia real comienza con una niña que no tiene padres ni patria — y un primo que la cría como propia.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El nombre que escondía una identidad',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:7',
              text: 'Y había criado a Hadasa, es decir, Ester, hija de su tío, porque era huérfana de padre y madre; y la joven era de hermosa figura y de buen parecer. Cuando su padre y su madre murieron, Mardoqueo la adoptó como hija suya.',
            },
            {
              type: 'paragraph',
              text: 'El versículo introduce dos nombres en una misma frase: Hadasa y Ester. Hadasa es el nombre hebreo — significa "arrayán", la planta aromática que en el judaísmo simboliza la justicia y la belleza del alma. Ester es el nombre persa con el que ella vivirá públicamente — posiblemente derivado del persa "sitareh" (estrella) o relacionado con la diosa Ishtar. La coexistencia de los dos nombres desde el primer versículo anticipa el tema central del libro: una mujer con doble identidad en un Imperio que no sabe quién es realmente.',
            },
            {
              type: 'paragraph',
              text: 'Ser huérfana en el mundo antiguo era una de las posiciones más vulnerables posibles. Sin padre, una mujer en la sociedad del Oriente Próximo antiguo carecía de protector legal, de red económica y de posibilidades de matrimonio establecido. Mardoqueo no solo la alimentó — la adoptó formalmente ("como hija suya"), asumiendo una responsabilidad legal y afectiva total.',
            },
            {
              type: 'doctrine_box',
              title: 'Los huérfanos en la escritura',
              body: 'La Torá menciona a los huérfanos repetidamente como grupo bajo protección divina especial (Éxodo 22:22; Deuteronomio 10:18; Salmos 68:5). Que Ester comenzara su vida en esta categoría no es detalle menor — es el punto de partida de la providencia. Dios trabaja con frecuencia a través de los que el mundo considera insignificantes para cambiar el curso de la historia.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              alt: 'Mapa del Imperio Aqueménida en el siglo V a.C.',
              caption: 'El Imperio Persa bajo Asuero (Jerjes I) se extendía desde la India hasta Etiopía — 127 provincias.',
              contextCard: {
                year: '480 a.C.',
                place: 'Susa, Persia',
                label: 'Capital imperial del Imperio Aqueménida',
              },
            },
          ],
        },
        {
          id: 't1-2',
          title: 'El contexto: judíos en la diáspora persa',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mardoqueo era "hijo de Jaír, hijo de Simei, hijo de Cis, del linaje de Benjamín" (Ester 2:5). La genealogía es significativa: lo conecta con la tribu de Benjamín y, como señalan algunos estudiosos, posiblemente con la misma familia del rey Saúl. Habían llegado a Susa como parte de las deportaciones del Imperio Babilónico (597 a.C.), y permanecieron allí incluso después de que Ciro el Grande permitiera el regreso a Judá (538 a.C.). Eran parte de la comunidad judía que eligió quedarse — o que no pudo regresar.',
            },
            {
              type: 'timeline',
              items: [
                { label: '597 a.C.', text: 'Segunda deportación babilónica — antepasados de Mardoqueo deportados', ref: '2 Reyes 24', color: 'red' },
                { label: '538 a.C.', text: 'Decreto de Ciro — judíos autorizados a regresar a Judá', ref: 'Esdras 1:1', color: 'gold' },
                { label: '486 a.C.', text: 'Asuero (Jerjes I) sube al trono persa', ref: 'Ester 1:1', color: 'blue' },
                { label: '479 a.C.', text: 'Ester se convierte en reina de Persia', ref: 'Ester 2:17', color: 'green' },
              ],
            },
            {
              type: 'paragraph',
              text: 'Vivir como judío en el Imperio Persa significaba existir en permanente equilibrio entre dos mundos: la fe heredada con sus leyes, festividades y memoria de Jerusalén — y el Imperio dominante con su idioma arameo, sus dioses, su cultura y sus demandas de lealtad. Los judíos de la diáspora no eran uniformemente pobres ni marginados — Mardoqueo "sentaba en la puerta del rey" (Ester 2:19), lo que indica una posición reconocida en la administración imperial. Pero la diferencia religiosa nunca desaparecía.',
            },
            {
              type: 'key_points',
              title: 'La situación de los judíos en Persia',
              points: [
                'Comunidades establecidas en Susa, Babilonia y otras ciudades del Imperio tras las deportaciones',
                'Algunos con posiciones en la administración imperial (como Mardoqueo)',
                'Identidad religiosa preservada pero a menudo no anunciada en contextos peligrosos',
                'Sin templo físico — la fe se expresaba en la familia, la sinagoga y las costumbres privadas',
                'Permanente vulnerabilidad ante los cambios de política imperial hacia las minorías',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Imperio y la reina destronada',
      intro: {
        romanNumeral: 'II',
        title: 'Asuero — El Rey más Poderoso del Mundo',
        paragraphs: [
          'El libro de Ester abre con una descripción del Imperio Persa que no tiene precedente en la Biblia: ciento veintisiete provincias, un festín de seis meses, y un rey capaz de redactar un decreto para cambiar el comportamiento de todas las mujeres del Imperio.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Asuero y el poder absoluto',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 1:1-3',
              text: 'Aconteció en los días de Asuero, el Asuero que reinó desde la India hasta Etiopía sobre ciento veintisiete provincias, que en aquellos días, cuando fue afirmado el rey Asuero sobre el trono de su reino, el cual estaba en Susa, capital del reino, en el año tercero de su reinado hizo banquete a todos sus príncipes y cortesanos.',
            },
            {
              type: 'paragraph',
              text: 'Los historiadores identifican a este Asuero con Jerjes I (486-465 a.C.), el rey persa que lanzó la famosa invasión de Grecia (480 a.C.) — las batallas de las Termópilas y Salamina ocurren en los años inmediatamente anteriores a la historia de Ester. Era el hombre más poderoso del mundo entonces conocido. El festín de seis meses (Ester 1:4) era en realidad una asamblea de planificación militar con celebraciones paralelas — un dato coherente con la preparación de la invasión a Grecia que registran Heródoto y otros.',
            },
            {
              type: 'deep_dive',
              badge: 'HISTORIA',
              title: 'Susa: la capital invernal del Imperio',
              paragraphs: [
                'Susa (Shushan en hebreo) era una de las cuatro capitales del Imperio Aqueménida. En invierno, cuando el calor de Persépolis y Ecbatana lo permitía, la corte real se trasladaba a Susa. Las excavaciones arqueológicas del siglo XIX descubrieron el palacio descrito en Ester — con sus patios, columnas y jardines.',
                'La "puerta del rey" mencionada repetidamente en el libro de Ester era un edificio administrativo real donde se realizaban audiencias, se administraba justicia y se procesaban peticiones. No era simplemente una entrada — era el corazón de la burocracia imperial.',
                'El libro de Ester es notablemente preciso en detalles de protocolo persa verificables arqueológicamente: el cetro de oro, la imposibilidad de revocar un decreto real, el sistema de relevos de correos imperiales. Esto sugiere que el autor tenía acceso a conocimiento de primera mano de la corte persa.',
              ],
            },
          ],
        },
        {
          id: 't2-2',
          title: 'La destitución de Vasti — el escenario que lo cambia todo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 1:11-12',
              text: 'Para que viniera la reina Vasti a la presencia del rey con la corona regia, a mostrar a los pueblos y a los príncipes su belleza; porque era hermosa. Mas la reina Vasti no quiso comparecer a la orden del rey enviada por medio de los eunucos; y el rey se enojó mucho, y se encendió en él la ira.',
            },
            {
              type: 'paragraph',
              text: 'El texto no explica el motivo de la negativa de Vasti. El texto hebreo es completamente sobrio al respecto: simplemente no quiso ir. Algunos comentaristas sugieren que exhibirse ante cientos de nobles borrachos al séptimo día de banquete era una demanda humillante para una reina. Otros señalan que la palabra "mostrar su belleza" podría tener connotaciones más explícitas en el contexto de un banquete de semana de duración. El texto se niega a juzgar a Vasti.',
            },
            {
              type: 'compare_grid',
              title: 'Vasti y Ester — dos respuestas al poder',
              left: {
                label: 'Vasti',
                points: [
                  'Se niega a obedecer una orden real humillante',
                  'Paga el precio inmediato: destituida como reina',
                  'No vuelve a aparecer en el relato',
                  'Su resistencia abre el espacio para Ester',
                ],
              },
              right: {
                label: 'Ester',
                points: [
                  'Entra en el proceso de selección como candidata anónima',
                  'Obtiene favor en cada contexto donde se la coloca',
                  'Oculta su identidad judía por instrucción de Mardoqueo',
                  'Su paciencia y sabiduría la llevan al trono',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'El resultado de la negativa de Vasti fue un decreto imperial que se envió a "todas las provincias del rey, a cada provincia conforme a su escritura, y a cada pueblo conforme a su lengua" (Ester 1:22) ordenando que toda mujer honrase a su marido. La irrupción de un episodio doméstico en la maquinaria legislativa más poderosa del mundo antiguo revela tanto la magnitud del ego herido del rey como la fragilidad de las estructuras de poder que parecen más invencibles.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué te dice sobre la providencia divina el hecho de que la historia de salvación de un pueblo entero comience con la negativa de una reina a obedecer una orden impulsiva? ¿Reconoces en tu propia historia momentos en que un aparente revés abrió una puerta que no imaginabas?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El concurso de belleza imperial',
      intro: {
        romanNumeral: 'III',
        title: 'La Búsqueda de una Nueva Reina',
        paragraphs: [
          'El proceso para encontrar una nueva reina no fue un evento digno de cuento de hadas — fue la recolección de jóvenes de todo el Imperio para un proceso de selección que duraría un año entero.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El proceso de selección — una realidad dura',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:3-4',
              text: 'Y ponga el rey personas en todas las provincias de su reino, que lleven a toda joven virgen de buen parecer a Susa, residencia real, a la casa de las mujeres, al cuidado de Hegai, eunuco del rey, guarda de las mujeres, y que les den sus atavíos; y la doncella que agrade a los ojos del rey, reine en lugar de Vasti.',
            },
            {
              type: 'paragraph',
              text: 'Lo que el texto describe con vocabulario de cuento — "toda joven virgen de buen parecer" — era en la práctica una recolección forzosa. Estas jóvenes no eran voluntarias libres que concursaban — eran seleccionadas por funcionarios imperiales y llevadas a la residencia real. Las que no eran elegidas como reina no volvían a sus hogares: quedaban en el harén real como concubinas (Ester 2:14). Ester no eligió participar en este proceso.',
            },
            {
              type: 'paragraph',
              text: 'Mardoqueo "tomó" a Ester para el proceso (Ester 2:8), probablemente no en sentido de que la forzara, sino en el sentido de que la inscribió o la acompañó cuando las autoridades vinieron. El texto señala que "Ester también fue llevada a la casa del rey, al cuidado de Hegai". La voz pasiva es significativa: ella es llevada, no va por voluntad propia. Y en ese momento, por instrucción de Mardoqueo, no reveló su pueblo ni su parentela (Ester 2:10).',
            },
            {
              type: 'doctrine_box',
              title: 'La identidad oculta como acto de sabiduría',
              body: 'El silencio de Ester sobre su origen judío no era cobardía — era prudencia en un contexto donde la identidad podía ser peligrosa. Mardoqueo, con su experiencia en la corte imperial, sabía que revelar una identidad minoritaria prematuramente podía cerrar puertas antes de que hubiera oportunidad de abrirlas. La Restauración enseña que hay momentos para declarar la verdad y momentos para guardar silencio; la sabiduría consiste en conocer la diferencia (Eclesiastés 3:7).',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El favor que no podía explicarse',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Ester 2:15',
              text: 'Cuando le llegó a Ester, hija de Abihail tío de Mardoqueo, quien la había tomado por hija, el turno para ir al rey, ninguna cosa procuró sino lo que dijo Hegai, eunuco del rey, guarda de las mujeres; y ganaba Ester el favor de todos los que la veían.',
            },
            {
              type: 'paragraph',
              text: 'La frase "ganaba Ester el favor de todos los que la veían" aparece dos veces antes de que ella llegue al rey (Ester 2:9 y 2:15). No es simplemente belleza física — es una cualidad de presencia que el texto no analiza pero que produce el mismo efecto en contextos muy diferentes: con el eunuco Hegai, con quienes conviven con ella en la casa de las mujeres, y finalmente con el propio rey (Ester 2:17). Este patrón de favor recuerda a otros personajes bíblicos en contextos de exilio: José en Egipto (Génesis 39:21), Daniel en Babilonia (Daniel 1:9).',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿Qué significa para ti que Ester comenzara su historia como huérfana y terminara como reina? ¿Qué nos dice esto sobre cómo Dios utiliza a las personas?' },
                { id: 'p2', question: '¿Cómo vivía Ester su identidad judía mientras obedecía a Mardoqueo de no revelarla? ¿Cómo mantenemos nuestra identidad espiritual en contextos donde no la podemos declarar abiertamente?' },
                { id: 'p3', question: '¿Qué aprendes del carácter de Mardoqueo, que esperaba cada día en la puerta del palacio para saber cómo estaba Ester (Ester 2:11)?' },
              ],
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El nombre hebreo de Ester era Hadasa, que significa "arrayán".',
              answer: true,
              explanation: 'Correcto. Ester 2:7 la presenta como "Hadasa, es decir, Ester". El nombre hebreo Hadasa significa arrayán, planta aromática asociada en el judaísmo con la justicia y la belleza del alma.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La teología de la huérfana',
      intro: {
        romanNumeral: 'IV',
        title: 'Lo Que la Historia de Ester Nos Dice sobre Dios',
        paragraphs: [
          'El libro de Ester es el único libro de la Biblia que no menciona el nombre de Dios. Sin embargo, la providencia está presente en cada giro del relato — comenzando con el origen de su protagonista.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La providencia invisible',
          blocks: [
            {
              type: 'paragraph',
              text: 'La ausencia del nombre de Dios en el libro de Ester no es un accidente textual — es teología. El autor construye un relato donde la providencia divina opera a través de circunstancias aparentemente casuales: la negativa de Vasti, el insomnio del rey en la noche decisiva, el favor espontáneo que Ester genera en todos los que la conocen. Dios no aparece en las páginas del libro; aparece en los patrones del libro.',
            },
            {
              type: 'central_quote',
              text: 'El Señor de Israel nunca duerme ni se adormece.',
              attribution: 'Salmos 121:4',
            },
            {
              type: 'paragraph',
              text: 'Que Ester fuera huérfana no fue un obstáculo para la providencia — fue su punto de entrada. En el sistema de valores del mundo antiguo, una huérfana sin linaje real era la candidata menos probable para el trono. En la economía de Dios, la vulnerabilidad no descalifica — con frecuencia es la condición que hace posible el llamamiento. Moisés fue abandonado en el Nilo. José fue vendido como esclavo. Samuel fue dado al templo en la infancia. La historia bíblica tiene una preferencia estructural por los que el mundo descarta.',
            },
            {
              type: 'key_points',
              title: 'Principios de la providencia en la historia de Ester',
              points: [
                'La providencia trabaja a través de personas ordinarias en circunstancias extraordinarias',
                'La vulnerabilidad inicial (orfandad, exilio, minoría) no determina el destino final',
                'El favor que Ester genera en cada contexto sugiere un don espiritual, no solo físico',
                'La paciencia de Mardoqueo — esperando en la puerta — es parte del tejido de la providencia',
                'La ausencia de milagros visibles no significa ausencia de la mano de Dios',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿En qué aspectos de tu historia personal reconoces la "providencia invisible" — esos momentos donde algo que parecía desgracia resultó ser el camino hacia algo que Dios tenía preparado?',
            },
          ],
        },
      ],
    },
  ],
}
