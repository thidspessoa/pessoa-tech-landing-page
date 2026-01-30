
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-10% 0px -85% 0px', 
      threshold: 0,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

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

  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled || isMenuOpen ? 'glass py-3 border-b border-white/10' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 relative z-[110]">
          {/* Logo da Pessoa Tech */}
          <div className="w-8 h-8 flex items-center justify-center">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
              <circle cx="50" cy="38" r="18" fill="#8B47ED"/>
              <path d="M25 78C25 68 35 63 50 63C65 63 75 68 75 78V83H25V78Z" fill="#8B47ED"/>
              <ellipse cx="50" cy="58" rx="42" ry="14" stroke="#8B47ED" strokeWidth="3" transform="rotate(-15, 50, 58)"/>
              <circle cx="15" cy="48" r="4" fill="#8B47ED"/>
              <circle cx="85" cy="68" r="4" fill="#8B47ED"/>
              <circle cx="50" cy="72" r="3" fill="#8B47ED"/>
            </svg>
          </div>
          
          <span className="text-xl font-bold text-white tracking-tight">
            Pessoa <span className="text-primary">Tech</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a 
                key={link.name} 
                href={link.href}
                className={`text-sm font-medium transition-all duration-300 relative py-1 ${
                  isActive ? 'text-white' : 'text-secondary hover:text-white'
                }`}
              >
                {link.name}
                <span 
                  className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`} 
                />
              </a>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a 
            href="#contato" 
            className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition-all glow-primary"
          >
            Fale Conosco
          </a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <button 
          className="md:hidden text-white relative z-[110] p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-full bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>

        {/* Mobile Navigation Overlay */}
        <div 
          className={`fixed inset-0 bg-dark/98 backdrop-blur-xl flex flex-col justify-center items-center transition-all duration-500 md:hidden ${
            isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          <nav className="flex flex-col gap-8 text-center">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={handleNavLinkClick}
                  className={`text-2xl font-bold transition-all duration-300 ${
                    isActive ? 'text-primary scale-110' : 'text-white/70'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <a 
              href="#contato" 
              onClick={handleNavLinkClick}
              className="mt-4 bg-primary text-white px-8 py-4 rounded-xl font-bold glow-primary"
            >
              Fale Conosco
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
