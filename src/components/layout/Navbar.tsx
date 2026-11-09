const links = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/[0.07]">
      <nav
        aria-label="Navegación principal"
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-5 lg:px-10"
      >
        <a href="#inicio" className="group flex items-center gap-3" aria-label="VELA Technologies, inicio">
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full border border-[#C7A45D]/45 text-lg font-light text-[#E2C783] transition group-hover:border-[#C7A45D] group-hover:shadow-[0_0_24px_rgba(199,164,93,0.16)]">
            V
            <span className="absolute -right-0.5 top-1 h-1.5 w-1.5 rounded-full bg-[#E2C783] shadow-[0_0_9px_#C7A45D]" />
          </span>
          <span className="leading-none">
            <span className="block text-[17px] font-semibold tracking-[0.2em] text-white">VELA</span>
            <span className="mt-1.5 block text-[9px] tracking-[0.32em] text-[#AAB8C9]">TECHNOLOGIES</span>
          </span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-[#AAB8C9] transition-colors hover:text-[#E2C783]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <details className="relative md:hidden">
          <summary className="flex h-10 w-10 cursor-pointer list-none items-center justify-center rounded-full border border-white/15 text-[#E2C783] [&::-webkit-details-marker]:hidden">
            <span className="text-lg" aria-hidden="true">☰</span>
            <span className="sr-only">Abrir menú</span>
          </summary>
          <div className="absolute right-0 top-14 flex min-w-44 flex-col gap-1 rounded-xl border border-white/10 bg-[#0B1B30]/95 p-2 shadow-2xl backdrop-blur-xl">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-4 py-3 text-sm text-[#C5D0DD] transition-colors hover:bg-white/5 hover:text-[#E2C783]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </details>

        <a
          href="#contacto"
          className="rounded-full border border-[#C7A45D]/55 px-5 py-2.5 text-[10px] font-semibold tracking-[0.16em] text-[#E2C783] transition duration-300 hover:bg-[#C7A45D] hover:text-[#071426]"
        >
          HABLEMOS <span aria-hidden="true">↗</span>
        </a>
      </nav>
    </header>
  );
}
