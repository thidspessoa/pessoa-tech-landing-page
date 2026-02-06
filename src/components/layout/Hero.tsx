import React from 'react';
import { SITE_CONFIG } from '../../config/site';
import { WhatsappIcon } from '../icons/WhatsappIcon';
import { HeroBackground } from '../ui/HeroBackground';

const Hero = () => {
  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-dark"
    >
      {/* Background */}
      <HeroBackground className="absolute inset-0 z-0 pointer-events-none" />

      <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* ================= LEFT CONTENT ================= */}
        <div
          className="
            relative
            flex flex-col gap-8
            text-center
            lg:text-left
            max-w-xl
            md:max-w-xl
            lg:max-w-none
            mx-auto
            lg:mx-0
          "
        >
          {/* Decorative circles — mantidos apenas a partir do tablet */}
          <div className="absolute -top-20 -left-20 w-64 h-64 border border-white/5 rounded-full pointer-events-none -z-10 hidden md:block" />
          <div className="absolute -top-10 -left-10 w-48 h-48 border border-white/5 rounded-full pointer-events-none -z-10 hidden md:block" />

          <h1
            id="hero-title"
            className="
              text-5xl
              md:text-5xl
              lg:text-7xl
              font-bold
              leading-tight
              text-white
            "
          >
            Soluções{' '}
            <span className="text-primary">digitais e criativas</span> sob medida
            para seu negócio
          </h1>

          <p className="text-lg text-secondary leading-relaxed">
            Atuamos para transformar desafios reais em soluções práticas - da
            tecnologia ao marketing e design.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href={SITE_CONFIG.urlWpp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir conversa no WhatsApp"
              className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all glow-primary"
            >
              <WhatsappIcon className="w-5 h-5" />
              Fale Conosco
            </a>

            <a
              href="#servicos"
              className="flex items-center gap-2 border border-primary text-white hover:bg-primary/10 px-8 py-4 rounded-xl font-bold transition-all"
            >
              Avaliação Gratuita
            </a>
          </div>

          {/* Metrics – desktop only */}
          <div className="hidden lg:flex pt-8 border-t border-white/10 gap-12">
            <div>
              <p className="text-2xl font-bold text-white">100%</p>
              <p className="text-xs text-secondary uppercase tracking-wider">
                Satisfação
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">24h</p>
              <p className="text-xs text-secondary uppercase tracking-wider">
                Suporte
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-white">R$</p>
              <p className="text-xs text-secondary uppercase tracking-wider">
                Preços acessíveis
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT VISUAL (DESKTOP ONLY) ================= */}
        <div className="hidden relative lg:flex justify-center lg:justify-end items-center">
          <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
            
            {/* 5. Elementos geométricos adicionais com animação de rotação suave */}
            <div className="absolute inset-0 flex items-center justify-center spin-slow opacity-30">
              <div className="absolute -top-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute -bottom-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute -left-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute -right-4 w-6 h-6 border border-primary/40 rounded-full" />
              <div className="absolute inset-0 border border-white/5 rounded-full scale-110" />
            </div>

            {/* Elemento decorativo reverso */}
            <div className="absolute inset-0 flex items-center justify-center spin-slower opacity-20">
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
      <div className="hidden lg:flex absolute bottom-10 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-30 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
