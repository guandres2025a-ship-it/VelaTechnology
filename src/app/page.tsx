
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
    <main className="min-h-screen overflow-hidden bg-[#080D19] text-white">
      {/* NAVEGACIÓN */}
      <header className="relative z-20 border-b border-white/10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6 lg:px-10">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#C6A76A]/50 text-xl font-bold text-[#D6B878]">
              V
            </div>
            <div>
              <p className="text-lg font-semibold tracking-[0.18em]">
                VELA
              </p>
              <p className="text-[9px] tracking-[0.35em] text-gray-400">
                TECHNOLOGY
              </p>
            </div>
          </a>

          <div className="hidden items-center gap-9 text-sm text-gray-300 md:flex">
            <a href="#inicio" className="transition hover:text-[#D6B878]">
              Inicio
            </a>
            <a href="#nosotros" className="transition hover:text-[#D6B878]">
              Nosotros
            </a>
            <a href="#servicios" className="transition hover:text-[#D6B878]">
              Servicios
            </a>
            <a href="#contacto" className="transition hover:text-[#D6B878]">
              Contacto
            </a>
          </div>

          <a
            href="#contacto"
            className="rounded-full border border-[#C6A76A]/60 px-5 py-2.5 text-xs font-medium tracking-wide text-[#E2C68E] transition hover:bg-[#C6A76A] hover:text-[#080D19]"
          >
            HABLEMOS
          </a>
        </nav>
      </header>

      {/* HERO */}
      <section
        id="inicio"
        className="relative flex min-h-[680px] items-center"
      >
        <div className="pointer-events-none absolute -right-40 top-10 h-[550px] w-[550px] rounded-full border border-[#C6A76A]/10" />
        <div className="pointer-events-none absolute -right-20 top-20 h-[400px] w-[400px] rounded-full border border-[#C6A76A]/10" />
        <div className="pointer-events-none absolute right-20 top-40 h-[200px] w-[200px] rounded-full bg-[#C6A76A]/10 blur-[100px]" />

        <div className="relative mx-auto grid w-full max-w-7xl gap-16 px-6 py-24 lg:grid-cols-[1.2fr_0.8fr] lg:items-center lg:px-10">
          <div>
            <div className="mb-8 flex items-center gap-3">
              <span className="h-px w-10 bg-[#D6B878]" />
              <span className="text-xs font-medium tracking-[0.3em] text-[#D6B878]">
                TECNOLOGÍA CON PROPÓSITO
              </span>
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">
              Transformamos
              <span className="block text-[#D6B878]">
                ideas en
              </span>
              soluciones.
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
              Conectamos tecnología, creatividad e innovación para
              desarrollar soluciones digitales que impulsan el crecimiento
              de empresas y personas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#servicios"
                className="rounded-full bg-[#C6A76A] px-7 py-4 text-sm font-semibold text-[#080D19] transition hover:bg-[#E2C68E]"
              >
                DESCUBRE LO QUE HACEMOS →
              </a>
              <a
                href="#nosotros"
                className="rounded-full border border-white/20 px-7 py-4 text-sm text-white transition hover:border-[#D6B878] hover:text-[#D6B878]"
              >
                CONOCE VELA
              </a>
            </div>
          </div>

          <div className="relative hidden min-h-[400px] items-center justify-center lg:flex">
            <div className="absolute h-80 w-80 rounded-full border border-[#C6A76A]/20" />
            <div className="absolute h-64 w-64 rounded-full border border-[#C6A76A]/30" />
            <div className="absolute h-48 w-48 rounded-full border border-[#C6A76A]/40" />
            <div className="absolute h-32 w-32 rounded-full bg-[#C6A76A]/10 blur-2xl" />

            <div className="relative flex h-32 w-32 items-center justify-center rounded-3xl border border-[#D6B878]/50 bg-[#101A2B] shadow-[0_0_80px_rgba(198,167,106,0.12)]">
              <span className="text-7xl font-light text-[#D6B878]">V</span>
            </div>

            <div className="absolute right-10 top-16 rounded-full border border-white/10 bg-[#101A2B] px-4 py-2 text-xs text-gray-300">
              Innovation
            </div>
            <div className="absolute bottom-16 left-5 rounded-full border border-white/10 bg-[#101A2B] px-4 py-2 text-xs text-gray-300">
              Technology
            </div>
            <div className="absolute bottom-4 right-16 rounded-full border border-white/10 bg-[#101A2B] px-4 py-2 text-xs text-gray-300">
              Creativity
            </div>
          </div>
        </div>
      </section>

      {/* NOSOTROS */}
      <section
        id="nosotros"
        className="border-y border-white/10 bg-[#0C1322] px-6 py-28 lg:px-10"
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

      {/* SERVICIOS */}
      <section id="servicios" className="px-6 py-28 lg:px-10">
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
                className="group rounded-2xl border border-white/10 bg-[#0C1322] p-8 transition duration-300 hover:-translate-y-1 hover:border-[#C6A76A]/50"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm text-[#D6B878]">
                    {service.number}
                  </span>
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

      {/* FILOSOFÍA */}
      <section className="border-y border-white/10 bg-[#0C1322] px-6 py-24 text-center lg:px-10">
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

      {/* CONTACTO */}
      <section id="contacto" className="px-6 py-28 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-10 rounded-3xl border border-[#C6A76A]/20 bg-gradient-to-br from-[#111D30] to-[#0C1322] p-8 sm:p-14 lg:flex-row lg:items-center">
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

      {/* FOOTER */}
      <footer className="border-t border-white/10 px-6 py-8 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 sm:flex-row">
          <div>
            <p className="font-semibold tracking-[0.2em]">VELA TECHNOLOGY</p>
            <p className="mt-1 text-xs text-gray-500">
              Tecnología, creatividad e innovación.
            </p>
          </div>

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} VelaTechnology. Todos los derechos
            reservados.
          </p>
        </div>
      </footer>
    </main>
  );
}
