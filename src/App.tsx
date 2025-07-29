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
import { useCursorEffect } from './hooks/useCursorEffect';

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const sections = ['home', 'about', 'projects', 'skills', 'certifications', 'contact'];
  const activeSection = useScrollSpy(sections);
  
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
      <div className="relative min-h-screen text-[#2E2E2E] overflow-x-hidden">
        {/* Geometric Background */}
        <div className="geometric-bg"></div>
        
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
          <footer className="py-8 text-center bg-white border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-[#555555] mb-4 md:mb-0">
                  © 2024 Suhana Laddha. All rights reserved.
                </div>
                <div className="flex space-x-6 text-sm text-[#555555]">
                  <button onClick={() => scrollToSection('home')} className="hover:text-[#D4AF37] transition-colors">
                    Home
                  </button>
                  <button onClick={() => scrollToSection('about')} className="hover:text-[#D4AF37] transition-colors">
                    About
                  </button>
                  <button onClick={() => scrollToSection('projects')} className="hover:text-[#D4AF37] transition-colors">
                    Projects
                  </button>
                  <button onClick={() => scrollToSection('contact')} className="hover:text-[#D4AF37] transition-colors">
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