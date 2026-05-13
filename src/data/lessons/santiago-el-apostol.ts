import type { Lesson } from '@/types/doctrine'

export const santiagoElApostol: Lesson = {
  id: 'santiago-el-apostol',
  moduleId: 'personajes-escrituras',
  title: 'Santiago el Apóstol',
  subtitle: 'De incrédulo a testigo ocular de la Resurrección',
  description: '1 Corintios 15:7 registra que Cristo resucitado se apareció específicamente a Santiago. El hombre que no creyó durante el ministerio de Jesús recibió una aparición personal. Eso lo transformó en el líder de la Iglesia de Jerusalén y finalmente en mártir.',
  level: 'INTERMEDIO',
  icon: '👁️',
  duration: 30,
  order: 5511,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'santiago-justo',
  studySections: [
    {
      id: 's1',
      title: 'La aparición que lo cambió todo',
      intro: {
        romanNumeral: 'I',
        title: '1 Corintios 15:7 — Cristo Se Apareció a Santiago',
        paragraphs: [
          'Pablo enumera los testigos de la Resurrección con la precisión de un abogado presentando evidencia. Santiago aparece en esa lista.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El testimonio de Pablo sobre la aparición',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Corintios 15:5-7',
              text: 'Y que apareció a Cefas, y después a los doce. Después apareció a más de quinientos de los hermanos a la vez, de los cuales muchos viven aún, y otros ya duermen. Después apareció a Jacobo; después a todos los apóstoles.',
            },
            {
              type: 'paragraph',
              text: '1 Corintios 15 contiene lo que los eruditos identifican como uno de los credos más antiguos del cristianismo, fechado con alta probabilidad dentro de cinco a diez años de la crucifixión. Pablo dice haber recibido esta tradición ("recibí... os enseñé") — lo que significa que ya circulaba antes de que él la pusiera por escrito. En esa lista, "Jacobo" (Santiago) aparece como destinatario de una aparición específica y separada, distinta a la de los doce.',
            },
            {
              type: 'paragraph',
              text: 'Esta aparición a Santiago no es narrada en ningún evangelio canónico. Solo Pablo la menciona, pero con la misma autoridad y en el mismo registro que las apariciones a Pedro y a los doce. El Evangelio de los Hebreos (texto apócrifo del siglo II) contiene un relato de esta aparición: Jesús resucitado toma pan, lo bendice y se lo da a Santiago, diciendo "Hermano mío, come tu pan, porque el Hijo del Hombre ha resucitado de entre los que duermen." Aunque no es texto canónico, muestra que la tradición de esta aparición específica era conocida y valorada en las comunidades judeocristianas primitivas.',
            },
            {
              type: 'doctrine_box',
              title: 'La Aparición a Santiago como Pilar Histórico',
              body: 'Los historiadores críticos — incluyendo a escépticos como Gerd Lüdemann y Bart Ehrman — aceptan que Santiago tuvo alguna experiencia que transformó su incredulidad en liderazgo eclesial activo. El dato es demasiado incómodo para ser inventado y está atestiguado en la tradición paulina más temprana que poseemos. La explicación que da el texto es directa: el Señor resucitado se le apareció. Cualquier otra explicación debe dar cuenta de por qué el hermano más escéptico de Jesús se convirtió en el líder de la comunidad que afirmaba su resurrección.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La transformación: de incrédulo a líder',
      intro: {
        romanNumeral: 'II',
        title: 'Hechos 12 y 15 — El Ascenso de Santiago',
        paragraphs: [
          'El hombre que no aparece en ningún episodio del ministerio de Jesús como creyente aparece de pronto como el líder de la iglesia más importante del mundo antiguo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Santiago como pilar de la Iglesia primitiva',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 12:17',
              text: 'Mas él, haciéndoles con la mano señal de que callasen, les contó cómo el Señor le había sacado de la cárcel. Y dijo: Haced saber esto a Jacobo y a los hermanos. Y salió, y se fue a otro lugar.',
            },
            {
              type: 'paragraph',
              text: 'Hechos 12:17 es el primer texto en Hechos que menciona a Santiago sin explicación ni presentación — como si el lector ya supiera quién es. Pedro, al salir milagrosamente de la prisión en el año 44 d.C., envía mensaje específicamente a Santiago. Esta referencia casual es en realidad muy significativa: implica que para la fecha en que ocurren los eventos de Hechos 12, Santiago ya era una figura de autoridad establecida en Jerusalén, alguien a quien había que notificar primero.',
            },
            {
              type: 'timeline',
              items: [
                { label: '~30 d.C.', text: 'Crucifixión y Resurrección. Santiago no creyó durante el ministerio.', color: 'red' },
                { label: '~30-31 d.C.', text: 'Aparición del Cristo resucitado a Santiago (1 Cor 15:7). Conversión.', color: 'gold' },
                { label: '~44 d.C.', text: 'Pedro lo menciona como autoridad principal en Jerusalén (Hechos 12:17).', color: 'blue' },
                { label: '~49 d.C.', text: 'Santiago preside el Concilio de Jerusalén y dicta el decreto apostólico (Hechos 15).', color: 'blue' },
                { label: '~58 d.C.', text: 'Pablo visita a Santiago en su última visita a Jerusalén (Hechos 21:18).', color: 'green' },
                { label: '62 d.C.', text: 'Martirio de Santiago. Josefo registra su muerte como injusta incluso para los judíos observantes.', color: 'red' },
              ],
            },
            {
              type: 'paragraph',
              text: 'Gálatas 1:19 registra que Pablo, en su primera visita a Jerusalén como cristiano (tres años después de su conversión), solo vio a Pedro y a Santiago "el hermano del Señor." Ya en ese momento temprano — quizás solo cuatro o cinco años después de la Resurrección — Santiago era una figura de suficiente peso para ser mencionado junto al Apóstol principal. En Gálatas 2:9, Pablo lo llama uno de los "pilares" de la iglesia junto a Pedro y Juan.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El poder del testimonio ocular',
      intro: {
        romanNumeral: 'III',
        title: 'Lo que Significa Haber Visto al Resucitado',
        paragraphs: [
          'No todos los que predican la Resurrección la han visto. Santiago sí la vio. Eso cambia el peso de su testimonio.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Testigo ocular y sus consecuencias',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hay una diferencia cualitativa entre predicar la Resurrección porque lo has oído de otros y predicarla porque el Resucitado se te apareció personalmente. Santiago pertenece a la segunda categoría. No era un creyente de segunda mano que aceptó el testimonio de los apóstoles — era él mismo un testigo primario. Esto explica la autoridad extraordinaria que ejerció en Jerusalén sin haber sido parte del grupo de los Doce durante el ministerio de Jesús.',
            },
            {
              type: 'deep_dive',
              title: 'Las Conversiones por Testimonio Ocular en el Mundo Antiguo',
              paragraphs: [
                'En la cultura judía del siglo primero, el testimonio de dos o tres testigos era la base del sistema legal (Deuteronomio 19:15). El evangelio cristiano primitivo operó bajo esta misma lógica: la resurrección no se predicaba como una idea teológica sino como un hecho atestiguado por testigos identificables y verificables.',
                'Pablo en 1 Corintios 15:6 menciona que el Cristo resucitado "apareció a más de quinientos hermanos a la vez, de los cuales muchos viven aún." Esta es una invitación implícita a verificar: ve y pregúntales. El evangelio primitivo tenía confianza suficiente en sus testigos para hacer ese tipo de declaración pública.',
                'Santiago era uno de esos testigos. Y a diferencia de muchos otros, su testimonio tenía el peso adicional de la transformación radical: de escéptico activo que intentó detener el ministerio de su hermano a líder que presidió la primera iglesia y murió por esa fe. Ese tipo de cambio no se explica fácilmente por entusiasmo colectivo o ilusión psicológica.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Las conversiones más poderosas en la historia del evangelio han sido las de personas que tenían motivos para no creer. Pablo tenía motivos. Santiago tenía aún más motivos. La aparición del Resucitado no eligió a los convencidos — eligió a los más difíciles de convencer.',
              name: 'William Lane Craig',
              role: 'Filósofo y apologeta cristiano',
            },
            {
              type: 'reflection',
              prompt: '¿Qué peso tiene para ti el hecho de que Santiago no era un seguidor entusiasta sino el escéptico más informado del grupo? ¿Cambia algo en tu evaluación de la evidencia de la Resurrección?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El tipo de conversión que produce líderes',
      intro: {
        romanNumeral: 'IV',
        title: 'Hechos 21:18 — El Último Encuentro con Pablo',
        paragraphs: [
          'La última vez que Hechos menciona a Santiago, preside una comunidad de miles en Jerusalén y recibe a Pablo como un igual.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Autoridad ganada por transformación',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 21:17-18',
              text: 'Cuando llegamos a Jerusalén, los hermanos nos recibieron con gozo. Y al día siguiente Pablo entró con nosotros a ver a Jacobo, y se hallaban reunidos todos los ancianos.',
            },
            {
              type: 'paragraph',
              text: 'En la última visita de Pablo a Jerusalén (aproximadamente 58 d.C.), el primer encuentro es con Santiago y los ancianos. La escena refleja la autoridad consolidada de Santiago: "todos los ancianos" están reunidos, y Pablo — el apóstol que había fundado iglesias en tres continentes — entra a reportar ante Santiago. No es una visita de cortesía — es una rendición de cuentas. La estructura de autoridad de la Iglesia primitiva de Jerusalén era real y reconocida.',
            },
            {
              type: 'paragraph',
              text: 'La ironía histórica es notable: el hermano que no creyó durante el ministerio de Jesús acabó presidiendo la comunidad cristiana más importante del mundo judío, en la misma ciudad donde Jesús fue crucificado, con autoridad reconocida incluso por el apóstol Pablo. Ninguna ambición política o familiar explica ese ascenso. Solo la experiencia transformadora de haber visto al Resucitado puede dar cuenta de él.',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Qué dice sobre la naturaleza de la revelación personal el que Santiago recibiera una aparición directa del Resucitado?' },
                { id: 'np2', question: '¿Qué tipo de autoridad produce una conversión que viene después del escepticismo profundo?' },
                { id: 'np3', question: '¿En qué se diferencia el liderazgo de alguien que nunca dudó del de alguien que dudó y luego creyó con toda consecuencia?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
