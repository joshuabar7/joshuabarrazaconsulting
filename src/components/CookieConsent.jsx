import { useState, useEffect } from 'react'
import { X, Shield } from 'lucide-react'

const CONSENT_KEY = 'jbc_cookie_consent'

// Call this anywhere to check if the user has consented
export function hasConsented() {
  try {
    return localStorage.getItem(CONSENT_KEY) === 'accepted'
  } catch {
    return false
  }
}

export default function CookieConsent({ onAccept }) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    // Only show if no decision has been made yet
    try {
      const stored = localStorage.getItem(CONSENT_KEY)
      if (!stored) setVisible(true)
      else if (stored === 'accepted' && onAccept) onAccept()
    } catch {
      setVisible(true)
    }
  }, [])

  function accept() {
    try { localStorage.setItem(CONSENT_KEY, 'accepted') } catch {}
    setVisible(false)
    if (onAccept) onAccept()
  }

  function decline() {
    try { localStorage.setItem(CONSENT_KEY, 'declined') } catch {}
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      aria-live="polite"
      className="fixed bottom-0 left-0 right-0 z-[9999] p-4 md:p-6"
    >
      <div className="max-w-4xl mx-auto bg-[#0C1F14] border border-[#C9A84C]/25 rounded-2xl shadow-2xl p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">

        {/* Icon */}
        <div className="w-10 h-10 rounded-xl bg-[#C9A84C]/10 border border-[#C9A84C]/20 flex items-center justify-center shrink-0">
          <Shield className="w-5 h-5 text-[#C9A84C]" />
        </div>

        {/* Text */}
        <div className="flex-1 min-w-0">
          <p className="font-sans text-white text-sm font-semibold mb-1">
            This site uses cookies
          </p>
          <p className="font-sans text-white/50 text-xs leading-relaxed">
            We use scheduling tools (Calendly) that set cookies to deliver a smooth booking experience.
            By clicking <strong className="text-white/70">Accept</strong>, you agree to this.{' '}
            <a
              href="/privacy"
              className="text-[#C9A84C] underline underline-offset-2 hover:text-[#E4C56A] transition-colors"
            >
              Privacy Policy
            </a>
          </p>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={decline}
            className="font-sans text-white/40 text-xs hover:text-white/70 transition-colors px-3 py-2"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="font-sans text-xs font-semibold bg-[#C9A84C] text-[#0C1F14] px-4 py-2 rounded-lg hover:bg-[#E4C56A] transition-colors"
          >
            Accept
          </button>
          <button
            onClick={decline}
            aria-label="Close"
            className="text-white/30 hover:text-white/60 transition-colors ml-1"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  )
}
