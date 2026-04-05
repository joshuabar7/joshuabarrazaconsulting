// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — edit everything here, changes apply across the whole site
// ─────────────────────────────────────────────────────────────────────────────

export const SITE = {

  // ── NAVBAR ──────────────────────────────────────────────────────────────────
  nav: {
    logo: 'Joshua Barraza',
    links: [
      { label: 'How It Works', href: '#services'  },
      { label: 'About',        href: '#about'     },
      { label: 'Pricing',      href: '#pricing'   },
      { label: 'Book a Call',  href: '#book'      },
    ],
    cta: 'Book a Call',
  },

  // ── HERO ────────────────────────────────────────────────────────────────────
  hero: {
    badge:    'Career Consulting',
    badgeSub: 'Starting at $10',
    line1:    'Real coaching.',
    line2:    'Prices that make sense.',
    sub:      'Resume toolkits, ATS guides, and 1:1 consulting for new grads and students. No gatekeeping, no $500 packages.',
    cta:      'Book a Free Consultation',
    ctaSub:   'See How It Works',
    proof:    '',
    proofSub: '5.0 · ',
  },

  // ── HOW IT WORKS ────────────────────────────────────────────────────────────
  howItWorks: {
    label:    'The Process',
    heading:  'How It Works.',
    subhead:  'Four steps. From where you are to a signed offer.',
    steps: [
      {
        num:     '01',
        title:   'Audit',
        headline: "We find out exactly what's not working.",
        body:    "We go through your resume, LinkedIn, and application approach and pinpoint every gap.",
        detail:  'Resume review · LinkedIn scan · Application strategy',
      },
      {
        num:     '02',
        title:   'Rebuild',
        headline: 'Everything gets rebuilt from scratch.',
        body:    'Your resume gets rewritten to pass ATS filters. Your LinkedIn gets structured to show up in recruiter searches.',
        detail:  'ATS keyword mapping · Bullet rewrites · LinkedIn SEO',
      },
      {
        num:     '03',
        title:   'Execute',
        headline: 'You apply with a real plan, not just hope.',
        body:    "A weekly application schedule, outreach scripts, and a follow-up system. You run a focused search.",
        detail:  'Company target list · Outreach scripts · Follow-up cadence',
      },
      {
        num:     '04',
        title:   'Offer',
        headline: 'You negotiate and sign knowing your worth.',
        body:    "When the offer lands, you know how to read it and ask for more. Most students walk away with $5k to $12k more.",
        detail:  'Offer evaluation · Negotiation script · Signing strategy',
      },
    ],
    ctaHeading: 'Ready to get started?',
    ctaSub:     'Grab a toolkit or jump straight into 1:1 consulting.',
    ctaPrimary: 'Book a Free Call',
    ctaSecondary: 'See Pricing',
  },

  // ── ABOUT ───────────────────────────────────────────────────────────────────
  about: {
    label:    'About',
    heading1: "Hi, I'm Joshua.",
    heading2: 'A recent grad who figured it out.',
    story: [
      "I graduated with a finance degree and did what everyone does. Sent out resumes. Waited. Got nothing back. I had no idea most resumes never even reach a real person because of ATS filters.",
      "I spent months learning how hiring actually works and once I put it together, everything changed. Now I help students skip that whole painful part — starting at $10 because that's just fair.",
    ],
    cta:   "Let's Work Together",
    name:  'Joshua Barraza',
    title: 'Career Consultant · Recent Grad · Finance',
    quote: "spent way too long applying to jobs the wrong way. now i make sure you don't have to. starting at $10 because that's just fair.",
    stats: [
      { value: '50+',   label: 'Students Helped'    },
      { value: '3.2x',  label: 'More Callbacks'      },
      { value: '$10',   label: 'Starts At'           },
      { value: '6 wks', label: 'Avg. Time to Offer' },
    ],
    values: [
      {
        num:   '01',
        title: "I've been exactly where you are.",
        body:  "Graduated, applied everywhere, heard nothing. No one told me how ATS worked or how recruiters actually search LinkedIn. I had to figure it out myself.",
      },
      {
        num:   '02',
        title: 'The process works. The price is fair.',
        body:  "Once I understood the system, everything flipped. I built a repeatable process and priced it so any student can access it — not just those who can afford $500 coaches.",
      },
      {
        num:   '03',
        title: 'No fluff. Just what actually moves the needle.',
        body:  "Every session, every guide, every script is built around one thing: getting you a response. Not motivation. Not theory. Results.",
      },
    ],
  },

  // ── PRICING ─────────────────────────────────────────────────────────────────
  pricing: {
    label:    'Pricing',
    heading:  'Simple & Affordable.',
    subhead:  'Start at $10. Scale up as you need more.',
    callout:  'No $500 packages. No hidden fees. Every tier is built so any student can get real career help.',
    footnote: 'Digital products delivered instantly · Sessions booked via Calendly · joshuabarraza0315@gmail.com',
    tiers: [
      {
        name:    'Starter Toolkit',
        price:   '$10',
        badge:   null,
        popular: false,
        desc:    'The foundation. Understand what hiring managers look for and how to get noticed.',
        features: [
          'Resume foundation guide',
          'Job search strategy overview',
          'Common resume mistakes to avoid',
          'Top keywords for your industry',
          'Job board cheat sheet',
          'Instant digital download',
        ],
        cta:  'Get the Toolkit',
        href: '#book',
      },
      {
        name:    'ATS Bypass Kit',
        price:   '$15',
        badge:   null,
        popular: false,
        desc:    'Go deeper. Build a resume that gets through ATS filters and into recruiter hands.',
        features: [
          'Everything in Starter Toolkit',
          'ATS keyword mapping framework',
          'Resume formatting rules for scanners',
          'Section-by-section rewrite guide',
          'Industry-specific keyword banks',
          'Before/after resume examples',
        ],
        cta:  'Get the ATS Kit',
        href: '#book',
      },
      {
        name:    'Full Consulting Package',
        price:   '$50',
        badge:   'Most Popular',
        popular: true,
        desc:    '1:1 session to rebuild your resume, LinkedIn, and job search strategy from scratch.',
        features: [
          'Everything in ATS Bypass Kit',
          '1:1 consulting session (60 min)',
          'Full resume rewrite & ATS optimization',
          'LinkedIn profile overhaul',
          'Personalized job search action plan',
          '1 week of async follow-up support',
        ],
        cta:  'Book Full Package',
        href: '#book',
      },
      {
        name:    'Pro Package',
        price:   '$100',
        badge:   'All-In',
        popular: false,
        desc:    'From first application to signed offer — mock interviews, negotiation, and full support.',
        features: [
          'Everything in Full Consulting Package',
          'Second 1:1 session (45 min)',
          'Mock interview + feedback',
          'Offer evaluation walkthrough',
          'Salary negotiation script',
          '2 weeks async support',
        ],
        cta:  'Go Pro',
        href: '#book',
      },
    ],
  },

  // ── BOOKING ─────────────────────────────────────────────────────────────────
  booking: {
    label:    'Schedule a Call',
    heading1: "Book your free",
    heading2: '15-minute intake call.',
    sub:      "No pitch, no pressure. Just 15 minutes to understand where you are and what you need.",
    perks: [
      'No commitment required',
      'Walk away with a clear action plan',
      'Flexible scheduling - Mon through Sun',
    ],
    sessionLabel:  '15 Minutes',
    sessionSub:    'Intake Discovery Call',
    flexLabel:     'Flexible Hours',
    flexSub:       'Mon - Sun',
    calendlyUrl:   'https://calendly.com/joshuabarraza',
  },

  // ── FOOTER ──────────────────────────────────────────────────────────────────
  footer: {
    brand:   'Joshua Barraza Consulting',
    tagline: 'Career consulting for new grads and students.',
    email:   'joshuabarraza0315@gmail.com',
    status:  'Systems Active',
    copy:    '© 2026 Joshua Barraza Consulting · All rights reserved.',
    credit:  'Engineered with precision.',
    links: [
      { label: 'How It Works', href: '#services' },
      { label: 'About',        href: '#about'    },
      { label: 'Pricing',      href: '#pricing'  },
      { label: 'Book a Call',  href: '#book'     },
    ],
    socials: {
      linkedin: 'https://www.linkedin.com/in/joshuabarraza-',
    },
  },
}
