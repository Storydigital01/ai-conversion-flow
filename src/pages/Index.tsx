
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { MessageSquare } from 'lucide-react';

const Index = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      
      {/* Fixed WhatsApp Button */}
      <a 
        href="#contact" 
        className="fixed bottom-6 right-6 z-50 bg-whatsapp text-white p-4 rounded-full shadow-lg hover:bg-opacity-90 transition-colors"
        aria-label="Contact via WhatsApp"
      >
        <MessageSquare size={24} />
      </a>
    </div>
  );
};

export default Index;
