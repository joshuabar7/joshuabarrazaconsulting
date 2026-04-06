import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { IMPACT } from '../content'

gsap.registerPlugin(ScrollTrigger)

const FILTERS = ['All', 'Launch Program', 'JBC Premium']

export default function Impact() {
  const containerRef = useRef(null)
  const tickerRef = useRef(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.impact-header', {
        y: 30, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 80%', once: true },
      })
      gsap.from('.impact-featured', {
        x: -50, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: '.impact-grid', start: 'top 78%', once: true },
      })
      gsap.from('.impact-card', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
        scrollTrigger: { trigger: '.impact-grid', start: 'top 78%', once: true },
      })
    }, containerRef)

    const ticker = tickerRef.current
    if (!ticker) return
    const clone = ticker.cloneNode(true)
    ticker.parentNode.appendChild(clone)
    gsap.to([ticker, clone], {
      xPercent: -50, ease: 'none', duration: 26, repeat: -1,
      modifiers: { xPercent: gsap.utils.wrap(-100, 0) },
    })

    return () => ctx.revert()
  }, [])

  const allCards = IMPACT.cards
  const filtered = filter === 'All' ? allCards
    : filter === 'Launch Program' ? allCards.filter(c => c.track === 'launch')
    : allCards.filter(c => c.track === 'premium')

  return (
    <>
      <Helmet>
        <title>Impact & Results — Joshua Barraza Consulting</title>
        <meta name="description" content="Real outcomes from both The Launch Program and JBC Premium. Student stories, career results, and social proof." />
      </Helmet>
      <main ref={containerRef} className="bg-forest min-h-screen">

        {/* Top amber+gold line */}
        <div className="h-[3px] bg-gradient-to-r from-amber via-gold to-amber opacity-70" />

        {/* Ticker */}
        <div className="overflow-hidden border-b border-white/10 py-4">
          <div className="flex whitespace-nowrap">
            <div ref={tickerRef} className="flex shrink-0 gap-12 pr-12">
              {IMPACT.ticker.map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="font-mono text-gold text-xs tracking-wider font-bold">{item.stat}</span>
                  <span className="font-sans text-white/35 text-xs">{item.label}</span>
                  <span className="text-white/15">·</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto px-6 md:px-10 py-24">

          {/* Header */}
          <div className="impact-header text-center mb-16">
            <div className="inline-flex items-center gap-2 border border-gold/25 bg-gold/6 text-gold rounded-pill px-4 py-1.5 mb-6">
              <span className="font-mono text-xs tracking-widest uppercase">{IMPACT.label}</span>
            </div>
            <h1 className="font-sans font-extrabold text-white text-4xl md:text-6xl tracking-tight leading-[1.06] mb-4">
              {IMPACT.heading}
            </h1>
            <p className="font-sans text-white/45 text-lg max-w-xl mx-auto">{IMPACT.subhead}</p>
          </div>

          {/* Filter tabs */}
          <div className="flex justify-center gap-2 mb-14">
            {FILTERS.map(f => (
              <button key={f} onClick={() => setFilter(f)}
                className={`font-sans text-sm font-medium px-5 py-2 rounded-pill transition-all duration-200 ${
                  filter === f
                    ? 'bg-gold text-midnight font-bold'
                    : 'border border-white/10 text-white/40 hover:text-white hover:border-midnight/30'
                }`}>
                {f}
              </button>
            ))}
          </div>

          {/* Featured */}
          <div className="impact-featured relative bg-forest-card rounded-4xl p-8 md:p-12 border border-white/10 shadow-sm overflow-hidden mb-8">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div>
                <div className="flex gap-0.5 mb-6">
                  {[...Array(5)].map((_,i) => <span key={i} className="text-gold text-lg">★</span>)}
                </div>
                <p className="font-serif italic text-white text-xl md:text-2xl leading-relaxed mb-8">
                  "{IMPACT.featured.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold shrink-0">
                    {IMPACT.featured.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-sans font-bold text-white">{IMPACT.featured.name}</p>
                    <p className="font-sans text-white/45 text-sm">{IMPACT.featured.role}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4">
                {IMPACT.featured.stats?.map((s, i) => (
                  <div key={i} className="bg-forest-lift rounded-3xl px-6 py-5 border border-white/10 flex-1">
                    <div className="font-sans font-extrabold text-gold text-3xl mb-1">{s.value}</div>
                    <div className="font-mono text-white/35 text-xs tracking-wider">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Cards grid */}
          <div className="impact-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {filtered.map((card, i) => (
              <div key={i} className={`impact-card relative rounded-4xl p-6 border overflow-hidden ${
                card.isCohort
                  ? 'bg-amber/8 border-amber/20'
                  : 'bg-forest-card border-white/10 shadow-sm'
              }`}>
                <div className={`absolute top-0 left-0 right-0 h-[2px] ${
                  card.isCohort
                    ? 'bg-gradient-to-r from-transparent via-amber to-transparent'
                    : 'bg-gradient-to-r from-transparent via-gold/40 to-transparent'
                }`} />

                {/* Track badge */}
                <div className={`inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 mb-4 border ${
                  card.track === 'launch'
                    ? 'bg-amber/10 border-amber/20 text-amber-muted'
                    : 'bg-gold/8 border-gold/20 text-gold'
                }`}>
                  <span className="font-mono text-[9px] tracking-widest uppercase">
                    {card.track === 'launch' ? 'Launch Program' : 'JBC Premium'}
                  </span>
                </div>

                <div className="flex gap-0.5 mb-4">
                  {[...Array(5)].map((_,j) => (
                    <span key={j} className={`text-sm ${card.track === 'launch' ? 'text-amber' : 'text-gold'}`}>★</span>
                  ))}
                </div>

                <p className="font-sans text-sm leading-relaxed mb-5 text-white/60">
                  "{card.quote}"
                </p>

                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold shrink-0 ${
                    card.isCohort ? 'bg-amber text-midnight' : 'bg-gold/20 text-gold'
                  }`}>
                    {card.isCohort ? '✦' : card.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-sans font-semibold text-sm text-white">
                      {card.name}
                    </p>
                    <div className="flex items-center gap-2">
                      <p className={`font-mono text-[10px] ${card.isCohort ? 'text-amber-muted' : 'text-white/35'}`}>
                        {card.result}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA split */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="relative bg-amber/8 border border-amber/20 rounded-4xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent" />
              <p className="font-mono text-amber text-xs tracking-wider uppercase mb-3">For students</p>
              <h3 className="font-sans font-extrabold text-white text-xl mb-3">The Launch Program</h3>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-6">Free advising for high school and college students. No cost, no catch.</p>
              <Link to="/launch"
                className="inline-flex items-center gap-2 bg-amber text-white font-sans font-bold text-sm px-6 py-3 rounded-pill hover:bg-amber-light transition-colors">
                See services →
              </Link>
            </div>
            <div className="relative bg-forest-card border border-white/10 shadow-sm rounded-4xl p-8 overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent" />
              <p className="font-mono text-gold text-xs tracking-wider uppercase mb-3">For professionals</p>
              <h3 className="font-sans font-extrabold text-white text-xl mb-3">Start with JBC Premium</h3>
              <p className="font-sans text-white/55 text-sm leading-relaxed mb-6">Post-grad career coaching starting at $10. Book a free 15-min intake call.</p>
              <Link to="/apply/premium"
                className="inline-flex items-center gap-2 bg-gold text-midnight font-sans font-bold text-sm px-6 py-3 rounded-pill hover:bg-gold-light transition-colors">
                Book free call →
              </Link>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}
