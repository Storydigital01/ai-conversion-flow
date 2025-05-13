
import React from 'react';
import { MessageSquare, Headphones, AudioWaveform, Mic, Keyboard } from 'lucide-react';

const DemoSection = () => {
  // Conversation data for demonstration - now with audio messages
  const conversation = [
    { 
      role: "client", 
      type: "audio",
      message: "Oi, vi o anúncio de harmonização e queria perguntar se vocês também fazem preenchimento no queixo?",
      time: "14:32"
    },
    { 
      role: "ai", 
      type: "audio",
      message: "Sim! Preenchimento no queixo é um dos procedimentos mais populares. Gostaria que eu explicasse como funciona ou quer agendar uma consulta?",
      time: "14:32"
    },
    { 
      role: "client", 
      type: "text",
      message: "Por favor, explique primeiro.",
      time: "14:33"
    },
    { 
      role: "ai", 
      type: "text",
      message: "Claro! É rápido e fica muito natural. Você tem alguma foto de referência ou quer que eu te envie exemplos?",
      time: "14:33"
    }
  ];

  // Format message with line breaks
  const formatMessage = (message: string) => {
    return message.split('\n\n').map((paragraph, i) => (
      <p key={i} className={i > 0 ? "text-sm mt-2" : "text-sm"}>
        {paragraph}
      </p>
    ));
  };

  return (
    <section className="section-padding bg-black relative" id="demo">
      {/* Glow effects */}
      <div className="hero-glow bg-whatsapp top-1/4 right-1/4" />
      <div className="hero-glow bg-neonBlue bottom-1/3 left-1/4" />
      
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Veja Nossa <span className="gradient-text">IA de Conversão</span> em Ação
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Veja como nossa IA lida com conversas reais de clientes e converte leads em clientes
          </p>
        </div>
        
        {/* Adaptive AI Feature Box - Added before the chat demo with improved spacing */}
        <div className="max-w-4xl mx-auto mb-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 md:p-8 gradient-border">
          <h3 className="text-2xl font-bold mb-4 text-center">
            A IA <span className="gradient-text">se adapta</span> ao comportamento do seu lead
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-whatsapp/20 flex items-center justify-center flex-shrink-0">
                <Headphones size={24} className="text-whatsapp" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Respostas em Áudio</h4>
                <p className="text-white/70">Se eles enviam uma mensagem de voz, ela responde com áudio, mantendo o fluxo de conversa que eles preferem.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="h-12 w-12 rounded-full bg-neonBlue/20 flex items-center justify-center flex-shrink-0">
                <Keyboard size={24} className="text-neonBlue" />
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-2">Respostas em Texto</h4>
                <p className="text-white/70">Se eles digitam, ela responde com texto, adaptando-se automaticamente ao estilo de comunicação deles.</p>
              </div>
            </div>
          </div>
          
          <p className="text-center text-lg mt-8 text-white/80">
            Inteligência real é se comunicar da maneira que seu cliente espera.
          </p>
        </div>
        
        <div className="max-w-lg mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden gradient-border">
          {/* WhatsApp header */}
          <div className="bg-whatsapp/10 border-b border-white/10 p-4 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-whatsapp to-neonBlue flex items-center justify-center">
              <MessageSquare size={18} className="text-white" />
            </div>
            <div>
              <div className="text-sm font-medium">Clínica Dra. Renata</div>
              <div className="text-xs text-white/60">Online</div>
            </div>
          </div>
          
          {/* Chat messages - now with audio and text messages */}
          <div className="p-4 space-y-4">
            {conversation.map((message, index) => (
              <div key={index} className="flex justify-end">
                <div 
                  className={`${message.role === "client" 
                    ? "bg-neonBlue/20 rounded-lg rounded-br-none ml-auto" 
                    : "bg-whatsapp/20 rounded-lg rounded-bl-none mr-auto"} 
                    p-3 max-w-[80%]`}
                >
                  {message.type === "audio" ? (
                    <div className="flex items-center gap-2 mb-1">
                      {message.role === "client" ? (
                        <Mic size={16} className="text-white/80" />
                      ) : (
                        <AudioWaveform size={16} className="text-white/80" />
                      )}
                      <span className="text-xs text-white/80">
                        {message.role === "client" ? "Mensagem de áudio recebida" : "Resposta em áudio enviada"}
                      </span>
                    </div>
                  ) : null}
                  
                  {formatMessage(message.message)}
                  <p className="text-xs text-white/60 mt-1 text-right">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
            Seu negócio poderia estar convertendo leads em clientes 24 horas por dia, mesmo enquanto você dorme.
          </p>
          <a href="https://wa.me/5562998564787?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20agente%20de%20IA%20para%20minha%20empresa." 
             className="btn-whatsapp inline-flex"
             target="_blank"
             rel="noopener noreferrer">
            <MessageSquare size={20} />
            <span>Quero uma IA de Conversão para minha empresa</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
