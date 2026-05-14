import type { Lesson } from '@/types/doctrine'

export const tomasLaDuda: Lesson = {
  id: 'tomas-la-duda',
  moduleId: 'personajes-escrituras',
  title: 'La Duda Honesta',
  subtitle: '"Si no viere... no creeré"',
  description: 'Tomás no estaba cuando Jesús apareció a los once. Ocho días vivió con los testimonios de sus compañeros sin poder verificarlos. Su condición — "si no viere, no creeré" — no era arrogancia sino la exigencia de evidencia empírica de un hombre que había perdido todo. Esta lección analiza qué tipo de duda era la de Tomás y por qué importa.',
  level: 'INTERMEDIO',
  icon: '🖐️',
  duration: 30,
  order: 5411,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'tomas',
  studySections: [
    {
      id: 's1',
      title: 'El Contexto de la Ausencia',
      intro: {
        romanNumeral: 'I',
        title: 'Juan 20:24 — "Tomás no estaba con ellos"',
        paragraphs: ['La primera aparición y el hombre que no estuvo'],
      },
      topics: [
        {
          id: 't1',
          title: 'La primera aparición del Resucitado a los diez',
          blocks: [
            {
              type: 'paragraph',
              text: 'El domingo de resurrección, Jesús se apareció a diez de los once apóstoles. Juan 20:19-23 relata que estaban reunidos "a puerta cerrada, por miedo de los judíos" cuando Jesús entró y les mostró sus manos y su costado. Juan 20:20 dice que "se regocijaron viendo al Señor." Los diez también necesitaron ver para creer: nadie creyó sin evidencia visual. Pero esa noche, Tomás no estaba.',
            },
            {
              type: 'doctrine_box',
              title: 'Los diez también necesitaron ver',
              body: 'Un detalle frecuentemente ignorado: los diez apóstoles que sí estaban presentes la noche del domingo de resurrección también necesitaron ver a Jesús para creer. María Magdalena les había anunciado la resurrección esa misma mañana (Juan 20:18) y ellos no creyeron por sola testimonio. La diferencia entre ellos y Tomás no es la fe — es que ellos tuvieron la oportunidad de ver y él no. Tomás fue el único cuya fe fue juzgada sin haber tenido esa misma oportunidad.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Declaración Condicional',
      intro: {
        romanNumeral: 'II',
        title: '"Si no viere en sus manos la señal de los clavos..."',
        paragraphs: ['La condición más famosa del Nuevo Testamento'],
      },
      topics: [
        {
          id: 't2',
          title: 'Análisis de Juan 20:25',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 20:24-25',
              text: 'Pero Tomás, uno de los doce, llamado Dídimo, no estaba con ellos cuando Jesús vino. Le dijeron, pues, los otros discípulos: Al Señor hemos visto. El les dijo: Si no viere en sus manos la señal de los clavos, y metiere mi dedo en el lugar de los clavos, y metiere mi mano en su costado, no creeré.',
            },
            {
              type: 'paragraph',
              text: 'La declaración de Tomás es tripartita: quiere ver las marcas de los clavos, meter su dedo en ellas, y meter su mano en el costado herido por la lanza. La progresión es significativa: no es suficiente con ver de lejos. Quiere contacto físico directo. Esto no es incredulidad filosófica — es el protocolo de verificación de un hombre que sabe que puede ser engañado por ilusiones visuales.',
            },
            {
              type: 'compare_grid',
              title: '¿Qué tipo de duda era la de Tomás?',
              left: {
                title: 'Incredulidad destructiva',
                items: [
                  'Rechazo previo a la evidencia',
                  'Motivada por rechazo emocional',
                  'Cierra la puerta a la posibilidad',
                  'No cambia ante la evidencia',
                ],
              },
              right: {
                title: 'Escepticismo empírico (Tomás)',
                items: [
                  'Exige evidencia antes de aceptar',
                  'Motivada por pérdida real y dolor',
                  'Abierta a cambiar con evidencia',
                  'Cambia inmediatamente al ver a Jesús',
                ],
              },
            },
          ],
        },
        {
          id: 't3',
          title: 'Los ocho días de tensión',
          blocks: [
            {
              type: 'paragraph',
              text: 'Entre la primera aparición del Resucitado y la segunda — cuando Tomás estuvo presente — pasaron ocho días. Durante ese tiempo, Tomás convivió con diez hombres que afirmaban haber visto al Señor resucitado. Sus testimonios eran unánimes y vehementes. Tomás los escuchó, pero no los creyó. No porque los considerara mentirosos, sino porque el peso de la evidencia requerida era proporcional al peso de lo que se afirmaba: la derrota de la muerte misma.',
            },
            {
              type: 'deep_dive',
              title: 'La epistemología del testimonio religioso',
              paragraphs: [
                'La posición de Tomás plantea una pregunta filosófica permanente: ¿cuándo basta el testimonio ajeno para creer algo extraordinario? David Hume arguyó que ningún testimonio puede establecer un milagro porque la probabilidad del error humano siempre supera la del milagro.',
                'Tomás, sin haber leído a Hume, llegó a una posición similar: para algo tan extraordinario como la resurrección, exigía verificación personal. La respuesta de Jesús no lo regaña por este estándar — le proporciona la evidencia exigida.',
                'La Restauración reconoce la validez del testimonio personal como mecanismo de conocimiento espiritual (DyC 46:13-14), pero también honra el proceso de búsqueda honesta antes de que llegue ese testimonio.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Segunda Aparición',
      intro: {
        romanNumeral: 'III',
        title: 'A los Ocho Días — Jesús Vino por Tomás',
        paragraphs: ['Cristo llegó específicamente para él'],
      },
      topics: [
        {
          id: 't4',
          title: 'La invitación de Jesús',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 20:26-27',
              text: 'Ocho días después, estaban otra vez sus discípulos dentro, y con ellos Tomás. Llegó Jesús, estando las puertas cerradas, y se puso en medio y les dijo: Paz a vosotros. Luego dijo a Tomás: Pon aquí tu dedo, y mira mis manos; y acerca tu mano, y métela en mi costado; y no seas incrédulo, sino creyente.',
            },
            {
              type: 'paragraph',
              text: 'Jesús conocía exactamente las condiciones de Tomás — las palabras que él había dicho a los diez se las repite verbatim. La invitación no es una reprensión: es el cumplimiento exacto de lo que Tomás había pedido. Cristo se presenta con las marcas físicas que Tomás exigió. La divinidad no se ofende por la duda honesta — viene a ella con evidencia.',
            },
            {
              type: 'doctrine_box',
              title: 'Jesús repite las palabras exactas de Tomás',
              body: 'Nótese la precisión lingüística de Juan 20:27: Jesús usa las mismas palabras que Tomás usó en el versículo 25 ("pon tu dedo aquí... mete tu mano en mi costado"). Esto demuestra que Cristo había escuchado las condiciones específicas de Tomás, las recordó exactamente, y vino a cumplirlas. No hay evidencia en el texto de que Tomás haya necesitado tocar físicamente — la vista fue suficiente. El acto de ofrecimiento fue lo que lo convenció.',
            },
            {
              type: 'reflection',
              prompt: '¿Has tenido períodos en que, como Tomás, escuchabas testimonios de otros sin poder verificarlos personalmente? ¿Cómo respondiste a esa tensión? ¿Qué significa para ti que Cristo no regañó a Tomás sino que vino a él con evidencia?',
            },
          ],
        },
      ],
    },
  ],
}
