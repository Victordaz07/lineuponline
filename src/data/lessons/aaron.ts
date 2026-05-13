import type { Lesson } from '@/types/doctrine'

export const aaron: Lesson = {
  id: 'aaron',
  moduleId: 'personajes-escrituras',
  title: 'Aarón — El Sumo Sacerdote',
  subtitle: 'El hermano que estuvo a la sombra y falló',
  description: 'Aarón habló por Moisés, realizó las plagas, sostuvo sus brazos en la batalla de Amalec — y también construyó el becerro de oro cuando el pueblo lo presionó. El sacerdocio aarónico lleva su nombre. ¿Por qué?',
  level: 'BÁSICO',
  icon: '⚗️',
  duration: 55,
  order: 36,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Voz de Moisés',
      intro: { romanNumeral: 'I', title: 'El Primer Portavoz', paragraphs: ['Éxodo 4 — cuando Dios elige a dos'] },
      topics: [
        {
          id: 't1',
          title: 'El hermano que Dios ya había preparado',
          blocks: [
            { type: 'highlight_verse', reference: 'Éxodo 4:14-16', text: '¿No está Aarón tu hermano, el levita? Yo sé que él habla bien; y he aquí que él saldrá a recibirte, y al verte se alegrará en su corazón. Tú hablarás a él, y pondrás en su boca las palabras, y yo estaré con tu boca y con la suya... él te servirá de boca, y tú serás para él en lugar de Dios.' },
            { type: 'paragraph', text: 'Aarón era mayor que Moisés (Éxodo 7:7 — 83 años vs 80 de Moisés al confrontar al Faraón). Fue designado portavoz precisamente porque Moisés se sentía "tardo en el habla". En este modelo se establece un patrón que se repite en la Restauración: el profeta y el portavoz, el visionario y el comunicador. Aarón cumplió este rol con fidelidad durante las 10 plagas y el Éxodo.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Sumo Sacerdote Consagrado',
      intro: { romanNumeral: 'II', title: 'Levítico 8 — La Consagración más Elaborada de la Biblia', paragraphs: ['El primer sumo sacerdote de Israel'] },
      topics: [
        {
          id: 't2',
          title: 'Las vestiduras y la unción',
          blocks: [
            { type: 'paragraph', text: 'La consagración de Aarón en Levítico 8 es el ritual de ordenación más detallado de toda la Biblia: baño de agua, vestiduras especiales (túnica, faja, manto, efod, pectoral, mitra), unción con aceite sobre la cabeza, sacrificios específicos, sangre aplicada en la oreja derecha, el pulgar de la mano derecha y el dedo gordo del pie derecho, luego más aceite y sangre en las mismas partes. Todo este ritual tipificaba la consagración perfecta de Cristo.' },
            { type: 'key_points', title: 'Por qué el sacerdocio lleva su nombre', points: [
              'Fue el primer sumo sacerdote consagrado bajo la ley de Moisés',
              'Su linaje (levítico) fue la base del sacerdocio israelita por siglos',
              'Sus funciones tipificaban el ministerio de Cristo como Sumo Sacerdote eterno',
              'El sacerdocio aarónico restaurado por Juan el Bautista en 1829 lleva su nombre',
            ]},
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Becerro de Oro — La Caída',
      intro: { romanNumeral: 'III', title: 'Éxodo 32 — Cuando la Presión Ganó', paragraphs: ['El momento más oscuro de Aarón'] },
      topics: [
        {
          id: 't3',
          title: 'La lección más difícil de Aarón',
          blocks: [
            { type: 'highlight_verse', reference: 'Éxodo 32:22-24', text: 'Y Aarón les respondió: No se enoje mi señor; tú conoces al pueblo, que es inclinado a mal. Porque me dijeron: Haznos dioses que vayan delante de nosotros... Y les dije: ¿Quién tiene oro? Apartadlo. Y me lo dieron, y lo eché en el fuego, y salió este becerro.' },
            { type: 'paragraph', text: 'La excusa de Aarón es famosa por su absurdidad: "lo eché en el fuego, y salió este becerro" — como si el ídolo se hubiera formado solo. Es la historia de alguien cediando bajo presión social extrema y luego racionalizando su falla. El pueblo amenazaba con rebelarse; Aarón capituló. La lección no es que Aarón era un hombre malo — es que era un hombre bueno que fallóen el momento más importante por no tener el valor de resistir a la multitud.' },
            { type: 'doctrine_box', title: 'La Diferencia entre Moisés y Aarón', body: 'Moisés, al bajar del monte y ver el becerro, no negoció. Rompió las tablas, destruyó el ídolo, confrontó a Aarón, y convocó a quienes estaban con Jehová. La diferencia entre los dos no era de inteligencia ni de experiencia — era de disposición a aguantar el costo personal de la fidelidad. El coraje de la fidelidad es lo que separa al profeta del portavoz.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Redención del Servicio Fiel',
      intro: { romanNumeral: 'IV', title: 'Un Ministerio de 40 Años', paragraphs: ['El sacerdocio como segunda oportunidad'] },
      topics: [
        {
          id: 't4',
          title: 'Más que una caída',
          blocks: [
            { type: 'paragraph', text: 'A pesar del becerro de oro, Aarón completó 40 años de ministerio sacerdotal fiel. Presidió el Tabernáculo, ofreció los sacrificios, entró al Lugar Santísimo en el Día de la Expiación, intercedió por el pueblo. Su historia no termina en Éxodo 32 — termina en Números 20 cuando muere en el monte Hor después de pasar sus vestiduras sacerdotales a su hijo Eleazar. La tradición judía lo recuerda como el gran hacedor de paz, el que siempre buscaba reconciliar a los hombres entre sí.' },
            { type: 'reflection', prompt: '¿Hay algún área de tu vida donde, como Aarón, cedes a la presión social en lugar de mantenerte fiel a lo que sabes que es correcto? ¿Qué costo tiene para ti mantener tu posición en esos momentos?' },
          ],
        },
      ],
    },
  ],
}
