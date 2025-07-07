import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import LoadingScreen from './components/LoadingScreen';
import { useScrollSpy } from './hooks/useScrollSpy';
import { useVantaEffect } from './hooks/useVantaEffect';
import { useCursorEffect } from './hooks/useCursorEffect';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sections);
  const vantaRef = useVantaEffect();
  
  // Initialize cursor effect
  useCursorEffect();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <LoadingScreen isLoading={isLoading} />
      <div className="relative min-h-screen bg-gray-900 text-white overflow-x-hidden">
        {/* Vanta Background */}
        <div 
          ref={vantaRef}
          className="fixed inset-0 z-0"
          style={{ zIndex: -1 }}
        />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar 
            activeSection={activeSection} 
            onSectionClick={scrollToSection}
          />
          
          <main>
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </main>
          
          {/* Footer */}
          <footer className="py-8 text-center bg-gray-900/90 backdrop-blur-lg border-t border-purple-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-gray-400 mb-4 md:mb-0">
                  © 2024 Suhana Laddha. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm text-gray-400">
                  <button onClick={() => scrollToSection('home')} className="hover:text-pink-400 transition-colors">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="hover:text-pink-400 transition-colors">
                    About
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-pink-400 transition-colors">
                    Projects
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-pink-400 transition-colors">
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default App;