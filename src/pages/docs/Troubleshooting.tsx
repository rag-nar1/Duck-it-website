import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

const Troubleshooting: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Troubleshooting</Title>
      <Subtitle>Solutions for common issues with TCP DuckDB Server</Subtitle>
      
      <Section>
        <SectionTitle>Connection Issues</SectionTitle>
        <Paragraph>
          If you're having trouble connecting to the TCP DuckDB Server, try these solutions:
        </Paragraph>
        
        <TroubleshootList>
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Connection Refused</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>Error message: <CodeInline>Connection refused</CodeInline> when trying to connect to the server.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Verify the server is running with <CodeInline>ps aux | grep duckdb</CodeInline></li>
                <li>Check if the server is listening on the expected port with <CodeInline>netstat -tuln | grep 9876</CodeInline></li>
                <li>Ensure no firewall is blocking the connection</li>
                <li>Confirm you're using the correct hostname and port</li>
              </ol>
            </TroubleSolution>
          </TroubleshootItem>
          
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Connection Timeout</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>The connection attempt times out without any response from the server.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Check network connectivity between client and server</li>
                <li>Verify the server is not overloaded (high CPU/memory usage)</li>
                <li>Ensure the server's network interface is properly configured</li>
                <li>Try connecting from the same machine to eliminate network issues</li>
              </ol>
            </TroubleSolution>
          </TroubleshootItem>
        </TroubleshootList>
      </Section>
      
      <Section>
        <SectionTitle>Authentication Problems</SectionTitle>
        
        <TroubleshootList>
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Invalid Credentials</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>Error message: <CodeInline>Invalid username or password</CodeInline> when trying to log in.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Double-check username and password for typos</li>
                <li>Ensure the user account exists (super user can run <CodeInline>list users</CodeInline>)</li>
                <li>If you've forgotten the super user password, you may need to reset it by restarting the server with appropriate flags</li>
              </ol>
              
              <Code 
                language="bash"
                code={`# Example of correct login
login duck superpassword`}
                caption="Correct login syntax"
              />
            </TroubleSolution>
          </TroubleshootItem>
          
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Session Expired</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>You were previously authenticated, but now commands fail with authorization errors.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Sessions may expire after a period of inactivity</li>
                <li>Simply log in again with your credentials</li>
                <li>If the issue persists, the server might be restarting periodically</li>
              </ol>
            </TroubleSolution>
          </TroubleshootItem>
        </TroubleshootList>
      </Section>
      
      <Section>
        <SectionTitle>Permission Errors</SectionTitle>
        
        <TroubleshootList>
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Access Denied to Database</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>Error message: <CodeInline>Access denied: no permission to access database [database_name]</CodeInline></p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Ensure you have been granted access to the database</li>
                <li>Have a super user check granted permissions</li>
                <li>Super user can grant access with:</li>
              </ol>
              
              <Code 
                language="bash"
                code={`# Grant read access to database
grant database mydb username read

# Grant write access to database
grant database mydb username write`}
                caption="Granting database access"
              />
            </TroubleSolution>
          </TroubleshootItem>
          
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Table Operation Not Permitted</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>Error message: <CodeInline>Operation not permitted: insufficient privileges for table [table_name]</CodeInline></p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>You need specific table-level permissions for the operation</li>
                <li>For SELECT operations, you need <CodeInline>select</CodeInline> permission</li>
                <li>For INSERT operations, you need <CodeInline>insert</CodeInline> permission</li>
                <li>For UPDATE operations, you need <CodeInline>update</CodeInline> permission</li>
                <li>For DELETE operations, you need <CodeInline>delete</CodeInline> permission</li>
                <li>Super user can grant table permissions with:</li>
              </ol>
              
              <Code 
                language="bash"
                code={`# Grant select and insert permissions on a table
grant table mydb users username select insert`}
                caption="Granting table permissions"
              />
            </TroubleSolution>
          </TroubleshootItem>
        </TroubleshootList>
      </Section>
      
      <Section>
        <SectionTitle>PostgreSQL Integration Issues</SectionTitle>
        
        <TroubleshootList>
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Link Command Fails</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>Error when attempting to link a PostgreSQL database.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Verify the PostgreSQL connection string is correct</li>
                <li>Ensure the PostgreSQL server is running and accessible</li>
                <li>Check that the PostgreSQL user has sufficient permissions</li>
                <li>Verify PostgreSQL version compatibility (requires version 10+)</li>
                <li>Check proper syntax:</li>
              </ol>
              
              <Code 
                language="bash"
                code={`# Correct link command syntax
link mydb "postgresql://user:password@hostname:5432/database_name"`}
                caption="Linking PostgreSQL database"
              />
            </TroubleSolution>
          </TroubleshootItem>
          
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Migration Issues</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>The <CodeInline>migrate</CodeInline> command fails or doesn't sync changes.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Ensure the PostgreSQL audit table is properly configured</li>
                <li>Check that the PostgreSQL connection is still active</li>
                <li>Verify that changes have actually been made in PostgreSQL</li>
                <li>For large datasets, migration might take time - be patient</li>
                <li>If the audit trail is broken, you may need to re-link the database</li>
              </ol>
            </TroubleSolution>
          </TroubleshootItem>
        </TroubleshootList>
      </Section>
      
      <Section>
        <SectionTitle>SQL Execution Errors</SectionTitle>
        
        <TroubleshootList>
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Syntax Errors</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>SQL query fails with syntax errors.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Double-check the SQL syntax</li>
                <li>Ensure SQL statements end with a semicolon (;)</li>
                <li>Verify table and column names are correct</li>
                <li>Check that the SQL syntax is compatible with DuckDB</li>
              </ol>
              
              <Code 
                language="sql"
                code={`-- Correct SQL syntax examples
SELECT * FROM users WHERE active = true;

INSERT INTO users (username, email) VALUES ('john', 'john@example.com');

UPDATE users SET last_login = CURRENT_TIMESTAMP WHERE username = 'john';`}
                caption="Correct SQL syntax examples"
              />
            </TroubleSolution>
          </TroubleshootItem>
          
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Transaction Errors</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>Problems with starting, committing, or rolling back transactions.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Ensure transactions are properly started with <CodeInline>start transaction</CodeInline></li>
                <li>All transactions must be ended with either <CodeInline>commit</CodeInline> or <CodeInline>rollback</CodeInline></li>
                <li>You cannot have nested transactions</li>
                <li>Check for proper transaction syntax:</li>
              </ol>
              
              <Code 
                language="sql"
                code={`-- Correct transaction syntax
start transaction
INSERT INTO accounts (id, balance) VALUES (101, 1000);
UPDATE accounts SET balance = balance - 100 WHERE id = 101;
INSERT INTO transactions (account_id, amount) VALUES (101, -100);
commit

-- If you need to cancel the changes:
-- rollback`}
                caption="Transaction syntax example"
              />
            </TroubleSolution>
          </TroubleshootItem>
        </TroubleshootList>
      </Section>
      
      <Section>
        <SectionTitle>Server Administration</SectionTitle>
        
        <TroubleshootList>
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Server Crashes</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>The TCP DuckDB Server crashes unexpectedly.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Check server logs for error messages</li>
                <li>Verify there's enough disk space for database files</li>
                <li>Ensure enough memory is available for DuckDB operations</li>
                <li>Monitor for corrupt database files</li>
                <li>For production use, consider implementing monitoring and auto-restart</li>
              </ol>
            </TroubleSolution>
          </TroubleshootItem>
          
          <TroubleshootItem>
            <TroubleProblem>
              <i className="fas fa-exclamation-circle"></i>
              <h3>Performance Degradation</h3>
            </TroubleProblem>
            <TroubleDescription>
              <p>The server becomes slow or unresponsive over time.</p>
            </TroubleDescription>
            <TroubleSolution>
              <h4>Solutions:</h4>
              <ol>
                <li>Monitor system resources (CPU, memory, disk I/O)</li>
                <li>Check for very large result sets that might exhaust memory</li>
                <li>Look for inefficient queries that could be optimized</li>
                <li>Consider implementing connection pooling for high-concurrency scenarios</li>
                <li>For very large databases, ensure server hardware meets requirements</li>
              </ol>
              
              <Tip>
                <i className="fas fa-lightbulb"></i>
                <div>
                  <strong>Performance Tip:</strong> DuckDB is optimized for analytical workloads. For transactional workloads with many small updates, consider using PostgreSQL directly and only using DuckDB for analytics.
                </div>
              </Tip>
            </TroubleSolution>
          </TroubleshootItem>
        </TroubleshootList>
      </Section>
      
      <NavigationButtons>
        <NavButton to="/docs/postgres-integration">
          <i className="fas fa-arrow-left"></i>
          Back to PostgreSQL Integration
        </NavButton>
        <NavButton to="/docs/client-libraries">
          Next: Client Libraries
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
  margin-bottom: 60px;
`;

const SectionTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
  margin: 0 0 30px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CodeInline = styled.code`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 2px 5px;
  border-radius: 3px;
  font-family: 'Fira Code', monospace;
  font-size: 14px;
`;

const TroubleshootList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const TroubleshootItem = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 25px;
`;

const TroubleProblem = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 15px;
  
  i {
    color: #dc3545;
    font-size: 24px;
  }
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0;
  }
`;

const TroubleDescription = styled.div`
  margin-bottom: 20px;
  padding-bottom: 15px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  
  p {
    margin: 0;
    font-size: 16px;
    line-height: 1.6;
  }
`;

const TroubleSolution = styled.div`
  h4 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 15px;
    color: ${({ theme }) => theme.accent};
  }
  
  ol, ul {
    margin: 0 0 20px;
    padding-left: 25px;
    
    li {
      margin-bottom: 10px;
      font-size: 15px;
      line-height: 1.5;
    }
  }
`;

const Tip = styled.div`
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 4px solid #28a745;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: #28a745;
  }
  
  strong {
    display: block;
    margin-bottom: 5px;
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

export default Troubleshooting; 