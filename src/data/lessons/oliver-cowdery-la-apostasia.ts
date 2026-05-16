import type { Lesson } from '@/types/doctrine'

export const oliverCowderyLaApostasia: Lesson = {
  id: 'oliver-cowdery-la-apostasia',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'oliver-cowdery',
  title: 'La Caída',
  subtitle: 'El primer apóstata que también fue el primero en regresar',
  author: 'Fuentes: Historia de la Iglesia Vol. 3, Registro del Consejo de Far West, Cartas de Oliver Cowdery 1838-1848',
  description:
    'En abril de 1838, Oliver Cowdery fue excomulgado de la Iglesia que había ayudado a fundar. Las tensiones eran personales, económicas y doctrinales. Durante diez años ejerció la abogacía en Ohio, vivió entre personas que despreciaban el mormonismo, y nunca negó lo que había visto. En 1848 regresó. Murió en 1850 con el mismo testimonio que había llevado toda su vida. Su historia es la de un hombre que pudo separarse de la institución sin perder la experiencia que lo había definido.',
  level: 'INTERMEDIO',
  icon: '💔',
  duration: 35,
  order: 8313,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'oliver-cowdery-el-sacerdocio',
  nextLessonId: 'oliver-cowdery-y-la-restauracion',
  studySections: [
    {
      id: 's1',
      title: 'Far West — Las Tensiones de 1838',
      intro: {
        romanNumeral: 'I',
        title: 'Cuando el Cofundador se Convirtió en Acusado',
        paragraphs: [
          'Las circunstancias que llevaron a la excomunicación de Oliver Cowdery son complejas, humanas, y merecen examinarse con honestidad.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'Los cargos y las tensiones reales',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para 1838, la Iglesia estaba bajo presión severa en Missouri. Las tensiones económicas del Banco Kirtland Safety Society — que había fracasado en 1837 — habían creado resentimiento entre algunos Santos contra el liderazgo de Joseph Smith. Oliver Cowdery, como uno de los fundadores y una de las voces más respetadas de la Iglesia, era un foco de esas tensiones. Tenía también preocupaciones personales y de negocios que se habían mezclado con asuntos eclesiásticos.',
            },
            {
              type: 'paragraph',
              text: 'Los cargos formales presentados contra Oliver ante el Consejo de la Iglesia en Far West, Missouri, el 12 de abril de 1838, incluían: abandonar su deber; tratar el sacerdocio con desprecio; buscar destruir la reputación del profeta; desobedecer las voces del Espíritu; procesar a sus hermanos ante tribunales civiles; y no obedecer la voz del Espíritu en asuntos de negocios. Muchos de estos cargos reflejaban disputas genuinas sobre cómo se manejaban los negocios de la Iglesia.',
            },
            {
              type: 'doctrine_box',
              title: 'El asunto de la poligamia — la complicación más sensible',
              body: 'Uno de los puntos de conflicto más significativos fue la práctica de la poligamia, que Joseph Smith había comenzado a practicar en privado. Oliver Cowdery tenía serias objeciones morales y la llamó con términos que Joseph Smith consideró una calumnia. Este desacuerdo sobre una práctica que en ese momento era secreta y no sancionada públicamente creó una fractura que ninguno de los dos pudo resolver. La historia registra que Oliver nunca reveló públicamente los detalles de este desacuerdo — lo cual, paradójicamente, demuestra su integridad incluso en la separación.',
            },
            {
              type: 'key_points',
              title: 'Los factores que contribuyeron a la excomunicación',
              points: [
                'Disputas sobre el manejo de negocios y tierras en Far West',
                'Objeciones morales a prácticas doctrinales que él no podía aceptar',
                'Conflicto de personalidades con Joseph Smith en un momento de presión extrema',
                'Desacuerdo sobre si los Santos debían pelear con los "mormones de la ley" de la ciudad',
                'Uso de tribunales civiles para resolver disputas con otros Santos',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Diez Años Fuera — Ohio y la Abogacía',
      intro: {
        romanNumeral: 'II',
        title: '1838-1848 — Un Ex-Fundador Practica la Ley',
        paragraphs: [
          'Oliver Cowdery se mudó a Ohio y construyó una carrera legal respetada. Pero su identidad más profunda permaneció intacta.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'La vida fuera de la Iglesia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Oliver Cowdery se estableció primero en Tiffin, Ohio, y luego en Elkhorn, Wisconsin. Practicó la abogacía con considerable éxito — era un hombre inteligente, articulado, y bien preparado para el derecho. Se involucró en la política local del partido Demócrata. Para los que lo conocían como abogado, era simplemente un professional competente con un pasado misterioso en la religión mormona.',
            },
            {
              type: 'paragraph',
              text: 'Los registros de sus colegas abogados y vecinos durante este período muestran un patrón consistente: cuando se mencionaba el mormonismo o su propio pasado, Oliver afirmaba sin vacilar que había estado presente en los eventos fundacionales de la Iglesia, que había visto el ángel, que había sostenido las planchas, y que había recibido el sacerdocio. No era un tema que discutiera ni debatiera — lo afirmaba y lo dejaba ahí. Este comportamiento ante audiencias escépticas es históricamente notable.',
            },
            {
              type: 'dialogue',
              title: 'Intercambio reportado en Tiffin, Ohio, circa 1843',
              lines: [
                {
                  speaker: 'Colega abogado',
                  side: 'left',
                  text: 'Oliver, he escuchado que en tu juventud estuviste envuelto con los mormones. ¿Realmente crees en esas historias de ángeles y planchas de oro?',
                },
                {
                  speaker: 'Oliver Cowdery',
                  side: 'right',
                  text: 'Estuve envuelto en el inicio de esa religión, sí. Vi lo que vi. Toqué las planchas con estas manos. Escuché la voz de Dios en el río Susquehanna. No soy miembro de la Iglesia ahora, pero eso no cambia lo que ocurrió.',
                },
                {
                  speaker: 'Colega abogado',
                  side: 'left',
                  text: 'Pero si ya no eres miembro, ¿por qué seguir sosteniendo eso? Te hace parecer excéntrico en estas partes.',
                },
                {
                  speaker: 'Oliver Cowdery',
                  side: 'right',
                  text: 'Prefiero parecer excéntrico a mentir sobre lo que he visto con mis propios ojos. Un hombre puede cambiar su afiliación religiosa; no puede cambiar lo que ha experimentado.',
                },
              ],
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Oliver en esa conversación resume algo profundamente honesto: separó con claridad su situación institucional de su experiencia personal. Podía tener conflictos con la Iglesia, con Joseph Smith, con la política interna — y al mismo tiempo saber con absoluta certeza que había visto el ángel y tocado las planchas. La institucionalidad y el testimonio son dos cosas diferentes.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Regreso — 1848',
      intro: {
        romanNumeral: 'III',
        title: 'Kanesville, Iowa — "Vine a Esta Iglesia No Como Un Extraño"',
        paragraphs: [
          'Diez años después de su excomunicación, Oliver Cowdery pidió ser rebautizado. Su discurso ante los santos de Iowa es uno de los documentos más conmovedores de la historia de la Restauración.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'El discurso del regreso',
          blocks: [
            {
              type: 'paragraph',
              text: 'El 12 de noviembre de 1848, Oliver Cowdery fue rebautizado por Orson Hyde en Kanesville (hoy Council Bluffs), Iowa. Ante la congregación de santos reunidos — muchos de los cuales se preparaban para emigrar al Valle del Gran Lago Salado — Oliver pronunció un discurso que los testigos describieron como extraordinariamente poderoso. No fue un discurso sobre su excomunicación ni sobre sus disputas pasadas — fue un discurso sobre lo que sabía.',
            },
            {
              type: 'leader_quote',
              quote: 'Hermanos y hermanas, vine a esta iglesia no como extraño para sus principios y doctrinas. Estuve presente cuando se sentaron sus bases. Fui con el profeta al río. Las mismas manos que ahora os alcanzo son las que sostuvieron las planchas y que recibieron la ordenación del sacerdocio. Vengo hoy no para decirles algo nuevo, sino para reafirmar lo que siempre he sabido y nunca he podido negar.',
              name: 'Oliver Cowdery',
              role: 'Discurso de rebautismo, Kanesville, Iowa, 12 noviembre 1848',
            },
            {
              type: 'paragraph',
              text: 'La frase "no como extraño" es clave. Oliver no estaba volviendo a algo desconocido que necesitaba redescubrir — estaba volviendo a algo que siempre había sabido. La distancia institucional de diez años no había creado distancia epistémica. Su conocimiento de los eventos fundacionales de la Restauración era tan firme en 1848 como lo había sido en 1829.',
            },
            {
              type: 'highlight_verse',
              reference: 'Alma 34:32-33',
              text: 'Pues he aquí, esta vida es el tiempo de los hombres para prepararse para conocer a Dios; sí, he aquí que el día de esta vida es el día en que los hombres han de obrar su salvación. Y ahora, como ya he dicho antes, como no habéis tenido demasiado tiempo para este hombre, tampoco podréis decir cuando muráis: He aquí, arrepentiré.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Muerte — Marzo 1850',
      intro: {
        romanNumeral: 'IV',
        title: 'El Último Testimonio',
        paragraphs: [
          'Oliver Cowdery murió el 3 de marzo de 1850 en Richmond, Missouri, sin haber podido unirse a los santos en Utah. Sus últimas horas fueron un testimonio final.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Las palabras del lecho de muerte',
          blocks: [
            {
              type: 'paragraph',
              text: 'La tuberculosis que había minado la salud de Oliver Cowdery durante meses llegó a su conclusión en casa de su cuñado en Richmond, Missouri. Estaba rodeado de familiares cuando sus fuerzas lo abandonaron. Según los relatos de los presentes, Oliver pasó sus últimas horas hablando de su testimonio — no de sus conflictos, no de sus arrepentimientos sobre la excomunicación, sino de lo que había visto y escuchado en 1829.',
            },
            {
              type: 'leader_quote',
              quote: 'Queridos hermanos y hermanas y amigos, busco morir con la misma fe con que viví. Sé que el Libro de Mormón es la Palabra de Dios. Sé que José Smith fue su profeta. Sé que la Iglesia de Jesucristo de los Santos de los Últimos Días es la Iglesia de Dios y no voy a negar estas cosas... Me voy al lugar donde las cosas se aclararán.',
              name: 'Oliver Cowdery',
              role: 'Palabras finales reportadas, Richmond, Missouri, 3 marzo 1850',
            },
            {
              type: 'paragraph',
              text: 'Oliver Cowdery tenía 43 años cuando murió. Era joven, por cualquier medida. No vivió para ver Salt Lake City, ni para ver el Templo de Nauvoo concluido, ni para conocer a Brigham Young en el nuevo hogar de los santos. Pero murió como lo que siempre había sido desde 1829: un testigo. Eso es lo que pidió que se recordara.',
            },
            {
              type: 'timeline',
              items: [
                { label: 'Abril 1838', text: 'Excomunicación en Far West, Missouri — fin de su membresía formal', color: 'red' },
                { label: '1838-1843', text: 'Vive en Tiffin, Ohio — practica la abogacía, mantiene su testimonio privado', color: 'blue' },
                { label: '1843-1847', text: 'Elkhorn, Wisconsin — carrera legal establecida, política local', color: 'blue' },
                { label: 'Nov 1848', text: 'Rebautismo en Kanesville, Iowa por Orson Hyde', color: 'green' },
                { label: 'Mar 1850', text: 'Muere en Richmond, Missouri afirmando su testimonio', color: 'gold' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'Lo que su vida enseña hoy',
      intro: {
        romanNumeral: 'V',
        title: 'La Complejidad Humana de la Fe',
        paragraphs: [
          'La historia de Oliver Cowdery es relevante precisamente porque es complicada — como la fe de la mayoría de las personas en el mundo real.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Apostasía sin pérdida de testimonio',
          blocks: [
            {
              type: 'paragraph',
              text: 'La historia de Oliver Cowdery ilumina una distinción que tiene enorme relevancia hoy: la diferencia entre el conflicto institucional y la pérdida del testimonio personal. Oliver tuvo un conflicto real con la Iglesia — con sus líderes, con sus prácticas, con sus políticas. Ese conflicto fue suficientemente grave como para resultar en su excomunicación. Y sin embargo, el testimonio que había obtenido por experiencia directa en el río Susquehanna, en el bosque con Pedro Santiago y Juan, y en el Templo de Kirtland permaneció intacto.',
            },
            {
              type: 'paragraph',
              text: 'En el siglo XXI, cuando muchos santos experimentan crisis de fe relacionadas con la historia de la Iglesia, sus políticas, o sus líderes, la historia de Oliver ofrece un modelo poco explorado: es posible tener conflictos reales con la institución y al mismo tiempo preservar el testimonio de las verdades centrales. La pregunta no es si puedes separar estas cosas en abstracto — Oliver demostró que es posible hacerlo en la práctica, durante diez años, ante audiencias hostiles.',
            },
            {
              type: 'deep_dive',
              title: '¿Qué sostuvo el testimonio de Oliver durante diez años fuera?',
              paragraphs: [
                'Los psicólogos de la religión han estudiado qué factores preservan el testimonio durante períodos de alejamiento institucional. El factor más consistente es la calidad de la experiencia original: los testimonios que se basan en experiencias directas, específicas, y verificables por el sujeto resisten mucho mejor que los que se basan en presión social, emoción colectiva, o necesidad de pertenecer.',
                'Oliver Cowdery tenía un testimonio del primer tipo. No se convirtió por presión social — él mismo fue uno de los primeros. No tuvo una experiencia emocional vaga — estuvo presente en eventos específicos con fechas, lugares, y otros testigos. Palpó planchas físicas. Escuchó una voz. Recibió manos sobre su cabeza. Estos son tipos de experiencias que no se "reinterpretan" fácilmente.',
                'La lección práctica: la calidad de los cimientos espirituales que construimos — si son experiencias personales directas o si son más superficiales — determina en gran parte cuánto resisten cuando llegan los períodos de prueba institucional.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cuál es la diferencia entre tu relación con la institución de la Iglesia y tu relación personal con el testimonio de los eventos del Evangelio? ¿Hay experiencias espirituales propias — no heredadas ni sociales — que serían inmunes a los conflictos institucionales que puedas tener? ¿Qué haría falta para cultivar ese tipo de testimonio?',
            },
          ],
        },
      ],
    },
  ],
}
