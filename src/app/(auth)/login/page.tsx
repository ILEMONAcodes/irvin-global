import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, LockKeyhole, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  return (
    <main className="grid min-h-screen bg-[#F4F6F9] lg:grid-cols-2">
      <section className="relative hidden overflow-hidden bg-[#0B132B] p-12 text-white lg:flex lg:flex-col lg:justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Irvin Global" width={150} height={42} className="brightness-0 invert" />
        </Link>
        <div className="relative z-10 max-w-lg pb-16">
          <p className="text-xs font-bold uppercase tracking-[.18em] text-[#D4AF37]">Your goals, our commitment</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight">Good to have you back.</h1>
          <p className="mt-4 max-w-md leading-7 text-slate-300">Manage your loans, track your applications, and stay on top of your repayments.</p>
        </div>
        <div className="absolute bottom-0 right-0 h-[55%] w-[65%] bg-cover bg-center opacity-25" style={{ backgroundImage: "linear-gradient(0deg,#0B132B,transparent),url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80')" }} />
      </section>
      <section className="flex items-center justify-center px-5 py-12 sm:px-8">
        <div className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-7 shadow-sm sm:p-9">
          <Link href="/" className="mb-7 inline-block lg:hidden">
            <Image src="/logo.png" alt="Irvin Global" width={140} height={40} />
          </Link>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-[#0B132B]">Welcome back.</h2>
            <p className="mt-2 text-sm text-slate-500">Sign in to manage your account.</p>
          </div>
          <form action="/overview" className="space-y-5">
            <div>
              <label htmlFor="identifier" className="mb-2 block text-sm font-medium text-slate-700">
                Email or phone number
              </label>
              <input
                id="identifier"
                type="text"
                required
                placeholder="name@example.com"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label htmlFor="password" className="text-sm font-medium text-slate-700">
                  Password
                </label>
                <Link href="/status" className="text-xs font-semibold text-[#99751d] hover:underline">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm placeholder:text-slate-400 focus:border-[#D4AF37] focus:outline-none"
              />
            </div>
            <label className="flex items-center gap-2 text-sm text-slate-600">
              <input type="checkbox" className="h-4 w-4 rounded border-slate-300 accent-[#0B132B]" />
              Remember me
            </label>
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#0B132B] py-3.5 text-sm font-bold text-white transition hover:bg-[#152344]"
            >
              Sign in <ArrowRight className="h-4 w-4" />
            </button>
          </form>
          <div className="my-6 flex items-center gap-3">
            <span className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">or continue with</span>
            <span className="h-px flex-1 bg-slate-200" />
          </div>
          <button className="flex w-full items-center justify-center gap-3 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-slate-700 hover:bg-slate-50">
            <span className="text-base font-bold">G</span>Google
          </button>
          <p className="mt-7 text-center text-sm text-slate-500">
            Don’t have an account?{' '}
            <Link href="/apply" className="font-bold text-[#99751d]">
              Create one
            </Link>
          </p>
          <p className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400">
            <LockKeyhole className="h-3.5 w-3.5" />
            <ShieldCheck className="h-3.5 w-3.5" />Your information is encrypted and secure
          </p>
        </div>
      </section>
    </main>
  );
}