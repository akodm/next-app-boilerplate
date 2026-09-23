'use client';

import { ComponentProps } from 'react';
import NextLink from 'next/link';
import { localizeHref } from '@/lib/i18n/localize';
import useLocale from '@/hooks/use-locale';

export type Props = ComponentProps<typeof NextLink>;

export default function Link({ href, ...props }: Props) {
  const locale = useLocale();

  const finalHref =
    typeof href === 'string' ? localizeHref(href, locale) : href;

  return <NextLink {...props} href={finalHref} draggable={false} />;
}
