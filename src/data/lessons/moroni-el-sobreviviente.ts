import type { Lesson } from '@/types/doctrine'

export const moroniElSobreviviente: Lesson = {
  id: 'moroni-el-sobreviviente',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'moroni-profeta',
  title: 'Moroni — El Sobreviviente',
  subtitle: 'Solo entre las ruinas de su civilización',
  description:
    'Después de la batalla final de Cumorah, 230,000 nefitas yacían muertos —incluido su padre Mormón. Moroni era el único sobreviviente. Durante décadas vagó solo, escondiéndose de los lamanitas, escribiendo para una audiencia que nunca conocería. Su testimonio es el más solitario de toda la escritura sagrada.',
  level: 'AVANZADO',
  icon: '🗡️',
  duration: 35,
  order: 7710,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Última Batalla',
      intro: {
        romanNumeral: 'I',
        title: 'La Última Batalla',
        paragraphs: [
          'Mormón 6 describe el mayor desastre bélico del Libro de Mormón: veintitrés divisiones nefitas destruidas en la colina Cumorah. Moroni no solo sobrevivió —fue el único sobreviviente. Este capítulo es el epitafio de una civilización.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Mormón 6 — El recuento de los muertos',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 6:8-15',
              text: 'Y cuando hubieron caído mis hombres, yo quedé solo, sin familia ni amigos. Y aquellos que escaparon con los lamanitas eran pocos... Y mi alma se ha lamentado por lo que han hecho. ¡Oh, vosotros los hermosos hijos e hijas, los padres y las madres, los esposos y las esposas, los comelones de la hermosa tierra!',
            },
            {
              type: 'paragraph',
              text: 'El número 230,000 no es una abstracción estadística para Moroni — son personas que conoció. Mormón 6 lista a los capitanes por nombre: Giddianhi, Lamah, Gilgal, Limhah, Jeneum, Cumenihah, Moronihah, Antionum, Shiblom, Shem, Josh. Moroni conocía a sus familias. Había crecido en esa sociedad. El lamento final de Mormón en el versículo 17 — "¡Oh, hermosos hijos e hijas!" — es el llanto de un padre por un pueblo, no la nota de un cronista distante.',
            },
            {
              type: 'doctrine_box',
              title: 'La geografía de Cumorah',
              body: 'Mormón 6:4 especifica que Mormón escondió todos los registros sagrados en la colina Cumorah "excepto estas pocas planchas que entregué a mi hijo Moroni." Moroni recibió las planchas que contenían el registro abreviado de su padre. Esta transferencia —padre a hijo, en el campo de batalla, mientras los lamanitas se acercaban— es uno de los momentos más cargados emocionalmente de toda la escritura. La colina Cumorah en el estado de Nueva York, donde José Smith encontró las planchas, es identificada en DyC 128:20 como el mismo lugar.',
            },
            {
              type: 'paragraph',
              text: 'Lo que hace la descripción de Mormón 6 tan poderosa es su especificidad. No dice "muchos murieron" —da los números exactos de cada división: diez mil, diez mil, diez mil, repetido veintitrés veces. El efecto retórico es devastador: el lector acompaña a Mormón mientras cuenta a sus muertos, división por división, hasta llegar al total imposible. Es el único registro bíblico o restaurado donde un profeta enumera su propia derrota con tal detalle.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Último Nefita',
      intro: {
        romanNumeral: 'II',
        title: 'El Último Nefita',
        paragraphs: [
          'Mormón 8 es el capítulo más íntimo del Libro de Mormón. Moroni toma el registro de su padre y lo concluye, sin saber si volverá a escribir. No tiene familia, comunidad, ni destino conocido. Solo tiene el registro —y el mandato de preservarlo.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Mormón 8:1-11 — El testimonio de la soledad',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 8:3-5',
              text: 'Mi padre fue muerto en batalla, y todos mis familiares, y no he tenido amigos ni adonde ir; y cuánto tiempo viviré no lo sé... Y no sé cuándo escribiré más; pero tengo pocas cosas que escribir acerca de mi pueblo, porque los que no cayeron en batalla cayeron en apostasía, y no hay nadie que sepa el Dios verdadero excepto los discípulos de Jesús que permanecieron en la tierra hasta que la maldad del pueblo fue tan grande que el Señor no les permitiría permanecer en la tierra.',
            },
            {
              type: 'paragraph',
              text: 'La frase "no he tenido amigos ni adonde ir" es una de las declaraciones más crudas de toda la escritura canónica. Moroni no está dramatizando su situación —está describiendo una realidad literal. No había un solo nefita vivo con quien hablar. No había aldea, familia ni comunidad. Era el último representante de una civilización que había existido por mil años, y esa civilización acababa de desaparecer en un solo día de batalla. El aislamiento de Moroni no tiene paralelo en la historia bíblica.',
            },
            {
              type: 'key_points',
              title: 'Las condiciones de Moroni como sobreviviente',
              points: [
                'Sin familia — su padre Mormón murió en la batalla final de Cumorah',
                'Sin comunidad — el pueblo nefita fue destruido; los sobrevivientes lamanitas lo buscarían para matarlo por no renegar de su fe',
                'Sin destino fijo — vagó durante décadas sin un hogar permanente',
                'Con un encargo específico — preservar las planchas que contienen el registro de su padre',
                'Con visión profética — Mormón 8:35 confirma que Moroni vio nuestra época mediante revelación divina',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo escribes para personas que nunca conocerás, en una época que no puedes imaginar completamente, sobre un Dios en quien confías aunque tu mundo entero acaba de colapsar? ¿Qué dice sobre la fe de Moroni el hecho de que continuara escribiendo?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Encargo de las Planchas',
      intro: {
        romanNumeral: 'III',
        title: 'El Encargo de las Planchas',
        paragraphs: [
          'Moroni recibió las planchas de su padre Mormón en el campo de batalla. No era una transferencia burocrática —era el legado de un profeta a su hijo, el último acto de amor de un padre que sabía que iba a morir. Moroni cargó ese peso durante décadas.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La responsabilidad de un registro',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 8:14-16',
              text: 'Y yo soy el mismo que esconde este registro para el Señor; las planchas son de gran valor... Y ninguno puede tenerlas salvo con el propósito de hacer el bien; porque Dios quiere que se realice para el beneficio de aquellos que las encontrarán... Y el Señor sabe que tengo esperanza en que muchos sean beneficiados por ellas.',
            },
            {
              type: 'paragraph',
              text: 'Mormón había abreviado el registro de la historia nefita a lo largo de décadas, eligiendo cuidadosamente qué incluir para "el bien de las almas." Moroni recibió ese registro y lo custodió durante años de errante soledad. El encargo no era solamente físico —preservar las planchas de la intemperie y los lamanitas— sino doctrinal: estas planchas contendrían el testimonio de Cristo que brotaría como "una voz desde el polvo" (Mormón 8:23) para testificar a los gentiles en los últimos días.',
            },
            {
              type: 'deep_dive',
              badge: 'Historia documental',
              title: 'El proceso de compilación del Libro de Mormón',
              paragraphs: [
                'Lo que tenemos como Libro de Mormón es la abreviación de Mormón de registros mucho más extensos, más las adiciones directas de Moroni. Mormón tomó las planchas de Nefi, las planchas de la gente de Zérahemnah, Amón y otros, y las abrevió en las planchas de Mormón. Las planchas pequeñas de Nefi (1 Nefi a Omni, y Palabras de Mormón) fueron incluidas sin abreviación.',
                'Moroni añadió tres contribuciones directas: el Libro de Moroni (sus propias enseñanzas y registros litúrgicos), el Libro de Éter (abreviación de las planchas de Éter sobre la civilización Jaredita), y sus añadiduras editoriales a Mormón 8-9. Estas son las palabras directas del último testigo nefita —no transmitidas a través de otro editor.',
                'La soledad de Moroni como escritor es única incluso entre los profetas del Libro de Mormón: escribió sin la infraestructura de una comunidad, sin acceso a escrituras previas que revisar, dependiendo únicamente de lo que Dios le reveló directamente y de lo que su padre le había enseñado.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Escribir desde el Fin del Mundo',
      intro: {
        romanNumeral: 'IV',
        title: 'Escribir desde el Fin del Mundo',
        paragraphs: [
          'El capítulo de Moroni en Mormón 8 termina con uno de los cambios de perspectiva más dramáticos de toda la escritura: Moroni deja de escribir sobre el pasado y comienza a hablar directamente al futuro. El hombre solo y sin hogar se convierte en profeta que interpela a nuestra generación.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'La voz que traspasa los siglos',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Mormón 8:23-26',
              text: 'Búsqueme quien quisiere destruir estas cosas, que el Señor Dios los vengará sobre ellas, porque el pueblo sabio guardará estas cosas. Y nadie los destruirá excepto que sea llevado a la ruina... Porque el Señor ha dicho: No serán destruidas las palabras de los justos por las manos de los réprobos.',
            },
            {
              type: 'paragraph',
              text: 'La confianza de Moroni en la preservación del registro, expresada en condiciones de extrema vulnerabilidad personal, es uno de los testimonios más poderosos del Libro de Mormón. Él era el último nefita, perseguido, solo, sin recursos. Y afirma con absoluta certeza que el registro será preservado y llevado a las naciones. Esta certeza no venía de circunstancias favorables —venía de revelación directa de Dios sobre el propósito del registro.',
            },
            {
              type: 'central_quote',
              text: 'Y yo soy el mismo que esconde este registro para el Señor; las planchas son de gran valor, y ninguno puede tenerlas salvo con el propósito de hacer el bien.',
              attribution: 'Mormón 8:14',
            },
            {
              type: 'reflection',
              prompt: 'Moroni escribió para una audiencia que nunca conocería, confiando que su testimonio llegaría. ¿Hay algo en tu vida —un testimonio, una carta, un ejemplo— que estás "escribiendo" para alguien que todavía no está presente? ¿Cómo te inspira la fidelidad de Moroni a ser más intencional en dejar legados de fe?',
            },
          ],
        },
      ],
    },
  ],
}
