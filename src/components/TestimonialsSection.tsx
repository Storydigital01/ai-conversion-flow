
import React from 'react';
import { Star } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ana Carolina",
      business: "Clínica Estética Beleza Natural",
      testimonial: "Since implementing the AI agent, we've increased our appointment bookings by 40%. It responds to clients 24/7 and handles all the basic questions, freeing up our staff for more complex consultations.",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200"
    },
    {
      name: "Rafael Oliveira",
      business: "Tech Gadgets Shop",
      testimonial: "Our conversion rate has doubled since adding the AI assistant. It answers product questions instantly and helps customers make purchase decisions even at 2 AM when our team is sleeping.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200"
    },
    {
      name: "Márcia Santos",
      business: "Petit Gourmet Restaurant",
      testimonial: "The AI handles all our reservations now and answers common questions about our menu and special dietary options. This has freed up our staff to focus on providing excellent service to dining guests.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200"
    }
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-gray-900 to-black" id="testimonials">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Businesses <span className="gradient-text">Transformed</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            See how our AI agents have helped businesses like yours increase sales and improve customer satisfaction.
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
            Join hundreds of businesses that have transformed their customer communication
          </p>
          <a href="#contact" className="btn-whatsapp inline-flex">
            <WhatsApp size={20} />
            <span>Get Your AI Agent</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
