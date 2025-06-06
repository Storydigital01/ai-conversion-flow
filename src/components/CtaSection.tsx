
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
              Pronto para <span className="gradient-text">aumentar suas vendas</span>?
            </h2>
            <p className="text-lg text-white/70">
              Tenha sua IA de Conversão personalizada trabalhando para você 24/7
            </p>
          </div>
          
          <div className="text-center">
            <a 
              href="https://wa.me/5562998564787?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20agente%20de%20IA%20para%20minha%20empresa." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-whatsapp inline-flex text-lg px-10 py-4"
            >
              <MessageSquare size={24} />
              <span>Ativar minha IA no WhatsApp agora</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
