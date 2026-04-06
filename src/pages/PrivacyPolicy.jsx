import { Link } from 'react-router-dom'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-forest text-white">

      {/* Header */}
      <div className="border-b border-white/10">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <Link to="/" className="font-serif italic text-2xl text-white hover:text-gold transition-colors">
            Joshua Barraza Consulting
          </Link>
          <Link to="/" className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            Back to site
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-gold text-xs tracking-[0.3em] uppercase mb-4">Legal</p>
        <h1 className="font-serif italic text-5xl text-white mb-3">Privacy Policy</h1>
        <p className="font-mono text-white/40 text-xs mb-6">Effective date: January 1, 2026 · Last updated: April 2026</p>
        <p className="font-sans text-white/50 text-sm leading-relaxed mb-12">
          Straight talk on what we collect, why we collect it, and what we do with it. We keep this simple because
          you deserve to actually understand it.
        </p>

        <div className="space-y-10 font-sans text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">1. Who We Are</h2>
            <p>
              Joshua Barraza Consulting is a career consulting business operated by Joshua Barraza,
              based in Louisiana, United States. We provide resume consulting, career coaching, and job search strategy
              services to students and recent graduates through The Launch Program and JBC Premium.
            </p>
            <p className="mt-3">
              Questions about this policy? Reach us at:{' '}
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                joshuabarraza0315@gmail.com
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">2. Information We Collect</h2>
            <p className="mb-3">We collect the following personal information when you use our services:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-midnight/75">Booking information</strong> — your name, email address, and any information you provide when scheduling a session through Calendly.</li>
              <li><strong className="text-midnight/75">Application information</strong> — for The Launch Program, information you submit through our application form including name, email, grade level, and areas of interest. This is processed through Formspree.</li>
              <li><strong className="text-midnight/75">Payment information</strong> — when payments are processed, transaction data is handled by Stripe. We do not collect or store your card number, CVV, or raw payment details.</li>
              <li><strong className="text-midnight/75">Communication data</strong> — emails or messages you send us directly.</li>
              <li><strong className="text-midnight/75">Usage data</strong> — standard web analytics such as browser type, pages visited, and time on site, collected automatically when you visit our website.</li>
            </ul>
            <p className="mt-3">We do not collect sensitive personal data such as government ID numbers, health information, or financial account details.</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect only for the following purposes:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>To schedule, conduct, and follow up on consulting sessions</li>
              <li>To review and respond to Launch Program applications</li>
              <li>To deliver purchased digital products</li>
              <li>To respond to your inquiries and provide support</li>
              <li>To comply with legal obligations and maintain records</li>
            </ul>
            <p className="mt-3">
              <strong className="text-midnight/75">We do not sell, rent, share, or trade your personal information</strong> to any third party for marketing purposes.
              We do not use your data for advertising or profiling.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">4. Third-Party Service Providers</h2>
            <p className="mb-3">We use the following third-party processors to run our business. Each one acts as a data processor on our behalf:</p>

            <div className="space-y-4">
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-sans font-bold text-midnight/80 text-sm mb-1">Calendly</p>
                <p>Used for scheduling sessions. When you book, Calendly collects your name, email, and scheduling preferences.</p>
                <a href="https://calendly.com/legal/privacy-notice" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors text-xs mt-1 inline-block">
                  Calendly Privacy Notice
                </a>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-sans font-bold text-midnight/80 text-sm mb-1">Formspree</p>
                <p>Used to process Launch Program applications. When you submit the application form, Formspree receives and forwards your submission to us via email. We do not store your form data on our servers.</p>
                <a href="https://formspree.io/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors text-xs mt-1 inline-block">
                  Formspree Privacy Policy
                </a>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-sans font-bold text-midnight/80 text-sm mb-1">Stripe</p>
                <p>Used for payment processing. Stripe is PCI DSS Level 1 certified. We never see or store your raw card information.</p>
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors text-xs mt-1 inline-block">
                  Stripe Privacy Policy
                </a>
              </div>
              <div className="border border-white/10 rounded-xl p-4">
                <p className="font-sans font-bold text-midnight/80 text-sm mb-1">Vercel</p>
                <p>Our website is hosted on Vercel, which may process standard web request data as part of content delivery.</p>
                <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors text-xs mt-1 inline-block">
                  Vercel Privacy Policy
                </a>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">5. Cookies</h2>
            <p className="mb-3">
              Our website uses cookies. We show a consent banner on your first visit and only load
              third-party scripts after you give explicit consent.
            </p>
            <p className="mb-3">Cookies we use:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-midnight/75">Essential cookies</strong> — required for the site to function, including storing your cookie consent preference.</li>
              <li><strong className="text-midnight/75">Functional cookies</strong> — set by Calendly to enable the booking widget. Only loaded after you accept cookies.</li>
            </ul>
            <p className="mt-3">You can withdraw consent at any time by clearing your browser's localStorage for this site.</p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">6. Data Retention</h2>
            <p>
              We keep personal information for <strong className="text-midnight/75">one year from your last interaction</strong> with us.
              After that, your data gets deleted. We hold onto it only for legal record-keeping and do not use it
              for any commercial purpose after your engagement ends.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">7. Your Rights</h2>
            <p className="mb-3">Depending on where you live, you may have the following rights regarding your personal data:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li><strong className="text-midnight/75">Right to access</strong> — request a copy of the personal data we hold about you</li>
              <li><strong className="text-midnight/75">Right to rectification</strong> — request correction of inaccurate data</li>
              <li><strong className="text-midnight/75">Right to erasure</strong> — request deletion of your personal data</li>
              <li><strong className="text-midnight/75">Right to portability</strong> — request your data in a portable format</li>
              <li><strong className="text-midnight/75">Right to object</strong> — object to certain types of processing</li>
            </ul>
            <p className="mt-3">
              To use any of these rights, email us at{' '}
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                joshuabarraza0315@gmail.com
              </a>
              . We will respond within 30 days.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">8. California Privacy Rights (CCPA)</h2>
            <p className="mb-3">
              If you're a California resident, you have additional rights under the CCPA:
            </p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>The right to know what personal information we collect, use, and share</li>
              <li>The right to delete your personal information</li>
              <li>The right to opt out of the sale of personal information — <strong className="text-midnight/75">we do not sell personal information</strong></li>
              <li>The right to non-discrimination for exercising your CCPA rights</li>
            </ul>
            <p className="mt-3">
              To submit a CCPA request, contact us at{' '}
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                joshuabarraza0315@gmail.com
              </a>.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">9. Minors</h2>
            <p>
              The Launch Program serves high school students who may be under 18. We recommend that students under 18
              review this policy with a parent or guardian before submitting an application. We do not knowingly collect
              personal information from children under 13. If you believe a child under 13 has submitted information
              to us, contact us and we will delete it.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">10. Security</h2>
            <p>
              We use HTTPS encryption, secure credential storage, and access controls to protect your personal information.
              No method of transmission over the internet is 100% secure, so we cannot guarantee absolute security,
              but we take reasonable steps to protect your data.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">11. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. When we do, we will update the "Last updated" date
              at the top of this page. Continued use of our services after changes means you accept the updated policy.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">12. Contact Us</h2>
            <p>For any questions or requests about this Privacy Policy or your personal data:</p>
            <div className="mt-3 border border-white/10 rounded-xl p-4">
              <p className="text-white font-bold">Joshua Barraza Consulting</p>
              <p>Louisiana, United States</p>
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                joshuabarraza0315@gmail.com
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/10 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-white/30 text-xs">© 2026 Joshua Barraza Consulting · All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-mono text-xs text-gold">Privacy Policy</Link>
            <Link to="/terms" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
