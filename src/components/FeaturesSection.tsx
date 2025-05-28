import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Shield, Globe, Cpu } from 'lucide-react';
import Container from './ui/Container';
import Section from './ui/Section';
import { ProductFeature } from '../types';
import MirrorIcon from '../assets/icons/mirror.svg';
import ELEGANT from '../assets/icons/elegant.svg';
import HEART from '../assets/icons/heart.svg';

const features: ProductFeature[] = [
  {
    id: 1,
    title: 'Mirror On-the-Go',
    description: 'Never search for a mirror again — your phone is all you need.',
    icon: <img src={MirrorIcon} alt="Mirror Icon" className="h-8 w-8 text-primary-500" />
  },
  {
    id: 2,
    title: 'Hidden Makeup Compartment',
    description: 'A sleek slide-out tray holds essentials like lip gloss or powder.',
    icon: <Shield size={32} className="text-primary-500" />
  },
  {
    id: 3,
    title: 'Snap. Touch-Up. Slay',
    description: 'Ready in seconds — whether you are at brunch, in a meeting, or dancing at midnight.',
    icon: <img src={HEART} alt="Mirror Icon" className="h-8 w-8 text-primary-500" />
  },
  {
    id: 4,
    title: 'Elegant + Protective',
    description: 'Premium materials that protect your phone while enhancing your look.',
    icon: <img src={ELEGANT} alt="Mirror Icon" className="h-8 w-8 text-primary-500" />
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <Section id="features\" className="bg-accent-300">
      <Container>
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary-500 mb-4">
            Designed for Confidence, Built for Convenience
          </h2>
          <p className="text-lg text-secondary-500 max-w-2xl mx-auto">
            Discover the features that make our product stand out from the competition.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.id}
              className="bg-accent-100 p-8 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-secondary-500 mb-2">
                {feature.title}
              </h3>
              <p className="text-secondary-500">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default FeaturesSection;