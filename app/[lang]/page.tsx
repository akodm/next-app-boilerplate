import MainContent from '@/components/main/content';
import { initI18n } from '@/lib/i18n/init-i18n';

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  initI18n(lang); // <- necessary to initialize the i18n instance in server components

  return <MainContent />;
}
