import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Search, Wrench, Rocket, Trophy } from 'lucide-react'
import { SITE } from '../content'

gsap.registerPlugin(ScrollTrigger)

const ICONS = [Search, Wrench, Rocket, Trophy]
const { howItWorks } = SITE
const STEPS = howItWorks.steps.map((s, i) => ({ ...s, icon: ICONS[i] }))

export default function HowItWorks() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Connector line draws in on scroll
      gsap.from('.connector-line', {
        scaleX: 0,
        transformOrigin: 'left center',
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.steps-row', start: 'top 70%' },
      })

      // Steps stagger in
      gsap.from('.step-card', {
        y: 50,
        opacity: 0,
        duration: 0.7,
        stagger: 0.18,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.steps-row', start: 'top 72%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="services" className="bg-off-white py-28 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-20 gap-6">
          <div>
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4">// {howItWorks.label}</p>
            <h2 className="font-serif italic text-jet text-5xl md:text-7xl leading-none">{howItWorks.heading}</h2>
          </div>
          <p className="font-sans text-slate-mid text-sm max-w-xs leading-relaxed md:text-right">
            {howItWorks.subhead}
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-0">
            <div className="absolute top-[28px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-[1px] bg-light-gray" />
            <div className="connector-line absolute top-[28px] left-[calc(12.5%+8px)] right-[calc(12.5%+8px)] h-[1px] bg-gradient-to-r from-gold/60 via-gold to-gold/60" />
          </div>

          <div className="steps-row grid grid-cols-4 gap-6">
            {STEPS.map((step, i) => (
              <div key={i} className="step-card flex flex-col">
                {/* Number circle + icon */}
                <div className="flex flex-col items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-charcoal border border-gold/20 flex items-center justify-center mb-3 relative z-10">
                    <step.icon className="w-6 h-6 text-gold" />
                  </div>
                  <span className="font-mono text-gold/40 text-xs tracking-widest">{step.num}</span>
                </div>

                {/* Content */}
                <div className="bg-charcoal rounded-3xl p-6 flex-1 relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />
                  <h3 className="font-sans font-extrabold text-white text-lg mb-1">{step.title}</h3>
                  <p className="font-serif italic text-gold text-sm mb-4">{step.headline}</p>
                  <p className="font-sans text-white/45 text-sm leading-relaxed mb-5">{step.body}</p>
                  <div className="border-t border-white/8 pt-4">
                    <p className="font-mono text-white/25 text-[10px] leading-relaxed tracking-wide">{step.detail}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="lg:hidden steps-row flex flex-col gap-0">
          {STEPS.map((step, i) => (
            <div key={i} className="step-card flex gap-5">
              {/* Left: line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-xl bg-charcoal border border-gold/20 flex items-center justify-center shrink-0">
                  <step.icon className="w-5 h-5 text-gold" />
                </div>
                {i < STEPS.length - 1 && (
                  <div className="w-[1px] flex-1 my-2 bg-gradient-to-b from-gold/30 to-gold/10 min-h-[40px]" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 flex-1">
                <span className="font-mono text-gold/40 text-xs tracking-widest block mb-1">{step.num}</span>
                <h3 className="font-sans font-extrabold text-jet text-lg mb-1">{step.title}</h3>
                <p className="font-serif italic text-gold text-sm mb-3">{step.headline}</p>
                <p className="font-sans text-slate-mid text-sm leading-relaxed mb-3">{step.body}</p>
                <p className="font-mono text-slate-light text-[10px] tracking-wide">{step.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div className="mt-16 bg-charcoal rounded-3xl px-8 py-7 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
          <div>
            <p className="font-sans font-bold text-white text-lg mb-1">{howItWorks.ctaHeading}</p>
            <p className="font-sans text-white/40 text-sm">{howItWorks.ctaSub}</p>
          </div>
          <div className="flex gap-3 shrink-0">
            <a href="#pricing"
              className="font-sans font-semibold text-sm text-gold border border-gold/30 px-5 py-3 rounded-pill hover:bg-gold/10 transition-colors duration-200">
              {howItWorks.ctaSecondary}
            </a>
            <a href="#book"
              className="font-sans font-bold text-sm text-jet bg-gold px-5 py-3 rounded-pill overflow-hidden relative group"
              style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
              <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative">{howItWorks.ctaPrimary}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
