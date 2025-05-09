
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

const HeroSection = () => {
  // Conversation data
  const conversation = [
    { 
      role: "client", 
      message: "Hi, I saw the ad about facial harmonization and wanted to know more.",
      delay: 0 
    },
    { 
      role: "ai", 
      message: "Hi! So glad you're here 💚",
      delay: 1000 
    },
    { 
      role: "ai", 
      message: "I'm part of Dr. Renata's team and I can help you out.",
      delay: 2000 
    },
    { 
      role: "ai", 
      message: "Tell me — what bothers you the most about your face today? That'll help me guide you better ✨",
      delay: 3000 
    },
    { 
      role: "client", 
      message: "I want to improve my jawline and look less tired.",
      delay: 5000 
    },
    { 
      role: "ai", 
      message: "That's actually one of the most requested treatments at the clinic!",
      delay: 6000 
    },
    { 
      role: "ai", 
      message: "Would you like me to explain how it works or would you prefer to schedule a consultation with the doctor?",
      delay: 7000 
    },
  ];

  // State to track which messages have been rendered
  const [visibleMessages, setVisibleMessages] = useState<number[]>([]);
  // State to track if a message is currently being typed
  const [typingIndex, setTypingIndex] = useState<number | null>(null);
  // Reference to chat container for scroll detection
  const chatRef = useRef<HTMLDivElement>(null);
  // Track if animation has started
  const [animationStarted, setAnimationStarted] = useState(false);

  // Function to check if element is in viewport
  const isInViewport = (element: HTMLElement): boolean => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.7
    );
  };

  // Handle scroll event to trigger animation
  useEffect(() => {
    const handleScroll = () => {
      if (chatRef.current && !animationStarted) {
        if (isInViewport(chatRef.current)) {
          startChatAnimation();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Check initial position in case the chat is already in viewport
    if (chatRef.current && !animationStarted) {
      if (isInViewport(chatRef.current)) {
        startChatAnimation();
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [animationStarted]);

  // Function to start the chat animation
  const startChatAnimation = () => {
    setAnimationStarted(true);
    let timeouts: NodeJS.Timeout[] = [];
    
    // Show first message immediately
    setVisibleMessages([0]);

    // For each subsequent message, set up a timeout for typing and display
    conversation.forEach((_, index) => {
      if (index === 0) return; // Skip the first message as it's shown immediately
      
      const delay = conversation[index].delay;
      
      // First show typing indicator
      const typingTimeout = setTimeout(() => {
        setTypingIndex(index);
        
        // After a brief typing period, show the message and remove typing indicator
        const messageTimeout = setTimeout(() => {
          setVisibleMessages(prev => [...prev, index]);
          setTypingIndex(null);
        }, 800); // Typing time before message appears
        
        timeouts.push(messageTimeout);
      }, delay);
      
      timeouts.push(typingTimeout);
    });
    
    // Cleanup function to clear all timeouts
    return () => {
      timeouts.forEach(timeout => clearTimeout(timeout));
    };
  };

  return (
    <div className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-black">
      {/* Background elements */}
      <div className="hero-glow bg-whatsapp top-1/4 left-1/4" />
      <div className="hero-glow bg-neonBlue bottom-1/3 right-1/4" />
      
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2 space-y-8 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              WhatsApp agents with <span className="text-whatsapp">AI technology</span> that converts
            </h1>
            
            <p className="text-lg md:text-xl text-white/80 max-w-xl">
              We build, train, and deploy AI agents that handle customer service and sales 24/7 — so you never lose another lead.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#demo" className="btn-whatsapp">
                <MessageSquare size={20} />
                <span>See the AI in action</span>
              </a>
              <a href="#how-it-works" className="btn-secondary">
                Learn how it works
              </a>
            </div>
            
            <div className="pt-6 flex flex-col sm:flex-row gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
                <span>Ready in 48 hours</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
                <span>No setup required</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
                <span>24/7 availability</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 flex justify-center">
            <div ref={chatRef} className="relative w-full max-w-md aspect-[9/16] bg-black border border-white/20 rounded-xl overflow-hidden gradient-border animate-fade-in">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633536726481-9a8597caa28b?q=80&w=1000')] bg-cover bg-center opacity-20"></div>
              
              {/* WhatsApp-like header */}
              <div className="absolute inset-x-0 top-0 h-14 bg-black/80 border-b border-white/10 flex items-center px-4">
                <div className="w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center mr-3">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <div>
                  <div className="text-sm font-medium">Dr. Renata's Clinic</div>
                  <div className="text-xs text-white/60">Online</div>
                </div>
              </div>
              
              {/* Chat messages container */}
              <div className="absolute inset-x-0 bottom-0 top-14 p-4 flex flex-col gap-3 overflow-y-auto pb-20">
                {visibleMessages.map((index) => {
                  const message = conversation[index];
                  return (
                    <div 
                      key={index} 
                      className={`${message.role === "client" 
                        ? "ml-auto bg-neonBlue/10 backdrop-blur-sm rounded-lg rounded-br-none" 
                        : "bg-whatsapp/10 backdrop-blur-sm rounded-lg rounded-bl-none w-4/5"} 
                        p-3 text-sm animate-bubble-in`}
                    >
                      {message.message}
                    </div>
                  );
                })}
                
                {/* Typing indicator */}
                {typingIndex !== null && (
                  <div className="bg-whatsapp/10 backdrop-blur-sm p-3 rounded-lg rounded-bl-none w-4/5 text-sm">
                    <div className="flex gap-1">
                      <div className="h-2 w-2 bg-white/70 rounded-full animate-pulse"></div>
                      <div className="h-2 w-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="h-2 w-2 bg-white/70 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Input field (decoration only) */}
              <div className="absolute inset-x-0 bottom-0 p-3 bg-black/80 flex items-center gap-2">
                <div className="bg-white/10 rounded-full h-10 flex-grow px-4 text-white/50 flex items-center text-sm">
                  Type your message...
                </div>
                <div className="h-10 w-10 bg-whatsapp rounded-full flex items-center justify-center">
                  <MessageSquare size={16} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
