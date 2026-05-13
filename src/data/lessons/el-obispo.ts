import type { Lesson } from '@/types/doctrine'

export const elObispo: Lesson = {
  id: 'el-obispo',
  moduleId: 'sacerdocio',
  title: 'El Obispo',
  subtitle: 'Pastor, juez y padre espiritual del rebaño local',
  description:
    'El Obispo preside el barrio, preside el sacerdocio aarónico, y actúa como juez en Israel. Pedro llamó a Cristo "el Obispo de vuestras almas" — y en Él encontramos el patrón de todo lo que un obispo debe ser.',
  level: 'INTERMEDIO',
  icon: '🏛️',
  duration: 50,
  order: 12,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Episcopos — El Significado Original',
      intro: {
        romanNumeral: 'I',
        heading: 'La Palabra que Cambió el Mundo',
        subheading: 'Del griego al mundo restaurado',
      },
      topics: [
        {
          id: 't1',
          title: '¿Qué significa "Obispo"?',
          blocks: [
            {
              type: 'paragraph',
              id: 'p1',
              text: 'La palabra obispo proviene del griego ἐπίσκοπος (episcopos): "el que supervisa", "el que vela desde arriba". En el Nuevo Testamento aparece en Hechos 20:28, Filipenses 1:1, 1 Timoteo 3:2 y Tito 1:7. No es un título honorífico — es una función de vigilancia activa.',
            },
            {
              type: 'highlight_verse',
              id: 'v1',
              reference: '1 Pedro 2:25',
              text: 'Porque vosotros erais como ovejas descarriadas, pero ahora habéis vuelto al Pastor y Obispo de vuestras almas.',
            },
            {
              type: 'paragraph',
              id: 'p2',
              text: 'Pedro aplica el título directamente a Cristo. Antes de hablar de cualquier obispo mortal, Pedro nos dice quién es el Obispo supremo. Todo obispo de barrio es, en su servicio, un tipo de Cristo el Buen Pastor.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El Obispo en el Nuevo Testamento',
          blocks: [
            {
              type: 'paragraph',
              id: 'p3',
              text: 'Pablo, escribiendo a Timoteo, establece los requisitos del obispo: irreprensible, esposo de una sola mujer, sobrio, prudente, decoroso, hospedador, apto para enseñar, no dado al vino, no pendenciero, no codicioso. (1 Timoteo 3:2-3). El patrón neotestamentario del obispo es inseparable de su carácter personal.',
            },
            {
              type: 'key_points',
              id: 'kp1',
              title: 'Funciones del Obispo en el NT',
              points: [
                'Supervisión pastoral del rebaño local',
                'Enseñanza y defensa de la doctrina correcta',
                'Ejemplo de vida irreprensible ante la congregación',
                'Administración de los bienes de la comunidad',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Obispo en la Restauración',
      intro: {
        romanNumeral: 'II',
        heading: 'La Revelación Restaura el Oficio',
        subheading: 'DyC 68, 84 y 107',
      },
      topics: [
        {
          id: 't3',
          title: 'El Obispo es ordenado Sumo Sacerdote',
          blocks: [
            {
              type: 'paragraph',
              id: 'p4',
              text: 'A diferencia de los oficios del Sacerdocio Aarónico (Diácono, Maestro, Presbítero) o del Melquisedec (Élder, Sumo Sacerdote, Patriarca, Apóstol), el Obispo no es un "oficio" separado en la jerarquía del sacerdocio — es un llamamiento. El hombre es primero ordenado Sumo Sacerdote del Sacerdocio de Melquisedec, y luego apartado como Obispo.',
            },
            {
              type: 'highlight_verse',
              id: 'v2',
              reference: 'DyC 68:15',
              text: 'Un obispo literal de la descendencia de Aarón tiene derecho legal a la presidencia de este sacerdocio, a las llaves de ese ministerio.',
            },
            {
              type: 'paragraph',
              id: 'p5',
              text: 'La ley establece que un descendiente literal de Aarón tiene derecho natural al episcopado. Cuando no se puede identificar dicho descendiente, cualquier Sumo Sacerdote de alta recomendación puede ser llamado y apartado para el oficio. En la práctica actual, todos los obispos de barrio son Sumos Sacerdotes apartados.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Dos clases de Obispos',
          blocks: [
            {
              type: 'compare_grid',
              id: 'cg1',
              title: 'Obispo Presidente vs. Obispo de Barrio',
              rows: [
                {
                  label: 'Obispo Presidente',
                  a: 'Preside sobre todo el sacerdocio aarónico de la Iglesia',
                  b: 'DyC 107:76-84',
                },
                {
                  label: 'Obispo de Barrio',
                  a: 'Preside el sacerdocio aarónico en su unidad local',
                  b: 'DyC 107:87-88',
                },
              ],
            },
            {
              type: 'paragraph',
              id: 'p6',
              text: 'El Obispo Presidente (Presiding Bishop) supervisa los asuntos temporales de la Iglesia a nivel global. El obispo de barrio — el que la mayoría de los miembros conocen — es el presidente del sacerdocio aarónico en su unidad, el pastor local del rebaño y el juez en Israel en su territorio.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Presidente del Sacerdocio Aarónico',
      intro: {
        romanNumeral: 'III',
        heading: 'Las Llaves del Sacerdocio Menor',
        subheading: 'El obispo preside el quórum de presbíteros',
      },
      topics: [
        {
          id: 't5',
          title: 'El obispo y el sacerdocio aarónico',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v3',
              reference: 'DyC 107:87-88',
              text: 'El obispo del barrio preside sobre el sacerdocio aarónico y preside la congregación del barrio. Es presidente del quórum de presbíteros.',
            },
            {
              type: 'paragraph',
              id: 'p7',
              text: 'Una de las funciones menos conocidas del obispo: él es el presidente del quórum de presbíteros en el barrio, aunque los consejeros del quórum llevan la administración diaria. El obispo tiene responsabilidad directa sobre el desarrollo espiritual de todos los jóvenes varones con sacerdocio aarónico en su barrio. Cada joven diácono, maestro y presbítero está bajo su cuidado pastoral directo.',
            },
            {
              type: 'key_points',
              id: 'kp2',
              title: 'Llaves que sostiene el Obispo',
              points: [
                'Llaves del sacerdocio aarónico en el barrio',
                'Llaves del ministerio del evangelio en el barrio',
                'Autoridad sobre la administración de la Santa Cena',
                'Responsabilidad por las ordenanzas del sacerdocio aarónico',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Juez en Israel',
      intro: {
        romanNumeral: 'IV',
        heading: 'La Función más Delicada',
        subheading: 'Diezmo, templo, arrepentimiento',
      },
      topics: [
        {
          id: 't6',
          title: 'Juez, no ejecutor',
          blocks: [
            {
              type: 'paragraph',
              id: 'p8',
              text: 'El Señor llamó al obispo "juez en Israel" (DyC 107:74). Esta función es la más delicada y la que más se asemeja al papel de Cristo. El obispo no es un policía espiritual — es quien determina, bajo inspiración, si un miembro cumple los requisitos para recibir ordenanzas, recomendaciones para el templo, o para ser readmitido tras el arrepentimiento.',
            },
            {
              type: 'highlight_verse',
              id: 'v4',
              reference: 'DyC 107:72-74',
              text: 'El obispo es un juez común en Israel; de ahí que su oficio se debe a los sacerdotes aarónico y a todos los que son extranjeros; en consecuencia, se le puede llamar para juzgar a sus hermanos en todos los asuntos de la iglesia.',
            },
            {
              type: 'paragraph',
              id: 'p9',
              text: 'Las entrevistas de recomendación para el templo, el ajuste de diezmos, las entrevistas de membresía — todas pasan por el obispo. No por reglamento burocrático, sino porque él está mejor posicionado que cualquier otro líder local para conocer al miembro, su familia y su situación de vida.',
            },
          ],
        },
        {
          id: 't7',
          title: 'El ministerio de la misericordia',
          blocks: [
            {
              type: 'paragraph',
              id: 'p10',
              text: 'Un obispo bien preparado sabe que su función de juez no es punitiva sino restauradora. El objetivo de toda entrevista disciplinaria no es castigar al pecador sino ayudarlo a encontrar el camino de vuelta. El obispo tiene autoridad para retener o restaurar privilegios de la Iglesia — pero el Señor espera que esta autoridad se ejerza siempre con caridad y amor genuino.',
            },
            {
              type: 'leader_quote',
              id: 'lq1',
              author: 'Élder Jeffrey R. Holland',
              source: 'Entrevista, 2015',
              text: 'El obispo es el representante local de Cristo en el barrio. Cuando un miembro va a ver al obispo con carga de pecado o duda, está viniendo a quien puede hablar en nombre del Señor. Eso requiere que el obispo sea un hombre de oración constante y de verdadera santidad personal.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'El Pastor del Rebaño',
      intro: {
        romanNumeral: 'V',
        heading: 'Conocer a Cada Oveja por Nombre',
        subheading: 'El obispo como padre espiritual',
      },
      topics: [
        {
          id: 't8',
          title: 'El obispo y la familia del barrio',
          blocks: [
            {
              type: 'paragraph',
              id: 'p11',
              text: 'En la Iglesia restaurada, el barrio es la familia espiritual. El obispo es su padre temporal. La analogía no es decorativa: el obispo administra el fondo de bienestar para ayudar a los necesitados, dirige el programa de bienestar local, coordina el trabajo de ministración, y vela que ningún miembro pase necesidad que el barrio pueda atender.',
            },
            {
              type: 'highlight_verse',
              id: 'v5',
              reference: 'DyC 84:112',
              text: 'Y el obispo, Newel K. Whitney, también debería viajar por las partes orientales y ver que se cuide a las necesidades de los pobres, y que haya obispos nombrados para atenderlos.',
            },
            {
              type: 'paragraph',
              id: 'p12',
              text: 'Desde los primeros días de la Restauración, el obispo tenía responsabilidad específica sobre los pobres y necesitados. La ley del diezmo y el ayuno están conectadas directamente con esta función: los fondos del ayuno van al fondo de bienestar del obispo para atender necesidades locales.',
            },
          ],
        },
      ],
    },
    {
      id: 's6',
      title: 'Cristo — El Obispo de Nuestras Almas',
      intro: {
        romanNumeral: 'VI',
        heading: 'El Modelo Perfecto',
        subheading: '1 Pedro 2:25 como la definición final',
      },
      topics: [
        {
          id: 't9',
          title: 'Todo obispo apunta a Cristo',
          blocks: [
            {
              type: 'paragraph',
              id: 'p13',
              text: 'Pedro usa el título "Obispo de vuestras almas" para Cristo en el mismo versículo donde lo llama "el Buen Pastor". No es accidental: el obispo y el pastor son el mismo oficio visto desde dos ángulos. Cristo supervisa cada alma; Cristo conoce a cada oveja por nombre; Cristo juzga con perfecta misericordia; Cristo administra los recursos del cielo para los necesitados. Cada obispo mortal es, en el mejor caso, una sombra imperfecta de este modelo.',
            },
            {
              type: 'doctrine_box',
              id: 'db1',
              title: 'El Patrón Cristológico del Episcopado',
              content: 'Cristo como Obispo supremo es: (1) Pastor que conoce a cada oveja (Juan 10:14), (2) Juez de toda la tierra que juzga con perfecta misericordia (Génesis 18:25, Mosíah 3:18), (3) Administrador de los bienes del cielo para los necesitados (Mateo 25:35-40), (4) Supervisor vigilante que nunca duerme ni se adormece (Salmo 121:4).',
            },
            {
              type: 'reflection',
              id: 'r1',
              prompt: '¿En qué momentos has sentido que tu obispo actuó como Cristo ante ti? ¿Cómo cambia tu relación con el liderazgo local entender que el obispo es un tipo de Cristo el Buen Pastor?',
            },
          ],
        },
      ],
    },
  ],
}
