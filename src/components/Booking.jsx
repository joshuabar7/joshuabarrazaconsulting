import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Calendar, Clock, CheckCircle2 } from 'lucide-react'
import { SITE } from '../content'
import { hasConsented } from './CookieConsent'

gsap.registerPlugin(ScrollTrigger)

const { booking } = SITE
const CALENDLY_URL = booking.calendlyUrl
const PERKS = booking.perks

export default function Booking() {
  const containerRef = useRef(null)
  const [calendlyReady, setCalendlyReady] = useState(hasConsented())

  // Called by CookieConsent in App.jsx when user accepts
  useEffect(() => {
    function onConsent() { setCalendlyReady(true) }
    window.addEventListener('jbc:consent-accepted', onConsent)
    return () => window.removeEventListener('jbc:consent-accepted', onConsent)
  }, [])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.booking-left', {
        x: -50, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      })
      gsap.from('.booking-right', {
        x: 50, opacity: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 70%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  // Only load Calendly script after cookie consent — GDPR requirement
  useEffect(() => {
    if (!calendlyReady) return
    if (document.querySelector('script[src*="calendly"]')) return
    const s = document.createElement('script')
    s.src = 'https://assets.calendly.com/assets/external/widget.js'
    s.async = true
    document.head.appendChild(s)
  }, [calendlyReady])

  return (
    <section ref={containerRef} id="book" className="bg-charcoal pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Gold grid bg */}
      <div className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: 'linear-gradient(#C9A84C 1px, transparent 1px), linear-gradient(90deg, #C9A84C 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
      {/* Glow */}
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full bg-gold/5 blur-3xl pointer-events-none translate-x-1/4 -translate-y-1/4" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-stretch">

          {/* Left */}
          <div className="booking-left">
            <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-6">// {booking.label}</p>
            <h2 className="font-serif italic text-white text-5xl md:text-6xl leading-tight mb-6">
              {booking.heading1}<br />
              <span className="text-gold-shimmer">{booking.heading2}</span>
            </h2>
            <p className="font-sans text-white/45 text-base leading-relaxed mb-10 max-w-md">
              {booking.sub}
            </p>

            <ul className="space-y-4 mb-10">
              {PERKS.map((p, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                  <span className="font-sans text-white/60 text-sm">{p}</span>
                </li>
              ))}
            </ul>

            <div className="flex gap-6 pt-6 border-t border-white/8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="font-sans font-bold text-white text-sm">{booking.sessionLabel}</div>
                  <div className="font-mono text-white/30 text-xs">{booking.sessionSub}</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-gold/10 border border-gold/20 flex items-center justify-center">
                  <Clock className="w-4 h-4 text-gold" />
                </div>
                <div>
                  <div className="font-sans font-bold text-white text-sm">{booking.flexLabel}</div>
                  <div className="font-mono text-white/30 text-xs">{booking.flexSub}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Calendly embed (only loads after cookie consent) */}
          <div className="booking-right h-full">
            {calendlyReady ? (
              <div
                className="calendly-inline-widget w-full h-full rounded-3xl overflow-hidden border border-gold/15 shadow-2xl shadow-jet/60"
                data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=193522&text_color=faf9f6&primary_color=C9A84C`}
                data-resize="true"
                style={{ minWidth: '320px', minHeight: '500px' }}
              />
            ) : (
              <div className="w-full h-full rounded-3xl border border-gold/15 flex flex-col items-center justify-center gap-4 bg-white/3" style={{ minHeight: '500px' }}>
                <p className="font-sans text-white/40 text-sm text-center px-6">
                  Accept cookies to load the booking calendar.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
