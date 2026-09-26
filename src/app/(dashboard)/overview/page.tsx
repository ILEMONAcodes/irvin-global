import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, CalendarDays, CreditCard, FileText, Sun, WalletCards } from 'lucide-react';
import { formatNaira } from '@/lib/utils';

const actions = [
  { title: 'Apply for loan', href: '/apply', icon: BriefcaseBusiness },
  { title: 'Make a payment', href: '/loans', icon: CreditCard },
  { title: 'Track application', href: '/status', icon: FileText },
  { title: 'Find a branch', href: '/branches', icon: Building2 },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-sm text-slate-500">Friday, September 25, 2026</p>
          <h1 className="mt-1 text-2xl font-semibold text-[#0B132B]">Good morning, Michelle <Sun aria-hidden="true" className="inline h-5 w-5 text-[#D4AF37]" /></h1>
          <p className="mt-1 text-sm text-slate-500">Here’s your financial overview.</p>
        </div>
        <Link href="/status" className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          View application status <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <section className="grid gap-4 xl:grid-cols-3">
        <article className="rounded-xl bg-[#0B132B] p-5 text-white shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-300">Available credit</p>
            <WalletCards className="h-5 w-5 text-[#D4AF37]" />
          </div>
          <p className="mt-5 text-3xl font-semibold">{formatNaira(1200000)}</p>
          <Link href="/apply" className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#D4AF37] px-4 py-2.5 text-xs font-bold text-[#0B132B] hover:bg-[#e1c35a]">
            Apply for a new loan <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Active loan</p>
            <CreditCard className="h-5 w-5 text-[#99751d]" />
          </div>
          <p className="mt-5 text-3xl font-semibold text-[#0B132B]">{formatNaira(500000)}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
            <span>Outstanding balance</span>
            <Link href="/loans" className="inline-flex items-center gap-1 font-semibold text-[#0B132B]">
              View details <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-500">Next repayment</p>
            <CalendarDays className="h-5 w-5 text-[#99751d]" />
          </div>
          <p className="mt-5 text-3xl font-semibold text-[#0B132B]">{formatNaira(93750)}</p>
          <div className="mt-2 flex items-center justify-between text-xs text-slate-500">
            <span>Due 30 Sep 2026</span>
            <Link href="/loans" className="rounded-lg bg-[#0B132B] px-3 py-2 font-semibold text-white hover:bg-[#152344]">
              Make payment
            </Link>
          </div>
        </article>
      </section>
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#0B132B]">Quick actions</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {actions.map(({ title, href, icon: Icon }) => (
            <Link key={title} href={href} className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4 transition hover:border-[#D4AF37] hover:shadow-sm">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-[#f8f4e8] text-[#99751d]">
                <Icon className="h-5 w-5" />
              </span>
              <span className="text-sm font-semibold text-slate-700">{title}</span>
              <ArrowRight className="ml-auto h-4 w-4 text-slate-300 group-hover:text-[#99751d]" />
            </Link>
          ))}
        </div>
      </section>
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-[#0B132B]">Recent applications</h2>
            <p className="mt-1 text-xs text-slate-500">Keep track of your latest requests</p>
          </div>
          <Link href="/status" className="text-sm font-semibold text-[#99751d]">
            View all
          </Link>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[600px] text-left text-sm">
            <thead className="bg-slate-50 text-xs font-semibold text-slate-500">
              <tr>
                <th className="px-5 py-3">Application</th>
                <th className="px-5 py-3">Reference</th>
                <th className="px-5 py-3">Date submitted</th>
                <th className="px-5 py-3">Status</th>
                <th className="px-5 py-3" />
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-slate-100">
                <td className="px-5 py-4 font-semibold text-slate-800">SME Credit Facility</td>
                <td className="px-5 py-4 text-slate-500">#IG-20481</td>
                <td className="px-5 py-4 text-slate-500">12 Sep 2026</td>
                <td className="px-5 py-4">
                  <span className="rounded-full bg-[#FEF9C3] px-3 py-1 text-xs font-semibold text-[#854D0E]">Under review</span>
                </td>
                <td className="px-5 py-4">
                  <Link href="/status" aria-label="View application" className="text-slate-400 hover:text-[#0B132B]">
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}