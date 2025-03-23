import { createGlobalStyle } from 'styled-components';
import { ThemeType } from './Theme';

export const GlobalStyles = createGlobalStyle<{ theme: ThemeType }>`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@400;500&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    overflow-x: hidden;
    transition: background-color 0.3s ease;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  /* For Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: ${({ theme }) => theme.secondary} ${({ theme }) => theme.background};
  }

  /* For Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 8px;
  }

  *::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.background};
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.secondary};
    border-radius: 20px;
    border: 2px solid ${({ theme }) => theme.background};
  }
`; 