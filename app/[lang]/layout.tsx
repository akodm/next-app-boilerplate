import type { Metadata, Viewport } from 'next';
import '@/css/globals.css';
import { locales } from '@/lib/i18n/config';
import { notFound } from 'next/navigation';
import { initI18n } from '@/lib/i18n/init-i18n';
import { LinguiClientProvider } from '@/components/providers/lingui';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
};

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export const metadata: Metadata = {
  title: 'Next App Boilerplate',
  description: 'Next App Boilerplate',
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  if (!locales.includes(lang)) {
    notFound();
  }

  const i18n = initI18n(lang);

  return (
    <html lang={lang}>
      <body>
        <LinguiClientProvider
          initialLocale={lang}
          initialMessages={i18n.messages}
        >
          {children}
        </LinguiClientProvider>
      </body>
    </html>
  );
}
