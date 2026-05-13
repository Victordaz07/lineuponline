import type { Lesson } from '@/types/doctrine'

export const mormonElCompilador: Lesson = {
  id: 'mormon-el-compilador',
  moduleId: 'personajes-escrituras',
  title: 'Mormón — El Compilador de las Planchas',
  subtitle: 'El editor más importante de la literatura sagrada restaurada',
  description:
    'Mormón tuvo acceso a "todos los registros" del pueblo nefita — las planchas grandes y pequeñas de Nefi, las planchas de bronce, el registro Jaredita, las 24 planchas de oro de Eter. De ese archivo vasto, compiló y abrevió lo que se convirtió en el Libro de Mormón. Su voz editorial se escucha en todo el texto. Es uno de los narradores más conscientes de sí mismos en la literatura antigua.',
  level: 'AVANZADO',
  icon: '📚',
  duration: 35,
  order: 7811,
  status: 'PUBLISHED',
  submoduleGroup: 'mormon',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Archivo al que Mormón Tuvo Acceso',
      intro: {
        romanNumeral: 'I',
        title: 'La Biblioteca Nefita — Todo el Registro de un Pueblo',
        paragraphs: [
          'Ammoró instruyó a Mormón a los diez años de edad para que encontrara las planchas de Nefi en la tierra de Antum. Lo que Mormón encontró allí era el archivo completo de siglos de historia y profecía. Comprender el alcance de lo que tuvo es comprender por qué su obra de compilación es extraordinaria.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El Alcance del Registro',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 1:3-4',
              text: 'Y cuando tuvieres veinticuatro años, vé a la tierra Antum, a una colina que se llamará Shim; y allí habrás depositado, para el Señor, todos los registros sagrados concernientes a este pueblo. Y he aquí, harás según lo que hago yo. Y echabas mano de las planchas de Nefi, y el resto lo dejarás en el lugar donde están.',
            },
            {
              type: 'paragraph',
              text: 'Lo que Mormón encontró en la colina Shim era el archivo de una civilización: las planchas grandes de Nefi (historia civil y militar desde Nefi hasta su época), las planchas pequeñas de Nefi (registro profético y espiritual), las planchas de bronce (escrituras del Antiguo Testamento en hebreo con adiciones que no tenemos en la Biblia actual), el registro abreviado de los Jareditas compilado por Moroni más tarde, y mucho más que Mormón no pudo incluir.',
            },
            {
              type: 'key_points',
              title: 'Los registros en manos de Mormón',
              points: [
                'Planchas grandes de Nefi — historia civil y militar de los nefitas',
                'Planchas pequeñas de Nefi — profecía y texto espiritual (estas las incluyó sin abreviar)',
                'Planchas de bronce — escrituras del Antiguo Testamento con texto adicional',
                'Registro Jaredita — abreviado más tarde por Moroni como el libro de Éter',
                'Registros de reyes y jueces — historia política que Mormón leyó pero no incluyó completa',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Las planchas pequeñas de Nefi — la providencia dentro de la compilación',
              body: 'Mormón había ya abreviado las planchas grandes cuando encontró las planchas pequeñas de Nefi. Las incluyó sin abreviar porque "me agradan sobremanera" (Palabras de Mormón 1:4). Esta decisión — que Mormón atribuyó a la sabiduría de Dios sin entender del todo por qué — resultó ser crucial: cuando Martín Harris perdió los 116 páginas del manuscrito, las planchas pequeñas llenaron el vacío. Dios planeó esa contingencia siglos antes a través de las elecciones editoriales de Mormón.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Decisiones Editoriales — Qué Incluyó y Por Qué',
      intro: {
        romanNumeral: 'II',
        title: 'El Editor — Criterios de Selección en Texto Sagrado',
        paragraphs: [
          'Mormón no transcribió registros — los abrevió. Tomó decisiones activas sobre qué incluir, qué dejar fuera, y por qué. Sus criterios editoriales están registrados explícitamente en el texto, lo cual es extraordinariamente inusual para un compilador antiguo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Los Criterios de Mormón',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '3 Nefi 26:6-8',
              text: 'Y ahora bien, hay muchas de estas cosas escritas; y una parte de ellas se ha dado a conocer más claramente en los anales que Nefi escribió; y he aquí yo las he escrito. Y ordeno, pues, que os juzguéis de estas cosas conforme a aquello que está escrito, pues vosotros tenéis los escritos delante de vosotros; así que juzgad la justicia de Dios según estas cosas. Y así ordeno yo estas cosas a fin de que sean escritas.',
            },
            {
              type: 'paragraph',
              text: 'A lo largo del texto, Mormón interrumpe su narración para explicar sus decisiones. Dice cosas como: "no escribo la centésima parte" (Jacob 3:13, Helamán 3:14), "hay muchas más cosas que no puedo escribir en este libro" (Helamán 3:14), "estas cosas deben silenciarse" (3 Nefi 26:18). No es que no tenga el material — es que elige no incluirlo, frecuentemente explicando el criterio: el propósito de la lección, la naturaleza de lo que el lector puede manejar, o la instrucción del Señor.',
            },
            {
              type: 'deep_dive',
              title: 'Por qué ciertos contenidos "no deben escribirse"',
              paragraphs: [
                'En 3 Nefi 26:16-18, Mormón explica que Jesús enseñó a los nefitas cosas grandes que Mormón no pudo incluir. Su razón: "el Señor verdaderamente dijo que estas cosas serían manifiestas a los gentiles a condición de que se arrepientan." La revelación adicional está condicionada a la fidelidad del lector actual.',
                'Este principio es consistente con DyC 19, donde el Señor explica que no revela ciertos detalles del sufrimiento eterno para no "espantar" a los lectores. Mormón como compilador actuó bajo el mismo principio: calibró el contenido al nivel espiritual del receptor anticipado.',
                'Lo que Mormón no incluyó es tan teológicamente significativo como lo que sí incluyó. Su silencio selectivo es editorial, no ignorancia. Eso hace que cada historia que eligió preservar sea más significativa: pasó el filtro.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia leer el Libro de Mormón saber que hay un editor inteligente y deliberado detrás de cada selección? ¿Qué impacto tiene saber que el contenido que estás leyendo pasó el criterio de un profeta que conocía la historia completa y eligió esto para ti?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Voz de Mormón en Todo el Texto',
      intro: {
        romanNumeral: 'III',
        title: '"Y Así Vemos" — El Narrador que No Se Oculta',
        paragraphs: [
          'A diferencia de muchos compiladores antiguos que intentan desaparecer detrás del texto, Mormón se asoma constantemente. Sus comentarios editoriales — "y así vemos," "nótese," "y yo, Mormón" — son señales de uno de los narradores más conscientes de la literatura sagrada.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Editor que Editorializa',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Helamán 12:1-2',
              text: 'Y así podemos ver cuán falsos e inconstantes son los hijos de los hombres; sí, cuán rápidos son para hacer iniquidad y cuán lentos en recordar al Señor su Dios, y para escuchar sus consejos, sí, cuán prontos en enorgullecerse. He aquí, benditos son quienes ponen el corazón en el Señor Jesucristo, sí, quienes se acuerdan de él y cumplen sus mandamientos desde el principio hasta el fin.',
            },
            {
              type: 'paragraph',
              text: 'La frase "y así vemos" es la firma de Mormón como editor. Aparece en momentos clave para destacar la lección que quiere que el lector extraiga de la historia que acaba de narrar. Es un maestro que no confía en que el alumno saque la conclusión solo — la dice explícitamente. Helamán 12 es uno de los ejemplos más extensos: Mormón interrumpe la narrativa durante 26 versículos para reflexionar sobre la naturaleza humana, la prosperidad como trampa espiritual, y la fidelidad de Dios.',
            },
            {
              type: 'key_points',
              title: 'Marcadores de la voz editorial de Mormón',
              points: [
                '"Y así vemos que..." — conclusión moral explícita de una historia',
                '"Y yo, Mormón..." — transición donde sale de la narración para hablar directamente',
                '"No es posible que escriba la centésima parte..." — reconocimiento de limitaciones',
                '"Y ahora bien, yo hablo algo concerniente a esto..." — inserción de reflexión personal',
                'Prefacios a los libros (como Mormón 5) — donde habla directamente a lectores futuros',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'Helamán 12 — el ensayo de Mormón sobre la naturaleza humana',
              body: 'Helamán 12 es único en el Libro de Mormón: es el ensayo más largo y explícitamente editorial de Mormón, insertado en medio de la narrativa histórica. Después de describir un ciclo más del patrón de orgullo-prosperidad-iniquidad-destrucción-humildad, Mormón para y reflexiona: "¡Cuántos insensatos hijos de los hombres son!" (v.4-5). Entonces hace uno de los argumentos más poderosos sobre la omnipotencia de Dios en toda la escritura (v.7-22): si Dios puede ordenar a la tierra, al agua, y a los cielos, ¿por qué el hombre eligiría no obedecerle?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Escribiendo para Nosotros — 1,600 Años en el Futuro',
      intro: {
        romanNumeral: 'IV',
        title: 'Mormón 5:12-15 — Una Carta para los Lectores del Futuro',
        paragraphs: [
          'Lo más asombroso de la obra editorial de Mormón es que sabía quién sería su audiencia final. No escribió para sus contemporáneos — ellos estaban perdidos. Escribió para nosotros. Y lo dice explícitamente.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La Audiencia que Mormón Tenía en Mente',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 5:12-15',
              text: 'Y estas cosas son escritas para que quizás los lamanitas se acuerden del pacto del Señor, y para que lo reconozcan para su salvación; y para que la simiente de este pueblo sea preservada en conocimiento de sí misma. Y también para que el remanente de la casa de Jacob sea persuadido a creer en Jesucristo, el Hijo de Dios... Y entonces sabrán el pacto que el Padre hizo con sus padres, oh casa de Israel.',
            },
            {
              type: 'paragraph',
              text: 'Mormón entendía que escribía en el contexto de la Restauración sin conocer los detalles de ella. Sabía que sus palabras llegarían a los descendientes de los lamanitas, a los gentiles, y a los dispersos de Israel. En Mormón 7, escribe directamente a los lamanitas de los últimos días: "Sepan que deben acudir al arrepentimiento... sepan que deben creer en Jesucristo... sepan que deben someterse a él." No habla como historiador de una civilización muerta — habla como profeta a gente viva.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mormón 7:1, 8-9',
              text: 'Y ahora he aquí, yo quiero hablaros algo a vosotros, que sois un remanente de la casa de Israel; y estas son las palabras que hablo: Sabed que debéis venir al arrepentimiento... Y él os ha traído el evangelio, y el pacto del Padre con la casa de Israel; y el Libro de Mormón, el cual contiene la verdad y la palabra de Dios — el cual es para llevar al gentil y al judío.',
            },
            {
              type: 'deep_dive',
              title: 'Mormón como autor y como personaje',
              paragraphs: [
                'Una distinción importante: Mormón es tanto el narrador del libro como un personaje dentro de él. Como personaje, aparece en los últimos capítulos del libro que lleva su nombre, describiendo su propia experiencia. Como narrador, ha estado presente desde el libro de Mosíah, insertando comentarios, haciendo transiciones, y organizando el material.',
                'Esta dualidad hace que la lectura del Libro de Mormón sea una experiencia única: el mismo hombre que describe las batallas también las vivió. El mismo hombre que llama a los lectores futuros al arrepentimiento también lloró sobre los cadáveres de 230,000 personas. La autoridad de su voz es inseparable de la profundidad de su experiencia.',
                'Cuando José Smith tradujo el Libro de Mormón, estaba reproduciendo la voz de Mormón — un hombre que había dedicado su vida entera a que ese texto llegara al siglo XIX sin corrupción. La traducción fue el cumplimiento de la vida de un compilador.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué sientes al leer el Libro de Mormón sabiendo que Mormón te tenía a ti específicamente en mente como audiencia? ¿Cómo cambiaría tu lectura del texto si lo leyeras como una carta personal de un profeta que vio tu época y te escribió para ella?',
            },
          ],
        },
      ],
    },
  ],
}
