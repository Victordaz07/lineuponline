import type { Lesson } from '@/types/doctrine'

export const reyBenjamin: Lesson = {
  id: 'rey-benjamin',
  moduleId: 'personajes-escrituras',
  title: 'Rey Benjamín — El Rey que Sirvió',
  subtitle: 'El discurso más importante del Libro de Mormón',
  description: 'El rey Benjamín trabajó con sus propias manos para no ser una carga a su pueblo. Al final de su vida, reunió a toda la nación bajo una gran tienda y pronunció el discurso más profundo del Libro de Mormón sobre el servicio, la deuda impagable con Dios, y el nombre de Cristo. El pueblo cambió de corazón.',
  level: 'INTERMEDIO',
  icon: '👑',
  duration: 65,
  order: 74,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Rey que Sirvió con sus Propias Manos',
      intro: { romanNumeral: 'I', title: 'Mosíah 2 — La Autoridad del Servicio', paragraphs: ['Un rey que no cobró impuestos'] },
      topics: [
        {
          id: 't1',
          title: 'El liderazgo de abajo',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Mosíah 2:14-15', text: 'Y ni aun os he permitido que me sirvierais ni que dependierais de mí; y que os he servido con mis propias manos, que podáis testificar... Y si yo, a quien llamáis vuestro rey, quien ha pasado sus días en vuestro servicio, y sin embargo ha sido de vuestro servicio, os doy gracias, ¿cuánto más debéis dar gracias a vuestro Padre celestial?' },
            { type: 'paragraph', id: 'p1', text: 'Benjamín gobernó sin cobrar tributo — una anomalía radical en el mundo antiguo. Trabajó con sus propias manos para mantenerse. Esta declaración al pueblo no es modestia retórica: Benjamín establece el principio de que la autoridad que sirve es la autoridad legítima. Y usa su propio servicio como argumento teológico: si yo que soy vuestro rey os sirvo, cuánto más debéis servir a Dios que os da todo.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Deuda Impagable',
      intro: { romanNumeral: 'II', title: 'Mosíah 2:20-25 — No Puedes Pagar', paragraphs: ['La teología de la gracia más clara del Libro de Mormón'] },
      topics: [
        {
          id: 't2',
          title: 'Siempre en deuda con Dios',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Mosíah 2:21-24 articula uno de los argumentos teológicos más poderosos sobre la gracia: si sirves a Dios con toda tu alma toda tu vida, y Dios te bendice por eso, inmediatamente estarás de nuevo en deuda con él por la misma bendición recibida. La deuda no se puede saldar mediante esfuerzo humano porque toda capacidad de servir viene de Dios en primer lugar. La única respuesta posible a la gracia de Dios es gratitud, no pago.' },
            { type: 'doctrine_box', id: 'db1', title: 'La Gratitud como Respuesta Teológica', body: 'Mosíah 2:25: "Y he aquí, todo lo que os he dicho concerniente al que habéis de guardar es para que podáis ser sabios... siempre acordándoos de la grandeza de Dios, y de vuestra propia nada." La conciencia de nuestra pequeñez ante Dios no es auto-denigración psicológica — es precisión teológica. Es la única postura que permite recibir la gracia en lugar de intentar merecerla.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Nombre de Cristo',
      intro: { romanNumeral: 'III', title: 'Mosíah 3-5 — La Sangre de Cristo', paragraphs: ['La doctrina de la expiación y el cambio de corazón'] },
      topics: [
        {
          id: 't3',
          title: 'El cambio de corazón del pueblo',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Mosíah 5:7-8', text: 'Y ahora, a causa del convenio que habéis hecho, seréis llamados los hijos de Cristo, sus hijos e hijas; porque he aquí, hoy día os ha engendrado espiritualmente; porque decís que vuestros corazones han cambiado por la fe en su nombre; por tanto, sois engendrados de él... Y bajo este nombre seréis llamados al día postrero.' },
            { type: 'paragraph', id: 'p3', text: 'Después del discurso de Benjamín, el pueblo cayó a tierra. Mosíah 5:2: "Y todos decían estas palabras: Creemos en todo lo que nos has dicho; y también sabemos de su veracidad y certeza, a causa del Espíritu del Señor Omnipotente, que ha obrado una gran transformación en nosotros, o en nuestros corazones, que ya no tenemos inclinación a hacer el mal." Este es el modelo del cambio espiritual genuino: no reforma moral superficial sino transformación del deseo profundo.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Servir a los Demás es Servir a Dios',
      intro: { romanNumeral: 'IV', title: 'Mosíah 2:17 — El Versículo que Define el Ministerio', paragraphs: ['La ecuación del servicio'] },
      topics: [
        {
          id: 't4',
          title: 'La identidad del prójimo con Dios',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'Mosíah 2:17', text: 'Y he aquí, os digo estas cosas para que aprendáis sabiduría; para que aprendáis que cuando estáis al servicio de vuestros semejantes, estáis solamente al servicio de vuestro Dios.' },
            { type: 'paragraph', id: 'p4', text: 'Este versículo — el más citado del discurso de Benjamín — conecta directamente el servicio humano con el servicio divino. No como metáfora ("es como si sirvieras a Dios") sino como declaración directa ("estáis al servicio de vuestro Dios"). El ser humano creado a imagen de Dios lleva en sí la presencia divina — atenderlo es atender a Dios. Este principio precede y prepara la revelación de Mateo 25:40.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué cambiaría en la manera en que tratas a las personas de tu vida cotidiana — familia, compañeros de trabajo, desconocidos — si lo experimentaras literalmente como servicio a Dios?' },
          ],
        },
      ],
    },
  ],
}
