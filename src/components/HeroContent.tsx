
import React from 'react';
import { MessageSquare } from 'lucide-react';
import FeaturesList from './FeaturesList';

const HeroContent = () => {
  return (
    <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        Agentes de WhatsApp com <span className="text-whatsapp">tecnologia IA</span> que convertem
      </h1>
      
      <p className="text-lg md:text-xl text-white/80 max-w-xl">
        Construímos, treinamos e implementamos agentes de IA que gerenciam atendimento ao cliente e vendas 24/7 — para você nunca mais perder uma venda.
      </p>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <a href="#demo" className="btn-whatsapp">
          <MessageSquare size={20} />
          <span>Veja a IA em ação</span>
        </a>
        <a href="#how-it-works" className="btn-secondary">
          Saiba como funciona
        </a>
      </div>
      
      <FeaturesList />
    </div>
  );
};

export default HeroContent;
