import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Award } from 'lucide-react'
import { PREMIUM } from '../../content'

const { hero } = PREMIUM

export default function PremiumHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-badge',      { y: 16, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.hero-line1',      { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.hero-line2',      { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-sub',        { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-ctas',       { y: 16, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-proof',      { opacity: 0, duration: 0.5 }, '-=0.1')
        .from('.hero-photo',      { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2)
        .from('.hero-photo-card', { y: 20, opacity: 0, duration: 0.6, ease: 'power2.out' }, 0.9)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] bg-forest overflow-hidden flex items-center"
    >
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Gold glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-gold/5 blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[100dvh]">

          {/* Left */}
          <div className="flex flex-col justify-center py-20 lg:py-32">
            <div className="hero-badge inline-flex items-center gap-2.5 border border-gold/30 bg-gold/10 text-gold-muted rounded-pill px-4 py-2 mb-10 w-fit">
              <Award className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono text-xs tracking-widest uppercase">{hero.badge}</span>
              <span className="w-px h-3 bg-gold/30" />
              <span className="font-mono text-xs text-gold/70">{hero.badgeSub}</span>
            </div>

            <h1 className="mb-7 leading-none">
              <span className="hero-line1 block font-sans font-extrabold text-white text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                {hero.line1}
              </span>
              <span className="hero-line2 block font-serif italic text-gold-shimmer text-5xl md:text-6xl lg:text-7xl leading-none mt-2">
                {hero.line2}
              </span>
            </h1>

            <p className="hero-sub font-sans text-white/50 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              {hero.sub}
            </p>

            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-12">
              <Link to="/apply/premium"
                className="inline-flex items-center justify-center gap-2 bg-gold text-midnight font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group"
                style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
                <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative">{hero.cta}</span>
                <span className="relative opacity-60 text-sm">→</span>
              </Link>
              <a href="#premium-process"
                className="inline-flex items-center justify-center gap-2 border border-white/12 text-white/65 font-sans font-semibold px-8 py-4 rounded-pill hover:border-gold/50 hover:text-gold-muted transition-all duration-300">
                {hero.ctaSub}
              </a>
            </div>

            <div className="hero-proof flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[['SK','#C9A84C'],['MT','#E4C56A'],['PS','#A88A3A']].map(([init, c], i) => (
                    <div key={i}
                      className="w-8 h-8 rounded-full border-2 border-parchment flex items-center justify-center text-[10px] font-bold text-white"
                      style={{ backgroundColor: c }}>
                      {init}
                    </div>
                  ))}
                </div>
              </div>
              <div className="h-4 w-px bg-midnight/12 hidden sm:block" />
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-gold text-xs">★</span>)}
                </div>
                <span className="font-mono text-xs text-white/40">{hero.proofSub}50+ students</span>
              </div>
            </div>
          </div>

          {/* Right — editorial photo */}
          <div className="hero-photo hidden lg:flex flex-col gap-5 py-32 relative">
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 shadow-sm" style={{ aspectRatio: '4/5' }}>
              <img
                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=80"
                alt="Career consulting session"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-parchment/30 via-transparent to-transparent" />
            </div>
            <div className="hero-photo-card absolute bottom-36 -left-8 bg-forest-card rounded-2xl px-5 py-4 border border-white/10 shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-t-2xl" />
              <div className="font-mono text-gold text-[10px] tracking-[0.2em] uppercase mb-1.5">Avg. Result</div>
              <div className="font-sans font-extrabold text-white text-2xl leading-none">6 weeks</div>
              <div className="font-sans text-white/40 text-xs mt-1">to signed offer</div>
            </div>
            <div className="hero-photo-card absolute top-36 -right-4 bg-forest-card rounded-2xl px-5 py-4 border border-gold/25 shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/50 to-transparent rounded-t-2xl" />
              <div className="font-mono text-gold text-[10px] tracking-[0.2em] uppercase mb-1.5">Starting at</div>
              <div className="font-sans font-extrabold text-gold text-2xl leading-none">$10</div>
              <div className="font-sans text-white/40 text-xs mt-1">no gatekeeping</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
