import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Container from './ui/Container';

const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-500 text-accent-100 py-12">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            
            <img 
              src="/LOGO.svg" 
              alt="Logo" 
              className="h-20 w-auto"  // Adjust size as needed
            />

            <p className="text-accent-100 mb-4">
              The only iPhone case that keeps you selfie-ready. Built-in makeup, bold design, and full-body protection.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Iphone 16 Case</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Iphone 15 Case</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Iphone 14 Case</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Iphone 13 Case</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-accent-100 hover:text-primary-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Careers</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Press</a></li>
              <li><a href="#contact" className="text-accent-100 hover:text-primary-500 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Help Center</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">User Guides</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Warranty</a></li>
              <li><a href="#" className="text-accent-100 hover:text-primary-500 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-accent-100/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-accent-100 text-sm">
            &copy; {new Date().getFullYear()} GLAMPHONE. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-accent-100 hover:text-primary-500 text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-accent-100 hover:text-primary-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-accent-100 hover:text-primary-500 text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;