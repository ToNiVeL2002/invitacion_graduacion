/**
 * GoldParticles — Partículas flotantes doradas decorativas.
 * Usa clases CSS puras (sin JS) para máximo rendimiento en todos los dispositivos.
 * Poner dentro de un contenedor con `position: relative` y `overflow: hidden`.
 */
export default function GoldParticles({ count = 18 }: { count?: number }) {
  // Cada partícula tiene posición, tamaño, opacidad y duración únicos
  const particles = Array.from({ length: count }, (_, i) => {
    const size = 2 + (i % 4) // 2–5 px
    const left = (i * 17 + 3) % 97         // 3–97%
    const top = (i * 23 + 5) % 95           // 5–95%
    const delay = (i * 0.37).toFixed(2)     // 0–6.6s delay
    const duration = 5 + (i % 5)            // 5–9s duration
    const opacity = 0.15 + (i % 5) * 0.09  // 0.15–0.51

    return { size, left, top, delay, duration, opacity, i }
  })

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0" aria-hidden>
      {particles.map(({ size, left, top, delay, duration, opacity, i }) => (
        <span
          key={i}
          className="absolute rounded-full gold-particle"
          style={{
            width: size,
            height: size,
            left: `${left}%`,
            top: `${top}%`,
            opacity,
            background: i % 3 === 0
              ? 'radial-gradient(circle, #E5C77A, #C8A24A)'
              : 'radial-gradient(circle, #fff8e1, #D8B86A)',
            animationDelay: `${delay}s`,
            animationDuration: `${duration}s`,
          }}
        />
      ))}
    </div>
  )
}
