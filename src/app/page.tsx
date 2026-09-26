import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Building2, CircleDollarSign, ShieldCheck, Users } from 'lucide-react';
import Footer from '@/components/common/Footer';

const metrics = [
  { icon: ShieldCheck, value: '10+', label: 'Years of impact' },
  { icon: Building2, value: '30+', label: 'Branches nationwide' },
  { icon: Users, value: '5,000+', label: 'Finance professionals' },
  { icon: BriefcaseBusiness, value: 'Trusted by', label: 'Individuals, SMEs & corporates' },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-slate-800">
      <main>
        <section className="relative isolate flex min-h-[min(82svh,820px)] overflow-hidden bg-[#0B132B] text-white">
          <div role="img" aria-label="Irvin Global professional portrait" className="absolute inset-y-0 right-0 z-0 w-full bg-cover bg-[center_5%] bg-no-repeat md:w-[72%]" style={{ backgroundImage: "url('/iryn.jpeg?v=2')" }} />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(90deg,#0B132B_0%,rgba(11,19,43,.95)_24%,rgba(11,19,43,.76)_43%,rgba(11,19,43,.18)_69%,transparent_100%)]" />
          <div className="absolute inset-0 z-10 bg-[linear-gradient(0deg,rgba(11,19,43,.58)_0%,transparent_38%)]" />
          <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col px-5 pb-14 pt-7 sm:px-8 sm:pb-16 sm:pt-9 lg:pb-20">
            <Link href="/" aria-label="Irvin Global home" className="inline-flex w-fit">
              <Image src="/logo.png" alt="Irvin Global" width={142} height={40} className="object-contain brightness-0 invert" priority />
            </Link>
            <div className="my-auto max-w-[580px] py-16 animate-[fade-in_.7s_ease-out_both]">
              <p className="mb-6 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[.18em] text-[#D4AF37]"><span className="h-px w-7 bg-[#D4AF37]" />Financial solutions for a brighter tomorrow</p>
              <h1 className="text-[42px] font-semibold leading-[1.08] text-white sm:text-[54px] lg:text-[64px]">Finance your next move with confidence.</h1>
              <p className="mt-6 max-w-md text-base leading-7 text-slate-200 sm:text-lg">Personal and business loans for life&apos;s urgent needs and your next stage of growth. Built on trust. Driven by people.</p>
              <div className="mt-9 flex flex-wrap gap-3"><Link href="/products" className="inline-flex items-center gap-3 rounded-lg bg-[#D4AF37] px-6 py-3.5 text-sm font-bold text-[#0B132B] transition hover:bg-[#e1c35a]">Explore loan services <ArrowRight className="h-4 w-4" /></Link><Link href="/branches" className="inline-flex items-center gap-3 rounded-lg border border-white/40 bg-[#0B132B]/30 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-[#0B132B]/55">Find a branch <ArrowRight className="h-4 w-4" /></Link></div>
              <div className="mt-10 text-sm text-slate-200"><strong className="text-white">5,000+</strong> people building their next move</div>
            </div>
          </div>
        </section>
        <section aria-label="Irvin Global at a glance" className="border-b border-slate-200 bg-white"><div className="mx-auto grid max-w-7xl grid-cols-2 divide-y divide-slate-100 px-5 sm:px-8 md:grid-cols-4 md:divide-x md:divide-y-0">{metrics.map(({ icon: Icon, value, label }) => <div key={label} className="flex min-h-[108px] items-center gap-3 px-2 py-5 sm:px-5"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-[#f8f4e8] text-[#99751d]"><Icon className="h-5 w-5" /></span><div><p className="text-base font-bold text-[#0B132B]">{value}</p><p className="mt-0.5 text-xs leading-4 text-slate-500">{label}</p></div></div>)}</div></section>
        <section className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-[1fr_auto] md:items-end"><div className="max-w-xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#99751d]">Move with purpose</p><h2 className="mt-3 text-3xl font-semibold text-[#0B132B]">Financial services built around real life.</h2><p className="mt-3 leading-7 text-slate-600">From urgent personal expenses to working capital for your business, find a lending solution designed around your needs.</p></div><div className="flex flex-wrap gap-3"><Link href="/products" className="inline-flex items-center gap-2 rounded-lg bg-[#0B132B] px-5 py-3 text-sm font-semibold text-white hover:bg-[#152344]">Explore loan services <ArrowRight className="h-4 w-4" /></Link><Link href="/calculator" className="inline-flex items-center gap-2 rounded-lg border border-slate-200 px-5 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50"><CircleDollarSign className="h-4 w-4" />Loan calculator</Link></div></section>
      </main>
      <Footer />
    </div>
  );
}