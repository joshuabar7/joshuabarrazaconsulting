import Navbar from './components/Navbar'
import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import AboutJoshua from './components/AboutJoshua'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Footer from './components/Footer'

export default function App() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <HowItWorks />
      <AboutJoshua />
      <Pricing />
      <Booking />
      <Footer />
    </main>
  )
}
