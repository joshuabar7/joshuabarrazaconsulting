import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FileText, Users, Target, Check, ArrowRight } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

// ─────────────────────────────────────────────
// Mini interactive: Diagnostic Shuffler
// ─────────────────────────────────────────────
const SCORE_STATES = [
  { label: 'ATS Score',     value: 38, verdict: 'Needs Work', bar: '#C9A84C' },
  { label: 'Keyword Match', value: 64, verdict: 'Moderate',   bar: '#E4C56A' },
  { label: 'After Coaching',value: 91, verdict: 'Strong',     bar: '#A8D45A' },
]

function DiagnosticMini() {
  const [idx, setIdx] = useState(0)
  const ref = useRef(null)
  useEffect(() => {
    const id = setInterval(() => {
      gsap.fromTo(ref.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4, ease: 'back.out(1.4)' })
      setIdx(p => (p + 1) % SCORE_STATES.length)
    }, 2400)
    return () => clearInterval(id)
  }, [])
  const s = SCORE_STATES[idx]
  return (
    <div ref={ref} className="bg-jet rounded-2xl p-4 border border-white/8">
      <div className="flex items-center justify-between mb-3">
        <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">{s.label}</span>
        <span className="font-mono text-[10px] px-2 py-0.5 rounded-pill border" style={{ color: s.bar, borderColor: s.bar + '40' }}>{s.verdict}</span>
      </div>
      <div className="flex items-end gap-2 mb-3">
        <span className="font-sans font-extrabold text-white text-4xl leading-none">{s.value}</span>
        <span className="font-mono text-white/20 mb-1">/ 100</span>
      </div>
      <div className="h-1 bg-white/8 rounded-full overflow-hidden">
        <div className="h-full rounded-full transition-all duration-700" style={{ width: `${s.value}%`, backgroundColor: s.bar }} />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Mini interactive: Typewriter
// ─────────────────────────────────────────────
const MSGS = [
  '> Recruiter @ Google viewed your profile',
  '> InMail: "Are you open to new roles?"',
  '> 12 searches matched "Product Manager"',
  '> 847 profile impressions this week',
]

function TypewriterMini() {
  const [lines, setLines] = useState([])
  const [mIdx, setMIdx] = useState(0)
  const [cIdx, setCIdx] = useState(0)
  useEffect(() => {
    const msg = MSGS[mIdx]
    if (cIdx < msg.length) {
      const t = setTimeout(() => setCIdx(c => c + 1), 35)
      return () => clearTimeout(t)
    }
    const t = setTimeout(() => {
      setLines(p => [...p.slice(-3), msg])
      setMIdx(i => (i + 1) % MSGS.length)
      setCIdx(0)
    }, 1400)
    return () => clearTimeout(t)
  }, [cIdx, mIdx])
  return (
    <div className="bg-jet rounded-2xl p-4 border border-white/8 font-mono text-xs min-h-[90px]">
      {lines.map((l, i) => <div key={i} className="text-white/20 leading-loose">{l}</div>)}
      <div className="text-gold/80 leading-loose">
        {MSGS[mIdx].slice(0, cIdx)}
        <span className="inline-block w-[4px] h-3 bg-gold ml-0.5 align-middle animate-blink" />
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Mini interactive: Job Scheduler
// ─────────────────────────────────────────────
const WEEKS = 4
const DAYS_LABEL = ['M','T','W','T','F']
const SEQ = [{i:0,s:'apply'},{i:1,s:'apply'},{i:4,s:'apply'},{i:5,s:'follow'},{i:8,s:'apply'},{i:9,s:'interview'},{i:12,s:'apply'},{i:14,s:'offer'}]
const CELL_COLORS = { apply:'#C9A84C', follow:'#E4C56A', interview:'#A88A3A', offer:'#A8D45A' }

function SchedulerMini() {
  const [cells, setCells] = useState(() => Array(WEEKS * 5).fill(null))
  const [cursor, setCursor] = useState(null)
  const stepRef = useRef(0)
  useEffect(() => {
    let t
    const go = () => {
      const s = stepRef.current
      if (s >= SEQ.length) {
        t = setTimeout(() => { setCells(Array(WEEKS*5).fill(null)); stepRef.current=0; t=setTimeout(go,500) }, 1800)
        return
      }
      const { i, s: status } = SEQ[s]
      setCursor(i)
      t = setTimeout(() => {
        setCells(p => { const n=[...p]; n[i]=status; return n })
        setCursor(null); stepRef.current++; t = setTimeout(go, 380)
      }, 330)
    }
    t = setTimeout(go, 600)
    return () => clearTimeout(t)
  }, [])
  return (
    <div className="bg-jet rounded-2xl p-4 border border-white/8">
      <div className="grid grid-cols-5 gap-0.5 mb-1">
        {DAYS_LABEL.map((d,i) => <div key={i} className="text-center font-mono text-[9px] text-white/20">{d}</div>)}
      </div>
      <div className="grid grid-cols-5 gap-1">
        {cells.map((s, i) => (
          <div key={i} className="rounded transition-all duration-250" style={{
            height: '18px',
            backgroundColor: s ? CELL_COLORS[s] : '#ffffff08',
            transform: cursor===i ? 'scale(0.8)' : 'scale(1)',
            boxShadow: cursor===i ? `0 0 0 1.5px #C9A84C` : 'none',
          }} />
        ))}
      </div>
      <div className="flex gap-3 mt-3">
        {Object.entries(CELL_COLORS).map(([k,c]) => (
          <span key={k} className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-sm" style={{backgroundColor:c}} />
            <span className="font-mono text-[9px] text-white/25 capitalize">{k}</span>
          </span>
        ))}
      </div>
    </div>
  )
}

// ─────────────────────────────────────────────
// Service card data
// ─────────────────────────────────────────────
const SERVICES = [
  {
    icon: FileText,
    tag: '01 · Resume',
    title: 'Resume Engineering',
    tagline: 'Built to beat ATS and win humans.',
    description:
      'Most resumes are rejected before a human ever reads them. We rebuild yours from the ground up - keyword-mapped to your target roles, formatted for ATS scanners, and written to compel the recruiter who does open it.',
    includes: [
      'ATS compatibility audit & full keyword mapping',
      'Structure rebuild for recruiter eye-tracking patterns',
      'Quantified bullet rewrites - results, not responsibilities',
      'Role-specific tailoring for target companies',
      '2 revision rounds included',
      'Delivered within 48 hours',
    ],
    outcome: 'Avg. 3.2× more callbacks after first week.',
    Widget: DiagnosticMini,
    accentGlow: 'rgba(201,168,76,0.12)',
  },
  {
    icon: Users,
    tag: '02 · LinkedIn',
    title: 'LinkedIn Optimization',
    tagline: 'Turn your profile into an inbound machine.',
    description:
      'Recruiters search LinkedIn every day. If your profile isn\'t keyword-optimized and positioned correctly, you\'re invisible. We rebuild every section to rank in recruiter searches and compel them to reach out - before you even apply.',
    includes: [
      'Headline & summary rewrite with SEO keyword strategy',
      'Experience section overhaul - achievement-focused',
      'Skills section strategy for recruiter search ranking',
      'Featured section setup for social proof',
      'Banner design + profile photo guidance',
      'Content strategy for consistent visibility',
    ],
    outcome: 'Clients see 8–10× profile view increase in 30 days.',
    Widget: TypewriterMini,
    accentGlow: 'rgba(228,197,106,0.10)',
  },
  {
    icon: Target,
    tag: '03 · Strategy',
    title: 'Job Search Strategy',
    tagline: 'From applications to signed offers.',
    description:
      'The job search isn\'t random - it\'s a system. We give you the exact framework: which companies to target, how to prioritize your pipeline, how to follow up without being annoying, and how to negotiate an offer once you get it.',
    includes: [
      'Target company list & tier strategy',
      'Weekly application cadence & tracking system',
      'Cold outreach scripts for employees & recruiters',
      'Follow-up templates & timing playbook',
      'Offer evaluation framework',
      'Salary negotiation script (avg. +$8k)',
    ],
    outcome: 'Clients average a signed offer within 6 weeks.',
    Widget: SchedulerMini,
    accentGlow: 'rgba(201,168,76,0.08)',
  },
]

// ─────────────────────────────────────────────
// Main Component
// ─────────────────────────────────────────────
export default function Features() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.svc-card', {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.18, ease: 'power3.out',
        scrollTrigger: { trigger: '.svc-grid', start: 'top 72%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="services" className="bg-off-white py-28 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div>
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4">// Services</p>
            <h2 className="font-serif italic text-jet text-5xl md:text-7xl leading-none">What We Do.</h2>
          </div>
          <p className="font-sans text-slate-mid text-sm max-w-xs leading-relaxed md:text-right">
            Three precision services. One outcome: the job you actually want.
          </p>
        </div>

        {/* Service cards */}
        <div className="svc-grid grid grid-cols-1 lg:grid-cols-3 gap-6">
          {SERVICES.map((svc, i) => (
            <div
              key={i}
              className="svc-card bg-charcoal rounded-4xl overflow-hidden flex flex-col relative group"
              style={{ boxShadow: `0 0 60px ${svc.accentGlow}` }}
            >
              {/* Gold top accent line */}
              <div className="h-[2px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-50" />

              <div className="p-8 flex flex-col flex-1">
                {/* Tag + Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-gold/50 text-xs tracking-widest uppercase">{svc.tag}</span>
                  <div className="w-9 h-9 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                    <svc.icon className="w-4 h-4 text-gold" />
                  </div>
                </div>

                {/* Title + Tagline */}
                <h3 className="font-sans font-extrabold text-white text-xl mb-1">{svc.title}</h3>
                <p className="font-serif italic text-gold text-base mb-5">{svc.tagline}</p>

                {/* Description */}
                <p className="font-sans text-white/45 text-sm leading-relaxed mb-6">
                  {svc.description}
                </p>

                {/* Interactive preview */}
                <div className="mb-6">
                  <svc.Widget />
                </div>

                {/* Includes list */}
                <div className="mb-6">
                  <p className="font-mono text-gold/40 text-[10px] tracking-widest uppercase mb-3">What's included</p>
                  <ul className="space-y-2">
                    {svc.includes.map((item, j) => (
                      <li key={j} className="flex items-start gap-2.5">
                        <Check className="w-3.5 h-3.5 text-gold mt-0.5 shrink-0" />
                        <span className="font-sans text-white/55 text-xs leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Outcome highlight */}
                <div className="bg-gold/10 border border-gold/20 rounded-2xl px-4 py-3 mb-6">
                  <p className="font-mono text-gold text-xs leading-relaxed">✦ {svc.outcome}</p>
                </div>

                {/* CTA */}
                <a
                  href="#book"
                  className="mt-auto flex items-center justify-between font-sans font-semibold text-sm text-white/50 hover:text-gold transition-colors duration-200 group/link"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover/link:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip - comparison note */}
        <div className="mt-12 bg-charcoal rounded-3xl px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-white/5">
          <p className="font-sans text-white/40 text-sm text-center md:text-left">
            Need everything? The <span className="text-gold font-semibold">Full Package</span> combines all three services at a significant discount.
          </p>
          <a href="#pricing"
            className="shrink-0 flex items-center gap-2 bg-gold/10 border border-gold/30 text-gold font-sans font-semibold text-sm px-5 py-2.5 rounded-pill hover:bg-gold/20 transition-colors duration-200">
            View Pricing <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
    </section>
  )
}
