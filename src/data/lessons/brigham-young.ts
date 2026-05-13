import type { Lesson } from '@/types/doctrine'

export const brighamYoung: Lesson = {
  id: 'brigham-young',
  moduleId: 'personajes-escrituras',
  title: 'Brigham Young — El León de Israel',
  subtitle: 'El carpintero que llevó a un pueblo al desierto',
  description: 'Brigham Young tardó dos años en convertirse tras ver el Libro de Mormón. Luego pasó el resto de su vida construyendo la Iglesia. Cuando José Smith murió, Brigham fue reconocido como sucesor. Lideró el éxodo de 70,000 santos a través de 2,000 km de desierto. Fundó Salt Lake City. Gobernó Utah por décadas.',
  level: 'INTERMEDIO',
  icon: '🦁',
  duration: 65,
  order: 84,
  status: 'PUBLISHED',
  studyBodyPlain: '',
  originalBodyPlain: '',
  studySections: [
    {
      id: 's1',
      title: 'La Conversión Deliberada',
      intro: { romanNumeral: 'I', heading: '1830-1832 — Dos Años de Investigación', subheading: 'El hombre que no creyó de inmediato' },
      topics: [
        {
          id: 't1',
          title: 'La fe que se construyó lentamente',
          blocks: [
            { type: 'paragraph', id: 'p1', text: 'Brigham Young obtuvo una copia del Libro de Mormón en 1830, recién publicado. Tardó dos años en bautizarse — en 1832. No fue conversión emocional impulsiva. Brigham era carpintero y pintor, hombre práctico, con poca educación formal. Estudió el libro. Investigó. Observó a los Santos. Cuando se convenció, no dudó más. Esta deliberación caracterizó todo su liderazgo: considerado en la decisión, total en la ejecución.' },
            { type: 'doctrine_box', id: 'db1', title: 'El Tipo de Converso que Brigham Representaba', content: 'Brigham no convirtió en una gran asamblea ni bajo la predicación emocional. Convirtió en silencio, durante meses, en su mente práctica y sus rodillas. Este patrón — investigación seria y conversión deliberada — es el que la Iglesia ha promovido: fe basada en evidencia personal y espiritual, no en emoción colectiva. Mormón 9:21 — "Preguntad y recibiréis" — fue literalmente el proceso de Brigham.' },
          ],
        },
      ],
    },
    {
      id: 's2',
      title: 'La Sucesión tras el Martirio',
      intro: { romanNumeral: 'II', heading: 'Agosto de 1844 — "La Voz y el Mantle de Joseph"', subheading: 'El momento que definió la sucesión apostólica' },
      topics: [
        {
          id: 't2',
          title: 'El testimonio de los que vieron la transfiguración',
          blocks: [
            { type: 'paragraph', id: 'p2', text: 'Cuando Brigham Young dirigió la reunión de agosto de 1844 sobre la sucesión del profeta, varios testigos presenciales registraron algo extraordinario: que mientras hablaba, su voz y porte se transformaron para parecerse a José Smith. Este evento no aparece en documentos contemporáneos de 1844 pero fue relatado por docenas de testigos décadas después. El manto del profeta cayó — en la percepción de los presentes — sobre Brigham, y la membresía lo reconoció como sucesor por amplia mayoría.' },
            { type: 'highlight_verse', id: 'v1', reference: 'DyC 107:23', text: 'Los doce apóstoles viajantes constituyen un cuerpo igual en autoridad y poder al quórum de la Primera Presidencia.' },
          ],
        },
      ],
    },
    {
      id: 's3',
      title: 'El Éxodo a Utah',
      intro: { romanNumeral: 'III', heading: '1846-1847 — El Valle del Lago Salado', subheading: 'El mayor éxodo de la historia americana' },
      topics: [
        {
          id: 't3',
          title: 'Moisés del siglo XIX',
          blocks: [
            { type: 'paragraph', id: 'p3', text: 'En 1846, Brigham Young lideró el éxodo de Nauvoo — 16,000 Santos expulsados por la violencia anti-mormona. En invierno cruzaron el río Mississippi y el río Missouri. El primer grupo llegó al Valle del Gran Lago Salado el 24 de julio de 1847. Brigham, enfermo de fiebre, levantó la vista desde el carruaje y dijo: "Este es el lugar correcto." En dos décadas, 70,000 personas habían hecho el recorrido de 1,300 millas. La logística fue extraordinaria.' },
          ],
        },
      ],
    },
    {
      id: 's4',
      title: 'El Constructor de Zión',
      intro: { romanNumeral: 'IV', heading: 'Salt Lake City y el Templo', subheading: 'Transformar el desierto en tierra habitada' },
      topics: [
        {
          id: 't4',
          title: 'La visión de un pueblo construido desde cero',
          blocks: [
            { type: 'paragraph', id: 'p4', text: 'Brigham Young gobernó Utah durante 30 años — como presidente de la Iglesia, gobernador territorial, y padre de una colonia. Fundó más de 350 ciudades y pueblos, estableció el sistema de irrigación que hizo fértil el desierto, fundó la Universidad de Utah y la Universidad Brigham Young, y comenzó la construcción del Templo de Salt Lake — cuya finalización no vería en vida (se completó 40 años después de comenzarse). Su legado es físico, institucional, y espiritual.' },
            { type: 'reflection', id: 'r1', prompt: '¿Qué "desierto" estás siendo llamado a habitar y transformar — un matrimonio difícil, una comunidad desfavorecida, un campo de misión sin frutos visibles? ¿Cómo el ejemplo de Brigham — que tomó un territorio árido y construyó una civilización — te habla sobre la visión a largo plazo?' },
          ],
        },
      ],
    },
  ],
}
