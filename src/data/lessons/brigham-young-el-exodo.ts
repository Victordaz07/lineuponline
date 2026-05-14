import type { Lesson } from '@/types/doctrine'

export const brighamYoungElExodo: Lesson = {
  id: 'brigham-young-el-exodo',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'brigham-young',
  title: 'El Éxodo',
  subtitle: '70,000 santos, las llanuras y el Valle de la Sal',
  author: 'Fuentes: Historia de la Iglesia Vol. 7, Diarios de los pioneros, Registros del Fondo Perpetuo de Emigración',
  description:
    'En febrero de 1846, bajo amenaza de violencia, los santos comenzaron a abandonar Nauvoo. En 1847, el primer grupo llegó al Valle del Gran Lago Salado. En las décadas que siguieron, más de 70,000 personas harían el viaje de 1,300 millas. Brigham Young organizó uno de los mayores éxodos de la historia americana con una logística que haría envidia a ejércitos modernos — y también sufrió uno de sus mayores fracasos en las compañías de carritos de mano de 1856. Su historia del éxodo es de grandeza y de tragedia.',
  level: 'INTERMEDIO',
  icon: '🏔️',
  duration: 35,
  order: 8412,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'brigham-young-nauvoo',
  nextLessonId: 'brigham-young-el-colonizador',
  studySections: [
    {
      id: 's1',
      title: 'La expulsión de Nauvoo — 1846',
      intro: {
        romanNumeral: 'I',
        title: 'Febrero 1846 — El Río Mississippi en Invierno',
        paragraphs: [
          'La salida de Nauvoo comenzó en pleno invierno, bajo presión de milicias que amenazaban con violencia si los santos no se iban antes de la primavera.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'La expulsión que nadie eligió',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para finales de 1845, era evidente que los santos no podrían quedarse en Nauvoo. Las presiones de los vecinos anti-mormones de Illinois habían escalado a amenazas de violencia organizada. Brigham Young negoció una salida: los santos partirían en primavera de 1846. Pero las presiones se aceleraron y el éxodo comenzó en febrero, en pleno invierno del Medio Oeste americano.',
            },
            {
              type: 'paragraph',
              text: 'El río Mississippi estaba parcialmente congelado cuando los primeros grupos cruzaron. Los registros de los diarios de los pioneros describen familias cruzando en balsas entre bloques de hielo flotante, con todas sus posesiones apiladas en carros. Brigham Young cruzó el 15 de febrero de 1846. No sería el último en hacerlo — los santos más pobres, los que no podían pagar el transporte, serían empujados fuera de Nauvoo meses después, algunos literalmente a punta de bayoneta.',
            },
            {
              type: 'doctrine_box',
              title: 'El patrón del éxodo — Moisés y Brigham',
              body: 'El paralelo entre el éxodo de Moisés y el éxodo de Brigham no fue perdido en sus contemporáneos ni en sus sucesores. Ambos líderes condujeron a un pueblo perseguido a través de un desierto hacia una tierra prometida. Ambos murieron sin ver a su pueblo completamente establecido. Ambos organizaron sus grupos en unidades de diez, cincuenta y ciento (Éxodo 18:21 — el mismo sistema que Brigham usó para organizar las compañías de carros). La analogía no es perfecta, pero los santos la vivieron conscientemente como su propio éxodo.',
            },
            {
              type: 'highlight_verse',
              reference: 'Éxodo 13:21-22',
              text: 'Y Jehová iba delante de ellos de día en una columna de nube para guiarlos por el camino, y de noche en una columna de fuego para alumbrarlos, a fin de que anduviesen de día y de noche. Nunca se apartó de delante del pueblo la columna de nube de día, ni de noche la columna de fuego.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Winter Quarters — el invierno de 1846-1847',
      intro: {
        romanNumeral: 'II',
        title: 'El Missouri y el Invierno que Mató a Cientos',
        paragraphs: [
          'Los santos se establecieron en Winter Quarters, en las orillas del río Missouri, para pasar el invierno de 1846-1847. Fue uno de los períodos más difíciles de la historia de la Iglesia.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'Winter Quarters — supervivencia y organización',
          blocks: [
            {
              type: 'paragraph',
              text: 'Unos 15,000 santos pasaron el invierno de 1846-1847 en Winter Quarters (hoy Omaha, Nebraska) y los campamentos circundantes. Las condiciones eran extremas: viviendas improvisadas en dug-outs y cabañas de madera, escasez de alimentos, frío severo, y enfermedades. El escorbuto, la fiebre tifoidea y la disentería cobraron cientos de vidas. El cementerio de Winter Quarters — hoy un sitio histórico — contiene los restos de más de 600 personas.',
            },
            {
              type: 'paragraph',
              text: 'En medio de la tragedia, Brigham Young organizó. Asignó lotes para casas, estableció un sistema de distribución de alimentos, organizó brigadas para conseguir madera, y mantuvo el orden en una comunidad que fácilmente podría haber caído en el caos. También recibió en Winter Quarters una de las revelaciones más hermosas del período: DyC 136, conocida como "La Palabra y Voluntad del Señor," que le llegó el 14 de enero de 1847 y que organizó específicamente los campos de los santos para el viaje a Utah.',
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 136:1, 3-4',
              text: 'La palabra y voluntad del Señor, el Dios de Israel, a la hueste de Israel, así dice el Señor: Que todos los santos que hayan recibido la revelación del Señor se organicen en compañías, con un pacto y promesa de guardar todos los mandamientos y estatutos del Señor nuestro Dios. Que las compañías sean organizadas con un capitán de cien, capitán de cincuenta y capitán de diez.',
            },
            {
              type: 'paragraph',
              text: 'El sistema de organización en DyC 136 es esencialmente el mismo que Moisés usó en el desierto: divisiones en grupos de diez, cincuenta y ciento, cada uno con un líder responsable. Brigham implementó este sistema con precisión militar. Para la primavera de 1847, el primer grupo de pioneros — 148 personas, incluyendo 3 mujeres y 2 niños — estaba listo para partir hacia el oeste.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El viaje de 1847 — 1,300 millas',
      intro: {
        romanNumeral: 'III',
        title: '24 de Julio de 1847 — "Este Es el Lugar"',
        paragraphs: [
          'El primer grupo llegó al Valle del Gran Lago Salado el 24 de julio de 1847. Brigham Young, enfermo de fiebre, levantó la vista desde el carruaje y pronunció las palabras que definen un capítulo de la historia.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'La llegada al valle',
          blocks: [
            {
              type: 'paragraph',
              text: 'El primer campamento pionero llegó al Valle del Gran Lago Salado el 22 de julio de 1847. Brigham Young, enfermo de fiebre de las montañas Rocosas y viajando en el carruaje de Wilford Woodruff, no llegó hasta el 24 de julio. Su primera visión del valle fue desde Emigration Canyon, una ventana entre las montañas por donde el Great Salt Lake brillaba al sol de julio.',
            },
            {
              type: 'central_quote',
              text: 'Este es el lugar correcto. Continúa.',
              attribution: 'Brigham Young, 24 de julio de 1847, al ver el Valle del Gran Lago Salado por primera vez',
            },
            {
              type: 'paragraph',
              text: 'Las palabras "Este es el lugar" — en inglés "This is the right place" — se convirtieron en el lema fundacional del establecimiento de los santos en Utah. Lo que el valle ofrecía era desolador por cualquier estándar convencional: tierra árida, sin árboles en la mayor parte, con escasa agua visible. Pero Brigham había elegido deliberadamente un lugar que nadie más quisiera — tan lejos de los Estados Unidos civilizados que los santos pudieran construir sin interferencia. El lugar fue elegido con propósito.',
            },
            {
              type: 'paragraph',
              text: 'La organización inmediata fue característica de Brigham: en las horas que siguieron a la llegada, los santos comenzaron a trazar calles, excavar zanjas de irrigación, y plantar hortalizas. Tres días después de su llegada, Brigham Young señaló el lugar exacto donde se construiría el Templo. La visión de largo plazo coexistía con la urgencia inmediata.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las compañías de carritos de mano — 1856',
      intro: {
        romanNumeral: 'IV',
        title: 'El Mayor Fracaso del Éxodo — Willie y Martin',
        paragraphs: [
          'En 1856, Brigham Young diseñó un sistema de inmigración más barato: carritos de mano. Las compañías Willie y Martin partieron demasiado tarde y fueron atrapadas por el invierno de Wyoming. Fue la mayor tragedia del éxodo.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'El Fondo Perpetuo y los carritos de mano',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Fondo Perpetuo de Emigración, establecido en 1849, fue uno de los instrumentos más ingeniosos de Brigham Young: un fondo rotatorio que pagaba el viaje de los santos pobres de Europa a Utah, con la expectativa de que los emigrantes devolvieran el préstamo una vez establecidos. El sistema funcionó razonablemente bien durante años. Pero en 1856, Brigham decidió acelerar la inmigración con un sistema más barato: carritos de mano que los emigrantes jalaban ellos mismos.',
            },
            {
              type: 'paragraph',
              text: 'El concepto era brillante en teoría: eliminar los bueyes, los carros pesados, y el forraje, y reemplazarlos con el esfuerzo humano y cargas más ligeras. Las primeras compañías de carritos de mano de 1856 llegaron exitosamente. Pero la compañía de James Willie y la compañía de Edward Martin partieron demasiado tarde — en agosto y septiembre — y fueron alcanzadas por tormentas de invierno en Wyoming en octubre de 1856.',
            },
            {
              type: 'deep_dive',
              title: 'La tragedia de Willie y Martin — los números reales',
              paragraphs: [
                'La compañía de Willie tenía aproximadamente 500 personas cuando fue atrapada por el invierno. Murieron entre 67 y 77 de sus miembros — alrededor del 15%. La compañía de Martin tenía aproximadamente 576 personas. Murieron entre 135 y 150 — alrededor del 25%. En total, entre las dos compañías y los grupos de apoyo, murieron quizás 210 personas, en algunos de los inviernos más severos registrados en Wyoming.',
                'La respuesta de Brigham Young fue notable: en un discurso el 5 de octubre de 1856, cuando recibió la noticia de las compañías atrapadas, detuvo la conferencia y pidió voluntarios inmediatos para llevar suministros de rescate. Cientos de carros y voluntarios partieron en días. Los esfuerzos de rescate salvaron a la mayoría de los supervivientes.',
                'La pregunta de responsabilidad es legítima: ¿debería Brigham haber permitido que compañías tan numerosas partieran tan tarde en el año? Los registros muestran que advertencias habían llegado sobre las condiciones, pero también que la presión para reducir costos era real. Brigham llevó la responsabilidad del fracaso públicamente, llamándolo un error.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'Si alguna vez hice un error en mi vida, fue permitir que esas compañías salieran tan tarde. No puedo descansar al pensar en ellos. Dios perdone mi descuido.',
              name: 'Brigham Young',
              role: 'Atribuido en diarios contemporáneos, octubre 1856',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El legado del éxodo',
      intro: {
        romanNumeral: 'V',
        title: '70,000 Santos y el Valle que Construyeron',
        paragraphs: [
          'Para 1869, cuando el ferrocarril transcontinental llegó a Utah, más de 70,000 personas habían hecho el viaje. El éxodo había creado una civilización.',
        ],
      },
      topics: [
        {
          id: 't5-1',
          title: 'El Moisés de Israel moderno',
          blocks: [
            {
              type: 'timeline',
              items: [
                { label: 'Feb 1846', text: 'Comienzo del éxodo desde Nauvoo — el río Mississippi en invierno', color: 'red' },
                { label: 'Inv 1846-47', text: 'Winter Quarters — 600 muertos, DyC 136 organiza el viaje', color: 'blue' },
                { label: '24 Jul 1847', text: 'Primer grupo llega al Valle del Gran Lago Salado', color: 'gold' },
                { label: '1849', text: 'Establecimiento del Fondo Perpetuo de Emigración', color: 'green' },
                { label: 'Oct 1856', text: 'Tragedia de las compañías Willie y Martin en Wyoming', color: 'red' },
                { label: '1847-1869', text: 'Más de 70,000 santos hacen el viaje antes de la llegada del ferrocarril', color: 'green' },
              ],
            },
            {
              type: 'paragraph',
              text: 'La comparación con Moisés tiene sus límites. Brigham Young no recibió revelaciones en el monte Sinaí ni partió el Mar Rojo. Pero sí organizó el mayor movimiento voluntario de migración en la historia americana del siglo XIX, condujo a un pueblo desde la persecución a un lugar propio, y murió sin ver a todos sus santos establecidos — como Moisés murió sin entrar a Canaán. El paralelo que los santos de la época vivieron conscientemente no era retórica: era la estructura de su experiencia.',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa para ti el éxodo de los santos — incluyendo sus fracasos como las compañías Willie y Martin? ¿Cómo reconcilias la grandeza del logro con los errores reales que costaron vidas? ¿Qué te enseña sobre cómo juzgar el liderazgo en condiciones de extrema dificultad?',
            },
          ],
        },
      ],
    },
  ],
}
