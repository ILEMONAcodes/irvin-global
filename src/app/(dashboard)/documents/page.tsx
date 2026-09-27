'use client';

import { useState } from 'react';
import { ArrowDownToLine, Eye, FileCheck2, FileText, ShieldCheck } from 'lucide-react';

const documents = [
  { name: 'SME Credit Facility offer', type: 'Loan offer', date: '12 Sep 2026', reference: 'DOC-IG-20481' },
  { name: 'Repayment schedule', type: 'Repayment', date: '12 Sep 2026', reference: 'DOC-IG-20482' },
  { name: 'Identity verification summary', type: 'Verification', date: '11 Sep 2026', reference: 'DOC-IG-20476' },
];

export default function DocumentsPage() {
  const [selectedDocument, setSelectedDocument] = useState<string | null>(null);

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-blue-700 dark:text-blue-300">Your records</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#14233c] dark:text-white sm:text-3xl">Documents</h1>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Review documents associated with your sample loan account.</p>
      </div>

      <div className="flex items-start gap-3 rounded-lg border border-blue-100 bg-blue-50 px-4 py-3 text-sm text-blue-800 dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-200"><ShieldCheck className="mt-0.5 h-4 w-4 shrink-0" /><p>Prototype library: these entries are sample records. Secure file access will be connected with the account backend.</p></div>

      <section className="overflow-hidden rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e]">
        <div className="border-b border-slate-100 px-5 py-4 dark:border-slate-800"><h2 className="text-base font-semibold text-[#14233c] dark:text-white">Loan documents</h2><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">SME Credit Facility · IG-11234</p></div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {documents.map((document) => <article key={document.reference} className="flex flex-col gap-4 px-5 py-4 sm:flex-row sm:items-center sm:justify-between"><div className="flex min-w-0 items-center gap-3"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><FileText className="h-5 w-5" /></span><div className="min-w-0"><h3 className="truncate text-sm font-semibold text-slate-800 dark:text-slate-100">{document.name}</h3><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{document.type} · Added {document.date} · {document.reference}</p></div></div><div className="flex items-center gap-2 pl-[52px] sm:pl-0"><button type="button" onClick={() => setSelectedDocument(document.name)} className="inline-flex min-h-9 items-center gap-2 rounded-lg border border-slate-200 px-3 text-xs font-semibold text-slate-700 transition hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:text-slate-200 dark:hover:border-blue-800"><Eye className="h-4 w-4" />Preview</button><button type="button" onClick={() => setSelectedDocument(`${document.name} cannot be downloaded until file storage is connected.`)} aria-label={`Download ${document.name}`} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-500 transition hover:border-blue-200 hover:text-blue-700 dark:border-slate-700 dark:text-slate-300"><ArrowDownToLine className="h-4 w-4" /></button></div></article>)}
        </div>
      </section>

      {selectedDocument && <div role="status" className="flex items-start gap-3 rounded-lg border border-slate-200 bg-white p-4 text-sm text-slate-700 dark:border-slate-800 dark:bg-[#111b2e] dark:text-slate-200"><FileCheck2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-600 dark:text-blue-300" /><div><p className="font-semibold">Document preview</p><p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">{selectedDocument}</p></div><button type="button" onClick={() => setSelectedDocument(null)} className="ml-auto text-xs font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">Close</button></div>}
    </div>
  );
}