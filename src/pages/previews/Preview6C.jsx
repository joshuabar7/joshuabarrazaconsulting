/**
 * Preview 6C — Scroll Cinematic Zoom
 * Emerald scheme. Headline scales + fades on scroll. Pinned hero with scroll-driven
 * progress bar. Cards slide in from sides as you scroll down.
 */
import { useEffect, useRef } from 'react'
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

const CARDS = [
  { side: 'left',  title: 'The Launch Program', sub: 'Free advising for students', tag: 'HS + College', detail: 'College apps, internships, career direction. Zero cost barrier.', badge: 'Free' },
  { side: 'right', title: 'JBC Premium',         sub: 'Post-grad career coaching',  tag: 'Post-grad',   detail: 'Job search, resume, interview prep. Starting at $10.',       badge: 'From $10' },
]

export default function Preview6C() {
  const containerRef = useRef(null)
  const heroRef = useRef(null)
  const progressRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance
      const tl = gsap.timeline({ delay: 0.1 })
      tl.from('.p6c-badge', { y: 20, opacity: 0, duration: 0.5, ease: 'power2.out' })
        .from('.p6c-line1', { y: 50, opacity: 0, duration: 0.7, ease: 'power3.out' }, '-=0.2')
        .from('.p6c-line2', { y: 60, opacity: 0, duration: 0.8, ease: 'power3.out' }, '-=0.45')
        .from('.p6c-sub',   { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
        .from('.p6c-ctas',  { y: 20, opacity: 0, duration: 0.5 }, '-=0.2')
        .from('.p6c-proof', { opacity: 0, duration: 0.5 }, '-=0.2')

      // Pinned hero — cinematic zoom out + fade as user scrolls into next section
      ScrollTrigger.create({
        trigger: heroRef.current,
        start: 'top top',
        end: '+=600',
        pin: true,
        pinSpacing: false,
        scrub: 1,
        onUpdate: (self) => {
          // Progress bar
          if (progressRef.current) {
            progressRef.current.style.width = `${self.progress * 100}%`
          }
        },
      })

      // Scale up the headline as user scrolls through pinned section
      gsap.to('.p6c-headline', {
        scale: 1.06,
        opacity: 0,
        y: -40,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=450',
          scrub: 1.2,
        },
      })

      // Sub + CTAs fade out faster
      gsap.to('.p6c-lower', {
        opacity: 0,
        y: -20,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: '+=280',
          scrub: 1,
        },
      })

      // Cards slide in from sides
      gsap.from('.p6c-card-left', {
        x: -80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.p6c-tracks', start: 'top 75%' },
      })
      gsap.from('.p6c-card-right', {
        x: 80,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.p6c-tracks', start: 'top 75%' },
      })

      // Section heading
      gsap.from('.p6c-tracks-heading', {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.p6c-tracks', start: 'top 80%' },
      })

      // Testimonial strip
      gsap.from('.p6c-testi', {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: { trigger: '.p6c-testi-row', start: 'top 80%' },
      })

    }, containerRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={containerRef} style={{ background: C.bg, position: 'relative' }}>
      <style>{`
        @keyframes drift1 { from{transform:translate(0,0)} to{transform:translate(45px,-35px)} }
        @keyframes drift2 { from{transform:translate(0,0)} to{transform:translate(-35px,45px)} }
        @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
        @keyframes pulse   { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .p6c-glass {
          background: rgba(255,255,255,0.045);
          border: 1px solid rgba(255,255,255,0.09);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
        }
        .p6c-serif {
          background: ${C.serif};
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3.5s linear infinite;
        }
        .p6c-card { transition: border-color 0.3s, box-shadow 0.3s; }
        .p6c-card:hover { border-color: ${C.accentBorder} !important; box-shadow: 0 0 40px rgba(16,185,129,0.12); }
        .p6c-btn { transition: box-shadow 0.2s, transform 0.15s; }
        .p6c-btn:hover { box-shadow: 0 0 28px rgba(16,185,129,0.4); transform: translateY(-1px); }
      `}</style>

      {/* Ambient orbs — fixed */}
      <div style={{ position: 'fixed', inset: 0, pointerEvents: 'none', overflow: 'hidden', zIndex: 0 }}>
        <div style={{ position:'absolute', top:'-15%', right:'-5%', width:'650px', height:'650px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb1} 0%, transparent 70%)`, filter:'blur(50px)', animation:'drift1 13s ease-in-out infinite alternate' }} />
        <div style={{ position:'absolute', bottom:'5%', left:'-8%', width:'550px', height:'550px', borderRadius:'50%', background:`radial-gradient(circle, ${C.orb2} 0%, transparent 70%)`, filter:'blur(60px)', animation:'drift2 17s ease-in-out infinite alternate' }} />
      </div>

      {/* Scroll progress bar */}
      <div style={{ position:'fixed', top:0, left:0, right:0, height:'2px', background:'rgba(255,255,255,0.06)', zIndex:200 }}>
        <div ref={progressRef} style={{ height:'100%', background: C.accent, width:'0%', transition:'width 0.05s linear' }} />
      </div>

      {/* Nav */}
      <div style={{ position:'fixed', top:'20px', left:'50%', transform:'translateX(-50%)', zIndex:100, width:'calc(100% - 48px)', maxWidth:'1100px' }}>
        <div className="p6c-glass flex items-center justify-between px-6 py-3 rounded-full">
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

      {/* ─── Pinned hero ─── */}
      <div ref={heroRef} className="relative z-10 flex items-center justify-center" style={{ minHeight: '100vh', paddingTop: '100px', paddingBottom: '60px' }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="p6c-badge inline-flex items-center gap-2.5 mb-10 px-4 py-2 rounded-full" style={{ border:`1px solid ${C.accentBorder}`, background: C.accentDim }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: C.accent, animation:'pulse 2s infinite' }} />
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: C.accent }}>Career Consulting</span>
            <span style={{ width:1, height:12, background:`${C.accent}40` }} />
            <span className="font-mono text-xs" style={{ color:`${C.accent}80` }}>Free & Paid</span>
          </div>

          <div className="p6c-headline">
            <h1 className="mb-7 leading-none">
              <span className="p6c-line1 block font-sans font-extrabold text-white tracking-tight" style={{ fontSize:'clamp(3.2rem,7vw,6rem)', lineHeight:1.02 }}>
                Advice that actually
              </span>
              <span className="p6c-line2 p6c-serif block font-serif italic" style={{ fontSize:'clamp(3.8rem,8vw,7rem)', lineHeight:0.95 }}>
                gets you somewhere.
              </span>
            </h1>
          </div>

          <div className="p6c-lower">
            <p className="p6c-sub font-sans text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10" style={{ color:'rgba(255,255,255,0.45)' }}>
              Scroll to see the two tracks. One's free. One starts at $10. Both are real.
            </p>

            <div className="p6c-ctas flex justify-center gap-4 mb-10">
              <button className="p6c-btn font-sans font-bold px-8 py-4 rounded-full" style={{ background: C.cta, color: C.ctaText }}>
                Find Your Track ↓
              </button>
              <button className="font-sans font-semibold px-8 py-4 rounded-full" style={{ border:'1px solid rgba(255,255,255,0.12)', color:'rgba(255,255,255,0.60)' }}>
                See Real Results
              </button>
            </div>

            <div className="p6c-proof flex justify-center items-center gap-5">
              <div className="flex -space-x-2">
                {[['SK', C.accent],['MT', C.accentMid],['PS','#059669']].map(([init, col]) => (
                  <div key={init} className="w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold" style={{ background: col, border:`2px solid ${C.bg}`, color: '#050F0A' }}>{init}</div>
                ))}
              </div>
              <div className="flex gap-0.5">{[...Array(5)].map((_,i) => <span key={i} style={{ color: C.accent, fontSize:'12px' }}>★</span>)}</div>
              <span className="font-mono text-xs" style={{ color:'rgba(255,255,255,0.30)' }}>5.0 · 50+ students</span>
            </div>
          </div>

          {/* Scroll hint */}
          <div className="mt-12" style={{ animation:'pulse 2s infinite' }}>
            <div className="flex flex-col items-center gap-2">
              <span className="font-mono text-xs tracking-widest" style={{ color:'rgba(255,255,255,0.25)' }}>SCROLL</span>
              <div style={{ width:1, height:32, background:`linear-gradient(${C.accent}, transparent)` }} />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Tracks section (reveals after scroll) ─── */}
      <div className="p6c-tracks relative z-10 max-w-5xl mx-auto px-6" style={{ paddingTop: '120px', paddingBottom: '80px' }}>
        <div className="p6c-tracks-heading text-center mb-12">
          <p className="font-mono text-xs tracking-widest uppercase mb-3" style={{ color: C.accent }}>Two tracks. Same advisor.</p>
          <h2 className="font-sans font-extrabold text-white" style={{ fontSize:'clamp(2rem,4vw,3rem)' }}>
            Where are you right now?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CARDS.map(card => (
            <div
              key={card.title}
              className={`p6c-card p6c-glass rounded-3xl p-8 relative overflow-hidden cursor-pointer ${card.side === 'left' ? 'p6c-card-left' : 'p6c-card-right'}`}
              style={{ border:'1px solid rgba(255,255,255,0.09)' }}
            >
              <div style={{ position:'absolute', top:0, left:0, right:0, height:'2px', background:`linear-gradient(90deg, transparent, ${C.accent}, transparent)` }} />

              <div className="inline-flex items-center gap-2 mb-5 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest uppercase" style={{ border:`1px solid ${C.accentBorder}`, background: C.accentDim, color: C.accent }}>
                {card.tag}
              </div>

              <h3 className="font-sans font-bold text-white text-xl mb-1">{card.title}</h3>
              <p className="font-sans text-sm mb-4" style={{ color:'rgba(255,255,255,0.4)' }}>{card.sub}</p>
              <p className="font-sans text-sm leading-relaxed mb-6" style={{ color:'rgba(255,255,255,0.55)' }}>{card.detail}</p>

              <div className="flex items-center justify-between">
                <span className="font-mono text-sm font-bold" style={{ color: C.accent }}>{card.badge}</span>
                <button className="p6c-btn font-sans text-xs font-bold px-4 py-2 rounded-full" style={{ background: C.cta, color: C.ctaText }}>
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ─── Testimonials ─── */}
      <div className="p6c-testi-row relative z-10 max-w-5xl mx-auto px-6 pb-48">
        <p className="p6c-testi font-mono text-xs tracking-widest uppercase text-center mb-8" style={{ color:'rgba(255,255,255,0.3)' }}>
          What students say
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { q: '"I went from no direction to a signed internship offer in 5 weeks."', name: 'S.K., College Junior' },
            { q: '"Honestly the best $10 I\'ve spent. Got the job."', name: 'M.T., Recent Grad' },
            { q: '"Helped me realize I didn\'t have to go the traditional route."', name: 'P.S., HS Senior' },
          ].map((t) => (
            <div key={t.name} className="p6c-testi p6c-glass rounded-2xl p-6">
              <p className="font-sans text-sm leading-relaxed mb-4" style={{ color:'rgba(255,255,255,0.55)' }}>{t.q}</p>
              <p className="font-mono text-xs" style={{ color: C.accent }}>{t.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Label */}
      <div style={{ position:'fixed', bottom:'72px', left:'50%', transform:'translateX(-50%)', zIndex:50, textAlign:'center' }}>
        <div className="font-sans text-xs px-4 py-2 rounded-full" style={{ background:'rgba(255,255,255,0.08)', color:'rgba(255,255,255,0.5)', backdropFilter:'blur(8px)', border:'1px solid rgba(255,255,255,0.08)' }}>
          6C — Scroll Cinematic Zoom · Scroll down to see the effect.
        </div>
      </div>

      {/* Nav bar */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-3 font-mono text-xs font-bold px-5 py-2.5 rounded-full shadow-2xl" style={{ background:'rgba(255,255,255,0.10)', backdropFilter:'blur(16px)', border:'1px solid rgba(255,255,255,0.12)', color:'#fff' }}>
        <Link to="/preview/6b" style={{ color:'rgba(255,255,255,0.5)' }}>← prev</Link>
        <span style={{ color: C.accent }}>6C — Cinematic Scroll</span>
        <span style={{ color:'rgba(255,255,255,0.2)' }}>next →</span>
      </div>
    </div>
  )
}
