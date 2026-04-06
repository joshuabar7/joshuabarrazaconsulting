import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { HOME } from '../../content'

const { hero } = HOME

// ── Magnetic button — snaps back with elastic easing ──────────────────────────
function MagneticButton({ children, className, style, to, href, strength = 0.35 }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    gsap.to(ref.current, {
      x: (e.clientX - (r.left + r.width  / 2)) * strength,
      y: (e.clientY - (r.top  + r.height / 2)) * strength,
      duration: 0.2, ease: 'power2.out',
    })
  }
  const onLeave = () => gsap.to(ref.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' })

  const shared = { ref, className, style, onMouseMove: onMove, onMouseLeave: onLeave }

  if (to)   return <Link   {...shared} to={to}>{children}</Link>
  if (href) return <a      {...shared} href={href}>{children}</a>
  return          <button  {...shared}>{children}</button>
}

// ── 3D tilt card ───────────────────────────────────────────────────────────────
function TiltCard({ children, className, style }) {
  const ref = useRef(null)

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect()
    const x = (e.clientX - r.left) / r.width  - 0.5
    const y = (e.clientY - r.top)  / r.height - 0.5
    gsap.to(ref.current, { rotateY: x * 14, rotateX: -y * 14, scale: 1.02, duration: 0.3, ease: 'power2.out', transformPerspective: 800 })
  }
  const onLeave = () => gsap.to(ref.current, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1,0.5)', transformPerspective: 800 })

  return (
    <div ref={ref} className={className} style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
      onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
    </div>
  )
}

// ─────────────────────────────────────────────────────────────────────────────
export default function HomeHero() {
  const containerRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const orb3Ref = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const curPos   = useRef({ o1:{x:0,y:0}, o2:{x:0,y:0}, o3:{x:0,y:0} })
  const rafRef   = useRef(null)

  // Entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.hero-badge',  { y: 16, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.hero-line1',  { y: 40, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.hero-line2',  { y: 50, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.hero-sub',    { y: 16, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.hero-ctas',   { y: 16, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.hero-proof',  { opacity: 0, duration: 0.5 }, '-=0.1')
        .from('.hero-visual', { x: 40, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2)
        .from('.hero-card',   { y: 20, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power2.out' }, 0.9)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // Cursor parallax on orbs
  useEffect(() => {
    const onMove = (e) => { mousePos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)

    const lerp = (a, b, t) => a + (b - a) * t
    const tick = () => {
      const nx = (mousePos.current.x / window.innerWidth  - 0.5) * 2
      const ny = (mousePos.current.y / window.innerHeight - 0.5) * 2
      const s  = 0.04
      const t1 = { x: nx * 55, y: ny * 38 }
      const t2 = { x: nx * -38, y: ny * -50 }
      const t3 = { x: nx * 28, y: ny * 28 }
      curPos.current.o1.x = lerp(curPos.current.o1.x, t1.x, s)
      curPos.current.o1.y = lerp(curPos.current.o1.y, t1.y, s)
      curPos.current.o2.x = lerp(curPos.current.o2.x, t2.x, s)
      curPos.current.o2.y = lerp(curPos.current.o2.y, t2.y, s)
      curPos.current.o3.x = lerp(curPos.current.o3.x, t3.x, s)
      curPos.current.o3.y = lerp(curPos.current.o3.y, t3.y, s)
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${curPos.current.o1.x}px,${curPos.current.o1.y}px)`
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${curPos.current.o2.x}px,${curPos.current.o2.y}px)`
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${curPos.current.o3.x}px,${curPos.current.o3.y}px)`
      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafRef.current) }
  }, [])

  return (
    <section ref={containerRef} className="relative min-h-[100dvh] bg-forest overflow-hidden flex items-center">
      <style>{`
        @keyframes heroShimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .hero-serif-shimmer {
          background: linear-gradient(90deg,#34D399 0%,#6EE7B7 35%,#34D399 65%,#059669 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: heroShimmer 3.5s linear infinite;
        }
        .hero-glass {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .hero-cta-primary { transition: box-shadow 0.2s, transform 0.15s; }
        .hero-cta-primary:hover { box-shadow: 0 0 32px rgba(16,185,129,0.45); transform: translateY(-1px); }
        .hero-cta-secondary { transition: all 0.2s; }
        .hero-cta-secondary:hover { background: rgba(255,255,255,0.07) !important; border-color: rgba(255,255,255,0.22) !important; color: rgba(255,255,255,0.85) !important; }
      `}</style>

      {/* Parallax orbs */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <div ref={orb1Ref} style={{ position:'absolute', top:'-15%', right:'-5%', width:'650px', height:'650px', borderRadius:'50%', background:'radial-gradient(circle, rgba(16,185,129,0.22) 0%, transparent 70%)', filter:'blur(50px)', willChange:'transform' }} />
        <div ref={orb2Ref} style={{ position:'absolute', bottom:'5%', left:'-8%', width:'550px', height:'550px', borderRadius:'50%', background:'radial-gradient(circle, rgba(5,150,105,0.15) 0%, transparent 70%)', filter:'blur(60px)', willChange:'transform' }} />
        <div ref={orb3Ref} style={{ position:'absolute', top:'40%', left:'38%', width:'350px', height:'350px', borderRadius:'50%', background:'radial-gradient(circle, rgba(52,211,153,0.10) 0%, transparent 70%)', filter:'blur(70px)', willChange:'transform' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none"
        style={{ backgroundImage:'linear-gradient(rgba(255,255,255,.3) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.3) 1px,transparent 1px)', backgroundSize:'60px 60px' }} />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 py-32 md:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[100dvh]">

          {/* ── Left — text ─────────────────────────────────────────────── */}
          <div className="flex flex-col justify-center py-20 lg:py-32">

            {/* Badge */}
            <div className="hero-badge inline-flex items-center gap-2.5 rounded-pill px-4 py-2 mb-10 w-fit"
              style={{ border:'1px solid rgba(52,211,153,0.28)', background:'rgba(16,185,129,0.12)' }}>
              <span className="w-1.5 h-1.5 rounded-full shrink-0 animate-pulse-dot" style={{ background:'#34D399' }} />
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color:'#34D399' }}>{hero.badge}</span>
              <span style={{ width:1, height:12, background:'rgba(52,211,153,0.35)' }} />
              <span className="font-mono text-xs" style={{ color:'rgba(52,211,153,0.6)' }}>Free & Paid</span>
            </div>

            {/* Headline */}
            <h1 className="mb-7 leading-none">
              <span className="hero-line1 block font-sans font-extrabold text-white tracking-tight text-4xl md:text-5xl lg:text-6xl leading-[1.04]">
                {hero.line1}
              </span>
              <span className="hero-line2 hero-serif-shimmer block font-serif italic text-5xl md:text-6xl lg:text-7xl leading-none mt-2">
                {hero.line2}
              </span>
            </h1>

            {/* Sub */}
            <p className="hero-sub font-sans text-base md:text-lg max-w-lg leading-relaxed mb-10" style={{ color:'rgba(255,255,255,0.45)' }}>
              {hero.sub}
            </p>

            {/* CTAs */}
            <div className="hero-ctas flex flex-col sm:flex-row gap-4 mb-12">
              <MagneticButton
                to="#tracks"
                className="hero-cta-primary inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-pill"
                style={{ background:'#10B981', color:'#050F0A' }}
                strength={0.3}
              >
                {hero.cta}
                <span className="opacity-60 text-sm">↓</span>
              </MagneticButton>
              <MagneticButton
                to="/impact"
                className="hero-cta-secondary inline-flex items-center justify-center gap-2 font-sans font-semibold px-8 py-4 rounded-pill"
                style={{ border:'1px solid rgba(255,255,255,0.14)', color:'rgba(255,255,255,0.60)' }}
                strength={0.2}
              >
                {hero.ctaSub}
              </MagneticButton>
            </div>

            {/* Social proof */}
            <div className="hero-proof flex flex-wrap items-center gap-6">
              <div className="flex -space-x-2">
                {[['SK','#34D399'],['MT','#10B981'],['PS','#059669']].map(([init, col]) => (
                  <div key={init} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold"
                    style={{ background: col, border:'2px solid #0A1A10', color:'#050F0A' }}>{init}</div>
                ))}
              </div>
              <div className="h-4 w-px hidden sm:block" style={{ background:'rgba(255,255,255,0.12)' }} />
              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} style={{ color:'#34D399', fontSize:'12px' }}>★</span>)}</div>
                <span className="font-mono text-xs" style={{ color:'rgba(255,255,255,0.30)' }}>{hero.proofSub}50+ students</span>
              </div>
            </div>
          </div>

          {/* ── Right — 3D tilt glass cards ─────────────────────────────── */}
          <div className="hero-visual hidden lg:flex flex-col gap-4 py-32 relative">

            {/* Launch card */}
            <TiltCard className="hero-card hero-glass rounded-3xl p-7 relative overflow-hidden cursor-pointer">
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, transparent, #34D399, transparent)' }} />
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-pill text-[10px] font-mono tracking-widest uppercase w-fit"
                style={{ border:'1px solid rgba(52,211,153,0.28)', background:'rgba(16,185,129,0.12)', color:'#34D399' }}>
                The Launch Program
              </div>
              <p className="font-sans font-bold text-white text-lg mb-1">Free advising for students</p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.40)' }}>
                College apps, internships, career direction. No cost barrier.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs" style={{ color:'#34D399' }}>Free for students</span>
                <Link to="/launch" className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full"
                  style={{ background:'rgba(52,211,153,0.15)', color:'#34D399', border:'1px solid rgba(52,211,153,0.28)' }}>
                  Learn more →
                </Link>
              </div>
            </TiltCard>

            {/* Premium card */}
            <TiltCard className="hero-card hero-glass rounded-3xl p-7 relative overflow-hidden cursor-pointer">
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-pill text-[10px] font-mono tracking-widest uppercase w-fit"
                style={{ border:'1px solid rgba(201,168,76,0.30)', background:'rgba(201,168,76,0.10)', color:'#C9A84C' }}>
                JBC Premium · from $10
              </div>
              <p className="font-sans font-bold text-white text-lg mb-1">Post-grad career coaching</p>
              <p className="font-sans text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.40)' }}>
                Job search, resume + LinkedIn, interview prep. Starting at $10.
              </p>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs text-gold-muted">Starting at $10</span>
                <Link to="/premium" className="font-sans text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ background:'#C9A84C', color:'#050F0A' }}>
                  Learn more →
                </Link>
              </div>
            </TiltCard>

            {/* Floating stat */}
            <TiltCard className="hero-card hero-glass absolute -bottom-2 -right-6 rounded-2xl px-5 py-4">
              <div className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color:'#34D399' }}>Avg. Result</div>
              <div className="font-sans font-extrabold text-white text-2xl leading-none">6 weeks</div>
              <div className="font-sans text-xs mt-1" style={{ color:'rgba(255,255,255,0.35)' }}>to signed offer</div>
            </TiltCard>

          </div>

        </div>
      </div>
    </section>
  )
}
