
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="sobre-nos" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Images Grid */}
          <div className="grid grid-cols-2 gap-4">
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
              <p className="text-4xl font-bold mb-1">+10</p>
              <p className="text-sm font-medium uppercase tracking-wider opacity-80">Anos de experiência</p>
              <p className="text-xs mt-4 opacity-70 italic">Transformando negócios através da tecnologia</p>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col gap-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Sobre a <span className="text-primary">Pessoa Tech</span></h2>
              <p className="text-secondary font-medium">Tecnologia acessível para micro e pequenos empresários</p>
            </div>

            <div className="flex flex-col gap-4 text-secondary leading-relaxed">
              <p>
                A <span className="text-white font-semibold">Pessoa Tech</span> nasceu com um propósito claro: <span className="text-white font-semibold">tornar a tecnologia acessível e compreensível</span> para micro e pequenos empresários.
              </p>
              <p>
                Sabemos que muitas vezes a TI parece complexa e distante da realidade dos negócios. Por isso, nossa missão é <span className="text-white font-semibold">traduzir tecnologia em soluções práticas</span> que realmente fazem diferença no dia a dia.
              </p>
              <p>
                Trabalhamos de forma próxima, transparente e com uma linguagem clara, porque acreditamos que <span className="text-white font-semibold">tecnologia deve facilitar, não complicar.</span>
              </p>
            </div>

            <ul className="space-y-4">
              {[
                'Mais de 10 anos de experiência no mercado',
                'Equipe certificada e especializada',
                'Atendimento personalizado e próximo',
                'Soluções práticas e sem complicações',
                'Compromisso com resultados reais',
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-secondary text-sm">
                  <div className="w-5 h-5 bg-primary/20 text-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-bold transition-all w-fit">
              Conheça nossa história completa
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7-7 7" /></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
