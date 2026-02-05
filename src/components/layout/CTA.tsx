
import React from 'react';
import { SITE_CONFIG } from '../../config/site';

const CTA: React.FC = () => {
  return (
    <section id="contato" className="py-24 bg-dark relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-dark-lighter border border-white/10 rounded-[2.5rem] p-12 text-center relative overflow-hidden">
          {/* Accent icon */}
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mx-auto mb-8">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.382-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
            </svg>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
            Vamos entender seus desafios e <span className="text-primary"> construir a melhor solução digital? </span>
          </h2>
          
          <p className="text-secondary text-lg mb-12 max-w-2xl mx-auto leading-relaxed">
            Fale com nossos especialistas e descubra como podemos transformar a tecnologia em resultados concretos para sua empresa.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href={SITE_CONFIG.urlWpp} 
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-2xl font-bold transition-all glow-primary"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.268.408 2.445 1.108 3.407l-.736 2.682 2.76-.724c.915.6 1.996.953 3.158.953 3.181 0 5.767-2.586 5.767-5.77s-2.586-5.77-5.767-5.77zm3.387 8.192c-.146.415-.724.757-1.189.805-.317.036-.72.061-1.121-.134-.232-.109-.506-.219-.884-.378-1.585-.665-2.616-2.28-2.695-2.384-.073-.109-.616-.817-.616-1.554s.384-1.097.518-1.25c.134-.158.293-.195.39-.195.097 0 .195.012.28.012.097 0 .232-.036.366.293.134.329.463 1.121.506 1.213.043.091.073.195.012.317-.061.122-.091.195-.183.305-.091.109-.195.244-.28.341-.097.109-.207.231-.085.439.122.207.536.884 1.152 1.432.793.707 1.457.927 1.664 1.024.207.109.329.091.451-.049.122-.134.524-.61.665-.823.14-.207.28-.183.475-.109.195.073 1.238.585 1.451.695.213.109.354.158.402.244.049.085.049.493-.097.908z"/></svg>
              Conversar no WhatsApp
            </a>
            <a 
              href="#diagnostico" 
              className="flex items-center gap-2 border border-primary text-white hover:bg-primary/10 px-10 py-5 rounded-2xl font-bold transition-all"
            >
              Solicitar Avaliação Gratuita
            </a>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5 flex flex-wrap justify-center gap-8">
            <div className="flex items-center gap-2 text-secondary text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              Atendimento em até 24h
            </div>
            <div className="flex items-center gap-2 text-secondary text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              Sem compromisso
            </div>
            <div className="flex items-center gap-2 text-secondary text-sm">
              <div className="w-1.5 h-1.5 bg-primary rounded-full" />
              Avaliação 100% gratuita
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
