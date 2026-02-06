
import React from 'react';
import { BotMessageSquare, LayoutTemplate, TabletSmartphone, Megaphone, Sparkles, Palette } from 'lucide-react';

const services = [
  {
    title: 'Desenvolvimento Web & Sistemas',
    description:
      'Criamos websites, landing pages e sistemas sob medida, focados em performance, segurança e facilidade de uso, alinhados à realidade do seu negócio.',
    icon: (
      <LayoutTemplate className="w-6 h-6" />
    ),
  },
  {
    title: 'Aplicativos & Soluções Mobile',
    description:
      'Desenvolvemos aplicações mobile e soluções acessíveis por dispositivos móveis para otimizar processos e aproximar sua empresa do cliente.',
    icon: (
      <TabletSmartphone className="w-6 h-6" />
    ),
  },
  {
    title: 'Automações & Integrações',
    description:
      'Automatizamos tarefas, criamos chatbots e integramos sistemas para reduzir custos operacionais e aumentar a eficiência do seu negócio.',
    icon: (
      <BotMessageSquare className="w-6 h-6" />
    ),
  },
  {
    title: 'Marketing Digital & Performance',
    description:
      'Executamos estratégias de marketing digital focadas em tráfego pago, conversão e análise de resultados, sempre orientadas por dados.',
    icon: (
      <Megaphone className="w-6 h-6" />
    ),
  },
  {
    title: 'Branding, Conteúdo & Redes Sociais',
    description:
      'Construímos marcas fortes com identidade visual, conteúdo estratégico e gestão de redes sociais alinhadas ao posicionamento do negócio.',
    icon: (
      <Sparkles className="w-6 h-6" />
    ),
  },
  {
    title: 'Design Gráfico & Materiais Impressos',
    description:
      'Criamos materiais gráficos personalizados como panfletos, banners, adesivos e impressos que fortalecem sua marca no ponto de venda.',
    icon: (
      <Palette />
    ),
  },
];


const Services = () => {
  return (
    <section id="servicos" className="py-16 lg:py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold mb-3 lg:mb-4">
            O que <span className="text-primary">entregamos</span>
          </h2>
          <p className="text-secondary text-sm lg:text-base max-w-2xl mx-auto">
            Soluções completas para impulsionar seu negócio com clareza e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-dark-lighter border border-white/5 p-6 lg:p-8 rounded-2xl hover:border-primary/50 transition-all duration-300 text-center lg:text-left"
            >
              <div className="mx-auto lg:mx-0 w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-white transition-all">
                {service.icon}
              </div>

              <h3 className="text-lg lg:text-xl font-bold mb-3">
                {service.title}
              </h3>

              <p className="text-secondary text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
