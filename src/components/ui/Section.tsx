import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SectionProps } from '../../types';

const Section: React.FC<SectionProps> = ({ id, className = '', children }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id={id}
      className={`py-16 md:py-24 ${className}`}
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;