import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ArrowRight } from 'lucide-react'
import { SITE } from '../content'

gsap.registerPlugin(ScrollTrigger)

const { about } = SITE
const FACTS = about.stats
const VALUES = about.values

export default function AboutJoshua() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.about-left', {
        x: -50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      })
      gsap.from('.about-right', {
        x: 50, opacity: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      })
      gsap.from('.about-fact', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-facts', start: 'top 80%' },
      })
      gsap.from('.about-value', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.about-values', start: 'top 78%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="about" className="bg-forest py-28 px-6 relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '90px 90px',
        }} />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] rounded-full bg-gold/4 blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">

          {/* Left */}
          <div className="about-left">
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-6">// {about.label}</p>
            <h2 className="font-serif italic text-white text-5xl md:text-6xl leading-tight mb-8">
              {about.heading1}<br />
              <span className="text-gold-shimmer">{about.heading2}</span>
            </h2>

            <div className="space-y-5 mb-8">
              {about.story.map((para, i) => (
                <p key={i} className={`font-sans text-base leading-relaxed ${i === about.story.length - 1 ? 'text-midnight/80 font-medium' : 'text-white/60'}`}>
                  {para}
                </p>
              ))}
            </div>

            <a href="#book"
              className="inline-flex items-center gap-2 font-sans font-bold text-sm text-white bg-gold px-6 py-3.5 rounded-pill overflow-hidden relative group"
              style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
              <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
              <span className="relative">{about.cta}</span>
              <ArrowRight className="relative w-4 h-4" />
            </a>
          </div>

          {/* Right */}
          <div className="about-right flex flex-col gap-6">

            {/* Headshot */}
            <div className="flex justify-center lg:justify-start">
              <div
                className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-gold/30"
                style={{ boxShadow: '0 0 60px rgba(201,168,76,0.15)' }}
              >
                <img
                  src="/headshot.jpg"
                  alt="Joshua Barraza"
                  className="absolute w-full"
                  style={{
                    height: '200%',
                    objectFit: 'cover',
                    objectPosition: 'center 5%',
                    top: 0,
                    left: 0,
                  }}
                />
                <div className="absolute inset-0 rounded-full ring-1 ring-gold/20" />
              </div>
            </div>

            {/* Name */}
            <div className="text-center lg:text-left">
              <p className="font-sans font-bold text-white text-xl">{about.name}</p>
              <p className="font-mono text-gold text-xs tracking-widest mt-1">{about.title}</p>
            </div>

            {/* Gen Z quote */}
            <div className="bg-forest-card rounded-3xl p-6 border border-white/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <p className="font-serif italic text-white/65 text-lg leading-relaxed mb-4">
                "{about.quote}"
              </p>
              <p className="font-mono text-gold text-xs tracking-widest">- {about.name}</p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="about-facts grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {FACTS.map((f, i) => (
            <div key={i} className="about-fact bg-forest-card rounded-3xl p-6 text-center relative overflow-hidden border border-white/10 shadow-sm">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
              <div className="font-sans font-extrabold text-4xl mb-1 text-gold-shimmer">{f.value}</div>
              <div className="font-mono text-white/35 text-xs tracking-wide">{f.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="about-values grid grid-cols-1 md:grid-cols-3 gap-5">
          {VALUES.map((v, i) => (
            <div key={i} className="about-value bg-forest-card rounded-3xl p-7 border border-white/10 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
              <div className="w-8 h-8 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center mb-5">
                <span className="font-mono text-gold text-xs font-bold">{v.num}</span>
              </div>
              <h4 className="font-sans font-bold text-white text-base mb-3">{v.title}</h4>
              <p className="font-sans text-white/50 text-sm leading-relaxed">{v.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
