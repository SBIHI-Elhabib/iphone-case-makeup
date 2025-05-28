import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import VideoBackground from './ui/VideoBackground';

const HeroSection: React.FC = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <VideoBackground 
        videoUrl="/video.mp4" 
        overlayOpacity={40}
      />
      
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-accent-100 mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Beauty in Your Pocket
          </motion.h1>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection