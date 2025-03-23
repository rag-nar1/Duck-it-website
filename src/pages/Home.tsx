import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <Container>
      <HeroSection>
        <HeroContent>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <HeroTitle>TCP DuckDB Server</HeroTitle>
            <HeroSubtitle>
              A high-performance TCP server for managing and interacting with DuckDB databases over a network
            </HeroSubtitle>
            <HeroButtons>
              <PrimaryButton to="/docs">
                Get Started
                <i className="fas fa-arrow-right"></i>
              </PrimaryButton>
              <SecondaryButton href="https://github.com/yourusername/tcp-duckdb-server" target="_blank">
                <i className="fab fa-github"></i>
                View on GitHub
              </SecondaryButton>
            </HeroButtons>
          </motion.div>
        </HeroContent>
        <HeroImageContainer>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <HeroImage>
              <i className="fas fa-database"></i>
            </HeroImage>
          </motion.div>
        </HeroImageContainer>
      </HeroSection>

      <FeaturesSection>
        <SectionTitle>Key Features</SectionTitle>
        <FeaturesGrid>
          <Feature>
            <FeatureIcon>
              <i className="fas fa-shield-alt"></i>
            </FeatureIcon>
            <FeatureTitle>User Authentication</FeatureTitle>
            <FeatureDescription>
              Secure login system with username/password authentication to control access
              to your databases.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>
              <i className="fas fa-database"></i>
            </FeatureIcon>
            <FeatureTitle>Database Management</FeatureTitle>
            <FeatureDescription>
              Create and manage multiple databases with granular permissions for different
              users and use cases.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>
              <i className="fas fa-lock"></i>
            </FeatureIcon>
            <FeatureTitle>Access Control</FeatureTitle>
            <FeatureDescription>
              Table-level permissions system for fine-grained control over who can access
              and modify your data.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>
              <i className="fas fa-exchange-alt"></i>
            </FeatureIcon>
            <FeatureTitle>PostgreSQL Integration</FeatureTitle>
            <FeatureDescription>
              Link with PostgreSQL databases to easily migrate and sync data between
              different database systems.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>
              <i className="fas fa-code"></i>
            </FeatureIcon>
            <FeatureTitle>Simple Protocol</FeatureTitle>
            <FeatureDescription>
              Straightforward text-based protocol makes it easy to build client
              applications in any programming language.
            </FeatureDescription>
          </Feature>
          
          <Feature>
            <FeatureIcon>
              <i className="fas fa-bolt"></i>
            </FeatureIcon>
            <FeatureTitle>High Performance</FeatureTitle>
            <FeatureDescription>
              Built on DuckDB's in-process analytical database system for lightning-fast
              query execution on structured data.
            </FeatureDescription>
          </Feature>
        </FeaturesGrid>
      </FeaturesSection>
      
      <UseCasesSection>
        <SectionTitle>Use Cases</SectionTitle>
        <UseCasesContent>
          <UseCasesList>
            <UseCaseItem>
              <i className="fas fa-check-circle"></i>
              <span>Centralized data analytics for teams</span>
            </UseCaseItem>
            <UseCaseItem>
              <i className="fas fa-check-circle"></i>
              <span>Remote database access for distributed applications</span>
            </UseCaseItem>
            <UseCaseItem>
              <i className="fas fa-check-circle"></i>
              <span>Data warehousing with fine-grained access control</span>
            </UseCaseItem>
            <UseCaseItem>
              <i className="fas fa-check-circle"></i>
              <span>PostgreSQL to DuckDB migration and synchronization</span>
            </UseCaseItem>
            <UseCaseItem>
              <i className="fas fa-check-circle"></i>
              <span>Multi-tenant database solutions</span>
            </UseCaseItem>
          </UseCasesList>
          <CodePreview>
            <CodeHeader>
              <CodeDot style={{ backgroundColor: '#FF5F56' }} />
              <CodeDot style={{ backgroundColor: '#FFBD2E' }} />
              <CodeDot style={{ backgroundColor: '#27C93F' }} />
              <CodeTitle>Example Connection</CodeTitle>
            </CodeHeader>
            <CodeContent>
              <CodeLine><span className="comment"># Connect to the server</span></CodeLine>
              <CodeLine>telnet localhost 9876</CodeLine>
              <CodeLine><span className="comment"># Login as super user</span></CodeLine>
              <CodeLine>login duck superpassword</CodeLine>
              <CodeLine><span className="comment"># Create a new database</span></CodeLine>
              <CodeLine>create database analytics</CodeLine>
              <CodeLine><span className="comment"># Connect to the database</span></CodeLine>
              <CodeLine>connect analytics</CodeLine>
              <CodeLine><span className="comment"># Run a SQL query</span></CodeLine>
              <CodeLine>SELECT * FROM users WHERE active = true;</CodeLine>
            </CodeContent>
          </CodePreview>
        </UseCasesContent>
      </UseCasesSection>
      
      <CTASection>
        <CTAContent>
          <CTATitle>Ready to Get Started?</CTATitle>
          <CTADescription>
            Explore our documentation to learn how to install, configure, and use the TCP DuckDB Server.
          </CTADescription>
          <CTAButtons>
            <PrimaryButton to="/docs/installation">
              Installation Guide
              <i className="fas fa-download"></i>
            </PrimaryButton>
            <PrimaryButton to="/docs/quick-start">
              Quick Start
              <i className="fas fa-play"></i>
            </PrimaryButton>
          </CTAButtons>
        </CTAContent>
      </CTASection>
      
      <Footer>
        <FooterContent>
          <FooterLeft>
            <FooterLogo>
              <i className="fas fa-database"></i>
              <span>TCP DuckDB Server</span>
            </FooterLogo>
            <FooterTagline>
              High-performance TCP server for DuckDB
            </FooterTagline>
          </FooterLeft>
          
          <FooterLinks>
            <FooterLinkGroup>
              <FooterLinkTitle>Documentation</FooterLinkTitle>
              <FooterLink to="/docs">Overview</FooterLink>
              <FooterLink to="/docs/installation">Installation</FooterLink>
              <FooterLink to="/docs/quick-start">Quick Start</FooterLink>
              <FooterLink to="/docs/commands">Commands</FooterLink>
            </FooterLinkGroup>
            
            <FooterLinkGroup>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterExternalLink href="https://duckdb.org" target="_blank">DuckDB Official</FooterExternalLink>
              <FooterExternalLink href="https://github.com/yourusername/tcp-duckdb-server" target="_blank">GitHub</FooterExternalLink>
              <FooterExternalLink href="https://github.com/yourusername/tcp-duckdb-server/issues" target="_blank">Report Issues</FooterExternalLink>
            </FooterLinkGroup>
          </FooterLinks>
        </FooterContent>
        
        <FooterCopyright>
          &copy; {new Date().getFullYear()} TCP DuckDB Server. All rights reserved.
        </FooterCopyright>
      </Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const HeroSection = styled.section`
  display: flex;
  min-height: calc(100vh - 70px);
  padding: 60px 0;
  
  @media (max-width: 992px) {
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }
`;

const HeroContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
  
  @media (max-width: 992px) {
    padding: 0;
    margin-bottom: 40px;
  }
`;

const HeroTitle = styled.h1`
  font-size: 56px;
  font-weight: 800;
  margin: 0 0 20px;
  background: linear-gradient(to right, ${({ theme }) => theme.accent}, #c0f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 36px;
  }
`;

const HeroSubtitle = styled.p`
  font-size: 22px;
  line-height: 1.6;
  color: ${({ theme }) => theme.text};
  margin: 0 0 30px;
  max-width: 600px;
  
  @media (max-width: 992px) {
    margin: 0 auto 30px;
  }
  
  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

const HeroButtons = styled.div`
  display: flex;
  gap: 15px;
  
  @media (max-width: 992px) {
    justify-content: center;
  }
  
  @media (max-width: 576px) {
    flex-direction: column;
  }
`;

const PrimaryButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: ${({ theme }) => theme.accent};
  color: #000;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    background-color: #ffcc29;
  }
`;

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.text};
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  text-decoration: none;
  transition: background-color 0.2s ease;
  
  i {
    font-size: 16px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

const HeroImageContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const HeroImage = styled.div`
  width: 400px;
  height: 400px;
  background: radial-gradient(circle, rgba(255, 193, 7, 0.15) 0%, rgba(255, 193, 7, 0.05) 70%, rgba(255, 193, 7, 0) 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 180px;
    color: ${({ theme }) => theme.accent};
    opacity: 0.8;
  }
  
  @media (max-width: 1200px) {
    width: 300px;
    height: 300px;
    
    i {
      font-size: 120px;
    }
  }
  
  @media (max-width: 992px) {
    width: 250px;
    height: 250px;
    margin: 0 auto;
    
    i {
      font-size: 100px;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 50px;
  text-align: center;
  
  @media (max-width: 768px) {
    font-size: 28px;
    margin: 0 0 30px;
  }
`;

const FeaturesSection = styled.section`
  padding: 100px 40px;
  background-color: ${({ theme }) => theme.secondary};
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`;

const Feature = styled.div`
  background-color: ${({ theme }) => theme.background};
  border-radius: 8px;
  padding: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const FeatureIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  
  i {
    font-size: 24px;
    color: ${({ theme }) => theme.accent};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0 0 15px;
`;

const FeatureDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: ${({ theme }) => theme.lineNumber};
  margin: 0;
`;

const UseCasesSection = styled.section`
  padding: 100px 40px;
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const UseCasesContent = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: 992px) {
    flex-direction: column;
    gap: 40px;
  }
`;

const UseCasesList = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-right: 40px;
  
  @media (max-width: 992px) {
    padding-right: 0;
  }
`;

const UseCaseItem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
  font-size: 18px;
  
  i {
    color: ${({ theme }) => theme.accent};
    font-size: 20px;
  }
  
  &:last-child {
    margin-bottom: 0;
  }
`;

const CodePreview = styled.div`
  flex: 1;
  background-color: #1a1a1a;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
`;

const CodeHeader = styled.div`
  background-color: #2a2a2a;
  padding: 12px 15px;
  display: flex;
  align-items: center;
`;

const CodeDot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  margin-right: 6px;
`;

const CodeTitle = styled.div`
  margin-left: 10px;
  font-size: 14px;
  color: #aaa;
`;

const CodeContent = styled.div`
  padding: 20px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`;

const CodeLine = styled.div`
  padding: 3px 0;
  color: #d9d9d9;
  
  .comment {
    color: #6a9955;
  }
`;

const CTASection = styled.section`
  padding: 80px 40px;
  background-color: ${({ theme }) => theme.secondary};
  
  @media (max-width: 768px) {
    padding: 60px 20px;
  }
`;

const CTAContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const CTATitle = styled.h2`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 20px;
  
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const CTADescription = styled.p`
  font-size: 18px;
  line-height: 1.6;
  margin: 0 0 30px;
  
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const CTAButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Footer = styled.footer`
  padding: 60px 40px 30px;
  background-color: ${({ theme }) => theme.background};
  
  @media (max-width: 768px) {
    padding: 40px 20px 20px;
  }
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FooterLeft = styled.div`
  max-width: 300px;
`;

const FooterLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  
  i {
    color: ${({ theme }) => theme.accent};
    font-size: 24px;
  }
  
  span {
    font-size: 20px;
    font-weight: 700;
  }
`;

const FooterTagline = styled.p`
  color: ${({ theme }) => theme.lineNumber};
  font-size: 16px;
  line-height: 1.6;
  margin: 0;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 80px;
  
  @media (max-width: 576px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const FooterLinkGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const FooterLinkTitle = styled.h4`
  font-size: 16px;
  font-weight: 700;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const FooterLink = styled(Link)`
  color: ${({ theme }) => theme.lineNumber};
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const FooterExternalLink = styled.a`
  color: ${({ theme }) => theme.lineNumber};
  text-decoration: none;
  margin-bottom: 10px;
  transition: color 0.2s ease;
  
  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

const FooterCopyright = styled.div`
  text-align: center;
  padding-top: 20px;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: ${({ theme }) => theme.lineNumber};
  font-size: 14px;
`;

export default Home; 