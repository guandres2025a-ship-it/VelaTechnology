import Navbar from "../layout/Navbar";
import Constellation from "../universe/Constellation";
import UniverseCanvas from "../universe/UniverseCanvas";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="vela-hero relative isolate flex min-h-[760px] items-center justify-center overflow-hidden bg-[#071426] px-6 pb-20 pt-32 sm:min-h-[820px] lg:min-h-[100svh] lg:pt-28"
    >
      <Navbar />
      <UniverseCanvas />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_50%_46%,rgba(23,45,73,0.34),transparent_48%),linear-gradient(180deg,rgba(7,20,38,0.18)_0%,rgba(7,20,38,0.05)_48%,rgba(7,20,38,0.76)_100%)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-[1] h-[min(80vw,760px)] w-[min(80vw,760px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C7A45D]/[0.035] blur-[110px]" />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="vela-hero-constellation pointer-events-none absolute left-1/2 top-1/2 z-0 w-[min(88vw,760px)] -translate-x-1/2 -translate-y-[54%] opacity-80 sm:w-[min(76vw,820px)]">
          <Constellation />
        </div>

        <div className="relative z-10 flex flex-col items-center">
          <div className="vela-reveal vela-reveal-1 mb-7 flex items-center gap-3 text-[9px] font-semibold tracking-[0.34em] text-[#D6B878] sm:text-[10px]">
            <span className="h-px w-8 bg-[#C7A45D]/70" />
            THE DIGITAL UNIVERSE
            <span className="h-px w-8 bg-[#C7A45D]/70" />
          </div>

          <div className="vela-reveal vela-reveal-2 relative">
            <div className="vela-logo-aura absolute inset-0 -z-10 scale-150 rounded-full bg-[#C7A45D]/[0.10] blur-[55px]" />
            <div className="flex items-center gap-4 sm:gap-6">
              <span className="flex h-[58px] w-[58px] items-center justify-center rounded-full border border-[#D6B878]/65 text-3xl font-light text-[#E8D4A5] shadow-[0_0_38px_rgba(199,164,93,0.14)] sm:h-[76px] sm:w-[76px] sm:text-4xl">V</span>
              <div className="text-left">
                <h1 className="text-[clamp(3.6rem,10vw,7.8rem)] font-medium leading-[0.82] tracking-[0.12em] text-white">VELA</h1>
                <p className="mt-3 pl-1 text-[10px] tracking-[0.43em] text-[#D6B878] sm:mt-4 sm:text-xs sm:tracking-[0.58em]">TECHNOLOGIES</p>
              </div>
            </div>
          </div>

          <p className="vela-reveal vela-reveal-3 mt-10 max-w-2xl text-base leading-8 text-[#C0CBD8] sm:mt-12 sm:text-lg sm:leading-9">
            Conectamos ideas, tecnología y creatividad para abrir nuevas posibilidades.
          </p>

          <div className="vela-reveal vela-reveal-4 mt-9 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:gap-4">
            <a
              href="#servicios"
              className="group inline-flex min-h-14 w-full items-center justify-center gap-4 rounded-full bg-[#D6B878] px-8 text-[10px] font-bold tracking-[0.16em] text-[#071426] shadow-[0_8px_40px_rgba(199,164,93,0.18)] transition duration-300 hover:-translate-y-1 hover:bg-[#E8D4A5] hover:shadow-[0_12px_48px_rgba(199,164,93,0.28)] sm:w-auto"
            >
              EXPLORA SOLUCIONES
              <span className="text-base transition-transform group-hover:translate-x-1" aria-hidden="true">↗</span>
            </a>
            <a
              href="#nosotros"
              className="inline-flex min-h-14 w-full items-center justify-center rounded-full border border-white/25 bg-[#071426]/35 px-8 text-[10px] font-semibold tracking-[0.16em] text-[#E8EDF4] backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#D6B878]/70 hover:text-[#E8D4A5] sm:w-auto"
            >
              CONOCE A VELA
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 text-[9px] tracking-[0.25em] text-[#71849B] lg:flex">
        <span className="h-9 w-px bg-gradient-to-b from-[#C7A45D]/70 to-transparent" />
        DESCUBRE EL UNIVERSO VELA
      </div>
    </section>
  );
}
