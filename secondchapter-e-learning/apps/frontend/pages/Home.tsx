
import React from 'react';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const { t } = useTranslation();
  return <div className="p-4 text-xl">{t('homes')} page</div>;
};

export default Home;
