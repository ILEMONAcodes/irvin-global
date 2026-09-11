'use client';

import React, { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { formatNaira } from '@/lib/utils';
import { Search, CheckCircle2, Clock, FileText, ArrowRight, ShieldCheck, AlertCircle } from 'lucide-react';

export default function StatusTrackerPage() {
  const [refId, setRefId] = useState('');
  const [searched, setSearched] = useState(false);

  // Mock application record
  const mockApplication = {
    id: 'APP-2026-904',
    applicantName: 'Ilemona Sule',
    productName: 'Payday Salary Loan',
    amount: 500000,
    tenureMonths: 3,
    status: 'In Review',
    submittedAt: 'September 10, 2026',
    estimatedDisbursement: 'September 12, 2026',
    steps: [
      { name: 'Application Submitted', completed: true, date: 'Sep 10, 09:15 AM' },
      { name: 'BVN & Credit Check Passed', completed: true, date: 'Sep 10, 09:18 AM' },
      { name: 'Underwriting Review', completed: false, current: true, date: 'In Progress' },
      { name: 'Offer Letter Signing', completed: false, date: 'Pending' },
      { name: 'Direct Bank Disbursement', completed: false, date: 'Pending' },
    ],
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (refId.trim()) {
      setSearched(true);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between">
      <div>
        <Header />

        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4 border border-blue-100">
              <Clock className="w-3.5 h-3.5" /> Real-Time Application Tracking
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Track Loan Status</h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              Enter your Application Reference ID (e.g., APP-2026-904) to view your live assessment progress and approval state.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-10">
            <div className="bg-white p-2 rounded-2xl border border-slate-200 shadow-lg flex items-center gap-2">
              <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
              <input
                type="text"
                value={refId}
                onChange={(e) => setRefId(e.target.value)}
                placeholder="Enter Reference ID (e.g. APP-2026-904)"
                className="w-full py-2.5 px-2 text-sm bg-transparent border-none focus:outline-none text-slate-900 font-medium"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl transition shadow-md shadow-blue-500/20 shrink-0"
              >
                Track Status
              </button>
            </div>
          </form>

          {/* Status Results Card */}
          {searched && (
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl p-6 sm:p-8 space-y-8 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6">
                <div>
                  <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                    {mockApplication.id}
                  </span>
                  <h2 className="text-2xl font-black text-slate-900 mt-2">{mockApplication.productName}</h2>
                  <p className="text-xs text-slate-500 mt-0.5">Submitted on {mockApplication.submittedAt}</p>
                </div>

                <div className="bg-amber-50 border border-amber-100 text-amber-800 px-4 py-2.5 rounded-2xl flex items-center gap-2 text-xs font-bold self-start sm:self-auto">
                  <Clock className="w-4 h-4 text-amber-600" /> Status: {mockApplication.status}
                </div>
              </div>

              {/* Facility Key Numbers */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-100 text-xs">
                <div>
                  <p className="text-slate-400 font-semibold">Requested Amount</p>
                  <p className="text-base font-black text-slate-900 mt-0.5">{formatNaira(mockApplication.amount)}</p>
                </div>
                <div>
                  <p className="text-slate-400 font-semibold">Tenure</p>
                  <p className="text-base font-black text-slate-900 mt-0.5">{mockApplication.tenureMonths} Months</p>
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <p className="text-slate-400 font-semibold">Est. Payout</p>
                  <p className="text-base font-black text-emerald-600 mt-0.5">{mockApplication.estimatedDisbursement}</p>
                </div>
              </div>

              {/* Progress Stepper */}
              <div className="space-y-4">
                <h3 className="text-sm font-bold text-slate-900">Assessment Milestone Tracker</h3>
                <div className="space-y-3">
                  {mockApplication.steps.map((step, idx) => (
                    <div
                      key={idx}
                      className={`flex items-center gap-3 p-3.5 rounded-2xl border text-xs ${
                        step.completed
                          ? 'bg-emerald-50/50 border-emerald-100 text-emerald-950'
                          : step.current
                          ? 'bg-blue-50/50 border-blue-200 text-blue-950 font-bold'
                          : 'bg-slate-50 border-slate-100 text-slate-400'
                      }`}
                    >
                      {step.completed ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                      ) : step.current ? (
                        <Clock className="w-4 h-4 text-blue-600 animate-spin shrink-0" />
                      ) : (
                        <div className="w-4 h-4 rounded-full border border-slate-300 shrink-0" />
                      )}

                      <div className="flex-1 flex justify-between items-center">
                        <span>{step.name}</span>
                        <span className="text-[10px] font-mono text-slate-400">{step.date}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}