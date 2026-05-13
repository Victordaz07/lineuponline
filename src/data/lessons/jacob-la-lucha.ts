import type { Lesson } from '@/types/doctrine'

export const jacobLaLucha: Lesson = {
  id: 'jacob-la-lucha',
  moduleId: 'personajes-escrituras',
  title: 'La Lucha con el Ángel',
  subtitle: 'El momento que cambió su nombre',
  description: 'Una noche, solo en el río Jaboc, Jacob luchó hasta el amanecer con un ser divino. No cedió. Y su nombre cambió: de Jacob (suplantador) a Israel (el que luchó con Dios). El cambio de nombre es el cambio de identidad.',
  level: 'INTERMEDIO',
  icon: '🤼',
  duration: 15,
  order: 3412,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'jacob-israel',
  studySections: [
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
  ],
}
