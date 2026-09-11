import React from 'react';
import Image from 'next/image';
import { Lock, ArrowRight, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-2xl p-8 max-w-md w-full space-y-6">
        <div className="text-center">
          <a href="/" className="inline-block mb-4">
            <Image src="/logo.png" alt="Irvin Global" width={160} height={45} className="object-contain mx-auto" />
          </a>
          <h1 className="text-2xl font-black text-slate-900">Sign In</h1>
          <p className="text-xs text-slate-500 mt-1">Access your customer dashboard & active credit profile</p>
        </div>

        <form action="/overview" className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Email or Phone Number</label>
            <input
              type="text"
              required
              placeholder="e.g. ilemona@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-600 mb-1">Password</label>
            <input
              type="password"
              required
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm"
            />
          </div>

          <div className="flex justify-between items-center text-xs">
            <label className="flex items-center gap-2 text-slate-600 cursor-pointer">
              <input type="checkbox" className="rounded border-slate-300 text-blue-600 focus:ring-blue-500" />
              Remember me
            </label>
            <a href="#" className="text-blue-600 font-semibold hover:underline">Forgot?</a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 text-xs flex items-center justify-center gap-2 transition"
          >
            Sign In to Dashboard <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        <div className="pt-4 border-t border-slate-100 text-center">
          <p className="text-xs text-slate-500">
            Don't have an account yet?{' '}
            <a href="/apply" className="text-blue-600 font-bold hover:underline">Apply for Credit</a>
          </p>
        </div>
      </div>
    </div>
  );
}