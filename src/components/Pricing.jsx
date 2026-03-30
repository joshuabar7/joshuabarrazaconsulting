import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import { SITE } from '../content'

gsap.registerPlugin(ScrollTrigger)

const { pricing } = SITE
const TIERS = pricing.tiers

export default function Pricing() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.pricing-card', {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="pricing" className="bg-jet py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }} />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-6 gap-6">
          <div>
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4">// {pricing.label}</p>
            <h2 className="font-serif italic text-white text-5xl md:text-7xl leading-none">{pricing.heading}</h2>
          </div>
          <p className="font-sans text-white/35 text-sm max-w-sm leading-relaxed md:text-right">
            {pricing.subhead}
          </p>
        </div>

        {/* Affordable callout bar */}
        <div className="mb-12 bg-gold/10 border border-gold/25 rounded-2xl px-6 py-4 flex flex-col sm:flex-row sm:items-center gap-3">
          <span className="text-gold text-lg">✦</span>
          <p className="font-sans text-gold/80 text-sm leading-relaxed">
            {pricing.callout}
          </p>
        </div>

        {/* 4-card grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {TIERS.map((tier, i) => (
            <div key={i}
              className={`pricing-card relative rounded-4xl overflow-hidden flex flex-col ${
                tier.popular
                  ? 'bg-charcoal ring-1 ring-gold/60 shadow-2xl shadow-gold/10 z-10'
                  : 'bg-charcoal border border-white/6'
              }`}>

              {/* Top accent */}
              <div className={`h-[2px] ${tier.popular
                ? 'bg-gradient-to-r from-gold-muted via-gold to-gold-light'
                : 'bg-gradient-to-r from-transparent via-white/10 to-transparent'}`} />

              {/* Badge */}
              {tier.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className={`font-mono text-[10px] px-4 py-1.5 rounded-pill tracking-[0.2em] uppercase whitespace-nowrap font-bold ${
                    tier.popular ? 'bg-gold text-jet' : 'bg-charcoal-soft border border-gold/40 text-gold'
                  }`}>
                    {tier.badge}
                  </span>
                </div>
              )}

              <div className="p-7 flex flex-col flex-1">
                {/* Name + price */}
                <div className="mb-6 mt-2">
                  <h3 className={`font-sans font-bold text-sm mb-3 ${tier.popular ? 'text-gold/70' : 'text-white/30'}`}>
                    {tier.name}
                  </h3>
                  <div className="flex items-end gap-1.5 mb-3">
                    <span className={`font-sans font-extrabold text-5xl leading-none ${tier.popular ? 'text-gold-shimmer' : 'text-white'}`}>
                      {tier.price}
                    </span>
                    <span className="font-mono text-white/20 text-xs mb-1.5">one-time</span>
                  </div>
                  <p className="font-sans text-white/40 text-sm leading-relaxed">{tier.desc}</p>
                </div>

                {/* Features */}
                <ul className="flex-1 space-y-2.5 mb-7">
                  {tier.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2.5">
                      <Check className="w-3.5 h-3.5 mt-0.5 shrink-0 text-gold" />
                      <span className="font-sans text-white/50 text-xs leading-relaxed">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a href={tier.href}
                  className={`block text-center font-sans font-bold text-sm py-3.5 rounded-pill overflow-hidden relative group ${
                    tier.popular
                      ? 'bg-gold text-jet'
                      : 'bg-white/6 text-white border border-white/10 hover:border-gold/30 hover:text-gold'
                  }`}
                  style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
                  {tier.popular && (
                    <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300" />
                  )}
                  <span className="relative">{tier.cta}</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-mono text-white/20 text-xs mt-10 tracking-wider">
          {pricing.footnote}
        </p>
      </div>
    </section>
  )
}
