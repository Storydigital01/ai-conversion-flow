
import React from 'react';
import { MessageSquare } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-padding bg-black relative" id="contact">
      {/* Glow effects */}
      <div className="hero-glow bg-whatsapp top-1/4 right-1/4" />
      <div className="hero-glow bg-neonBlue bottom-1/3 left-1/4" />
      
      <div className="container mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 max-w-4xl mx-auto gradient-border">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Never Miss a Sale</span> Again?
            </h2>
            <p className="text-lg text-white/70">
              Get your custom IA de Conversão up and running in just 48 hours
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="https://wa.me/5511999999999" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex text-lg px-10 py-4"
            >
              <MessageSquare size={24} />
              <span>I want a Conversion AI selling for me on WhatsApp now</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
