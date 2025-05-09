
import React from 'react';
import { Check, X, MessageSquare } from 'lucide-react';

const ComparisonSection = () => {
  return (
    <section className="section-padding bg-gradient-to-b from-black to-gray-900" id="comparison">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A person or <span className="gradient-text">IA de Conversão</span>? See who delivers more.
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Compare performance metrics and see why businesses are switching to AI.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-4 lg:gap-8">
          {/* Human Side */}
          <div className="card border-white/10">
            <div className="text-center mb-8">
              <div className="h-20 w-20 bg-white/10 rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Employee</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Response Time</span>
                <span className="text-white/70">4+ hours on average</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Availability</span>
                <span className="text-white/70">Business hours only</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Simultaneous Conversations</span>
                <span className="text-white/70">1-3 per person</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Monthly Cost</span>
                <span className="text-white/70">R$3,000+ per person</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Consistent Performance</span>
                <span><X size={20} className="text-red-500" /></span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>24/7 Availability</span>
                <span><X size={20} className="text-red-500" /></span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Zero Sick Days</span>
                <span><X size={20} className="text-red-500" /></span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span>Scales With Demand</span>
                <span><X size={20} className="text-red-500" /></span>
              </div>
            </div>
          </div>
          
          {/* AI Side */}
          <div className="card border-whatsapp relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-whatsapp text-black text-xs font-bold py-1 px-3 rounded-bl-lg">
              RECOMMENDED
            </div>
            
            <div className="text-center mb-8">
              <div className="h-20 w-20 bg-gradient-to-r from-whatsapp to-neonBlue rounded-full mx-auto flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                  <path d="M12 2a8 8 0 0 1 8 8v12l-4-4-4 4-4-4-4 4V10a8 8 0 0 1 8-8z"></path>
                  <path d="M9 8h6"></path>
                  <path d="M9 12h6"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold">IA de Conversão</h3>
            </div>
            
            <div className="space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Response Time</span>
                <span className="text-whatsapp font-medium">Instant (seconds)</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Availability</span>
                <span className="text-whatsapp font-medium">24/7/365</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Simultaneous Conversations</span>
                <span className="text-whatsapp font-medium">Unlimited</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Monthly Cost</span>
                <span className="text-whatsapp font-medium">Up to 10x lower</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Consistent Performance</span>
                <span><Check size={20} className="text-whatsapp" /></span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>24/7 Availability</span>
                <span><Check size={20} className="text-whatsapp" /></span>
              </div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span>Zero Sick Days</span>
                <span><Check size={20} className="text-whatsapp" /></span>
              </div>
              <div className="flex justify-between items-center pb-4">
                <span>Scales With Demand</span>
                <span><Check size={20} className="text-whatsapp" /></span>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10">
              <a href="#contact" className="btn-whatsapp w-full">
                <MessageSquare size={20} />
                <span>Get Your IA de Conversão</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;
