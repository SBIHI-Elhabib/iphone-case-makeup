import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';

const ProductShowcase: React.FC = () => {
  return (
    <Section id="product" className="bg-gradient-to-b from-white to-gray-50">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-6">
              Designed for the Future
            </h2>
            <p className="text-lg text-secondary-500 mb-8">
              From Phone to Beauty Tool in One Click
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">1</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary-800">Slide to Reveal</h3>
                  <p className="text-secondary-500">Access your makeup tray discreetly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">2</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary-800">Use the Built-In Mirror</h3>
                  <p className="text-secondary-500">Perfect touch-ups anytime.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary-500 flex items-center justify-center mt-1">
                  <span className="text-white text-sm font-bold">3</span>
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-medium text-secondary-800">Snap it Back</h3>
                  <p className="text-secondary-500">Sleek, secure, and ready for anything.</p>
                </div>
              </div>
            </div>
          </div>
          
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <motion.img 
                src="/new_product.jpeg" 
                alt="Nova Product" 
                className="rounded-lg shadow-xl max-w-full h-auto"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6,
                  ease: "easeInOut"
                }}
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-500 text-white px-6 py-2 rounded-full shadow-lg">
                New Release
              </div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary-800 mb-4">
              See It In Action
            </h2>
            <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
              Explore how GLAMPHONE transforms everyday experiences.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <img 
                src="/image1.png" 
                alt="Nova in use" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <motion.div 
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="/image2.png" 
                alt="Nova features" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            
            <motion.div 
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <img 
                src="/image3.png" 
                alt="Nova design" 
                className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ProductShowcase;