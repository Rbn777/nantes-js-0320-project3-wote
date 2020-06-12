import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import ProjectRouter from './router/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <ProjectRouter />
      </ThemeProvider>
    </>
  );
}

export default App;
