// Shared layout component for color variants
// Layout = Option 1 (dark split) + Option 3 (animated gradient orbs)
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const VARIANTS = {
  amber: {
    label: 'A — Warm Amber / Gold',
    bg: '#080A0F',
    orb1: 'rgba(232,168,48,0.18)',
    orb2: 'rgba(201,168,76,0.12)',
    orb3: 'rgba(245,200,74,0.08)',
    accent: '#E8A830',
    accentMid: '#C9A84C',
    accentDim: 'rgba(232,168,48,0.12)',
    accentBorder: 'rgba(232,168,48,0.28)',
    serif: 'linear-gradient(90deg,#C9A84C 0%,#E4C56A 35%,#C9A84C 65%,#A88A3A 100%)',
    cta: '#C9A84C',
    ctaText: '#080A0F',
    card1Border: 'rgba(232,168,48,0.2)',
    card1Line: '#E8A830',
    card2Line: '#C9A84C',
    note: 'Classic. Warm + premium. Current brand colours.',
    prev: null, next: '/preview/5b',
  },
  indigo: {
    label: 'B — Electric Indigo',
    bg: '#06060F',
    orb1: 'rgba(99,102,241,0.20)',
    orb2: 'rgba(139,92,246,0.14)',
    orb3: 'rgba(79,70,229,0.10)',
    accent: '#818CF8',
    accentMid: '#6366F1',
    accentDim: 'rgba(99,102,241,0.12)',
    accentBorder: 'rgba(99,102,241,0.30)',
    serif: 'linear-gradient(90deg,#818CF8 0%,#A5B4FC 35%,#818CF8 65%,#6366F1 100%)',
    cta: '#6366F1',
    ctaText: '#fff',
    card1Border: 'rgba(99,102,241,0.2)',
    card1Line: '#818CF8',
    card2Line: '#6366F1',
    note: 'Tech-forward. Linear, Notion, Vercel energy. Very "wow".',
    prev: '/preview/5a', next: '/preview/5c',
  },
  emerald: {
    label: 'C — Emerald / Growth',
    bg: '#050F0A',
    orb1: 'rgba(16,185,129,0.18)',
    orb2: 'rgba(5,150,105,0.12)',
    orb3: 'rgba(52,211,153,0.09)',
    accent: '#34D399',
    accentMid: '#10B981',
    accentDim: 'rgba(16,185,129,0.12)',
    accentBorder: 'rgba(16,185,129,0.28)',
    serif: 'linear-gradient(90deg,#34D399 0%,#6EE7B7 35%,#34D399 65%,#059669 100%)',
    cta: '#10B981',
    ctaText: '#050F0A',
    card1Border: 'rgba(16,185,129,0.2)',
    card1Line: '#34D399',
    card2Line: '#10B981',
    note: 'Growth, success, money. Fresh and modern. Stands out.',
    prev: '/preview/5b', next: '/preview/5d',
  },
  rose: {
    label: 'D — Rose / Confident',
    bg: '#0F060A',
    orb1: 'rgba(244,63,94,0.18)',
    orb2: 'rgba(251,113,133,0.12)',
    orb3: 'rgba(217,70,239,0.10)',
    accent: '#FB7185',
    accentMid: '#F43F5E',
    accentDim: 'rgba(244,63,94,0.12)',
    accentBorder: 'rgba(244,63,94,0.28)',
    serif: 'linear-gradient(90deg,#FB7185 0%,#FDA4AF 35%,#FB7185 65%,#F43F5E 100%)',
    cta: '#F43F5E',
    ctaText: '#fff',
    card1Border: 'rgba(244,63,94,0.2)',
    card1Line: '#FB7185',
    card2Line: '#F43F5E',
    note: 'Bold + confident. Memorable. Breaks the consulting mold.',
    prev: '/preview/5c', next: '/preview/5e',
  },
  ocean: {
    label: 'E — Ocean Blue / Trust',
    bg: '#03080F',
    orb1: 'rgba(6,182,212,0.18)',
    orb2: 'rgba(14,165,233,0.13)',
    orb3: 'rgba(59,130,246,0.09)',
    accent: '#38BDF8',
    accentMid: '#0EA5E9',
    accentDim: 'rgba(6,182,212,0.12)',
    accentBorder: 'rgba(6,182,212,0.28)',
    serif: 'linear-gradient(90deg,#38BDF8 0%,#7DD3FC 35%,#38BDF8 65%,#0284C7 100%)',
    cta: '#0EA5E9',
    ctaText: '#fff',
    card1Border: 'rgba(6,182,212,0.2)',
    card1Line: '#38BDF8',
    card2Line: '#0EA5E9',
    note: 'Professional + trustworthy. Strong techy feel. Safe choice.',
    prev: '/preview/5d', next: null,
  },
}

export default function ColorPreview({ variant }) {
  const c = VARIANTS[variant]
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.15 })
      tl.from('.cv-badge',  { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.cv-line1',  { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.cv-line2',  { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .from('.cv-sub',    { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.cv-ctas',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.cv-proof',  { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.cv-cards',  { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, 0.25)
        .from('.cv-card',   { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, 0.85)
    }, containerRef)
    return () => ctx.revert()
  }, [variant])

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', background: c.bg, overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes drift1 { from{transform:translate(0,0) scale(1)} to{transform:translate(45px,-35px) scale(1.06)} }
        @keyframes drift2 { from{transform:translate(0,0) scale(1)} to{transform:translate(-35px,45px) scale(1.04)} }
        @keyframes drift3 { from{transform:translate(0,0) scale(1)} to{transform:translate(25px,20px) scale(0.96)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .cv-glass {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .cv-serif-shimmer {
          background: ${c.serif};
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
      `}</style>

      {/* Ambient gradient orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div style={{ position:'absolute', top:'-15%', right:'-5%', width:'650px', height:'650px', borderRadius:'50%', background:`radial-gradient(circle, ${c.orb1} 0%, transparent 70%)`, filter:'blur(50px)', animation:'drift1 13s ease-in-out infinite alternate' }} />
        <div style={{ position:'absolute', bottom:'5%', left:'-8%', width:'550px', height:'550px', borderRadius:'50%', background:`radial-gradient(circle, ${c.orb2} 0%, transparent 70%)`, filter:'blur(60px)', animation:'drift2 17s ease-in-out infinite alternate' }} />
        <div style={{ position:'absolute', top:'35%', left:'35%', width:'350px', height:'350px', borderRadius:'50%', background:`radial-gradient(circle, ${c.orb3} 0%, transparent 70%)`, filter:'blur(70px)', animation:'drift3 21s ease-in-out infinite alternate-reverse' }} />
      </div>

      {/* Nav */}
      <div style={{ position:'fixed', top:'20px', left:'50%', transform:'translateX(-50%)', zIndex:100, width:'calc(100% - 48px)', maxWidth:'1100px' }}>
        <div className="cv-glass flex items-center justify-between px-6 py-3 rounded-full">
          <span className="font-serif italic text-white text-2xl">Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm cursor-pointer" style={{ color:'rgba(255,255,255,0.45)' }}>{l}</span>
            ))}
          </div>
          <div className="font-sans font-bold text-sm px-5 py-2 rounded-full cursor-pointer" style={{ background: c.cta, color: c.ctaText }}>
            Book a Call
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ minHeight:'100vh', paddingTop:'130px', paddingBottom:'80px' }}>

        {/* Left */}
        <div>
          <div className="cv-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full w-fit" style={{ border:`1px solid ${c.accentBorder}`, background: c.accentDim }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.accent, animation:'pulse 2s ease-in-out infinite' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: c.accent }}>Career Consulting</span>
            <span style={{ width:1, height:12, background:`${c.accent}40` }} />
            <span className="font-mono text-xs" style={{ color:`${c.accent}80` }}>Free & Paid</span>
          </div>

          <h1 className="mb-7 leading-none">
            <span className="cv-line1 block font-sans font-extrabold text-white tracking-tight" style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)', lineHeight:1.04 }}>
              Advice that actually
            </span>
            <span className="cv-line2 cv-serif-shimmer block font-serif italic" style={{ fontSize:'clamp(3.2rem,6.5vw,5.5rem)', lineHeight:1 }}>
              gets you somewhere.
            </span>
          </h1>

          <p className="cv-sub font-sans text-base md:text-lg max-w-lg leading-relaxed mb-10" style={{ color:'rgba(255,255,255,0.45)' }}>
            Applying to college, hunting your first internship, or figuring out your next move after graduating. There's a track for where you're at right now.
          </p>

          <div className="cv-ctas flex flex-col sm:flex-row gap-4 mb-12">
            <div className="inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-full cursor-pointer" style={{ background: c.cta, color: c.ctaText }}>
              Find Your Track ↓
            </div>
            <div className="inline-flex items-center justify-center gap-2 font-sans font-semibold px-8 py-4 rounded-full cursor-pointer" style={{ border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.60)' }}>
              See Real Results
            </div>
          </div>

          <div className="cv-proof flex flex-wrap items-center gap-5">
            <div className="flex -space-x-2">
              {[['SK', c.accent],['MT', c.accentMid],['PS','#A88A3A']].map(([init, col]) => (
                <div key={init} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: col, border:`2px solid ${c.bg}`, color: c.bg === '#080A0F' || c.bg.startsWith('#0') ? '#fff' : c.bg }}>{init}</div>
              ))}
            </div>
            <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} style={{ color: c.accent, fontSize:'12px' }}>★</span>)}</div>
            <span className="font-mono text-xs" style={{ color:'rgba(255,255,255,0.30)' }}>5.0 · 50+ students</span>
          </div>
        </div>

        {/* Right — glass cards */}
        <div className="cv-cards hidden lg:flex flex-col gap-4 relative">

          {/* Launch card */}
          <div className="cv-card cv-glass rounded-3xl p-7 relative overflow-hidden">
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${c.card1Line}, transparent)` }} />
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase w-fit" style={{ border:`1px solid ${c.card1Border}`, background: c.accentDim, color: c.accent }}>
              The Launch Program
            </div>
            <p className="font-sans font-bold text-white text-lg mb-1">Free advising for students</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.40)' }}>College apps, internships, career direction. No cost barrier.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: c.accent }}>Free for students</span>
              <span className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full cursor-pointer" style={{ background:`${c.accent}20`, color: c.accent, border:`1px solid ${c.accentBorder}` }}>Learn more →</span>
            </div>
          </div>

          {/* Premium card */}
          <div className="cv-card cv-glass rounded-3xl p-7 relative overflow-hidden">
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${c.card2Line}, transparent)` }} />
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase w-fit" style={{ border:`1px solid ${c.accentBorder}`, background: c.accentDim, color: c.accentMid }}>
              JBC Premium · from $10
            </div>
            <p className="font-sans font-bold text-white text-lg mb-1">Post-grad career coaching</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.40)' }}>Job search, resume + LinkedIn, interview prep. Starting at $10.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: c.accentMid }}>Starting at $10</span>
              <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full cursor-pointer" style={{ background: c.cta, color: c.ctaText }}>Learn more →</span>
            </div>
          </div>

          {/* Floating stat */}
          <div className="cv-card cv-glass absolute -bottom-4 -right-6 rounded-2xl px-5 py-4">
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: c.accent }}>Avg. Result</div>
            <div className="font-sans font-extrabold text-white text-2xl leading-none">6 weeks</div>
            <div className="font-sans text-xs mt-1" style={{ color:'rgba(255,255,255,0.35)' }}>to signed offer</div>
          </div>
        </div>
      </div>

      {/* Variant note */}
      <div style={{ position:'fixed', bottom:'72px', left:'50%', transform:'translateX(-50%)', zIndex:50, textAlign:'center' }}>
        <div className="font-sans text-xs px-4 py-2 rounded-full" style={{ background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.5)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.08)' }}>
          {c.note}
        </div>
      </div>

      {/* Nav bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl" style={{ background:'rgba(255,255,255,0.10)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff' }}>
        {c.prev ? <Link to={c.prev} style={{ color:'rgba(255,255,255,0.5)' }}>← prev</Link> : <span style={{ color:'rgba(255,255,255,0.2)' }}>← prev</span>}
        <span style={{ color: c.accent }}>{c.label}</span>
        {c.next ? <Link to={c.next} style={{ color:'rgba(255,255,255,0.5)' }}>next →</Link> : <span style={{ color:'rgba(255,255,255,0.2)' }}>next →</span>}
      </div>
    </div>
  )
}

export { VARIANTS }
