import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Features: React.FC = () => {
  const features = [
    {
      id: 1,
      title: 'Simple',
      icon: 'check',
      description: 'Easy to use and integrate with your existing applications'
    },
    {
      id: 2,
      title: 'Portable',
      icon: 'suitcase',
      description: 'Run anywhere with minimal dependencies'
    },
    {
      id: 3,
      title: 'Feature-rich',
      icon: 'network-wired',
      description: 'Full SQL support with advanced capabilities'
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <FeaturesContainer>
      <div className="container">
        <SectionTitle
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          DuckDB at a glance
        </SectionTitle>
        
        <FeatureCards
          variants={container}
          initial="hidden"
          animate="show"
        >
          {features.map(feature => (
            <FeatureCard key={feature.id} variants={item}>
              <FeatureIcon>
                <i className={`fas fa-${feature.icon}`}></i>
              </FeatureIcon>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeatureCards>
      </div>
    </FeaturesContainer>
  );
};

const FeaturesContainer = styled.section`
  padding: 50px 20px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
`;

const SectionTitle = styled(motion.h2)`
  font-size: 32px;
  font-weight: 700;
  text-align: center;
  margin-bottom: 40px;
`;

const FeatureCards = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled(motion.div)`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 30px;
  text-align: center;
  box-shadow: ${({ theme }) => theme.shadow};
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 18px;
    font-weight: 700;
    margin: 15px 0 10px;
  }

  p {
    opacity: 0.9;
    font-size: 16px;
  }
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: ${({ theme }) => theme.codeKeyword};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  i {
    font-size: 24px;
    color: ${({ theme }) => theme.text};
  }
`;

export default Features; 