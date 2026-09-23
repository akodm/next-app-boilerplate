import { NextRequest, NextResponse } from 'next/server';
import { defaultLocale, locales } from '@/lib/i18n/config';
import Negotiator from 'negotiator';

function getLocale(requestHeaders: Headers): string {
  const langHeader = requestHeaders.get('accept-language') || undefined;
  const languages = new Negotiator({
    headers: { 'accept-language': langHeader },
  }).languages(locales.slice());

  const activeLocale = languages[0] || locales[0] || defaultLocale;

  return activeLocale;
}

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  );

  if (pathnameHasLocale) return;

  const locale = getLocale(request.headers);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico|.*\\..*$).*)'],
};
