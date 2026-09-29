'use client';

import { useState } from 'react';
import { ArrowDownToLine, Check, Clock3, FileText } from 'lucide-react';
import { formatNaira } from '@/lib/utils';
import { DASHBOARD_ACCOUNT } from '@/data/dashboardAccount';

type LoanTab = 'schedule' | 'history' | 'documents';
const schedule = [
  { dueDate: '30 Jul 2026', amount: DASHBOARD_ACCOUNT.repaymentAmount, status: 'Paid' },
  { dueDate: '30 Aug 2026', amount: DASHBOARD_ACCOUNT.repaymentAmount, status: 'Paid' },
  { dueDate: DASHBOARD_ACCOUNT.nextRepaymentDate, amount: DASHBOARD_ACCOUNT.repaymentAmount, status: 'Upcoming' },
  { dueDate: '30 Oct 2026', amount: DASHBOARD_ACCOUNT.repaymentAmount, status: 'Upcoming' },
];

export default function LoanDetailsPage() {
  const [tab, setTab] = useState<LoanTab>('schedule');
  return (
    <div className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold text-blue-700 dark:text-blue-300">Loan details / SME Loan</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold text-[#14233c] dark:text-white">SME Loan</h1>
            <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">Active</span>
          </div>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">Facility #{DASHBOARD_ACCOUNT.facilityId} · Disbursed 30 June 2026</p>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-blue-50 dark:border-slate-700 dark:bg-[#111b2e] dark:text-slate-200 dark:hover:bg-slate-800">
          <ArrowDownToLine className="h-4 w-4" /> Download statement
        </button>
      </div>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-6 text-white shadow-[0_14px_35px_rgba(37,99,235,.18)]">
          <p className="text-sm text-blue-100">Original amount</p>
          <p className="mt-3 text-3xl font-semibold">{formatNaira(DASHBOARD_ACCOUNT.originalAmount)}</p>
          <p className="mt-2 text-xs text-blue-100">{DASHBOARD_ACCOUNT.productName}</p>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-[#111b2e]">
          <p className="text-sm text-slate-500">Outstanding balance</p>
          <p className="mt-3 text-3xl font-semibold text-[#14233c] dark:text-white">{formatNaira(DASHBOARD_ACCOUNT.outstandingBalance)}</p>
          <div className="mt-5 flex items-center justify-between text-xs">
            <span className="text-slate-500">Repayment progress</span>
            <strong className="text-blue-700 dark:text-blue-300">{DASHBOARD_ACCOUNT.repaymentPercent}%</strong>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
            <div className="h-full rounded-full bg-blue-600" style={{ width: `${DASHBOARD_ACCOUNT.repaymentPercent}%` }} />
          </div>
        </article>
      </section>
      <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800">
          <div>
            <h2 className="text-base font-semibold text-[#14233c] dark:text-white">Loan activity</h2>
            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Review payments and loan documents</p>
          </div>
          <div className="flex gap-1" role="tablist" aria-label="Loan activity">
            {([['schedule', 'Repayment schedule'], ['history', 'Payment history'], ['documents', 'Loan documents']] as const).map(([value, label]) => (
              <button key={value} role="tab" aria-selected={tab === value} onClick={() => setTab(value)} className={`rounded-lg px-3 py-2 text-xs font-semibold transition ${tab === value ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-blue-300'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        {tab === 'documents' ? (
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {['Loan offer letter', 'Repayment agreement', 'Disbursement confirmation'].map((document) => (
              <div key={document} className="flex items-center justify-between px-5 py-4">
                <span className="flex items-center gap-3 text-sm font-medium text-slate-700 dark:text-slate-200">
                  <FileText className="h-4 w-4 text-blue-600" />{document}
                </span>
                <button aria-label={`Download ${document}`} className="rounded-md p-2 text-slate-400 hover:bg-blue-50 hover:text-blue-700 dark:hover:bg-slate-800 dark:hover:text-blue-300">
                  <ArrowDownToLine className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-500 dark:bg-slate-900/60 dark:text-slate-400">
                <tr>
                  <th className="px-5 py-3">Due date</th>
                  <th className="px-5 py-3">Amount</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">{tab === 'schedule' ? 'Payment date' : 'Reference'}</th>
                </tr>
              </thead>
              <tbody>{schedule.map((payment, index) => (
                <tr key={payment.dueDate} className="border-t border-slate-100 dark:border-slate-800">
                  <td className="px-5 py-4 font-medium text-slate-700 dark:text-slate-200">{payment.dueDate}</td>
                  <td className="px-5 py-4 font-semibold text-[#14233c] dark:text-white">{formatNaira(payment.amount)}</td>
                  <td className="px-5 py-4">
                    {payment.status === 'Paid' ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                        <Check className="h-3.5 w-3.5" /> Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">
                        <Clock3 className="h-3.5 w-3.5" /> Upcoming
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-slate-500 dark:text-slate-400">
                    {payment.status === 'Paid' ? (tab === 'history' ? `IG-PAY-${2026}${index + 1}` : '30 Aug 2026') : '—'}
                  </td>
                </tr>
              ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}