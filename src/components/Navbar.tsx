
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navClasses = `fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-black/80 backdrop-blur-md py-3' : 'bg-transparent py-5'
  }`;

  return (
    <nav className={navClasses}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="text-2xl font-bold gradient-text">ConversionAI</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          <a href="#how-it-works" className="text-white/80 hover:text-white transition-colors">
            Como Funciona
          </a>
          <a href="#comparison" className="text-white/80 hover:text-white transition-colors">
            Por Que IA?
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-white transition-colors">
            Depoimentos
          </a>
          <a href="#contact" className="btn-whatsapp">
            Começar Agora
          </a>
        </div>
        
        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-white" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      
      {/* Mobile Menu Panel */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-black/95 border-t border-white/10 animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a 
              href="#how-it-works" 
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Como Funciona
            </a>
            <a 
              href="#comparison" 
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Por Que IA?
            </a>
            <a 
              href="#testimonials" 
              className="text-white/80 hover:text-white py-2 transition-colors"
              onClick={toggleMenu}
            >
              Depoimentos
            </a>
            <a 
              href="#contact" 
              className="btn-whatsapp w-full flex justify-center"
              onClick={toggleMenu}
            >
              Começar Agora
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
