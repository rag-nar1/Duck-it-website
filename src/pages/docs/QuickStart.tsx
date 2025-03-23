import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

const QuickStart: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Quick Start</Title>
      <Subtitle>Learn how to use TCP DuckDB Server in minutes</Subtitle>
      
      <Section>
        <SectionTitle>Starting the Server</SectionTitle>
        <Paragraph>
          After installing TCP DuckDB Server, you can start it with default settings:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`./tcp-duckdb-server`}
        />
        
        <Paragraph>
          The server will start and listen on the default port 9876. You should see output similar to:
        </Paragraph>
        
        <Terminal>
          <TerminalLine>2023-11-15 10:30:45 INFO Starting TCP DuckDB Server v1.0.0</TerminalLine>
          <TerminalLine>2023-11-15 10:30:45 INFO Loading configuration...</TerminalLine>
          <TerminalLine>2023-11-15 10:30:45 INFO Database directory: /home/user/.tcp-duckdb-server/data</TerminalLine>
          <TerminalLine>2023-11-15 10:30:45 INFO Server listening on 0.0.0.0:9876</TerminalLine>
        </Terminal>
      </Section>
      
      <Section>
        <SectionTitle>Connecting to the Server</SectionTitle>
        <Paragraph>
          You can connect to the TCP DuckDB Server using telnet or netcat:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`telnet localhost 9876`}
        />
        
        <Paragraph>
          Once connected, you'll see a welcome message and prompt:
        </Paragraph>
        
        <Terminal>
          <TerminalLine>Welcome to TCP DuckDB Server v1.0.0</TerminalLine>
          <TerminalLine>Please authenticate using the login command</TerminalLine>
        </Terminal>
      </Section>
      
      <Section>
        <SectionTitle>Authentication</SectionTitle>
        <Paragraph>
          Authenticate with the server using the default superuser account:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`login duck duck`}
        />
        
        <SuccessMessage>
          <i className="fas fa-check-circle"></i>
          Authentication successful! You now have super user privileges.
        </SuccessMessage>
        
        <Tip>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>Tip:</strong> For production use, create a new user with appropriate 
            permissions and disable or change the default superuser password.
          </div>
        </Tip>
      </Section>
      
      <Section>
        <SectionTitle>Basic Commands</SectionTitle>
        <Paragraph>
          Here are some basic commands to get you started:
        </Paragraph>
        
        <CommandGroup>
          <CommandCard>
            <CommandTitle>Database Management</CommandTitle>
            <CommandTable>
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>create database &lt;name&gt;</code></td>
                  <td>Create a new database</td>
                </tr>
                <tr>
                  <td><code>list databases</code></td>
                  <td>List all available databases</td>
                </tr>
                <tr>
                  <td><code>connect &lt;database&gt;</code></td>
                  <td>Connect to a specific database</td>
                </tr>
                <tr>
                  <td><code>drop database &lt;name&gt;</code></td>
                  <td>Delete a database</td>
                </tr>
              </tbody>
            </CommandTable>
          </CommandCard>
          
          <CommandCard>
            <CommandTitle>User Management</CommandTitle>
            <CommandTable>
              <thead>
                <tr>
                  <th>Command</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><code>create user &lt;name&gt; &lt;password&gt;</code></td>
                  <td>Create a new user</td>
                </tr>
                <tr>
                  <td><code>list users</code></td>
                  <td>List all users</td>
                </tr>
                <tr>
                  <td><code>grant &lt;user&gt; &lt;database&gt; &lt;permission&gt;</code></td>
                  <td>Grant permissions to a user</td>
                </tr>
                <tr>
                  <td><code>revoke &lt;user&gt; &lt;database&gt; &lt;permission&gt;</code></td>
                  <td>Revoke permissions from a user</td>
                </tr>
              </tbody>
            </CommandTable>
          </CommandCard>
        </CommandGroup>
      </Section>
      
      <Section>
        <SectionTitle>Executing SQL Queries</SectionTitle>
        <Paragraph>
          After connecting to a database, you can execute SQL queries directly:
        </Paragraph>
        
        <Step>
          <StepNumber>1</StepNumber>
          <StepContent>
            <StepTitle>Create a new database and connect to it</StepTitle>
            <Code 
              language="bash"
              code={`create database demo
connect demo`}
            />
          </StepContent>
        </Step>
        
        <Step>
          <StepNumber>2</StepNumber>
          <StepContent>
            <StepTitle>Create a table and insert data</StepTitle>
            <Code 
              language="sql"
              code={`CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (id, name, email) VALUES 
(1, 'John Doe', 'john@example.com'),
(2, 'Jane Smith', 'jane@example.com');`}
            />
          </StepContent>
        </Step>
        
        <Step>
          <StepNumber>3</StepNumber>
          <StepContent>
            <StepTitle>Query the data</StepTitle>
            <Code 
              language="sql"
              code={`SELECT * FROM users;`}
            />
            <ResultPreview>
              <ResultRow>
                <ResultColumn>id</ResultColumn>
                <ResultColumn>name</ResultColumn>
                <ResultColumn>email</ResultColumn>
                <ResultColumn>created_at</ResultColumn>
              </ResultRow>
              <ResultRow>
                <ResultColumn>1</ResultColumn>
                <ResultColumn>John Doe</ResultColumn>
                <ResultColumn>john@example.com</ResultColumn>
                <ResultColumn>2023-11-15 10:42:15</ResultColumn>
              </ResultRow>
              <ResultRow>
                <ResultColumn>2</ResultColumn>
                <ResultColumn>Jane Smith</ResultColumn>
                <ResultColumn>jane@example.com</ResultColumn>
                <ResultColumn>2023-11-15 10:42:15</ResultColumn>
              </ResultRow>
            </ResultPreview>
          </StepContent>
        </Step>
      </Section>
      
      <Section>
        <SectionTitle>Client Applications</SectionTitle>
        <Paragraph>
          You can interact with the TCP DuckDB Server from your own applications. 
          Here's a simple example using Go:
        </Paragraph>
        
        <Code 
          language="go"
          code={`package main

import (
	"bufio"
	"fmt"
	"net"
	"strings"
)

func main() {
	// Connect to the TCP DuckDB server
	conn, err := net.Dial("tcp", "localhost:9876")
	if err != nil {
		fmt.Println("Error connecting:", err)
		return
	}
	defer conn.Close()

	// Create a reader for server responses
	reader := bufio.NewReader(conn)

	// Read the welcome message
	welcome, _ := reader.ReadString('\\n')
	fmt.Print(welcome)

	// Authenticate
	fmt.Fprintf(conn, "login duck duck\\n")
	authResp, _ := reader.ReadString('\\n')
	fmt.Print(authResp)

	// Create a database
	fmt.Fprintf(conn, "create database goexample\\n")
	createResp, _ := reader.ReadString('\\n')
	fmt.Print(createResp)

	// Connect to the database
	fmt.Fprintf(conn, "connect goexample\\n")
	connectResp, _ := reader.ReadString('\\n')
	fmt.Print(connectResp)

	// Execute a query
	query := "CREATE TABLE test (id INTEGER, name VARCHAR(100));"
	fmt.Fprintf(conn, "%s\\n", query)
	queryResp, _ := reader.ReadString('\\n')
	fmt.Print(queryResp)

	// Insert data
	insert := "INSERT INTO test VALUES (1, 'Test Data');"
	fmt.Fprintf(conn, "%s\\n", insert)
	insertResp, _ := reader.ReadString('\\n')
	fmt.Print(insertResp)

	// Query data
	fmt.Fprintf(conn, "SELECT * FROM test;\\n")
	
	// Read the results until we get the prompt again
	var result strings.Builder
	for {
		line, _ := reader.ReadString('\\n')
		result.WriteString(line)
		if strings.Contains(line, "rows in set") {
			break
		}
	}
	fmt.Print(result.String())
}
`}
          caption="Example Go client to interact with TCP DuckDB Server"
        />
        
        <Note>
          <i className="fas fa-info-circle"></i>
          <div>
            <strong>Note:</strong> This is a simple example. In production, you'll want to 
            implement error handling, secure password management, and connection pooling.
          </div>
        </Note>
      </Section>
      
      <Section>
        <SectionTitle>Next Steps</SectionTitle>
        <Paragraph>
          Now that you've gotten started with TCP DuckDB Server, you can:
        </Paragraph>
        
        <NextSteps>
          <NextStep to="/docs/configuration">
            <NextStepIcon><i className="fas fa-cogs"></i></NextStepIcon>
            <NextStepContent>
              <NextStepTitle>Configure Your Server</NextStepTitle>
              <NextStepDescription>
                Learn how to configure TCP DuckDB Server for production use with
                custom settings for performance and security.
              </NextStepDescription>
            </NextStepContent>
          </NextStep>
          
          <NextStep to="/docs/protocol">
            <NextStepIcon><i className="fas fa-exchange-alt"></i></NextStepIcon>
            <NextStepContent>
              <NextStepTitle>Understand the Protocol</NextStepTitle>
              <NextStepDescription>
                Dive deeper into the TCP protocol used by the server to
                build more sophisticated client applications.
              </NextStepDescription>
            </NextStepContent>
          </NextStep>
          
          <NextStep to="/docs/examples">
            <NextStepIcon><i className="fas fa-code"></i></NextStepIcon>
            <NextStepContent>
              <NextStepTitle>Explore Examples</NextStepTitle>
              <NextStepDescription>
                Browse through real-world examples and use cases
                for TCP DuckDB Server.
              </NextStepDescription>
            </NextStepContent>
          </NextStep>
        </NextSteps>
      </Section>
      
      <NavigationButtons>
        <NavButton to="/docs/installation">
          <i className="fas fa-arrow-left"></i>
          Back to Installation
        </NavButton>
        <NavButton to="/docs/configuration">
          Next: Configuration
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

const Terminal = styled.div`
  background-color: #1a1a1a;
  border-radius: 6px;
  padding: 15px;
  margin: 20px 0;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`;

const TerminalLine = styled.div`
  padding: 3px 0;
  color: #d9d9d9;
`;

const SuccessMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 20px 0;
  padding: 15px;
  background-color: rgba(40, 167, 69, 0.1);
  border-radius: 4px;
  
  i {
    color: #28a745;
    font-size: 18px;
  }
`;

const Tip = styled.div`
  background-color: rgba(23, 162, 184, 0.1);
  border-left: 4px solid #17a2b8;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #17a2b8;
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

const CommandGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CommandCard = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  overflow: hidden;
`;

const CommandTitle = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 12px 15px;
  font-weight: 600;
  font-size: 16px;
`;

const CommandTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  th {
    font-weight: 600;
    color: ${({ theme }) => theme.lineNumber};
    font-size: 14px;
  }
  
  td {
    font-size: 14px;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
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
  margin: 0 0 15px;
`;

const ResultPreview = styled.div`
  background-color: #1a1a1a;
  border-radius: 6px;
  margin: 20px 0;
  overflow: hidden;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`;

const ResultRow = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  &:first-child {
    background-color: rgba(255, 255, 255, 0.05);
    font-weight: 600;
  }
  
  &:last-child {
    border-bottom: none;
  }
`;

const ResultColumn = styled.div`
  padding: 10px 15px;
  flex: 1;
`;

const NextSteps = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const NextStep = styled.a`
  display: flex;
  gap: 15px;
  padding: 20px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: rgba(255, 255, 255, 0.05);
  }
`;

const NextStepIcon = styled.div`
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

const NextStepContent = styled.div`
  flex: 1;
`;

const NextStepTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
`;

const NextStepDescription = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.lineNumber};
  margin: 0;
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

export default QuickStart; 