'use client';

import { useState, type FormEvent } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowRight,
  CalendarDays,
  CircleHelp,
  Clock3,
  CreditCard,
  Eye,
  EyeOff,
  LockKeyhole,
  Mail,
  TrendingUp,
  UserRound,
  LoaderCircle,
} from 'lucide-react';

type LoginMode = 'contact' | 'borrower';

export default function LoginPage() {
  const router = useRouter();
  const [mode, setMode] = useState<LoginMode>('contact');
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formMessage, setFormMessage] = useState('');

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setFormMessage('');
    window.setTimeout(() => {
      router.push('/overview');
    }, 650);
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#f8fafc_0%,#f1f5f9_55%,#eff6ff_100%)] px-4 py-5 sm:px-6 sm:py-8">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-60" style={{ backgroundImage: 'radial-gradient(ellipse at 12% 14%, rgba(191,219,254,.55), transparent 35%), radial-gradient(ellipse at 90% 88%, rgba(219,234,254,.65), transparent 34%)' }} />
      <section className="relative mx-auto grid w-full max-w-[1380px] overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_28px_90px_rgba(15,23,42,.10)] lg:min-h-[820px] lg:grid-cols-[.96fr_1.04fr] lg:rounded-[32px]">
        <aside className="relative isolate overflow-hidden bg-[linear-gradient(145deg,#1d4ed8_0%,#2563eb_56%,#1e40af_100%)] px-6 py-7 text-white sm:px-10 sm:py-9 lg:px-12 lg:py-11 xl:px-16">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 opacity-[.12]" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.45) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.45) 1px,transparent 1px)', backgroundSize: '42px 42px', maskImage: 'linear-gradient(to bottom,black,transparent 75%)' }} />
          <div aria-hidden="true" className="pointer-events-none absolute -right-28 top-[28%] -z-10 h-[440px] w-[440px] rounded-full border border-white/10" />
          <Link href="/" aria-label="Irvin Global home" className="inline-flex rounded-lg focus-visible:outline-white">
            <Image src="/logo.png" alt="Irvin Global" width={148} height={42} priority className="h-auto w-[132px] brightness-0 invert sm:w-[148px]" />
          </Link>

          <div className="mx-auto mt-10 max-w-[590px] sm:mt-12 lg:mt-[clamp(48px,8vh,92px)]">
            <p className="text-xs font-bold uppercase tracking-[.16em] text-blue-100">Your account, in view</p>
            <h1 className="mt-4 max-w-[540px] text-[34px] font-semibold leading-[1.08] sm:text-[42px] lg:text-[48px]">Manage your loans and accounts in one place.</h1>
            <p className="mt-4 max-w-[470px] text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">Keep track of repayments, follow application updates, and get the support you need along the way.</p>

            <motion.article
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="mt-8 rounded-[22px] border border-white/70 bg-white p-5 text-[#14233c] shadow-[0_24px_55px_rgba(15,23,42,.2)] sm:mt-10 sm:p-6"
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="flex items-center gap-2 text-xs font-semibold text-slate-500"><CreditCard className="h-4 w-4 text-blue-600" />Account snapshot</div>
                  <p className="mt-2 text-[11px] font-medium text-slate-400">Sample dashboard preview</p>
                </div>
                <span className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700 sm:text-xs"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Active account</span>
              </div>

              <div className="mt-5 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500">Active loan balance</p>
                  <p className="mt-1 text-[30px] font-semibold leading-tight tabular-nums tracking-[-.02em] text-[#14233c] sm:text-[34px]">₦1,250,000</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-50 px-3 py-2 text-[11px] font-semibold text-amber-800"><Clock3 className="h-3.5 w-3.5" />Due in 8 days</span>
              </div>

              <div className="mt-5 grid gap-4 rounded-2xl bg-[#f5f8fc] p-4 sm:grid-cols-[1fr_auto] sm:items-center">
                <div>
                  <div className="flex items-center justify-between gap-3 text-xs"><span className="font-medium text-slate-600">Repayment progress</span><span className="font-semibold text-blue-700">68%</span></div>
                  <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-200"><div className="h-full w-[68%] rounded-full bg-blue-600" /></div>
                  <p className="mt-2 text-[10px] text-slate-400">8 of 12 scheduled payments</p>
                </div>
                <div className="flex items-center gap-2 border-t border-slate-200 pt-3 sm:border-l sm:border-t-0 sm:pl-4 sm:pt-0">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-emerald-100 text-emerald-700"><TrendingUp className="h-4 w-4" /></span>
                  <div><p className="text-[10px] text-slate-500">Credit rating</p><p className="text-sm font-bold text-[#14233c]">Excellent <span className="font-medium text-slate-500">780</span></p></div>
                </div>
              </div>
              <p className="mt-3 text-[10px] leading-4 text-slate-400">Illustrative figures shown for design preview.</p>
            </motion.article>

          </div>
        </aside>

        <section className="flex items-center justify-center px-6 py-9 sm:px-10 sm:py-12 lg:px-12 xl:px-16">
          <div className="w-full max-w-[500px]">
            <div className="mb-7 sm:mb-8">
              <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-700"><LockKeyhole className="h-3.5 w-3.5" />Borrower portal</p>
              <h2 className="text-[30px] font-semibold leading-tight tracking-[-.025em] text-[#14233c] sm:text-[34px]">Welcome back</h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">Select your preferred login method to access your account.</p>
            </div>

            <div role="tablist" aria-label="Choose a login method" className="relative grid grid-cols-2 rounded-xl bg-[#f1f5f9] p-1">
              {([
                ['contact', 'Email / Phone'],
                ['borrower', 'Borrower ID'],
              ] as const).map(([tabMode, label]) => (
                <button key={tabMode} type="button" role="tab" aria-selected={mode === tabMode} onClick={() => { setMode(tabMode); setFormMessage(''); }} className={`relative z-10 min-h-11 rounded-lg px-2 text-xs font-semibold transition-colors sm:text-sm ${mode === tabMode ? 'text-blue-700' : 'text-slate-500 hover:text-slate-700'}`}>
                  {mode === tabMode && <motion.span layoutId="login-tab-active" className="absolute inset-0 -z-10 rounded-lg border border-slate-200/80 bg-white shadow-sm" transition={{ type: 'spring', stiffness: 420, damping: 34 }} />}
                  {label}
                </button>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4.5">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={mode} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.18 }} className="space-y-4.5">
                  {mode === 'contact' ? (
                    <>
                      <div>
                        <label htmlFor="login-identifier" className="mb-2 block text-sm font-medium text-slate-700">Email address or phone number</label>
                        <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                          <Mail className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                          <input id="login-identifier" name="identifier" type="text" autoComplete="username" required placeholder="name@example.com or 080..." className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-[#14233c] outline-none placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="login-password" className="mb-2 block text-sm font-medium text-slate-700">Password</label>
                        <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                          <LockKeyhole className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                          <input id="login-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" required placeholder="Enter your password" className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-[#14233c] outline-none placeholder:text-slate-400" />
                          <button type="button" onClick={() => setShowPassword(!showPassword)} aria-label={showPassword ? 'Hide password' : 'Show password'} className="grid h-8 w-8 shrink-0 place-items-center rounded-lg text-slate-400 transition hover:bg-slate-100 hover:text-slate-700">
                            {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                          </button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <label htmlFor="borrower-identifier" className="mb-2 block text-sm font-medium text-slate-700">Borrower ID or application number</label>
                        <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                          <UserRound className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                          <input id="borrower-identifier" name="borrowerId" type="text" autoComplete="username" required placeholder="e.g. IG-884920" className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-[#14233c] outline-none placeholder:text-slate-400" />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="borrower-dob" className="mb-2 block text-sm font-medium text-slate-700">Date of birth</label>
                        <div className="flex min-h-[52px] items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 transition focus-within:border-blue-500 focus-within:ring-4 focus-within:ring-blue-500/10">
                          <CalendarDays className="h-[18px] w-[18px] shrink-0 text-slate-400" />
                          <input id="borrower-dob" name="dateOfBirth" type="date" autoComplete="bday" required className="min-w-0 flex-1 border-0 bg-transparent py-3 text-sm text-slate-600 outline-none" />
                        </div>
                        <p className="mt-2 text-xs text-slate-400">Use the date of birth on your borrower profile.</p>
                      </div>
                    </>
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                <label className="inline-flex cursor-pointer items-center gap-2.5 text-sm text-slate-600">
                  <input type="checkbox" name="rememberMe" className="h-4 w-4 rounded border-slate-300 accent-blue-600" />Remember me
                </label>
                <a href="mailto:info@irvinglobal.com?subject=Account%20access%20help" className="text-xs font-semibold text-blue-700 transition hover:text-blue-800 hover:underline sm:text-sm">Forgot password / ID?</a>
              </div>

              <button type="submit" disabled={isSubmitting} className="mt-2 inline-flex min-h-[54px] w-full items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,.2)] transition hover:-translate-y-0.5 hover:bg-blue-700 disabled:cursor-wait disabled:opacity-80">
                {isSubmitting ? <><LoaderCircle className="h-4 w-4 animate-spin" />Signing in...</> : <>Sign in to portal <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="text-center text-xs leading-5 text-slate-400">Prototype mode: any details open the sample dashboard.</p>
              <p aria-live="polite" role="status" className={`min-h-5 text-center text-xs leading-5 ${formMessage ? 'text-amber-800' : 'text-transparent'}`}>{formMessage || ' '}</p>
            </form>

            <div className="mt-5 border-t border-slate-100 pt-5 text-center">
              <p className="text-sm text-slate-500">Don&apos;t have an active loan? <Link href="/apply" className="font-semibold text-blue-700 transition hover:text-blue-800">Apply for a loan</Link></p>
              <Link href="mailto:info@irvinglobal.com?subject=Login%20support" className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-slate-500 transition hover:text-blue-700"><CircleHelp className="h-4 w-4" />Need help logging in? Contact support</Link>
            </div>

          </div>
        </section>
      </section>
    </main>
  );
}