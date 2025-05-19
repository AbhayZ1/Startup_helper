import React, { useState, useEffect } from 'react';
import { Menu, X, Cpu } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Cpu className="h-8 w-8 text-purple-600" />
              <span className="ml-2 text-xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                StartupAI
              </span>
            </div>
          </div>

          {/* Desktop navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a 
                href="#features" 
                className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Features
              </a>
              <a 
                href="#pricing" 
                className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Pricing
              </a>
              <a 
                href="#resources" 
                className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Resources
              </a>
              <a 
                href="#community" 
                className="text-gray-700 hover:text-purple-600 transition-colors px-3 py-2 text-sm font-medium"
              >
                Community
              </a>
              <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:shadow-lg transition-all">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/95 backdrop-blur-md shadow-lg">
          <a
            href="#features"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <a
            href="#resources"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Resources
          </a>
          <a
            href="#community"
            className="text-gray-700 hover:text-purple-600 block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => setIsOpen(false)}
          >
            Community
          </a>
          <button className="w-full mt-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-4 py-2 rounded-md text-base font-medium">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;