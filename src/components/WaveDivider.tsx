/**
 * WaveDivider — Separador SVG de ola animada entre secciones.
 * fromColor: color de la sección que termina (top)
 * toColor:   color de la sección que empieza (bottom, el fill de la ola)
 * flip:      si true, la ola está boca abajo
 */
interface WaveDividerProps {
  fromColor: string
  toColor: string
  flip?: boolean
  goldAccent?: boolean
}

export default function WaveDivider({
  fromColor,
  toColor,
  flip = false,
  goldAccent = true,
}: WaveDividerProps) {
  return (
    <div
      className="relative w-full overflow-hidden leading-[0] select-none"
      style={{
        background: fromColor,
        transform: flip ? 'scaleY(-1)' : undefined,
      }}
    >
      <svg
        viewBox="0 0 1440 90"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="w-full block"
        style={{ height: 'clamp(40px, 6vw, 90px)' }}
      >
        {/* Ola de relleno principal */}
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,90 L0,90 Z"
          fill={toColor}
        />

        {/* Línea de acento dorado encima de la ola (sutil shimmer) */}
        {goldAccent && (
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40"
            fill="none"
            stroke="url(#goldWaveGrad)"
            strokeWidth="1.5"
            opacity="0.7"
          />
        )}

        <defs>
          <linearGradient id="goldWaveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="20%" stopColor="#C8A24A" />
            <stop offset="50%" stopColor="#E5C77A" />
            <stop offset="80%" stopColor="#C8A24A" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              from="-1 0"
              to="1 0"
              dur="4s"
              repeatCount="indefinite"
              additive="sum"
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
