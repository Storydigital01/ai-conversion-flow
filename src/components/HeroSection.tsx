
import React from 'react';
import { MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="hero-glow bg-whatsapp top-1/4 left-1/4" />
      <div className="hero-glow bg-neonBlue bottom-1/3 right-1/4" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              If you take too long to reply on WhatsApp, <span className="text-red-500">your lead is gone.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              Our Conversion AI replies instantly, qualifies leads, and sells for you — 24/7, with no mistakes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-whatsapp">
                <MessageSquare size={20} />
                <span>I want to see the AI in action now</span>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                See How It Works
              </a>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
                <span>Ready in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
                <span>24/7 availability</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-md aspect-[9/16] bg-black border border-white/20 rounded-xl overflow-hidden gradient-border animate-fade-in">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633536726481-9a8597caa28b?q=80&w=1000')] bg-cover bg-center opacity-20"></div>
              <div className="absolute inset-x-0 top-0 h-14 bg-black/80 border-b border-white/10 flex items-center px-4">
                <div className="w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center mr-3">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">IA de Conversão</div>
                  <div className="text-xs text-white/60">Online</div>
                </div>
              </div>
              
              <div className="absolute inset-x-0 bottom-0 p-4 flex flex-col gap-3">
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg rounded-bl-none w-4/5 text-sm">
                  Hey there! 👋 I'm your AI assistant. How can I help you today?
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg rounded-bl-none w-4/5 text-sm">
                  I can answer questions about your products, help with orders, or schedule appointments 24/7!
                </div>
                <div className="bg-neonBlue/10 backdrop-blur-sm p-3 rounded-lg rounded-br-none ml-auto text-sm">
                  Hi! Do you have the black sneakers in size 42?
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg rounded-bl-none w-4/5 text-sm animate-pulse-light">
                  Yes, we have them in stock! Would you like me to place an order for you?
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
