export const localeOptions = [
  {
    label: 'English',
    value: 'en',
  },
  {
    label: '한국어',
    value: 'ko',
  },
];

export const locales = localeOptions.map((option) => option.value);
export const defaultLocale = localeOptions[0].value;

export type Locale = (typeof localeOptions)[number]['value'];
