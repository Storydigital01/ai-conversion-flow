
import React from 'react';
import { Clock, MessageSquare, ThumbsDown, WhatsApp } from 'lucide-react';

const PainPointsSection = () => {
  return (
    <section className="section-padding bg-black" id="pain-points">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Are You <span className="text-red-500">Losing Sales</span> Every Day?
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Slow response times kill conversions. Customers expect immediate answers, or they'll go elsewhere.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <Clock size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Delayed Responses</h3>
            <p className="text-white/70">
              The average response time for businesses is 12 hours. By then, 90% of leads have already moved on.
            </p>
          </div>
          
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <MessageSquare size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Missed Messages</h3>
            <p className="text-white/70">
              Outside of business hours, weekends, and holidays, nobody is there to answer your customers' questions.
            </p>
          </div>
          
          <div className="card">
            <div className="h-12 w-12 rounded-full bg-red-500/20 flex items-center justify-center mb-6">
              <ThumbsDown size={24} className="text-red-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lost Sales</h3>
            <p className="text-white/70">
              Every unanswered message is a potential sale lost to a competitor who responded faster.
            </p>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-2xl font-medium mb-6">
            <span className="gradient-text">What if your business could respond instantly, 24/7?</span>
          </p>
          <a href="#contact" className="btn-whatsapp inline-flex">
            <WhatsApp size={20} />
            <span>Get Your AI Agent Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
