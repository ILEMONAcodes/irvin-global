'use client';

import { useState } from 'react';
import { ArrowDownToLine, Check, Clock3, FileText } from 'lucide-react';
import { formatNaira } from '@/lib/utils';

type LoanTab = 'schedule' | 'history' | 'documents';
const schedule = [
  { dueDate: '30 Aug 2026', amount: 125000, status: 'Paid' },
  { dueDate: '30 Sep 2026', amount: 125000, status: 'Paid' },
  { dueDate: '30 Oct 2026', amount: 125000, status: 'Upcoming' },
  { dueDate: '30 Nov 2026', amount: 125000, status: 'Upcoming' },
];

export default function LoanDetailsPage() {
  const [tab, setTab] = useState<LoanTab>('schedule');
  return (
    <div className="space-y-7">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold text-[#99751d]">Loan details / SME Loan</p>
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h1 className="text-2xl font-semibold text-[#0B132B]">SME Loan</h1>
            <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-xs font-semibold text-[#1E40AF]">Active</span>
          </div>
          <p className="mt-1 text-sm text-slate-500">Facility #IG-11234 · Disbursed 30 June 2026</p>
        </div>
        <button className="inline-flex items-center gap-2 self-start rounded-lg border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50">
          <ArrowDownToLine className="h-4 w-4" /> Download statement
        </button>
      </div>
      <section className="grid gap-4 md:grid-cols-2">
        <article className="rounded-xl bg-[#0B132B] p-6 text-white">
          <p className="text-sm text-slate-300">Original amount</p>
          <p className="mt-3 text-3xl font-semibold">{formatNaira(1500000)}</p>
          <p className="mt-2 text-xs text-slate-400">SME Credit Facility</p>
        </article>
        <article className="rounded-xl border border-slate-200 bg-white p-6">
          <p className="text-sm text-slate-500">Outstanding balance</p>
          <p className="mt-3 text-3xl font-semibold text-[#0B132B]">{formatNaira(375000)}</p>
          <div className="mt-5 flex items-center justify-between text-xs">
            <span className="text-slate-500">Repayment progress</span>
            <strong className="text-[#0B132B]">75%</strong>
          </div>
          <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-100">
            <div className="h-full w-3/4 rounded-full bg-[#D4AF37]" />
          </div>
        </article>
      </section>
      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4">
          <div>
            <h2 className="text-base font-semibold text-[#0B132B]">Loan activity</h2>
            <p className="mt-1 text-xs text-slate-500">Review payments and loan documents</p>
          </div>
          <div className="flex gap-1" role="tablist" aria-label="Loan activity">
            {([['schedule', 'Repayment schedule'], ['history', 'Payment history'], ['documents', 'Loan documents']] as const).map(([value, label]) => (
              <button key={value} role="tab" aria-selected={tab === value} onClick={() => setTab(value)} className={`rounded-md px-3 py-2 text-xs font-semibold transition ${tab === value ? 'bg-[#0B132B] text-white' : 'text-slate-500 hover:bg-slate-100'}`}>
                {label}
              </button>
            ))}
          </div>
        </div>
        {tab === 'documents' ? (
          <div className="divide-y divide-slate-100">
            {['Loan offer letter', 'Repayment agreement', 'Disbursement confirmation'].map((document) => (
              <div key={document} className="flex items-center justify-between px-5 py-4">
                <span className="flex items-center gap-3 text-sm font-medium text-slate-700">
                  <FileText className="h-4 w-4 text-[#99751d]" />{document}
                </span>
                <button aria-label={`Download ${document}`} className="rounded-md p-2 text-slate-400 hover:bg-slate-100 hover:text-[#0B132B]">
                  <ArrowDownToLine className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[550px] text-left text-sm">
              <thead className="bg-slate-50 text-xs font-semibold text-slate-500">
                <tr>
                  <th className="px-5 py-3">Due date</th>
                  <th className="px-5 py-3">Amount</th>
                  <th className="px-5 py-3">Status</th>
                  <th className="px-5 py-3">{tab === 'schedule' ? 'Payment date' : 'Reference'}</th>
                </tr>
              </thead>
              <tbody>{schedule.map((payment, index) => (
                <tr key={payment.dueDate} className="border-t border-slate-100">
                  <td className="px-5 py-4 font-medium text-slate-700">{payment.dueDate}</td>
                  <td className="px-5 py-4 font-semibold text-[#0B132B]">{formatNaira(payment.amount)}</td>
                  <td className="px-5 py-4">
                    {payment.status === 'Paid' ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#DCFCE7] px-2.5 py-1 text-xs font-semibold text-[#166534]">
                        <Check className="h-3.5 w-3.5" /> Paid
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#EFF6FF] px-2.5 py-1 text-xs font-semibold text-[#1E40AF]">
                        <Clock3 className="h-3.5 w-3.5" /> Upcoming
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-4 text-slate-500">
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