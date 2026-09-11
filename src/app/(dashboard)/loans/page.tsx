import React from 'react';
import Header from '@/components/common/Header';
import { MOCK_ACTIVE_LOAN } from '@/data/mockData';
import { formatNaira } from '@/lib/utils';
import { CreditCard, Calendar, CheckCircle2, Clock, AlertCircle, Download, ArrowUpRight } from 'lucide-react';

export default function LoanDetailsPage() {
  const loan = MOCK_ACTIVE_LOAN;

  const schedule = [
    { month: 'Month 1', dueDate: 'July 28, 2026', amount: 180000, status: 'Paid', datePaid: 'July 26, 2026' },
    { month: 'Month 2', dueDate: 'August 28, 2026', amount: 180000, status: 'Paid', datePaid: 'August 27, 2026' },
    { month: 'Month 3', dueDate: 'September 28, 2026', amount: 180000, status: 'Upcoming', datePaid: '-' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
              Facility ID: {loan.loanId}
            </span>
            <h1 className="text-3xl font-black text-slate-900 mt-2">{loan.productTitle}</h1>
          </div>
          <button className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-3 rounded-xl flex items-center gap-2 transition self-start sm:self-auto">
            <Download className="w-4 h-4" /> Download Repayment Schedule (PDF)
          </button>
        </div>

        {/* Repayment Breakdown Table */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden">
          <div className="p-6 border-b border-slate-100 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900">Repayment Amortization Schedule</h2>
            <span className="text-xs font-semibold text-slate-500">3 Installments Total</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-400 font-bold uppercase tracking-wider border-b border-slate-100">
                <tr>
                  <th className="p-4 pl-6">Cycle</th>
                  <th className="p-4">Due Date</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Payment Date</th>
                  <th className="p-4 pr-6">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium text-slate-700">
                {schedule.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition">
                    <td className="p-4 pl-6 font-bold text-slate-900">{item.month}</td>
                    <td className="p-4">{item.dueDate}</td>
                    <td className="p-4 font-bold text-slate-900">{formatNaira(item.amount)}</td>
                    <td className="p-4 text-slate-500">{item.datePaid}</td>
                    <td className="p-4 pr-6">
                      {item.status === 'Paid' ? (
                        <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 font-bold px-2.5 py-1 rounded-full border border-emerald-100">
                          <CheckCircle2 className="w-3.5 h-3.5" /> Settled
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 font-bold px-2.5 py-1 rounded-full border border-amber-100">
                          <Clock className="w-3.5 h-3.5" /> Due Soon
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Direct Repayment Banking Details */}
        <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-2xl grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-3">
            <span className="text-xs font-bold uppercase tracking-widest text-blue-300">Bank Transfer Repayment</span>
            <h3 className="text-2xl font-black">Dedicated Repayment Account</h3>
            <p className="text-xs text-blue-200 leading-relaxed">
              You can settle installments directly via bank transfer using your automated virtual dedicated account number.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/10 space-y-3 text-xs">
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-blue-200">Bank Name:</span>
              <strong className="text-white font-bold">Providus Bank / Wema Bank</strong>
            </div>
            <div className="flex justify-between border-b border-white/10 pb-2">
              <span className="text-blue-200">Account Number:</span>
              <strong className="text-emerald-400 font-mono text-sm font-bold">9920184710</strong>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-200">Account Name:</span>
              <strong className="text-white font-bold">Irvin Global - Ref IRV-8842</strong>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}