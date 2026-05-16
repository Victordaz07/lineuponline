import type { Lesson } from '@/types/doctrine'

export const elMaestro: Lesson = {
  id: 'el-maestro',
  moduleId: 'sacerdocio',
  title: 'El Maestro',
  subtitle: 'Preparar el camino — velar sobre la Iglesia',
  description:
    'El Maestro es el segundo oficio del Sacerdocio Aarónico. Prepara la mesa de la Santa Cena, ministeriza a los miembros y vela activamente que no haya contención en la Iglesia.',
  level: 'BÁSICO',
  icon: '🛡️',
  duration: 35,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Oficio del Maestro',
      intro: {
        romanNumeral: 'I',
        title: 'El segundo oficio — velar y preparar',
        paragraphs: [
          'El Maestro no solo sirve — vela activamente por el bienestar espiritual y temporal de los miembros.',
        ],
      },
      topics: [
        {
          id: 'oficio-maestro',
          title: 'El segundo oficio — velar y preparar',
          subtitle: 'El Maestro no solo sirve — vela activamente por el bienestar espiritual y temporal de los miembros.',
          blocks: [
            {
              type: 'paragraph',
              text: 'A los 14 años, un joven digno puede ser ordenado al oficio de Maestro — el segundo oficio del Sacerdocio Aarónico. La palabra «maestro» en este contexto no significa «profesor». Viene del concepto hebreo de supervisor o vigilante: alguien que cuida activamente del rebaño y vela porque todo esté en orden.',
            },
            {
              type: 'highlight_verse',
              text: '«El deber de los maestros es velar sobre la iglesia siempre, y estar con ella y fortalecerla; y ver que no haya iniquidad en la iglesia, ni dureza entre sí, ni mentiras, ni calumnias, ni conducta maliciosa; y recordar a los miembros de la iglesia que cumplan con sus deberes; y que el maestro mismo sea fiel ante Dios en todo momento.»',
              reference: 'Doctrina y Convenios 20:53–55',
            },
            {
              type: 'doctrine_box',
              title: 'Los deberes exclusivos del Maestro (que el Diácono no tiene)',
              body: '(1) Preparar la mesa sacramental — llegar antes de la reunión, preparar los emblemas con cuidado y reverencia. (2) Velar sobre la Iglesia — vigilancia activa del bienestar espiritual y temporal de los miembros. (3) Señalar la iniquidad con amor — si hay contención o pecado entre los miembros, el Maestro tiene responsabilidad de corregir con amor, bajo dirección del obispo. (4) Ministerizar — visitar hogares asignados regularmente.',
            },
            {
              type: 'key_points',
              title: 'Lo que hace único al oficio de Maestro',
              points: [
                'D&C 20:58 establece que un Maestro "no tiene poder de bautizar ni administrar la Santa Cena" — su llamada es de preparación y vigilancia, no de administración de ordenanzas.',
                'El Maestro "fiel ante Dios en todo momento" (D&C 20:55) — la fidelidad constante es el estándar, no solo en días de reunión.',
                'En la Iglesia primitiva (Nuevo Testamento), los maestros eran los supervisores de las congregaciones locales, análogos al maestro del Sacerdocio Aarónico.',
                'El cuórum de Maestros fue reorganizado en la Restauración y tiene continuidad directa con los oficios bíblicos.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El Maestro tiene una responsabilidad que va más allá de los domingos. Su llamado es velar — y eso significa conocer a los miembros de su cuórum, saber cuándo alguien está ausente, cuándo alguien sufre, cuándo alguien necesita una visita.',
              name: 'Élder Jeffrey R. Holland',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Preparar la Mesa del Señor',
      intro: {
        romanNumeral: 'II',
        title: 'La mesa sacramental — preparación antes del domingo',
        paragraphs: [
          'Nadie ve al Maestro preparar la mesa. Pero el Señor sí lo ve. Y la congregación lo siente.',
        ],
      },
      topics: [
        {
          id: 'preparar-mesa',
          title: 'La mesa sacramental — preparación antes del domingo',
          subtitle: 'Nadie ve al Maestro preparar la mesa. Pero el Señor sí lo ve. Y la congregación lo siente.',
          blocks: [
            {
              type: 'paragraph',
              text: 'Una de las responsabilidades más sagradas del Maestro es preparar la mesa sacramental antes de que comience la reunión. Esto significa llegar antes, preparar con cuidado los emblemas (pan partido, bandejas de agua), cubrir la mesa con el mantel blanco y asegurarse de que todo esté listo para la ordenanza.',
            },
            {
              type: 'steps',
              title: 'Cómo preparar la mesa sacramental',
              steps: [
                'Llegar antes de la reunión — idealmente 20-30 minutos antes de que comience. La preparación de la mesa sacramental no puede hacerse con prisa.',
                'Lavarse las manos con jabón — el Manual General §18.9.4 lo establece explícitamente para quienes preparan, bendicen o reparten.',
                'Preparar el pan — partir el pan en porciones apropiadas y colocarlas en las bandejas. El pan no debe estar rancio, sucio ni descuidado.',
                'Preparar el agua — llenar las bandejas de agua con copas limpias y suficientes para toda la congregación.',
                'Cubrir la mesa — colocar el mantel blanco (limpio y planchado) sobre la mesa. El mantel blanco simboliza pureza.',
                'Verificar que todo esté listo — bandejas en lugar, micrófonos funcionando, suficientes portadores disponibles.',
              ],
            },
            {
              type: 'highlight_verse',
              text: '«Los manteles de la Santa Cena deben ser blancos, y estar limpios y planchados.»',
              reference: 'Manual General §18.9.3',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué la preparación importa tanto?',
              body: 'El Señor estableció que las ordenanzas deben hacerse "de la manera que el Señor ha ordenado" (D&C 20:75). La preparación cuidadosa de la mesa no es burocracia — es la manifestación exterior de la reverencia interior. Una mesa descuidada dice a la congregación: "esta ordenanza no me importa tanto." Una mesa impecable dice: "lo que va a ocurrir aquí es sagrado."',
            },
            {
              type: 'deep_dive',
              badge: 'Doctrina',
              title: 'El Maestro como precursor',
              paragraphs: [
                'Juan el Bautista fue el gran preparador — preparó el camino del Señor antes de su ministerio. El oficio del Maestro lleva esa misma vocación: preparar el camino para que la ordenanza pueda realizarse.',
                'En el templo de Salomón, los levitas preparaban los utensilios sagrados, limpiaban los altares y organizaban todo antes de que comenzara la adoración. Era un servicio invisible pero esencial.',
                'El Maestro que prepara bien la mesa está haciendo en la Iglesia lo que los levitas hacían en el templo — preparando un espacio sagrado para que el Señor pueda morar entre su pueblo.',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Alguna vez has llegado tarde o con prisa a la reunión sacramental? ¿Cómo cambia tu actitud saber que hubo un Maestro que llegó temprano y preparó esa mesa para que tú pudieras renovar tus convenios?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Velar sobre la Iglesia',
      intro: {
        romanNumeral: 'III',
        title: 'Vigilancia activa — el don de ver a los demás',
        paragraphs: [
          'El Maestro no espera que vengan a él — va. Esa es la diferencia entre una iglesia que cuida y una que solo cuenta.',
        ],
      },
      topics: [
        {
          id: 'velar-iglesia',
          title: 'Vigilancia activa — el don de ver a los demás',
          subtitle: 'El Maestro no espera que vengan a él — va. Esa es la diferencia entre una iglesia que cuida y una que solo cuenta.',
          blocks: [
            {
              type: 'paragraph',
              text: 'D&C 20:53 es explícito: el deber del Maestro es «velar sobre la iglesia siempre» — no a veces, no cuando conviene, sino siempre. Esto implica conocer a los miembros asignados, saber cómo están, y actuar cuando alguien necesita ayuda o cuando hay contención.',
            },
            {
              type: 'highlight_verse',
              text: '«El Espíritu Santo no habrá lugar en vosotros si estáis en contención, y si así fuere, no tenéis mi poder; mas si no estáis en contención, entonces soy vuestro.»',
              reference: '3 Nefi 11:29',
            },
            {
              type: 'key_points',
              title: 'Cómo se vela sobre la Iglesia en la práctica',
              points: [
                'Conocer a cada miembro del cuórum y de las familias asignadas por nombre — no solo como asistentes o estadísticas.',
                'Notar cuando alguien falta — y actuar. Una llamada, un mensaje, una visita. La persona ausente necesita saber que fue notada.',
                'Señalar la contención con amor — no ignorarla. Si hay conflicto entre miembros, el Maestro tiene responsabilidad de reportarlo al obispo y ministrar con amor.',
                'Ser un mensajero de paz en el barrio — en conversaciones, en redes sociales, en cualquier lugar donde el nombre de la Iglesia esté en juego.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El ministerio verdadero no se mide en visitas realizadas. Se mide en vidas tocadas, en corazones aliviados, en personas que saben que alguien en el barrio las conoce y las ama.',
              name: 'Presidente Russell M. Nelson · «El ministerio verdadero»',
            },
            {
              type: 'reflection',
              prompt: '¿Hay alguien en tu barrio que no ha asistido en semanas o meses? ¿Sabes por qué? ¿Qué puedes hacer esta semana como maestro ministrante — o simplemente como hermano — para que esa persona sepa que fue notada?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Maestro Fiel',
      intro: {
        romanNumeral: 'IV',
        title: '«Fiel ante Dios en todo momento» — el estándar del Maestro',
        paragraphs: [
          'El oficio del Maestro no es un cargo de paso. Es un llamamiento a la vigilancia continua.',
        ],
      },
      topics: [
        {
          id: 'maestro-fiel',
          title: '«Fiel ante Dios en todo momento» — el estándar del Maestro',
          subtitle: 'El oficio del Maestro no es un cargo de paso. Es un llamamiento a la vigilancia continua.',
          blocks: [
            {
              type: 'paragraph',
              text: 'D&C 20:55 cierra los deberes del Maestro con una frase que resume todo: «y que el maestro mismo sea fiel ante Dios en todo momento.» No solo en los domingos. No solo cuando alguien mira. Siempre. Este es el estándar del Maestro fiel.',
            },
            {
              type: 'compare_grid',
              title: 'El Maestro pasivo vs. el Maestro fiel',
              left: {
                title: 'Maestro pasivo',
                items: [
                  'Prepara la mesa si se acuerda',
                  'Visita cuando es conveniente',
                  'Ignora la contención',
                  'Solo piensa en su cuórum en el edificio',
                  'Se ordena al Sacerdocio de Melquisedec y olvida este oficio',
                ],
              },
              right: {
                title: 'Maestro fiel',
                items: [
                  'Llega temprano, prepara con cuidado',
                  'Conoce y busca a los que faltan',
                  'Aborda la contención con amor y discreción',
                  'Cuida a sus asignados durante toda la semana',
                  'Honra el oficio de Maestro toda la vida',
                ],
              },
            },
            {
              type: 'key_points',
              points: [
                'El Maestro que es fiel en la preparación de la mesa aprende que el servicio invisible es el más sagrado.',
                'El Maestro que cuida activamente a sus miembros aprende que el amor genuino exige conocimiento genuino.',
                'El Maestro que vela contra la contención aprende que la paz no es la ausencia de conflicto — es el resultado del trabajo activo.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El oficio del Maestro es uno de los más hermosos del sacerdocio. El que lo vive plenamente es ya, en espíritu, un ministro del Señor Jesucristo.',
              name: 'Élder Jeffrey R. Holland',
            },
            {
              type: 'reflection',
              prompt: '¿Cómo vives el oficio de Maestro en tu vida adulta, ya sea como élder o sumo sacerdote? ¿Hay hábitos de vigilancia, preparación y cuidado que desarrollaste como Maestro joven y que siguen marcando tu ministerio hoy?',
            },
          ],
        },
      ],
    },
  ],
}
