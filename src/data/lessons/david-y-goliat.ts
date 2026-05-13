import type { Lesson } from '@/types/doctrine'

export const davidYGoliat: Lesson = {
  id: 'david-y-goliat',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'david',
  title: 'David y Goliat',
  subtitle: 'La batalla que no era sobre el tamaño del guerrero',
  description:
    'Durante 40 días, el gigante filisteo Goliat desafió al ejército de Israel y nadie respondió. Un muchacho que llegó a llevar comida a sus hermanos hizo la pregunta que nadie se había atrevido a hacer. Su argumento no era sobre habilidad — era sobre la naturaleza de Dios.',
  level: 'INTERMEDIO',
  icon: '⚡',
  duration: 30,
  order: 4211,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El valle y el paralizante desafío de 40 días',
      intro: {
        romanNumeral: 'I',
        title: 'El Valle de Ela — cuarenta días de silencio',
        paragraphs: [
          'El ejército de Israel llevaba 40 días mirando al otro lado del valle. Cada mañana y cada tarde, Goliat aparecía y desafiaba. Y durante 40 días, nadie respondió. El texto dice que todos "huyeron de su presencia, y tuvieron gran temor" (1 Samuel 17:24).',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El desafío de Goliat — lo que el texto dice exactamente',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 17:8-10',
              text: 'Y se paró y dio voces a los escuadrones de Israel, diciéndoles: ¿Para qué os habéis puesto en orden de batalla? ¿No soy yo el filisteo, y vosotros los siervos de Saúl? Escoged de entre vosotros un hombre que venga contra mí. Si él pudiere pelear conmigo, y me venciere, nosotros seremos vuestros siervos; y si yo pudiere más que él, y le venciere, vosotros seréis nuestros siervos y nos serviréis.',
            },
            {
              type: 'paragraph',
              text: 'El desafío de Goliat era un combate singular — una práctica conocida en el mundo antiguo donde dos ejércitos evitaban una masacre total enviando a sus mejores guerreros a representarlos. El problema no era la estrategia: era teológico. Goliat desafiaba al ejército del Dios de Israel — y nadie salió a defender el nombre de ese Dios. La parálisis de Israel no era solo cobardía física: era una crisis de fe.',
            },
            {
              type: 'key_points',
              title: 'Lo que sabemos de Goliat según el texto hebreo',
              points: [
                'Medía seis codos y un palmo — aproximadamente 2.9 metros de altura (1 Samuel 17:4)',
                'Su armadura de bronce pesaba cinco mil siclos — unos 57 kilos solo la coraza',
                'La punta de su lanza pesaba seiscientos siclos de hierro — casi 7 kilos',
                'Tenía un escudero que caminaba delante de él',
                'Llevaba 40 días desafiando a Israel mañana y tarde — dos veces al día',
              ],
            },
            {
              type: 'paragraph',
              text: 'El número cuarenta en la Escritura hebrea no es casual. Cuarenta años en el desierto, cuarenta días de diluvio, cuarenta días de Moisés en el Sinaí, cuarenta días de tentación de Jesús. El cuarenta representa una prueba que dura lo suficiente para revelar el carácter real de alguien. Israel falló su prueba de cuarenta días. David la resolvió en el primer momento que tuvo información sobre ella.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El muchacho que hizo la pregunta correcta',
      intro: {
        romanNumeral: 'II',
        title: 'David llega al campamento',
        paragraphs: [
          'David no fue al campamento como guerrero. Fue como repartidor de comida. Jesse lo envió con queso y pan para sus hermanos y para el comandante. Y en ese viaje mundano, David escuchó el desafío y preguntó algo que nadie más había preguntado.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La pregunta que reveló su teología',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 17:26',
              text: '¿Quién es este filisteo incircunciso, para que provoque a los escuadrones del Dios viviente?',
            },
            {
              type: 'paragraph',
              text: 'Esta pregunta es la clave de toda la historia. David no preguntó: "¿Cuánto pagarán al que lo derrote?" — aunque esa pregunta también estaba en el aire. Su primera reacción fue teológica: Goliat estaba desafiando al ejército de un Dios viviente. Y un Dios viviente no puede perder. La pregunta de David no era sobre valentía — era sobre coherencia lógica. Si Dios es real y está con Israel, ¿cómo es posible que nadie haya salido en su nombre?',
            },
            {
              type: 'dialogue',
              title: 'La reacción del hermano mayor — Eliab',
              lines: [
                {
                  speaker: 'Eliab',
                  side: 'left',
                  text: '¿Para qué has descendido acá? ¿Y a quién has dejado aquellas pocas ovejas en el desierto? Yo conozco tu soberbia y la malicia de tu corazón, que para ver la batalla has venido.',
                },
                {
                  speaker: 'David',
                  side: 'right',
                  text: '¿Qué he hecho yo ahora? ¿No es esto mero hablar?',
                },
              ],
            },
            {
              type: 'paragraph',
              text: 'El hermano mayor de David lo acusó de orgullo y curiosidad ociosa. Esta dinámica familiar revela algo importante: los que te conocen desde pequeño muchas veces son los últimos en reconocer lo que Dios ha puesto en ti. Eliab vio al hermanito menor que cuidaba las ovejas — no al ungido del Señor. David no discutió. Simplemente siguió haciendo preguntas.',
            },
            {
              type: 'doctrine_box',
              title: 'La pregunta correcta como acto de fe',
              body: 'Hacer la pregunta correcta es en sí mismo un acto de fe. David preguntó porque su visión de la realidad incluía a un Dios activo y presente. Si Goliat desafiaba al ejército de ese Dios, entonces el desafío tenía implicaciones que nadie en el campamento había procesado. La fe no es la ausencia de preguntas — es hacer las preguntas desde la perspectiva correcta.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El argumento de David — el historial con Dios',
      intro: {
        romanNumeral: 'III',
        title: 'La evidencia que David presentó ante Saúl',
        paragraphs: [
          'Cuando David se ofreció a pelear contra Goliat, Saúl respondió con la objeción obvia: eres un muchacho, él es un guerrero desde su juventud. David no respondió con confianza abstracta. Respondió con casos concretos.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El argumento del león y el oso',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 17:34-37',
              text: 'David respondió a Saúl: Tu siervo era pastor de las ovejas de su padre; y cuando venía un león, o un oso, y tomaba algún cordero de la manada, salía yo tras él, y lo hería, y lo libraba de su boca... Jehová, que me ha librado de las garras del león y de las garras del oso, él también me librará de la mano de este filisteo.',
            },
            {
              type: 'paragraph',
              text: 'El argumento de David es inductivo y teológico a la vez: tengo un historial documentado de intervención divina en situaciones imposibles. Eso no era presunción — era razonamiento a partir de la evidencia. David no dijo "soy muy hábil con la honda." Dijo: "Dios me libró entonces, y me librará ahora." Su confianza no estaba basada en su habilidad sino en el carácter probado de Dios.',
            },
            {
              type: 'deep_dive',
              title: 'El pastoreo como escuela de fe — lo que David aprendió solo',
              paragraphs: [
                'Pastorear ovejas en el Israel antiguo era un trabajo solitario y peligroso. El pastor dormía con el rebaño, lo movía por terrenos difíciles, y enfrentaba depredadores sin respaldo. No había testigos humanos cuando David mató al león y al oso — solo él y Dios.',
                'Esto significa que la fe de David se formó en privado, en situaciones donde nadie aplaudiría su valentía ni validaría su confianza. Cada vez que Dios lo libró de un animal, David tenía que procesar esa experiencia solo y registrarla en su memoria como evidencia de fidelidad divina.',
                'Este tipo de fe — construida en privado, sin audiencia — es exactamente la que Dios necesitaba para la batalla más pública de la historia de Israel. Los que forman su fe en privado son los que pueden ejercerla en público sin que la presión de los observadores la altere.',
              ],
            },
            {
              type: 'central_quote',
              text: 'Jehová, que me ha librado de las garras del león y de las garras del oso, él también me librará de la mano de este filisteo.',
              attribution: 'David ante Saúl — 1 Samuel 17:37',
            },
          ],
        },
        {
          id: 't3-2',
          title: 'El rechazo de la armadura de Saúl',
          blocks: [
            {
              type: 'paragraph',
              text: 'Saúl ofreció a David su propia armadura — la del rey, la mejor disponible en Israel. David la probó, intentó caminar, y la devolvió: "Yo no puedo andar con esto, porque nunca lo practiqué" (1 Samuel 17:39). Esta decisión es profundamente importante: David rechazó los recursos del sistema establecido y eligió sus propios instrumentos.',
            },
            {
              type: 'key_points',
              title: 'Lo que el rechazo de la armadura revela',
              points: [
                'David conocía sus propios instrumentos y confiaba en ellos — la honda era su herramienta',
                'Usar la armadura del rey hubiera significado pelear con la confianza en el sistema, no en Dios',
                'Las cinco piedras lisas del arroyo eran simples, no militares — Dios no necesita instrumentos impresionantes',
                'La victoria con la honda haría más evidente que fue Dios quien ganó, no el armamento de Israel',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La piedra, la honda y la teología de la batalla',
      intro: {
        romanNumeral: 'IV',
        title: 'La batalla es del Señor',
        paragraphs: [
          'El enfrentamiento fue rápido. Goliat vio a David y lo desprecio. David corrió hacia él. Un solo lanzamiento. La piedra hundida en la frente. El gigante cayó. Pero antes de que la piedra saliera de la honda, David pronunció las palabras más importantes de toda la historia.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La declaración teológica antes de la batalla',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Samuel 17:45-47',
              text: 'Entonces dijo David al filisteo: Tú vienes a mí con espada y lanza y jabalina; mas yo vengo a ti en el nombre de Jehová de los ejércitos, el Dios de los escuadrones de Israel, a quien tú has provocado. Jehová te entregará hoy en mi mano... para que sepa toda esta tierra que hay Dios en Israel. Y sabrá toda esta congregación que Jehová no salva con espada y con lanza; porque de Jehová es la batalla, y él os entregará en nuestras manos.',
            },
            {
              type: 'paragraph',
              text: 'David pronunció su teología antes de actuar. Esta es la estructura de la fe bíblica: primero la declaración, luego la acción. No esperó a ver si funcionaba para atribuírselo a Dios — lo afirmó de antemano. "De Jehová es la batalla" no fue un comentario retrospectivo de victoria — fue el marco interpretativo antes del primer paso.',
            },
            {
              type: 'doctrine_box',
              title: '"La batalla es del Señor" — el principio doctrinal',
              body: 'Esta frase resume la teología de David: cuando el pueblo de Dios actúa en el nombre de Dios, en defensa de lo que Dios defiende, los resultados son responsabilidad de Dios. Esto no elimina el esfuerzo humano — David todavía tuvo que lanzar la piedra con precisión. Significa que la fuente de la victoria no es la capacidad humana sino la fidelidad divina. El Libro de Mormón expresa el mismo principio repetidamente: Helaman y sus 2,000 jóvenes guerreros no dudaron porque "el Señor es nuestro Dios" (Alma 56:47).',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '40 días antes',
                  text: 'Goliat comienza sus desafíos diarios — mañana y tarde. Israel paralizado.',
                  color: 'red',
                },
                {
                  label: 'La llegada',
                  text: 'David llega al campamento con provisiones. Escucha el desafío por primera vez. Hace la pregunta teológica.',
                  color: 'blue',
                },
                {
                  label: 'Ante Saúl',
                  text: 'David presenta su argumento: el león, el oso, el Dios que libra. Rechaza la armadura del rey.',
                  color: 'gold',
                },
                {
                  label: 'El enfrentamiento',
                  text: 'David corre hacia Goliat, pronuncia su declaración teológica, lanza la piedra. Un solo impacto.',
                  color: 'green',
                },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué "Goliats" has enfrentado donde el tamaño del problema hacía que la victoria pareciera imposible? ¿Qué "historial con Dios" tienes que puedas usar como argumento de fe en situaciones futuras?',
            },
          ],
        },
      ],
    },
  ],
}
