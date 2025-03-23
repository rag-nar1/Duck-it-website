import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

const Installation: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Installation</Title>
      <Subtitle>Get up and running with TCP DuckDB Server</Subtitle>
      
      <Section>
        <SectionTitle>Prerequisites</SectionTitle>
        <Paragraph>
          Before installing TCP DuckDB Server, make sure you have the following prerequisites installed:
        </Paragraph>
        
        <List>
          <ListItem>
            <ListItemIcon><i className="fab fa-golang"></i></ListItemIcon>
            <ListItemContent>
              <ListItemTitle>Go 1.16 or higher</ListItemTitle>
              <ListItemDescription>
                TCP DuckDB Server is written in Go. You can download Go from <ExternalLink href="https://golang.org/dl/" target="_blank" rel="noopener noreferrer">golang.org</ExternalLink>.
              </ListItemDescription>
            </ListItemContent>
          </ListItem>
          
          <ListItem>
            <ListItemIcon><i className="fas fa-database"></i></ListItemIcon>
            <ListItemContent>
              <ListItemTitle>DuckDB</ListItemTitle>
              <ListItemDescription>
                Make sure you have DuckDB installed. You can download it from <ExternalLink href="https://duckdb.org/docs/installation/" target="_blank" rel="noopener noreferrer">duckdb.org</ExternalLink>.
              </ListItemDescription>
            </ListItemContent>
          </ListItem>
          
          <ListItem>
            <ListItemIcon><i className="fas fa-code-branch"></i></ListItemIcon>
            <ListItemContent>
              <ListItemTitle>Git</ListItemTitle>
              <ListItemDescription>
                Git is required to clone the repository. Download it from <ExternalLink href="https://git-scm.com/downloads" target="_blank" rel="noopener noreferrer">git-scm.com</ExternalLink>.
              </ListItemDescription>
            </ListItemContent>
          </ListItem>
        </List>
      </Section>
      
      <Section>
        <SectionTitle>Installation Steps</SectionTitle>
        
        <Step>
          <StepNumber>1</StepNumber>
          <StepContent>
            <StepTitle>Clone the Repository</StepTitle>
            <StepDescription>
              Clone the TCP DuckDB Server repository from GitHub:
            </StepDescription>
            <Code 
              language="bash"
              code={`git clone https://github.com/yourusername/tcp-duckdb-server.git
cd tcp-duckdb-server`}
            />
          </StepContent>
        </Step>
        
        <Step>
          <StepNumber>2</StepNumber>
          <StepContent>
            <StepTitle>Build the Server</StepTitle>
            <StepDescription>
              Compile the TCP DuckDB Server using Go:
            </StepDescription>
            <Code 
              language="bash"
              code={`go build -o tcp-duckdb-server`}
            />
          </StepContent>
        </Step>
        
        <Step>
          <StepNumber>3</StepNumber>
          <StepContent>
            <StepTitle>Configure the Server</StepTitle>
            <StepDescription>
              Create a configuration file or use command-line flags to configure the server:
            </StepDescription>
            <Code 
              language="bash"
              code={`# Create a config directory
mkdir -p ~/.tcp-duckdb-server

# Create a basic config file (optional)
cat > ~/.tcp-duckdb-server/config.json << EOF
{
  "port": 9876,
  "data_directory": "/path/to/data",
  "log_level": "info"
}
EOF`}
            />
          </StepContent>
        </Step>
        
        <Step>
          <StepNumber>4</StepNumber>
          <StepContent>
            <StepTitle>Run the Server</StepTitle>
            <StepDescription>
              Start the TCP DuckDB Server:
            </StepDescription>
            <Code 
              language="bash"
              code={`# Using the default configuration
./tcp-duckdb-server

# Or with command-line flags
./tcp-duckdb-server --port 9876 --data-dir /path/to/data --log-level info`}
            />
            <SuccessMessage>
              <i className="fas fa-check-circle"></i>
              If everything is set up correctly, you should see the server starting up and listening on the specified port.
            </SuccessMessage>
          </StepContent>
        </Step>
      </Section>
      
      <Section>
        <SectionTitle>Docker Installation</SectionTitle>
        <Paragraph>
          Alternatively, you can run TCP DuckDB Server using Docker:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Pull the Docker image
docker pull yourusername/tcp-duckdb-server:latest

# Run the container
docker run -d \\
  -p 9876:9876 \\
  -v /path/to/data:/data \\
  --name tcp-duckdb-server \\
  yourusername/tcp-duckdb-server:latest`}
          caption="Docker installation commands"
        />
      </Section>
      
      <Section>
        <SectionTitle>Verifying the Installation</SectionTitle>
        <Paragraph>
          To verify that the TCP DuckDB Server is running correctly, you can use a simple telnet connection:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`telnet localhost 9876`}
        />
        
        <Paragraph>
          If the connection is successful, you should be able to authenticate with the server:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`login duck duck  # Default username and password`}
        />
        
        <Note>
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>Security Note:</strong> Make sure to change the default username and password after installation. 
            The default credentials are intended for initial setup only and should not be used in production.
          </div>
        </Note>
      </Section>
      
      <NavigationButtons>
        <NavButton to="/docs">
          <i className="fas fa-arrow-left"></i>
          Back to Overview
        </NavButton>
        <NavButton to="/docs/quick-start">
          Next: Quick Start
          <i className="fas fa-arrow-right"></i>
        </NavButton>
      </NavigationButtons>
    </Container>
  );
};

const Container = styled(motion.div)`
  width: 100%;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 10px;
`;

const Subtitle = styled.p`
  font-size: 18px;
  color: ${({ theme }) => theme.lineNumber};
  margin: 0 0 40px;
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

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px 0;
`;

const ListItem = styled.div`
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
`;

const ListItemIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: rgba(255, 193, 7, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  i {
    font-size: 20px;
    color: ${({ theme }) => theme.accent};
  }
`;

const ListItemContent = styled.div`
  flex: 1;
`;

const ListItemTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`;

const ListItemDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.lineNumber};
  margin: 0;
`;

const ExternalLink = styled.a`
  color: ${({ theme }) => theme.accent};
  text-decoration: none;
  
  &:hover {
    text-decoration: underline;
  }
`;

const Step = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
`;

const StepNumber = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${({ theme }) => theme.accent};
  color: #000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 18px;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`;

const StepDescription = styled.p`
  font-size: 16px;
  margin: 0 0 15px;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 15px;
  padding: 10px 15px;
  background-color: rgba(40, 167, 69, 0.1);
  border-radius: 4px;
  
  i {
    color: #28a745;
    font-size: 18px;
  }
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
`;

const NavigationButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const NavButton = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  background-color: ${({ theme }) => theme.secondary};
  padding: 12px 20px;
  border-radius: 8px;
  text-decoration: none;
  color: ${({ theme }) => theme.text};
  transition: background-color 0.2s ease;
  
  i {
    color: ${({ theme }) => theme.accent};
  }
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export default Installation; 