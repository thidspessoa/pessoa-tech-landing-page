import React from 'react';
import { Github, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dark border-t border-white/5 py-14">
      <div className="container mx-auto px-6">

        {/* Top */}
        <div className="flex flex-col md:flex-row justify-between gap-12">

          {/* Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-3">
            <span className="text-xl font-bold text-white tracking-tight">
              Pessoa <span className="text-primary">Tech</span>
            </span>
            <p className="text-secondary text-sm max-w-xs">
              Soluções digitais práticas para pequenos e médios negócios.
            </p>
          </div>

          {/* Navigation */}
          <div
            className="
              grid grid-cols-2 gap-4
              text-sm text-secondary text-center
              md:flex md:flex-row md:gap-8 md:text-left md:items-center
            "
          >
            <a href="#inicio" className="hover:text-white transition-colors">Início</a>
            <a href="#servicos" className="hover:text-white transition-colors">Serviços</a>
            <a href="#como-trabalhamos" className="hover:text-white transition-colors">Processos</a>
            <a href="#sobre-nos" className="hover:text-white transition-colors">Sobre</a>
          </div>

          {/* Contact + Social */}
          <div className="flex flex-col items-center md:items-end gap-6">
            <div className="text-sm text-secondary text-center md:text-right">
              <p className="font-medium text-white leading-none">
                Fale conosco
              </p>
              <p className="mt-1 leading-none">
                +55 (81) 99721-0064
              </p>
            </div>

            <div className="flex gap-4">
              {[
                {
                  label: 'LinkedIn',
                  url: 'https://www.linkedin.com/in/thiago-pessoa/',
                  Icon: Linkedin
                },
                {
                  label: 'Instagram',
                  url: 'https://www.instagram.com/pessoatech',
                  Icon: Instagram
                },
                {
                  label: 'GitHub',
                  url: 'https://github.com/thidspessoa',
                  Icon: Github
                }
              ].map(({ label, url, Icon }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 text-secondary hover:text-white hover:bg-primary transition-all"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-6 border-t border-white/5 text-xs text-secondary text-center md:text-left">
          © {new Date().getFullYear()} Pessoa Tech — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
