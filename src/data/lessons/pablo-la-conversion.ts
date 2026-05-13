import type { Lesson } from '@/types/doctrine'

export const pabloLaConversion: Lesson = {
  id: 'pablo-la-conversion',
  moduleId: 'personajes-escrituras',
  submoduleGroup: 'pablo',
  title: 'La Conversión',
  subtitle: 'El camino a Damasco — la luz que lo detuvo todo',
  description:
    'Hechos 9 narra el momento más dramático del Nuevo Testamento después de la resurrección: el perseguidor Saulo cae ante una luz cegadora y escucha una voz. Tres días sin vista, sin comer, sin beber. Y un discípulo llamado Ananías que tuvo que obedecer sin entender.',
  level: 'INTERMEDIO',
  icon: '⚡',
  duration: 30,
  order: 5111,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Luz en el Camino',
      intro: {
        romanNumeral: 'I',
        title: 'Hechos 9:3-9 — Mediodía, la Luz y la Caída',
        paragraphs: [
          'No fue al amanecer ni en sueños. Fue al mediodía, bajo el sol más intenso del día, cuando una luz más brillante que el sol mismo derribó a Saulo de su caballo.',
        ],
      },
      topics: [
        {
          id: 't1',
          title: 'El encuentro en el camino',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 9:3-6',
              text: 'Más yendo por el camino, aconteció que al llegar cerca de Damasco, repentinamente le rodeó un resplandor de luz del cielo; y cayendo en tierra, oyó una voz que le decía: Saulo, Saulo, ¿por qué me persigues? Y él dijo: ¿Quién eres, Señor? Y le dijo: Yo soy Jesús, a quien tú persigues; dura cosa te es dar coces contra el aguijón. Él, temblando y temeroso, dijo: Señor, ¿qué quieres que yo haga? Y el Señor le dijo: Levántate y entra en la ciudad, y se te dirá lo que debes hacer.',
            },
            {
              type: 'paragraph',
              text: 'La pregunta "¿por qué me persigues?" es teológicamente densa. Saulo no perseguía a Jesús — Jesús había muerto. Saulo perseguía a los discípulos. La identidad entre Cristo y su cuerpo de creyentes es tan completa que perseguir a uno es perseguir al otro. Esta ecuación — destruir a los santos es destruir al Señor — define la eclesiología de toda la carrera apostólica de Pablo.',
            },
            {
              type: 'doctrine_box',
              title: '"Yo soy Jesús" — lo que esta afirmación significaba para Saulo',
              body: 'Para un fariseo formado en la tradición de la resurrección (los fariseos, a diferencia de los saduceos, creían en ella), la afirmación "Yo soy Jesús" no era simplemente un nombre. Era la confirmación de que el hombre que había sido crucificado como blasfemo y delincuente era en realidad el Mesías resucitado. Todo el sistema teológico de Saulo colapsó en ese momento — y tuvo que ser reconstruido desde cero.',
            },
          ],
        },
        {
          id: 't2',
          title: 'Tres días de oscuridad',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 9:8-9',
              text: 'Y Saulo se levantó de tierra, y abriendo los ojos, no veía a nadie; así que, llevándole por la mano, le metieron en Damasco, donde estuvo tres días sin ver, y no comió ni bebió.',
            },
            {
              type: 'paragraph',
              text: 'Los tres días de ceguera no son un castigo — son un período de transición radical. El hombre que llegó a Damasco para arrestar creyentes entró siendo llevado de la mano, ciego y quebrantado. No comió ni bebió durante tres días. En el mundo bíblico, tres días es el tiempo de la muerte y la resurrección (Jonás en el pez, Jesús en el sepulcro). Saulo murió en el camino a Damasco — y en la casa de Judas en la calle Derecha, esperó su resurrección.',
            },
            {
              type: 'reflection',
              prompt: '¿Has tenido períodos de "ceguera" espiritual — momentos en que todo lo que creías saber fue puesto en cuestión y no podías avanzar hasta recibir nueva luz? ¿Qué hiciste durante ese tiempo?',
            },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Ananías — El Discípulo que Tuvo que Obedecer sin Entender',
      intro: {
        romanNumeral: 'II',
        title: 'Hechos 9:10-18 — El Mensajero Renuente',
        paragraphs: [
          'Dios no usó un ángel para completar la conversión de Saulo. Usó a un discípulo común, Ananías, que sabía perfectamente quién era Saulo y tenía razones perfectamente lógicas para negarse.',
        ],
      },
      topics: [
        {
          id: 't3',
          title: 'La obediencia costosa de Ananías',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 9:13-16',
              text: 'Entonces Ananías respondió: Señor, he oído de muchos acerca de este hombre, cuántos males ha hecho a tus santos en Jerusalén; y aun aquí tiene autoridad de los principales sacerdotes para prender a todos los que invocan tu nombre. El Señor le dijo: Ve, porque instrumento escogido me es éste, para llevar mi nombre en presencia de los gentiles, y de reyes, y de los hijos de Israel; porque yo le mostraré cuánto le es necesario padecer por mi nombre.',
            },
            {
              type: 'paragraph',
              text: 'La respuesta de Ananías al mandato divino es completamente razonable desde la perspectiva humana: "Señor, he oído de muchos acerca de este hombre." Ananías no está siendo cobarde — está siendo prudente. El problema es que la prudencia humana no siempre puede procesar los planes divinos. "Instrumento escogido me es éste" es suficiente respuesta. Dios no le explica la teología completa del ministerio de Pablo — solo le da la instrucción y la razón mínima necesaria.',
            },
            {
              type: 'dialogue',
              title: 'El diálogo entre Ananías y el Señor',
              lines: [
                {
                  speaker: 'El Señor',
                  side: 'left',
                  text: '"Ve a la calle que se llama Derecha, y busca en casa de Judas a uno llamado Saulo, de Tarso; porque he aquí, él ora."',
                },
                {
                  speaker: 'Ananías',
                  side: 'right',
                  text: '"Señor, he oído de muchos acerca de este hombre — cuántos males ha hecho a tus santos en Jerusalén. Y aun aquí tiene autoridad para prender a todos los que invocan tu nombre."',
                },
                {
                  speaker: 'El Señor',
                  side: 'left',
                  text: '"Ve, porque instrumento escogido me es éste, para llevar mi nombre en presencia de los gentiles, y de reyes, y de los hijos de Israel."',
                },
                {
                  speaker: 'Ananías',
                  side: 'right',
                  text: '[Fue. Puso las manos sobre Saulo y dijo:] "Hermano Saulo, el Señor Jesús, que se te apareció en el camino por donde venías, me ha enviado para que recibas la vista y seas lleno del Espíritu Santo."',
                },
              ],
            },
            {
              type: 'doctrine_box',
              title: 'La palabra "hermano" — la primera cosa que Saulo escuchó de un cristiano',
              body: 'Ananías llamó a Saulo "hermano Saulo" — la primera palabra que un cristiano dirigió al recién convertido perseguidor. No "enemigo," no "asesino," no "el que mató a Esteban." Hermano. Esta es la conversión completa: no solo Saulo fue transformado, sino que la comunidad cristiana tuvo que recibirle como hermano. La reconciliación fue en ambas direcciones.',
            },
          ],
        },
        {
          id: 't4',
          title: 'La recuperación y el bautismo',
          blocks: [
            {
              type: 'highlight_verse',
              reference: 'Hechos 9:17-19',
              text: 'Fue entonces Ananías y entró en la casa, y poniendo sobre él las manos, dijo: Hermano Saulo, el Señor Jesús, que se te apareció en el camino por donde venías, me ha enviado para que recibas la vista y seas lleno del Espíritu Santo. Y al momento le cayeron de los ojos como escamas, y recibió al instante la vista; y levantándose, fue bautizado. Y habiendo tomado alimento, recobró fuerzas.',
            },
            {
              type: 'paragraph',
              text: 'La secuencia es deliberada: imposición de manos, recuperación de la vista, bautismo, comida. El bautismo viene antes de la comida — antes incluso de que el cuerpo desfallecido por tres días de ayuno reciba sustento físico. Para el narrador Lucas, la ordenanza tenía prioridad. La "visión en que veía a un hombre llamado Ananías que ponía la mano sobre él" (Hechos 9:12) que Saulo tuvo durante los tres días ciegas nos dice que él sabía lo que vendría — lo esperaba.',
            },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Tres Relatos del Mismo Evento',
      intro: {
        romanNumeral: 'III',
        title: 'Hechos 9, 22 y 26 — Por qué las Diferencias Importan',
        paragraphs: [
          'El libro de los Hechos narra la conversión de Pablo tres veces. Las diferencias entre los relatos no son errores — son énfasis diferentes para audiencias distintas.',
        ],
      },
      topics: [
        {
          id: 't5',
          title: 'Las tres versiones comparadas',
          blocks: [
            {
              type: 'paragraph',
              text: 'Hechos 9 es narración de Lucas en tercera persona. Hechos 22 es el discurso de Pablo ante la multitud judía en Jerusalén — habla en arameo, enfatiza su formación judía y la credibilidad de Ananías como "varón piadoso según la ley." Hechos 26 es el discurso de Pablo ante el rey Agripa — omite a Ananías completamente y enfatiza el mandato directo de Cristo de ir a los gentiles. Cada versión es verdadera; cada una destaca lo más relevante para esa audiencia.',
            },
            {
              type: 'compare_grid',
              title: 'Diferencias entre los tres relatos',
              left: {
                title: 'Hechos 9 (narración de Lucas)',
                items: [
                  'Los compañeros oyeron la voz pero no vieron nada',
                  'Ananías recibe instrucciones detalladas',
                  'El bautismo se menciona explícitamente',
                  'Saulo inmediatamente predica en sinagogas',
                ],
              },
              right: {
                title: 'Hechos 26 (ante Agripa)',
                items: [
                  'Los compañeros cayeron en tierra también',
                  'Ananías no aparece — Cristo habla directamente',
                  'El mandato a los gentiles dado en la visión misma',
                  'Pablo presenta su ministerio como obediencia directa a esa visión',
                ],
              },
            },
            {
              type: 'deep_dive',
              title: 'Las "diferencias" como argumento de autenticidad',
              paragraphs: [
                'Los críticos del siglo XIX señalaron las diferencias entre los tres relatos como evidencia de inconsistencia o fabricación. Los estudios del siglo XX invirtieron completamente esa evaluación: la existencia de variaciones menores entre relatos independientes del mismo evento es una marca de autenticidad, no de fabricación.',
                'Los testigos que fabrican historias tienden a coordinar sus versiones y eliminar diferencias. Los testigos auténticos que recuentan una experiencia real desde ángulos distintos y para audiencias distintas naturalmente producen versiones que enfatizan aspectos diferentes.',
                'El estudio comparado de los tres relatos de Pablo es una herramienta excelente para entender la retórica apologética del Nuevo Testamento: Pablo adapta su presentación sin alterar los hechos centrales.',
              ],
            },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'Lo que la Conversión de Pablo Prueba',
      intro: {
        romanNumeral: 'IV',
        title: 'El Argumento Histórico Central',
        paragraphs: [
          'Pablo no fue un entusiasta que creyó sin evidencia. Fue un escéptico altamente entrenado que exigía coherencia lógica — y que aun así abandonó todo por el evangelio.',
        ],
      },
      topics: [
        {
          id: 't6',
          title: 'El costo de la conversión de Pablo',
          blocks: [
            {
              type: 'paragraph',
              text: 'Para evaluar el valor probatorio de la conversión de Pablo hay que preguntarse: ¿qué perdió al convertirse? Perdió su posición en la elite religiosa judía. Perdió su reputación — pasó de ser el perseguidor a ser el perseguido. Perdió la seguridad — fue azotado cinco veces, apedreado, naufragó tres veces (2 Corintios 11). Las conversiones motivadas por beneficio personal van en la dirección opuesta a lo que Pablo eligió.',
            },
            {
              type: 'highlight_verse',
              reference: 'Gálatas 1:11-12',
              text: 'Mas os hago saber, hermanos, que el evangelio anunciado por mí, no es según hombre; pues yo ni lo recibí ni lo aprendí de hombre alguno, sino por revelación de Jesucristo.',
            },
            {
              type: 'key_points',
              title: 'Por qué la conversión de Pablo es históricamente significativa',
              points: [
                'Pablo fue un enemigo activo del evangelio — su conversión no puede explicarse por predisposición favorable',
                'Ocurrió cuando la persecución estaba en su punto más alto — no cuando era socialmente conveniente',
                'Pablo afirma haber visto al Cristo resucitado personalmente (1 Corintios 15:8)',
                'Los costos de su conversión (pérdida de estatus, sufrimiento, muerte) contradicen motivaciones ocultas',
                'La teología de Pablo es coherente con la experiencia que describe — no se puede explicar como fantasía o alucinación colectiva',
              ],
            },
            {
              type: 'reflection',
              prompt: '¿Qué tendría que suceder para que tú abandonaras todo lo que eres — tu carrera, tu reputación, tu seguridad — por algo en lo que crees? ¿Cómo evalúas la conversión de Pablo a la luz de ese estándar personal?',
            },
          ],
        },
      ],
    },
  ],
}
