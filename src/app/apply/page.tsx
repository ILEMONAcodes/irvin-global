'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/common/Footer';
import { 
  User, 
  CreditCard, 
  Briefcase, 
  Building, 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft, 
  Lock, 
  ShieldCheck 
} from 'lucide-react';

export default function ApplyPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1: Account & Bio
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    
    // Step 2: Identification & KYC
    bvn: '',
    nin: '',
    dob: '',
    address: '',
    
    // Step 3: Employment & Bank Info
    employmentType: 'Salaried Employee',
    employerName: '',
    monthlyIncome: '',
    bankName: '',
    accountNumber: '',

    // Step 4: Facility Specs
    loanProduct: 'Payday Loan',
    amount: '500000',
    tenureMonths: '3'
  });

  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between font-sans">
      <div>
        {/* Navigation */}
        <nav className="bg-white border-b border-slate-100 py-4 px-4 sm:px-8">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <Link href="/">
              <Image src="/logo.png" alt="Irvin Global Logo" width={140} height={40} className="object-contain" priority />
            </Link>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> CBN Regulated Micro-Credit
            </div>
          </div>
        </nav>

        <main className="max-w-3xl mx-auto px-4 py-12">
          {!submitted ? (
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl p-6 sm:p-10">
              {/* Stepper Header */}
              <div className="mb-8 border-b border-slate-100 pb-6">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                    Step {step} of 4
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    {step === 1 && 'Personal Account Setup'}
                    {step === 2 && 'Identity Verification (KYC)'}
                    {step === 3 && 'Employment & Financial Details'}
                    {step === 4 && 'Loan Facility Selection'}
                  </span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-blue-600 h-full transition-all duration-300"
                    style={{ width: `${(step / 4) * 100}%` }}
                  />
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal & Account Setup */}
                {step === 1 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-xl font-black text-slate-900">Create Borrower Profile</h2>
                      <p className="text-xs text-slate-500 mt-1">Setup your access portal details to manage your facilities.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">First Name</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.firstName} 
                          onChange={(e) => updateField('firstName', e.target.value)}
                          placeholder="Ilemona" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Last Name</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.lastName} 
                          onChange={(e) => updateField('lastName', e.target.value)}
                          placeholder="Sule" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                        <input 
                          type="email" 
                          required 
                          value={formData.email} 
                          onChange={(e) => updateField('email', e.target.value)}
                          placeholder="ilemona@example.com" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number</label>
                        <input 
                          type="tel" 
                          required 
                          value={formData.phone} 
                          onChange={(e) => updateField('phone', e.target.value)}
                          placeholder="08012345678" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Password</label>
                      <input 
                        type="password" 
                        required 
                        value={formData.password} 
                        onChange={(e) => updateField('password', e.target.value)}
                        placeholder="••••••••••••" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                      />
                    </div>
                  </div>
                )}

                {/* Step 2: Identification & KYC */}
                {step === 2 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-xl font-black text-slate-900">Identity Verification</h2>
                      <p className="text-xs text-slate-500 mt-1">Required by central banking standards for fast credit evaluation.</p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Bank Verification Number (BVN)</label>
                        <input 
                          type="text" 
                          required 
                          maxLength={11}
                          value={formData.bvn} 
                          onChange={(e) => updateField('bvn', e.target.value)}
                          placeholder="22123456789" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-mono"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">National Identity Number (NIN)</label>
                        <input 
                          type="text" 
                          required 
                          maxLength={11}
                          value={formData.nin} 
                          onChange={(e) => updateField('nin', e.target.value)}
                          placeholder="10987654321" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-mono"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Date of Birth</label>
                      <input 
                        type="date" 
                        required 
                        value={formData.dob} 
                        onChange={(e) => updateField('dob', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Residential Address in Nigeria</label>
                      <input 
                        type="text" 
                        required 
                        value={formData.address} 
                        onChange={(e) => updateField('address', e.target.value)}
                        placeholder="Maitama District, Abuja" 
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                      />
                    </div>
                  </div>
                )}

                {/* Step 3: Employment & Bank Details */}
                {step === 3 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-xl font-black text-slate-900">Employment & Bank Information</h2>
                      <p className="text-xs text-slate-500 mt-1">Where should we disburse your loan upon approval?</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Employment Type</label>
                      <select 
                        value={formData.employmentType} 
                        onChange={(e) => updateField('employmentType', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none"
                      >
                        <option value="Salaried Employee">Salaried Employee (Private Sector)</option>
                        <option value="Public Servant">Public Servant / Civil Service</option>
                        <option value="Business Owner">SME / Business Owner</option>
                        <option value="Self-Employed">Self-Employed Consultant</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Employer / Company Name</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.employerName} 
                          onChange={(e) => updateField('employerName', e.target.value)}
                          placeholder="e.g. DSHub Technologies" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Monthly Net Income (₦)</label>
                        <input 
                          type="number" 
                          required 
                          value={formData.monthlyIncome} 
                          onChange={(e) => updateField('monthlyIncome', e.target.value)}
                          placeholder="450000" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Disbursement Bank</label>
                        <input 
                          type="text" 
                          required 
                          value={formData.bankName} 
                          onChange={(e) => updateField('bankName', e.target.value)}
                          placeholder="e.g. GTBank / Zenith / Kuda" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">10-Digit NUBAN Account</label>
                        <input 
                          type="text" 
                          required 
                          maxLength={10}
                          value={formData.accountNumber} 
                          onChange={(e) => updateField('accountNumber', e.target.value)}
                          placeholder="0123456789" 
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 font-mono"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 4: Facility Specs */}
                {step === 4 && (
                  <div className="space-y-5">
                    <div>
                      <h2 className="text-xl font-black text-slate-900">Select Credit Product</h2>
                      <p className="text-xs text-slate-500 mt-1">Configure your loan amount and desired repayment duration.</p>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">Product Facility</label>
                      <select 
                        value={formData.loanProduct} 
                        onChange={(e) => updateField('loanProduct', e.target.value)}
                        className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none"
                      >
                        <option value="Payday Loan">Payday Fast Loan (up to ₦2M)</option>
                        <option value="Payroll Loan">Public Sector Payroll Loan (up to ₦5M)</option>
                        <option value="SME Business Credit">SME Working Capital Line (up to ₦15M)</option>
                      </select>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Requested Amount (₦)</label>
                        <input 
                          type="number" 
                          required 
                          value={formData.amount} 
                          onChange={(e) => updateField('amount', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-blue-600 focus:outline-none"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">Tenure Duration</label>
                        <select 
                          value={formData.tenureMonths} 
                          onChange={(e) => updateField('tenureMonths', e.target.value)}
                          className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold focus:outline-none"
                        >
                          <option value="1">1 Month (30 Days)</option>
                          <option value="3">3 Months (90 Days)</option>
                          <option value="6">6 Months (180 Days)</option>
                          <option value="12">12 Months (365 Days)</option>
                        </select>
                      </div>
                    </div>

                    <div className="p-4 bg-blue-50 border border-blue-100 rounded-2xl text-xs text-blue-900 space-y-2">
                      <div className="flex justify-between font-bold">
                        <span>Estimated Interest (5% p.m.):</span>
                        <span>₦{(Number(formData.amount) * 0.05 * Number(formData.tenureMonths)).toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between font-black text-slate-900 pt-2 border-t border-blue-200">
                        <span>Total Repayable:</span>
                        <span>₦{(Number(formData.amount) * (1 + 0.05 * Number(formData.tenureMonths))).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* Form Controls */}
                <div className="flex justify-between items-center pt-8 mt-8 border-t border-slate-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 flex items-center gap-2 transition"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" /> Back
                    </button>
                  ) : <div />}

                  {step < 4 ? (
                    <button
                      type="button"
                      onClick={() => setStep(step + 1)}
                      className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md shadow-blue-500/20 flex items-center gap-2 transition"
                    >
                      Continue <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-8 py-3 rounded-xl shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition"
                    >
                      Submit Application <CheckCircle className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </form>
            </div>
          ) : (
            <div className="bg-white rounded-3xl border border-slate-200/80 shadow-2xl p-8 sm:p-12 text-center space-y-6">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle className="w-10 h-10" />
              </div>
              <h2 className="text-2xl font-black text-slate-900">Application Submitted!</h2>
              <p className="text-xs text-slate-600 max-w-md mx-auto leading-relaxed">
                Thank you <span className="font-bold text-slate-900">{formData.firstName}</span>. Your borrower account has been initialized and assigned Reference ID <span className="font-mono font-bold text-blue-600">APP-2026-904</span>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                <Link 
                  href="/status" 
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs px-6 py-3 rounded-xl shadow-md transition"
                >
                  Track Application Status
                </Link>
                <Link 
                  href="/overview" 
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs px-6 py-3 rounded-xl transition"
                >
                  Go to Borrower Dashboard
                </Link>
              </div>
            </div>
          )}
        </main>
      </div>

      <Footer />
    </div>
  );
}