import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import { NavItem } from '../types';

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Features', href: '#features' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const scrollToSection = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 shadow-md backdrop-blur-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
      <a 
        href="#home" 
        className="flex items-center"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection('#home');
        }}
      >
        <img 
          src="/LOGO.svg" 
          alt="Logo" 
          className="h-20 w-auto"  // Adjust size as needed
        />
      </a>
    </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-primary-500 ${
                    isScrolled ? 'text-secondary-500' : 'text-white'
                  }`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
            </div>
            <Button size="sm">Get Started</Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className={`p-2 rounded-md focus:outline-none ${
                isScrolled ? 'text-secondary-500' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 py-4 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col space-y-4 px-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="text-secondary-500 text-sm font-medium hover:text-primary-500"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                >
                  {item.label}
                </a>
              ))}
              <Button size="sm" className="mt-4">Get Started</Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
};

export default Navbar;