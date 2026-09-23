'use client';

import { useLingui } from '@lingui/react/macro';

export default function ClientTempContent() {
  const { t } = useLingui();

  return <div>{t`Client Component I18n template`}</div>;
}
