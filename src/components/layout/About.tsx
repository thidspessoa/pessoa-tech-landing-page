import React from 'react';

const About = () => {
  return (
    <section id="sobre-nos" className="py-16 lg:py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Images Grid — SOMENTE DESKTOP */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            <div className="col-span-2">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
                alt="Equipe Pessoa Tech" 
                className="w-full h-64 object-cover rounded-3xl"
              />
            </div>
            <div className="h-48">
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400" 
                alt="Tecnologia" 
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className="bg-primary rounded-3xl p-8 flex flex-col justify-center text-white">
              <p className="text-4xl font-bold mb-1">Especialistas</p>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">
                Em soluções digitais
              </p>
              <p className="text-xs mt-4 opacity-70 italic">
                Tecnologia prática para resolver problemas de negócios
              </p>
            </div>
          </div>

          {/* Text Content */}
          <div
            className="
              flex flex-col gap-8
              text-center
              lg:text-left
              md:items-center
              lg:items-start
            "
          >
            <div className="md:max-w-xl lg:max-w-none">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 lg:mb-6">
                Sobre a <span className="text-primary">Pessoa Tech</span>
              </h2>
              <p className="text-secondary font-medium">
                Tecnologia acessível para seu negócio
              </p>
            </div>

            <div
              className="
                flex flex-col gap-5
                text-secondary leading-relaxed
                text-sm lg:text-base
                md:max-w-xl
                lg:max-w-none
              "
            >
              <p>
                A <span className="text-white font-semibold">Pessoa Tech</span> nasceu com um propósito claro:{' '}
                <span className="text-white font-semibold">
                  tornar a tecnologia acessível e compreensível
                </span>{' '}
                para pequenos e médios empreendedores.
              </p>
              <p>
                Sabemos que muitas vezes a TI parece complexa e distante da realidade dos negócios,
                com preços superfaturados. Por isso, nossa missão é{' '}
                <span className="text-white font-semibold">
                  traduzir tecnologia em soluções práticas
                </span>{' '}
                que realmente fazem diferença no dia a dia.
              </p>
              <p>
                Trabalhamos de forma próxima, transparente e com uma linguagem clara, porque acreditamos que{' '}
                <span className="text-white font-semibold">
                  tecnologia deve facilitar, não complicar.
                </span>
              </p>
            </div>

            <ul className="space-y-4 md:max-w-xl lg:max-w-none">
              {[
                'Profissionais com mais de 3 anos de experiência no mercado',
                'Equipe certificada e especializada',
                'Atendimento personalizado e próximo',
                'Soluções práticas e sem complicações',
                'Compromisso com resultados reais',
              ].map((item, idx) => (
                <li
                  key={idx}
                  className="
                    flex items-start lg:items-center gap-3
                    text-secondary text-sm
                    text-left
                  "
                >
                  <div className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button
              className="
                inline-flex items-center justify-center gap-2
                bg-primary hover:bg-primary/90
                text-white px-8 py-4 rounded-xl
                font-bold transition-all
                w-fit
                mx-auto
                lg:mx-0
              "
            >
              Conheça mais sobre nós
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M14 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
