import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, HelpCircle } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0B132B] text-white flex flex-col justify-between p-6">
      <div className="max-w-7xl mx-auto w-full pt-6">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="Irvin Global Logo"
            width={150}
            height={40}
            className="object-contain brightness-200 invert"
          />
        </Link>
      </div>

      <main className="max-w-xl mx-auto text-center space-y-6 my-auto py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 text-blue-400 rounded-3xl border border-blue-500/30 font-mono font-bold text-2xl">
          404
        </div>

        <h1 className="text-3xl sm:text-4xl font-black">Page Not Found</h1>
        
        <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
          The financial service, application record, or page you are looking for doesn&apos;t exist or has been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="w-full sm:w-auto bg-[#D4AF37] hover:bg-[#e1c35a] text-[#0B132B] font-bold text-xs px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>

          <Link
            href="/faq"
            className="w-full sm:w-auto bg-white/5 hover:bg-white/10 text-slate-200 border border-white/20 font-bold text-xs px-6 py-3.5 rounded-lg flex items-center justify-center gap-2 transition"
          >
            <HelpCircle className="w-4 h-4 text-[#D4AF37]" /> Help Center
          </Link>
        </div>
      </main>

      <footer className="max-w-7xl mx-auto w-full text-center text-slate-500 text-[11px] pb-6">
        © 2026 Irvin Global Financial Services. Regulated Micro-Credit Infrastructure.
      </footer>
    </div>
  );
}