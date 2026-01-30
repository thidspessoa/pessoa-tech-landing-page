
import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Diagnóstico',
    description: 'Analisamos seu ambiente tecnológico atual e identificamos oportunidades de melhoria e otimização.',
  },
  {
    number: '02',
    title: 'Planejamento',
    description: 'Criamos um plano personalizado com soluções práticas e alinhadas à realidade do seu negócio.',
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Executamos as soluções com agilidade, garantindo mínimo impacto nas suas operações diárias.',
  },
  {
    number: '04',
    title: 'Suporte Contínuo',
    description: 'Acompanhamos os resultados e oferecemos suporte proativo para garantir o sucesso contínuo.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="como-trabalhamos" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Como <span className="text-primary">trabalhamos</span></h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Nossa metodologia simples e eficaz em 4 etapas para transformar sua empresa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="bg-dark-lighter border border-white/5 p-8 rounded-2xl h-full flex flex-col gap-4 hover:bg-white/5 transition-all">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg glow-primary">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-secondary text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {/* Connector for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 z-10 text-white/20">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-secondary mb-8">Pronto para começar essa jornada?</p>
          <a 
            href="#contato" 
            className="inline-flex items-center gap-2 border border-primary text-white hover:bg-primary/10 px-8 py-3 rounded-xl font-bold transition-all"
          >
            Agendar diagnóstico gratuito
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
