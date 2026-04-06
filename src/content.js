// ─────────────────────────────────────────────────────────────────────────────
//  SITE CONTENT — namespaced by track/section
//  SHARED: nav, footer, about (used everywhere)
//  HOME:   hero, trackSplit, socialProof
//  LAUNCH: The Launch Program (free/nonprofit student track)
//  PREMIUM: JBC Premium (paid post-grad track)
//  IMPACT:  unified testimonials + social proof
// ─────────────────────────────────────────────────────────────────────────────

// ── SHARED ──────────────────────────────────────────────────────────────────
export const SHARED = {
  nav: {
    logo: 'Joshua Barraza',
    links: [
      { label: 'Launch Program', href: '/launch'  },
      { label: 'JBC Premium',    href: '/premium' },
      { label: 'Impact',         href: '/impact'  },
      { label: 'Apply Now',      href: '/apply',  isCTA: true },
    ],
    cta: 'Apply Now',
  },

  footer: {
    brand:   'Joshua Barraza Consulting',
    tagline: 'Career advising for every stage — from high school to career pivot.',
    email:   'joshuabarraza0315@gmail.com',
    status:  'Systems Active',
    copy:    '© 2026 Joshua Barraza Consulting · All rights reserved.',
    credit:  'Engineered with precision.',
    links: [
      { label: 'Launch Program', href: '/launch'  },
      { label: 'JBC Premium',    href: '/premium' },
      { label: 'Impact',         href: '/impact'  },
      { label: 'Apply Now',      href: '/apply'   },
    ],
    socials: {
      linkedin:  'https://www.linkedin.com/in/joshuabarraza-',
      instagram: 'https://instagram.com',
    },
  },

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
    quote: "spent way too long applying to jobs the wrong way. now i make sure you don't have to.",
    stats: [
      { value: '50+',   label: 'Students Helped'    },
      { value: '3.2x',  label: 'More Callbacks'      },
      { value: 'Free',  label: 'For Students'        },
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
        title: 'Accessible advising for every stage.',
        body:  "Whether you're a high school junior figuring out college apps or a post-grad looking for your first real job — there's a track built for you. The Launch Program is free.",
      },
      {
        num:   '03',
        title: 'No fluff. Just what actually moves the needle.',
        body:  "Every session, every guide, every script is built around one thing: getting you results. Not motivation. Not theory. Results.",
      },
    ],
  },
}

// ── HOME ────────────────────────────────────────────────────────────────────
export const HOME = {
  hero: {
    badge:    'Career Consulting',
    line1:    'Clarity for every',
    line2:    'stage of your career.',
    sub:      "Whether you're applying to college, landing your first internship, or pivoting as a professional — there's a track built for you.",
    cta:      'Find Your Track',
    ctaSub:   'See How It Works',
    proofSub: '5.0 · ',
  },

  trackSplit: {
    label:   'Two Tracks',
    heading: 'Two tracks. Same advisor.',
    subhead: 'Radically accessible advising, from high school to career pivot.',
    launch: {
      badge:    'The Launch Program',
      tagline:  'For high school + college students.',
      sub:      'College applications, career direction, internships, gap year, and grad school decisions. Free or subsidized — no barriers.',
      services: [
        'College application advising',
        'Career direction & major selection',
        'Resume & early internship search',
        'Gap year & trade school paths',
      ],
      proof:   'Free for qualifying students',
      cta:     'Explore The Launch Program',
      href:    '/launch',
    },
    premium: {
      badge:    'JBC Premium',
      badgeSub: 'Starting at $10',
      tagline:  'For post-grad professionals.',
      sub:      'Job search strategy, resume + LinkedIn overhaul, interview prep, and career pivot coaching. Real coaching at prices that make sense.',
      services: [
        'Job search strategy & targeting',
        'Resume + LinkedIn optimization',
        'Interview prep & coaching',
        'Career pivots & grad school',
      ],
      proof:   'Starting at $10 · 50+ students helped',
      cta:     'Explore JBC Premium',
      href:    '/premium',
    },
  },
}

// ── LAUNCH PROGRAM ──────────────────────────────────────────────────────────
export const LAUNCH = {
  hero: {
    badge:    'The Launch Program',
    line1:    'Your first step',
    line2:    "shouldn't cost a fortune.",
    sub:      'Free and subsidized advising for high school and college students — college apps, career direction, internships, and more.',
    cta:      'Apply Now — It\'s Free',
    ctaSub:   'See How It Works',
  },

  services: [
    {
      num:      '01',
      title:    'College Application Advising',
      tagline:  'Essays, school lists, strategy.',
      body:     'Navigate the college application process with a clear strategy — from building your school list to writing essays that actually reflect who you are.',
      audience: 'For: High school juniors & seniors',
      includes: ['School list building', 'Essay brainstorm & feedback', 'Application timeline', 'Financial aid overview'],
    },
    {
      num:      '02',
      title:    'Career Direction & Major Selection',
      tagline:  'Figure out the direction before the deadline.',
      body:     "Choosing a major shouldn't feel like a permanent decision made with incomplete information. We map your interests, strengths, and goals to real career paths.",
      audience: 'For: High school seniors & college freshmen/sophomores',
      includes: ['Interest + strengths mapping', 'Career path exploration', 'Major decision framework', 'Informational interview guide'],
    },
    {
      num:      '03',
      title:    'Resume & Early Internship Search',
      tagline:  'Your first resume. Done right.',
      body:     "Most students send their first resume out before knowing what hiring managers actually look for. We build yours from scratch — even with limited experience.",
      audience: 'For: College students (any year)',
      includes: ['Resume build from scratch', 'ATS-friendly formatting', 'Internship search strategy', 'Outreach email templates'],
    },
    {
      num:      '04',
      title:    'Gap Year & Trade School Paths',
      tagline:  "Not everyone's path looks the same.",
      body:     "College isn't the only answer. If you're considering a gap year, trade school, bootcamp, or military service — we help you make an intentional choice, not a default one.",
      audience: 'For: High school seniors & college students',
      includes: ['Alternative path mapping', 'Gap year program research', 'Trade school ROI analysis', 'Decision framework'],
    },
    {
      num:      '05',
      title:    'Internship Search Strategy',
      tagline:  'How to actually land one.',
      body:     "Most students apply and wait. We build you a system — target companies, outreach sequences, and a tracking workflow that gets responses.",
      audience: 'For: College students (sophomore–senior)',
      includes: ['Target company list', 'LinkedIn outreach scripts', 'Application tracking system', 'Follow-up cadence'],
    },
    {
      num:      '06',
      title:    'Grad School Decisions',
      tagline:  "Is it worth it? Let's figure it out.",
      body:     "Grad school is a major financial and career decision. We break down when it makes sense, what programs to consider, and how to position your application.",
      audience: 'For: College juniors & seniors',
      includes: ['ROI analysis by field', 'Program research framework', 'Application timeline', 'Statement of purpose guidance'],
    },
  ],

  process: {
    label:   'How It Works',
    heading: 'Simple. Free. Effective.',
    subhead: 'Four steps from application to outcome.',
    steps: [
      {
        num:      '01',
        title:    'Apply',
        headline: 'Fill out the free application.',
        body:     "Tell us where you are — high school, college, what decisions you're facing. Takes 3 minutes.",
        detail:   'Application form · No commitment',
      },
      {
        num:      '02',
        title:    'Intake',
        headline: "We get on a 15-minute call.",
        body:     "No pitch, no upsell. Just a quick call to understand your situation and match you to the right service.",
        detail:   'Free discovery call · 15 minutes',
      },
      {
        num:      '03',
        title:    'Session',
        headline: 'We work through your specific situation.',
        body:     "Focused, 1:1 advising tailored to exactly what you're navigating — college apps, major choice, internship search, or whatever comes up.",
        detail:   '1:1 advising session · 45–60 min',
      },
      {
        num:      '04',
        title:    'Plan',
        headline: 'You leave with a concrete next-step plan.',
        body:     "Not homework. An actual action plan — what to do this week and next month to move toward your goal.",
        detail:   'Written action plan · Async follow-up',
      },
    ],
  },

  testimonials: [
    {
      track:   'launch',
      name:    'Founding Cohort Open',
      role:    'High school & college students',
      quote:   "We're building the Launch Program portfolio now. Sessions are free because we're proving the model works. You get real advising — we get to demonstrate the results.",
      isCohort: true,
    },
  ],

  apply: {
    heading:  'Apply for The Launch Program',
    sub:      "Free sessions are limited. Fill out the form and I'll reach out within 48 hours.",
    badge:    'Free · No commitment',
  },
}

// ── JBC PREMIUM ─────────────────────────────────────────────────────────────
export const PREMIUM = {
  hero: {
    badge:    'JBC Premium',
    badgeSub: 'Starting at $10',
    line1:    'Real coaching.',
    line2:    'Prices that make sense.',
    sub:      'Resume toolkits, ATS guides, and 1:1 consulting for new grads and post-grads. No gatekeeping, no $500 packages.',
    cta:      'Book a Free Consultation',
    ctaSub:   'See How It Works',
    proofSub: '5.0 · ',
  },

  services: [
    {
      num:     '01',
      title:   'Job Search Strategy',
      tagline: 'Stop spraying, start targeting.',
      body:    "A focused job search beats a scattered one every time. We build your target company list, application cadence, and outreach system.",
      includes: ['Target company mapping', 'Weekly application schedule', 'LinkedIn search strategy', 'Recruiter outreach scripts'],
    },
    {
      num:     '02',
      title:   'Resume + LinkedIn Optimization',
      tagline: 'Get past the filters. Get into the pile.',
      body:    "Most resumes never reach a human because of ATS filters. We rebuild yours from scratch — keyword-optimized, formatted to pass scanners, and compelling to recruiters.",
      includes: ['ATS keyword mapping', 'Full resume rewrite', 'LinkedIn SEO overhaul', 'Before/after review'],
    },
    {
      num:     '03',
      title:   'Interview Prep & Coaching',
      tagline: 'Walk in prepared. Walk out confident.',
      body:    "Mock interviews, behavioral coaching, and offer negotiation. We cover every stage from first screen to counter-offer.",
      includes: ['Mock interview sessions', 'STAR method coaching', 'Company-specific prep', 'Offer negotiation script'],
    },
    {
      num:     '04',
      title:   'Career Pivots & Grad School',
      tagline: 'Make the big decision with clarity.',
      body:    "Whether you're switching industries or considering an MBA/master's, we help you evaluate the decision and position yourself for it.",
      includes: ['Industry pivot roadmap', 'Transferable skills audit', 'Grad school ROI analysis', 'Application positioning'],
    },
  ],

  process: {
    label:   'The Process',
    heading: 'How It Works.',
    subhead: 'Four steps. From where you are to a signed offer.',
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
  },

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
        href: '/apply/premium',
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
        href: '/apply/premium',
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
        href: '/apply/premium',
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
        href: '/apply/premium',
      },
    ],
  },

  philosophy: [
    {
      left:  'Your resume is a ranking algorithm problem.',
      right: 'Before a human reads it, software scores it.',
    },
    {
      left:  'Most advice is theater.',
      right: 'Polish and buzzwords without strategy. We focus on what actually gets responses.',
    },
    {
      left:  "Price shouldn't determine access.",
      right: 'Every tier is built so any student can get the same quality of insight.',
    },
    {
      left:  'One focused search beats a hundred scattered applications.',
      right: 'Target, execute, follow up. That\'s the entire system.',
    },
  ],

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
}

// ── IMPACT (unified testimonials) ───────────────────────────────────────────
export const IMPACT = {
  label:   'Results',
  heading: 'Real Outcomes.',
  subhead: 'Across both tracks.',
  ticker: [
    { stat: '50+ students', label: 'helped across both tracks' },
    { stat: '3.2×',         label: 'more callbacks after resume rebuild' },
    { stat: '$12k avg',     label: 'salary increase post-negotiation' },
    { stat: '6 weeks',      label: 'average time to offer (premium)' },
    { stat: 'Free',         label: 'for all Launch Program students' },
    { stat: '48 hrs',       label: 'response time for Launch applications' },
  ],
  featured: {
    track:  'premium',
    name:   'Marcus T.',
    role:   'Finance → Tech Sales',
    result: 'Offer in 5 weeks',
    quote:  "I had applied to over 80 jobs before working with Joshua. Within 5 weeks of our session, I had two offers. The resume rebuild alone changed everything — I started actually hearing back.",
    stats:  [
      { value: '80+', label: 'jobs applied before' },
      { value: '5 wks', label: 'to first offer' },
      { value: '$12k', label: 'salary increase' },
    ],
  },
  cards: [
    {
      track:  'premium',
      name:   'Sarah K.',
      role:   'Recent Grad → Marketing Manager',
      result: '3 months',
      quote:  "The LinkedIn overhaul was a game-changer. I started getting recruiter messages within a week of the update. Landed a marketing manager role at a company I'd been targeting for months.",
    },
    {
      track:  'premium',
      name:   'Priya S.',
      role:   'MBA Applicant → Admitted',
      result: 'Columbia, Ross',
      quote:  "Joshua helped me completely reframe my story for MBA applications. My essays were generic before — after our sessions, they actually sounded like me. Got into both programs I applied to.",
    },
    {
      track:  'launch',
      name:   'Founding Cohort',
      role:   'High school & college students',
      result: 'Open now',
      quote:  "The Launch Program is actively enrolling its first cohort. Sessions are free because we're building the portfolio. Apply and be one of the first graduates.",
      isCohort: true,
    },
  ],
}

// ── BACKWARD-COMPAT ALIAS (remove after all components migrated) ─────────────
export const SITE = {
  nav:        SHARED.nav,
  hero:       PREMIUM.hero,
  howItWorks: PREMIUM.process,
  about:      SHARED.about,
  pricing:    PREMIUM.pricing,
  booking:    PREMIUM.booking,
  footer:     SHARED.footer,
}
