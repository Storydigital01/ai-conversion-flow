
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
        <div className="fixed bottom-6 left-0 right-0 z-50 px-4 flex justify-center">
          <a 
            href="https://wa.me/5511999999999" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-whatsapp text-white py-5 px-6 rounded-xl shadow-lg hover:bg-opacity-90 transition-colors flex items-center justify-center gap-3 w-full max-w-md animate-pulse-light"
            aria-label="Contact via WhatsApp"
          >
            <MessageSquare className="h-6 w-6 animate-pulse-light" />
            <span className="font-bold text-lg">Quero uma IA de conversão vendendo para mim no WhatsApp agora</span>
          </a>
        </div>
      )}
    </div>
  );
};

export default Index;
