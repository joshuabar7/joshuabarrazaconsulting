/**
 * Preview 6B — Click Expand + Counter Animations
 * Emerald scheme. Service cards expand on click. Stats animate up on view. Staggered reveals.
 */
import { useEffect, useRef, useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

const SERVICES = [
  { id: 'college', title: 'College Application Advising', tag: 'HS Seniors', desc: 'Short blurb shown collapsed.', detail: 'Full strategy from school list to essays. We work through Common App, supplements, and positioning to give you the best shot at your target schools — without the $5K private counselor price tag.' },
  { id: 'career',  title: 'Career Direction & Major Selection', tag: 'HS + College', desc: 'Figuring out what to study.', detail: 'We map your interests and strengths to realistic academic paths. No generic career quizzes — real conversation about what you actually want and what the market looks like.' },
  { id: 'resume',  title: 'Resume & Early Internship Search', tag: 'College', desc: 'Get your first internship.', detail: 'From blank page to polished resume in one session. Plus a practical outreach strategy that actually gets responses — not just applications into the void.' },
  { id: 'gap',     title: 'Gap Year & Trade School Paths', tag: 'HS + College', desc: 'Beyond the 4-year track.', detail: 'Not everyone needs college right now. We explore trade school programs, gap year structures, and bootcamp paths that match your timeline and goals.' },
]

const STATS = [
  { end: 50, suffix: '+', label: 'Students Advised' },
  { end: 6,  suffix: 'wk', label: 'Avg. to Signed Offer' },
  { end: 100, suffix: '%', label: 'Free for Launch Students' },
]

function useCounter(target, duration = 1.5) {
  const [count, setCount] = useState(0)
  const triggered = useRef(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 85%',
      onEnter: () => {
        if (triggered.current) return
        triggered.current = true
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration,
          ease: 'power2.out',
          onUpdate: () => setCount(Math.round(obj.val)),
        })
      },
    })
    return () => st.kill()
  }, [target, duration])

  return { count, ref }
}

function StatCard({ stat }) {
  const { count, ref } = useCounter(stat.end)
  return (
    <div ref={ref} className="p6b-glass rounded-2xl px-6 py-5 text-center">
      <div className="font-sans font-extrabold text-white" style={{ fontSize: '2.4rem', lineHeight: 1, color: C.accent }}>
        {count}{stat.suffix}
      </div>
      <div className="font-mono text-xs tracking-widest uppercase mt-1.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{stat.label}</div>
    </div>
  )
}

function ServiceCard({ svc, index }) {
  const [open, setOpen] = useState(false)
  const detailRef = useRef(null)
  const cardRef = useRef(null)

  useEffect(() => {
    if (detailRef.current) {
      if (open) {
        gsap.fromTo(detailRef.current,
          { height: 0, opacity: 0 },
          { height: 'auto', opacity: 1, duration: 0.4, ease: 'power2.out' }
        )
      } else {
        gsap.to(detailRef.current, { height: 0, opacity: 0, duration: 0.3, ease: 'power2.in' })
      }
    }
  }, [open])

  // Entrance animation on scroll
  useEffect(() => {
    const el = cardRef.current
    if (!el) return
    gsap.from(el, {
      y: 30,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 88%' },
    })
  }, [index])

  return (
    <div
      ref={cardRef}
      className="p6b-glass rounded-2xl overflow-hidden cursor-pointer"
      style={{ border: open ? `1px solid ${C.accentBorder}` : '1px solid rgba(255,255,255,0.09)', transition: 'border-color 0.3s' }}
      onClick={() => setOpen(o => !o)}
    >
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-4">
          <div className="w-2 h-2 rounded-full shrink-0" style={{ background: open ? C.accent : 'rgba(255,255,255,0.25)', transition: 'background 0.3s' }} />
          <div>
            <p className="font-sans font-semibold text-white text-base">{svc.title}</p>
            <p className="font-sans text-sm mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{svc.desc}</p>
          </div>
        </div>
        <div className="flex items-center gap-3 shrink-0 ml-4">
          <span className="hidden sm:block font-mono text-[10px] tracking-widest uppercase px-2.5 py-1 rounded-full" style={{ background: C.accentDim, color: C.accent, border:`1px solid ${C.accentBorder}` }}>{svc.tag}</span>
          <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: open ? C.accentDim : 'rgba(255,255,255,0.06)', transition: 'all 0.3s', border:`1px solid ${open ? C.accentBorder : 'rgba(255,255,255,0.09)'}` }}>
            <span style={{ color: open ? C.accent : 'rgba(255,255,255,0.5)', fontSize: '14px', lineHeight: 1, transition: 'transform 0.3s', display: 'block', transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
          </div>
        </div>
      </div>
      <div ref={detailRef} style={{ height: 0, opacity: 0, overflow: 'hidden' }}>
        <div className="px-6 pb-6 pt-0">
          <div style={{ height: 1, background: `linear-gradient(90deg, ${C.accent}40, transparent)`, marginBottom: '16px' }} />
          <p className="font-sans text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>{svc.detail}</p>
        </div>
      </div>
    </div>
  )
}

export default function Preview6B() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.p6b-badge', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.p6b-line1', { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.p6b-line2', { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .from('.p6b-sub',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p6b-ctas',  { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: C.bg, overflow: 'hidden', position: 'relative' }}>
      <style>{`
        @keyframes drift1 { from{transform:translate(0,0)} to{transform:translate(45px,-35px)} }
        @keyframes drift2 { from{transform:translate(0,0)} to{transform:translate(-35px,45px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .p6b-glass {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .p6b-serif {
          background: ${C.serif};
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
        .p6b-btn-primary { transition: box-shadow 0.25s, transform 0.15s; }
        .p6b-btn-primary:hover { box-shadow: 0 0 30px rgba(16,185,129,0.45); transform: translateY(-1px); }
        .p6b-btn-secondary { transition: all 0.2s; }
        .p6b-btn-secondary:hover { background: rgba(255,255,255,0.08) !important; color: rgba(255,255,255,0.85) !important; }
      `}</style>

      {/* Ambient orbs */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position:'absolute', top:'-15%', right:'-5%', width:'650px', height:'650px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb1} 0%, transparent 70%)`, filter:'blur(50px)', animation:'drift1 13s ease-in-out infinite alternate' }} />
        <div style={{ position:'absolute', bottom:'5%', left:'-8%', width:'550px', height:'550px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb2} 0%, transparent 70%)`, filter:'blur(60px)', animation:'drift2 17s ease-in-out infinite alternate' }} />
      </div>

      {/* Nav */}
      <div style={{ position:'fixed', top:'20px', left:'50%', transform:'translateX(-50%)', zIndex:100, width:'calc(100% - 48px)', maxWidth:'1100px' }}>
        <div className="p6b-glass flex items-center justify-between px-6 py-3 rounded-full">
          <span className="font-serif italic text-white text-2xl">Joshua Barraza</span>
          <div className="hidden md:flex items-center gap-6">
            {['Launch Program','JBC Premium','Impact'].map(l => (
              <span key={l} className="font-sans text-sm cursor-pointer" style={{ color:'rgba(255,255,255,0.45)' }}>{l}</span>
            ))}
          </div>
          <div className="font-sans font-bold text-sm px-5 py-2 rounded-full cursor-pointer" style={{ background: C.cta, color: C.ctaText }}>
            Book a Call
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-10 text-center" style={{ paddingTop:'160px', paddingBottom:'80px' }}>
        <div className="p6b-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full w-fit mx-auto" style={{ border:`1px solid ${C.accentBorder}`, background: C.accentDim }}>
          <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent, animation:'pulse 2s infinite' }} />
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: C.accent }}>Career Consulting</span>
          <span style={{ width:1, height:12, background:`${C.accent}40` }} />
          <span className="font-mono text-xs" style={{ color:`${C.accent}80` }}>Free & Paid</span>
        </div>

        <h1 className="mb-7 leading-none">
          <span className="p6b-line1 block font-sans font-extrabold text-white tracking-tight" style={{ fontSize:'clamp(2.8rem,5.5vw,4.8rem)', lineHeight:1.04 }}>
            Advice that actually
          </span>
          <span className="p6b-line2 p6b-serif block font-serif italic" style={{ fontSize:'clamp(3.2rem,6.5vw,5.8rem)', lineHeight:1 }}>
            gets you somewhere.
          </span>
        </h1>

        <p className="p6b-sub font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ color:'rgba(255,255,255,0.45)' }}>
          Tap any service below to see what's really included. No hidden costs. No surprises.
        </p>

        <div className="p6b-ctas flex justify-center gap-4 mb-16">
          <button className="p6b-btn-primary font-sans font-bold px-8 py-4 rounded-full" style={{ background: C.cta, color: C.ctaText }}>
            Find Your Track ↓
          </button>
          <button className="p6b-btn-secondary font-sans font-semibold px-8 py-4 rounded-full" style={{ border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.60)' }}>
            See Real Results
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 grid grid-cols-3 gap-4 mb-16">
        {STATS.map(s => <StatCard key={s.label} stat={s} />)}
      </div>

      {/* Expandable services */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 pb-40">
        <h2 className="font-sans font-bold text-white text-xl mb-6 text-center">
          <span style={{ color: 'rgba(255,255,255,0.5)', fontWeight: 400 }}>Tap to explore </span>
          what's included
        </h2>
        <div className="flex flex-col gap-3">
          {SERVICES.map((svc, i) => (
            <ServiceCard key={svc.id} svc={svc} index={i} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="p6b-glass inline-block rounded-2xl px-8 py-5">
            <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: C.accent }}>Ready to start?</p>
            <p className="font-sans text-white text-lg font-bold mb-1">Launch Program is free.</p>
            <p className="font-sans text-sm mb-5" style={{ color: 'rgba(255,255,255,0.4)' }}>No application. Just reach out.</p>
            <button className="p6b-btn-primary font-sans font-bold px-7 py-3 rounded-full text-sm" style={{ background: C.cta, color: C.ctaText }}>
              Get in Touch →
            </button>
          </div>
        </div>
      </div>

      {/* Label */}
      <div style={{ position:'fixed', bottom:'72px', left:'50%', transform:'translateX(-50%)', zIndex:50, textAlign:'center' }}>
        <div className="font-sans text-xs px-4 py-2 rounded-full" style={{ background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.5)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.08)' }}>
          6B — Click Expand + Animated Counters · Click the service cards.
        </div>
      </div>

      {/* Nav bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl" style={{ background:'rgba(255,255,255,0.10)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff' }}>
        <Link to="/preview/6a" style={{ color:'rgba(255,255,255,0.5)' }}>← prev</Link>
        <span style={{ color: C.accent }}>6B — Click Expand</span>
        <Link to="/preview/6c" style={{ color:'rgba(255,255,255,0.5)' }}>next →</Link>
      </div>
    </div>
  )
}
