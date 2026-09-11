import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 text-xs py-16 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="space-y-4">
          <Image src="/logo.png" alt="Irvin Global" width={150} height={40} className="object-contain brightness-200 invert" />
          <p className="text-slate-400 leading-relaxed">
            Licensed micro-credit and SME funding institution dedicated to fast digital access and physical branch excellence.
          </p>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Loan Products</h4>
          <ul className="space-y-2.5">
            <li><a href="/apply?product=payday" className="hover:text-white transition">Payday Salary Loan</a></li>
            <li><a href="/apply?product=payroll" className="hover:text-white transition">Public Sector Payroll</a></li>
            <li><a href="/apply?product=sme" className="hover:text-white transition">SME Working Capital</a></li>
            <li><a href="/apply?product=stepup" className="hover:text-white transition">Trader Step-Up Credit</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Quick Navigation</h4>
          <ul className="space-y-2.5">
            <li><a href="/#calculator" className="hover:text-white transition">Loan Calculator</a></li>
            <li><a href="/overview" className="hover:text-white transition">Customer Portal</a></li>
            <li><a href="/branches" className="hover:text-white transition">Branch Network</a></li>
            <li><a href="/investments" className="hover:text-white transition">Fixed Deposits</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Head Office</h4>
          <ul className="space-y-3">
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
              <span>No 33, Pope John Paul Street, off Gana Street, Maitama, Abuja</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
              <span className="text-white font-bold">+234 907 821 6588</span>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>info@irvinglobal.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 mt-12 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-slate-500">
        <p>© 2026 Irvin Global Financial Services. All rights reserved.</p>
        <p className="flex items-center gap-1 text-slate-400 font-semibold">
          <ShieldCheck className="w-4 h-4 text-emerald-500" /> Fully Encrypted & Regulated System
        </p>
      </div>
    </footer>
  );
}