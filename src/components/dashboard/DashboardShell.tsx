'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, BriefcaseBusiness, CreditCard, FileText, Headphones, LayoutDashboard, LogOut, Menu, Search, Settings, WalletCards, X } from 'lucide-react';

const navigation = [
  { href: '/overview', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/loans', label: 'My loans', icon: CreditCard },
  { href: '/apply', label: 'Apply for loan', icon: BriefcaseBusiness },
  { href: '/overview#payments', label: 'Payments', icon: WalletCards },
  { href: '/overview#documents', label: 'Documents', icon: FileText },
  { href: '/status', label: 'Notifications', icon: Bell },
  { href: '/branches', label: 'Support', icon: Headphones },
  { href: '/overview#settings', label: 'Settings', icon: Settings },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-[#F4F6F9] text-slate-800 lg:flex">
      <aside className="hidden w-[248px] shrink-0 flex-col border-r border-slate-200 bg-white lg:flex">
        <div className="flex h-[76px] items-center border-b border-slate-100 px-7"><Link href="/overview"><Image src="/logo.png" alt="Irvin Global" width={142} height={40} className="object-contain" /></Link></div>
        <div className="px-4 pt-7"><p className="px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Workspace</p><nav className="mt-3 space-y-1">{navigation.map(({ href, label, icon: Icon }) => { const active = pathname === href.split('#')[0]; return <Link key={label} href={href} aria-current={active ? 'page' : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${active ? 'bg-[#0B132B] text-white' : 'text-slate-600 hover:bg-slate-50 hover:text-[#0B132B]'}`}><Icon className="h-4 w-4" />{label}{label === 'Notifications' && <span className="ml-auto h-2 w-2 rounded-full bg-[#D4AF37]" />}</Link>; })}</nav></div>
        <div className="mt-auto border-t border-slate-100 p-4"><Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50"><LogOut className="h-4 w-4" />Back to website</Link></div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur sm:px-8"><div className="flex items-center gap-3 lg:hidden"><button type="button" aria-label={menuOpen ? 'Close dashboard menu' : 'Open dashboard menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600">{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button><Link href="/overview"><Image src="/logo.png" alt="Irvin Global" width={118} height={34} className="object-contain" /></Link></div><label className="hidden h-10 w-full max-w-[340px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-slate-400 md:flex"><Search className="h-4 w-4" /><input aria-label="Search" placeholder="Search anything..." className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400" /></label><div className="flex items-center gap-3"><Link href="/status" aria-label="Notifications" className="relative grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600"><Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-rose-500" /></Link><div className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-full bg-[#e9e4d8] text-xs font-bold text-[#0B132B]">MO</span><span className="hidden text-sm font-semibold text-slate-700 sm:block">Michelle Okafor</span></div></div></header>
        {menuOpen && <nav aria-label="Mobile dashboard navigation" className="absolute left-0 right-0 z-20 border-b border-slate-200 bg-white p-3 shadow-md lg:hidden">{navigation.map(({ href, label, icon: Icon }) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${pathname === href.split('#')[0] ? 'bg-[#0B132B] text-white' : 'text-slate-600 hover:bg-slate-100'}`}><Icon className="h-4 w-4" />{label}</Link>)}</nav>}
        <main className="mx-auto max-w-[1440px] px-4 py-7 sm:px-8 sm:py-9">{children}</main>
      </div>
    </div>
  );
}
