
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import PainPointsSection from '@/components/PainPointsSection';
import HowItWorksSection from '@/components/HowItWorksSection';
import DemoSection from '@/components/DemoSection';
import ComparisonSection from '@/components/ComparisonSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';
import { MessageSquare } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPointsSection />
      <DemoSection />
      <HowItWorksSection />
      <ComparisonSection />
      <TestimonialsSection />
      <CtaSection />
      <Footer />
      
      {/* Fixed WhatsApp Button for mobile */}
      {isMobile && (
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="fixed bottom-6 left-4 right-4 z-50 bg-whatsapp text-white py-4 rounded-lg shadow-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-2"
          aria-label="Contact via WhatsApp"
        >
          <MessageSquare size={24} />
          <span className="font-medium">I want a Conversion AI selling for me on WhatsApp now</span>
        </a>
      )}
    </div>
  );
};

export default Index;
