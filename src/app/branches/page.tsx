'use client';

import { useMemo, useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import { MOCK_BRANCHES } from '@/data/mockData';
import { Clock, ExternalLink, MapPin, Phone, Search } from 'lucide-react';

export default function BranchesPage() {
  const [query, setQuery] = useState('');
  const branches = useMemo(
    () => MOCK_BRANCHES.filter((branch) => `${branch.name} ${branch.address}`.toLowerCase().includes(query.toLowerCase())),
    [query],
  );

  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#14233c]">
      <Header />
      <main className="mx-auto max-w-7xl px-5 py-10 sm:px-8 sm:py-14">
        <div className="mb-8 max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-700">Here when you need us</p>
          <h1 className="mt-3 text-3xl font-semibold text-[#10213d] sm:text-4xl">Irvin is closer than you think.</h1>
          <p className="mt-3 text-sm leading-6 text-slate-600">Find a branch and speak with our team in person.</p>
        </div>

        <div className="grid min-h-[560px] overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_12px_36px_rgba(30,54,87,.055)] lg:grid-cols-[.85fr_1.15fr]">
          <section className="flex min-h-[540px] flex-col border-b border-slate-200 lg:border-b-0 lg:border-r">
            <div className="border-b border-slate-100 p-4">
              <label className="flex items-center gap-3 rounded-xl border border-slate-200 px-3 py-3 focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                <Search aria-hidden="true" className="h-4 w-4 shrink-0 text-slate-400" />
                <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search city or address" className="w-full border-0 bg-transparent text-sm outline-none placeholder:text-slate-400" />
              </label>
              <p className="mt-3 text-xs text-slate-500">{branches.length} {branches.length === 1 ? 'branch' : 'branches'}</p>
            </div>
            <div className="flex-1 divide-y divide-slate-100 overflow-y-auto">
              {branches.map((branch) => (
                <article key={branch.name} className="p-5 transition hover:bg-slate-50">
                  <div className="flex gap-3">
                    <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-700"><MapPin className="h-4 w-4" /></span>
                    <div className="min-w-0">
                      <h2 className="text-sm font-semibold text-[#14233c]">{branch.name}</h2>
                      <p className="mt-1 text-xs leading-5 text-slate-500">{branch.address}</p>
                      <p className="mt-2 flex items-center gap-1.5 text-xs text-slate-500"><Clock className="h-3.5 w-3.5 text-blue-600" />{branch.hours}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        <a href={`tel:${branch.phone}`} className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-700"><Phone className="h-3.5 w-3.5" />Call</a>
                        <a href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(branch.address)}`} target="_blank" rel="noreferrer" className="inline-flex min-h-9 items-center gap-1.5 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">Directions <ExternalLink className="h-3.5 w-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              {branches.length === 0 && <p className="p-6 text-sm text-slate-500">No branches match that search.</p>}
            </div>
          </section>
          <div className="relative min-h-[420px] bg-slate-100">
            <iframe title="Map of Irvin Global branches in Abuja" src="https://www.openstreetmap.org/export/embed.html?bbox=7.43%2C9.00%2C7.58%2C9.13&layer=mapnik" className="absolute inset-0 h-full w-full border-0" loading="lazy" />
            <a href="https://www.openstreetmap.org/#map=13/9.055/7.505" target="_blank" rel="noreferrer" className="absolute bottom-4 right-4 rounded-lg bg-white px-3 py-2 text-xs font-semibold text-blue-700 shadow-sm transition hover:bg-blue-50">Open larger map <ExternalLink className="ml-1 inline h-3 w-3" /></a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}