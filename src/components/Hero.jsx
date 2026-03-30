import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ChevronDown, Award } from 'lucide-react'
import { SITE } from '../content'

gsap.registerPlugin(ScrollTrigger)

const { hero } = SITE

export default function Hero() {
  const containerRef = useRef(null)
  const bgRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })
      tl.from('.hero-badge',   { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.hero-line1',   { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
        .from('.hero-line2',   { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.45')
        .from('.hero-sub',     { y: 20, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-ctas',    { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-proof',   { opacity: 0, duration: 0.5 }, '-=0.1')
        .from('.hero-scroll',  { opacity: 0, duration: 0.4 }, '-=0.2')

      gsap.to(bgRef.current, {
        yPercent: 25, ease: 'none',
        scrollTrigger: { trigger: containerRef.current, start: 'top top', end: 'bottom top', scrub: true },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="relative h-screen min-h-[100dvh] overflow-hidden bg-jet">
      {/* Hero background - professional coaching / executive feel */}
      <img
        ref={bgRef}
        src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1920&q=80"
        alt=""
        className="absolute inset-0 w-full h-[130%] object-cover object-top opacity-30"
        loading="eager"
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-jet via-jet/85 to-jet/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-jet/80 via-jet/30 to-transparent" />

      {/* Gold accent line - top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-60" />

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-10 md:p-20 max-w-5xl">

        {/* Agency badge */}
        <div className="hero-badge inline-flex items-center gap-2.5 border border-gold/30 bg-gold/10 text-gold rounded-pill px-4 py-2 mb-8 backdrop-blur-sm">
          <Award className="w-3.5 h-3.5" />
          <span className="font-mono text-xs tracking-widest uppercase">{hero.badge}</span>
          <span className="w-px h-3 bg-gold/30" />
          <span className="font-mono text-xs text-gold/60">{hero.badgeSub}</span>
        </div>

        <h1 className="mb-6 leading-none">
          <span className="hero-line1 block font-sans font-extrabold text-white text-4xl md:text-6xl lg:text-7xl tracking-tight leading-[1.05]">
            {hero.line1}
          </span>
          <span className="hero-line2 block font-serif italic text-gold-shimmer text-5xl md:text-7xl lg:text-[6.5rem] leading-none mt-1">
            {hero.line2}
          </span>
        </h1>

        <p className="hero-sub font-sans text-white/45 text-base md:text-lg max-w-xl leading-relaxed mb-10">
          {hero.sub}
        </p>

        <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-12">
          <a href="#book"
            className="inline-flex items-center justify-center gap-2 bg-gold text-jet font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group"
            style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
          >
            <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative">{hero.cta}</span>
            <span className="relative opacity-60 text-sm">→</span>
          </a>
          <a href="#services"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white font-sans font-semibold px-8 py-4 rounded-pill hover:border-gold/40 hover:text-gold transition-all duration-300">
            {hero.ctaSub}
          </a>
        </div>

        {/* Social proof */}
        <div className="hero-proof flex flex-wrap items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2">
              {[['SK','#C9A84C'],['MT','#E4C56A'],['PS','#A88A3A']].map(([init, c], i) => (
                <div key={i} className="w-8 h-8 rounded-full border-2 border-jet flex items-center justify-center text-[10px] font-bold text-jet" style={{ backgroundColor: c }}>
                  {init}
                </div>
              ))}
            </div>
            <span className="font-sans text-sm text-white/40">{hero.proof}</span>
          </div>
          <div className="h-4 w-px bg-white/15 hidden sm:block" />
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_,i) => <span key={i} className="text-gold text-xs">★</span>)}
            </div>
            <span className="font-mono text-xs text-white/35">{hero.proofSub}</span>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="hero-scroll absolute bottom-10 right-10 flex flex-col items-center gap-2 opacity-20">
        <span className="font-mono text-white text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <ChevronDown className="text-white w-4 h-4 animate-bounce" />
      </div>
    </section>
  )
}
