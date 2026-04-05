import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import AboutJoshua from './components/AboutJoshua'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function handleConsentAccepted() {
  // Unlock Google Analytics tracking now that user has consented
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied'
    })
  }
  // Notify Calendly and other components
  window.dispatchEvent(new Event('jbc:consent-accepted'))
}

function Router() {
  const hash = window.location.hash.replace('#', '')
  if (hash === '/privacy') return <PrivacyPolicy />
  if (hash === '/terms')   return <TermsOfService />
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <Testimonials />
      <AboutJoshua />
      <Pricing />
      <Booking />
      <Footer />
      <CookieConsent onAccept={handleConsentAccepted} />
    </main>
  )
}

export default function App() {
  return <Router />
}
