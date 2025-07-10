import React from 'react';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
      <div className='flex w-full'>
        <div className="w-1/3 px-4 py-4">
          <nav className="flex justify-between items-start space-x-4 text-white">
            <button onClick={() => scrollToSection('about')} className="hover:underline -x2">About</button>
            <button onClick={() => scrollToSection('projects')} className="hover:underline">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="hover:underline">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button>
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
