import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import Button from './ui/Button';

const ContactSection: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formState);
    alert('Thanks for your message! We\'ll get back to you soon.');
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <Section id="contact" className="bg-accent-300">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-secondary-500">
            Have questions about GLAMPHONE ? We're here to help and would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <motion.div 
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div className="ml-4">
                    <p className="text-secondary-500 font-medium">Our Location</p>
                    <p className="text-secondary-500">123 Innovation Way, Tech District, CA 94103</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div className="ml-4">
                    <p className="text-secondary-500 font-medium">Call Us</p>
                    <p className="text-secondary-500">+1 (555) 123-4567</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mt-1 flex-shrink-0" size={20} />
                  <div className="ml-4">
                    <p className="text-secondary-500 font-medium">Email Us</p>
                    <p className="text-secondary-500">hello@novaproduct.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-6">
                Business Hours
              </h3>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span className="text-secondary-500">Monday - Friday:</span>
                  <span className="text-secondary-500">9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-secondary-500">Saturday:</span>
                  <span className="text-secondary-500">10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-secondary-500">Sunday:</span>
                  <span className="text-secondary-500">Closed</span>
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-3 bg-accent-100 rounded-xl shadow-lg p-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-secondary-500 mb-6">
              Send Us a Message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary-500 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-accent-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary-500 mb-1">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-accent-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white"
                  placeholder="john@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary-500 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2 border border-accent-200 rounded-lg focus:ring-primary-500 focus:border-primary-500 bg-white"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <Button className="w-full sm:w-auto flex items-center justify-center">
                <Send size={16} className="mr-2" />
                Send Message
              </Button>
            </form>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};

export default ContactSection;