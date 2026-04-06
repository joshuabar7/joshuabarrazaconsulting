/**
 * Preview 6A variants — background options
 * Same cursor parallax + magnetic interactions, three different backgrounds.
 */
import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'

const VARIANTS = {
  a: {
    label: 'A — Deep Forest',
    note: 'Still dark, but clearly green. Premium + moody.',
    bg: '#0A1A10',
    orb1: 'rgba(16,185,129,0.28)',
    orb2: 'rgba(5,150,105,0.20)',
    orb3: 'rgba(52,211,153,0.14)',
    accent: '#34D399',
    accentMid: '#10B981',
    accentDim: 'rgba(16,185,129,0.14)',
    accentBorder: 'rgba(16,185,129,0.32)',
    serif: 'linear-gradient(90deg,#34D399 0%,#6EE7B7 35%,#34D399 65%,#059669 100%)',
    cta: '#10B981',
    ctaText: '#050F0A',
    dark: true,
    // Text/glass
    headingColor: '#ffffff',
    subColor: 'rgba(255,255,255,0.45)',
    navBg: 'rgba(255,255,255,0.05)',
    navBorder: 'rgba(255,255,255,0.10)',
    navLinkColor: 'rgba(255,255,255,0.45)',
    cardBg: 'rgba(255,255,255,0.045)',
    cardBorder: 'rgba(255,255,255,0.09)',
    statColor: 'rgba(255,255,255,0.35)',
  },
  b: {
    label: 'B — Parchment + Emerald',
    note: 'Warm cream base, emerald accents. Matches current site vibe.',
    bg: '#FFFBEB',
    orb1: 'rgba(16,185,129,0.12)',
    orb2: 'rgba(5,150,105,0.08)',
    orb3: 'rgba(52,211,153,0.07)',
    accent: '#059669',
    accentMid: '#047857',
    accentDim: 'rgba(5,150,105,0.10)',
    accentBorder: 'rgba(5,150,105,0.25)',
    serif: 'linear-gradient(90deg,#059669 0%,#10B981 35%,#059669 65%,#047857 100%)',
    cta: '#059669',
    ctaText: '#ffffff',
    dark: false,
    headingColor: '#0D0F14',
    subColor: 'rgba(13,15,20,0.55)',
    navBg: 'rgba(255,255,255,0.75)',
    navBorder: 'rgba(0,0,0,0.08)',
    navLinkColor: 'rgba(13,15,20,0.5)',
    cardBg: 'rgba(255,255,255,0.80)',
    cardBorder: 'rgba(0,0,0,0.07)',
    statColor: 'rgba(13,15,20,0.40)',
  },
  c: {
    label: 'C — Soft Green Tint',
    note: 'Near-white with a cool green undertone. Fresh + minimal.',
    bg: '#F0FBF5',
    orb1: 'rgba(16,185,129,0.15)',
    orb2: 'rgba(5,150,105,0.10)',
    orb3: 'rgba(52,211,153,0.09)',
    accent: '#059669',
    accentMid: '#047857',
    accentDim: 'rgba(5,150,105,0.10)',
    accentBorder: 'rgba(5,150,105,0.25)',
    serif: 'linear-gradient(90deg,#059669 0%,#10B981 35%,#059669 65%,#047857 100%)',
    cta: '#059669',
    ctaText: '#ffffff',
    dark: false,
    headingColor: '#0D0F14',
    subColor: 'rgba(13,15,20,0.55)',
    navBg: 'rgba(240,251,245,0.85)',
    navBorder: 'rgba(0,0,0,0.07)',
    navLinkColor: 'rgba(13,15,20,0.5)',
    cardBg: 'rgba(255,255,255,0.85)',
    cardBorder: 'rgba(5,150,105,0.12)',
    statColor: 'rgba(13,15,20,0.40)',
  },
}

const PREV_NEXT = {
  a: { prev: null,            next: '/preview/6a-b' },
  b: { prev: '/preview/6a-a', next: '/preview/6a-c' },
  c: { prev: '/preview/6a-b', next: null },
}

function MagneticButton({ children, style, className, strength = 0.4 }) {
  const btnRef = useRef(null)

  const handleMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    gsap.to(btnRef.current, {
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
      duration: 0.2,
      ease: 'power2.out',
    })
  }

  const handleMouseLeave = () => {
    gsap.to(btnRef.current, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.4)' })
  }

  return (
    <button ref={btnRef} className={className} style={style} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
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
    gsap.to(cardRef.current, { rotateY: x * 14, rotateX: -y * 14, scale: 1.02, duration: 0.3, ease: 'power2.out', transformPerspective: 800 })
  }

  const handleMouseLeave = () => {
    gsap.to(cardRef.current, { rotateY: 0, rotateX: 0, scale: 1, duration: 0.6, ease: 'elastic.out(1,0.5)', transformPerspective: 800 })
  }

  return (
    <div ref={cardRef} className={className} style={{ ...style, transformStyle: 'preserve-3d', willChange: 'transform' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      {children}
    </div>
  )
}

export default function Preview6AVariant({ variant }) {
  const c = VARIANTS[variant]
  const { prev, next } = PREV_NEXT[variant]
  const containerRef = useRef(null)
  const orb1Ref = useRef(null)
  const orb2Ref = useRef(null)
  const orb3Ref = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)
  const curPos = useRef({ o1: { x:0,y:0 }, o2: { x:0,y:0 }, o3: { x:0,y:0 } })

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.vbadge', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.vline1', { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.vline2', { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .from('.vsub',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.vctas',  { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.vproof', { opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.vcards', { x: 50, opacity: 0, duration: 1, ease: 'power3.out' }, 0.2)
        .from('.vcard',  { y: 20, opacity: 0, duration: 0.5, stagger: 0.12 }, 0.8)
    }, containerRef)
    return () => ctx.revert()
  }, [variant])

  useEffect(() => {
    const onMove = (e) => { mousePos.current = { x: e.clientX, y: e.clientY } }
    window.addEventListener('mousemove', onMove)
    const lerp = (a, b, t) => a + (b - a) * t
    const animate = () => {
      const nx = (mousePos.current.x / window.innerWidth  - 0.5) * 2
      const ny = (mousePos.current.y / window.innerHeight - 0.5) * 2
      const t1 = { x: nx * 55, y: ny * 38 }
      const t2 = { x: nx * -38, y: ny * -50 }
      const t3 = { x: nx * 28, y: ny * 28 }
      const s = 0.04
      curPos.current.o1.x = lerp(curPos.current.o1.x, t1.x, s)
      curPos.current.o1.y = lerp(curPos.current.o1.y, t1.y, s)
      curPos.current.o2.x = lerp(curPos.current.o2.x, t2.x, s)
      curPos.current.o2.y = lerp(curPos.current.o2.y, t2.y, s)
      curPos.current.o3.x = lerp(curPos.current.o3.x, t3.x, s)
      curPos.current.o3.y = lerp(curPos.current.o3.y, t3.y, s)
      if (orb1Ref.current) orb1Ref.current.style.transform = `translate(${curPos.current.o1.x}px,${curPos.current.o1.y}px)`
      if (orb2Ref.current) orb2Ref.current.style.transform = `translate(${curPos.current.o2.x}px,${curPos.current.o2.y}px)`
      if (orb3Ref.current) orb3Ref.current.style.transform = `translate(${curPos.current.o3.x}px,${curPos.current.o3.y}px)`
      rafRef.current = requestAnimationFrame(animate)
    }
    rafRef.current = requestAnimationFrame(animate)
    return () => { window.removeEventListener('mousemove', onMove); cancelAnimationFrame(rafRef.current) }
  }, [])

  const headingStyle = { color: c.headingColor }
  const subStyle = { color: c.subColor }

  return (
    <div ref={containerRef} style={{ minHeight: '100vh', background: c.bg, overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .vglass {
          background: ${c.cardBg};
          border: 1px solid ${c.cardBorder};
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .vserif {
          background: ${c.serif};
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
        .vcta-primary { transition: box-shadow 0.2s, transform 0.15s; }
        .vcta-primary:hover { box-shadow: 0 0 30px rgba(5,150,105,0.45); transform: translateY(-1px); }
        .vtag { transition: background 0.2s; }
        .vtag:hover { background: rgba(5,150,105,0.18) !important; }
      `}</style>

      {/* Orbs */}
      <div style={{ position:'fixed', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <div ref={orb1Ref} style={{ position:'absolute', top:'-15%', right:'-5%', width:'650px', height:'650px', borderRadius:'50%', background:`radial-gradient(circle, ${c.orb1} 0%, transparent 70%)`, filter:'blur(50px)', willChange:'transform' }} />
        <div ref={orb2Ref} style={{ position:'absolute', bottom:'5%', left:'-8%', width:'550px', height:'550px', borderRadius:'50%', background:`radial-gradient(circle, ${c.orb2} 0%, transparent 70%)`, filter:'blur(60px)', willChange:'transform' }} />
        <div ref={orb3Ref} style={{ position:'absolute', top:'35%', left:'35%', width:'350px', height:'350px', borderRadius:'50%', background:`radial-gradient(circle, ${c.orb3} 0%, transparent 70%)`, filter:'blur(70px)', willChange:'transform' }} />
      </div>

      {/* Nav */}
      <div style={{ position:'fixed', top:'20px', left:'50%', transform:'translateX(-50%)', zIndex:100, width:'calc(100% - 48px)', maxWidth:'1100px' }}>
        <div style={{ background: c.navBg, border:`1px solid ${c.navBorder}`, backdropFilter:'blur(14px)', WebkitBackdropFilter:'blur(14px)' }} className="flex items-center justify-between px-6 py-3 rounded-full">
          <span className="font-serif italic text-2xl" style={headingStyle}>Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm cursor-pointer" style={{ color: c.navLinkColor }}>{l}</span>
            ))}
          </div>
          <MagneticButton className="font-sans font-bold text-sm px-5 py-2 rounded-full cursor-pointer" style={{ background: c.cta, color: c.ctaText }}>
            Book a Call
          </MagneticButton>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" style={{ minHeight:'100vh', paddingTop:'130px', paddingBottom:'80px' }}>

        {/* Left */}
        <div>
          <div className="vbadge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full w-fit" style={{ border:`1px solid ${c.accentBorder}`, background: c.accentDim }}>
            <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.accent, animation:'pulse 2s ease-in-out infinite' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: c.accent }}>Career Consulting</span>
            <span style={{ width:1, height:12, background:`${c.accent}40` }} />
            <span className="font-mono text-xs" style={{ color:`${c.accent}80` }}>Free & Paid</span>
          </div>

          <h1 className="mb-7 leading-none">
            <span className="vline1 block font-sans font-extrabold tracking-tight" style={{ fontSize:'clamp(2.8rem,5.5vw,4.5rem)', lineHeight:1.04, ...headingStyle }}>
              Advice that actually
            </span>
            <span className="vline2 vserif block font-serif italic" style={{ fontSize:'clamp(3.2rem,6.5vw,5.5rem)', lineHeight:1 }}>
              gets you somewhere.
            </span>
          </h1>

          <p className="vsub font-sans text-base md:text-lg max-w-lg leading-relaxed mb-10" style={subStyle}>
            Applying to college, hunting your first internship, or figuring out your next move after graduating. There's a track for where you're at right now.
          </p>

          <div className="vctas flex flex-col sm:flex-row gap-4 mb-12">
            <MagneticButton className="vcta-primary inline-flex items-center justify-center gap-2 font-sans font-bold px-8 py-4 rounded-full cursor-pointer" style={{ background: c.cta, color: c.ctaText }} strength={0.3}>
              Find Your Track ↓
            </MagneticButton>
            <MagneticButton className="inline-flex items-center justify-center gap-2 font-sans font-semibold px-8 py-4 rounded-full cursor-pointer" style={{ border:`1px solid ${c.accentBorder}`, color: c.accent }} strength={0.2}>
              See Real Results
            </MagneticButton>
          </div>

          <div className="vproof flex flex-wrap items-center gap-5">
            <div className="flex -space-x-2">
              {[['SK', c.accent],['MT', c.accentMid],['PS','#059669']].map(([init, col]) => (
                <div key={init} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: col, border:`2px solid ${c.bg}`, color: '#fff' }}>{init}</div>
              ))}
            </div>
            <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} style={{ color: c.accent, fontSize:'12px' }}>★</span>)}</div>
            <span className="font-mono text-xs" style={{ color: c.statColor }}>5.0 · 50+ students</span>
          </div>
        </div>

        {/* Right — tilt cards */}
        <div className="vcards hidden lg:flex flex-col gap-4 relative">
          <TiltCard className="vcard vglass rounded-3xl p-7 relative overflow-hidden cursor-pointer">
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${c.accent}, transparent)` }} />
            <div className="vtag inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase w-fit" style={{ border:`1px solid ${c.accentBorder}`, background: c.accentDim, color: c.accent }}>
              The Launch Program
            </div>
            <p className="font-sans font-bold text-lg mb-1" style={headingStyle}>Free advising for students</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={subStyle}>College apps, internships, career direction. No cost barrier.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: c.accent }}>Free for students</span>
              <span className="font-sans text-xs font-semibold px-3 py-1.5 rounded-full" style={{ background: c.accentDim, color: c.accent, border:`1px solid ${c.accentBorder}` }}>Learn more →</span>
            </div>
          </TiltCard>

          <TiltCard className="vcard vglass rounded-3xl p-7 relative overflow-hidden cursor-pointer">
            <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${c.accentMid}, transparent)` }} />
            <div className="vtag inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase w-fit" style={{ border:`1px solid ${c.accentBorder}`, background: c.accentDim, color: c.accentMid }}>
              JBC Premium · from $10
            </div>
            <p className="font-sans font-bold text-lg mb-1" style={headingStyle}>Post-grad career coaching</p>
            <p className="font-sans text-sm leading-relaxed mb-5" style={subStyle}>Job search, resume + LinkedIn, interview prep. Starting at $10.</p>
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs" style={{ color: c.accentMid }}>Starting at $10</span>
              <span className="font-sans text-xs font-bold px-3 py-1.5 rounded-full" style={{ background: c.cta, color: c.ctaText }}>Learn more →</span>
            </div>
          </TiltCard>

          <TiltCard className="vcard vglass absolute -bottom-4 -right-6 rounded-2xl px-5 py-4">
            <div className="font-mono text-[10px] tracking-widest uppercase mb-1.5" style={{ color: c.accent }}>Avg. Result</div>
            <div className="font-sans font-extrabold text-2xl leading-none" style={headingStyle}>6 weeks</div>
            <div className="font-sans text-xs mt-1" style={{ color: c.statColor }}>to signed offer</div>
          </TiltCard>
        </div>
      </div>

      {/* Note */}
      <div style={{ position:'fixed', bottom:'72px', left:'50%', transform:'translateX(-50%)', zIndex:50, textAlign:'center' }}>
        <div className="font-sans text-xs px-4 py-2 rounded-full" style={{ background: c.dark ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.06)', color: c.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.45)', backdropFilter:'blur(8px)', border: c.dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(0,0,0,0.07)' }}>
          {c.note}
        </div>
      </div>

      {/* Nav bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl" style={{ background: c.dark ? 'rgba(255,255,255,0.10)' : 'rgba(0,0,0,0.08)', backdropFilter:'blur(16px)', border: c.dark ? '1px solid rgba(255,255,255,0.12)' : '1px solid rgba(0,0,0,0.08)' }}>
        {prev ? <Link to={prev} style={{ color: c.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>← prev</Link> : <span style={{ color: c.dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}>← prev</span>}
        <span style={{ color: c.accent }}>{c.label}</span>
        {next ? <Link to={next} style={{ color: c.dark ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)' }}>next →</Link> : <span style={{ color: c.dark ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.2)' }}>next →</span>}
      </div>
    </div>
  )
}

export { VARIANTS }
