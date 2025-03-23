import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

interface NavbarProps {
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ toggleTheme, isDarkTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle navbar background change on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <NavbarContainer
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      scrolled={scrolled}
    >
      <div className="container">
        <LogoLink href="/">
          <LogoCircle />
          <LogoText>DuckDB</LogoText>
        </LogoLink>
        <NavLinks>
          <NavLink href="#documentation">Documentation</NavLink>
          <NavLink href="#resources">Resources</NavLink>
          <GitHubStars>
            GitHub <i className="fas fa-star"></i> 278K
          </GitHubStars>
          <ThemeToggle onClick={toggleTheme}>
            <i className={`fas ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
          </ThemeToggle>
          <SupportButton>Support</SupportButton>
        </NavLinks>
        
        <MobileMenu 
          isOpen={isMenuOpen} 
          toggleMenu={toggleMenu} 
          toggleTheme={toggleTheme}
          isDarkTheme={isDarkTheme}
        />
      </div>
    </NavbarContainer>
  );
};

const NavbarContainer = styled(motion.nav)<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  width: 100%;
  background-color: ${({ theme, scrolled }) => 
    scrolled ? 'rgba(0, 0, 0, 0.85)' : 'transparent'};
  backdrop-filter: ${({ scrolled }) => 
    scrolled ? 'blur(10px)' : 'none'};
  padding: 10px 20px;
  z-index: 1000;
  border-bottom: 1px solid ${({ scrolled }) => 
    scrolled ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;

  .container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const LogoLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: none;
`;

const LogoCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
  transition: transform 0.3s ease;

  ${LogoLink}:hover & {
    transform: scale(1.1);
  }
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavLink = styled.a`
  position: relative;
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  font-weight: 500;
  padding: 8px 16px;
  transition: opacity 0.2s ease;

  &:after {
    content: '▼';
    font-size: 8px;
    margin-left: 4px;
    vertical-align: middle;
  }

  &:hover {
    opacity: 0.8;
  }
`;

const GitHubStars = styled.span`
  color: ${({ theme }) => theme.text};
  font-size: 16px;
  display: flex;
  align-items: center;
  gap: 5px;

  i {
    font-size: 18px;
    color: ${({ theme }) => theme.accent};
  }
`;

const ThemeToggle = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  cursor: pointer;
  padding: 5px;
  transition: transform 0.3s ease;

  &:hover {
    transform: rotate(30deg);
  }
`;

const SupportButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 14px;
  font-weight: 700;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

export default Navbar; 