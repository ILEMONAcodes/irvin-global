'use client';

import { useState } from 'react';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Link from 'next/link';
import { ArrowRight, BriefcaseBusiness, Check, CircleDollarSign, Users } from 'lucide-react';

const categories = ['Personal', 'Business'] as const;
type Category = typeof categories[number];
const products: { title: string; category: Category; description: string; icon: typeof CircleDollarSign; features: string[]; href: string }[] = [
  { title: 'Payday Loan', category: 'Personal', description: 'A salary-backed facility for urgent needs of employees in private establishments.', icon: CircleDollarSign, features: ['Loan amount based on net salary', 'Affordable 6% rate', 'Flexible tenure up to 273 days'], href: '/apply?product=payday' },
  { title: 'Payroll Loan', category: 'Personal', description: 'A salary-backed facility for employees in public establishments.', icon: Users, features: ['Personal guarantee', 'Repayment structured against salary', 'Affordable 6% rate'], href: '/apply?product=payroll' },
  { title: 'Step-Up Loan', category: 'Business', description: 'Working capital for traders with viable lock-up shops and daily sales.', icon: BriefcaseBusiness, features: ['Built for active traders', 'Supports day-to-day working capital', 'Convenient repayment'], href: '/apply?product=stepup' },
  { title: 'SME Loan', category: 'Business', description: 'Financing for small businesses, working capital, projects, and supply orders.', icon: BriefcaseBusiness, features: ['Flexible collateral options', 'Repayment matched to business turnover', 'For projects and supply orders'], href: '/apply?product=sme' },
];

export default function ProductsPage() {
  const [category, setCategory] = useState<Category>('Personal');
  const visible = products.filter((product) => product.category === category);
  return <div className="min-h-screen bg-[#F8F9FA] text-slate-800"><Header /><main className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16"><div className="max-w-2xl"><p className="text-xs font-bold uppercase tracking-[.16em] text-[#99751d]">Financing solutions</p><h1 className="mt-3 text-3xl font-semibold text-[#0B132B] sm:text-4xl">Find the right financing for your goals.</h1><p className="mt-3 leading-7 text-slate-600">Flexible solutions for individuals, businesses and corporate organisations.</p></div><div className="mt-8 flex gap-2 border-b border-slate-200">{categories.map((item) => <button key={item} onClick={() => setCategory(item)} className={`border-b-2 px-5 py-3 text-sm font-semibold transition ${category === item ? 'border-[#D4AF37] text-[#0B132B]' : 'border-transparent text-slate-500 hover:text-slate-800'}`}>{item}</button>)}</div><div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">{visible.map(({ title, description, icon: Icon, features, href }) => <article key={title} className="flex flex-col rounded-xl border border-slate-200 bg-white p-6 shadow-sm"><span className="grid h-11 w-11 place-items-center rounded-lg bg-[#f8f4e8] text-[#99751d]"><Icon className="h-5 w-5" /></span><h2 className="mt-5 text-lg font-semibold text-[#0B132B]">{title}</h2><p className="mt-2 min-h-12 text-sm leading-6 text-slate-600">{description}</p><ul className="mt-5 space-y-3 border-t border-slate-100 pt-5">{features.map((feature) => <li key={feature} className="flex items-center gap-2 text-sm text-slate-600"><Check className="h-4 w-4 text-emerald-700" />{feature}</li>)}</ul><Link href={href} className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0B132B] hover:text-[#99751d]">Learn more <ArrowRight className="h-4 w-4" /></Link></article>)}</div></main><Footer /></div>;
}