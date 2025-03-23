import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { darkTheme, lightTheme } from './styles/Theme';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import DocumentationLayout from './components/DocumentationLayout';
import Overview from './pages/docs/Overview';
import Installation from './pages/docs/Installation';
import QuickStart from './pages/docs/QuickStart';
import Commands from './pages/docs/Commands';
import Security from './pages/docs/Security';
import PostgresIntegration from './pages/docs/PostgresIntegration';
import Troubleshooting from './pages/docs/Troubleshooting';

const App: React.FC = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };
  
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
      <GlobalStyles theme={isDarkTheme ? darkTheme : lightTheme} />
      <BrowserRouter>
        <Navbar toggleTheme={toggleTheme} isDarkTheme={isDarkTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/docs" element={<DocumentationLayout />}>
            <Route index element={<Overview />} />
            <Route path="installation" element={<Installation />} />
            <Route path="quick-start" element={<QuickStart />} />
            <Route path="commands" element={<Commands />} />
            <Route path="security" element={<Security />} />
            <Route path="postgres-integration" element={<PostgresIntegration />} />
            <Route path="troubleshooting" element={<Troubleshooting />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App; 