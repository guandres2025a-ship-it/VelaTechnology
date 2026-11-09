import Hero from "@/components/hero/Hero";

const services = [
  { number: "01", title: "Experiencias digitales", category: "WEB & PRODUCT", description: "Diseñamos plataformas y sitios web que convierten ideas complejas en experiencias claras, atractivas y útiles.", detail: "Diseño · Desarrollo · Producto" },
  { number: "02", title: "Software inteligente", category: "CUSTOM SOFTWARE", description: "Creamos herramientas a medida que se adaptan a la operación real de cada negocio y crecen con él.", detail: "Sistemas · Integraciones · Escalabilidad" },
  { number: "03", title: "Automatización e IA", category: "AI & AUTOMATION", description: "Conectamos procesos, datos e inteligencia artificial para liberar tiempo y abrir nuevas posibilidades.", detail: "Flujos · IA aplicada · Eficiencia" },
  { number: "04", title: "Estrategia tecnológica", category: "CONSULTING", description: "Acompañamos decisiones digitales con visión estratégica, criterio técnico y enfoque en resultados.", detail: "Diagnóstico · Arquitectura · Evolución" },
];

const principles = [
  { number: "01", title: "Curiosidad", text: "Exploramos nuevas perspectivas antes de aceptar los límites de siempre." },
  { number: "02", title: "Intención", text: "Cada decisión de diseño y tecnología responde a un propósito real." },
  { number: "03", title: "Evolución", text: "Construimos pensando en lo que una idea puede llegar a ser." },
];

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <div className="mb-6 flex items-center gap-3 text-[10px] font-semibold tracking-[0.28em] text-[#D6B878]"><span>{number}</span><span className="h-px w-8 bg-[#C7A45D]/60" /><span>{children}</span></div>;
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071426] text-white">
      <Hero />

      <section id="nosotros" className="vela-manifesto relative overflow-hidden border-y border-white/[0.08] px-6 py-28 sm:py-36 lg:px-10">
        <div className="vela-manifesto-orb" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1.15fr_.85fr] lg:items-end">
          <div>
            <SectionLabel number="01">EL UNIVERSO VELA</SectionLabel>
            <h2 className="max-w-4xl text-4xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              La tecnología no es el destino.
              <span className="block text-[#D6B878]">Es lo que nos lleva más lejos.</span>
            </h2>
          </div>
          <div className="max-w-xl lg:pb-2">
            <p className="text-base leading-8 text-[#AAB8C9] sm:text-lg">VELA Technologies conecta estrategia, creatividad y tecnología para transformar desafíos en nuevas posibilidades.</p>
            <p className="mt-5 text-sm leading-7 text-[#74869C]">Somos un equipo orientado a crear soluciones digitales con intención: útiles para hoy, preparadas para lo que viene.</p>
            <div className="mt-9 flex items-center gap-3 text-[10px] tracking-[0.24em] text-[#D6B878]"><span className="h-1.5 w-1.5 rounded-full bg-[#D6B878] shadow-[0_0_12px_#D6B878]" /> INNOVATION WITH DIRECTION</div>
          </div>
        </div>
      </section>

      <section id="servicios" className="relative px-6 py-28 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
            <div className="max-w-3xl">
              <SectionLabel number="02">CAPACIDADES</SectionLabel>
              <h2 className="text-4xl font-medium tracking-[-0.045em] sm:text-6xl">Un universo de soluciones<span className="text-[#D6B878]">.</span></h2>
            </div>
            <p className="max-w-sm pb-1 text-sm leading-7 text-[#8292A7]">Un conjunto de capacidades que trabajan en conjunto para llevar cada proyecto desde la idea hasta su siguiente etapa.</p>
          </div>
          <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
            {services.map((service) => (
              <article key={service.number} className="vela-service-card group relative min-h-[300px] overflow-hidden bg-[#09192C] p-8 transition-colors duration-500 hover:bg-[#10233A] sm:p-10">
                <div className="absolute -right-16 -top-20 h-56 w-56 rounded-full border border-[#C7A45D]/[0.08] transition duration-700 group-hover:scale-125 group-hover:border-[#C7A45D]/20" />
                <div className="relative flex h-full flex-col">
                  <div className="flex items-center justify-between"><span className="font-mono text-xs text-[#D6B878]">{service.number}</span><span className="text-[9px] tracking-[0.2em] text-[#71849B]">{service.category}</span></div>
                  <div className="mt-12 max-w-md">
                    <h3 className="text-2xl font-medium tracking-tight transition-colors group-hover:text-[#E4D1A6] sm:text-3xl">{service.title}</h3>
                    <p className="mt-4 text-sm leading-7 text-[#8FA0B4]">{service.description}</p>
                  </div>
                  <div className="mt-auto flex items-end justify-between gap-4 pt-10"><span className="text-[9px] tracking-[0.12em] text-[#62758D]">{service.detail}</span><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-[#D6B878] transition-all group-hover:-translate-y-1 group-hover:border-[#D6B878]/60 group-hover:bg-[#D6B878] group-hover:text-[#071426]">↗</span></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden border-y border-white/[0.08] bg-[#0A192B] px-6 py-28 sm:py-36 lg:px-10">
        <div className="vela-grid-glow absolute inset-0 opacity-40" aria-hidden="true" />
        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[.8fr_1.2fr]">
          <div><SectionLabel number="03">NUESTRO ENFOQUE</SectionLabel><h2 className="max-w-md text-4xl font-medium leading-tight tracking-[-0.04em] sm:text-5xl">Ideas conectadas. <span className="text-[#D6B878]">Impacto real.</span></h2><p className="mt-6 max-w-sm text-sm leading-7 text-[#8798AC]">Creemos que las mejores soluciones aparecen cuando distintas disciplinas encuentran una dirección común.</p></div>
          <div className="divide-y divide-white/10 border-y border-white/10">
            {principles.map((item) => <div key={item.number} className="grid gap-3 py-7 sm:grid-cols-[70px_1fr_1.2fr] sm:items-center"><span className="font-mono text-xs text-[#D6B878]">{item.number}</span><h3 className="text-xl font-medium">{item.title}</h3><p className="max-w-sm text-sm leading-6 text-[#8292A7]">{item.text}</p></div>)}
          </div>
        </div>
      </section>

      <section id="proyectos" className="px-6 py-28 sm:py-36 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionLabel number="04">LO QUE PODEMOS CREAR</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1fr_.8fr] lg:items-end">
            <h2 className="max-w-3xl text-4xl font-medium leading-[1.12] tracking-[-0.045em] sm:text-6xl">Cada proyecto comienza con una <span className="text-[#D6B878]">posibilidad.</span></h2>
            <p className="max-w-md text-sm leading-7 text-[#8292A7]">Desde una presencia digital hasta una solución tecnológica a medida, nos interesa construir proyectos que resuelvan necesidades reales. Este espacio crecerá con los casos y experiencias de VELA.</p>
          </div>
          <div className="vela-project-panel relative mt-14 overflow-hidden rounded-2xl border border-[#C7A45D]/20 p-8 sm:p-14">
            <div className="vela-project-orbit" aria-hidden="true"><span /><span /><span /></div>
            <div className="relative z-10 max-w-lg">
              <span className="text-[9px] tracking-[0.24em] text-[#D6B878]">THE NEXT CHAPTER</span>
              <h3 className="mt-5 text-3xl font-medium sm:text-4xl">Tu desafío puede ser nuestro próximo proyecto.</h3>
              <p className="mt-4 text-sm leading-7 text-[#9AAABD]">Conversemos sobre lo que imaginas y exploremos cómo hacerlo realidad.</p>
              <a href="#contacto" className="mt-8 inline-flex items-center gap-3 text-xs font-semibold tracking-[0.15em] text-[#E4D1A6] transition hover:gap-5">HABLEMOS DE TU IDEA <span>→</span></a>
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="relative overflow-hidden border-t border-white/10 bg-[#0A192B] px-6 py-28 sm:py-36 lg:px-10">
        <div className="vela-contact-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl">
          <SectionLabel number="05">INICIEMOS ALGO</SectionLabel>
          <div className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-4xl text-5xl font-medium leading-[1.05] tracking-[-0.05em] sm:text-7xl">El futuro no se espera. <span className="text-[#D6B878]">Se construye.</span></h2>
            <a href="mailto:contacto@velatechnology.com" className="inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-[#D6B878] px-7 text-[10px] font-bold tracking-[0.15em] text-[#071426] transition hover:-translate-y-1 hover:bg-[#E8D4A5]">INICIAR CONVERSACIÓN <span className="text-base">↗</span></a>
          </div>
        </div>
      </section>

      <footer className="bg-[#071426] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-5 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div><p className="text-sm font-semibold tracking-[0.24em]">VELA TECHNOLOGIES</p><p className="mt-2 text-[9px] tracking-[0.2em] text-[#667991]">INNOVATION · DIRECTION · GROWTH</p></div>
          <p className="text-[10px] text-[#667991]">© {new Date().getFullYear()} VELA Technologies. Todos los derechos reservados.</p>
        </div>
      </footer>
    </main>
  );
}
