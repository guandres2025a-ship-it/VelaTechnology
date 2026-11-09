import Navbar from "../layout/Navbar";
import Constellation from "../universe/Constellation";
import UniverseCanvas from "../universe/UniverseCanvas";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="vela-hero relative isolate flex min-h-[760px] items-center overflow-hidden bg-[#071426] pt-24 sm:min-h-[820px] lg:min-h-[100svh] lg:pt-20"
    >
      <Navbar />
      <UniverseCanvas />

      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_73%_48%,rgba(23,45,73,0.34),transparent_42%),linear-gradient(90deg,rgba(7,20,38,0.98)_0%,rgba(7,20,38,0.92)_36%,rgba(7,20,38,0.30)_72%,rgba(7,20,38,0.12)_100%)]" />
      <div className="pointer-events-none absolute -left-48 top-1/3 z-[1] h-[460px] w-[460px] rounded-full bg-[#172D49]/25 blur-[130px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-8 px-6 pb-20 pt-16 lg:grid-cols-[0.94fr_1.06fr] lg:px-10 lg:pb-16 lg:pt-20">
        <div className="relative z-20 max-w-[650px]">
          <div className="vela-reveal vela-reveal-1 mb-8 flex items-center gap-3">
            <span className="h-px w-9 bg-[#C7A45D]" />
            <span className="text-[10px] font-semibold tracking-[0.28em] text-[#D8BD80] sm:text-xs">
              TECNOLOGÍA CON PROPÓSITO
            </span>
          </div>

          <h1 className="vela-reveal vela-reveal-2 max-w-[680px] text-[clamp(2.8rem,6.2vw,5.7rem)] font-medium leading-[1.04] tracking-[-0.055em] text-white">
            Ideas que encuentran
            <span className="mt-1 block bg-gradient-to-r from-[#E8D4A5] via-[#C7A45D] to-[#A9BBD0] bg-clip-text text-transparent">
              su dirección.
            </span>
          </h1>

          <p className="vela-reveal vela-reveal-3 mt-7 max-w-[510px] text-[15px] leading-8 text-[#AAB8C9] sm:text-base">
            Diseñamos y desarrollamos soluciones tecnológicas que conectan ideas,
            resuelven problemas y ayudan a las empresas a crecer.
          </p>

          <div className="vela-reveal vela-reveal-4 mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#servicios"
              className="group inline-flex min-h-12 items-center gap-3 rounded-full bg-[#C7A45D] px-6 py-3 text-[11px] font-bold tracking-[0.08em] text-[#071426] shadow-[0_8px_35px_rgba(199,164,93,0.15)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#E0C78F] hover:shadow-[0_10px_42px_rgba(199,164,93,0.25)]"
            >
              EXPLORAR SOLUCIONES
              <span className="text-base transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
            </a>
            <a
              href="#nosotros"
              className="inline-flex min-h-12 items-center rounded-full border border-white/20 px-6 py-3 text-[11px] font-semibold tracking-[0.08em] text-[#E0E7EF] transition duration-300 hover:border-[#C7A45D]/70 hover:text-[#E2C783]"
            >
              CONOCE VELA
            </a>
          </div>

          <p className="vela-reveal vela-reveal-5 mt-12 text-[9px] font-medium tracking-[0.34em] text-[#71849B] sm:text-[10px]">
            INNOVATION <span className="mx-2 text-[#C7A45D]">·</span> DIRECTION <span className="mx-2 text-[#C7A45D]">·</span> GROWTH
          </p>
        </div>

        <div className="relative z-10 mx-auto flex h-[330px] w-full max-w-[590px] items-center justify-center sm:h-[430px] lg:h-[570px]">
          <div className="absolute inset-[10%] rounded-full border border-[#C7A45D]/[0.10] [transform:rotate(-24deg)_scaleY(.56)]" />
          <div className="absolute inset-[18%] rounded-full border border-[#C7A45D]/[0.13] [transform:rotate(28deg)_scaleY(.62)]" />
          <div className="absolute inset-[26%] rounded-full border border-[#A9BBD0]/[0.10] [transform:rotate(-8deg)_scaleY(.7)]" />
          <div className="absolute h-[52%] w-[52%] rounded-full bg-[#C7A45D]/[0.055] blur-[65px]" />
          <Constellation />
          <div className="absolute bottom-[8%] right-[4%] hidden rounded-full border border-white/10 bg-[#0B1B30]/75 px-4 py-2.5 text-[9px] tracking-[0.2em] text-[#9AABC0] backdrop-blur-md sm:block">
            VELA <span className="text-[#C7A45D]">·</span> DIGITAL UNIVERSE
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 items-center gap-3 text-[9px] tracking-[0.25em] text-[#71849B] lg:flex">
        <span className="h-8 w-px bg-gradient-to-b from-[#C7A45D]/70 to-transparent" />
        SCROLL TO EXPLORE
      </div>
    </section>
  );
}
