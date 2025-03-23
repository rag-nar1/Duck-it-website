import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import CodeSnippet from './CodeSnippet';

const Hero: React.FC = () => {
  return (
    <HeroContainer>
      <div className="container">
        <HeroContent>
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1>
              <Highlight>DuckDB</Highlight> is a fast
              <HighlightBackground>in-process</HighlightBackground>
              database system
            </h1>
            <p>Query and transform your data anywhere using <strong>DuckDB's</strong> feature-rich SQL dialect</p>
            <ButtonContainer>
              <OutlineButton>
                Installation <i className="fas fa-chevron-down"></i>
              </OutlineButton>
              <PrimaryButton>
                Documentation
              </PrimaryButton>
            </ButtonContainer>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <CodeSnippet />
          </motion.div>
        </HeroContent>
      </div>
    </HeroContainer>
  );
};

const HeroContainer = styled.section`
  padding: 120px 20px 50px;
  min-height: 100vh;
  display: flex;
  align-items: center;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
`;

const HeroContent = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  gap: 30px;
  align-items: center;

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }

  .hero-text {
    @media (max-width: 992px) {
      text-align: center;
    }
  }
`;

const Highlight = styled.span`
  font-weight: 700;
`;

const HighlightBackground = styled.span`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.text};
  padding: 0 10px;
  margin: 0 5px;
  border-radius: 4px;
  font-weight: 400;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;

  @media (max-width: 992px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const OutlineButton = styled(Button)`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
`;

const PrimaryButton = styled(Button)`
  background-color: ${({ theme }) => theme.accent};
  border: none;
  color: #000000;
`;

export default Hero; 