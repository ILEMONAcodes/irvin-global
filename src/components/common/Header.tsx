'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Menu, X } from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1320px] items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Irvin Global home" className="shrink-0">
          <Image src="/logo.png" alt="Irvin Global" width={148} height={42} priority className="h-auto w-[132px] object-contain sm:w-[148px]" />
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          <Link href="/products" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Loans</Link>
          <Link href="/#about" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">About us</Link>
          <Link href="/#how-it-works" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">How it works</Link>
          <Link href="/#faq" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">FAQ</Link>
          <Link href="/#contact" className="text-sm font-medium text-slate-600 transition hover:text-blue-700">Contact</Link>
        </nav>
        <div className="hidden items-center gap-5 lg:flex">
          <ThemeToggle compact />
          <label className="sr-only" htmlFor="language">Language</label>
          <select id="language" defaultValue="en" aria-label="Language" className="cursor-pointer border-0 bg-transparent text-sm font-semibold text-slate-600 outline-none">
            <option value="en">EN</option>
          </select>
          <Link href="/login" className="text-sm font-semibold text-slate-700 transition hover:text-blue-700">Log in</Link>
          <Link href="/apply" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(37,99,235,.2)] transition hover:-translate-y-0.5 hover:bg-blue-700">Apply for a loan <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
        <button type="button" aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 text-slate-700 lg:hidden">
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && <motion.nav initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} aria-label="Mobile navigation" className="overflow-hidden border-t border-slate-100 bg-white lg:hidden">
          <div className="mx-auto grid max-w-[1320px] gap-1 px-5 py-3 sm:px-8">
            {[
              ['Loans', '/products'], ['About us', '/#about'], ['How it works', '/#how-it-works'], ['FAQ', '/#faq'], ['Contact', '/#contact'], ['Log in', '/login'],
            ].map(([label, href]) => <Link key={label} href={href} onClick={() => setMobileMenuOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-blue-50">{label}</Link>)}
            <div className="px-3 py-2"><ThemeToggle /></div>
            <Link href="/apply" onClick={() => setMobileMenuOpen(false)} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white">Apply for a loan <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}