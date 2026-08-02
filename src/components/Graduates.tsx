import GraduateCard from './GraduateCard'
import ScrollReveal from './ScrollReveal'
import { eventData } from '../data/event'

export default function Graduates() {
  const { graduate } = eventData

  return (
    <section
      id="graduado"
      className="w-full pt-32 pb-28 sm:pt-40 sm:pb-36 md:pt-48 md:pb-44 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center relative overflow-hidden bg-[#0B2341]"
    >
      {/* Marco perimetral decorativo */}
      <div className="absolute inset-4 sm:inset-8 md:inset-12 border border-[rgba(200,162,74,0.25)] pointer-events-none rounded-sm" />

      {/* ── Encabezado Principal ────────────────────── */}
      <ScrollReveal variant="fadeUp" className="flex flex-col items-center justify-center text-center">
        <div className="text-center pt-4 mb-14 sm:mb-18 md:mb-20 max-w-4xl mx-auto px-4 flex flex-col items-center justify-center">
          <h2 className="font-vibes text-6xl sm:text-8xl md:text-9xl mb-2 text-[#D8B86A] leading-normal drop-shadow-lg text-center pt-2">
            Graduación
          </h2>

          <p className="font-cinzel text-sm sm:text-base tracking-[0.35em] uppercase mb-3 text-white font-semibold text-center">
            DE  SU HIJO
          </p>

          {/* Separador ornamental */}
          <div className="flex items-center justify-center gap-4 my-8 mx-auto">
            <div className="gold-divider max-w-[120px] sm:max-w-[160px]" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#C8A24A] shrink-0" />
            <div className="gold-divider max-w-[120px] sm:max-w-[160px]" />
          </div>
        </div>
      </ScrollReveal>

      {/* ── Tarjeta del Graduado Centrada ─────────── */}
      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div
          className="w-full flex flex-col items-center justify-center px-6 py-16 sm:px-12 sm:py-24 md:px-16 md:py-28 rounded-2xl bg-white/[0.035] border border-[#C8A24A]/30 shadow-2xl backdrop-blur-md transition-all duration-300 hover:border-[#C8A24A]/50 text-center"
          style={{ paddingTop: '60px', paddingBottom: '60px' }}
        >
          <GraduateCard
            name={graduate.name}
            lastName={graduate.lastName}
            degree={graduate.degree}
            university={graduate.university}
            universityShort={graduate.universityShort}
            logo={graduate.logo}
            photo={graduate.photo}
            gallery={graduate.gallery}
            delay={0.15}
          />
        </div>

        {/* Cita inferior */}
        <ScrollReveal variant="fadeIn" delay={0.35} className="flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 sm:mt-20 text-center mx-auto w-full">
            <div className="gold-divider flex-1 max-w-[160px]" />
            <p className="font-lora italic text-lg sm:text-xl md:text-2xl px-4 text-[#F8F4EC]/90 font-light text-center">
              Acompáñanos a compartir este momento tan especial
            </p>
            <div className="gold-divider flex-1 max-w-[160px]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
