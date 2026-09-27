'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Banknote,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  Clock3,
  CreditCard,
  LockKeyhole,
  Phone,
  ShieldCheck,
  Wallet,
} from 'lucide-react';
import { formatNaira } from '@/lib/utils';

const steps = [
  {
    title: 'Create your profile',
    description: 'Register with your contact details and verify your identity with the required documents.',
    screenTitle: 'Your profile, your pace',
    screenCopy: 'A few details help us understand your needs and get your application ready.',
    icon: BadgeCheck,
  },
  {
    title: 'Choose your loan',
    description: 'Select a facility, amount and repayment period that suit your personal or business plans.',
    screenTitle: 'Make a plan that fits',
    screenCopy: 'Review your loan amount, repayment period and estimated schedule before applying.',
    icon: CreditCard,
  },
  {
    title: 'Review and receive',
    description: 'Our team reviews your request and shares the next steps and terms with you.',
    screenTitle: 'A clear next step',
    screenCopy: 'Follow your application status and get updates as your request is reviewed.',
    icon: Banknote,
  },
];

const faqs = [
  {
    question: 'What do I need to apply for a loan?',
    answer: 'You will need to create a borrower profile and provide the personal, identity, employment and bank details requested in the application. Requirements can vary by loan product.',
  },
  {
    question: 'How long does approval and disbursement take?',
    answer: 'Timing depends on the product and how quickly your information can be verified. Irvin Global will keep you updated as your application is reviewed.',
  },
  {
    question: 'Can I repay my loan early?',
    answer: 'Early repayment options and any associated terms depend on your facility. Please review your offer or speak with a loan specialist before making an early payment.',
  },
  {
    question: 'How is my interest rate determined?',
    answer: 'Rates and fees depend on the loan product and your application. The calculator provides an illustration only; your final repayment schedule is confirmed in your offer.',
  },
];

const products = ['Payday Credit', 'Payroll Credit', 'Step-Up Loan', 'SME Loan'];

function Reveal({ children, className = '', delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="inline-flex items-center rounded-full border border-blue-100 bg-blue-50 px-3.5 py-2 text-xs font-semibold text-blue-700">{children}</p>;
}

export default function HomePage() {
  const [amount, setAmount] = useState(500000);
  const [months, setMonths] = useState(6);
  const [activeStep, setActiveStep] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const totalRepayment = amount * 1.125;
  const monthlyRepayment = totalRepayment / months;

  function openLeadEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const details = [
      `Name: ${formData.get('name')}`,
      `Phone: ${formData.get('phone')}`,
      `Email: ${formData.get('email')}`,
    ].join('\n');
    window.location.href = `mailto:info@irvinglobal.com?subject=${encodeURIComponent('Credit offers and market updates')}&body=${encodeURIComponent(details)}`;
  }

  return (
    <div className="min-h-screen overflow-hidden bg-[#f5f8fc] text-[#14233c]">
      <main>
        <section className="px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-16 lg:pt-[76px]">
          <div className="mx-auto max-w-[1320px]">
            <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
              <div className="max-w-[760px] animate-[fade-in_.7s_ease-out_both]">
                <Eyebrow>Financial solutions for a brighter tomorrow</Eyebrow>
                <h1 className="mt-6 max-w-[780px] text-[46px] font-semibold leading-[1.03] tracking-[-0.035em] text-[#10213d] sm:text-[62px] lg:text-[76px]">Global. Online.<br /><span className="text-blue-600">Loans.</span></h1>
                <p className="mt-5 max-w-[560px] text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">Flexible personal and business financing, with clear repayment estimates and a team ready to help you move forward.</p>
                <div className="mt-7 flex flex-wrap items-center gap-3">
                  <Link href="/apply" className="inline-flex items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(37,99,235,.2)] transition hover:-translate-y-0.5 hover:bg-blue-700">Get started <ArrowRight className="h-4 w-4" /></Link>
                  <Link href="/products" className="inline-flex items-center gap-2 rounded-full px-4 py-3.5 text-sm font-semibold text-slate-700 transition hover:bg-white">Explore our loans <ArrowDown className="h-4 w-4" /></Link>
                </div>
              </div>
              <div className="hidden items-center gap-3 pb-2 lg:flex">
                <div className="flex -space-x-2">
                  {['A', 'M', 'J', 'I'].map((initial, index) => <span key={initial} className={`grid h-10 w-10 place-items-center rounded-full border-[3px] border-[#f5f8fc] text-xs font-bold text-white ${['bg-[#2776da]', 'bg-[#1d9b8a]', 'bg-[#eb9c57]', 'bg-[#616dc7]'][index]}`}>{initial}</span>)}
                </div>
                <p className="text-sm leading-5 text-slate-500"><strong className="block text-[#14233c]">5,000+ people</strong> building their next move</p>
              </div>
            </div>

            <div className="mt-10 grid gap-4 lg:mt-12 lg:grid-cols-12">
              <Reveal className="lg:col-span-4">
                <article className="h-full rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(30,54,87,.055)] sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div><p className="text-sm font-semibold text-[#152843]">Plan your repayment</p><p className="mt-1 text-xs text-slate-500">Get a quick estimate</p></div>
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-50 text-blue-600"><Wallet className="h-5 w-5" /></span>
                  </div>
                  <div className="mt-7">
                    <div className="flex items-end justify-between gap-2"><label htmlFor="home-loan-amount" className="text-xs font-medium text-slate-500">Loan amount</label><output htmlFor="home-loan-amount" className="text-lg font-bold tabular-nums text-[#14233c]">{formatNaira(amount)}</output></div>
                    <input id="home-loan-amount" type="range" min="50000" max="5000000" step="50000" value={amount} onChange={(event) => setAmount(Number(event.target.value))} className="mt-4 w-full cursor-pointer accent-blue-600" />
                    <div className="mt-1 flex justify-between text-[11px] text-slate-400"><span>₦50,000</span><span>₦5,000,000</span></div>
                  </div>
                  <div className="mt-6">
                    <div className="flex items-end justify-between gap-2"><label htmlFor="home-loan-tenure" className="text-xs font-medium text-slate-500">Repayment period</label><output htmlFor="home-loan-tenure" className="text-sm font-bold text-[#14233c]">{months} months</output></div>
                    <input id="home-loan-tenure" type="range" min="1" max="24" step="1" value={months} onChange={(event) => setMonths(Number(event.target.value))} className="mt-4 w-full cursor-pointer accent-blue-600" />
                    <div className="mt-1 flex justify-between text-[11px] text-slate-400"><span>1 month</span><span>24 months</span></div>
                  </div>
                  <div className="mt-6 rounded-2xl bg-[#f4f7fb] p-4">
                    <p className="text-xs text-slate-500">Illustrative monthly repayment</p>
                    <p className="mt-1 text-[26px] font-semibold leading-tight tabular-nums text-[#152843]">{formatNaira(monthlyRepayment)}<span className="ml-1 text-xs font-medium text-slate-500">/ month</span></p>
                    <p className="mt-2 text-[10px] leading-4 text-slate-400">Estimate uses a 12.5% fee assumption. Final terms depend on your offer.</p>
                  </div>
                  <Link href={`/apply?amount=${amount}&tenure=${months}`} className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-blue-100 px-4 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50">Continue to application <ArrowRight className="h-4 w-4" /></Link>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-4" delay={0.08}>
                <article className="relative flex h-full min-h-[390px] flex-col overflow-hidden rounded-[26px] bg-gradient-to-br from-[#2877e6] via-[#2468d2] to-[#1648a8] p-6 text-white shadow-[0_18px_45px_rgba(31,96,190,.2)] sm:p-8">
                  <div aria-hidden="true" className="absolute -right-16 -top-16 h-64 w-64 rounded-full border border-white/15" />
                  <div aria-hidden="true" className="absolute -right-4 -top-4 h-40 w-40 rounded-full border border-white/15" />
                  <div className="relative text-xs font-semibold text-blue-100">Financing that moves with you</div>
                  <div className="relative my-auto py-10">
                    <p className="max-w-[300px] text-[34px] font-semibold leading-[1.08] tracking-[-0.025em] sm:text-[40px]">Apply. Get reviewed. Move forward.</p>
                    <p className="mt-4 max-w-[300px] text-sm leading-6 text-blue-100">Straightforward digital access to personal and business credit, backed by people who are here to help.</p>
                  </div>
                  <div className="relative flex items-center justify-between border-t border-white/20 pt-5">
                    <div><p className="text-[11px] text-blue-100">Find the right facility</p><p className="mt-1 text-sm font-semibold">Payday to SME finance</p></div>
                    <Link href="/products" aria-label="Explore loan products" className="grid h-11 w-11 place-items-center rounded-full bg-white text-blue-700 transition hover:scale-105"><ArrowUpRight className="h-5 w-5" /></Link>
                  </div>
                </article>
              </Reveal>

              <Reveal className="lg:col-span-4" delay={0.16}>
                <article className="flex h-full flex-col rounded-[26px] border border-slate-200/80 bg-white p-5 shadow-[0_14px_40px_rgba(30,54,87,.055)] sm:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <div><p className="text-sm font-semibold text-[#152843]">Your application, in view</p><p className="mt-1 text-xs text-slate-500">Track each step clearly</p></div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1.5 text-[10px] font-semibold text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Status updates</span>
                  </div>
                  <div className="mt-7 rounded-2xl bg-[#f5f8fc] p-4">
                    <div className="flex items-center justify-between"><span className="text-xs font-medium text-slate-500">Application progress</span><span className="text-[11px] font-semibold text-blue-700">Stay up to date</span></div>
                    <div className="mt-5 flex h-[88px] items-end gap-2" aria-label="Illustrative application progress chart">
                      {[34, 46, 41, 59, 52, 71, 65, 84, 74, 100, 91, 100].map((height, index) => <span key={index} className={`flex-1 rounded-t-[4px] ${index === 11 ? 'bg-blue-600' : 'bg-blue-200'}`} style={{ height: `${height}%` }} />)}
                    </div>
                    <div className="mt-2 flex justify-between text-[10px] text-slate-400"><span>Applied</span><span>Reviewed</span><span>Decision</span></div>
                  </div>
                  <div className="mt-5 flex items-center gap-3 rounded-2xl border border-slate-100 p-3.5">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[#e9f7f3] text-[#168b74]"><ShieldCheck className="h-5 w-5" /></span>
                    <div><p className="text-xs font-semibold text-[#152843]">Here when you need us</p><p className="mt-1 text-[11px] leading-4 text-slate-500">Speak to our team about your application.</p></div>
                    <Link href="/branches" aria-label="Find an Irvin Global branch" className="ml-auto text-slate-400 hover:text-blue-700"><ArrowUpRight className="h-4 w-4" /></Link>
                  </div>
                  <div className="mt-auto flex items-center gap-2 pt-5 text-xs text-slate-500"><span className="grid h-7 w-7 place-items-center rounded-full bg-blue-50 text-blue-700"><UsersIcon /></span><strong className="text-slate-700">5,000+</strong> people building what&apos;s next</div>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-20 border-y border-slate-200/70 bg-white px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-[1180px] items-center gap-12 md:grid-cols-[.9fr_1.1fr] md:gap-20">
            <Reveal>
              <Eyebrow>About Irvin Global</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#14233c] sm:text-[52px]">Good finance starts with <span className="text-blue-600">people.</span></h2>
              <p className="mt-5 text-[15px] leading-7 text-slate-600">Irvin Global Financial Services provides micro-credit and SME funding to help individuals and businesses take their next step. We pair digital access with personal service, so you can make informed decisions with a team beside you.</p>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f4f7fb] px-3.5 py-2.5 text-xs font-semibold text-slate-700"><ShieldCheck className="h-4 w-4 text-emerald-600" />Clear loan information</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#f4f7fb] px-3.5 py-2.5 text-xs font-semibold text-slate-700"><Phone className="h-4 w-4 text-blue-600" />Personal support</span>
              </div>
              <Link href="/branches" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-700 hover:text-blue-800">Meet us in person <ArrowRight className="h-4 w-4" /></Link>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mx-auto aspect-[1.18/1] w-full max-w-[550px] overflow-hidden rounded-[28px] bg-[#e6edf4]">
                <Image src="/iryn.jpeg" alt="Irvin Global financial services professional" fill sizes="(max-width: 768px) 100vw, 550px" className="object-cover object-[center_28%]" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#122643]/30 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex items-center gap-3 rounded-2xl border border-white/60 bg-white/95 p-3.5 shadow-[0_14px_40px_rgba(30,54,87,.12)] backdrop-blur sm:left-6 sm:top-6">
                  <span className="grid h-10 w-10 place-items-center rounded-full bg-emerald-50 text-emerald-600"><Check className="h-5 w-5" /></span>
                  <div><p className="text-[11px] text-slate-500">Your next step</p><p className="mt-0.5 text-sm font-semibold text-[#14233c]">A team to guide you</p></div>
                </div>
                <div className="absolute bottom-4 right-4 rounded-2xl border border-white/70 bg-white/95 px-4 py-3 shadow-[0_14px_40px_rgba(30,54,87,.14)] backdrop-blur sm:bottom-6 sm:right-6">
                  <p className="text-[11px] text-slate-500">Personal + business</p><p className="mt-1 text-sm font-semibold text-[#14233c]">Finance for real life</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto max-w-[1180px]">
            <Reveal className="max-w-[620px]">
              <Eyebrow>Made to move with you</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#14233c] sm:text-[52px]">Why choose Irvin Global?</h2>
              <p className="mt-4 text-[15px] leading-7 text-slate-600">Practical credit options and a straightforward experience, from the first estimate to your repayment plan.</p>
            </Reveal>
            <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Reveal>
                <article className="h-full rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(30,54,87,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(30,54,87,.09)] sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#e9f3ff] text-blue-700"><CircleRateIcon /></span>
                  <h3 className="mt-5 text-lg font-semibold text-[#14233c]">Know what to expect</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Review an estimated repayment schedule before you apply, then check the final terms in your offer.</p>
                  <div className="mt-5 flex items-center gap-2 border-t border-slate-100 pt-4 text-xs font-semibold text-blue-700"><Check className="h-4 w-4" />Clear estimates, no guesswork</div>
                </article>
              </Reveal>
              <Reveal delay={0.07}>
                <article className="h-full rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(30,54,87,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(30,54,87,.09)] sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf8f4] text-[#168b74]"><Clock3 className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-[#14233c]">A repayment plan to review</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Explore the period that works for you and review the schedule before moving ahead.</p>
                  <ul className="mt-5 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-600">
                    {['Flexible loan periods', 'Application status updates', 'Support from our team'].map((item) => <li key={item} className="flex items-center gap-2"><Check className="h-3.5 w-3.5 text-emerald-600" />{item}</li>)}
                  </ul>
                </article>
              </Reveal>
              <Reveal delay={0.14}>
                <article className="h-full rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(30,54,87,.045)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_42px_rgba(30,54,87,.09)] sm:p-7">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#fff3e8] text-[#d17a35]"><BriefcaseBusiness className="h-5 w-5" /></span>
                  <h3 className="mt-5 text-lg font-semibold text-[#14233c]">Finance for different needs</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-500">Find a personal or business facility that aligns with what you are working toward.</p>
                  <div className="mt-5 flex flex-wrap gap-2 border-t border-slate-100 pt-4">{products.map((product) => <span key={product} className="rounded-full bg-[#f4f7fb] px-2.5 py-1.5 text-[10px] font-semibold text-slate-600">{product}</span>)}</div>
                </article>
              </Reveal>
              <Reveal>
                <article className="flex min-h-[210px] flex-col justify-between rounded-[24px] bg-[#e7f1ff] p-6 sm:p-7">
                  <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-blue-700">Digital access</p><h3 className="mt-2 text-xl font-semibold leading-snug text-[#14233c]">Start online.<br />Get support along the way.</h3></div><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-white text-blue-700"><ArrowUpRight className="h-5 w-5" /></span></div>
                  <Link href="/apply" className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Start an application <ArrowRight className="h-4 w-4" /></Link>
                </article>
              </Reveal>
              <Reveal delay={0.08}>
                <article className="flex min-h-[210px] flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(30,54,87,.045)] sm:p-7">
                  <div className="flex items-start justify-between gap-4"><div><p className="text-xs font-semibold text-emerald-700">Your information matters</p><h3 className="mt-2 text-xl font-semibold leading-snug text-[#14233c]">A considered, secure<br />application experience.</h3></div><span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-emerald-50 text-emerald-700"><LockKeyhole className="h-5 w-5" /></span></div>
                  <p className="mt-5 text-xs leading-5 text-slate-500">Use our official application and customer channels to manage your request.</p>
                </article>
              </Reveal>
              <Reveal delay={0.16}>
                <article className="flex min-h-[210px] flex-col justify-between rounded-[24px] border border-slate-200/80 bg-white p-6 shadow-[0_12px_36px_rgba(30,54,87,.045)] sm:p-7">
                  <div><p className="text-xs font-semibold text-[#b76d30]">Local presence</p><h3 className="mt-2 text-xl font-semibold leading-snug text-[#14233c]">Digital convenience.<br />People nearby.</h3></div>
                  <Link href="/branches" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-blue-700">Find a branch <ArrowRight className="h-4 w-4" /></Link>
                </article>
              </Reveal>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="scroll-mt-20 border-y border-slate-200/70 bg-white px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-[1180px] items-center gap-12 lg:grid-cols-[.92fr_1.08fr] lg:gap-24">
            <Reveal>
              <Eyebrow>Three clear steps</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#14233c] sm:text-[50px]">From idea to application.</h2>
              <p className="mt-4 max-w-[460px] text-[15px] leading-7 text-slate-600">A simple place to begin. Choose a step to see what happens next.</p>
              <div className="mt-7 space-y-2" role="tablist" aria-label="Loan application steps">
                {steps.map(({ title, description, icon: Icon }, index) => <button key={title} type="button" role="tab" aria-selected={activeStep === index} aria-controls="step-preview" onClick={() => setActiveStep(index)} className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition sm:p-5 ${activeStep === index ? 'border-blue-200 bg-[#f2f7ff]' : 'border-transparent hover:border-slate-200 hover:bg-slate-50'}`}>
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl ${activeStep === index ? 'bg-blue-600 text-white' : 'bg-white text-slate-500 shadow-sm'}`}><Icon className="h-5 w-5" /></span>
                  <span className="flex-1"><span className="flex items-center gap-2 text-sm font-semibold text-[#14233c]">0{index + 1} <span className="text-slate-300">/</span> {title}</span><span className="mt-1.5 block text-xs leading-5 text-slate-500">{description}</span></span>
                  <ChevronDown className={`mt-1 h-4 w-4 shrink-0 -rotate-90 text-slate-400 transition ${activeStep === index ? 'text-blue-600' : ''}`} />
                </button>)}
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="relative mx-auto w-full max-w-[500px] rounded-[30px] bg-[#edf3fa] p-5 sm:p-9">
                <span className="absolute right-8 top-7 grid h-12 w-12 place-items-center rounded-full bg-white text-blue-700 shadow-sm"><ShieldCheck className="h-5 w-5" /></span>
                <div id="step-preview" role="tabpanel" className="mx-auto max-w-[310px] rounded-[30px] border-[5px] border-[#14233c] bg-white p-5 shadow-[0_20px_50px_rgba(30,54,87,.16)] sm:p-6">
                  <div className="mx-auto mb-5 h-1.5 w-14 rounded-full bg-slate-200" />
                  <AnimatePresence mode="wait">
                    <motion.div key={activeStep} initial={{ opacity: 0, x: 12 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -12 }} transition={{ duration: 0.22 }}>
                      <div className="flex items-center justify-between"><Image src="/logo.png" alt="Irvin Global" width={96} height={28} className="h-auto w-[96px] object-contain" /><span className="text-[10px] font-semibold text-slate-400">STEP 0{activeStep + 1}</span></div>
                      <div className="mt-7 grid h-12 w-12 place-items-center rounded-2xl bg-blue-50 text-blue-700">{(() => { const StepIcon = steps[activeStep].icon; return <StepIcon className="h-5 w-5" />; })()}</div>
                      <h3 className="mt-4 text-xl font-semibold leading-tight text-[#14233c]">{steps[activeStep].screenTitle}</h3>
                      <p className="mt-2 text-xs leading-5 text-slate-500">{steps[activeStep].screenCopy}</p>
                      <div className="mt-5 space-y-2.5">
                        {(activeStep === 0 ? ['Personal information', 'Identity verification'] : activeStep === 1 ? ['Choose a loan product', 'Review repayment estimate'] : ['Application review', 'Status notifications']).map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-100 px-3 py-3"><span className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold ${index === 0 && activeStep === 2 ? 'bg-emerald-50 text-emerald-700' : 'bg-[#f4f7fb] text-slate-500'}`}>{index === 0 && activeStep === 2 ? <Check className="h-3.5 w-3.5" /> : `0${index + 1}`}</span><span className="text-[11px] font-medium text-slate-600">{item}</span><ArrowRight className="ml-auto h-3.5 w-3.5 text-slate-400" /></div>)}
                      </div>
                      <Link href="/apply" className="mt-5 flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-xs font-semibold text-white">Continue <ArrowRight className="h-3.5 w-3.5" /></Link>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <div className="mt-4 flex items-center justify-center gap-2">{steps.map((step, index) => <button key={step.title} type="button" aria-label={`Show step ${index + 1}: ${step.title}`} aria-pressed={activeStep === index} onClick={() => setActiveStep(index)} className={`h-1.5 rounded-full transition-all ${activeStep === index ? 'w-8 bg-blue-600' : 'w-1.5 bg-slate-300'}`} />)}</div>
              </div>
            </Reveal>
          </div>
        </section>

        <section id="faq" className="scroll-mt-20 px-5 py-16 sm:px-8 sm:py-24">
          <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.78fr_1.22fr] lg:gap-20">
            <Reveal>
              <Eyebrow>Quick answers</Eyebrow>
              <h2 className="mt-5 text-4xl font-semibold leading-[1.08] tracking-[-0.03em] text-[#14233c] sm:text-[48px]">Questions before you apply?</h2>
              <p className="mt-4 text-sm leading-6 text-slate-600">Here are a few things applicants often ask. Our team can help with the details of your specific loan.</p>
              <div className="mt-7 rounded-[22px] bg-[#e7f1ff] p-5 sm:p-6">
                <p className="text-sm font-semibold text-[#14233c]">Need tailored business financing?</p>
                <p className="mt-2 text-xs leading-5 text-slate-600">Talk with our loan specialists about your requirements.</p>
                <a href="mailto:info@irvinglobal.com" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-blue-700">Contact our team <ArrowUpRight className="h-3.5 w-3.5" /></a>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="divide-y divide-slate-200 border-y border-slate-200">
                {faqs.map(({ question, answer }, index) => <div key={question}>
                  <button id={`faq-question-${index}`} type="button" aria-expanded={activeFaq === index} aria-controls={`faq-answer-${index}`} onClick={() => setActiveFaq(activeFaq === index ? null : index)} className="flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6">
                    <span className="text-sm font-semibold text-[#14233c] sm:text-base">{question}</span>
                    <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-full transition ${activeFaq === index ? 'bg-blue-600 text-white' : 'bg-white text-slate-500'}`}><ChevronDown className={`h-4 w-4 transition-transform ${activeFaq === index ? 'rotate-180' : ''}`} /></span>
                  </button>
                  <AnimatePresence initial={false}>
                    {activeFaq === index && <motion.div id={`faq-answer-${index}`} role="region" aria-labelledby={`faq-question-${index}`} initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }} className="overflow-hidden"><p className="max-w-[640px] pb-5 pr-12 text-sm leading-6 text-slate-500">{answer}</p></motion.div>}
                  </AnimatePresence>
                </div>)}
              </div>
            </Reveal>
          </div>
        </section>

        <section id="contact" className="scroll-mt-20 px-5 pb-16 sm:px-8 sm:pb-20">
          <Reveal>
            <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[28px] bg-gradient-to-r from-[#e7f2ff] via-[#edf5fb] to-[#e6f7f3] p-6 sm:p-10 lg:p-12">
              <div className="grid items-center gap-8 lg:grid-cols-[.85fr_1.15fr] lg:gap-14">
                <div><Eyebrow>Stay in the know</Eyebrow><h2 className="mt-5 max-w-[460px] text-3xl font-semibold leading-tight tracking-[-0.025em] text-[#14233c] sm:text-[40px]">Updates and credit offers, made for you.</h2><p className="mt-3 max-w-[420px] text-sm leading-6 text-slate-600">Leave your details and your email app will open a message to our team.</p></div>
                <form onSubmit={openLeadEmail} className="grid gap-3 sm:grid-cols-2">
                  <label className="sr-only" htmlFor="lead-name">Name</label><input id="lead-name" name="name" autoComplete="name" required placeholder="Your name" className="h-12 min-w-0 rounded-xl border border-white bg-white/85 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" />
                  <label className="sr-only" htmlFor="lead-phone">Phone number</label><input id="lead-phone" name="phone" type="tel" autoComplete="tel" required placeholder="Phone number" className="h-12 min-w-0 rounded-xl border border-white bg-white/85 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" />
                  <label className="sr-only" htmlFor="lead-email">Email address</label><input id="lead-email" name="email" type="email" autoComplete="email" required placeholder="Email address" className="h-12 min-w-0 rounded-xl border border-white bg-white/85 px-4 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition focus:border-blue-300 focus:ring-4 focus:ring-blue-100" />
                  <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-700">Contact me <ArrowRight className="h-4 w-4" /></button>
                </form>
              </div>
            </div>
          </Reveal>
        </section>
      </main>

      <footer className="bg-[#14233c] px-5 pb-7 pt-12 text-white sm:px-8 sm:pt-16">
        <div className="mx-auto grid max-w-[1180px] gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_.8fr_.8fr_1fr]">
          <div>
            <Link href="/" aria-label="Irvin Global home"><Image src="/logo.png" alt="Irvin Global" width={148} height={42} className="h-auto w-[142px] object-contain brightness-0 invert" /></Link>
            <p className="mt-4 max-w-[270px] text-xs leading-6 text-slate-300">Licensed micro-credit and SME funding institution, with digital access and personal service.</p>
            <a href="mailto:info@irvinglobal.com" className="mt-4 inline-flex items-center gap-2 text-xs font-semibold text-white hover:text-blue-200"><Phone className="h-3.5 w-3.5" /> +234 907 821 6588</a>
          </div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[.12em] text-white">Financing</h2><ul className="mt-4 space-y-3 text-xs text-slate-300">{products.map((product) => <li key={product}><Link href="/products" className="transition hover:text-white">{product}</Link></li>)}<li><Link href="/calculator" className="transition hover:text-white">Loan calculator</Link></li></ul></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[.12em] text-white">Explore</h2><ul className="mt-4 space-y-3 text-xs text-slate-300"><li><Link href="/overview" className="transition hover:text-white">Customer portal</Link></li><li><Link href="/branches" className="transition hover:text-white">Branch network</Link></li><li><Link href="/status" className="transition hover:text-white">Track application</Link></li><li><Link href="/faq" className="transition hover:text-white">Help centre</Link></li></ul></div>
          <div><h2 className="text-xs font-semibold uppercase tracking-[.12em] text-white">Head office</h2><p className="mt-4 text-xs leading-6 text-slate-300">No 33, Pope John Paul Street, off Gana Street, Maitama, Abuja</p><a href="mailto:info@irvinglobal.com" className="mt-2 inline-block text-xs text-slate-300 transition hover:text-white">info@irvinglobal.com</a><p className="mt-5 text-[10px] leading-5 text-slate-400">Calculator amounts are illustrative and are not a loan offer. Terms are confirmed in your facility offer.</p></div>
        </div>
        <div className="mx-auto mt-10 flex max-w-[1180px] flex-col justify-between gap-4 border-t border-white/10 pt-6 text-[10px] text-slate-400 sm:flex-row sm:items-center">
          <p>© 2026 Irvin Global Financial Services. All rights reserved.</p>
          <div className="flex items-center gap-5"><a href="mailto:info@irvinglobal.com?subject=Privacy%20policy%20request" className="hover:text-white">Privacy enquiries</a><a href="mailto:info@irvinglobal.com?subject=Terms%20and%20conditions%20request" className="hover:text-white">Terms enquiries</a><a href="#top" onClick={(event) => { event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }} aria-label="Back to top" className="grid h-9 w-9 place-items-center rounded-full border border-white/20 text-white transition hover:bg-white/10"><ArrowUpRight className="h-4 w-4 -rotate-45" /></a></div>
        </div>
      </footer>
    </div>
  );
}

function UsersIcon() {
  return <span aria-hidden="true" className="text-[10px] font-bold">IG</span>;
}

function CircleRateIcon() {
  return <span aria-hidden="true" className="text-sm font-bold">%</span>;
}