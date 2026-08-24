import React, { useEffect } from 'react'
import '../App.css'
import Hero from '../components/Hero'
import InvitationMessage from '../components/InvitationMessage'
import Graduates from '../components/Graduates'
import Countdown from '../components/Countdown'
import EventInfo from '../components/EventInfo'
import Location from '../components/Location'
import Footer from '../components/Footer'
import ScrollProgressBar from '../components/ScrollProgressBar'
import WaveDivider from '../components/WaveDivider'
import GoldParticles from '../components/GoldParticles'

// Colores del tema
const NAVY = '#0B2341'
const IVORY = '#F8F4EC'

export const SamuelInvitation: React.FC = () => {
  useEffect(() => {
    document.title = 'Graduación — Sbtt. Res. Ing. Samuel Antonio Veliz Benavides'
  }, [])

  return (
    <main className="relative">
      {/* ── Barra de progreso de scroll ── */}
      <ScrollProgressBar />

      {/* ── Hero ── */}
      <Hero />

      {/* Transición Hero (navy) → InvitationMessage (ivory) */}
      <WaveDivider fromColor={NAVY} toColor={IVORY} />

      {/* ── Mensaje del Anfitrión ── */}
      <InvitationMessage />

      {/* Transición InvitationMessage (ivory) → Graduates (navy) */}
      <WaveDivider fromColor={IVORY} toColor={NAVY} />

      {/* ── Graduados (con partículas flotantes doradas) ── */}
      <div className="relative overflow-hidden">
        <GoldParticles count={20} />
        <Graduates />
      </div>

      {/* Transición Graduates (navy) → Countdown (ivory) */}
      <WaveDivider fromColor={NAVY} toColor={IVORY} />

      {/* ── Cuenta Regresiva ── */}
      <Countdown />

      {/* Transición Countdown (ivory) → EventInfo (navy) */}
      <WaveDivider fromColor={IVORY} toColor={NAVY} />

      {/* ── Información del Evento (con partículas flotantes doradas) ── */}
      <div className="relative overflow-hidden">
        <GoldParticles count={16} />
        <EventInfo />
      </div>

      {/* Transición EventInfo (navy) → Location (ivory) */}
      <WaveDivider fromColor={NAVY} toColor={IVORY} />

      {/* ── Ubicación ── */}
      <Location />

      {/* Transición Location (ivory) → Footer (navy) */}
      <WaveDivider fromColor={IVORY} toColor={NAVY} />

      {/* ── Footer (con partículas sutiles) ── */}
      <div className="relative overflow-hidden">
        <GoldParticles count={12} />
        <Footer />
      </div>
    </main>
  )
}

export default SamuelInvitation
