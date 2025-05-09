
import React from 'react';
import { MessageSquare } from 'lucide-react';

const DemoSection = () => {
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
          
          {/* Chat messages */}
          <div className="p-4 space-y-4">
            {/* Client message */}
            <div className="flex justify-end">
              <div className="bg-neonBlue/20 rounded-lg rounded-br-none p-3 max-w-[80%]">
                <p className="text-sm">Hi, I saw the ad about facial harmonization and wanted to know more.</p>
                <p className="text-xs text-white/60 text-right mt-1">14:32</p>
              </div>
            </div>
            
            {/* AI response */}
            <div className="flex justify-start">
              <div className="bg-whatsapp/20 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                <p className="text-sm">Hi! So glad you're here 💚 I'm part of Dr. Renata's team and I can help you with that.</p>
                <p className="text-sm mt-2">Just a quick question — what would you like to improve in your face? That helps me guide you better ✨</p>
                <p className="text-xs text-white/60 mt-1">14:32</p>
              </div>
            </div>
            
            {/* Client response */}
            <div className="flex justify-end">
              <div className="bg-neonBlue/20 rounded-lg rounded-br-none p-3 max-w-[80%]">
                <p className="text-sm">I want to improve my jawline and look less tired.</p>
                <p className="text-xs text-white/60 text-right mt-1">14:33</p>
              </div>
            </div>
            
            {/* AI response */}
            <div className="flex justify-start">
              <div className="bg-whatsapp/20 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                <p className="text-sm">That's one of our most requested treatments!</p>
                <p className="text-sm mt-2">Would you like me to explain how it works or prefer to schedule a consultation with the doctor?</p>
                <p className="text-xs text-white/60 mt-1">14:33</p>
              </div>
            </div>
            
            {/* Client response */}
            <div className="flex justify-end">
              <div className="bg-neonBlue/20 rounded-lg rounded-br-none p-3 max-w-[80%]">
                <p className="text-sm">I'd like to schedule a consultation. Do you have availability this week?</p>
                <p className="text-xs text-white/60 text-right mt-1">14:34</p>
              </div>
            </div>
            
            {/* AI response */}
            <div className="flex justify-start">
              <div className="bg-whatsapp/20 rounded-lg rounded-bl-none p-3 max-w-[80%]">
                <p className="text-sm">Perfect! I can see that Dr. Renata has openings on Thursday at 3:00 PM or Friday at 10:00 AM. Would either of those work for you?</p>
                <p className="text-xs text-white/60 mt-1">14:34</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-10">
          <p className="text-lg text-white/80 max-w-2xl mx-auto mb-6">
            Your business could be converting leads into customers around the clock, even when you're sleeping.
          </p>
          <a href="#contact" className="btn-whatsapp inline-flex">
            <MessageSquare size={20} />
            <span>I want a Conversion AI for my business</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
