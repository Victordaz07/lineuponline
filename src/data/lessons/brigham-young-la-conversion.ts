import type { Lesson } from '@/types/doctrine'

export const brighamYoungLaConversion: Lesson = {
  id: 'brigham-young-la-conversion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'brigham-young',
  title: 'El Carpintero',
  subtitle: 'De analfabeto a profeta en un libro',
  author: 'Fuentes: Diario de Brigham Young, Historia de la Iglesia Vol. 1, Discursos del Tabernáculo',
  description:
    'Brigham Young creció en la pobreza del noreste de Nueva York, con educación mínima y trabajo desde la infancia. En 1830 obtuvo una copia del Libro de Mormón. Tardó dos años completos en estudiarlo, orar al respecto, y tomar una decisión. "Examiné el asunto con diligencia durante dos años antes de hacer mi mente para recibir ese libro." Esa deliberación lo definió — fue la conversión de un hombre que no se movía por emoción sino por convicción cuidadosamente construida.',
  level: 'BÁSICO',
  icon: '🦁',
  duration: 30,
  order: 8410,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: null,
  nextLessonId: 'brigham-young-nauvoo',
  studySections: [
    {
      id: 's1',
      title: 'Los años de pobreza — Vermont y Nueva York',
      intro: {
        romanNumeral: 'I',
        title: 'El Niño que Casi No Fue a la Escuela',
        paragraphs: [
          'Para entender a Brigham Young el profeta, hay que empezar con Brigham Young el niño pobre — porque su origen define todo lo que vino después.',
        ],
      },
      topics: [
        {
          id: 't1-1',
          title: 'El origen que nadie elegiría',
          blocks: [
            {
              type: 'paragraph',
              text: 'Brigham Young nació el 1 de junio de 1801 en Whitingham, Vermont, el noveno de once hijos de John Young y Abigail Howe. La familia era pobre incluso para los estándares de la frontera americana — campesinos que se movían de una parcela a otra en el noreste de los Estados Unidos, siempre buscando tierra más fértil o trabajo más abundante. Cuando Brigham tenía tres años, la familia se mudó al estado de Nueva York. Cuando tenía catorce, su madre Abigail murió de tuberculosis.',
            },
            {
              type: 'paragraph',
              text: 'La educación formal de Brigham fue mínima. En sus propias palabras tardías, admitió que en su infancia asistió a la escuela solo once días. Lo que aprendió de leer y escribir, lo aprendió trabajando con su padre y sus hermanos. Se convirtió en carpintero, pintor de casas, y artesano — habilidades prácticas que siempre valoró más que el conocimiento abstracto. Cuando dijo más tarde "Si quieres saber lo que el Señor quiere, encuentra lo que necesita hacerse y hazlo," era la filosofía de un hombre que había aprendido todo lo que sabía con sus manos.',
            },
            {
              type: 'doctrine_box',
              title: 'Lo que la pobreza enseñó a Brigham',
              body: 'La infancia de Brigham Young en la pobreza forjó características que definirían su liderazgo: pragmatismo radical, desconfianza de la teoría sin práctica, habilidad para organizar trabajo físico, y una capacidad de resistencia que viene solo de haber vivido sin comodines. Cuando tuvo que organizar a 70,000 personas para cruzar mil millas de desierto, no estaba siguiendo un manual — estaba aplicando décadas de resolución práctica de problemas.',
            },
            {
              type: 'leader_quote',
              quote: 'Nunca entré a una escuela cuando era niño, excepto once días en toda mi vida. Todo lo que sé de lectura y escritura lo aprendí por mi cuenta después de que era un hombre. No tengo ningún conocimiento académico excepto el que el Señor me ha dado.',
              name: 'Brigham Young',
              role: 'Diario de Discursos, Vol. 5',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Libro de Mormón — 1830',
      intro: {
        romanNumeral: 'II',
        title: 'Samuel Smith Dejó un Libro — Brigham no lo Abrió de Inmediato',
        paragraphs: [
          'En 1830, un hermano de Joseph Smith pasó por la zona donde vivía Brigham Young. Dejó una copia del Libro de Mormón. Lo que ocurrió después tomó dos años.',
        ],
      },
      topics: [
        {
          id: 't2-1',
          title: 'El encuentro con el Libro de Mormón',
          blocks: [
            {
              type: 'paragraph',
              text: 'Samuel Harrison Smith, hermano de Joseph Smith, fue el primer misionero mormón formal. En el verano de 1830 recorrió los condados del noreste de Nueva York vendiendo y dejando copias del Libro de Mormón recién publicado. Brigham Young obtuvo uno de esos libros — los registros históricos no son completamente claros sobre si fue directamente de Samuel o de un contacto intermedio. Lo que sí es claro es lo que Brigham hizo con el libro: lo estudió cuidadosamente durante dos años.',
            },
            {
              type: 'paragraph',
              text: 'Para 1830, Brigham Young tenía 29 años y era un carpintero y artesano independiente que vivía en Port Byron, condado de Cayuga, Nueva York. Era metodista de alguna afiliación informal — como muchos en la región, practicaba alguna forma de protestantismo sin gran entusiasmo institucional. Cuando llegó el Libro de Mormón, no lo rechazó de inmediato ni lo aceptó de inmediato. Lo examinó con la misma mentalidad práctica que aplicaba a cualquier cosa nueva.',
            },
            {
              type: 'leader_quote',
              quote: 'Examiné el asunto con diligencia durante dos años antes de hacer mi mente para recibir ese libro. Las personas se someten a sus sentimientos y prejuicios, o se someten a sus familias y amigos, muchas de ellas sin ninguna investigación real. Yo no podía hacer eso.',
              name: 'Brigham Young',
              role: 'Diario de Discursos, Vol. 3, 1855',
            },
            {
              type: 'paragraph',
              text: 'Los dos años de estudio de Brigham entre 1830 y 1832 incluyeron conversaciones con miembros de la Iglesia recién convertidos de la región, lectura del libro mismo, y lo que él describió como oración seria. No había en esa época los materiales de investigación histórica que los críticos modernos tienen disponibles — la pregunta de Brigham era más simple y más fundamental: ¿es este libro verdadero? Y respondió a esa pregunta con el único método que conocía: trabajo duro y tiempo.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La conversión — 1832',
      intro: {
        romanNumeral: 'III',
        title: 'El Bautismo que Tardó Dos Años en Llegar',
        paragraphs: [
          'Cuando Brigham Young finalmente decidió bautizarse, lo hizo como hacía todo: con convicción total y sin mirar atrás.',
        ],
      },
      topics: [
        {
          id: 't3-1',
          title: 'Abril 1832 — Un carpintero se bautiza',
          blocks: [
            {
              type: 'paragraph',
              text: 'Brigham Young fue bautizado el 14 de abril de 1832 en un arroyo cercano a su hogar en Mendon, Nueva York. Tenía 30 años. Era un hombre hecho — no un joven impresionable. Su esposa Miriam Works lo había precedido en la conversión, aunque estaba gravemente enferma de tuberculosis. Su hermano Phineas Young se había convertido antes que él. Brigham fue el último de su familia inmediata en dar el paso.',
            },
            {
              type: 'paragraph',
              text: 'La conversión de Brigham fue seguida inmediatamente de lo que los santos llamaban el don de lenguas. En su primer encuentro con un grupo de Santos, Brigham habló en lenguas — una experiencia que él describió como completamente inesperada y que fue confirmada por los presentes como auténtica. Para un hombre que valoraba la práctica sobre la teoría, este evento sobrenatural temprano fue una confirmación del tipo que podía entender: algo que ocurrió, que no había buscado, y que fue corroborado por otros.',
            },
            {
              type: 'highlight_verse',
              reference: 'Moroni 10:4-5',
              text: 'Y cuando recibáis estas cosas, quisiera exhortaros a que preguntéis a Dios, el Eterno Padre, en el nombre de Cristo, si no son verdaderas estas cosas; y si preguntáis con sincero corazón, con verdadera intención, teniendo fe en Cristo, él os manifestará la verdad de ellas por el poder del Espíritu Santo. Y por el poder del Espíritu Santo podréis conocer la verdad de todas las cosas.',
            },
            {
              type: 'paragraph',
              text: 'Miriam Works, la primera esposa de Brigham, murió de tuberculosis en septiembre de 1832, apenas cinco meses después del bautismo de su esposo. Dejó a dos hijas pequeñas. La muerte de Miriam fue el primer gran dolor de Brigham como miembro de la Iglesia — y puso a prueba inmediatamente la fe que acababa de construir con tanto cuidado. En lugar de alejarlo, el dolor parece haber profundizado su compromiso. Brigham se volcó en la obra de la Iglesia con energía total.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El primer encuentro con Joseph Smith',
      intro: {
        romanNumeral: 'IV',
        title: '1832 — El Carpintero Conoce al Profeta',
        paragraphs: [
          'Pocas semanas después de su bautismo, Brigham Young viajó a ver a Joseph Smith en persona. Lo que encontró no fue lo que esperaba.',
        ],
      },
      topics: [
        {
          id: 't4-1',
          title: 'Un profeta trabajando en un cercado',
          blocks: [
            {
              type: 'paragraph',
              text: 'Brigham Young viajó a Kirtland, Ohio, en el otoño de 1832 para conocer al profeta Joseph Smith. Lo que encontró al llegar fue a Joseph Smith en un campo, construyendo un cercado junto a sus hermanos. No había ninguna procesión, ninguna solemnidad, ninguna puesta en escena de autoridad profética. Brigham se unió a ellos en el trabajo. Esa tarde, Joseph invitó al grupo a orar juntos, y en esa oración habló en lenguas. Brigham, quien había tenido su propia experiencia de lenguas semanas antes, quedó impresionado.',
            },
            {
              type: 'leader_quote',
              quote: 'Cuando vi a Joseph Smith por primera vez, estaba en un campo construyendo un cercado con sus hermanos. Tuve mi entrevista con él — no como con un santo con halo en la cabeza, sino con un hombre entre hombres. Y supe que era el hombre de Dios.',
              name: 'Brigham Young',
              role: 'Diario de Discursos, Vol. 9',
            },
            {
              type: 'paragraph',
              text: 'La descripción de Brigham de Joseph Smith "sin halo" es reveladora. Para Brigham, la autenticidad de Joseph no dependía de que pareciera sobrenatural — sino de que fuera genuino. El carpintero pragmático que había tardado dos años en convertirse no buscaba misticismo: buscaba verdad. Y en Joseph Smith encontró a alguien que le parecía genuino de la misma manera práctica en que Brigham evaluaba todo.',
            },
            {
              type: 'compare_grid',
              title: 'Brigham Young antes y después de su conversión',
              left: {
                label: 'Antes de la conversión (1830)',
                points: [
                  'Carpintero y artesano con educación mínima',
                  'Protestante informal sin convicción profunda',
                  'Soltero con esposa enferma, vida incierta',
                  'Sin posición, sin red, sin perspectiva amplia',
                  'Pragmático, escéptico, lento para decidir',
                ],
              },
              right: {
                label: 'Después de la conversión (1834)',
                points: [
                  'Misionero activo en varias regiones del este',
                  'Uno de los líderes más energéticos de la Iglesia en crecimiento',
                  'Viudo con dos hijas, dedicado totalmente a la obra',
                  'Amigo íntimo de Joseph Smith y futuro apóstol',
                  'El mismo pragmatismo, ahora al servicio de la visión',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cuánto tiempo tomaste tú — o cuánto tiempo estás tomando — para construir una convicción espiritual que sea verdaderamente tuya? La conversión de Brigham tomó dos años de estudio deliberado. ¿Hay algo en la fe que estás construyendo que merece ese tipo de inversión de tiempo y atención?',
            },
          ],
        },
      ],
    },
  ],
}
