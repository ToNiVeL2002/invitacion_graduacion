import ScrollReveal from './ScrollReveal'
import { eventData } from '../data/event'

export default function Footer() {
  const {closingLine1, closingLine2 } = eventData

  return (
    <footer
      id="footer"
      className="w-full relative pt-16 pb-28 sm:pt-24 sm:pb-36 px-4 sm:px-8 flex flex-col items-center justify-center text-center overflow-hidden bg-[#0B2341]"
    >
      {/* Línea dorada superior */}
      <div className="gold-divider mb-16 max-w-4xl mx-auto w-full" />

      {/* Ícono de Birrete */}
      <ScrollReveal variant="scale" delay={0.1} className="flex flex-col items-center justify-center">
        <div className="flex justify-center items-center mb-8 mx-auto">
          <div className="w-16 h-16 rounded-full flex items-center justify-center p-3 bg-[#C8A24A]/10 border border-[#C8A24A]/30 mx-auto">
            <svg className="w-9 h-9 text-[#C8A24A]" viewBox="0 0 48 48" fill="none">
              <path d="M24 8 L44 18 L24 28 L4 18 Z" fill="currentColor" opacity="0.9" />
              <path
                d="M36 23 L36 34 C36 34 30 40 24 40 C18 40 12 34 12 34 L12 23"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinejoin="round"
              />
              <line
                x1="44"
                y1="18"
                x2="44"
                y2="32"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
              <circle cx="44" cy="33" r="2" fill="currentColor" />
            </svg>
          </div>
        </div>
      </ScrollReveal>

      {/* Frases Finales */}
      <ScrollReveal variant="fadeUp" delay={0.2} className="flex flex-col items-center justify-center">
        <div className="max-w-3xl mx-auto mb-10 px-4 flex flex-col items-center justify-center text-center">
          <p className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light italic mb-3 leading-tight text-white text-center">
            {closingLine1}
          </p>
          <p className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-light italic leading-tight text-[#D8B86A] text-center">
            {closingLine2}
          </p>
        </div>
      </ScrollReveal>

      {/* Separador */}
      <div className="flex items-center justify-center gap-4 my-8 max-w-xs mx-auto w-full">
        <div className="gold-divider flex-1" />
        <div className="w-2.5 h-2.5 rotate-45 bg-[#C8A24A] shrink-0" />
        <div className="gold-divider flex-1" />
      </div>

      {/* Créditos de Desarrollo */}
      <div className="flex flex-col items-center justify-center mt-8">
        <p className="font-montserrat text-xs sm:text-sm tracking-widest text-[#F8F4EC]/70 uppercase font-medium text-center">
          Desarrollado por: <span className="text-[#D8B86A] font-semibold">Samuel Antonio Veliz Benavides</span>
        </p>
      </div>
    </footer>
  )
}
