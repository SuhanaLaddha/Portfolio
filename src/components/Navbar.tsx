import React from 'react';
import { Download, Sparkles, Code, Award } from 'lucide-react';

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
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/90 backdrop-blur-lg border-b border-purple-500/20 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
              SL
            </div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => onSectionClick(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 hover:text-pink-400 ${
                    activeSection === item.id
                      ? 'text-pink-400'
                      : 'text-gray-300 hover:text-white'
                  }`}
                >
                  <span className="flex items-center space-x-2">
                    <span>{item.label}</span>
                    {item.hasIcon && (
                      <div className="relative">
                        {item.id === 'projects' ? (
                          <Code className="w-4 h-4 text-cyan-400 animate-pulse" />
                        ) : (
                          <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
                        )}
                        <div className="absolute -inset-1 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur opacity-30 animate-pulse"></div>
                      </div>
                    )}
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-400 to-purple-400 transition-all duration-300 hover:w-full"></div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white rounded-full transition-all duration-300 transform hover:scale-105">
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Resume</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;