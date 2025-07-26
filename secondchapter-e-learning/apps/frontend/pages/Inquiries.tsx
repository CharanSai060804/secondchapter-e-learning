
import React from 'react';
import { useTranslation } from 'react-i18next';

const Inquiries = () => {
  const { t } = useTranslation();
  return <div className="p-4 text-xl">{t('inquiries')} page</div>;
};

export default Inquiries;
