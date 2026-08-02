'use client'
import { useEffect, useState } from 'react'

export default function ScrollProgressBar() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(pct)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[9999] h-[3px] pointer-events-none"
      style={{ background: 'rgba(11,35,65,0.3)' }}
    >
      <div
        className="h-full transition-all duration-75 ease-linear"
        style={{
          width: `${progress}%`,
          background:
            'linear-gradient(to right, #C8A24A, #E5C77A 50%, #C8A24A)',
          boxShadow: '0 0 8px rgba(200,162,74,0.7), 0 0 2px rgba(229,199,122,0.9)',
        }}
      />
    </div>
  )
}
