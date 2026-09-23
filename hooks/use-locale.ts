'use client';

import { usePathname } from 'next/navigation';
import { defaultLocale } from '@/lib/i18n/config';
import { isLocale } from '@/lib/i18n/localize';

export default function useLocale() {
  const pathname = usePathname();
  const first = pathname.split('/')[1];
  return isLocale(first) ? first : defaultLocale;
}
