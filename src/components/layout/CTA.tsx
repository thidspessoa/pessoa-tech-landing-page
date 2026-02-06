import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { MessageCircleCode, Flame } from 'lucide-react';

const CTA = () => {
  return (
    <section id="contato" className="py-20 sm:py-24 bg-dark relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="w-[420px] h-[420px] sm:w-[600px] sm:h-[600px] bg-primary/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-dark-lighter border border-white/10 rounded-3xl p-6 sm:p-10 lg:p-12 text-center relative">
          
          {/* Icon */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-6 sm:mb-8">
             <Flame className="text-yellow-400 animate-pulse" />
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-6 leading-tight">
            Vamos entender seus desafios e{' '}
            <span className="text-primary">construir a melhor solução digital</span>
          </h2>

          {/* Description */}
          <p className="text-secondary text-base sm:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Fale conosco e transforme desafios do seu negócio em soluções digitais, visuais e estratégicas.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SITE_CONFIG.urlWpp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all glow-primary"
            >
              <MessageCircleCode size={20} />
              Conversar no WhatsApp
            </a>

            <a
              href={SITE_CONFIG.urlWpp}
              className="w-full sm:w-auto flex items-center justify-center gap-2 border border-primary text-white hover:bg-primary/10 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Solicitar Avaliação Gratuita
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <span className="flex items-center gap-2 text-secondary text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Atendimento em até 24h
            </span>
            <span className="flex items-center gap-2 text-secondary text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Sem compromisso
            </span>
            <span className="flex items-center gap-2 text-secondary text-sm">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              Avaliação gratuita
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
