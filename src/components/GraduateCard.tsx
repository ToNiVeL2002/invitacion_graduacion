import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'

interface GraduateCardProps {
  name: string
  lastName: string
  degree: string
  university: string
  universityShort: string
  logo: string
  photo: string
  gallery?: readonly { readonly url: string; readonly caption: string }[]
  delay?: number
}

export default function GraduateCard({
  name,
  lastName,
  degree,
  university,
  universityShort,
  logo,
  photo,
  gallery,
  delay = 0,
}: GraduateCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })
  const [activePhoto, setActivePhoto] = useState(photo)

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center text-center w-full max-w-2xl mx-auto"
      initial={{ opacity: 0, y: 25 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: 'easeOut', delay }}
    >
      {/* ── Fotografía con marco dorado circular prominente ────────────────────── */}
      <div className="relative mb-8 group flex flex-col items-center justify-center mx-auto">
        <div
          className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2.5 transition-transform duration-500 hover:scale-[1.02] mx-auto"
          style={{
            background:
              'linear-gradient(135deg, #C8A24A 0%, #E5C77A 50%, #C8A24A 100%)',
            boxShadow:
              '0 16px 45px rgba(0,0,0,0.6), 0 0 35px rgba(200,162,74,0.35)',
          }}
        >
          <div className="w-full h-full rounded-full overflow-hidden bg-[#0E2C52] flex items-center justify-center relative">
            <motion.img
              key={activePhoto}
              src={activePhoto}
              alt={`${name} ${lastName}`}
              className="w-full h-full object-cover relative z-10"
              initial={{ opacity: 0.8, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              loading="lazy"
            />
          </div>
        </div>

        {/* Insignia / Logo Universitario superpuesto */}
        <div
          className="absolute bottom-1 -right-1 sm:bottom-2 sm:right-2 w-16 h-16 sm:w-20 sm:h-20 rounded-full p-2 bg-white border-2 border-[#C8A24A] flex items-center justify-center z-20 shadow-2xl transition-transform duration-300 hover:scale-110 overflow-hidden"
          style={{ boxShadow: '0 8px 25px rgba(0,0,0,0.4)' }}
        >
          <img
            src={logo}
            alt={`Logo ${universityShort}`}
            className="w-full h-full object-contain rounded-full"
          />
        </div>
      </div>

      {/* ── Galería de Miniaturas (si existe) ────────────────────────── */}
      {gallery && gallery.length > 1 && (
        <div className="flex items-center justify-center gap-3 mb-8">
          {gallery.map((item, idx) => {
            const isSelected = activePhoto === item.url
            return (
              <button
                key={idx}
                onClick={() => setActivePhoto(item.url)}
                className={`relative w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 transition-all duration-300 cursor-pointer ${isSelected
                    ? 'border-[#C8A24A] scale-110 shadow-lg'
                    : 'border-white/30 opacity-70 hover:opacity-100 hover:scale-105'
                  }`}
                title={item.caption}
              >
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-cover"
                />
              </button>
            )
          })}
        </div>
      )}

      {/* ── Nombre del Graduado ────────────────────────── */}
      <div className="mb-4 px-2 text-center w-full flex flex-col items-center justify-center">
        <h3 className="font-vibes text-5xl sm:text-7xl md:text-8xl leading-tight text-white drop-shadow-md text-center">
          {name}
        </h3>
        <h3 className="font-vibes text-5xl sm:text-7xl md:text-8xl leading-tight text-[#D8B86A] drop-shadow-md text-center">
          {lastName}
        </h3>
      </div>

      {/* Divisor dorado */}
      <div className="gold-divider mb-6 max-w-[220px] mx-auto" />

      {/* ── Título Profesional ────────────── */}
      <p className="font-lora text-xl sm:text-2xl md:text-3xl italic font-normal mb-3 px-3 text-[#F8F4EC] leading-relaxed text-center w-full">
        {degree}
      </p>

      {/* ── Universidad ───────────────────── */}
      <p className="font-cinzel text-base sm:text-lg md:text-xl tracking-[0.25em] uppercase font-bold text-[#D8B86A] max-w-md leading-normal text-center w-full mt-1">
        {university}
      </p>
    </motion.div>
  )
}
