
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

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
