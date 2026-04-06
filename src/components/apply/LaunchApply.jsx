import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { LAUNCH } from '../../content'

const GRADE_OPTIONS = [
  'High school freshman',
  'High school sophomore',
  'High school junior',
  'High school senior',
  'College freshman',
  'College sophomore',
  'College junior',
  'College senior',
  'Recent college grad (< 1 year)',
]

const INTEREST_OPTIONS = [
  'College application advising',
  'Career direction & major selection',
  'Resume & early internship search',
  'Gap year & trade school paths',
  'Internship search strategy',
  'Grad school decisions',
]

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xjgpjqlp' // replace with real endpoint

export default function LaunchApply() {
  const [form, setForm] = useState({
    name: '', email: '', grade: '', interests: [], goal: '', heard: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(null)

  const toggleInterest = (val) => {
    setForm(f => ({
      ...f,
      interests: f.interests.includes(val)
        ? f.interests.filter(i => i !== val)
        : [...f.interests, val],
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError(null)
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          grade: form.grade,
          interests: form.interests.join(', '),
          goal: form.goal,
          heard: form.heard,
          _subject: `Launch Program Application — ${form.name}`,
        }),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Email joshuabarraza0315@gmail.com directly.')
      }
    } catch {
      setError('Network error. Please email joshuabarraza0315@gmail.com directly.')
    }
    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="bg-amber/8 border border-amber/25 rounded-4xl p-10 text-center">
        <div className="w-14 h-14 rounded-full bg-amber flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-midnight" />
        </div>
        <h3 className="font-sans font-extrabold text-midnight text-2xl mb-3">Application received!</h3>
        <p className="font-sans text-midnight/60 text-base leading-relaxed max-w-sm mx-auto">
          I'll reach out to <strong>{form.email}</strong> within 48 hours to schedule your first session.
        </p>
        <div className="mt-6 font-mono text-amber text-xs tracking-wider">No commitment required · Free session</div>
      </div>
    )
  }

  return (
    <div className="relative bg-off-white rounded-4xl p-8 border border-light-gray overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber to-transparent" />

      <div className="mb-8">
        <div className="inline-flex items-center gap-2 border border-amber/30 bg-amber/8 text-amber-muted rounded-pill px-4 py-1.5 mb-4">
          <span className="font-mono text-xs tracking-widest uppercase">{LAUNCH.apply.badge}</span>
        </div>
        <h3 className="font-sans font-extrabold text-midnight text-2xl mb-2">{LAUNCH.apply.heading}</h3>
        <p className="font-sans text-midnight/50 text-sm leading-relaxed">{LAUNCH.apply.sub}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        {/* Name + Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="font-mono text-[10px] tracking-widest uppercase text-midnight/40 mb-2 block">Full Name *</label>
            <input
              type="text" required value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              placeholder="Your name"
              className="w-full bg-white border border-light-gray rounded-2xl px-4 py-3 font-sans text-sm text-midnight placeholder-midnight/25 focus:outline-none focus:border-amber/60 transition-colors"
            />
          </div>
          <div>
            <label className="font-mono text-[10px] tracking-widest uppercase text-midnight/40 mb-2 block">Email *</label>
            <input
              type="email" required value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              placeholder="you@email.com"
              className="w-full bg-white border border-light-gray rounded-2xl px-4 py-3 font-sans text-sm text-midnight placeholder-midnight/25 focus:outline-none focus:border-amber/60 transition-colors"
            />
          </div>
        </div>

        {/* Grade */}
        <div>
          <label className="font-mono text-[10px] tracking-widest uppercase text-midnight/40 mb-2 block">Current Grade / Year *</label>
          <select
            required value={form.grade}
            onChange={e => setForm(f => ({ ...f, grade: e.target.value }))}
            className="w-full bg-white border border-light-gray rounded-2xl px-4 py-3 font-sans text-sm text-midnight focus:outline-none focus:border-amber/60 transition-colors"
          >
            <option value="">Select your grade or year</option>
            {GRADE_OPTIONS.map(g => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>

        {/* Interests */}
        <div>
          <label className="font-mono text-[10px] tracking-widest uppercase text-midnight/40 mb-3 block">
            Areas you need help with * (select all that apply)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {INTEREST_OPTIONS.map(opt => (
              <button
                key={opt} type="button"
                onClick={() => toggleInterest(opt)}
                className={`flex items-center gap-2.5 text-left px-4 py-3 rounded-2xl border text-sm font-sans transition-all duration-200 ${
                  form.interests.includes(opt)
                    ? 'border-amber/60 bg-amber/10 text-midnight font-medium'
                    : 'border-light-gray bg-white text-midnight/50 hover:border-amber/30'
                }`}
              >
                <div className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                  form.interests.includes(opt) ? 'bg-amber border-amber' : 'border-light-gray'
                }`}>
                  {form.interests.includes(opt) && <span className="text-midnight text-[10px] font-bold">✓</span>}
                </div>
                {opt}
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="font-mono text-[10px] tracking-widest uppercase text-midnight/40 mb-2 block">
            What's your biggest goal right now?
          </label>
          <textarea
            value={form.goal}
            onChange={e => setForm(f => ({ ...f, goal: e.target.value }))}
            placeholder="e.g. I'm applying to colleges this fall and have no idea how to write my common app essay..."
            rows={3}
            className="w-full bg-white border border-light-gray rounded-2xl px-4 py-3 font-sans text-sm text-midnight placeholder-midnight/25 focus:outline-none focus:border-amber/60 transition-colors resize-none"
          />
        </div>

        {/* How did you hear */}
        <div>
          <label className="font-mono text-[10px] tracking-widest uppercase text-midnight/40 mb-2 block">How did you hear about us?</label>
          <input
            type="text" value={form.heard}
            onChange={e => setForm(f => ({ ...f, heard: e.target.value }))}
            placeholder="Instagram, friend, Google..."
            className="w-full bg-white border border-light-gray rounded-2xl px-4 py-3 font-sans text-sm text-midnight placeholder-midnight/25 focus:outline-none focus:border-amber/60 transition-colors"
          />
        </div>

        {error && (
          <p className="font-sans text-sm text-red-500 bg-red-50 border border-red-100 rounded-2xl px-4 py-3">{error}</p>
        )}

        <button
          type="submit" disabled={submitting || form.interests.length === 0}
          className="w-full flex items-center justify-center gap-2 bg-amber text-midnight font-sans font-bold px-8 py-4 rounded-pill overflow-hidden relative group disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ transition: 'transform 0.3s cubic-bezier(0.25,0.46,0.45,0.94)' }}
          onMouseEnter={(e) => { if (!e.currentTarget.disabled) e.currentTarget.style.transform = 'scale(1.02)' }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)' }}
        >
          <span className="absolute inset-0 bg-amber-light translate-x-[-101%] group-hover:translate-x-0 transition-transform duration-300 ease-out" />
          <span className="relative">{submitting ? 'Submitting...' : 'Submit Application'}</span>
          {!submitting && <span className="relative opacity-60 text-sm">→</span>}
        </button>

        <p className="font-mono text-[10px] text-midnight/25 text-center tracking-wider">
          I'll respond within 48 hours · No commitment required
        </p>
      </form>
    </div>
  )
}
