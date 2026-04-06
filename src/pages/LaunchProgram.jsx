import { Helmet } from 'react-helmet-async'
import LaunchHero from '../components/launch/LaunchHero'
import LaunchServices from '../components/launch/LaunchServices'
import LaunchProcess from '../components/launch/LaunchProcess'

export default function LaunchProgram() {
  return (
    <>
      <Helmet>
        <title>The Launch Program — Free Student Career Advising | Joshua Barraza</title>
        <meta name="description" content="Free and subsidized career advising for high school and college students. College applications, career direction, internships, and more. Apply today." />
      </Helmet>
      <main>
        <LaunchHero />
        <LaunchServices />
        <LaunchProcess />
      </main>
    </>
  )
}
