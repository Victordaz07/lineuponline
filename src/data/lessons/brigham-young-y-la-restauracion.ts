import type { Lesson } from '@/types/doctrine'

export const brighamYoungYLaRestauracion: Lesson = {
  id: 'brigham-young-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'brigham-young',
  title: 'Brigham y la Restauración',
  subtitle: 'El León de Israel y la construcción del Reino',
  author: 'Fuentes: Diario de Discursos, Historia de la Iglesia, Richard Bushman "Rough Stone Rolling", Terryl Givens',
  description:
    'Joseph Smith fue el revelador; Brigham Young fue el implementador. Donde Joseph recibió las revelaciones, Brigham construyó las instituciones que las hicieron durables: la administración de la Iglesia, el sistema educativo, la economía cooperativa, el programa del templo. Su sucesión estableció el modelo apostólico que ha gobernado la Iglesia desde entonces. Cuando murió el 29 de agosto de 1877, estaba activamente planificando nuevas colonias y nuevos templos. Fue el segundo gran arquitecto de la Restauración.',
  level: 'AVANZADO',
  icon: '✨',
  duration: 25,
  order: 8414,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'brigham-young-el-colonizador',
  nextLessonId: null,
  studySections: [
    {
      id: 's1',
      title: 'El implementador de Joseph Smith',
      intro: {
        romanNumeral: 'I',
        title: 'Joseph Reveló — Brigham Construyó',
        paragraphs: [
          'La distinción entre Joseph Smith y Brigham Young no es de autoridad o santidad — es de función. Cada uno fue esencial para la Restauración de una manera diferente.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La división de roles en la Restauración',
          blocks: [
            {
              type: 'paragraph',
              text: 'Joseph Smith fue el profeta de la Restauración en el sentido más técnico: recibió revelaciones específicas, nuevas escrituras, ordenanzas del templo, doctrinas sobre la naturaleza de Dios y el hombre, el plan de salvación, y los principios del sacerdocio. Sin Joseph Smith, no hay Restauración — no hay Libro de Mormón, no hay DyC, no hay Perla de Gran Precio. Joseph abrió la dispensación.',
            },
            {
              type: 'paragraph',
              text: 'Brigham Young fue el profeta de la implementación: tomó lo que Joseph reveló y construyó las estructuras que lo hicieron vivible para generaciones. Sin Brigham Young, las revelaciones de Joseph habrían pertenecido a una pequeña comunidad dispersa, perseguida, y potencialmente extinguida. Brigham no reveló nuevas escrituras canónicas, pero construyó la Iglesia que haría esas escrituras accesibles a millones.',
            },
            {
              type: 'compare_grid',
              title: 'Joseph el Revelador vs. Brigham el Implementador',
              left: {
                label: 'Joseph Smith — el Revelador',
                points: [
                  'Recibió el Libro de Mormón, DyC, y Perla de Gran Precio',
                  'Reveló las ordenanzas del templo — unción, investidura, sellamientos',
                  'Estableció los principios doctrinales fundamentales',
                  'Organizó la Iglesia en estructura primitiva',
                  'Murió antes de ver el templo completado o el éxodo iniciado',
                ],
              },
              right: {
                label: 'Brigham Young — el Implementador',
                points: [
                  'Construyó las instituciones que preservaron las revelaciones de Joseph',
                  'Administró las ordenanzas del templo a decenas de miles',
                  'Organizó el éxodo y estableció 350 comunidades',
                  'Estableció el modelo de sucesión apostólica',
                  'Murió planificando nuevos templos y colonias — nunca paró',
                ],
              },
            },
            {
              type: 'leader_quote',
              quote: 'José Smith reveló las llaves del reino. Mi trabajo es asegurarme de que esas llaves se usen — que los templos se construyan, que las ordenanzas se administren, que el pueblo se organice. No soy el revelador; soy el constructor.',
              name: 'Brigham Young',
              role: 'Paráfrasis de múltiples discursos en el Diario de Discursos',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El programa del templo — De Nauvoo a San Jorge',
      intro: {
        romanNumeral: 'II',
        title: 'La Casa del Señor como Prioridad Central',
        paragraphs: [
          'Brigham Young entendió que el programa del templo era la clave de la Restauración. Dedicó treinta años a construir la infraestructura necesaria para hacerlo duradero.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Del Endowment House al Templo de San Jorge',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando los santos llegaron al Valle del Gran Lago Salado en 1847, no había templo. Brigham Young estableció inmediatamente el Endowment House — una estructura temporal donde se administraron las ordenanzas del templo mientras se construía el templo permanente. Esta decisión refleja algo esencial sobre su liderazgo: la sustancia de las ordenanzas era más importante que el edificio, pero ambas cosas eran necesarias.',
            },
            {
              type: 'paragraph',
              text: 'La primera piedra del Templo de Salt Lake fue puesta el 6 de abril de 1853 — seis años después de la llegada al valle, en el aniversario de la fundación de la Iglesia. Brigham Young sabía que no viviría para ver su dedicación — la construcción duraría 40 años. No importó. La visión de largo plazo era característica de su liderazgo.',
            },
            {
              type: 'paragraph',
              text: 'El Templo de San Jorge, en el sur de Utah, fue el primero en completarse bajo su presidencia. Fue dedicado el 6 de enero de 1877, apenas ocho meses antes de su muerte. En sus últimos meses de vida, Brigham Young hizo el viaje de 300 millas al sur para supervisar personalmente la dedicación. Fue la primera obra del templo completa de la Restauración — el cumplimiento físico de lo que Joseph Smith había vislumbrado en Nauvoo.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 124:39-40',
              text: 'Por tanto, que mi siervo José, y sus consejeros, cuyo cargo es el de presidir sobre la obra del asentamiento de los pobres, y los obispos y sus consejos, y los altos consejos de la iglesia, y todos los altos sacerdotes, se reúnan y tomen su asiento para administrar salvación a los muertos. Pues es necesario que yo haga una casa a mi Santo Nombre.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La sucesión apostólica — el modelo que perdura',
      intro: {
        romanNumeral: 'III',
        title: 'El Principio que Estableció Para Siempre',
        paragraphs: [
          'La manera en que Brigham Young sucedió a Joseph Smith estableció un principio que ha gobernado la Iglesia sin excepción desde 1844.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La antigüedad apostólica como principio de sucesión',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Brigham Young presentó el caso del Quórum de los Doce ante los santos de Nauvoo en agosto de 1844, estableció implícitamente un principio que la Iglesia ha seguido sin interrupción: el miembro más antiguo del Quórum de los Doce en términos de servicio continuo se convierte en el siguiente presidente de la Iglesia al fallecer el presidente anterior.',
            },
            {
              type: 'paragraph',
              text: 'Este principio — que elimina las ambigüedades, las disputas, y la política — ha producido una continuidad institucional extraordinaria. Cada uno de los dieciséis presidentes de la Iglesia desde Joseph Smith ha sido el presidente más antiguo del Quórum de los Doce en el momento de su llamado. La "línea de autoridad" es ininterrumpida. Brigham Young estableció este patrón, y la Iglesia lo ha seguido como si fuera revelación — porque en la práctica ha funcionado como una.',
            },
            {
              type: 'doctrine_box',
              title: 'El modelo de sucesión — por qué funciona',
              body: 'El modelo de sucesión apostólica tiene varias ventajas sobre otros sistemas: elimina la campaña por el liderazgo (el próximo presidente ya está determinado por el servicio previo); produce líderes con décadas de experiencia en la Iglesia antes de su llamado; crea estabilidad institucional al hacer la transición predecible; y evita que el presidente de la Iglesia convierta a sus sucesores personales en herederos del liderazgo. Brigham Young no eligió a su sucesor — la estructura que él ayudó a establecer lo hizo por él.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La muerte y el legado final',
      intro: {
        romanNumeral: 'IV',
        title: '29 de Agosto de 1877 — Todavía Construyendo',
        paragraphs: [
          'Brigham Young murió el 29 de agosto de 1877 en Salt Lake City. Tenía 76 años y había estado planificando nuevas colonias hasta semanas antes de su muerte.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Las últimas palabras y el legado',
          blocks: [
            {
              type: 'paragraph',
              text: 'Brigham Young murió de peritonitis, probablemente causada por una apendicitis. En sus últimas horas, según los testigos presentes, llamó los nombres de Joseph Smith, Hyrum Smith, y Heber C. Kimball — sus amigos más cercanos de los años fundacionales, todos muertos antes que él. Sus últimas palabras reportadas fueron "Joseph, Joseph, Joseph" — la única persona en cuyo nombre terminó.',
            },
            {
              type: 'leader_quote',
              quote: 'La inteligencia es la gloria de Dios. Yo diría que toda la mente de Dios, toda la sabiduría, todo el conocimiento y toda la inteligencia son gloria; porque inteligencia, cuando está aplicada a lo que debe ser, produce exaltación y gloria.',
              name: 'Brigham Young',
              role: 'Diario de Discursos, Vol. 13, sobre la naturaleza de la inteligencia divina',
            },
            {
              type: 'paragraph',
              text: 'La cita de Brigham Young sobre la inteligencia refleja algo que frecuentemente se pierde en la imagen del "León de Israel" como mero organizador pragmático: tenía también una profundidad teológica genuina, aunque diferente de la de Joseph Smith. Donde Joseph recibía revelaciones en torrentes, Brigham destilaba principios duraderos de la acción. Su teología era una teología de la experiencia — aprendemos quiénes somos haciendo, no solo creyendo.',
            },
            {
              type: 'timeline',
              items: [
                { label: '1 Jun 1801', text: 'Nace en Whitingham, Vermont', color: 'gold' },
                { label: 'Abr 1832', text: 'Bautismo — dos años después de recibir el Libro de Mormón', color: 'blue' },
                { label: 'Feb 1835', text: 'Llamado como apóstol en el primer Quórum de los Doce', color: 'gold' },
                { label: 'Ago 1844', text: 'Reconocido como presidente de la Iglesia tras el martirio de Joseph', color: 'blue' },
                { label: '24 Jul 1847', text: 'Llega al Valle del Gran Lago Salado — "Este es el lugar"', color: 'green' },
                { label: '6 Ene 1877', text: 'Dedica el Templo de San Jorge — primer templo completo de la Restauración', color: 'gold' },
                { label: '29 Ago 1877', text: 'Muere en Salt Lake City — sus últimas palabras: "Joseph, Joseph, Joseph"', color: 'red' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El lugar de Brigham en la historia de la Restauración',
      intro: {
        romanNumeral: 'V',
        title: 'El Segundo Gran Arquitecto',
        paragraphs: [
          'Joseph Smith abrió la dispensación. Brigham Young la construyó. Ambos son indispensables — y la historia de la Restauración no puede entenderse sin los dos.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'Lo que Brigham hizo posible',
          blocks: [
            {
              type: 'paragraph',
              text: 'La pregunta más justa que puede hacerse sobre Brigham Young no es "¿fue perfecto?" — claramente no lo fue. La pregunta es: ¿sin él, habrían sobrevivido las revelaciones y las instituciones de Joseph Smith hasta el siglo XXI? La respuesta honesta es: probablemente no, o al menos no de la manera en que sobrevivieron.',
            },
            {
              type: 'paragraph',
              text: 'La historia de las religiones está llena de movimientos fundados por profetas carismáticos que se disolvieron después de su muerte. Lo que distingue a La Iglesia de Jesucristo de los Santos de los Últimos Días de ese patrón es en parte la revelación continua — pero también la solidez institucional que Brigham Young construyó. Los 350 pueblos, las instituciones educativas, el programa del templo, el modelo de sucesión: todo eso fue Brigham.',
            },
            {
              type: 'deep_dive',
              title: 'Brigham Young y la durabilidad de la Restauración',
              paragraphs: [
                'Los historiadores de la religión han estudiado qué hace que un movimiento religioso sobreviva la muerte de su fundador. Los factores más consistentes son: la presencia de una estructura institucional clara, un sistema de sucesión legítima, una base geográfica y económica estable, y una narrativa compartida que le da sentido a la comunidad.',
                'Brigham Young proporcionó todos estos elementos. La estructura institucional del Quórum de los Doce como el cuerpo gobernante era clara. El sistema de sucesión por antigüedad apostólica fue establecido. La base geográfica del Valle del Gran Lago Salado era estratégicamente elegida para la autonomía. Y la narrativa del "éxodo al desierto" como cumplimiento bíblico le dio a los santos una historia que contar — y que vivir.',
                'Los errores de Brigham Young — Mountain Meadows, la teoría Adán-Dios, las restricciones raciales — son parte de ese mismo legado. Una visión honesta de él no puede omitirlos. Pero tampoco puede omitir que la Iglesia que él construyó fue suficientemente sólida para sobrevivir y eventualmente corregir esos errores. Eso es, en sí mismo, un logro extraordinario.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti que la Iglesia que Brigham Young construyó tuvo que corregir algunas de sus enseñanzas? ¿Te hace la Iglesia menos creíble, o más creíble — por su capacidad de crecer, corregir, y continuar? ¿Cuál es tu relación con un legado religioso que es genuinamente grandioso y genuinamente complicado al mismo tiempo?',
            },
          ],
        },
      ],
    },
  ],
}
