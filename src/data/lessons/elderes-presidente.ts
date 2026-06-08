import type { Lesson } from '@/types/doctrine'

export const elderesPresidente: Lesson = {
  id: 'elderes-presidente',
  moduleId: 'capacitacion-liderazgo',
  submoduleGroup: 'elderes-lideres',
  title: 'El Presidente del Cuórum de Élderes',
  subtitle: 'Llave del ministerio y del bienestar de los hombres del barrio',
  description:
    'El presidente del Cuórum de Élderes no es solo el líder de un grupo de hombres del barrio. Ejerce una responsabilidad de liderazgo pastoral real: dirige el ministerio de los hermanos, responde por el bienestar temporal y espiritual de los élderes del barrio, preside la presidencia del cuórum y participa activamente en el consejo de barrio. Esta lección explora ese llamamiento en profundidad, basándose en el Manual General capítulo 8.',
  level: 'BÁSICO',
  icon: '🌍',
  duration: 25,
  order: 9530,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'Las Llaves del Presidente — Qué Son y Cómo Se Ejercen',
      intro: {
        romanNumeral: 'I',
        title: 'Presidir el Cuórum con Autoridad Real',
        paragraphs: [
          'El presidente del Cuórum de Élderes ejerce las llaves de su llamamiento — no las llaves del sacerdocio del obispo, sino la responsabilidad autorizada de presidir una organización del sacerdocio en el barrio. Entender qué significa eso, y qué no significa, es el punto de partida de su ministerio.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Qué Son las Llaves del Presidente del Cuórum',
          blocks: [
            {
              type: 'paragraph',
              text: 'Las "llaves" del presidente del Cuórum de Élderes no son las llaves del sacerdocio en el sentido pleno — esas residen en el obispo. Son la responsabilidad autorizada de presidir el cuórum y ejercer la responsabilidad pastoral sobre sus miembros. En términos prácticos: el presidente es responsable ante el Señor y ante el obispo por el bienestar espiritual y temporal de los élderes del barrio. Esa responsabilidad no es compartida ni delegable en su totalidad — es personal.',
            },
            {
              type: 'doctrine_box',
              title: 'Llaves de liderazgo vs. llaves del sacerdocio',
              body: 'El Manual General (8.1.1) establece que el presidente del Cuórum de Élderes "preside el cuórum y trabaja con el obispo para lograr el bienestar de los miembros del cuórum." Las llaves del sacerdocio en el barrio residen en el obispo. El presidente del cuórum ejerce sus responsabilidades bajo la dirección del obispo. Esta no es una relación de subordinación burocrática — es el patrón del sacerdocio: cada líder responde hacia arriba en la cadena del sacerdocio y responde hacia abajo por quienes están bajo su cuidado.',
            },
            {
              type: 'highlight_verse',
              reference: 'Doctrina y Convenios 84:107',
              text: 'Y que los... obispos, presidentes de sacerdocio y élderes... apacienten los rebaños del Señor, enseñen a los que les están confiados, y lleguen a las familias del pueblo del Señor.',
            },
            {
              type: 'paragraph',
              text: 'El presidente del cuórum reporta al obispo, no opera independientemente. Esto significa que las decisiones importantes — cambios en el programa del cuórum, activación de hermanos, necesidades de bienestar que requieren recursos — se coordinan con el obispo. El presidente que actúa solo, sin informar al obispo, socava la unidad de liderazgo del barrio y eventualmente limita su propia capacidad de servir.',
            },
          ],
        },
        {
          id: 't2',
          title: 'El Presidente Como Pastor — No Solo Como Organizador',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presidente del cuórum que solo organiza las reuniones semanales y coordina actividades cumple una fracción de su llamamiento. El llamamiento es esencialmente pastoral: conocer a cada élder del barrio por nombre y circunstancia, identificar quiénes necesitan activación, quiénes están en dificultades temporales, quiénes necesitan una conversación espiritual que no han tenido con nadie. Ese conocimiento pastoral es el fundamento de todo lo demás.',
            },
            {
              type: 'reflection',
              prompt: '¿Conozco a cada élder del barrio por nombre y sé cuál es su situación actual? ¿Quién del cuórum está luchando espiritualmente y no lo ha dicho todavía? ¿Hay algún élder inactivo al que no he visitado en los últimos tres meses?',
            },
            {
              type: 'key_points',
              title: 'Responsabilidades pastorales del presidente',
              points: [
                'Conocer a cada élder del barrio por nombre, situación familiar y estado de actividad',
                'Identificar hermanos con necesidades temporales o espirituales que requieren atención',
                'Supervisar el ministerio de los hermanos: asignaciones actualizadas y visitas realizadas',
                'Trabajar con el obispo en la activación de élderes menos activos',
                'Participar en el consejo de barrio como representante de los élderes y sus familias',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Ministerio, Bienestar y la Reunión del Cuórum',
      intro: {
        romanNumeral: 'II',
        title: 'El Cuórum Como Comunidad de Cuidado Mutuo',
        paragraphs: [
          'El Cuórum de Élderes no existe para tener reuniones. Existe para cuidarse mutuamente — temporalmente y espiritualmente — y para servir a las familias del barrio. El ministerio de los hermanos es el sistema principal a través del cual ese cuidado se organiza y se ejecuta.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Dirigir el Ministerio de los Hermanos',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presidente del cuórum dirige el ministerio de los hermanos asignados. Esto significa que conoce las asignaciones de cada hermano, que la presidencia revisa regularmente si las visitas se realizan, y que cuando un hermano no está visitando a sus asignados, el presidente indaga —con cuidado y sin juicio— qué está pasando. El ministerio no funciona solo porque se asigna: funciona cuando la presidencia lo cultiva activamente.',
            },
            {
              type: 'doctrine_box',
              title: 'Ministerio: mucho más que visitar',
              body: 'El Manual General describe el ministerio como "cuidar de los miembros de la Iglesia de la manera que el Salvador lo haría." Para el Cuórum de Élderes, esto significa que los hermanos ministros no solo visitan a sus asignados — los conocen, los acompañan en sus momentos difíciles, celebran con ellos en los buenos, y responden cuando hay necesidad. El presidente del cuórum es responsable de que ese estándar se mantenga vivo en el cuórum.',
            },
            {
              type: 'steps',
              title: 'Cómo el presidente supervisa el ministerio',
              steps: [
                'Revisar mensualmente la lista de asignaciones de ministerio con la presidencia del cuórum',
                'Identificar qué hermanos no han realizado visitas en el último mes y coordinar el seguimiento',
                'Verificar que cada familia o hermano del barrio tiene hermanos ministros asignados',
                'Cuando un hermano reporta una necesidad de su asignado: decidir junto con la presidencia cómo responder',
                'Reportar al obispo en la reunión mensual: estado del ministerio, necesidades identificadas, respuestas coordinadas',
              ],
            },
          ],
        },
        {
          id: 't4',
          title: 'La Reunión Semanal del Cuórum',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Cuórum de Élderes se reúne cada domingo durante 25 minutos. El formato establecido por el Manual General es claro: la presidencia selecciona un discurso de la Conferencia General más reciente que responda a las necesidades del cuórum, y la reunión es un consejo de hermanos — no una clase magistral. El presidente facilita la discusión, no da una conferencia.',
            },
            {
              type: 'steps',
              title: 'Cómo conducir la reunión semanal del cuórum',
              steps: [
                'La presidencia selecciona el discurso de la semana prayerfully, considerando las necesidades del cuórum',
                'Comunicar el discurso a los hermanos antes del domingo para que lleguen habiendo leído',
                'Abrir la reunión con una bienvenida breve — sin anuncios en la reunión misma',
                'La presidencia o un hermano designado abre con una pregunta que conecte el discurso con la vida real del cuórum',
                'Facilitar la discusión: invitar a hermanos a compartir, no rellenar el silencio con más enseñanza',
                'Terminar con una invitación de aplicación específica para la semana',
                'Oración de cierre — los anuncios se comunican por canales alternativos',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La reunión del cuórum no es para que los élderes escuchen al presidente. Es para que los élderes se conozcan entre sí, se edifiquen mutuamente, y salgan más comprometidos con el discipulado que cuando llegaron.',
              name: 'Manual General de la Iglesia',
              role: 'Capítulo 8 — El Cuórum de Élderes',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Cuórum como Fraternidad y la Presidencia del Cuórum',
      intro: {
        romanNumeral: 'III',
        title: 'La Presidencia del Cuórum: Reunión Semanal y Consejo de Barrio',
        paragraphs: [
          'El presidente del cuórum no trabaja solo. Trabaja con su presidencia en reunión semanal, y con el obispo y el resto del liderazgo del barrio en el consejo de barrio. Estas dos reuniones son los espacios donde se ejerce el liderazgo de manera colectiva.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'La Reunión Semanal de Presidencia del Cuórum',
          blocks: [
            {
              type: 'paragraph',
              text: 'La presidencia del Cuórum de Élderes se reúne semanalmente. En esa reunión se revisan las necesidades de los hermanos del cuórum, se coordina el ministerio, se prepara la reunión dominical del cuórum, y se planifica la participación del presidente en el consejo de barrio. Sin esta reunión semanal, la presidencia funciona de manera reactiva en lugar de proactiva.',
            },
            {
              type: 'key_points',
              title: 'Agenda de la reunión semanal de presidencia del cuórum',
              points: [
                'Revisión de compromisos tomados en la reunión anterior',
                'Informe de ministerio: ¿quién visitó? ¿qué necesidades se identificaron?',
                'Hermanos con necesidades especiales: espirituales, temporales, de activación',
                'Selección del discurso para la reunión dominical del cuórum',
                'Preparación para el consejo de barrio si corresponde',
                'Oración de cierre y registro de compromisos por el secretario',
              ],
            },
          ],
        },
        {
          id: 't6',
          title: 'El Consejo de Barrio: La Voz de los Élderes',
          blocks: [
            {
              type: 'paragraph',
              text: 'El presidente del cuórum participa en el consejo de barrio como representante de los élderes. Lleva información sobre las necesidades espirituales y temporales de los hermanos y sus familias, y ayuda a coordinar la respuesta del barrio a esas necesidades. En el consejo de barrio, la voz del presidente del cuórum complementa la de la presidenta de la Sociedad de Socorro — juntos cubren el panorama completo de las familias del barrio.',
            },
            {
              type: 'reflection',
              prompt: '¿Llego al consejo de barrio preparado — con información concreta sobre las necesidades del cuórum — o asisto sin haber revisado con mi presidencia qué reportar? ¿Qué cambiaría si llegara siempre con dos o tres asuntos específicos para el obispo?',
            },
          ],
        },
      ],
    },
  ],
}
