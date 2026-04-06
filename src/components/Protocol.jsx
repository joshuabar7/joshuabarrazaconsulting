import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

// ── Canvas 1: Particle Network ──────────────
function ParticleCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); let rafId
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const dots = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3, vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.6,
    }))
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(201,168,76,0.35)'; ctx.fill()
      })
      for (let i = 0; i < dots.length; i++) for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x, dy = dots[i].y - dots[j].y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 140) {
          ctx.beginPath(); ctx.moveTo(dots[i].x, dots[i].y); ctx.lineTo(dots[j].x, dots[j].y)
          ctx.strokeStyle = `rgba(201,168,76,${(1 - dist / 140) * 0.12})`
          ctx.lineWidth = 0.6; ctx.stroke()
        }
      }
      rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// ── Canvas 2: Waveform ──────────────────────
function WaveCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); let rafId, t = 0
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      // main wave
      ctx.beginPath()
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2
          + Math.sin((x / canvas.width) * Math.PI * 5 + t) * 38
          + Math.sin((x / canvas.width) * Math.PI * 2.5 + t * 0.6) * 20
          + Math.sin((x / canvas.width) * Math.PI * 10 + t * 1.3) * 8
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = 'rgba(201,168,76,0.3)'; ctx.lineWidth = 1.5; ctx.stroke()
      // ghost
      ctx.beginPath()
      for (let x = 0; x < canvas.width; x++) {
        const y = canvas.height / 2 + Math.sin((x / canvas.width) * Math.PI * 5 + t + 1.2) * 20
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.strokeStyle = 'rgba(201,168,76,0.08)'; ctx.lineWidth = 1; ctx.stroke()
      t += 0.016; rafId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// ── Canvas 3: Gantt Grid ────────────────────
function GanttCanvas() {
  const canvasRef = useRef(null)
  useEffect(() => {
    const canvas = canvasRef.current; if (!canvas) return
    const ctx = canvas.getContext('2d'); let rafId, step = 0, lastTime = 0
    const COLS = 14, ROWS = 7, TOTAL = COLS * ROWS
    const lit = new Set()
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight }
    resize(); window.addEventListener('resize', resize)
    const draw = (now) => {
      if (now - lastTime > 90) {
        lit.has(TOTAL - 1) ? (lit.clear(), step = 0) : (lit.add(step), step++)
        lastTime = now
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      const padX = 40, padY = 40
      const cw = (canvas.width - padX * 2) / COLS, ch = (canvas.height - padY * 2) / ROWS
      for (let r = 0; r < ROWS; r++) for (let c = 0; c < COLS; c++) {
        const i = r * COLS + c, x = padX + c * cw, y = padY + r * ch
        const w = cw * 0.72, h = ch * 0.46
        ctx.fillStyle = lit.has(i) ? 'rgba(201,168,76,0.22)' : 'rgba(201,168,76,0.04)'
        ctx.beginPath(); ctx.roundRect(x + (cw - w) / 2, y + (ch - h) / 2, w, h, 3); ctx.fill()
      }
      rafId = requestAnimationFrame(draw)
    }
    rafId = requestAnimationFrame(draw)
    return () => { cancelAnimationFrame(rafId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

const CARDS = [
  {
    num: '01', title: 'Diagnose',
    desc: 'We audit your resume, LinkedIn, and job search approach against ATS systems and real recruiter behavior patterns. Every gap gets a name.',
    bg: 'bg-forest', Canvas: ParticleCanvas,
  },
  {
    num: '02', title: 'Engineer',
    desc: 'Every word chosen for signal-to-noise ratio. Every section placed for recruiter eye-tracking. Built to pass machines and impress humans.',
    bg: 'bg-forest', Canvas: WaveCanvas,
  },
  {
    num: '03', title: 'Execute',
    desc: "A weekly application protocol, follow-up cadence, and offer negotiation playbook. You don't just apply - you campaign.",
    bg: 'bg-forest-lift', Canvas: GanttCanvas,
  },
]

export default function Protocol() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      CARDS.forEach((_, i) => {
        gsap.from(`.proto-num-${i}`, {
          opacity: 0, duration: 0.5,
          scrollTrigger: { trigger: `.proto-card-${i}`, start: 'top 65%', once: true },
        })
        gsap.from(`.proto-title-${i}`, {
          y: 70, opacity: 0, duration: 1, ease: 'expo.out',
          scrollTrigger: { trigger: `.proto-card-${i}`, start: 'top 65%', once: true },
        })
        gsap.from(`.proto-desc-${i}`, {
          y: 35, opacity: 0, duration: 0.7, delay: 0.2, ease: 'power2.out',
          scrollTrigger: { trigger: `.proto-card-${i}`, start: 'top 65%', once: true },
        })
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={containerRef} id="process">
      {CARDS.map((card, i) => (
        <div key={i}
          className={`proto-card-${i} sticky top-0 h-screen flex items-end pb-16 md:pb-24 px-8 md:px-20 relative overflow-hidden ${card.bg}`}
          style={{ zIndex: i + 1 }}>

          {/* Gold top accent line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="absolute inset-0 opacity-50 pointer-events-none"><card.Canvas /></div>

          {/* Step dots - right edge */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2.5 z-10">
            {CARDS.map((_, j) => (
              <span key={j} className="rounded-full transition-all duration-300 block"
                style={{
                  width: '3px',
                  height: j === i ? '32px' : '8px',
                  backgroundColor: j === i ? '#C9A84C' : 'rgba(201,168,76,0.2)',
                }} />
            ))}
          </div>

          <div className="relative z-10 max-w-4xl">
            <div className={`proto-num-${i} font-mono leading-none select-none mb-0`}
              style={{ fontSize: 'clamp(5rem, 15vw, 12rem)', color: 'rgba(201,168,76,0.08)', fontWeight: 700 }}>
              {card.num}
            </div>
            <h2 className={`proto-title-${i} font-serif italic text-white leading-none mb-6`}
              style={{ fontSize: 'clamp(3.5rem, 8vw, 7rem)' }}>
              {card.title}<span className="text-gold">.</span>
            </h2>
            <p className={`proto-desc-${i} font-sans text-white/55 text-base md:text-lg max-w-2xl leading-relaxed`}>
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </section>
  )
}
