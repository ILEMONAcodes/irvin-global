import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="bg-white/80 backdrop-blur-md border-b border-slate-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="/">
          <Image src="/logo.png" alt="Irvin Global" width={150} height={40} className="object-contain" />
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="/#calculator" className="hover:text-blue-600 transition">Calculator</a>
          <a href="/overview" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="/branches" className="hover:text-blue-600 transition">Branches</a>
          <a href="/investments" className="hover:text-blue-600 transition">Investments</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="/login" className="text-xs font-semibold text-slate-700 hover:text-blue-600 px-3 py-2">
            Sign In
          </a>
          <a
            href="/apply"
            className="bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition"
          >
            Apply Online
          </a>
        </div>
      </div>
    </header>
  );
}