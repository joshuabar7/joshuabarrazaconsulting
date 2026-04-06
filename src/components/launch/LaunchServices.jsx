import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Check } from 'lucide-react'
import { LAUNCH } from '../../content'

gsap.registerPlugin(ScrollTrigger)

export default function LaunchServices() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.launch-header', {
        y: 24, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 78%' },
      })
      gsap.from('.launch-svc-card', {
        y: 40, opacity: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.launch-grid', start: 'top 78%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} className="bg-ivory py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="launch-header text-center mb-16">
          <div className="inline-flex items-center gap-2 border border-amber/30 bg-amber/8 text-amber-muted rounded-pill px-4 py-1.5 mb-6">
            <span className="font-mono text-xs tracking-widest uppercase">Program Services</span>
          </div>
          <h2 className="font-sans font-extrabold text-midnight text-3xl md:text-5xl tracking-tight leading-[1.08] mb-4">
            What we work on.
          </h2>
          <p className="font-sans text-slate-mid text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Every session is 1:1, tailored to exactly where you are. Pick the area that matters most right now.
          </p>
        </div>

        {/* Services grid */}
        <div className="launch-grid grid grid-cols-1 md:grid-cols-2 gap-6">
          {LAUNCH.services.map((svc, i) => (
            <div key={i}
              className="launch-svc-card relative bg-white rounded-4xl p-7 border border-light-gray overflow-hidden hover:border-amber/30 transition-colors duration-300 group"
            >
              {/* Amber top line on hover */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Number */}
              <div className="font-mono text-[10px] text-amber/60 tracking-[0.2em] uppercase mb-4">{svc.num}</div>

              {/* Title */}
              <h3 className="font-sans font-extrabold text-midnight text-xl leading-snug mb-1">
                {svc.title}
              </h3>
              <p className="font-mono text-xs text-amber-muted mb-4">{svc.tagline}</p>

              {/* Body */}
              <p className="font-sans text-midnight/55 text-sm leading-relaxed mb-5">
                {svc.body}
              </p>

              {/* Includes */}
              <ul className="space-y-2 mb-5">
                {svc.includes.map((item, j) => (
                  <li key={j} className="flex items-center gap-2.5">
                    <div className="w-4 h-4 rounded-full bg-amber/15 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-amber-muted" strokeWidth={2.5} />
                    </div>
                    <span className="font-sans text-xs text-midnight/60">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Audience tag */}
              <div className="inline-flex items-center gap-1.5 border border-amber/20 bg-amber/6 rounded-pill px-3 py-1">
                <span className="font-mono text-[10px] text-amber-muted tracking-wider">{svc.audience}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="font-sans text-midnight/45 text-sm mb-5">Not sure which area fits your situation?</p>
          <a href="/apply/launch"
            className="inline-flex items-center gap-2 border-2 border-amber text-amber-muted font-sans font-bold text-sm px-7 py-3.5 rounded-pill hover:bg-amber hover:text-midnight transition-all duration-300">
            Apply and we'll figure it out together →
          </a>
        </div>
      </div>
    </section>
  )
}
