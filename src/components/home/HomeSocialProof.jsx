import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IMPACT } from '../../content'

gsap.registerPlugin(ScrollTrigger)

export default function HomeSocialProof() {
  const containerRef = useRef(null)
  const tickerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.proof-header', {
        y: 24, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%' },
      })
      gsap.from('.proof-featured', {
        x: -40, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.proof-grid', start: 'top 78%' },
      })
      gsap.from('.proof-card', {
        y: 32, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.proof-grid', start: 'top 78%' },
      })
    }, containerRef)

    // Ticker
    const ticker = tickerRef.current
    if (!ticker) return
    const clone = ticker.cloneNode(true)
    ticker.parentNode.appendChild(clone)
    gsap.to([ticker, clone], {
      xPercent: -50, ease: 'none', duration: 24, repeat: -1,
      modifiers: { xPercent: gsap.utils.wrap(-100, 0) },
    })

    return () => ctx.revert()
  }, [])

  const featured = IMPACT.featured
  const cards = IMPACT.cards.slice(0, 2)

  return (
    <section ref={containerRef} className="bg-midnight py-24 md:py-32 overflow-hidden">

      {/* Ticker */}
      <div className="overflow-hidden border-y border-white/6 py-4 mb-20">
        <div className="flex whitespace-nowrap">
          <div ref={tickerRef} className="flex shrink-0 gap-12 pr-12">
            {IMPACT.ticker.map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="font-mono text-gold text-xs tracking-wider font-bold">{item.stat}</span>
                <span className="font-sans text-white/20 text-xs">{item.label}</span>
                <span className="text-white/10">·</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-10">

        {/* Header */}
        <div className="proof-header flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 border border-gold/25 bg-gold/6 text-gold rounded-pill px-4 py-1.5 mb-5">
              <span className="font-mono text-xs tracking-widest uppercase">{IMPACT.label}</span>
            </div>
            <h2 className="font-sans font-extrabold text-white text-3xl md:text-4xl tracking-tight">
              {IMPACT.heading}
            </h2>
            <p className="font-sans text-white/35 text-base mt-2">{IMPACT.subhead}</p>
          </div>
          <Link to="/impact"
            className="font-sans text-sm text-gold/70 hover:text-gold border border-gold/20 hover:border-gold/40 px-5 py-2.5 rounded-pill transition-all duration-200 shrink-0">
            See all results →
          </Link>
        </div>

        {/* Grid */}
        <div className="proof-grid grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Featured — spans 2 cols */}
          <div className="proof-featured lg:col-span-2 relative bg-slate-card rounded-4xl p-8 md:p-10 border border-white/6 overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />

            <div className="mb-8">
              <div className="flex gap-0.5 mb-6">
                {[...Array(featured.stats ? 5 : 5)].map((_,i) => <span key={i} className="text-gold text-sm">★</span>)}
              </div>
              <p className="font-serif italic text-white text-xl md:text-2xl leading-relaxed">
                "{featured.quote}"
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-full bg-gold flex items-center justify-center text-midnight font-bold text-sm shrink-0">
                  {featured.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-sans font-bold text-white text-sm">{featured.name}</p>
                  <p className="font-sans text-white/35 text-xs">{featured.role}</p>
                </div>
              </div>
              <div className="flex gap-6">
                {featured.stats?.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="font-sans font-extrabold text-gold text-lg">{s.value}</div>
                    <div className="font-mono text-white/25 text-[10px] tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side cards */}
          <div className="flex flex-col gap-6">
            {cards.map((card, i) => (
              <div key={i} className={`proof-card relative rounded-4xl p-6 border overflow-hidden flex-1 ${
                card.isCohort
                  ? 'bg-amber/8 border-amber/20'
                  : 'bg-slate-card border-white/6'
              }`}>
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                  card.isCohort
                    ? 'bg-gradient-to-r from-transparent via-amber to-transparent'
                    : 'bg-gradient-to-r from-transparent via-gold/40 to-transparent'
                }`} />
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_,j) => <span key={j} className={`text-xs ${card.isCohort ? 'text-amber' : 'text-gold'}`}>★</span>)}
                </div>
                <p className={`font-sans text-sm leading-relaxed mb-5 ${card.isCohort ? 'text-midnight/70' : 'text-white/55'} ${card.isCohort ? '' : ''}`}
                  style={card.isCohort ? { color: '#2E3245' } : {}}>
                  "{card.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 ${
                    card.isCohort ? 'bg-amber text-midnight' : 'bg-gold/20 text-gold'
                  }`}>
                    {card.isCohort ? '✦' : card.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className={`font-sans font-semibold text-xs ${card.isCohort ? 'text-midnight' : 'text-white'}`}>
                      {card.name}
                    </p>
                    <p className={`font-mono text-[10px] ${card.isCohort ? 'text-amber-muted' : 'text-white/25'}`}>
                      {card.result}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
