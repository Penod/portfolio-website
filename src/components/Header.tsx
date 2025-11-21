import React, { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-white shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="text-2xl font-bold text-gray-900">
            EMMANUEL DONKOH
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('projects')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('skills')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('experience')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Contact
            </button>
            <button onClick={() => scrollToSection('hobbies')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors">
              Hobbies
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`block h-0.5 w-6 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('projects')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-left">
                Projects
              </button>
              <button onClick={() => scrollToSection('skills')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-left">
                Skills
              </button>
              <button onClick={() => scrollToSection('experience')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-left">
                Experience
              </button>
              <button onClick={() => scrollToSection('contact')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-left">
                Contact
              </button>
              <button onClick={() => scrollToSection('hobbies')} className="font-medium text-gray-600 hover:text-blue-600 transition-colors text-left">
               Hobbies
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;