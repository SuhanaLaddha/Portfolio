import React from 'react';
import { Download, Sparkles, Code, Award } from 'lucide-react';
import logo from '../../Assets/logo.jpg';

interface NavbarProps {
  activeSection: string;
  onSectionClick: (section: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ activeSection, onSectionClick }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Me' },
    { id: 'projects', label: 'Projects', hasIcon: true },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications', hasIcon: true },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-12"> {/* Reduced height */}
          <div className="flex items-center space-x-6"> {/* Less space */}
            <div className="flex items-center">
              <img 
                src={logo} 
                alt="SL Logo" 
                className="h-8 w-auto object-contain" // Smaller logo
              />
            </div>
            <div className="hidden md:flex space-x-6"> {/* Less space */}
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`relative px-2 py-1 text-xs font-medium transition-all duration-300 hover:text-[#D4AF37] ${
                    activeSection === item.id
                      ? 'text-[#D4AF37]'
                      : 'text-[#555555] hover:text-[#2E2E2E]'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.label}</span>
                    {item.hasIcon && (
                      <div className="relative">
                        {item.id === 'projects' ? (
                          <Code className="w-4 h-4 text-[#D4AF37] animate-pulse-subtle" />
                        ) : (
                          <Award className="w-4 h-4 text-[#D4AF37] animate-pulse-subtle" />
                        )}
                      </div>
                    )}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#D4AF37] to-[#B8941F] transition-all duration-300 hover:w-full"></div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2"> {/* Less space */}
            <a
              href="/resume.pdf"
              download
              className="button-primary text-xs px-3 py-1 flex items-center" // Smaller font and padding
            >
              <span>Resume</span>
              <Download className="w-4 h-4 ml-2" /> {/* Icon after text */}
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;