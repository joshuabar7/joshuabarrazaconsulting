import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Sparkles } from 'lucide-react'
import { LAUNCH } from '../../content'

const { hero } = LAUNCH

export default function LaunchHero() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.lhero-badge',  { y: 16, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.lhero-line1',  { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.lhero-line2',  { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.lhero-sub',    { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.lhero-ctas',   { y: 16, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.lhero-cards',  { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] bg-ivory overflow-hidden flex items-center"
    >
      {/* Amber top line */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber to-transparent" />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(232,168,48,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(232,168,48,.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Amber glow */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-amber/8 blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[100dvh]">

          {/* Left — text */}
          <div className="flex flex-col justify-center py-20 lg:py-32">

            {/* Badge */}
            <div className="lhero-badge inline-flex items-center gap-2.5 border border-amber/35 bg-amber/10 text-amber-muted rounded-pill px-4 py-2 mb-10 w-fit">
              <Sparkles className="w-3.5 h-3.5 shrink-0" />
              <span className="font-mono text-xs tracking-widest uppercase">{hero.badge}</span>
              <span className="w-px h-3 bg-amber/25" />
              <span className="font-mono text-xs text-amber/60">Free Program</span>
            </div>

            {/* Headline */}
            <h1 className="mb-7 leading-none">
              <span className="lhero-line1 block font-sans font-extrabold text-midnight text-4xl md:text-5xl lg:text-6xl tracking-tight leading-[1.05]">
                {hero.line1}
              </span>
              <span className="lhero-line2 block font-serif italic text-amber-shimmer text-5xl md:text-6xl lg:text-7xl leading-none mt-2">
                {hero.line2}
              </span>
            </h1>

            {/* Sub */}
            <p className="lhero-sub font-sans text-midnight/50 text-base md:text-lg max-w-lg leading-relaxed mb-10">
              {hero.sub}
            </p>

            {/* CTAs */}
            <div className="lhero-ctas flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                to="/apply/launch"
                className="inline-flex items-center justify-center gap-2 bg-amber text-midnight font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group"
                style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
              >
                <span className="absolute inset-0 bg-amber-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative">{hero.cta}</span>
                <span className="relative opacity-60 text-sm">→</span>
              </Link>
              <a
                href="#launch-process"
                className="inline-flex items-center justify-center gap-2 border border-midnight/20 text-midnight/70 font-sans font-semibold px-8 py-4 rounded-pill hover:border-amber/50 hover:text-amber-muted transition-all duration-300"
              >
                {hero.ctaSub}
              </a>
            </div>

            {/* Free badge */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 border border-amber/25 bg-amber/8 rounded-pill px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-amber animate-pulse-dot" />
                <span className="font-mono text-xs text-amber-muted tracking-wider">Free for qualifying students</span>
              </div>
              <span className="font-mono text-xs text-midnight/30">· 48hr response time</span>
            </div>
          </div>

          {/* Right — program cards */}
          <div className="lhero-cards hidden lg:flex flex-col gap-4 py-32">

            {/* Programs quick-look */}
            <div className="bg-white rounded-3xl p-6 border border-light-gray shadow-sm">
              <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-slate-mid mb-5">Program Areas</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'College Apps',   icon: '🎓' },
                  { label: 'Career Direction', icon: '🧭' },
                  { label: 'Internships',     icon: '💼' },
                  { label: 'Gap Year Paths',  icon: '🌍' },
                  { label: 'Grad School',     icon: '📚' },
                  { label: 'Major Selection', icon: '🗺️' },
                ].map(({ label, icon }, i) => (
                  <div key={i} className="flex items-center gap-2 bg-off-white rounded-2xl px-3 py-2.5">
                    <span className="text-sm">{icon}</span>
                    <span className="font-sans text-xs font-medium text-midnight/70">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Founding cohort card */}
            <div className="relative bg-amber/8 border border-amber/20 rounded-3xl p-6 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent" />
              <div className="inline-flex items-center gap-2 bg-amber text-midnight font-mono text-[10px] font-bold tracking-wider uppercase rounded-pill px-3 py-1 mb-4">
                ✦ Founding Cohort
              </div>
              <p className="font-sans text-sm text-midnight/70 leading-relaxed mb-3">
                Sessions are free because we're proving the model works. You get real advising. We build the track record.
              </p>
              <Link to="/apply/launch" className="font-sans text-xs text-amber-muted font-semibold hover:text-amber transition-colors">
                Apply for a free spot →
              </Link>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
