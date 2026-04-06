// PREVIEW 4 — Editorial Bold (NYT / Pentagram style)
// Massive type, white bg, pure typographic confidence
import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

export default function Preview4() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.2 })
      tl.from('.p4-line1', { y: '100%', opacity: 0, duration: 0.8, ease: 'power3.out' })
        .from('.p4-line2', { y: '100%', opacity: 0, duration: 0.9, ease: 'power3.out' }, '-=0.5')
        .from('.p4-rule',  { scaleX: 0, duration: 0.6, ease: 'power2.out', transformOrigin: 'left' }, '-=0.3')
        .from('.p4-sub',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.p4-cta',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p4-ticker-wrap', { opacity: 0, duration: 0.5 }, '-=0.2')
      gsap.from('.p4-stat', { y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power2.out',
        scrollTrigger: undefined, delay: 1.2 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', background: '#FFFFFF', overflow: 'hidden' }}>
      <style>{`
        .p4-overflow { overflow: hidden; }
        @keyframes ticker { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
        .ticker-inner { animation: ticker 20s linear infinite; display: flex; white-space: nowrap; width: max-content; }
        .p4-cta-btn {
          background: #E8A830;
          color: #080A0F;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s ease, transform 0.2s ease;
        }
        .p4-cta-btn:hover { background: #F5C84A; transform: scale(1.02); }
      `}</style>

      {/* Nav — editorial top bar */}
      <div style={{ borderBottom: '1.5px solid #080A0F', padding: '16px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, background: '#fff' }}>
        <span className="font-serif italic text-2xl" style={{ color: '#080A0F' }}>Joshua Barraza</span>
        <div className="hidden md:flex items-center gap-8">
          {['Launch Program','JBC Premium','Impact'].map(l => (
            <span key={l} className="font-mono text-xs tracking-widest uppercase cursor-pointer" style={{ color: '#5A6175' }}>{l}</span>
          ))}
        </div>
        <div className="font-mono text-xs tracking-widest uppercase px-5 py-2.5 rounded-full cursor-pointer" style={{ background: '#080A0F', color: '#C9A84C' }}>Book a Call →</div>
      </div>

      {/* Main hero */}
      <div className="max-w-7xl mx-auto px-6 md:px-12" style={{ paddingTop: '120px' }}>

        {/* Overline */}
        <div className="flex items-center gap-4 mb-6">
          <span style={{ display: 'block', width: '40px', height: '2px', background: '#E8A830' }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: '#A88A3A' }}>Career Consulting · Est. 2024</span>
        </div>

        {/* Giant headline */}
        <div style={{ borderTop: '1.5px solid #080A0F', paddingTop: '32px' }}>
          <div className="p4-overflow">
            <h1 className="p4-line1 font-sans font-extrabold tracking-tight" style={{ fontSize: 'clamp(3.5rem, 9vw, 9rem)', lineHeight: 1.0, color: '#080A0F', marginBottom: '8px' }}>
              Advice that
            </h1>
          </div>
          <div className="p4-overflow">
            <div className="p4-line2 font-serif italic" style={{ fontSize: 'clamp(4rem, 10vw, 10rem)', lineHeight: 0.95, backgroundImage: 'linear-gradient(90deg,#C9A84C 0%,#E4C56A 35%,#C9A84C 65%,#A88A3A 100%)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', animation: 'shimmer 4s linear infinite' }}>
              actually works.
            </div>
          </div>
        </div>

        {/* Rule + sub + cta */}
        <div style={{ borderTop: '1.5px solid #080A0F', marginTop: '32px', paddingTop: '28px', display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'center', gap: '40px' }} className="p4-rule">
          <p className="p4-sub font-sans text-lg leading-relaxed" style={{ color: '#5A6175', maxWidth: '560px' }}>
            Two tracks. One advisor. Whether you're applying to college, hunting your first internship, or landing your first real offer after graduation.
          </p>
          <div className="p4-cta flex flex-col gap-3 shrink-0">
            <button className="p4-cta-btn font-sans px-10 py-4 rounded-full text-base">Find Your Track →</button>
            <span className="font-mono text-xs text-center" style={{ color: '#A88A3A' }}>Free & paid options available</span>
          </div>
        </div>

        {/* Stats row */}
        <div style={{ borderTop: '1px solid #E8E3D8', marginTop: '40px', paddingTop: '32px', display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: '#E8E3D8' }}>
          {[
            { val: '50+',   label: 'Students helped'    },
            { val: '3.2×',  label: 'More callbacks'     },
            { val: '6 wks', label: 'Avg. time to offer' },
            { val: '5.0',   label: 'Average rating'     },
          ].map((s, i) => (
            <div key={i} className="p4-stat" style={{ background: '#fff', padding: '24px 28px' }}>
              <div className="font-sans font-extrabold" style={{ fontSize: '2.8rem', lineHeight: 1, color: i === 3 ? '#C9A84C' : '#080A0F' }}>{s.val}</div>
              <div className="font-mono text-xs tracking-wider mt-1 uppercase" style={{ color: '#A0978A' }}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* Ticker */}
        <div className="p4-ticker-wrap" style={{ borderTop: '1.5px solid #080A0F', marginTop: '40px', paddingTop: '16px', paddingBottom: '16px', overflow: 'hidden' }}>
          <div className="ticker-inner">
            {[...Array(2)].map((_, r) => (
              <span key={r} style={{ display: 'flex', gap: '64px', paddingRight: '64px' }}>
                {['College Apps', 'Career Direction', 'Resume + LinkedIn', 'Internship Strategy', 'Interview Prep', 'Grad School', 'Job Search', 'Offer Negotiation'].map((t, i) => (
                  <span key={i} className="font-mono text-xs tracking-widest uppercase" style={{ color: i % 2 === 0 ? '#080A0F' : '#E8A830' }}>{t} ✦</span>
                ))}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`@keyframes shimmer{0%{background-position:-200% center}100%{background-position:200% center}}`}</style>

      {/* Label */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-lg" style={{ background: '#080A0F', color: '#fff' }}>
        <Link to="/preview/3" className="opacity-60 mr-2">← prev</Link>
        Option 4 — Editorial Bold ·
        <Link to="/preview/1" className="ml-2 opacity-60">back to 1 →</Link>
      </div>
    </div>
  )
}
