'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CalendarDays, Check, Clock3, CreditCard, WalletCards } from 'lucide-react';
import { formatNaira } from '@/lib/utils';
import { DASHBOARD_ACCOUNT } from '@/data/dashboardAccount';

const paymentRows = [
  { date: DASHBOARD_ACCOUNT.nextRepaymentDate, amount: DASHBOARD_ACCOUNT.repaymentAmount, description: `${DASHBOARD_ACCOUNT.productName} · Monthly repayment`, status: 'Due soon' },
  { date: '30 Aug 2026', amount: DASHBOARD_ACCOUNT.repaymentAmount, description: `${DASHBOARD_ACCOUNT.productName} · Monthly repayment`, status: 'Paid' },
  { date: '30 Jul 2026', amount: DASHBOARD_ACCOUNT.repaymentAmount, description: `${DASHBOARD_ACCOUNT.productName} · Monthly repayment`, status: 'Paid' },
];

export default function PaymentsPage() {
  const [message, setMessage] = useState('');

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-blue-700 dark:text-blue-300">Account activity</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#14233c] dark:text-white sm:text-3xl">Payments</h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Review upcoming repayments and your recent payment history.</p>
        </div>
        <Link href="/loans" className="inline-flex min-h-10 items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 text-sm font-semibold text-slate-700 hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:bg-[#111b2e] dark:text-slate-200"><CreditCard className="h-4 w-4" />View loan details</Link>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <article className="rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 p-5 text-white shadow-[0_16px_34px_rgba(37,99,235,.18)] sm:p-6"><div className="flex items-center justify-between"><p className="text-sm font-medium text-blue-100">Next repayment</p><CalendarDays className="h-5 w-5 text-blue-100" /></div><p className="mt-5 text-3xl font-semibold tabular-nums">{formatNaira(DASHBOARD_ACCOUNT.repaymentAmount)}</p><p className="mt-2 text-xs text-blue-100">Due {DASHBOARD_ACCOUNT.nextRepaymentDate}</p><button type="button" onClick={() => setMessage('Demo only: payment processing is not connected yet.')} className="mt-5 inline-flex min-h-10 items-center gap-2 rounded-lg bg-white px-4 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">Make a payment <ArrowRight className="h-4 w-4" /></button></article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111b2e] sm:p-6"><div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500 dark:text-slate-400">Paid toward this facility</p><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Check className="h-5 w-5" /></span></div><p className="mt-5 text-3xl font-semibold tabular-nums text-[#14233c] dark:text-white">{formatNaira(DASHBOARD_ACCOUNT.originalAmount - DASHBOARD_ACCOUNT.outstandingBalance)}</p><p className="mt-2 text-xs text-slate-500 dark:text-slate-400">{DASHBOARD_ACCOUNT.repaymentsPaid} of {DASHBOARD_ACCOUNT.repaymentCount} scheduled repayments recorded</p></article>
        <article className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111b2e] sm:p-6"><div className="flex items-center justify-between"><p className="text-sm font-medium text-slate-500 dark:text-slate-400">Payment method</p><WalletCards className="h-5 w-5 text-blue-600 dark:text-blue-300" /></div><p className="mt-5 text-lg font-semibold text-[#14233c] dark:text-white">Bank transfer</p><p className="mt-2 text-xs text-slate-500 dark:text-slate-400">Payment instructions are provided with your facility.</p></article>
      </div>

      {message && <p role="status" className="rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800 dark:border-blue-900 dark:bg-blue-950/50 dark:text-blue-200">{message}</p>}
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e]">
        <div className="border-b border-slate-100 px-5 py-4 dark:border-slate-800"><h2 className="text-base font-semibold text-[#14233c] dark:text-white">Payment activity</h2><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Sample account history for your prototype workspace.</p></div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {paymentRows.map((payment) => <article key={payment.date} className="flex flex-col gap-3 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-start gap-3"><span className={`mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-lg ${payment.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'}`}>{payment.status === 'Paid' ? <Check className="h-4 w-4" /> : <Clock3 className="h-4 w-4" />}</span><div><p className="text-sm font-semibold text-slate-800 dark:text-slate-100">{payment.description}</p><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{payment.date}</p></div></div><div className="flex items-center justify-between gap-4 pl-12 sm:pl-0"><span className="text-sm font-semibold tabular-nums text-slate-800 dark:text-slate-100">{formatNaira(payment.amount)}</span><span className={`rounded-full px-2.5 py-1 text-[11px] font-semibold ${payment.status === 'Paid' ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300' : 'bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300'}`}>{payment.status}</span></div></article>)}
        </div>
      </section>
    </div>
  );
}