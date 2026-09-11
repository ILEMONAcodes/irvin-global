import React from 'react';
import LoanCalculator from '@/components/calculator/LoanCalculator';
import Footer from '@/components/common/Footer';
import Image from 'next/image';
import { 
  Zap, 
  ShieldCheck, 
  Building2, 
  TrendingUp, 
  Smartphone, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Lock 
} from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white flex flex-col justify-between">
      <div>
        {/* Navigation */}
        <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.png" 
                alt="Irvin Global Logo" 
                width={160} 
                height={45} 
                className="object-contain"
                priority 
              />
            </div>

            <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
              <a href="#calculator" className="hover:text-blue-600 transition">Calculator</a>
              <a href="#products" className="hover:text-blue-600 transition">Loan Products</a>
              <a href="/branches" className="hover:text-blue-600 transition">Branches</a>
              <a href="/investments" className="hover:text-blue-600 transition">Investments</a>
            </div>

            <div className="flex items-center gap-3">
              <a href="/login" className="text-sm font-semibold text-slate-700 hover:text-blue-600 px-4 py-2">
                Sign In
              </a>
              <a 
                href="/apply" 
                className="bg-blue-600 text-white text-sm font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
              >
                Get Started
              </a>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="pt-12 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold">
              <Zap className="w-3.5 h-3.5 text-blue-600 fill-blue-600" />
              <span>Digital Speed meets Physical Branch Security</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 leading-[1.1] tracking-tight">
              Fast Credit & SME Financing <span className="text-blue-600">Built Around You.</span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg max-w-xl leading-relaxed">
              Discover tailored financial options, track your approvals in real time, and manage repayments with complete transparency.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a 
                href="/apply" 
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-2xl shadow-xl shadow-blue-500/25 flex items-center gap-2 transition"
              >
                Apply Online <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href="/branches" 
                className="bg-white hover:bg-slate-100 border border-slate-200 text-slate-700 font-bold px-7 py-3.5 rounded-2xl flex items-center gap-2 transition"
              >
                <Building2 className="w-4 h-4 text-blue-600" /> Visit Maitama HQ
              </a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200/80">
              <div>
                <p className="text-2xl font-black text-slate-900">₦15M+</p>
                <p className="text-xs font-medium text-slate-500">Max Facility Limit</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">24 Hours</p>
                <p className="text-xs font-medium text-slate-500">Fast Assessment</p>
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900">100%</p>
                <p className="text-xs font-medium text-slate-500">Cost Transparency</p>
              </div>
            </div>
          </div>

          {/* Loan Calculator */}
          <div className="lg:col-span-6" id="calculator">
            <LoanCalculator />
          </div>
        </section>

        {/* Feature Section: Physical + Digital Advantage */}
        <section className="py-20 bg-white border-y border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-black text-slate-900 mb-4">
                Why Borrowers Trust Irvin Global
              </h2>
              <p className="text-slate-600">
                We combine the speed of modern fintech with the security of dedicated physical branch offices across Nigeria.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-md shadow-blue-200">
                  <Smartphone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Seamless Digital Hub</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Apply in minutes, upload documents digitally, and view your repayment schedule live on your customer dashboard.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-md shadow-emerald-200">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Physical Branch Access</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Need to speak with a financial advisor? Walk into our Maitama office or regional branches anytime for human support.
                </p>
              </div>

              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 space-y-4">
                <div className="w-12 h-12 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-bold shadow-md shadow-purple-200">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Borrow & Invest</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Grow your business with customized loans or earn competitive returns on fixed investments under one financial ecosystem.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}