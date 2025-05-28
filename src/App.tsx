import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import ProductShowcase from './components/ProductShowcase';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans bg-accent-300">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ProductShowcase />
      <AboutSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App