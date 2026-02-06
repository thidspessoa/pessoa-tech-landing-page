
import React from 'react';
import Header from './components/layout/Header';
import Hero from './components/layout/Hero';
import Services from './components/layout/Services';
import HowItWorks from './components/layout/HowItWorks';
import About from './components/layout/About';
import CTA from './components/layout/CTA';
import Footer from './components/layout/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans selection:bg-primary/30 selection:text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <HowItWorks />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default App;
