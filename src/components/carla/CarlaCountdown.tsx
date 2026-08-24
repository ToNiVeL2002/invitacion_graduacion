import { useEffect, useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { carlaEventData } from '../../data/carlaEvent'

dayjs.extend(duration)

interface TimeUnit {
  value: number
  label: string
}

function CountBlock({ value, label }: { value: number; label: string }) {
  const display = String(value).padStart(2, '0')

  return (
    <div className="flex flex-col items-center justify-center gap-2.5 mx-auto">
      {/* Tarjeta de número */}
      <div
        className="relative w-18 h-20 sm:w-24 sm:h-26 md:w-28 md:h-30 flex items-center justify-center rounded-xl shadow-xl transition-transform duration-300 hover:scale-105 mx-auto"
        style={{
          background: 'linear-gradient(145deg, #074A26 0%, #0D6B39 100%)',
          border: '1.5px solid rgba(200,162,74,0.45)',
          boxShadow:
            '0 10px 30px rgba(7,74,38,0.2), inset 0 1px 0 rgba(255,255,255,0.1)',
        }}
      >
        <AnimatePresence mode="popLayout">
          <motion.span
            key={display}
            className="font-cinzel text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#D8B86A] text-center"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>

      {/* Etiqueta */}
      <p className="font-montserrat text-xs sm:text-sm font-bold tracking-[0.25em] uppercase text-[#074A26] text-center">
        {label}
      </p>
    </div>
  )
}

export default function CarlaCountdown() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px' })

  const targetDate = dayjs(carlaEventData.eventDate)

  const getRemaining = (): TimeUnit[] => {
    const diff = targetDate.diff(dayjs())
    if (diff <= 0) return []

    const d = dayjs.duration(diff)
    return [
      { value: Math.floor(d.asDays()), label: 'Días' },
      { value: d.hours(), label: 'Horas' },
      { value: d.minutes(), label: 'Minutos' },
      { value: d.seconds(), label: 'Segundos' },
    ]
  }

  const [units, setUnits] = useState<TimeUnit[]>(getRemaining())

  useEffect(() => {
    const interval = setInterval(() => {
      setUnits(getRemaining())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const isOver = units.length === 0

  return (
    <section
      ref={ref}
      id="cuenta-regresiva"
      className="w-full py-24 sm:py-36 md:py-44 px-4 sm:px-8 flex flex-col items-center justify-center relative overflow-hidden bg-[#F8F4EC]"
    >
      <motion.div
        className="relative w-full max-w-4xl mx-auto text-center flex flex-col items-center justify-center z-10"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
      >
        {/* Encabezado */}
        <p className="font-cinzel text-sm sm:text-base tracking-[0.3em] uppercase mb-3 font-semibold text-[#C8A24A] text-center w-full">
          La celebración comienza en
        </p>

        <h2 className="font-cormorant text-4xl sm:text-5xl md:text-6xl font-light mb-4 text-[#06381D] text-center w-full">
          {isOver ? '¡Hoy celebramos este gran logro!' : 'Faltan'}
        </h2>

        <div className="gold-divider mx-auto mb-14 max-w-[200px] sm:max-w-xs" />

        {/* Reloj Responsivo Centrado */}
        {!isOver && (
          <div className="grid grid-cols-2 sm:flex sm:items-center sm:justify-center gap-6 sm:gap-8 md:gap-12 max-w-2xl mx-auto w-full justify-items-center">
            {units.map((unit, i) => (
              <div
                key={unit.label}
                className="flex items-center justify-center gap-6 md:gap-12"
              >
                <CountBlock value={unit.value} label={unit.label} />
                {i < units.length - 1 && (
                  <div className="hidden sm:flex flex-col gap-2 pb-6 opacity-60">
                    <div className="w-2 h-2 rounded-full bg-[#C8A24A]" />
                    <div className="w-2 h-2 rounded-full bg-[#C8A24A]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {isOver && (
          <p className="font-lora text-2xl italic text-[#C8A24A] text-center w-full">
            {carlaEventData.eventDateDisplay}
          </p>
        )}

        {/* Fecha */}
        <div className="gold-divider mx-auto mt-14 mb-4 max-w-[200px] sm:max-w-xs" />
        <p className="font-cinzel text-sm sm:text-base tracking-[0.2em] uppercase font-bold text-[#074A26] text-center w-full">
          {carlaEventData.eventDateDisplay} — {carlaEventData.eventTime}
        </p>
      </motion.div>
    </section>
  )
}
