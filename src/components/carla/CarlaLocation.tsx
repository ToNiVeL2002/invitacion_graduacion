import { motion } from 'framer-motion'
import { ExternalLink, MapPin } from 'lucide-react'
import ScrollReveal from '../ScrollReveal'
import { carlaEventData } from '../../data/carlaEvent'

export default function CarlaLocation() {
  return (
    <section
      id="ubicacion"
      className="w-full py-28 sm:py-36 md:py-44 px-4 sm:px-8 md:px-12 flex flex-col items-center justify-center relative overflow-hidden bg-[#F8F4EC]"
    >
      {/* Encabezado */}
      <ScrollReveal variant="fadeUp" className="flex flex-col items-center justify-center text-center">
        <div className="text-center mb-14 max-w-3xl mx-auto px-4 flex flex-col items-center justify-center">
          <p className="font-cinzel text-sm sm:text-base tracking-[0.3em] uppercase mb-3 font-semibold text-[#C8A24A] text-center">
            Ubicación del evento
          </p>
          <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light mb-4 text-[#06381D] text-center">
            {carlaEventData.venue}
          </h2>
          <div className="flex items-center justify-center gap-2 text-lg sm:text-xl font-lora italic text-[#444444] text-center max-w-xl">
            <MapPin size={20} className="text-[#C8A24A] shrink-0" />
            <span>{carlaEventData.address}</span>
          </div>
          <div className="gold-divider mx-auto mt-6 max-w-[200px] sm:max-w-xs" />
        </div>
      </ScrollReveal>

      {/* Mapa de Google Responsivo Centrado */}
      <ScrollReveal variant="scale" delay={0.2} className="flex flex-col items-center justify-center w-full">
        <div
          className="w-full max-w-4xl mx-auto rounded-xl overflow-hidden relative shadow-2xl transition-all duration-300"
          style={{
            border: '2px solid rgba(200, 162, 74, 0.45)',
          }}
        >
          <iframe
            title={`Ubicación ${carlaEventData.venue}`}
            src={carlaEventData.googleMapsEmbed}
            width="100%"
            className="w-full h-[320px] sm:h-[420px] md:h-[480px]"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </ScrollReveal>

      {/* Botón de Google Maps */}
      <ScrollReveal variant="fadeUp" delay={0.3} className="flex flex-col items-center justify-center">
        <div className="flex justify-center mt-12 w-full">
          <motion.a
            href={carlaEventData.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full font-montserrat text-sm sm:text-base font-bold tracking-[0.2em] uppercase shadow-xl cursor-pointer"
            style={{
              background: '#074A26',
              color: '#D8B86A',
              border: '1.5px solid #C8A24A',
            }}
            whileHover={{ scale: 1.04, background: '#0A5C30' }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <ExternalLink size={18} />
            Abrir en Google Maps
          </motion.a>
        </div>
      </ScrollReveal>
    </section>
  )
}
