import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <FooterContainer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <FooterContent>
          <Copyright>&copy; {new Date().getFullYear()} DuckDB. All rights reserved.</Copyright>
          <FooterLinks>
            <FooterLink href="#license">License</FooterLink>
          </FooterLinks>
        </FooterContent>
      </div>
    </FooterContainer>
  );
};

const FooterContainer = styled(motion.footer)`
  background-color: ${({ theme }) => theme.secondary};
  padding: 20px;
  margin-top: 50px;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
  font-size: 14px;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 15px;
`;

const FooterLink = styled.a`
  font-size: 14px;
  opacity: 0.9;
  transition: opacity 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

export default Footer; 