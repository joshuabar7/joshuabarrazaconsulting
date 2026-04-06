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
    tagline: 'Career advising for every stage, from high school to your first real job.',
    email:   'joshuabarraza0315@gmail.com',
    status:  'Systems Active',
    copy:    '© 2026 Joshua Barraza Consulting · All rights reserved.',
    credit:  'Built different.',
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
    heading2: 'A recent grad who figured it out the hard way.',
    story: [
      "I graduated with a finance degree and did what everyone does. Sent out resumes. Waited. Heard nothing. Turns out most resumes never reach a real person because of ATS filters and nobody tells you that.",
      "I spent months learning how hiring actually works and once it clicked, everything changed. Now I help students skip that whole painful guessing game. Starting at $10 because good advice shouldn't depend on who your parents know.",
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
        title: "I've been in your exact situation.",
        body:  "Graduated, applied everywhere, heard nothing. No one explained how ATS worked or how recruiters actually search LinkedIn. I had to figure it out myself.",
      },
      {
        num:   '02',
        title: 'Real access, not just content.',
        body:  "Whether you're a high school junior figuring out college apps or a post-grad done waiting around, there's a track for you. The Launch Program is free because barriers to good advice are lowkey ridiculous.",
      },
      {
        num:   '03',
        title: 'Only what actually gets results.',
        body:  "Every session, every guide, every script is built around one thing. Getting you a response. Not motivation talks. Not theory. Results.",
      },
    ],
  },
}

// ── HOME ────────────────────────────────────────────────────────────────────
export const HOME = {
  hero: {
    badge:    'Career Consulting',
    line1:    'Advice that actually',
    line2:    'gets you somewhere.',
    sub:      "Applying to college, hunting your first internship, or figuring out your next move after graduating. There's a track for where you're at right now.",
    cta:      'Find Your Track',
    ctaSub:   'See Real Results',
    proofSub: '5.0 · ',
  },

  trackSplit: {
    label:   'Two Tracks',
    heading: 'Two tracks. Same advisor.',
    subhead: 'One for students who need a starting point. One for grads who are done waiting.',
    launch: {
      badge:    'The Launch Program',
      tagline:  'For high school + college students.',
      sub:      'College apps, internship hunting, major choices, gap years. Free or subsidized. No gatekeeping, no waitlist of rich kids ahead of you.',
      services: [
        'College application advising',
        'Career direction and major selection',
        'Resume and early internship search',
        'Gap year and trade school paths',
      ],
      proof:   'Free for qualifying students',
      cta:     'Explore The Launch Program',
      href:    '/launch',
    },
    premium: {
      badge:    'JBC Premium',
      badgeSub: 'Starting at $10',
      tagline:  'For post-grad professionals.',
      sub:      'Job search strategy, resume and LinkedIn rebuild, interview coaching, and career pivots. Real help at prices that actually make sense.',
      services: [
        'Job search strategy and targeting',
        'Resume and LinkedIn rebuild',
        'Interview prep and coaching',
        'Career pivots and grad school',
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
    line1:    'Actual advice.',
    line2:    'Actually free.',
    sub:      'Free and subsidized advising for high school and college students. College apps, career direction, internships, and more. No cost, no catch.',
    cta:      'Apply Now — It\'s Free',
    ctaSub:   'See How It Works',
  },

  services: [
    {
      num:      '01',
      title:    'College Application Advising',
      tagline:  'Essays, school lists, a real strategy.',
      body:     "College apps are stressful enough without doing them blind. We build your school list together, work through your essays until they actually sound like you, and map out a timeline so nothing falls through.",
      audience: 'For: High school juniors and seniors',
      includes: ['School list building', 'Essay brainstorm and feedback', 'Application timeline', 'Financial aid overview'],
    },
    {
      num:      '02',
      title:    'Career Direction and Major Selection',
      tagline:  'Pick a direction before the deadline forces you.',
      body:     "Choosing a major with zero context is a lot to ask of an 18-year-old, ngl. We map your interests and strengths to actual career paths so you're not just guessing.",
      audience: 'For: High school seniors and college freshmen/sophomores',
      includes: ['Interest and strengths mapping', 'Career path exploration', 'Major decision framework', 'Informational interview guide'],
    },
    {
      num:      '03',
      title:    'Resume and Early Internship Search',
      tagline:  'Your first resume, built to actually get read.',
      body:     "Most students send out their first resume before knowing what hiring managers look for. We build yours from scratch, even with limited experience, so it clears the filters.",
      audience: 'For: College students (any year)',
      includes: ['Resume build from scratch', 'ATS-friendly formatting', 'Internship search strategy', 'Outreach email templates'],
    },
    {
      num:      '04',
      title:    'Gap Year and Trade School Paths',
      tagline:  'College is not the only move.',
      body:     "If you're considering a gap year, trade school, bootcamp, or something else entirely, we help you make a real decision instead of defaulting to whatever feels safest.",
      audience: 'For: High school seniors and college students',
      includes: ['Alternative path mapping', 'Gap year program research', 'Trade school ROI analysis', 'Decision framework'],
    },
    {
      num:      '05',
      title:    'Internship Search Strategy',
      tagline:  'A system that gets responses.',
      body:     "Applying and waiting is not a strategy. We build you a list of target companies, write your outreach messages, and set up a tracking system that keeps you moving.",
      audience: 'For: College students (sophomore through senior)',
      includes: ['Target company list', 'LinkedIn outreach scripts', 'Application tracking system', 'Follow-up cadence'],
    },
    {
      num:      '06',
      title:    'Grad School Decisions',
      tagline:  'Worth it or not? Let\'s find out.',
      body:     "Grad school is a real financial commitment and not always the right call. We break down when it makes sense for your field, what programs to look at, and how to position your application.",
      audience: 'For: College juniors and seniors',
      includes: ['ROI analysis by field', 'Program research framework', 'Application timeline', 'Statement of purpose guidance'],
    },
  ],

  process: {
    label:   'How It Works',
    heading: 'Simple. Free. No fluff.',
    subhead: 'Four steps from application to having an actual plan.',
    steps: [
      {
        num:      '01',
        title:    'Apply',
        headline: 'Fill out the form.',
        body:     "Tell us where you are, high school, college, what decisions you're staring down. Takes about 3 minutes.",
        detail:   'Application form · No commitment',
      },
      {
        num:      '02',
        title:    'Intake',
        headline: 'Quick 15-minute call.',
        body:     "No pitch, no upsell. Just a fast call to understand your situation and figure out what you actually need.",
        detail:   'Free discovery call · 15 minutes',
      },
      {
        num:      '03',
        title:    'Session',
        headline: 'We get into it.',
        body:     "1:1 advising focused on your specific situation, whether that's college apps, your major, internship hunting, or something else entirely.",
        detail:   '1:1 advising session · 45 to 60 min',
      },
      {
        num:      '04',
        title:    'Plan',
        headline: 'You leave with real next steps.',
        body:     "Not a list of vague tips. An actual action plan with what to do this week and this month so you keep moving.",
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
    sub:      'Resume toolkits, ATS guides, and 1:1 consulting for new grads and post-grads. No gatekeeping, no $500 packages, no bs.',
    cta:      'Book a Free Consultation',
    ctaSub:   'See How It Works',
    proofSub: '5.0 · ',
  },

  services: [
    {
      num:     '01',
      title:   'Job Search Strategy',
      tagline: 'Stop applying everywhere. Start targeting.',
      body:    "Sending out 100 applications hoping something sticks is not the move. We build your target company list, set your application cadence, and write your outreach messages.",
      includes: ['Target company mapping', 'Weekly application schedule', 'LinkedIn search strategy', 'Recruiter outreach scripts'],
    },
    {
      num:     '02',
      title:   'Resume and LinkedIn Rebuild',
      tagline: 'Get past the filters. Get into the pile.',
      body:    "Most resumes never reach a human because ATS filters kill them first. We rebuild yours from scratch, keyword-optimized and formatted to pass the scanner and catch the recruiter.",
      includes: ['ATS keyword mapping', 'Full resume rewrite', 'LinkedIn overhaul', 'Before and after review'],
    },
    {
      num:     '03',
      title:   'Interview Prep and Coaching',
      tagline: 'Go in ready, not winging it.',
      body:    "Mock interviews, behavioral coaching, and offer negotiation. We cover everything from the first screen all the way to pushing back on the initial offer.",
      includes: ['Mock interview sessions', 'STAR method coaching', 'Company-specific prep', 'Offer negotiation script'],
    },
    {
      num:     '04',
      title:   'Career Pivots and Grad School',
      tagline: 'Big decision. Let\'s think it through.',
      body:    "Switching industries or thinking about an MBA? We help you figure out if it actually makes sense for your situation and how to position yourself going in.",
      includes: ['Industry pivot roadmap', 'Transferable skills audit', 'Grad school ROI analysis', 'Application positioning'],
    },
  ],

  process: {
    label:   'The Process',
    heading: 'How It Works.',
    subhead: 'Four steps from where you are right now to a signed offer.',
    steps: [
      {
        num:     '01',
        title:   'Audit',
        headline: "We find what's actually not working.",
        body:    "We go through your resume, LinkedIn, and application approach together and find every gap. Most people are surprised by what they find.",
        detail:  'Resume review · LinkedIn scan · Application strategy',
      },
      {
        num:     '02',
        title:   'Rebuild',
        headline: 'Everything gets rebuilt from scratch.',
        body:    "Your resume gets rewritten to pass ATS filters. Your LinkedIn gets restructured to show up in recruiter searches. Both get done.",
        detail:  'ATS keyword mapping · Bullet rewrites · LinkedIn rebuild',
      },
      {
        num:     '03',
        title:   'Execute',
        headline: 'You apply with a real plan.',
        body:    "A weekly application schedule, outreach messages, and a follow-up system. You run a focused search instead of a scattered one.",
        detail:  'Company target list · Outreach scripts · Follow-up cadence',
      },
      {
        num:     '04',
        title:   'Offer',
        headline: 'You negotiate knowing what to ask for.',
        body:    "When the offer comes, you know how to read it and push back. Most people leave $5k to $12k on the table by not asking.",
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
      right: 'Software scores it before a human ever sees it. Most people have no idea.',
    },
    {
      left:  'Most career advice is useless.',
      right: 'Polish and buzzwords without real strategy. We skip that and focus on what gets responses.',
    },
    {
      left:  'Price should not determine access to good advice.',
      right: 'Every tier is built so any student can get the same quality of insight, not just people with $500 to spend.',
    },
    {
      left:  'One focused search beats a hundred scattered applications.',
      right: 'Target the right companies, reach out directly, follow up. That\'s the whole system.',
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
