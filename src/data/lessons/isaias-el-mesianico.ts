import type { Lesson } from '@/types/doctrine'

export const isaiasElMesianico: Lesson = {
  id: 'isaias-el-mesianico',
  moduleId: 'personajes-escrituras',
  title: 'Isaías — El Profeta Mesiánico',
  subtitle: 'Los Cánticos del Siervo e Isaías 53 — escritos 700 años antes de Cristo',
  description: 'Isaías 53 es llamado "el capítulo prohibido" por eruditos judíos porque su descripción del Siervo Sufriente coincide punto por punto con la vida de Jesús. Los Rollos del Mar Muerto confirman que este texto existía sin cambios desde el siglo II a.C.',
  level: 'AVANZADO',
  icon: '🌟',
  duration: 40,
  order: 4011,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaias',
  studySections: [
    {
      id: 's1',
      title: 'Los cuatro Cánticos del Siervo',
      intro: {
        romanNumeral: 'I',
        title: 'El Siervo de Jehová',
        paragraphs: [
          'Cuatro poemas en Isaías describen a una figura misteriosa — el Siervo — cuya misión redefine la historia.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Estructura y propósito de los cánticos',
          blocks: [
            {
              type: 'paragraph',
              text: 'El erudito alemán Bernhard Duhm identificó en 1892 cuatro "Cánticos del Siervo" en Isaías: 42:1-9, 49:1-13, 50:4-11, y 52:13-53:12. Cada uno profundiza más en la identidad y misión del Siervo. Al principio el Siervo parece ser Israel mismo (49:3), pero las características personales y el sufrimiento vicario de Isaías 53 apuntan claramente a una figura individual que sufre en lugar de muchos.',
            },
            {
              type: 'compare_grid',
              title: 'Los cuatro cánticos en paralelo',
              left: {
                title: 'El Siervo en su misión',
                points: [
                  'Isaías 42: "Mi escogido, en quien mi alma tiene contentamiento" — el Siervo ungido',
                  'Isaías 49: Llamado desde el vientre materno — la preexistencia de su misión',
                  'Isaías 50: El Siervo no esconde su rostro del escarnio y los escupitajos',
                  'Isaías 52-53: El clímax — el Siervo sufre, muere, es sepultado y vive de nuevo',
                ],
              },
              right: {
                title: 'Cumplimiento en Cristo',
                points: [
                  'Mateo 12:18-21 cita Isaías 42 como descripción del ministerio de Jesús',
                  'Juan 17:5 — "la gloria que tuve contigo antes de la fundación del mundo"',
                  'Juan 19:1-3 — azotes, escupitajos, corona de espinas',
                  'Hechos 8:32-35 — Felipe explica Isaías 53 al eunuco etíope como profecía de Cristo',
                ],
              },
            },
            {
              type: 'doctrine_box',
              title: 'La autoridad de los Rollos del Mar Muerto',
              body: 'En 1947 se descubrió en Qumrán el Gran Rollo de Isaías, fechado aproximadamente en 125 a.C. Contiene todo el libro de Isaías, incluyendo el capítulo 53, y es sustancialmente idéntico al texto masorético del siglo X d.C. Esto demuestra que Isaías 53 existía en su forma actual más de un siglo antes del nacimiento de Cristo — refutando cualquier argumento de que fue escrito después para cuadrar con los evangelios.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Isaías 53 — el texto más notable del AT',
      intro: {
        romanNumeral: 'II',
        title: 'El Capítulo Prohibido',
        paragraphs: [
          'Tan específico es Isaías 53 que durante siglos los rabinos prohibieron su lectura pública en las sinagogas.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El texto completo en análisis',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Isaías 53:3-5',
              text: 'Despreciado y desechado entre los hombres, varón de dolores, experimentado en quebranto; y como que escondimos de él el rostro, fue menospreciado, y no lo estimamos. Ciertamente llevó él nuestras enfermedades, y sufrió nuestros dolores; y nosotros le tuvimos por azotado, por herido de Dios y abatido. Mas él herido fue por nuestras rebeliones, molido por nuestros pecados; el castigo de nuestra paz fue sobre él, y por su llaga fuimos nosotros curados.',
            },
            {
              type: 'paragraph',
              text: 'Isaías 53 es único en el Antiguo Testamento: describe sufrimiento vicario — alguien que sufre en lugar de otros, cargando su culpa. La lógica de la expiación está aquí antes de que ocurra. "Herido por nuestras rebeliones" — el hebreo meḥolal puede traducirse "traspasado", exactamente como el clavo en las manos. "Por su llaga fuimos curados" — en singular (chaburatoh), una llaga específica que tiene poder curativo.',
            },
            {
              type: 'key_points',
              title: 'Detalles de Isaías 53 con cumplimiento verificable',
              points: [
                'v.2 — "Sin forma ni hermosura" — Jesús no tenía apariencia real ni corte de pelo (contrario a la iconografía posterior)',
                'v.3 — "Despreciado y desechado" — rechazado por los líderes religiosos de su propio pueblo',
                'v.7 — "Como cordero fue llevado al matadero, y como oveja delante de sus trasquiladores, enmudeció" — Jesús no respondió a Pilato (Mateo 27:14)',
                'v.9 — "Su sepultura fue puesta con los impíos, mas con los ricos fue en su muerte" — crucificado entre ladrones, sepultado en el sepulcro de José de Arimatea',
                'v.10 — "Verá linaje, vivirá por largos días" — la Resurrección',
                'v.12 — "Derramó su vida hasta la muerte, y fue contado con los transgresores" — crucificado entre dos ladrones',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cumplimiento en Cristo — versículo por versículo',
      intro: {
        romanNumeral: 'III',
        title: 'La Profecía y su Cumplimiento',
        paragraphs: [
          'Los evangelios muestran cómo cada elemento de Isaías 53 tuvo cumplimiento literal en la Pasión.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Cómo los evangelistas usaron a Isaías 53',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Nuevo Testamento cita o alude a Isaías 53 más de veinte veces. Mateo 8:17 ("Él tomó nuestras enfermedades y cargó nuestras dolencias") lo aplica al ministerio sanador de Jesús. Juan 12:38 lo cita al explicar por qué los judíos no creyeron. Pedro en 1 Pedro 2:22-25 construye toda su teología de la expiación sobre este capítulo. Pablo en Romanos 10:16 lo usa para describir el rechazo del evangelio.',
            },
            {
              type: 'highlight_verse',
              reference: 'Mosíah 14:5 (=Isaías 53:5)',
              text: 'Mas él fue herido por nuestras transgresiones, molido por nuestras iniquidades; el castigo de nuestra paz cayó sobre él; y con sus llagas somos sanados.',
            },
            {
              type: 'paragraph',
              text: 'Abinadí en el Libro de Mormón cita todo Isaías 53 (Mosíah 14) antes de dar su testimonio de Cristo al rey Noé — y es muerto por él. El paralelismo es elocuente: Abinadí cita al Siervo Sufriente y luego se convierte él mismo en un tipo de ese siervo, muriendo por su testimonio sin retractarse, "como cordero fue llevado al matadero."',
            },
            {
              type: 'leader_quote',
              quote: 'Isaías 53 es el evangelio en miniatura. Contiene la expiación, la resurrección, la intercesión por los transgresores, y la victoria final del Siervo — todo en doce versículos escritos setecientos años antes del Calvario.',
              name: 'Jeffrey R. Holland',
              role: 'Quórum de los Doce Apóstoles',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las otras profecías mesiánicas clave',
      intro: {
        romanNumeral: 'IV',
        title: 'Cristo en Cada Capítulo',
        paragraphs: [
          'Isaías 53 no es la única profecía mesiánica — es la más detallada de una serie que abarca todo el libro.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'Un mapa de profecías mesiánicas',
          blocks: [
            {
              type: 'key_points',
              title: 'Profecías mesiánicas de Isaías con cumplimiento en Cristo',
              points: [
                'Isaías 7:14 — "La virgen concebirá y dará a luz un hijo, y llamará su nombre Emanuel" (Mateo 1:23)',
                'Isaías 9:1-2 — "El pueblo que andaba en tinieblas vio gran luz" — Galilea, inicio del ministerio (Mateo 4:15-16)',
                'Isaías 9:6 — "Príncipe de Paz" — el Mesías davídico eterno',
                'Isaías 11:1-2 — "Un vástago saldrá del tronco de Isaí" — el linaje davídico de Cristo',
                'Isaías 40:3 — "Voz que clama en el desierto: Preparad camino a Jehová" — Juan el Bautista (Mateo 3:3)',
                'Isaías 42:1 — "He aquí mi siervo, mi escogido" — citado por el Padre en el bautismo de Jesús (Mateo 3:17)',
                'Isaías 61:1-2 — Jesús lo leyó en Nazaret y dijo: "Hoy se ha cumplido esta escritura delante de vosotros"',
              ],
            },
            {
              type: 'deep_dive',
              title: '¿Por qué hay tantas profecías mesiánicas en Isaías?',
              paragraphs: [
                'Isaías vivía en una época de colapso político: el reino del Norte había caído, Judá estaba amenazado. En ese contexto de desesperanza, sus mensajes sobre un rey perfecto, un gobernante de paz eterna, un siervo que sufriría por todos, no eran solo predicciones — eran la razón para seguir creyendo.',
                'El Mesias de Isaías no es un héroe guerrero que aplasta a los asirios. Es un siervo que sufre, que es rechazado, que muere — y que por ese camino salva a muchos. Esta fue la innovación teológica más radical de Isaías: la victoria a través del sufrimiento voluntario.',
                'Por eso los discípulos de Jesús, después de la crucifixión, corrieron a Isaías para entender lo que había pasado. No fue una improvisación — fue el cumplimiento de lo que Dios había revelado siglos antes a este profeta extraordinario.',
              ],
            },
            {
              type: 'reflection',
              prompt: 'Elige uno de los versículos mesiánicos de Isaías y léelo lentamente. ¿Qué nuevo detalle sobre la vida o misión de Cristo notas que antes habías pasado por alto?',
            },
          ],
        },
      ],
    },
  ],
}
