import React, { useEffect } from 'react'
import '../App.css'
import CarlaHero from '../components/carla/CarlaHero'
import CarlaInvitationMessage from '../components/carla/CarlaInvitationMessage'
import CarlaGraduates from '../components/carla/CarlaGraduates'
import CarlaCountdown from '../components/carla/CarlaCountdown'
import CarlaEventInfo from '../components/carla/CarlaEventInfo'
import CarlaLocation from '../components/carla/CarlaLocation'
import CarlaFooter from '../components/carla/CarlaFooter'
import ScrollProgressBar from '../components/ScrollProgressBar'
import WaveDivider from '../components/WaveDivider'
import GoldParticles from '../components/GoldParticles'

// Colores del tema institucional (Verde Institucional & Marfil Cálido)
const FOREST_GREEN = '#074A26'
const IVORY = '#F8F4EC'

export const CarlaInvitation: React.FC = () => {
  useEffect(() => {
    document.title = 'Graduación — Dra. Carla Mishel Gutierrez Veliz (Odontología)'
  }, [])

  return (
    <main className="relative">
      {/* ── Barra de progreso de scroll ── */}
      <ScrollProgressBar />

      {/* ── Hero ── */}
      <CarlaHero />

      {/* Transición Hero (green) → InvitationMessage (ivory) */}
      <WaveDivider fromColor={FOREST_GREEN} toColor={IVORY} />

      {/* ── Mensaje del Anfitrión ── */}
      <CarlaInvitationMessage />

      {/* Transición InvitationMessage (ivory) → Graduates (green) */}
      <WaveDivider fromColor={IVORY} toColor={FOREST_GREEN} />

      {/* ── Graduados (con partículas flotantes doradas) ── */}
      <div className="relative overflow-hidden">
        <GoldParticles count={20} />
        <CarlaGraduates />
      </div>

      {/* Transición Graduates (green) → Countdown (ivory) */}
      <WaveDivider fromColor={FOREST_GREEN} toColor={IVORY} />

      {/* ── Cuenta Regresiva ── */}
      <CarlaCountdown />

      {/* Transición Countdown (ivory) → EventInfo (green) */}
      <WaveDivider fromColor={IVORY} toColor={FOREST_GREEN} />

      {/* ── Información del Evento (con partículas flotantes doradas) ── */}
      <div className="relative overflow-hidden">
        <GoldParticles count={16} />
        <CarlaEventInfo />
      </div>

      {/* Transición EventInfo (green) → Location (ivory) */}
      <WaveDivider fromColor={FOREST_GREEN} toColor={IVORY} />

      {/* ── Ubicación ── */}
      <CarlaLocation />

      {/* Transición Location (ivory) → Footer (green) */}
      <WaveDivider fromColor={IVORY} toColor={FOREST_GREEN} />

      {/* ── Footer (con partículas sutiles) ── */}
      <div className="relative overflow-hidden">
        <GoldParticles count={12} />
        <CarlaFooter />
      </div>
    </main>
  )
}

export default CarlaInvitation
