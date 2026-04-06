// PREVIEW 1 — Cinematic Dark (Linear / Vercel style)
// Dark hero, amber/gold orbs, glassmorphism, flips to light below fold
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Preview1() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.p1-badge',  { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.p1-line1',  { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.p1-line2',  { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.4')
        .from('.p1-sub',    { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p1-ctas',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.p1-cards',  { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, 0.3)
        .from('.p1-card',   { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, 0.9)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} className="min-h-screen" style={{ background: '#080A0F' }}>

      {/* Ambient orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div style={{
          position: 'absolute', top: '-10%', right: '5%',
          width: '600px', height: '600px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,168,48,0.14) 0%, transparent 70%)',
          filter: 'blur(40px)', animation: 'drift1 12s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', bottom: '10%', left: '-5%',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(201,168,76,0.10) 0%, transparent 70%)',
          filter: 'blur(50px)', animation: 'drift2 16s ease-in-out infinite alternate',
        }} />
        <div style={{
          position: 'absolute', top: '40%', left: '40%',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(232,168,48,0.06) 0%, transparent 70%)',
          filter: 'blur(60px)', animation: 'drift1 20s ease-in-out infinite alternate-reverse',
        }} />
      </div>

      <style>{`
        @keyframes drift1 { from { transform: translate(0,0) } to { transform: translate(40px, 30px) } }
        @keyframes drift2 { from { transform: translate(0,0) } to { transform: translate(-30px, 20px) } }
        .glass-card {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
        .shimmer-gold {
          background: linear-gradient(90deg, #C9A84C 0%, #E4C56A 30%, #C9A84C 60%, #A88A3A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0% { background-position: -200% center } 100% { background-position: 200% center } }
      `}</style>

      {/* Nav preview */}
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: 'calc(100% - 48px)', maxWidth: '1100px' }}>
        <div className="glass-card flex items-center justify-between px-6 py-3 rounded-full">
          <span className="font-serif italic text-white text-2xl">Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm text-white/50 cursor-pointer hover:text-white/80 transition-colors">{l}</span>
            ))}
          </div>
          <div className="flex items-center gap-2 bg-gold text-midnight font-sans font-bold text-sm px-5 py-2 rounded-full" style={{ color: '#080A0F', background: '#C9A84C' }}>
            Book a Call
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 pt-40 pb-32 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">

        {/* Left */}
        <div>
          <div className="p1-badge inline-flex items-center gap-2.5 mb-10 w-fit px-4 py-2 rounded-full" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.08)' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-dot" style={{ background: '#C9A84C' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#C9A84C' }}>Career Consulting</span>
          </div>

          <h1 className="mb-7 leading-none">
            <span className="p1-line1 block font-sans font-extrabold text-white text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.04]">
              Advice that actually
            </span>
            <span className="p1-line2 block font-serif italic text-6xl md:text-7xl lg:text-8xl leading-none mt-1 shimmer-gold">
              gets you somewhere.
            </span>
          </h1>

          <p className="p1-sub font-sans text-lg max-w-lg leading-relaxed mb-10" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Applying to college, hunting your first internship, or figuring out your next move after graduating. There's a track for where you're at right now.
          </p>

          <div className="p1-ctas flex flex-col sm:flex-row gap-4 mb-12">
            <div className="inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-full cursor-pointer" style={{ background: '#C9A84C', color: '#080A0F' }}>
              Find Your Track ↓
            </div>
            <div className="inline-flex items-center justify-center gap-2 font-sans font-semibold px-8 py-4 rounded-full cursor-pointer" style={{ border: '1px solid rgba(255,255,255,0.12)', color: 'rgba(255,255,255,0.65)' }}>
              See Real Results
            </div>
          </div>

          {/* Proof */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-2">
              {[['SK','#C9A84C'],['MT','#E8A830'],['PS','#A88A3A']].map(([i,c]) => (
                <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: c, border: '2px solid #080A0F', color: '#080A0F' }}>{i}</div>
              ))}
            </div>
            <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} className="text-xs" style={{ color: '#C9A84C' }}>★</span>)}</div>
            <span className="font-mono text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>5.0 · 50+ students</span>
          </div>
        </div>

        {/* Right — glass cards */}
        <div className="p1-cards hidden lg:flex flex-col gap-4 relative">

          <div className="p1-card glass-card rounded-3xl p-6 relative overflow-hidden">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #E8A830, transparent)' }} />
            <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full w-fit" style={{ border: '1px solid rgba(232,168,48,0.3)', background: 'rgba(232,168,48,0.08)' }}>
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#E8A830' }}>The Launch Program</span>
            </div>
            <p className="font-sans font-bold text-white text-lg mb-1">Free advising for students</p>
            <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>College apps, internships, career direction. No cost barrier.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: '#E8A830' }}>Free for students</span>
              <span className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer" style={{ background: 'rgba(232,168,48,0.15)', color: '#E8A830' }}>Learn more →</span>
            </div>
          </div>

          <div className="p1-card glass-card rounded-3xl p-6 relative overflow-hidden">
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <div className="flex items-center gap-2 mb-4 px-3 py-1 rounded-full w-fit" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.08)' }}>
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#C9A84C' }}>JBC Premium</span>
            </div>
            <p className="font-sans font-bold text-white text-lg mb-1">Post-grad career coaching</p>
            <p className="font-sans text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.4)' }}>Job search, resume + LinkedIn, interview prep. Starting at $10.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: '#C9A84C' }}>Starting at $10</span>
              <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer" style={{ background: '#C9A84C', color: '#080A0F' }}>Learn more →</span>
            </div>
          </div>

          <div className="p1-card glass-card rounded-2xl px-5 py-4 absolute -bottom-4 -right-6 shadow-2xl">
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>Avg. Result</div>
            <div className="font-sans font-extrabold text-white text-2xl">6 weeks</div>
            <div className="font-sans text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>to signed offer</div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-white text-midnight font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-lg">
        Option 1 — Cinematic Dark · <Link to="/preview/2" className="text-blue-600 ml-1">next →</Link>
      </div>
    </div>
  )
}
