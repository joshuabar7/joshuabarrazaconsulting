import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import { HOME } from '../../content'

gsap.registerPlugin(ScrollTrigger)

const { trackSplit } = HOME

export default function TrackSplit() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.split-header', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 75%' },
      })
      gsap.from('.split-card', {
        y: 40, opacity: 0, duration: 0.9, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.split-cards', start: 'top 80%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="tracks" ref={containerRef} className="bg-forest py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="split-header text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-slate/15 bg-slate/5 rounded-pill px-4 py-1.5 mb-6">
            <span className="font-mono text-xs tracking-widest uppercase text-white/50">{trackSplit.label}</span>
          </div>
          <h2 className="font-sans font-extrabold text-white text-3xl md:text-5xl tracking-tight leading-[1.08] mb-4">
            {trackSplit.heading}
          </h2>
          <p className="font-sans text-white/50 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            {trackSplit.subhead}
          </p>
        </div>

        {/* Two cards — equal weight */}
        <div className="split-cards grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">

          {/* Launch Program card — light surface, amber accent */}
          <div className="split-card relative bg-forest-lift rounded-4xl p-8 md:p-10 overflow-hidden border border-white/10 flex flex-col">
            {/* Amber top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber to-transparent" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-amber/35 bg-amber/10 text-amber-muted rounded-pill px-4 py-1.5 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
              <span className="font-mono text-[10px] tracking-widest uppercase">{trackSplit.launch.badge}</span>
            </div>

            {/* Tagline */}
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 mb-3">
              {trackSplit.launch.tagline}
            </p>

            {/* Heading */}
            <h3 className="font-sans font-extrabold text-white text-2xl md:text-3xl leading-snug mb-4">
              College to career — guided.
            </h3>

            {/* Sub */}
            <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed mb-8">
              {trackSplit.launch.sub}
            </p>

            {/* Services list */}
            <ul className="space-y-3 mb-10 flex-grow">
              {trackSplit.launch.services.map((service, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-amber/15 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-amber-muted" strokeWidth={2.5} />
                  </div>
                  <span className="font-sans text-sm text-white/70">{service}</span>
                </li>
              ))}
            </ul>

            {/* Proof + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-amber-muted tracking-wider">{trackSplit.launch.proof}</span>
              <Link
                to={trackSplit.launch.href}
                className="inline-flex items-center gap-2 border-2 border-amber text-amber-muted font-sans font-bold text-sm px-6 py-3 rounded-pill hover:bg-amber hover:text-white transition-all duration-300 shrink-0"
              >
                {trackSplit.launch.cta}
                <span className="text-xs opacity-70">→</span>
              </Link>
            </div>
          </div>

          {/* JBC Premium card — light surface, gold accent */}
          <div className="split-card relative bg-forest-card rounded-4xl p-8 md:p-10 overflow-hidden border border-white/10 shadow-sm flex flex-col">
            {/* Gold top line */}
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            {/* Badge */}
            <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/10 text-gold-muted rounded-pill px-4 py-1.5 mb-6 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
              <span className="font-mono text-[10px] tracking-widest uppercase">{trackSplit.premium.badge}</span>
              <span className="w-px h-3 bg-gold/25" />
              <span className="font-mono text-[10px] text-gold/60">{trackSplit.premium.badgeSub}</span>
            </div>

            {/* Tagline */}
            <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-white/50 mb-3">
              {trackSplit.premium.tagline}
            </p>

            {/* Heading */}
            <h3 className="font-sans font-extrabold text-white text-2xl md:text-3xl leading-snug mb-4">
              Post-grad. Focused. Results.
            </h3>

            {/* Sub */}
            <p className="font-sans text-white/50 text-sm md:text-base leading-relaxed mb-8">
              {trackSplit.premium.sub}
            </p>

            {/* Services list */}
            <ul className="space-y-3 mb-10 flex-grow">
              {trackSplit.premium.services.map((service, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-gold/12 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3 text-gold-muted" strokeWidth={2.5} />
                  </div>
                  <span className="font-sans text-sm text-white/65">{service}</span>
                </li>
              ))}
            </ul>

            {/* Proof + CTA */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-white/10">
              <span className="font-mono text-xs text-gold-muted tracking-wider">{trackSplit.premium.proof}</span>
              <Link
                to={trackSplit.premium.href}
                className="inline-flex items-center gap-2 bg-gold text-midnight font-sans font-bold text-sm px-6 py-3 rounded-pill overflow-hidden relative group shrink-0"
                style={{ transition: 'transform 0.2s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative">{trackSplit.premium.cta}</span>
                <span className="relative text-xs opacity-60">→</span>
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
