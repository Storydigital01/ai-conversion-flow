
import React from 'react';
import { Star, MessageSquare } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      business: "Clínica Estética Beleza Natural",
      testimonial: "Desde que implementamos o agente de IA, aumentamos nossos agendamentos de consultas em 40%. Ele responde aos clientes 24/7 e lida com todas as perguntas básicas, liberando nossa equipe para consultas mais complexas.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
      name: "Rafael Oliveira",
      business: "Tech Gadgets Shop",
      testimonial: "Nossa taxa de conversão dobrou desde que adicionamos o assistente de IA. Ele responde às perguntas sobre produtos instantaneamente e ajuda os clientes a tomarem decisões de compra mesmo às 2h da manhã, quando nossa equipe está dormindo.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
      name: "Márcia Santos",
      business: "Petit Gourmet Restaurant",
      testimonial: "A IA gerencia todas as nossas reservas agora e responde a perguntas comuns sobre nosso cardápio e opções dietéticas especiais. Isso liberou nossa equipe para se concentrar em fornecer um excelente serviço aos clientes no local.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Negócios <span className="gradient-text">Transformados</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Veja como nossos agentes de IA ajudaram empresas como a sua a aumentar as vendas e melhorar a satisfação do cliente.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              
              <p className="mb-6 text-white/80">"{testimonial.testimonial}"</p>
              
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="h-full w-full object-cover" 
                  />
                </div>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.business}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-xl mb-6">
            Junte-se a centenas de empresas que transformaram sua comunicação com clientes
          </p>
          <a href="#contact" className="btn-whatsapp inline-flex">
            <MessageSquare size={20} />
            <span>Obtenha seu Agente de IA</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
