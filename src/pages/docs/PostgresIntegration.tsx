import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Code from '../../components/Code';

const PostgresIntegration: React.FC = () => {
  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Title>PostgreSQL Integration</Title>
      <Subtitle>Seamlessly integrate PostgreSQL databases with TCP DuckDB Server</Subtitle>
      
      <Section>
        <SectionTitle>Overview</SectionTitle>
        <Paragraph>
          TCP DuckDB Server offers robust integration with PostgreSQL databases, allowing you to leverage 
          the speed and analytical capabilities of DuckDB on top of your existing PostgreSQL data.
          This integration enables you to:
        </Paragraph>
        
        <FeatureList>
          <Feature>
            <i className="fas fa-bolt"></i>
            <div>
              <FeatureTitle>Accelerate Analytics</FeatureTitle>
              <FeatureDesc>Run analytical queries against PostgreSQL data at DuckDB speeds</FeatureDesc>
            </div>
          </Feature>
          <Feature>
            <i className="fas fa-sync-alt"></i>
            <div>
              <FeatureTitle>Maintain Synchronization</FeatureTitle>
              <FeatureDesc>Keep your DuckDB copy in sync with PostgreSQL changes</FeatureDesc>
            </div>
          </Feature>
          <Feature>
            <i className="fas fa-database"></i>
            <div>
              <FeatureTitle>Single Source of Truth</FeatureTitle>
              <FeatureDesc>Use PostgreSQL as your primary database while gaining DuckDB's analytical power</FeatureDesc>
            </div>
          </Feature>
          <Feature>
            <i className="fas fa-shield-alt"></i>
            <div>
              <FeatureTitle>Preserve Security Model</FeatureTitle>
              <FeatureDesc>Maintain the same security and access controls</FeatureDesc>
            </div>
          </Feature>
        </FeatureList>
      </Section>
      
      <Section>
        <SectionTitle>How It Works</SectionTitle>
        <Paragraph>
          The PostgreSQL integration operates through a two-step process: linking and migration.
        </Paragraph>
        
        <WorkflowDiagram>
          <DiagramTitle>PostgreSQL Integration Workflow</DiagramTitle>
          <WorkflowSteps>
            <Step>
              <StepNumber>1</StepNumber>
              <StepContent>
                <h3>Initial Linking</h3>
                <p>
                  When you execute the <code>link</code> command, TCP DuckDB Server:
                </p>
                <ul>
                  <li>Connects to your PostgreSQL database using the provided connection string</li>
                  <li>Reads the schema of all tables in the PostgreSQL database</li>
                  <li>Creates corresponding tables in the specified DuckDB database</li>
                  <li>Copies all data from PostgreSQL to DuckDB</li>
                  <li>Sets up tracking to monitor future changes</li>
                </ul>
              </StepContent>
            </Step>
            <StepArrow>
              <i className="fas fa-arrow-down"></i>
            </StepArrow>
            <Step>
              <StepNumber>2</StepNumber>
              <StepContent>
                <h3>Ongoing Synchronization</h3>
                <p>
                  After the initial link, you can use the <code>migrate</code> command to:
                </p>
                <ul>
                  <li>Read the audit log from PostgreSQL to identify changes since the last sync</li>
                  <li>Apply those changes to the DuckDB copy</li>
                  <li>Keep both databases in sync with minimal latency</li>
                </ul>
              </StepContent>
            </Step>
          </WorkflowSteps>
        </WorkflowDiagram>
      </Section>
      
      <Section>
        <SectionTitle>Requirements</SectionTitle>
        <Paragraph>
          To use the PostgreSQL integration features, you'll need:
        </Paragraph>
        
        <RequirementsList>
          <Requirement>
            <i className="fas fa-check-circle"></i>
            <div>A PostgreSQL database (version 10 or higher)</div>
          </Requirement>
          <Requirement>
            <i className="fas fa-check-circle"></i>
            <div>TCP DuckDB Server with super user privileges</div>
          </Requirement>
          <Requirement>
            <i className="fas fa-check-circle"></i>
            <div>Network connectivity between the TCP DuckDB Server and the PostgreSQL server</div>
          </Requirement>
          <Requirement>
            <i className="fas fa-check-circle"></i>
            <div>PostgreSQL user with read permissions on all tables you want to synchronize</div>
          </Requirement>
        </RequirementsList>
        
        <Info>
          <i className="fas fa-info-circle"></i>
          <div>
            <strong>PostgreSQL Audit Table:</strong> For the <code>migrate</code> feature to work properly, 
            your PostgreSQL database should have auditing enabled. The TCP DuckDB Server looks for changes in an audit 
            table to track modifications made in PostgreSQL.
          </div>
        </Info>
      </Section>
      
      <Section>
        <SectionTitle>Linking a PostgreSQL Database</SectionTitle>
        <Paragraph>
          To link a PostgreSQL database to DuckDB, you'll use the <CodeInline>link</CodeInline> command:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`link [database_name] [postgresql_connection_string]`}
          caption="Command syntax"
        />
        
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
              <td>The name of the DuckDB database to create or use for the linked data</td>
            </tr>
            <tr>
              <td>postgresql_connection_string</td>
              <td>
                A standard PostgreSQL connection string including host, port, database, username, and password
                <br/>
                <em>Example:</em> <code>postgresql://username:password@localhost:5432/dbname</code>
              </td>
            </tr>
          </tbody>
        </ParamTable>
        
        <Paragraph>
          Here's an example of linking a PostgreSQL database:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# First, login as super user
login duck secure_password

# Link a PostgreSQL database to a new DuckDB database named "analytics"
link analytics "postgresql://analyst:pass123@db.example.com:5432/production_data"`}
          caption="Example usage"
        />
        
        <Note>
          <i className="fas fa-exclamation-triangle"></i>
          <div>
            <strong>Initial Link Performance:</strong> The initial linking process copies all data
            from PostgreSQL to DuckDB, which can take some time for large databases. Plan this
            operation during off-peak hours for production databases.
          </div>
        </Note>
      </Section>
      
      <Section>
        <SectionTitle>Keeping Databases in Sync</SectionTitle>
        <Paragraph>
          After the initial link, you can keep the DuckDB database synchronized with the PostgreSQL
          database using the <CodeInline>migrate</CodeInline> command:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`migrate [database_name]`}
          caption="Command syntax"
        />
        
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
              <td>The name of the DuckDB database that is linked to PostgreSQL</td>
            </tr>
          </tbody>
        </ParamTable>
        
        <Paragraph>
          Here's an example of migrating changes:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# First, login as super user
login duck secure_password

# Synchronize the "analytics" database with PostgreSQL changes
migrate analytics`}
          caption="Example usage"
        />
        
        <Tip>
          <i className="fas fa-lightbulb"></i>
          <div>
            <strong>Automation Tip:</strong> Consider scheduling regular migrations using a cron job or similar
            scheduling tool to keep your DuckDB database continuously synchronized with PostgreSQL.
          </div>
        </Tip>
      </Section>
      
      <Section>
        <SectionTitle>Working with Linked Data</SectionTitle>
        <Paragraph>
          Once a PostgreSQL database is linked, you can work with the data just like any other DuckDB database:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Connect to the linked database
connect analytics

# Run analytical queries
SELECT 
  date_trunc('month', order_date) AS month,
  category,
  SUM(amount) AS total_sales,
  COUNT(*) AS num_orders,
  AVG(amount) AS avg_order_value
FROM orders
GROUP BY month, category
ORDER BY month, total_sales DESC;`}
          caption="Example queries on linked data"
        />
        
        <Paragraph>
          All the performance benefits of DuckDB are available on your linked PostgreSQL data, making
          complex analytical queries run significantly faster.
        </Paragraph>
      </Section>
      
      <Section>
        <SectionTitle>Security Considerations</SectionTitle>
        <Paragraph>
          When using the PostgreSQL integration, keep these security considerations in mind:
        </Paragraph>
        
        <SecurityConsiderations>
          <ConsiderationItem>
            <i className="fas fa-lock"></i>
            <div>
              <h3>Connection String Security</h3>
              <p>The PostgreSQL connection string contains sensitive credentials. Ensure you're in a secure environment when executing the link command.</p>
            </div>
          </ConsiderationItem>
          
          <ConsiderationItem>
            <i className="fas fa-user-lock"></i>
            <div>
              <h3>Principle of Least Privilege</h3>
              <p>Use a PostgreSQL user with only the necessary permissions for the tables you need to access.</p>
            </div>
          </ConsiderationItem>
          
          <ConsiderationItem>
            <i className="fas fa-user-shield"></i>
            <div>
              <h3>Access Control</h3>
              <p>Apply appropriate access controls to the linked DuckDB database to maintain the same security level as your PostgreSQL database.</p>
            </div>
          </ConsiderationItem>
          
          <ConsiderationItem>
            <i className="fas fa-network-wired"></i>
            <div>
              <h3>Network Security</h3>
              <p>Ensure network communication between TCP DuckDB Server and PostgreSQL is secure, preferably using SSL/TLS encryption.</p>
            </div>
          </ConsiderationItem>
        </SecurityConsiderations>
      </Section>
      
      <Section>
        <SectionTitle>Best Practices</SectionTitle>
        
        <BestPracticeList>
          <BestPractice>
            <BestPracticeIcon>
              <i className="fas fa-clock"></i>
            </BestPracticeIcon>
            <BestPracticeContent>
              <h3>Regular Synchronization</h3>
              <p>Set up a schedule for running the migrate command based on your data change frequency and analytics needs.</p>
            </BestPracticeContent>
          </BestPractice>
          
          <BestPractice>
            <BestPracticeIcon>
              <i className="fas fa-filter"></i>
            </BestPracticeIcon>
            <BestPracticeContent>
              <h3>Selective Linking</h3>
              <p>Only link the tables you need for analytics to minimize resource usage and synchronization time.</p>
            </BestPracticeContent>
          </BestPractice>
          
          <BestPractice>
            <BestPracticeIcon>
              <i className="fas fa-compress-arrows-alt"></i>
            </BestPracticeIcon>
            <BestPracticeContent>
              <h3>Consider Data Volume</h3>
              <p>For very large PostgreSQL databases, consider linking only specific tables or using schema-level filtering.</p>
            </BestPracticeContent>
          </BestPractice>
          
          <BestPractice>
            <BestPracticeIcon>
              <i className="fas fa-tachometer-alt"></i>
            </BestPracticeIcon>
            <BestPracticeContent>
              <h3>Monitor Performance</h3>
              <p>Keep an eye on both PostgreSQL and DuckDB server performance during migration operations.</p>
            </BestPracticeContent>
          </BestPractice>
        </BestPracticeList>
      </Section>
      
      <Section>
        <SectionTitle>Complete Example</SectionTitle>
        <Paragraph>
          Here's a comprehensive example demonstrating the PostgreSQL integration workflow:
        </Paragraph>
        
        <Code 
          language="bash"
          code={`# Login as super user
login duck secure_password

# Create a new DuckDB database linked to PostgreSQL
link sales_analytics "postgresql://analyst:pass123@db.example.com:5432/sales_data"

# The link command has now copied all tables and data from PostgreSQL to DuckDB

# Connect to the linked database
connect sales_analytics

# Run an analytical query that would be slow in PostgreSQL but fast in DuckDB
SELECT 
  customer_region,
  product_category,
  COUNT(*) as num_transactions,
  SUM(amount) as total_revenue,
  AVG(amount) as avg_transaction_value
FROM transactions
JOIN customers ON transactions.customer_id = customers.id
JOIN products ON transactions.product_id = products.id
WHERE transaction_date BETWEEN '2023-01-01' AND '2023-12-31'
GROUP BY customer_region, product_category
ORDER BY total_revenue DESC;

# Later, after changes have occurred in PostgreSQL, synchronize the data
migrate sales_analytics

# Now run queries on the updated data
SELECT * FROM new_transactions WHERE transaction_date = CURRENT_DATE;`}
          caption="Complete PostgreSQL integration example"
        />
      </Section>
      
      <NavigationButtons>
        <NavButton to="/docs/security">
          <i className="fas fa-arrow-left"></i>
          Back to Security
        </NavButton>
        <NavButton to="/docs/troubleshooting">
          Next: Troubleshooting
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

const FeatureList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px 0;
`;

const Feature = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  align-items: flex-start;
  
  i {
    font-size: 24px;
    color: ${({ theme }) => theme.accent};
  }
`;

const FeatureTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px;
`;

const FeatureDesc = styled.p`
  font-size: 14px;
  line-height: 1.5;
  margin: 0;
  color: ${({ theme }) => theme.lineNumber};
`;

const WorkflowDiagram = styled.div`
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

const WorkflowSteps = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  width: 100%;
  max-width: 600px;
`;

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.accent};
  color: ${({ theme }) => theme.background};
  font-size: 24px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

const StepContent = styled.div`
  flex-grow: 1;
  
  h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 0 0 10px;
  }
  
  p {
    font-size: 14px;
    line-height: 1.6;
    margin: 0 0 10px;
  }
  
  ul {
    margin: 0;
    padding: 0 0 0 18px;
    
    li {
      font-size: 14px;
      margin-bottom: 5px;
      color: ${({ theme }) => theme.lineNumber};
    }
  }
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
  }
`;

const StepArrow = styled.div`
  color: ${({ theme }) => theme.accent};
  font-size: 24px;
`;

const RequirementsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: 25px 0;
`;

const Requirement = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  
  i {
    color: #28a745;
    font-size: 20px;
  }
  
  div {
    font-size: 16px;
  }
`;

const ParamTable = styled.table`
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
  
  code {
    background-color: rgba(255, 255, 255, 0.1);
    padding: 2px 5px;
    border-radius: 3px;
    font-family: 'Fira Code', monospace;
    font-size: 13px;
  }
`;

const Note = styled.div`
  background-color: rgba(255, 193, 7, 0.1);
  border-left: 4px solid #ffc107;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #ffc107;
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

const Tip = styled.div`
  background-color: rgba(40, 167, 69, 0.1);
  border-left: 4px solid #28a745;
  padding: 15px;
  border-radius: 4px;
  display: flex;
  gap: 10px;
  margin: 20px 0;
  
  i {
    font-size: 20px;
    color: #28a745;
  }
`;

const SecurityConsiderations = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 25px 0;
`;

const ConsiderationItem = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 20px;
  display: flex;
  gap: 15px;
  
  i {
    font-size: 24px;
    color: #dc3545;
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

const BestPracticeList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin: 25px 0;
`;

const BestPractice = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
`;

const BestPracticeIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  
  i {
    font-size: 20px;
    color: ${({ theme }) => theme.accent};
  }
`;

const BestPracticeContent = styled.div`
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

export default PostgresIntegration; 