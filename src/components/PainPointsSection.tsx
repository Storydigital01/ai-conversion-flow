
import React from 'react';
import { Clock, MessageSquare, ThumbsDown } from 'lucide-react';

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-black" id="pain-points">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Você Está <span className="text-red-500">Perdendo Vendas</span> Todos os Dias?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Respostas lentas matam conversões. Clientes esperam respostas imediatas, ou procuram outro lugar.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <Clock size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Respostas Atrasadas</h3>
            <p className="text-white/70">
              O tempo médio de resposta para empresas é de 12 horas. Até lá, 90% dos leads já seguiram em frente.
            </p>
          </div>
          
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <MessageSquare size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Mensagens Perdidas</h3>
            <p className="text-white/70">
              Fora do horário comercial, fins de semana e feriados, ninguém está lá para responder às perguntas dos seus clientes.
            </p>
          </div>
          
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <ThumbsDown size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Vendas Perdidas</h3>
            <p className="text-white/70">
              Cada mensagem não respondida é uma venda potencial perdida para um concorrente que respondeu mais rápido.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-medium mb-6">
            <span className="gradient-text">E se seu negócio pudesse responder instantaneamente, 24/7?</span>
          </p>
          <a href="#demo" className="btn-whatsapp inline-flex">
            <MessageSquare size={20} />
            <span>Veja a IA de Conversão em Ação</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
