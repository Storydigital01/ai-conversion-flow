
import React from 'react';
import { Check, X, MessageSquare } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900" id="comparison">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Uma pessoa ou <span className="gradient-text">IA de Conversão</span>? Veja quem entrega mais.
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Compare métricas de desempenho e veja por que as empresas estão mudando para IA.
          </p>
        </div>
        
        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {/* Human Side */}
          <div className="card border-white/10 rounded-xl shadow-lg shadow-black/20 hover:shadow-black/30 transition-all">
            <div className="text-center mb-6 md:mb-8">
              <div className="h-20 w-20 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Funcionário</h3>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Tempo de Resposta</span>
                <span className="text-white/70 text-right">+4 horas em média</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Disponibilidade</span>
                <span className="text-white/70 text-right">Apenas horário comercial</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Conversas Simultâneas</span>
                <span className="text-white/70 text-right">1-3 por pessoa</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Custo Mensal</span>
                <span className="text-white/70 text-right">R$3.000+ por pessoa</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Desempenho Consistente</span>
                <span><X size={20} className="text-red-500 ml-auto" /></span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Disponibilidade 24/7</span>
                <span><X size={20} className="text-red-500 ml-auto" /></span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Zero Dias de Doença</span>
                <span><X size={20} className="text-red-500 ml-auto" /></span>
              </div>
              <div className="flex justify-between items-start pb-3">
                <span className="text-base md:text-lg font-medium">Escala com Demanda</span>
                <span><X size={20} className="text-red-500 ml-auto" /></span>
              </div>
            </div>
          </div>
          
          {/* AI Side */}
          <div className="card border-whatsapp relative overflow-hidden rounded-xl shadow-lg shadow-whatsapp/10 hover:shadow-whatsapp/20 transition-all">
            <div className="absolute top-0 right-0 bg-whatsapp text-black text-xs font-bold py-1 px-3 rounded-bl-lg">
              RECOMENDADO
            </div>
            
            <div className="text-center mb-6 md:mb-8">
              <div className="h-20 w-20 bg-gradient-to-r from-whatsapp to-neonBlue rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a8 8 0 0 1 8 8v12l-4-4-4 4-4-4-4 4V10a8 8 0 0 1 8-8z"></path>
                  <path d="M9 8h6"></path>
                  <path d="M9 12h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">IA de Conversão</h3>
            </div>
            
            <div className="space-y-4 md:space-y-6">
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Tempo de Resposta</span>
                <span className="text-whatsapp font-medium text-right">Instantâneo (segundos)</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Disponibilidade</span>
                <span className="text-whatsapp font-medium text-right">24/7/365</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Conversas Simultâneas</span>
                <span className="text-whatsapp font-medium text-right">Ilimitadas</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Custo Mensal</span>
                <span className="text-whatsapp font-medium text-right">Até 10x menor</span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Desempenho Consistente</span>
                <span><Check size={20} className="text-whatsapp ml-auto" /></span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Disponibilidade 24/7</span>
                <span><Check size={20} className="text-whatsapp ml-auto" /></span>
              </div>
              <div className="flex justify-between items-start border-b border-white/10 pb-3">
                <span className="text-base md:text-lg font-medium">Zero Dias de Doença</span>
                <span><Check size={20} className="text-whatsapp ml-auto" /></span>
              </div>
              <div className="flex justify-between items-start pb-3">
                <span className="text-base md:text-lg font-medium">Escala com Demanda</span>
                <span><Check size={20} className="text-whatsapp ml-auto" /></span>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 pt-4 md:pt-6 border-t border-white/10">
              <a href="#contact" className="btn-whatsapp w-full">
                <MessageSquare size={20} />
                <span>Obtenha sua IA de Conversão</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
