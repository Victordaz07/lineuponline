import type { Lesson } from '@/types/doctrine'

export const rutYLaRestauracion: Lesson = {
  id: 'rut-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'rut',
  title: 'Rut y la Restauración',
  subtitle: 'La extranjera en la línea del Salvador',
  author: 'Fuentes: Mateo 1:5; Romanos 11; 1 Nefi 15:12-18; Rut 4:17-22',
  description: 'El libro de Rut termina con una genealogía de cinco versículos: Obed, Isaí, David. Mateo 1:5 la coloca en la genealogía del Mesías. Una mujer moabita, excluida por la ley deuteronómica, está en la línea directa del Salvador. Este estudio examina lo que eso significa para la doctrina del pacto, la universalidad del evangelio, y la visión restaurada de quiénes pertenecen al pueblo de Dios.',
  level: 'INTERMEDIO',
  icon: '✨',
  duration: 25,
  order: 6114,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'rut-y-boaz',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'Rut en la genealogía de Jesús',
      intro: {
        romanNumeral: 'I',
        title: 'Mateo 1:5 — Una Línea que lo Cambia Todo',
        paragraphs: [
          'La genealogía de Mateo 1 es el texto que más los lectores se saltan. Es quizás el texto más importante del Nuevo Testamento para entender quién es Jesús y de dónde vino.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La genealogía de Mateo — cuatro mujeres irregulares',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mateo 1:1,3,5-6',
              text: 'Libro de la genealogía de Jesucristo, hijo de David, hijo de Abraham... Judas engendró de Tamar a Fares y a Zara... Salmón engendró de Rahab a Booz, y Booz engendró de Rut a Obed, y Obed engendró a Isaí. Isaí engendró al rey David.',
            },
            {
              type: 'paragraph',
              text: 'Las genealogías bíblicas judías normalmente no incluían mujeres. Mateo incluye cuatro, y las cuatro son de origen irregular o extranjero: Tamar (engañó a su suegro Judá haciéndose pasar por prostituta — Génesis 38), Rahab (la prostituta de Jericó que escondió a los espías — Josué 2), Rut (la moabita del pueblo maldito), y la "mujer de Urías" (Betsabé — adúltera con David, Urías asesinado por David). Mateo los menciona a todos sin disculpa.',
            },
            {
              type: 'paragraph',
              text: 'Esta selección no es accidental. Mateo está construyendo un argumento desde el primer versículo de su Evangelio: Jesús proviene de una línea que incluye lo que el mundo descartaría. La redención de Dios opera a través de lo improbable, lo excluido, lo transgresivo. El Mesías que vino para salvar a los perdidos desciende de una línea que incluye personas que la ley judía habría excluido del pueblo de Dios.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Boaz + Rut', text: 'La moabita redimida se convierte en bisabuela del rey David', ref: 'Rut 4:13-17', color: 'gold' },
                { label: 'Obed', text: 'Hijo de Rut y Boaz — primer israelita nacido de esta unión', ref: 'Rut 4:17', color: 'blue' },
                { label: 'Isaí', text: 'Hijo de Obed — padre de los ocho hijos de Belén, incluido David', ref: '1 Samuel 16:1', color: 'green' },
                { label: 'David', text: 'El rey del pacto davídico — bisnieto de Rut la moabita', ref: '2 Samuel 7; Salmo 89', color: 'gold' },
                { label: 'Jesús', text: 'El Mesías hijo de David — descendiente directo de Rut (Mateo 1:1,5)', ref: 'Mateo 1:1-16', color: 'blue' },
              ],
            },
          ],
        },
        {
          id: 't1-2',
          title: 'Lo que significa que una moabita esté en la línea mesiánica',
          blocks: [
            {
              type: 'paragraph',
              text: 'Deuteronomio 23:3 excluía a los moabitas de la congregación de Israel hasta la décima generación. Rut era de la primera generación. Sin embargo, está en la genealogía del Mesías. Esto no es un error canónico — es una declaración teológica deliberada del texto. El propósito redentor de Dios no está limitado por las categorías legales que la humanidad construye para organizar quién "pertenece" y quién no.',
            },
            {
              type: 'doctrine_box',
              title: 'El principio del pacto más allá de la etnia',
              body: 'El libro de Rut funciona como una respuesta narrativa a la rigidez étnica del pensamiento deuteronómico tardío. Lo que define el pertenecer al pueblo de Dios no es el origen étnico — es la adopción del pacto, la práctica del hesed, la lealtad al Dios de Israel. Rut pronunció exactamente eso: "Tu pueblo será mi pueblo, y tu Dios mi Dios" (Rut 1:16). Su declaración es un acto de bautismo en el sentido más profundo: una muerte a la identidad anterior y un nacimiento en una nueva. Y Dios la honró colocándola en la línea del Salvador.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti personalmente que el Salvador descienda de una mujer que, por su origen, no debería haber estado en el pueblo de Dios? ¿Qué dice eso sobre las categorías que usamos para decidir quién "pertenece"?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Romanos 11 — el olivo y los injertos',
      intro: {
        romanNumeral: 'II',
        title: 'La Imagen del Árbol que Lo Explica Todo',
        paragraphs: [
          'Pablo en Romanos 11 desarrolla la imagen teológica más elaborada del Nuevo Testamento sobre la inclusión de los gentiles en el pacto. La historia de Rut es la prefiguración narrativa de esa teología.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El olivo silvestre injertado',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Romanos 11:17-18',
              text: 'Pues si algunas de las ramas fueron desgajadas, y tú, siendo olivo silvestre, has sido injertado en lugar de ellas, y has sido hecho participante de la raíz y de la rica savia del olivo, no te jactes contra las ramas; y si te jactas, sabe que no sustentas tú a la raíz, sino la raíz a ti.',
            },
            {
              type: 'paragraph',
              text: 'La imagen del olivo en Romanos 11 describe exactamente lo que ocurrió con Rut: un "olivo silvestre" (gentil, extranjero, de linaje impuro) es injertado en el árbol cultivado (Israel, el pueblo del pacto). El árbol cultivado lo sustenta — no al revés. El injertado participa de la "rica savia" — la vida del pacto — no por mérito propio, sino por la gracia de quien lo injertó.',
            },
            {
              type: 'paragraph',
              text: 'Pablo añade en Romanos 11:20 la condición del injerto: "estás en pie por la fe." No por origen étnico, no por nacimiento en la familia correcta, no por cumplimiento de la ley deuteronómica. Por fe — que en la narrativa de Rut se traduce como hesed, como lealtad pactual activa. Rut se injertó en Israel por un acto de fe-hesed, y fue sostenida por la savia del pacto que no era originalmente suya.',
            },
            {
              type: 'key_points',
              title: 'Los paralelos entre Rut y Romanos 11',
              points: [
                'Rut = el olivo silvestre injertado en el árbol del pacto israelita',
                'Israel = el olivo cultivado cuya savia sustentó a Rut',
                'El hesed de Rut = la "fe" que Romanos 11:20 requiere para el injerto',
                'El go\'el Boaz = la gracia que hace posible el injerto — no el mérito de Rut',
                'Obed = el fruto del árbol injertado que alimenta al árbol entero',
                'Jesús = el fruto final del árbol que incluye a todos los injertados',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: '1 Nefi 15 y la visión restaurada del pacto',
      intro: {
        romanNumeral: 'III',
        title: 'El Árbol de Olivo Visto Desde la Restauración',
        paragraphs: [
          'La Restauración del siglo XIX recuperó la imagen del árbol de olivo con una aplicación específica: los gentiles de los últimos días también son ramas injertadas. Rut es el prototipo.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: '1 Nefi 15 — la visión de Lehi explicada',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Nefi 15:12-13',
              text: 'Y yo les dije que era acerca de la restauración de los judíos en los postreros días... Y también, que los de la casa de Israel que fueron dispersados en todas las partes de la tierra, serán reunidos; y los gentiles serán injertados en ellas como rama del olivo silvestre, y entrarán al conocimiento del verdadero Mesías, su Señor y su Redentor.',
            },
            {
              type: 'paragraph',
              text: 'Nefi interpreta para sus hermanos el sueño del árbol de vida de su padre usando precisamente la imagen del olivo que Pablo desarrollará siglos después. Los gentiles de los últimos días son "ramas del olivo silvestre" que serán injertadas en Israel. El lenguaje es idéntico: silvestre, injerto, conocimiento del Redentor. La Restauración sitúa a los convertidos gentiles de los últimos días en la misma posición narrativa que Rut: extranjeros que entran al pacto y son sostenidos por la savia del árbol que no era originalmente suyo.',
            },
            {
              type: 'paragraph',
              text: 'Jacob 5 en el Libro de Mormón desarrolla esta imagen en la alegoría más extensa de toda la escritura restaurada: el alegato del árbol de olivo de Zenos. En esa alegoría, el dueño del huerto (el Señor) planta ramas silvestres en el árbol cultivado para salvar al árbol entero. Las ramas silvestres dan vida a un árbol que estaba muriendo desde dentro. La inclusión del extranjero no es solo gracia para el extranjero — es el mecanismo por el cual el árbol del pacto se salva.',
            },
            {
              type: 'central_quote',
              text: 'Rut no llegó al pueblo de Dios como receptora de una caridad generosa. Llegó como la rama silvestre que, injertada, daría vida al árbol entero. El Salvador mismo descendería de ella.',
              attribution: 'Principio del estudio',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'Cada converso como Rut',
          blocks: [
            {
              type: 'paragraph',
              text: 'En la eclesiología restaurada, toda persona que entra al pacto del bautismo y recibe el don del Espíritu Santo participa del mismo movimiento que Rut realizó en el camino de Moab a Belén: deja atrás una identidad anterior, cruza una frontera, y entra a un pueblo que no era el suyo. La promesa de Abraham (Génesis 12:3; Gálatas 3:8) — que en él serían benditas todas las naciones — se cumple cada vez que alguien dice, en cualquier idioma y en cualquier continente: "Tu pueblo será mi pueblo, y tu Dios mi Dios."',
            },
            {
              type: 'leader_quote',
              quote: 'Cuando alguien entra por las aguas del bautismo, no simplemente se une a una organización. Se injerta en el árbol del pacto de Abraham. Pasa a ser, literalmente, semilla de Abraham (Gálatas 3:29). Rut hizo ese movimiento siglos antes de que hubiera bautismo cristiano. Lo hizo con el único instrumento disponible: la fidelidad pactual.',
              name: 'Russell M. Nelson',
              role: 'Presidente de La Iglesia de Jesucristo de los Santos de los Últimos Días',
            },
            {
              type: 'paragraph',
              text: 'La doctrina restaurada añade una dimensión que el texto de Rut no podía anticipar: el trabajo vicario por los muertos. DyC 128:15-18 establece que la salvación del pueblo de Dios es "perfecta e inseparable" — que los muertos no pueden ser perfectos sin los vivos, ni los vivos sin los muertos. En este marco, Rut no es solo un símbolo del converso entrante — es también una imagen de la obra redentora que los Santos de los últimos días realizan por los que ya cruzaron al otro lado.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Rut como contranarrativa al exclusivismo de Esdras',
      intro: {
        romanNumeral: 'IV',
        title: 'Dos Voces en el Canon — Sobre la Misma Pregunta',
        paragraphs: [
          'El canon hebreo contiene una tensión que los editores del texto bíblico preservaron sin resolver: la voz de Esdras, que expulsó a las esposas extranjeras, y la voz del libro de Rut, que coloca a una extranjera en la genealogía del Mesías.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Esdras-Nehemías contra Rut',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Esdras 10:2-3',
              text: 'Y habló Secanías hijo de Jehiel, de los hijos de Elam, y dijo a Esdras: Nosotros hemos pecado contra nuestro Dios, pues tomamos mujeres extranjeras de los pueblos de la tierra... Ahora pues hagamos pacto con nuestro Dios, que despediremos a todas las mujeres y los nacidos de ellas.',
            },
            {
              type: 'paragraph',
              text: 'El libro de Esdras describe la crisis post-exílica de la identidad israelita: después de 70 años en Babilonia, los líderes de la restauración de Judá determinaron que el pueblo se había contaminado mezclándose con pueblos extranjeros. La solución de Esdras fue radical: divorcio forzado de todas las esposas extranjeras y separación de sus hijos. Nehemías 13:23-27 va incluso más lejos, describiendo los matrimonios mixtos como el pecado que destruyó a Salomón.',
            },
            {
              type: 'compare_grid',
              title: 'Esdras/Nehemías vs. el libro de Rut',
              left: {
                label: 'Esdras y Nehemías',
                points: [
                  'Las esposas extranjeras son el problema — sepárate de ellas',
                  'La pureza étnica protege la fidelidad al pacto',
                  'Los matrimonios mixtos destruyeron a Salomón y a Israel',
                  'La solución: divorcio forzado y expulsión',
                  'La identidad del pueblo de Dios es étnica y genealógica',
                ],
              },
              right: {
                label: 'El libro de Rut',
                points: [
                  'La esposa extranjera es la heroína — quédate con ella',
                  'La lealtad pactual (hesed) supera la pureza étnica',
                  'Una moabita está en la genealogía del Mesías',
                  'La solución: el go\'el que redime al excluido',
                  'La identidad del pueblo de Dios es pactual y elegida',
                ],
              },
            },
            {
              type: 'paragraph',
              text: 'Los estudiosos debaten si el libro de Rut fue escrito como respuesta directa a la política de Esdras y Nehemías, o simplemente preserva una tradición más antigua y universalista que convivía con el exclusivismo deuteronómico. En cualquier caso, el canon hebreo — y luego el cristiano y el restaurado — preservó ambas voces. La tensión entre ellas no se resolvió; se canonizó. Eso es significativo.',
            },
          ],
        },
        {
          id: 't4-2',
          title: 'La resolución restaurada — ni exclusivismo ni sincretismo',
          blocks: [
            {
              type: 'paragraph',
              text: 'La doctrina restaurada no resuelve la tensión entre Esdras y Rut eliminando una de las voces. En cambio, propone un tercer principio: la membresía en el pueblo de Dios no es ni automática por nacimiento (contra el exclusivismo de Esdras) ni indiferente a los compromisos y la práctica del pacto (no es un sincretismo sin exigencias). La distinción es entre pacto y etnia: lo primero es decisivo, lo segundo es irrelevante.',
            },
            {
              type: 'paragraph',
              text: 'Gálatas 3:28-29 — "ya no hay judío ni griego... porque todos vosotros sois uno en Cristo Jesús. Y si vosotros sois de Cristo, ciertamente linaje de Abraham sois, y herederos según la promesa" — es la declaración paulina de este principio. DyC 84:33-34 en la doctrina restaurada establece que la Iglesia y el reino de Dios están abiertos a "todo aquel que recibe el sacerdocio" sin distinción de origen. Y 2 Nefi 26:33: "Él invita a todos a que vengan a él... pues no hace acepción de personas."',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: 'La conversión como identidad — lo que Rut modeló primero',
              paragraphs: [
                'La tradición judía posterior honró a Rut como el prototipo de la conversión genuina. El tratado talmúdico Yevamot discute el proceso de conversión al judaísmo usando a Rut como modelo: la conversión incluye adoptar el pueblo, la ley y el Dios de Israel. La pregunta del rabino a la posible conversa — "¿Sabes que Israel en este momento está afligido, oprimido y disperso?" — es una prueba de si la conversión es real o conveniente.',
                'El modelo de Rut indica que la conversión genuina no busca beneficios inmediatos — los de Rut eran nulos en el momento de su declaración. No busca reconocimiento social — su identidad de "moabita" la siguió toda su vida. No espera reciprocidad — Noemí le estaba diciendo activamente que se fuera. La conversión genuina, según el modelo de Rut, es el compromiso con el pueblo y el Dios del pacto a costa de cualquier cálculo de ventaja personal.',
                'En la enseñanza restaurada, la conversión que el Señor honra no es la que produce beneficios sociales o económicos inmediatos, sino la que transforma la identidad. Moro ni 6:3-4 describe el bautismo restaurado en términos que resuenan con la declaración de Rut: los bautizados "tomaron sobre sí el nombre de Cristo, teniendo determinación de servirle hasta el fin."',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Síntesis — Rut como figura de cada converso',
      intro: {
        romanNumeral: 'V',
        title: 'La Historia de Todos',
        paragraphs: [
          'Al completar los cinco estudios sobre Rut, el arco de la historia es claro: de la vergüenza de Moab a la genealogía del Salvador, pasando por la lealtad, la providencia ordinaria, la redención pagada y el injerto en el árbol del pacto.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'El arco de Rut como mapa de la vida del converso',
          blocks: [
            {
              type: 'steps',
              title: 'El camino de Rut — y el de cada converso',
              steps: [
                'El origen que no elegiste — nacida en Moab, excluida por la ley (como todos nacemos fuera del pacto)',
                'La crisis que revela el carácter — la muerte de todos los hombres, la invitación de Noemí a irse',
                'La declaración de lealtad — "tu pueblo, tu Dios" — el momento de la conversión',
                'El cruce del Jordán — dejar lo familiar, entrar en tierra desconocida',
                'El trabajo ordinario donde la providencia opera — los campos de Boaz',
                'El encuentro con el Redentor — la petición de que extienda su manto',
                'La redención que paga el precio completo — lo que no podías pagar por ti mismo',
                'El fruto en el árbol del pacto — tu vida, tus hijos, tu servicio como parte de la historia más larga',
              ],
            },
            {
              type: 'paragraph',
              text: 'Cada persona que ha entrado al pacto desde fuera — y en un sentido, todos hemos entrado desde fuera, porque nadie nació en el pacto por mérito propio — ha recorrido el camino de Rut. El Señor honró ese camino colocando a Rut en la genealogía del Salvador. No como nota al pie — como parte integral del árbol. El árbol del pacto necesitaba esa rama injertada para dar el fruto que daría.',
            },
            {
              type: 'central_quote',
              text: 'El libro de Rut es la historia de cómo una persona del lugar más improbable, tomando un camino que le costó todo, llegó a ser parte del plan eterno de Dios para salvar al mundo.',
              attribution: 'Síntesis del estudio',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'p1', question: '¿En qué parte del "camino de Rut" te encuentras actualmente? ¿En la declaración de lealtad, en el trabajo en los campos, esperando al Redentor, o llevando fruto en el árbol del pacto?' },
                { id: 'p2', question: '¿Qué aspecto de la historia de Rut resuena más directamente con tu propia historia de conversión o de renovación del pacto? ¿Por qué?' },
                { id: 'p3', question: 'El libro de Rut afirma que Dios usa a personas de origen "imposible" para cumplir sus propósitos eternos. ¿Qué "imposibilidad" de tu propia historia podría estar siendo usada de la misma manera?' },
              ],
            },
          ],
        },
        {
          id: 't5-2',
          title: 'La genealogía de la gracia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Mateo 1 comienza su Evangelio con una genealogía que incluye a Tamar, Rahab, Rut y Betsabé. Ninguna de las cuatro habría estado en una genealogía judía convencional de honor. Todas están en la genealogía del Salvador. La gracia de Dios no busca lo que ya es perfecto y honorable — lo recoge todo y lo convierte en parte del plan.',
            },
            {
              type: 'paragraph',
              text: 'Hebreos 11 — el "salón de la fe" — incluye a Rahab (la prostituta) en la misma lista que Abraham, Moisés, Enoc y Noé. La fe que honra a Dios no tiene código postal, no tiene genealogía requerida, no tiene pasado limpio como condición de entrada. Tiene solo lo que Rut tuvo: una declaración de lealtad, un cruce de frontera, y trabajo en el campo donde la providencia encontrará a quien la busca.',
            },
            {
              type: 'quiz',
              quizType: 'true_false',
              question: 'El libro de Rut puede leerse como una contranarrativa teológica a la política de divorcio forzado de esposas extranjeras implementada por Esdras y Nehemías.',
              answer: true,
              explanation: 'Correcto. El libro de Rut presenta a una mujer moabita — precisamente el tipo de esposa extranjera que Esdras y Nehemías ordenaron expulsar — como la heroína cuya fidelidad la lleva a la genealogía del Mesías. La tensión entre estas dos corrientes del canon hebreo fue preservada deliberadamente y refleja un debate teológico genuino sobre la naturaleza del pueblo de Dios.',
            },
            {
              type: 'reflection',
              prompt: 'El libro de Rut termina con el nombre de Obed, Isaí y David — pero no dice lo que vendrá después. Sin embargo, el lector cristiano y restaurado sabe lo que viene después: Jesús. ¿Cómo cambia tu lectura de toda la historia de Rut saber que el punto de llegada era el Salvador? ¿Y cómo cambia tu lectura de tu propia historia saber que también hay un punto de llegada que aún no puedes ver?',
            },
          ],
        },
      ],
    },
  ],
}
