import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-100 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Irvin Global home"><Image src="/logo.png" alt="Irvin Global" width={142} height={40} className="object-contain" /></Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
          <Link href="/products" className="transition hover:text-[#0B132B]">Personal</Link>
          <Link href="/products" className="transition hover:text-[#0B132B]">Business</Link>
          <Link href="/products" className="transition hover:text-[#0B132B]">Our services</Link>
          <Link href="/branches" className="transition hover:text-[#0B132B]">About</Link>
          <Link href="/status" className="transition hover:text-[#0B132B]">Support</Link>
        </div>
        <div className="flex items-center gap-3"><Link href="/login" className="hidden px-3 py-2 text-sm font-semibold text-slate-700 sm:block">Sign in</Link><Link href="/apply" className="rounded-lg bg-[#D4AF37] px-5 py-2.5 text-sm font-bold text-[#0B132B] transition hover:bg-[#c5a02e]">Apply now</Link></div>
      </nav>
    </header>
  );
}