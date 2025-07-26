
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { i18n, t } = useTranslation();
  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en');

  return (
    <nav className="p-4 bg-gray-200 flex justify-between">
      <div className="space-x-4">
        <Link to="/home">{t('home')}</Link>
        <Link to="/quotes">{t('quotes')}</Link>
        <Link to="/inquiries">{t('inquiries')}</Link>
        <Link to="/mypage">{t('mypage')}</Link>
      </div>
      <button onClick={toggleLang} className="bg-blue-500 text-white px-2 py-1 rounded">
        {i18n.language === 'en' ? '🇰🇷' : '🇬🇧'}
      </button>
    </nav>
  );
};

export default Navbar;
