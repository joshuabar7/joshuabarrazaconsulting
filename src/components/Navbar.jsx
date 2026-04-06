import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gsap from 'gsap'
import { SHARED } from '../content'

const { nav } = SHARED

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.navbar-inner', { y: -60, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 })
    }, navRef)
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { ctx.revert(); window.removeEventListener('scroll', onScroll) }
  }, [])

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href) => pathname === href || (href !== '/' && pathname.startsWith(href))

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-5 px-4">
      <div
        className={`navbar-inner flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-pill transition-all duration-500 ${
          scrolled
            ? 'backdrop-blur-xl shadow-lg'
            : 'backdrop-blur-md'
        }`}
        style={{
          background: scrolled ? 'rgba(10,26,16,0.97)' : 'rgba(10,26,16,0.82)',
          border: '1px solid rgba(255,255,255,0.09)',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : undefined,
        }}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gold shrink-0">
            <img src="/headshot.jpg" alt="Joshua Barraza"
              className="w-full"
              style={{ height: '200%', objectFit: 'cover', objectPosition: 'center 5%', marginTop: 0 }}
            />
          </div>
          <span className="font-serif italic text-3xl text-white">
            {nav.logo}
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {nav.links.map(({ label, href, isCTA }) => {
            if (isCTA) return (
              <Link key={label} to={href}
                className="ml-2 flex items-center gap-2 bg-gold text-jet font-sans font-bold text-sm px-5 py-2.5 rounded-pill overflow-hidden relative group"
                style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.03)' }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}>
                <span className="absolute inset-0 bg-gold-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
                <span className="relative">{label}</span>
              </Link>
            )
            const active = isActive(href)
            return (
              <Link key={label} to={href}
                className={`font-sans text-sm font-medium px-4 py-2 rounded-pill transition-all duration-200 hover:-translate-y-px ${
                  active
                    ? 'text-white font-semibold'
                    : 'hover:-translate-y-px'
                }`}
                style={{ color: active ? '#fff' : 'rgba(255,255,255,0.5)', background: active ? 'rgba(255,255,255,0.10)' : undefined }}>
                {label}
              </Link>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Toggle menu"
        >
          {[0,1,2].map(i => (
            <span key={i} className={`block w-5 h-px transition-all duration-300 bg-white ${
              i===0 && menuOpen ? 'rotate-45 translate-y-2' :
              i===1 && menuOpen ? 'opacity-0' :
              i===2 && menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 rounded-3xl p-6 shadow-xl md:hidden" style={{ background:'rgba(10,26,16,0.97)', border:'1px solid rgba(255,255,255,0.10)', backdropFilter:'blur(20px)' }}>
          <div className="flex flex-col gap-2">
            {nav.links.map(({ label, href, isCTA }) => (
              <Link key={label} to={href} onClick={() => setMenuOpen(false)}
                className={isCTA
                  ? 'bg-gold text-midnight font-sans font-bold text-sm px-5 py-3.5 rounded-pill text-center mt-2'
                  : `font-sans text-sm font-medium px-4 py-3 rounded-2xl transition-all ${
                      isActive(href) ? 'text-white font-semibold' : ''
                    }`}
                style={!isCTA ? { color: isActive(href) ? '#fff' : 'rgba(255,255,255,0.55)', background: isActive(href) ? 'rgba(255,255,255,0.10)' : undefined } : undefined
                }>
                {label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}
