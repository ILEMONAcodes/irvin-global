'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Check, ChevronDown } from 'lucide-react';
import { formatNaira } from '@/lib/utils';

const minAmount = 50000;
const maxAmount = 5000000;

export default function LoanCalculator() {
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(6);
  const feeRate = 0.125;
  const totalFees = amount * feeRate;
  const totalRepayment = amount + totalFees;
  const monthlyRepayment = totalRepayment / months;

  return (
    <section className="grid gap-5 rounded-xl border border-slate-200 bg-white p-5 shadow-sm md:grid-cols-[1.1fr_.9fr] md:p-7">
      <div>
        <div className="mb-7 flex items-center justify-between"><h2 className="text-lg font-semibold text-[#14233c]">Plan your repayment</h2><span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-700"><Check className="h-4 w-4" /></span></div>
        <div className="mb-7"><div className="flex items-center justify-between gap-3"><label htmlFor="loan-amount" className="text-sm font-medium text-slate-600">How much do you need?</label><span className="text-lg font-bold text-[#14233c]">{formatNaira(amount)}</span></div><input id="loan-amount" type="range" min={minAmount} max={maxAmount} step={50000} value={amount} onChange={(event) => setAmount(Number(event.target.value))} className="mt-5 w-full cursor-pointer accent-blue-600" /><div className="mt-2 flex justify-between text-xs text-slate-400"><span>{formatNaira(minAmount)}</span><span>{formatNaira(maxAmount)}</span></div></div>
        <div className="mb-7"><div className="flex items-center justify-between gap-3"><label htmlFor="repayment-period" className="text-sm font-medium text-slate-600">Repayment period</label><span className="text-lg font-bold text-[#14233c]">{months} months</span></div><input id="repayment-period" type="range" min="1" max="24" step="1" value={months} onChange={(event) => setMonths(Number(event.target.value))} className="mt-5 w-full cursor-pointer accent-blue-600" /><div className="mt-2 flex justify-between text-xs text-slate-400"><span>1 month</span><span>24 months</span></div></div>
        <label htmlFor="loan-purpose" className="mb-2 block text-sm font-medium text-slate-600">Loan type</label><div className="relative"><select id="loan-purpose" className="w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3 pr-10 text-sm text-slate-700 focus:border-blue-500 focus:outline-none"><option>Payday Credit Facility</option><option>SME Credit Facility</option><option>Payroll Credit Facility</option></select><ChevronDown className="pointer-events-none absolute right-3 top-3.5 h-4 w-4 text-slate-400" /></div>
      </div>
      <aside className="flex flex-col rounded-lg bg-[#0B132B] p-5 text-white md:p-6">
        <p className="text-xs font-semibold text-slate-300">Estimated repayment</p><p className="mt-2 text-3xl font-semibold">{formatNaira(monthlyRepayment)}<span className="ml-1 text-sm font-medium text-slate-300">/ month</span></p>
        <div className="mt-6 space-y-3 border-t border-white/10 pt-5 text-sm"><div className="flex justify-between text-slate-300"><span>Loan amount</span><span className="font-medium text-white">{formatNaira(amount)}</span></div><div className="flex justify-between text-slate-300"><span>Tenure</span><span className="font-medium text-white">{months} months</span></div><div className="flex justify-between text-slate-300"><span>Interest / fees</span><span className="font-medium text-white">{formatNaira(totalFees)}</span></div><div className="flex justify-between border-t border-white/10 pt-3 font-semibold text-white"><span>Total repayment</span><span>{formatNaira(totalRepayment)}</span></div></div>
        <Link href={`/apply?amount=${amount}&tenure=${months}`} className="mt-auto inline-flex items-center justify-center gap-2 rounded-lg bg-blue-500 px-4 py-3.5 text-sm font-bold text-white transition hover:bg-blue-400">Start application <ArrowRight className="h-4 w-4" /></Link>
      </aside>
    </section>
  );
}