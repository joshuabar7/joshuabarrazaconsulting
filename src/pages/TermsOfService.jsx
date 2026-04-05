export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#0C1F14] text-white">

      {/* Header */}
      <div className="border-b border-white/8">
        <div className="max-w-3xl mx-auto px-6 py-6 flex items-center justify-between">
          <a href="/" className="font-serif italic text-2xl text-white hover:text-[#C9A84C] transition-colors">
            Joshua Barraza Consulting
          </a>
          <a href="/" className="font-mono text-xs text-white/40 hover:text-white/70 transition-colors">
            ← Back to site
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-mono text-[#C9A84C] text-xs tracking-[0.3em] uppercase mb-4">Legal</p>
        <h1 className="font-serif italic text-5xl text-white mb-3">Terms of Service</h1>
        <p className="font-mono text-white/30 text-xs mb-12">Effective date: January 1, 2026 · Last updated: April 2026</p>

        <div className="space-y-10 font-sans text-white/60 text-sm leading-relaxed">

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by Joshua Barraza Consulting ("we," "us," or "our"),
              operated by Joshua Barraza in Louisiana, United States, you agree to be bound by these Terms of Service.
              If you do not agree to these terms, do not use our services.
            </p>
            <p className="mt-3">
              These terms apply to all visitors, customers, and users of our website at joshuabarrazaconsulting.vercel.app
              and any services purchased through it.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">2. Services Offered</h2>
            <p className="mb-3">Joshua Barraza Consulting provides the following career consulting services:</p>
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
                <p className="mt-1">One 60-minute 1:1 consulting session including resume rewrite, LinkedIn profile review, personalized job search action plan, and one week of async follow-up support.</p>
              </div>
              <div className="border border-white/8 rounded-xl p-4">
                <p className="font-bold text-white/80">Pro Package — $100</p>
                <p className="mt-1">Two 1:1 sessions (60 min + 45 min), mock interview with feedback, offer evaluation, salary negotiation script, and two weeks of async support.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">3. Payment</h2>
            <p>
              All payments are processed securely through Stripe. By making a purchase, you authorize us to charge
              the applicable fee to your selected payment method. All prices are listed in US dollars (USD).
              Payment is required in full at the time of purchase or booking.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">4. Refund Policy</h2>
            <div className="border border-[#C9A84C]/20 bg-[#C9A84C]/5 rounded-xl p-4 mb-3">
              <p className="text-white/80 font-bold mb-1">All sales are final. We do not offer refunds.</p>
              <p>
                Due to the nature of our digital products and consulting services, all purchases are non-refundable.
                This includes digital downloads (Starter Toolkit, ATS Bypass Kit) and all 1:1 consulting sessions,
                regardless of whether the session has been completed.
              </p>
            </div>
            <p>
              If you experience a technical issue that prevents you from accessing a purchased digital product,
              please contact us at{' '}
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-[#C9A84C] hover:text-[#E4C56A] transition-colors">
                joshuabarraza0315@gmail.com
              </a>{' '}
              and we will work to resolve the issue.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">5. Scheduling & Cancellations</h2>
            <p>
              Consulting sessions are scheduled via Calendly. If you need to reschedule, please do so at least
              24 hours before your scheduled session time using the Calendly link provided in your confirmation email.
              We reserve the right to reschedule sessions due to unforeseen circumstances and will provide as much
              advance notice as possible.
            </p>
            <p className="mt-3">
              Sessions not attended without prior notice ("no-shows") are considered forfeit with no right to reschedule
              or receive a refund.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">6. No Guarantee of Results</h2>
            <div className="border border-white/10 rounded-xl p-4 bg-white/3">
              <p className="mb-3">
                <strong className="text-white/80">Career outcomes cannot be guaranteed.</strong> While our services are
                designed to improve your resume, LinkedIn profile, and job search strategy, we make no guarantee that
                using our services will result in employment, callbacks, interviews, specific salary outcomes, or any
                other particular result.
              </p>
              <p>
                Individual results vary based on factors outside our control, including but not limited to: the job
                market, employer hiring decisions, the client's qualifications, the client's effort and implementation
                of advice, and economic conditions. Any results mentioned on our website (such as time-to-offer or
                salary increases) represent specific client experiences and are not typical or guaranteed outcomes.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">7. Client Responsibilities</h2>
            <p className="mb-3">By purchasing our services, you agree to:</p>
            <ul className="list-disc list-inside space-y-2 pl-2">
              <li>Provide accurate and complete information about your background and job search goals</li>
              <li>Attend scheduled sessions on time or provide advance notice of cancellation</li>
              <li>Use the advice, materials, and strategies provided for your personal job search only</li>
              <li>Not share, reproduce, resell, or distribute any purchased digital materials</li>
            </ul>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">8. Intellectual Property</h2>
            <p>
              All content on this website and in our digital products — including guides, frameworks, templates,
              scripts, and written materials — is the intellectual property of Joshua Barraza Consulting.
              You are granted a personal, non-transferable, non-exclusive license to use purchased materials
              for your own job search. You may not copy, distribute, publish, or sell any of our materials
              without express written permission.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">9. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Joshua Barraza Consulting and Joshua Barraza shall not be
              liable for any indirect, incidental, special, consequential, or punitive damages arising out of
              or related to your use of our services, including but not limited to lost income, lost employment
              opportunities, or any other economic loss.
            </p>
            <p className="mt-3">
              Our total liability to you for any claim arising from or related to these Terms or our services
              shall not exceed the amount you paid us in the 30 days preceding the claim.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">10. Disclaimer of Warranties</h2>
            <p>
              Our services are provided "as is" and "as available" without warranties of any kind, either express
              or implied. We do not warrant that our services will meet your specific requirements or that they
              will be uninterrupted, error-free, or produce any particular career outcome.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">11. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the
              State of Louisiana, United States, without regard to its conflict of law provisions.
              Any dispute arising under these terms shall be subject to the exclusive jurisdiction of
              the courts located in Louisiana.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">12. Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms of Service at any time. We will update the "Last updated"
              date at the top of this page when changes are made. Continued use of our services after any changes
              constitutes your acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="font-sans font-bold text-white text-base mb-3">13. Contact</h2>
            <p>For questions about these Terms of Service, contact us at:</p>
            <div className="mt-3 border border-white/8 rounded-xl p-4">
              <p className="text-white/80 font-bold">Joshua Barraza Consulting</p>
              <p>Louisiana, United States</p>
              <a href="mailto:joshuabarraza0315@gmail.com" className="text-[#C9A84C] hover:text-[#E4C56A] transition-colors">
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
            <a href="/privacy" className="font-mono text-xs text-white/30 hover:text-white/60 transition-colors">Privacy Policy</a>
            <a href="/terms" className="font-mono text-xs text-[#C9A84C]">Terms of Service</a>
          </div>
        </div>
      </div>

    </div>
  )
}
