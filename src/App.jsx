import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';

import theme from './styles/theme';
import ProjectRouter from './router/Router';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <ProjectRouter />
      </div>
    </ThemeProvider>
  );
}

export default App;
