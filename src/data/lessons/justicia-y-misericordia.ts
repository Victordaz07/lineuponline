import type { Lesson } from '@/types/doctrine'

export const justiciaYMisericordia: Lesson = {
  id: 'justicia-y-misericordia',
  moduleId: 'doctrina-avanzada-carne',
  title: 'Justicia y Misericordia',
  subtitle: 'Equilibradas en Cristo',
  author: 'Fuentes principales: Alma 42, 2 Nefi 9, DyC 19',
  description:
    'El dilema más profundo del universo: Dios no puede simplemente perdonar el pecado sin destruir la justicia — ni puede castigar sin destruir la misericordia. Alma 42 revela cómo la Expiación resuelve lo que ningún otro sistema puede: satisfacer ambas a la vez.',
  level: 'AVANZADO',
  icon: '⚖️',
  duration: 65,
  order: 5,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  previousLessonId: 'plan-de-salvacion',
  nextLessonId: 'convenios-eternos',
  studySections: [
    {
      id: 's1',
      title: 'El Dilema Divino',
      intro: {
        romanNumeral: 'I',
        title: 'El Dilema Divino',
        paragraphs: [
          'Hay un problema en el corazón del universo moral que ninguna religión humana había resuelto satisfactoriamente hasta la Restauración. ¿Cómo puede un Dios perfectamente justo perdonar el pecado? Si lo perdona sin pago, la justicia queda sin cumplir. Si no lo perdona, la misericordia queda sin expresar. Alma 42 lo articula con una claridad que no tiene paralelo en ningún otro texto religioso.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Por Qué Dios No Puede Simplemente Perdonar',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Porque he aquí que la justicia ejerce todos sus pedidos, y también la misericordia exige todo lo que le pertenece; y así nadie puede salvarse sino mediante la expiación y la misericordia. [...] ¿Y ahora bien, cómo podría un hombre arrepentirse si no hay ley? ¿Cómo puede pecar si no hay ley? ¿Cómo puede haber ley a no ser que haya castigo? Ahora bien, se requiere una expiación.',
              reference: 'Alma 34:16; 42:17–18',
            },
            {
              type: 'paragraph',
              text: 'Alma explica a su hijo Corianton el fundamento lógico: sin justicia, la ley no tiene sentido. Sin ley, el arrepentimiento no tiene sentido. Sin arrepentimiento, el plan de salvación no tiene sentido. Dios no puede simplemente ignorar el pecado porque hacerlo destruiría el orden moral del universo — y con él, la posibilidad misma de la exaltación.',
            },
            {
              type: 'highlight_verse',
              text: '¿Y ahora bien, si Dios dejase de ser Dios? Y Dios dejaría de ser Dios si inclinase hacia la iniquidad. [...] Por tanto, de acuerdo con la justicia, el plan de redención no podía llevarse a cabo sino únicamente en base al arrepentimiento y la fe.',
              reference: 'Alma 42:13, 15',
            },
            {
              type: 'doctrine_box',
              title: 'El dilema expuesto con claridad',
              body: 'Si Dios simplemente perdona el pecado sin pago: la justicia no se cumple, la ley queda sin efecto, Dios "dejaría de ser Dios." / Si Dios castiga todo pecado sin misericordia: nadie puede salvarse, la misericordia queda sin expresar, el plan falla. / La única solución: alguien que sea a la vez perfectamente justo y perfectamente misericordioso, que pueda satisfacer las demandas de la justicia en nombre del pecador y luego extender misericordia al arrepentido. Solo Cristo califica.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Solución: La Expiación',
      intro: {
        romanNumeral: 'II',
        title: 'La Solución: La Expiación',
        paragraphs: [
          'La Expiación no es una solución de emergencia al problema del pecado. Es la solución planificada antes de la fundación del mundo al dilema entre la justicia y la misericordia. Cristo no improvisa — cumple exactamente la función para la que fue preparado desde la eternidad.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Cómo Cristo Satisface Ambas',
          blocks: [
            {
              type: 'highlight_verse',
              text: 'Por tanto, Dios mismo expiará por los pecados del mundo, para efectuar el plan de misericordia, para aplacar las exigencias de la justicia, para que Dios pueda ser un Dios perfecto y justo, y también un Dios misericordioso.',
              reference: 'Alma 42:15',
            },
            {
              type: 'paragraph',
              text: 'Cristo satisface la justicia pagando el precio — "tomó sobre sí mismo los pecados del mundo" (Alma 34:15). Habiendo pagado el precio, tiene el derecho legal de extender misericordia a quienes se arrepienten. La misericordia no cancela la justicia — la cumple. El precio fue pagado; queda decidir quién lo paga: Cristo por el penitente arrepentido, o el pecador no arrepentido por sí mismo.',
            },
            {
              type: 'highlight_verse',
              text: 'Por tanto, yo mando a ti que te arrepientas — arrepiéntete, no sea que te castigue con mi mano, y sufras estas cosas de las cuales no deseo que sufras, sino que te arrepientas y tomes para ti el reino del cielo.',
              reference: 'Doctrina y Convenios 19:15',
            },
            {
              type: 'compare_grid',
              left: {
                title: 'El arrepentido — la misericordia actúa',
                items: [
                  'Se arrepiente y acepta la Expiación',
                  'Cristo paga el precio en su lugar',
                  'Recibe perdón y limpieza',
                  'La justicia queda satisfecha — por Cristo',
                  'Puede progresar hacia la exaltación',
                ],
              },
              right: {
                title: 'El no arrepentido — la justicia actúa',
                items: [
                  'Rechaza la Expiación o no la invoca',
                  'Debe pagar el precio él mismo',
                  'DyC 19:16-17: sufrirá como Cristo sufrió',
                  'La justicia queda satisfecha — por el pecador',
                  'Limitado en su progresión eterna',
                ],
              },
            },
            {
              type: 'highlight_verse',
              text: 'Por lo cual, yo mando a ti que te arrepientas — arrepiéntete, pues estas cosas que se dijeron, son verdad, y si no te arrepientes, sufrirás así como yo; y preferiría que sufrieras por tu propio pecado y no que mis miserias te causaran tristeza.',
              reference: 'Doctrina y Convenios 19:16–17',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Cómo Vivir con Este Conocimiento',
      intro: {
        romanNumeral: 'III',
        title: 'Cómo Vivir con Este Conocimiento',
        paragraphs: [
          'Entender la justicia y la misericordia no es un ejercicio teológico abstracto. Transforma cómo ves tu propio pecado, cómo ves el pecado de otros, y cómo ves la Expiación. Tres aplicaciones prácticas.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Tres Aplicaciones que Cambian la Vida',
          blocks: [
            {
              type: 'key_points',
              title: 'Tres verdades que este principio cambia',
              points: [
                'Tu pecado tiene precio — pero ya fue pagado. El arrepentimiento no es pagar la deuda; es aceptar que Cristo ya la pagó y comprometerse a no volverla a contraer.',
                'El pecado de otros también tiene precio — juzgar sin misericordia es ignorar que tú también necesitas lo que estás negando a otros.',
                'La misericordia sin arrepentimiento no existe — Dios no puede perdonar a quien no quiere ser perdonado. El arrepentimiento es la condición, no el castigo.',
              ],
            },
            {
              type: 'leader_quote',
              quote: 'La expiación no fue diseñada para que el pecado fuera barato. Fue diseñada para que el perdón fuera posible. Hay una diferencia enorme. Dios no bajó el precio del pecado — encontró a alguien que pudiera pagarlo completamente, para que nosotros pudiéramos ser libres de la deuda.',
              name: 'Jeffrey R. Holland',
              role: '"The Atonement of Jesus Christ", Liahona, marzo 2008 (trad.)',
            },
            {
              type: 'reflection',
              prompt: '¿Hay algún pecado en tu vida por el que sientes que "ya es demasiado tarde" o que "Dios no puede perdonar"? ¿Cómo cambia Alma 42 esa percepción? ¿Hay alguien a quien has negado misericordia porque sientes que "no se la merece"? ¿Cómo aplica el mismo principio?',
            },
          ],
        },
      ],
    },
  ],
}
