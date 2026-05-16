import type { Lesson } from '@/types/doctrine'

export const moisesLaRevelacion: Lesson = {
  id: 'moises-la-revelacion',
  moduleId: 'personajes-escrituras',
  title: 'Moisés 1 — Lo que la Biblia no Tiene',
  subtitle: 'La revelación restaurada que precede al Génesis',
  description: 'La Perla de Gran Precio recupera un capítulo que la Biblia perdió: el encuentro de Moisés con Dios cara a cara, la visión de toda la creación, el intento de Satanás de engañarlo después, y la declaración de identidad que lo hizo invulnerable. ¿Por qué necesitaba la Restauración recuperar exactamente este texto?',
  level: 'AVANZADO',
  icon: '✨',
  duration: 35,
  order: 3511,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'moises',
  studySections: [
    {
      id: 's1',
      title: 'Lo que Moisés vio antes del Génesis',
      intro: {
        romanNumeral: 'I',
        title: 'La Visión que Antecede a la Creación',
        paragraphs: [
          'Moisés 1 no es un apéndice de la Biblia — es la revelación que debía precederla. Fue restaurada a Joseph Smith en 1830.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El encuentro cara a cara que precede a todo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moisés 1:1-2',
              text: 'Las palabras de Dios que habló a Moisés en el tiempo en que Moisés fue llevado al monte de altísima excelencia, y vio a Dios cara a cara, y habló con él, y la gloria de Dios fue sobre Moisés; por tanto, Moisés pudo soportar su presencia.',
            },
            {
              type: 'paragraph',
              text: 'El primer capítulo de Moisés en la Perla de Gran Precio no aparece en ninguna Biblia. Fue revelado a Joseph Smith en junio de 1830, apenas dos meses después de la organización de la Iglesia, como parte de su revisión inspirada de las Escrituras. En él, Dios le muestra a Moisés la totalidad de Sus obras — "los mundos sin número" (Moisés 1:33) — y le declara su identidad divina antes de revelarle la narrativa de la Creación que luego se convierte en Génesis. Este capítulo es el prefacio que el Génesis siempre necesitó.',
            },
            {
              type: 'doctrine_box',
              title: '¿Qué le dijo Dios a Moisés primero?',
              body: '"He aquí, yo soy el Señor Dios Todopoderoso, y Sin Fin es mi nombre, pues soy sin principio de días ni fin de años... y mira, tú eres mi hijo" (Moisés 1:3-4). Antes de darle la ley, antes de encomendarle la misión, antes de revelarle la creación — Dios le dijo a Moisés quién era él. La identidad precede a la misión en la teología restaurada.',
            },
            {
              type: 'paragraph',
              text: 'La visión que Dios le muestra es de escala cósmica: "Moisés echó sus ojos y contempló el mundo y los extremos de él y todos los hijos de los hombres que hubo y que hay; y no hubo fin a sus discernimientos" (Moisés 1:8). Esta perspectiva no tiene paralelo en el Pentateuco tradicional. Sin embargo, cuando la visión terminó, Moisés quedó exhausto, tendido en tierra, "como un hombre muerto" por varias horas (Moisés 1:9-10).',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El encuentro con Satanás post-visión',
      intro: {
        romanNumeral: 'II',
        title: 'La Contraoferta Inmediata',
        paragraphs: [
          'Justo cuando terminó la visión de Dios y Moisés estaba en su punto más débil, apareció Satanás.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La tentación que vino en el momento de mayor vulnerabilidad',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moisés 1:12',
              text: 'Y aconteció que cuando Moisés hubo dicho estas palabras, he aquí que Satanás vino tentándole, y diciendo: Moisés, hijo del hombre, adórame.',
            },
            {
              type: 'paragraph',
              text: 'El contraste con el lenguaje de Dios es deliberado y dramático. Dios había dicho: "tú eres mi hijo." Satanás dice: "hijo del hombre." Dios reveló gloria y eternidad; Satanás exige adoración inmediata. Dios habló en su propia persona; Satanás dice (Moisés 1:13) que Moisés debería adorarlo porque él también es "un hijo de Dios." El engaño de Satanás es siempre una imitación degradada de la verdad — usa el mismo vocabulario pero invierte el significado.',
            },
            {
              type: 'deep_dive',
              title: 'Por qué Satanás atacó inmediatamente después',
              paragraphs: [
                'La secuencia en Moisés 1 sigue el mismo patrón que las tentaciones de Cristo en Mateo 4: revelación divina → agotamiento → ataque satánico. Jesús fue tentado inmediatamente después de su bautismo y la voz del Padre diciendo "este es mi Hijo amado." Moisés fue tentado inmediatamente después de que Dios le dijo "tú eres mi hijo." El patrón es constante: Satanás ataca la identidad justo cuando Dios la ha afirmado.',
                'Esto tiene implicaciones prácticas: los momentos después de una experiencia espiritual intensa son momentos de vulnerabilidad particular. La historia de Moisés prepara al lector a no sorprenderse cuando, después de un momento cumbre espiritual, viene una prueba de identidad o de fe.',
              ],
            },
            {
              type: 'compare_grid',
              title: 'El Lenguaje de Dios vs. el Lenguaje de Satanás en Moisés 1',
              left: {
                title: 'Dios le dice a Moisés',
                items: [
                  '"Tú eres mi hijo" (v. 4)',
                  '"No hay Dios fuera de mí" (v. 6)',
                  '"Mira, te mostraré las obras de mis manos" (v. 4)',
                  'Habla con luz y gloria',
                ],
              },
              right: {
                title: 'Satanás le dice a Moisés',
                items: [
                  '"Hijo del hombre" (v. 12)',
                  '"Yo también soy hijo de Dios" (v. 19)',
                  '"Adórame" (v. 12)',
                  'No tiene gloria; Moisés lo detecta por contraste (v. 15)',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La declaración de identidad',
      intro: {
        romanNumeral: 'III',
        title: 'La Respuesta más Poderosa de la Escritura',
        paragraphs: [
          '"¿Quién eres tú? Porque, he aquí, yo soy un hijo de Dios." — Moisés 1:13',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Identidad como defensa espiritual',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Moisés 1:13',
              text: '¿Quién eres tú? Porque, he aquí, yo soy un hijo de Dios, en semejanza de su Unigénito; ¿y dónde está tu gloria para que yo deba adorarte? Pues, he aquí, no puedo ver tu gloria.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Moisés no es un argumento teológico elaborado ni una demostración de poder. Es una pregunta de identidad seguida de una declaración de identidad. Primero: "¿Quién eres tú?" — poniendo en duda la autoridad de Satanás. Segundo: "Yo soy un hijo de Dios" — afirmando su propia identidad divina. Tercero: "¿Dónde está tu gloria?" — reconociendo que el brillo de Satanás no es nada comparado con la gloria que acaba de ver. La identidad claramente conocida hace innecesario el debate.',
            },
            {
              type: 'paragraph',
              text: 'Satanás no se retiró fácilmente. Moisés 1:17-22 describe cómo "temblaba Moisés" y le ordenó cuatro veces que se fuera — "En el nombre del Unigénito" (v. 20) y "retrocede, Satanás" (v. 16). La resistencia fue progresiva y costosa, no instantánea. Esto también es doctrinalmente honesto: conocer tu identidad no elimina el esfuerzo espiritual ni el temor momentáneo.',
            },
            {
              type: 'doctrine_box',
              title: 'La Lección Central de Moisés 1',
              body: 'El capítulo entero puede resumirse en esta ecuación: Dios establece identidad → Satanás ataca identidad → Moisés defiende identidad → Dios responde con visión expandida. La Restauración necesitaba restaurar este texto porque la teología moderna había perdido precisamente esta comprensión: que somos literalmente hijos de Dios, que esa identidad es nuestra mayor fortaleza, y que el ataque de Satanás siempre apunta ahí primero.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Por qué este capítulo se perdió',
      intro: {
        romanNumeral: 'IV',
        title: 'La Apostasía y la Restauración del Texto',
        paragraphs: [
          'El libro de Moisés fue uno de los primeros textos de la Restauración. Su recuperación no fue accidental.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Por qué la Restauración necesitaba comenzar aquí',
          blocks: [
            {
              type: 'paragraph',
              text: 'La Traducción Inspirada de la Biblia — el proyecto de revisión escritural revelado a Joseph Smith comenzando en 1830 — empezó precisamente con Génesis. Al revisar el primer capítulo del Génesis, la revelación no simplemente corrigió el texto existente sino que añadió un capítulo entero antes: Moisés 1. Esto no es coincidencia teológica. La Restauración comenzó por recuperar la comprensión de quiénes somos ante Dios — literalmente Sus hijos — una verdad que el Génesis tradicional no articulaba con la misma claridad.',
            },
            {
              type: 'key_points',
              title: 'Por qué este capítulo fue el punto de inicio de la Restauración escritural',
              points: [
                'Establece la naturaleza de Dios: personal, glorioso, eterno — no una abstracción',
                'Establece la identidad del hombre: hijo de Dios en sentido literal, no metafórico',
                'Revela la cosmología restaurada: mundos sin número, creaciones múltiples',
                'Anticipa la Gran Apostasía: Satanás opera engañando sobre identidad divina',
                'Introduce a Cristo como "el Unigénito" — el primer nombre que usa Dios en la revelación',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El libro de Moisés es uno de los dones más preciosos que la Restauración le ha dado al mundo. En un solo capítulo, nos dice quiénes somos, quién es Dios, y quién es el adversario — tres cosas que la filosofía del mundo ha confundido por siglos.',
              name: 'Elder Bruce R. McConkie',
              role: 'Quórum de los Doce Apóstoles',
            },
            {
              type: 'reflection',
              prompt: '¿De qué manera conocer tu identidad como hijo o hija de Dios — en el sentido literal que enseña Moisés 1 — cambiaría tu respuesta ante las presiones, tentaciones o dudas que enfrentas actualmente?',
            },
          ],
        },
      ],
    },
  ],
}
