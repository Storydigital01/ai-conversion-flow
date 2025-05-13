
import React from 'react';

const FeaturesList = () => {
  return (
    <div className="pt-8 pb-10 flex flex-col sm:flex-row gap-6 text-white/70 mb-8">
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
        <span>Sua IA ativa em até 48h</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
        <span>Você não precisa mexer em nada</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="h-6 w-6 rounded-full bg-whatsapp flex items-center justify-center text-white text-xs">✓</div>
        <span>Disponível 24/7</span>
      </div>
    </div>
  );
};

export default FeaturesList;
