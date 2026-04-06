import { useEffect, useRef, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import gsap from 'gsap'
import ApplySelector from '../components/apply/ApplySelector'
import LaunchApply from '../components/apply/LaunchApply'
import PremiumApply from '../components/premium/PremiumApply'

export default function Apply() {
  const { track } = useParams()
  const navigate = useNavigate()
  const [activeTrack, setActiveTrack] = useState(track || null)
  const formRef = useRef(null)

  // Sync URL param on load
  useEffect(() => {
    if (track && track !== activeTrack) setActiveTrack(track)
  }, [track])

  const handleSelect = (t) => {
    setActiveTrack(t)
    navigate(`/apply/${t}`, { replace: true })
    // Scroll to form
    setTimeout(() => {
      formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  // GSAP entrance
  const containerRef = useRef(null)
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.apply-header', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.3 })
      gsap.from('.apply-selector', { y: 30, opacity: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 })
    }, containerRef)
    return () => ctx.revert()
  }, [])

  return (
    <>
      <Helmet>
        <title>Apply — Joshua Barraza Consulting</title>
        <meta name="description" content="Apply for The Launch Program (free student advising) or book a JBC Premium consultation. Two tracks, one advisor." />
      </Helmet>
      <main ref={containerRef} className="bg-ivory min-h-screen">

        {/* Header */}
        <div className="bg-midnight relative overflow-hidden pt-32 pb-20 px-6 md:px-10">
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-amber via-gold to-amber opacity-60" />
          <div className="max-w-3xl mx-auto text-center apply-header">
            <div className="inline-flex items-center gap-2 border border-gold/25 bg-gold/6 text-gold rounded-pill px-4 py-1.5 mb-6">
              <span className="font-mono text-xs tracking-widest uppercase">Get Started</span>
            </div>
            <h1 className="font-sans font-extrabold text-white text-4xl md:text-5xl tracking-tight leading-[1.08] mb-4">
              Which track is right for you?
            </h1>
            <p className="font-sans text-white/40 text-lg leading-relaxed max-w-lg mx-auto">
              Choose your path below, then fill out the form or book your call.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto px-6 md:px-10 py-16">

          {/* Track selector */}
          <div className="apply-selector">
            <ApplySelector activeTrack={activeTrack} onSelect={handleSelect} />
          </div>

          {/* Form area */}
          {activeTrack && (
            <div ref={formRef} className="mt-4">
              {activeTrack === 'launch' ? (
                <LaunchApply />
              ) : (
                <div className="rounded-4xl overflow-hidden">
                  <PremiumApply />
                </div>
              )}
            </div>
          )}

          {/* No track selected state */}
          {!activeTrack && (
            <div className="text-center py-10">
              <p className="font-sans text-midnight/35 text-sm">Select a track above to see the form.</p>
            </div>
          )}
        </div>
      </main>
    </>
  )
}
