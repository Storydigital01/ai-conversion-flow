
import React from 'react';
import HeroContent from './HeroContent';
import ChatSimulator from './ChatSimulator';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="hero-glow bg-whatsapp top-1/4 left-1/4" />
      <div className="hero-glow bg-neonBlue bottom-1/3 right-1/4" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <HeroContent />
          <ChatSimulator />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
