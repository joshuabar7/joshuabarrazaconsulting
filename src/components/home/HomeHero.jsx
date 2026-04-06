import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { HOME } from '../../content'

const { hero } = HOME

export default function HomeHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-badge',   { y: 16, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.hero-line1',   { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.hero-line2',   { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-sub',     { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-ctas',    { y: 16, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-proof',   { opacity: 0, duration: 0.5 }, '-=0.1')
        .from('.hero-visual',  { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2)
        .from('.hero-card',    { y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, 0.9)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] bg-midnight overflow-hidden flex items-center"
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[100dvh]">

          {/* Left — text */}
          <div className="flex flex-col justify-center py-20 lg:py-32">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 border border-gold/25 bg-gold/6 text-gold rounded-pill px-4 py-2 mb-10 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot shrink-0" />
              <span className="font-mono text-xs tracking-widest uppercase">{hero.badge}</span>
            </div>

            {/* Headline */}
            <h1 className="mb-7 leading-none">
              <span className="hero-line1 block font-sans font-extrabold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                {hero.line1}
              </span>
              <span className="hero-line2 block font-serif italic text-gold-shimmer text-5xl md:text-6xl lg:text-7xl leading-none mt-2">
                {hero.line2}
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub font-sans text-white/40 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              {hero.sub}
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="#tracks"
                className="inline-flex items-center justify-center gap-2 bg-gold text-midnight font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group"
                style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative">{hero.cta}</span>
                <span className="relative opacity-60 text-sm">↓</span>
              </Link>
              <Link
                to="/impact"
                className="inline-flex items-center justify-center gap-2 border border-white/15 text-white/70 font-sans font-semibold px-8 py-4 rounded-pill hover:border-gold/40 hover:text-gold transition-all duration-300"
              >
                {hero.ctaSub}
              </Link>
            </div>

            {/* Social proof */}
            <div className="hero-proof flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[['SK','#C9A84C'],['MT','#E8A830'],['PS','#A88A3A']].map(([init, c], i) => (
                    <div key={i}
                      className="w-8 h-8 rounded-full border-2 border-midnight flex items-center justify-center text-[10px] font-bold text-midnight"
                      style={{ backgroundColor: c }}>
                      {init}
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-4 w-px bg-white/10 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-gold text-xs">★</span>)}
                </div>
                <span className="font-mono text-xs text-white/30">{hero.proofSub}50+ students</span>
              </div>
            </div>
          </div>

          {/* Right — dual track visual */}
          <div className="hero-visual hidden lg:flex flex-col gap-4 py-32 relative">

            {/* Launch card */}
            <div className="hero-card relative bg-ivory rounded-3xl p-7 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent" />
              <div className="inline-flex items-center gap-2 border border-amber/30 bg-amber/10 text-amber rounded-pill px-3 py-1 mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase">The Launch Program</span>
              </div>
              <p className="font-sans font-bold text-midnight text-lg leading-snug mb-2">Free advising for students</p>
              <p className="font-sans text-slate-mid text-sm leading-relaxed mb-4">College apps, internships, career direction. No cost barrier.</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-amber text-xs tracking-wider">Free for students</span>
                <Link to="/launch" className="font-sans text-xs text-midnight font-semibold bg-amber/15 hover:bg-amber/25 px-3 py-1.5 rounded-pill transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Premium card */}
            <div className="hero-card relative bg-slate-card rounded-3xl p-7 overflow-hidden border border-white/6">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <div className="inline-flex items-center gap-2 border border-gold/30 bg-gold/8 text-gold rounded-pill px-3 py-1 mb-4">
                <span className="font-mono text-[10px] tracking-widest uppercase">JBC Premium</span>
              </div>
              <p className="font-sans font-bold text-white text-lg leading-snug mb-2">Post-grad career coaching</p>
              <p className="font-sans text-white/40 text-sm leading-relaxed mb-4">Job search, resume + LinkedIn, interview prep. Starting at $10.</p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-gold text-xs tracking-wider">Starting at $10</span>
                <Link to="/premium" className="font-sans text-xs text-midnight font-semibold bg-gold hover:bg-gold-light px-3 py-1.5 rounded-pill transition-colors">
                  Learn more →
                </Link>
              </div>
            </div>

            {/* Floating stat */}
            <div className="hero-card absolute -bottom-2 -right-6 bg-midnight-lift rounded-2xl px-5 py-4 border border-white/8 shadow-2xl">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-t-2xl" />
              <div className="font-mono text-gold text-[10px] tracking-[0.2em] uppercase mb-1.5">Avg. Result</div>
              <div className="font-sans font-extrabold text-white text-2xl leading-none">6 weeks</div>
              <div className="font-sans text-white/30 text-xs mt-1">to signed offer</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
