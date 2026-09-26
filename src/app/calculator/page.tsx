import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import LoanCalculator from '@/components/calculator/LoanCalculator';
import { Calculator, ShieldCheck } from 'lucide-react';

export default function CalculatorPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-800">
      <Header />
      <main className="mx-auto max-w-6xl px-5 py-12 sm:px-8 sm:py-16">
        <div className="mb-9 max-w-2xl">
          <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-[#99751d]"><Calculator className="h-4 w-4" />Plan with clarity</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0B132B] sm:text-4xl">Plan your repayment.</h1>
          <p className="mt-3 leading-7 text-slate-600">Get an estimate of your monthly repayment and total cost before you apply.</p>
        </div>
        <LoanCalculator />
        <p className="mt-5 flex items-center gap-2 text-xs text-slate-500"><ShieldCheck className="h-4 w-4 text-emerald-700" />Final terms are confirmed after your application is reviewed.</p>
      </main>
      <Footer />
    </div>
  );
}
