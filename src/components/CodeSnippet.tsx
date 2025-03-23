import React, { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { Highlight, themes } from 'prism-react-renderer';

type Language = 'sql' | 'python' | 'r' | 'typescript';

interface CodeSnippetProps {
  initialLanguage?: Language;
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ initialLanguage = 'sql' }) => {
  const [activeTab, setActiveTab] = useState<Language>(initialLanguage);

  const codeExamples = {
    sql: `-- Get the top-3 busiest train stations
SELECT
    station_name,
    COUNT(*) AS num_services
FROM train_services
GROUP BY ALL
ORDER BY num_services DESC
LIMIT 3;`,
    python: `import duckdb

# Connect to an in-memory database
con = duckdb.connect()

# Create a table
con.execute("CREATE TABLE stations (id INTEGER, name VARCHAR)")

# Insert data
con.execute("INSERT INTO stations VALUES (1, 'Central'), (2, 'North'), (3, 'East')")

# Query data
result = con.execute("""
    SELECT name, id
    FROM stations
    ORDER BY id
""").fetchall()

print(result)`,
    r: `# Load the DuckDB package
library(duckdb)

# Connect to an in-memory database
con <- dbConnect(duckdb())

# Create a table
dbExecute(con, "CREATE TABLE stations (id INTEGER, name VARCHAR)")

# Insert data
dbExecute(con, "INSERT INTO stations VALUES (1, 'Central'), (2, 'North'), (3, 'East')")

# Query data
result <- dbGetQuery(con, "
    SELECT name, id
    FROM stations
    ORDER BY id
")

print(result)`,
    typescript: `import * as duckdb from 'duckdb';

// Connect to an in-memory database
const db = new duckdb.Database(':memory:');

// Create a connection
const conn = db.connect();

// Create a table
conn.exec('CREATE TABLE stations (id INTEGER, name VARCHAR)');

// Insert data
conn.exec("INSERT INTO stations VALUES (1, 'Central'), (2, 'North'), (3, 'East')");

// Query data
const result = conn.all('SELECT name, id FROM stations ORDER BY id');

console.log(result);`
  };

  return (
    <Container>
      <Tabs>
        <Tab active={activeTab === 'sql'} onClick={() => setActiveTab('sql')}>SQL</Tab>
        <Tab active={activeTab === 'python'} onClick={() => setActiveTab('python')}>Python</Tab>
        <Tab active={activeTab === 'r'} onClick={() => setActiveTab('r')}>R</Tab>
        <Tab active={activeTab === 'typescript'} onClick={() => setActiveTab('typescript')}>Node.js</Tab>
      </Tabs>
      <AnimatePresence mode="wait">
        <CodeContainer
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <Highlight
            theme={themes.vsDark}
            code={codeExamples[activeTab]}
            language={activeTab === 'typescript' ? 'tsx' : activeTab}
          >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
              <Pre className={className} style={style}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line, key: i })}>
                    <LineNumber>{i + 1}</LineNumber>
                    <div>
                      {line.map((token, key) => (
                        <span key={key} {...getTokenProps({ token, key })} />
                      ))}
                    </div>
                  </div>
                ))}
              </Pre>
            )}
          </Highlight>
        </CodeContainer>
      </AnimatePresence>
      <ButtonsContainer>
        <Button>
          Aggregation query <i className="fas fa-chevron-down"></i>
        </Button>
        <Button>
          Live <i className="fas fa-plus"></i>
        </Button>
      </ButtonsContainer>
    </Container>
  );
};

const Container = styled.div`
  background-color: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  padding: 20px;
  box-shadow: ${({ theme }) => theme.shadow};
  width: 100%;
`;

const Tabs = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 10px;
`;

const Tab = styled.div<{ active: boolean }>`
  color: ${({ theme }) => theme.text};
  font-size: 14px;
  cursor: pointer;
  padding: 5px 0;
  opacity: ${({ active }) => (active ? 1 : 0.7)};
  position: relative;
  transition: opacity 0.2s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, active }) => (active ? theme.text : 'transparent')};
    transition: background-color 0.2s ease;
  }

  &:hover {
    opacity: 1;
  }
`;

const CodeContainer = styled(motion.div)`
  font-family: 'Fira Code', monospace;
  font-size: 14px;
  margin-bottom: 20px;
  overflow: auto;
  max-height: 400px;
`;

const Pre = styled.pre`
  margin: 0;
  padding: 0;
  background: transparent !important;
  
  & > div {
    display: flex;
    min-width: 100%;
  }
`;

const LineNumber = styled.span`
  display: inline-block;
  width: 2em;
  user-select: none;
  opacity: 0.5;
  text-align: right;
  margin-right: 1em;
  color: ${({ theme }) => theme.lineNumber};
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.text};
  color: ${({ theme }) => theme.text};
  padding: 8px 16px;
  font-size: 14px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: opacity 0.2s ease;

  i {
    font-size: 12px;
  }

  &:hover {
    opacity: 0.8;
  }
`;

export default CodeSnippet; 