
import React from 'react';
import { MessageSquare } from 'lucide-react';

const DemoSection = () => {
  // Conversation data for demonstration
  const conversation = [
    { 
      role: "client", 
      message: "Hi, I saw the ad about facial harmonization and wanted to know more.",
      time: "14:32"
    },
    { 
      role: "ai", 
      message: "Hi! So glad you're here 💚 I'm part of Dr. Renata's team and I can help you with that.\n\nJust a quick question — what would you like to improve in your face? That helps me guide you better ✨",
      time: "14:32"
    },
    { 
      role: "client", 
      message: "I want to improve my jawline and look less tired.",
      time: "14:33"
    },
    { 
      role: "ai", 
      message: "That's one of our most requested treatments!\n\nWould you like me to explain how it works or prefer to schedule a consultation with the doctor?",
      time: "14:33"
    },
    { 
      role: "client", 
      message: "I'd like to schedule a consultation. Do you have availability this week?",
      time: "14:34"
    },
    { 
      role: "ai", 
      message: "Perfect! I can see that Dr. Renata has openings on Thursday at 3:00 PM or Friday at 10:00 AM. Would either of those work for you?",
      time: "14:34"
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
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See Our <span className="gradient-text">IA de Conversão</span> in Action
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Watch more ways our AI handles real client conversations and converts leads into customers
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
          
          {/* Chat messages - all visible by default */}
          <div className="p-4 space-y-4">
            {conversation.map((message, index) => (
              <div key={index} className="flex justify-end">
                <div 
                  className={`${message.role === "client" 
                    ? "bg-neonBlue/20 rounded-lg rounded-br-none ml-auto" 
                    : "bg-whatsapp/20 rounded-lg rounded-bl-none mr-auto"} 
                    p-3 max-w-[80%]`}
                >
                  {formatMessage(message.message)}
                  <p className="text-xs text-white/60 mt-1 text-right">{message.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
            Your business could be converting leads into customers around the clock, even when you're sleeping.
          </p>
          <a href="https://wa.me/5562998564787?text=Ol%C3%A1%2C%20tenho%20interesse%20em%20um%20agente%20de%20IA%20para%20minha%20empresa." 
             className="btn-whatsapp inline-flex"
             target="_blank"
             rel="noopener noreferrer">
            <MessageSquare size={20} />
            <span>I want a Conversion AI for my business</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
