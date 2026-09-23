import { defaultLocale, locales } from '@/lib/i18n/config';

export const isLocale = (value: string) => {
  return locales.includes(value);
};

export const pathHasLocale = (path: string) => {
  return isLocale(path.split('/')?.[1]);
};

export const localizeHref = (href: string, locale: string) => {
  const safeLocale = isLocale(locale) ? locale : defaultLocale;

  if (href.startsWith('/') && !pathHasLocale(href)) {
    return `/${safeLocale}${href}`;
  }
  return href;
};

export const stripLocaleFromPathname = (pathname: string) => {
  const segments = pathname.split('/');
  const firstSegment = segments[1];

  if (!isLocale(firstSegment)) {
    return pathname;
  }

  const rest = segments.slice(2).join('/');
  return rest ? `/${rest}` : '/';
};

export const switchLocalePathname = (
  pathname: string,
  targetLocale: string,
) => {
  const safeLocale = isLocale(targetLocale) ? targetLocale : defaultLocale;
  const pathWithoutLocale = stripLocaleFromPathname(pathname);

  if (pathWithoutLocale === '/') {
    return `/${safeLocale}`;
  }

  return `/${safeLocale}${pathWithoutLocale}`;
};
