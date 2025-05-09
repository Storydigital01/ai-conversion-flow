
import React from 'react';
import { CheckCircle, MessageSquare } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-black" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como Nossa <span className="gradient-text">IA de Conversão</span> Funciona
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Nós cuidamos de tudo. Você só aproveita mais vendas e clientes satisfeitos.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Construímos Seu Agente de IA Personalizado</h3>
                <p className="text-white/70">
                  Criamos um agente de IA personalizado que entende seu negócio, produtos, serviços e perguntas comuns dos clientes.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Treinamos com Seus Dados</h3>
                <p className="text-white/70">
                  Usando suas informações de produtos, FAQs e scripts de vendas, treinamos sua IA para responder como seu melhor representante de vendas.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Implementamos no Seu WhatsApp</h3>
                <p className="text-white/70">
                  Conectamos a IA à sua conta comercial do WhatsApp, pronta para interagir com clientes 24/7.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Monitoramos e Melhoramos</h3>
                <p className="text-white/70">
                  Otimizamos continuamente o desempenho da sua IA com base em conversas reais e resultados.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-6 gradient-border">
            <h3 className="text-2xl font-bold mb-6">O Que Você Recebe:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Agente de IA que responde instantaneamente 24/7/365</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Treinamento personalizado baseado nos seus produtos e serviços</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Integração perfeita com o WhatsApp da sua empresa</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Conversas naturais que constroem confiança com os clientes</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Transferência para atendentes humanos em situações complexas</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Relatórios de desempenho mensais e otimização</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Zero trabalho técnico necessário da sua parte</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <a href="#contact" className="btn-whatsapp w-full">
                <MessageSquare size={20} />
                <span>Comece em 48 Horas</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
