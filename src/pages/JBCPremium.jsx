import { Helmet } from 'react-helmet-async'
import PremiumHero from '../components/premium/PremiumHero'
import Features from '../components/Features'
import Protocol from '../components/Protocol'
import Philosophy from '../components/Philosophy'
import Pricing from '../components/Pricing'
import PremiumApply from '../components/premium/PremiumApply'

export default function JBCPremium() {
  return (
    <>
      <Helmet>
        <title>JBC Premium — Post-Grad Career Coaching | Joshua Barraza</title>
        <meta name="description" content="1:1 career coaching for post-grad professionals. Resume + LinkedIn, job search strategy, interview prep, and career pivots. Starting at $10." />
      </Helmet>
      <main>
        <PremiumHero />
        <Features />
        <Protocol />
        <Philosophy />
        <Pricing />
        <PremiumApply />
      </main>
    </>
  )
}
