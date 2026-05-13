import type { Lesson } from '@/types/doctrine'

export const laDivinidad: Lesson = {
  id: 'la-divinidad',
  moduleId: 'temas-profundos',
  title: 'La Divinidad',
  subtitle: 'Tres Seres distintos — no la Trinidad de Nicea',
  description:
    'El Concilio de Nicea (325 d.C.) redefinió a Dios como una sustancia trinitaria incognoscible. La Primera Visión de José Smith revirtió 1,500 años de teología en treinta segundos. Elohim, Jehová y el Espíritu Santo son tres Seres distintos, unidos en propósito, amor y testimonio — no en sustancia.',
  level: 'AVANZADO',
  icon: '🌟',
  duration: 70,
  order: 7,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Concilio de Nicea y lo que Se Perdió',
      intro: {
        romanNumeral: 'I',
        heading: '325 d.C. — El Año que Redefinió a Dios',
        subheading: 'La herejía que se convirtió en ortodoxia',
      },
      topics: [
        {
          id: 't1',
          title: 'Lo que sucedió en Nicea',
          blocks: [
            {
              type: 'paragraph',
              id: 'p1',
              text: 'El Concilio de Nicea (325 d.C.) fue convocado por el Emperador Constantino para resolver una disputa teológica que amenazaba la unidad del Imperio Romano. Arrio sostenía que el Hijo era creado y subordinado al Padre. Atanasio defendía que eran "de la misma sustancia" (homoousios). El Concilio decidió a favor de Atanasio — no necesariamente por razones teológicas, sino en parte por razones políticas.',
            },
            {
              type: 'paragraph',
              id: 'p2',
              text: 'El Credo Niceno resultante declaró al Hijo "de la misma sustancia que el Padre" — una frase que no aparece en ninguna escritura. Cuatro siglos después, el Credo Atanasiano añadió al Espíritu Santo, completando la Trinidad clásica: tres "personas" (hypostases) en una sola "sustancia" (ousia). Dios se volvió filosóficamente indefinible.',
            },
            {
              type: 'doctrine_box',
              id: 'db1',
              title: 'El Credo Atanasiano — en sus propias palabras',
              content: '"Veneramos un Dios en la Trinidad, y la Trinidad en Unidad; no confundiendo las Personas, ni dividiendo la Sustancia. Pues la Persona del Padre es una; la del Hijo, otra; la del Espíritu Santo, otra. Pero la divinidad del Padre, del Hijo y del Espíritu Santo es toda una, igual la gloria, co-eterna la majestad." (Siglo V-VI d.C.) — Nótese: ninguna de estas palabras ni conceptos aparece en las Escrituras.',
            },
          ],
        },
        {
          id: 't2',
          title: 'La Apostasía fue también filosófica',
          blocks: [
            {
              type: 'paragraph',
              id: 'p3',
              text: 'La Gran Apostasía no fue solo la pérdida de la autoridad del sacerdocio — fue la corrupción del conocimiento de Dios mismo. Cuando los Padres de la Iglesia adoptaron las categorías filosóficas griegas (sustancia, accidente, hipostasis) para describir a Dios, reemplazaron el Dios personal y revelador de Abraham, Isaac y Jacob por el Primer Motor Inmóvil de Aristóteles.',
            },
            {
              type: 'leader_quote',
              id: 'lq1',
              author: 'Élder Jeffrey R. Holland',
              source: 'Conferencia General, octubre 2009',
              text: 'Testificamos en sencillez que Dios es el Padre Eterno, literalmente el Padre de nuestros espíritus, que Su Hijo Jesucristo nació de una mujer virgen, que el Espíritu Santo es un personaje distinto de los dos primeros. Eso es lo que la Primera Visión enseñó. Y eso es lo que enseña la Biblia, si la lees sin los filtros del siglo IV.',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Biblia y los Tres',
      intro: {
        romanNumeral: 'II',
        heading: 'Lo que las Escrituras Dicen',
        subheading: 'Evidencia bíblica de tres Seres distintos',
      },
      topics: [
        {
          id: 't3',
          title: 'El Bautismo de Jesús — tres en un momento',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v1',
              reference: 'Mateo 3:16-17',
              text: 'Y Jesús, después que fue bautizado, subió luego del agua; y he aquí los cielos le fueron abiertos, y vio al Espíritu de Dios que descendía como paloma, y venía sobre él. Y hubo una voz de los cielos, que decía: Este es mi Hijo amado, en quien tengo complacencia.',
            },
            {
              type: 'paragraph',
              id: 'p4',
              text: 'En el bautismo de Jesús, los tres miembros de la Divinidad aparecen simultáneamente en tres lugares diferentes: el Hijo en el agua, el Espíritu descendiendo como paloma, el Padre hablando desde los cielos. Si fueran una sola sustancia, este versículo no tendría sentido. La Trinidad clásica no puede explicar este momento sin contorsiones filosóficas.',
            },
          ],
        },
        {
          id: 't4',
          title: 'Esteban ve a los dos',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v2',
              reference: 'Hechos 7:55-56',
              text: 'Pero Esteban, lleno del Espíritu Santo, puestos los ojos en el cielo, vio la gloria de Dios, y a Jesús que estaba a la diestra de Dios, y dijo: He aquí, veo los cielos abiertos, y al Hijo del Hombre que está a la diestra de Dios.',
            },
            {
              type: 'paragraph',
              id: 'p5',
              text: 'Esteban, el primer mártir cristiano, vio al Padre y al Hijo como dos Seres distintos. "La gloria de Dios" (el Padre) y "Jesús que estaba a la diestra de Dios" — dos entidades separadas, en dos lugares diferentes (aunque uno al lado del otro). Esta es visión directa, no metáfora.',
            },
          ],
        },
        {
          id: 't5',
          title: 'Juan 17 — la unidad real',
          blocks: [
            {
              type: 'highlight_verse',
              id: 'v3',
              reference: 'Juan 17:21-22',
              text: 'Para que todos sean uno; como tú, oh Padre, en mí, y yo en ti, que también ellos sean uno en nosotros; para que el mundo crea que tú me enviaste. La gloria que me diste, yo les he dado, para que sean uno, así como nosotros somos uno.',
            },
            {
              type: 'paragraph',
              id: 'p6',
              text: 'Cristo oró para que Sus discípulos sean "uno" como Él y el Padre son "uno". Si esta unidad significa unidad de sustancia, entonces Cristo estaba orando para que Sus discípulos literalmente se fusionaran en un solo ser — lo cual es absurdo. Claramente, la "unidad" a la que Cristo se refiere es unidad de propósito, amor, testimonio y voluntad. Los miembros del Quórum de los Doce son "uno" en este sentido — sin perder su individualidad.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'La Primera Visión como Respuesta Definitiva',
      intro: {
        romanNumeral: 'III',
        heading: 'La Primavera de 1820',
        subheading: 'Treinta segundos que revirtieron quince siglos',
      },
      topics: [
        {
          id: 't6',
          title: 'Lo que José vio',
          blocks: [
            {
              type: 'paragraph',
              id: 'p7',
              text: 'José Smith, de 14 años, fue al bosque con una pregunta simple: ¿cuál iglesia debo unirme? Lo que recibió fue la respuesta a la pregunta teológica más fundamental de la historia humana: ¿Quién y qué es Dios? Vio a dos personajes distintos — el Padre presentando al Hijo. No una voz de los cielos. No una presencia difusa. Dos Seres glorificados, separados, personales, que hablaron con un muchacho por nombre.',
            },
            {
              type: 'leader_quote',
              id: 'lq2',
              author: 'Presidente Gordon B. Hinckley',
              source: 'Conferencia General, abril 1998',
              text: 'Esta fue la más grande teofanía que jamás haya ocurrido en toda la historia del mundo. Fue más grande que cualquier cosa que hubiera ocurrido antes. Revirtió 1,800 años de especulación filosófica sobre la naturaleza de Dios.',
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Los Tres — Sus Roles Distintos',
      intro: {
        romanNumeral: 'IV',
        heading: 'Elohim, Jehová y el Espíritu Santo',
        subheading: 'Tres Seres, tres funciones, una misión',
      },
      topics: [
        {
          id: 't7',
          title: 'Los tres roles en la economía divina',
          blocks: [
            {
              type: 'compare_grid',
              id: 'cg1',
              title: 'Los Tres Miembros de la Divinidad',
              rows: [
                {
                  label: 'Elohim — El Padre',
                  a: 'Cuerpo de carne y huesos glorificado. Autor del Plan. Autoriza y delega.',
                  b: 'DyC 130:22, Abraham 3:19',
                },
                {
                  label: 'Jehová — El Hijo',
                  a: 'Cuerpo de carne y huesos glorificado. Ejecutor del Plan. Crea, redime, juzga.',
                  b: 'Juan 1:1-3, DyC 76:23-24',
                },
                {
                  label: 'El Espíritu Santo',
                  a: 'Personaje de espíritu. Omnipresente. Santifica, testifica, consuela.',
                  b: 'DyC 130:22, Juan 14:26',
                },
              ],
            },
            {
              type: 'paragraph',
              id: 'p8',
              text: 'La distinción entre "personaje de espíritu" (el Espíritu Santo) y "cuerpo de carne y huesos" (el Padre y el Hijo) resuelve el problema de la omnipresencia: el Espíritu Santo, sin cuerpo, puede estar en todo lugar simultáneamente. Esta es una solución mucho más coherente que la "sustancia infinita e impersonal" del Credo Niceno.',
            },
          ],
        },
        {
          id: 't8',
          title: 'Jehová como el Dios del Antiguo Testamento',
          blocks: [
            {
              type: 'paragraph',
              id: 'p9',
              text: 'Una de las revelaciones más iluminadoras de la Restauración: el "Señor" del Antiguo Testamento — Jehová — es el Cristo premortal. Cuando Moisés habló con Dios en el Sinaí, habló con el futuro Jesucristo. Cuando Abraham negoció con el Señor sobre Sodoma (Génesis 18), habló con el Jehová premortal. El Padre aparece raramente en las Escrituras — generalmente obra a través de Su Hijo. (Éxodo 6:3 distingue: "y con Abraham, con Isaac y con Jacob me aparecí como El Shaddai, y mi nombre Jehová no les di a conocer.")',
            },
            {
              type: 'highlight_verse',
              id: 'v4',
              reference: 'Juan 8:58',
              text: 'Jesús les dijo: De cierto, de cierto os digo: Antes que Abraham fuese, yo soy.',
            },
          ],
        },
      ],
    },
    {
      id: 's5',
      title: 'La Unidad Real de la Divinidad',
      intro: {
        romanNumeral: 'V',
        heading: 'Unidos en Todo Excepto en Sustancia',
        subheading: 'La unidad que realmente importa',
      },
      topics: [
        {
          id: 't9',
          title: 'Unidos en propósito, amor y testimonio',
          blocks: [
            {
              type: 'paragraph',
              id: 'p10',
              text: 'Los tres miembros de la Divinidad están absolutamente unidos. Pero su unidad no es de sustancia — es de propósito perfecto, amor perfecto, y testimonio perfecto. El Padre ama al Hijo y testifica de Él. El Hijo honra al Padre en todo y nunca hace nada de Sí mismo. El Espíritu Santo testifica del Padre y del Hijo. Esta unidad perfecta es el modelo que Cristo nos pide a nosotros: "Para que sean uno en nosotros."',
            },
            {
              type: 'doctrine_box',
              id: 'db2',
              title: 'Por qué Esto Importa para tu Vida',
              content: 'Si Dios es una sustancia abstracta, solo puedes admirarlo de lejos. Si es un Padre personal, puedes tener una relación real con Él. Si el Hijo tomó un cuerpo real, la encarnación tiene peso. Si el Espíritu Santo es un personaje de espíritu real, su presencia en ti es un visitante, no un estado mental. La naturaleza de Dios determina la naturaleza de tu relación con Él. La Restauración te da acceso a tres Seres reales — no a un concepto.',
            },
            {
              type: 'reflection',
              id: 'r1',
              prompt: '¿Cómo se diferencian tus oraciones y tu relación con el Padre, con Cristo, y con el Espíritu Santo? ¿Les hablas de la misma manera? ¿Les pides lo mismo? Reflexiona sobre tu relación personal con cada uno.',
            },
          ],
        },
      ],
    },
  ],
}
