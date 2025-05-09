
import React from 'react';
import { CheckCircle, WhatsApp } from 'lucide-react';

const HowItWorksSection = () => {
  return (
    <section className="section-padding bg-black" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How Our <span className="gradient-text">Conversion AI</span> Works
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            We handle everything. You just enjoy more sales and satisfied customers.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">1</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Build Your Custom AI Agent</h3>
                <p className="text-white/70">
                  We create a personalized AI agent that understands your business, products, services, and common customer questions.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">2</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Train It With Your Data</h3>
                <p className="text-white/70">
                  Using your product information, FAQs, and sales scripts, we train your AI to respond like your best sales representative.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">3</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Deploy It to Your WhatsApp</h3>
                <p className="text-white/70">
                  We connect the AI to your business WhatsApp account, ready to engage with customers 24/7.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 h-10 w-10 rounded-full bg-whatsapp/20 flex items-center justify-center">
                <span className="text-whatsapp font-bold">4</span>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">We Monitor & Improve It</h3>
                <p className="text-white/70">
                  We continuously optimize your AI's performance based on real conversations and results.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 space-y-6 gradient-border">
            <h3 className="text-2xl font-bold mb-6">What You Get:</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>AI agent that responds instantly to inquiries 24/7/365</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Custom training based on your products and services</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Seamless WhatsApp integration with your business account</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Human-like conversations that build trust with customers</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Handoff to human agents for complex situations</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Monthly performance reports and optimization</p>
              </div>
              
              <div className="flex items-start gap-3">
                <CheckCircle size={20} className="text-whatsapp flex-shrink-0 mt-1" />
                <p>Zero technical work required from you</p>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <a href="#contact" className="btn-whatsapp w-full">
                <WhatsApp size={20} />
                <span>Get Started in 48 Hours</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
