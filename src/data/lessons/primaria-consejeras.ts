import type { Lesson } from '@/types/doctrine'

export const primariaConsejeras: Lesson = {
  id: 'primaria-consejeras',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'primaria-lideres',
  title: 'Las Consejeras de la Primaria',
  subtitle: 'Presencia constante en la vida de cada niño',
  description:
    'Las consejeras de la Primaria son la extensión práctica del liderazgo de la presidenta. Cada consejera tiene a su cargo un grupo de edad y una responsabilidad pastoral real: conocer a los niños por nombre, saber quiénes necesitan atención, y crear el ambiente espiritual que hace posible que la enseñanza llegue al corazón. Esta lección define qué significa ser una consejera presente y efectiva.',
  level: 'BÁSICO',
  icon: '🤝',
  duration: 25,
  order: 9561,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'División de Responsabilidades',
      intro: {
        romanNumeral: 'I',
        title: 'La Presidenta Asigna, las Consejeras Ejecutan',
        paragraphs: [
          'Una presidencia de Primaria que funciona bien no es un grupo de tres personas haciendo las mismas cosas — es un equipo donde cada miembro tiene claridad sobre su área de responsabilidad. La primera consejera típicamente supervisa a los niños mayores; la segunda, a los menores. Esa división no es arbitraria: permite que cada consejera desarrolle conocimiento profundo de su grupo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Cómo se Divide el Trabajo',
          blocks: [
            {
              type: 'paragraph',
              text: 'En la mayoría de los barrios, la primera consejera supervisa las clases de niños mayores — generalmente las clases CTR y Valientes (8 a 11 años) — y la segunda consejera supervisa a los niños menores: Sunbeams, Rayos de Sol y grupos de edad temprana (18 meses a 7 años). Esta división refleja la diferencia de necesidades pedagógicas y pastorales entre ambos grupos: los niños mayores están en la etapa de preparación para el bautismo y el Sacerdocio de Aarón; los menores están formando los hábitos más básicos de la fe.',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades típicas de cada consejera',
              points: [
                'Primera consejera — supervisa clases de 8-11 años (CTR y Valientes); apoya la preparación para el bautismo de los niños de 8 años',
                'Primera consejera — coordina con los maestros de su grupo sobre necesidades curriculares y pastorales',
                'Segunda consejera — supervisa clases de 18 meses a 7 años (Sunbeams, Rayos de Sol y niños pequeños)',
                'Segunda consejera — tiene conciencia especial de los niños en edad preverbal y sus necesidades especiales de aprendizaje',
                'Ambas consejeras — reportan a la presidenta en cada reunión de presidencia con novedades de sus grupos',
              ],
            },
            {
              type: 'paragraph',
              text: 'Esta división no es rígida ni prescrita por el Manual General — la presidenta puede organizarla de la manera que mejor sirva a su barrio específico. Lo que sí es esencial es que la división sea clara y que cada consejera sepa exactamente qué niños están bajo su atención pastoral.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Delegación Efectiva: De la Presidenta a las Consejeras',
          blocks: [
            {
              type: 'paragraph',
              text: 'La presidenta que delega bien libera su propia energía para liderar estratégicamente. La que no delega termina agotada y sus consejeras subutilizadas. Una buena delegación incluye tres elementos: claridad sobre qué se delega (la tarea), libertad para ejecutar (confianza), y rendición de cuentas (seguimiento en la reunión de presidencia).',
            },
            {
              type: 'compare_grid',
              title: 'Consejera presente vs. consejera solo administrativa',
              rows: [
                { label: 'Conocimiento de los niños', a: 'Conoce a cada niño de su grupo por nombre, carácter y situación familiar', b: 'Conoce la lista de asistencia pero no el contexto de cada niño' },
                { label: 'Seguimiento pastoral', a: 'Contacta a familias cuando un niño ha faltado dos semanas; sabe por qué falta', b: 'Espera que la presidenta identifique ausencias y decida qué hacer' },
                { label: 'Apoyo a maestros', a: 'Visita clases, ofrece materiales, pregunta cómo están los maestros', b: 'Solo aparece en el salón de Primaria durante la reunión general' },
                { label: 'Presencia en la reunión', a: 'Sienta junto a niños que necesitan apoyo; ayuda al maestro durante la clase', b: 'Permanece en la parte trasera del salón durante toda la reunión' },
                { label: 'Comunicación con padres', a: 'Contacta proactivamente a padres de niños con necesidades o ausencias', b: 'Espera a que los padres se acerquen con preguntas' },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Ministerio a los Niños',
      intro: {
        romanNumeral: 'II',
        title: 'Cada Niño es una Persona, No un Asistente',
        paragraphs: [
          'Una consejera efectiva no administra grupos — ministra a personas. Eso requiere conocimiento individual: saber el nombre de cada niño, su situación familiar, sus alegrías, sus dificultades. Ese conocimiento no se obtiene desde la parte trasera del salón de Primaria — se obtiene estando presente, siendo accesible y mostrando interés genuino.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Conocer a Cada Niño Individualmente',
          blocks: [
            {
              type: 'paragraph',
              text: 'En la Primaria hay niños con padres que no son miembros de la Iglesia, niños que asisten solos o con un solo padre, niños con necesidades de aprendizaje diferentes, niños que atraviesan situaciones de divorcio, mudanza o pérdida en sus familias. La consejera que conoce estos contextos puede adaptar su ministerio — no para resolver todos los problemas, sino para asegurarse de que el niño sepa que es visto y valorado.',
            },
            {
              type: 'key_points',
              title: 'Lo que una consejera debe saber de cada niño en su grupo',
              points: [
                'El nombre del niño y el nombre preferido con el que responde en clase',
                'Quiénes son sus padres o tutores y si son miembros activos, inactivos o no miembros',
                'Si el niño tiene alguna necesidad especial de aprendizaje, salud o adaptación',
                'Hace cuánto tiempo asiste a la Primaria — algunos niños son nuevos y no conocen a nadie',
                'Si el niño tiene amigos en el grupo o si parece aislado — la soledad en la Primaria es una señal de alerta',
                'Si ha faltado recientemente y por qué — enfermedad, conflicto familiar, desinterés',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Puede usted, en este momento, nombrar a cada niño en el grupo de edad que supervisa y decir al menos una cosa sobre su situación familiar o personal? Si no puede, ¿cuál es el plan para obtener ese conocimiento en las próximas dos semanas?',
            },
          ],
        },
        {
          id: 't4',
          title: 'El Seguimiento Pastoral como Parte del Llamamiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando un niño falta dos semanas seguidas, no es solo un problema de asistencia — es una señal pastoral. Algo está pasando: enfermedad, conflicto familiar, pérdida de interés, cambio en la dinámica del hogar. La consejera que responde a esa señal con una llamada genuina — no una llamada de registro, sino una expresión de interés real — comunica al niño y a su familia que la Iglesia los nota y los valora.',
            },
            {
              type: 'steps',
              title: 'Proceso de seguimiento cuando un niño ha faltado',
              steps: [
                'Identificar en la reunión de presidencia los niños que llevan dos o más semanas ausentes',
                'La consejera asignada al grupo de edad del niño toma la responsabilidad de contactar a la familia',
                'El contacto es cálido y específico: "extrañamos a [nombre del niño] el domingo — ¿está todo bien?"',
                'Si la familia reporta una dificultad (enfermedad, crisis), coordinar con el obispado si se requiere apoyo adicional',
                'Registrar el seguimiento con la secretaria para que no se duplique el contacto y se mantenga el historial',
                'Si el niño regresa, darle una bienvenida visible — que sepa que fue notado y es bienvenido de vuelta',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'El impacto eterno de ministrar a un niño no siempre se mide en la asistencia de ese domingo. A veces se mide décadas después, cuando ese adulto recuerda que alguien en la Iglesia lo llamó cuando faltó y le dijo que importaba.',
              name: 'Principios del Manual General',
              role: 'Capítulo 12 — Ministerio a los Niños',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Música en la Primaria',
      intro: {
        romanNumeral: 'III',
        title: 'Doctrina Cantada, Espíritu Invitado',
        paragraphs: [
          'La música de la Primaria no es entretenimiento entre actividades — es una de las formas más poderosas de enseñanza doctrinal disponibles para los niños. Las consejeras que comprenden esto tratan el tiempo de música con la misma seriedad espiritual que el tiempo de clase.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'El Rol de la Consejera en el Programa Musical',
          blocks: [
            {
              type: 'paragraph',
              text: 'En muchos barrios, una de las consejeras coordina directamente con el director o directora de música de la Primaria. Esta coordinación incluye asegurarse de que las canciones seleccionadas para cada domingo conecten con el tema de Ven, Sígueme del mes, que los ensayos de la Presentación Anual estén avanzando según el cronograma, y que el ambiente durante el tiempo de música sea espiritual y no simplemente ruidoso.',
            },
            {
              type: 'doctrine_box',
              title: 'La música como vehículo doctrinal',
              body: 'Doctrina y Convenios 25:12 registra la voz del Señor diciendo que "el canto de los justos es una oración para mí." Los himnos de la Primaria — "La Fe", "Soy Hijo de Dios", "Tengo una Familia Feliz" — no son melodías reconfortantes. Son declaraciones doctrinales que los niños memorizan antes de que puedan leer el manual. La consejera que protege el tiempo de música está protegiendo una de las formas de enseñanza más permanentes que existe en la Primaria.',
            },
            {
              type: 'key_points',
              title: 'Cómo la consejera crea atmósfera espiritual en la reunión de Primaria',
              points: [
                'Sentarse entre los niños durante el tiempo de música, no al costado como supervisora',
                'Cantar visible y genuinamente — los niños aprenden que la música importa cuando ven que sus líderes la viven',
                'Reducir las interrupciones durante el tiempo de música — el orden del salón es responsabilidad de la presidencia, no solo del director',
                'Hacer breves comentarios después de una canción cuando el Espíritu esté presente — un testimonio de una oración, de una promesa',
                'Proteger el tiempo de música en el programa — si hay retrasos, no recortar la música para compensar',
              ],
            },
          ],
        },
      ],
    },
  ],
}
