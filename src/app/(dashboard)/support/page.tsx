'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock3, Headphones, Mail, MapPin, MessageCircle, Phone } from 'lucide-react';

const supportTopics = [
  { title: 'Loan and repayment questions', description: 'Get help understanding your facility or repayment schedule.', icon: MessageCircle },
  { title: 'Application assistance', description: 'Ask about required documents or an application update.', icon: Headphones },
  { title: 'Visit a branch', description: 'Find a nearby Irvin Global branch for in-person support.', icon: MapPin },
];

export default function SupportPage() {
  const [message, setMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = `Customer support: ${formData.get('topic')}`;
    const body = [
      `Name: ${formData.get('name')}`,
      `Email: ${formData.get('email')}`,
      `Topic: ${formData.get('topic')}`,
      '',
      String(formData.get('details')),
    ].join('\n');
    setMessage('Your email app will open with your support request.');
    window.location.href = `mailto:info@irvinglobal.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <div className="mx-auto max-w-5xl space-y-8">
      <header>
        <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-700 dark:text-blue-300">Customer care</p>
        <h1 className="mt-2 text-2xl font-semibold tracking-tight text-[#14233c] dark:text-white sm:text-3xl">How can we help?</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 dark:text-slate-400">Get support with your loan, payment, or application. This prototype opens an email draft rather than creating a backend support ticket.</p>
      </header>

      <section className="grid gap-4 md:grid-cols-3">
        {supportTopics.map(({ title, description, icon: Icon }) => (
          <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-[#111b2e]">
            <span className="grid h-10 w-10 place-items-center rounded-xl bg-blue-50 text-blue-700 dark:bg-blue-950 dark:text-blue-300"><Icon className="h-5 w-5" /></span>
            <h2 className="mt-4 text-sm font-semibold text-[#14233c] dark:text-white">{title}</h2>
            <p className="mt-2 text-xs leading-5 text-slate-500 dark:text-slate-400">{description}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 lg:grid-cols-[1.2fr_.8fr]">
        <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 dark:border-slate-800 dark:bg-[#111b2e]">
          <h2 className="text-base font-semibold text-[#14233c] dark:text-white">Send us a message</h2>
          <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">Complete these details to open a prefilled email.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="support-name" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Name</label>
              <input id="support-name" name="name" autoComplete="name" required className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#14233c] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#0b1220] dark:text-white" />
            </div>
            <div>
              <label htmlFor="support-email" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Email address</label>
              <input id="support-email" name="email" type="email" autoComplete="email" required className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#14233c] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#0b1220] dark:text-white" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="support-topic" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">What do you need help with?</label>
              <select id="support-topic" name="topic" className="w-full rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#14233c] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#0b1220] dark:text-white">
                <option>Loan or repayment</option>
                <option>Application status</option>
                <option>Documents</option>
                <option>Account access</option>
                <option>Other</option>
              </select>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="support-details" className="mb-1.5 block text-xs font-medium text-slate-600 dark:text-slate-300">Message</label>
              <textarea id="support-details" name="details" required rows={4} className="w-full resize-y rounded-xl border border-slate-200 bg-white px-3.5 py-3 text-sm text-[#14233c] outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 dark:border-slate-700 dark:bg-[#0b1220] dark:text-white" />
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite" className="text-xs text-slate-500 dark:text-slate-400">{message || 'No support ticket is stored by this prototype.'}</p>
            <button type="submit" className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">Contact support <ArrowRight className="h-4 w-4" /></button>
          </div>
        </form>

        <aside className="space-y-4">
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 dark:border-slate-800 dark:bg-[#111b2e]">
            <h2 className="text-sm font-semibold text-[#14233c] dark:text-white">Contact Irvin Global</h2>
            <a href="tel:+2349078216588" className="mt-4 flex items-center gap-3 rounded-xl bg-blue-50 p-3.5 text-sm font-semibold text-blue-800 transition hover:bg-blue-100 dark:bg-blue-950/60 dark:text-blue-200 dark:hover:bg-blue-950"><Phone className="h-4 w-4 shrink-0" />+234 907 821 6588</a>
            <a href="mailto:info@irvinglobal.com" className="mt-2 flex items-center gap-3 rounded-xl bg-slate-50 p-3.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-100 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"><Mail className="h-4 w-4 shrink-0 text-blue-600" />info@irvinglobal.com</a>
            <p className="mt-4 flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400"><Clock3 className="h-4 w-4 text-blue-600" />Business hours vary by branch.</p>
          </section>
          <section className="rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-5 text-white shadow-[0_14px_35px_rgba(37,99,235,.18)] sm:p-6">
            <h2 className="text-base font-semibold">Prefer to visit us?</h2>
            <p className="mt-2 text-sm leading-6 text-blue-100">Find branch locations and speak with our team in person.</p>
            <Link href="/branches" className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">Find a branch <ArrowRight className="h-4 w-4" /></Link>
          </section>
        </aside>
      </section>
    </div>
  );
}
