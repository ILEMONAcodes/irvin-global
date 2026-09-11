import React from 'react';
import Image from 'next/image';
import { TrendingUp, ShieldCheck, DollarSign, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function InvestmentsPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Irvin Global" width={150} height={40} className="object-contain" />
          </a>
          <a
            href="/apply"
            className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
          >
            Apply for Credit
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-4 border border-emerald-100">
            <TrendingUp className="w-3.5 h-3.5" /> Fixed Deposit & Placement Terms
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">High-Yield Wealth Growth</h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Lock in guaranteed returns on capital with flexible tenor plans structured for private individuals and corporate entities.
          </p>
        </div>

        {/* Plan Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              title: 'Quarterly Placement',
              tenor: '90 Days (3 Months)',
              returnRate: 'Up to 14% p.a.',
              minDeposit: '₦500,000',
              features: ['Upfront or maturity payout options', 'Backed by audited credit portfolio', 'Direct certificate issuance'],
            },
            {
              title: 'Bi-Annual Growth',
              tenor: '180 Days (6 Months)',
              returnRate: 'Up to 16.5% p.a.',
              minDeposit: '₦1,000,000',
              popular: true,
              features: ['Higher compound interest rate', 'Flexible liquidation terms', 'Dedicated relationship manager'],
            },
            {
              title: 'Annual Treasury',
              tenor: '365 Days (12 Months)',
              returnRate: 'Up to 19% p.a.',
              minDeposit: '₦5,000,000',
              features: ['Maximum yield guarantee', 'Quarterly interest disbursement option', 'Institutional investor priority access'],
            },
          ].map((plan, idx) => (
            <div
              key={idx}
              className={`bg-white rounded-3xl p-8 border ${
                plan.popular ? 'border-blue-600 shadow-2xl relative' : 'border-slate-100 shadow-xl'
              } flex flex-col justify-between`}
            >
              {plan.popular && (
                <span className="absolute -top-3.5 right-8 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Most Popular
                </span>
              )}

              <div>
                <h3 className="text-xl font-bold text-slate-900">{plan.title}</h3>
                <p className="text-xs text-slate-500 mt-1">{plan.tenor}</p>

                <div className="my-6">
                  <span className="text-3xl font-black text-emerald-600">{plan.returnRate}</span>
                  <p className="text-xs text-slate-500 mt-1">Min. Deposit: <strong className="text-slate-800">{plan.minDeposit}</strong></p>
                </div>

                <ul className="space-y-3 text-xs text-slate-600 mb-8 border-t border-slate-100 pt-6">
                  {plan.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="/apply"
                className={`w-full py-3.5 px-4 rounded-2xl font-bold text-xs flex items-center justify-center gap-2 transition ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800'
                }`}
              >
                Start Investment <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}