'use client';

import React, { useState } from 'react';
import { LOAN_PRODUCTS } from '@/data/mockData';
import { LoanType } from '@/types';
import { formatNaira } from '@/lib/utils';
import { Calculator, ArrowRight, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';

export default function LoanCalculator() {
  const [selectedType, setSelectedType] = useState<LoanType>('payday');
  const product = LOAN_PRODUCTS[selectedType];

  const [amount, setAmount] = useState<number>(500000);
  const [tenureDays, setTenureDays] = useState<number>(90);

  const months = Math.ceil(tenureDays / 30);
  const totalInterest = amount * product.monthlyRate * months;
  const totalRepayable = amount + totalInterest;
  const monthlyRepayment = totalRepayable / months;

  return (
    <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 md:p-8 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl pointer-events-none" />

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2.5">
          <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
            <Calculator className="w-5 h-5" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 tracking-tight">Loan Calculator</h3>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 flex items-center gap-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Transparent Rates
        </span>
      </div>

      {/* Product Selector */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
        {(Object.keys(LOAN_PRODUCTS) as LoanType[]).map((type) => (
          <button
            key={type}
            onClick={() => {
              setSelectedType(type);
              const p = LOAN_PRODUCTS[type];
              setAmount(Math.min(amount, p.maxAmount));
              setTenureDays(p.defaultTenureDays);
            }}
            className={`py-2.5 px-3 text-xs font-semibold rounded-xl capitalize transition-all duration-200 ${
              selectedType === type
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200/80'
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      <div className="text-xs text-slate-500 mb-6 bg-slate-50 p-3.5 rounded-xl border border-slate-100 flex items-center justify-between">
        <span className="text-slate-600 font-medium">Target Audience:</span>
        <strong className="text-slate-900 font-semibold">{product.targetAudience}</strong>
      </div>

      {/* Amount Slider */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Loan Amount
          </label>
          <span className="text-2xl font-black text-blue-600 tracking-tight">
            {formatNaira(amount)}
          </span>
        </div>
        <input
          type="range"
          min={product.minAmount}
          max={product.maxAmount}
          step={50000}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-blue-600"
        />
        <div className="flex justify-between text-[11px] font-medium text-slate-400 mt-1.5">
          <span>{formatNaira(product.minAmount)}</span>
          <span>{formatNaira(product.maxAmount)}</span>
        </div>
      </div>

      {/* Tenure Selection */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <label className="text-xs font-bold uppercase tracking-wider text-slate-400">
            Tenure Duration
          </label>
          <span className="text-xs font-bold text-slate-700 flex items-center gap-1">
            <Clock className="w-3.5 h-3.5 text-blue-500" /> {tenureDays} Days ({months} Months)
          </span>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {[30, 90, 180, 273].map((days) => (
            <button
              key={days}
              onClick={() => setTenureDays(days)}
              className={`py-2 text-xs font-bold rounded-xl border transition-all ${
                tenureDays === days
                  ? 'border-blue-600 bg-blue-50/50 text-blue-700 shadow-sm'
                  : 'border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              {days}d
            </button>
          ))}
        </div>
      </div>

      {/* Repayment Breakdown */}
      <div className="bg-slate-900 text-white rounded-2xl p-5 mb-6 space-y-3 shadow-inner">
        <div className="flex justify-between text-xs text-slate-400">
          <span>Monthly Installment</span>
          <span className="text-white font-semibold">{formatNaira(monthlyRepayment)}/mo</span>
        </div>
        <div className="flex justify-between text-xs text-slate-400">
          <span>Estimated Total Interest</span>
          <span className="text-white font-semibold">{formatNaira(totalInterest)}</span>
        </div>
        <div className="border-t border-slate-800 pt-3 flex justify-between items-center">
          <span className="text-xs font-semibold text-slate-300">Total Repayable</span>
          <span className="text-xl font-black text-emerald-400">{formatNaira(totalRepayable)}</span>
        </div>
      </div>

      <a
        href={`/apply?product=${selectedType}&amount=${amount}&tenure=${tenureDays}`}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-4 rounded-2xl font-bold flex items-center justify-center gap-2 shadow-xl shadow-blue-500/25 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
      >
        Apply For This Loan <ArrowRight className="w-4 h-4" />
      </a>
    </div>
  );
}