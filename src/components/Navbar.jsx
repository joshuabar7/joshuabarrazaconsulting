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
            ? 'bg-ivory/95 backdrop-blur-xl border border-light-gray shadow-lg shadow-jet/8'
            : 'bg-jet/70 backdrop-blur-md border border-white/8'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-gold shrink-0">
            <img src="/headshot.jpg" alt="Joshua Barraza"
              className="w-full"
              style={{ height: '200%', objectFit: 'cover', objectPosition: 'center 5%', marginTop: 0 }}
            />
          </div>
          <span className={`font-serif italic text-3xl ${scrolled ? 'text-jet' : 'text-white'}`}>
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
                  scrolled
                    ? active
                      ? 'text-jet bg-light-gray/80 font-semibold'
                      : 'text-slate-mid hover:text-jet hover:bg-light-gray/60'
                    : active
                      ? 'text-white bg-white/12 font-semibold'
                      : 'text-white/60 hover:text-white hover:bg-white/8'
                }`}>
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
            <span key={i} className={`block w-5 h-px transition-all duration-300 ${scrolled ? 'bg-jet' : 'bg-white'} ${
              i===0 && menuOpen ? 'rotate-45 translate-y-2' :
              i===1 && menuOpen ? 'opacity-0' :
              i===2 && menuOpen ? '-rotate-45 -translate-y-2' : ''
            }`} />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="absolute top-full left-4 right-4 mt-2 bg-ivory rounded-3xl p-6 border border-light-gray shadow-xl md:hidden">
          <div className="flex flex-col gap-2">
            {nav.links.map(({ label, href, isCTA }) => (
              <Link key={label} to={href} onClick={() => setMenuOpen(false)}
                className={isCTA
                  ? 'bg-gold text-jet font-sans font-bold text-sm px-5 py-3.5 rounded-pill text-center mt-2'
                  : `font-sans text-sm font-medium px-4 py-3 rounded-2xl transition-all ${
                      isActive(href) ? 'text-jet bg-off-white font-semibold' : 'text-slate-mid hover:text-jet hover:bg-off-white'
                    }`
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
