import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FEATURED = {
  name: 'Marcus T.',
  role: 'Product Manager · Google',
  grad: 'Class of \'23',
  avatar: 'MT',
  avatarColor: '#C9A84C',
  stars: 5,
  quote: 'My LinkedIn went from 40 profile views a month to 400+. Recruiters started reaching out weekly. His job search framework cut my search time in half — I had an offer in 5 weeks.',
  result: '5-week offer',
}

const CARDS = [
  {
    name: 'Sarah K.',
    role: 'Software Engineer · Amazon',
    grad: 'Class of \'24',
    avatar: 'SK',
    avatarColor: '#E4C56A',
    stars: 5,
    quote: 'Zero callbacks to 3 interviews in two weeks after he rebuilt my resume. Landed Amazon in 6 weeks. Worth every dollar — and the price made it a no-brainer to try.',
    result: '6-week offer',
  },
  {
    name: 'Priya S.',
    role: 'Business Analyst · Deloitte',
    grad: 'Class of \'24',
    avatar: 'PS',
    avatarColor: '#A88A3A',
    stars: 5,
    quote: 'I was applying for months and hearing nothing. One session showed me exactly what was wrong. His negotiation script got me $8k more than the initial offer.',
    result: '+$8k salary',
  },
]

const TICKER_ITEMS = [
  '50+ students placed',
  '3.2× more callbacks',
  '$12k avg. salary increase',
  '6-week avg. time to offer',
  '5.0 rating',
  'Starting at $10',
]

export default function Testimonials() {
  const containerRef = useRef(null)
  const tickerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.testi-featured', {
        x: -60, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 72%' },
      })
      gsap.from('.testi-card', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.testi-cards', start: 'top 78%' },
      })
    }, containerRef)

    // Infinite ticker
    const ticker = tickerRef.current
    if (!ticker) return

    const clone = ticker.cloneNode(true)
    ticker.parentNode.appendChild(clone)

    gsap.to([ticker, clone], {
      xPercent: -50,
      ease: 'none',
      duration: 22,
      repeat: -1,
      modifiers: {
        xPercent: gsap.utils.wrap(-100, 0),
      },
    })

    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="results" className="bg-jet py-28 px-6 relative overflow-hidden">
      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }} />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4">// Client Results</p>
            <h2 className="font-serif italic text-white text-5xl md:text-7xl leading-none">Real Outcomes.</h2>
          </div>
          <p className="font-sans text-white/35 text-sm max-w-xs leading-relaxed md:text-right">
            50+ students placed. Here's what actually happened.
          </p>
        </div>

        {/* Editorial grid: featured large + 2 stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-5 mb-5">

          {/* Featured — spans 3 cols */}
          <div className="testi-featured lg:col-span-3 bg-charcoal rounded-4xl p-10 relative overflow-hidden flex flex-col justify-between min-h-[340px]">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold-muted via-gold to-gold-light" />
            <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-gold/4 blur-3xl pointer-events-none" />

            {/* Stars */}
            <div className="flex gap-1 mb-8">
              {[...Array(FEATURED.stars)].map((_, i) => (
                <span key={i} className="text-gold text-base">★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="font-serif italic text-white text-xl md:text-2xl leading-relaxed flex-1 mb-10">
              "{FEATURED.quote}"
            </p>

            {/* Author + result badge */}
            <div className="flex items-center justify-between gap-4 pt-7 border-t border-white/8">
              <div className="flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-mono font-bold text-jet text-xs shrink-0"
                  style={{ backgroundColor: FEATURED.avatarColor }}
                >
                  {FEATURED.avatar}
                </div>
                <div>
                  <div className="font-sans font-bold text-white text-sm">{FEATURED.name}</div>
                  <div className="font-mono text-white/30 text-xs mt-0.5">{FEATURED.role} · {FEATURED.grad}</div>
                </div>
              </div>
              <div className="shrink-0 bg-gold/10 border border-gold/30 rounded-pill px-4 py-1.5">
                <span className="font-mono text-gold text-xs tracking-wide">{FEATURED.result}</span>
              </div>
            </div>
          </div>

          {/* Two smaller cards — span 2 cols */}
          <div className="testi-cards lg:col-span-2 flex flex-col gap-5">
            {CARDS.map((t, i) => (
              <div key={i} className="testi-card bg-charcoal rounded-4xl p-7 relative overflow-hidden flex flex-col flex-1">
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/25 to-transparent" />

                {/* Stars */}
                <div className="flex gap-0.5 mb-5">
                  {[...Array(t.stars)].map((_, j) => (
                    <span key={j} className="text-gold text-xs">★</span>
                  ))}
                </div>

                {/* Quote */}
                <p className="font-sans text-white/50 text-sm leading-relaxed flex-1 mb-6 italic">
                  "{t.quote}"
                </p>

                {/* Author + result */}
                <div className="flex items-center justify-between gap-3 pt-5 border-t border-white/8">
                  <div className="flex items-center gap-3">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center font-mono font-bold text-jet text-[10px] shrink-0"
                      style={{ backgroundColor: t.avatarColor }}
                    >
                      {t.avatar}
                    </div>
                    <div>
                      <div className="font-sans font-bold text-white text-xs">{t.name}</div>
                      <div className="font-mono text-white/25 text-[10px] mt-0.5">{t.role}</div>
                    </div>
                  </div>
                  <span className="font-mono text-gold/70 text-[10px] tracking-wide shrink-0">{t.result}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scrolling ticker strip */}
        <div className="relative overflow-hidden rounded-2xl bg-charcoal border border-white/6 py-4 mt-8 mb-14">
          <div className="flex" style={{ width: 'max-content' }}>
            <div ref={tickerRef} className="flex items-center gap-0">
              {[...TICKER_ITEMS, ...TICKER_ITEMS].map((item, i) => (
                <span key={i} className="flex items-center gap-6 px-8">
                  <span className="font-mono text-white/40 text-xs tracking-[0.2em] uppercase whitespace-nowrap">
                    {item}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-gold/40 shrink-0" />
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* FTC Disclaimer — required by US law when showing specific results */}
        <p className="font-mono text-white/20 text-[10px] text-center leading-relaxed mb-12 max-w-2xl mx-auto">
          Results disclosed are individual client experiences and are not typical. Career outcomes vary based on
          individual effort, qualifications, market conditions, and other factors outside our control.
          No specific result is guaranteed.{' '}
          <a href="/terms" className="underline underline-offset-2 hover:text-white/40 transition-colors">
            See full disclaimer in Terms of Service.
          </a>
        </p>

        {/* CTA */}
        <div className="text-center">
          <p className="font-sans text-white/30 mb-6 text-sm">Ready to add your name to this list?</p>
          <a href="#book"
            className="inline-flex items-center gap-2 bg-gold text-jet font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group"
            style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
            <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
            <span className="relative">Book Your Free Consultation</span>
            <span className="relative opacity-60">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
