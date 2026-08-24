import { motion } from 'framer-motion'
import { carlaEventData } from '../../data/carlaEvent'
import { ChevronDown } from 'lucide-react'
import GoldParticles from '../GoldParticles'

export default function CarlaHero() {
  const { graduate, heroQuote } = carlaEventData

  const handleOpenInvitation = () => {
    const nextSection = document.getElementById('mensaje')
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex flex-col items-center justify-center py-12 px-6 sm:px-12 md:px-16 overflow-hidden select-none"
      style={{ backgroundColor: '#074A26' }}
    >
      {/* ── Fondo Responsivo: Frontis de Odontología ── */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center transition-transform duration-1000 scale-105"
        style={{ backgroundImage: `url(${graduate.frontis})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(circle at center, rgba(6,56,29,0.22) 0%, rgba(6,56,29,0.58) 85%), linear-gradient(to bottom, rgba(6,56,29,0.15) 0%, rgba(6,56,29,0.72) 100%)',
          }}
        />
      </div>

      {/* ── Partículas flotantes doradas ─────────────────── */}
      <GoldParticles count={24} />

      {/* ── Marco Ornamental perimetral ── */}
      <div className="absolute inset-3 sm:inset-6 border border-[rgba(200,162,74,0.4)] pointer-events-none z-10 rounded-sm">
        <div className="corner-ornament tl" />
        <div className="corner-ornament tr" />
        <div className="corner-ornament bl" />
        <div className="corner-ornament br" />
      </div>

      {/* ── Contenido Principal ─────────────────────────── */}
      <div className="relative z-20 flex flex-col items-center gap-2 text-center px-4 max-w-4xl w-full my-auto">
        {/* Logo universitario en el centro */}
        <motion.div
          className="flex flex-col items-center gap-3 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
        >
          <div
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full p-2 bg-white flex items-center justify-center transition-transform duration-300 hover:scale-110 shadow-2xl overflow-hidden"
            style={{
              backgroundColor: '#ffffff',
              boxShadow:
                '0 12px 35px rgba(0,0,0,0.6), 0 0 30px rgba(200,162,74,0.4), 0 0 0 3px var(--color-gold)',
            }}
          >
            <img
              src={graduate.logo}
              alt={`Logo ${graduate.universityShort}`}
              className="w-full h-full object-contain rounded-full"
            />
          </div>
          <p
            className="font-cinzel text-sm sm:text-base font-bold tracking-[0.3em] uppercase drop-shadow-md mt-1 px-4"
            style={{ color: 'var(--color-gold-light)' }}
          >
            {graduate.university}
          </p>
        </motion.div>

        {/* Separador superior */}
        <motion.div
          className="gold-divider mb-6 max-w-50 sm:max-w-70 mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        />

        {/* Lema / Frase Principal */}
        <motion.h1
          initial={{ opacity: 0, y: 25, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-light text-white leading-snug tracking-wide uppercase drop-shadow-xl font-cormorant w-full"
          style={{
            maxWidth: '680px',
            margin: '0 auto',
            padding: '0 24px',
            fontSize: 'clamp(1.15rem, 3.5vw, 2.25rem)',
          }}
        >
          "{heroQuote}"
        </motion.h1>

        {/* Separador inferior */}
        <motion.div
          className="gold-divider mt-6 mb-8 max-w-[200px] sm:max-w-[280px] mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        />

        {/* ── Botón "Abrir Invitación" ── */}
        <motion.div
          className="flex flex-col items-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <button
            onClick={handleOpenInvitation}
            className="group relative inline-flex items-center justify-center gap-3 rounded-full cursor-pointer transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl whitespace-nowrap"
            style={{
              marginTop: '50px',
              padding: '8px 24px',
              background:
                'linear-gradient(135deg, #C8A24A 0%, #E5C77A 50%, #C8A24A 100%)',
              color: '#06381D',
            }}
          >
            <span className="font-cinzel text-base sm:text-lg font-bold tracking-wider uppercase leading-none">
              Abrir Invitación
            </span>
            <ChevronDown
              size={22}
              className="transition-transform duration-300 group-hover:translate-y-1 shrink-0"
            />
          </button>

          {/* Indicador sutil */}
          <motion.p
            className="font-lora italic text-sm sm:text-base text-white/75 tracking-wide drop-shadow-sm mt-1"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: 'easeInOut' }}
          >
            Toca para desplegar la tarjeta
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
