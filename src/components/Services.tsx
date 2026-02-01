
import React from 'react';

const services = [
  {
    title: 'Gestão de Infraestrutura de TI',
    description: 'Monitoramento proativo, gestão de servidores e redes, com backup contínuo para garantir disponibilidade e segurança.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2" />
      </svg>
    ),
  },
  {
    title: 'Suporte e Help Desk',
    description: 'Suporte remoto e on-site com primeiro atendimento garantido em até 30 minutos. Agilidade para resolver problemas.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Cloud Computing',
    description: 'Migração e gestão de nuvem com soluções como Microsoft 365, Google Workspace e AWS para otimizar operações.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
  },
  {
    title: 'Segurança da Informação',
    description: 'Proteção contra ataques cibernéticos, implementação de firewalls, análise de vulnerabilidades e soluções de DR.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'Consultoria Estratégica em TI',
    description: 'Diagnóstico e planejamento para otimização do ambiente de TI, reduzindo custos e aumentando a produtividade.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Gestão da Produtividade',
    description: 'Transforme a maneira como sua empresa trabalha e a produtividade das equipes usando tecnologia de gestão moderna.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
];

const Services: React.FC = () => {
  return (
    <section id="servicos" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">O que <span className="text-primary">entregamos</span></h2>
          <p className="text-secondary max-w-2xl mx-auto">
            Soluções completas em tecnologia para impulsionar seu negócio com clareza e eficiência.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-dark-lighter border border-white/5 p-8 rounded-2xl hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{service.title}</h3>
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
