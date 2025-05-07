import React from 'react';

const Header = () => {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <header className="bg-gray-800 shadow sticky top-0 z-50">
    <div className="max-w-7xl mx-auto px-4 py-4">
      <nav className="flex w-1/4 justify-between space-x-4 text-white">
        <button onClick={() => scrollToSection('about')} className="hover:underline">About</button>
        <button onClick={() => scrollToSection('projects')} className="hover:underline">Projects</button>
        <button onClick={() => scrollToSection('skills')} className="hover:underline">Skills</button>
        <button onClick={() => scrollToSection('contact')} className="hover:underline">Contact</button>
      </nav>
    </div>
  </header>
  
  );
};

export default Header;
