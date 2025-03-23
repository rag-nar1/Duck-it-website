import React, { useEffect } from 'react';
import styled from 'styled-components';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-sql';
import 'prismjs/components/prism-go';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-yaml';
import { FiCopy } from 'react-icons/fi';

interface CodeProps {
  language: string;
  code: string;
  caption?: string;
  showLineNumbers?: boolean;
}

// Add a function to process command syntax for better highlighting
const processBashCode = (code: string): string => {
  // First, escape any HTML that might be in the code
  const escaped = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
  
  // Highlight command keywords at the beginning of lines
  return escaped
    // Command keywords
    .replace(
      /^(login|connect|create|grant|list|migrate|link|start transaction|commit|rollback|sql)(\s+|$)/gm, 
      '<span class="command-keyword">$1</span>$2'
    )
    // Parameters
    .replace(
      /(\[)([^\]]+)(\])/g,
      '$1<span class="command-parameter">$2</span>$3'
    )
    // Entities
    .replace(
      /(\s|^)(database|user|table)(\s+)/g,
      '$1<span class="command-entity">$2</span>$3'
    )
    // Permissions
    .replace(
      /(\s|^)(read|write|select|insert|update|delete)(\s+|$)/g,
      '$1<span class="command-permission">$2</span>$3'
    );
};

const processSqlCode = (code: string): string => {
  // Highlight SQL keywords
  return code.replace(
    /\b(SELECT|INSERT|UPDATE|DELETE|CREATE|DROP|ALTER|FROM|WHERE|AND|OR|JOIN|LEFT|RIGHT|INNER|OUTER|GROUP BY|ORDER BY|HAVING|LIMIT|OFFSET|AS|ON|BETWEEN|LIKE|IN|NOT|IS NULL|IS NOT NULL|CASE|WHEN|THEN|ELSE|END|BEGIN|COMMIT|ROLLBACK)\b/gi,
    '<span class="sql-keyword">$1</span>'
  );
};

const processCode = (code: string, language: string): string => {
  if (language === 'bash') {
    return processBashCode(code);
  }
  if (language === 'sql') {
    return processSqlCode(code);
  }
  return code;
}

const Code: React.FC<CodeProps> = ({ 
  language, 
  code, 
  caption, 
  showLineNumbers = true 
}) => {
  // Process code before Prism highlighting
  const processedCode = language === 'bash' ? processBashCode(code) : 
                       (language === 'sql' ? processSqlCode(code) : code);
  
  useEffect(() => {
    // Only apply Prism highlighting if we're not using our custom highlighting
    if (language !== 'bash' && language !== 'sql') {
      Prism.highlightAll();
    }
  }, [code, language]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <CodeContainer>
      {caption && <Caption>{caption}</Caption>}
      <CodeWrapper>
        <CopyButton onClick={handleCopyClick}>
          <FiCopy />
        </CopyButton>
        {language === 'bash' || language === 'sql' ? (
          <pre className={showLineNumbers ? 'line-numbers' : ''}>
            <code className={`language-${language}`} dangerouslySetInnerHTML={{ __html: processedCode }} />
          </pre>
        ) : (
          <pre className={showLineNumbers ? 'line-numbers' : ''}>
            <code className={`language-${language}`}>{code}</code>
          </pre>
        )}
      </CodeWrapper>
    </CodeContainer>
  );
};

const CodeContainer = styled.div`
  margin: 20px 0;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.codeBackground || '#1e1e1e'};
`;

const Caption = styled.div`
  background-color: rgba(255, 255, 255, 0.05);
  padding: 8px 15px;
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.lineNumber};
`;

const CodeWrapper = styled.div`
  position: relative;
  
  pre {
    margin: 0 !important;
    padding: 15px !important;
    background-color: ${({ theme }) => theme.codeBackground || '#1e1e1e'} !important;
    border-radius: 0 !important;
    font-family: 'Fira Code', monospace !important;
    font-size: 14px !important;
    line-height: 1.5 !important;
    overflow-x: auto !important;
    
    code {
      font-family: 'Fira Code', monospace !important;
      background: none !important;
      padding: 0 !important;
      border-radius: 0 !important;
      
      .command-keyword {
        color: #ff9e64 !important;
        font-weight: bold !important;
      }
      
      .command-parameter {
        color: #7dcfff !important;
        font-style: italic !important;
      }
      
      .command-entity {
        color: #bb9af7 !important;
      }
      
      .command-permission {
        color: #9ece6a !important;
        font-weight: 500 !important;
      }
      
      .sql-keyword {
        color: #bb9af7 !important;
        font-weight: bold !important;
      }
    }
    
    &.line-numbers {
      padding-left: 3.8em !important;
      
      .line-numbers-rows {
        border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
        
        span {
          &:before {
            color: ${({ theme }) => theme.lineNumber || 'rgba(255, 255, 255, 0.4)'} !important;
          }
        }
      }
    }
  }
  
  .token {
    &.comment {
      color: #6a9955 !important;
    }
    
    &.keyword {
      color: #569cd6 !important;
    }
    
    &.function {
      color: #dcdcaa !important;
    }
    
    &.string {
      color: #ce9178 !important;
    }
    
    &.number, &.boolean {
      color: #b5cea8 !important;
    }
    
    &.operator {
      color: #d4d4d4 !important;
    }
    
    &.punctuation {
      color: #d4d4d4 !important;
    }
    
    &.class-name, &.constant {
      color: #4ec9b0 !important;
    }
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
  border-radius: 4px;
  color: ${({ theme }) => theme.text};
  padding: 4px 8px;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0.7;
  transition: opacity 0.2s ease, background-color 0.2s ease;
  z-index: 10;
  
  &:hover {
    opacity: 1;
    background-color: rgba(255, 255, 255, 0.15);
  }
`;

export default Code; 