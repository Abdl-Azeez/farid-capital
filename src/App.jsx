import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ServicesSection from './components/ServicesSection';
import InsightsSection from './components/InsightsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-light text-dark">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
