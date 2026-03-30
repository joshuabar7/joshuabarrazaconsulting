import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const STATEMENTS = [
  {
    serif: 'Your resume is not a biography.',
    mono: 'It is a technical document engineered for one outcome: the callback.',
    accent: false,
  },
  {
    serif: 'Recruiters spend 7 seconds.',
    mono: 'We engineer every single one of them.',
    accent: true,
  },
  {
    serif: 'LinkedIn is not a résumé mirror.',
    mono: 'It is an inbound recruitment engine - when built correctly.',
    accent: false,
  },
  {
    serif: 'The job search is a numbers game.',
    mono: 'Until you learn to change the numbers.',
    accent: true,
  },
]

export default function Philosophy() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      STATEMENTS.forEach((_, i) => {
        gsap.from(`.phil-serif-${i}`, {
          x: -60, opacity: 0, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: `.phil-pair-${i}`, start: 'top 78%' },
        })
        gsap.from(`.phil-mono-${i}`, {
          x: 40, opacity: 0, duration: 0.6, delay: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: `.phil-pair-${i}`, start: 'top 78%' },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="about" className="relative bg-jet overflow-hidden py-32 px-6">
      {/* Subtle geometric grid */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }}
      />
      {/* Radial gold glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-gold/5 blur-3xl pointer-events-none" />

      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-20">// Philosophy</p>

        {STATEMENTS.map((s, i) => (
          <div key={i} className={`phil-pair-${i}`}>
            <div className="mb-20">
              <p className={`phil-serif-${i} font-serif italic leading-tight mb-4 text-4xl md:text-6xl ${
                s.accent ? 'text-white' : 'text-white/45'
              }`}>
                {s.serif}
              </p>
              <p className={`phil-mono-${i} font-mono text-sm md:text-base ${
                s.accent ? 'text-gold' : 'text-white/20'
              }`}>
                {s.mono}
              </p>
            </div>
            {i < STATEMENTS.length - 1 && (
              <div className="border-t border-white/6 mb-20" />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
