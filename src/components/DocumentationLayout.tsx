import React, { useState } from 'react';
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import DocSidebar from './DocSidebar';

const DocumentationLayout: React.FC = () => {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <DocContainer>
      {/* Desktop Sidebar (always visible on larger screens) */}
      <DesktopSidebar>
        <DocSidebar />
      </DesktopSidebar>

      {/* Mobile Sidebar Toggle Button */}
      <MobileMenuButton onClick={toggleMobileSidebar}>
        <i className="fas fa-bars"></i>
        Menu
      </MobileMenuButton>

      {/* Mobile Sidebar (shown/hidden based on state) */}
      <AnimatePresence>
        {isMobileSidebarOpen && (
          <>
            <MobileOverlay 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={toggleMobileSidebar}
            />
            <DocSidebar 
              isOpen={isMobileSidebarOpen}
              onClose={toggleMobileSidebar}
              isMobile={true}
            />
          </>
        )}
      </AnimatePresence>

      {/* Main Content Area */}
      <MainContent>
        <ContentWrapper>
          <Outlet />
        </ContentWrapper>
      </MainContent>
    </DocContainer>
  );
};

const DocContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  min-height: calc(100vh - 70px);
  background: ${({ theme }) => theme.background};
`;

const DesktopSidebar = styled.div`
  width: 280px;
  flex-shrink: 0;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MainContent = styled.main`
  flex: 1;
  padding: 40px 0;
  overflow-x: hidden;
`;

const ContentWrapper = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 40px;
  
  @media (max-width: 768px) {
    padding: 0 20px;
  }
`;

const MobileMenuButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${({ theme }) => theme.accent};
  color: #000;
  border: none;
  border-radius: 30px;
  padding: 12px 20px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  z-index: 100;
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
  }
  
  i {
    font-size: 18px;
  }
`;

const MobileOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 990;
  display: none;
  
  @media (max-width: 768px) {
    display: block;
  }
`;

export default DocumentationLayout; 