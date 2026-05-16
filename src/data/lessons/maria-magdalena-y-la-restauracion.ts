import type { Lesson } from '@/types/doctrine'

export const mariaMagdalenaYLaRestauracion: Lesson = {
  id: 'maria-magdalena-y-la-restauracion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'maria-magdalena',
  title: 'María Magdalena y la Restauración',
  subtitle: 'La testigo primitiva y el papel restaurado de la mujer en el evangelio',
  description:
    'María Magdalena como primera testigo de la resurrección, Emma Smith como modelo de discipulado femenino en la Restauración, el papel de las mujeres en la Sociedad de Socorro, y la enseñanza de que el testimonio y la fidelidad no dependen de cargo eclesiástico.',
  level: 'INTERMEDIO',
  icon: '✨',
  duration: 25,
  order: 5314,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'María Magdalena como Modelo Restaurado',
      intro: {
        romanNumeral: 'I',
        title: 'Lo que la Restauración ve en María Magdalena',
        paragraphs: [
          'La Restauración devuelve a María Magdalena su identidad bíblica: no la penitente sexual del Papa Gregorio, sino la discípula fiel, la patrocinadora del ministerio, la primera testigo de la resurrección.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La visión restaurada de la mujer testigo',
          blocks: [
            {
              type: 'paragraph',
              text: 'La enseñanza restaurada sobre el papel de la mujer en el evangelio no comienza en el siglo XIX — comienza en el primer siglo, con las mujeres de Lucas 8:1-3 y Juan 20. La Restauración no inventa un papel nuevo para la mujer en el plan de Dios: recupera el papel que el Nuevo Testamento describe y que la tradición posterior oscureció. María Magdalena es el símbolo más poderoso de ese rescate: la mujer que el error humano convirtió en penitente sexual era en realidad la primera testigo de la resurrección.',
            },
            {
              type: 'doctrine_box',
              title: 'La enseñanza restaurada sobre el testimonio',
              body: 'La Restauración afirma que el testimonio espiritual — el don de saber, por el Espíritu Santo, que Jesucristo resucitó — es accesible a toda persona, sin distinción de género ni de cargo eclesiástico. DyC 46:13-14 lista entre los dones del Espíritu "a algunos se les da saber que Jesucristo es el Hijo de Dios... y a otros, creer en las palabras de ellos." El testimonio de María Magdalena — "he visto al Señor" — es el modelo de ambos tipos: el conocimiento directo y el testimonio que produce fe en otros.',
            },
            {
              type: 'compare_grid',
              title: 'María Magdalena: tradición vs. texto bíblico',
              left: {
                title: 'La tradición posterior al siglo VI',
                items: [
                  'Pecadora sexual arrepentida',
                  'Figura periférica del ministerio',
                  'Ejemplo de misericordia hacia los pecadores',
                  'Su pasado oscurece su testimonio',
                ],
              },
              right: {
                title: 'Los textos del Nuevo Testamento',
                items: [
                  'Liberada de sufrimiento por Cristo',
                  'Patrocinadora central del ministerio',
                  'Primera testigo de la resurrección',
                  'Mandatada por Cristo para anunciar el evangelio',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Emma Smith y DyC 25',
      intro: {
        romanNumeral: 'II',
        title: 'DyC 25:3 — La Mujer Escogida y su Llamamiento',
        paragraphs: [
          'Emma Smith recibió una revelación personal en DyC 25 que define su papel en la Restauración. Como María Magdalena, su discipulado no dependía de un cargo sacerdotal — dependía de su fidelidad y su don.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'Emma Smith como paralelo de María Magdalena',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'DyC 25:3, 7-8',
              text: 'Escucha la voz del Señor tu Dios mientras te hablo, Emma Smith, mi hija; porque, en verdad, así te digo: Todos aquellos que reciben mis mandamientos y los guardan son elegidos... Y a ti se te dará también un don que es la traducción, el cual también es un privilegio para ti según que esté dispuesto en la revelación en mi Dios; y no pondrás mano en la escritura de mi siervo, sino que harás el bien a la iglesia.',
            },
            {
              type: 'paragraph',
              text: 'El paralelo entre María Magdalena y Emma Smith no es forzado. Ambas fueron las mujeres más cercanas a los instrumentos divinos de su dispensación. Ambas contribuyeron con recursos materiales. Ambas recibieron comisiones directas del Señor. Ambas enfrentaron el escepticismo de sus contemporáneos. Y ambas son en el registro histórico de su época figuras más complejas y significativas de lo que la narrativa popular posterior reconoció.',
            },
            {
              type: 'leader_quote',
              quote: 'Emma Smith fue una mujer dotada de intelecto extraordinario, carácter firme y fe genuina. Su vida es un testimonio de que el discipulado tiene el mismo costo y la misma recompensa para hombres y mujeres.',
              name: 'Russell M. Nelson',
              role: 'Presidente de la Iglesia',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Sociedad de Socorro y el Discipulado Femenino',
      intro: {
        romanNumeral: 'III',
        title: 'El Papel Restaurado de la Mujer en el Ministerio',
        paragraphs: [
          'La fundación de la Sociedad de Socorro en 1842 no fue la creación de una organización auxiliar — fue la restauración de un papel que las mujeres habían tenido en el ministerio de Cristo desde el principio.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'De Lucas 8 a la Sociedad de Socorro',
          blocks: [
            {
              type: 'paragraph',
              text: 'José Smith al fundar la Sociedad de Socorro en marzo de 1842 dijo: "la Sociedad de Socorro no fue organizada meramente para el alivio de los pobres, sino para salvar almas." La conexión con el ministerio de las mujeres en los Evangelios es directa: las mujeres de Lucas 8 no solo contribuían con sus bienes — viajaban, presenciaban, testificaban. La Sociedad de Socorro restaura ese modelo de ministerio integral.',
            },
            {
              type: 'steps',
              title: 'El paralelo entre el ministerio en Lucas 8 y la Sociedad de Socorro',
              steps: [
                'Lucas 8: mujeres que habían experimentado directamente el poder de Cristo',
                'Sociedad de Socorro: mujeres que testifican de Cristo desde su propia experiencia',
                'Lucas 8: mujeres que contribuyen con sus bienes al ministerio',
                'Sociedad de Socorro: ministerio de servicio y sostén a la obra de Dios',
                'Lucas 8: mujeres presentes en los momentos más críticos',
                'Sociedad de Socorro: presencia constante en los momentos de necesidad de la familia humana',
              ],
            },
            {
              type: 'highlight_verse',
              reference: 'DyC 25:10, 12',
              text: 'Y si eres fiel y caminas en los senderos de la virtud delante de mí, recibirás de mi mano las cosas que pediste... Y en esto hallarás tu gozo — que los santos se regocijaran en ti, y yo me regocijaré de ti.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Testimonio que No Depende de Cargo',
      intro: {
        romanNumeral: 'IV',
        title: 'María Magdalena como Modelo Universal de Discipulado',
        paragraphs: [
          'El testimonio de María Magdalena — "he visto al Señor" — es el modelo de todo testigo del evangelio. No requería ordenación. No dependía de cargo. Dependía de haber estado presente y de tener la honestidad de decir lo que sabía.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: '"He visto al Señor" — el testimonio suficiente',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Juan 20:18',
              text: 'Fue entonces María Magdalena para dar a los discípulos las nuevas de que había visto al Señor, y que él le había dicho estas cosas.',
            },
            {
              type: 'paragraph',
              text: 'La fórmula "he visto al Señor" (heōraka ton Kyrion) se convirtió en la forma estándar del testimonio apostólico en el Nuevo Testamento. Pablo la usa en 1 Corintios 9:1: "¿No soy apóstol? ¿No he visto a Jesús el Señor nuestro?" El criterio para ser apóstol era haber visto al Resucitado. María Magdalena cumplió ese criterio antes que cualquier apóstol varón. La tradición patrística que la llama "apóstola de los apóstoles" estaba siendo precisa, no solo poética.',
            },
            {
              type: 'deep_dive',
              title: 'El testimonio femenino en el contexto restauracionista',
              paragraphs: [
                'En el siglo primero, el testimonio de una mujer no era admisible en los tribunales judíos. Este dato es uno de los argumentos más fuertes para la autenticidad de los relatos de la resurrección: ningún fabricador habría elegido a una mujer como primer testigo si estuviera construyendo un caso legal.',
                'La Restauración afirma que el testimonio espiritual no opera bajo las reglas de los tribunales humanos. El Espíritu Santo puede confirmar la verdad a cualquier persona que busca honestamente. El género no es un filtro para la revelación divina.',
                'La enseñanza del Élder Dallin H. Oaks de que "las mujeres que dirigen bajo la dirección de quienes tienen el sacerdocio ejercen el poder del sacerdocio" establece un marco doctrinal en el que el ministerio de María Magdalena — dirigida por Cristo directamente — tiene sentido pleno dentro del plan de Dios.',
              ],
            },
            {
              type: 'key_points',
              title: 'Lo que María Magdalena enseña a la Restauración',
              points: [
                'El discipulado genuino nace de una experiencia directa con el poder de Cristo, no de herencia cultural',
                'La fidelidad en los momentos oscuros precede la visión de los momentos de luz',
                'El testimonio "he visto al Señor" es accesible a toda persona que busca con fidelidad',
                'La posición social o de género no determina a quién Cristo elige para los momentos más significativos',
                'El servicio con los propios recursos — tiempo, talento, dinero — es parte integral del discipulado',
                'El papel de testigo y heraldo del evangelio pertenece a toda persona llamada por Cristo, independientemente de cargo formal',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Cómo cambia la forma en que entiendes tu propio llamamiento como testigo del evangelio cuando lo ves a través de la historia de María Magdalena? ¿Qué parte de su experiencia — la liberación, la fidelidad, la presencia en la oscuridad, o el mandato de "ve y di" — resuena más con tu propia experiencia?',
            },
          ],
        },
      ],
    },
  ],
}
