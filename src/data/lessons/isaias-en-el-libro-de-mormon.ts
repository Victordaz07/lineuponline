import type { Lesson } from '@/types/doctrine'

export const isaiasEnElLibroDeMormon: Lesson = {
  id: 'isaias-en-el-libro-de-mormon',
  moduleId: 'personajes-escrituras',
  title: 'Isaías en el Libro de Mormón',
  subtitle: 'Por qué Nefi, Jacob y Jesús citaron a Isaías tan extensamente',
  description: 'El Libro de Mormón contiene más de Isaías que cualquier otro libro fuera de la Biblia. 2 Nefi 12-24 son Isaías 2-14. 3 Nefi 22 es Isaías 54. La clave del doble cumplimiento explica por qué estos profetas recurrieron a él una y otra vez.',
  level: 'AVANZADO',
  icon: '📖',
  duration: 35,
  order: 4013,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  submoduleGroup: 'isaias',
  studySections: [
    {
      id: 's1',
      title: 'Cuánto del Libro de Mormón ES Isaías',
      intro: {
        romanNumeral: 'I',
        title: 'El Profeta más Abundante del Libro de Mormón',
        paragraphs: [
          'Ningún otro profeta bíblico aparece con tanta extensión en el Libro de Mormón como Isaías.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'La presencia masiva de Isaías',
          blocks: [
            {
              type: 'paragraph',
              text: 'El Libro de Mormón contiene 21 capítulos completos copiados directamente de Isaías, más decenas de citas y alusiones a lo largo del texto. En proporción al tamaño total del libro, Isaías representa una fracción extraordinaria del contenido escritural del Libro de Mormón. 2 Nefi 12-24 son una reproducción casi directa de Isaías 2-14.',
            },
            {
              type: 'key_points',
              title: 'Las apariciones de Isaías en el Libro de Mormón',
              points: [
                '1 Nefi 20-21 = Isaías 48-49 (citados por Nefi para consolar a su familia en el desierto)',
                '2 Nefi 7-8 = Isaías 50-51 (Jacob los cita para enseñar sobre el Mesías)',
                '2 Nefi 12-24 = Isaías 2-14 (Nefi los copia completos en sus planchas)',
                'Mosíah 14 = Isaías 53 (Abinadí lo cita completo antes de morir)',
                '3 Nefi 20-22 = Isaías 52, 54 (el Cristo resucitado lo cita en persona)',
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La pregunta del texto de Isaías',
              body: 'Los críticos observan que algunas palabras del Libro de Mormón en sus citas de Isaías siguen la Versión del Rey Jacobo de 1611 en vez de reflejar el hebreo original. La respuesta más razonable: José Smith tradujo por inspiración, usando el lenguaje bíblico familiar al lector anglosajón del siglo XIX cuando el significado era equivalente — del mismo modo que citamos escrituras en nuestra propia lengua al enseñar. Las variantes significativas entre el texto del Libro de Mormón y el texto masorético son en muchos casos aclaraciones doctrinales importantes.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Por qué Nefi y Jacob citan a Isaías',
      intro: {
        romanNumeral: 'II',
        title: 'Isaías como Mapa Espiritual',
        paragraphs: [
          'Nefi y Jacob usaron a Isaías no como ejercicio académico — sino como respuesta pastoral a las crisis reales de su pueblo.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'El uso pastoral de Isaías por Nefi',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '1 Nefi 19:23',
              text: 'Y les hablo estas cosas para el provecho de su alma, pues que pueda persuadirlos a recordar al Señor su Redentor. Por tanto, hablo a todas las casas de Israel, si así fuere que pudieran tener estos escritos.',
            },
            {
              type: 'paragraph',
              text: 'Nefi cita Isaías 48-49 inmediatamente después del relato del viaje al desierto. Su familia se sentía abandonada, dispersa, lejos de su tierra. Isaías 48-49 habla precisamente a esa experiencia: Israel en el exilio, preguntándose si Dios los ha olvidado. Nefi no citó a Isaías para demostrar erudición — lo citó porque Isaías había hablado exactamente a la situación de su pueblo.',
            },
            {
              type: 'paragraph',
              text: 'Jacob en 2 Nefi 6-10 cita Isaías 49-52 para dar un panorama completo de la misión de Israel y el rol del Mesías. Jacob enmarca Isaías con su propio comentario antes y después — un patrón que anticipa el método del Libro de Mormón: las Escrituras más el comentario inspirado del profeta que las aplica.',
            },
            {
              type: 'compare_grid',
              title: 'Nefi y Jacob — dos maneras de usar a Isaías',
              left: {
                title: 'Nefi',
                points: [
                  'Copia los capítulos en sus planchas para preservarlos',
                  'Los usa para "likar" (aplicar) a su propia situación',
                  'Se enfoca en la promesa de congregación futura',
                  'Añade comentario en 2 Nefi 25 explicando por qué los copió',
                ],
              },
              right: {
                title: 'Jacob',
                points: [
                  'Cita para enseñar sobre el Mesías y la expiación',
                  'Se enfoca en el propósito eterno de Israel',
                  'Conecta Isaías con la doctrina de los dos convenios',
                  'Su sermón en 2 Nefi 9 es la mayor exposición de la expiación en el Libro de Mormón',
                ],
              },
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Por qué Jesús cita a Isaías en 3 Nefi',
      intro: {
        romanNumeral: 'III',
        title: 'El Cristo Resucitado y el Profeta Antiguo',
        paragraphs: [
          'En 3 Nefi 20-22, el Cristo resucitado cita Isaías 52 y 54 en persona — y explica su cumplimiento.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'El uso de Isaías por el Cristo resucitado',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '3 Nefi 23:1-3',
              text: 'Y aconteció que les mandó que escribieran las palabras que les había declarado... Escudriñad diligentemente las palabras de Isaías. Sí, y todas las Escrituras que Isaías escribió, las cuales, sí, verdaderamente os digo, las cuales han de ser proclamadas a todos los pueblos.',
            },
            {
              type: 'paragraph',
              text: 'Cuando el Cristo resucitado visitó a los nefitas, no les enseñó nueva doctrina abstracta — les explicó las Escrituras que ya tenían. En 3 Nefi 20-22, cita Isaías 52 ("¡Cuán hermosos son sobre los montes los pies del que anuncia la paz!") y todo Isaías 54 ("Regocíjate, oh estéril, la que no daba a luz"). Su mensaje: estas profecías ahora están comenzando a cumplirse — y el Libro de Mormón es parte de ese cumplimiento.',
            },
            {
              type: 'doctrine_box',
              title: '3 Nefi 22 = Isaías 54',
              body: 'El Cristo resucitado cita Isaías 54 completo en 3 Nefi 22 — un capítulo sobre la restauración de Israel, los convenios eternos, y la promesa de que ningún arma forjada contra el pueblo del Señor prosperará. Al citarlo en persona, Jesús está diciendo: esto es para ti, aquí, ahora. Los convenios de Dios son irrompibles. "Mi misericordia no se apartará de ti, ni el pacto de mi paz será removido."',
            },
            {
              type: 'reflection',
              prompt: '¿Qué significa que Jesucristo en persona mandó a estudiar a Isaías? Si el Hijo de Dios resucitado consideró este estudio importante, ¿cómo debería eso cambiar tu prioridad al leer Isaías?',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La clave del doble cumplimiento',
      intro: {
        romanNumeral: 'IV',
        title: 'Cumplimiento Cercano y Cumplimiento Lejano',
        paragraphs: [
          'La razón por la que Isaías es relevante en cada época: sus profecías tienen capas de cumplimiento.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'El principio del doble — y triple — cumplimiento',
          blocks: [
            {
              type: 'paragraph',
              text: 'Nefi explica en 2 Nefi 25:1 que las profecías de Isaías tienen un patrón de cumplimiento múltiple: inmediato (para los contemporáneos de Isaías), mesiánico (en la vida de Cristo), y en los últimos días (en nuestra época). Esta estructura es la razón por la que los profetas del Libro de Mormón pudieron aplicar Isaías a su propia situación en el siglo VI a.C. — y por la que nosotros podemos aplicarlo hoy.',
            },
            {
              type: 'steps',
              title: 'Las tres capas de cumplimiento de Isaías',
              steps: [
                'Cumplimiento cercano (siglo VIII a.C.): Isaría habla a la crisis de Asiria, el exilio babilónico, la caída de los reinos corruptos de Israel y Judá',
                'Cumplimiento mesiánico (vida de Cristo): el Siervo Sufriente, el Príncipe de Paz, la voz en el desierto — todo se cumple en Jesús',
                'Cumplimiento en los últimos días: la congregación de Israel, el templo, el libro sellado, la segunda venida — la agenda de nuestra época',
              ],
            },
            {
              type: 'deep_dive',
              title: 'El Libro de Mormón como clave de Isaías',
              paragraphs: [
                'Nefi afirma en 2 Nefi 25:5 que es difícil entender a Isaías "a menos que seas instruido en la manera de los judíos." El Libro de Mormón provee exactamente esa instrucción: sus profetas, educados en la tradición hebrea de Jerusalén, muestran cómo leer a Isaías en sus capas de cumplimiento.',
                'Cada vez que un profeta del Libro de Mormón cita a Isaías con un contexto narrativo (Nefi en el desierto, Abinadí ante el rey Noé, Cristo resucitado en el templo), estamos viendo una demostración en vivo de cómo aplicar las escrituras antiguas a la experiencia presente.',
                'Esta es la contribución única del Libro de Mormón al estudio de Isaías: no solo preserva el texto — lo interpreta, lo aplica y lo cumple. El Libro de Mormón no es solo un testimonio de Cristo; es también un manual para leer al profeta que más claramente profetizó de Cristo.',
              ],
            },
          ],
        },
      ],
    },
  ],
}
