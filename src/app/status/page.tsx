'use client';

import { useState } from 'react';
import DashboardShell from '@/components/dashboard/DashboardShell';
import { Check, Circle, Clock3, Search } from 'lucide-react';

const steps = [
  { title: 'Application received', date: '12 Sep 2026, 10:24 AM', status: 'complete' },
  { title: 'Documents verified', date: '12 Sep 2026, 2:15 PM', status: 'complete' },
  { title: 'Credit assessment', date: 'In progress', status: 'current' },
  { title: 'Decision pending', date: 'Pending', status: 'pending' },
  { title: 'Disbursement', date: 'Pending', status: 'pending' },
];

export default function StatusTrackerPage() {
  const [reference, setReference] = useState('IG-20481');
  const [searched, setSearched] = useState('IG-20481');
  const [notFound, setNotFound] = useState(false);
  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const found = ['IG-20481', '#IG-20481', 'APP-2026-904'].includes(reference.trim().toUpperCase());
    setNotFound(!found);
    setSearched(found ? 'IG-20481' : '');
  };
  return (
    <DashboardShell>
      <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-[#99751d]">
            Application tracker
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-[#0B132B]">Track your application.</h1>
          <p className="mt-2 text-sm leading-6 text-slate-600">
            Your application progress, clearly laid out.
          </p>
        </div>
        <form onSubmit={handleSearch} className="mb-6 flex gap-2 rounded-xl border border-slate-200 bg-white p-2 shadow-sm">
          <label htmlFor="application-reference" className="sr-only">
            Application reference
          </label>
          <Search className="ml-2 mt-2.5 h-4 w-4 shrink-0 text-slate-400" />
          <input
            id="application-reference"
            value={reference}
            onChange={(event) => setReference(event.target.value)}
            placeholder="Application reference"
            className="min-w-0 flex-1 border-0 bg-transparent px-2 py-2 text-sm outline-none"
          />
          <button type="submit" className="rounded-lg bg-[#0B132B] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#152344]">
            Track
          </button>
        </form>
        {notFound && (
          <p role="alert" className="mb-5 rounded-lg bg-rose-50 px-4 py-3 text-sm text-rose-700">
            We couldn’t find that application. Check the reference and try again.
          </p>
        )}
        {searched && (
          <section className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7">
            <div className="flex flex-col justify-between gap-4 border-b border-slate-100 pb-5 sm:flex-row sm:items-start">
              <div>
                <span className="text-xs font-semibold text-[#99751d]">Application #{searched}</span>
                <h2 className="mt-2 text-xl font-semibold text-[#0B132B]">SME Credit Facility</h2>
                <p className="mt-1 text-sm text-slate-500">Submitted on 12 September 2026</p>
              </div>
              <span className="inline-flex items-center gap-2 self-start rounded-full bg-[#FEF9C3] px-3 py-1.5 text-xs font-semibold text-[#854D0E]">
                <Clock3 className="h-3.5 w-3.5" /> Credit assessment
              </span>
            </div>
            <div className="mt-7">
              <h3 className="text-sm font-semibold text-[#0B132B]">Application progress</h3>
              <div className="mt-5">
                {steps.map((step, index) => (
                  <div key={step.title} className="relative flex gap-4 pb-7 last:pb-0">
                    <div className="relative flex w-6 shrink-0 justify-center">
                      {index < steps.length - 1 && (
                        <span className={`absolute top-6 h-full w-px ${step.status === 'complete' ? 'bg-emerald-300' : 'bg-slate-200'}`} />
                      )}
                      {step.status === 'complete' ? (
                        <span className="z-10 grid h-6 w-6 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                      ) : step.status === 'current' ? (
                        <span className="z-10 grid h-6 w-6 place-items-center rounded-full border-2 border-[#D4AF37] bg-[#f8f4e8]">
                          <span className="h-2 w-2 rounded-full bg-[#99751d]" />
                        </span>
                      ) : (
                        <Circle className="z-10 h-6 w-6 fill-white text-slate-300" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col justify-between gap-1 sm:flex-row sm:items-center">
                      <div>
                        <p className={`text-sm font-semibold ${step.status === 'pending' ? 'text-slate-400' : 'text-[#0B132B]'}`}>
                          {step.title}
                        </p>
                        {step.status === 'current' && (
                          <p className="mt-1 text-xs text-slate-500">
                            Our team is reviewing your application and documents.
                          </p>
                        )}
                      </div>
                      <span className={`text-xs ${step.status === 'current' ? 'font-semibold text-[#99751d]' : 'text-slate-400'}`}>
                        {step.date}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </DashboardShell>
  );
}