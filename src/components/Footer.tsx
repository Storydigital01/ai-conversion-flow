
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black border-t border-white/10 py-10 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold gradient-text mb-2">ConversionAI</div>
            <p className="text-white/60 text-sm">
              AI-powered WhatsApp agents for businesses
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
              How It Works
            </a>
            <a href="#comparison" className="text-white/70 hover:text-white transition-colors">
              Why AI?
            </a>
            <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
              Testimonials
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contact
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} ConversionAI. All rights reserved.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
