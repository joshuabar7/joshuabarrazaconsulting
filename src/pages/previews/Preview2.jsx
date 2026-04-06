// PREVIEW 2 — Bento Grid (Apple / Linear style)
// Asymmetric grid hero, white/parchment, staggered card entrance
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Preview2() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.p2-headline', { y: 60, opacity: 0, duration: 0.9, ease: 'power3.out' })
        .from('.p2-sub',      { y: 20, opacity: 0, duration: 0.5 }, '-=0.4')
        .from('.p2-cta',      { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p2-bento',    { y: 40, opacity: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' }, '-=0.2')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: '#FFFBEB', minHeight: '100vh' }}>
      <style>{`
        .shimmer-gold {
          background: linear-gradient(90deg,#C9A84C 0%,#E4C56A 30%,#C9A84C 60%,#A88A3A 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        @keyframes shimmer { 0%{background-position:-200% center}100%{background-position:200% center} }
        .bento-card { transition: transform 0.2s ease, box-shadow 0.2s ease; }
        .bento-card:hover { transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.10); }
      `}</style>

      {/* Nav */}
      <div style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', zIndex: 100, width: 'calc(100% - 48px)', maxWidth: '1100px' }}>
        <div style={{ background: 'rgba(255,251,235,0.92)', border: '1px solid #E8E3D8', backdropFilter: 'blur(12px)', borderRadius: '9999px' }} className="flex items-center justify-between px-6 py-3">
          <span className="font-serif italic text-2xl" style={{ color: '#080A0F' }}>Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm cursor-pointer" style={{ color: '#5A6175' }}>{l}</span>
            ))}
          </div>
          <div className="font-sans font-bold text-sm px-5 py-2 rounded-full cursor-pointer" style={{ background: '#C9A84C', color: '#080A0F' }}>Book a Call</div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-36 pb-20">

        {/* Top headline */}
        <div className="text-center mb-12">
          <div className="p2-headline">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full font-mono text-xs tracking-widest uppercase" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.10)', color: '#A88A3A' }}>
              Career Consulting · Free & Paid Tracks
            </div>
            <h1 className="font-sans font-extrabold text-6xl md:text-7xl tracking-tight leading-[1.04] mb-3" style={{ color: '#080A0F' }}>
              Advice that actually
            </h1>
            <div className="font-serif italic text-7xl md:text-8xl leading-none shimmer-gold mb-6">
              gets you somewhere.
            </div>
          </div>
          <p className="p2-sub font-sans text-lg max-w-2xl mx-auto leading-relaxed mb-8" style={{ color: '#5A6175' }}>
            Two tracks. One advisor. Whether you're applying to college or landing your first job offer.
          </p>
          <div className="p2-cta flex items-center justify-center gap-4">
            <div className="font-sans font-bold px-8 py-4 rounded-full cursor-pointer" style={{ background: '#C9A84C', color: '#080A0F' }}>Find Your Track ↓</div>
            <div className="font-sans font-semibold px-8 py-4 rounded-full cursor-pointer" style={{ border: '1.5px solid #D4C9B0', color: '#5A6175' }}>See Results →</div>
          </div>
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 auto-rows-[140px]">

          {/* Launch — large */}
          <div className="p2-bento bento-card col-span-12 md:col-span-5 row-span-2 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden" style={{ background: '#FFFFFF', border: '1px solid #E8E3D8' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, transparent, #E8A830, transparent)' }} />
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase" style={{ border: '1px solid rgba(232,168,48,0.3)', background: 'rgba(232,168,48,0.08)', color: '#C4892A' }}>The Launch Program</div>
              <p className="font-sans font-extrabold text-2xl mb-2" style={{ color: '#080A0F' }}>Free advising for students</p>
              <p className="font-sans text-sm leading-relaxed" style={{ color: '#5A6175' }}>College apps, career direction, internship hunting, gap year paths. Free for qualifying students.</p>
            </div>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs font-bold" style={{ color: '#E8A830' }}>✦ Free for qualifying students</span>
              <span className="font-sans text-xs font-bold px-4 py-2 rounded-full cursor-pointer" style={{ border: '1.5px solid #E8A830', color: '#C4892A' }}>Explore →</span>
            </div>
          </div>

          {/* Stat — 6 weeks */}
          <div className="p2-bento bento-card col-span-6 md:col-span-3 row-span-1 rounded-3xl p-6 flex flex-col justify-between" style={{ background: '#080A0F', border: '1px solid #1A1D2A' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', borderRadius: '24px 24px 0 0' }} />
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: 'rgba(201,168,76,0.6)' }}>Avg. Result</span>
            <div>
              <div className="font-sans font-extrabold text-4xl text-white leading-none">6 wks</div>
              <div className="font-sans text-xs mt-1" style={{ color: 'rgba(255,255,255,0.35)' }}>to signed offer</div>
            </div>
          </div>

          {/* Stat — 50+ */}
          <div className="p2-bento bento-card col-span-6 md:col-span-4 row-span-1 rounded-3xl p-6 flex flex-col justify-between" style={{ background: '#FFFBEB', border: '1px solid #E8E3D8' }}>
            <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#A88A3A' }}>Students Helped</span>
            <div>
              <div className="font-sans font-extrabold text-4xl leading-none" style={{ color: '#080A0F' }}>50+</div>
              <div className="font-mono text-xs mt-1" style={{ color: '#A88A3A' }}>and growing</div>
            </div>
          </div>

          {/* ATS score card */}
          <div className="p2-bento bento-card col-span-12 md:col-span-3 row-span-1 rounded-3xl p-6 flex flex-col justify-between" style={{ background: '#FFFFFF', border: '1px solid #E8E3D8' }}>
            <div className="flex items-center justify-between mb-2">
              <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#5A6175' }}>ATS Score After</span>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded-full" style={{ background: 'rgba(34,197,94,0.12)', color: '#16A34A' }}>Strong</span>
            </div>
            <div className="font-sans font-extrabold text-4xl" style={{ color: '#080A0F' }}>91<span className="text-xl font-mono" style={{ color: '#C9A84C' }}>/100</span></div>
            <div className="h-1.5 rounded-full mt-2" style={{ background: '#F3F0E8' }}>
              <div className="h-full rounded-full" style={{ width: '91%', background: 'linear-gradient(90deg, #E8A830, #C9A84C)' }} />
            </div>
          </div>

          {/* Premium — large */}
          <div className="p2-bento bento-card col-span-12 md:col-span-5 row-span-1 rounded-3xl p-6 flex flex-col justify-between" style={{ background: '#FFFFFF', border: '1px solid #E8E3D8' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)', borderRadius: '24px 24px 0 0' }} />
            <div>
              <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase" style={{ border: '1px solid rgba(201,168,76,0.3)', background: 'rgba(201,168,76,0.08)', color: '#A88A3A' }}>JBC Premium · Starting at $10</div>
              <p className="font-sans font-bold text-lg" style={{ color: '#080A0F' }}>Post-grad career coaching</p>
            </div>
            <div className="flex items-center justify-between">
              <div className="flex gap-2 flex-wrap">
                {['Resume','LinkedIn','Interview'].map(t => (
                  <span key={t} className="font-sans text-xs px-2.5 py-1 rounded-full" style={{ background: '#F3F0E8', color: '#5A6175' }}>{t}</span>
                ))}
              </div>
              <span className="font-sans text-xs font-bold px-4 py-2 rounded-full cursor-pointer ml-3 shrink-0" style={{ background: '#C9A84C', color: '#080A0F' }}>Explore →</span>
            </div>
          </div>

          {/* Stars */}
          <div className="p2-bento bento-card col-span-12 md:col-span-4 row-span-1 rounded-3xl p-6 flex flex-col justify-center items-center text-center" style={{ background: '#FFFFFF', border: '1px solid #E8E3D8' }}>
            <div className="flex gap-1 mb-2">{[...Array(5)].map((_,i) => <span key={i} style={{ color: '#C9A84C', fontSize: '18px' }}>★</span>)}</div>
            <div className="font-sans font-bold text-sm mb-0.5" style={{ color: '#080A0F' }}>"Changed how I approach everything"</div>
            <div className="font-mono text-[10px]" style={{ color: '#A88A3A' }}>— Marcus T., New York</div>
          </div>

        </div>
      </div>

      {/* Label */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-lg" style={{ background: '#080A0F', color: '#fff' }}>
        <Link to="/preview/1" className="opacity-60 mr-2">← prev</Link>
        Option 2 — Bento Grid ·
        <Link to="/preview/3" className="ml-2 opacity-60">next →</Link>
      </div>
    </div>
  )
}
