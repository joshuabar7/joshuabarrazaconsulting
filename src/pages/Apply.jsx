import { useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import PremiumApply from '../components/premium/PremiumApply'

export default function Apply() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.apply-header', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 })
      gsap.from('.apply-body', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>Book a Call — JBC Premium | Joshua Barraza Consulting</title>
        <meta name="description" content="Book a free 15-minute intake call for JBC Premium career consulting. Resume, LinkedIn, interview prep, and job search strategy." />
      </Helmet>
      <main ref={containerRef} className="bg-forest min-h-screen">

        {/* Header */}
        <div className="relative overflow-hidden pt-32 pb-20 px-6 md:px-10">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-70" />
          <div className="max-w-3xl mx-auto text-center apply-header">
            <div className="inline-flex items-center gap-2 border border-gold/25 bg-gold/10 text-gold-muted rounded-pill px-4 py-1.5 mb-6">
              <span className="font-mono text-xs tracking-widest uppercase">JBC Premium</span>
            </div>
            <h1 className="font-sans font-extrabold text-white text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4">
              Book a free intro call.
            </h1>
            <p className="font-sans text-white/50 text-lg leading-relaxed max-w-lg mx-auto">
              15 minutes. No pressure. We figure out where you are and whether a paid package makes sense for you.
            </p>
          </div>
        </div>

        {/* Booking */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 pb-24 apply-body">
          <div className="rounded-4xl overflow-hidden">
            <PremiumApply />
          </div>
        </div>

      </main>
    </>
  )
}
