import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Linkedin, Mail } from 'lucide-react'
import { SHARED } from '../content'

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '#/privacy' },
  { label: 'Terms of Service', href: '#/terms' },
]

gsap.registerPlugin(ScrollTrigger)

const { footer } = SHARED

export default function Footer() {
  const containerRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.footer-content', {
        opacity: 0, y: 30, duration: 0.8, ease: 'power2.out',
        scrollTrigger: { trigger: containerRef.current, start: 'top 90%' },
      })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  const socials = [
    { Icon: Linkedin, href: footer.socials.linkedin,  label: 'LinkedIn' },
    { Icon: Mail,     href: `mailto:${footer.email}`, label: 'Email'    },
  ]

  return (
    <footer ref={containerRef} className="bg-jet rounded-t-5xl mx-3 md:mx-6 mt-16 pt-16 md:pt-20 pb-8 px-8 md:px-16 relative overflow-hidden">
      {/* Gold top line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent rounded-t-5xl" />

      <div className="footer-content relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-gold shrink-0">
                <img src="/headshot.jpg" alt="Joshua Barraza"
                  className="w-full"
                  style={{ height: '200%', objectFit: 'cover', objectPosition: 'center 5%', marginTop: 0 }}
                />
              </div>
              <span className="font-serif italic text-3xl text-white">{footer.brand}</span>
            </div>
            <p className="font-sans text-white/30 text-sm leading-relaxed max-w-xs">
              {footer.tagline}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="font-mono text-gold/30 text-[10px] tracking-[0.3em] uppercase mb-6">Navigation</p>
            <ul className="space-y-3">
              {footer.links.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href}
                    className="font-sans text-white/35 text-sm hover:text-gold hover:-translate-y-px transition-all duration-200 inline-block">
                    {label}
                  </Link>
                </li>
              ))}

            </ul>
          </div>

          {/* Connect */}
          <div>
            <p className="font-mono text-gold/30 text-[10px] tracking-[0.3em] uppercase mb-6">Connect</p>
            <div className="flex gap-3 mb-6">
              {socials.map(({ Icon, href, label }) => (
                <a key={label} href={href} aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-gold hover:border-gold/40 transition-all duration-200"
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)' }}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <a href={`mailto:${footer.email}`}
              className="font-mono text-xs text-white/25 hover:text-gold transition-colors duration-200">
              {footer.email}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/6 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2 order-2 md:order-1">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-dot" />
            <span className="font-mono text-white/20 text-xs tracking-wider">{footer.status}</span>
          </div>
          <p className="font-mono text-white/15 text-xs text-center order-1 md:order-2">
            {footer.copy}
          </p>
          <div className="flex items-center gap-4 order-3">
            {LEGAL_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-mono text-white/20 text-xs hover:text-[#C9A84C] transition-colors"
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
