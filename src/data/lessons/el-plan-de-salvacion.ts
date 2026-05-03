import type { Lesson } from '@/types/doctrine'

export const elPlanDeSalvacion: Lesson = {
  id: 'plan-de-salvacion',
  moduleId: 'doctrina-avanzada-carne',
  title: 'El Plan de Salvación',
  subtitle: 'La arquitectura de la eternidad',
  author: 'Fuentes principales: Alma 42, 2 Nefi 2, DyC 76, 93',
  description:
    'El plan de salvación no es un esquema religioso — es la arquitectura de la existencia. De dónde venimos, por qué estamos aquí, a dónde vamos. La Caída, la Expiación, la muerte, el juicio, y los tres destinos eternos — todo en un solo marco coherente.',
  level: 'AVANZADO',
  icon: '🗺️',
  duration: 70,
  order: 4,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'preexistencia',
  nextLessonId: 'justicia-y-misericordia',
  studySections: [
    {
      id: 's1',
      title: 'La Arquitectura del Plan',
      intro: {
        romanNumeral: 'I',
        title: 'La Arquitectura del Plan',
        paragraphs: [
          'El plan de salvación tiene otro nombre más revelador: "el plan de felicidad" (Alma 42:8). No fue diseñado como un obstáculo de pruebas que superar para sobrevivir. Fue diseñado para producir la mayor felicidad posible — no solo en la eternidad, sino comenzando ahora.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Las Tres Etapas de la Existencia',
          blocks: [
            {
              type: 'timeline',
              items: [
                {
                  label: 'Premortalidad',
                  text: 'Vivimos como espíritus con el Padre. Desarrollamos carácter, elegimos el plan, vinimos a la tierra.',
                  ref: 'Abraham 3:22-26',
                  color: 'gold',
                },
                {
                  label: 'Mortalidad',
                  text: 'Espíritu + cuerpo mortal. El período de prueba y de adquisición de experiencia esencial.',
                  ref: '2 Nefi 2:25-27',
                  color: 'blue',
                },
                {
                  label: 'Mundo de los espíritus',
                  text: 'Después de la muerte física. Los justos en paraíso, los demás en prisión espiritual — ambos en espera.',
                  ref: 'DyC 138; Alma 40:11-14',
                  color: 'blue',
                },
                {
                  label: 'Resurrección',
                  text: 'Reunión permanente del espíritu con un cuerpo glorificado. Universal — todos resucitan.',
                  ref: '1 Cor 15:20-22; Alma 11:43',
                  color: 'gold',
                },
                {
                  label: 'Juicio',
                  text: 'Cada alma es juzgada según sus obras, conocimiento, convenios, y el uso de la expiación.',
                  ref: 'Alma 41:3; DyC 76',
                  color: 'blue',
                },
                {
                  label: 'Eternidad',
                  text: 'Tres reinos de gloria (celestial, terrestre, telestial) + tinieblas de afuera para los hijos de perdición.',
                  ref: 'DyC 76',
                  color: 'gold',
                },
              ],
            },
            {
              type: 'highlight_verse',
              text: 'El hombre es que puede actuar por sí mismo y no ser actuado sobre él, salvo según el castigo de la ley en el gran y último día, según los mandamientos que Dios ha dado. Por tanto, el hombre es libre según la carne; y todas las cosas se les dan que son necesarias para el hombre. Y son libres de escoger la libertad y la vida eterna, por la mediación de todos los hombres, o escoger la cautividad y la muerte.',
              reference: '2 Nefi 2:26–27',
            },
            {
              type: 'doctrine_box',
              title: '¿Por qué llamarlo "plan de felicidad"?',
              body: 'Lehi en 2 Nefi 2:25 dice: "Adán cayó para que los hombres existiesen; y los hombres existen para que tengan gozo." No para sobrevivir. No para pasar una prueba. Para tener GOZO. El plan de salvación no es un mecanismo de rescate de emergencia — fue el plan desde el principio. La Caída no fue un accidente que Dios tuvo que remediar. Fue parte del plan que hace posible la exaltación.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Caída — El Primer Acto Necesario',
      intro: {
        romanNumeral: 'II',
        title: 'La Caída — El Primer Acto Necesario',
        paragraphs: [
          'La Caída de Adán y Eva es interpretada en el mundo cristiano tradicional como el mayor error de la historia humana. La doctrina restaurada presenta una perspectiva radicalmente diferente: la Caída fue necesaria, fue parte del plan, y sin ella ninguno de nosotros podría existir o ser exaltado.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La Caída Necesaria',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Y he aquí que todas las cosas han sido hecho por mí desde el principio. He aquí, así dice el Señor tu Dios, y yo también digo estas cosas para que no engañéis a mi pueblo, pues ellos pecan contra mí en ese caso, no para que yo sea glorificado. Mas he aquí, yo os digo, que Adán cayó para que los hombres existiesen.',
              reference: '2 Nefi 2:15, 25',
            },
            {
              type: 'paragraph',
              text: 'Sin la Caída, Adán y Eva habrían permanecido en un estado de inocencia sin progresión — sin dolor, sin alegría real, sin hijos, sin mortalidad, sin la posibilidad de crecer hacia la divinidad. Lehi enseña que el estado edénico previa a la Caída era un estado de "actuados sobre" en lugar de "actuar por sí mismos." La Caída introdujo la agencia real, el dolor real, la alegría real, y la posibilidad de la exaltación real.',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'Visión tradicional cristiana de la Caída',
                items: [
                  'Un error catastrófico de Adán y Eva',
                  'Trajo la corrupción al plan de Dios',
                  'Requirió que Dios improvisara una solución',
                  'Fuente de la "naturaleza pecaminosa" inherente',
                ],
              },
              right: {
                title: 'Visión restaurada de la Caída',
                items: [
                  'Un acto necesario y previsto en el plan eterno',
                  'Sin ella, no habría mortalidad, hijos, ni exaltación',
                  'La Expiación fue preparada antes de la fundación del mundo',
                  'No heredamos el pecado de Adán — somos responsables por los nuestros',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Expiación — El Eje del Plan',
      intro: {
        romanNumeral: 'III',
        title: 'La Expiación — El Eje del Plan',
        paragraphs: [
          'Sin la Expiación, el plan de salvación se derrumba. La Caída hizo necesaria la mortalidad — pero también introdujo el pecado y la muerte física y espiritual. La Expiación es lo que resuelve el problema: paga el precio que la justicia requiere, y hace posible que la misericordia actúe.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El Papel Central de Cristo en el Plan',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, el plan de redención no se podía llevar a cabo sino por medio de la expiación; por consiguiente, Dios mismo expiará por los pecados del mundo, para efectuar el plan de misericordia, para aplacar las exigencias de la justicia, para que Dios pueda ser un Dios perfecto y justo, y también un Dios misericordioso.',
              reference: 'Alma 42:15',
            },
            {
              type: 'paragraph',
              text: 'El plan de salvación no es una serie de reglas que cumplir para llegar al cielo. Es un plan diseñado por un Padre que quiere que Sus hijos lleguen a ser como Él — y que entendió que para eso necesitarían tanto la experiencia de la mortalidad como la limpieza del pecado y la victoria sobre la muerte. Cristo es el mecanismo de ambas cosas: su expiación limpia el pecado, su resurrección vence la muerte.',
            },
            {
              type: 'leader_quote',
              quote: 'El plan de salvación es el plan de Dios para la felicidad de Sus hijos. No es un plan de rescate improvisado. Es el plan original. Cristo no fue el plan B cuando la Caída "salió mal." Cristo fue el plan A desde antes de que el mundo fuera formado. Él es el centro, no el remedio.',
              name: 'Neal A. Maxwell',
              role: '"Not My Will, But Thine", Bookcraft, 1988 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Ves el plan de salvación como algo que te fue impuesto o como algo que elegiste? ¿Cómo cambia esa distinción la forma en que enfrentas las pruebas de la mortalidad? ¿Qué parte del plan entiendes menos y cómo podrías aprender más sobre ella?',
            },
          ],
        },
      ],
    },
  ],
}
