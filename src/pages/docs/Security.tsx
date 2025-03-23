import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

const Security: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>Security & Access Control</Title>
      <Subtitle>Understand the security model and access control features of TCP DuckDB Server</Subtitle>
      
      <Section>
        <SectionTitle>Security Model</SectionTitle>
        <Paragraph>
          TCP DuckDB Server implements a comprehensive security model that includes authentication, 
          role-based access control, and permission management at both database and table levels.
          This multi-layered approach ensures that data is accessed only by authorized users 
          with appropriate permissions.
        </Paragraph>
        
        <SecurityDiagram>
          <DiagramTitle>Security Layers</DiagramTitle>
          <Layers>
            <Layer className="auth">
              <i className="fas fa-lock"></i>
              <div>
                <h3>Authentication</h3>
                <p>User identity verification</p>
              </div>
            </Layer>
            <i className="fas fa-arrow-down"></i>
            <Layer className="user">
              <i className="fas fa-user-shield"></i>
              <div>
                <h3>User Management</h3>
                <p>User accounts & roles</p>
              </div>
            </Layer>
            <i className="fas fa-arrow-down"></i>
            <Layer className="db">
              <i className="fas fa-database"></i>
              <div>
                <h3>Database-level Permissions</h3>
                <p>Read/write access to databases</p>
              </div>
            </Layer>
            <i className="fas fa-arrow-down"></i>
            <Layer className="table">
              <i className="fas fa-table"></i>
              <div>
                <h3>Table-level Permissions</h3>
                <p>Granular table operation permissions</p>
              </div>
            </Layer>
          </Layers>
        </SecurityDiagram>
      </Section>
      
      <Section>
        <SectionTitle>Authentication</SectionTitle>
        <Paragraph>
          Every user must authenticate before performing any operation on the TCP DuckDB Server.
          Authentication is handled via the login command with a username and password.
        </Paragraph>
        
        <Code 
          language="bash"
          code={`login [username] [password]`}
          caption="Authentication command syntax"
        />
        
        <Paragraph>
          The default super user account is <CodeInline>duck</CodeInline> with password <CodeInline>duck</CodeInline>.
          For security reasons, this password should be changed immediately in production environments.
        </Paragraph>
        
        <Warning>
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>Security Warning:</strong> The default credentials should never be used in production.
            Always change the default password before deploying your server to a production environment.
          </div>
        </Warning>
      </Section>
      
      <Section>
        <SectionTitle>User Types & Roles</SectionTitle>
        <Paragraph>
          TCP DuckDB Server distinguishes between different user types with varying privileges:
        </Paragraph>
        
        <UserRoles>
          <RoleCard>
            <RoleIcon className="super">
              <i className="fas fa-crown"></i>
            </RoleIcon>
            <RoleContent>
              <RoleTitle>Super User</RoleTitle>
              <RoleDescription>
                Has full administrative access to the server. Can create databases, manage users,
                assign permissions, and perform all operations.
              </RoleDescription>
              <Permissions>
                <Permission>Create databases</Permission>
                <Permission>Create users</Permission>
                <Permission>Grant permissions</Permission>
                <Permission>Link databases</Permission>
                <Permission>Access all databases</Permission>
              </Permissions>
            </RoleContent>
          </RoleCard>
          
          <RoleCard>
            <RoleIcon className="regular">
              <i className="fas fa-user"></i>
            </RoleIcon>
            <RoleContent>
              <RoleTitle>Regular User</RoleTitle>
              <RoleDescription>
                Standard user with access to specific databases and tables based on granted permissions.
                Cannot perform administrative functions.
              </RoleDescription>
              <Permissions>
                <Permission>Connect to permitted databases</Permission>
                <Permission>Execute queries on permitted tables</Permission>
                <Permission>Create and modify data (if granted write permission)</Permission>
              </Permissions>
            </RoleContent>
          </RoleCard>
        </UserRoles>
      </Section>
      
      <Section>
        <SectionTitle>Database-Level Permissions</SectionTitle>
        <Paragraph>
          Database permissions control which databases a user can access and what operations they can perform.
        </Paragraph>
        
        <PermissionsTable>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Description</th>
              <th>Command</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Badge>read</Badge></td>
              <td>Allows the user to connect to the database and execute SELECT queries on tables they have permission to access.</td>
              <td><CodeInline>grant database [db_name] [username] read</CodeInline></td>
            </tr>
            <tr>
              <td><Badge>write</Badge></td>
              <td>Allows all read operations, plus the ability to execute INSERT, UPDATE, and DELETE operations on tables they have permission to modify.</td>
              <td><CodeInline>grant database [db_name] [username] write</CodeInline></td>
            </tr>
          </tbody>
        </PermissionsTable>
        
        <Paragraph>
          Example of granting database access:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Grant read-only access to the 'analytics' database for user 'john'
grant database analytics john read

# Grant read-write access to the 'app_data' database for user 'admin'
grant database app_data admin write`}
          caption="Database permission examples"
        />
      </Section>
      
      <Section>
        <SectionTitle>Table-Level Permissions</SectionTitle>
        <Paragraph>
          Table permissions provide more granular control over which operations a user can perform on specific tables.
        </Paragraph>
        
        <PermissionsTable>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><Badge>select</Badge></td>
              <td>Allows the user to execute SELECT queries on the table.</td>
            </tr>
            <tr>
              <td><Badge>insert</Badge></td>
              <td>Allows the user to execute INSERT statements on the table.</td>
            </tr>
            <tr>
              <td><Badge>update</Badge></td>
              <td>Allows the user to execute UPDATE statements on the table.</td>
            </tr>
            <tr>
              <td><Badge>delete</Badge></td>
              <td>Allows the user to execute DELETE statements on the table.</td>
            </tr>
          </tbody>
        </PermissionsTable>
        
        <Paragraph>
          Table permissions are granted using the following syntax:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`grant table [database_name] [table_name] [username] [permission(s)]`}
          caption="Table permission syntax"
        />
        
        <Paragraph>
          Examples of granting table permissions:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Grant SELECT permission on the 'customers' table to user 'analyst'
grant table crm customers analyst select

# Grant SELECT and INSERT permissions on the 'orders' table to user 'sales_rep'
grant table crm orders sales_rep select insert

# Grant all permissions on the 'products' table to user 'inventory_manager'
grant table inventory products inventory_manager select insert update delete`}
          caption="Table permission examples"
        />
        
        <Info>
          <i className="fas fa-info-circle"></i>
          <div>
            <strong>Permission Inheritance:</strong> Table permissions do not automatically inherit from database permissions.
            You must explicitly grant both database-level access and table-level permissions.
          </div>
        </Info>
      </Section>
      
      <Section>
        <SectionTitle>Security Best Practices</SectionTitle>
        
        <BestPractices>
          <Practice>
            <i className="fas fa-key"></i>
            <div>
              <h3>Change Default Credentials</h3>
              <p>Immediately change the default super user password after installation.</p>
            </div>
          </Practice>
          
          <Practice>
            <i className="fas fa-lock"></i>
            <div>
              <h3>Principle of Least Privilege</h3>
              <p>Grant users only the permissions they need to perform their specific tasks.</p>
            </div>
          </Practice>
          
          <Practice>
            <i className="fas fa-user-secret"></i>
            <div>
              <h3>Regular Permission Audits</h3>
              <p>Periodically review user permissions to ensure they remain appropriate.</p>
            </div>
          </Practice>
          
          <Practice>
            <i className="fas fa-network-wired"></i>
            <div>
              <h3>Network Security</h3>
              <p>Run the server behind a firewall and consider using SSL/TLS for encryption.</p>
            </div>
          </Practice>
          
          <Practice>
            <i className="fas fa-user-times"></i>
            <div>
              <h3>Remove Unused Accounts</h3>
              <p>Regularly remove user accounts that are no longer needed.</p>
            </div>
          </Practice>
        </BestPractices>
        
        <Warning>
          <i className="fas fa-shield-alt"></i>
          <div>
            <strong>Production Deployment:</strong> For production environments, consider additional security 
            measures like running the server in a restricted environment, implementing IP-based access controls,
            and setting up monitoring for unauthorized access attempts.
          </div>
        </Warning>
      </Section>
      
      <Section>
        <SectionTitle>Implementing a Security Policy</SectionTitle>
        <Paragraph>
          Here's an example security setup for a typical organization with different user roles:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Login as super user
login duck secure_password

# Create databases for different purposes
create database analytics
create database customer_data
create database internal_ops

# Create users with different roles
create user data_analyst secure_pwd_1
create user marketing_user secure_pwd_2
create user sales_user secure_pwd_3
create user it_admin secure_pwd_4

# Grant database-level permissions
grant database analytics data_analyst read
grant database analytics marketing_user read
grant database customer_data sales_user read
grant database customer_data marketing_user read
grant database internal_ops it_admin write

# Grant table-level permissions
grant table analytics web_traffic data_analyst select
grant table analytics campaigns marketing_user select insert update
grant table customer_data contacts sales_user select insert update
grant table customer_data purchase_history sales_user select`}
          caption="Example security policy implementation"
        />
      </Section>
      
      <NavigationButtons>
        <NavButton to="/docs/commands">
          <i className="fas fa-arrow-left"></i>
          Back to Commands
        </NavButton>
        <NavButton to="/docs/postgres-integration">
          Next: PostgreSQL Integration
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

const SecurityDiagram = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 30px;
  margin: 30px 0;
`;

const DiagramTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 25px;
  text-align: center;
`;

const Layers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  
  .fas.fa-arrow-down {
    color: ${({ theme }) => theme.accent};
    font-size: 18px;
  }
`;

const Layer = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  padding: 15px 25px;
  width: 100%;
  max-width: 450px;
  
  i {
    font-size: 24px;
  }
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 5px;
  }
  
  p {
    font-size: 14px;
    margin: 0;
    color: ${({ theme }) => theme.lineNumber};
  }
  
  &.auth {
    border: 1px solid #dc3545;
    i { color: #dc3545; }
  }
  
  &.user {
    border: 1px solid #fd7e14;
    i { color: #fd7e14; }
  }
  
  &.db {
    border: 1px solid #0d6efd;
    i { color: #0d6efd; }
  }
  
  &.table {
    border: 1px solid #198754;
    i { color: #198754; }
  }
`;

const UserRoles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 25px;
  margin: 30px 0;
`;

const RoleCard = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 25px;
  display: flex;
  gap: 20px;
`;

const RoleIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 28px;
  }
  
  &.super {
    background-color: rgba(255, 193, 7, 0.15);
    i { color: #ffc107; }
  }
  
  &.regular {
    background-color: rgba(13, 110, 253, 0.15);
    i { color: #0d6efd; }
  }
`;

const RoleContent = styled.div`
  flex-grow: 1;
`;

const RoleTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 10px;
`;

const RoleDescription = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0 0 15px;
  color: ${({ theme }) => theme.text};
`;

const Permissions = styled.ul`
  margin: 0;
  padding: 0 0 0 18px;
  list-style-type: disc;
  
  li {
    font-size: 14px;
    margin-bottom: 5px;
    color: ${({ theme }) => theme.lineNumber};
  }
`;

const Permission = styled.li``;

const PermissionsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 25px 0;
  
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
    vertical-align: top;
  }
  
  tr:last-child td {
    border-bottom: none;
  }
`;

const Badge = styled.span`
  background-color: rgba(255, 193, 7, 0.15);
  color: ${({ theme }) => theme.accent};
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 600;
  display: inline-block;
  text-transform: uppercase;
`;

const Warning = styled.div`
  background-color: rgba(220, 53, 69, 0.1);
  border-left: 4px solid #dc3545;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #dc3545;
  }
`;

const Info = styled.div`
  background-color: rgba(13, 110, 253, 0.1);
  border-left: 4px solid #0d6efd;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #0d6efd;
  }
`;

const BestPractices = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
`;

const Practice = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  
  i {
    font-size: 24px;
    color: ${({ theme }) => theme.accent};
  }
  
  h3 {
    font-size: 16px;
    font-weight: 600;
    margin: 0 0 8px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
    color: ${({ theme }) => theme.lineNumber};
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

export default Security; 