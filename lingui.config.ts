import { defineConfig } from '@lingui/cli';
import { defaultLocale, locales } from './lib/i18n/config';

export default defineConfig({
  locales: locales,
  pseudoLocale: 'pseudo',
  sourceLocale: defaultLocale,
  catalogs: [
    {
      path: '<rootDir>/locales/{locale}',
      include: ['.'],
    },
  ],
});
