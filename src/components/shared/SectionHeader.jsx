// Reusable label + heading + subhead pattern used across all pages
export default function SectionHeader({ label, heading, subhead, accent = 'gold', center = true }) {
  const shimmerClass = accent === 'amber' ? 'text-amber-shimmer' : 'text-gold-shimmer'
  const labelColor = accent === 'amber' ? 'text-amber border-amber/30 bg-amber/8' : 'text-gold border-gold/30 bg-gold/8'

  return (
    <div className={`mb-16 ${center ? 'text-center' : ''}`}>
      {label && (
        <div className={`inline-flex items-center gap-2 border rounded-pill px-4 py-1.5 mb-6 ${labelColor}`}>
          <span className="font-mono text-xs tracking-widest uppercase">{label}</span>
        </div>
      )}
      <h2 className="font-sans font-extrabold text-3xl md:text-5xl tracking-tight leading-[1.08] mb-4">
        <span className={shimmerClass}>{heading}</span>
      </h2>
      {subhead && (
        <p className="font-sans text-slate-mid text-base md:text-lg max-w-2xl leading-relaxed mx-auto">
          {subhead}
        </p>
      )}
    </div>
  )
}
