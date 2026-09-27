'use client';

import { usePathname } from 'next/navigation';
import Header from '@/components/common/Header';

const ROUTES_WITH_OWN_HEADER = ['/branches', '/calculator', '/faq', '/admin/review'];
const ROUTES_WITHOUT_PUBLIC_HEADER = [
  '/login',
  '/overview',
  '/investments',
  '/loans',
  '/payments',
  '/documents',
  '/settings',
  '/support',
  '/status',
];

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const routeHasOwnHeader = ROUTES_WITH_OWN_HEADER.some((route) => pathname === route || pathname.startsWith(`${route}/`));
  const routeHidesPublicHeader = ROUTES_WITHOUT_PUBLIC_HEADER.some((route) => pathname === route || pathname.startsWith(`${route}/`));

  return <>{!routeHasOwnHeader && !routeHidesPublicHeader && <Header />}{children}</>;
}