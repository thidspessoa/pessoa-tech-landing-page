
import React from 'react';
import { ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Avaliação',
    description: 'Avaliamos sua necessidade, seja ela uma demanda já definida ou uma análise do cenário atual para identificar melhorias e otimizações.',
  },
  {
    number: '02',
    title: 'Proposta',
    description: 'Com base na avaliação, retornamos com uma proposta de solução contendo escopo, valor, prazo, contrato e o plano de implementação.',
  },
  {
    number: '03',
    title: 'Implementação',
    description: 'Construímos a solução passo a passo, mantendo você informado durante todo o processo e respeitando prazos justos definidos em conjunto.',
  },
  {
    number: '04',
    title: 'Suporte',
    description: 'Acompanhamos o período pós-entrega junto ao cliente, prestando suporte para ajustes, correções e auxílio na utilização da solução implementada.',
  },
];

// 'Acompanhamos o período pós-entrega, prestando suporte para ajustes, correções e auxílio na utilização da solução.'
const HowItWorks = () => {
  return (
    <section id="como-trabalhamos" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Como <span className="text-primary">trabalhamos</span>
          </h2>
          <p className="text-secondary max-w-2xl mx-auto text-sm">
            Uma metodologia simples e eficaz em 4 etapas.
          </p>

          {/* Aviso discreto */}
          <p className="mt-3 text-xs md:text-sm text-secondary/70 max-w-xl mx-auto leading-relaxed">
            *As etapas podem variar conforme o tipo de serviço, complexidade do projeto
            ou necessidade específica do seu negócio.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <div key={step.number} className="relative">
                {/* Linha vertical (mobile only) */}
                {!isLast && (
                  <span className="absolute left-6 top-14 h-full w-px bg-white/10 lg:hidden" />
                )}

                <div className="flex gap-6 lg:flex-col">
                  {/* Número */}
                  <div className="relative z-10">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold glow-primary">
                      {step.number}
                    </div>
                  </div>

                  {/* Conteúdo */}
                  <div className="bg-dark-lighter border border-white/5 p-6 rounded-2xl flex-1 transition-all hover:bg-white/5">
                    <h3 className="text-lg font-bold mb-2">
                      {step.title}
                    </h3>
                    <p className="text-secondary text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Conector horizontal (desktop only) */}
                {!isLast && (
                  <ArrowRight
                    size={24}
                    className="hidden lg:block absolute top-1/2 -right-4 -translate-y-1/2 text-white/20"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-secondary mb-6">
            Pronto para começar essa jornada?
          </p>
          <a
            href="#contato"
            className="inline-flex items-center gap-2 border border-primary px-8 py-3 rounded-xl font-bold transition-all hover:bg-primary/10"
          >
            Agendar Avaliação Gratuita
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
