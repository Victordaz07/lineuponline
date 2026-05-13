import type { Lesson } from '@/types/doctrine'

export const lehiElLegado: Lesson = {
  id: 'lehi-el-legado',
  moduleId: 'personajes-escrituras',
  title: 'El Legado de Lehi',
  subtitle: 'Una decisión que creó dos civilizaciones durante mil años',
  description:
    'Cuando Lehi dejó Jerusalén en el año 600 a.C., no sabía que su acto de obediencia generaría dos naciones en un continente nuevo que durarían un milenio. Los nefitas y los lamanitas, las guerras y los períodos de paz, el templo construido por Nefi, la visita de Cristo a las Américas — todo se origina en la decisión de ese hombre de creer una voz que nadie más escuchaba. Esta lección examina el alcance total del legado de Lehi.',
  level: 'AVANZADO',
  icon: '🌎',
  duration: 30,
  order: 7013,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'De una familia a dos civilizaciones',
      intro: {
        romanNumeral: 'I',
        title: 'La escala del legado de Lehi',
        paragraphs: [
          'El Libro de Mormón cubre aproximadamente mil años de historia de los descendientes de Lehi en las Américas. Dos naciones principales — nefitas y lamanitas — surgieron de la división entre los hijos de Lehi. La decisión de un hombre de obedecer a Dios generó una civilización entera.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'Mil años de historia nacidos de una obediencia',
          blocks: [
            {
              type: 'paragraph',
              text: 'Cuando Lehi salió de Jerusalén alrededor del año 600 a.C. con su familia, su grupo total no superaba quizás veinte o treinta personas. Para el año 400 d.C., sus descendientes habían llenado un continente, construido ciudades y templos, registrado profecías y guerras, recibido la visita personal de Jesucristo resucitado, y acumulado mil años de historia espiritual. Todo el registro de ese milenio — el Libro de Mormón — existe porque un hombre creyó en una voz y actuó en consecuencia.',
            },
            {
              type: 'timeline',
              items: [
                { label: '600 a.C.', text: 'Lehi y su familia parten de Jerusalén hacia el desierto', ref: '1 Nefi 2', color: 'gold' },
                { label: '592 a.C.', text: 'La familia llega a la tierra prometida en las Américas', ref: '1 Nefi 18', color: 'gold' },
                { label: '559 a.C.', text: 'Nefi funda la Ciudad de Nefi; comienza la separación nefita-lamanita', ref: '2 Nefi 5', color: 'blue' },
                { label: '33 d.C.', text: 'Cristo visita a los nefitas en la tierra prometida', ref: '3 Nefi 11', color: 'gold' },
                { label: '385 d.C.', text: 'Mormón abrevía los registros antes de la destrucción nefita', ref: 'Mormón 6', color: 'red' },
                { label: '421 d.C.', text: 'Moroni entierra las planchas — fin del registro de los descendientes de Lehi', ref: 'Moroni 10', color: 'red' },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La tierra prometida y su promesa condicional',
              body: '2 Nefi 1:9-10 registra la promesa divina ligada a la tierra que Lehi recibió: "Por tanto, yo, el Señor, en verdad te prometo, y también a tus descendientes, y también a los que vendrán con vosotros de las generaciones de Jerusalén, mientras traigan consigo mis mandamientos, prosperarán en la tierra; y serán mantenidos como gente escogida. Pero cuando el tiempo llegue que caigan en la incredulidad, después de haber recibido tales grandes bendiciones del Señor, habrán maldición sobre la tierra para ellos." Esta promesa condicional se cumplió con precisión: cada período de prosperidad nefita correspondió a su fidelidad; cada período de destrucción, a su apostasía.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La división: nefitas y lamanitas',
      intro: {
        romanNumeral: 'II',
        title: 'Dos naciones de una familia',
        paragraphs: [
          'La separación entre los hijos de Lehi que comenzó en el desierto — Nefi obediente, Lamán y Lemuel rebeldes — se convirtió en la división entre dos civilizaciones. Esta no era simplemente una disputa familiar: tenía consecuencias civilizacionales que duraron un milenio.',
        ],
      },
      topics: [
        {
          id: 't2',
          title: 'La raíz de una división que duró mil años',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Nefi 5:5-6',
              text: 'Y aconteció que el Señor me advirtió, a mí, Nefi, que debía partir de ellos y huir al desierto, y todo aquel que quisiese ir conmigo. Por consiguiente, aconteció que yo, Nefi, tomé a mi familia, y también a Zoram y su familia, y también a mis hermanos Jacob y José, y también a mis hermanas, y también a todos los que quisieron ir conmigo.',
            },
            {
              type: 'paragraph',
              text: 'La separación de 2 Nefi 5 fue una huida por la vida de Nefi. Lamán y Lemuel, que habían intentado matarlo en el barco y en el desierto, representaban ahora una amenaza real. La división no fue ideológica primero — fue física: Nefi huyó con los que querían seguirlo. Lo que comenzó como una separación geográfica se convirtió en una divergencia cultural, religiosa y civilizacional que el libro registra con honestidad descarnada: ninguno de los dos grupos fue perfecto.',
            },
            {
              type: 'compare_grid',
              title: 'Nefitas vs. Lamanitas — el patrón del Libro de Mormón',
              left: {
                label: 'Nefitas (descendientes de Nefi)',
                points: [
                  'Guardaban los registros y las escrituras',
                  'Construyeron templos y practicaron el sacerdocio',
                  'Períodos de gran prosperidad espiritual y material',
                  'Períodos de apostasía orgullo y destrucción',
                  'Fueron finalmente destruidos por los lamanitas en 385 d.C.',
                ],
              },
              right: {
                label: 'Lamanitas (descendientes de Lamán)',
                points: [
                  'Perdieron la mayor parte del evangelio escrito',
                  'Vivieron en mayor rusticidad según el texto',
                  'Recibieron la maldición de la dureza espiritual',
                  'Pero también períodos de conversión masiva (Alma 17-27)',
                  'Son los ancestros de muchos pueblos americanos indígenas según la tradición',
                ],
              },
            },
            {
              type: 'reflection',
              prompt: '¿Cómo interpretas el hecho de que los descendientes de Lamán y Lemuel — los hijos más difíciles de Lehi — sobrevivieran como pueblo cuando los descendientes del fiel Nefi fueron destruidos? ¿Qué dice eso sobre los planes de Dios con las familias y los pueblos?',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La visita de Cristo: el clímax del legado de Lehi',
      intro: {
        romanNumeral: 'III',
        title: '3 Nefi 11 — Lo que ocurrió en la tierra que Lehi encontró',
        paragraphs: [
          'El momento más extraordinario en la historia de los descendientes de Lehi fue la aparición personal de Jesucristo resucitado en la tierra prometida. Cristo visitó al "otro rebaño" del que habló en Juan 10:16. Y ese rebaño existía porque Lehi obedeció.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'Las Américas como tierra del segundo ministerio de Cristo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '3 Nefi 15:21',
              text: 'Y veréis que yo soy aquel de quien Moisés habló, diciendo: El Señor vuestro Dios os levantará un profeta de entre vuestros hermanos, semejante a mí; a él oiréis en todo lo que os hable. Y acontecerá que toda alma que no oyere a aquel profeta, será cortada de entre el pueblo.',
            },
            {
              type: 'paragraph',
              text: 'En 3 Nefi 11-26, Jesucristo descendió del cielo ante una multitud de descendientes de Lehi y estableció su iglesia entre ellos. Les dio el bautismo, la Santa Cena, y el don del Espíritu Santo. Les enseñó el Sermón del Monte y otros discursos. Sanó a sus enfermos. Bendijo a sus niños. El ministerio de Cristo en las Américas fue tan completo y poderoso como su ministerio en Palestina — y ocurrió en la tierra que Lehi encontró por obediencia.',
            },
            {
              type: 'doctrine_box',
              title: '"Las otras ovejas" de Juan 10:16',
              body: 'En Juan 10:16, Cristo dijo a los judíos de Palestina: "También tengo otras ovejas que no son de este redil; aquéllas también debo traer, y oirán mi voz." En 3 Nefi 15:21, Cristo mismo explica a los nefitas que él se refería a ellos. El versículo más misterioso del Evangelio de Juan tiene su respuesta en el Libro de Mormón. La profecía de Juan y su cumplimiento forman un arco que conecta la Biblia con el Libro de Mormón — y ambos se origina en la decisión de Lehi de partir de Jerusalén.',
            },
            {
              type: 'leader_quote',
              quote: 'El Libro de Mormón es el otro testamento de Jesucristo. Cuando Lehi partió de Jerusalén, Dios estaba preparando el escenario para el segundo gran testimonio de la vida y el ministerio de su Hijo resucitado.',
              name: 'Ezra Taft Benson',
              role: '"The Book of Mormon — Keystone of Our Religion"',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La promesa de la tierra prometida',
      intro: {
        romanNumeral: 'IV',
        title: 'Un continente con un destino sagrado',
        paragraphs: [
          'Lehi recibió una promesa sobre la tierra prometida que trasciende a su familia y alcanza a todas las naciones que vendrán a ese continente. Es una de las declaraciones más extraordinarias sobre el destino de las Américas en toda la escritura.',
        ],
      },
      topics: [
        {
          id: 't4',
          title: 'La promesa que abarca un continente entero',
          blocks: [
            {
              type: 'highlight_verse',
              reference: '2 Nefi 1:7',
              text: 'Por tanto, este lugar deberá ser una tierra de libertad para todos; y nunca habrá reyes sobre esta tierra que la gobiernen, suscitados por los gentiles. Y yo soy el Señor vuestro Dios; y juro en mi propia fortaleza que ninguna nación vendrá a esta tierra para poseerla, a no ser que sean guiadas por mi mano.',
            },
            {
              type: 'paragraph',
              text: 'La promesa de 2 Nefi 1:7 tiene un alcance que va mucho más allá de la familia de Lehi: toda nación que venga a esa tierra será guiada por la mano de Dios. La tierra prometida no es solo para los descendientes de Lehi — es el escenario divino donde la libertad religiosa que hace posible la Restauración emergería siglos después. Los profetas del Libro de Mormón, escribiendo para nuestros días, vieron que ese continente sería el lugar donde el evangelio restaurado emergería.',
            },
            {
              type: 'key_points',
              title: 'Las dimensiones del legado de Lehi',
              points: [
                'Civilizacional — dos naciones que llenaron un continente durante mil años',
                'Escritural — el Libro de Mormón es el registro de su familia por 1,000 años',
                'Cristológico — la visita de Cristo a las Américas ocurrió en su tierra prometida',
                'Profético — sus propias visiones y las de su familia son parte del canon restaurado',
                'Restauracional — las planchas de oro que preservó su familia llegaron a José Smith',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué sientes cuando contemplas que la visita de Cristo a las Américas — narrada en 3 Nefi — fue posible porque Lehi obedeció en el año 600 a.C.? ¿Cómo cambia eso tu lectura del "iré y haré" de Nefi y el sacrificio de Lehi?',
            },
          ],
        },
      ],
    },
  ],
}
