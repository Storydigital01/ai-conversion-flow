
import React from 'react';
import { MessageSquare, ArrowRight, Send } from 'lucide-react';

const CtaSection = () => {
  return (
    <section className="section-padding bg-black relative" id="contact">
      {/* Glow effects */}
      <div className="hero-glow bg-whatsapp top-1/4 right-1/4" />
      <div className="hero-glow bg-neonBlue bottom-1/3 left-1/4" />
      
      <div className="container mx-auto relative z-10">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 md:p-12 max-w-4xl mx-auto gradient-border">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to <span className="gradient-text">Never Miss a Sale</span> Again?
            </h2>
            <p className="text-lg text-white/70">
              Get your custom AI WhatsApp agent up and running in just 48 hours
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-whatsapp" 
                    placeholder="John Smith" 
                  />
                </div>
                
                <div>
                  <label htmlFor="business" className="block text-sm font-medium mb-1">Business Name</label>
                  <input 
                    type="text" 
                    id="business" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-whatsapp" 
                    placeholder="Your Company" 
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-1">WhatsApp Number</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-whatsapp" 
                    placeholder="+1 (555) 123-4567" 
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">Message (Optional)</label>
                  <textarea 
                    id="message" 
                    rows={3}
                    className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-md focus:outline-none focus:border-whatsapp" 
                    placeholder="Tell us about your business and needs" 
                  />
                </div>
                
                <button type="submit" className="btn-whatsapp w-full">
                  <Send size={18} />
                  <span>Submit Request</span>
                </button>
              </form>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-bold">Or Contact Us Directly:</h3>
              
              <a 
                href="https://wa.me/5511999999999" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-3 group"
              >
                <div className="h-12 w-12 bg-whatsapp rounded-full flex items-center justify-center">
                  <MessageSquare size={24} className="text-white" />
                </div>
                <div>
                  <p className="font-medium group-hover:underline">Chat on WhatsApp</p>
                  <p className="text-sm text-white/60">Quick response during business hours</p>
                </div>
                <ArrowRight size={16} className="ml-auto text-white/60 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <div className="pt-6 border-t border-white/10">
                <h4 className="font-medium mb-3">What happens next?</h4>
                <ol className="space-y-3 text-white/70">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-whatsapp/20 flex items-center justify-center text-xs text-whatsapp">1</span>
                    <span>We'll contact you within 24 hours</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-whatsapp/20 flex items-center justify-center text-xs text-whatsapp">2</span>
                    <span>Quick call to understand your needs</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-whatsapp/20 flex items-center justify-center text-xs text-whatsapp">3</span>
                    <span>AI agent built and deployed in 48 hours</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
