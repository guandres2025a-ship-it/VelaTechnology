import Hero from "@/components/hero/Hero";

const services = [
  {
    number: "01",
    title: "Desarrollo web",
    description:
      "Creamos experiencias digitales modernas, rápidas y adaptadas a las necesidades de cada negocio.",
    tag: "WEB & DIGITAL",
  },
  {
    number: "02",
    title: "Software a medida",
    description:
      "Diseñamos soluciones tecnológicas personalizadas para optimizar procesos y resolver desafíos.",
    tag: "CUSTOM SOFTWARE",
  },
  {
    number: "03",
    title: "Automatización e IA",
    description:
      "Integramos inteligencia artificial y automatizaciones para impulsar la productividad.",
    tag: "AI & AUTOMATION",
  },
  {
    number: "04",
    title: "Consultoría tecnológica",
    description:
      "Acompañamos a las empresas en sus decisiones tecnológicas y procesos de transformación digital.",
    tag: "TECH CONSULTING",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#071426] text-white">
      <Hero />

      <section
        id="nosotros"
        className="border-y border-white/10 bg-[#0A192B] px-6 py-28 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs tracking-[0.3em] text-[#D6B878]">
              01 — QUIÉNES SOMOS
            </span>
            <h2 className="mt-6 text-4xl font-semibold leading-tight sm:text-5xl">
              La tecnología es el medio.
              <span className="block text-[#D6B878]">
                El progreso es el objetivo.
              </span>
            </h2>
          </div>
          <div>
            <p className="text-base leading-8 text-gray-400">
              VelaTechnology nace con una visión integral de la tecnología:
              unir desarrollo, creatividad, innovación y pensamiento
              estratégico para convertir necesidades reales en soluciones
              funcionales.
            </p>
            <p className="mt-5 text-base leading-8 text-gray-400">
              Creemos en construir herramientas que aporten valor, faciliten
              el trabajo y abran nuevas posibilidades para las empresas y
              sus proyectos.
            </p>
          </div>
        </div>
      </section>

      <section id="servicios" className="bg-[#071426] px-6 py-28 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] text-[#D6B878]">
              02 — LO QUE HACEMOS
            </span>
            <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Soluciones para
              <span className="text-[#D6B878]"> evolucionar.</span>
            </h2>
            <p className="mt-6 leading-8 text-gray-400">
              Diferentes capacidades tecnológicas, una misma visión:
              construir soluciones que generen resultados.
            </p>
          </div>
          <div className="mt-16 grid gap-5 sm:grid-cols-2">
            {services.map((service) => (
              <article
                key={service.number}
                className="group rounded-2xl border border-white/10 bg-[#0A192B] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#C6A76A]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#D6B878]">{service.number}</span>
                  <span className="text-xs tracking-widest text-gray-600">
                    {service.tag}
                  </span>
                </div>
                <h3 className="mt-10 text-2xl font-semibold transition group-hover:text-[#D6B878]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-gray-400">
                  {service.description}
                </p>
                <div className="mt-8 h-px w-12 bg-[#C6A76A]/50 transition-all group-hover:w-full" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#0A192B] px-6 py-24 text-center lg:px-10">
        <div className="mx-auto max-w-4xl">
          <span className="text-xs tracking-[0.3em] text-[#D6B878]">
            03 — NUESTRA FILOSOFÍA
          </span>
          <h2 className="mt-8 text-4xl font-semibold leading-tight sm:text-6xl">
            No se trata solamente de crear tecnología.
            <span className="text-[#D6B878]">
              {" "}Se trata de crear posibilidades.
            </span>
          </h2>
        </div>
      </section>

      <section id="contacto" className="bg-[#071426] px-6 py-28 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 rounded-3xl border border-[#C6A76A]/20 bg-gradient-to-br from-[#14243A] to-[#0A192B] p-8 sm:p-14 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.3em] text-[#D6B878]">
              04 — CONSTRUYAMOS ALGO JUNTOS
            </span>
            <h2 className="mt-6 text-4xl font-semibold sm:text-5xl">
              Tu próxima idea puede comenzar aquí.
            </h2>
            <p className="mt-5 leading-8 text-gray-400">
              Estamos listos para explorar nuevas oportunidades y convertir
              desafíos en proyectos tecnológicos.
            </p>
          </div>
          <a
            href="mailto:contacto@velatechnology.com"
            className="shrink-0 rounded-full bg-[#C6A76A] px-8 py-4 text-sm font-semibold text-[#080D19] transition hover:bg-[#E2C68E]"
          >
            INICIAR CONVERSACIÓN →
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 bg-[#071426] px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <p className="font-semibold tracking-[0.2em]">VELA TECHNOLOGIES</p>
            <p className="mt-1 text-xs text-gray-500">
              Innovation · Direction · Growth
            </p>
          </div>
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Vela Technologies. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
