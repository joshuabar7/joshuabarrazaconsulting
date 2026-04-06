import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { LAUNCH } from '../../content'

gsap.registerPlugin(ScrollTrigger)

const { process: proc } = LAUNCH

export default function LaunchProcess() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.lp-header', {
        y: 24, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 78%' },
      })
      gsap.from('.lp-step', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.lp-steps', start: 'top 78%' },
      })
      gsap.from('.lp-cta', {
        y: 20, opacity: 0, duration: 0.6,
        scrollTrigger: { trigger: '.lp-cta', start: 'top 85%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="launch-process" ref={containerRef} className="bg-midnight py-24 md:py-32 px-6 md:px-10 relative overflow-hidden">
      {/* Amber top accent */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber/60 to-transparent" />
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-amber/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="lp-header text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-amber/25 bg-amber/6 text-amber rounded-pill px-4 py-1.5 mb-6">
            <span className="font-mono text-xs tracking-widest uppercase">{proc.label}</span>
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight leading-[1.08] mb-4">
            {proc.heading}
          </h2>
          <p className="font-sans text-white/35 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {proc.subhead}
          </p>
        </div>

        {/* Steps */}
        <div className="lp-steps grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
          {proc.steps.map((step, i) => (
            <div key={i} className="lp-step relative bg-slate-card rounded-4xl p-6 border border-white/6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber/50 to-transparent" />

              {/* Connector line (desktop) */}
              {i < proc.steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-amber/20 z-10" />
              )}

              <div className="font-mono text-amber text-[10px] tracking-[0.3em] uppercase mb-4">{step.num}</div>
              <h3 className="font-sans font-extrabold text-white text-lg mb-2">{step.title}</h3>
              <p className="font-sans font-semibold text-amber text-sm mb-3">{step.headline}</p>
              <p className="font-sans text-white/35 text-sm leading-relaxed mb-4">{step.body}</p>
              <p className="font-mono text-amber/30 text-[10px] tracking-wider leading-relaxed">{step.detail}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="lp-cta text-center">
          <a href="/apply/launch"
            className="inline-flex items-center gap-2 bg-amber text-midnight font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group"
            style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
            <span className="absolute inset-0 bg-amber-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative">Apply for The Launch Program</span>
            <span className="relative opacity-60 text-sm">→</span>
          </a>
          <p className="font-mono text-white/20 text-xs mt-4 tracking-wider">Free · No commitment required</p>
        </div>

      </div>
    </section>
  )
}
