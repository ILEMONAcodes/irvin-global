'use client';

import React, { useState } from 'react';
import { ApplicationState, LoanType } from '@/types';
import { LOAN_PRODUCTS } from '@/data/mockData';
import { formatNaira } from '@/lib/utils';
import { Check, ArrowRight, ArrowLeft, Upload, ShieldCheck, User, Briefcase, FileText } from 'lucide-react';

export default function ApplicationForm() {
  const [formData, setFormData] = useState<ApplicationState>({
    step: 1,
    loanType: 'payday',
    requestedAmount: 500000,
    tenureDays: 90,
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      bvn: '',
    },
    employmentInfo: {
      employerOrBusiness: '',
      monthlyIncome: 350000,
      workAddress: '',
    },
    documents: {
      idCardUploaded: false,
      bankStatementUploaded: false,
    },
    status: 'draft',
  });

  const [submitted, setSubmitted] = useState(false);

  const nextStep = () => setFormData((prev) => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setFormData((prev) => ({ ...prev, step: prev.step - 1 }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-xl text-center max-w-2xl mx-auto my-12">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 stroke-[3]" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">Application Submitted!</h2>
        <p className="text-slate-600 mb-6">
          Your request for <strong className="text-slate-900">{formatNaira(formData.requestedAmount)}</strong> under the <strong className="text-slate-900">{LOAN_PRODUCTS[formData.loanType].title}</strong> is now under assessment.
        </p>
        <div className="bg-slate-50 p-4 rounded-2xl border border-slate-100 text-left text-sm space-y-2 mb-8">
          <div className="flex justify-between text-slate-600">
            <span>Reference Code:</span>
            <span className="font-mono font-bold text-slate-900">IRV-2026-9901</span>
          </div>
          <div className="flex justify-between text-slate-600">
            <span>Status:</span>
            <span className="text-amber-600 font-bold">Document Verification</span>
          </div>
        </div>
        <a
          href="/overview"
          className="inline-flex items-center gap-2 bg-blue-600 text-white font-bold px-8 py-3.5 rounded-2xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
        >
          Go to Customer Dashboard <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-6 md:p-10 max-w-3xl mx-auto">
      {/* Step Indicators */}
      <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-100">
        {[
          { step: 1, label: 'Loan Details', icon: FileText },
          { step: 2, label: 'Personal Info', icon: User },
          { step: 3, label: 'Employment', icon: Briefcase },
          { step: 4, label: 'Verification', icon: ShieldCheck },
        ].map((s) => {
          const Icon = s.icon;
          const active = formData.step === s.step;
          const completed = formData.step > s.step;
          return (
            <div key={s.step} className="flex flex-col items-center gap-1.5">
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm transition-all ${
                  completed
                    ? 'bg-emerald-600 text-white'
                    : active
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30'
                    : 'bg-slate-100 text-slate-400'
                }`}
              >
                {completed ? <Check className="w-5 h-5" /> : <Icon className="w-5 h-5" />}
              </div>
              <span className={`text-[11px] font-semibold hidden sm:block ${active ? 'text-slate-900' : 'text-slate-400'}`}>
                {s.label}
              </span>
            </div>
          );
        })}
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Loan Facility Selection */}
        {formData.step === 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Select Facility Type</h3>
            <div className="grid grid-cols-2 gap-3">
              {(Object.keys(LOAN_PRODUCTS) as LoanType[]).map((type) => (
                <button
                  type="button"
                  key={type}
                  onClick={() => setFormData((p) => ({ ...p, loanType: type }))}
                  className={`p-4 rounded-2xl border text-left transition ${
                    formData.loanType === type
                      ? 'border-blue-600 bg-blue-50/50 shadow-sm'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <p className="font-bold text-slate-900 text-sm">{LOAN_PRODUCTS[type].title}</p>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{LOAN_PRODUCTS[type].description}</p>
                </button>
              ))}
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-500 uppercase mb-2">Requested Amount (NGN)</label>
              <input
                type="number"
                value={formData.requestedAmount}
                onChange={(e) => setFormData((p) => ({ ...p, requestedAmount: Number(e.target.value) }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-bold text-slate-900"
              />
            </div>
          </div>
        )}

        {/* Step 2: Personal Information */}
        {formData.step === 2 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Personal Information</h3>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Full Legal Name</label>
              <input
                type="text"
                placeholder="e.g. Ilemona Sule"
                required
                value={formData.personalInfo.fullName}
                onChange={(e) => setFormData((p) => ({ ...p, personalInfo: { ...p.personalInfo, fullName: e.target.value } }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="name@company.com"
                  required
                  value={formData.personalInfo.email}
                  onChange={(e) => setFormData((p) => ({ ...p, personalInfo: { ...p.personalInfo, email: e.target.value } }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+234 800 000 0000"
                  required
                  value={formData.personalInfo.phone}
                  onChange={(e) => setFormData((p) => ({ ...p, personalInfo: { ...p.personalInfo, phone: e.target.value } }))}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Bank Verification Number (BVN)</label>
              <input
                type="text"
                maxLength={11}
                placeholder="22100000000"
                required
                value={formData.personalInfo.bvn}
                onChange={(e) => setFormData((p) => ({ ...p, personalInfo: { ...p.personalInfo, bvn: e.target.value } }))}
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-mono tracking-widest"
              />
            </div>
          </div>
        )}

        {/* Step 3: Employment Details */}
        {formData.step === 3 && (
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-slate-900">Employment & Financial Profile</h3>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Employer / Business Name</label>
              <input
                type="text"
                placeholder="Federal Ministry / Tech Firm / Business Name"
                required
                value={formData.employmentInfo.employerOrBusiness}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    employmentInfo: { ...p.employmentInfo, employerOrBusiness: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Estimated Net Monthly Income (NGN)</label>
              <input
                type="number"
                value={formData.employmentInfo.monthlyIncome}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    employmentInfo: { ...p.employmentInfo, monthlyIncome: Number(e.target.value) },
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 font-bold"
              />
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-600 mb-1">Work Address in Abuja / Nigeria</label>
              <textarea
                rows={2}
                placeholder="Office or business premises address"
                value={formData.employmentInfo.workAddress}
                onChange={(e) =>
                  setFormData((p) => ({
                    ...p,
                    employmentInfo: { ...p.employmentInfo, workAddress: e.target.value },
                  }))
                }
                className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600"
              />
            </div>
          </div>
        )}

        {/* Step 4: Verification & Document Upload */}
        {formData.step === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-900">Document Upload</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() =>
                  setFormData((p) => ({ ...p, documents: { ...p.documents, idCardUploaded: !p.documents.idCardUploaded } }))
                }
                className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition ${
                  formData.documents.idCardUploaded ? 'border-emerald-500 bg-emerald-50/40' : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <p className="font-bold text-xs text-slate-800">Valid ID Card</p>
                <p className="text-[11px] text-slate-500 mt-1">NIN, Passport, or Voters Card</p>
                <span className="inline-block mt-3 text-[11px] font-semibold text-blue-600">
                  {formData.documents.idCardUploaded ? '✓ Uploaded' : 'Click to Upload'}
                </span>
              </div>

              <div
                onClick={() =>
                  setFormData((p) => ({
                    ...p,
                    documents: { ...p.documents, bankStatementUploaded: !p.documents.bankStatementUploaded },
                  }))
                }
                className={`p-6 border-2 border-dashed rounded-2xl text-center cursor-pointer transition ${
                  formData.documents.bankStatementUploaded
                    ? 'border-emerald-500 bg-emerald-50/40'
                    : 'border-slate-200 hover:border-slate-300'
                }`}
              >
                <Upload className="w-6 h-6 text-slate-400 mx-auto mb-2" />
                <p className="font-bold text-xs text-slate-800">6-Month Bank Statement</p>
                <p className="text-[11px] text-slate-500 mt-1">PDF version from bank app</p>
                <span className="inline-block mt-3 text-[11px] font-semibold text-blue-600">
                  {formData.documents.bankStatementUploaded ? '✓ Uploaded' : 'Click to Upload'}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Action Controls */}
        <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100">
          {formData.step > 1 ? (
            <button
              type="button"
              onClick={prevStep}
              className="px-5 py-2.5 rounded-xl border border-slate-200 text-slate-600 font-semibold text-xs flex items-center gap-1.5 hover:bg-slate-50 transition"
            >
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          ) : (
            <div />
          )}

          {formData.step < 4 ? (
            <button
              type="button"
              onClick={nextStep}
              className="bg-blue-600 text-white px-6 py-3 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
            >
              Continue <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              className="bg-emerald-600 text-white px-8 py-3.5 rounded-xl font-bold text-xs flex items-center gap-1.5 shadow-lg shadow-emerald-500/20 hover:bg-emerald-700 transition"
            >
              Submit Facility Request <Check className="w-4 h-4" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
}