export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <section className="text-center mb-20">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Section 174 Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Track Software Dev Expenses.<br />
          <span className="text-[#58a6ff]">Maximize Your Tax Deductions.</span>
        </h1>
        <p className="text-[#8b949e] text-lg mb-8 max-w-xl mx-auto">
          Automatically categorize software development costs, stay compliant with Section 174 amortization rules, and generate audit-ready reports — built for consultants, agencies, and indie devs.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start Tracking — $29/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-3">Cancel anytime. No setup fees.</p>
      </section>

      {/* Features strip */}
      <section className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-20">
        {[
          { icon: "🗂️", title: "Auto-Categorization", desc: "AI tags every expense as R&D, tooling, or overhead automatically." },
          { icon: "📊", title: "174 Compliance Reports", desc: "Export IRS-ready amortization schedules in one click." },
          { icon: "🏦", title: "Bank Sync", desc: "Connect accounts via Plaid and import transactions instantly." }
        ].map((f) => (
          <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="text-white font-semibold mb-1">{f.title}</h3>
            <p className="text-[#8b949e] text-sm">{f.desc}</p>
          </div>
        ))}
      </section>

      {/* Pricing */}
      <section className="mb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$29</p>
          <p className="text-[#8b949e] text-sm mb-6">per month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited expense imports",
              "Section 174 amortization reports",
              "Plaid bank integration",
              "CSV & PDF export",
              "Priority email support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-sm text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What is Section 174 and why does it matter?",
              a: "Section 174 of the US tax code governs how software R&D expenses are deducted. Since 2022, costs must be amortized over 5 years (domestic) or 15 years (foreign) instead of expensed immediately — making accurate tracking critical."
            },
            {
              q: "Which expenses qualify under Section 174?",
              a: "Salaries for developers, contractor fees, cloud infrastructure, software licenses, and other costs directly tied to developing or improving software products all qualify for Section 174 treatment."
            },
            {
              q: "Can I connect multiple bank accounts?",
              a: "Yes. Via Plaid integration you can link checking, savings, and credit card accounts to automatically import and categorize all relevant transactions."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs border-t border-[#30363d] pt-8">
        &copy; {new Date().getFullYear()} Section 174 Tracker. All rights reserved.
      </footer>
    </main>
  );
}
