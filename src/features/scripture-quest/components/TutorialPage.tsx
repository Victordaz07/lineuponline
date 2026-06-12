import { Link } from 'react-router-dom'
import { BADGE_DEFS } from '../badges/badgeDefinitions'
import { BADGE_IDS } from '../badges/badgeTypes'

// ─── Section list ──────────────────────────────────────────────────────────────

const SECTIONS = [
  { id: 'bienvenida', icon: '⚔️', title: 'Bienvenida' },
  { id: 'modos',      icon: '🎮', title: 'Modos de juego' },
  { id: 'crear-sala', icon: '🏠', title: 'Crear una sala' },
  { id: 'unirse',     icon: '🚪', title: 'Unirse a la sala' },
  { id: 'anfitrion',  icon: '📺', title: 'Pantalla del anfitrión' },
  { id: 'jugador',    icon: '📱', title: 'App del jugador' },
  { id: 'rondas',     icon: '❓', title: 'Tipos de ronda' },
  { id: 'equipos',    icon: '🤝', title: 'Modo equipos' },
  { id: 'puntuacion', icon: '🏆', title: 'Puntuación' },
  { id: 'insignias',  icon: '🏅', title: 'Insignias' },
]

// ─── Side nav ──────────────────────────────────────────────────────────────────

function SideNav() {
  function scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  return (
    <nav className="hidden lg:flex flex-col gap-0.5 w-48 shrink-0">
      <p className="font-ui text-[10px] font-bold uppercase tracking-[0.15em] text-parchment/35 mb-2 px-3">
        Contenido
      </p>
      {SECTIONS.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className="flex items-center gap-2.5 rounded-lg px-3 py-2 font-ui text-sm text-parchment/55 hover:bg-navy-mid hover:text-parchment text-left transition-colors"
        >
          <span>{s.icon}</span>
          {s.title}
        </button>
      ))}
    </nav>
  )
}

// ─── Section wrapper ───────────────────────────────────────────────────────────

function Sec({
  id, icon, title, children,
}: {
  id: string; icon: string; title: string; children: React.ReactNode
}) {
  return (
    <section id={id} className="scroll-mt-8 space-y-4">
      <div className="flex items-center gap-3 border-b border-sg-gold/15 pb-3">
        <span className="text-2xl">{icon}</span>
        <h2 className="font-display text-2xl text-parchment">{title}</h2>
      </div>
      {children}
    </section>
  )
}

// ─── Reusable sub-pieces ───────────────────────────────────────────────────────

function InfoGrid({ items }: { items: { icon: string; title: string; desc: string }[] }) {
  return (
    <div className={`grid gap-4 ${items.length === 3 ? 'sm:grid-cols-3' : 'sm:grid-cols-2'}`}>
      {items.map((item) => (
        <div key={item.title} className="flex gap-3 rounded-xl border border-parchment/8 bg-navy-mid p-4">
          <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
          <div>
            <p className="font-ui text-xs font-bold text-parchment">{item.title}</p>
            <p className="font-ui text-xs text-parchment/50 mt-1 leading-relaxed">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

function Steps({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="space-y-3">
      {steps.map((s, i) => (
        <li key={s.title} className="flex gap-4">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-sg-gold/30 font-display text-sm text-sg-gold">
            {i + 1}
          </span>
          <div>
            <p className="font-ui text-sm font-semibold text-parchment">{s.title}</p>
            <p className="font-ui text-xs text-parchment/55 mt-0.5 leading-relaxed">{s.desc}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}

function GoldNote({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-sg-gold/20 bg-sg-gold/5 px-4 py-3">
      <p className="font-ui text-xs text-sg-gold/80 leading-relaxed">{children}</p>
    </div>
  )
}

// ─── Round type card previews ──────────────────────────────────────────────────

function PreviewClasica() {
  return (
    <div className="space-y-2">
      <p className="font-ui text-xs text-parchment/50 mb-3">
        ¿Quién fue el primer profeta de la restauración?
      </p>
      <div className="grid grid-cols-2 gap-1.5">
        {['José Smith', 'Brigham Young', 'Mormón', 'Nefi'].map((opt, i) => (
          <div
            key={i}
            className={`rounded-lg px-3 py-2 font-ui text-xs text-center border ${
              i === 0
                ? 'border-sg-gold/40 bg-sg-gold/10 text-sg-gold'
                : 'border-parchment/10 text-parchment/40'
            }`}
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewVF() {
  return (
    <div className="space-y-3">
      <p className="font-ui text-xs text-parchment/50">
        Nefi construyó un barco por instrucción divina
      </p>
      <div className="grid grid-cols-2 gap-2">
        <div className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 py-2 text-center font-ui text-xs font-bold text-emerald-400">
          ✓ Verdadero
        </div>
        <div className="rounded-lg border border-parchment/10 py-2 text-center font-ui text-xs text-parchment/35">
          ✗ Falso
        </div>
      </div>
    </div>
  )
}

function PreviewCompletar() {
  return (
    <div className="space-y-3">
      <p className="font-ui text-xs text-parchment/50">
        "Pregunta a{' '}
        <span className="rounded border border-sg-gold/40 px-1.5 py-0.5 text-sg-gold">Dios</span>
        {' '}si estas cosas son verdad..."
      </p>
      <div className="rounded-lg border border-sg-gold/30 bg-navy-deep px-3 py-2 flex items-center gap-1">
        <span className="font-ui text-sm text-sg-gold">Dios</span>
        <span className="inline-block h-4 w-px bg-sg-gold/70" style={{ animation: 'sqBlink 1s step-end infinite' }} />
      </div>
    </div>
  )
}

function PreviewQuienSoy() {
  const clues = [
    { text: 'Soy un profeta del Libro de Mormón', visible: true },
    { text: 'Construí un barco para cruzar el mar', visible: true },
    { text: 'Mis hermanos me ataron en ese barco', visible: false },
    { text: 'Mi nombre empieza con N', visible: false },
  ]
  return (
    <div className="space-y-1.5">
      {clues.map((clue, i) => (
        <div
          key={i}
          className={`flex items-center gap-2 rounded-lg px-3 py-1.5 font-ui text-xs ${
            clue.visible
              ? 'border border-sg-gold/25 text-parchment/70'
              : 'border border-dashed border-parchment/10 text-parchment/20'
          }`}
        >
          <span className="text-[10px] text-sg-gold/50 w-3 shrink-0">{i + 1}</span>
          {clue.visible ? clue.text : '••••••••••••••••••'}
        </div>
      ))}
      <p className="font-ui text-[10px] text-sg-gold/50 mt-1.5 pl-1">
        2 pistas reveladas → puntos máximos disponibles
      </p>
    </div>
  )
}

function PreviewImagen() {
  return (
    <div className="space-y-2">
      <div className="rounded-xl border border-sg-gold/15 bg-navy-deep flex items-center justify-center h-14 gap-2">
        <span className="text-2xl opacity-30">🖼️</span>
        <span className="font-ui text-xs text-parchment/25">Imagen en pantalla grande</span>
      </div>
      <div className="grid grid-cols-2 gap-1.5">
        {['Templo de SLC', 'Casa de Brigham', 'Granja Smith', 'Colina Cumorah'].map((opt, i) => (
          <div
            key={i}
            className="rounded-lg border border-parchment/10 px-2 py-1.5 font-ui text-[10px] text-center text-parchment/45"
          >
            {opt}
          </div>
        ))}
      </div>
    </div>
  )
}

function PreviewMimica() {
  return (
    <div className="space-y-2 text-center">
      <div className="rounded-xl border border-sg-gold/15 bg-navy-deep py-4">
        <span className="text-3xl">🎭</span>
        <p className="mt-1 font-ui text-xs text-parchment/40">Un jugador actúa sin hablar</p>
        <p className="font-ui text-[10px] text-parchment/25">Los demás responden en sus teléfonos</p>
      </div>
      <div className="flex items-center gap-2 px-2">
        <p className="font-ui text-[10px] text-parchment/35 shrink-0">Tiempo</p>
        <div className="h-1.5 flex-1 rounded-full bg-navy-light overflow-hidden">
          <div className="h-full w-3/5 rounded-full bg-sg-gold/60" />
        </div>
        <p className="font-ui text-[10px] text-sg-gold/60 shrink-0">+tiempo extra</p>
      </div>
    </div>
  )
}

function PreviewOrdenar() {
  const items = [
    { num: 3, text: 'Nefi obtiene las planchas' },
    { num: 1, text: 'Lehi sueña con el árbol de vida' },
    { num: 4, text: 'La familia cruza el desierto' },
    { num: 2, text: 'Labán rechaza entregar las planchas' },
  ]
  return (
    <div className="space-y-1.5">
      {items.map((item, i) => (
        <div
          key={i}
          className="flex items-center gap-2 rounded-lg border border-parchment/10 bg-navy-deep px-3 py-1.5"
        >
          <span className="font-display text-base text-sg-gold/60 w-4 shrink-0">{item.num}</span>
          <span className="font-ui text-[10px] text-parchment/55 flex-1">{item.text}</span>
          <span className="text-parchment/20 text-xs">⋮⋮</span>
        </div>
      ))}
      <p className="font-ui text-[10px] text-parchment/30 pl-1 mt-1">Arrastra para reordenar</p>
    </div>
  )
}

// ─── Round type definitions ────────────────────────────────────────────────────

const ROUND_TYPES = [
  {
    icon: '❓',
    name: 'Clásica',
    tagline: 'Elige la respuesta correcta entre 4 opciones',
    tip: 'La velocidad suma — responde antes de que acabe el tiempo para más puntos',
    preview: <PreviewClasica />,
  },
  {
    icon: '⚖️',
    name: 'Verdadero / Falso',
    tagline: '¿Es cierto o no? Solo dos opciones',
    tip: 'Parece fácil, pero las afirmaciones están diseñadas para confundir',
    preview: <PreviewVF />,
  },
  {
    icon: '✍️',
    name: 'Completar el espacio',
    tagline: 'Escribe la palabra que falta en la cita o versículo',
    tip: 'La ortografía importa — la respuesta debe coincidir exactamente',
    preview: <PreviewCompletar />,
  },
  {
    icon: '🕵️',
    name: '¿Quién soy yo?',
    tagline: 'Descubre al personaje con pistas progresivas',
    tip: 'Responder con menos pistas da más puntos — ¡arriésgate si estás seguro!',
    preview: <PreviewQuienSoy />,
  },
  {
    icon: '🖼️',
    name: 'Adivina la imagen',
    tagline: 'La imagen aparece en pantalla grande — identifícala',
    tip: 'Mira hacia la pantalla del anfitrión; las opciones están en tu teléfono',
    preview: <PreviewImagen />,
  },
  {
    icon: '🎭',
    name: 'Mímica',
    tagline: 'Un jugador actúa sin hablar — el resto adivina',
    tip: 'El actor no puede hablar ni hacer sonidos. Tiempo extendido para esta ronda',
    preview: <PreviewMimica />,
  },
  {
    icon: '📋',
    name: 'Ordenar eventos',
    tagline: 'Pon en orden cronológico los eventos o versículos',
    tip: 'Hay puntuación parcial — cada posición correcta suma. No dejes sin responder',
    preview: <PreviewOrdenar />,
  },
]

function RoundCard({ round }: { round: typeof ROUND_TYPES[number] }) {
  return (
    <div className="rounded-2xl border border-parchment/8 bg-navy-mid overflow-hidden flex flex-col">
      <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-parchment/8">
        <span className="text-2xl">{round.icon}</span>
        <div>
          <h3 className="font-display text-xl text-parchment">{round.name}</h3>
          <p className="font-ui text-xs text-parchment/45 mt-0.5">{round.tagline}</p>
        </div>
      </div>
      <div className="px-5 py-4 flex-1">{round.preview}</div>
      <div className="px-5 pb-5">
        <div className="rounded-lg bg-sg-gold/8 border border-sg-gold/15 px-3 py-2">
          <p className="font-ui text-xs text-sg-gold/80 leading-relaxed">
            <span className="font-bold">Tip: </span>
            {round.tip}
          </p>
        </div>
      </div>
    </div>
  )
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function TutorialPage() {
  return (
    <div className="mx-auto max-w-5xl px-4 pb-24">
      {/* Header */}
      <header className="py-8 space-y-1">
        <Link
          to="/"
          className="font-ui text-xs text-parchment/35 hover:text-parchment/65 transition-colors"
        >
          ← Inicio
        </Link>
        <p className="font-ui text-xs font-semibold uppercase tracking-[0.18em] text-sg-gold mt-2">
          ⚔️ Scripture Quest
        </p>
        <h1 className="font-display text-4xl text-parchment">Guía del juego</h1>
        <p className="font-ui text-sm text-parchment/45">
          Todo lo que necesitas saber para jugar y ganar.
        </p>
      </header>

      <div className="flex gap-10 items-start">
        {/* Sticky side nav */}
        <div className="sticky top-6 self-start">
          <SideNav />
        </div>

        {/* Content */}
        <div className="flex-1 space-y-14 min-w-0">

          {/* §1 Bienvenida */}
          <Sec id="bienvenida" icon="⚔️" title="Bienvenida">
            <p className="font-ui text-sm leading-relaxed text-parchment/60">
              Scripture Quest es un juego de trivia bíblica multijugador donde el conocimiento de las
              Escrituras y la velocidad de respuesta determinan al ganador. Se juega con una pantalla
              grande (TV o proyector) que muestra las preguntas, y el teléfono de cada jugador es su
              control.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '🎯', title: 'Objetivo', desc: 'Acumular más puntos respondiendo correcta y rápidamente en cada ronda' },
                { icon: '📱', title: 'Tu dispositivo', desc: 'El teléfono muestra las opciones — la pregunta está en la pantalla grande para todos' },
                { icon: '🏆', title: 'Ganar', desc: 'El jugador (o equipo) con más puntos al finalizar todas las rondas es el campeón' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-sg-gold/15 bg-navy-mid p-4">
                  <span className="text-xl">{item.icon}</span>
                  <p className="font-ui text-xs font-bold text-sg-gold-light mt-2">{item.title}</p>
                  <p className="font-ui text-xs text-parchment/55 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </Sec>

          {/* §2 Modos de juego */}
          <Sec id="modos" icon="🎮" title="Modos de juego">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: 'Práctica solo',
                  icon: '🧘',
                  highlight: false,
                  items: [
                    ['✓', 'Sin sala ni código de acceso'],
                    ['✓', 'A tu propio ritmo'],
                    ['✓', 'Cuenta para insignias'],
                    ['✗', 'Sin ranking mensual'],
                    ['✗', 'Sin modo equipos'],
                    ['✗', 'Sin competencia en vivo'],
                  ],
                },
                {
                  name: 'Multijugador',
                  icon: '👥',
                  highlight: true,
                  items: [
                    ['✓', 'Sala con código de 6 letras'],
                    ['✓', 'De 2 a 40 jugadores'],
                    ['✓', 'Cuenta para insignias'],
                    ['✓', 'Ranking mensual oficial'],
                    ['✓', 'Modo equipos opcional'],
                    ['✓', 'Competencia en tiempo real'],
                  ],
                },
              ].map((mode) => (
                <div
                  key={mode.name}
                  className={`rounded-2xl border p-5 space-y-3 ${
                    mode.highlight ? 'border-sg-gold/30 bg-navy-mid' : 'border-parchment/8 bg-navy-mid/50'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{mode.icon}</span>
                    <h3 className="font-display text-xl text-parchment">{mode.name}</h3>
                  </div>
                  <ul className="space-y-1.5">
                    {mode.items.map(([mark, text]) => (
                      <li
                        key={text}
                        className={`font-ui text-xs ${mark === '✓' ? 'text-parchment/70' : 'text-parchment/28'}`}
                      >
                        {mark} {text}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Sec>

          {/* §3 Crear una sala */}
          <Sec id="crear-sala" icon="🏠" title="Crear una sala">
            <p className="font-ui text-sm text-parchment/60">
              Para jugar en grupo, alguien debe ser el{' '}
              <span className="text-sg-gold">anfitrión</span>. Controla la partida desde su
              dispositivo, idealmente conectado a una pantalla grande.
            </p>
            <Steps
              steps={[
                { title: 'Crear sala', desc: 'Toca "Crear sala" en el menú de Scripture Quest. Se genera un código único de 6 letras.' },
                { title: 'Configurar la partida', desc: 'Elige el número de rondas, el tema (o aleatorio) y si quieres modo equipos.' },
                { title: 'Compartir el código', desc: 'Muestra el código a los jugadores. Lo ingresan en sus teléfonos para unirse.' },
                { title: 'Esperar en el lobby', desc: 'Ves en tiempo real quién va entrando. Toma unos segundos hasta que todos estén.' },
                { title: 'Iniciar partida', desc: 'Toca "Iniciar". Aparece un conteo regresivo de 5–10 segundos visible para todos antes de que empiece la primera ronda.' },
              ]}
            />
            <GoldNote>
              <span className="font-bold">Como anfitrión</span> puedes pausar el conteo, iniciar antes
              de que se acabe el tiempo, y cancelar para volver al lobby en cualquier momento.
            </GoldNote>
          </Sec>

          {/* §4 Unirse */}
          <Sec id="unirse" icon="🚪" title="Unirse a una sala">
            <p className="font-ui text-sm text-parchment/60">
              Cualquier jugador puede unirse si tiene el código que comparte el anfitrión.
            </p>
            <Steps
              steps={[
                { title: 'Toca "Unirse a sala"', desc: 'En el menú principal de Scripture Quest.' },
                { title: 'Ingresa el código de 6 letras', desc: 'El anfitrión lo muestra en pantalla o te lo comparte por mensaje.' },
                { title: 'Elige tu nombre y color', desc: 'Selecciona un avatar para identificarte en el marcador durante la partida.' },
                { title: 'Espera en el lobby', desc: 'Ves a los demás jugadores aparecer. La partida comienza cuando el anfitrión la inicia.' },
              ]}
            />
          </Sec>

          {/* §5 Pantalla del anfitrión */}
          <Sec id="anfitrion" icon="📺" title="Pantalla del anfitrión">
            <p className="font-ui text-sm text-parchment/60">
              La pantalla del anfitrión está optimizada para proyectarse en TV o pantalla grande a
              1280×720. Todos en la sala ven las preguntas y el marcador desde ahí.
            </p>
            <InfoGrid
              items={[
                { icon: '❓', title: 'Pregunta visible', desc: 'El texto de la pregunta y las opciones aparecen en pantalla grande para que todos los lean' },
                { icon: '⏱️', title: 'Temporizador', desc: 'Un reloj regresivo visible para todos marca cuánto tiempo queda para responder' },
                { icon: '🏆', title: 'Marcador en vivo', desc: 'El ranking se actualiza en tiempo real mostrando quién va liderando' },
                { icon: '🎮', title: 'Controles exclusivos', desc: 'Solo el anfitrión puede pausar, cancelar o avanzar a la siguiente ronda' },
              ]}
            />
          </Sec>

          {/* §6 App del jugador */}
          <Sec id="jugador" icon="📱" title="App del jugador">
            <p className="font-ui text-sm text-parchment/60">
              En tu teléfono solo aparecen las{' '}
              <span className="text-sg-gold">opciones de respuesta</span>. La pregunta está en la
              pantalla grande — así todos tienen que mirar hacia ella.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '👆', title: 'Responder', desc: 'Toca tu opción. El botón se bloquea al instante — no puedes cambiar.' },
                { icon: '✅', title: 'Feedback', desc: 'Verde = correcto, Rojo = incorrecto. Lo sabes inmediatamente.' },
                { icon: '📊', title: 'Tu posición', desc: 'Ves tu puntaje y lugar en el ranking en la parte superior de la pantalla.' },
              ].map((item) => (
                <div key={item.title} className="rounded-xl border border-parchment/8 bg-navy-mid p-4 text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-ui text-xs font-bold text-parchment mt-2">{item.title}</p>
                  <p className="font-ui text-xs text-parchment/50 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
              <p className="font-ui text-xs text-amber-400/80 leading-relaxed">
                <span className="font-bold">Atención: </span>
                No puedes cambiar tu respuesta una vez que la tocas. Piensa antes de tocar.
              </p>
            </div>
          </Sec>

          {/* §7 Tipos de ronda */}
          <Sec id="rondas" icon="❓" title="Tipos de ronda">
            <p className="font-ui text-sm text-parchment/60">
              Scripture Quest tiene 7 tipos de rondas distintos. El anfitrión puede mezclarlas o
              elegir solo algunas al configurar la partida.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {ROUND_TYPES.map((r) => (
                <RoundCard key={r.name} round={r} />
              ))}
            </div>
          </Sec>

          {/* §8 Modo equipos */}
          <Sec id="equipos" icon="🤝" title="Modo equipos">
            <p className="font-ui text-sm text-parchment/60">
              El anfitrión puede activar el modo equipos al crear la sala. Los jugadores se dividen en
              2–4 equipos y sus puntos individuales se suman al total del equipo.
            </p>
            <InfoGrid
              items={[
                { icon: '⚖️', title: 'Distribución', desc: 'Los equipos se forman automáticamente o el anfitrión los asigna manualmente antes de iniciar.' },
                { icon: '💬', title: 'Estrategia', desc: 'Un miembro puede responder rápido, otro verifica. El trabajo en equipo paga.' },
                { icon: '📊', title: 'Marcador', desc: 'La pantalla grande muestra el puntaje total del equipo, no el individual.' },
                { icon: '🏆', title: 'Victoria', desc: 'Gana el equipo con más puntos acumulados al finalizar todas las rondas.' },
              ]}
            />
          </Sec>

          {/* §9 Puntuación */}
          <Sec id="puntuacion" icon="🏆" title="Puntuación">
            <p className="font-ui text-sm text-parchment/60">
              Los puntos se calculan en función de si respondiste correctamente y cuánto tiempo tardaste.
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {[
                { icon: '⚡', label: 'Velocidad', desc: 'Responder en los primeros segundos multiplica los puntos obtenidos' },
                { icon: '✅', label: 'Precisión', desc: 'Solo las respuestas correctas suman. Las incorrectas no penalizan.' },
                { icon: '🔢', label: 'Números claros', desc: 'Los puntos se muestran ÷100. Si la fracción llega a .88 se redondea arriba.' },
              ].map((item) => (
                <div key={item.label} className="rounded-xl border border-sg-gold/15 bg-navy-mid p-4 text-center">
                  <span className="text-2xl">{item.icon}</span>
                  <p className="font-ui text-xs font-bold text-sg-gold-light mt-2">{item.label}</p>
                  <p className="font-ui text-xs text-parchment/55 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="rounded-xl border border-parchment/8 bg-navy-mid p-5 space-y-3">
              <p className="font-ui text-xs font-bold text-parchment">Ejemplo de puntos mostrados</p>
              <div className="space-y-2">
                {[
                  { raw: '2088', shown: '21', note: '2088 ÷ 100 = 20.88 → se redondea a 21 (≥ .88)' },
                  { raw: '3750', shown: '37', note: '3750 ÷ 100 = 37.50 → queda en 37 (< .88)' },
                  { raw: '4900', shown: '49', note: '4900 ÷ 100 = 49.00 → queda en 49' },
                ].map((ex) => (
                  <div key={ex.raw} className="flex items-center gap-3 font-ui text-xs">
                    <span className="text-parchment/35 w-14 text-right tabular-nums">{ex.raw} pts</span>
                    <span className="text-parchment/20">→</span>
                    <span className="text-sg-gold font-bold w-6 text-right tabular-nums">{ex.shown}</span>
                    <span className="text-parchment/30 text-[10px]">{ex.note}</span>
                  </div>
                ))}
              </div>
            </div>
          </Sec>

          {/* §10 Insignias */}
          <Sec id="insignias" icon="🏅" title="Insignias">
            <p className="font-ui text-sm text-parchment/60">
              Cada jugador tiene 8 insignias personales con 7 niveles cada una. Los niveles se
              desbloquean automáticamente según tu historial de juego — nunca se pierden.
            </p>
            <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
              {BADGE_IDS.map((id) => {
                const def = BADGE_DEFS[id]
                return (
                  <div
                    key={id}
                    className="flex flex-col items-center gap-1.5 rounded-xl border border-parchment/8 bg-navy-mid p-3 text-center"
                  >
                    <span className="text-2xl">{def.icon}</span>
                    <p className="font-ui text-[10px] text-parchment/55 leading-tight">{def.name}</p>
                  </div>
                )
              })}
            </div>
            <GoldNote>
              Llegar al nivel 7 de una insignia es el logro máximo — la insignia brilla con efecto
              dorado legendario. Son 56 niveles en total para desbloquear.
            </GoldNote>
            <Link
              to="/games/scripture-quest/badges-demo"
              className="inline-flex items-center gap-2 rounded-xl border border-sg-gold/25 px-4 py-2.5 font-ui text-sm text-sg-gold hover:bg-sg-gold/10 transition-colors"
            >
              Ver todas las insignias →
            </Link>
          </Sec>

        </div>
      </div>

      <style>{`
        @keyframes sqBlink {
          0%, 100% { opacity: 1 }
          50%       { opacity: 0 }
        }
      `}</style>
    </div>
  )
}
