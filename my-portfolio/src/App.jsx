import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div className="w-full min-h-screen font-sans bg-gray-100 text-gray-900">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
