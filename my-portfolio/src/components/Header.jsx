import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";

const Header = () => {
  const { t } = useTranslation();
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };


  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
      <div className='flex w-full'>
        <div className="w-full px-4 py-4">
          <nav className="flex justify-between w-3/4 items-start space-x-1 text-white">
            <button onClick={() => scrollToSection('about')} className="hover:underline -x2">{t("navigateAbout")}</button>
            <button onClick={() => scrollToSection('projects')} className="hover:underline">{t("navigateProjects")}</button>
            <button onClick={() => scrollToSection('skills')} className="hover:underline">{t("navigateSkills")}</button>
            <button onClick={() => scrollToSection('contact')} className="hover:underline">{t("navigateContact")}</button>
          </nav>
        </div>
        <div className='flex w-full mx-4 justify-end items-end'>
          <LanguageSwitcher />
        </div>
      </div>
    </header>

  );
};

export default Header;
