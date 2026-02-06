import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('inicio');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Como Trabalhamos', href: '#como-trabalhamos' },
    { name: 'Sobre Nós', href: '#sobre-nos' },
    { name: 'Contato', href: '#contato' },
  ];

  /* ===============================
     Scroll + Active Section
  =============================== */
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-10% 0px -85% 0px',
        threshold: 0,
      }
    );

    navLinks.forEach((link) => {
      const section = document.querySelector(link.href);
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  /* ===============================
     🔒 Lock body scroll
  =============================== */
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          isScrolled
            ? 'glass py-3 border-b border-white/10'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            {/* Logo da Pessoa Tech */}
            <div className="w-8 h-8 hidden md:flex items-center justify-center">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <circle cx="50" cy="38" r="18" fill="#8B47ED"/>
                <path d="M25 78C25 68 35 63 50 63C65 63 75 68 75 78V83H25V78Z" fill="#8B47ED"/>
                <ellipse cx="50" cy="58" rx="42" ry="14" stroke="#8B47ED" strokeWidth="3" transform="rotate(-15, 50, 58)"/>
                <circle cx="15" cy="48" r="4" fill="#8B47ED"/>
                <circle cx="85" cy="68" r="4" fill="#8B47ED"/>
                <circle cx="50" cy="72" r="3" fill="#8B47ED"/>
              </svg>
            </div>

            <span className="text-lg lg:text-xl font-bold text-white">
              Pessoa <span className="text-primary">Tech</span>
            </span>
          </div>

          {/* Desktop / Tablet Nav */}
          <nav className="hidden md:flex gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm lg:text-sm font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'text-white'
                    : 'text-secondary hover:text-white'
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA (somente desktop real) */}
          <div className="hidden lg:block">
            <a
              href="#contato"
              className="bg-primary px-5 py-2.5 rounded-lg text-sm font-semibold text-white"
            >
              Fale Conosco
            </a>
          </div>

          {/* Hamburger / Close (mobile apenas) */}
          <button
            className={`md:hidden p-2 relative ${
              isMenuOpen ? 'z-[1001]' : 'z-[110]'
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menu"
          >
            <div className="w-6 flex flex-col gap-1.5">
              <span
                className={`h-0.5 bg-white transition-all ${
                  isMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-white transition-all ${
                  isMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`h-0.5 bg-white transition-all ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* ================= MOBILE OVERLAY ================= */}
      <div
        className={`fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        <nav
          onClick={(e) => e.stopPropagation()}
          className="
            absolute top-24 left-1/2 -translate-x-1/2
            w-[calc(100%-3rem)]
            rounded-2xl
            bg-dark border border-white/10
            shadow-2xl
            px-6 py-10
            flex flex-col items-center gap-8
            text-center
          "
        >
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMenuOpen(false)}
              className={`text-2xl font-bold ${
                activeSection === link.href.substring(1)
                  ? 'text-primary'
                  : 'text-white'
              }`}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
};

export default Header;
