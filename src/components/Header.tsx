import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll İşlevleri
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className=" top-0 w-full flex justify-between items-center p-4 z-10 fixed backdrop-blur-sm">
      <div className="flex items-center space-x-2">
        <img src="/images/log.png" className="w-12 h-12" />
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-6">
        <button onClick={scrollToTop} className="text-white hover:text-blue-400 transition">
          Home
        </button>
        <button onClick={scrollToContact} className="text-white hover:text-blue-400 transition">
          Contact
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-gray-800/90 backdrop-blur-sm md:hidden">
          <div className="flex flex-col items-center py-4 space-y-4">
            <button onClick={scrollToTop} className="text-white hover:text-blue-400 transition">
              Home
            </button>
            <button onClick={scrollToContact} className="text-white hover:text-blue-400 transition">
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;