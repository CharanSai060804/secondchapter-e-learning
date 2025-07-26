
import React from 'react';
import { useTranslation } from 'react-i18next';

const Quotes = () => {
  const { t } = useTranslation();
  return <div className="p-4 text-xl">{t('quotes')} page</div>;
};

export default Quotes;
