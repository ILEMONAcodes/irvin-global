import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Home, HelpCircle } from 'lucide-react';
import ThemeToggle from '@/components/common/ThemeToggle';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-[#f5f8fc] p-6 text-[#14233c]">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between pt-6">
        <Link href="/" className="inline-block">
          <Image
            src="/logo.png"
            alt="Irvin Global Logo"
            width={150}
            height={40}
            className="object-contain"
          />
        </Link>
        <ThemeToggle compact />
      </div>

      <main className="max-w-xl mx-auto text-center space-y-6 my-auto py-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600/20 text-blue-400 rounded-3xl border border-blue-500/30 font-mono font-bold text-2xl">
          404
        </div>

        <h1 className="text-3xl font-black text-[#14233c] sm:text-4xl">Page Not Found</h1>
        
        <p className="text-xs leading-relaxed text-slate-600 sm:text-sm">
          The financial service, application record, or page you are looking for doesn&apos;t exist or has been relocated.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3.5 text-xs font-bold text-white transition hover:bg-blue-700 sm:w-auto"
          >
            <Home className="w-4 h-4" /> Return to Homepage
          </Link>

          <Link
            href="/faq"
            className="flex w-full items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-xs font-bold text-slate-700 transition hover:bg-blue-50 sm:w-auto"
          >
            <HelpCircle className="h-4 w-4 text-blue-600" /> Help Center
          </Link>
        </div>
      </main>

      <footer className="mx-auto w-full max-w-7xl pb-6 text-center text-[11px] text-slate-500">
        © 2026 Irvin Global Financial Services. Regulated Micro-Credit Infrastructure.
      </footer>
    </div>
  );
}