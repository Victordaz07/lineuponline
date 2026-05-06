import type { Lesson } from '@/types/doctrine'

export const justiciaYMisericordia: Lesson = {
  id: 'justicia-y-misericordia',
  moduleId: 'doctrina-avanzada-carne',
  title: 'Justicia y Misericordia',
  subtitle: 'Equilibradas en Cristo',
  author: 'Fuentes principales: Alma 42, 2 Nefi 9, DyC 19',
  description:
    'El dilema más profundo del universo: Dios no puede simplemente perdonar el pecado sin destruir la justicia — ni puede castigar sin destruir la misericordia. Alma 42 revela cómo la Expiación resuelve lo que ningún otro sistema puede: satisfacer ambas a la vez.',
  level: 'AVANZADO',
  icon: '⚖️',
  duration: 65,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'plan-de-salvacion',
  nextLessonId: 'convenios-eternos',
  studySections: [
    {
      id: 's1',
      title: 'El Dilema Divino',
      intro: {
        romanNumeral: 'I',
        title: 'El Dilema Divino',
        paragraphs: [
          'Hay un problema en el corazón del universo moral que ninguna religión humana había resuelto satisfactoriamente hasta la Restauración. ¿Cómo puede un Dios perfectamente justo perdonar el pecado? Si lo perdona sin pago, la justicia queda sin cumplir. Si no lo perdona, la misericordia queda sin expresar. Alma 42 lo articula con una claridad que no tiene paralelo en ningún otro texto religioso.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Por Qué Dios No Puede Simplemente Perdonar',
          blocks: [
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'A perfectly balanced scale of justice, one pan holding warm golden light (mercy), the other a stone tablet (justice), equal weight, dramatic lighting, symbolic',
              caption: 'El dilema divino — justicia y misericordia que reclaman igual derecho',
              contextCard: { label: 'El Dilema Divino — Justicia y Misericordia' },
            },
            {
              type: 'highlight_verse',
              text: 'Porque he aquí que la justicia ejerce todos sus pedidos, y también la misericordia exige todo lo que le pertenece; y así nadie puede salvarse sino mediante la expiación y la misericordia. [...] ¿Y ahora bien, cómo podría un hombre arrepentirse si no hay ley? ¿Cómo puede pecar si no hay ley? ¿Cómo puede haber ley a no ser que haya castigo? Ahora bien, se requiere una expiación.',
              reference: 'Alma 34:16; 42:17–18',
            },
            {
              type: 'paragraph',
              text: 'Alma explica a su hijo Corianton el fundamento lógico: sin justicia, la ley no tiene sentido. Sin ley, el arrepentimiento no tiene sentido. Sin arrepentimiento, el plan de salvación no tiene sentido. Dios no puede simplemente ignorar el pecado porque hacerlo destruiría el orden moral del universo — y con él, la posibilidad misma de la exaltación.',
            },
            {
              type: 'highlight_verse',
              text: '¿Y ahora bien, si Dios dejase de ser Dios? Y Dios dejaría de ser Dios si inclinase hacia la iniquidad. [...] Por tanto, de acuerdo con la justicia, el plan de redención no podía llevarse a cabo sino únicamente en base al arrepentimiento y la fe.',
              reference: 'Alma 42:13, 15',
            },
            {
              type: 'doctrine_box',
              title: 'El dilema expuesto con claridad',
              body: 'Si Dios simplemente perdona el pecado sin pago: la justicia no se cumple, la ley queda sin efecto, Dios "dejaría de ser Dios." / Si Dios castiga todo pecado sin misericordia: nadie puede salvarse, la misericordia queda sin expresar, el plan falla. / La única solución: alguien que sea a la vez perfectamente justo y perfectamente misericordioso, que pueda satisfacer las demandas de la justicia en nombre del pecador y luego extender misericordia al arrepentido. Solo Cristo califica.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Solución: La Expiación',
      intro: {
        romanNumeral: 'II',
        title: 'La Solución: La Expiación',
        paragraphs: [
          'La Expiación no es una solución de emergencia al problema del pecado. Es la solución planificada antes de la fundación del mundo al dilema entre la justicia y la misericordia. Cristo no improvisa — cumple exactamente la función para la que fue preparado desde la eternidad.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Cómo Cristo Satisface Ambas',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, Dios mismo expiará por los pecados del mundo, para efectuar el plan de misericordia, para aplacar las exigencias de la justicia, para que Dios pueda ser un Dios perfecto y justo, y también un Dios misericordioso.',
              reference: 'Alma 42:15',
            },
            {
              type: 'paragraph',
              text: 'Cristo satisface la justicia pagando el precio — "tomó sobre sí mismo los pecados del mundo" (Alma 34:15). Habiendo pagado el precio, tiene el derecho legal de extender misericordia a quienes se arrepienten. La misericordia no cancela la justicia — la cumple. El precio fue pagado; queda decidir quién lo paga: Cristo por el penitente arrepentido, o el pecador no arrepentido por sí mismo.',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, yo mando a ti que te arrepientas — arrepiéntete, no sea que te castigue con mi mano, y sufras estas cosas de las cuales no deseo que sufras, sino que te arrepientas y tomes para ti el reino del cielo.',
              reference: 'Doctrina y Convenios 19:15',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'El arrepentido — la misericordia actúa',
                items: [
                  'Se arrepiente y acepta la Expiación',
                  'Cristo paga el precio en su lugar',
                  'Recibe perdón y limpieza',
                  'La justicia queda satisfecha — por Cristo',
                  'Puede progresar hacia la exaltación',
                ],
              },
              right: {
                title: 'El no arrepentido — la justicia actúa',
                items: [
                  'Rechaza la Expiación o no la invoca',
                  'Debe pagar el precio él mismo',
                  'DyC 19:16-17: sufrirá como Cristo sufrió',
                  'La justicia queda satisfecha — por el pecador',
                  'Limitado en su progresión eterna',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Por lo cual, yo mando a ti que te arrepientas — arrepiéntete, pues estas cosas que se dijeron, son verdad, y si no te arrepientes, sufrirás así como yo; y preferiría que sufrieras por tu propio pecado y no que mis miserias te causaran tristeza.',
              reference: 'Doctrina y Convenios 19:16–17',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Vivir con Este Conocimiento',
      intro: {
        romanNumeral: 'III',
        title: 'Cómo Vivir con Este Conocimiento',
        paragraphs: [
          'Entender la justicia y la misericordia no es un ejercicio teológico abstracto. Transforma cómo ves tu propio pecado, cómo ves el pecado de otros, y cómo ves la Expiación. Tres aplicaciones prácticas.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Tres Aplicaciones que Cambian la Vida',
          blocks: [
            {
              type: 'key_points',
              title: 'Tres verdades que este principio cambia',
              points: [
                'Tu pecado tiene precio — pero ya fue pagado. El arrepentimiento no es pagar la deuda; es aceptar que Cristo ya la pagó y comprometerse a no volverla a contraer.',
                'El pecado de otros también tiene precio — juzgar sin misericordia es ignorar que tú también necesitas lo que estás negando a otros.',
                'La misericordia sin arrepentimiento no existe — Dios no puede perdonar a quien no quiere ser perdonado. El arrepentimiento es la condición, no el castigo.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La expiación no fue diseñada para que el pecado fuera barato. Fue diseñada para que el perdón fuera posible. Hay una diferencia enorme. Dios no bajó el precio del pecado — encontró a alguien que pudiera pagarlo completamente, para que nosotros pudiéramos ser libres de la deuda.',
              name: 'Jeffrey R. Holland',
              role: '"The Atonement of Jesus Christ", Liahona, marzo 2008 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Hay algún pecado en tu vida por el que sientes que "ya es demasiado tarde" o que "Dios no puede perdonar"? ¿Cómo cambia Alma 42 esa percepción? ¿Hay alguien a quien has negado misericordia porque sientes que "no se la merece"? ¿Cómo aplica el mismo principio?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Alma 42 — El Argumento Completo',
      intro: {
        romanNumeral: 'IV',
        title: 'Alma 42 — El Argumento Completo',
        paragraphs: [
          'Alma 42 es posiblemente el tratado teológico más sistemático del Libro de Mormón. Escrito a Corianton — quien había cuestionado la justicia divina como pretexto para justificar su propia inmoralidad — Alma construye paso a paso un argumento irrefutable: la justicia y la misericordia no son principios en tensión que Dios elige entre sí. Son los dos pilares del plan eterno, y la Expiación es la única arquitectura que puede sostenerlos a ambos al mismo tiempo.',
          'Recorrer los versículos clave de Alma 42 no es solo un ejercicio de estudio de las Escrituras. Es seguir el hilo de razonamiento de un profeta-padre que intenta salvar el alma de su hijo mostrándole que el universo moral de Dios es coherente, bello y perfectamente diseñado para la redención humana.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Los Cinco Pasos del Argumento de Alma',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y he aquí, si Adán hubiese comido del fruto del árbol de la vida en aquel entonces, no habría habido muerte, y la palabra hubiese sido nula, haciendo a Dios un ser mentiroso; porque él dijo: Si coméis, moriréis. [...] Por tanto, para que el hombre no comiese del árbol de la vida, fue enviado del huerto del Edén.',
              reference: 'Alma 42:5–7',
            },
            {
              type: 'paragraph',
              text: 'El primer paso del argumento de Alma es brillante en su sencillez: la expulsión del Edén no fue un castigo arbitrario sino un regalo de tiempo. Si Adán y Eva hubieran comido del árbol de la vida después de la caída, habrían vivido para siempre en su estado caído — sin posibilidad de arrepentimiento ni redención. La separación del jardín creó lo que Alma llama el "tiempo de arrepentimiento": la vida mortal misma es el espacio diseñado por Dios para que el hombre pueda volver a Él.',
            },
            {
              type: 'highlight_verse',
              text: 'Y fue colocado un querubín y una espada flamígera al oriente del jardín del Edén, a fin de que nuestros primeros padres no entraran y comieran del fruto del árbol de la vida, para que así, en el tiempo señalado del Señor, pudieran prepararse para encontrarse con Él.',
              reference: 'Alma 42:2–3',
            },
            {
              type: 'paragraph',
              text: 'El querubín y la espada flamígera no son guardianes de la ira de Dios — son guardianes de la gracia. El árbol de la vida representa la vida eterna, y el acceso a ella en un estado caído habría congelado al hombre en la miseria para siempre. Dios cierra esa puerta no para castigar a Adán, sino para preservar la posibilidad de que el hombre pueda eventualmente entrar por esa puerta dignamente. La separación temporal de la presencia de Dios es el precio de tener una oportunidad real de regresar.',
            },
            {
              type: 'highlight_verse',
              text: 'Y he aquí, existió una muerte temporal, y también una muerte espiritual; sí, la muerte del cuerpo y también la muerte del espíritu. [...] Por tanto, como el alma nunca puede morir, y la caída hizo a los hombres miserables para siempre.',
              reference: 'Alma 42:9–11',
            },
            {
              type: 'paragraph',
              text: 'El segundo elemento del argumento introduce la distinción entre muerte temporal y muerte espiritual. La muerte del cuerpo — separación del espíritu del cuerpo — es la consecuencia física de la caída. Pero la muerte espiritual — separación del alma de la presencia de Dios — es la consecuencia moral. Sin la Expiación, ambas muertes serían permanentes: el cuerpo no resucitaría, y el espíritu quedaría cortado de Dios para siempre, haciéndolo miserable eternamente. La gravedad de la condición caída hace indispensable la magnitud de la redención.',
            },
            {
              type: 'highlight_verse',
              text: 'Y si no hubiese habido ley promulgada, si los hombres hubieran pecado, ¿qué podrían hacer la misericordia, la justicia o el poder de Dios? [...] Ahora bien, la misericordia no puede robarle a la justicia; por tanto, ningún hombre puede salvarse según sus obras.',
              reference: 'Alma 42:13, 24',
            },
            {
              type: 'paragraph',
              text: 'El tercer paso es el argumento filosófico central: la ley es la precondición de todo lo demás. Sin ley, no hay pecado; sin pecado, no hay necesidad de justicia; sin justicia, no hay necesidad de misericordia; sin misericordia, no hay necesidad de un Salvador. La ley no es el enemigo del hombre — es la estructura que hace posible tanto la caída como la redención. Cuando Corianton pregunta si Dios podría simplemente ignorar el pecado, la respuesta de Alma es: hacerlo derrumbaría todo el sistema que hace posible la exaltación humana.',
            },
            {
              type: 'highlight_verse',
              text: 'Pero he aquí que el plan de misericordia cumplió la resurrección de los muertos; y el plan de redención se efectuó, y con ello la resurrección, que trae a los hombres de vuelta a la presencia de Dios. Y así son reinstaurados en su presencia, para ser juzgados según sus obras, de acuerdo con la ley y la justicia. [...] Porque he aquí, la justicia ejerce todos sus reclamos, y la misericordia exige todo lo que le es suyo; y así nadie puede salvarse sino a través de la expiación.',
              reference: 'Alma 42:23, 25',
            },
            {
              type: 'paragraph',
              text: 'El cuarto y quinto pasos son la resolución: el plan de misericordia no reemplaza la justicia — la cumple. La resurrección restaura el cuerpo; la Expiación restaura la relación con Dios. Ambas son actos de misericordia divina que satisfacen completamente las demandas de la justicia. Nadie escapa al juicio — pero Cristo ha pagado el precio para que el juicio pueda resultar en misericordia para el arrepentido.',
            },
            {
              type: 'doctrine_box',
              title: 'El argumento de Alma 42 en cinco pasos',
              body: 'Paso 1 — Alma 42:2–3: La expulsión del Edén fue un regalo de tiempo para arrepentirse, no un castigo arbitrario. El querubín guardaba la gracia, no la ira. / Paso 2 — Alma 42:9–11: La caída produjo dos muertes: temporal (cuerpo separado del espíritu) y espiritual (alma separada de Dios). Sin redención, ambas serían permanentes. / Paso 3 — Alma 42:13: Sin ley no hay pecado; sin pecado no hay justicia; sin justicia no hay necesidad de Expiación. La ley es la estructura que hace posible la redención. / Paso 4 — Alma 42:22–23: El plan de misericordia cumple la justicia a través de la resurrección y la Expiación. No las evita ni las cancela. / Paso 5 — Alma 42:24–25: La misericordia no puede robarle a la justicia. Solo quien acepta los términos del mediador puede recibir misericordia — el arrepentimiento es la condición, no una alternativa a la justicia.',
            },
            {
              type: 'key_points',
              title: 'Por qué cada paso del argumento importa',
              points: [
                'El tiempo mortal es sagrado: cada día de vida es parte del diseño divino para que el hombre pueda arrepentirse. No es accidental — es intencional.',
                'La muerte espiritual es más grave que la física: la separación de Dios es la verdadera miseria, no el sufrimiento corporal. Esto reencuadra todo lo que entendemos sobre el propósito de la Expiación.',
                'La ley da valor al arrepentimiento: si el pecado no importara, el perdón tampoco importaría. La seriedad de la ley hace que la misericordia sea genuinamente poderosa.',
                'La misericordia opera dentro de la justicia, no sobre ella: Dios no hace excepciones — provee un camino. Esa es la diferencia entre un Dios inconsistente y un Dios perfectamente misericordioso.',
                'El arrepentimiento no es pagar la deuda — es cambiar de acreedor: en lugar de deberle a la justicia, el arrepentido le debe a Cristo, quien ya estableció términos de misericordia.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Parábola del Mediador',
      intro: {
        romanNumeral: 'V',
        title: 'La Parábola del Mediador',
        paragraphs: [
          'En mayo de 1977, el élder Boyd K. Packer pronunció en la Conferencia General uno de los discursos más memorables sobre la Expiación en la historia moderna de la Iglesia. Con una parábola sencilla — tan accesible como profunda — ilustró en términos humanos lo que Alma 42 enseña en términos teológicos. La historia de un deudor y su mediador captura en minutos lo que toma capítulos enteros de doctrina exponer en abstracto.',
          'La parábola no es solo una ilustración didáctica. Es una ventana a la lógica del amor divino: el mediador no cancela la deuda — la absorbe. Y al absorberla, adquiere la autoridad de ofrecer términos que el acreedor original nunca podría haber ofrecido.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La Historia y Su Significado Eterno',
          blocks: [
            {
              type: 'paragraph',
              text: 'Un hombre necesitaba dinero desesperadamente. Fue a un prestamista y tomó prestado una suma considerable, bajo condiciones que prometió cumplir. Al principio todo iba bien. Pero con el tiempo las circunstancias se complicaron, las deudas se acumularon, y llegó el día en que el prestamista vino a cobrar — y el deudor no tenía nada. El contrato era claro: si no pagaba, el prestamista tenía derecho a reclamar todo lo que el deudor poseía, incluyendo su libertad.',
            },
            {
              type: 'paragraph',
              text: 'El deudor suplicó: "Dame más tiempo. Ten misericordia. No destruyas mi vida y la de mi familia." Pero el prestamista respondió con una lógica imposible de refutar: "¿Acaso la misericordia puede robarle a la justicia? Yo te presté el dinero en términos que aceptaste libremente. Si simplemente te perdono la deuda, ¿qué pasa con mi derecho? ¿Qué pasa con el contrato? Si la misericordia cancela los contratos justos, nadie prestará dinero jamás y el orden que hace posible la confianza entre personas desaparece." No había respuesta al argumento. La justicia demandaba su pago.',
            },
            {
              type: 'paragraph',
              text: 'En ese momento apareció un amigo. Un amigo que amaba al deudor con una profundidad que el deudor apenas podía comprender. Este amigo se dirigió al prestamista y dijo: "Yo pagaré la deuda." Y así lo hizo — pagó cada centavo, completamente, en ese mismo momento. La justicia quedó satisfecha. El acreedor no tenía ya ningún reclamo sobre el deudor. La deuda había sido pagada.',
            },
            {
              type: 'paragraph',
              text: 'Pero entonces el amigo se volvió al deudor y dijo: "Ahora tú me debes a mí. Pero yo no soy el prestamista. Yo soy tu amigo. Y te propongo términos que puedes cumplir: no te pido el dinero de vuelta de una vez — te pido que cambies la forma en que vives para que esto no vuelva a ocurrir. Te pido que trabajes conmigo, que confíes en mí, que sigas mi guía. Si lo haces, la deuda quedará saldada." El deudor tenía ahora ante sí una opción que antes no existía: la posibilidad de ser libre.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'A mediator figure standing between a pleading debtor and a stern creditor, extending hands to both, bridging the gap, warm light emanating from the mediator, symbolic illustration',
              caption: 'La Parábola del Mediador — Cristo entre la justicia que reclama y el pecador que suplica',
              contextCard: { label: 'La Parábola del Mediador — Packer, 1977' },
            },
            {
              type: 'leader_quote',
              quote: 'En la parábola, el mediador pagó la deuda y asumió el papel del acreedor con una condición diferente: términos que el deudor podía cumplir. Así Cristo, habiéndose satisfecho las exigencias de la justicia, puede extender misericordia al penitente. La misericordia no erosiona la justicia — la cumple. Y la justicia no impide la misericordia — la hace posible.',
              name: 'Boyd K. Packer',
              role: '"The Mediator", Conferencia General, mayo 1977 (trad.)',
            },
            {
              type: 'paragraph',
              text: 'La aplicación doctrinal es directa: nosotros somos el deudor. Hemos contraído una deuda moral con la ley de Dios — cada pecado es una violación del contrato que hicimos en el preexistencia, cuando aceptamos las condiciones de la mortalidad. La ley de justicia — representada por el prestamista — no puede simplemente ignorar la deuda sin destruirse a sí misma. Dios no puede "simplemente perdonar" sin dejar de ser Dios. Pero Cristo — el Mediador — ha pagado el precio completo. Y ahora nos ofrece términos que podemos cumplir: arrepentimiento, fe, convenios, discipulado. La deuda no desaparece — cambia de acreedor y de términos.',
            },
            {
              type: 'paragraph',
              text: 'Esto también resuelve el dilema que planteamos en la Sección I: el problema no es que la justicia y la misericordia sean incompatibles. El problema es que ningún ser caído puede satisfacer la justicia por sí mismo, y ningún Dios perfectamente justo puede ignorarla. La solución requiere a alguien que sea a la vez perfectamente capaz de pagar (sin pecado propio) y perfectamente capaz de ofrecer misericordia (con autoridad divina). Solo Cristo cumple ambos requisitos. La parábola no simplifica la doctrina — la encarna.',
            },
            {
              type: 'highlight_verse',
              text: 'Padre, mira el sufrimiento y la muerte de aquel que no pecó, en quien tú estabas bien complacido; contempla la sangre de tu Hijo que fue derramada, la sangre de aquel que tú diste para que fuese crucificado; por lo cual, Padre, perdona a estos mis hermanos que creyeron en mi nombre, para que vengan a mí y tengan vida eterna.',
              reference: 'Doctrina y Convenios 45:4–5',
            },
            {
              type: 'paragraph',
              text: 'En DyC 45:3–5, Cristo mismo describe su función como Mediador ante el Padre: no ruega que la justicia sea ignorada, sino que señala el pago ya realizado — su propia sangre, su propio sufrimiento, su propio sacrificio sin pecado. Esta es la intercesión eterna: Cristo no pide una excepción a la justicia; presenta la evidencia de que ya fue satisfecha. El Padre puede extender misericordia precisamente porque la justicia ya fue cumplida en Getsemaní y el Calvario.',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: 'La deuda contraída',
                  text: 'En la mortalidad, cada pecado es una violación de la ley divina — una deuda real que exige pago real.',
                  ref: 'Alma 42:17–18',
                  color: 'gold',
                },
                {
                  label: 'La justicia reclama',
                  text: 'La ley de justicia no puede ser ignorada sin destruirse. El "prestamista" tiene derecho a su reclamo.',
                  ref: 'Alma 42:22',
                  color: 'gold',
                },
                {
                  label: 'El Mediador paga',
                  text: 'Cristo, en Getsemaní y en el Calvario, paga el precio completo de todos los pecados de todos los hombres.',
                  ref: 'DyC 19:16–19',
                  color: 'blue',
                },
                {
                  label: 'Nuevos términos ofrecidos',
                  text: 'Cristo ofrece al pecador términos que puede cumplir: arrepentimiento, fe, convenios, perseverancia.',
                  ref: 'DyC 45:4–5',
                  color: 'blue',
                },
                {
                  label: 'La misericordia se activa',
                  text: 'El que acepta los términos del Mediador recibe misericordia. La justicia ya fue satisfecha — por Cristo, no por el pecador.',
                  ref: 'Alma 42:23–25',
                  color: 'blue',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: '2 Nefi 9 — El Horror de la Muerte Espiritual y la Gracia del Rescate',
      intro: {
        romanNumeral: 'VI',
        title: '2 Nefi 9 — El Horror de la Muerte Espiritual y la Gracia del Rescate',
        paragraphs: [
          'Si Alma 42 es el tratado lógico sobre la justicia y la misericordia, 2 Nefi 9 es el grito emocional y teológico de un profeta que ha visto la profundidad del abismo del que la Expiación nos rescata. Jacob, hermano de Nefi, pronuncia este sermón con una intensidad que pocas veces se iguala en las Escrituras. No está describiendo abstracciones doctrinales — está describiendo el destino sin la Expiación con la precisión de quien ha contemplado esa posibilidad y quedado estremecido.',
          'La genialidad de 2 Nefi 9 está en que no empieza con la solución — empieza con el problema en toda su desnudez. Antes de decir "¡Oh, cuán grande la bondad de nuestro Dios!", Jacob se detiene en lo que habría ocurrido si Dios no hubiera sido bueno. Y lo que describe es tan terrible que hace que el rescate parezca exactamente lo que es: una gracia inimaginable.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'Del Abismo a la Gracia: El Recorrido de 2 Nefi 9',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Pues he aquí que si la carne no se levantara, nuestros espíritus llegarían a estar sujetos a aquel ángel que cayó de la presencia del Eterno Dios, y se volvió el diablo, para que se levantara para siempre jamás. Y nuestros espíritus llegarían a ser como él, y permanecemos desterrados de la presencia de nuestro Dios.',
              reference: '2 Nefi 9:8–9',
            },
            {
              type: 'paragraph',
              text: 'Jacob comienza describiendo lo "monstruoso" — su propia palabra — que habría sido el destino humano sin la Resurrección y la Expiación. Los cuerpos se habrían corrompido para siempre en la tierra. Y los espíritus — eternos, incapaces de morir — habrían quedado cautivos del diablo eternamente. No aniquilados, no dormidos, no en un estado neutral: cautivos, miserables, separados de Dios para siempre. Esta es la muerte espiritual en su forma más completa. Y era el destino inevitable de toda la humanidad sin intervención divina.',
            },
            {
              type: 'media_slot',
              kind: 'image',
              src: undefined,
              alt: 'The prophet Jacob standing on a rocky promontory with arms raised in joy and wonder, ancient Nephite clothing, sunrise breaking golden behind him, people gathered below listening',
              caption: '¡Oh, cuán grande la bondad de nuestro Dios! — Jacob, 2 Nefi 9:10',
              contextCard: { place: 'Tierra prometida', label: 'Jacob — 2 Nefi 9' },
            },
            {
              type: 'highlight_verse',
              text: 'Oh, cuán grande la bondad de nuestro Dios, que se preparó para que estos cuerpos se levantaran de la muerte y los espíritus se reuniesen con los cuerpos, para nunca más ser divididos, para que los pecadores pudieran tener un arrepentimiento completo; y también para que los justos, que son los santos de Dios, pudieran pasar al gozo de la resurrección de acuerdo con el poder y la resurrección que tenía Cristo.',
              reference: '2 Nefi 9:11–13',
            },
            {
              type: 'paragraph',
              text: 'El contraste es deliberado y poderoso. Del abismo de la esclavitud eterna al grito "¡Oh, cuán grande la bondad de nuestro Dios!" — Jacob quiere que la distancia entre esos dos puntos quede grabada en la mente del oyente. La Resurrección no es solo una promesa agradable. Es el rescate de un destino espantoso. La primera resurrección libera el cuerpo de la muerte física. La Expiación libera el espíritu de la muerte espiritual — de la separación de Dios. Juntas, restauran al ser humano completo a la presencia divina.',
            },
            {
              type: 'highlight_verse',
              text: 'Oh, cuán grande la santidad de nuestro Dios! Porque él sabe todas las cosas, y no hay nada que pueda ocultársele. Y también sufre los dolores de todos los hombres, sí, los dolores de toda criatura viviente, tanto hombres, mujeres y niños, que pertenecen a la familia de Adán.',
              reference: '2 Nefi 9:20–21',
            },
            {
              type: 'paragraph',
              text: 'La razón por la que Cristo podía rescatar a todos es que sufrió por todos. No de manera representativa o simbólica — sino de manera literal y exhaustiva. Su perfecto conocimiento ("él sabe todas las cosas") significa que su sufrimiento fue perfectamente calibrado a cada dolor, cada pecado, cada vergüenza de cada persona que jamás vivió. No hubo uno que quedara fuera del alcance de su Expiación. Y habiendo descendido por debajo de todo — "debajo de todas las cosas" (DyC 88:6) — puede alzar a todos que quieran ser alzados.',
            },
            {
              type: 'highlight_verse',
              text: 'Por lo cual, se le da a conocer la ley a los hombres, para que sepan cómo venir a él y ser salvos; ... pero ay de aquel que sepa que tiene la ley de Dios — y la transgrede — pues su castigo es mayor que el de aquel que no tiene ley.',
              reference: '2 Nefi 9:25–27',
            },
            {
              type: 'paragraph',
              text: 'Jacob introduce aquí un principio de justicia matizada que Alma también desarrollará: la responsabilidad moral es proporcional al conocimiento. Quienes pecan en ignorancia serán juzgados con misericordia por el conocimiento que tenían. Quienes pecaron teniendo pleno conocimiento de la ley cargarán con una responsabilidad mayor. Este principio no es un mecanismo para escapar de la responsabilidad — es una afirmación de que el Dios de justicia también es el Dios de equidad. Nadie será condenado por lo que no sabía; todos serán juzgados por lo que sí sabían.',
            },
            {
              type: 'deep_dive',
              badge: 'Concepto clave',
              title: '¿Qué es exactamente la "muerte espiritual"?',
              paragraphs: [
                'La muerte espiritual es uno de los conceptos más malentendidos de la teología restaurada. No es la aniquilación del espíritu — los espíritus son eternos e incapaces de dejar de existir. No es el sueño del espíritu — tampoco una especie de inconsciencia cósmica. Es algo mucho más específico y, en cierto sentido, mucho más terrible: es la separación del alma de la fuente de toda vida, luz y gozo — la presencia de Dios.',
                'Jacob describe en 2 Nefi 9:9 que sin la Expiación los espíritus "llegarían a ser como" el diablo: conscientes, eternos, pero permanentemente cortados de la presencia divina. Alma 42:9 habla de "la muerte del espíritu" como la condición del hombre caído. DyC 29:41 explica que la muerte espiritual fue la primera consecuencia de la Caída: "los maté espiritualmente; y dije que el hombre moriría espiritualmente la primera muerte."',
                'Hay dos muertes espirituales en la teología restaurada: la primera es la muerte espiritual heredada de la Caída — todos nacemos separados de la presencia directa de Dios, lo que hace necesario el velo y la mortalidad como período de prueba. La segunda muerte espiritual es la permanente: es el destino de quienes, al final, rechazan la Expiación y la misericordia que se les ofreció, y quedan "excomulgados de la presencia del Señor" (2 Nefi 9:9) para siempre.',
                'Entender la muerte espiritual de esta manera cambia completamente cómo vemos el propósito de la Expiación. Cristo no vino principalmente a salvarnos del dolor físico, de la pobreza, o incluso de la muerte del cuerpo. Vino a rescatarnos de la muerte espiritual — de la separación permanente de Dios. La Resurrección es el regalo que restaura el cuerpo. La Expiación es el regalo que restaura la relación. Juntos, hacen posible la exaltación: la vida en la presencia de Dios, con cuerpo y espíritu gloriosos, para siempre.',
              ],
            },
            {
              type: 'quiz',
              id: 'q-2nefi9-muerte-espiritual',
              question: {
                kind: 'true_false',
                statement: 'Según 2 Nefi 9, sin la Expiación las almas serían cautivas del diablo para siempre.',
                correctAnswer: true,
                explanation: 'Correcto. Jacob enseña en 2 Nefi 9:8–9 que sin la Resurrección y la Expiación, los espíritus habrían quedado "sujetos a aquel ángel que cayó... el diablo, para que se levantara para siempre jamás." La Expiación rompe esa cautividad, haciendo posible la resurrección del cuerpo y la libertad del espíritu para regresar a la presencia de Dios.',
              },
            },
            {
              type: 'reflection',
              prompt: 'Jacob dice "¡Oh, cuán grande la bondad de nuestro Dios!" después de describir el abismo del que nos rescató. ¿Comprendes hoy la Expiación con suficiente claridad como para que ese grito sea tuyo también? ¿Qué parte del "abismo" — la muerte espiritual, la separación de Dios, la cautividad sin fin — te ayuda a entender el tamaño del regalo que es la Expiación? ¿Cómo cambia esto tu gratitud por Cristo esta semana?',
            },
          ],
        },
      ],
    },
  ],
}
