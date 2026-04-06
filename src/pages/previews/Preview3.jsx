// PREVIEW 3 — Aurora Gradient (Stripe / Loom style)
// Animated warm gradient orbs, light bg, feels alive
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Preview3() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })
      tl.from('.p3-badge',  { y: 16, opacity: 0, duration: 0.5 })
        .from('.p3-h1',     { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.2')
        .from('.p3-h2',     { y: 70, opacity: 0, duration: 1,   ease: 'power3.out' }, '-=0.5')
        .from('.p3-sub',    { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p3-ctas',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p3-proof',  { opacity: 0, duration: 0.6 }, '-=0.2')
        .from('.p3-cards',  { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, 0.4)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', background: '#FFF8E8', overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes blob1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(50px,-30px) scale(1.08)} }
        @keyframes blob2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-40px,40px) scale(1.05)} }
        @keyframes blob3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(30px,20px) scale(0.95)} }
        @keyframes cta-sweep { 0%{background-position:-200%} 100%{background-position:200%} }
        .cta-primary {
          background: linear-gradient(90deg, #C9A84C, #E4C56A, #C9A84C);
          background-size: 200%;
          animation: cta-sweep 3s linear infinite;
          color: #080A0F;
          font-family: inherit;
          font-weight: 700;
          border: none;
          cursor: pointer;
        }
        .p3-card { backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); }
      `}</style>

      {/* Aurora blobs */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-15%', right: '-5%', width: '700px', height: '700px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,168,48,0.35) 0%, rgba(245,200,74,0.15) 40%, transparent 70%)', filter: 'blur(60px)', animation: 'blob1 14s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', bottom: '5%', left: '-10%', width: '600px', height: '600px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(254,243,199,0.8) 0%, rgba(232,168,48,0.20) 50%, transparent 70%)', filter: 'blur(50px)', animation: 'blob2 18s ease-in-out infinite' }} />
        <div style={{ position: 'absolute', top: '30%', left: '25%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(201,168,76,0.18) 0%, transparent 70%)', filter: 'blur(70px)', animation: 'blob3 22s ease-in-out infinite' }} />
      </div>

      {/* Nav */}
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: 'calc(100% - 48px)', maxWidth: '1100px' }}>
        <div style={{ background: 'rgba(255,248,232,0.85)', border: '1px solid rgba(232,168,48,0.2)', backdropFilter: 'blur(16px)', borderRadius: '9999px' }} className="flex items-center justify-between px-6 py-3">
          <span className="font-serif italic text-2xl" style={{ color: '#080A0F' }}>Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm cursor-pointer" style={{ color: '#78716C' }}>{l}</span>
            ))}
          </div>
          <div className="font-sans font-bold text-sm px-5 py-2 rounded-full cursor-pointer" style={{ background: '#C9A84C', color: '#080A0F' }}>Book a Call</div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ minHeight: '100vh', paddingTop: '140px', paddingBottom: '80px' }}>

        {/* Left */}
        <div>
          <div className="p3-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full w-fit" style={{ border: '1px solid rgba(201,168,76,0.4)', background: 'rgba(255,255,255,0.6)' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#E8A830', animation: 'pulse 2s ease-in-out infinite' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#A88A3A' }}>Career Consulting</span>
            <span style={{ width: 1, height: 12, background: 'rgba(168,138,58,0.3)' }} />
            <span className="font-mono text-xs" style={{ color: 'rgba(168,138,58,0.7)' }}>Free & Paid</span>
          </div>

          <h1 className="leading-none mb-8">
            <span className="p3-h1 block font-sans font-extrabold tracking-tight" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', lineHeight: 1.04, color: '#0F0E0A' }}>
              Advice that actually
            </span>
            <span className="p3-h2 block font-serif italic" style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)', lineHeight: 1, color: '#080A0F', backgroundImage: 'linear-gradient(135deg, #C9A84C 0%, #F5C84A 40%, #C9A84C 70%, #A88A3A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              gets you somewhere.
            </span>
          </h1>

          <p className="p3-sub font-sans text-lg max-w-lg leading-relaxed mb-10" style={{ color: '#78716C' }}>
            Applying to college, hunting your first internship, or figuring out your next move after graduating. There's a track for where you're at right now.
          </p>

          <div className="p3-ctas flex flex-col sm:flex-row gap-4 mb-10">
            <button className="cta-primary inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-base">
              Find Your Track ↓
            </button>
            <div className="inline-flex items-center justify-center gap-2 font-sans font-semibold px-8 py-4 rounded-full cursor-pointer" style={{ border: '1.5px solid rgba(201,168,76,0.4)', color: '#78716C', background: 'rgba(255,255,255,0.5)' }}>
              See Real Results
            </div>
          </div>

          <div className="p3-proof flex flex-wrap items-center gap-5">
            <div className="flex -space-x-2">
              {[['SK','#C9A84C'],['MT','#E8A830'],['PS','#A88A3A']].map(([i,c]) => (
                <div key={i} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: c, border: '2px solid #FFF8E8', color: '#080A0F' }}>{i}</div>
              ))}
            </div>
            <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} style={{ color: '#C9A84C' }}>★</span>)}</div>
            <span className="font-mono text-xs" style={{ color: '#A0978A' }}>5.0 · 50+ students</span>
          </div>
        </div>

        {/* Right — frosted cards */}
        <div className="p3-cards hidden lg:flex flex-col gap-4 relative">
          <div className="p3-card rounded-3xl p-7 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(232,168,48,0.25)', boxShadow: '0 4px 24px rgba(232,168,48,0.08)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #E8A830, transparent)' }} />
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase" style={{ border: '1px solid rgba(232,168,48,0.3)', background: 'rgba(232,168,48,0.10)', color: '#C4892A' }}>The Launch Program</div>
            <p className="font-sans font-bold text-xl mb-1" style={{ color: '#080A0F' }}>Free advising for students</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: '#78716C' }}>College apps, internships, career direction. No cost barrier.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold" style={{ color: '#E8A830' }}>✦ Free for qualifying students</span>
              <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer" style={{ background: 'rgba(232,168,48,0.15)', color: '#C4892A', border: '1px solid rgba(232,168,48,0.3)' }}>Learn more →</span>
            </div>
          </div>

          <div className="p3-card rounded-3xl p-7 relative overflow-hidden" style={{ background: 'rgba(255,255,255,0.65)', border: '1px solid rgba(201,168,76,0.25)', boxShadow: '0 4px 24px rgba(201,168,76,0.08)' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }} />
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.08)', color: '#A88A3A' }}>JBC Premium · from $10</div>
            <p className="font-sans font-bold text-xl mb-1" style={{ color: '#080A0F' }}>Post-grad career coaching</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={{ color: '#78716C' }}>Job search, resume + LinkedIn, interview prep. Starting at $10.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold" style={{ color: '#C9A84C' }}>Starting at $10</span>
              <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer" style={{ background: '#C9A84C', color: '#080A0F' }}>Learn more →</span>
            </div>
          </div>

          <div className="p3-card absolute -bottom-2 -right-6 rounded-2xl px-5 py-4" style={{ background: 'rgba(255,255,255,0.8)', border: '1px solid rgba(201,168,76,0.3)', boxShadow: '0 8px 32px rgba(201,168,76,0.15)' }}>
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1" style={{ color: '#C9A84C' }}>Avg. Result</div>
            <div className="font-sans font-extrabold text-2xl" style={{ color: '#080A0F' }}>6 weeks</div>
            <div className="font-sans text-xs mt-0.5" style={{ color: '#A0978A' }}>to signed offer</div>
          </div>
        </div>
      </div>

      {/* Label */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-lg" style={{ background: '#080A0F', color: '#fff' }}>
        <Link to="/preview/2" className="opacity-60 mr-2">← prev</Link>
        Option 3 — Aurora Gradient ·
        <Link to="/preview/4" className="ml-2 opacity-60">next →</Link>
      </div>
    </div>
  )
}
