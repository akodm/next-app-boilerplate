import { setI18n } from '@lingui/react/server';
import { getI18nInstance } from '@/lib/i18n/app-router-i18n';

export function initI18n(lang: string) {
  const i18n = getI18nInstance(lang);
  setI18n(i18n);
  return i18n;
}
