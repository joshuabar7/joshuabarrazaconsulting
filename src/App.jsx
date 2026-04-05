import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import AboutJoshua from './components/AboutJoshua'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'

function handleConsentAccepted() {
  // Broadcast to any component that needs to know (e.g. Booking/Calendly)
  window.dispatchEvent(new Event('jbc:consent-accepted'))
}

export default function App() {
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
