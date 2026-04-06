/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        // ── Midnight slate palette (rebrand from forest green) ───────────
        jet:            '#0D0F14',   // deepest bg (near-black, slight blue)
        'jet-light':    '#131620',   // slightly lifted
        charcoal:       '#1A1D2A',   // card surfaces
        'dark-mid':     '#252836',   // raised cards / borders
        'charcoal-soft':'#2E3245',   // visible accent surfaces
        'forest':       '#3D4166',   // subtle blue-slate accent

        // ── Midnight aliases (explicit names for new components) ──────────
        midnight:           '#0D0F14',
        'midnight-lift':    '#131620',
        'slate-card':       '#1A1D2A',
        'slate-border':     '#252836',
        'slate-mid-bg':     '#2E3245',

        // ── Amber family (The Launch Program accent) ──────────────────────
        amber:          '#E8A830',
        'amber-light':  '#F5C84A',
        'amber-muted':  '#C4892A',
        'amber-dim':    '#E8A83015',

        // ── Gold / brass (unchanged — already perfect for this palette) ──
        gold:           '#C9A84C',
        'gold-light':   '#E4C56A',
        'gold-muted':   '#A88A3A',
        'gold-dim':     '#C9A84C18',

        // ── Light surfaces ────────────────────────────────────────────────
        ivory:          '#FAF9F6',
        'off-white':    '#F3F0E8',
        'light-gray':   '#E4E1D8',

        // ── Text ─────────────────────────────────────────────────────────
        slate:          '#1A1E2A',   // near-neutral dark slate (was green-tinted)
        'slate-mid':    '#5A6175',   // medium slate-gray
        'slate-light':  '#8A93A8',   // light slate

        // ── Legacy aliases so all existing components work unchanged ──────
        navy:           '#193522',
        'navy-light':   '#1F402A',
        'navy-mid':     '#274F34',
        blue:           '#C9A84C',
        'blue-light':   '#E4C56A',
        orange:         '#C9A84C',
        'orange-light': '#E4C56A',
        cream:          '#FAF9F6',
        'cream-dim':    '#F3F0E8',
        moss:           '#1F402A',
        'moss-light':   '#274F34',
        clay:           '#C9A84C',
        'clay-light':   '#E4C56A',
      },
      fontFamily: {
        sans:    ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        serif:   ['"Cormorant Garamond"', 'Georgia', 'serif'],
        mono:    ['"IBM Plex Mono"', 'Menlo', 'monospace'],
        cinzel:  ['"Cinzel"', 'Georgia', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
        pill:  '9999px',
      },
      animation: {
        'pulse-dot': 'pulseDot 2s ease-in-out infinite',
        blink:       'blink 1s step-end infinite',
        shimmer:     'shimmer 3s linear infinite',
      },
      keyframes: {
        pulseDot: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%':      { opacity: '0.4', transform: 'scale(0.85)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
    },
  },
  plugins: [],
}
