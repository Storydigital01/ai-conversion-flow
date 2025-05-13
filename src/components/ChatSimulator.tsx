
import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare } from 'lucide-react';

// Define conversation message type
interface ConversationMessage {
  role: "client" | "ai";
  message: string;
  delay: number;
}

const ChatSimulator = () => {
  // Conversation data
  const conversation: ConversationMessage[] = [
    { 
      role: "client", 
      message: "Oi, vi o anúncio sobre harmonização facial e gostaria de saber mais.",
      delay: 0 
    },
    { 
      role: "ai", 
      message: "Olá! Que bom que você está aqui 💚",
      delay: 1000 
    },
    { 
      role: "ai", 
      message: "Eu faço parte da equipe da Dra. Renata e posso te ajudar.",
      delay: 2000 
    },
    { 
      role: "ai", 
      message: "Me conte — o que mais incomoda você no seu rosto hoje? Isso vai me ajudar a te orientar melhor ✨",
      delay: 3000 
    },
    { 
      role: "client", 
      message: "Quero melhorar meu queixo e parecer menos cansada.",
      delay: 5000 
    },
    { 
      role: "ai", 
      message: "Esse é um dos tratamentos mais solicitados na clínica!",
      delay: 6000 
    },
    { 
      role: "ai", 
      message: "Gostaria que eu explicasse como funciona ou prefere agendar uma consulta com a doutora?",
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
    <div className="w-full lg:w-1/2 flex justify-center">
      <div ref={chatRef} className="relative w-full max-w-md aspect-[9/16] bg-black border border-white/20 rounded-xl overflow-hidden gradient-border animate-fade-in">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1633536726481-9a8597caa28b?q=80&w=1000')] bg-cover bg-center opacity-20"></div>
        
        {/* WhatsApp-like header */}
        <div className="absolute inset-x-0 top-0 h-14 bg-black/80 border-b border-white/10 flex items-center px-4">
          <div className="w-8 h-8 rounded-full bg-whatsapp flex items-center justify-center mr-3">
            <MessageSquare size={16} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-medium">Clínica Dra. Renata</div>
            <div className="text-xs text-white/60">Online</div>
          </div>
        </div>
        
        {/* Chat messages container */}
        <div className="absolute inset-x-0 bottom-20 top-14 p-4 flex flex-col gap-3 overflow-y-auto">
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
            Digite sua mensagem...
          </div>
          <div className="h-10 w-10 bg-whatsapp rounded-full flex items-center justify-center">
            <MessageSquare size={16} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatSimulator;
