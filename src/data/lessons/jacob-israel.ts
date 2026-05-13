import type { Lesson } from '@/types/doctrine'

export const jacobIsrael: Lesson = {
  id: 'jacob-israel',
  moduleId: 'personajes-escrituras',
  title: 'Jacob/Israel — La Lucha con el Ángel',
  subtitle: 'De suplantador a príncipe de Dios',
  description: 'Jacob compró la primogenitura, engañó a su padre, huyó, amó en vano durante 14 años, y una noche luchó con Dios hasta el amanecer. Su nombre cambió. El nuestro también puede.',
  level: 'INTERMEDIO',
  icon: '🤼',
  duration: 70,
  order: 34,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Suplantador',
      intro: { romanNumeral: 'I', heading: '"Yaaqov" — El que Agarra el Talón', subheading: 'Un nombre que define un carácter' },
      topics: [
        {
          id: 't1',
          title: 'Jacob nació tomando',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Jacob nació agarrando el talón de su gemelo Esaú (Génesis 25:26). Su nombre en hebreo, "Yaaqov", significa literalmente "el que agarra el talón" — pero también "el que suplanta" o "el que engaña". Es un nombre profético: toda la primera mitad de su vida, Jacob obtuvo lo que quería por medio de engaño. La primogenitura de Esaú por un plato de lentejas. La bendición de Isaac disfrazado como Esaú. Huyó de las consecuencias.' },
            { type: 'highlight_verse', id: 'v1', reference: 'Génesis 25:31-33', text: 'Y Jacob respondió: Véndeme en este día tu primogenitura. Entonces dijo Esaú: He aquí yo me voy a morir; ¿para qué, pues, me servirá la primogenitura? Y Jacob dijo: Júramelo en este día. Y él le juró, y vendió a Jacob su primogenitura.' },
            { type: 'paragraph', id: 'p2', text: 'Un detalle teológico importante: Esaú "menospreció" su primogenitura (v.34). Hebreos 12:16 lo llamará "profano" por ello. La transacción no fue únicamente un engaño de Jacob — fue la consecuencia de que Esaú mismo no valoraba lo que tenía. La primogenitura conllevaba responsabilidad sacerdotal y patriarcal, no solo herencia material.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'El Amor que Esperó 14 Años',
      intro: { romanNumeral: 'II', heading: 'Raquel — La Lección del Tiempo', subheading: 'Génesis 29 — el amor que cuesta' },
      topics: [
        {
          id: 't2',
          title: 'Siete años como pocos días',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Génesis 29:20', text: 'Así sirvió Jacob por Raquel siete años; y le parecieron como pocos días, porque la amaba.' },
            { type: 'paragraph', id: 'p3', text: 'Jacob trabajó 7 años para casarse con Raquel y fue engañado en la noche de bodas con Lea — una justicia poética: el engañador fue engañado. Trabajó otros 7 años por Raquel. Ese total de 14 años de espera y trabajo por amor a una mujer es uno de los relatos más tiernos del AT. El hombre que siempre tomó atajos, en este caso pagó el precio completo.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Noche en el Vado de Jaboc',
      intro: { romanNumeral: 'III', heading: 'Luchar con Dios hasta el Amanecer', subheading: 'Génesis 32 — la transformación definitiva' },
      topics: [
        {
          id: 't3',
          title: 'El momento que lo cambió todo',
          blocks: [
            { type: 'highlight_verse', id: 'v3', reference: 'Génesis 32:24-28', text: 'Así se quedó Jacob solo; y luchó con él un varón hasta que rayaba el alba. Y cuando el varón vio que no podía con él, tocó en el sitio del encaje de su muslo, y se descoyuntó el muslo de Jacob mientras con él luchaba... Y él dijo: No te llamarás más Jacob, sino Israel; porque has luchado con Dios y con los hombres, y has vencido.' },
            { type: 'paragraph', id: 'p4', text: 'El texto es deliberadamente ambiguo: ¿quién es el "varón"? Oseas 12:4 dice fue un ángel. Pero el nombre que Jacob recibe — "Israel" (el que lucha con Dios) — y su propia declaración "He visto a Dios cara a cara, y fue librada mi alma" sugiere que fue una teofanía. Jacob luchó con el Cristo premortal — y se negó a soltar hasta ser bendecido. La cojera que quedó fue el precio y el recuerdo permanente de esa noche.' },
            { type: 'doctrine_box', id: 'db1', title: 'La Lucha como Metáfora de la Oración Persistente', content: 'La historia de Jacob en Jaboc es una de las imágenes más poderosas de la oración en toda la escritura. No la oración cómoda y rutinaria — sino la lucha honesta con Dios que no suelta hasta recibir bendición. Lucas 18:1-8 (la viuda y el juez injusto) usa el mismo principio. La transformación de Jacob en Israel ocurrió precisamente en su momento de mayor vulnerabilidad y honestidad ante Dios.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Las 12 Tribus — El Legado de Israel',
      intro: { romanNumeral: 'IV', heading: 'Un Hombre que se Convirtió en Nación', subheading: 'El pacto abrahámico continúa' },
      topics: [
        {
          id: 't4',
          title: 'Sus hijos son nuestros padres',
          blocks: [
            { type: 'paragraph', id: 'p5', text: 'Los 12 hijos de Jacob/Israel — de cuatro mujeres distintas — se convirtieron en las 12 tribus de Israel. Cada tribu lleva en su nombre y en su historia el carácter de su padre: Rubén el primogénito inestable, Leví el sacerdotal, Judá el de quien desciende Cristo, José el visionario, Benjamín el más amado. La profecía de Jacob sobre sus hijos en Génesis 49 es una de las profecías mesiánicas más tempranas de la Biblia.' },
            { type: 'key_points', id: 'kp1', title: 'El Convenio Abrahámico a través de Jacob', points: [
              'Dios confirmó el convenio de Abraham a Jacob en Betel (Génesis 28:13-15)',
              'Las 12 tribus son el cumplimiento de "una gran nación"',
              'Judá lleva el linaje mesiánico — de él desciende Cristo (Génesis 49:10)',
              'El trabajo de unir los palos de Efraín y Judá (Ezequiel 37:16) es literal en la obra restaurada',
            ]},
            { type: 'reflection', id: 'r1', prompt: '¿Qué aspecto de tu carácter necesita el mismo cambio de nombre que Jacob/Israel experimentó? ¿Hay algo en ti que Dios quiere renombrar de "suplantador" a "príncipe"?' },
          ],
        },
      ],
    },
  ],
}
