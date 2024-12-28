import React, { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white dark:bg-gray-900 shadow-md z-50 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-[#e82574] dark:text-[#e82574]">
              Kingsukh Guest House
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#rooms"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
            <ThemeToggle />
            <a
              href="tel:+919007062180"
              className="flex items-center text-[#e82574] dark:text-[#e82574] font-semibold"
            >
              <Phone className="w-4 h-4 mr-2" />
              call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 transition-colors">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#home"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </a>
            <a
              href="#rooms"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Rooms
            </a>
            <a
              href="#gallery"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Gallery
            </a>
            <a
              href="#contact"
              className="block px-3 py-2 text-gray-700 dark:text-gray-300 hover:text-[#e82574] dark:hover:text-[#e82574] relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-[#e82574] after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </a>
            <a
              href="tel:+919007062180"
              className="block px-3 py-2 text-[#e82574] dark:text-[#e82574] font-semibold"
            >
              <Phone className="w-4 h-4 inline mr-2" />
              +91 9007062180
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
