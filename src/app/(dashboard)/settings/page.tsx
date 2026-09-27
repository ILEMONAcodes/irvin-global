'use client';

import { useState } from 'react';
import { Bell, Check, CircleUserRound, LockKeyhole, Palette } from 'lucide-react';

export default function SettingsPage() {
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [repaymentReminders, setRepaymentReminders] = useState(true);
  const [saved, setSaved] = useState(false);

  function savePreferences() {
    window.localStorage.setItem('irvin-settings-notifications', JSON.stringify({ emailUpdates, repaymentReminders }));
    setSaved(true);
  }

  return (
    <div className="space-y-6 sm:space-y-8">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[.14em] text-blue-700 dark:text-blue-300">Workspace preferences</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#14233c] dark:text-white sm:text-3xl">Settings</h1>
        <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">Manage your prototype profile and dashboard preferences.</p>
      </div>

      <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e]">
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800"><span className="grid h-9 w-9 place-items-center rounded-lg bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><CircleUserRound className="h-4 w-4" /></span><div><h2 className="text-sm font-semibold text-[#14233c] dark:text-white">Profile</h2><p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Sample account details</p></div></div>
        <dl className="grid gap-4 px-5 py-5 sm:grid-cols-2"><div><dt className="text-xs text-slate-500 dark:text-slate-400">Name</dt><dd className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">Michelle Okafor</dd></div><div><dt className="text-xs text-slate-500 dark:text-slate-400">Email address</dt><dd className="mt-1 break-all text-sm font-medium text-slate-800 dark:text-slate-100">michelle.okafor@example.com</dd></div><div><dt className="text-xs text-slate-500 dark:text-slate-400">Borrower reference</dt><dd className="mt-1 text-sm font-medium text-slate-800 dark:text-slate-100">IG-11234</dd></div><div><dt className="text-xs text-slate-500 dark:text-slate-400">Account access</dt><dd className="mt-1 text-sm font-medium text-blue-700 dark:text-blue-300">Prototype workspace</dd></div></dl>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e]">
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800"><span className="grid h-9 w-9 place-items-center rounded-lg bg-violet-50 text-violet-700 dark:bg-violet-950 dark:text-violet-300"><Palette className="h-4 w-4" /></span><div><h2 className="text-sm font-semibold text-[#14233c] dark:text-white">Appearance</h2><p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Change the theme from the moon or sun button in the top bar.</p></div></div>
        <div className="flex items-start gap-3 px-5 py-4"><LockKeyhole className="mt-0.5 h-4 w-4 shrink-0 text-slate-400" /><p className="text-sm leading-6 text-slate-600 dark:text-slate-300">Your light or dark theme preference is saved on this device. Dashboard cards adapt to the selected theme.</p></div>
      </section>

      <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e]">
        <div className="flex items-center gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-800"><span className="grid h-9 w-9 place-items-center rounded-lg bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300"><Bell className="h-4 w-4" /></span><div><h2 className="text-sm font-semibold text-[#14233c] dark:text-white">Notifications</h2><p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">Preferences are saved locally for this prototype.</p></div></div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          <label className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4"><span><span className="block text-sm font-medium text-slate-800 dark:text-slate-100">Email updates</span><span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">Application and account activity</span></span><input type="checkbox" checked={emailUpdates} onChange={(event) => { setEmailUpdates(event.target.checked); setSaved(false); }} className="h-4 w-4 shrink-0 accent-blue-600" /></label>
          <label className="flex cursor-pointer items-center justify-between gap-4 px-5 py-4"><span><span className="block text-sm font-medium text-slate-800 dark:text-slate-100">Repayment reminders</span><span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">Upcoming payment date reminders</span></span><input type="checkbox" checked={repaymentReminders} onChange={(event) => { setRepaymentReminders(event.target.checked); setSaved(false); }} className="h-4 w-4 shrink-0 accent-blue-600" /></label>
        </div>
        <div className="flex items-center justify-between gap-3 border-t border-slate-100 px-5 py-4 dark:border-slate-800"><p aria-live="polite" className="text-xs text-emerald-700 dark:text-emerald-300">{saved ? 'Preferences saved on this device.' : 'Changes are not saved yet.'}</p><button type="button" onClick={savePreferences} className="inline-flex min-h-9 items-center gap-2 rounded-lg bg-blue-600 px-4 text-xs font-semibold text-white transition hover:bg-blue-700"><Check className="h-4 w-4" />Save preferences</button></div>
      </section>
    </div>
  );
}