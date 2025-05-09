
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
              Agentes de WhatsApp com IA para empresas
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-4">
            <a href="#how-it-works" className="text-white/70 hover:text-white transition-colors">
              Como Funciona
            </a>
            <a href="#comparison" className="text-white/70 hover:text-white transition-colors">
              Por Que IA?
            </a>
            <a href="#testimonials" className="text-white/70 hover:text-white transition-colors">
              Depoimentos
            </a>
            <a href="#contact" className="text-white/70 hover:text-white transition-colors">
              Contato
            </a>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            © {currentYear} ConversionAI. Todos os direitos reservados.
          </p>
          
          <div className="flex gap-6">
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-white/60 hover:text-white text-sm">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
