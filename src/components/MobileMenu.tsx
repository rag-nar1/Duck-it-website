import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

interface MobileMenuProps {
  isOpen: boolean;
  toggleMenu: () => void;
  toggleTheme: () => void;
  isDarkTheme: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, toggleMenu, toggleTheme, isDarkTheme }) => {
  return (
    <>
      <MenuToggle onClick={toggleMenu}>
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
      </MenuToggle>
      
      <AnimatePresence>
        {isOpen && (
          <MenuOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <MenuContainer
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 20 }}
            >
              <MenuHeader>
                <LogoContainer>
                  <LogoCircle />
                  <LogoText>DuckDB</LogoText>
                </LogoContainer>
                <CloseButton onClick={toggleMenu}>
                  <i className="fas fa-times"></i>
                </CloseButton>
              </MenuHeader>
              
              <MenuItems>
                <MenuItem href="#documentation">
                  Documentation
                  <i className="fas fa-chevron-right"></i>
                </MenuItem>
                <MenuItem href="#resources">
                  Resources
                  <i className="fas fa-chevron-right"></i>
                </MenuItem>
                <MenuItem href="https://github.com/duckdb/duckdb" target="_blank">
                  GitHub
                  <i className="fas fa-external-link-alt"></i>
                </MenuItem>
              </MenuItems>
              
              <MenuFooter>
                <ThemeToggleButton onClick={toggleTheme}>
                  <i className={`fas ${isDarkTheme ? 'fa-sun' : 'fa-moon'}`}></i>
                  Switch to {isDarkTheme ? 'Light' : 'Dark'} Mode
                </ThemeToggleButton>
                <SupportButton>Support</SupportButton>
              </MenuFooter>
            </MenuContainer>
          </MenuOverlay>
        )}
      </AnimatePresence>
    </>
  );
};

const MenuToggle = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;
  z-index: 1001;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const MenuContainer = styled(motion.div)`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 75%;
  max-width: 300px;
  background-color: ${({ theme }) => theme.background};
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const LogoCircle = styled.div`
  width: 20px;
  height: 20px;
  background-color: ${({ theme }) => theme.accent};
  border-radius: 50%;
`;

const LogoText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: ${({ theme }) => theme.text};
`;

const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 24px;
  cursor: pointer;
`;

const MenuItems = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const MenuItem = styled.a`
  color: ${({ theme }) => theme.text};
  font-size: 18px;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  
  i {
    font-size: 14px;
    opacity: 0.7;
  }
`;

const MenuFooter = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const ThemeToggleButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 10px;
  
  i {
    font-size: 16px;
  }
`;

const SupportButton = styled.button`
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 700;
`;

export default MobileMenu; 