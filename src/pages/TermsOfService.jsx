import { Link } from 'react-router-dom'

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-midnight text-white">

      {/* Header */}
      <div className="border-b border-white/8">
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
        <h1 className="font-serif italic text-5xl text-white mb-3">Terms of Service</h1>
        <p className="font-mono text-white/30 text-xs mb-6">Effective date: January 1, 2026 · Last updated: April 2026</p>
        <p className="font-sans text-white/50 text-sm leading-relaxed mb-12">
          Read these before you book or buy. They cover what you're getting, what we expect from you,
          and what happens if something goes sideways. Standard stuff, written in plain language.
        </p>

        <div className="space-y-10 font-sans text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">1. Agreement to Terms</h2>
            <p>
              By using the services provided by Joshua Barraza Consulting, operated by Joshua Barraza
              in Louisiana, United States, you agree to these Terms of Service.
              If you do not agree, do not use our services.
            </p>
            <p className="mt-3">
              These terms apply to all visitors, customers, and users of our website and any services purchased through it.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">2. Services Offered</h2>
            <p className="mb-3">Joshua Barraza Consulting offers two tracks:</p>

            <p className="font-bold text-white/70 mb-2">The Launch Program (Free)</p>
            <div className="border border-white/8 rounded-xl p-4 mb-4">
              <p>Free and subsidized 1:1 advising sessions for high school and college students. Services include college application advising, career direction, internship search strategy, gap year planning, and grad school decisions. Sessions are subject to availability and are provided at no cost to qualifying students.</p>
            </div>

            <p className="font-bold text-white/70 mb-2">JBC Premium (Paid)</p>
            <div className="space-y-3">
              <div className="border border-white/8 rounded-xl p-4">
                <p className="font-bold text-white/80">Starter Toolkit — $10</p>
                <p className="mt-1">A digital download guide covering resume foundations, job search strategy, ATS keywords, and common mistakes. Delivered instantly upon purchase.</p>
              </div>
              <div className="border border-white/8 rounded-xl p-4">
                <p className="font-bold text-white/80">ATS Bypass Kit — $15</p>
                <p className="mt-1">A digital download guide for ATS keyword mapping, resume formatting, and rewrite strategies. Delivered instantly upon purchase.</p>
              </div>
              <div className="border border-white/8 rounded-xl p-4">
                <p className="font-bold text-white/80">Full Consulting Package — $50</p>
                <p className="mt-1">One 60-minute 1:1 session including resume rewrite, LinkedIn review, personalized job search action plan, and one week of async follow-up support.</p>
              </div>
              <div className="border border-white/8 rounded-xl p-4">
                <p className="font-bold text-white/80">Pro Package — $100</p>
                <p className="mt-1">Two 1:1 sessions (60 min and 45 min), mock interview with feedback, offer evaluation, salary negotiation script, and two weeks of async support.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">3. Payment</h2>
            <p>
              All payments are processed securely through Stripe. By making a purchase, you authorize us to charge
              the applicable fee to your selected payment method. All prices are in US dollars (USD).
              Payment is required in full at the time of purchase or booking.
            </p>
            <p className="mt-3">
              The Launch Program is free. No payment is required or solicited at any point for Launch Program services.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">4. Refund Policy</h2>
            <div className="border border-gold/20 bg-gold/5 rounded-xl p-4 mb-3">
              <p className="text-white/80 font-bold mb-1">All sales are final. We do not offer refunds.</p>
              <p>
                Because of the nature of our digital products and consulting services, all purchases are non-refundable.
                This covers digital downloads and all 1:1 consulting sessions, whether or not the session has been completed.
              </p>
            </div>
            <p>
              If you have a technical issue accessing a purchased digital product, contact us at{' '}
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                joshuabarraza0315@gmail.com
              </a>{' '}
              and we will sort it out.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">5. Scheduling and Cancellations</h2>
            <p>
              Paid consulting sessions are scheduled through Calendly. If you need to reschedule, do it at least
              24 hours before your session using the Calendly link in your confirmation email.
            </p>
            <p className="mt-3">
              Launch Program sessions are scheduled directly with Joshua after your application is accepted.
              If you need to reschedule, reach out by email with at least 24 hours notice.
            </p>
            <p className="mt-3">
              Sessions not attended without prior notice are forfeited with no right to reschedule or receive a refund.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">6. No Guarantee of Results</h2>
            <div className="border border-white/10 rounded-xl p-4 bg-white/3">
              <p className="mb-3">
                <strong className="text-white/80">Career outcomes cannot be guaranteed.</strong> Our services are
                designed to improve your resume, LinkedIn, and job search approach. We do not guarantee
                employment, callbacks, interviews, specific salary outcomes, or any other particular result.
              </p>
              <p>
                Results vary based on factors outside our control, including the job market, employer decisions,
                the client's qualifications, how the client applies the advice given, and economic conditions.
                Any results mentioned on our website represent specific client experiences and are not typical or guaranteed.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">7. Client Responsibilities</h2>
            <p className="mb-3">By using our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Provide accurate and complete information about your background and goals</li>
              <li>Attend scheduled sessions on time or give advance notice of cancellation</li>
              <li>Use advice, materials, and strategies provided for your personal job search only</li>
              <li>Not share, reproduce, resell, or distribute any purchased digital materials</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">8. Intellectual Property</h2>
            <p>
              All content on this website and in our digital products, including guides, frameworks, templates,
              scripts, and written materials, is the intellectual property of Joshua Barraza Consulting.
              You are granted a personal, non-transferable, non-exclusive license to use purchased materials
              for your own job search. You may not copy, distribute, publish, or sell any of our materials
              without express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Joshua Barraza Consulting and Joshua Barraza shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages arising from
              your use of our services, including lost income, lost employment opportunities, or any other economic loss.
            </p>
            <p className="mt-3">
              Our total liability to you for any claim related to these Terms or our services
              shall not exceed the amount you paid us in the 30 days before the claim.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">10. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind.
              We do not warrant that our services will meet your specific requirements or produce
              any particular career outcome.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">11. Governing Law</h2>
            <p>
              These Terms are governed by the laws of the State of Louisiana, United States.
              Any dispute arising under these terms falls under the exclusive jurisdiction of
              the courts located in Louisiana.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">12. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms at any time. We will update the "Last updated"
              date when changes are made. Continued use of our services after any changes means you accept the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">13. Contact</h2>
            <p>Questions about these Terms? Reach us at:</p>
            <div className="mt-3 border border-white/8 rounded-xl p-4">
              <p className="text-white/80 font-bold">Joshua Barraza Consulting</p>
              <p>Louisiana, United States</p>
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-gold hover:text-gold-light transition-colors">
                joshuabarraza0315@gmail.com
              </a>
            </div>
          </section>

        </div>
      </div>

      {/* Footer */}
      <div className="border-t border-white/8 mt-16">
        <div className="max-w-3xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-white/20 text-xs">© 2026 Joshua Barraza Consulting · All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="font-mono text-xs text-gold">Terms of Service</Link>
          </div>
        </div>
      </div>

    </div>
  )
}
