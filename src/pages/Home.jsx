import { Helmet } from 'react-helmet-async'
import HomeHero from '../components/home/HomeHero'
import TrackSplit from '../components/home/TrackSplit'
import HomeSocialProof from '../components/home/HomeSocialProof'
import AboutJoshua from '../components/AboutJoshua'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Joshua Barraza Consulting — Career Advising for Every Stage</title>
        <meta name="description" content="Free career advising for students through The Launch Program. Premium 1:1 coaching for post-grad professionals starting at $10." />
      </Helmet>
      <main>
        <HomeHero />
        <TrackSplit />
        <HomeSocialProof />
        <AboutJoshua />
      </main>
    </>
  )
}
