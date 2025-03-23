import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

interface DocSidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
  isMobile?: boolean;
}

const DocSidebar: React.FC<DocSidebarProps> = ({ 
  isOpen = true, 
  onClose, 
  isMobile = false 
}) => {
  const location = useLocation();

  const sections = [
    {
      title: 'Introduction',
      links: [
        { path: '/docs', label: 'Overview', exact: true },
      ]
    },
    {
      title: 'Getting Started',
      links: [
        { path: '/docs/installation', label: 'Installation' },
        { path: '/docs/quick-start', label: 'Quick Start' },
      ]
    },
    {
      title: 'Core Concepts',
      links: [
        { path: '/docs/commands', label: 'Commands Reference' },
        { path: '/docs/security', label: 'Security & Access Control' },
        { path: '/docs/postgres-integration', label: 'PostgreSQL Integration' },
        { path: '/docs/troubleshooting', label: 'Troubleshooting' },
      ]
    },
    {
      title: 'Usage',
      links: [
        { path: '/docs/permissions', label: 'User Permissions' },
        { path: '/docs/databases', label: 'Database Management' },
        { path: '/docs/transactions', label: 'Transactions' },
      ]
    },
    {
      title: 'Advanced',
      links: [
        { path: '/docs/performance', label: 'Performance' },
        { path: '/docs/monitoring', label: 'Monitoring' },
        { path: '/docs/troubleshooting', label: 'Troubleshooting' },
      ]
    },
    {
      title: 'Development',
      links: [
        { path: '/docs/client-libraries', label: 'Client Libraries' },
        { path: '/docs/examples', label: 'Examples' },
        { path: '/docs/api-reference', label: 'API Reference' },
      ]
    },
  ];

  const sidebarVariants = {
    open: { x: 0, opacity: 1 },
    closed: { 
      x: isMobile ? '-100%' : 0, 
      opacity: isMobile ? 0 : 1 
    }
  };

  return (
    <SidebarContainer 
      initial={isMobile ? 'closed' : 'open'}
      animate={isOpen ? 'open' : 'closed'}
      variants={sidebarVariants}
      transition={{ duration: 0.3 }}
      isMobile={isMobile}
    >
      {isMobile && (
        <CloseButton onClick={onClose}>
          <i className="fas fa-times"></i>
        </CloseButton>
      )}
      
      <SidebarContent>
        <SidebarHeader>
          <Logo>
            <LogoIcon className="fas fa-database" />
            <LogoText>TCP DuckDB</LogoText>
          </Logo>
          <Version>v1.0.0</Version>
        </SidebarHeader>
        
        <Navigation>
          {sections.map((section, index) => (
            <NavSection key={index}>
              <SectionTitle>{section.title}</SectionTitle>
              <LinkList>
                {section.links.map((link, linkIndex) => (
                  <NavItem key={linkIndex}>
                    <StyledNavLink
                      to={link.path}
                      end={link.exact}
                      onClick={isMobile ? onClose : undefined}
                      className={({ isActive }) => isActive && location.pathname === link.path ? 'active' : ''}
                    >
                      {link.label}
                    </StyledNavLink>
                  </NavItem>
                ))}
              </LinkList>
            </NavSection>
          ))}
        </Navigation>
        
        <SidebarFooter>
          <FooterLink href="https://github.com/yourusername/tcp-duckdb-server" target="_blank">
            <i className="fab fa-github"></i>
            GitHub
          </FooterLink>
          <FooterLink href="https://duckdb.org" target="_blank">
            <i className="fas fa-external-link-alt"></i>
            DuckDB Official
          </FooterLink>
        </SidebarFooter>
      </SidebarContent>
    </SidebarContainer>
  );
};

const SidebarContainer = styled(motion.aside)<{ isMobile: boolean }>`
  background-color: ${({ theme }) => theme.secondary};
  width: ${props => props.isMobile ? '100%' : '280px'};
  height: 100%;
  overflow-y: auto;
  position: ${props => props.isMobile ? 'fixed' : 'relative'};
  top: 0;
  left: 0;
  z-index: 1000;
  border-right: 1px solid rgba(255, 255, 255, 0.05);
  
  @media (max-width: 768px) {
    border-right: none;
  }
  
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }
  
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.05);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  
  &::-webkit-scrollbar-thumb:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 20px;
  cursor: pointer;
  z-index: 10;
  padding: 5px;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const SidebarContent = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const SidebarHeader = styled.div`
  padding: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 5px;
`;

const LogoIcon = styled.i`
  color: ${({ theme }) => theme.accent};
  font-size: 20px;
`;

const LogoText = styled.h3`
  margin: 0;
  font-size: 18px;
  font-weight: 700;
`;

const Version = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.lineNumber};
`;

const Navigation = styled.nav`
  flex: 1;
  padding: 20px;
`;

const NavSection = styled.div`
  margin-bottom: 25px;
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h4`
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  color: ${({ theme }) => theme.lineNumber};
  margin: 0 0 10px;
  letter-spacing: 0.5px;
`;

const LinkList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const NavItem = styled.li`
  margin-bottom: 2px;
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 8px 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
  
  &.active {
    background-color: ${({ theme }) => theme.accent};
    color: #000;
    font-weight: 500;
  }
`;

const SidebarFooter = styled.div`
  padding: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterLink = styled.a`
  display: flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.lineNumber};
  font-size: 14px;
  transition: color 0.2s ease;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export default DocSidebar; 