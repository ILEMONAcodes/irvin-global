import React from 'react';
import { MOCK_BRANCHES } from '@/data/mockData';
import Image from 'next/image';
import { MapPin, Phone, Clock, ArrowRight, Building2, ShieldCheck } from 'lucide-react';

export default function BranchesPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <a href="/">
            <Image src="/logo.png" alt="Irvin Global" width={150} height={40} className="object-contain" />
          </a>
          <a
            href="/apply"
            className="bg-blue-600 text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
          >
            Apply Online
          </a>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-4">
            <Building2 className="w-3.5 h-3.5" /> Direct In-Person Service
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900">Our Physical Branch Locations</h1>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Visit our office locations for personalized credit advisory, physical documentation submission, or face-to-face assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {MOCK_BRANCHES.map((branch, idx) => (
            <div
              key={idx}
              className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">{branch.name}</h3>

                <div className="space-y-3 pt-2 text-sm text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <span>{branch.address}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
                    <span className="font-semibold text-slate-800">{branch.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-600 shrink-0" />
                    <span>{branch.hours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-8 mt-6 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs font-semibold text-emerald-600 flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Open for Appointments
                </span>
                <a
                  href={`tel:${branch.phone}`}
                  className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs px-5 py-2.5 rounded-xl transition flex items-center gap-2"
                >
                  Call Branch <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}