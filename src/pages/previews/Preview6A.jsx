/**
 * Preview 6A — Cursor Parallax + Magnetic
 * Emerald scheme. Orbs track cursor. Cards do 3D tilt on hover. CTA has magnetic pull.
 */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'

const C = {
  bg: '#050F0A',
  orb1: 'rgba(16,185,129,0.22)',
  orb2: 'rgba(5,150,105,0.15)',
  orb3: 'rgba(52,211,153,0.11)',
  accent: '#34D399',
  accentMid: '#10B981',
  accentDim: 'rgba(16,185,129,0.12)',
  accentBorder: 'rgba(16,185,129,0.28)',
  serif: 'linear-gradient(90deg,#34D399 0%,#6EE7B7 35%,#34D399 65%,#059669 100%)',
  cta: '#10B981',
  ctaText: '#050F0A',
}

function MagneticButton({ children, style, className, strength = 0.4 }) {
  const btnRef = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' })
    setPos({ x: 0, y: 0 })
  }

  useEffect(() => {
    if (pos.x !== 0 || pos.y !== 0) {
      gsap.to(btnRef.current, { x: pos.x, y: pos.y, duration: 0.2, ease: 'power2.out' })
    }
  }, [pos])

  return (
    <button
      ref={btnRef}
      className={className}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </button>
  )
}

function TiltCard({ children, className, style }) {
  const cardRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    gsap.to(cardRef.current, {
      rotateY: x * 14,
      rotateX: -y * 14,
      scale: 1.02,
      duration: 0.3,
      ease: 'power2.out',
      transformPerspective: 800,
    })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, {
      rotateY: 0,
      rotateX: 0,
      scale: 1,
      duration: 0.6,
      ease: 'elastic.out(1, 0.5)',
      transformPerspective: 800,
    })
  }

  return (
    <div
      ref={cardRef}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </div>
  )
}

export default function Preview6A() {
  const containerRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const orb3Ref = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const currentPos = useRef({ orb1: { x: 0, y: 0 }, orb2: { x: 0, y: 0 }, orb3: { x: 0, y: 0 } })

  // GSAP entrance
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.p6a-badge', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.p6a-line1', { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.p6a-line2', { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .from('.p6a-sub',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p6a-ctas',  { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.p6a-proof', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.p6a-cards', { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2)
        .from('.p6a-card',  { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, 0.8)
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // Parallax orb tracking
  useEffect(() => {
    const onMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
    }
    window.addEventListener('mousemove', onMove)

    const animate = () => {
      const { x, y } = mousePos.current
      const vw = window.innerWidth
      const vh = window.innerHeight
      // Normalize mouse to [-1, 1]
      const nx = (x / vw - 0.5) * 2
      const ny = (y / vh - 0.5) * 2

      const lerp = (a, b, t) => a + (b - a) * t
      const speed = 0.04

      // Different parallax depths per orb
      const t1 = { x: nx * 60, y: ny * 40 }
      const t2 = { x: nx * -40, y: ny * -55 }
      const t3 = { x: nx * 30, y: ny * 30 }

      currentPos.current.orb1.x = lerp(currentPos.current.orb1.x, t1.x, speed)
      currentPos.current.orb1.y = lerp(currentPos.current.orb1.y, t1.y, speed)
      currentPos.current.orb2.x = lerp(currentPos.current.orb2.x, t2.x, speed)
      currentPos.current.orb2.y = lerp(currentPos.current.orb2.y, t2.y, speed)
      currentPos.current.orb3.x = lerp(currentPos.current.orb3.x, t3.x, speed)
      currentPos.current.orb3.y = lerp(currentPos.current.orb3.y, t3.y, speed)

      if (orb1Ref.current) {
        orb1Ref.current.style.transform = `translate(${currentPos.current.orb1.x}px, ${currentPos.current.orb1.y}px) scale(1)`
      }
      if (orb2Ref.current) {
        orb2Ref.current.style.transform = `translate(${currentPos.current.orb2.x}px, ${currentPos.current.orb2.y}px) scale(1)`
      }
      if (orb3Ref.current) {
        orb3Ref.current.style.transform = `translate(${currentPos.current.orb3.x}px, ${currentPos.current.orb3.y}px) scale(1)`
      }

      rafRef.current = requestAnimationFrame(animate)
    }

    rafRef.current = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', background: C.bg, overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .p6a-glass {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .p6a-serif {
          background: ${C.serif};
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
        .p6a-cta-primary {
          position: relative;
          overflow: hidden;
          transition: box-shadow 0.2s;
        }
        .p6a-cta-primary:hover {
          box-shadow: 0 0 30px rgba(16,185,129,0.45), 0 0 60px rgba(16,185,129,0.2);
        }
        .p6a-cta-secondary:hover {
          background: rgba(255,255,255,0.08);
          border-color: rgba(255,255,255,0.22) !important;
          color: rgba(255,255,255,0.85) !important;
        }
        .p6a-cta-secondary { transition: all 0.2s; }
        .p6a-tag { transition: all 0.2s; }
        .p6a-tag:hover { background: rgba(16,185,129,0.2) !important; }
      `}</style>

      {/* Parallax orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden' }}>
        <div ref={orb1Ref} style={{ position:'absolute', top:'-15%', right:'-5%', width:'650px', height:'650px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb1} 0%, transparent 70%)`, filter:'blur(50px)', willChange:'transform' }} />
        <div ref={orb2Ref} style={{ position:'absolute', bottom:'5%', left:'-8%', width:'550px', height:'550px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb2} 0%, transparent 70%)`, filter:'blur(60px)', willChange:'transform' }} />
        <div ref={orb3Ref} style={{ position:'absolute', top:'35%', left:'35%', width:'350px', height:'350px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb3} 0%, transparent 70%)`, filter:'blur(70px)', willChange:'transform' }} />
      </div>

      {/* Nav */}
      <div style={{ position:'fixed', top:'20px', left:'50%', transform:'translateX(-50%)', zIndex:100, width:'calc(100% - 48px)', maxWidth:'1100px' }}>
        <div className="p6a-glass flex items-center justify-between px-6 py-3 rounded-full">
          <span className="font-serif italic text-white text-2xl">Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm cursor-pointer" style={{ color:'rgba(255,255,255,0.45)' }}>{l}</span>
            ))}
          </div>
          <MagneticButton
            className="font-sans font-bold text-sm px-5 py-2 rounded-full cursor-pointer"
            style={{ background: C.cta, color: C.ctaText }}
          >
            Book a Call
          </MagneticButton>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ minHeight:'100vh', paddingTop:'130px', paddingBottom:'80px' }}>

        {/* Left */}
        <div>
          <div className="p6a-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full w-fit" style={{ border:`1px solid ${C.accentBorder}`, background: C.accentDim }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: C.accent, animation:'pulse 2s ease-in-out infinite' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: C.accent }}>Career Consulting</span>
            <span style={{ width:1, height:12, background:`${C.accent}40` }} />
            <span className="font-mono text-xs" style={{ color:`${C.accent}80` }}>Free & Paid</span>
          </div>

          <h1 className="mb-7 leading-none">
            <span className="p6a-line1 block font-sans font-extrabold text-white tracking-tight" style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)', lineHeight:1.04 }}>
              Advice that actually
            </span>
            <span className="p6a-line2 p6a-serif block font-serif italic" style={{ fontSize:'clamp(3.2rem,6.5vw,5.5rem)', lineHeight:1 }}>
              gets you somewhere.
            </span>
          </h1>

          <p className="p6a-sub font-sans text-base md:text-lg max-w-lg leading-relaxed mb-10" style={{ color:'rgba(255,255,255,0.45)' }}>
            Applying to college, hunting your first internship, or figuring out your next move after graduating. There's a track for where you're at right now.
          </p>

          <div className="p6a-ctas flex flex-col sm:flex-row gap-4 mb-12">
            <MagneticButton
              className="p6a-cta-primary inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-full cursor-pointer"
              style={{ background: C.cta, color: C.ctaText }}
              strength={0.3}
            >
              Find Your Track ↓
            </MagneticButton>
            <MagneticButton
              className="p6a-cta-secondary inline-flex items-center justify-center gap-2 font-sans font-semibold px-8 py-4 rounded-full cursor-pointer"
              style={{ border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.60)' }}
              strength={0.2}
            >
              See Real Results
            </MagneticButton>
          </div>

          <div className="p6a-proof flex flex-wrap items-center gap-5">
            <div className="flex -space-x-2">
              {[['SK', C.accent],['MT', C.accentMid],['PS','#059669']].map(([init, col]) => (
                <div key={init} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: col, border:`2px solid ${C.bg}`, color: '#050F0A' }}>{init}</div>
              ))}
            </div>
            <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} style={{ color: C.accent, fontSize:'12px' }}>★</span>)}</div>
            <span className="font-mono text-xs" style={{ color:'rgba(255,255,255,0.30)' }}>5.0 · 50+ students</span>
          </div>
        </div>

        {/* Right — 3D tilt glass cards */}
        <div className="p6a-cards hidden lg:flex flex-col gap-4 relative">

          <TiltCard className="p6a-card p6a-glass rounded-3xl p-7 relative overflow-hidden cursor-pointer">
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${C.accent}, transparent)` }} />
            <div className="p6a-tag inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase w-fit" style={{ border:`1px solid ${C.accentBorder}`, background: C.accentDim, color: C.accent }}>
              The Launch Program
            </div>
            <p className="font-sans font-bold text-white text-lg mb-1">Free advising for students</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.40)' }}>College apps, internships, career direction. No cost barrier.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: C.accent }}>Free for students</span>
              <span className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background:`${C.accent}20`, color: C.accent, border:`1px solid ${C.accentBorder}` }}>Learn more →</span>
            </div>
          </TiltCard>

          <TiltCard className="p6a-card p6a-glass rounded-3xl p-7 relative overflow-hidden cursor-pointer">
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${C.accentMid}, transparent)` }} />
            <div className="p6a-tag inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase w-fit" style={{ border:`1px solid ${C.accentBorder}`, background: C.accentDim, color: C.accentMid }}>
              JBC Premium · from $10
            </div>
            <p className="font-sans font-bold text-white text-lg mb-1">Post-grad career coaching</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={{ color:'rgba(255,255,255,0.40)' }}>Job search, resume + LinkedIn, interview prep. Starting at $10.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: C.accentMid }}>Starting at $10</span>
              <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: C.cta, color: C.ctaText }}>Learn more →</span>
            </div>
          </TiltCard>

          <TiltCard className="p6a-card p6a-glass absolute -bottom-4 -right-6 rounded-2xl px-5 py-4">
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: C.accent }}>Avg. Result</div>
            <div className="font-sans font-extrabold text-white text-2xl leading-none">6 weeks</div>
            <div className="font-sans text-xs mt-1" style={{ color:'rgba(255,255,255,0.35)' }}>to signed offer</div>
          </TiltCard>
        </div>
      </div>

      {/* Label */}
      <div style={{ position:'fixed', bottom:'72px', left:'50%', transform:'translateX(-50%)', zIndex:50, textAlign:'center' }}>
        <div className="font-sans text-xs px-4 py-2 rounded-full" style={{ background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.5)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.08)' }}>
          6A — Cursor Parallax + Magnetic · Move your mouse. Hover the cards.
        </div>
      </div>

      {/* Nav bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl" style={{ background:'rgba(255,255,255,0.10)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff' }}>
        <Link to="/preview/5e" style={{ color:'rgba(255,255,255,0.5)' }}>← prev</Link>
        <span style={{ color: C.accent }}>6A — Parallax + Magnetic</span>
        <Link to="/preview/6b" style={{ color:'rgba(255,255,255,0.5)' }}>next →</Link>
      </div>
    </div>
  )
}
