import ScrollReveal from '../ScrollReveal'
import { carlaEventData } from '../../data/carlaEvent'

export default function CarlaInvitationMessage() {
  return (
    <section
      id="mensaje"
      className="w-full py-20 sm:py-28 md:py-36 px-6 sm:px-10 md:px-16 flex flex-col items-center justify-center relative bg-[#F8F4EC] overflow-hidden"
    >
      {/* Patrón de fondo geométrico sutil */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage:
            'radial-gradient(circle at 50% 50%, var(--color-gold) 1.5px, transparent 1.5px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center relative z-10">
        <ScrollReveal variant="fadeUp" className="flex flex-col items-center justify-center w-full">
          {/* Tarjeta del Anfitrión con holgado padding interno */}
          <div
            className="relative w-full text-center px-6 sm:px-12 md:px-16 pt-12 pb-16 sm:pt-16 sm:pb-20 rounded-2xl bg-[#FAF7F2] shadow-2xl flex flex-col items-center justify-center mx-auto"
            style={{
              border: '1.5px solid rgba(200, 162, 74, 0.45)',
              boxShadow:
                '0 20px 60px rgba(7, 74, 38, 0.08), inset 0 0 0 1px rgba(200, 162, 74, 0.2)',
            }}
          >
            {/* Ícono central de Birrete */}
            <div className="flex justify-center items-center mb-6 mx-auto">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-[#C8A24A]/10 border border-[#C8A24A]/40 shadow-inner mx-auto">
                <svg className="w-8 h-8 sm:w-10 sm:h-10 text-[#C8A24A]" viewBox="0 0 36 36" fill="none">
                  <path d="M18 6 L34 14 L18 22 L2 14 Z" fill="currentColor" />
                  <path
                    d="M28 18 L28 26 C28 26 23 30 18 30 C13 30 8 26 8 26 L8 18"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    fill="none"
                    strokeLinejoin="round"
                  />
                  <line x1="34" y1="14" x2="34" y2="24" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <circle cx="34" cy="25" r="1.5" fill="currentColor" />
                </svg>
              </div>
            </div>

            {/* Introducción / Anfitriones */}
            <p className="font-cinzel tracking-[0.35em] text-xs sm:text-sm uppercase mb-3 font-semibold text-[#074A26] text-center w-full">
              {carlaEventData.hostHeader}
            </p>

            {/* Nombre de la Anfitriona */}
            <h2 className="font-cinzel text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 tracking-wide text-[#06381D] uppercase leading-snug sm:leading-relaxed text-center w-full px-2 sm:px-6">
              {carlaEventData.host}
            </h2>

            {/* Divisor superior */}
            <div className="gold-divider mb-6 max-w-[220px] sm:max-w-sm mx-auto" />

            {/* Mensaje de Invitación con margen seguro */}
            <p className="font-lora text-lg sm:text-xl md:text-2xl leading-relaxed text-[#2C3E50] max-w-2xl mx-auto italic font-normal tracking-wide px-2 sm:px-4 text-center my-3">
              {carlaEventData.hostMessage}
            </p>

            {/* Divisor inferior */}
            <div className="gold-divider mt-6 max-w-[220px] sm:max-w-sm mx-auto" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
