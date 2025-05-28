import React from 'react';
import { motion } from 'framer-motion';
import Container from './ui/Container';
import Section from './ui/Section';
import { TeamMember } from '../types';

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Alex Morgan',
    role: 'CEO & Founder',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Visionary leader with 15+ years experience in tech innovation.'
  },
  {
    id: 2,
    name: 'Sam Williams',
    role: 'Chief Design Officer',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Award-winning designer focused on creating intuitive user experiences.'
  },
  {
    id: 3,
    name: 'Taylor Chen',
    role: 'CTO',
    image: 'https://images.pexels.com/photos/2613260/pexels-photo-2613260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    bio: 'Engineering mastermind behind our innovative technology platform.'
  }
];

const AboutSection: React.FC = () => {
  return (
    <Section id="about" className="bg-accent-200">
      <Container>

        <div className="pt-10">
          <h3 className="text-2xl font-bold text-secondary-500 mb-8 text-center">
            Meet Our Team
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                className="bg-accent-100 rounded-xl overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-secondary-500">{member.name}</h4>
                  <p className="text-primary-500 mb-2">{member.role}</p>
                  <p className="text-secondary-500">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default AboutSection;