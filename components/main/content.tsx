import { useLingui } from '@lingui/react/macro';

export default function MainContent() {
  const { t } = useLingui();

  return <div>{t`Server Component I18n template`}</div>;
}
