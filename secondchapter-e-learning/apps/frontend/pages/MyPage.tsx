
import React from 'react';
import { useTranslation } from 'react-i18next';

const MyPage = () => {
  const { t } = useTranslation();
  return <div className="p-4 text-xl">{t('mypage')} page</div>;
};

export default MyPage;
