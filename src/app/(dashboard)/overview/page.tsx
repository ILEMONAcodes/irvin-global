'use client';

import { useState, useSyncExternalStore } from 'react';
import Link from 'next/link';
import {
  ArrowRight,
  ArrowUpRight,
  Building2,
  CalendarDays,
  Check,
  ChevronDown,
  CircleHelp,
  CreditCard,
  FileText,
  SlidersHorizontal,
  WalletCards,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { formatNaira } from '@/lib/utils';
import { DASHBOARD_ACCOUNT } from '@/data/dashboardAccount';

const WIDGET_STORAGE_KEY = 'irvin-overview-widgets';
const DEFAULT_WIDGETS = 'availableCredit,activeLoan,nextPayment,repaymentProgress,quickActions,recentApplications';

const widgetOptions = [
  ['availableCredit', 'Available credit'],
  ['activeLoan', 'Active loan'],
  ['nextPayment', 'Next repayment'],
  ['repaymentProgress', 'Repayment progress'],
  ['quickActions', 'Quick actions'],
  ['recentApplications', 'Recent applications'],
] as const;

type WidgetKey = typeof widgetOptions[number][0];

function subscribeToWidgets(onStoreChange: () => void) {
  window.addEventListener('storage', onStoreChange);
  window.addEventListener('irvin-overview-widgets-change', onStoreChange);
  return () => {
    window.removeEventListener('storage', onStoreChange);
    window.removeEventListener('irvin-overview-widgets-change', onStoreChange);
  };
}

function getWidgetsSnapshot() {
  return window.localStorage.getItem(WIDGET_STORAGE_KEY) ?? DEFAULT_WIDGETS;
}

function getServerWidgetsSnapshot() {
  return DEFAULT_WIDGETS;
}

const quickActions: { title: string; detail: string; href: string; icon: LucideIcon }[] = [
  { title: 'Make a payment', detail: 'Manage your repayment', href: '/loans', icon: CreditCard },
  { title: 'Track application', detail: 'Check your latest status', href: '/status', icon: FileText },
  { title: 'Find a branch', detail: 'Talk with our team', href: '/branches', icon: Building2 },
];

const applications = [
  { product: 'SME Credit Facility', reference: 'IG-20481', date: '12 Sep 2026', status: 'Under review' },
  { product: 'Payroll Loan', reference: 'IG-19872', date: '28 Aug 2026', status: 'Documents verified' },
];

function WidgetCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <section className={`rounded-xl border border-slate-200 bg-white shadow-[0_8px_24px_rgba(15,23,42,.035)] dark:border-slate-800 dark:bg-[#111b2e] ${className}`}>{children}</section>;
}

export default function OverviewPage() {
  const [customizeOpen, setCustomizeOpen] = useState(false);
  const savedWidgets = useSyncExternalStore(subscribeToWidgets, getWidgetsSnapshot, getServerWidgetsSnapshot);
  const visibleWidgets = new Set(savedWidgets.split(',').filter(Boolean) as WidgetKey[]);

  function setWidgetVisible(key: WidgetKey, visible: boolean) {
    const nextWidgets = new Set(visibleWidgets);
    if (visible) nextWidgets.add(key);
    else nextWidgets.delete(key);
    window.localStorage.setItem(WIDGET_STORAGE_KEY, [...nextWidgets].join(','));
    window.dispatchEvent(new Event('irvin-overview-widgets-change'));
  }

  function restoreWidgets() {
    window.localStorage.setItem(WIDGET_STORAGE_KEY, DEFAULT_WIDGETS);
    window.dispatchEvent(new Event('irvin-overview-widgets-change'));
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[.14em] text-blue-700 dark:text-blue-300">Account overview</p>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#14233c] dark:text-white sm:text-3xl">Welcome back, Michelle</h1>
          <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Your finances, all in one place.</p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <div className="relative">
            <button type="button" onClick={() => setCustomizeOpen(!customizeOpen)} aria-expanded={customizeOpen} aria-controls="dashboard-customization" className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-700 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-[#111b2e] dark:text-slate-200 dark:hover:border-blue-500 dark:hover:text-blue-300">
              <SlidersHorizontal className="h-4 w-4" />Customize<span className="hidden sm:inline"> dashboard</span><ChevronDown className={`h-4 w-4 transition ${customizeOpen ? 'rotate-180' : ''}`} />
            </button>
            {customizeOpen && <div id="dashboard-customization" className="absolute right-0 z-20 mt-2 w-[min(20rem,calc(100vw-2rem))] rounded-xl border border-slate-200 bg-white p-4 shadow-xl dark:border-slate-700 dark:bg-[#111b2e]">
              <div className="flex items-start justify-between gap-3">
                <div><h2 className="text-sm font-semibold text-[#14233c] dark:text-white">Your dashboard</h2><p className="mt-1 text-xs leading-5 text-slate-500 dark:text-slate-400">Choose which sections appear here.</p></div>
                <button type="button" onClick={restoreWidgets} className="text-xs font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">Reset</button>
              </div>
              <div className="mt-3 space-y-1">
                {widgetOptions.map(([key, label]) => <label key={key} className="flex cursor-pointer items-center gap-3 rounded-lg px-2 py-2 text-sm text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800"><input type="checkbox" checked={visibleWidgets.has(key)} onChange={(event) => setWidgetVisible(key, event.target.checked)} className="h-4 w-4 rounded border-slate-300 accent-blue-600" />{label}</label>)}
              </div>
            </div>}
          </div>
          <Link href="/status" className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-blue-600 px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700"><span>Application status</span><ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>

      <div className="flex items-center gap-2 rounded-lg border border-blue-100 bg-blue-50/80 px-3.5 py-2.5 text-xs text-blue-800 dark:border-blue-900/70 dark:bg-blue-950/50 dark:text-blue-200">
        <span className="h-2 w-2 shrink-0 rounded-full bg-blue-500" />Prototype workspace <span className="text-blue-400 dark:text-blue-700">·</span> Sample account information
      </div>

      <section aria-label="Account balances" className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {visibleWidgets.has('availableCredit') && <article className="relative flex min-h-[210px] flex-col overflow-hidden rounded-xl bg-gradient-to-br from-blue-600 via-blue-600 to-blue-800 p-5 text-white shadow-[0_16px_34px_rgba(37,99,235,.2)] sm:p-6">
          <div aria-hidden="true" className="absolute -right-12 -top-16 h-52 w-52 rounded-full border border-white/10" />
          <div aria-hidden="true" className="absolute -right-4 -top-8 h-36 w-36 rounded-full border border-white/10" />
          <div className="relative flex items-center justify-between gap-3"><p className="text-sm font-medium text-blue-100">Available credit</p><span className="grid h-10 w-10 place-items-center rounded-xl bg-white/15"><WalletCards className="h-5 w-5" /></span></div>
          <p className="relative mt-5 text-3xl font-semibold tabular-nums sm:text-[34px]">{formatNaira(1200000)}</p>
          <p className="relative mt-auto pt-5 text-xs text-blue-100">Indicative available facility</p>
        </article>}

        {visibleWidgets.has('activeLoan') && <WidgetCard className="flex min-h-[210px] flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3"><div><p className="text-sm font-medium text-slate-500 dark:text-slate-400">Active loan</p><p className="mt-1 text-xs text-slate-400">{DASHBOARD_ACCOUNT.productName}</p></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><CreditCard className="h-5 w-5" /></span></div>
          <p className="mt-5 text-3xl font-semibold tabular-nums text-[#14233c] dark:text-white">{formatNaira(DASHBOARD_ACCOUNT.outstandingBalance)}</p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-4"><span className="text-xs text-slate-500 dark:text-slate-400">Outstanding balance</span><Link href="/loans" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">View details <ArrowUpRight className="h-3.5 w-3.5" /></Link></div>
        </WidgetCard>}

        {visibleWidgets.has('nextPayment') && <WidgetCard className="flex min-h-[210px] flex-col p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3"><div><p className="text-sm font-medium text-slate-500 dark:text-slate-400">Next repayment</p><p className="mt-1 text-xs text-slate-400">{DASHBOARD_ACCOUNT.productName}</p></div><span className="grid h-10 w-10 place-items-center rounded-xl bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><CalendarDays className="h-5 w-5" /></span></div>
          <p className="mt-5 text-3xl font-semibold tabular-nums text-[#14233c] dark:text-white">{formatNaira(DASHBOARD_ACCOUNT.repaymentAmount)}</p>
          <div className="mt-auto flex items-center justify-between gap-3 pt-4"><span className="inline-flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Due {DASHBOARD_ACCOUNT.nextRepaymentDate}</span><Link href="/payments" className="inline-flex min-h-9 items-center gap-1.5 rounded-lg bg-blue-600 px-3 text-xs font-semibold text-white transition hover:bg-blue-700">Make payment <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        </WidgetCard>}
      </section>

      <div className="grid gap-6 xl:grid-cols-[1.2fr_.8fr]">
        {visibleWidgets.has('repaymentProgress') && <WidgetCard className="p-5 sm:p-6">
          <div className="flex flex-wrap items-start justify-between gap-3"><div><h2 className="text-base font-semibold text-[#14233c] dark:text-white">Repayment progress</h2><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{DASHBOARD_ACCOUNT.productName} <span className="px-1 text-slate-300">·</span> {DASHBOARD_ACCOUNT.facilityId}</p></div><span className="rounded-full bg-emerald-50 px-2.5 py-1 text-xs font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">On track</span></div>
          <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
            <div><div className="flex items-center justify-between text-xs"><span className="text-slate-500 dark:text-slate-400">Amount repaid</span><strong className="tabular-nums text-[#14233c] dark:text-white">{DASHBOARD_ACCOUNT.repaymentPercent}%</strong></div><div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"><div className="h-full rounded-full bg-blue-600" style={{ width: `${DASHBOARD_ACCOUNT.repaymentPercent}%` }} /></div><p className="mt-2 text-xs text-slate-400">{DASHBOARD_ACCOUNT.repaymentsPaid} of {DASHBOARD_ACCOUNT.repaymentCount} scheduled payments completed</p></div>
            <div className="flex items-center gap-2.5 border-t border-slate-100 pt-4 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0 dark:border-slate-800"><span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Check className="h-5 w-5" /></span><div><p className="text-xs text-slate-500 dark:text-slate-400">Next due date</p><p className="mt-0.5 text-sm font-semibold text-[#14233c] dark:text-white">{DASHBOARD_ACCOUNT.nextRepaymentDate}</p></div></div>
          </div>
          <div className="mt-7 flex h-14 items-end gap-2" aria-label="Illustrative repayment history chart">{[35, 48, 42, 61, 54, 76, 66, 88, 72, 100, 82, 94].map((height, index) => <div key={index} className={`flex-1 rounded-t-sm ${index < DASHBOARD_ACCOUNT.repaymentsPaid ? 'bg-blue-500' : 'bg-slate-100 dark:bg-slate-800'}`} style={{ height: `${height}%` }} />)}</div>
          <div className="mt-2 flex justify-between text-[10px] text-slate-400"><span>Jul 2026</span><span>Current schedule</span></div>
        </WidgetCard>}

        {visibleWidgets.has('quickActions') && <WidgetCard className="p-5 sm:p-6">
          <div className="flex items-center justify-between gap-3"><div><h2 className="text-base font-semibold text-[#14233c] dark:text-white">Quick actions</h2><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Common account tasks</p></div><CircleHelp className="h-5 w-5 text-slate-300 dark:text-slate-600" /></div>
          <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2 xl:grid-cols-1 2xl:grid-cols-2">
            {quickActions.map(({ title, detail, href, icon: Icon }) => <Link key={title} href={href} className="group flex min-h-[66px] items-center gap-3 rounded-lg border border-slate-100 px-3 py-2.5 transition hover:border-blue-200 hover:bg-blue-50/60 dark:border-slate-800 dark:hover:border-blue-900 dark:hover:bg-blue-950/40"><span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><Icon className="h-4 w-4" /></span><span className="min-w-0 flex-1"><span className="block text-xs font-semibold text-slate-800 dark:text-slate-100">{title}</span><span className="mt-0.5 block truncate text-[10px] text-slate-400">{detail}</span></span><ArrowRight className="h-4 w-4 shrink-0 text-slate-300 transition group-hover:text-blue-600" /></Link>)}
          </div>
        </WidgetCard>}
      </div>

      {visibleWidgets.has('recentApplications') && <WidgetCard className="overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800 sm:px-6"><div><h2 className="text-base font-semibold text-[#14233c] dark:text-white">Recent applications</h2><p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Updates on your latest requests</p></div><Link href="/status" className="inline-flex items-center gap-1 text-xs font-semibold text-blue-700 hover:text-blue-800 dark:text-blue-300">View all <ArrowRight className="h-3.5 w-3.5" /></Link></div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800 sm:hidden">
          {applications.map((application) => <article key={application.reference} className="space-y-3 px-5 py-4"><div className="flex items-start justify-between gap-3"><div><h3 className="text-sm font-semibold text-slate-800 dark:text-slate-100">{application.product}</h3><p className="mt-1 text-xs text-slate-400">#{application.reference}</p></div><span className="shrink-0 rounded-full bg-blue-50 px-2.5 py-1 text-[10px] font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">{application.status}</span></div><p className="text-xs text-slate-500 dark:text-slate-400">Submitted {application.date}</p></article>)}
        </div>
        <div className="hidden overflow-x-auto sm:block"><table className="w-full min-w-[600px] text-left text-sm"><thead className="bg-slate-50 text-[11px] font-semibold uppercase tracking-wide text-slate-500 dark:bg-slate-900/60 dark:text-slate-400"><tr><th className="px-6 py-3">Application</th><th className="px-6 py-3">Reference</th><th className="px-6 py-3">Submitted</th><th className="px-6 py-3">Status</th><th className="px-6 py-3"><span className="sr-only">Open</span></th></tr></thead><tbody className="divide-y divide-slate-100 dark:divide-slate-800">{applications.map((application) => <tr key={application.reference}><td className="px-6 py-4 font-semibold text-slate-800 dark:text-slate-100">{application.product}</td><td className="px-6 py-4 text-slate-500 dark:text-slate-400">#{application.reference}</td><td className="px-6 py-4 text-slate-500 dark:text-slate-400">{application.date}</td><td className="px-6 py-4"><span className="rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-semibold text-blue-700 dark:bg-blue-950 dark:text-blue-300">{application.status}</span></td><td className="px-6 py-4 text-right"><Link href="/status" aria-label={`View ${application.reference}`} className="inline-grid h-8 w-8 place-items-center rounded-md text-slate-400 hover:bg-slate-100 hover:text-blue-700 dark:hover:bg-slate-800"><ArrowUpRight className="h-4 w-4" /></Link></td></tr>)}</tbody></table></div>
      </WidgetCard>}
    </div>
  );
}