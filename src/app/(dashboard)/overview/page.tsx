import React from 'react';
import { MOCK_ACTIVE_LOAN } from '@/data/mockData';
import { formatNaira } from '@/lib/utils';
import Image from 'next/image';
import { CreditCard, Calendar, Clock, CheckCircle2, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function OverviewPage() {
  const loan = MOCK_ACTIVE_LOAN;
  const progressPercent = Math.round((loan.amountPaid / loan.totalRepayable) * 100);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b border-slate-100 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Image src="/logo.png" alt="Irvin Global" width={140} height={35} className="object-contain" />
          <div className="flex items-center gap-3">
            <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
              Account Verified
            </span>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8">
        <div>
          <h1 className="text-2xl font-black text-slate-900">Welcome Back</h1>
          <p className="text-xs text-slate-500 mt-1">
            Track your active credit facilities and view repayment schedules.
          </p>
        </div>

        {/* Active Facility Card */}
        <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="flex justify-between items-start mb-6">
            <div>
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest">{loan.loanId}</span>
              <h2 className="text-2xl font-bold mt-1 text-white">{loan.productTitle}</h2>
            </div>
            <span className="bg-emerald-500/20 text-emerald-400 text-xs font-bold px-3 py-1 rounded-full border border-emerald-500/30">
              Active Facility
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 py-4 border-y border-slate-800">
            <div>
              <p className="text-xs text-slate-400">Principal Amount</p>
              <p className="text-lg font-bold text-white mt-1">{formatNaira(loan.principal)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Total Repayable</p>
              <p className="text-lg font-bold text-white mt-1">{formatNaira(loan.totalRepayable)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Amount Paid</p>
              <p className="text-lg font-bold text-emerald-400 mt-1">{formatNaira(loan.amountPaid)}</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Next Repayment Date</p>
              <p className="text-sm font-semibold text-slate-200 mt-1">{loan.nextRepaymentDate}</p>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between text-xs text-slate-400 mb-2">
              <span>Repayment Progress</span>
              <span className="font-bold text-white">{progressPercent}% Paid</span>
            </div>
            <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden">
              <div className="bg-blue-500 h-3 rounded-full transition-all duration-500" style={{ width: `${progressPercent}%` }} />
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Upcoming Installment</p>
              <p className="text-2xl font-black text-slate-900 mt-1">{formatNaira(loan.nextRepaymentAmount)}</p>
              <p className="text-xs text-slate-500 mt-1">Due on {loan.nextRepaymentDate}</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-5 py-3 rounded-xl shadow-lg shadow-blue-500/20 transition">
              Pay Now
            </button>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase">Need Additional Credit?</p>
              <p className="text-base font-bold text-slate-900 mt-1">Request Top-Up / Step-Up</p>
              <p className="text-xs text-slate-500 mt-1">Based on good repayment history</p>
            </div>
            <a
              href="/apply"
              className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-5 py-3 rounded-xl transition flex items-center gap-1"
            >
              Apply <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}