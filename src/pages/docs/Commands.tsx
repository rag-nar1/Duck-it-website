import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

interface CommandCardProps {
  isHighlighted?: boolean;
}

const Commands: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Commands Reference</Title>
      <Subtitle>Complete list of commands available in TCP DuckDB Server</Subtitle>
      
      <Section>
        <SectionTitle>Authentication</SectionTitle>
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>login</CommandName>
            <CommandBadge>Authentication</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Authenticate to access the server. All users must authenticate 
            before they can perform any operations.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`login [username] [password]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>Your username</td>
              </tr>
              <tr>
                <td>password</td>
                <td>Your password</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`login duck superpassword`}
              caption="Example"
            />
          </CommandExample>
          
          <Note>
            <i className="fas fa-exclamation-triangle"></i>
            <div>
              <strong>Important:</strong> The super user is <code>duck</code> with the default password <code>duck</code>.
              It is crucial to change this password immediately after setting up your project for security purposes.
            </div>
          </Note>
        </CommandCard>
      </Section>
      
      <Section>
        <SectionTitle>Database Management</SectionTitle>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>create database</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Create a new database. This command requires super user privileges.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`create database [database_name]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>database_name</td>
                <td>Name for the new database</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`create database mydb`}
              caption="Example"
            />
          </CommandExample>
        </CommandCard>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>connect</CommandName>
            <CommandBadge>Database</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Connect to a database to execute queries. You must have permission to access the specified database.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`connect [database_name]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>database_name</td>
                <td>Name of the database to connect to</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`connect mydb`}
              caption="Example"
            />
          </CommandExample>
          
          <Info>
            <i className="fas fa-info-circle"></i>
            <div>
              After connecting to a database, you can execute SQL queries directly or 
              use transaction commands like <code>start transaction</code>, <code>commit</code>, and <code>rollback</code>.
            </div>
          </Info>
        </CommandCard>
      </Section>
      
      <Section>
        <SectionTitle>User Management</SectionTitle>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>create user</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Create a new user account. This command requires super user privileges.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`create user [username] [password]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>username</td>
                <td>Username for the new user</td>
              </tr>
              <tr>
                <td>password</td>
                <td>Password for the new user</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`create user john pass123`}
              caption="Example"
            />
          </CommandExample>
          
          <Warning>
            <i className="fas fa-shield-alt"></i>
            <div>
              <strong>Security Note:</strong> Ensure you use strong passwords in production environments.
              Consider implementing password policies according to your security requirements.
            </div>
          </Warning>
        </CommandCard>
      </Section>
      
      <Section>
        <SectionTitle>Permissions</SectionTitle>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>grant database</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Grant database-level access permissions to users. This command requires super user privileges.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`grant database [database_name] [username] [access_type]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>database_name</td>
                <td>Name of the database to grant access to</td>
              </tr>
              <tr>
                <td>username</td>
                <td>Username of the user to grant access to</td>
              </tr>
              <tr>
                <td>access_type</td>
                <td>Type of access to grant: <code>read</code> or <code>write</code></td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`grant database mydb john read`}
              caption="Example"
            />
          </CommandExample>
        </CommandCard>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>grant table</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Grant table-level access permissions to users. This command requires super user privileges.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`grant table [database_name] [table_name] [username] [access_type...]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>database_name</td>
                <td>Name of the database containing the table</td>
              </tr>
              <tr>
                <td>table_name</td>
                <td>Name of the table to grant access to</td>
              </tr>
              <tr>
                <td>username</td>
                <td>Username of the user to grant access to</td>
              </tr>
              <tr>
                <td>access_type...</td>
                <td>Types of access to grant: <code>select</code>, <code>update</code>, <code>insert</code>, or <code>delete</code> (multiple can be specified)</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`grant table mydb users john select insert`}
              caption="Example"
            />
          </CommandExample>
        </CommandCard>
      </Section>
      
      <Section>
        <SectionTitle>SQL Execution</SectionTitle>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>SQL Query</CommandName>
            <CommandBadge>SQL</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Execute a SQL query on the currently connected database. Standard SQL syntax is supported.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="sql"
              code={`[Any valid SQL statement]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <CommandExample>
            <Code 
              language="sql"
              code={`SELECT * FROM users;
INSERT INTO users (id, name) VALUES (1, 'John');
UPDATE users SET active = true WHERE id = 1;
DELETE FROM users WHERE id = 2;`}
              caption="Example Queries"
            />
          </CommandExample>
        </CommandCard>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>Transactions</CommandName>
            <CommandBadge>SQL</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Execute multiple SQL statements in a transaction block for atomic operations.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="sql"
              code={`start transaction
[SQL statement 1]
[SQL statement 2]
...
commit
-- or rollback to undo changes`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <CommandExample>
            <Code 
              language="sql"
              code={`start transaction
INSERT INTO users (id, name) VALUES (1, 'John');
UPDATE accounts SET balance = balance - 100 WHERE user_id = 1;
INSERT INTO transactions (user_id, amount) VALUES (1, -100);
commit`}
              caption="Transaction Example"
            />
          </CommandExample>
        </CommandCard>
      </Section>
      
      <Section>
        <SectionTitle>PostgreSQL Integration</SectionTitle>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>link</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Link DuckDB with a PostgreSQL database. This command requires super user privileges.
            The command establishes a connection between DuckDB and PostgreSQL by reading the PostgreSQL
            table schemas and recreating them in DuckDB, then copying all data.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`link [database_name] [postgresql_connection_string]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>database_name</td>
                <td>Name of the DuckDB database to link</td>
              </tr>
              <tr>
                <td>postgresql_connection_string</td>
                <td>PostgreSQL connection string (e.g., "postgresql://user:password@localhost:5432/pgdb")</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`link mydb "postgresql://user:password@localhost:5432/pgdb"`}
              caption="Example"
            />
          </CommandExample>
        </CommandCard>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>migrate</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            Maintain synchronization between the linked DuckDB and PostgreSQL databases.
            This command reads the PostgreSQL audit table to keep the DuckDB database in sync with PostgreSQL changes.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`migrate [database_name]`}
              caption="Syntax"
            />
          </CommandSyntax>
          
          <ParamTable>
            <thead>
              <tr>
                <th>Parameter</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>database_name</td>
                <td>Name of the linked DuckDB database to migrate</td>
              </tr>
            </tbody>
          </ParamTable>
          
          <CommandExample>
            <Code 
              language="bash"
              code={`migrate mydb`}
              caption="Example"
            />
          </CommandExample>
        </CommandCard>
      </Section>
      
      <Section>
        <SectionTitle>Utility Commands</SectionTitle>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>list databases</CommandName>
            <CommandBadge>Utility</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            List all available databases that the current user has access to.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`list databases`}
              caption="Syntax"
            />
          </CommandSyntax>
        </CommandCard>
        
        <CommandCard isHighlighted={true}>
          <CommandHeader>
            <CommandName>list users</CommandName>
            <CommandBadge>Super User</CommandBadge>
          </CommandHeader>
          <CommandDescription>
            List all users in the system. This command requires super user privileges.
          </CommandDescription>
          
          <CommandSyntax>
            <Code 
              language="bash"
              code={`list users`}
              caption="Syntax"
            />
          </CommandSyntax>
        </CommandCard>
      </Section>
      
      <ComprehensiveExample>
        <SectionTitle>Comprehensive Example</SectionTitle>
        <Paragraph>
          Here's a full example demonstrating the sequence of commands for a typical usage scenario:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Login as super user
login duck superpassword

# Create a new database
create database mydb

# Create a regular user
create user analyst pass123

# Grant database access
grant database mydb analyst read

# Grant table access
grant table mydb customers analyst select

# Connect to the database as super user
connect mydb

# Create tables and insert data
CREATE TABLE customers (
  id INTEGER PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100)
);

INSERT INTO customers VALUES (1, 'John Doe', 'john@example.com');
INSERT INTO customers VALUES (2, 'Jane Smith', 'jane@example.com');

# Now, assume the analyst logs in
# (this would be in a separate session)
login analyst pass123

# Connect to the database they have access to
connect mydb

# Query the data they have permission to see
SELECT * FROM customers;`}
          caption="Complete usage example"
        />
      </ComprehensiveExample>
      
      <NavigationButtons>
        <NavButton to="/docs/quick-start">
          <i className="fas fa-arrow-left"></i>
          Back to Quick Start
        </NavButton>
        <NavButton to="/docs/permissions">
          Next: User Permissions
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

const CommandCard = styled.div<CommandCardProps>`
  background: ${({ theme, isHighlighted }) => 
    isHighlighted 
      ? `linear-gradient(135deg, ${theme.secondary}, rgba(255, 193, 7, 0.1))`
      : theme.secondary};
  border-radius: 8px;
  padding: 25px;
  margin-bottom: 30px;
  border-left: ${({ isHighlighted }) => 
    isHighlighted ? '4px solid #FFC107' : 'none'};
  box-shadow: ${({ isHighlighted }) => 
    isHighlighted 
      ? '0 4px 20px rgba(255, 193, 7, 0.15)' 
      : 'none'};
  position: relative;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  ${({ isHighlighted }) => isHighlighted && `
    &::before {
      content: "⭐ Main Command";
      position: absolute;
      top: -10px;
      right: 20px;
      background-color: #FFC107;
      color: #000;
      font-size: 12px;
      font-weight: bold;
      padding: 3px 8px;
      border-radius: 4px;
    }
  `}
`;

const CommandHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;
`;

const CommandName = styled.h3`
  font-size: 20px;
  font-weight: 700;
  margin: 0;
  color: ${({ theme }) => theme.accent};
  font-family: 'Fira Code', monospace;
  text-shadow: 0 0 8px rgba(255, 193, 7, 0.3);
  position: relative;
  display: inline-block;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, ${({ theme }) => theme.accent}, transparent);
  }
`;

const CommandBadge = styled.span`
  background-color: rgba(255, 193, 7, 0.15);
  color: ${({ theme }) => theme.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const CommandDescription = styled.p`
  font-size: 16px;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const CommandSyntax = styled.div`
  margin-bottom: 20px;
  position: relative;
  
  &::before {
    content: 'Command';
    position: absolute;
    top: 8px;
    right: 45px;
    font-size: 11px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.accent};
    font-weight: 700;
    letter-spacing: 0.5px;
    z-index: 5;
  }
  
  pre {
    border-left: 2px solid ${({ theme }) => theme.accent} !important;
  }
  
  code.language-bash {
    .token.function {
      color: #ff9e64 !important;
      font-weight: bold;
    }
    
    .token.parameter {
      font-style: italic;
      color: #7dcfff !important;
    }
  }
  
  code.language-sql {
    .token.keyword {
      color: #bb9af7 !important;
      font-weight: bold;
    }
  }
`;

const ParamTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 20px;
  
  th, td {
    padding: 12px 15px;
    text-align: left;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }
  
  th {
    font-weight: 600;
    color: ${({ theme }) => theme.lineNumber};
    font-size: 14px;
    background-color: rgba(255, 255, 255, 0.03);
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

const CommandExample = styled.div`
  margin-top: 20px;
`;

const Note = styled.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid ${({ theme }) => theme.accent};
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
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

const Info = styled.div`
  background-color: rgba(0, 123, 255, 0.1);
  border-left: 4px solid #0d6efd;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: #0d6efd;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`;

const Warning = styled.div`
  background-color: rgba(220, 53, 69, 0.1);
  border-left: 4px solid #dc3545;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0 0;
  
  i {
    font-size: 20px;
    color: #dc3545;
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 14px;
  }
`;

const ComprehensiveExample = styled.section`
  margin-bottom: 60px;
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 30px;
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

export default Commands; 