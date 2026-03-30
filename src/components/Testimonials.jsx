import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Quote } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const TESTIMONIALS = [
  {
    name: 'Sarah K.',
    role: 'Software Engineer',
    company: 'Amazon',
    grad: 'Class of 2024',
    avatar: 'SK',
    stars: 5,
    quote:
      'Joshua completely rebuilt my resume and I went from zero callbacks to 3 interviews in 2 weeks. His understanding of ATS systems is next level. Landed my offer at Amazon within 6 weeks.',
  },
  {
    name: 'Marcus T.',
    role: 'Product Manager',
    company: 'Google',
    grad: 'Class of 2023',
    avatar: 'MT',
    stars: 5,
    quote:
      'My LinkedIn went from 40 views a month to 400+ after the optimization. I started getting recruiter InMails weekly. His job search framework cut my search time in half. Worth every penny.',
  },
  {
    name: 'Priya S.',
    role: 'Business Analyst',
    company: 'Deloitte',
    grad: 'Class of 2024',
    avatar: 'PS',
    stars: 5,
    quote:
      'I was applying for months with no results. One session and I knew exactly what I was doing wrong. His negotiation script got me $8k more than the initial offer. This is the real deal.',
  },
]

const STATS = [
  { value: '50+',   label: 'Students Placed'      },
  { value: '3.2×',  label: 'More Callbacks'        },
  { value: '$12k',  label: 'Avg. Salary Increase'  },
  { value: '6 wks', label: 'Avg. Time to Offer'    },
]

export default function Testimonials() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.stat-item', {
        y: 30, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.stats-row', start: 'top 80%' },
      })
      gsap.from('.testi-card', {
        y: 50, opacity: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.testi-grid', start: 'top 75%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="results" className="bg-off-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4">// Client Results</p>
            <h2 className="font-serif italic text-jet text-5xl md:text-7xl leading-none">Real Outcomes.</h2>
          </div>
          <p className="font-sans text-slate-mid text-sm max-w-xs leading-relaxed md:text-right">
            Don't take our word for it. Here's what clients say after working with us.
          </p>
        </div>

        {/* Stats */}
        <div className="stats-row grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {STATS.map((s, i) => (
            <div key={i} className="stat-item bg-charcoal rounded-3xl p-6 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
              <div className="font-sans font-extrabold text-white text-4xl mb-1 text-gold-shimmer">{s.value}</div>
              <div className="font-mono text-white/35 text-xs tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Testimonial cards */}
        <div className="testi-grid grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testi-card bg-charcoal rounded-4xl p-8 flex flex-col relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-6 mt-1">
                {[...Array(t.stars)].map((_, j) => (
                  <span key={j} className="text-gold text-sm">★</span>
                ))}
              </div>

              {/* Quote */}
              <div className="relative flex-1 mb-8">
                <Quote className="absolute -top-1 -left-1 w-7 h-7 text-gold/10" />
                <p className="font-sans text-white/55 text-sm leading-relaxed pl-5 italic">
                  "{t.quote}"
                </p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/8">
                <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center font-mono font-bold text-jet text-xs shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-sans font-bold text-white text-sm">{t.name}</div>
                  <div className="font-mono text-white/30 text-xs">{t.role} @ {t.company} · {t.grad}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="font-sans text-slate-mid mb-6 text-sm">Ready to add your name to this list?</p>
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
