import { Routes, Route } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import LaunchProgram from './pages/LaunchProgram'
import JBCPremium from './pages/JBCPremium'
import Impact from './pages/Impact'
import Apply from './pages/Apply'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import CookieConsent from './components/CookieConsent'

function handleConsentAccepted() {
  if (typeof window.gtag === 'function') {
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted',
      'ad_storage': 'denied'
    })
  }
  window.dispatchEvent(new Event('jbc:consent-accepted'))
}

export default function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="launch" element={<LaunchProgram />} />
          <Route path="premium" element={<JBCPremium />} />
          <Route path="impact" element={<Impact />} />
          <Route path="apply" element={<Apply />} />
          <Route path="apply/:track" element={<Apply />} />
          <Route path="privacy" element={<PrivacyPolicy />} />
          <Route path="terms" element={<TermsOfService />} />
        </Route>
      </Routes>
      <CookieConsent onAccept={handleConsentAccepted} />
    </>
  )
}
