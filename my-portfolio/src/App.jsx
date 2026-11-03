import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTopButton from "./components/BackToTopButton";

function App() {
  return (
    <div id="top" className="min-h-screen w-full scroll-smooth bg-gray-950 font-sans text-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  );
}

export default App;
