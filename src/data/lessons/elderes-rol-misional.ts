import type { Lesson } from '@/types/doctrine'

export const elderesRolMisional: Lesson = {
  id: 'elderes-rol-misional',
  moduleId: 'capacitacion-liderazgo',
  title: 'Nuestro Rol en la Transición',
  subtitle: 'El Cuórum de Élderes como puente generacional',
  description:
    'El nuevo programa de juventud que comienza el 6 de septiembre de 2026 no es solo para los jóvenes — involucra directamente al Cuórum de Élderes. La guía PFJ prepara a los jóvenes para las misiones que los élderes ya vivieron. Esta lección ayuda a los líderes del cuórum a entender su rol como puente generacional y agentes de la visión misional en la unidad.',
  level: 'BÁSICO',
  icon: '🌍',
  duration: 20,
  order: 9201,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Por Qué Esto Nos Importa — La Continuidad del Discipulado',
      intro: {
        romanNumeral: 'I',
        title: 'Ustedes Fueron Esos Jóvenes',
        paragraphs: [
          'Cada élder del cuórum fue una vez un joven de 12 a 17 años estudiando los mismos principios que hoy estudiarán los jóvenes de su unidad con la guía PFJ. Esa continuidad no es solo biográfica — es doctrinal. El discipulado que comenzó en esos años es el que hoy los tiene sirviendo en el cuórum.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La Guía PFJ Prepara a los Futuros Misioneros',
          blocks: [
            {
              type: 'paragraph',
              text: 'Los 12 capítulos de la guía "Para la Fortaleza de la Juventud" no son un programa de cumplimiento de reglas — son un programa de formación de discípulos. Los mismos principios que la guía enseña — identidad divina, decisiones centradas en Cristo, pureza, servicio, discipulado activo — son los cimientos de un misionero eficaz. El Cuórum de Élderes tiene un interés directo en que ese programa funcione bien.',
            },
            {
              type: 'doctrine_box',
              title: 'La misión comienza antes del llamamiento',
              body: 'Doctrina y Convenios 4:5-6 describe las cualidades del misionero: fe, esperanza, caridad, amor, diligencia, virtud, conocimiento, templanza, paciencia, piedad, fraternidad y godliness. Ninguna de estas cualidades se desarrolla en dos semanas de preparación premisional. Se desarrollan en años de discipulado diario — exactamente lo que la guía PFJ intenta cultivar desde los 12 años.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 4:5–6',
              text: 'Y la fe, la esperanza, la caridad y el amor, con el ojo puesto en la gloria de Dios, os califican para la obra. Acordaos de la fe, la virtud, el conocimiento, la templanza, la paciencia, la piedad, la fraternidad y la caridad; porque si estas cosas abundan en vosotros, no estaréis sin fruto en el conocimiento de nuestro Señor Jesucristo.',
            },
            {
              type: 'key_points',
              points: [
                'La guía PFJ cultiva las mismas virtudes que DyC 4 describe para el misionero',
                'Los élderes que sirvieron misiones son testimonio viviente de esas virtudes en acción',
                'El cuórum tiene interés directo en la formación de los jóvenes que servirán junto a ellos',
                'La conexión entre PFJ y misión no es implícita — puede hacerse explícita en las clases',
              ],
            },
          ],
        },
        {
          id: 't2',
          title: 'El Cuórum Como Comunidad de Misión',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Cuórum de Élderes no existe solo para administrar el barrio. Existe para llevar adelante la obra misional del Señor en esa unidad específica. Eso incluye el trabajo con los jóvenes que están en proceso de formación para esa misma obra. Cuando el cuórum se involucra con el programa de juventud, no está haciendo trabajo voluntario extra — está cumpliendo su propia llamada.',
            },
            {
              type: 'compare_grid',
              left: {
                label: 'Visión limitada del cuórum',
                points: [
                  'El cuórum sirve a los adultos del barrio',
                  'Los jóvenes son responsabilidad de los líderes de juventud',
                  'La misión es trabajo de los misioneros a tiempo completo',
                  'El rol del cuórum termina en la reunión sacramental',
                ],
              },
              right: {
                label: 'Visión plena del cuórum',
                points: [
                  'El cuórum es el cuerpo misionero del barrio — todas las edades',
                  'Los jóvenes son los misioneros del futuro que el cuórum mentoriza hoy',
                  'La misión es el estilo de vida del discípulo — no solo los 18-24 meses',
                  'El cuórum actúa como puente entre la juventud y el servicio misional pleno',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿En qué momento de tu propio camino fue un élder mayor un puente para ti entre la juventud y el servicio misional? ¿Quién fue esa persona? ¿Puedes ser esa persona para un joven de tu barrio ahora mismo?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Acción Práctica — Cómo Involucrarse',
      intro: {
        romanNumeral: 'II',
        title: 'Puentes Concretos, No Buenas Intenciones',
        paragraphs: [
          'El rol del cuórum en la transición no se cumple solo con apoyo moral. Requiere acciones específicas que conecten a los élderes con el programa de juventud de maneras significativas y respetuosas.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Tres Formas Concretas de Participar',
          blocks: [
            {
              type: 'paragraph',
              text: 'No todos los élderes necesitan hacer lo mismo. Algunos tienen el don de compartir experiencias misioneras; otros son mejores en conversaciones personales; otros pueden apoyar desde la oración y el ejemplo silencioso. Lo importante es que cada élder encuentre su forma de contribuir a la formación de los jóvenes de su unidad.',
            },
            {
              type: 'steps',
              steps: [
                'Mentoría personal: un élder se conecta informalmente con uno o dos jóvenes del barrio — reuniones mensuales, conversaciones genuinas',
                'Participación en clases: ser invitado a compartir en un capítulo específico de la guía PFJ que conecte con su experiencia misional',
                'Testimonio en reuniones sacramentales: compartir testimonios que conecten los principios del PFJ con la experiencia misionera real',
              ],
            },
            {
              type: 'timeline',
              items: [
                {
                  label: '3 de mayo de 2026',
                  text: 'Maratón de lectura del PFJ — los élderes pueden participar junto a los jóvenes como muestra de interés genuino.',
                  color: 'gold',
                },
                {
                  label: '30 de agosto de 2026',
                  text: 'Evento del 5.º domingo — toda la unidad unida. Los élderes tienen un rol natural de apoyo y conexión con los jóvenes en este evento.',
                  color: 'blue',
                },
                {
                  label: 'Septiembre 2026 en adelante',
                  text: 'Inicio del programa semanal. Los élderes comienzan a ser invitados a capítulos específicos de las clases de jóvenes según sus experiencias y el tema del mes.',
                  color: 'green',
                },
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'Cómo Usar Este Cambio Como Momento Misional',
          blocks: [
            {
              type: 'paragraph',
              text: 'El cambio de septiembre de 2026 es también una herramienta misional. Las familias no miembros que tienen jóvenes de 12 a 17 años pueden ser invitadas a conocer el programa. La guía PFJ tiene principios universalmente válidos — no presupone membresía para ser leída. Este es un momento de apertura que el cuórum puede aprovechar.',
            },
            {
              type: 'leader_quote',
              quote: 'La mejor misión no es la que hacemos en lugares lejanos — es la que hacemos desde donde vivimos, con las personas que ya conocemos, usando la verdad que ya tenemos. El nuevo programa de juventud es una oportunidad misional que literalmente llega a nuestra puerta.',
              name: 'Líder Misional de Barrio',
              role: 'Orientación para el Cuórum de Élderes, 2026',
            },
            {
              type: 'note_prompts',
              prompts: [
                { id: 'np1', question: '¿Qué joven del barrio —miembro o no miembro— podría beneficiarse de conocer la guía PFJ?' },
                { id: 'np2', question: '¿Qué élder del cuórum tiene una historia misional que podría resonar con los jóvenes de esta unidad?' },
                { id: 'np3', question: '¿Cómo puede el cuórum apoyar el evento del 5.º domingo del 30 de agosto?' },
              ],
            },
          ],
        },
      ],
    },
  ],
}
