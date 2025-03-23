import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

const Overview: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <PageHeader>
        <Title>DuckDB Documentation</Title>
        <Subtitle>
          Everything you need to know about working with the TCP DuckDB Server
        </Subtitle>
      </PageHeader>
      
      <Section>
        <SectionTitle>What is TCP DuckDB Server?</SectionTitle>
        <Paragraph>
          TCP DuckDB Server is a robust TCP server implementation that enables management and
          interaction with DuckDB databases over a network. It provides functionality for user 
          authentication, database operations, and access control.
        </Paragraph>
        <Paragraph>
          Built for performance and security, TCP DuckDB Server allows multiple clients to connect
          to and work with DuckDB databases remotely, making it ideal for data analytics
          applications where centralized database management is required.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Key Features</SectionTitle>
        <FeatureGrid>
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-shield-alt"></i>
            </FeatureIcon>
            <FeatureTitle>User Authentication</FeatureTitle>
            <FeatureDescription>
              Secure login system with username/password authentication
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-database"></i>
            </FeatureIcon>
            <FeatureTitle>Database Management</FeatureTitle>
            <FeatureDescription>
              Create and manage multiple databases with granular permissions
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-table"></i>
            </FeatureIcon>
            <FeatureTitle>Access Control</FeatureTitle>
            <FeatureDescription>
              Table-level permissions for fine-grained control over data access
            </FeatureDescription>
          </FeatureCard>
          
          <FeatureCard>
            <FeatureIcon>
              <i className="fas fa-exchange-alt"></i>
            </FeatureIcon>
            <FeatureTitle>PostgreSQL Integration</FeatureTitle>
            <FeatureDescription>
              Seamlessly link and migrate data from PostgreSQL databases
            </FeatureDescription>
          </FeatureCard>
        </FeatureGrid>
      </Section>
      
      <Section>
        <SectionTitle>Quick Example</SectionTitle>
        <Paragraph>
          Here's a simple example of how to interact with the TCP DuckDB Server:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Login as a super user
login duck superpassword

# Create a new database
create database analytics

# Connect to the database
connect analytics

# Execute a SQL query
SELECT * FROM users WHERE active = true;`}
          caption="Basic interaction with TCP DuckDB Server"
        />
        
        <Note>
          <i className="fas fa-info-circle"></i>
          <div>
            <strong>Note:</strong> The super user is <code>duck</code> with the default password <code>duck</code>.
            It's recommended to change this password immediately after setting up your server.
          </div>
        </Note>
      </Section>
      
      <NextSteps>
        <NextTitle>Next Steps</NextTitle>
        <NextLinks>
          <NextLink to="/docs/installation">
            <i className="fas fa-download"></i>
            Installation Guide
          </NextLink>
          <NextLink to="/docs/quick-start">
            <i className="fas fa-play"></i>
            Quick Start Tutorial
          </NextLink>
        </NextLinks>
      </NextSteps>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
`;

const PageHeader = styled.header`
  margin-bottom: 40px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.lineNumber};
  margin: 0;
`;

const Section = styled.section`
  margin-bottom: 40px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const FeatureGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FeatureCard = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  padding: 25px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  width: 50px;
  height: 50px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  
  i {
    font-size: 20px;
    color: ${({ theme }) => theme.accent};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 10px;
`;

const FeatureDescription = styled.p`
  font-size: 14px;
  margin: 0;
  color: ${({ theme }) => theme.lineNumber};
`;

const Note = styled.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${({ theme }) => theme.accent};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: ${({ theme }) => theme.accent};
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`;

const NextSteps = styled.div`
  margin-top: 60px;
  background-color: ${({ theme }) => theme.secondary};
  padding: 25px;
  border-radius: 8px;
`;

const NextTitle = styled.h3`
  font-size: 18px;
  font-weight: 700;
  margin: 0 0 20px;
`;

const NextLinks = styled.div`
  display: flex;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NextLink = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: rgba(255, 255, 255, 0.05);
  padding: 15px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  flex: 1;
  transition: background-color 0.2s ease;
  
  i {
    color: ${({ theme }) => theme.accent};
    font-size: 18px;
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Overview; 