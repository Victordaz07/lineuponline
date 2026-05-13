import type { Lesson } from '@/types/doctrine'

export const samuelElLamanita: Lesson = {
  id: 'samuel-el-lamanita',
  moduleId: 'personajes-escrituras',
  title: 'Samuel el Lamanita — El Profeta sobre el Muro',
  subtitle: 'El lamanita que profetizó a los nefitas su propia destrucción',
  description: 'Samuel era lamanita — del pueblo que los nefitas consideraban sus enemigos. Fue a Zarahemla a predicar. Lo expulsaron. Subió al muro de la ciudad y profetizó desde ahí. Las señales que predijo para el nacimiento y la muerte de Cristo se cumplieron con precisión exacta. Y los nefitas intentaron matarlo sin éxito.',
  level: 'INTERMEDIO',
  icon: '📢',
  duration: 55,
  order: 76,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'El Profeta Rechazado y Enviado de Vuelta',
      intro: { romanNumeral: 'I', title: 'Helamán 13 — "El Señor me Envió"', paragraphs: ['Obediencia contra la resistencia del pueblo'] },
      topics: [
        {
          id: 't1',
          title: 'Volver cuando te echaron',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Helamán 13:2-4: Samuel fue a Zarahemla a predicar. El pueblo lo rechazó y "estaban a punto de echarlo." Comenzó a regresar. El Señor le dijo que volviera y proclamara lo que le fuera puesto en el corazón. Cuando no pudo entrar a la ciudad, "subió sobre el muro... y extendió su mano y clamó con voz fuerte." La obediencia de Samuel no fue cómoda ni exitosa inicialmente — fue persistente en contra de la resistencia.' },
            { type: 'doctrine_box', id: 'db1', title: 'Un Lamanita Profetizando a Nefitas', body: 'El contexto cultural de este texto es importante: los nefitas generalmente consideraban a los lamanitas inferiores espiritualmente. Helamán 13 invierte esa jerarquía. El mensajero con la palabra de Dios es el lamanita. El pueblo endurecido que lo rechaza son los nefitas. El Libro de Mormón repite este patrón de inversión — Ammón entre los lamanitas, la fe de los 2000 guerreros jóvenes — para subvertir el etnocentrismo religioso.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'Las Señales del Nacimiento de Cristo',
      intro: { romanNumeral: 'II', title: 'Helamán 14 — Las Profecías de Navidad', paragraphs: ['Precisión profética cinco años antes'] },
      topics: [
        {
          id: 't2',
          title: 'La noche sin oscuridad',
          blocks: [
            { type: 'highlight_verse', id: 'v1', reference: 'Helamán 14:3-4', text: 'Y he aquí, os doy una señal; porque cinco años más no habrán pasado antes de que el Hijo de Dios venga en su gloria. Y he aquí esta es la señal que os doy: verán una noche sin oscuridad en que el Sol se pondrá, como de costumbre; y he aquí por la mañana saldrá de nuevo, según el orden acostumbrado; y seréis testigos de que fue un día y una noche y un día, como si fuera un día y no hubiera noche.' },
            { type: 'paragraph', id: 'p2', text: 'La profecía de Samuel fue tan específica que cuando se cumplió (3 Nefi 1), los incrédulos que habían establecido una fecha de muerte para los creyentes si la señal no aparecía quedaron sin argumento. La noche sin oscuridad, la nueva estrella, los terremotos al nacer y morir Cristo — todas fueron profetizadas con precisión y todas se cumplieron. La profecía verificable es la base de un testimonio incontrovertible.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'Las Señales de la Muerte de Cristo',
      intro: { romanNumeral: 'III', title: 'Helamán 14:20-27 — Las Tres Horas de Oscuridad', paragraphs: ['Destrucción y resurrección en señales anticipadas'] },
      topics: [
        {
          id: 't3',
          title: 'Tinieblas, terremotos y resurrección de santos',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'Samuel profetizó también las señales de la muerte: tres días de oscuridad total, rayos, relámpagos, truenos, temblores de tierra, montañas aplastadas, valles elevados. Y algo que los otros Evangelios apenas rozan: "muchos santos serán resucitados" (Helamán 14:25). Esta profecía conecta con Mateo 27:52-53 que registra lo mismo. Samuel vio ambos extremos del ministerio terrenal de Cristo quinientos años antes de que ocurrieran.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'La Protección Divina sobre el Muro',
      intro: { romanNumeral: 'IV', title: 'Helamán 16 — Las Piedras y las Flechas no lo Alcanzaron', paragraphs: ['La protección como confirmación del llamado'] },
      topics: [
        {
          id: 't4',
          title: 'Cuando la mano de Dios se hace visible',
          blocks: [
            { type: 'highlight_verse', id: 'v2', reference: 'Helamán 16:2', text: 'Y cuantos creyeron en las palabras de Samuel, éstos salieron a buscar a Nefi; y cuando lo encontraron, le confesaron sus pecados y renunciaron a ellos, y fueron bautizados. Pero la mayor parte no creyó en las palabras de Samuel; y los que no creyeron, se airaron con él; y echaron piedras sobre él; pero el Espíritu del Señor era con él, de manera que no podían herirle.' },
            { type: 'paragraph', id: 'p4', text: 'Cuando los nefitas intentaron matar a Samuel con piedras y flechas sin poder herirlo, algunos convirtieron ese signo en testimonio y fueron a buscar a Nefi para bautizarse. Otros lo interpretaron como magia. La misma evidencia produjo conversión en unos y endurecimiento en otros. La protección divina sobre Samuel fue su último acto público — después saltó del muro y regresó a su pueblo, sin ser más mencionado. El profeta fiel hace su trabajo y desaparece.' },
            { type: 'reflection', id: 'r1', prompt: '¿Hay un "muro" desde el que Dios te está llamando a hablar — una posición, plataforma o relación desde la que podrías proclamar verdad aunque sepas que no todos la recibirán? ¿Qué te detiene de subir a ese muro?' },
          ],
        },
      ],
    },
  ],
}
