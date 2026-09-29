'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import { Bell, CreditCard, FileText, Headphones, LayoutDashboard, LogOut, Menu, Moon, Search, Settings, Sun, WalletCards, X } from 'lucide-react';
import { toggleDarkMode, useDarkMode } from '@/lib/theme';

const navigation = [
  { href: '/overview', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/loans', label: 'My loans', icon: CreditCard },
  { href: '/payments', label: 'Payments', icon: WalletCards },
  { href: '/documents', label: 'Documents', icon: FileText },
  { href: '/status', label: 'Notifications', icon: Bell },
  { href: '/support', label: 'Support', icon: Headphones },
  { href: '/settings', label: 'Settings', icon: Settings },
];

export default function DashboardShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const darkMode = useDarkMode();

  function toggleTheme() {
    toggleDarkMode(darkMode);
  }

  return (
    <div className={`min-h-screen bg-[#f4f7fb] text-slate-800 transition-colors dark:bg-[#0b1220] dark:text-slate-100 lg:flex ${darkMode ? 'dark' : ''}`}>
      <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col border-r border-slate-200 bg-white dark:border-slate-800 dark:bg-[#111b2e] lg:flex">
        <div className="flex h-[76px] items-center border-b border-slate-100 px-7 dark:border-slate-800"><Link href="/overview"><Image src="/logo.png" alt="Irvin Global" width={142} height={40} className="object-contain" /></Link></div>
        <div className="px-4 pt-7"><p className="px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Workspace</p><nav className="mt-3 space-y-1">{navigation.map(({ href, label, icon: Icon }) => { const active = pathname === href; return <Link key={label} href={href} aria-current={active ? 'page' : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-[13px] font-medium transition ${active ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-blue-50 hover:text-blue-700 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'}`}><Icon className="h-4 w-4" />{label}{label === 'Notifications' && <span className="ml-auto h-2 w-2 rounded-full bg-blue-400" />}</Link>; })}</nav></div>
        <div className="mt-auto border-t border-slate-100 p-4 dark:border-slate-800"><Link href="/" className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm text-slate-500 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"><LogOut className="h-4 w-4" />Back to website</Link></div>
      </aside>
      <div className="min-w-0 flex-1">
        <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-slate-200 bg-white/95 px-4 backdrop-blur dark:border-slate-800 dark:bg-[#111b2e]/95 sm:px-8"><div className="flex items-center gap-3 lg:hidden"><button type="button" aria-label={menuOpen ? 'Close dashboard menu' : 'Open dashboard menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300">{menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button><Link href="/overview"><Image src="/logo.png" alt="Irvin Global" width={118} height={34} className="object-contain" /></Link></div><label className="hidden h-10 w-full max-w-[340px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-slate-400 dark:border-slate-700 dark:bg-[#0b1220] md:flex"><Search className="h-4 w-4" /><input aria-label="Search" placeholder="Search anything..." className="w-full border-0 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 dark:text-slate-200" /></label><div className="flex items-center gap-2 sm:gap-3"><button type="button" onClick={toggleTheme} aria-label={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} aria-pressed={darkMode} title={darkMode ? 'Switch to light theme' : 'Switch to dark theme'} className="grid h-9 w-9 place-items-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-blue-300 hover:text-blue-700 dark:border-slate-700 dark:bg-[#0b1220] dark:text-slate-300"><span className="sr-only">{darkMode ? 'Light theme' : 'Dark theme'}</span>{darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}</button><Link href="/status" aria-label="Notifications" className="relative grid h-9 w-9 place-items-center rounded-lg border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-300"><Bell className="h-4 w-4" /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-blue-500" /></Link><div className="flex items-center gap-2.5"><span className="grid h-9 w-9 place-items-center rounded-full bg-blue-100 text-xs font-bold text-blue-700 dark:bg-blue-900 dark:text-blue-100">MO</span><span className="hidden text-sm font-semibold text-slate-700 dark:text-slate-200 sm:block">Michelle Okafor</span></div></div></header>
        {menuOpen && <nav aria-label="Mobile dashboard navigation" className="absolute left-0 right-0 z-20 border-b border-slate-200 bg-white p-3 shadow-md dark:border-slate-800 dark:bg-[#111b2e] lg:hidden">{navigation.map(({ href, label, icon: Icon }) => <Link key={label} href={href} onClick={() => setMenuOpen(false)} aria-current={pathname === href ? 'page' : undefined} className={`flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-medium ${pathname === href ? 'bg-blue-600 text-white' : 'text-slate-600 hover:bg-blue-50 dark:text-slate-300 dark:hover:bg-slate-800'}`}><Icon className="h-4 w-4" />{label}</Link>)}</nav>}
        <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-8 sm:py-9">{children}</main>
      </div>
    </div>
  );
}
