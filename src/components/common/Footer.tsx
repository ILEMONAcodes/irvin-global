import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0B132B] py-14 text-xs text-slate-400">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 sm:px-8 md:grid-cols-4">
        <div className="space-y-4">
          <Image src="/logo.png" alt="Irvin Global" width={150} height={40} className="object-contain brightness-0 invert" />
          <p className="max-w-xs leading-6">
            Licensed micro-credit and SME funding institution dedicated to clear digital access and personal service.
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-bold uppercase tracking-wider text-white">Financing</h2>
          <ul className="space-y-3">
            <li><Link href="/products" className="transition hover:text-blue-300">Payday Credit Facility</Link></li>
            <li><Link href="/products" className="transition hover:text-blue-300">Payroll Credit Facility</Link></li>
            <li><Link href="/products" className="transition hover:text-blue-300">Step-Up Loan</Link></li>
            <li><Link href="/products" className="transition hover:text-blue-300">SME Loan</Link></li>
            <li><Link href="/calculator" className="transition hover:text-blue-300">Loan calculator</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-bold uppercase tracking-wider text-white">Explore</h2>
          <ul className="space-y-3">
            <li><Link href="/overview" className="transition hover:text-blue-300">Customer portal</Link></li>
            <li><Link href="/branches" className="transition hover:text-blue-300">Branch network</Link></li>
            <li><Link href="/products" className="transition hover:text-blue-300">Our services</Link></li>
            <li><Link href="/status" className="transition hover:text-blue-300">Track application</Link></li>
          </ul>
        </div>

        <div>
          <h2 className="mb-4 font-bold uppercase tracking-wider text-white">Head office</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-blue-300" />
              <span>No 33, Pope John Paul Street, off Gana Street, Maitama, Abuja</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
              <span className="font-bold text-white">+234 907 821 6588</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-blue-300" />
              <span>info@irvinglobal.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 px-5 pt-7 text-slate-500 sm:flex-row sm:px-8">
        <p>© 2026 Irvin Global Financial Services. All rights reserved.</p>
        <p className="flex items-center gap-2 font-semibold text-slate-400">
          <ShieldCheck className="h-4 w-4 text-emerald-500" /> Fully encrypted &amp; regulated system
        </p>
      </div>
    </footer>
  );
}