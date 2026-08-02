import { Calendar, Clock, MapPin, UtensilsCrossed } from 'lucide-react'
import ScrollReveal from './ScrollReveal'
import { eventData } from '../data/event'

interface InfoCardProps {
  icon: React.ReactNode
  title: string
  value: string
  sub?: string
  delay?: number
}

function InfoCard({ icon, title, value, sub, delay = 0 }: InfoCardProps) {
  return (
    <ScrollReveal variant="fadeUp" delay={delay} className="w-full flex flex-col items-center justify-center p-2">
      <div
        className="flex flex-col items-center justify-center text-center p-4 sm:p-6 md:p-8 relative h-full w-full rounded-xl transition-all duration-300 hover:-translate-y-2 mx-auto"
        style={{
          padding: '1.5rem 1rem',
          background:
            'linear-gradient(145deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)',
          border: '1.5px solid rgba(200, 162, 74, 0.35)',
          boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35)',
          gap: 8
        }}
      >
        {/* Ícono central */}
        <div
          className="w-14 h-14 flex items-center justify-center mb-5 rounded-full mx-auto shrink-0"
          style={{
            background: 'rgba(200, 162, 74, 0.15)',
            color: '#D8B86A',
            border: '1.5px solid rgba(200, 162, 74, 0.45)',
          }}
        >
          {icon}
        </div>

        {/* Título */}
        <p className="font-cinzel text-xs sm:text-sm tracking-[0.25em] uppercase mb-2 font-semibold text-[#C8A24A] text-center w-full px-2">
          {title}
        </p>

        {/* Valor principal */}
        <p className="font-cormorant text-xl sm:text-2xl md:text-3xl font-semibold leading-snug mb-2 text-white text-center w-full px-2 break-words">
          {value}
        </p>

        {/* Subtítulo */}
        {sub && (
          <p className="font-lora text-sm sm:text-base italic text-[#D8B86A] text-center w-full px-2">
            {sub}
          </p>
        )}
      </div>
    </ScrollReveal>
  )
}

export default function EventInfo() {
  return (
    <section
      id="evento"
      className="w-full py-24 sm:py-32 md:py-40 px-6 sm:px-10 md:px-16 flex flex-col items-center justify-center relative bg-[#0B2341]"
    >
      {/* Encabezado */}
      <ScrollReveal variant="fadeUp" className="flex flex-col items-center justify-center text-center">
        <div className="text-center mb-16 sm:mb-20 max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
          <p className="font-cinzel text-sm sm:text-base tracking-[0.3em] uppercase mb-3 font-semibold text-[#C8A24A] text-center">
            Los esperamos en
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light text-white text-center">
            Información del Evento
          </h2>
          <div className="gold-divider mx-auto mt-6 max-w-[200px] sm:max-w-xs" />
        </div>
      </ScrollReveal>

      {/* Grid Responsivo Centrado (1 col móvil, 2 cols tablet, 4 cols desktop) */}
      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        <InfoCard
          icon={<Calendar size={24} />}
          title="Fecha"
          value="Sábado 15"
          sub="Agosto 2026"
          delay={0}
        />
        <InfoCard
          icon={<Clock size={24} />}
          title="Hora"
          value={eventData.eventTime}
          sub={eventData.eventType}
          delay={0.1}
        />
        <InfoCard
          icon={<MapPin size={24} />}
          title="Lugar"
          value={eventData.venue}
          sub={eventData.address}
          delay={0.2}
        />
        <InfoCard
          icon={<UtensilsCrossed size={24} />}
          title="Recepción"
          value="Cena de Honor"
          sub="y Celebración"
          delay={0.3}
        />
      </div>
    </section>
  )
}
