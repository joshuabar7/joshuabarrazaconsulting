import { Link } from 'react-router-dom'
import { Sparkles, Award } from 'lucide-react'

export default function ApplySelector({ activeTrack, onSelect }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-12">

      {/* Launch Program */}
      <button
        onClick={() => onSelect('launch')}
        className={`relative text-left rounded-4xl p-7 border-2 overflow-hidden transition-all duration-300 ${
          activeTrack === 'launch'
            ? 'bg-amber/8 border-amber shadow-lg shadow-amber/10'
            : 'bg-off-white border-light-gray hover:border-amber/40'
        }`}
      >
        <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-amber to-transparent transition-opacity duration-300 ${
          activeTrack === 'launch' ? 'opacity-100' : 'opacity-0'
        }`} />

        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-amber/15 flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-amber-muted" />
          </div>
          {activeTrack === 'launch' && (
            <div className="bg-amber text-midnight font-mono text-[10px] font-bold tracking-wider uppercase rounded-pill px-3 py-1">
              Selected
            </div>
          )}
        </div>

        <h3 className="font-sans font-extrabold text-midnight text-lg mb-1">The Launch Program</h3>
        <p className="font-mono text-xs text-amber-muted mb-3">For high school + college students</p>
        <p className="font-sans text-sm text-midnight/55 leading-relaxed mb-4">
          College applications, career direction, internships, gap year. Free and subsidized.
        </p>
        <span className="font-mono text-xs text-amber font-bold tracking-wider">Free for qualifying students →</span>
      </button>

      {/* JBC Premium */}
      <button
        onClick={() => onSelect('premium')}
        className={`relative text-left rounded-4xl p-7 border-2 overflow-hidden transition-all duration-300 ${
          activeTrack === 'premium'
            ? 'bg-midnight border-gold shadow-lg shadow-gold/10'
            : 'bg-midnight/8 border-slate-border hover:border-gold/40'
        }`}
      >
        <div className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-gold to-transparent transition-opacity duration-300 ${
          activeTrack === 'premium' ? 'opacity-100' : 'opacity-0'
        }`} />

        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-10 h-10 rounded-2xl bg-gold/12 flex items-center justify-center shrink-0">
            <Award className="w-5 h-5 text-gold" />
          </div>
          {activeTrack === 'premium' && (
            <div className="bg-gold text-midnight font-mono text-[10px] font-bold tracking-wider uppercase rounded-pill px-3 py-1">
              Selected
            </div>
          )}
        </div>

        <h3 className={`font-sans font-extrabold text-lg mb-1 ${activeTrack === 'premium' ? 'text-white' : 'text-midnight'}`}>
          JBC Premium
        </h3>
        <p className="font-mono text-xs text-gold mb-3">For post-grad professionals</p>
        <p className={`font-sans text-sm leading-relaxed mb-4 ${activeTrack === 'premium' ? 'text-white/50' : 'text-midnight/55'}`}>
          Job search, resume + LinkedIn, interview prep, career pivots. Starting at $10.
        </p>
        <span className="font-mono text-xs text-gold font-bold tracking-wider">Book a free 15-min call →</span>
      </button>

    </div>
  )
}
