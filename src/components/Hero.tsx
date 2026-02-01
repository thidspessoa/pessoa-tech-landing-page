
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark">
      {/* 4. Background Tecnológico Abstrato - Visibilidade Ajustada */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Grid discreto - Levemente mais visível */}
        <div 
          className="absolute inset-0 opacity-[0.07]" 
          style={{ 
            backgroundImage: `radial-gradient(circle, #ffffff 1px, transparent 1px)`, 
            backgroundSize: '40px 40px' 
          }} 
        />
        
        {/* Linhas geométricas - Opacidade aumentada para sofisticação e clareza */}
        <svg className="absolute inset-0 w-full h-full opacity-25" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#8B47ED" stopOpacity="0" />
              <stop offset="50%" stopColor="#8B47ED" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#8B47ED" stopOpacity="0" />
            </linearGradient>
          </defs>
          <line x1="0" y1="20%" x2="100%" y2="80%" stroke="url(#line-grad)" strokeWidth="0.5" />
          <line x1="100%" y1="10%" x2="0" y2="90%" stroke="url(#line-grad)" strokeWidth="0.5" />
          <circle cx="80%" cy="30%" r="300" stroke="white" strokeWidth="0.3" fill="none" opacity="0.4" />
          <circle cx="20%" cy="70%" r="400" stroke="white" strokeWidth="0.3" fill="none" opacity="0.3" />
        </svg>

        {/* Gradiente de profundidade */}
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-transparent to-dark opacity-60" />
      </div>
      
      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Lado Esquerdo - Conteúdo Textual */}
        <div className="relative flex flex-col gap-8">
          {/* 5. Círculos decorativos ao redor do elemento principal esquerdo */}
          <div className="absolute -top-20 -left-20 w-64 h-64 border border-white/5 rounded-full pointer-events-none -z-10" />
          <div className="absolute -top-10 -left-10 w-48 h-48 border border-white/5 rounded-full pointer-events-none -z-10" />

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
            Soluções digitais <span className="text-primary">sob medida</span> para a realidade do seu negócio
          </h1>
          
          <div className="flex flex-col gap-6 max-w-lg">
            <p className="text-lg text-secondary leading-relaxed">
              Atuamos lado a lado com empreendedores, criando soluções digitais claras, funcionais e alinhadas à sua realidade.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="https://wa.me/yournumber" 
                target="_blank" 
                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all glow-primary"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.767 5.77 0 1.268.408 2.445 1.108 3.407l-.736 2.682 2.76-.724c.915.6 1.996.953 3.158.953 3.181 0 5.767-2.586 5.767-5.77s-2.586-5.77-5.767-5.77zm3.387 8.192c-.146.415-.724.757-1.189.805-.317.036-.72.061-1.121-.134-.232-.109-.506-.219-.884-.378-1.585-.665-2.616-2.28-2.695-2.384-.073-.109-.616-.817-.616-1.554s.384-1.097.518-1.25c.134-.158.293-.195.39-.195.097 0 .195.012.28.012.097 0 .232-.036.366.293.134.329.463 1.121.506 1.213.043.091.073.195.012.317-.061.122-.091.195-.183.305-.091.109-.195.244-.28.341-.097.109-.207.231-.085.439.122.207.536.884 1.152 1.432.793.707 1.457.927 1.664 1.024.207.109.329.091.451-.049.122-.134.524-.61.665-.823.14-.207.28-.183.475-.109.195.073 1.238.585 1.451.695.213.109.354.158.402.244.049.085.049.493-.097.908z"/></svg>
                Fale com nosso team
              </a>
              <a 
                href="#servicos" 
                className="flex items-center gap-2 border border-primary text-white hover:bg-primary/10 px-8 py-4 rounded-xl font-bold transition-all"
              >
                Diagnóstico gratuito
              </a>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex gap-12">
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-secondary uppercase tracking-wider">Satisfação</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">24h</p>
              <p className="text-xs text-secondary uppercase tracking-wider">Suporte</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">R$</p>
              <p className="text-xs text-secondary uppercase tracking-wider">Preços acessíveis</p>
            </div>
          </div>
        </div>

        {/* Lado Direito - Visual Principal */}
        <div className="relative flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            
            {/* 5. Elementos geométricos adicionais com animação de rotação suave */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_25s_linear_infinite] opacity-30">
              <div className="absolute -top-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute -bottom-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute -left-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute -right-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />
            </div>

            {/* Elemento decorativo reverso */}
            <div className="absolute inset-0 flex items-center justify-center animate-[spin_35s_linear_infinite_reverse] opacity-20">
              <div className="absolute top-1/4 left-0 w-4 h-4 border border-white/20 rounded-md rotate-45" />
              <div className="absolute bottom-1/4 right-0 w-4 h-4 border border-white/20 rounded-md rotate-45" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-[1.35]" />
            </div>

            {/* Background Decorativo Existente */}
            <div className="absolute inset-0 border border-white/5 rounded-full scale-125 -z-10" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-110 -z-10" />
            <div className="absolute inset-0 border border-white/5 rounded-full scale-90 -z-10" />
            
            {/* Central Icon Element */}
            <div className="relative w-48 h-48 bg-primary rounded-[2.5rem] rotate-45 flex items-center justify-center glow-primary z-20">
              <div className="-rotate-45 text-white">
                <svg className="w-20 h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" /></svg>
              </div>
            </div>

            {/* Floating items */}
            <div className="absolute top-10 right-10 w-8 h-8 bg-dark-lighter border border-white/10 rounded-lg flex items-center justify-center z-30 shadow-2xl">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            </div>
            <div className="absolute bottom-20 left-0 w-12 h-12 bg-dark-lighter border border-white/10 rounded-xl flex items-center justify-center z-30 shadow-2xl">
              <div className="w-4 h-1 bg-primary/40 rounded-full" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
