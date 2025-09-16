import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react"; // icons

const Header = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      setIsOpen(false); // close menu after clicking
    }
  };

  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
      <div className="flex justify-between items-center px-4 py-4">
        {/* Left side (Logo or nav) */}
        <div className="flex items-center">
          {/* Desktop nav */}
          <div className="flex justify-between items-center w-full">
            <nav className="hidden md:flex space-x-6 text-white">
              <button onClick={() => scrollToSection('about')} className="hover:underline cursor-pointer">{t("navigateAbout")}</button>
              <button onClick={() => scrollToSection('projects')} className="hover:underline cursor-pointer">{t("navigateProjects")}</button>
              <button onClick={() => scrollToSection('skills')} className="hover:underline cursor-pointer">{t("navigateSkills")}</button>
              <button onClick={() => scrollToSection('contact')} className="hover:underline cursor-pointer">{t("navigateContact")}</button>
            </nav>
          </div>


          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none ml-2"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Right side */}
        <div className="flex items-center">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-700 px-4 pb-4 space-y-2 text-white">
          <button onClick={() => scrollToSection('about')} className="block w-full text-left hover:underline">{t("navigateAbout")}</button>
          <button onClick={() => scrollToSection('projects')} className="block w-full text-left hover:underline">{t("navigateProjects")}</button>
          <button onClick={() => scrollToSection('skills')} className="block w-full text-left hover:underline">{t("navigateSkills")}</button>
          <button onClick={() => scrollToSection('contact')} className="block w-full text-left hover:underline">{t("navigateContact")}</button>
        </div>
      )}
    </header>
  );
};

export default Header;
