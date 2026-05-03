import type { Lesson } from '@/types/doctrine'

export const laGranApostasia: Lesson = {
  id: 'gran-apostasia',
  moduleId: 'historia-restauracion',
  title: 'La Gran Apostasía',
  subtitle: 'Por qué la Restauración era necesaria',
  author: 'Fuentes principales: Amós 8, Hechos 3, DyC 1, James E. Talmage',
  description:
    'La apostasía general de la iglesia primitiva no fue una caída moral — fue la pérdida de la autoridad del sacerdocio y las llaves de revelación. Entender qué se perdió es entender por qué la Restauración era la única solución posible.',
  level: 'BÁSICO',
  icon: '🕯️',
  duration: 55,
  order: 2,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'primera-vision',
  nextLessonId: 'libro-de-mormon-reliquia',
  studySections: [
    {
      id: 's1',
      title: 'La Profecía de la Apostasía',
      intro: {
        romanNumeral: 'I',
        title: 'La Profecía de la Apostasía',
        paragraphs: [
          'La apostasía no tomó a Dios por sorpresa. Fue profetizada siglos antes de que ocurriera. Los apóstoles mismos la advirtieron durante sus vidas. No fue el fracaso del plan de Dios — fue la razón por la cual una Restauración, y no simplemente una reforma, era lo que el mundo necesitaba.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Lo que los Profetas Vieron Venir',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'He aquí, vienen días, dice el Señor Dios, en que enviaré hambre a la tierra: no hambre de pan, ni sed de agua, sino de oír las palabras del Señor. E irán errantes de mar a mar; desde el norte hasta el oriente discurrirán buscando la palabra del Señor, y no la encontrarán.',
              reference: 'Amós 8:11–12',
            },
            {
              type: 'paragraph',
              text: 'Amós profetizó una hambruna de un tipo específico: no de comida, sino de la palabra del Señor. No la falta de Biblias — había abundancia de Biblias. La falta de revelación viva, autoridad del sacerdocio, y la voz de Dios a través de profetas vivientes. Eso es exactamente lo que ocurrió durante los siglos de la Gran Apostasía.',
            },
            {
              type: 'highlight_verse',
              text: 'Porque el tiempo vendrá cuando no sufrirán la sana doctrina, sino que teniendo comezón de oír, se amontonarán maestros conforme a sus propias concupiscencias, y apartarán de la verdad el oído y se volverán a las fábulas.',
              reference: '2 Timoteo 4:3–4',
            },
            {
              type: 'highlight_verse',
              text: 'Arrepentíos, pues, y convertíos para que sean borrados vuestros pecados; para que vengan de la presencia del Señor tiempos de refrigerio, y él envíe a Jesucristo, que os fue antes anunciado; a quien de cierto es necesario que el cielo reciba hasta los tiempos de la restauración de todas las cosas, de que habló Dios por boca de sus santos profetas que han sido desde tiempo antiguo.',
              reference: 'Hechos 3:19–21',
            },
            {
              type: 'doctrine_box',
              title: 'Pedro predijo la Restauración, no solo la Apostasía',
              body: 'En Hechos 3, Pedro no solo describe la apostasía que vendría — describe su solución: "la restauración de todas las cosas." Esta palabra griega, apocatastasis, significa restaurar a un estado original. No una reforma del sistema existente. No un mejoramiento gradual. Una restauración — devolver lo que se había perdido completamente. Pedro sabía que eventualmente el cielo tendría que intervenir de nuevo.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Qué Se Perdió Exactamente',
      intro: {
        romanNumeral: 'II',
        title: 'Qué Se Perdió Exactamente',
        paragraphs: [
          'La apostasía no significa que los cristianos de los siglos II al XIX eran malas personas. Significa que la iglesia que Cristo estableció perdió elementos esenciales que no podían ser recuperados sin intervención divina directa. Entender qué se perdió es entender por qué las reformas de Lutero, Calvino, y otros — aunque valiosas — no eran suficientes.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Los Cuatro Elementos Perdidos',
          blocks: [
            {
              type: 'key_points',
              title: 'Lo que se perdió en la Apostasía — los cuatro elementos esenciales',
              points: [
                'La autoridad del sacerdocio: el poder de actuar en nombre de Dios, que solo puede conferirse por manos autorizadas — no por estudio, fe, o elección congregacional',
                'Las llaves de revelación continua: el derecho de recibir revelación para guiar a la Iglesia, que pertenece a apóstoles y profetas vivos',
                'Las ordenanzas completas y correctas: el bautismo, la confirmación, y las ordenanzas del templo, con su forma exacta y con su autoridad válida',
                'La doctrina pura: sin el ancla de la revelación continua, la doctrina se fue alterando a través de concilios, debates filosóficos y compromisos políticos',
              ],
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Reforma (lo que podía hacer)',
                items: [
                  'Corregir abusos morales del clero',
                  'Devolver la Biblia al pueblo en idiomas vernáculos',
                  'Reducir la corrupción institucional',
                  'Enfatizar la gracia sobre las obras de penitencia',
                ],
              },
              right: {
                title: 'Restauración (lo que requería)',
                items: [
                  'Restaurar la autoridad del sacerdocio desde el cielo',
                  'Restaurar las llaves apostólicas y proféticas',
                  'Restaurar las ordenanzas con forma y autoridad correctas',
                  'Restaurar doctrinas perdidas que ningún concilio podía recuperar',
                ],
              },
            },
            {
              type: 'deep_dive',
              badge: 'Profundizar',
              title: 'Por qué la reforma no era suficiente: el problema de la autoridad',
              paragraphs: [
                'Lutero, Calvino, Zwinglio, y los otros reformadores hicieron un bien enorme al mundo. Pero ninguno de ellos reclamó tener autoridad divina para administrar las ordenanzas del evangelio. Lutero específicamente rechazó la idea de una iglesia jerárquica con autoridad especial — su principio era que cada cristiano tenía acceso directo a Dios sin necesidad de intermediarios ordenados.',
                'El problema doctrinal es este: la Biblia misma muestra que las ordenanzas del evangelio requieren autoridad específica. Juan el Bautista fue enviado del cielo para bautizar. Los apóstoles fueron llamados, no elegidos. La imposición de manos para conferir el Espíritu Santo era hecha por los apóstoles, no por cualquier creyente. Sin esa cadena de autoridad, ¿quién tenía el derecho de bautizar?',
                'James E. Talmage, en "La Gran Apostasía" (1909), documentó extensamente cómo los mismos Padres de la Iglesia de los siglos II y III ya advertían que la revelación directa había cesado, que los dones espirituales ya no eran comunes, y que la unidad doctrinal se estaba fracturando. No fue una caída súbita — fue un declive gradual que los observadores contemporáneos reconocieron.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La apostasía no fue principalmente moral — fue institucional. Las personas buenas que amaban a Cristo siguieron existiendo durante la Gran Apostasía. Lo que no existía era la autoridad restaurada del sacerdocio, las llaves de las ordenanzas, y la revelación continua para guiar a la Iglesia como un todo. Una reforma podía mejorar la moralidad — solo una restauración podía devolver lo que se había perdido.',
              name: 'James E. Talmage',
              role: '"The Great Apostasy", 1909, cap. 1 (trad.)',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Restauración — La Única Solución',
      intro: {
        romanNumeral: 'III',
        title: 'La Restauración — La Única Solución',
        paragraphs: [
          'Entender la Apostasía hace que la Restauración sea inevitable. Si la autoridad del sacerdocio se perdió y no puede auto-generarse, la única forma de recuperarla es que regrese del cielo. Eso es exactamente lo que ocurrió: Pedro, Santiago y Juan restauraron el sacerdocio de Melquisedec. Elías, Moisés y Elías restauraron las llaves del templo. La dispensación de la plenitud de los tiempos no fue opcional — fue necesaria.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La Dispensación de la Plenitud de los Tiempos',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Para que en la dispensación del cumplimiento de los tiempos, él reúna todas las cosas en Cristo, tanto las que están en los cielos como las que están en la tierra.',
              reference: 'Efesios 1:10',
            },
            {
              type: 'highlight_verse',
              text: 'La voz del Señor es a todos los hombres, y no hay quien pueda escapar, y no hay ojo que no vea, ni oído que no oiga, ni corazón que no sea penetrado. [...] Porque he aquí que el Señor Dios ha enviado a su ángel para revelar el evangelio sempiterno.',
              reference: 'Doctrina y Convenios 1:2, 18',
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '1820',
                  text: 'Primera Visión — apertura de la dispensación; Dios y Cristo se aparecen a José Smith',
                  ref: 'JS—H 1:17',
                  color: 'gold',
                },
                {
                  label: '1829',
                  text: 'Juan el Bautista restaura el Sacerdocio Aarónico; Pedro, Santiago y Juan restauran el de Melquisedec',
                  ref: 'DyC 13; 27:12',
                  color: 'blue',
                },
                {
                  label: '1830',
                  text: 'Organización de la Iglesia — 6 de abril; el Libro de Mormón ya publicado',
                  ref: 'DyC 21',
                  color: 'gold',
                },
                {
                  label: '1836',
                  text: 'Dedicación del Templo de Kirtland; Moisés, Elías y Elías restauran las llaves del templo',
                  ref: 'DyC 110',
                  color: 'blue',
                },
                {
                  label: 'Hoy',
                  text: 'La Iglesia con autoridad y ordenanzas completas — preparando la Segunda Venida',
                  ref: 'DyC 1:30',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué diferencia hace en tu vida diaria saber que perteneces a una iglesia con autoridad restaurada del sacerdocio? ¿Cómo cambia tu relación con las ordenanzas que has recibido saber que provienen de una cadena ininterrumpida que llega hasta Cristo mismo?',
            },
          ],
        },
      ],
    },
  ],
}
